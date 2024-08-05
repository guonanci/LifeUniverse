HTTPS 握手过程

https采用非对称加密+对称加密，非对称加密来传递密钥；对称加密来加密内容。

1）客户端使用https的url访问web服务器，要求与服务器建立ssl连接

2）服务器收到客户端请求后, 会传送一份网站证书(包含公钥)给客户端

3）客户端收到网站证书后会检查证书的颁发机构以及过期时间, 如果没有问题就随机产生一个秘钥

4）客户端利用公钥将会话秘钥加密, 并传送给服务端

5）服务端利用自己的私钥解密出会话秘钥，之后服务器与客户端使用秘钥加密传输

加密速度对比
对称加密解密的速度比较快，适合数据比较长时的使用；
非对称加密和解密花费的时间长、速度相对较慢，只适合对少量数据的使用。
（非对称加密：有公钥私钥，公钥加密，私钥解密；对称加密：同一个秘钥进行加密或解密）


作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



# 浏览器如何验证ca证书的有效性
浏览器读取证书中的证书所有者、有效期等信息进行校验
1）校验证书的网站域名是否与证书颁发的域名一致
2）校验证书是否在有效期内
3）浏览器查找操作系统中已内置的受信任的证书发布机构，与服务器发来的证书中的颁发者做比对，用于校验证书是否为合法机构颁发
HTTPS 握手过程中，客户端如何验证证书的合法性

作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# csp
csp内容安全策略
内容安全策略 CSP (Content Security Policy) ，CSP 防止 XSS 攻击， 浏览器自动禁止外部脚本注入
CSP 的实质就是白名单制度，开发者明确告诉客户端，哪些外部资源可以加载和执行，等同于提供白名单。它的实现和执行全部由浏览器完成，开发者只需提供配置
CSP 大大增强了网页的安全性。攻击者即使发现了漏洞，也没法注入脚本，除非还控制了一台列入了白名单的可信主机

作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

配置方式：
1）通过 HTTP 头信息的Content-Security-Policy的字段
Content-Security-Policy: script-src 'self'; object-src 'none';  style-src cdn.example.org third-party.org; child-src https:
2）通过网页的标签
<meta http-equiv="Content-Security-Policy" content="script-src 'self'; object-src 'none'; style-src cdn.example.org third-party.org; child-src https:">
复制代码
两种配置方式的效果一样
Content Security Policy 入门教程
WEB安全之内容安全策略(CSP)详解


# NodeJS-https


npm install https只有一个package.json

如果你尝试使用 npm install https 并只看到了一个 package.json 文件被生成或更新，这实际上是因为 https 是一个 Node.js 的内置模块，而不是一个可以通过 npm 安装的第三方包。

Node.js 提供了很多内置的模块，比如 fs（文件系统）、http、https 等，这些模块是 Node.js 运行时环境的一部分，因此你不需要（也不能）通过 npm 来安装它们。

如果你尝试运行 npm install https，npm 可能会尝试查找一个名为 https 的 npm 包，但由于这样的包不存在（或者如果确实有一个同名的包，但它肯定不是 Node.js 的内置 https 模块），npm 会创建一个新的项目目录（如果当前目录中没有 package.json 文件的话），并生成一个基本的 package.json 文件。

要使用 Node.js 的 https 模块，你只需在你的代码中通过 require('https') 来引入它即可，而不需要通过 npm 来安装。例如：

javascript
const https = require('https');

https.get('https://example.com', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
}).on('error', (e) => {
  console.error(e);
});
上面的代码使用 Node.js 的 https 模块来发送一个 HTTP GET 请求到 https://example.com。
