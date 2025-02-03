options请求通常用于，在跨域请求前发起预检请求，以检测请求是否被服务器接受。跨域请求中有简单请求和预检请求，符合以下条件可视为简单请求：

method：get post head
content-type：text/plain mutipart/form-data application/x-www-form-urlencode
请求头只能包含：Accept，Accpet-Language,content-Language,Content-Type, DPR, Downlink Save-Data, Viewport-Width

*除去简单请求外，其他请求就会先触发预检请求。比如使用content-type为application/xml,text/html的post请求；设置自定义头，X-JSON,X-MENGXIANHUI*

预检请求返回的头部报文中有，可接受的请求来源
Access-Control-Allow-Origin，
Access-Control-Request-Metthod:实际请求所使用的http方法，
Acc-Con-Request-Headers：实际请求所携带的自定义首部字段。

客户端基于从预检请求返回的信息来判断，是否继续执行跨域请求

跨域请求若想发送cookie信息，需要服务端设置resp.setHeader('Acc-Con-Allow-Credentials', 'true') 客户端设置withCredentials: true

Common Request Headers: Accept浏览器接受的格式，Accept-Encoding,Accept-Language,Cache-Control,Connection,Host,If-Modified-Since,If-None-Match,User-Agent,Cookie客户端存储的字符串，Response Headers: Cache-Control:缓存控制，用于通知各级缓存保存的时间，max-age=0，表示不要缓存；

Connection连接类型，Keep-Alive复用连接，Content-Encoding通常是gzip, Content-Length有利于浏览器判断内容是否已结束；Content-Type;Date;ETag页面的信息摘要，用于判断是否需要重新到服务端取回页面；

Expires，Keep-Alive：保持连接不断时需要的一些信息，如timeout=5，max=100；Last-Modified，Server服务端软件类型；Set-Cookie可以存在多个，设置cookie，Via服务端的请求链路，对一些调试场景至关重要的一个头。

Content-Type:application/json,Content-Type:application/x-www-form-urlencoded:& 将key=v进行拼pin接，jQuery默认使用这个，multipart/form-data：文件上传
