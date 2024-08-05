https://www.google.com/search?q=webpack+HMR%E6%9C%BA%E5%88%B6&oq=webpack+HMR%E6%9C%BA%E5%88%B6&aqs=chrome..69i57.6377j0j1&sourceid=chrome&ie=UTF-8

https://juejin.cn/post/6973825927708934174

webpack dev server 可以监听代码变化从而实现打包更新，并且最后通过自动刷新的方式同步到浏览器，便于我们及时查看效果。但是 Dev Server 从监听到打包再到通知浏览器整体刷新页面就会导致一个让人困扰的问题，那就是无法保存应用状态。于是新的解决方法：Hot Module Replacement：将新模块发送到浏览器端，浏览器用新模块替换掉旧模块，以实现在不刷新浏览器的前提下更新页面

**最明显的优势**就是相对于传统的 live reload 而言，HMR 并不会丢失应用状态，提高开发效率。
流程概览：

1. webpack compile: watch 打包本地文件 写入内存
2. Bundle Server：起一个本地服务，提供文件在浏览器端进行访问
3. HMR Server：将热更新文件输出给 HMR Runtime
4. HMR Runtime：生成的文件，注入至浏览器内存
5. Bundle：构建输出文件

编译文件=》文件系统=》webpack compiler 输出 bundle 文件=》HMR Server（本迪服务）
webpack compiler 输出 bundle 文件（本地服务）=》bundle server 提供给浏览器访问本地文件（本地服务）
bundle server 提供给浏览器访问本地文件《=》bundle 文件（浏览器）
HMR Server（本地服务）《=web socket=》HMR Runtime 注入到浏览器，更新文件的变化（浏览器）
HMR Runtime 注入到浏览器，更新文件的变化（浏览器）=>bundle 文件（浏览器）

HMR 本身集成在 webpack，开启方式有两种：1 命令行 webpack-dev-server --hot 2 写入配置文件：

```js
// ./webpack.config.js
const webpack = require('webpack')
module.exports = {
  // ...
  devServer: {
    // 开启HMR特效，如果不支持HMR则会fallback到live reload
    hot: true,
  },
  plugins: [
    // ...
    // HMR依赖的插件
    new webpack.HotModuleReplacementPlugin(),
  ],
}
```

# HMR 的 Server 和 Client
