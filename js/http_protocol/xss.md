XSS(跨站脚本攻击)
XSS攻击介绍：  攻击者通过在页面注入恶意脚本，使之在用户的浏览器上运行
攻击案例：
<div><script>alert('XSS')</script></div>
<a href="javascript:alert('XSS')">123456</a>
<a onclick='alert("xss攻击")'>链接</a>

XSS 攻击的几种方式
1）常见于带有用户提交数据的网站功能，如填写基本信息、论坛发帖、商品评论等；在可输入内容的地方提交如<script>alert('XSS')</script>之类的代码
XSS 的恶意代码存在数据库里，浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。

2）用户点击http://xxx/search?keyword="><script>alert('XSS');</script>，前端直接从url中将keyword后的参数取出来，并显示到页面上，但是没有做转义，就造成了XSS攻击。

XSS攻击的防范
1）前端尽量对用户输入内容长度控制、输入内容限制（比如电话号码、邮箱、包括特殊字符的限制）
2）服务器对前端提交的内容做好必要的转义，避免将恶意代码存储到数据库中，造成存储性xss攻击
3）前端对服务器返回的数据做好必要的转义，保证显示到页面的内容正常
vue中如何防止XSS攻击
1）vue中使用{{}}模板渲染数据或通过v-bind给元素绑定属性时，都已将内容转义，防止xss攻击。
```js

// 案例
<h1>{{string}}</h1>
string = '<script>alert("hi")</script>'`
// 被转义成为如下 &lt;script&gt;alert(&quot;hi&quot;)&lt;/script&gt;
```

2）尽量避免使用v-html，如果必须使用，可以使用vue-xss插件对文本内容进行转义，该插件可以同时去掉上面绑定的事件

// 案例
```js

`<div v-html="$xss(xss)"></div>`
// p标签正常显示，但上面绑定的事件已被去掉
xss= "<p onclick='console.log(document.cookie)'>123</p>"
```


作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
