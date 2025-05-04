# request
https://uniapp.dcloud.net.cn/api/request/request.html#request


uni.request(OBJECT)
  request 兼容性
  返回值
    RequestTask 的方法
    abort(): void
uni.configMTLS(OBJECT)


## uni.request(OBJECT)
发起网络请求。

在各个小程序平台运行时，网络相关的 API 在使用前需要配置域名白名单。

### request 兼容性
HarmonyOS
HBuilderX 4.23

### OBJECT 参数说明

参数名	类型	必填	默认值	说明	平台差异说明
url	String	是		开发者服务器接口地址
data	Object/String/ArrayBuffer	否		请求的参数	App 3.3.7 以下不支持 ArrayBuffer 类型
header	Object	否		设置请求的 header，header 中不能设置 Referer	App、H5端会自动带上cookie，且H5端不可手动修改
method	String	否	GET	有效值详见下方说明
timeout	Number	否	60000	超时时间，单位 ms	H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序
dataType	String	否	json	如果设为 json，会对返回的数据进行一次 JSON.parse，非 json 不会进行 JSON.parse
responseType	String	否	text	设置响应的数据类型。合法值：text、arraybuffer	支付宝小程序不支持
sslVerify	Boolean	否	true	验证 ssl 证书	仅App安卓端支持（HBuilderX 2.3.3+），不支持离线打包
withCredentials	Boolean	否	false	跨域请求时是否携带凭证（cookies）	仅H5支持（HBuilderX 2.6.15+）
firstIpv4	Boolean	否	false	DNS解析时优先使用ipv4	仅 App-Android 支持 (HBuilderX 2.8.0+)
enableHttp2	Boolean	否	false	开启 http2	微信小程序
enableQuic	Boolean	否	false	开启 quic	微信小程序
enableCache	Boolean	否	false	开启 cache	微信小程序、抖音小程序 2.31.0+
enableHttpDNS	Boolean	否	false	是否开启 HttpDNS 服务。如开启，需要同时填入 httpDNSServiceId 。 HttpDNS 用法详见 移动解析HttpDNS	微信小程序
httpDNSServiceId	String	否		HttpDNS 服务商 Id。 HttpDNS 用法详见 移动解析HttpDNS	微信小程序
enableChunked	Boolean	否	false	开启 transfer-encoding chunked	微信小程序
forceCellularNetwork	Boolean	否	false	wifi下使用移动网络发送请求	微信小程序
enableCookie	Boolean	否	false	开启后可在headers中编辑cookie	支付宝小程序 10.2.33+
cloudCache	Object/Boolean	否	false	是否开启云加速（详见云加速服务）	百度小程序 3.310.11+
defer	Boolean	否	false	控制当前请求是否延时至首屏内容渲染后发送	百度小程序 3.310.11+
success	Function	否		收到开发者服务器成功返回的回调函数
fail	Function	否		接口调用失败的回调函数
complete	Function	否		接口调用结束的回调函数（调用成功、失败都会执行）
method 有效值

注意：method有效值必须大写，每个平台支持的method有效值不同，详细见下表。

method	App	H5	微信小程序	支付宝小程序	百度小程序	抖音小程序、飞书小程序	快手小程序	京东小程序
GET	√	√	√	√	√	√	√	√
POST	√	√	√	√	√	√	√	√
PUT	√	√	√	x	√	√	x	x
DELETE	√	√	√	x	√	x	x	x
CONNECT	x	√	√	x	x	x	x	x
HEAD	√	√	√	x	√	x	x	x
OPTIONS	√	√	√	x	√	x	x	x
TRACE	x	√	√	x	x	x	x	x
success 返回参数说明

参数	类型	说明
data	Object/String/ArrayBuffer	开发者服务器返回的数据
statusCode	Number	开发者服务器返回的 HTTP 状态码
header	Object	开发者服务器返回的 HTTP Response Header
cookies	Array.<string>	开发者服务器返回的 cookies，格式为字符串数组
返回值
类型
RequestTask
RequestTask 的方法
abort(): void
中断网络请求。

abort 兼容性
HarmonyOS
HBuilderX 4.23
data 数据说明

最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String。转换规则如下：

对于 GET 方法，会将数据转换为 query string。例如 { name: 'name', age: 18 } 转换后的结果是 name=name&age=18。
对于 POST 方法且 header['content-type'] 为 application/json 的数据，会进行 JSON 序列化。
对于 POST 方法且 header['content-type'] 为 application/x-www-form-urlencoded 的数据，会将数据转换为 query string。
