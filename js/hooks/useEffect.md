# 搞懂useState和useEffect的实现原理
https://zhuanlan.zhihu.com/p/608959809

*useEffect在render 阶段会把 effect 放到 fiber 的 updateQueue 中，这是一个 lastEffect.next串联的环形链表，然后在commit阶段，会异步执行所有 fiber 节点的 updateQueue中的effect*。

useLayoutEffect 和 useEffect 差不多，区别只是它是在 commit 阶段的 layout 阶段同步执行所有 fiber 节点的 updateQueue 中的 effect。

useState 同样分为 mountState 和 updateState 两个阶段：

mountState 会返回 state 和 dispatch 函数，dispatch 函数里会记录更新到 hook.queue，然后标记当前 fiber 到根 fiber 的 lane 需要更新，之后调度下次渲染。

再次渲染的时候会执行 updateState，会取出 hook.queue，根据优先级确定最终的 state 并返回，这样渲染出的就是最新的结果。



useEffect()，副作用钩子。它接收两个参数， 第一个是进行的异步操作， 第二个是数组，用来给出Effect的依赖项

When using `useEffect`, take care not to return anything other than a function or undefined, otherwise both TypeScript and React will yell at you. This can be subtle when using arrow functions:

```tsx
function DelayedEffect(props:{timerMs:number}){
  const { timerMs,  } = props
  useEffect(
    ()=>
    setTimeout(()=>{
      // do stuff

    },timerMs)
    // bad example! setTimeout implicitly returns a number
    // because the arrow function body isn't wrapped in curly braces

    // Better; use hte void keyword to make sure you return undefined
    useEffect(()=>{
      setTimeout(() => {
        // do Stuff
      }, timerMs);
    })
    return null
  )
}
```

为了避免每次 render 都去执行他的 cb，通常会传入第二个参数 dependency arr，也就是我们常说的「依赖数组」

在上面的例子中，只有当 id 或 name 发生变化时，才会打印日志，依赖数组中必须包含在 callback 内部用到的所有参与 React 数据流的值，比如 state、props 以及它们的衍生物，如果有遗漏，可能会埋下隐患

```js
const Example = ({ id, name }) => {
  useEffect(() => {
    // 由于依赖数组中不包含 name，所以当 name 发生变化时，无法打印日志
    console.log(id, name);
  }, [id]);
};
```

在 React 中，除了 useEffect 外，接收依赖数组作为参数的 hook 还有 useMemo/useCallback/useImperativeHandle

刚才说到，依赖数组中千万不要遗漏回调函数内部依赖的值，但是如果依赖数组依赖了过多东西，可能导致代码难以维护

```js
const refresh=useCallback(()=>{
  // ...
},[name,searchSt,address,st,personA,personB,progress,page,size])

const Example = ({ id }) => {
  const requestParams = useRef({})

  useEffect(() => {
    requestParams.current = { page: 1, size: 20, id }
  })

  const refresh = useCallback(() => {
    doRefresh(requestParams.current)
  }, [])

  useEffect(() => {
    id && refresh()
  }, [id, refresh])
}
// 虽然 useEffect 的回调函数依赖了 id 和 refresh 方法，但是我们观察 refresh 方法可以发现，它在首次 render 被创建之后，就永远不会发生改变了，因此把它作为 useEffect 的 deps 是多余的

其次，如果这些依赖真的都是需要的，那么这些逻辑是否应该放到同一个 Hook 中

const Example = ({ id, name, address, status, personA, personB, progress }) => {
  const [page, setPage] = useState()
  const [size, setSize] = useState()

  const doSearch = useCallback(() => {
    // ...
  }, [])

  const doRefresh = useCallback(() => {
    // ...
  }, [])

  useEffect(() => {
    id && doSearch({ name, address, status, personA, personB, progress })
    page && doRefresh({ name, page, size })
  }, [id, name, address, status, personA, personB, progress, page, size])
}
可以看出，在 useEffect 中有两段逻辑，而且这两段逻辑是相互独立的，因此我们可以将这两段逻辑放到不同 useEffect 中

useEffect(() => {
  id && doSearch({ name, address, status, personA, personB, progress })
}, [id, name, address, status, personA, personB, progress])

useEffect(() => {
  page && doRefresh({ name, page, size })
}, [name, page, size])
// 但是如果逻辑无法继续拆分，但是依赖数组还是依赖了过多东西，该怎么办呢？就比如我们上面的代码

useEffect(() => {
  id && doSearch({ name, address, status, personA, personB, progress })
}, [id, name, address, status, personA, personB, progress])
// 这段代码中的 useEffect 依赖了七个值，但是我们仔细观察上面的代码，可以发现这些值都是『过滤条件』的一部分，通过这些条件可以过滤页面上的数据，因此我们可以将它们看做一个整体，也就是我们前面讲过的合并 state

const [filters, setFilters] = useState({
  name: '',
  address: '',
  status: '',
  personA: '',
  personB: '',
  progress: '',
})

useEffect(() => {
  id && doSearch(filters)
}, [id, filters])
// 但是如果 state 不能合并，并且在 callback 内部又使用了 setState 方法的话，我们可以考虑使用 setState cb 来减少一些依赖，比如
const useValues=()=>{
  const [values, setValues] = useState({data:{},cnt:0})
  const [updData]=useCallback(
    (nextData) => {
      setValues({data:nextData,
      // 因为 cb 内部依赖了外部的 values 变量，所以必须在依赖数组中指定它
      cnt:values.cnt+1})
    },
    [values],
  )
  return [values,updData]
}
// 上面的代码中，我们必须在 useCallback 依赖数组中指定 values，否则我们无法在 cb 中获取到最新的 values。但是通过 setState回调函数，我们
// 就不用再依赖外部values 变量，因此也无需在依赖数组中指定它：
const useValues=()=>{
  const [values, setValues] = useState({})

  const [updData]=useCallback(
    (nextData) => {
      setValues(prevValues=>({
        data:nextData
        // 通过 setState 回调函数获取最新的 values 状态，这时 cb 不再依赖于外部的 values 变量了
        // 因此依赖数组中不需要指定任何值
      }))
      // 这个 cb 永远不会重新创建
    },
    [],
  )
}
```

- 依赖数组最好不要超过 3 个依赖项
- 如果过多：
  - 去掉不必要的依赖
  - 将 hook 拆分为更小单元，每个 hook 依赖于各自的依赖数组
  - 通过合并相关 st，将多个依赖值聚合为一个
  - 通过 setState 回调获取最新 st，以减少外部依赖
  - 通过 ref 来读取可变变量值，不过需要注意控制修改它的途径

# event-emitter

`chartPanelEmitter.on`处于 useEffect 内部时，会存在旧数据问题，

两个 effect 里面有相同的一个参数时一定要小心，很有可能会导致严重 bug。所以最好要避免这种情况，而是早就联动 eff。

一定要搞清楚整体的**数据流**，每个细节（另外区分好 didMount，didUpd，unmount3 个状态的不同细节处理）。自从采取这个原则后，我发现写代码变简单了（jsx 的重复渲染次数减少了）

但是有一点要注意一下，就算是：就是一个组件有存在两种复用情况，自更新和外部更新引发自更新（数据源还是从外部传递进来）：比方说预览和编辑页面要用到同一个组件，也采用同样的数据流：后者）------editPage/index.tsx & viewPage/index.tsx 都复用 PreviewCmpt.tsx

组件要受控。

didMount 和 didUpd 公用数据时，可以用 useMemo 统一起来，方便更新

# debug

```js
Expected 2 arguments, but got 1.ts(2554)
index.d.ts(1116, 43): An argument for 'deps' was not provided.
```

useEffect 会执行两遍（initialDependencyList 和 newDependencyList）

监听 的执行次数（console.log）

refVar as a dep can lead to 堆栈溢出
