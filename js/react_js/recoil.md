recoil.md
https://recoiljs.org/zh-hans/docs/introduction/getting-started
0.4.1
畏缩；弹回；反作用

如需在组件中使用 Recoil，则可以将 RecoilRoot 放置在父组件的某个位置。将它设为根组件为最佳。

```js
import React from 'react'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'

function App() {
  return (
    <RecoilRoot>
      <CharacterCount />
    </RecoilRoot>
  )
}
```

实现 CharacterCounter 组件：

Atom
一个 atom 代表一个状态。Atom 可在任意组件中进行读写。读取 atom 值的组件隐式订阅了该 atom，因此任何 atom 的更新都将致使使用对应 atom 的组件重新渲染：

```js
const txtSt = atom({
  key: 'txtSt', // unique ID(with respect to other atoms/selectors)
  default: '', // default v (aka initial v)
})
```

在需要使用的组件中，你应该引入并使用`useRecoilState()`。

```js
function CharacterCounter() {
  return (
    <div>
      <TxtInput />
      <CharacterCount />
    </div>
  )
}

function TxtInput() {
  const [txt, setTxt] = useRecoilSt(txtSt)

  const onChange = (ev) => {
    setTxt(ev.target.value)
  }
  return (
    <div>
      <input type='text' value={txt} onChange={onChange} />
      <br />
      Echo: {txt}
    </div>
  )
}
```

# Selector

代表一个派生状态，是状态的转换。可以将派生状态视为将状态传递给以某种方式修改给定状态的纯函数的输出：

```js
const chartCntSt = selector({
  key: 'charCntSt', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const txt = get(txtState)
    return txt.length
  },
})
```

我们可以使用`useRecoilValue()`的 hook，来读取 charCntSt 的值：

```js
function CharacterCnt() {
  const cnt = useRecoilValue(charCntSt)

  return <>Character Cnt: {cnt}</>
}
```

https://github.com/facebook/react/tree/main/packages/react-reconciler
https://github.com/facebookexperimental/Recoil

https://recoiljs.org/zh-hans/docs/introduction/getting-started
