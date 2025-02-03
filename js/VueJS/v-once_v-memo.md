# v-once​

仅渲染元素和组件一次，并跳过之后的更新。

无需传入

详细信息

在随后的重新渲染，元素/组件及其所有子项将被当作静态内容并跳过渲染。这可以用来优化更新时的性能。

template
<!-- 单个元素 -->
<span v-once>This will never change: {{msg}}</span>
<!-- 带有子元素的元素 -->
<div v-once>
  <h1>Comment</h1>
  <p>{{msg}}</p>
</div>
<!-- 组件 -->
<MyComponent v-once :comment="msg" />
<!-- `v-for` 指令 -->
<ul>
  <li v-for="i in list" v-once>{{i}}</li>
</ul>
从 3.2 起，你也可以搭配 v-memo 的无效条件来缓存部分模板。
# v-memo​
仅在 3.2+ 中支持

期望的绑定值类型：any[]

详细信息

缓存一个模板的子树。在元素和组件上都可以使用。为了实现缓存，该指令需要传入一个固定长度的依赖值数组进行比较。如果数组里的每个值都与最后一次的渲染相同，那么整个子树的更新将被跳过。举例来说：

template
<div v-memo="[valueA, valueB]">
  ...
</div>
当组件重新渲染，如果 valueA 和 valueB 都保持不变，这个 <div> 及其子项的所有更新都将被跳过。实际上，甚至虚拟 DOM 的 vnode 创建也将被跳过，因为缓存的子树副本可以被重新使用。

正确指定缓存数组很重要，否则应该生效的更新可能被跳过。v-memo 传入空依赖数组 (v-memo="[]") 将与 v-once 效果相同。

与 v-for 一起使用

v-memo 仅用于性能至上场景中的微小优化，应该很少需要。最常见的情况可能是有助于渲染海量 v-for 列表 (长度超过 1000 的情况)：

template
<div v-for="item in list" :key="item.id" v-memo="[item.id === selected]">
  <p>ID: {{ item.id }} - selected: {{ item.id === selected }}</p>
  <p>...more child nodes</p>
</div>
当组件的 selected 状态改变，默认会重新创建大量的 vnode，尽管绝大部分都跟之前是一模一样的。v-memo 用在这里本质上是在说“只有当该项的被选中状态改变时才需要更新”。这使得每个选中状态没有变的项能完全重用之前的 vnode 并跳过差异比较。注意这里 memo 依赖数组中并不需要包含 item.id，因为 Vue 也会根据 item 的 :key 进行判断。

警告

当搭配 v-for 使用 v-memo，确保两者都绑定在同一个元素上。v-memo 不能用在 v-for 内部。

v-memo 也能被用于在一些默认优化失败的边际情况下，手动避免子组件出现不需要的更新。但是一样的，开发者需要负责指定正确的依赖数组以免跳过必要的更新。
