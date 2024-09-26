# 镜像管理工具
yarn global add yrm,yam list,yrm use taobao
https://www.google.com/search?q=yarn%E5%8A%A3%E5%8A%BF&oq=yarn%E5%8A%A3%E5%8A%BF&aqs=chrome..69i57.7941j0j1&sourceid=chrome&ie=UTF-8

yarn upgrade

yarn bootstrap ? contribute to open-source lib.
# install
npm i -g yarn
# add

yarn add @umijs/utils --dev

# remove

yarn remove @umijs/utils

# --dev,--optional,--peer

https://blog.csdn.net/tianxintiandisheng/article/details/115248277

# registry

yarn config set registry https://registry.npmmirror.com

# option

## global

yarn global add umi(not `yarn add umi global`)
yarn remove 不用带任何标志 `yarn remove package_name`

面试题：听说过 pnpm 嘛，另外讲讲 npm 和 yarn 的区别
# offline-mirror
https://classic.yarnpkg.com/blog/2016/11/24/offline-mirror/

# certificate has expired
`yarn config set strict-ssl false`
# 3.6.4 berry
yarn remove @react-navigation/material-top-tabs @react-navigation/drawer
➤ YN0000: ┌ Resolution step
➤ YN0002: │ @react-native/babel-plugin-codegen@npm:0.73.4 doesn't provide @babel/preset-env (p2a96b), requested by @react-native/codegen
➤ YN0002: │ @react-native/babel-plugin-codegen@npm:0.74.83 doesn't provide @babel/preset-env (p8ed8f), requested by @react-native/codegen
➤ YN0060: │ @react-native/eslint-config@npm:0.74.83 [a2b54] provides @typescript-eslint/eslint-plugin (p244dd) with version 6.21.0, which doesn't satisfy what eslint-plugin-jest requests
➤ YN0002: │ @types/react-native-canvas@npm:0.1.13 doesn't provide react (p3cfb1), requested by react-native
➤ YN0002: │ @types/react-native-video@npm:5.0.20 doesn't provide react (p1e77d), requested by react-native
➤ YN0002: │ @types/react-native@npm:0.73.0 doesn't provide react (p34f7a), requested by react-native
➤ YN0002: │ Xiaomarobot@workspace:. doesn't provide dva-core (p9145c), requested by dva-loading
➤ YN0060: │ Xiaomarobot@workspace:. provides redux (p8d5f3) with version 5.0.1, which doesn't satisfy what dva-core-ts requests
➤ YN0002: │ babel-plugin-transform-flow-enums@npm:0.0.2 doesn't provide @babel/core (p3d323), requested by @babel/plugin-syntax-flow
➤ YN0002: │ react-native-codegen@npm:0.0.7 doesn't provide @babel/preset-env (pe4ee6), requested by jscodeshift
➤ YN0002: │ react-native@npm:0.73.6 [6ddb7] doesn't provide @babel/preset-env (p4f904), requested by @react-native/codegen
➤ YN0002: │ react-native@npm:0.73.6 [bd0c3] doesn't provide @babel/preset-env (p1cc26), requested by @react-native/codegen
➤ YN0002: │ react-native@npm:0.74.1 [a2b54] doesn't provide @babel/preset-env (p7ef08), requested by @react-native/codegen
➤ YN0000: │ Some peer dependencies are incorrectly met; run yarn explain peer-requirements <hash> for details, where <hash> is the six-letter p-prefixed code
➤ YN0000: └ Completed in 0s 284ms
➤ YN0000: ┌ Fetch step
➤ YN0019: │ @react-navigation-drawer-npm-6.6.15-71d68eeb0b-fa04c4e580.zip appears to be unused - removing
➤ YN0019: │ @react-navigation-material-top-tabs-npm-6.6.13-6cd5ee0e84-a393645ee2.zip appears to be unused - removing
➤ YN0000: └ Completed in 7s 771ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed in 4s 951ms
➤ YN0000: Done with warnings in 13s 183ms

# yarnrc

```yml
# npmAuditRegistry: "http://192.168.0.71:4873/"
npmRegistryServer: "http://192.168.0.71:4873/"
unsafeHttpWhitelist: [
  "192.168.0.71",
]

```

# yarn3-log

 guard@workspace:. couldn't be built successfully (exit code 1, logs can be found here: C:\Users\Administrator\AppData\Local\Temp\xfs-fa21c608\build.log)
