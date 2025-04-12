# 长连接聊天的消息系统
vue2的应用，common/websocket.js里面的functions可以给不同页面的vue实例，给实例赋值functions里请求来的结果，这样就能让页面响应式变化出请求来的数据。

WebSocket是HTML5提供的一种浏览器与服务器进行全双工通讯的网络技术，属于应用层协议，WebSocket没有跨域限制。

相比于接口轮询，需要不断的建立 http 连接，严重浪费了服务器端和客户端的资源。WebSocket基于TCP传输协议，并复用HTTP的握手通道。浏览器和服务器只需要建立一次http连接，两者之间就可以直接创建持久性连接，并进行双向数据传输。

缺点
websocket 不稳定，要建立心跳检测机制，如果断开，自动连接。

作者：海阔_天空
链接：<https://juejin.cn/post/7146996646394462239>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

手摸手教你使用WebSocket[其实WebSocket也不难]：<https://juejin.cn/post/6844903698498322439>
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

# 1006-message:null isTrusted:false

<https://github.com/websockets/ws/issues/1598>
Ok, so in my case was in nginx config. I am proxying websocket, so ddefault nginx 60 seconds timeout was fired. You need to add this to fix the issue (for example for 6000 seconds):

proxy_read_timeout 6000;
proxy_send_timeout 6000;

WebSocket有4种消息类型，BinaryMessage，PingMessage，PongMessage，TextMessage

websocket isTrusted false报错
报错："websocket isTrusted false" 通常表示尝试建立的 WebSocket 连接没有通过同源策略（Same-origin policy）的验证，因此被浏览器拒绝。

解释：

isTrusted 属性是一个只读属性，返回一个布尔值，表示事件是否是由用户行为引起的。在这个上下文中，如果 isTrusted 返回 false，通常意味着事件不是由用户直接触发的，可能是由脚本或其他行为生成的。当 WebSocket 服务器和客户端页面不是同源时（即协议、域名、端口任一不同），由于浏览器的同源策略限制，任何非同源的 WebSocket 握手都会被拦截。

解决方法：

确保 WebSocket 服务器和客户端页面有相同的协议（通常是 ws 用于非加密连接或 wss 用于加密连接）。

确保 WebSocket 服务器和客户端页面有相同的域名。

确保 WebSocket 服务器和客户端页面有相同的端口（如果有一个指定的端口）。

如果控制服务器不方便修改，可以考虑使用 CORS（Cross-Origin Resource Sharing）来允许跨源 WebSocket 连接。

如果是在开发环境中遇到这个问题，可以考虑使用本地或者开发服务器来避免同源策略限制。

在实施解决方案时，请确保遵守安全最佳实践，不要轻易禁用同源策略，否则会增加跨站脚本攻击（XSS）的风险。

# http无法建立多个websocket连接吗?

HTTP 协议本身并没有限制 WebSocket 连接的数量。你可以建立多个 WebSocket 连接，前提是以下几个方面能够正确配置：

### 1. **浏览器限制**

- **浏览器并发限制**：大多数现代浏览器允许每个域名同时打开多个 WebSocket 连接。一般来说，这个限制会根据浏览器的实现和版本有所不同，但通常每个域名的 WebSocket 连接数是有限制的（通常是 6 到 10 个并发连接）。
- **限制的原因**：这是为了避免浏览器占用过多的资源（尤其是内存和 CPU）。如果你尝试在同一域名下建立更多的 WebSocket 连接，浏览器可能会拒绝建立新的连接。

   **解决方案**：

- 如果你确实需要同时与多个 WebSocket 服务通信，可以考虑将不同的 WebSocket 连接分布到不同的子域名或端口上。例如，通过不同的子域名（`ws1.example.com`, `ws2.example.com`）来绕过浏览器的并发连接限制。

### 2. **服务器端限制**

- **服务器并发连接数**：WebSocket 连接会占用服务器的资源（尤其是内存和文件描述符）。如果服务器的资源不足，可能无法处理大量的并发 WebSocket 连接，导致连接失败。
- **HTTP 请求数量**：如果在一个 HTTP 请求中尝试建立多个 WebSocket 连接，HTTP 协议本身并不支持在同一个连接中建立多个 WebSocket 连接。因此，你需要为每个 WebSocket 连接单独打开一个 HTTP 请求并进行 WebSocket 握手。

   **解决方案**：

- 确保 WebSocket 服务器有足够的资源来处理多个并发连接。可以优化服务器代码来提高其并发能力，或者增加更多的服务器实例来分担负载。
- 使用负载均衡器来分配 WebSocket 连接到多个服务器。

### 3. **跨域问题**

- **跨域 WebSocket 连接**：如果你想从不同的域名或端口建立多个 WebSocket 连接，浏览器可能会受到跨域策略的限制。尤其是在 `ws://` 或 `wss://` 协议下，服务器需要正确设置 CORS（跨域资源共享）头部来允许跨域 WebSocket 连接。

   **解决方案**：

- 在 WebSocket 服务器上配置正确的 CORS 头部，使其允许来自不同源的 WebSocket 连接。

### 4. **连接管理问题**

- **连接数过多导致性能下降**：如果你的应用需要同时管理大量的 WebSocket 连接，可能会遇到性能瓶颈。WebSocket 连接是持久的，且每个连接都需要客户端和服务器双方保持状态。
- **解决方案**：
  - 确保连接的生命周期管理得当，不再使用的连接应当关闭。
  - 对于一些需要处理大量连接的应用，可能需要使用集群化或分布式架构来处理 WebSocket 连接。

### 5. **代理和防火墙问题**

- **代理服务器**：某些代理服务器（特别是在企业网络中）可能会限制同时打开的 WebSocket 连接数。它们可能会导致连接失败或建立延迟。
- **防火墙**：防火墙也可能会限制 WebSocket 的并发连接数，特别是在 WebSocket 使用非标准端口时。

   **解决方案**：

- 检查代理服务器和防火墙配置，确保 WebSocket 连接能够顺利通过。

### 总结

- **可以建立多个 WebSocket 连接**，但浏览器和服务器都可能会对连接数量有所限制。
- **解决方案**：
  - 确保服务器能够处理多个并发连接。
  - 如果遇到浏览器限制，考虑使用不同的子域名或端口。
  - 确保跨域 WebSocket 连接配置正确，尤其是 CORS 问题。
  - 对于需要大量 WebSocket 连接的场景，考虑使用负载均衡和集群架构。

如果你的问题是由于浏览器、服务器或其他配置方面的原因导致无法建立多个 WebSocket 连接，进一步排查和优化这些配置应该能够解决问题。如果有更具体的错误信息或代码，可以帮助更好地诊断。

# websocket断连

WebSocket 断连问题可能由多种原因引起，以下是一些常见的解决方法：

### 1. **网络问题**

- **检查网络连接**：确保客户端和服务器的网络连接稳定。
- **重连机制**：在客户端实现自动重连机制，当检测到连接断开时，尝试重新连接。

### 2. **服务器问题**

- **服务器负载**：检查服务器负载，确保服务器有足够的资源处理连接。
- **服务器配置**：调整服务器的WebSocket配置，如超时时间、最大连接数等。

### 3. **客户端问题**

- **心跳机制**：实现心跳机制，定期发送心跳包以保持连接活跃。
- **错误处理**：在客户端捕获和处理WebSocket错误，记录日志以便排查问题。

### 4. **防火墙和代理**

- **防火墙配置**：确保防火墙允许WebSocket通信。
- **代理设置**：如果使用代理服务器，确保代理支持WebSocket协议。

### 5. **代码实现**

- **重连逻辑**：在代码中实现重连逻辑，例如：

     ```javascript
     let ws = new WebSocket('ws://yourserver.com');

     ws.onclose = function() {
         console.log('Connection closed, attempting to reconnect...');
         setTimeout(function() {
             ws = new WebSocket('ws://yourserver.com');
         }, 5000); // 5秒后重连
     };
     ```

- **心跳包**：定期发送心跳包以保持连接：

     ```javascript
     setInterval(function() {
         if (ws.readyState === WebSocket.OPEN) {
             ws.send('heartbeat');
         }
     }, 30000); // 每30秒发送一次心跳包
     ```

### 6. **调试和日志**

- **日志记录**：在客户端和服务器端记录详细的日志，帮助排查问题。
- **调试工具**：使用浏览器开发者工具或网络抓包工具（如Wireshark）分析WebSocket通信。

### 7. **协议和版本**

- **协议兼容性**：确保客户端和服务器使用的WebSocket协议版本兼容。
- **TLS/SSL**：如果使用安全的WebSocket（wss://），确保证书有效且配置正确。

### 8. **资源限制**

- **文件描述符限制**：在服务器端检查文件描述符限制，确保有足够的资源处理连接。
- **内存和CPU**：监控服务器内存和CPU使用情况，避免资源耗尽导致连接断开。

通过以上方法，可以有效减少WebSocket断连问题。如果问题仍然存在，建议进一步分析具体原因并进行针对性优化。
