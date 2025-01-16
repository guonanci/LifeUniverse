```js
useState()，状态钩子。为函数组件提供内部状态
// 我们实现一个简易版的useState

let memoizedStates = [ ]  // 多个useState 时需要使用数组来存
let index = 0 // 每次更新state后，索引+1，数组项是依次更新的state值
function useState (initialState) {
   memoizedStates[index] = memoizedStates[index] || initialState
   let currentIndex = index;
   function setState (newState) {
     memoizedStates[currentIndex] = newState
     render()
   }
   return [memoizedStates[index++], setState]
}

```

# 单个state & 多个state

useState 使得我们可以使用多个 st(state) 变量 来保存 state。比如

```js
const [w, setW] = useState(100)
const [h, setH] = useState(100)
const [left, setLeft] = useState(0)
const [top, setTop] = useState(0)

const [state, setState] = useState({ w: 100, h: 100, left: 0, top: 0 }) // setState({...state,left:1})

// ?? which is better
```

如果使用单个 state 变量，每次更新 state 时需要合并之前的 state，因为 useState 返回的 setState 会替换原来的值，这一点和 Class 组件的 this.setState 有所不同，this.setState 会把更新的字段自动合并到 this.state 对象中

```js
const handleMouseMove = (ev) => {
  setState((pervState) => ({
    ...prevState,
    left: ev.pageX,
    top: ev.pageY,
  }))
}
```

如果使用多个 state 变量可以让 state 的粒度更细，更易于逻辑的拆分和组合，比如们可以将关联的逻辑提取到自定义 Hook 中

```js
const usePosition = () => {
  const [left, setLeft] = useState(0)
  const [top, setTop] = useState(0)

  useEffect(() => {
    // effect
    return () => {
      // cleanup
    }
  }, [])

  return [left, top, setLeft, setTop]
}
```

这样一来，我们每次在更新 left时，top 也会随之更新，因此把 top 和 left 拆分为两个 state 变量，显得有点多余

在使用 state 之前，我们通常需要考虑状态拆分的『粒度』问题，如果粒度过细，代码就会冗余；如果过粗，可复用性就会降低。那么到底哪些 state 应该合并？哪些 state 又应该拆分？
简单来说我们遵循的规律主要有以下两点：

- *将完全不相关的 state 拆分为多组 st，比如 size 和 position*
- *如果某些 st 相互关联，或者需要一起发生改变，就可以把他们合并为一组 st，比如 left 和 top*

```js
const Box = () => {
  const [position, setPosition] = usePosition()
  const [state, setState] = useState({ w: 100, h: 100 })
}
const usePosition = () => {
  const [position, setPosition] = useState({ left: 0, top: 0 })

  useEffect(() => {
    // ...
  }, [])

  return [position, setPosition]
}
```

不要在 FC 里死循环 setState1（就算 state1 没变，但是 if 条件一直满足还是会死循环）

- 将完全不相关的 state 拆分为多组 state
- 如果某些 state 相互关联，或者需要一起发生改变，就可以把他们合并为一组 state
- 依赖数组的值最好不要过多，如果发现依赖数组的值过多，我们应该采取一些方法来减少它
  - 去掉不必要的依赖
  - 将 Hook 拆分为更小单元，每个 Hook 依赖于各自的依赖数组
  - 通过合并相关 state，将多个依赖值聚合为一个
  - 通过 setState 回调函数获取最新 state，减少外部依赖
  - 通过 ref 来获取可变变量的值，不过需要注意控制修改控制

组件的重复渲染次数应该尽量减少，不要依赖 setState，而应该采用调用栈内传递的方式(而应该)

# useState&useEffect&&EventBus.on

三者相结合时，要通过useState的回调功能来更新state，要不然会造成卡顿！！

卡顿时可通过浏览器的性能标签页，分析到js函数调用栈的最消耗性能的，具体相关代码行！！
