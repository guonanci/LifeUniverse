seMemo和useCallback：可缓存函数的引用或值，useMemo用在计算值的缓存，注意不用滥用。经常用在下面两种场景（要保持引用相等；对于组件内部用到的 object、array、函数等，如果用在了其他 Hook 的依赖数组中，或者作为 props 传递给了下游组件，应该使用 useMemo/useCallback）

```js
useCallback
useCallback 返回一个函数，只有在依赖项发生变化时，才会更新（返回一个新的函数），多用于生成一个防抖函数
注意：组件每次更新时，所有方法都会重新创建，这样之前写的防抖函数就会失效，需要使用useCallback包裹
import {debounce} from 'debounce'
// 第二个参数为要监听的变量，当为空数组时[]，submit只会被创建一次
// 当监听有值时，会随着值的变化重新创建生成新的submit
const submit = useCallback(debounce(fn, 2000), [])
<button onClick={() => submit()}>提交</button>
复制代码
useMemo
useMemo 只有在依赖项发生改变的时候，才会重新调用此函数，返回一个新的值, 类似于vue中的computed 计算属性
const info = useMemo(() => {
  //  定义info变量， 该变量会随着 inputPerson, inputAge的变化而变化， info可以在页面中显示
  return {
    name: inputPerson,
    age: inputAge
  };
}, [inputPerson, inputAge]);


作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

useCallback和useMemo都可缓存函数的引用或值，但是从更细的使用角度来说useCallback缓存函数的引用，useMemo缓存计算数据的值。
两者区别：
1.useMemo 计算结果是 return 回来的值, 主要用于*缓存计算结果的值 ，应用场景如： 需要计算的状态*
2.useCallback 计算结果是函数, 主要*用于缓存函数，应用场景如: 需要缓存的函数，因为函数式组件每次任何一个 state 的变化时，整个组件都会被重新刷新，而一些函数是没有必要被重新刷新的。所以此时就应该缓存起来，提高性能，和减少资源浪费*。

作者：刘波比
链接：https://juejin.cn/post/7074478486231990279
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


# 该不该使用

有的人从来没有思考过，有的人甚至不觉得是个问题：经常见到的做法，只要用 useMemo 或 useCallback 简单得包裹下，似乎就能使应用远离性能的问题，但真是这样吗
有时候 useMemo 没有任何作用，甚至还会影响应用性能

useMemo 本身也有开销，会「记住」一些值，同时在后续 render 时，将依赖数组项取出来上一次记录项进行比较，如果不相等才会重新执行回调，否则直接返回
「记住」的值，这个过程本身就会消耗一定的内存和计算资源。所以过度使用 useMemo 会影响程序性能

# 场景

- 有些计算开销很大，我们就需要「记住」它的返回值，避免每次 render 都去重新计算
- 由于值引用发生变化，导致下游组件重新渲染，我们也需要记住这个值

```js
const Example = ({ page, typ }) => {
  const resolvedV = useMemo(() => {
    return getResolvedV(page, typ)
  }, [page, typ])

  return <ExpensiveComponent resolvedV={resolvedV} />
}
```

在上面的例子中，渲染 ExpensiveComponent 的开销很大，所以当 resolvedV 的引用发生变化时，我们不想重新渲染这个组件，因此我们使用 useMemo 来避免
每次 render 的时候重新计算 resolvedV，导致他的使用发生改变，从而使下游组件 re-render

1. 传递给 useMemo 的函数开销大不大
   1. 上面例子中，就是考虑 getResolvedV 开销大不大，JavaScript 中大多数方法都是优化过的，比如 Array.map，Array.forEach 等等
2. 当输入相同时，记忆的值的引用是否会发生改变
   1. 对创建函数开销的评估，有的人觉得在 render 中创建函数可能会开销比较大，为了避免函数多次创建，使用了 useMemo、useCallback，但是对于现
   2. 代浏览器来说，创建函数的成本微乎其微

因此我们没有必要使用 useMemo 或者 useCallback 去节省这部分性能开销，当然如果是为了保证每次 render 时回调的引用相等，你可以放心使用 useMemo
useCallback
其实通常来说在这里可能会存在一些争议，那就是如果只是想在重新渲染时保持值的引用不变，除了可以使用 useMemo 外，还可以使用 useRef，那么它们两者之间有什么区别呢？

```js
const Example = () => {
  const users = useMemo(() => [1, 2, 3], [])
  return <ExpensiveComponent users={users} />
}

// 使用 useRef
const Example = () => {
  const { current: users } = useRef([1, 2, 3])
  return <ExpensiveComponent users={users} />
}
```

可以看出，用 useMemo 来记住 users 数组，不是因为数组本身开销大，而是因为 users 引用在每次 render 时都会发生改变，从而导致子组件 ExpensiveComponent
重新渲染（可能会带来较大开销）
虽然 useRef 和 useMemo 的实现有一点差别，但是当 useMemo 的依赖数组为空数组时，可以说和 useRef 相差无几，甚至可以直接用 useMemo 来实现：

```js
const useRef = (v) => {
  return useMemo(() => ({ current: v }), [])
}
```

所以说 useMemo 和 useRef 都可以用来保持值的引用一致
在编写自定义 hook 时，返回值一定要保持引用的一致性，因为你无法确定外部如何使用它的返回值，如果返回值被用作其他 hook 的依赖，并且每次 re-render
时引用不一致（当值相等的情况），就可能会产生问题：

```js
const useData=()=>
```

3.

## & useCallback

https://jancat.github.io/post/2019/translation-usememo-and-usecallback/

# 应该使用 useMemo 的场景

1. 保持引用相等
   - 对于组件内部用到的 obj/arr/函数等等，如果用在了其他 hook 的依赖数组中，或者作为 prop 传递给了下游组件，应该使用 useMemo
   - 自定义 hook 暴露出的 obj/arr/函数等，**都应该使用 useMemo，以确保当值相同时引用不发生变化**
   - 使用 Context 时，如果 Provider 的 value 中定义的值（第一层）发生了变化，即便用了 Pure Component 或者 React.memo，仍然会导致子组件
     - re-render，这种情况下，仍然建议使用 useMemo 保持引用的一致性
2. 成本很高的计算
   1. 比如 cloneDeep 一个很大并且层级很深的数据

# 无需使用 useMemo 的场景

1. 如果返回值是原始值 string、boolean、Null、undefined、number、symbol（不包括动态声明的 Symbol，一般不需要使用 useMemo
2. 仅在组件内部用到的 obj、arr、函数等等（没有座位 props 传递给子组件），且没有用到其他 hook 的依赖数组中，一般不需要使用 useMemo

# 一些好的实践方式

1. 若 Hook 类型相同，且依赖数组一致时，应该合并为一个 Hook，否则会产生更多开销

```js
const dataA = useMemo(() => {
  return getDataA()
}, [A, B])
const dataB = useMemo(() => {
  return getDataB()
}, [A, B])

// should be merged
const [dataA, dataB] = useMemo(() => {
  return [getDataA(), getDataB()]
}, [A, B])
```

2. 参考原生 hooks 的设计，自定义 Hooks 的返回值可使用 Tuple 类型，更易于在外部重命名，但如果返回值数量超过 3 个，还是建议返回一个对象

```js
export const useToggle = (dftVisible: boolean = false) => {
  const { visibility, setVisibility } = useState(dftVisibility)
  const show=()=>setsVisible(true)
  const hide=()=>setsVisible(false)
  return [visible,show,hide] as [typeof visible,typeof show, typeof hide]
}
const [isOpen, open, close]=useToggle()
const [visible, show, hide]=useToggle()

```

3. ref 不要直接暴露给外部使用，而是提供一个修改值的方法
4. 在使用 useMemo 或者 useCallback 时，确保返回的函数只创建一次，也就是说，函数不会根据依赖数组的变化而二次创建，举个例子

```js
export const useCnt = () => {
  const [cnt, setCnt] = useState(0)

  const [increase, decrease] = useMemo(() => {
    const increase = () => {
      setCnt(cnt + 1)
    }
    const decrease = () => {
      setCnt(cnt - 1)
    }
    return [increase, decrease]
  }, [cnt])

  return [cnt, increase, decrease]
}
// 通过 setState 回调，让函数不依赖外部变量
export const useCnt = () => {
  const [cnt, setCnt] = useState(0)

  const [increase, decrease] = useMemo(() => {
    const increase = () => {
      setCount((latestCount) => latestCount + 1)
    }
    const decrease = () => {
      setCount((latestCount) => latestCount - 1)
    }
    return [increase, decrease]
    // 保持依赖数组为空，这样 increase 和 decrease 方法只会被创建一次
  }, [])

  return [cnt, increase, decrease]
}

// 通过 ref 来保存可变变量
export const useCnt = () => {
  const [cnt, setCnt] = useState(0)
  const cntRef = useRef(cnt)
  useEffect(() => {
    cntRef.current = cnt
  })

  const [increase, decrease] = useMemo(() => {
    const increase = () => {
      setCnt(cntRef.current + 1)
      // setCount(latestCount => latestCount + 1)
    }
    const decrease = () => {
      setCnt(cntRef.current - 1)
      // setCount(latestCount => latestCount - 1)
    }
    return [increase, decrease]
    // 保持依赖数组为空，这样 increase 和 decrease 方法只会被创建一次
  }, [])

  return [cnt, increase, decrease]
}
```

在 useCnt hook 中，cnt 状态的改变会让 useMemo 中的 increase 和 decrease 函数被重新创建，由于闭包特性，如果这两个函数被其他 hook 用到了，我们应该将这两个函数也添加到相应 hook 的依赖数组中，否则就产生问题

```js
const Counter = () => {
  const [cnt, increase] = useCount()

  useEffect(() => {
    const handleClick = () => {
      // 执行后 cnt 值永远都是1
      increase()
    }
    document.body.addEventListener('click', handleClick)
    return () => {
      document.body.removeEventListener('click', handleClick)
    }
  }, [])
  return <h1>{cnt}</h1>
}
```

在 useCnt 中
首先 increase 的变化会导致频繁地绑定事件监听，以及解除事件监听
其次需求是只在组件 mount 时执行一次 useEffect，但是 increase 的变化会导致 useEffect 多次执行，不能满足需求
那么我们如何解决这些问题呢？有下面两种方式

通过 setState 回调，让函数不依赖外部变量，例如

# 应该使用 useMemo 的场景

- 保持引用相等
- 成本很高的计算

# 无需使用 useMemo 的场景

- 如果返回值是原始值，一般不需要使用 useMemo
- 仅在组件内部用到的 object、array、函数等等（没有作为 props 传递给子组件）：一般不需要使用 useMemo

# 若 hook 类型相同，且依赖数组一致时，应该合并成一个 Hook

# 自定义 Hook 的返回值可以使用 Tuple 类型，更易于在外部重命名，如果返回值过多，则不建议使用

# ref 不要直接暴露给外部使用，而是提供一个修改值的方法

在使用 useMemo，useCallback 时，可以借助 ref 或 setState、callback，确保返回的函数值只创建一次，也就是说，函数不会根据依赖数组的变化而二次创建
