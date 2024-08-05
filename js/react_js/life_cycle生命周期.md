https://juejin.cn/post/7258071726227849277
React v16之后的生命周期如下：

*render阶段是指：纯净且不包含副作用，可能会被react暂停，中止，或重新启动，包含constructor、getDerivedStateFromProps、shouldComponentUpdate、render。pre-commit阶段是指，可以读取Dom，包含getSnapshotBeforeUpdate。commit阶段是指，可以使用Dom，运行副作用，安排更新，包含componentDidMount、componentDidUpdate、componentWillUnmount*。

可以看出，v16删除了几个will相关的生命周期，新增了两个生命周期：getDerivedStateFromProps和getSnapshotBeforeUpdate。挂载阶段包括：constructor构造函数、getDerivedStateFromProps、render渲染组件、以及componentDidMount组件渲染完成；更新阶段包括：getDerivedStateFromProps、
shouldComponentUpdate组件是否要渲染、
render、getSnapshotBeforeUpdate获取快照、
、以及componentDidUpdate组件更新完成。

卸载阶段包括：componentWillUnmount组件将要卸载

# getDerivedStateFromProps
首先，getDerivedStateFromProps是一个静态方法, 方法参数是下一组props、和上一组state, 这个生命周期函数是为了替代 componentWillReceiveProps而存在的, 主要作用就是监听 props，然后修改当前组件的state。
```js
// 监听 props，如果返回非空值, 则将返回值当作新的 state ；如果返回空置null，就不进行任何处理
static getDerivedStateFromProps(nextProps, prevState) {
  const { type } = nextProps;

  // 返回 null的话，就不对state进行任何操作
  if (type === prevState.type) {
    return null;
  }
  // 返回具体值则更新state
  return { type }
}
```

# getSnapshotBeforeUpdate
getSnapshotBeforeUpdate生命周期将在 render 之后、DOM 变更之前被调用, 该生命周期的返回值将作为 componentDidUpdate 的第三个参数进行传递。当然通常不需要此生命周期, 但在重新渲染期间，需要手动保留 DOM 信息时就特别有用。
```js
getSnapshotBeforeUpdate(prevProps, prevState){
  console.log(5);
  return 999;
}

componentDidUpdate(prevProps, prevState, snapshot) {
  console.log(6, snapshot);
}
```

大多数开发者使用 componentWillUpdate 的场景是配合 componentDidUpdate, 分别获取渲染前后的视图状态, 进行必要的处理。但随着 *React 异步渲染等机制*的到来, 渲染过程可以被分割成多次完成, 还可以被暂停甚至回溯, 那么这导致 componentWillUpdate 和 DidUpdate 执行前后，可能会间隔很长时间, 足够使用户进行交互操作，更改当前组件状态, 于是，可能会导致难以追踪的BUG。

所以，就新增了 getSnapshotBeforeUpdate 生命周期, 目的是为了解决上述问题，并取代 componentWillUpdate, 因为 getSnapshotBeforeUpdate 方法是在 React 真正更改 DOM 前调用, 它能更可靠地获取到组件状态信息。除此之外, getSnapshotBeforeUpdate 还有一个很明显的好处: 那就是，它调用的结果会作为第三个参数传入 componentDidUpdate，避免了 componentWillUpdate 和 componentDidUpdate 配合使用时，将组件临时的状态数据存在组件实例上浪费内存。


同时 getSnapshotBeforeUpdate 返回的数据，在 componentDidUpdate 中用完即被销毁, 效率更高。

# v16.0 之后为什么要删除 Will 相关生命周期
被删除的生命周期有:componentWillReceiveProps，componentWillMount，componentWillUpdate。删除原因是:
这些生命周期方法经常被误解和巧妙地误用，它们的潜在误用可能会在异步渲染中带来更多问题, 所以如果现有项目中使用了这几个生命周期, 将会在控制台输出警告! 大致意思就是这几个生命周期将在 18.x 彻底下线, 如果一定要使用就带上 UNSAFE_ 前缀。

为何移除componentWillMount: 因为在异步渲染机制中允许对组件进行中断、停止等操作, 这可能会导致单个组件实例的componentWillMount被多次调用。目前很多开发者将事件绑定、异步请求等写在 componentWillMount 中, 而异步渲染时componentWillMount被多次调用, 将导致:重复的事件监听、无法正常取消重复事件, 严重点可能会导致内存泄漏；
发出重复的异步网络请求, 导致浪费IO资源。

现在, React 推荐将原本在 componentWillMount 中的网络请求移到 componentDidMount 中, 至于这样会不会导致请求被延迟发出影响用户体验, React 团队是这么解释的:componentWillMount、render 和 componentDidMount 方法虽然存在调用先后顺序, 但在大多数情况下, 几乎都在很短时间内先后执行完毕, 几乎不会对用户体验产生影响。


为何移除componentWillUpdate呢：大多数开发者使用 componentWillUpdate 的场景是配合 componentDidUpdate, 分别获取渲染前后的视图状态, 进行必要的处理, 但随着 React 异步渲染 等机制的到来, 渲染过程可以被分割成多次完成, 还可以被 暂停 甚至 回溯, 这导致 componentWillUpdate 和 componentDidUpdate 执行前后可能会间隔很长时间, 足够使用户进行交互操作更改当前组件状态, 这可能会导致难以追踪的 BUG。

所以后面新增了 getSnapshotBeforeUpdate 生命周期, 目的就是就是为了解决上述问题并取代 componentWillUpdate, 因为 getSnapshotBeforeUpdate 方法是在 React 真正更改 DOM 前调用的, 它能更可靠的获取到组件状态信息。除此之外, getSnapshotBeforeUpdate 还有一个很明显的好处: 它的返回结果会作为 componentDidUpdate  的第三个参数进行传递, 从而避免了 componentWillUpdate 和 componentDidUpdate 配合使用时，将组件临时的状态数据存在组件实例上，引起的内存浪费。

同时 getSnapshotBeforeUpdate 返回的数据在 componentDidUpdate 中用完即被销毁, 效率更高。
# 异步渲染
时间分片Time Slicing是 Fiber 的完全体形态, React 在 渲染时, 会将任务拆分成多个小任务, 这些细分任务会在主线程空闲时执行, 在执行期间可随时暂停。使用时间切片的缺点是, 任务运行的总时间变长了, 因为每处理完一个小任务后, 主线程会空闲出来,。并且在下一个小任务开始处理前有一小段延迟, 这是为了避免卡死浏览器, 这种取舍很有必要。

这里使用到了一个原生API `window.requestIdleCallback()`该方法的参数是一个回调函数, 回调将在浏览器空闲时被调用, 这使开发者能在主事件循环上，执行后台和低优先级工作, 而不延迟动画和输入响应等关键事件。悬停或暂停Suspense是指:  调用 render 函数时，发现有异步请求，然后悬停, 等待异步请求结果 ，然后再渲染展示数据。

在 render 函数中, 我们可以写入一个异步请求, 请求数据。
react 会从我们的缓存中读取这个缓存，如果有缓存了, 直接进行正常的render；如果没有缓存, 那么会抛出一个异常, 这个异常是一个 promise，很有意思, 通过抛出异常来实现。当这个 promise 完成后，请求数据完成, react 会继续回到原来的 render 中，实际上是重新执行一遍 render, 把数据render 出来。这是完全同步的写法, 没有任何异步 callback 之类的东西。

Suspense 的核心概念与错误边界非常相似, 错误边界能够在应用的任何地方捕捉未捕获的异常, 来处理从该组件下面抛出的所有异常。无独有偶, Suspense 组件捕获任何由子组件抛出的异常(Promise), 不同的是我们并不需要一个特定的组件来充当边界, 因为 Suspense 组件自己就是, 它可以让我们定义 fallback 来决定后备的渲染组件。

```js
import { Suspense } from 'react'

const Spinner = () => {}
const ProfilePage = () => {}

<Suspense fallback={<Spinner />}>
  <ProfilePage />
</Suspense>

```

作者：墨渊君
链接：https://juejin.cn/post/7258071726227849277
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

https://heptaluan.github.io/2020/06/25/React/10/
变更缘由
原来的生命周期在 React 16 退出的 Fiber 之后就不合适了（关于 React Fiber 相关内容可以见深入 React Fiber(https://heptaluan.github.io/2020/12/06/React/18/)),因为如果要开启async rendering，那么在 render 函数之前的所有函数钩子肯执行多次，也就是 componentWillMount，componentWillReceiveProps，shouldComponentUpdate，componentWillUpdate。如果开启了异步渲染而且又在上面这些钩子中使用 Ajax 请求的话，那么 ajax 将被无谓的多次调用，这明显不是我们期望的结果,而且在 componentWillMount 里面发起请求不管多快得到结果也赶不上首次 render
除了 shouldComponentUpdate 以外，其他在 render 函数之前的几个函数(componentWillMount,componentWillReceiveProps,componentWillUpdate)都将被 getDerivedStateFromProps 替代，也就是说，使用一个静态函数 getDerivedStateFromProps 来取代即将被废弃的这几个生命周期函数，就是建议或者说是强制我们在 render 之前只做无副作用的操作

# Initialization
在这个阶段，组件准备设置初始化状态和默认属性。

# 挂载阶段：
Mounting：react 组件已经准备好挂载到浏览器 DOM 中。这个阶段包括componentWillMount和componentDidMount生命周期方法。（舊）

static getDerivedStateFromProps(nextProps, prevState): 每次 render（）都会调用，通常当 state 需要从 props 初始化时使用，不过建议尽量不要使用，因为维护两者状态一致性会增加复杂度，典型的应用场景是表单控件获取默认值
render() 纯函数，只返回需要渲染的东西，不应该包含其他的业务逻辑，可以返回原生的 DOM、React 组件、Fragment、Portals、字符串、数字、布尔和 Null。
## componentDidMount()

获取到 dom 节点并操作;获取（订阅）外部资源，记得在卸载阶段中取消订阅
# 更新阶段：
## static getDerivedStateFromProps()
是为了替代 componentWillReceiveProps，静态函数，所以不能通过 this 访问到 Class 的属性，而是应该通过两个参数。如果 props 传入的内容不影响你的 state，那
么就返回一个 Null，此逻辑是必须的，尽量写在函数末尾。钩子中的 this 指向 undefined，因为静态方法只能被构造函数调用，而不能被实例调用。但是有个问题，setState 和 forceUpdate 也会触发这个生命周期
钩子函数，所以内部 state 变化后又会走 getDerivedStateFromProps，把 state 值更新为传入的 prop
shouldComponentUpdate(nextProps, nextState) 由 PureComponent 自动实现，利用它来优化 React 程序性能(PureComponent 实际上自动加载 shouldComponentUpdate 函数，当组件更新时，**shouldComponentUpdate 对 props 和 state 进行了一层浅比较**.)
render()
## getSnapShotBeforeUpdate(prevProps, prevState)
在最近一次 render（）之前调用，一般不太常用，利用它可以获取 **render()之前的 DOM 状态**（比如滚动位置等）
有两个参数 prevPros 和 prevState，返回值会作为第三个参数传递给 componentDidUpdate；被调用于 render 之后，可以读取但无法使用 dom 的时候，它可以让我们的组件在可能更改之前从 DOM 捕获一些信息（
比如滚动位置）
## componentDidUpdate(prevProps, prevState, snapshot)
 可以在它中直接调用 setState，但是必须在条件语句中。典型的应用场景是页面内容需要根据 props 变化重新获取数据
# 卸载阶段
## componentWillUnmount
清除定时器，取消网络请求，清理无效的 DOM 元素等垃圾清理工作
# 错误处理
## static getDerivedStateFromError()
渲染备用 UI
## componentDidCatch()
主要用来打印错误信息，仅适用于 render（）中的错误，如果在点击事件中抛出错误，则不会被捕获

https://juejin.cn/post/6914112105964634119

应该说 componentDidUpdate 的调用次数和使用场景比 componentDidMount 要多。 比方说 modal 的 visible 还是 FALSE 的时候，modal 的 didMount 早已执行，所以 modal 里面的 formRef 为 null。
