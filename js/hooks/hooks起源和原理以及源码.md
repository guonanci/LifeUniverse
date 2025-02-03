https://juejin.cn/post/6944863057000529933?utm_source=gold_browser_extension

*react 进阶 一文吃透 react-hooks 原理*

# 前言

之前的两篇文章，介绍了 hook 如何使用，以及自定义 hook 的设计模式及其实战，本篇文章主要从 hooks 起源、原理、以及源码的角度，去剖析 hooks 的运行机制和内部原理。

实际上 hooks 并没有那么难以理解，就是解决函数组件没有 state、没有生命周期、不能复用逻辑的一种技术方案。hook是react16.8的新增特性，可以让你在不编写class的情况下使用state、以及其他的react特性。老规矩，我们带着以下疑问开始今天的探讨：

1. 无状态组件每次执行函数上下文时，react用啥方式记录了hook的状态
2. 多个 hook 用啥记录每一个 hook 的顺序？换个问题吧，为何不能在条件语句中声明 hook？为何hook 声明要在组件最顶部？
3. 函数组件中的useState，和class 类组件 setState 的区别？
4. react 是怎么捕获到 hook 的执行上下文？是在函数组件内部吗？
5. useEffect、useMemo 中，为何 useRef 不需要依赖注入，就能访问到最新改变值？
6. useMemo怎么对值做缓存？如何利用它优化性能？
7. 为何两次传入 useState 的值相同，而函数组件不更新？

# principle 原理

- 函数组件执行函数 renderWithHooks
  - 执行函数组件
  - 改变 ReactCurrentDispatcher 对象
- 初始化 hook
  - mountWorkInProgressHook 生成 hooks 链表
  - mountState 初始化 useState
  - dispatchAction 控制无状态组件更新
  - mountEffect 初始化 useEffect
  - mountMemo 初始化 useMemo
  - mountRef 初始化 useRef
- 更新 hook
  - updateWorkInProgressHook 更新 hook 链表，找到对应 hook
  - updateState 得到最新 state
  - updateEffect 更新 updateQueue
  - updateMemo 判断 deps，获取、更新缓存值
  - updateRef 获取 ref 对象

# function 组件和 class 组件的本质区别
在解释react-hooks原理之前，我们要加深理解一下， 函数组件和类组件到底有啥区别，我们先看两个代码片段：
```jsx
class Index extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = { number: 0 }
  }
  handleClick = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        this.setState({ number: this.state.number + 1 })
        console.log(this.state.number)
      }, 1000)
    }
  }
  render(){
    return (
      <div>
        <button onClick={this.handleClick}>num++</button>
      <div>
    )
  }
}

function Index(){
  const [num,setNum]=React.useState(0)
  const handleClick=()=>{
    for(let i=0;i<=5;i++){
      setTimeout(()=>{
        setNum(num+1)
        console.log(num)
      },1000)
    }
  }
  return (
    <button onClick={handleClick}>{num}</button>
  )
}
```
在第一个例子中会得到：12345，而在第二个例子中会得到：00000。一起来分析下：

**第一个类组件中，由于 setState 没有在 react 正常的函数执行上下文执行，而在setTimeout 中执行，破坏了批量更新条件，所以可以直接获取到变化后的state**。而在无状态组件中，似乎没有生效。在class状态中，通过一个实例化的class，去维护组件中的各种状态；但是在 function 组件中，没有一个状态去保存这些信息.每一次函数上下文执行时，所有变量和常量都重新声明，执行完毕后，再被垃圾机制回收。

所以，无论 setTimeout 执行多少次，都是在当前函数上下文执行，此时 num = 0 不会变。之后执行setNumber，重新执行函数组件后，num 才变化。所以，对于 class 组件，我们只需要实例化一次，实例中就保存了组件的 state 等状态，每一次更新只需调用 render 方法就行。但是在 function 组件中，每一次更新都是执行一次新函数,为了保存一些状态,以及执行一些副作用钩子,react-hooks 就应运而生，去帮助记录组件状态，以及处理一些额外副作用。
# 当我们引入hooks时发生了啥？
以 useState 为例子，从引入 hooks 开始，我们在项目中会这么写：
`import { useState } from 'react'`

于是乎我们去源码中找 useState,看看它到底是哪路神仙？

`react / src / ReactHooks.js-useState:`
```js
export function useState(initialState) {
  const dispatcher = resolveDispatcher()
  return dispatcher.useState(initialState)
}
// useState()的执行，等于dispatcher.useState(initialState)，这里引入了一个dispatcher，我们看看resolveDispatcher做了些啥？：
function resolveDispatcher() {
  const dispatcher = ReactCurrentDispatcher.current
  return dispatcher
}
// ReactCurrentDispatcher
// react / src / ReactCurrentDispatcher.js：
const ReactCurrentDispatcher = {
  current: null,
}

// 我们看到ReactCurrentDispatcher.current初始化的时候为null，然后就没任何下文了。我们暂且只能记下**ReactCurrentDispatcher**。看看啥时候用到ReactCurrentDispatcher ？
```

# 2 开工造物，从无状态组件的函数执行说起
想要彻底弄明白 hooks，就要从其根源开始，我们在引入 hooks 时，最后以ReactCurrentDispatcher 草草收尾，线索全部断了，所以接下来只能从函数组件执行开始。
## renderWithHooks 执行函数
function 组件是啥时候执行的呢？`react-reconciler/src/ReactFiberBeginWork.js-renderWithHooks:`

```js
// function 组件初始化：
renderWithHooks(
  null, // current Fiber
  workInProgress, // workInProgress Fiber
  Component, // 函数组件本身
  props,
  context, // 上下文
  renderExpirationTime, // 渲染ExpirationTime
)
```

初始化是没有 current 树的，之后完成一次组件更新后，会把当前 workInProgress 树赋值给 current 树。

```js
// function 组件更新：
renderWithHooks(
  current,
  workInProgress,
  render,
  nextProps,
  context,
  renderExpirationTime
)
```

从上边可以看出，renderWithHooks 函数的作用是作为，调用 function 组件函数的主要函数。我们重点看看 renderWithHooks 做了啥？

`react-reconciler/src/ReactFiberHooks.js-renderWithHooks:`
```js
export function renderWithHooks(
  current,
  workInProgress,
  Component,
  props,
  secondArg,
  nextRenderExpirationTime,
) {
  renderExpirationTime = nextRenderExpirationTime;
  currentlyRenderingFiber = workInProgress;

  workInProgress.memoizedState = null;
  workInProgress.updateQueue = null;
  workInProgress.expirationTime = NoWork;

  ReactCurrentDispatcher.current =
      current === null || current.memoizedState === null
        ? HooksDispatcherOnMount
        : HooksDispatcherOnUpdate;

  let children = Component(props, secondArg);

  if (workInProgress.expirationTime === renderExpirationTime) {
       // ....这里的逻辑我们先放一放
  }

  ReactCurrentDispatcher.current = ContextOnlyDispatcher;

  renderExpirationTime = NoWork;
  currentlyRenderingFiber = null;

  currentHook = null
  workInProgressHook = null;

  didScheduleRenderPhaseUpdate = false;

  return children;
}

```

*mountWorkInProgressHook这个函数做的事情很简单，首先每次执行一个hooks函数，都产生一个hook对象，里面保存了当前hook信息,然后将每个hooks以链表形式串联起来，并赋值给workInProgress的memoizedState。也就证实了上述所说的，函数组件用memoizedState存放hooks链表。*

至于hook对象中都保留了那些信息？我这里先分别介绍一下
:
memoizedState： useState中 保存 state 信息 ｜ useEffect 中 保存着 effect 对象 ｜ useMemo 中 保存的是缓存的值和 deps ｜ useRef 中保存的是 ref 对象。
baseQueue : usestate和useReducer中 保存最新的更新队列。
baseState ： usestate和useReducer中,一次更新中 ，产生的最新state值。
queue ： 保存待更新队列 pendingQueue ，更新函数 dispatch 等信息。
next: 指向下一个 hooks对象。
那么当我们函数组件执行之后，四个hooks和workInProgress将是如图的关系。

mountState到底做了些什么，首先会得到初始化的state，将它赋值给mountWorkInProgressHook产生的hook对象的
memoizedState和baseState属性，然后创建一个queue对象，里面保存了负责更新的信息。
这里先说一下，在无状态组件中，useState和useReducer触发函数更新的方法都是dispatchAction,useState，可以看成一个简化版的useReducer,至于dispatchAction怎么更新state，更新组件的，我们接着往下研究dispatchAction。

function dispatchAction<S, A>(
  fiber: Fiber,
  queue: UpdateQueue<S, A>,
  action: A,
)

const [ number , setNumber ] = useState(0)

dispatchAction 就是 setNumber , dispatchAction 第一个参数和第二个参数，已经被bind给改成currentlyRenderingFiber和 queue,我们传入的参数是第三个参数action

拓展:effectList
effect list 可以理解为是一个存储 effectTag 副作用列表容器。它是由 fiber 节点和指针 nextEffect 构成的单链表结构，这其中还包括第一个节点 firstEffect ，和最后一个节点 lastEffect。
React 采用深度优先搜索算法，在 render 阶段遍历 fiber 树时，把每一个有副作用的 fiber 筛选出来，最后构建生成一个只带副作用的 effect list 链表。
在 commit 阶段，React 拿到 effect list 数据后，通过遍历 effect list，并根据每一个 effect 节点的 effectTag 类型，执行每个effect，从而对相应的 DOM 树执行更改。
4 初始化useMemo -> mountMemo
不知道大家是否把 useMemo 想象的过于复杂了，实际相比其他 useState , useEffect等，它的逻辑实际简单的很。
js复制代码function mountMemo(nextCreate,deps){
  const hook = mountWorkInProgressHook();
  const nextDeps = deps === undefined ? null : deps;
  const nextValue = nextCreate();
  hook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}

初始化useMemo，就是创建一个hook，然后执行useMemo的第一个参数,得到需要缓存的值，然后将值和deps记录下来，赋值给当前hook的memoizedState。整体上并没有复杂的逻辑。
5 初始化useRef -> mountRef
对于useRef初始化处理，似乎更是简单，我们一起来看一下：
js复制代码function mountRef(initialValue) {
  const hook = mountWorkInProgressHook();
  const ref = {current: initialValue};
  hook.memoizedState = ref;
  return ref;
}

mountRef初始化很简单, 创建一个ref对象， 对象的current属性来保存初始化的值，最后用memoizedState保存ref，完成整个操作。


 updateRef
js复制代码function updateRef(initialValue){
  const hook = updateWorkInProgressHook()
  return hook.memoizedState
}

函数组件更新useRef做的事情更简单，就是返回了缓存下来的值，也就是无论函数组件怎么执行，执行多少次，hook.memoizedState内存中都指向了一个对象，所以解释了useEffect,useMemo 中，为什么useRef不需要依赖注入，就能访问到最新的改变值。



https://juejin.cn/post/6944863057000529933?utm_source=gold_browser_extension
