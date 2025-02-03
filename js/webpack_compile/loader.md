https://www.google.com/search?q=webpack+loader+%E6%9C%BA%E5%88%B6&oq=webpack+loader+%E6%9C%BA%E5%88%B6&aqs=chrome..69i57j33i10i160.13583j0j1&sourceid=chrome&ie=UTF-8

https://segmentfault.com/a/1190000014205729

用来加载处理各种形式的资源,本质上是一个函数, 接受文件作为参数,返回转化后的结构。

loader 用于对模块的源代码进行转换。loader 可以使你在 import 或"加载"模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的强大方法。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS 文件！
loader 和 plugin 区别
之前一篇文章中介绍了 plugin 机制,和今天研究的对象 loader,他们两者在一起极大的拓展了 webpack 的功能。它们的区别就是 loader 是用来对模块的源代码进行转换,而插件目的在于解决 loader 无法实现的其他事。为什么这么多说呢?因为 plugin 可以在任何阶段调用,能够跨 Loader 进一步加工 Loader 的输出,执行预先注册的回调,使用 compilation 对象做一些更底层的事情。

# 配置

```js
export default {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
}
```

内联
import Styles from 'style-loader!css-loader?modules!./styles.css';
CLI
webpack --module-bind 'css=style-loader!css-loader'
