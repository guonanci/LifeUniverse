针对上面提到的问题，react团队研发了hooks，它主要有两方面作用：

用于在函数组件中引入状态管理和生命周期方法
取代高阶组件和render props来实现抽象和可重用性


可以在函数式组件中，获取state、refs、生命周期钩子等其他特性
Hook 使用规则
1）只在最顶层使用 Hook，Hooks底层使用链表存储数据，按照定义的useState顺序存储对应的数据，不要在循环、条件或嵌套函数中调用Hook，否则Hooks的顺序会错乱
2）自定义 Hook 必须以 “use” 开头，如useFriendStatus
3）在两个组件中使用相同的 Hook 不会共享 state，每次使用自定义 Hook 时，其中的所有state和副作用都是完全隔离的

为什么vue和react都选择了Hooks
1）更好的状态复用
对于vue2来说，使用的是mixin进行混入，会造成方法与属性的难以追溯。
随着项目的复杂，文件的增多，经常会出现不知道某个变量在哪里引入的，几个文件间来回翻找，
同时还会出现同名变量，相互覆盖的情况……😥
2）更好的代码组织
vue2的属性是放到data中，方法定义在methods中，修改某一块的业务逻辑时，
经常会出现代码间来回跳转的情况，增加开发人员的心智负担
使用Hooks后，可以将相同的业务逻辑放到一起，高效而清晰地组织代码
3）告别this

this有多种绑定方式，存在显示绑定、隐式绑定、默认绑定等多种玩法，里边的坑不是一般的多

vue3的setup函数中不能使用this，不能用挺好，直接避免使用this可能会造成错误的



作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

https://juejin.cn/post/6891577820821061646 更好地在函数组件函数式开发中使用到state/生命周期钩子这些React类组件特性。好处：1类似于render Props/HOC那样，Hooks也可以做到跨组件复用，不会影响原来的组件层次结构，不会带来原来的嵌套地狱。2生命周期使得逻辑分散混乱不宜维护，时刻需要关注this的指向问题。3状态逻辑可以通过自定义hooks抽象成合适的粒度，状态与UI更为清晰/隔离开。
注意：避免在循环/条件判断/嵌套函数中调用hooks，保证调用顺序的稳定，只有函数组件和hooks可以调用hooks，不要再类组件和普通函数中调用

重要钩子：
*useState：定义组件State，对标到类组件中this.state功能*
*useEffect：通过依赖触发的钩子函数，常用于模拟类组件中的componentDidMount/componentDidUpdate/componentWillUnmount*
其他内置钩子：
useContext：获取context对象
useReducer：类似于Redux思想的实现，但是并不足以替代Redux，组件内部的redux


https://juejin.cn/post/6864438643727433741

# useState

useState 派发更新函数的执行，就会让整个 function 组件从头到尾执行一次，所以需要配合 useMemo，usecallback 等 api 配合使用，**这就是我说的为什么滥用 hooks 会带来负作用的原因之一了**

上边简单的例子说明了 useState ,但是当我们在调用更新函数之后，state 的值是不能即时改变的，只有当下一次上下文执行的时候，state 值才随之改变。

# useEffect

但是特别注意的是，如果不给 useEffect 执行加入限定条件，那么函数组件每一次更新都会触发 effect ,那么也就说明每一次state更新，或props更新，都会触发 useEffect 执行，此时的effect，又充当了componentDidUpdate和componentwillreceiveprops，所以说合理的运用 useEffect 就要给 effect 加入限定执行的条件，也就是 useEffect 的第二个参数。

这里说的限定条件，也可以说是上一次useeffect更新收集的某些记录数据变化的记忆，在新一轮更新中，useeffect会拿出之前的记忆值和当前值做对比，如果有变化就执行新一轮 useEffect的副作用函数。useEffect的第二个参数是一个数组，用来收集多个限制条件。

## asyncEffect

const asyncEffect = async (callback, deps)=>{
useEffect(()=>{
callback()
},deps)
}
作者：我不是外星人
链接：https://juejin.cn/post/6864438643727433741
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# useLayoutEffect

渲染更新之前的 useEffect。
useEffect执行顺序：

组建更新挂载完成=》浏览器 dom 绘制完成=》执行 useEffect 回调

useLayoutEffect 执行顺序：组件更新挂载完成=》执行 useLayoutEffect 回调=》浏览器 dom 绘制完成
useLayoutEffect 代码可能会阻塞浏览器的绘制 如果我们在 useEffect 重新请求数据，渲染视图过程中，

```jsx
const DemoUseLayoutEffect = () => {
  const target = useRef();
  useLayoutEffect(() => {
    const target = useRef();
    useLayoutEffect(() => {});
    return () => {
      cleanup;
    };
  }, [input]);
  return (
    <div>
      <span ref={target} className="animate" />
    </div>
  );
};
```

# useRef

**获取元素，缓存数据**
和 class 组件 ref 一样，useRef 可以获取元素，有一个参数可以作为缓存数据的初始值，返回值可以被 dom 元素 ref 标记，可以获取该标记的元素节点。

```tsx
const DemoUserRef=()=>{
  const dom=useRef(null)
  const handlerSubmit=()=>{
    // <div>表单组件</div> dom-node
    console.log(dom.current)

  }
  return (
    <div>
    {/* ref 标记当前dom节点 */}
    <div ref={dom}>
  )
}
```

**高阶用法，缓存数据**

> 缓存数据，useState,useReducer 可以保存当前数据源，但是更新数据源的函数执行必定会带来整个组件重新执行到渲染，如果在函数组件内部声明变量，那么下一次更新也会重置，如果我们想要悄悄地保存数据，而不想触发函数更新，那么 useRef 是一个很棒的选择。

```js
const curRef = useRef(initialData);
```

获取 currenRef.current 改变 currenRef.current = newValue

useRef 可以第一个参数可以用来初始化保存数据，这些数据可以在 current 属性上获取到 ，当然我们也可以通过对 current 赋值新的数据源。

下面我们通过 react-redux 源码来看看 useRef 的巧妙运用
（react-redux 在 react-hooks 发布后，用 react-hooks 重新了其中的 Provide,connectAdvanced）核心模块，可以见得 react-hooks 在限制数据更新，高阶组件上有这一定的优势，其源码大量运用 useMemo 来做数据判定

作者：我不是外星人
链接：https://juejin.cn/post/6864438643727433741
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```js
// 这里用到的useRef没有一个是绑定在dom元素的，都是做数据缓存用的
// react-redux用useRef来缓存merge之后的props
const lastChildProps = useRef();
// 存放组件真正的props信息
const lastWrapperProps = useRef(wrapperProps);
// 是否处于正在更新状态
const renderIsScheduled = useRef(false);
```

通过上面我们可以看到 ，react-redux 用重新赋值的方法，改变缓存的数据源，避免不必要的数据更新， 如果选用 useState 储存数据，必然促使组件重新渲染

useContext 自由获取 context
我们可以使用 useContext ，来获取父级组件传递过来的 context 值，这个当前值就是最近的父级组件 Provider 设置的 value 值，useContext 参数一般是由 createContext 方式引入 ,也可以父级上下文 context 传递 ( 参数为 context )。useContext 可以代替 context.Consumer 来获取 Provider 中保存的 value 值

```js
/* 用useContext方式 */
const DemoContext = () => {
  const value: any = useContext(Context);
  /* my name is alien */
  return <div> my name is {value.name}</div>;
};

/* 用Context.Consumer 方式 */
const DemoContext1 = () => {
  return (
    <Context.Consumer>
      {/*  my name is alien  */}
      {(value) => <div> my name is {value.name}</div>}
    </Context.Consumer>
  );
};

export default () => {
  return (
    <div>
      <Context.Provider value={{ name: "alien", age: 18 }}>
        <DemoContext />
        <DemoContext1 />
      </Context.Provider>
    </div>
  );
};
```

# useReducer 无状态组件中的 redux

useReducer 是 react-hooks 提供的能够在无状态组件中运行的类似 redux 的功能 api，至于它到底能不能代替 redux react-redux ,我个人的看法是不能的 ，redux 能够复杂的逻辑中展现优势 ，而且 redux 的中间件模式思想也是非常优秀了，我们可以通过中间件的方式来增强 dispatch redux-thunk redux-sage redux-action redux-promise 都是比较不错的中间件，可以把同步 reducer 编程异步的 reducer。useReducer 接受的第一个参数是一个函数，我们可以认为它就是一个 reducer ,reducer 的参数就是常规 reducer 里面的 state 和 action,返回改变后的 state, useReducer 第二个参数为 state 的初始值 返回一个数组，数组的第一项就是更新之后 state 的值 ，第二个参数是派发更新的 dispatch 函数 。dispatch 的触发会触发组件的更新，这里能够促使组件从新的渲染的一个是 useState 派发更新函数，另一个就 useReducer 中的 dispatch

作者：我不是外星人
链接：https://juejin.cn/post/6864438643727433741
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# useMemo

useMemo 我认为是 React 设计最为精妙的 hooks 之一，优点就是能形成独立的渲染空间，能够使组件，变量按照约定好规则更新。渲染条件依赖于第二个参数 deps。 我们知道无状态组件的更新是从头到尾的更新，如果你想要从新渲染一部分视图，而不是整个组件，那么用 useMemo 是最佳方案，避免了不需要的更新，和不必要的上下文的执行，在介绍 useMemo 之前，我们先来说一说, memo, 我们知道 class 声明的组件可以用 componentShouldUpdate 来限制更新次数，那么 memo 就是无状态组件的 ShouldUpdate ， 而我们今天要讲的 useMemo 就是更为细小的 ShouldUpdate 单元，
先来看看 memo ,memo 的作用结合了 pureComponent 纯组件和 componentShouldUpdate 功能，会对传进来的 props 进行一次对比，然后根据第二个函数返回值来进一步判断哪些 props 需要更新。
useMemo(() => (
<Modal
width={'70%'}
visible={listshow}
footer={[
<Button key="back" >取消</Button>,
<Button
key="submit"
type="primary"

> 确定
> </Button>
> ]} >
> { /_ 减少了 PatentTable 组件的渲染 _/ }
> <PatentTable

            getList={getList}
            selectList={selectList}
            cacheSelectList={cacheSelectList}
            setCacheSelectList={setCacheSelectList} />

</Modal>
), [listshow, cacheSelectList])
react-redux 通过 判断 redux store 的改变来获取与之对应的 state
const previousState = useMemo(() => store.getState(), [store])
复制代码
讲到这里，如果我们应用 useMemo 根据依赖项合理的颗粒化我们的组件，能起到很棒的优化组件的作用。

# seCallback useMemo 版本的回调函数

useMemo 和 useCallback 接收的参数都是一样，都是在其依赖项发生变化后才执行，都是返回缓存的值，区别在于 useMemo 返回的是函数运行的结果，useCallback 返回的是函数，这个回调函数是经过处理后的也就是说父组件传递一个函数给子组件的时候，由于是无状态组件每一次都会重新生成新的 props 函数，这样就使得每一次传递给子组件的函数都发生了变化，这时候就会触发子组件的更新，这些更新是没有必要的，此时我们就可以通过 usecallback 来处理此函数，然后作为 props 传递给子组件

这里应该提醒的是，useCallback ，必须配合 react.memo pureComponent ，否则不但不会提升性能，还有可能降低性能

react-hooks 的诞生，也不是说它能够完全代替 class 声明的组件，对于业务比较复杂的组件，class 组件还是首选，只不过我们可以把 class 组件内部拆解成 funciton 组件，根据业务需求，哪些负责逻辑交互，哪些需要动态渲染，然后配合 usememo 等 api，让性能提升起来。react-hooks 使用也有一些限制条件，比如说不能放在流程控制语句中，执行上下文也有一定的要求。总体来说，react-hooks 还是很不错的，值得大家去学习和探索。

[自定义 hooks](https://juejin.cn/post/6890738145671938062)
组件化、颗粒化、单元化、形成独立的渲染环境，减少渲染次数，优化性能。可以根据业务需要制定满足业务需要的 hooks，更注重的是逻辑单元。通过业务场景不同，

hookA-》逻辑层=（更新数据）=》组件层=（调用方法）=》逻辑层
hookB-》逻辑层

# useImperativeHandle

函数式组件默认不可以加 ref，没有自己的实例，这个 API 一般是函数式组件用来接受父组件传来的 ref，所以需要标注好实例类型，也就是父组件通过 ref 可以拿到
什么类型值

```tsx
type Props = {};
export type Ref = HTMLButtonElement;
export const FancyButton = React.forwardRef<Ref, Props>((props, ref) => (
  <button ref={ref} className="My">
    {props.children}
  </button>
));
```

由于这个例子里直接把 ref 转发给 btn 了，所以直接吧类型标注为 HTMLbtnEle 即可。

```tsx
export const App=()=>{
  const ref=useRef<HTMLButtonElement>
  return (
    <FancyBtn ref={ref} />
  )
}
```

useImperativeHandle 作用是在使用 ref 时自定义暴露给父组件的实例值，通常来说在开发通用组件情况下比较适用

```tsx
import { RefObject, createRef, Component } from "react";

const ref1: RefObject<HTMLDivElement> = createRef();

const inputRef = createRef<Comp>();
class EditScene extends Component<Props> {
  inputRef: RefObject<Comp>;
  constructor(props) {
    super(props);
    this.inputRef = createRef<Comp>();
  }
}
```

# snippet

用起来，提高效率：比如说 setState 时会有 upperCase 的暖心细节处理

Hooks 内部实现其实是链表。当你调用 useState 的时候，我们将指针移到下一项。当我们退出组件的「调用树」帧时，会缓存该结果的列表直到下次渲染开始。

数组也许是比链表更好解释其原理的模型：

```js
// pseudo-code伪代码
let hooks,i
function useState(){
  i++
  if(hooks[i]) return hooks[i] // when re-render
  hooks.push(...) // first render
}
i = -1 // prepare to render
hooks=fiber.hooks || []
YourComponent() // invoke component
fiber.hooks=hooks

大概就是每个 useState 如何获得正确状态的方式。「匹配」对 react 来说并不是什么新知识-这与协调依赖于在渲染前后元素是否匹配是同样的道理。

运行时环境几乎所有重要的方面

有一些地方没有提及-因为我们对他们也不太清楚。react 目前对多道渲染并没有太好支持。当父组件渲染需要子组件提供信息时。错误处理 API 目前也还没有 hooks 版本。这两个问题可能会被一起解决。并发模式在目前看来并不稳定，也有很多关于 Suspense 该如何适应当前版本的有趣问题。也许我会在他们要完成的时候再来讨论
```

并且 Suspense 已经准备好比 lazy loading 能够做得更多。

我认为 react API 的成功之处在于，即使在没有考虑过上面这些大多数主题的情况洗，你也能轻松使用它并且可以走的更远。在大多数情况下，像协调这样好的默认特性启发式地为我们做了正确的事情。在你忘记添加 key 这样的属性，react 能够好心提醒你。

如果你是痴迷于 UI 库的书呆子，我希望这篇文章对你来说会很有趣并且深入阐明了 react 是如何工作的。又或许你会觉得 react 太过于复杂

# Rendered more hooks than during the previous render

×
Error: Rendered more hooks than during the previous render.
▶ 5 stack frames were collapsed.
ChartPanel
./src/pages/NLQ/Main/ChartPanel/index.tsx:67
64 | if (typ == AISearchTab.SELF_HELP_ANALYSIS) content = parsedQueryRes?.content ?? parsedQueryRes
65 |
66 | if (!content && typ != AISearchTab.SELF_HELP_ANALYSIS) return null

> 67 | const { run: selfHelpSearch } = useThrottleFn(

     | ^  68 |   () => {

69 | chartPanelEmitter.emit(SELF_HELP_SEARCH)
70 | },

# Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffects, but useEffect either doesn't have a dependency arr, or one of the dependencies changes on every render.

at SortModal (https://localhost:8000/umi.js:336932:32)
at Field
at div
at
at div
at DimMeasFilters
at ConnectFunction
at div
at Tabpane
at div
at div
at TabpanelList
at div
at Tabs
at Tabs
at div
at NLQMain
at main
at div
at NLQ
at LoadableComponent
at Route
at Switch
之前导致死循环（useEffect 内 setState）：

```js
filters.push(dragItm.field);
setAllFields({ ...allFields, [FieldTyp.FILTER]: filters });
// setAllFields({ ...allFields, [FieldTyp.FILTER]: [...filters,dragItm.field] })
```

# Uncaught Error: Rendered fewer hooks than expected. This may be caused by an accidental early return statement.

https://stackoverflow.com/questions/53472795/uncaught-error-rendered-fewer-hooks-than-expected-this-may-be-caused-by-an-acc

at renderWithHooks (umi.js:269923)
at updateFunctionComponent (umi.js:272229)
at beginWork (umi.js:273936)
at HTMLUnknownElement.callCallback (umi.js:258818)
at Object.invokeGuardedCallbackDev (umi.js:258867)
at invokeGuardedCallback (umi.js:258929)
at beginWork$1 (umi.js:278832)
at performUnitOfWork (umi.js:277644)
at workLoopSync (umi.js:277575)
at renderRootSync (umi.js:277538)
at performSyncWorkOnRoot (umi.js:277161)
at umi.js:266200
at unstable_runWithPriority (umi.js:282014)
at runWithPriority$1 (umi.js:266149)
at flushSyncCallbackQueueImpl (umi.js:266195)
at flushSyncCallbackQueue (umi.js:266182)
at discreteUpdates$1 (umi.js:277288)
at discreteUpdates (umi.js:258629)
at dispatchDiscreteEvent (umi.js:260762)

# Unhandled Rejection (Error): Rendered more hooks than during the previous render.

▶ 6 stack frames were collapsed.
(anonymous function)
./src/pages/portal/editPage/index.tsx:366
363 | return (
364 | <Menu defaultOpenKeys={dftOpenKeys} mode='inline'>
365 | {menusArr.map((v: PortalMenu) => {

> 366 | const [, dragMenuRef] = useDrag({

      | ^  367 |         type: DRAG_MENU_TYP,

368 | item: v,
369 | collect: (monitor) => ({

# Uncaught Error: Unable to find node on an unmounted component.

# ×Error: Rendered fewer hooks than expected. This may be caused by an accidental early return statement.

不要轻易使用 display：a ? 'none' : 'block'(两个 blockDistrictElements 复用同样的 render 逻辑时，里面用上了比较复杂的 hooks，就会导致这个问题)
renderSubMenus 导致的

## solution

遇到已解决的问题。

if 条件去控制 3 种布局的 jsx 时，涉及到不同的菜单渲染逻辑。而在 renderFn 里有一些通过 click 触发的 hook。

这种情况下 react 会触发 fewer or more hooks 的 error，页面白屏。

最后解决方法是放开 jsx 的 if 条件。在 renderFn 里去处理不同条件下的 jsx 返回逻辑

因为 hooks 底层逻辑是基于 固定的各个 hooks 调用顺序的 这一前提

# useState&useEffect

devScripts.js:6523 Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.
