描述下hooks下怎么模拟生命周期函数，模拟的生命周期和class中的生命周期有啥区别？

*componentDidMount对应：依赖项为空数组[]*

```js
useEffect(()=>{}, []) // componentDidUpdate
useEffect(()=>{
  document.title = `You clicked ${count} times`;return ()=>{
    // 以及 componentWillUnmount 执行的内容
  }
}, [count])

function Parent() {
  const [count,setCount] = useState(0);
  // shouldComponentUpdate, 只有 Parent 组件中的 count state 更新了，Child才会重新渲染，否则不会。
  const child = useMemo(()=>
    <Child count={count} />
  , [count]);
  return <>{count}</>
}
function Child(props) {
  return <div>Count:{props.count}</div>
}

默认的useEffect，依赖项不是空数组，它return的清理函数，和componentWillUnmount有本质区别。默认情况下的return，在每次useEffect执行前都会执行，并不是只在组件卸载时执行。
useEffect在副作用结束之后，会延迟一段时间执行，并非同步执行，和compontDidMount有本质区别。遇到dom操作，最好使用useLayoutEffect。


```
