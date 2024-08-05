promise + setState(为什么一定要在 setTimeout 里面，如果不加 setTimeout，setState 后面的 promise 不执行)

setState 是同步还是异步？
首先，同步和异步主要取决于它被调用的环境
这里的同步还是异步，指的调用setState方法后，是否能立刻拿到更新后的值
1）*如果 setState 在 React 能够控制的范围被调用，它就是异步的。比如合成事件处理函数、生命周期函数*
在合成事件和钩子函数中，多次调用setState 修改同一个值，只会取最后一次的执行，前面的会被覆盖
2）*如果 setState 在原生 JavaScript 控制的范围被调用，它就是同步的。比如原生事件处理函数、setTimeout、promise的回调函数*等
在原生事件和异步中，可以多次调用setState 修改同一个值，每次修改都会生效


作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

https://juejin.cn/post/6844903636749778958

为什么不直接更新 state 呢 ?
主题: React
难度: ⭐⭐⭐
如果试图直接更新 state ，则不会重新渲染组件。

 // 错误
 This.state.message = 'Hello world';

 ```js
 这段代码有什么问题:

this.setState((prevState, props) => {
  return {
    streak: prevState.streak + props.count
  }
})
答案：

没有什么问题。这种方式很少被使用，咱们可以将一个函数传递给setState，该函数接收上一个 state 的值和当前的props，并返回一个新的状态，如果咱们需要根据以前的状态重新设置状态，推荐使用这种方式。


 ```

