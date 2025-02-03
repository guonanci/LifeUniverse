# vue2

this.$refs介绍

this.$refs是一个对象，持有当前组件中注册过ref特性的所有DOM元素和子组件实例。

注意：$refs只有在组件渲染完成后才填充，在初始渲染的时候，不能访问它们，并且它是非响应式的，因此不能用它在模板中做数据绑定。

当ref和v-for一起使用的时候，你得到的ref将会是一个包含了对应的数据源的这些子组件的数组。

————————————————

                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。

原文链接：<https://blog.csdn.net/qq_26780317/article/details/117930115>

兄弟组件间通信方式：
<https://blog.csdn.net/NineWaited/article/details/126334211>

# ref&reactive

FormState

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

<script_setup>​

*在setup()函数中手动暴露大量的状态和方法很繁琐*。幸运的是，我们可以通过使用单文件组件 (SFC) 来避免这种情况。我们可以使用 <script setup> 大幅简化代码：

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

*<script_setup> 中的顶层的导入、声明的变量和函数，可在同一个组件的模板中直接使用*。你可以理解为模*板是在同一个作用域内，声明的一个 JavaScript 函数——它自然可以访问与它一起声明的所有内容*。

TIP

在指南的后续章节中，我们基本上都会在组合式 API 示例中使用单文件组件 + <script_setup> 的语法，因为大多数 Vue 开发者都会这样使用。

如果你没有使用单文件组件，你仍然可以在 setup() 选项中使用组合式 API。

### 为什么要使用 ref？​

你可能会好奇：为何我们需要使用带有 .value 的 ref，而非普通变量？为了解释这一点，我们需要简单地讨论一下 Vue 的响应式系统如何工作。

当你在模板中使用了一个 ref，然后改变了这个 ref 的值时，Vue 会自动检测到这个变化，并且相应地更新 DOM。这是通过一个*基于依赖追踪的响应式系统*实现的。*当一个组件首次渲染时，Vue 会追踪在渲染过程中使用的每个 ref。然后，当一个 ref 被修改时，它会触发追踪它的组件的一次重新渲染*。

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

也可以通过 shallow ref 来放弃深层响应性。对于浅层 ref，只有 .value 的访问会被追踪。浅层 ref 可用于避免对大型数据的响应性开销来优化性能、或者有外部库管理其内部状态的情况。

阅读更多：

- 减少大型不可变数据的响应性开销
- 与外部状态系统集成

### DOM 更新时机​

当你修改了响应式状态时，DOM 会被自动更新。但是需要注意的是，DOM 更新不是同步的。Vue 会在“next tick”更新周期中缓冲所有状态的修改，以确保不管你进行了多少次状态修改，每个组件都只会被更新一次。

*要等待 DOM 更新完成后再执行额外代码，可以使用 nextTick() 全局 API*：

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

### ref()&&reactive()

<https://juejin.cn/post/7211055301205934138>

- 可接受的原始数据类型不同

ref() 和reactive()都是接收一个普通的原始数据，再将其转换为响应式对象，例如上面代码中的user和age。却别在于：ref可以同时处理基本数据类型和对象，而reactive只能处理处理对象,不支持基本数据类型。

这是因为二者响应式数据实现的方式不同：

ref是通过一个中间对象RefImpl持有数据，并通过重写它的set和get方法实现数据劫持的，本质上依旧是通过Object.defineProperty 对RefImpl的value属性进行劫持。
reactive则是通过Proxy进行劫持的。Proxy无法对基本数据类型进行操作，进而导致reactive在面对基本数据类型时的束手无策。

由于ref返回的是一个RefImpl实例，而reactive 返回的是一个代理，其类型本身还是传入的目标对象的类型。因此，前者可以自己持有依赖，后者则借助全局对象targetMap 管理依赖。

reactive 借助了一个全局的弱引用Map存储依赖，结论：ref(value: T)返回的Ref 类型，而reactive(object: T)返回的T 类型的代理，这也导致前者可以靠自身属性管理依赖，而后者借助全局变量targetMap 管理依赖。

- 访问数据的方式不同
返回值的类型不同，就会导致数据的访问方式不同。通过上文可知：

*ref()返回的是中间对象RefImpl的一个实例对象，该对象通过_value私有变量持有原始数据，并重写了value的get方法*。因此，当想要访问原始对象时，需要通过xxx.value的方式触发get函数获取数据。同样的，在修改数据时，也要通过xxx.value = yyy的方式触发set函数。

*reactive() 返回的是原始对象的Proxy代理，代理对象具有和原始对象相同的属性，因此我们可以直接通过.xxx的方式访问数据*

作者：白瑞德
链接：<https://juejin.cn/post/7211055301205934138>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

- 返回值类型不同

运行如下代码：
scss 代码解读复制代码const count1 = ref(0)
const count2 = reactive({count:0})
console.log(count1)
console.log(count2)

输出结果为：
yaml 代码解读复制代码RefImpl {__v_isShallow: false, dep: undefined,__v_isRef: true, _rawValue: 0,_value: 0}
Proxy(Object) {count: 0}

*ref()返回的是一个持有原始数据的RefImpl实例。而reactive()返回的类型则是原始数据的代理Proxy实例*

总结：ref需要通过value属性间接的访问数据（在templates中vue做了自动展开，可以省略.value），而reactive可以直接访问。

- 原始对象的可变性不同
ref通过一个RefImpl实例持有原始数据，进而使用.value属性访问和更新。而对于一个实例而言，其属性值是可以修改的。因此可以通过.value的方式为ref重新分配数据，无需担心RefImpl实例被改变进而破坏响应式：

而 reactive返回的是原始对象的代理，因此不能对其重新分配对象，只能通过属性访问修改属性值，否则会破坏掉响应式：

let objectReactive = reactive({ count: 0})
effect(() => {
  console.log(`数据变化了：${objectReactive.count}`)
})
//可以正常修改值
objectReactive.count = 1
objectReactive.count = 2
//修改objectReactive之后effect不再会接收到数据变化的通知
objectReactive = {count:3}
objectReactive.count = 4
console.log("结束了")
//输出如下：
//数据变化了：0
//数据变化了：1
//数据变化了：2
//结束了

原因很简单：effect函数监听的是原始值{ count: 0}的代理objectReactive，此时当通过该代理修改数据时，可以触发回调。但是当程序运行到objectReactive = {count:3}之后，objectReactive 的指向不再是{ count: 0}的代理了，而是指向了新的对象{count:3}。这时objectReactive.count = 4修改的不再是effect 所监听的代理对象，而是新的普通的不具备响应式能力的对象{count:3}。effect就无法监听到数据的变化了，objectReactive响应式能力也因此而被破坏了。
如果你直接修改ref的指向，ref的响应式也会失效：

作者：白瑞德
链接：<https://juejin.cn/post/7211055301205934138>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

*用ref保存基本类型的state，reactive保存引用类型，如object等等，切记不要随意更改一个state的类型，这么做说明底层的数据流设计或者业务和需求的设计出现了问题*

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
