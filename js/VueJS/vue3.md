嗯，用户问的是Vue3的面试题，我需要整理一下相关的资料。首先看看搜索结果里的内容，各个文档都提到了Vue3的核心特性，比如响应式系统、Composition API、性能优化这些。

网页1里详细讲了Vue3相比Vue2的改进，比如Proxy替代Object.defineProperty，还有Composition API的优势。应该把响应式原理和Proxy的区别作为重点，这些都是常见的面试题。

网页2和网页3也讨论了ref和reactive的区别，以及Composition API如何解决代码碎片化的问题。需要对比Options API和Composition API，还有它们的使用场景。

网页3提到了diff算法的优化，虚拟DOM的改进，比如静态标记和事件缓存，这些性能优化点也是面试常问的。另外，生命周期钩子的变化，比如setup()代替了之前的beforeCreate和created，这个要指出来。

网页4和网页6补充了关于Vue3项目经验的部分，比如如何准备面试中的项目介绍，以及状态管理工具Pinia的优势。可能用户不仅需要技术点，还要应对策略和项目经验方面的建议。

网页7提到自学Vue的面试准备，包括项目展示和问题解决能力，这对回答面试后的跟进和反馈有帮助。不过用户的问题主要是技术题，这部分可能作为补充。

整理下来，主要分几个大块：响应式系统、Composition API、性能优化、生命周期、项目经验。每个部分都要结合多个网页的信息，引用不同的来源。比如Proxy的优势在网页1、3、4都有提到，需要综合引用。注意不要重复引用同一网页，尽量覆盖多个来源。




以下是 Vue3 高频面试题的总结，涵盖核心特性、响应式原理、性能优化等关键知识点，结合技术文档和实战经验整理而成：

---

### 一、Vue3 核心特性
1. **响应式系统升级**
   • 使用 **Proxy** 替代 Vue2 的 `Object.defineProperty`，支持动态属性增删和深层嵌套对象的自动代理。
   • 优势：无需手动递归劫持属性、直接监听数组变化（无需重写方法）、兼容 Map/Set 等数据结构。

2. **Composition API**
   • 解决 Options API 的代码碎片化问题，支持按功能组织逻辑（如 `setup()` 函数）。
   • 示例：
     ```typescript
     import { ref, reactive } from 'vue';
     export default {
       setup() {
         const count = ref(0); // 基本类型用 ref
         const user = reactive({ name: 'Alice' }); // 对象用 reactive
         return { count, user };
       }
     };
     ```

3. **性能优化**
   • **虚拟 DOM 重构**：静态节点标记（Patch Flags）、事件缓存，减少 diff 计算量。
   • **Tree Shaking**：按需引入模块，减小打包体积（核心库仅约 10KB）。

---

### 二、高频面试题解析
#### 1. **`ref` 与 `reactive` 的区别与使用场景**
   • **`ref`**：
     ◦ 包裹基本类型（如 `number`），通过 `.value` 访问；
     ◦ 适合独立值或需模板直接引用的场景。
   • **`reactive`**：
     ◦ 代理对象/数组，直接访问属性；
     ◦ 适合复杂数据结构和深层嵌套对象。

#### 2. **Vue3 的 Diff 算法优化**
   • **静态提升**：将静态节点缓存，避免重复渲染。
   • **最长递增子序列算法**：优化动态节点比对效率，性能提升 1.3~2 倍。

#### 3. **Composition API 与 Options API 对比**
   • **Options API**：逻辑分散在 `data`、`methods` 等选项中，适合简单组件。
   • **Composition API**：逻辑按功能聚合，支持自定义 Hook 复用（如 `useFetch`）。

#### 4. **Teleport 与 Suspense 的作用**
   • **Teleport**：将组件渲染到指定 DOM 位置（如弹窗渲染到 `body` 末尾）。
   • **Suspense**：管理异步组件加载状态（显示 Loading 占位）。

---

### 三、性能优化策略
1. **按需加载**
   • 路由懒加载：`const Home = () => import('./Home.vue')`。
   • 动态导入第三方库：`import { debounce } from 'lodash-es'`。

2. **状态管理优化**
   • **Pinia 替代 Vuex**：
     ◦ 扁平化 Store 结构，支持 Composition API 风格；
     ◦ 类型推断更友好，体积更小。

3. **内存泄漏防范**
   • 及时清理事件监听、定时器（`onUnmounted` 生命周期）。

---

### 四、项目经验与面试技巧
1. **项目案例准备**
   • 选择体现 **性能优化** 或 **复杂状态管理** 的项目（如虚拟滚动、权限控制）。
   • 使用 **STAR 法则** 描述：背景（S）、任务（T）、行动（A）、结果（R）。

2. **技术深度展示**
   • 示例：
     ◦ **权限指令**：通过自定义指令 `v-permission` 控制按钮显隐。
     ◦ **性能监控**：使用 `performance.mark()` 记录关键任务耗时。

---

### 五、常见陷阱与解决方案
1. **响应式丢失问题**
   • 使用 `toRefs` 解构 reactive 对象：
     ```typescript
     const state = reactive({ count: 0 });
     return { ...toRefs(state) }; // 保持响应性
     ```

2. **循环依赖警告**
   • 使用 `defineAsyncComponent` 延迟加载循环引用的组件。

---

### 六、学习资源推荐
1. **官方文档**：[Vue3 官方指南](https://vuejs.org/)（必读核心概念）。
2. **实战项目**：
   • GitHub 开源项目（如 Vue3 + TS 后台管理系统）。
3. **模拟面试**：
   • 使用 [Vue Mastery](https://www.vuemastery.com/) 的练习题。

---

通过系统掌握以上知识点，并结合项目经验灵活应对，可显著提升 Vue3 面试成功率。建议结合官方文档和实际编码练习加深理解。




<https://zhuanlan.zhihu.com/p/133819602>

# vue3与vue2的区别

1）*vue3性能比Vue2快1.2~2倍*

2）*使用proxy取代Object.defineProperty*，解决了*vue2中新增属性监听不到的问题，同时proxy也支持数组，不需要像vue2那样，对数组的方法做拦截处理*

3）diff方法优化
*vue3新增了静态标记（patchflag*），虚拟节点对比时，就只会对比这些带有静态标记的节点

4）静态提升
*vue3对于不参与更新的元素，会做静态提升，只会被创建一次，在渲染时直接复用*。vue2无论元素是否参与更新，每次都会重新创建然后再渲染

5）事件侦听器缓存
默认情况下onClick会被视为动态绑定，所以每次都会追踪它的变化，但因为是同一个函数，所以不用追踪变化，直接缓存起来复用即可

6）按需引入，通过*treeSharking*， 体积比vue2更小

7）组合API（类似react hooks），可以将data与对应逻辑写一起，更容易理解

8）提供了很灵活的api 比如toRef、shallowRef等等，可以灵活控制数据变化是否需要更新ui渲染

9）更好的Ts支持

作者：海阔_天空
链接：<https://juejin.cn/post/7146996646394462239>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# 数据双向绑定

Proxy，在目标对象之前‘拦截’，外界对该对象的访问，都必须先通过这层拦截，可以过滤和改写所有访问。

```js
var proxy = new Proxy(target,handler)

```

target:用Proxy包装的被代理对象，比如原生数组，函数，甚至另一个代理。

handler：一个对象，声明了代理target的一些操作，其属性是当执行一个操作时定义代理行为的函数。*Object.defineProperty无法监听到数组下标的变化，导致直接通过下标设置值的话不能实时响应*。

papmp项目里用的vue3，xm-web用的vue2.

# setup

## 组合式 API (Composition API)​

通过组合式 API，我们可以使用导入的 API 函数来描述组件逻辑。在单文件组件中，组合式 API 通常会与<script_setup>搭配使用。这个 *setup_attribute是一个标识，告诉Vue需在编译时进行一些处理，让我们可以更简洁地使用组合式API*。比如，<script setup> 中的导入和顶层变量/函数都能够在模板中直接使用。

下面是使用了组合式 API 与 <script setup> 改造后和上面的模板完全一样的组件：
<script setup>
import { ref, onMounted } from 'vue'

// 响应式状态
const count = ref(0)

// 用来修改状态、触发更新的函数
function increment() {
  count.value++
}

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>

## 该选哪一个？​

两种 API 风格都能够覆盖大部分的应用场景。它们只是同一个底层系统所提供的两套不同的接口。实际上，选项式 API 是在组合式 API 的基础上实现的！关于 Vue 的基础概念和知识在它们之间都是通用的。

选项式 API 以“组件实例”的概念为中心 (即上述例子中的 this)，对于有面向对象语言背景的用户来说，这通常和基于类的心智模型更为一致。同时，它抽象出响应性相关的细节，并强制按照选项来组织代码，从而对初学者而言更友好。

组合式 API 的核心思想是直接在函数作用域内定义响应式状态变量，并组合起多个函数中得到的状态，来处理复杂问题。这种形式更自由，也需要你对 Vue 的响应式系统有更深的理解，才能高效使用。相应的，它的灵活性也使得组织和重用逻辑的模式变得更强大。

在组合式 API FAQ 章节中，你可以了解更多关于这两种 API 风格的对比、以及组合式 API 所带来的潜在收益。

如果你是使用 Vue 的新手，这里是我们的大致建议：

在学习的过程中，推荐采用更易于自己理解的风格。再强调一下，大部分的核心概念在这两种风格之间都是通用的。熟悉一种风格后，你也能够很快地理解另一种风格。

在生产项目中：

当你不需要使用构建工具，或者打算主要在低复杂度的场景中使用 Vue，例如渐进增强的应用场景，推荐采用选项式 API。

当你打算用 Vue 构建完整的单页应用，推荐采用*组合式 API + 单文件组件*。

在学习阶段，你不必只固守一种风格。在接下来的文档中，我们会为你提供一系列两种风格的代码供你参考，你可以随时通过左上角的 API 风格偏好来切换。

# 快速上手​

线上尝试 Vue​
想要快速体验 Vue，你可以直接试试我们的演练场。

如果你更喜欢不用任何构建的原始 HTML，可以使用 JSFiddle 入门。

如果你已经比较熟悉 Node.js 和构建工具等概念，还可以直接在浏览器中打开 StackBlitz 来尝试完整的构建设置。

创建一个 Vue 应用​

前提条件:
熟悉命令行
已安装 18.3 或更高版本的 Node.js

在本节中，我们将介绍如何在本地搭建 Vue 单页应用。创建的项目将使用基于 Vite 的构建设置，并允许我们使用 Vue 的单文件组件 (SFC)。

确保你安装了最新版本的 Node.js，并且你的当前工作目录正是打算创建项目的目录。在命令行中运行以下命令 (不要带上 $ 符号)：

npm
pnpm
yarn
bun

```sh

npm create vue@latest
```

这一指令将会安装并执行 create-vue，它是 Vue 官方的项目脚手架工具。你将会看到一些诸如 TypeScript 和测试支持之类的可选功能提示：

✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Nightwatch / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
✔ Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes

Scaffolding project in ./<your-project-name>...
Done.

如果不确定是否要开启某个功能，你可以直接按下回车键选择 No。在项目被创建后，通过以下步骤安装依赖并启动开发服务器：

npm
pnpm
yarn
bun

```sh
cd <your-project-name>
npm install
npm run dev
```

你现在应该已经运行起来了你的第一个 Vue 项目！请注意，生成的项目中的示例组件使用的是组合式 API 和 <script setup></script>，而非选项式 API。下面是一些补充提示：

推荐的 IDE 配置是 Visual Studio Code + Vue - Official 扩展。如果使用其他编辑器，参考 IDE 支持章节。
更多工具细节，包括与后端框架的整合，我们会在工具链指南进行讨论。

要了解构建工具 Vite 更多背后的细节，请查看 Vite 文档。
如果你选择使用 TypeScript，请阅读 TypeScript 使用指南。

当你准备将应用发布到生产环境时，请运行：

npm
pnpm
yarn
bun

```sh

npm run build
```

此命令会在 ./dist 文件夹中为你的应用创建一个生产环境的构建版本。关于将应用上线生产环境的更多内容，请阅读生产环境部署指南。

下一步>

## 通过 CDN 使用 Vue​

你可以借助 script 标签直接通过 CDN 来使用 Vue：

html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
这里我们使用了 unpkg，但你也可以使用任何提供 npm 包服务的 CDN，例如 jsdelivr 或 cdnjs。当然，你也可以下载此文件并自行提供服务。

通过 CDN 使用 Vue 时，不涉及“构建步骤”。这使得设置更简单，并且可以用于增强静态的 HTML 或与后端框架集成。但是，你将无法使用单文件组件 (SFC) 语法。

### 使用全局构建版本​

上面的链接使用了全局构建版本的 Vue，该版本的所有顶层 API 都以属性的形式暴露在了全局的 Vue 对象上。这里有一个使用全局构建版本的例子：

html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<div id="app">{{ message }}</div>

<script>
  const { createApp, ref } = Vue

  createApp({
    setup() {
      const message = ref('Hello vue!')
      return {
        message
      }
    }
  }).mount('#app')
</script>
CodePen 示例 >

TIP

本指南中许多关于组合式 API 的例子将使用 <script setup> 语法，这需要构建工具。如果你打算在没有构建步骤的情况下使用组合式 API，请参考 setup() 选项的用法。

### 使用 ES 模块构建版本​

在本文档的其余部分，我们使用的主要是 ES 模块语法。现代浏览器大多都已原生支持 ES 模块。因此我们可以像这样通过 CDN、 以及原生 ES 模块使用 Vue：

html
<div id="app">{{ message }}</div>

<script type="module">
  import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

  createApp({
    setup() {
      const message = ref('Hello Vue!')
      return {
        message
      }
    }
  }).mount('#app')
</script>
注意我们使用了 <script type="module">，且导入的 CDN URL 指向的是 Vue 的 ES 模块构建版本。

CodePen 示例 >

### 启用 Import maps​

在上面的示例中，我们使用了完整的 CDN URL 来导入，但在文档的其余部分中，你将看到如下代码：

js
import { createApp } from 'vue'
我们可以使用导入映射表 (Import Maps) 来告诉浏览器如何定位到导入的 vue：

html
<script type="importmap">
  {
    "imports": {
      "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
    }
  }
</script>

<div id="app">{{ message }}</div>

<script type="module">
  import { createApp, ref } from 'vue'

  createApp({
    setup() {
      const message = ref('Hello Vue!')
      return {
        message
      }
    }
  }).mount('#app')
</script>
CodePen 示例 >

你也可以在映射表中添加其他的依赖——但请务必确保你使用的是该库的 ES 模块版本。

导入映射表的浏览器支持情况：

导入映射表是一个相对较新的浏览器功能。请确保使用其支持范围内的浏览器。请注意，只有 Safari 16.4 以上版本支持。

生产环境中的注意事项：

到目前为止示例中使用的都是 Vue 的开发构建版本——如果你打算在生产中通过 CDN 使用 Vue，请务必查看生产环境部署指南。

虽然 Vue 可以不依赖构建系统使用，但也可以考虑使用 vuejs/petite-vue 这个替代方案，以更好地适配，可能在 jquery/jquery (过去) 或 alpinejs/alpine (现在) 的上下文中使用的情况。

### 拆分模块​

随着对这份指南的逐步深入，我们可能需要将代码分割成单独的 JavaScript 文件，以便更容易管理。例如：

html
<!-- index.html -->
<div id="app"></div>

<script type="module">
  import { createApp } from 'vue'
  import MyComponent from './my-component.js'

  createApp(MyComponent).mount('#app')
</script>
js
// my-component.js
import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: `<div>Count is: {{ count }}</div>`
}
如果直接在浏览器中打开了上面的 index.html，你会发现它抛出了一个错误，因为 ES 模块不能通过 file:// 协议工作，也就是当你打开一个本地文件时浏览器使用的协议。

由于安全原因，ES 模块只能通过 http:// 协议工作，也就是浏览器在打开网页时使用的协议。为了使 ES 模块在我们的本地机器上工作，我们需要使用本地的 HTTP 服务器，通过 http:// 协议来提供index.html。

要启动一个本地的 HTTP 服务器，请先安装 Node.js，然后通过命令行在 HTML 文件所在文件夹下，运行 npx serve。你也可以使用其他任何，可以基于正确的 MIME 类型服务静态文件的 HTTP 服务器。

可能你也注意到了，这里导入的组件模板是内联的 JavaScript 字符串。如果你正在使用 VS Code，你可以安装 es6-string-html 扩展，然后在字符串前加上一个前缀注释 /*html*/ 以高亮语法。

# 创建一个 Vue 应用​

## 应用实例​

每个 Vue 应用都是通过 createApp 函数创建一个新的 应用实例：

js
import { createApp } from 'vue'

const app = createApp({
  /*根组件选项*/
})

## 根组件​

我们传入 createApp 的对象实际上是一个组件，每个应用都需要一个“根组件”，其他组件将作为其子组件。

如果你使用的是单文件组件，我们可以直接从另一个文件中导入根组件。

js
import { createApp } from 'vue'
// 从一个单文件组件中导入根组件
import App from './App.vue'

const app = createApp(App)

虽然本指南中的许多示例只需要一个组件，但大多数真实的应用都是由一棵嵌套的、可重用的组件树组成。例如，一个待办事项 (Todos) 应用的组件树可能是这样的：

App (root component)
├─ TodoList
│  └─ TodoItem
│     ├─ TodoDeleteButton
│     └─ TodoEditButton
└─ TodoFooter
   ├─ TodoClearButton
   └─ TodoStatistics
我们会在指南的后续章节中讨论如何定义与组合多个组件。在那之前，我们得先关注一个组件内到底发生了啥。

# 挂载应用​

应用实例必须在调用了 .mount() 方法后才会渲染出来。该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或者一个 CSS 选择器字符串：

html
<div id="app"></div>
js
app.mount('#app')

应用根组件的内容将会被渲染在容器元素里面。容器元素自己将不会被视为应用的一部分。

*.mount() 方法应该始终，在整个应用配置和资源注册完成后被调用。同时请注意，不同于其他资源注册方法，它的返回值是根组件实例而非应用实例。*

## DOM 中的根组件模板​

根组件的模板通常是组件本身的一部分，但也可以直接通过在挂载容器内编写模板来单独提供：

html
<div id="app">
  <button @click="count++">{{ count }}</button>
</div>
js
import { createApp } from 'vue'

const app = createApp({
  data() {
    return {
      count: 0
    }
  }
})

app.mount('#app')

当根组件没有设置 template 选项时，Vue 将自动使用容器的 innerHTML 作为模板。

DOM 内模板通常用于无构建步骤的 Vue 应用程序。它们也可以与服务器端框架一起使用，其中根模板可能是由服务器动态生成的。

## 应用配置​

应用实例会暴露一个 .config 对象允许我们配置一些应用级的选项，例如定义一个应用级的错误处理器，用来捕获所有子组件上的错误：

js
app.config.errorHandler = (err) => {
  /*处理错误*/
}

应用实例还提供了一些方法来注册应用范围内可用的资源，例如注册一个组件：

js
app.component('TodoDeleteButton', TodoDeleteButton)

这使得 TodoDeleteButton 在应用的任何地方都可用。我们会在指南的后续章节中讨论，关于组件和其他资源的注册。你也可以在 API 参考中浏览应用实例 API 的完整列表。

确保在挂载应用实例之前完成所有应用配置！

## 多个应用实例​

应用实例并不只限于一个。createApp API 允许你在同个页面中创建多个共存的 Vue 应用，而且每个应用都拥有自己的，用于配置和全局资源的作用域。

js
const app1 = createApp({
  /*...*/
})
app1.mount('#container-1')

const app2 = createApp({
  /*...*/
})
app2.mount('#container-2')

如果你正在使用 Vue 来增强服务端渲染 HTML，并且只想要 Vue 去控制一个大型页面中特殊的一小部分，应避免将一个单独的 Vue 应用实例挂载到整个页面上，而是应该创建多个小的应用实例，将它们分别挂载到所需元素上去。

# 模板语法​

Vue 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据，绑定到呈现的 DOM 上。所有的 Vue 模板都是语法层面合法的 HTML，可以被符合规范的浏览器和 HTML 解析器解析。

在底层机制中，Vue 会将模板编译成高度优化的 JavaScript 代码。结合响应式系统，当应用状态变更时，Vue 能够智能地推导出需要重新渲染的组件的最少数量，并应用最少的 DOM 操作。

如果你比较熟悉虚拟 DOM 的概念，并且偏好直接使用 JavaScript，那么你也可以结合可选的 JSX 支持，直接手写渲染函数而不采用模板。但请注意，这将不会享受到和模板同等级别的编译时优化。

## 文本插值​

最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法 (即双大括号)：

template
<span>Message: {{ msg }}</span>

双大括号标签会被替换为相应组件实例中 msg 属性的值。同时每次 msg 属性更改时它也会同步更新。

## 原始 HTML​

双大括号会将数据解释为纯文本，而非HTML。若想插入HTML，你需要使用 v-html 指令：

template
<p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>

Using text interpolation: <span style="color: red">This should be red.</span>

Using v-html directive: This should be red.

这里我们遇到了一个新概念。这里看到的 v-html attribute 被称为一个指令。指令由 v- 作为前缀，表明它们是一些由 Vue 提供的特殊 attribute，你可能已经猜到了，它们将为渲染的 DOM 应用特殊的响应式行为。

这里我们做的事简单来说就是：在当前组件实例上，将此元素的 innerHTML 与 rawHtml 属性保持同步。

span 的内容将会被替换为 rawHtml 属性的值，插值为纯 HTML——数据绑定将会被忽略。注意，你不能使用 v-html 来拼接组合模板，因为 Vue 不是一个基于字符串的模板引擎。在使用 Vue 时，应当使用组件作为 UI 重用和组合的基本单元。

安全警告：
在网站上动态渲染任意 HTML 很危险，因为这很容易造成 XSS 漏洞。请仅在内容安全可信时再使用 v-html，并且永远不要使用用户提供的 HTML 内容。

## Attribute 绑定​

双大括号不能在 HTML attributes 中使用。想要响应式地绑定一个 attribute，应该使用 v-bind 指令：

template
<div v-bind:id="dynamicId"></div>
v-bind 指令指示 Vue 将元素的 id attribute 与组件的 dynamicId 属性保持一致。如果绑定的值是 null 或者undefined，那么该 attribute 将会从渲染的元素上移除。

### 简写​

因为 v-bind 很常用，我们提供了特定的简写语法：

template
<div :id="dynamicId"></div>
开头为 : 的 attribute 可能和一般的 HTML attribute 看起来不太一样，但它的确是合法的 attribute 名称字符，并且所有支持 Vue 的浏览器都能正确解析它。此外，它们不会出现在最终渲染的 DOM 中。简写语法可选，但我相信在你了解它的更多用处后，应该会更喜欢它。

接下来的指引中，我们都将在示例中使用简写语法，因为这是在实际开发中更常见的用法。

### 同名简写​

仅支持 3.4 版本及以上
*如果 attribute 的名称与绑定的 JavaScript 值的名称相同，那么可以进一步简化语法，省略 attribute 值*：

template
<!-- 与 :id="id" 相同 -->
<div :id></div>

<!-- 这也同样有效 -->
<div v-bind:id></div>
这类似于在 JavaScript 中声明对象时使用的属性简写语法。请注意，这是一个只在 Vue 3.4 及以上版本中可用的特性。

### 布尔型 Attribute​

布尔型 attribute 依据 true / false 值来决定 attribute 是否应该存在于该元素上。disabled 就是最常见的例子之一。

v-bind 在这种场景下的行为略有不同：

template
<button :disabled="isButtonDisabled">Button</button>

当 isButtonDisabled 为真值或一个空字符串 (即 <button disabled="">) 时，元素会包含这个 disabled attribute。而当其为其他假值时 attribute 将被忽略。

### 动态绑定多个值​

如果你有像这样的一个包含多个 attribute 的 JavaScript 对象：

js
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green'
}
通过不带参数的 v-bind，你可以将它们绑定到单个元素上：

template
<div v-bind="objectOfAttrs"></div>

## 使用 JavaScript 表达式​

至此，我们仅在模板中绑定了一些简单的属性名。但是实际上，vue在所有的数据绑定中都支持完整的 JavaScript 表达式：

template
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div :id="`list-${id}`"></div>

这些表达式都会被作为 JavaScript ，以当前组件实例为作用域解析执行。

在 Vue 模板内，JavaScript 表达式可以被使用在如下场景上：

- 在文本插值中 (双大括号)
- 在任何 Vue 指令 (以 v- 开头的特殊 attribute) attribute 的值中

### 仅支持表达式​

每个绑定仅支持单一表达式，也就是一段能够被求值的 JavaScript 代码。一个简单的判断方法是，判断是否可以合法地写在 return 后面。

因此，下面的例子都是无效的：

template
<!-- 这是一个语句，而非表达式 -->
{{ var a = 1 }}

<!-- 条件控制也不支持，请使用三元表达式 -->
{{ if (ok) { return message } }}

### 调用函数​

可以在绑定的表达式中使用一个组件暴露的方法：

template
<time :title="toTitleDate(date)" :datetime="date">
  {{ formatDate(date) }}
</time>
TIP

绑定在表达式中的方法，在组件每次更新时都会被重新调用，因此不应该产生任何副作用，比如改变数据或触发异步操作。

### 受限的全局访问​

模板中的表达式将被沙盒化，仅能够访问到有限的全局对象列表。该列表中会暴露常用的内置全局对象，比如 Math 和 Date。

没有显式包含在列表中的全局对象，将不能在模板内表达式中访问，例如用户附加在 window 上的属性。然而，你也可以自行在 app.config.globalProperties 上显式地添加它们，供所有的 Vue 表达式使用。

## 指令 Directives​

指令是带有 v- 前缀的特殊 attribute。Vue 提供了许多内置指令，包括上面我们所介绍的 v-bind 和 v-html。

指令 attribute 的期望值为一个 JavaScript 表达式 (除了少数几个例外，即之后要讨论到的 v-for、v-on 和 v-slot)。一个指令的任务是在其表达式的值变化时响应式地更新 DOM。以 v-if 为例：

template
<p v-if="seen">Now you see me</p>
这里，v-if 指令会基于表达式 seen 的值的真假来移除/插入该 <p> 元素。

### 参数 Arguments​

某些指令会需要一个“参数”，在指令名后通过一个冒号隔开做标识。例如用 v-bind 指令来响应式地更新一个 HTML attribute：

template
<a v-bind:href="url"> ... </a>

<!-- 简写 -->
<a :href="url"> ... </a>
这里 href 就是一个参数，它告诉 v-bind 指令将表达式 url 的值绑定到元素的 href attribute 上。在简写中，参数前的一切 (例如 v-bind:) 都会被缩略为一个 : 字符。

另一个例子是 v-on 指令，它将监听 DOM 事件：

template
<a v-on:click="doSomething"> ... </a>

<!-- 简写 -->
<a @click="doSomething"> ... </a>
这里的参数是要监听的事件名称：click。v-on 有一个相应的缩写，即 @ 字符。我们之后也会讨论关于事件处理的更多细节。

### 动态参数​

同样在指令参数上也可以使用一个 JavaScript 表达式，需要包含在一对方括号内：

template
<!--
注意，参数表达式有一些约束，
参见下面“动态参数值的限制”与“动态参数语法的限制”章节的解释
-->
<a v-bind:[attributeName]="url"> ... </a>

<!-- 简写 -->
<a :[attributeName]="url"> ... </a>

这里的 attributeName 会作为一个 JavaScript 表达式被动态执行，计算得到的值会被用作最终的参数。举例来说，如果你的组件实例有一个数据属性 attributeName，其值为 "href"，那么这个绑定就等价于 v-bind:href。

相似地，你还可以将一个函数绑定到动态的事件名称上：

template
<a v-on:[eventName]="doSomething"> ... </a>

<!-- 简写 -->
<a @[eventName]="doSomething"> ... </a>

在此示例中，当 eventName 的值是 "focus" 时，v-on:[eventName] 就等价于 v-on:focus。

### 动态参数值的限制​

动态参数中表达式的值应当是一个字符串，或者null。特殊值 null 意为显式移除该绑定。其他非字符串的值会触发警告。

### 动态参数语法的限制​

动态参数表达式因为某些字符的缘故有些语法限制，比如空格和引号，在 HTML attribute 名称中都是不合法的。例如下面的示例：

template
<!-- 这会触发一个编译器警告 -->
<a :['foo' + bar]="value"> ... </a>
如果你需要传入一个复杂的动态参数，我们推荐使用计算属性替换复杂的表达式，也是 Vue 最基础的概念之一，我们很快就会讲到。

当使用 DOM 内嵌模板 (直接写在 HTML 文件里的模板) 时，我们需要避免在名称中使用大写字母，因为浏览器会强制将其转换为小写：

template
<a :[someAttr]="value"> ... </a>
上面的例子将会在 DOM 内嵌模板中被转换为 :[someattr]。如果你的组件拥有 “someAttr” 属性而非 “someattr”，这段代码将不会工作。单文件组件内的模板不受此限制。

### 修饰符 Modifiers​

修饰符是以点开头的特殊后缀，表明指令需要以一些特殊方式被绑定。例如 .prevent 修饰符会告知 v-on 指令对触发的事件调用 event.preventDefault()：

template
<form @submit.prevent="onSubmit">...</form>
