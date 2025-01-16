
*自定义hooks的设计规范：逻辑层+组件层模型。hooks指向逻辑层，逻辑层更新数据到组件层，组件层调用方法到逻辑层*。hooks专注的就是逻辑复用，也就是我们的项目，不要仅仅停留在组件复用层面上。hooks让我们将一段通用逻辑存封起来，当我们需要它时，开箱即用即可。

在我们在编写自定义 hooks 的时候，要特别～特别～特别关注的是传进去什么，返回什么。 返回的东西是我们真正需要的。更像一个工厂，把原材料加工，最后返回我们。
# 自定义hooks的驱动条件
hooks本质上是一个函数。函数的执行，由无状态组件的执行上下文决定。每次执行函数，本质上就是更新组件，会执行自定义hooks，由此可见组件本身的执行和hooks的执行如出一辙。那么prop的修改、useState、useReducer的使用是无状态组件的更新条件，就是驱动hooks执行的条件。
# 自定义hooks的通用模式
我们设计的自定义react-hooks应该是长这样的：`const [xxx, ...] = useXXX(paramA, paramB...)`。在我们在编写自定义hooks时，要特别特别关注传进去啥、返回啥，返回的是我们真正需要的。像一个工厂般，加工原材料，最后返回给我们。
# 自定义 hooks-条件限定
如果没有设计好自定义hook，比如返回一个改变state的函数，但没限定条件的话，就有可能造成不必要的上下文执行，更有甚者，造成组件循环渲染执行。

比如，我们写一个很简单的，格式化数组，将小写转大写的hooks。
```js
import React , { useState } from 'react'
//_ 自定义 hooks 用于格式化数组将小写转成大写 _/
function useFormatList(list){
  return list.map(item=>{
    console.log(1111)
    return item.toUpperCase()
  })
}
//_ 父组件传过来的 list = [ 'aaa' , 'bbb' , 'ccc' ] _/
function index({ list }){
  const [ number ,setNumber ] = useState(0)
  const newList = useFormatList(list)
  return <div>
    <div className="list">
      {newList.map(item=>
        <div key={item}>{item}</div>
      )}
    </div>
    <div className="number">
      <div>{number}</div>
      <button onClick={()=> setNumber(number + 1)}>add</button>
    </div>
  </div>
}
export default index
```

如上述问题，我们格式化父组件传过来的list数组，并将小写变成大写，但是当我们点击add时，理想状态的话数组不需要重新format，但是实际情况却执行了format，这无疑增加了性能开销。
所以我们在设置自定义hooks时，一定要加上*条件限定-性能开销*。
于是乎我们这样处理一下：
```js
function useFormatList(list) {
  return useMemo(() => list.map(item => {
    console.log(1111)
    return item.toUpperCase()
  }), [])
}
```

于是，就华丽地解决了如上问题。所以一个好用的自定义hooks，设计时一定要用上useMemo、useCallback等api。

作者：我不是外星人
链接：https://juejin.cn/post/6890738145671938062
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# 实战一：控制滚动条-吸顶效果、渐变效果-useScroll
背景是这样的：公司的一个H5项目，要求在滚动过程中，控制渐变+高度+吸顶的效果。首先出现的红色色块有吸顶效果，之后的粉色色块固定上边，但是有少量偏移，加上逐渐变透明的效果。

设计思路如下：

需要实现的功能有：
1. 监听滚动条滚动
2. 计算吸顶临界值，渐变值、以及透明度
3. 改变 state，渲染视图

接下来，我们用一个hooks来实现上述工作：
```tsx
import React from 'react'
import { View,Swiper,SwiperItm } from '@tarojs/components'
import useScroll from '../../hooks/useScroll'
import './index.less'
export default function Idx(){
  const [scrollOptions,domRef]=useScroll()
  // scrollOptions保存透明度、top值、吸顶开关等变量
  const { opacity, top, suctionTop } = scrollOptions
  return (
    <View style={{position:'static',height:2000}}>
        <View className='white' />
        <View id='box' style={{opacitytransform:`translateY(${top}px)`}}>
          <Swiper className='swiper'>
            <View className='image' />
          <SwiperItm className='SwiperItm'>
        </View>
        <View className={suctionTop ? 'box_card suctionTop' : 'box_card'}>
          <View
            style={{
                background: 'red',
                boxShadow: '0px 15px 10px -16px#F02F0F'
            }}
            className='reultCard'
          >
          </View>
      </View>
    </View>
  )
}
```

我们通过一个 scrollOptions 来保存透明度、top 值，吸顶开关等变量，然后返回一个 ref 作为 dom 元素的采集器。接下来就看看 useScroll如何实现的：

```tsx
export default function useScroll() {
  const dom = useRef(null)
  const [scrollOptions, setScrollOptions] = useState({
    top: 0,
    suctionTop: false,
    opacity: 1,
  })
  useEffect(() => {
    const box = dom.current
    const offsetH = box.offsetHeight
    const radio = (box.offsetHeight / 500) * 20
    const handleScroll = () => {
      const scrollY = window.scrollY
      const computerOpacity = 1 - scrollY / 160
    }
  })
}
```

transform 是可以让 GPU 加速的 CSS3 属性，在性能方面优于直接改变 top 值。在 iOS 端，固定定位频繁改变 top 值，会出现闪屏兼容性

# 实战二：控制表单状态：useFormChanged

# useDragDrop 具体实现思路

需要实现的功能：

1. 通过自定义 hook 计算出来的 x、y 值，通过将 transform 的 translate 属性设置当前计算出来的 x、y 实现拖拽效果
2. 自定义 hook 能抓取当前 dom 元素容器
   我们没有用left,和 top 来改变定位，css3 的 transform 能够避免浏览器的重排和回流，性能优化上要强于直接改变定位的 top,left 值。
   由于我们模拟环境考虑到是 h5 移动端，所以用 webview 的 touchstart , touchmove ,ontouchend 事件来进行模拟。

作者：我不是外星人
链接：https://juejin.cn/post/6890738145671938062
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```tsx
export default function page() {
  const [styled1, dropRef1] = useDragDrop()
  const [styled2, dropRef2] = useDragDrop()
  return (
    <View className='page'>
      <View
        className='drop1'
        ref={dropRef1}
        style={{ transform: `translate(${style1.x}px,${style1.y}px)` }}>
        drop1
      </View>
      <View
        className='drop2'
        ref={dropRef2}
        style={{ transform: `translate(${style2.x}px,${style2.y}px)` }}>
        drop2
      </View>
      <View className='drop3'>drop3</View>
    </View>
  )
}
/** 移动端：拖拽自定义效果（不使用定位） */
function useDragDrop() {
  // 保存上次移动位置
  const lastOffset = useRef({
    x: 0, // 当前
    y: 0,
    X: 0, // 上一次保存
    Y: 0,
  })
  // 获取当前元素实例
  const curDom = useRef(nul)
  // updPosition
  const [, forceUpd] = useState({})
  // listen on start/move event
  const [onTouchStart, onTouchMove, onTouchEnd] = useMemo(() => {
    // 保存 left、right 信息
    const curOffset = {}
    // 开始滑动
    const touchStart = function (ev) {
      const targetTouch = ev.targetTouches[0]
      curOffset.X = targetTouches.clientX
      curOffset.Y = targetTouches.clientY
    }
    // 滑动中
    const touchMove = function (ev) {
      const targetTouch = ev.targetTouches[0]
      const x = lastOffset.current.X + targetTouch.clientX - curOffset.X
      const y = lastOffset.current.Y + targetTouch.clientY - curOffset.Y
      lastOffset.current.x = x
      lastOffset.current.y = y
      forceUpd({ x, y })
    }
    const touchEnd = () => {
      lastOffset.current.X = lastOffset.current.x
      lastOffset.current.Y = lastOffset.current.y
    }
    return [touchStart, touchMove, touchEnd]
  }, [])
  useLayoutEffect(() => {
    const dom = curDom.current
    dom.onTouchStart = onTouchStart
    dom.onTouchMove = onTouchMove
    dom.onTouchEnd = onTouchEnd
  }, [])
  return [{ x: lastOffset.current.x, y: lastOffset.current.y }, curDom]
}
```

具体设计思路：

1. 对于拖拽效果，我们需要实时获取 dom 元素的位置信息，所以我们需要一个 useRef 来抓取 dom 元素
2. 由于我们用的是 transform 改变位置，所以需要保存一下当前位置和上一次 transform 的位置，我们用一个 useRef 来缓存位置
3. 我们通过 useRef 改变 x、y 值，但是需要渲染新位置，所以我们用一个 useState 来专门产生组件更新
4. 初始化的时候我们需要给当前元素绑定事件，因为在初始化的时候我们可能精确需要元素的位置信息，所以我们用 useLayoutEffect 钩子来绑定 touchStart
   ，touchMove，touchEnd 事件

用到了不少自定义 Hook，封装和使用方式.一些基本使用内容

```js
function useWindowWidth(){
  const [w, setW] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize=()>setW(window.innerWidth)
    window.addEventListener('resize',handleResize)
    return () => {
      window.removeEventListener('resize',handleResize)
    }
  })
  return w
}
```
