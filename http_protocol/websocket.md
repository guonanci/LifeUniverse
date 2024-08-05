WebSocket是HTML5提供的一种浏览器与服务器进行全双工通讯的网络技术，属于应用层协议，WebSocket没有跨域限制。

相比于接口轮询，需要不断的建立 http 连接，严重浪费了服务器端和客户端的资源。WebSocket基于TCP传输协议，并复用HTTP的握手通道。浏览器和服务器只需要建立一次http连接，两者之间就可以直接创建持久性连接，并进行双向数据传输。

缺点
websocket 不稳定，要建立心跳检测机制，如果断开，自动连接。


作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


手摸手教你使用WebSocket[其实WebSocket也不难]：https://juejin.cn/post/6844903698498322439
socket 及 websocket的握手过程



# isTrusted:false

在浏览器环境中，Event 对象通常具有一个 isTrusted 属性，它表示该事件是否是由用户行为产生的，或者是否是由浏览器直接触发的。对于 isTrusted 为 false 的事件，这通常意味着事件是由脚本或代码生成的，而不是由用户直接交互（如点击、按键等）或浏览器自身（如页面加载、滚动等）触发的。

对于 WebSocket 消息（即 message 事件），isTrusted 属性通常不直接相关，因为 WebSocket 消息总是由服务器发送并通过 WebSocket 连接传递到客户端的。然而，如果你在监听 message 事件时遇到了 isTrusted 为 false 的情况，这可能是由于某种不常见的实现细节或者可能是某个事件包装或转发的结果。

不过，在标准的 WebSocket API 中，message 事件的 isTrusted 属性应该是不被定义的，因为 WebSocket 消息不区分用户生成还是脚本生成。如果你确实在 message 事件中看到了 isTrusted 属性，并且它的值为 false，那么这可能是由以下几个原因造成的：

自定义事件或包装器：你的代码或某个库可能创建了一个自定义的 message 事件或使用了一个包装器来传递 WebSocket 消息，这个包装器可能添加了 isTrusted 属性。
浏览器扩展或插件：浏览器扩展或插件可能会修改或拦截 WebSocket 消息，并在过程中添加了 isTrusted 属性。
调试工具或代理：如果你在使用 WebSocket 调试工具或代理服务器，它们可能会修改或包装 WebSocket 消息，导致 isTrusted 属性的出现。
错误的实现：某个库或框架可能错误地实现了 WebSocket API，并错误地添加了 isTrusted 属性。
浏览器内部实现：尽管不太可能，但也有可能是浏览器内部实现的一个特殊情况或错误。
为了解决这个问题，你可以尝试以下步骤：

检查代码：确保你的代码中没有创建或修改 message 事件的 isTrusted 属性。
检查库和框架：如果你在使用 WebSocket 相关的库或框架，请查阅它们的文档或源代码，看看是否有关于 isTrusted 属性的任何说明。
禁用扩展和插件：尝试在禁用所有浏览器扩展和插件的情况下运行你的应用，看看问题是否仍然存在。
使用原生 WebSocket API：如果你正在使用某个库或框架来处理 WebSocket，尝试直接使用浏览器的原生 WebSocket API 来接收消息，看看是否还会出现 isTrusted 属性。
报告问题：如果你确定这是一个浏览器或库/框架的错误，请考虑向相关的开发者报告这个问题。


# 用setInterval来测试websocket消息的发送与接收
