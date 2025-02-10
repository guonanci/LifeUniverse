💡 所见即所得
*与组件类似的 Store*。其 API 的设计旨在让你编写出更易组织的 store。

🔑 类型安全
*类型可自动推断*，即使在 JavaScript 中亦可为你提供自动补全功能！

⚙️ *开发工具支持*
不管是 Vue 2 还是 Vue 3，支持 Vue devtools 钩子的 Pinia 都能给你更好的开发体验。

🔌 可扩展性
可通过事务、同步本地存储等方式扩展 Pinia，以响应 store 的变更以及 action。

🏗 模块化设计
可*构建多个 Store* 并允许你的打包工具自动拆分它们。

📦 极致轻量化
Pinia *大小只有 1kb* 左右，你甚至可能忘记它的存在！

创建一个 pinia 实例 (根 store) 并将其传递给应用：

```js

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```

在 Vue 3 中，一些功能仍然不被支持，如 time traveling 和编辑，这是因为 vue-devtools 还没有相关的 API，但 devtools 也有很多针对 Vue 3 的专属功能，而且就开发者的体验来说，Vue 3 整体上要好得多。在 Vue 2 中，Pinia 使用的是 Vuex 的现有接口 (因此不能与 Vuex 一起使用) 。

<https://pinia.vuejs.org/zh/introduction.html>

Pinia 起源于一次探索 Vuex 下一个迭代的实验，因此结合了 Vuex 5 核心团队讨论中的许多想法。最后，我们意识到 *Pinia 已经实现了我们在 Vuex 5 中想要的大部分功*能，所以决定将其作为新的推荐方案来代替 Vuex。

与 Vuex 相比，*Pinia 不仅提供了一个更简单的 API，也提供了符合组合式 API 风格的 API，最重要的是，搭配 TypeScript 一起使用时有非常可靠的类型推断支持*。

RFC
最初，Pinia 没有经过任何 RFC 的流程。我基于自己开发应用的经验，同时通过阅读其他人的代码，为使用 Pinia 的用户工作，以及在 Discord 上回答问题等方式验证了一些想法。 这些经历使我产出了这样一个可用的解决方案，并适应了各种场景和应用规模。我会一直在保持其核心 API 不变的情况下发布新版本，同时不断优化本库。

现在 Pinia 已经成为推荐的状态管理解决方案，它和 Vue 生态系统中的其他核心库一样，都要经过 RFC 流程，它的 API 也已经进入稳定状态。

对比 Vuex 3.x/4.x
Vuex 3.x 只适配 Vue 2，而 Vuex 4.x 是适配 Vue 3 的。

Pinia API 与 Vuex(<=4) 也有很多不同，即：

- *mutation 已被弃用*。它们经常被认为是极其冗余的。它们初衷是带来 devtools 的集成方案，但这已不再是一个问题了。

- *无需要创建自定义的复杂包装器来支持 TypeScript*，一切都可标注类型，API 的设计方式是尽可能地利用 TS 类型推理。
- 无过多的魔法字符串注入，只需要导入函数并调用它们，然后享受*自动补全*的乐趣就好。
- *不需要动态添加 Store，它们默认都是动态的*，甚至你可能都不会注意到这点。注意，你仍然可以在任何时候手动使用一个 Store 来注册它，但因为它是自动的，所以你不需要担心它。

- *不再有嵌套结构的模块*。你仍然可以通过导入和使用另一个 Store 来隐含地嵌套 stores 空间。虽然 Pinia 从设计上提供的是一个扁平的结构，但仍然能够在 Store 之间进行交叉组合。你甚至可以让 Stores 有循环依赖关系。

- 不再有可命名的模块。考虑到 Store 的扁平架构，Store 的命名取决于它们的定义方式，你甚至可以说所有 Store 都应该命名。

关于如何将现有 Vuex(<=4) 的项目转化为使用 Pinia 的更多详细说明，请参阅 *Vuex 迁移指南*。

# Store 是什么？

*Store (如 Pinia) 是一个保存状态和业务逻辑的实体，它并不与你的组件树绑定*。换句话说，*Store承载着全局状态，有点像一个永远存在的组件，每个组件都可以读取和写入它。它有三个概念，state、getter 和 action，我们可以假设这些概念相当于组件中的 data、 computed 和 methods*。

# 应该在什么时候使用 Store?

一个 *Store 应该包含可以在整个应用中访问的数据*。这包括*在许多地方使用的数据*，例如显示在*导航栏中的用户信息，以及需要通过页面保存的数据*，例如一个非常*复杂的多步骤表单*。

另一方面，你应该避免在 Store 中引入那些原本可以在组件中保存的本地数据，例如，一个元素在页面中的可见性。

并非所有应用都需要访问全局状态，但如果你的应用确实需要一个全局状态，那 Pinia 将使你的开发过程更轻松。

# 什么时候不应该使用 Store

有时候我们会过度使用 store。如果觉得应用程序的 store 过多，你可能需要重新考虑使用 store 的目的。例如其中一些逻辑应该只是组合式函数，或者应该只是组件的本地状态。这在 Mastering Pinia 的 (不要) 滥用 store 课程中有详细介绍。

# 定义Store

在深入研究核心概念之前，我们得知道 Store 是用 defineStore() 定义的，它的第一个参数要求是一个独一无二的名字：

import { defineStore } from 'pinia'

// 你可以任意命名 `defineStore()` 的返回值，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useAlertsStore = defineStore('alerts', {
  // 其他配置...
})
这个名字 ，也被用作 id ，是必须传入的， Pinia 将用它来连接 store 和 devtools。为了养成习惯性的用法，将返回的函数命名为 use... 是一个符合组合式函数风格的约定。

defineStore() 的第二个参数可接受两类值：Setup 函数或 Option 对象。

# Option Store

与 Vue 的选项式 API 类似，我们也可以传入一个带有 state、actions 与 getters 属性的 Option 对象

```js

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, name: 'Eduardo' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
```

你可以认为 state 是 store 的数据 (data)，getters 是 store 的计算属性 (computed)，而 actions 则是方法 (methods)。

为方便上手使用，Option Store 应尽可能直观简单。

# Setup Store

也存在另一种定义 store 的可用语法。与 Vue 组合式 API 的 setup 函数 相似，我们可以传入一个函数，该函数定义了一些响应式属性和方法，并且返回一个带有我们想暴露出去的属性和方法的对象。

```js

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
```

在 Setup Store 中：

ref() 就是 state 属性
computed() 就是 getters
function() 就是 actions

注意，要让 pinia 正确识别 state，你必须在 setup store 中返回 state 的所有属性。这意味着，不能在 store 中使用私有属性。不完整返回会影响 SSR ，开发工具和其他插件的正常运行。

Setup store 比 Option Store 带来了更多的灵活性，因为你可以在一个 store 内创建侦听器，并自由地使用任何组合式函数。不过，请记住，使用组合式函数会让 SSR 变得更加复杂。

Setup store 也可以依赖于全局提供的属性，比如路由。任何应用层面提供的属性都可以在 store 中使用 inject() 访问，就像在组件中一样：

```js

import { inject } from 'vue'
import { useRoute } from 'vue-router'
import { defineStore } from 'pinia'

export const useSearchFilters = defineStore('search-filters', () => {
  const route = useRoute()
  // 这里假定 `app.provide('appProvided', 'value')` 已经调用过
  const appProvided = inject('appProvided')

  // ...

  return {
    // ...
  }
})
```

WARNING

不要返回像 route 或 appProvided (上例中)之类的属性，因为它们不属于 store，而且你可以在组件中直接用 useRoute() 和 inject('appProvided') 访问。
