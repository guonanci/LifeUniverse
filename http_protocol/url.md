https://zhuanlan.zhihu.com/p/133906695

https://mp.weixin.qq.com/s?__biz=MzAxMjc2MDgxMA==&mid=403774883&idx=1&sn=34752e41bffce5a542e1d6d5c1c83bca&scene=1&srcid=0920ST1BYJJG1r3sPpj4h9yx#rd

[解析一个正确的 URL](https://juejin.cn/post/6844903576662179847)


# 从输入URL到页面加载发生了什么？

1）*浏览器查找当前URL是否存在缓存，并比较缓存是否过期*。（先判断HTTP请求浏览器是否已缓存）

有缓存时，如果是*强缓存*，就通过Expires或Cache-Control：max-age判断是否过期，未过期就直接使用该资源；如果Expires和max-age同时存在，则Cache-Control的max-age优先级更高。

如果是*协商缓存*，请求头部携带相关信息，如与Etag对应的if-none-match、以及与last-modified对应的if-modified-since，就验证缓存是否有效。若有效则返回状态码304，若无效则重新返回资源，状态码200。

2）*DNS解析URL对应的IP*（DNS解析流程见下文）

3）*根据IP建立TCP三次握手的连接*（握手过程见下文）

4）*HTTP发起请求*
5）*服务器处理请求，浏览器接收HTTP响应*
6）*渲染页面，构建DOM树*

①HTML解析，生成DOM树
②CSS解析，生成CSS 树
③结合 DOM 树和 CSS 规则树，生成渲染树
④根据渲染树计算每一个节点的信息，用于layout布局
⑤根据计算好的信息绘制页面

如果遇到 script 标签，则判断是否含有 defer 或 async 属性，如果有就异步下载该资源；如果没有就暂停dom解析，去加载script资源，然后执行js代码，script标签的加载和js执行会阻塞页面的渲染。

7）*四次挥手，关闭TCP连接*（挥手过程见下文）

从输入url到页面加载完成发生了什么详解:https://link.juejin.cn/?target=https%3A%2F%2Fwww.cnblogs.com%2Fliutianzeng%2Fp%2F10456865.html
在浏览器输入 URL 回车之后发生了什么（超详细版）:https://juejin.cn/post/6844903922084085773

作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# 从URL获取参数并转为对象

第三方的qs包实现，
```js
const getParameters=URL=>JSON.parse(`{"${decodeURI(URL.split('?')[1]).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')}"}`)

getParameters('https://www.google.com.hk/search?q=j+md&newwindow=1') // {q: 'js+md',newwindow:'1'}
```
