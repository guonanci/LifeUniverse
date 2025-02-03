// 从浏览器输入URL按回车到页面显示都发生了什么

// title: 从输入 URL 到页面加载完的过程中都发生了什么事情？

// 说实话这个问题看似简单, 实际上相当复杂, 互联网怎么给用户提供服务的远离都涉及到了...

// URL
// 首先咱们把 URL 这个关键词弄清楚.

// URL 主要组成部分: 协议, 网络地址, 资源路径...协议是指从计算机获取资源的方式...网络地址是指

// 浏览器根据URL进行DNS查询
// 首先从DNS缓存中查询
// 若未在缓存中找到， 则不停的向上一级级请求DNS服务器

// 取得IP地址， 建立TCP连接
// 构造HTTP请求报
// 添加一些HTTP首部
// 根据同源政策添加cookie

// 在TCP连接上发送HTTP报文， 等待响应
// 服务器处理HTTP请求报文， 返回HTTP响应报文
// 浏览器处理服务器返回的HTTP响应报文， 若为HTML则渲染页面， 不包括脚本的简单渲染流程如下
// 解析DOM、 CSSOM
// 根据DOM、 CSSOM计算render tree
// 根据render tree进行layout， paint， 至此， 用户可以看到页面了


function ajax(options) {
  let method = options.method || 'GET',
    params = options.params,
    data = options.data,
    url = options.url + (params ? '?' +
      Object.keys(params).map(k => k + '=' + params[k]).join('&') : ''),
    async = options.async === false ? false : true,
      success = options.success, headers = options.headers

  let xhr = new XMLHttpRequest()

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) { // readyState 0未初始化-还没有调用send（），1载入-已调用send（），正在发送请求
      // 2载入完成-send（）执行完成，已经接收到全部响应内容，3交互-正在解析响应内容，4完成-响应内容解析完成，可以在客户端调用了
      success && success(xhr.responseText)
    }
  }
  xhr.open(method, url, async)

  if (headers) {
    Object.keys(Headers).forEach(k => xhr.setRequestHeader(k, headers[k]))
  }

  method === 'GET' ? xhr.send() : xhr.send(data)

}



// GET /web/websocket/ HTTP/1.1
// Host: localhost
// Upgrade: websocket
// Connection: Upgrade
// Sec-WebSocket-Key: xqBt3ImNzJbYqRINxEFlag==
// Origin: 8000
// Sec-WebSocket-Version: 13http://localhost

// HTTP/1.1 101 Switching Protocols
// Upgrade: websocket
// Connection: Upgrade
// Sec-WebSocket-Accept: K7DKLdLooIwIG/MOpvWFB3y3FE8=


var ws = new WebSocket('ws://echo.websocket.org')
ws.onopen = function () {
  ws.send('Test')
}
ws.onmessage = function (evt) {
  console.log(evt.data);
  ws.close()
}
ws.onclose = function (evt) {
  console.log('WebSocketClosed!')
}
ws.onerror = function (evt) {
  console.log('WebSocketError!')
}

// http request method, head-method
// head: 类似get请求，只不过返回的响应中没有具体的内容，用户获取报头
// options: 允许客户端查看服务器的性能，比如说服务器支持的请求方式等等



// location.hostname location.host location.search包括?

// navigator.userAgent, navigator.cookieEnabled

// no - cache: 可以在本地进行缓存， 但每次发请求时， 都要向服务器进行验证， 如果服务器允许， 才能使用本地缓存。

// http2采用二进制格式传输， 取代了http1.x的文本格式， 二进制格式解析更高效。 多路复用代替了http1.x的序列和阻塞机制， 所有的相同域名请求都通过同一个
// tcp连接并发完成。 在http1.x中， 并发多个请求需要多个tcp连接， 浏览器为了控制资源

new URL

// hash 持久化


// 谈谈你对http的理解
// http是建立在tcp上的应用层协议，超文本传送协议，是单向的短链接，目前有http1.0，1.1，2.0.1.0：客户端的每次请求都要求建立一次单独的连接，在处理完本次请求后，就自动释放连接。http1.1：可以在一次连接中处理多个请求，并且多个请求可以重叠进行，不需要等待一个请求结束后再发送下一个请求。2.0：可支持多路复用，一个tcp可同时传输多个http请求，头部数据还做了压缩
// TCP
// tcp是传输层协议，特点：三次握手和四次挥手，三次握手的目的是为了防止已经失效报文段突然又传到服务端，而产生错误，所以要建立可靠的连接发送数据
三次握手建立连接过程：
1. 客户端发送位码为syn = 1，随机产生数据包到服务器，服务器由SYN = 1知道客户端要求建立联机（客户端：我要连接你）
2. 服务器收到请求后要确认联机信息，向A发送ack number = （客户端的seq + 1），ack = 1，随机生成数据包（服务器：好的，你来连吧）
3. 客户端收到后检查ack number是否正确，即第一次发送的seq number + 1，以及位码是否为1，若正确，客户端会再发送ack number = 服务器的seq + 1，ack = 1，服务器收到后确认seq值与ack = 1则连接建立成功（客户端：好的， 我来了）

四次挥手断开连接的过程：
1. 客户端发送请求给服务端，申请主动断开连接，进入等待状态，不在王服务端发送数据，但是接收数据（客户端：我要断开链接了）
2. 服务端收到后，告知客户端知道了，服务端进入等待状态，不再接收数据，但是可以继续发送数据（服务端：好，我知道了，但是要等一等）
3. 客户端收到服务端的告知后，进入下一阶段的等待（客户端：好，我等）
4. 服务端完成剩余数据的发送后，告知客户端可以断开了，服务端不接受和读取数据（服务端：你可以断开了）
5. 客户端收到后，告知服务端，已收到，然后释放连接（客户端：好的，我断开连接）
6. 服务端收到后，也释放连接

UDP
传输层的另外一个协议UDP是用户数据报协议，无连接的传输协议
UDP是报文的搬运工，不需要建立完全可靠的连接，不保证数据的可靠性，因为协议控制项比较少，报文头部简单，报文体积小，速度快，实时性更高，比如电话会议，多媒体数据流等场景

https
http报文传输过程中是明文，可以通过抓包的方式看到报文内容，就暴露一个安全问题，易被劫持篡改。https = http + TLS
安全传输层协议，用于在两个通信应用程序之间提供保密性和数据完整性，两层：TLS Record记录协议和TLS握手协议Handshake，利用非对称加密演算来对通信方做身份认证，之后交换对称密钥作为会谈密钥session key，隐私https分为两个阶段
1. 通过非对称加解密确认对方身份是否合法，若合法生成会话密钥（核心）
2. 报文在发送前，先用会话密钥进行对称加密，再传输


