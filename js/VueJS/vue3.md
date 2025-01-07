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

在学习阶段，你不必只固守一种风格。在接下来的文档中，我们会为你提供一系列两种风格的代码供你参考，你可以随时通过左上角的 API 风格偏好来做切换。

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

通过 CDN 使用 Vue 时，不涉及“构建步骤”。这使得设置更加简单，并且可以用于增强静态的 HTML 或与后端框架集成。但是，你将无法使用单文件组件 (SFC) 语法。

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

由于安全原因，ES 模块只能通过 http:// 协议工作，也即是浏览器在打开网页时使用的协议。为了使 ES 模块在我们的本地机器上工作，我们需要使用本地的 HTTP 服务器，通过 http:// 协议来提供 index.html。

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
v-bind 指令指示 Vue 将元素的 id attribute 与组件的 dynamicId 属性保持一致。如果绑定的值是 null 或者 undefined，那么该 attribute 将会从渲染的元素上移除。

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

# 响应式基础​

API 参考

本页和后面很多页面中都分别包含了选项式 API 和组合式 API 的示例代码。现在你选择的是 组合式 API。你可以使用左侧侧边栏顶部的“API 风格偏好”开关在 API 风格之间切换。

## 声明响应式状态​

ref()​
在组合式 API 中，推荐使用 ref() 函数来声明响应式状态：

js
import { ref } from 'vue'

const count = ref(0)
ref() 接收参数，并将其包裹在一个带有 .value 属性的 ref 对象中返回：

js
const count = ref(0)

console.log(count) // { value: 0 }
console.log(count.value) // 0

count.value++
console.log(count.value) // 1

参考：为 refs 标注类型

要在组件模板中访问 ref，请从组件的 setup() 函数中声明并返回它们：

js
import { ref } from 'vue'

export default {
  // `setup` 是一个特殊的钩子，专门用于组合式 API。
  setup() {
    const count = ref(0)

    // 将 ref 暴露给模板
    return {
      count
    }
  }
}

template
<div>{{ count }}</div>

注意，在模板中使用 ref 时，我们不需要附加 .value。为了方便起见，当在模板中使用时，ref 会自动解包 (有一些注意事项)。

你也可以直接在事件监听器中改变一个 ref：

template
<button @click="count++">
  {{ count }}
</button>

对于更复杂的逻辑，我们可以在同一作用域内声明更改 ref 的函数，并将它们作为方法与状态一起公开：

js
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)

    function increment() {
      // 在 JavaScript 中需要 .value
      count.value++
    }

    // 不要忘记同时暴露 increment 函数
    return {
      count,
      increment
    }
  }
}

然后，暴露的方法可以被用作事件监听器：

template
<button @click="increment">
  {{ count }}
</button>
这里是 Codepen 上的例子，没有使用任何构建工具。

<script setup>​
在 setup() 函数中手动暴露大量的状态和方法很繁琐。幸运的是，我们可以通过使用单文件组件 (SFC) 来避免这种情况。我们可以使用 <script setup> 大幅度地简化代码：

vue
<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">
    {{ count }}
  </button>
</template>

在演练场中尝试一下

<script_setup> 中的顶层的导入、声明的变量和函数，可在同一个组件的模板中直接使用。你可以理解为模板是在同一个作用域内，声明的一个 JavaScript 函数——它自然可以访问与它一起声明的所有内容。

TIP

在指南的后续章节中，我们基本上都会在组合式 API 示例中使用单文件组件 + <script_setup> 的语法，因为大多数 Vue 开发者都会这样使用。

如果你没有使用单文件组件，你仍然可以在 setup() 选项中使用组合式 API。

### 为什么要使用 ref？​

你可能会好奇：为何我们需要使用带有 .value 的 ref，而非普通变量？为了解释这一点，我们需要简单地讨论一下 Vue 的响应式系统如何工作。

当你在模板中使用了一个 ref，然后改变了这个 ref 的值时，Vue 会自动检测到这个变化，并且相应地更新 DOM。这是通过一个基于依赖追踪的响应式系统实现的。当一个组件首次渲染时，Vue 会追踪在渲染过程中使用的每个 ref。然后，当一个 ref 被修改时，它会触发追踪它的组件的一次重新渲染。

在标准的 JavaScript 中，检测普通变量的访问或修改是行不通的。然而，我们可以通过 getter 和 setter 方法来拦截对象属性的 get 和 set 操作。

这个 .value 属性给予了 Vue 一个机会来检测 ref 何时被访问或修改。在其内部，Vue 在它的 getter 中执行追踪，在它的 setter 中执行触发。从概念上讲，可以将 ref 看作一个这样的对象：

js
// 伪代码，不是真正的实现
const myRef = {
  _value: 0,
  get value() {
    track()
    return this._value
  },
  set value(newValue) {
    this._value = newValue
    trigger()
  }
}

另一个 ref 的好处是，与普通变量不同，你可以将 ref 传递给函数，同时保留对最新值和响应式连接的访问。当将复杂的逻辑重构为可重用的代码时，这将很有用。

该响应性系统在深入响应式原理章节中有更详细的讨论。

### 深层响应性​

Ref 可以持有任何类型的值，包括深层嵌套的对象、数组、或者 JavaScript 内置的数据结构，比如 Map。

Ref 会使它的值具有深层响应性。这意味着即使改变嵌套对象或数组时，变化也会被检测到：

js
import { ref } from 'vue'

const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

function mutateDeeply() {
  // 以下都会按照期望工作
  obj.value.nested.count++
  obj.value.arr.push('baz')
}

非原始值将通过 reactive() 转换为响应式代理，该函数将在后面讨论。

也可以通过 shallow ref 来放弃深层响应性。对于浅层 ref，只有 .value 的访问会被追踪。浅层 ref 可以用于避免对大型数据的响应性开销来优化性能、或者有外部库管理其内部状态的情况。

阅读更多：

- 减少大型不可变数据的响应性开销
- 与外部状态系统集成

### DOM 更新时机​

当你修改了响应式状态时，DOM 会被自动更新。但是需要注意的是，DOM 更新不是同步的。Vue 会在“next tick”更新周期中缓冲所有状态的修改，以确保不管你进行了多少次状态修改，每个组件都只会被更新一次。

要等待 DOM 更新完成后再执行额外代码，可以使用 nextTick() 全局 API：

js
import { nextTick } from 'vue'

async function increment() {
  count.value++
  await nextTick()
  // 现在 DOM 已经更新了
}

## reactive()​

还有另一种声明响应式状态的方式，即使用 reactive() API。与将内部值包装在特殊对象中的 ref 不同，reactive() 将使对象本身具有响应性：

js
import { reactive } from 'vue'

const state = reactive({ count: 0 })
参考：为 reactive() 标注类型

在模板中使用：

template
<button @click="state.count++">
  {{ state.count }}
</button>

响应式对象是 JavaScript 代理，其行为就和普通对象一样。不同的是，Vue 能够拦截对响应式对象所有属性的访问和修改，以便依赖追踪和触发更新。

reactive() 将深层地转换对象：当访问嵌套对象时，它们也会被 reactive() 包装。当 ref 的值是一个对象时，ref() 也会在内部调用它。与浅层 ref 类似，这里也有一个 shallowReactive() API 可以选择退出深层响应性。

### Reactive Proxy vs. Original​

值得注意的是，reactive() 返回的是一个原始对象的 Proxy，它和原始对象是不相等的：

js
const raw = {}
const proxy = reactive(raw)

// 代理对象和原始对象不是全等的
console.log(proxy === raw) // false

只有代理对象是响应式的，更改原始对象不会触发更新。因此，使用 Vue 的响应式系统的最佳实践是仅使用你声明对象的代理版本。

为保证访问代理的一致性，对同一个原始对象调用 reactive() ，总会返回同样的代理对象，而对一个已存在的代理对象调用 reactive() 会返回其本身：

js
// 在同一个对象上调用 reactive() 会返回相同的代理
console.log(reactive(raw) === proxy) // true

// 在一个代理上调用 reactive() 会返回它自己
console.log(reactive(proxy) === proxy) // true

这个规则对嵌套对象也适用。依靠深层响应性，响应式对象内的嵌套对象依然是代理：

js
const proxy = reactive({})

const raw = {}
proxy.nested = raw

console.log(proxy.nested === raw) // false

### reactive() 的局限性​

reactive() API 有一些局限性：

1. 有限的值类型：它只能用于对象类型 (对象、数组和如 Map、Set 这样的集合类型)。它不能持有如 string、number 或 boolean 这样的原始类型。

2. 不能替换整个对象：由于 Vue 的响应式跟踪是通过属性访问实现的，因此我们必须始终保持对响应式对象的相同引用。这意味着我们不能轻易地“替换”响应式对象，因为这样的话与第一个引用的响应性连接将丢失：

js
let state = reactive({ count: 0 })

// 上面的 ({ count: 0 }) 引用将不再被追踪
// (响应性连接已丢失！)
state = reactive({ count: 1 })
3. 对解构操作不友好：当我们将响应式对象的原始类型属性解构为本地变量时，或者将该属性传递给函数时，我们将丢失响应性连接：

js
const state = reactive({ count: 0 })

// 当解构时，count 已经与 state.count 断开连接
let { count } = state
// 不会影响原始的 state
count++

// 该函数接收到的是一个普通的数字
// 并且无法追踪 state.count 的变化
// 我们必须传入整个对象以保持响应性
callSomeFunction(state.count)
由于这些限制，我们建议使用 ref() 作为声明响应式状态的主要 API。

## 额外的 ref 解包细节​

### 作为 reactive 对象的属性​

一个 ref 会在作为响应式对象的属性被访问或修改时自动解包。换句话说，它的行为就像一个普通属性：

js
const count = ref(0)
const state = reactive({
  count
})

console.log(state.count) // 0

state.count = 1
console.log(count.value) // 1

如果将一个新的 ref 赋值给一个关联了已有 ref 的属性，那么它会替换掉旧的 ref：

js
const otherCount = ref(2)

state.count = otherCount
console.log(state.count) // 2
// 原始 ref 现在已经和 state.count 失去联系
console.log(count.value) // 1

只有当嵌套在一个深层响应式对象内时，才会发生 ref 解包。当其作为浅层响应式对象的属性被访问时不会解包。

### 数组和集合的注意事项​

与 reactive 对象不同的是，当 ref 作为响应式数组或原生集合类型 (如 Map) 中的元素被访问时，它不会被解包：

js
const books = reactive([ref('Vue 3 Guide')])
// 这里需要 .value
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)]]))
// 这里需要 .value
console.log(map.get('count').value)

### 在模板中解包的注意事项​

在模板渲染上下文中，只有顶级的 ref 属性才会被解包。

在下面的例子中，count 和 object 是顶级属性，但 object.id 不是：

js
const count = ref(0)
const object = { id: ref(1) }

因此，这个表达式按预期工作：

template
{{ count + 1 }}
...但这个不会：

template
{{ object.id + 1 }}

渲染的结果将是 [object Object]1，因为在计算表达式时 object.id 没有被解包，仍然是一个 ref 对象。为了解决这个问题，我们可以将 id 解构为一个顶级属性：

js
const { id } = object
template
{{ id + 1 }}
现在渲染的结果将是 2。

另一个需要注意的点是，如果 ref 是文本插值的最终计算值 (即 {{ }} 标签)，那么它将被解包，因此以下内容将渲染为 1：

template
{{ object.id }}
该特性仅仅是文本插值的一个便利特性，等价于 {{ object.id.value }}。

# 计算属性​

## 基础示例​

模板中的表达式虽然方便，但也只能用于简单操作。如果在模板中写太多逻辑，会让模板变得臃肿，难以维护。比如说，我们有这样一个包含嵌套数组的对象：

js
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})
我们想根据 author 是否已有一些书籍来展示不同的信息：

template
<p>Has published books:</p>
<span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>

这里的模板看起来有些复杂。我们必须认真看好一会儿才能明白它的计算依赖于 author.books。更重要的是，如果在模板中需要不止一次这样的计算，我们可不想将这样的代码在模板里重复好多遍。

因此我们*推荐使用计算属性来描述依赖响应式状态的复杂逻辑*。这是重构后的示例：

vue
<script setup>
import { reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// 一个计算属性 ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
</script>

<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
</template>
在演练场中尝试一下

我们在这里定义了一个计算属性 publishedBooksMessage。computed() 方法期望接收一个 getter 函数，返回值为一个计算属性 ref。和其他一般的 ref 类似，你可以通过 publishedBooksMessage.value 访问计算结果。计算属性 ref 也会在模板中自动解包，因此在模板表达式中引用时无需添加 .value。

Vue 的计算属性会自动追踪响应式依赖。它会检测到 publishedBooksMessage 依赖于 author.books，所以当 author.books 改变时，任何依赖于 publishedBooksMessage 的绑定都会同时更新。

也可参考：为计算属性标注类型

## 计算属性缓存 vs 方法​

你可能注意到我们在表达式中像这样调用一个函数也会获得和计算属性相同的结果：

template
<p>{{ calculateBooksMessage() }}</p>
js
// 组件中
function calculateBooksMessage() {
  return author.books.length > 0 ? 'Yes' : 'No'
}
若我们将同样的函数定义为一个方法而不是计算属性，两种方式在结果上确实是完全相同的，然而，不同之处在于计算属性值会基于其响应式依赖被缓存。一个计算属性仅会在其响应式依赖更新时才重新计算。这意味着只要 author.books 不改变，无论多少次访问 publishedBooksMessage 都会立即返回先前的计算结果，而不用重复执行 getter 函数。

这也解释了为什么下面的计算属性永远不会更新，因为 Date.now() 并不是一个响应式依赖：

js
const now = computed(() => Date.now())
相比之下，方法调用总是会在重渲染发生时再次执行函数。

为什么需要缓存呢？想象一下我们有一个非常耗性能的计算属性 list，需要循环一个巨大的数组并做许多计算逻辑，并且可能也有其他计算属性依赖于 list。没有缓存的话，我们会重复执行非常多次 list 的 getter，然而这实际上没有必要！如果你确定不需要缓存，那么也可以使用方法调用。
