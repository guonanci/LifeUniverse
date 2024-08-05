https://overreacted.io/zh-hans/react-as-a-ui-runtime/

因为 React 就是一个 UI 库

我曾经写过关于构建用户界面会遇到的难题一文。但是本篇文章将以一种不同方式来讲述 react-因为他更像是一种编程运行时

本篇文章不会教你任何有关如何创建用户界面的技巧，但是他可能会帮助你更深入理解 react 编程模型。

最佳原则的阿吉哦度，我不会解释如何使用它，而是讲解它的原理。
文章面向有经验的程序员和那些使用过其他 UI 库但在项目中权衡利弊后最终选择了 react 的人。

程序员的角度，设计者的角度。

# 宿主树

一些程序输出数字，另一些程序则输出诗词。不同语言和他们的运行时通常会对特定的一组用例进行优化，而 react 也不例外。

react 程序会输出一颗随时间变化的树，他有可能是一颗 dom 树，iOS 视图层，PDF 原语，又或是 json 对象。通常我们希望用它来展开 UI。我们称他为宿主树，因为他往往是 react 之外宿主环境中的一部分-就像 dom 或 iOS。宿主树通常有他自己的命令式 API。而 react 就是他上面的那一层。
所以 react 到底有什么用。它可以帮助你编写可预测的，并且能够操控复杂宿 su 主 zhu 树进而响应像用户交互、网络响应、定时器等外部事件的应用程序。

- 稳定性 宿主树是相对稳定的，大多数情况的更新并不会从根本上改变其整体结构。如果应用程序每秒都会将其所有可交互元素重新排列为完全不同的组合，那将会变得难以使用。那个按钮去哪了？为什么屏幕在跳舞。
- 通用性 宿主树可以被拆分为外观和行为一致的 UI 模式（如按钮、列表和头像）而不是随机的形状

这些原则恰好适用于大多数 UI

然而，当输出没有稳定的模式时 react 并不适用。例如，react 也可以帮助你编写一个 Twitter 客户端，但对于一个 3D 管道屏幕保护程序并不会起太大作用

# 宿主实例

宿主树由节点组成，我们称之为宿主实例。在 DOM 环境中，宿 su 主 zhu 实例就是我们通常所说的 dom 节点 -- 就像当你调用`document.createElement('div')`时获得的对象。在 iOS 中，宿主实例可以是从 JavaScript 中到原生视图唯一标识的值。
宿主实例有他们自己的属性（domNode.className 或者 view.tintColor)。他们也有可能将其它宿主实例作为子项。

这和 react 没有任何联系-因为我在讲宿主环境

通常会有原生阿皮用于操控这些宿主实例。例如，在 dom 环境中会提供像 appendChild，removeChild，setAttribute 等一系列 API。在 react 应用中，通常你不会调用这些 API，因为那是 react 的工作。

# 渲染器

教会 react 如何与特定宿主环境通信以及如何管理它的宿主实例。react dom、react native 甚至 ink 都可以称作 react 渲染器。
react 渲染器能以下面两种模式之一进行工作。
绝大多数渲染器都被用作「突变」模式，dom：我们可以创建一个节点，设置他的属性，在之后往里面增加或删除子节点。宿主实例是完全可变的。

但 react 也能以「不变」模式工作。这种模式适用于那些并不提供像 appendChild 的 API 而是像克隆双亲树并始终替换掉顶级子树的宿主环境。在宿主树级别上的不可变性使得多线程变得更加容易。react fabric 就利用了这一模式。
作为 react 的使用者，你永远不需要考虑这些模式。我只想强调 react 不仅仅只是从一种模式转换到另一种模式的适配器。他的用处在于以一种更好的方式操控宿主实例而不用在意那些低级视图 API 范例

# react 元素

在宿主环境中，一个宿主实例（例如 dom 节点）是最小的构建单元。而在 react 中，最小的构建单元是 react 元素

react 元素是一个普通 JavaScript 对象，用来描述一个宿主实例。

```js
// JSX 是用来描述这些对象的语法糖

// <button className='blue' />
const reactEle = {
  type: 'button',
  props: { className: 'blue' },
}
```

react 元素是轻量级的因为没有宿主实例与它绑定在一起。同样的，他只是对你想要在屏幕上看到的内容的描述
就像宿主实例医院，react 元素也能形成一棵树：

```jsx
// JSX 是用来描述这些对象的语法糖
<dialog>
  <button className='red' />
  <button className='blue' />
</dialog>

{
  type: 'dialog',
  props: {
    children: [{
      type:'button',
      props:{className:'red'}
    },{
      type:'button',
      props:{className:'blue'}
    }]
  }
}
// 此处我省略了一些不必要的属性
```

但是，请记住，react 元素并不是永远存在的。他们总是在重建和删除之间不断循环着。react 元素具有不可变性。例如，你不能改变 react 元素中的子元素或者属性。如果你想要在稍后渲染一些不同的东西，你需要从头创建新的 react 元素树来描述他。

我喜欢将 react 元素比做电影中放映的每一帧。他们捕捉 UI 在特定时间点应该是什么样子。他们永远不会再改变。

# 入口

每一个 react 渲染器都有一个「入口」。正是那个特定的 API 让我们告诉 react，将特定的 react 元素渲染到真正的宿主实例中去。

react dom 入口就是 ReactDOM.render：

```js
ReactDOM.render(
  <button className='blue' />,
  document.getElementById('container')
)
```

当我们调用 ReactDOM.render(reactElement,domContainer) 时，我们的意思是「亲爱的 react，将我的 reactElement 映射到 domContainer 宿主树上去吧。react 会查看 reactElement.type（在我们例子中是 btn）然后告诉 react dom 渲染器创建对应的宿主实例并设置正确的属性：

```js
// 在 reactDOM 渲染器内部（简化版）
function createHostInstance(reactElement){
  let domNode=document.createElement(reactElement.type)
  domNode.className=reactElement.props.className
  react domNode
}
```

如果 react 元素在 reactElement.props.children 中含有子元素，react 会在第一次渲染中递归地为他们创建宿主实例。

# 协调

如果我们用同一个 container 调用 ReactDOM.render()两次会发生什么呢

```js
ReactDOM.render(
  <button className='blue' />,
  document.getElementById('container')
)
// ...later...
// 应该替换掉 button 宿主实例嘛
// 还是在已有的 button 上更新属性？
ReactDOM.render(
  <button className='red' />,
  document.getElementById('container')
)
```

同样，react 工作是将 react 元素映射到宿主树上去。确定该对宿主实例做什么来响应新信息有时候叫做协调
有两种方法可以解决它。简化版的 react 会丢弃已经存在的树然后从头开始创建他：

```js
let domContainer = document.getElementById('container')
// 清除掉原来的树
domContainer.innerHTML = ''
// 创建新的宿主实例树
let domNode = document.createElement('button')
domNode.className = 'red'
domContainer.appendChild(domNode)
```

但是在 dom 环境下，这样的做法效率低下而且会丢失像 focus、selection、scroll 等许多状态。相反，我们希望 react 这样做：

```js
let domNode = domContainer.firstChild
// 更新已有的宿主实例
domNode.className = 'red'
```

换句话说，React 需要决定何时更新一个已有的宿主实例来匹配新的 React 元素，合适该重新创建新的宿主实例。

这就引出了一个识别问题。react 元素可能每次都不相同，到底什么时候才该从概念上引用同一个宿主实例呢

在我们的例子中，很简单。我们之前渲染了《button》作为第一个（也是唯一）子元素，接下来我们想要在同一个地方再次渲染《button》。在宿主实例中，我们已经有了一个《button》为什么还要重新创建呢。让我们重用它

这雨 react 如何思考并解决这类问题已经很接近了。
如果相同元素在同一个地方先后出现两次，react 会重用已有的宿主实例

这里有一个例子，其中的注释大致解释了 react 是如何工作的：

```js
// let domNode=document.createElement('button')
// domNode.className='blue'
// domContainer.appendChild(domNode)
ReactDOM.render(
  <button className='blue' />,
  document.getElementById('container')
)

// 能重用宿主实例嘛，能（button=》button）
domNode.className = 'red'
ReactDOM.render(
  <button className='red' />,
  document.getElementById('container')
)
// 能重用宿主实例嘛，不能，（button=》p）
// domContainer.removeChild(domNode)
// domNode=document.createElement('p')
// domNode.textContent='hello'
// domContainer.appendChild(domNode)
ReactDOM.render(<p>Hello</p>, document.getElementById('container'))
// 能重用宿主实例嘛？能（p=》p）
domNode.textContent = 'Goodbye'
ReactDOM.render(<p>Goodbye</p>, document.getElementById('container'))
```

同样的启发式方法也适用于子树。例如，当我们在<dialog>中新增两个<button>，react 会先决定是否要重用<dialog>，染后为每一个子元素重复这个决定步骤。

# 条件

如果 react 在渲染更新前后只重用那些元素类型匹配的宿主实例，那当遇到包含条件语句的内容时又该如何渲染呢

假设我们只想首先展示一个输入框，但之后要在它之前渲染一条信息：

条件
如果 React 在渲染更新前后只重用那些元素类型匹配的宿主实例，那当遇到包含条件语句的内容时又该如何渲染呢？

假设我们只想首先展示一个输入框，但之后要在它之前渲染一条信息：

// 第一次渲染
ReactDOM.render(

  <dialog>
    <input />
  </dialog>,
  domContainer
);

// 下一次渲染
ReactDOM.render(

  <dialog>
    <p>I was just added here!</p>
    <input />
  </dialog>,
  domContainer
);
在这个例子中，<input> 宿主实例会被重新创建。React 会遍历整个元素树，并将其与先前的版本进行比较：

dialog → dialog ：能重用宿主实例吗？能 — 因为类型是匹配的。

input → p ：能重用宿主实例吗？不能，类型改变了！ 需要删除已有的 input 然后重新创建一个 p 宿主实例。
(nothing) → input ：需要重新创建一个 input 宿主实例。
因此，React 会像这样执行更新：

let oldInputNode = dialogNode.firstChild;
dialogNode.removeChild(oldInputNode);

let pNode = document.createElement('p');
pNode.textContent = 'I was just added here!';
dialogNode.appendChild(pNode);

let newInputNode = document.createElement('input');
dialogNode.appendChild(newInputNode);
这样的做法并不科学因为事实上 <input> 并没有被 <p> 所替代 — 它只是移动了位置而已。我们不希望因为重建 DOM 而丢失了 selection、focus 等状态以及其中的内容。

虽然这个问题很容易解决（在下面我会马上讲到），但这个问题在 React 应用中并不常见。而当我们探讨为什么会这样时却很有意思。

事实上，你很少会直接调用 ReactDOM.render 。相反，在 React 应用中程序往往会被拆分成这样的函数：

function Form({ showMessage }) {
let message = null;
if (showMessage) {
message = <p>I was just added here!</p>;
}
return (

<dialog>
{message}
<input />
</dialog>
);
}
这个例子并不会遇到刚刚我们所描述的问题.。让我们用对象注释而不是 JSX 也许可以更好地理解其中的原因。来看一下 dialog 中的子元素树：

```js
function Form({ msgVisible}){
  let msg=null
  if(msgVisible){
    msg={
      type:'p',
      props:{children:'I was just added here!'}
    }
  }
  return {
    type:'dialog',
    props:{
      children:[]
        msg,{type:'input',props:{}}
      ]
    }
  }
}
```

不管 msgVisible 是 TRUE 还是 FALSE，渲染过程中 input 总是在第二个孩子的位置且不会改变
如果 msgVisible 从 FALSE 变为 TRUE，react 会遍历整个元素树，并与之前

通常来说，突变在 React 中不是惯用的。（我们会在之后讲解如何用更惯用的方式来更新 UI 以响应事件。）

不过，局部的突变是绝对允许的：

function FriendList({ friends }) {
let items = [];
for (let i = 0; i < friends.length; i++) {
let friend = friends[i];
items.push(
<Friend key={friend.id} friend={friend} />
);
}

return <section>{items}</section>;
}
当我们在函数组件内部创建 items 时不管怎样改变它都行，只要这些突变发生在将其作为最后的渲染结果之前。所以并不需要重写你的代码来避免局部突变。

同样地，惰性初始化是被允许的即使它不是完全“纯净”的：

function ExpenseForm() {
// 只要不影响其他组件这是被允许的：
SuperCalculator.initializeIfNotReady();

// 继续渲染......
}
