# 虚拟 DOM

<https://juejin.cn/post/7258071726227849277>
虚拟DOM: 本质上是一个 JS 对象, 通过一个对象来描述每个DOM节点的特征, 并通过虚拟 DOM 就能完整的绘制出  m对应的真实DOM, 我们尝试将如下代码中，简单的虚拟 DOM ele 打印出来, 看下对应的数据结构:

```js
const ele = (
  <div className='xxx'>
    111
  </div>
);

console.log(ele);
```

为何JS中能够识别 JSX 呢? 其实是通过 babel 的 react 预设包@babel/preset-react转换JSX，转为 React.createElement(...)等等：

```js
const ele = (
  <div className='xxx'>
    111
  </div>
);
// 转换后
React.createElement("div", { class: "xxx" }, "111")
```

## 虚拟 DOM 的好处

虚拟 DOM 的设计核心就是，用高效的 js 操作, 来减少低性能的 DOM 操作, 以此来提升网页性能, 然后使用 diff 算法对比新旧的虚拟DOM, 针对差异点，重新构建，更新视图, 以此来提高页面性能, 虚拟 DOM 让我们更关注业务逻辑而非 DOM 操作, 这一点即可大大提升我们的开发效率。

虚拟 DOM 本质上就是个对象, 对其进行任何操作不会引起页面的绘制。一次性更新是指: 当页面频繁操作时, 不去频繁操作真实 DOM, 而是构建新的虚拟 DOM ，对虚拟 DOM 进行频繁操作, 然后一次性渲染, 这将大大提高性能。

因为操作 DOM 比操作 JS 代价更大。差异化更新是指: 当状态改变时, 构建新的虚拟 DOM, 然后使用 diff 算法对比新旧虚拟 DOM, 针对差异点重新构建、更新视图, 这样也能大大提高页面性能。

虚拟 DOM 本质上就是个对象, 相对于直接操作 DOM 来, 直接操作对象相对来说简单又高效，*虚拟 DOM 的总损耗等于 虚拟 DOM 增删改  + diff 算法 + 真实 DOM 差异的增删改 + 排版与重绘，而真实 DOM 的总损耗是 真实 DOM 完全的增删改 + 排版与重绘*。如果使用手动操作真实 DOM 来完成页面, 繁琐又容易出错, 在大规模应用中维护起来也很困难。

*使用虚拟 DOM, 能有效避免真实 DOM 树的频繁更新, 减少重绘与回流, 提高性能*。另外，*虚拟 DOM 本质上就是用一种数据结构来描述界面节点, 所以借助虚拟 DOM, 带来了跨平台能力, 一套代码多端运行, 比如: 小程序、React Native*。

而*虚拟DOM的缺点*呢就是，在一些*性能要求极高的应用中, 虚拟 DOM 无法进行针对性的极致优化: 因为从虚拟 DOM 到更新真实 DOM 之间还需要些额外计算*，比如 diff 算法, 而这中间就多了些消耗, 肯定没有直接操作 DOM 来得快；

而*第二个缺点是首次渲染方面，首次渲染大量 DOM 时, 需要将虚拟树转换为实际的 DOM 元素, 并插入到页面中, 该过程需要额外计算和操作*, 可能会比直接操作实际 DOM 更慢。

另外，虚拟 DOM 需要在内存中创建和维护一个额外的虚拟树结构, 用于表示页面状态。这可能会导致增加一定的内存消耗, 特别是在处理大型或复杂的应用程序时。所以*虚拟 DOM 更适用于动态或频繁变化的内容, 而对于静态内容，也就是几乎不会变化的部分, 虚拟 DOM 的优势可能不明显*, 因为它仍然需要进行比较和更新的计算。

## 虚拟 DOM 一定会比直接操作真实 DOM 快

同样的功能, 在虚拟 DOM 中必须需要进行更多计算、损耗, 所以理论上来讲，虚拟 DOM 只会更慢, 但这里其实有个前提, 前提就是操作真实 DOM 的方式要做到最优, 但是单单这一点对大部分开发人员来说，其实很难，而且就算做到了也要耗费很多精力, 同时也会增加维护成本。

首次渲染或者所有节点都需要更新时, 这时候采用虚拟 DOM 会比直接操作原生 DOM，多出重构建虚拟 DOM 树的操作, 这会更大地占用内存和延长渲染时间。而对于频繁更新、删除操作: 直接操作真实 DOM(没有经过优化, 直接操作整个 DOM 树)的情况下, 虚拟 DOM 也会更快, 因为相对来说，操作 DOM 的消耗会比操作 JS 高。

（得失: ）在构建一个实际应用时, 出于可维护性的考虑, 我们很难为每个地方都去做手动优化, 但是，虚拟 DOM 在不需要手动优化的情况下, 却能给我们带来一系列优化，同时带来更好的开发体验, 当然为此我们也只需要付出一点点性能。

总结一下: 操作真实 DOM 如果能做到最优, 那么必然会比虚拟 DOM 更快, 否则结果就不好说咯。

贴个 babyfish-ct 大大在《网上都说操作真实 DOM 慢, 但测试结果却比 React 更快, 为何?》中的一个评论:

举个例子, 一个列表当中, 如果要添加一个项, 那么直接 insert一个新的 DOM 元素,肯定最快。但是, 人性是懒惰的, *大部分人并不会直接基于原生 DOM 实现增量操作, 因为面向增量编程是痛苦的, 而面向全量编程是开心的*。

在这种懒惰的驱使下, 人们会选择简单粗暴的办法, 清掉list下面的所有项目, 重新创建所有子项目。这样的话, 只是一个简单的循环, 就不用考虑变化发生在什么位置。

但为了一些局部变更, 清除全部列表子项再全部重建, 性能可想而知……而虚拟 DOM 的真正价值, 是把懒惰的人们喜欢的面向全量编程, 转换为针对真实 DOM 的增量操作，即通过 diff, 找出发生变化的地方, 并保证该过程引入的性能损失极可能低。

即: 虚拟 DOM 以相对少的性能开销为代价, 让人们在不知不觉中以最高性能的方式操作真实DOM。但和本身就坚持以最优方式操作真实 DOM 的程序相比, 其实它更慢。

## 为何操作 DOM 会比 JS 代价更大？

访问和修改 DOM 元素，需要通过浏览器的底层接口提供的 API 来实现, 与直接在内存中操作 JavaScript 对象相比, 通过浏览器接口进行 DOM 操作涉及到更多的层级和复杂性, 从而增加性能开销。

当修改 DOM 元素时, 浏览器需要重新计算元素的布局和样式, 并重新渲染整个页面或部分页面。该过程称为重排reflow和重绘repaint, 它对于页面的性能和响应时间有一定影响, 增加了页面的负担和性能开销。

为了减少操作DOM的代价, 可采取以下优化措施:
第一种是批量操作: *将多个 DOM 操作合并成一个批量操作, 减少页面的重排和重绘次数*；第二种是使用*文档片段 DocumentFragment*: 将多个 DOM 元素的操作放在文档片段中, 然后一次性插入到页面中, 减少页面渲染次数。

第三种是*缓存 DOM 查询结果: 避免多次查询同一个 DOM 元素, 将查询结果缓存在变量中*以提高性能。

第四种是*使用事件委托: 将事件处理程序绑定在父元素上, 通过事件冒泡机制处理子元素的事件, 减少事件绑定数量*。总的来说, 由于 DOM 操作涉及到浏览器底层接口、页面重排、和重绘等因素，所以相比于操作 JavaScript 对象, 其代价较大,。

因此在编写网页或应用程序时, 应尽量减少对 DOM 的频繁操作, 优化 DOM 操作的方式和时机, 以提高性能和用户体验。

## diff 算法是啥？

React 在执行 render 的过程中会产生新的虚拟 DOM, 在浏览器平台下, 为了尽量减少 DOM 的创建, React 会对新旧虚拟 DOM 进行 diff 算法，找到差异, 尽量复用 DOM 从而提高性能; 所以 diff 算法主要就是用于查找新旧虚拟 DOM 间的差异。

diff 算法的目的是对比两次渲染结果, 找到可复用部分, 然后剩下的该删除删除, 该新增新增。

*传统 diff 算法是通过循环递归依次对比树节点, 效率低下, 算法复杂度达到 O(n^3), 而在 React 中，针对该算法进行一个优化, 复杂度能达到 O(n)*。

## diff 策略

*tree层级，即同层级比较*是指: 在实际 DOM 操作中需要跨层级操作的次数很少很少, 所以在 diff 操作时只会比较同一层级, 这样只需遍历一次树就 OK 了。

*component层级*是指: 如果是同一类型组件, 则会继续 diff 运算；如果组件不是同一类型, 那么将直接删除该组件下的所有子节点, 然后创建新的DOM。比如, 当 D 类型组件换成了 G 之后, 即使两者结构很类似, 但也会删除D类型的组件，再重新创建G。

*element层级: 是指同一层级的节点的比较规则, 根据每个节点在对应层级的唯一 key 作为标识, 并且对于同一层级的节点操作只有 3 种, 分别为 INSERT_MARKUP插入、MOVE_EXISTING移动、REMOVE_NODE删除*。

通过 key 发现新旧集合中的节点都是相同节点时, 无需删除和创建节点, 只需移动旧集合中节点的位置, 更新为新集合中节点的位置即可。

注意事项包括：第一，*key的值必须保证唯一且稳定*，有了key属性后，就可以与组件建立一种对应关系，react根据key来决定销毁还是重新创建组件，更新还是移动组件。

第二，index的使用问题: 大部分情况下可能没啥问题, 但如果涉及到数据变更，即更新、新增、删除时，index 作为 key 会导致展示错误数据, 归根结底, index的使用问题在于两次渲染的 index 相同, 所以组件并不会重新销毁创建, 而是直接更新。

第三，如果有一个子组件Com是简单的、没缓存的函数组件，那么每次 render 时 Com 都重新声明, 导致在diff时 Com 都会被认为是新组件, 需要被销毁、并重建。

作者：墨渊君
链接：<https://juejin.cn/post/7258071726227849277>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# 说一下Diff算法？

得分点
*patch、patchVnode、updateChildren、vue优化时间复杂度为O(n)*

标准回答
*Diff算法比较过程的第一步：patch函数中比较新老节点，如果新节点不存在就销毁老节点，如果老节点不存在就直接创建新节点*。

当两个节点是相同节点时，进入 patchVnode 的过程，比较两个节点的内部。第二步是指：patchVnode函数比较两个虚拟节点的内部，如果两个虚拟节点完全相同，那么返回当前vnode的children。children不是textNode的话，再分成三种情况：

- 第一，有新children，没有旧children，那么创建新的
- 第二，没有新children，有旧children，那么删除旧的
- 第三，新children、旧children都有，那么执行`updateChildren`比较children的差异，*updateChildren就是diff算法的核心*。

*当前vnode的children是textNode的话，就直接更新text*。第三步是：updateChildren比较函数子节点，细分为：

- 第一步 头头比较。若相似，那么旧头新头的指针后移（即 `oldStartIdx++` && `newStartIdx++`），真实dom不变，进入下一次循环；不相似的话就进入第二步。
- 第二步 尾尾比较。若相似的话，那么旧尾新尾的指针前移（即 `oldEndIdx--` && `newEndIdx--`），真实dom不变，进入下一次循环；不相似的话就进入第三步。
- 第三步 头尾比较。若相似的话，那么旧头指针后移，新尾指针前移（即 `oldStartIdx++` && `newEndIdx--`），未确认dom序列中的头移动到尾，进入下一次循环；不相似就进入第四步。

- 第四步 尾头比较。若相似，旧尾指针就前移，新头指针后移（即 `oldEndIdx--` && `newStartIdx++`），未确认dom序列中的尾移动到头，进入下一次循环；不相似就进入第五步。

- 第五步 若节点有key，且在旧子节点数组中找到sameVnode--即tag和key都一致，则将其dom移动到当前真实dom序列的头部，新头指针后移（即 `newStartIdx++`）；否则，vnode对应的dom（`vnode[newStartIdx].elm`）插入当前真实dom序列的头部，新头指针后移（即 `newStartIdx++`）。

- 但结束循环后，有两种情况需考虑：

- 新的子节点数组（newCh）被遍历完（`newStartIdx > newEndIdx`）。那就需要删除多余的旧dom（`oldStartIdx -> oldEndIdx`），上述例子中就是`c,d`； - 新的子节点数组（oldCh）被遍历完（`oldStartIdx > oldEndIdx`）。那就需要把多余的新dom（`newStartIdx -> newEndIdx`）都添加。

1.出现：主流框架中多采用VNode更新结点，更新规则为diff算法。

2.原理：框架会将所有的结点先转化为虚拟节点Vnode，在发生更改后对比VNode和原本页面的OldNode，然后以VNode为基准，在oldNode上进行准确的修改。（*修改准则：原本没有新版有，则增加；原本有新版没有，则删除；都有则进行比较，都为文本结点则替换值；都为静态资源不处理；都为正常结点则替换*）

1. patch函数中比较新老节点，如果新节点不存在就销毁老节点，还有创建新节点的情况，如果节点相同，就进入patchVnode函数，比较两节点内部

2. patchVnode函数执行时比较两节点的children，创建新children或删除旧children，如果新旧children都有，就执行updateChildren函数

3. updateChildren函数中，如果是textNode就直接更新text，如果

<https://juejin.cn/post/6924910922460823560>
<https://juejin.cn/post/6844904078196097031>

render函数
虚拟dom转化为真实dom
示例

```js

// 虚拟dom转化为真实dom
function render(node) {
  if (typeof node === "string") {
    // 创建文本节点
    return document.createTextNode(node);
  }
  // 创建对应的dom节点
  let dom = document.createElement(node.tag);
  if (node.attrs) {
    // 设置dom属性
    Object.keys(node.attrs).forEach(key => {
      dom.setAttribute(key, node.attrs[key]);
    });
  }
  // 递归生成子节点
  if (node.children) {
    node.children.forEach(item => {
      dom.appendChild(render(item));
    });
  }
  return dom;
}
```

作者：海阔_天空
链接：<https://juejin.cn/post/7146973901166215176>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

dom To JSON
将真实dom转化为虚拟dom

```js
 // 将真实dom转化为虚拟dom
function dom2Json(dom) {
  if (!dom.tagName) return;
  let obj = {};
  obj.tag = dom.tagName;
  obj.children = [];
  dom.childNodes.forEach(item => {
    // 去掉空的节点
    dom2Json(item) && obj.children.push(dom2Json(item));
  });
  return obj;
}
```

Virtual DOM是JS模拟真实DOM节点，这个对象就是更加轻量级的对DOM的描述

为什么现在主流的框架都使用虚拟dom?

1）前端性能优化的一个秘诀就是尽可能少地操作DOM，频繁变动DOM会造成浏览器的回流或重绘

2）使用虚拟dom，当数据变化，页面需要更新时，通过diff算法，对比新旧虚拟dom节点，*比较两棵树差异，生成差异对象，一次性批量更新DOM*，进而有效提高性能

3）*虚拟 DOM 本质上是 js 对象，而 DOM 与平台强相关，相比之下虚拟 DOM 可更方便地跨平台操作，例如服务器渲染、weex 开发等*

作者：海阔_天空
链接：<https://juejin.cn/post/7146996646394462239>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```js
// 将真实dom转化为虚拟dom
function dom2Json(dom) {
  if (!dom.tagName) return;
  let obj = {};
  obj.tag = dom.tagName;
  obj.children = [];
  dom.childNodes.forEach(item => {
    // 去掉空的节点
    dom2Json(item) && obj.children.push(dom2Json(item));
  });
  return obj;
}


  // 虚拟dom包含三个参数  type, props, children
  class Element {
    constructor(type, props, children) {
      this.type = type
      this.props = props
      this.children = children
    }
  }

 // 将虚拟dom渲染成真实的dom
  function render(domObj) {
    let el = document.createElement(domObj.type)
    Object.keys(domObj.props).forEach(key => { // 设置属性
      let value = domObj.props[key]
      switch (key) {
        case('value'):
          if (el.tagName == 'INPUT' || el.tagName == 'TEXTAREA') {
            el.value = value
          } else {
            el.setAttribute(key, value)
          }
          break;
        case('style'):
          el.style.cssText = value
          break;
        default:
          el.setAttribute(key, value)
      }
    })
    domObj.children.forEach(child => {
      child = child instanceof Element ? render(child) : document.createTextNode(child)
    })
    return el
  }
```

# 写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？

vue 和 react 都是*采用 diff 算法来对比新旧虚拟节点，从而更新节点*。在 vue 的 *diff 函数交叉对比中，当新节点跟旧节点头尾交叉对比没结果时，会根据新节点的 key 去对比旧节点数组中的 key，从而找到相应旧节点（这里对应的是一个 key => index 的 map 映射）*。

如果没有找到就认为是一个新增节点。而如果没有 key，那么就会采用遍历查找的方式去找到对应的旧节点。一种是一个 map 映射，另一种是遍历查找。相比而言，map 映射的速度更快。

# 认识 React、Vue2、Vue3 三者的 diff 算法与对比

<https://juejin.cn/post/7318446267033452570>

篇文章主要对比了 React、Vue2、Vue3 的 Diff 算法。介绍了 *React 的 Fiber 架构*及 Diff 算法流程，包括*节点属性和两轮遍历方式*。对比了 Vue2 的双端 Diff 算法及案例，以及 Vue3 借鉴*字符串比对*的 Diff 算法。总结指出 React 源码因 Fiber 架构更难懂，Vue2、Vue3 *双端比对优化 Diff 算法*，Vue3 还*构造最长递增子序列提升性能*。

## React Diff 算法

React 是 Fiber 架构，*Fiber 其实是一个链表结构*，但是由于没有设置反向指针，因此没有使用双端比对的方式去优化 Diff 算法（没有反向指针，从右往左遍历链表会很困难）。这一点在 React 源码 reconcileChildrenArray 函数的注释中也有说明。

React 采用 Fiber 架构的原因是 JavaScript 的运行会阻塞页面渲染，React 为了不阻塞页面渲染，采用了 Fiber 架构，Fiber 也是一种链表数据结构，基于这个数据结构可以实现由原来不可中断的更新过程，变成异步的可中断的更新。

Fiber 节点的定义在 packages\react-reconciler\src\ReactFiber.old.js 文件中

FiberNode 的定义挺复杂的，有那么多的属性。笔者个人认为，也是因为 Fiber 的复杂，增加了阅读 React 源码的心智负担。

作者：云浪
链接：<https://juejin.cn/post/7318446267033452570>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

那为啥 Vue 不需要 Fiber 架构呢？那也是跟 Vue 本身的架构有关系，因为 *Vue 采用了响应式数据，响应式数据可以细粒度地实现更新，即可以实现仅更新绑定了变更数据的那部分视图。那是不是说明 Vue 就比 React 强？那也不是，因为实现响应式的数据也是要耗费资源的*，只能说是两个框架各自权衡取舍后的结果。

由于 React 无法使用双端比对的方法来优化 Diff 算法，所以 React 在进行多节点 Diff 的时候需要进行两轮遍历。
第一轮遍历：处理 更新 的节点。
第二轮遍历：处理剩下的不属于 更新 的节点。
React 多节点的 Diff 算法的实现在 reconcileChildrenArray 函数中

## Vue3 与 React Diff 的区别

认识 Vue3 Diff 算法
Vue3 的 Diff 算法与 Vue2 的 Diff 算法一样，也会先进行双端比对，只是双端比对的方式不一样。Vue3 的 Diff 算法借鉴了字符串比对时的双端比对方式，即优先处理可复用的前置元素和后置元素。
Vue3 的 Diff 算法的流程如下

处理前置节点

处理后置节点

新节点有剩余，则挂载剩余的新节点

旧节点有剩余，则卸载剩余的旧节点

乱序情况（新、旧节点都有剩余），则构建最长递增子序列

节点在最长递增子序列中，则该节点不需移动

节点不在最长递增子序列中，则移动该节点

Vue3 Diff 案例
假设
旧子序列为：abcd
新子序列为：dabc
处理前置节点：a vs d ，key 不同，不可复用，退出前置节点的处理
处理后置节点：d vs c ，key 不同，不可复用，退出后置节点的处理
进入乱序的情况的处理，创建新旧节点下标映射，并根据这个映射构造最长递增子序列
然后发现 a、b、c 都在最长递增子序列中，不需要移动位置
最后将 d 移动到头部
Diff 流程结束。
可以发现 Vue3 在处理 abcd 更新为 dabc 的时候，也只移动了 1 次位置，而 React 却要移动三次。
当然，这也不能说 Vue3 比 React 要好，而是要从整体出发，这两个框架各有优势，目前还无法说明孰优孰劣。当然，目前从性能这个单一的角度来看，Vue3 更占优一些，同时也比 Vue2 要占优。
区别

Vue3 的 Diff 与 React 的 Diff 主要区别为：

Vue3 也采用了双端对比的方式优化了 Diff 算法，这一点与 Vue2 是类似的。

*Vue3 还构造了最长递增子序列，最大程度降低了 DOM 操作，而 React 没有使用最长递增子序列来加速 Diff 算法*

## 总结

通过 React 源码和 Vue 源码的对比学习，发现 React 源码比 Vue 源码难懂很多，个人觉得是由于 React 采用了 Fiber 架构造成的，Fiber 是一个链表结构，子节点之间通过 sibling 指针连接，没有 Vue 直接用数组来得那么简单直接。

*Vue2 、Vue3 都采用了双端比对方式来加速 Diff 算法，而 React 采用了单链表数据结构来存储 Fiber 节点，导致其使用双端比对的方式来优化 Diff 算法变得困难，所以 React 没有采用双端比对方式来优化。相比 Vue2 ，Vue3 采用了最长递增子序列更进一步提升了性能*。

作者：云浪
链接：<https://juejin.cn/post/7318446267033452570>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
