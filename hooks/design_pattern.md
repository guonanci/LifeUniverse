阿里技术-当设计模式遇上 hooks
**hooks 核心思想在于函数式编程**，于是决定探究一下‘设计模式是否有助于我们写出更优雅的 Hooks’

# why

挑水，扎马步等基本功。夯实基础后学习武义突飞猛进，最终成为一代大侠。‘数据结构’和‘设计模式’不一定让我们走的快但是一定让我们走得稳走的远，高可靠易于维护，避免日后被‘挖坟’

Hooks 发布以来，维护成本激增，特别是对于成员能力水平差距较大的团队。即便一开始由经验老到的同学搭建整个项目框架；一旦交由新人维护一段时间后，大概率也会变得面目全非，
使用 hooks 从 0 到 1 开发工程。**hooks 高度灵活性，Class Components 有一系列生命周期来约束，而 Hooks 除了 API 参数上的约束，也近有‘只在最顶层使用 hook’，‘只在 react 函数中调用 hook’2 条强制规则**另一方面自定义**hook 提高组件逻辑复用率的同时，也导致经验不足的开发者在抽象时缺少设计**。Class cmpt 中对于逻辑的抽象通常会抽象为纯函数，而 Hooks 的封装可能会带各种副作用 useEffect，出现 bug 时排查成本较大。

‘设计模式’是基本功，‘hooks’是新招式，从设计模式出发，掌握新招式。

**SOLID**Single Responsibility Principle, Open Closed,Liskov Substitution,Law of Demeter,Interface Segregation,Dependence Inversion.单例、策略、代理、迭代器、发布-订阅、命令、组合、模板方法、享元、职责链、中介者、装饰者、状态、适配器

# 1+1》2

## 1 非得用 useContext 嘛（cxt）

react hook 工程中，一旦涉及到全局状态管理，我们的直觉会是使用 useContext。
举个例子，**假设工程中需要根据灰度接口返回的信息，决定某些组件是否进行渲染**由于整个工程共享一份灰度配置，我们很容易就想到将其作为一个全局状态，在工程初始化时调用异步接口获取并进行初始化，然后在组件内部使用 useCxt 来获取。

```js
// cxt.js
const GrayCxt = React.createContext()
export default GrayCxt

// App.js
import GrayCxt from './context'
function App() {
  console.log('App rerender')
  const [globalSts, setGlobalSts] = useState({})
  useEffect(() => {
    console.log('Get GrayState')
    setTimeout(() => {
      setGlobalSts({ gray: true })
    }, 1000)
    return () => {}
  }, [])
  return (
    <GrayCxt.Provider value={globalSts}>
      <GrayCmpt />
      <OtherChild />
    </GrayCxt.Provider>
  )
}

// GrayCmpt/idx.js
function GrayCmpt() {
  console.log('GrayCmpt rerender')
  const grayState = useContext(GrayCxt)

  return (
    <div>
      child-node
      {graySt.gray && <div>gray-field</div>}
    </div>
  )
}

// OtherChild/index.js
function OtherChild() {
  console.log('OtherChild rerender')
  return <div>其他子节点</div>
}
```

**但是 createContext 的使用会造成一旦全局状态发生变更，Provider 下的所有组件都会重新渲染，哪怕它没有消费 cxt 下的任何信息**

仔细想想，这种场景和发布订阅有异曲同工之妙，我们可以自己定义一个全局状态实例 GraySt，在 App 组件中初始化值，在子组件中订阅该实例的变化，也能够达到相同效果，并且仅订阅了 GraySt 变化的组件会进行重新渲染

```js
// GraySt.js
class GraySt {
  constructor() {
    this.observers = []
    this.sts = {}
  }
  attach(fn) {
    if(!this.observers.includes(fn)) {
      this.observers.push(fn)
    }
  }
  detach(fn){
    this.observers = this.observers.filter(observer=>observer!==fn) // 判断两函数相等？
  }
  updateSts(v) {
    this.sts = v
    this.trigger()
  }
  trigger() {
    for (let i = 0;i<this.observers.length;i++){
      this.observers[i](this.sts)
    }
  }
}
export default new GraySt()

// App.js
function App() {
  console.log('App rerender')
  useEffect(() => {
    console.log('Get GraySt)
    setTimeout(() => {
      const nextSts = {
        gray: true
      }
      GraySt.updateSts(nextSts)
    }, 200);
    return () => {

    }
  }, [])
  return (
    <div>
      <GrayCmpt />
      <OtherChild />
    </div>
  )
}

// GrayCmpt/index.js
import GraySt from './GraySt.js'
function GrayCmpt() {
  console.log('GrayCmpt rerender')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const changeVisible = (sts) => {
      setVisible(sts.gray)
    }
    return () => {
      GraySt.detach(changeVisible)
    }
  }, [])

  return (
    <div>
      子节点
      {visible &&<div>灰度字段</div>}
    </div>
  )
}
```

最终实现的效果是一致的，不同的是获取灰度状态后，仅仅依赖配置信息的 GrayCmpt 进行了重新渲染。

考虑更好的复用的话我们还可以将对 sts 监听的部分抽象为一个自定义 hook：

```js
// useSts.js
import { useState, useEffect } from 'react'
import GraySt from './GraySt'
function useGray(k) {
  const [hit, setHit] = useState(false)
  useEffect(() => {
    const changeLocalSts = (sts) => {
      setHit(sts[k])
    }
    GraySt.attach(changeLocalSts)
    return () => {
      GraySt.detach(changeLocalSts)
    }
  }, [])
  return hit
}
export default useGray

// GrayCmpt/index.js
import useSts from './useGray.js'
function GrayCmpt() {
  console.log('GrayCmpt rerender')
  const [visible, setVisible] = useState('gray')

  return (
    <div>
      child-node
      {visible && <div>gray-field</div>}
    </div>
  )
}
```

当然，借助 redux 也是能够做到按需重新渲染，但如果项目中并没有大量全局状态的情况下，使用 redux 就显得有点杀鸡焉用牛刀了。

## useState 还是 useReducer

我开发中只用到 useState，useEffect，其他钩子似乎不怎么需要。的样子。这种感慨源于对 hooks 的理解还不够透彻，useCallback，useMemo 是一种在必要时刻才使用的性能优化钩子，平常接触较少也是有可能的，useReducer 是 useState 的替代方案

举个状态模式中最为常见的例子 -- 音乐播放器的顺序切换器

```js
function Mode() {
  // 普通书写模式
  const [mode, setMode] = useState('order')
  const changeHandle = useCallback((mode)=>{ // 模式切换行为
    if (mode === 'order') {
      console.log('switch to random mode')
      setMode('random')
    } else if (mode == 'random') {
      console.log('switch to loop mode')
      setMode('loop')
    } else if (mode == 'loop') {
      console.log('switch to order mode')
      setMode('order')
    }
  }, [])

  return (
    <div>
      <Button onClick={() => changeHandle(mode)}>switch mode</Button>
      <div>{mode}</div>
    </div>
  )
}
模式的切换依赖于上一个状态 ’order-random-loop‘依次切换。目前只有3种模式，可以使用简单的if-else方式实现，但一旦模式多了便会十分难以维护和扩展，所以，针对这种行为依赖于状态的场景，当分支增长到一定程度时，需要考虑使用’状态模式‘重新设计
```

```js
function Mode() {
  // 普通的状态模式实现
  const [mode, setModel] = useState({})

  useEffect(() => {
    const MODE_MAP = {
      order: {
        txt: 'order',
        press: () => {
          console.log('switched at random mode')
          setMode(MODE_MAP.random)
        },
      },
      random: {
        txt: 'random',
        press: () => {
          console.log('switched at loop mode')
          setMode(MODE_MAP.loop)
        },
      },
      loop: {
        txt: 'loop',
        press: () => {
          console.log('switched at order mode')
          setMode(MODE_MAP.order)
        },
      },
    }
    setMode(MODE_MAP.order)
    return () => {}
  }, [])

  return (
    <div>
      <Button onClick={() => mode.press()}>switch mode</Button>
      <div>{mode.txt}</div>
    </div>
  )
}
```

React 官网中对 useReducer 的解释中提到「在某些场景下，useReducer 会比 useState 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等」。这里着重看一下后一个场景，「类的行为是基于它的状态改变」的“状态模式”就是一种典型的依赖上一个状态的场景，这使 useReducer 天然的适用于多状态切换的业务场景。

```js
// 借助reducer更便捷实现状态模式
const reducer = (st) => {
  switch (st) {
    case 'order':
      console.log('switch to random mode')
      return 'random'
    case 'random':
      console.log('switch to loop mode')
      return 'loop'
    case 'loop':
      console.log('switch to order mode')
      return 'order'
  }
}

function Mode() {
  const [mode, dispatch] = useReducer(reducer, 'order')

  return (
    <div>
      <Button onClick={dispatch}>switch mode</Button>
      <div>{mode}</div>
    </div>
  )
}
```

# 自定义 hook 封装原则

自定义 hook 是 react hook 广受欢迎的重要原因，然后一个抽象不佳的自定义 hook 却可能极大增加维护成本。在《the ugly side of react hooks》‘the hidden side effect’章节中就列举了一个层层嵌套的副作用带来的异常排查成本。我们经常说设计原则和设计模式有助于提高代码的可维护性和可扩展性。那么有哪些原则、模式能够帮助我们优雅地封装自定义 hooks 呢。

**OS：如何优雅地封装自定义 Hooks 是一个很大的话题，这里仅仅抛砖引玉讲述几个观点。**

## 第零要义：存在数据驱动

在比较 Hooks 和类组件开发模式时，常常提到的一点就是 Hooks 有助于我们在组件间实现更广泛的功能复用。于是，刚开始学习 hooks 时，对于任何可能有复用价值的功能逻辑，我经常矫枉过正地封装成奇奇怪怪的 Hooks，比如针对’在用户关闭通知且当天第一次打开时，进行二次提醒打开‘这么一个功能，我抽象了一个 useTodayFirstOpen：

```js
function useTodayFirstOpen() {
  const [sts, setSts] = useState()
  const [isTodayFirstOpen, setIsTodayFirstOpen] = useState(false)

  useEffect(() => {
    // 获取用户状态
    const fetchSts = async () => {
      const resp = await getUserSts()
      setSts(resp)
    }
    fetchSts()
    // 判断今天是否首次打开
    const isTodayFirstOpenInLocalStorage =
      window.localStorage.getItem('isTodayFirstOpen')
    if (!isTodayFirstOpenInLocalStorage) {
      setIsTodayFirstOpen(true)
    } else {
      const curDate = getNowDate()
      setIsTodayFirstOpen(curDate !== isTodayFirstOpenInLocalStorage)
    }
  }, [])

  useEffect(() => {
    if (sts <= 0) {
      // 未打开时进行二次提醒
      setTimeout(() => {
        tryToPopConfirm({
          onConfirm: () => {
            setSts(1)
            updUserSts(1)
          },
        })
      }, [200])

      window.localStorage.setItem('isTodayFirstOpen', Date.now())
    }
    return () => {}
  }, [sts, isTodayFirstOpen])
}
```

**事实上，他并没有返回任何东西，在组件内调用时也仅仅是 useTodayFirstOpen（）。回过头来，这块功能并没有任何的外部数据流入，也没有数据流出，完全可以将其抽象为一个高阶函数，而不是一个自定义 hooks**.因此具有复用价值且与外部存在数据驱动关系的功能模块才有必要抽象为自定义 Hooks

## 第一要义：单一职责原则

SRP 建议一个方法只有一个引起变更的原因。自定义 hooks 本质上就是一个抽象方法，方便实现组件内逻辑功能的复用。但是如果一个 hooks 承担了太多职责（他又不是像我们人类一样的智慧体），则可能造成某一个职责的变动会影响到另一个职责的执行，造成意想不到的后果，也增加了后续功能迭代过程中出错的概率。至于什么时候应该拆分，参照 SRP 中推荐的职责分离原则，在 Hooks 中更适合解释为’如果引起两个数据变更的原因不是同一个时，则应该将两者分离。

以 useTodayFirstOpen 为例，假设外界还有 Switch 控件需要根据 sts 做展示与交互：

```js
function useTodayFirstOpen() {
  const [sts, setSts] = useState()
  const [isTodayFirstOpen, setIsTodayFirstOpen] = useState(false)
  const updSts = async (v) => {
    const resp = await updUserSts(v)
    // doSth
  }
  return [sts, updSts]
}
```

假设 getUserSts 的返回格式发生了改变，需要修改该 hook。

```js
function useTodayFirstOpen() {
  const [status, setStatus] = useState()
  const [isTodayFirstOpen, setIsTodayFirstOpen] = useState(false)

  useEffect(() => {
    // 获取用户状态
    const fetchStatus = async () => {
      const res = await getUserStatus()
      setStatus(res.notice)
    }
    fetchStatus()
    // ...
  }, [])

  // ...
}
```

假设再有 1 天，监管反馈每天的二次提醒频率太高了，要求改为每周。

```js
function useThisWeekFirstOpen() {
  const [sts, setSts] = useState()
  const [isThisWeekFirstOpen, setIsThisWeekFirstOpen] = useState(false)

  useEffect(() => {
    // getUserSts
    // ...
    // 判断这周是否首次打开
    const isThisWeekFirstOpenInLocalStorage = window.localStorage.getItem(
      'isThisWeekFirstOpen'
    )
    if (!isThisWeekFirstOpenInLocalStorage) {
      setIsThisWeekFirstOpen(true)
    } else {
      const curDate = getNowDate()
      setIsThisWeekFirstOpen(
        diffDays(curDate, isThisWeekFirstOpenInLocalStorage) >= 7
      )
    }
    return () => {}
  }, [])
}
```

这显然违背了单一职责原则，此时需要考虑分离 sts 和...FirstOpen 逻辑，使其更加通用，再以组合的形式抽象为业务 Hook。

```js
// user status management
function useUserSts() {
  const [sts, setSts] = useState()
  const fetchSts = async () => {
    const resp = await getUserSts()
    setSts(resp)
  }

  useEffect(() => {
    fetchSts()
    return () => {}
  }, [])

  const updSts = useCallback(async (typ, v) => {
    const resp = await updUserSts(typ, v)
    if (resp) {
      console.log('set successfully')
      fetchSts()
    } else {
      console.log('set failed')
    }
  }, [])

  return [sts, updSts]
}

// 提示去打开APP通知(二次提醒，相比于刚下载完app厚的第一次请求允许通知而言，这里是第二次)
function useOpenNoticeTip(k, gapDays, confOpts = {}) {
  const [isConfirmed, setIsConfirmed] = useState(false)
  const showConf = useCallback(() => {
    const curTime = Date.now()
    const lastDay = window.localStorage.getItem(`${k}_lastCheckDay`)
    if (!lastDay || diffDays(cur, lastDay) > gapDays) {
      setTimeout(async () => {
        tryToPopConfirm({
          title: confOpts.title,
          content: confOpts.content,
          onConfirm: () => setIdConfirmed(true),
        })
      }, 200)
      window.localStorage.setItem(`${k}_lastCheckDay`, curTime)
    }
  }, [gapDays])

  return [isConfirmed, showConf]
}

function useStsWithSecondConf(typ, gapDays, confOpts) {
  const [userSts, setUserSts] = useUserSts()
  const [isConfirmed, showConf] = useOpenNoticeTip(typ, gapDays, confOpts)
  // if it's closeSts then prompt the user whether to open again
  useEffect(() => {
    console.log(userSts)
    if (userSts && userSts[typ] <= 0) showConf()
    return () => {}
  }, [userSts])

  // 确认后修改用户状态
  useEffect(() => {
    if (isConfirmed) setUserSts(typ, 1)
    return () => {}
  }, [])

  return [userSts ? userSts[typ] : null, setUserSts]
}

// 使用时
function Cmpt() {
  const [sts, setSts] = useStsWithSecondConf('notice', 1, {
    title: '是否打开通知',
    content: '打开通知以免错过重要信息',
  })

  return (
    <>
      <label>打开消息通知</label>
      <Switch checked={sts} onChange={setSts} />
    </>
  )
}
```

改造之后，如果获取/设置用户状态的接口发生变动，则修改 useUserSts；如果提示效果需要改动（如上报日志），则修改 useOpenNoticeTip；如果业务上调整了提示打开通知逻辑（会员不提示打开 APP 通知），则仅需修改 `useStsWithSecondConf`，各自定义 Hooks

## 第 n+1 要义努力探索中。。。，留个坑，以后有新想法再继续分享

说实话，本文的确有蹭’react hooks‘热点的嫌疑（手动狗头），但不得不说数据结构与设计模式是 yyds，他能够知道我们开发复杂系统中寻得一条清晰的道路，那既然都说 hooks 难以维护，那就让【神】来拯救这混乱的局面。本文并不是为了辩论【hooks 是否强于类开发】这一话题，如果有兴趣的话，欢迎加入 ES2049，说不定还能赶上下一场辩论。

# https://medium.com/swlh/the-ugly-side-of-hooks-584f0f8136b6

In this post, I will share my own point of view about React Hooks, and as the title of this post implies, I am not a big fan.

Let's break down the motivation for ditching 抛弃 classes in favor of hooks, as described in the official React's docs.

## Motivation #1: Classes are confusing

we've found that classes can be a large barrier to learning React. You have to understand how `this` works in JavaScript, which is very different from how it works in most languages. You have to remember to bind the event handlers. Without unstable syntax proposals, the code is very verbose[...] The distinction between function and class components in React and when to use each one leads to disagreements even between experienced React developers

Ok, I can agree that `this` could be a bit confusing when you are just starting your way in JavaScript, but arrow functions solve the confusion, and calling a stage 3 feature that is already being supported out of the box by TypeScript, an 'unstable syntax proposal', is just pure demagoguery 煽动行为.
React team is referring to the class field syntax,

```js
class Foo extends React.Component {
  onPress = () => {
    console.log(this.props.someProp)
  }
  render() {
    return <Button onPress={this.onPress} />
  }
}
```

As you can see, dont need to bind anything in the constructor, and `this` will always point to the correct cxt.

And if classes are confusing,
new hooked functions has state, has a weird looking `this`(aka `useRef`), and it can have multiple instances. But it is definitely not a class, it is sth in between, and from now on I will refer to it as a Funclass.

insane(极愚蠢的)

a half baked POC 停靠港

awful naming like `useRef`(a fancy name for `this`), `useEffect, useMemo, useImperativeHandle`

subMenuClick

The syntax of classes was specifically invented in order to deal with the concept of multiple instances and the concept of an instance scope (the exact purpose of this ). Funclasses are just a weird way of achieving the same goal, using the wrong puzzle pieces. Many people are confusing Funclasses with functional programming, but Funclasses are actually just classes in disguise. A class is a concept, not a syntax.

Until now, the distinction was pretty clear- if you needed a state or lifecycle methods, you used a class, otherwise it doesn’t really matter if you used a function or class. Personally, I liked the idea that when I stumbled upon a function component, I could immediately know that this is a “dumb component” without a state. Sadly, with the introduction of Funclasses, this is not the situation anymore.

# Motivation #2: It’s hard to reuse stateful logic between components

React doesn’t offer a way to “attach” reusable behavior to a component (for example, connecting it to a store)…React needs a better primitive for sharing stateful logic.

Hooks can’t work with classes, so if your codebase is already written with classes, you still need another way for sharing stateful logic. Also, hooks only solve the problem of sharing per-instance logic, but if you want to share state between multiple instances, you still need to use stores and 3rd party state management solutions, and as I said, if you already use them, you don’t really need hooks. So instead of just fighting the symptoms, maybe it’s time for React to take an action and implement a proper state management tool for managing both global state (stores) and local state (per instance), and thus kill this loophole once and for all.

# #3:Complex components become hard to understand

We've often had to maintain components that started out simple but grew into an unmanageable mess of stateful logic and side effects. Each lifecycle method often a mix of unrelated logic.
[...] Mutually related code that changes together gets split apart, but

```js
class Foo extends React.Component {
  componentDidMount() {
    doA()
    doB()
    doC()
  }
}
```

we are possibly mixing unrelated logic in `componentDidMount`, but Is it bloating 使膨胀 our cmpt?
Not exactly.The whole implementation sits outside of the class, and the state sits in the store. without stores, all the stateful logic must be implemented inside the class,

Also, in most cases we could probably break this class to smaller components and put each `doSth()` in the `componentDidMount` of the sub-components.

With Funclasses, we could write sth like this:

```js
function Foo() {
  useA()
  useB()
  useC()
}
```

It looks a bit cleaner, but is it? We still need to write 3 different `useEffect` hooks somewhere, so at the end we are going to write more code,

The declarative nature of the life-cycle methods is mostly a good thing, and I found it much harder to investigate the flow of Funclasses. I have seen many cases were Funclasses made it easier for developers to write bad code, we'll see an example later on.

But first, I must admit that there is sth nice about `useEffect`:

```js
useEffect(() => {
  subscribeToA()
  return () => {
    unsubscribeFromA()
  }
}, [])
```

The `useEffect` hook lets us pair together subscribe and unsubscribe logic. This is actually a pretty neat pattern. Same goes for pairing together `componentDidMount` and `componentDidUpdate`. In my experience, those cases are not so common, but they are still valid use-cases, and useEffect is really helpful here. **The question is- why do we have to use Funclasses in order to get useEffect? why cant we have sth similar with classes?**
The answer is we can:

```js
class Foo extends React.Component {
  someEffect = effect((v1, v2) => {
    subscribeToA(v1, v2)
    return () => {
      unsubscribeFromA()
    }
  })

  render() {
    this.someEffect(this.props.v1, this.props.v2)
    return <Text>Hello world</Text>
  }
}
```

The `effect` fn will memoize the given fn, and will call it again only if one of its params has changed.
By triggering the effect from within our render function, we make sure that being called on every render/upd, but the given fn will run again only if one of its params has changed, so we achieve similar results of `useEffect` in terms of combining `componentDidMount` and `componentDidUpdate`, but sadly, we still need to manually do the last cleanup in `componentWillUnmount`.Also, it is a bit ugly to call the effect fn from within the render. In order to get the exact same results like useEffect, React will need to add support for it.

The btm line is that `useEffect` should not be considered as valid motivation for moving in Funclasses. It is a valid motive(n 动机) on its own. and could be implemented for Classes too.

> You can check out the implementation of the `effect` function here, and if you want to see it in action, check out this working example.

# Motivation #4: Performance

_We found that class components can encourage unintentional patterns that make these optimizations fall back to slower path. Class presents issues ofr today's tools, too. For example, classes dont minify very well, and they make hot reloading flaky 古里古怪的 and unreliable_

The React team is saying that classes are harder to optimize and minimize, and that Funclasses should somehow improve things. Well, I have only one thing to say about this- **show me the numbers**

I couldn't find any paper what so ever, or any benchmark demo app that I could clone and run, comparing the performance of Funclasses VS classes. The fact that we havent seen such a demo is not surprising - Funclasses needs to implement `this` (or `useRef` if you prefer) somehow, so I pretty much expect that the same problems that makes classes hard to optimize, will affect Funclasses too.
Anyways, all the debate about performance is really worth nothing without showing the number, so we cant really use it as an argument.

# Motivation #5: Funclasses are less verbose 冗长的、啰嗦的

You can find many examples for code reduction(n 减少) by converting a Class to a Funclass, but most if not all of the examples take advantage of the `useEffect` hook in

But as I said earlier, `useEffect` should not be considered as a Funclass's advantage, and if you ignore the code reduction achieved by it, you are left with a much minor 次要的 impact. And if you'll try to optimize Funclasses using `useMemo`,`useCallback` and so on, you could even you could even end up with a more verbose code than en equivalent class.When comparing small and trivial 琐碎的 components, Funclasses win without a doubt, because classes have some inherent 内在的 boilerplate that you need to pay no matter how small your class is. But when comparing big components, you can barely see the differences, and sometimes as I said, classes can even be cleaner.

Lastly, I have to say a few words about `useContext`: useContext is actually a huge improvement over the original context API that we currently have for classes.

```js
// inside './someCxt'
export const someCxt = React.Cxt({ helloTxt: 'bla' })
// inside 'Foo'
import { someCxt } from './someCxt'
class Foo extends React.component {
  render() {
    return (
      <View>
        <Txt>{someCxt.helloTxt}</Txt>
      </View>
    )
  }
}
```

When `helloTxt` is changed in the cxt, the cmpt should be rerendered in order to reflect the changes. That's itt. no need for ugly HOCs.

All it means is that React should do a better job by implementing the same API improvements for classes too.

So after raising some questions about the motivations, let's take a look at some other stuff that I dont

With the new useEffect hook, side effects could be hidden deeply nested within the code.

Let's say we detect some unwanted calls to the server. We look at the code of the suspected cmpt and see this:

```js
const renderContacts = (props) => {
  const [contacts, loadMoreContacts] = useContacts(props.contactsIds)
  return <SmartContactList contacts={contacts} />
}
```

Nothing special here. Should we investigate `SmartContactList` or maybe we should dive into `useContacts`?Let's dive into `useContacts`:

```js
export const useContacts = (contactsIds) => {
  const { loadedContacts, loadingSts } = useContactsLoader()
  const { isRefreshing, handleSwipe } = useSwipeToRefresh(loadingSts)
  // ... many other useX() functions
  useEffect(() => {
    //** lots of code, all related to some animations that are relevant for loading contacts*//
  }, [loadingSts])

  // ..rest of code
}
```

Ok, it's starting to get tricky. where is the hidden side effect? If we'll dive into `useSwipeToRefresh` we will see:

```js
export const useSwipeToRefresh = (loadingSts) => {
  // ... lots of code
  // ...

  useEffect(() => {
    if (loadingSts === 'refreshing') {
      refreshContacts() //bingo!our hidden sideEffect
    }
  }, []) // <= we forget the dependencies arr
}
```

We found our hidden effect. `refreshContacts` will accidentally call fetch contacts on every cmpt render. In a big codebase, and some badly structured components, nested `useEffect` could cause nastly trouble.

**I am not saying that you can't write bad code with classes too, but Funclasses are much more error prone**(易发，倾向于), and without strictly defined structure of the life cycle methods, it's much easier to do bad things.

# Bloated 膨胀的 API

By adding hooks API alongside classes, React's API is practically 实际的、几乎、事实上 doubled. Everyone needs to learn two completely different methodologies 方法论 now. And I must say that the new API is much more obscure 昏暗的，朦胧的；晦涩的，不清楚的；隐蔽的；
