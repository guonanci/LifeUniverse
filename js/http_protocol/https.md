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
链接：<https://juejin.cn/post/7146996646394462239>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# 浏览器如何验证ca证书的有效性

浏览器读取证书中的证书所有者、有效期等信息进行校验
1）校验证书的网站域名是否与证书颁发的域名一致
2）校验证书是否在有效期内
3）浏览器查找操作系统中已内置的受信任的证书发布机构，与服务器发来的证书中的颁发者做比对，用于校验证书是否为合法机构颁发
HTTPS 握手过程中，客户端如何验证证书的合法性

作者：海阔_天空
链接：<https://juejin.cn/post/7146996646394462239>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# csp

csp内容安全策略
内容安全策略 CSP (Content Security Policy) ，CSP 防止 XSS 攻击， 浏览器自动禁止外部脚本注入
CSP 的实质就是白名单制度，开发者明确告诉客户端，哪些外部资源可以加载和执行，等同于提供白名单。它的实现和执行全部由浏览器完成，开发者只需提供配置
CSP 大大增强了网页的安全性。攻击者即使发现了漏洞，也没法注入脚本，除非还控制了一台列入了白名单的可信主机

作者：海阔_天空
链接：<https://juejin.cn/post/7146996646394462239>
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

https.get('<https://example.com>', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
}).on('error', (e) => {
  console.error(e);
});
上面的代码使用 Node.js 的 https 模块来发送一个 HTTP GET 请求到 <https://example.com。>

# joyssl-console.bce.baidu.com

域名techxiaoma.com；主机记录：*；（不用管_certum）记录类型：TXT记录、CNAME记录；解析线路：默认；记录值：53d6slfd0....;TTL:5分钟；描述：joyssl-techxiaoma;

joyssl的免费版不支持通配符了。。而且主机记录是_certum

公司所在产业园的邮编：330200

不管证书是否只支持一个二级域名或一级域名，都选通配符类型（第二个）。

## console

域名服务-域名管理-解析操作

ls /etc/nginx/cert/
techxiaoma.com.integrated.crt techxiaoma.com.integrate.crt-old techxiaoma.com.key techxiaoma.com.key-old

upload two files

mv techxiao.com* /etc/nginx/cert/

*sudo systemctl restart nginx*

检查console.bce.baidu.com的解析记录table，正确操作后可以看到最新的第一条：
主机记录：_certum;类型：TXT；线路：默认；记录值：53d69...;TTL:5分钟；

清除官网缓存，重新打开chrome。

<https://gqkr4v33tgf.feishu.cn/docx/VbOTdxEgxoayckxK6rmcGu3YnCc>

# CNAME

CNAME 记录简介
规范名称或 CNAME 记录是一种 DNS 记录，可将别名映射到真实或规范的域名。CNAME 记录通常用于将子域名（如 www 或 mail）映射到托管该子网域内容的网域。例如，CNAME 记录可以将网址 <www.example.com> 映射到 example.com 网域的实际网站。

使用 Google Cloud 服务时，您可能需要将 CNAME 记录添加到您网域的 DNS 设置，以便自定义网址、验证域名所有权或重置管理员密码。请参见下文以了解详情并立即添加 CNAME 记录。

什么时候需要添加 CNAME 记录？
当您为自己的网域注册 Google Cloud 产品，验证域名所有权时。
为使用 Google 协作平台构建的网站自定义网址时。
为 Gmail、Google 日历或其他 Google Cloud 服务自定义服务地址时。
当您忘记了访问 Google 管理控制台的密码，需要重置管理员密码时。
需要验证网站所有权以使用 Google 网站站长工具来管理网站时。
如果您注册帐号时是从 Google 合作伙伴购买的域名，则您无需添加 CNAME 记录来验证域名所有权，因为我们已知晓该域名归您所有。同时，您可能还无需添加 CNAME 记录来自定义网址或服务地址（请点击以上相应链接了解有关详情）。

CNAME 记录的工作原理
CNAME 记录是存储于您网域 DNS 设置中的一对值。其中一个值确定您为其创建记录的别名，通常为如 www 或 mail 的子域名。另一个值则用于确定该别名应指向的网域。

使用 Google 服务时，一个 CNAME 记录可以将网址 <www.example.com> 定向到 example.com 网域中由 Google 协作平台创建的网站，另一个 CNAME 记录可以将 mail.example.com 定向到 example.com 的 Gmail 登录页面。您还可以为网域的其他服务创建 CNAME 记录。

这样，CNAME 记录可使通过一个 IP 地址运行多个服务变得简单。每个 CNAME 记录将服务与域名（而非物理 IP 地址）相关联。物理 IP 地址由您网域的 A 记录来识别。如果您的 IP 地址发生了更改，您只需更改 A 记录，而不需要更改每个 CNAME 记录。

与所有 DNS 记录一样，CNAME 记录由您的域名托管服务商存储，因此您必须通过托管服务商（而不是 Google 管理控制台）更改 CNAME 记录。

如果您不熟悉“域名系统”(DNS) 或希望进一步了解相关术语，请参阅 DNS 基础知识和域名基础知识。

立即设置 CNAME 记录
向我显示相关步骤
我不知道该如何创建 CNAME 记录，所以需要了解创建的相关步骤。
向我显示 CNAME 记录值即可
我知道如何通过自己的域名托管服务商创建 CNAME 记录，所以我只需要知道在通过自己的网域使用 Google 服务时需要输入的值。
验证 CNAME 记录或排查与 CNAME 记录有关的问题
我已创建 CNAME 记录，想看看其是否正确或已经生效。

# 阿里云免费版ssl证书

<https://developer.aliyun.com/article/1212043>
