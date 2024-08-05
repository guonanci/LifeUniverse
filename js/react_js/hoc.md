import React, { Component } from 'react'
import HelloClass from './HelloClass'

interface Loading {
loading: boolean
}

// HOC 可以接收一个类组件，也可以接收一个函数组件，所以参数的类型是 React.ComponentType
// 源码当中的定义为 type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>
function HelloHOC<P>(WrappedComponent: React.ComponentType<P>) {
return class extends Component<P & Loading> {
render() {
const { loading, ...props } = this.props
return loading ? <div>Loading...</div> : <WrappedComponent {...props as P} />
}
}
}

export default HelloHOC(HelloClass)

https://segmentfault.com/a/1190000021580015


问题 7：什么是高阶组件？
主题: React
难度: ⭐⭐
高阶组件(HOC)是接受一个组件并返回一个新组件的函数。基本上，这是一个模式，是从 React 的组合特性中衍生出来的，称其为纯组件，因为它们可以接受任何动态提供的子组件，但不会修改或复制输入组件中的任何行为。

const EnhancedComponent = higherOrderComponent(WrappedComponent);
HOC 可以用于以下许多用例

代码重用、逻辑和引导抽象
渲染劫持
state 抽象和操作
props 处理


hoc是 React 中用于重用组件逻辑的高级技术，它是一个函数，能够接受一个组件并返回一个新的组件。
实现高阶组件的两种方式：

属性代理。高阶组件通过包裹的React组件来操作props
反向继承。高阶组件继承于被包裹的React组件
2.2.1属性代理

a. 什么是属性代理

属性代理组件继承自React.Component，通过传递给被包装的组件props得名

```js
// 属性代理，把高阶组件接收到的属性传递给传进来的组件function HOC(WrappedComponent) {  return class PP extends React.Component {    render() {      return <WrappedComponent {...this.props}/>    }  }}
b. 属性代理的用途

更改 props，可以对传递的包裹组件的WrappedComponent的props进行控制
通过 refs 获取组件实例
/*可以通过 ref 获取关键词 this（WrappedComponent 的实例）当 WrappedComponent 被渲染后，ref 上的回调函数 proc 将会执行，此时就有了这个 WrappedComponent 的实例的引用*/function refsHOC(WrappedComponent) {  return class RefsHOC extends React.Component {    proc(wrappedComponentInstance) {      wrappedComponentInstance.method()    }    render() {      const props = Object.assign({}, this.props, {ref: this.proc.bind(this)})      return <WrappedComponent {...props}/>    }  }}
把 WrappedComponent 与其它 elements 包装在一起
2.1.2 反向继承

反向继承是继承自传递过来的组件

function iiHOC(WrappedComponent) {  return class Enhancer extends WrappedComponent {    render() {      return super.render()    }  }}


```
反向继承允许高阶组件*通过 this 关键词获取 WrappedComponent，意味着它可以获取到 state，props，组件生命周期（component lifecycle）钩子，以及渲染方法（render），所以我们主要用它来做渲染劫持*，比如在渲染方法中读取或更改 React Elements tree，或者有条件的渲染等。


https://toutiao.io/posts/c062k5n/preview


hooks和hoc和render props有什么不同？

它们之间最大的不同在于，后两者仅仅是一种开发模式，而自定义的hooks是react提供的API模式，它既能更加自然的融入到react的渲染过程也更加符合react的函数编程理念。

