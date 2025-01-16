jsonp安全防范

jsonp是以callback的形式，返回服务端的数据 如http://www.qq.com/getUserInfo?callback=action

1）白名单验证
通过请求头上的Referer或origin字段可以判断请求来源，如果服务器判断请求域名不在白名单，就拒绝对应请求。

2）对返回的内容进行验证或转义
根据jsonp的原理，当拿到callback参数后，会直接当js代码执行。如果callback后面的参数是script标签，就会变成xss攻击，所以要对返回的内容进行转义并限制长度，防范类似攻击。

例如http://youdomain.com?callback=<script>alert(1)</script>
前端也需要了解的 JSONP 安全

作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
