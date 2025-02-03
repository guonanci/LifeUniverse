#从我2015.6接触前端到现在2017.1.23已经有1年半了，还是对 HTML FORM 表单不是很熟悉，上次宏瑞简简单单的质问了我有关 form 表单的事情，我没能回答上来，今天没有什么工作上的事情，好好研究一下：
    form 表单用来处理服务器和浏览器之间的数据发送，看似简单，却有许许多多的细节用来确保服务器浏览器双方数据交互的安全性。

[我从 mdn 上面找了找](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data)，讲得还行，待会再讲几篇有关 form 表单的文章。

- 浏览器端，action 和 method定义了怎么发送数据；
- 服务器端，以 raw PHP，raw Python 阐释了怎么检索到浏览器发送过来的数据；
- 发送文件：enctype 属性，不过发送文件用的比较多的是 input readFile API 。
- 安全性缺陷，XSS,CSRF;SQL 注入；http header 注入和email 注入
- 还有就是尽可能考虑到用户可能做出的一切反常行为。


首先，浏览器（客户端大部分情况下是浏览器的形式）和服务器（apache，nginx，iis，tomcat，etc。）之间都必须使用 http(s) 协议，简单的讲，form 表单是一种配置 http 请求发送数据到服务器的友好方式，让用户能够通过 http 传送数据到服务器。

##在浏览器端，form 标签定义了数据怎么被发送，所有的属性（action，method）的目的是当提交按钮点击事件发生时，所有属性一起‘默默得配合起来’来发送http请求。

- action 属性

定义了data 要发送的合法 URL，如果form 标签没有 action 属性，那么将会发送到本页面 URL。在 HTML5 之前，没有 action 属性，所有的数据都被发送到本页面 URL。


- method 属性

定义了数据如何被发送，至少支持 get 和 post 方式；

- get 方法是浏览器向服务器请求指定的资源。请求体在这个时候是空的，所以发送到服务器的数据是加到 URL 后面的，


```
<form action="http://foo.com" method="get">
    <input name="say" value="Hi">
    <input name="to" value="Mom">
    <button>Send my greetings</button>
</form>
```
GET /?say=Hi&to=Mom HTTP/1.1
Host: foo.com

- post 方法

samely，

```
<form action="http://foo.com" method="post">
    <input name="say" value="Hi">
    <input name="to" value="Mom">
    <button>Send my greetings</button>
</form>
```
 POST / HTTP/1.1
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom

Content-Length header 表明 body 长度，Content-Type header 表明发送到服务器的资源类型。

如果要发送隐私数据，永远不要用 get 方法；
要发送大量数据的话，post 方法更好些，因为一些浏览器限制了 URL 的尺寸，许多服务器也会限制他们所能接受的 URL 大小。

##服务器端，检索数据

无论你选择了哪种 http 方法，服务器都会检索一个将要被解析成键值对数据的字符串。你获得

## 用表单发送文件
文件是一个 HTML 表单的特例，他们是二进制数据，几乎所有的其他数据是文本数据（图片base64也是二进制数据），因为 http 是一个文本协议，处理的话有特殊要求。 enctype 属性和 Content-Type http-header 有对应关系，Content-Type 告诉了服务器将要发送的数据类型，默认是 application/x-www-form-urlencoded,表单数据编码成了 URL 表单形式。

如果想要用表单发送文件，需要做两件事请：

- method 设置为 post（文件内容无法放入 URL 参数）
- enctype 设置为 multipart/form-data（数据将会被切成多个部分）


```
<form method="post" enctype="multipart/form-data">
    <input type="file" name="myFile">
    <button>Send the file</button>
</form>
```
一些浏览器支持 input 标签上的multiple 属性，目的是仅仅用一个 input 标签来发送多个文件，服务器怎么处理这些文件的话，要看服务器技术，用框架会更省事。

许多服务器配置了，文件大小、和http请求大小的限制。

## 安全

HTML 表单是攻击服务器的第一渠道，问题在于服务器处理数据，而不在于表单自身。

### 类型

Cross-Site Scripting(CSS) and Cross-Site Request Forgery(CSRF) -- 用户 A -- 服务器 -- 用户 A 或 B



























































