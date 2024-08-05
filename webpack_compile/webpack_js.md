https://juejin.cn/post/6844904094281236487

externals
https://github.com/kulshekhar/ts-jest/issues/1346
import React from 'react' => import \* as React from 'react'

https://www.mk2048.com/blog/blog_hjc1h22cbb20j.html

[综合提速，比如 thread-loader 替换 HappyPack](https://juejin.cn/post/6844904071736852487)

# devtool

https://webpack.js.org/configuration/devtool/#devtool
https://github.com/webpack/webpack-dev-server/issues/1161
source_map
source_map_loader to del 2k+ warnings

# build

"build": "npm run update-version && cross-env NODE_OPTIONS=--max-old-space-size=4096 umi build"

# OOM

OOM 之后重启很快，10 秒左右
<--- Last few GCs --->

[9019:0x7fa3a9800000] 939183339 ms: Scavenge (reduce) 2034.3 (2073.3) -> 2034.0 (2073.6) MB, 7.3 / 0.0 ms (average mu = 0.287, current mu = 0.269) allocation failure
[9019:0x7fa3a9800000] 939183442 ms: Scavenge (reduce) 2034.9 (2073.6) -> 2034.7 (2074.1) MB, 9.5 / 0.0 ms (average mu = 0.287, current mu = 0.269) allocation failure
[9019:0x7fa3a9800000] 939183534 ms: Scavenge (reduce) 2035.5 (2074.1) -> 2035.3 (2074.8) MB, 9.3 / 0.0 ms (average mu = 0.287, current mu = 0.269) allocation failure

<--- JS stacktrace --->

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
1: 0x1054732b5 node::Abort() [/usr/local/bin/node]
2: 0x105473438 node::OnFatalError(char const*, char const*) [/usr/local/bin/node]
3: 0x1055eabb7 v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [/usr/local/bin/node]
4: 0x1055eab53 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [/usr/local/bin/node]
5: 0x1057891d5 v8::internal::Heap::FatalProcessOutOfMemory(char const*) [/usr/local/bin/node]
6: 0x10578d1fb v8::internal::Heap::RecomputeLimits(v8::internal::GarbageCollector) [/usr/local/bin/node]
7: 0x105789adc v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::GCCallbackFlags) [/usr/local/bin/node]
8: 0x105786f8a v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [/usr/local/bin/node]
9: 0x105785d08 v8::internal::Heap::HandleGCRequest() [/usr/local/bin/node]
10: 0x1057328e1 v8::internal::StackGuard::HandleInterrupts() [/usr/local/bin/node]
11: 0x105b0caa3 v8::internal::Runtime_StackGuard(int, unsigned long*, v8::internal::Isolate\*) [/usr/local/bin/node]
12: 0x105eaf299 Builtins_CEntry_Return1_DontSaveFPRegs_ArgvOnStack_NoBuiltinExit [/usr/local/bin/node]
13: 0x10b4abd9d
14: 0x10add77ec
15: 0x10ac4614c
16: 0x10a96b23d
✨ Done in 939245.58s

export NODE_OPTIONS="--max-old-space-size=8192" https://stackoverflow.com/questions/53230823/fatal-error-ineffective-mark-compacts-near-heap-limit-allocation-failed-javas

https://exerror.com/fatal-error-ineffective-mark-compacts-near-heap-limit-allocation-failed-javascript-heap-out-of-memory-in-ionic-3/

[Solved] FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed – JavaScript heap out of memory in ionic 3

# x-real-url


https://juejin.cn/post/6844904071736852487

拆包/分块/压缩 webpack4，分析打包速度speed-measure-webpack-plugin 构建期间各个阶段花费的时间
```js
const SpeedMeasurePlugin = require('speed-measu')
const speedMeasurePlugin = new Speed
// ...
module.exports = sp.wrap(prodWebpackPlugin)
```

手写一个js打包器，打包就是从入口文件开始将所有的依赖模块打包到一个文件中的过程，涉及各种编译/优化过程

1. 开始打包，我们需要获取所有的依赖模块
搜索所有的依赖项，需要搜索时间
2. 解析所有的依赖模块
解析成浏览器可运行的代码，webpack根据我们配置的loader解析相应的文件，对js，css，图片，字体等文件做转换操作，转换的文件数量也非常大。由于js单线程的特性使得这些转换操作不能并发处理文件，而是需要一个个文件处理。 我们需要优化的第二个时间就是解析时间
3. 将所有的依赖模块打包到一个文件
将所有解析完成的代码，打包到一个文件中，为了使浏览器加载的包更新（减小白屏时间），

js压缩时发布编译的最后阶段，通常webpack需要卡好一会，因为需要先将代码解析成AST语法树，然后需要根据复杂的规则去分析和处理AST，最后将AST还原成JS，涉及到大量计算，因此比较耗时，打包就容易卡住。

4. 二次打包
当更改项目中一个小小文件时，我们需要重新打包，所有文件都必须重新打包，需要花费同初次打包相同的时间，但是项目中大部分文件都没有变更，尤其是第三方库

# 优化解析时间-开启多进程打包
运行在Node.js上的webpack时单线程模式，只能逐个文件处理；官方推荐thread-loader，这个loader在其他loader之前，其他loader就会在一个单独的worker pool里运行，一个worker是一个nodejs进程。每个单独进程处理时间上限为600ms，各个进程的数据交换也会限制在这个时间内。

```js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // 创建一个js worker池
        use: [
          'thread-loader',
          'babel-loader'
        ]
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'thre',
          {
            loader: 'css-lo',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
              importLoaders: 1
            }
          },
          'postcss-lo'
        ]
      }
    ]
  }
}

// thread-loader 放在了 style-loader 之后，这是因为 thread-loader 后的 loader 没法存取文件也没法获取 webpack 的选项设置。

// 官方上说每个 worker 大概都要花费 600ms ，所以官方为了防止启动worker时的高延迟，提供了对worker池的优化：预热

const threadLoader = require('thread-loader')

const jsWorkerPool = {
  // options
  // 产生的worker数量，默认是cpu核心数-1
  // 当require('os').cpus() undefined, 则为1
  workers: 2,

  // 闲置时定时删除worker进程
  // 默认为500ms
  // 可以设置无穷大，这样在监视模式--watch下可以保持worker持续存在
  poolTimeout: 2000
}

const cssWorkerPool = {
  // 一个worker进程中并行执行工作的数量
  // 默认为20
  workerParallelJobs: 2,
  poolTimeout: 2000
}
threadLo.wramup(jsWorkP, ['babel-lo'])
threadLo.wramup(cssWorkP, ['css-lo', 'postcss-lo'])
```

# 合理利用缓存（缩短连续构建时间，增加初始构建时间）
cache-lo,HardSourceWebpackPlu,babel-lo的cacheDirectory标志，这些缓存方法都有启动的开销，重新运行期间在本地节省的时间很大，但是初始（冷）运行实际上更慢

如果你的项目生产版本每次都必须进行初始构建的话，缓存会增加构建时间，减慢你的速度。如果不是，那它们就会大大缩减你二次构建的时间。

cache-loader 和 thread-loader 一样，使用起来也很简单，仅仅需要在一些性能开销较大的 loader 之前添加此 loader，以将结果缓存到磁盘里，显著提升二次构建速度。
module.exports = {
  module: {
    rules: [
      {
        test: /\.ext$/,
        use: ['cache-loader', ...loaders],
        include: path.resolve('src'),
      },
    ],
  },
};

作者：前端瓶子君
链接：https://juejin.cn/post/6844904071736852487
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

五、优化压缩时间
1. webpack3
webpack3 启动打包时加上 --optimize-minimize ，这样 Webpack 会自动为你注入一个带有默认配置的 UglifyJSPlugin 。
压缩 JavaScript 代码需要先把代码解析成用 Object 抽象表示的 AST 语法树，再去应用各种规则分析和处理 AST，导致这个过程计算量巨大，耗时非常多。但 UglifyJsPlugin 是单线程，所以我们可以使用  ParallelUglifyPlugin 。
ParallelUglifyPlugin 插件实现了多进程压缩，ParallelUglifyPlugin 会开启多个子进程，把对多个文件的压缩工作分配给多个子进程去完成，每个子进程其实还是通过 UglifyJS 去压缩代码，但是变成了并行执行。 所以 ParallelUglifyPlugin 能更快的完成对多个文件的压缩工作。

作者：前端瓶子君
链接：https://juejin.cn/post/6844904071736852487
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

webpack4 中 webpack.optimize.UglifyJsPlugin 已被废弃。
也不推荐使用 ParallelUglifyPlugin，项目基本处于没人维护的阶段，issue 没人处理，pr没人合并。
webpack4 默认内置使用 terser-webpack-plugin 插件压缩优化代码，而该插件使用 terser 来缩小  JavaScript 。

module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },
};

六、优化搜索时间- 缩小文件搜索范围 减小不必要的编译工作
webpack 打包时，会从配置的 entry 触发，解析入口文件的导入语句，再递归的解析，在遇到导入语句时 webpack 会做两件事情：

根据导入语句去寻找对应的要导入的文件。例如 require('react') 导入语句对应的文件是 ./node_modules/react/react.js，require('./util') 对应的文件是 ./util.js。
根据找到的要导入文件的后缀，使用配置中的 Loader 去处理文件。例如使用 ES6 开发的 JavaScript 文件需要使用 babel-loader 去处理。

以上两件事情虽然对于处理一个文件非常快，但是当项目大了以后文件量会变的非常多，这时候构建速度慢的问题就会暴露出来。 虽然以上两件事情无法避免，但需要尽量减少以上两件事情的发生，以提高速度。

作者：前端瓶子君
链接：https://juejin.cn/post/6844904071736852487
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
1. loader.test,include,exclude 命中loader要应用规则的文件
2. 优化resolv.modules配置 用于配置 webpack 去哪些目录下寻找第三方模块，resolve.modules 的默认值是 ['node_modules'] ，含义是先去当前目录下的 ./node_modules 目录下去找想找的模块，如果没找到就去上一级目录 ../node_modules 中找，再没有就去 ../../node_modules 中找，以此类推
3. resolve.alias 配置项通过别名来把原导入路径映射成一个新的导入路径，减少耗时的递归解析操作。
4. 优化 resolve.extensions 配置
在导入语句没带文件后缀时，webpack 会根据 resolve.extension 自动带上后缀后去尝试询问文件是否存在，所以在配置 resolve.extensions 应尽可能注意以下几点：

resolve.extensions 列表要尽可能的小，不要把项目中不可能存在的情况写到后缀尝试列表中。
频率出现最高的文件后缀要优先放在最前面，以做到尽快的退出寻找过程。
在源码中写导入语句时，要尽可能的带上后缀，从而可以避免寻找过程。
5. 优化 resolve.mainFields 配置
有一些第三方模块会针对不同环境提供几分代码。 例如分别提供采用 ES5 和 ES6 的2份代码，这2份代码的位置写在 package.json 文件里，如下：
{
  "jsnext:main": "es/index.js",// 采用 ES6 语法的代码入口文件
  "main": "lib/index.js" // 采用 ES5 语法的代码入口文件
}复制代码webpack 会根据 mainFields 的配置去决定优先采用那份代码，mainFields 默认如下：
mainFields: ['browser', 'main']复制代码webpack 会按照数组里的顺序去 package.json 文件里寻找，只会使用找到的第一个。
假如你想优先采用 ES6 的那份代码，可以这样配置：
mainFields: ['jsnext:main', 'browser', 'main']

6. 优化 module.noParse 配置
module.noParse 配置项可以让 Webpack 忽略对部分没采用模块化的文件的递归解析处理，这样做的好处是能提高构建性能。 原因是一些库，例如 jQuery 、ChartJS， 它们庞大又没有采用模块化标准，让 Webpack 去解析这些文件耗时又没有意义。
7. 详细配置
// 编译代码的基础配置
module.exports = {
  // ...
  module: {
    // 项目中使用的 jquery 并没有采用模块化标准，webpack 忽略它
    noParse: /jquery/,
    rules: [
      {
        // 这里编译 js、jsx
        // 注意：如果项目源码中没有 jsx 文件就不要写 /\.jsx?$/，提升正则表达式性能
        test: /\.(js|jsx)$/,
        // babel-loader 支持缓存转换出的结果，通过 cacheDirectory 选项开启
        use: ['babel-loader?cacheDirectory'],
        // 排除 node_modules 目录下的文件
        // node_modules 目录下的文件都是采用的 ES5 语法，没必要再通过 Babel 去转换
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    // 设置模块导入规则，import/require时会直接在这些目录找文件
    // 可以指明存放第三方模块的绝对路径，以减少寻找
    modules: [
      path.resolve(`${project}/client/components`),
      path.resolve('h5_commonr/components'),
      'node_modules'
    ],
    // import导入时省略后缀
    // 注意：尽可能的减少后缀尝试的可能性
    extensions: ['.js', '.jsx', '.react.js', '.css', '.json'],
    // import导入时别名，减少耗时的递归解析操作
    alias: {
      '@compontents': path.resolve(`${project}/compontents`),
    }
  },
};

webpack构建输出结果可视化分析工具：https://juejin.cn/post/6844904056985485320


1、分析打包后的文件
1）可以使用webpack-bundle-analyzer插件生成资源分析图
2）vue项目可以在build命令上添加--report指令，"build": "vue-cli-service build --report"，打包时会生成 report.html 页面，即资源分析图
我们要清楚的知道项目中使用了哪些三方依赖，以及依赖的作用。特别对于体积大的依赖，分析是否能优化
比如：组件库如elementUI的按需引入、Swiper轮播图组件打包后的体积约200k，看是否能替换成体积更小的插件、momentjs去掉无用的语言包等

作者：海阔_天空
链接：https://juejin.cn/post/7146976516692410376
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

2、合理处理公共资源
如果项目支持CDN，可以配置externals，将Vue、Vue-router、Vuex、echarts等公共资源，通过CDN的方式引入，不打到项目里边
如果项目不支持CDN，可以使用DllPlugin动态链接库，将业务代码和公共资源代码相分离，公共资源单独打包，给这些公共资源设置强缓存（公共资源基本不会变），这样以后可以只打包业务代码，提升打包速度

作者：海阔_天空
链接：https://juejin.cn/post/7146976516692410376
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

https://juejin.cn/post/6844903924806189070
https://juejin.cn/post/6844904093463347208


总结一下webpack完整的打包流程
