以前写代码的时候碰到过 URL 解码的问题，当时是和海磊碰一个 bug，当时我是刚到 o2o 事业部，或者还在流量变现部做一些 Apollo 的项目吧（应该是，因为我看我们部门的前两周周报里面的需求应该是没有这种需求的。。。看着都不太像，起码勾不起回忆），不记得需求内容还有解决日期，但是我清楚地记得海磊一副很有经验的样子，说你这些 URL 参数没编码，当时海磊还不认识我，我等了他一会儿，等他回来，看了看就去搞其他问题去了。。。所以跳转不了，没起作用，我靠大神往往有些问题一看就知道关键点在哪里。。。记得之前还碰到过其他的问题，当时我还对比了其他人的代码，为什么所有人都用 encodeURIComponent 呀，还有为什么不对整个 URL 编码，我当时有点想法，但是还不太确定，所以我想懂地更彻底一些。。。

今天讲的应该说比较基础，比较简单，大家应该都懂得比我多，今天我只是做个梳理，自己以后在这方面心里更有底。

#[url 的三个 js 编码函数 escape(), encodeURI(),encodseURIComponent()简介](http://www.haorooms.com/post/js_escape_encodeURIComponent)。浏览器 URL 地址有中文或者浏览器URL 参数操作肥瘦，经常会用到 encodeURIComponent, decodeURIComponent, encodeURI

[关于浏览器参数操作有一篇文章](http://www.haorooms.com/post/js_url_canshu),,,


#为什么会有浏览器编码这一说法:

一般来说，URL 只能使用英文字母，阿拉伯数字和某些标点符号，不能使用其他文字和符号（网络标准 RFC 1738做了硬性规定）。。。只有字母数字[0-9a-zA-Z]，一些特殊符号$-_.+!*'(),以及某些保留字（。。。什么鬼）才可以不经过编码直接用于 URL。如果 URL 中有汉子，就必须编码后使用。但是 RFC1738 没有规定具体的编码方法，交给浏览器自己决定。所以说 URL 编码特别混乱。

#出现浏览器编码的几种情况

1. 网络路径中包含汉字，eg，虽然 URL 地址栏看到的是 ‘您好’，实际上你去查看 devTools-network-headers-Request URL 或者把地址栏敲入回车后的有效 URL 复制出来你就会发现实际上

2. 查询字符串（Google，baidu） 查询参数值是汉字的话也会被编码

3. get 方法生成的 URL 包含汉字，前面说的是直接输入网址的情况，但是用 get，post 方法发出 http 请求更常见。这个时候的编码方法是可以设定的：HTML的meta 标签你想起来了没：

`<meta http-equiv="Content-Type" content="text/html;charset=xxx"`

百度是 GB2312 编码，Google 是 UTF-8 编码。从他们的搜索框中搜索春节，会有惊喜哦。。。结果我发现都是 UTF-8编码，这篇文章写于2014年10月12日，今天是2016年12月9日。。。百度用了2年2个多月在这一方面有所进步（我还特此我和同事中英文 mac 系统 chrome上的 Google 和百度进行了对比，确实现在）

https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=%E6%82%A8%E5%A5%BD&rsv_pq=a0f54709000023f8&rsv_t=fb8ffr37H5V8NKB7Zt50axeyFRZS3P%2B3TSFe71qGtCNVKCgAYGgGtNHiddA&rqlang=cn&rsv_enter=1&rsv_sug3=12&rsv_sug1=8&rsv_sug7=100&rsv_sug2=0&inputT=3177&rsv_sug4=3177

https://www.google.com.sg/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=%E6%82%A8%E5%A5%BD

moreTools-encode-Auto Detect && UTF-8   不过这个 Auto Detect 也是 meta决定的。

get 和 post 方法的编码，用的就是网页的编码。

4. ajax 调用的 URL 包含汉字

前面3种情况都是由浏览器发出 http 请求，最后一种情况则是由 js 生成 http 请求，也就是 ajax 调用。IE 总是采用 GB2312编码（操作系统默认编码），Firefox 总是采用 utf-8编码。

5. escape

js 编码函数中最古老的一个，虽然这个函数现在已经不提倡使用了，但是由于历史原因，很多地方还在使用它，所以有必要先从它讲起。

escape()不能直接用于 URL 编码，他的真正作用是返回一个字符的 unicode 编码值，在 unicode 字符集中，春是第6625个字符（十六进制），节是第8282个字符。
```
javascript:escape('春节'); // "%6625%8282"
javascript:escape('hello world'); // "hello%20world"

无论网页原始编码是什么，一旦被 js 编码，就都变为 unicode 字符，也就是说，js 函数的输出默认都是 unicode 字符：

`javascript:escape('\u6625\u8282');`
// output '%u6625%u8282'
`javascript:unescape('%u6625%u8282');`
// output 春节
`javascript:unescape('\u6625\u8282');`
// output 春节

但是 escape 不对 + 编码，但是我们知道网页在提交表单的时候，如果有空格，则会被转化为 + 字符，服务器处理数据的时候，会把 + 号处理成空格（大多数默认如此吧，是为了方便后端查询及其他操作吧，比如说 Google 的时候查询字符串之间也是空格的话也如此），所以是用的时候要小心，这也是 escape 的一大缺陷。。。我已经在 RepCon.js 当中验证过了。。。

6. encodeURI

着眼于对整个 URL 进行编码，除了常见的符号外，对其他一些在网址中有特殊含义的符号;/?:@=+,#也不进行编码（诶，RFC1738说对 URL 来说 +不是不需要编码嘛。。。），编码后，输出符号的 utf-8形式，并且在每个字节前加上%
`console.log(encodeURI('http://www.haorooms.com/app.cgi?arg1=1&arg2=hello world')); http://www.haorooms.com/app.cgi?arg1=1&arg2=hello%20world`

`console.log(encodeURI('春节')); %E6%98%A5%E8%E8%8A%82`

对应的解码函数是你有没有发现，decodeURI可以解码utf-8也可以解码 unicode 字符串，注意到对于 unescape 方法而言，unicode 16进制字符串即能以 \ 开头，也能以 % 开头，对于 decodeURI 方法而言，只能以\开头。（\u 开头的字符串是最标准的 unicode 写法，所以可以用 escape 方法把 %uxxx 编码成 \uxxx）.

需要注意的是不对单引号进行编码。

7. encodeURIComponent

与encodeURI 区别的是，他用于对 URL 的组成部分进行个别编码，不用于对整个 URL 进行编码。因此; / ? : @ & = + $ , # 这些不被 encodeURI 编码的符号，在此可以。
encodeURIComponent 相比 encodeURI 要更加彻底。

##上述总结：

escape 不能直接用于 URL 编码，他的真正作用是返回一个字符的 unicode 编码值，不对 + 编码，主要用于汉字编码，现在已经不提倡使用。

escapeURI 是 js 中真正用来对 URL 编码的函数，编码整个 URL 地址，但是对特殊含义的符号; / ? : @ & = + $ , #也不进行编码，对应的解码函数是：decodeURI.

世界上有英文字母的网址，但是没有希腊字母的网址。

发现现在Google 每个搜索结果都是点击打开新标签了，原来是公司翻墙切换到了香港那边，不再是新加坡，谷歌的一些搜索设置好像变了，默认语言也切换成简中了。


如果把“易语言”用UTF-8编码转换后是这样%E6%98%93%E8%AF%AD%E8%A8%80，每三个%内容为一个汉字，这个编码在浏览器显示中文

如果把“易语言”用gb2312编码转换后是%D2%D7%D3%EF%D1%D4，每两个%号的内容为一个汉字

请问老师们如何把汉字转成gb2312编码，这样可以在浏览器打开就不是中文了，麻烦给一个成品代码，我直接套用就可以了，万分感谢！

[突然发现 阮一峰在2010年写了一篇文章--‘关于 URL 编码’，刚刚说的这篇2014年的文章几乎完全抄袭于它](http://www.ruanyifeng.com/blog/2010/02/url_encoding.html)
[掘金上的一篇文章应该说比前面的两篇文章都要好一些](https://gold.xitu.io/post/5835836361ff4b0061f38a5d),统一资源标识符，叫做 URI，是用来标识互联网上的资源（网页或文件）和怎样访问这些资源的传输协议（http 或者 ftp）的字符串。除了 encodeURI,encodeURIComponent, decodeURI,decodeURIComponent 四个用来编码和解码 URI 的函数之外，ES 本身不提供任何使用 URL 的支持。......这篇文章是滴滴出行的水乙（之前在博客园发了几篇基础文，都是基础系列，总结了一些 js 容易混淆的知识点，现在拿来掘金分享）
URI 的组成形式：
是由组件分隔符分隔的组件序列，一般形式为：
`Scheme:First/Second;Third?Fourth`
Scheme First Second Third Fourth 代表组件 : / ; ?是当做分隔符的保留字符

##区别
encodeURI 和 decodeURI 操作对象是完整的 URI；这两函数假定 URI 中的任何保留字都有特殊含义，所以不会编码它们。

encodeURI 和 decodeURI 操作的是完整 URI，这两函数假定 URI 中的任何保留字都有特殊含义，不会编码他们。

encodeURIComponent 和 de。。。操作的是组成 URI 的个别组件；这两函数假定任何保留字符都代表普通文本，所以必须编码它们，所以他们（保留字符）出现在一个完整 URI 组件里面时不会被解释成保留字符了。

我靠，是不是有点难懂，同感呀。

现在我用白话文解释一下：

##图解四个函数的不同

ECMA 对这四个函数做了详细解释，可能是为了写的更逻辑化一些，采用了类似变量配合逻辑的写法来说明:
四个方法如何操作以下五种类型的字符：
一个 URI 可能包含以下五种类型的字符：

1. 保留字符 uriReserved
`;/?:@&=+$,`

2. 非转义字符 uriUnescaped
a。字母（52个）
b。十进制数字（10个）
c。uri 标记符（8个） -_.!~*'()  这不是9个嘛。。。

3. #
不会被编码为一个转义序列，即使它不是 URI 保留字符或者非转义字符

4. 其他字符
没在上面列出的字符

5. 被转义字符 uriEscaped
% HexDigit HexDigit
HexDigit 是一个十六进制字符，因此被转义字符的形式为： %xx
5 又分为两类：
5.1 1 2 3前3种字符转义后的字符
5.2 4 第四种，转义后的字符

uri1
`https://www.baidu.com/?uriReserved=@+&#hash^^`
   2   1       2              2      1 3  2  4

encodeURI(uri1)
`https://www.baidu.com/?uriReserved=@+&#hash%5E%5E`
encodeURIComponent(uri1)
`https%3A%2F%2Fwww.baidu.com%2F%3FuriReserved%3D%40%2B%26%23hash%5E%5E`

uri2
`https%3A%2F%2Fwww.baidu.com%2F%3FuriReserved%3D%40%2B%26%23hash%5E%5E`
   2    5.1           2       5.1      2           5.1       2    5.2
decodeURI(uri2)
`https%3A$2F%2Fwww.baidu.com%2F%3FuriReserved%3D%40%2B%26%23hash^^`
decodeURIComponent(uri2)
`https://www.baidu.com/?uriReserved=@+&#hash^^`

当 URI 里包含一个没在上面列出的字符（比如说中文）或者有时不想让给定的保留字符有特殊意义，那么必须编码这个字符。字符被转换成 utf-8编码，首先从 utf-16转换成相应的代码点值的替代，然后返回的字节序列转换为一个字符串，每个字节用一个 %xx 形式的转义序列表示。具体转换规则可以参考 [抽象操作 encode 和 decode 的说明](https://www.w3.org/html/ig/zh/wiki/ES5/%E6%A0%87%E5%87%86_ECMAScript_%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1#x15.1.3.1),（ES 代码运行时会有一些可用的内置对象，一时作为执行程序词法环境的一部分的）。

编码这一块，unicode 是 \u 或者 %u 开头，URL 编码之后的每个字符以%开头。。。有所区别



[这篇文章也还行](http://www.cnblogs.com/qiantuwuliang/archive/2009/07/19/1526687.html)

1 escape()函数

定义和用法
escape() 函数可对字符串进行编码，这样就可以在所有的计算机上读取该字符串。

语法
escape(string)

参数  描述
string  必需。要被转义或编码的字符串。

返回值
已编码的 string 的副本。其中某些字符被替换成了十六进制的转义序列。

说明
该方法不会对 ASCII 字母和数字进行编码，也不会对下面这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。其他所有的字符都会被转义序列替换。




2 encodeURI()函数
定义和用法
encodeURI() 函数可把字符串作为 URI 进行编码。

语法
encodeURI(URIstring)

参数  描述
URIstring  必需。一个字符串，含有 URI 或其他要编码的文本。

返回值
URIstring 的副本，其中的某些字符将被十六进制的转义序列进行替换。

说明
该方法不会对 ASCII 字母和数字进行编码，也不会对这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。

该方法的目的是对 URI 进行完整的编码，因此对以下在 URI 中具有特殊含义的 ASCII 标点符号，encodeURI() 函数是不会进行转义的：;/?:@&=+$,#




3 encodeURIComponent() 函数

定义和用法
encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。

语法
encodeURIComponent(URIstring)

参数  描述
URIstring  必需。一个字符串，含有 URI 组件或其他要编码的文本。

返回值
URIstring 的副本，其中的某些字符将被十六进制的转义序列进行替换。

说明
该方法不会对 ASCII 字母和数字进行编码，也不会对这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。

其他字符（比如 ：;/?:@&=+$,# 这些用于分隔 URI 组件的标点符号），都是由一个或多个十六进制的转义序列替换的。

提示和注释
提示：请注意 encodeURIComponent() 函数 与 encodeURI() 函数的区别之处，前者假定它的参数是 URI 的一部分（比如协议、主机名、路径或查询字符串）。因此 encodeURIComponent() 函数将转义用于分隔 URI 各个部分的标点符号。



4 总结：

 通过对三个函数的分析，我们可以知道：escape()除了 ASCII 字母、数字和特定的符号外，对传进来的字符串全部进行转义编码，因此如果想对URL编码，最好不要使用此方法。而encodeURI() 用于编码整个URI,因为URI中的合法字符都不会被编码转换。encodeURIComponent方法在编码单个URIComponent（指请求参数）应当是最常用的，它可以讲参数中的中文、特殊字符进行转义，而不会影响整个URL。