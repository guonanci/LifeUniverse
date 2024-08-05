https://juejin.cn/post/7185128318235541563?

https://juejin.cn/post/7175468840476737592?

内存泄漏（长期打开的页面，比如大屏项目页面）
console能打印的对象大小受限。logpoint（vsc），debugger

调用栈、作用域，每一个栈帧可以看到每个函数作用域中的变量。打印日志用LogPoint，调试库的源码、业务代码、Node.js、网页。 Uncaught Exceptions，Caught Exceptions

# Performance
一条代码的执行路径，React 每个fiber节点都会调用beginWork
前面说 Debugger 调试可以看到一条代码的执行路径，但是代码的执行路径往往比较曲折。
比如那个 React 会对每个 fiber 节点做处理，每个节点都会调用 beginWork。处理完之后又会处理下一个节点，再次调用 beginWork：

就像你走了一条小路，然后回到大路之后又走了另一条小路，用 Debugger 只能看到当前这条小路的执行路径，看不到其他小路的路径：

这时候就可以结合 Performance 工具了，用 Performance 工具看到代码执行的全貌，然后用 Debugger 来深入每一条代码执行路径的细节。

作者：zxg_神说要有光
链接：https://juejin.cn/post/7175468840476737592
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
# SourceMap
sourcemap 很重要，因为我们执行过的都是编译打包后的代码，基本是不可读的，调试这种代码也没啥意义，而 sourcemap 就可以让我们直接调试最初的源码。



比如 vue，关联了 sourcemap 之后，我们能直接调试 ts 源码：
# 总结
console.log 的弊端太多了，大对象打印不全，会超过 terminal 缓冲区，对象属性不能展开等等，不建议大家用。就算要打印也可以用 LogPoint。用 Debugger 可以看到调用栈，也就是代码的执行路径，每个栈帧的作用域，可以知道代码从开始运行到现在都经历了什么，而 console.log 只能知道某个变量的值。此外，报错时也可以通过异常断点来梳理代码执行路径，以排查报错原因。

但 Debugger 只能看到一条执行路径，可以用 Performance 录制代码执行的全流程，然后再结合 Debugger 来深入其中一条路径的执行细节。此外，只有调试最初的源码才有意义，不然调试编译后的代码，会缺少很多信息。可以通过 SourceMap 来关联到源码，不管是 Vue、React 的源码还是 Nest.js、Babel 等的源码。

学会调试，就能调试各种代码了，不存在看不懂的源码，因为每一行代码都是基础的语法，都是能看懂的，如果看不懂，只可能是代码太多了，你需要更多的耐心去读一行行代码、一个个函数、理清一个个功能的实现，慢慢积累就好了。
掌握基于 Debugger、Performance、SourceMap 等调试代码之后，各种网页和 Node.js 代码都能调试，各种源码都能读懂！

作者：zxg_神说要有光
链接：https://juejin.cn/post/7175468840476737592
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# fn code
```js
console.log(fnA.toString())
```
