# registry

https://npmmirror.com/
新的 Web 站点和 Registry Endpoint：
Web 站点：npmmirror.com

Registry Endpoint：registry.npmmirror.com

npm install -g cnpm --registry=https://registry.npm.taobao.org

随着新的域名已经正式启用，老 http://npm.taobao.org 和 http://registry.npm.taobao.org 域名将于 2022 年 05 月 31 日零时起停止服务。
npm config set registry http://www.npmjs.org
npm config set registry https://registry.npm.taobao.org
yarn config set registry https://registry.npm.taobao.org/

npm info express;npm config get registry;同一个 package 直接 i，没必要 uninstall 再 i；
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

# npm i --force --legacy-peer-deps

npm ERR! Could not resolve dependency:
npm ERR! peer styled-components@"^4.1.1" from @formily/antd@1.3.12
npm ERR! node_modules/@formily/antd
npm ERR! @formily/antd@"^1.3.3" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.

npm i --legacy-peer-deps&&npm start

# publish

- upd package.json version
- npm publish .
- https://www.jianshu.com/p/7dcd87bd2d8f

# dependency

non-vulnerable 不易受攻击的

# Browerslist: caniuse-lite is outdated. Please run: npx browserslist@latest --update-db

https://github.com/postcss/autoprefixer/issues/1184#issuecomment-456729370

# devServer&&buildServer

dev（start）和 build，如果远程服务器构建失败，那么一般可以在本地通过 build 重现（因为不是每次 push 都会本地跑 build）

# throw er; // unhandled 'error' event Error: write EPIPE

$ cross-env NODE_OPTIONS=--max-old-space-size=4096 umi build
[info] [webpackbar] Compiling Webpack
Browserslist: caniuse-lite is outdated. Please run:
npx browserslist@latest --update-db

Why you should do it regularly:
https://github.com/browserslist/browserslist#browsers-data-updating
node:events:342
throw er; // Unhandled 'error' event
^

Error: write EPIPE
at afterWriteDispatched (node:internal/stream_base_commons:160:15)
at writeGeneric (node:internal/stream_base_commons:151:3)
at Socket.\_writeGeneric (node:net:769:11)
at Socket.\_write (node:net:781:8)
at writeOrBuffer (node:internal/streams/writable:389:12)
at \_write (node:internal/streams/writable:330:10)
at Socket.Writable.write (node:internal/streams/writable:334:10)
at Object.writeToStdin (/var/lib/jenkins/workspace/magicbi-web-dev/node_modules/esbuild-loader/node_modules/esbuild/lib/main.js:1366:19)
at sendResponse (/var/lib/jenkins/workspace/magicbi-web-dev/node_modules/esbuild-loader/node_modules/esbuild/lib/main.js:555:14)
at handleRequest (/var/lib/jenkins/workspace/magicbi-web-dev/node_modules/esbuild-loader/node_modules/esbuild/lib/main.js:561:11)
at handleIncomingPacket (/var/lib/jenkins/workspace/magicbi-web-dev/node_modules/esbuild-loader/node_modules/esbuild/lib/main.js:624:7)
at Socket.readFromStdout (/var/lib/jenkins/workspace/magicbi-web-dev/node_modules/esbuild-loader/node_modules/esbuild/lib/main.js:509:7)
at Socket.emit (node:events:365:28)
at addChunk (node:internal/streams/readable:314:12)
at readableAddChunk (node:internal/streams/readable:289:9)
at Socket.Readable.push (node:internal/streams/readable:228:10)
Emitted 'error' event on Socket instance at:
at emitErrorNT (node:internal/streams/destroy:193:8)
at emitErrorCloseNT (node:internal/streams/destroy:158:3)
at processTicksAndRejections (node:internal/process/task_queues:83:21) {
errno: -32,
code: 'EPIPE',
syscall: 'write'
}
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
Build step 'Execute shell' marked build as failure
Finished: FAILURE

# update

`npm i -g npm-upgrade`, `npm update npm`,`sudo npm i -g npm@latest`

# build error

## ant-design-pro@4.2.0 update-version

sh ./docker/update_version.sh

[info] [webpackbar] Compiling Webpack
Browserslist: caniuse-list is outdated. Please run:
npx browserslist@latest --update-db

Why you should do it regularly:
https://github.com/browserslist/browserslist#browsers-data-updating
[success] []

## routes-error

This dependency was not found

npm 镜像源用淘宝还是中科大的

(node:80234) [DEP_WEBPACK_CONFIGURATION_OPTIMIZATION_NO_EMIT_ON_ERRORS] DeprecationWarning: optimization.noEmitOnErrors is deprecated in favor of optimization.emitOnErrors
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:80234) [DEP_WEBPACK_COMPILATION_OPTIMIZE_CHUNK_ASSETS] DeprecationWarning: optimizeChunkAssets is deprecated (use Compilation.hooks.processAssets instead and use one of Compilation.PROCESS*ASSETS_STAGE*\* as stage option)
(node:80234) [DEP_WEBPACK_COMPILATION_NORMAL_MODULE_LOADER_HOOK] DeprecationWarning: Compilation.hooks.normalModuleLoader was moved to NormalModule.getCompilationHooks(compilation).loader

npm run script 时，无法拖拽选择，只能用 shift+首尾点击。

# nvm

git clone http://github.com/creationix/nvm.git .nvm
source ~/.nvm/nvm.sh
nvm install 16.13.2
[[-s $HOME/.nvm/nvm.sh]] && . $HOME/.nvm/nvm.sh # This loads NVM
# offline离线安装
http://www.cuketest.com/zh-cn/shared/npm_offline
# nvm
npm i or yarn 之前，一定要看清楚nodejs的版本要求，不然清除yarn或者npm的包缓存，会耗费许多时间。
# 依赖树
要找出 `commander` 包的依赖树，可以使用 `yarn` 或 `npm` 提供的命令查看项目中所有依赖包的结构。

### 使用 `yarn` 查找依赖树

你可以使用以下命令来查看 `commander` 包的依赖树：

```sh
yarn why commander
```

这个命令将显示 `commander` 包在依赖树中的位置以及它是由哪些包引入的。

### 使用 `npm` 查找依赖树

如果你使用 `npm`，可以使用以下命令来查看依赖树：

```sh
npm ls commander
```

这个命令将显示包含 `commander` 包的完整依赖树。

### 示例输出

以下是一个示例输出，以帮助你理解如何解释结果。

#### 使用 `yarn why commander`

```sh
$ yarn why commander
yarn why v1.22.10
[1/4] 🤔  Why do we have the module "commander"...?
[2/4] 🚚  Initializing dependency graph...
[3/4] 🔍  Finding dependency...
[4/4] 🚡  Calculating file sizes...

=> Found "commander@12.1.0"
info Has been hoisted to "commander"
info Reasons this module exists
   - "package-1#package-2" depends on it
   - Hoisted from "package-1#package-2#commander"
info Disk size without dependencies: "32KB"
info Disk size with unique dependencies: "32KB"
info Disk size with transitive dependencies: "32KB"
info Number of shared dependencies: 0
✨  Done in 0.53s.
```

#### 使用 `npm ls commander`

```sh
$ npm ls commander
my-project@1.0.0 /path/to/my-project
└─┬ package-1@1.0.0
  └─┬ package-2@2.0.0
    └── commander@12.1.0
```

从这些命令的输出中，你可以看到 `commander` 是由哪个包引入的，然后你可以进一步分析和处理这个依赖问题。

### 分析依赖树并解决问题

一旦你知道 `commander` 是由哪个包引入的，你可以考虑以下几种方法来解决 Node.js 版本不兼容的问题：

1. **升级 Node.js 版本**：将你的 Node.js 版本升级到 18 或更高版本（如前面提到的步骤）。
2. **降级 `commander` 版本**：如果不能升级 Node.js 版本，可以尝试使用旧版本的 `commander`，并修改引入该依赖的包的版本号。
3. **修改依赖包**：如果是你的项目中的某个依赖包引入了不兼容的 `commander` 版本，可以考虑查看该包的最新版本，或者联系包的维护者解决这个问题。

通过这些步骤，你应该能够找出 `commander` 的依赖树，并采取相应的措施来解决依赖问题。

# nrm
切换镜像源

  npm ---------- <https://registry.npmjs.org/>
  yarn --------- <https://registry.yarnpkg.com/>
  tencent ------ <https://mirrors.cloud.tencent.com/npm/>
  cnpm --------- <https://r.cnpmjs.org/>

- taobao ------- <https://registry.npmmirror.com/>
  npmMirror ---- <https://skimdb.npmjs.com/registry/>
  huawei ------- <https://repo.huaweicloud.com/repository/npm/>
  xiaoma ------- <http://192.168.0.71:4873/>

# commander
install依赖时用16+，run时用14.

# nlark-error

ENOTFOUND
npm ERR! syscall getaddrinfo
npm ERR! errno ENOTFOUND
npm ERR! network request to <https://registry.nlark.com/@types/qs/download/@types/qs-6.9.7.tgz> failed, reason: getaddrinfo ENOTFOUND registry.nlark.com

这个错误 `ENOTFOUND` 和 `getaddrinfo ENOTFOUND` 表明 npm 无法通过 DNS 解析找到 `registry.nlark.com` 这个域名，导致无法下载包。具体原因可能有几个，以下是一些可能的解决方案：

### 1. **网络连接问题**

- **DNS 问题**：这表明 DNS 解析出现了问题，可能是无法访问 `registry.nlark.com` 或者 DNS 配置错误。

     **解决方法**：
  - 检查你的网络连接是否正常。
  - 尝试通过命令 `ping registry.nlark.com` 来检查是否可以访问该域名。如果无法访问，尝试更改 DNS 服务器（例如使用 Google DNS：`8.8.8.8` 和 `8.8.4.4`，或者 Cloudflare DNS：`1.1.1.1`）。
  - 如果你是在公司网络中，可能会受到防火墙或代理的影响。尝试切换到不同的网络环境。

### 2. **使用默认 npm 注册表**

   你当前的 npm 配置使用的是 `https://registry.nlark.com`，这通常是某些公司或组织的私有 npm 镜像服务。可能这个镜像无法访问，或者配置不正确。

   **解决方法**：

- 你可以将 npm 注册表切换回默认的 npm 公共注册表 `https://registry.npmjs.org/`。使用以下命令切换：

     ```bash
     npm config set registry https://registry.npmjs.org/
     ```

### 3. **清除缓存**

   有时，npm 的缓存可能会导致连接问题。尝试清除 npm 缓存并重新安装包：

   ```bash
   npm cache clean --force
   ```

### 4. **代理配置**

   如果你处于公司网络中，可能需要配置代理才能访问外部资源。如果你的 npm 配置使用了代理，确保代理设置正确。可以通过以下命令查看和设置代理：
xm123456
   查看当前代理设置：

   ```bash
   npm config get proxy
   npm config get https-proxy
   ```

   如果需要设置代理：

   ```bash
   npm config set proxy http://your-proxy-server:port
   npm config set https-proxy http://your-proxy-server:port
   ```

### 5. **检查 npm 配置**

   你可以查看 npm 的配置文件是否有其他与网络相关的设置，比如是否配置了一个自定义的 registry。

   检查当前 npm 配置：

   ```bash
   npm config list
   ```

### 6. **尝试使用 Yarn**

   如果上述方法都没有解决问题，尝试使用 [Yarn](https://yarnpkg.com/) 作为包管理器。Yarn 在某些网络环境下可能会更加稳定：

   ```bash
   npm install -g yarn
   yarn install
   ```

### 总结

- 尝试检查和更换 DNS 设置。
- 将 npm 的 registry 配置切换回默认的 `https://registry.npmjs.org/`。
- 清除 npm 缓存，并检查代理和网络设置。
- 如果网络环境受限，尝试使用 Yarn 作为替代。

通过这些方法，你应该能够解决 `ENOTFOUND` 错误。如果仍然无法解决，请提供更多信息，我可以进一步帮助排查问题。

直接去掉
    "@types/qs": "^6.9.7",

这一行就行。
