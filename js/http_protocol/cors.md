cors跨域请求
cors是解决跨域问题的常见解决方法，关键是服务器要设置Access-Control-Allow-Origin，控制哪些域名可以共享资源
origin是cors的重要标识，只要是非同源或者POST请求都会带上Origin字段，接口返回后服务器也可以将Access-Control-Allow-Origin设置为请求的Origin，解决cors如何指定多个域名的问题

cors将请求分为简单请求和非简单请求。

简单请求
1）只支持HEAD，get、post请求方式；
2）没有自定义的请求头；
3）Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain

对于简单请求，浏览器直接发出CORS请求。具体来说，就是在头信息之中，增加一个Origin字段。如果浏览器发现这个接口回应的头信息没有包含Access-Control-Allow-Origin字段的话就会报跨域错误

非简单请求的跨域处理
非简单请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求（options）,用来判断当前网页所在的域名是否在服务器的许可名单之中。如果在许可名单中，就会发正式请求；如果不在，就会报跨越错误。

注：新版chrome浏览器看不到OPTIONS预检请求，可以网上查找对应的查看方法。跨域资源共享 CORS 详解:https://link.juejin.cn/?target=http%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2016%2F04%2Fcors.html


作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


1. JSONP
2. CORS（Cross-Origin-Resource-Share，跨域资源共享），由服务端设置响应头通过浏览器的同源策略限制
Access-Control-Allow-Origin: *;
Access-Control-Allow-Methods: *;
Access-Control-Allow-Headers: *;
Access-Control-Allow-Credentials: true;
