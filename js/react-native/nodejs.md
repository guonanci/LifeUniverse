https://www.npmjs.com/package/rn-nodeify


# react-native node_modules\https-browserify\index.js: http could not be fo
und within the project or in these directories:
  node_modules
> 1 | var http = require('http');

在 React Native 项目中，通常不直接使用 Node.js 核心模块（如 `http`），因为 React Native 环境不完全等同于 Node.js 环境。React Native 提供了自己的网络 API 来处理 HTTP 请求（如 `fetch`）。

但是，如果你确实需要在 React Native 中使用某些 Node.js 模块（例如，通过某些第三方库），并且这些模块依赖于 Node.js 核心模块，则需要进行一些特殊的配置。

以下是一些方法来解决这个问题：

### 1. 使用 `react-native-crypto` 和 `react-native-http`

`react-native-crypto` 和 `react-native-http` 是一些包，可以帮助在 React Native 环境中模拟 Node.js 核心模块。

首先，安装这些包：

```bash
npm install react-native-crypto react-native-http
```

接着，配置 Webpack（如果使用 Webpack 打包），或者直接在 React Native 配置中进行必要的调整：

### 2. 使用 `rn-nodeify`

`rn-nodeify` 是一个工具，可以帮助在 React Native 环境中使用 Node.js 核心模块。

首先，安装 `rn-nodeify` 以及必要的依赖包：

```bash
npm install --save-dev rn-nodeify
npm install --save node-libs-react-native
```

然后，在 `package.json` 中添加一个 postinstall 脚本：

```json
"scripts": {
  "postinstall": "rn-nodeify --install --hack"
}
```

运行以下命令来生成必要的 shims 和配置：

```bash
npm run postinstall
```

这会生成 `shim.js` 文件，并在入口文件中导入：

在你的 `index.js`（或 `index.ts`）中添加：

```javascript
import './shim.js';
```

### 3. 检查库和依赖

如果是第三方库引入了 `http` 模块，请确保这些库已经被正确配置，并且你使用的是适合 React Native 的版本。

### 4. 具体示例

假设我们需要在 React Native 中使用一个需要 `http` 模块的库：

#### 安装必要的包

```bash
npm install --save-dev rn-nodeify
npm install --save node-libs-react-native
npm install react-native-crypto react-native-http stream-http
```

#### 配置 `rn-nodeify`

在 `package.json` 中添加 postinstall 脚本：

```json
"scripts": {
  "postinstall": "rn-nodeify --install --hack"
}
```

运行 `postinstall` 脚本：

```bash
npm run postinstall
```

#### 配置入口文件

在 `index.js` 中添加：

```javascript
import './shim.js';
```

在 `shim.js` 中：

```javascript
if (typeof __dirname === 'undefined') global.__dirname = '/';
if (typeof __filename === 'undefined') global.__filename = '';
if (typeof process === 'undefined') global.process = require('process');
global.Buffer = require('buffer').Buffer;
global.process.env.NODE_ENV = __DEV__ ? 'development' : 'production';

if (__DEV__) {
  global.location = {
    protocol: 'file:',
  };
}

require('node-libs-react-native/globals');
```

#### 例子：使用 `http` 模块

在你的组件或文件中，可以像在 Node.js 中一样使用 `http` 模块：

```javascript
const http = require('http');

http.get('http://www.google.com', (response) => {
  console.log('Got response:', response.statusCode);
});
```

### 总结

通过上述步骤，你应该能够在 React Native 中使用需要 `http` 模块的第三方库。请记住，React Native 更适合使用自己的网络库（如 `fetch`）来处理网络请求，以确保与平台的更好兼容性和性能。如果你必须使用 Node.js 模块，请确保正确配置和引入必要的 shims。




npm run postinstall

> Xiaomarobot@0.0.1 postinstall
> rn-nodeify --install --hack

not overwriting "assert"
not overwriting "buffer"
not overwriting "react-native-crypto"
not overwriting "events"
not overwriting "@tradle/react-native-http"
not overwriting "https-browserify"
not overwriting "stream-browserify"
not overwriting "url"
not overwriting "util"
not overwriting "readable-stream"
not reinstalling constants-browserify
not reinstalling inherits
not reinstalling console-browserify
not reinstalling path-browserify
not reinstalling process
not reinstalling domain-browser
not reinstalling querystring-es3
not reinstalling tty-browserify
not reinstalling react-native-randombytes
installing from npm browserify-zlib
installing from npm dns.js
installing from npm react-native-os
installing from npm punycode
installing from npm react-native-level-fs
installing from npm react-native-udp
installing from npm string_decoder
installing from npm timers-browserify
installing from npm react-native-tcp
installing from npm vm-browserify
installing: npm install --save browserify-zlib@~0.1.4 dns.js@^1.0.1 react-na
tive-os@^1.0.1 punycode@^1.2.4 react-native-level-fs@^3.0.0 react-native-udp
@^2.1.0 string_decoder@~0.10.25 timers-browserify@^1.0.1 react-native-tcp@^3
.2.1 vm-browserify@0.0.4
npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR!
npm ERR! While resolving: dva-core-ts@2.0.7
npm ERR! Found: redux@5.0.1
npm ERR! node_modules/redux
npm ERR!   peerOptional redux@"^5.0.0" from react-redux@9.1.0
npm ERR!   node_modules/react-redux
npm ERR!     react-redux@"^9.1.0" from the root project
npm ERR!   redux@"^5.0.1" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer redux@"4.x" from dva-core-ts@2.0.7
npm ERR!   dva-core-ts@"^2.0.7" from the root project
npm ERR!
npm ERR! Conflicting peer dependency: redux@4.2.1
npm ERR! node_modules/redux
npm ERR!   peer redux@"4.x" from dva-core-ts@2.0.7
npm ERR!   node_modules/dva-core-ts
npm ERR!     dva-core-ts@"^2.0.7" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resoluti
on.
npm ERR!
npm ERR!
npm ERR! For a full report see:
npm ERR! C:\Users\Administrator\AppData\Local\npm-cache\_logs\2024-05-15T12_
04_21_261Z-eresolve-report.txt

npm ERR! A complete log of this run can be found in: C:\Users\Administrator\
AppData\Local\npm-cache\_logs\2024-05-15T12_04_21_261Z-debug-0.log
node:child_process:965
    throw err;
    ^

Error: Command failed: npm install --save browserify-zlib@~0.1.4 dns.js@^1.0
.1 react-native-os@^1.0.1 punycode@^1.2.4 react-native-level-fs@^3.0.0 react
-native-udp@^2.1.0 string_decoder@~0.10.25 timers-browserify@^1.0.1 react-na
tive-tcp@^3.2.1 vm-browserify@0.0.4
    at checkExecSyncError (node:child_process:890:11)
    at Object.execSync (node:child_process:962:15)
    at C:\Users\Administrator\projects\xiaoma-app\node_modules\rn-nodeify\cm
d.js:230:12
    at C:\Users\Administrator\projects\xiaoma-app\node_modules\graceful-fs\g
raceful-fs.js:61:14
    at FSReqCallback.oncomplete (node:fs:192:23) {
  status: 1,
  signal: null,
  output: [ null, null, null ],
  pid: 188,
  stdout: null,
  stderr: null
}

Node.js v18.19.1


# rn-nodeify


  "react-native": {
    "https": "https-browserify",
    "_stream_transform": "readable-stream/transform",
    "_stream_readable": "readable-stream/readable",
    "_stream_writable": "readable-stream/writable",
    "_stream_duplex": "readable-stream/duplex",
    "_stream_passthrough": "readable-stream/passthrough",
    "stream": "stream-browserify",
    "http": "@tradle/react-native-http",
    "zlib": "browserify-zlib",
    "console": "console-browserify",
    "constants": "constants-browserify",
    "crypto": "react-native-crypto",
    "dns": "dns.js",
    "net": "react-native-tcp",
    "domain": "domain-browser",
    "os": "react-native-os",
    "path": "path-browserify",
    "querystring": "querystring-es3",
    "fs": "react-native-level-fs",
    "dgram": "react-native-udp",
    "timers": "timers-browserify",
    "tty": "tty-browserify",
    "vm": "vm-browserify",
    "tls": false
  },
  "browser": {
    "_stream_duplex": "readable-stream/duplex",
    "_stream_passthrough": "readable-stream/passthrough",
    "_stream_readable": "readable-stream/readable",
    "_stream_transform": "readable-stream/transform",
    "_stream_writable": "readable-stream/writable",
    "console": "console-browserify",
    "constants": "constants-browserify",
    "crypto": "react-native-crypto",
    "dgram": "react-native-udp",
    "dns": "dns.js",
    "domain": "domain-browser",
    "fs": "react-native-level-fs",
    "http": "@tradle/react-native-http",
    "https": "https-browserify",
    "net": "react-native-tcp",
    "os": "react-native-os",
    "path": "path-browserify",
    "querystring": "querystring-es3",
    "stream": "stream-browserify",
    "timers": "timers-browserify",
    "tls": false,
    "tty": "tty-browserify",
    "vm": "vm-browserify",
    "zlib": "browserify-zlib"
  }
