# watch

用watch替代三元表达式，避免form的v-model validate问题。

目录

一、watch的使用

1. 监听一个变量

2. 监听一个对象的属性

3. 监听一个函数的返回值

二、watch的使用场景

1. 监听表单的变化

2. 监听路由参数的变化

3. 监听Vuex中的数据变化

三、watch的效果图

四、watch的示例

以上就是Vue3的watch的介绍，watch是Vue3中非常重要的一个功能，可以帮助我们更好的监听数据变化，并执行相应的操作。

Vue3的watch是用于监听Vue实例中的数据变化并执行相应操作的功能。Vue3中对watch的使用进行了优化，并且提供了更强大的功能。下面将对Vue3的watch进行详细介绍。

一、watch的使用
在Vue3中，我们可以使用watch来监听数据的变化，从而执行相应的操作。watch有以下几种使用方式：

1. 监听一个变量
在Vue3中，我们可以使用watch来监听一个变量的变化，当这个变量发生改变时，就会执行相应的操作。具体代码如下：

watch: {
  name: {
    handler(newVal, oldVal) {
      console.log('name变为：', newVal)
    }
  }
}
这段代码中，我们监听name这个变量，当name发生变化时，就会执行handler函数。handler函数接收两个参数，分别代表变化后的值和变化前的值。

2. 监听一个对象的属性
在Vue3中，我们同样可以使用watch来监听一个对象的属性的变化。具体代码如下：

watch: {
  "person.name": {
    handler(newVal, oldVal) {
      console.log('person.name变为：', newVal)
    }
  }
}
这段代码中，我们监听person对象的name属性，当name属性发生变化时，就会执行handler函数。

3. 监听一个函数的返回值
在Vue3中，我们还可以使用watch来监听一个函数的返回值的变化。具体代码如下：

watch: {
  fullName: {
    handler(newVal, oldVal) {
      console.log('fullName变为：', newVal)
    },
    immediate: true
  }
},
computed: {
  fullName() {
    return this.firstName + ' ' + this.lastName
  }
}
这段代码中，我们监听computed中的fullName函数的返回值，当fullName的返回值发生变化时，就会执行handler函数。immediate为true表示在watch被建立后，立即执行handler函数。

二、watch的使用场景

1. 监听表单的变化
在Vue3中，我们可以使用watch来监听表单的变化。具体代码如下：

watch: {
  formData: {
    handler(newVal, oldVal) {
      console.log('formData变为：', newVal)
    },
    deep: true
  }
},
data() {
  return {
    formData: {
      name: '',
      age: 18
    }
  }
}

这段代码中，我们监听formData对象的变化，deep为true表示深度监听，也就是说，当formData内部的属性发生变化时，也会触发handler函数。

2. 监听路由参数的变化
在Vue3中，我们可以使用watch来监听路由参数的变化，从而执行相应的操作。具体代码如下：

watch: {
  $route(to, from) {
    console.log('路由变化：', to, from)
  }
}
这段代码中，我们监听$router对象的变化，当路由发生变化时，就会触发handler函数。

3. 监听Vuex中的数据变化
在Vue3中，我们可以使用watch来监听Vuex中的数据变化，从而执行相应的操作。具体代码如下：

import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['count'])
  },
  watch: {
    count(newVal, oldVal) {
      console.log('count变为：', newVal)
    }
  }
}
这段代码中，我们监听Vuex中的count数据的变化，当count发生变化时，就会触发handler函数。

三、watch的效果图
当我们对监听的数据进行修改时，就会触发watch中的handler函数，从而执行相应的操作。

![watch效果图](https://img-blog.csdnimg.cn/20211117173434849.png)

四、watch的示例
下面是一个完整的示例，演示了如何使用watch来进行表单校验。

<template>
  <div>
    <input v-model="formData.name" @input="handleInput">
    <input v-model="formData.age" @input="handleInput">
    <p v-show="errorMessage" style="color: red">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        age: ''
      },
      errorMessage: ''
    }
  },
  watch: {
    formData: {
      handler(newVal, oldVal) {
        if (newVal.name.trim() === '') {
          this.errorMessage = '姓名不能为空'
        } else if (newVal.age.trim() === '') {
          this.errorMessage = '年龄不能为空'
        } else if (!/^\d+$/.test(newVal.age)) {
          this.errorMessage = '年龄必须为数字'
        } else {
          this.errorMessage = ''
        }
      },
      deep: true
    }
  },
  methods: {
    handleInput() {
      this.$forceUpdate()
    }
  }
}
</script>

这段代码中，我们使用watch来监听formData对象的变化，formData变化时，就会触发handler函数。在handler函数中，我们判断formData中的数据是否符合要求，如果符合要求就清空errorMessage，否则就设置errorMessage的值。在template中，我们根据errorMessage来显示错误提示信息。

以上就是Vue3的watch的介绍，watch是Vue3中非常重要的一个功能，可以帮助我们更好的监听数据变化，并执行相应的操作。

————————————————

                            如需转发请联系本人，否则将维护自己的合法权益

原文链接：<https://blog.csdn.net/m0_72196169/article/details/134518119>

# 计算属性​computed

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

1）计算属性本质上是 computed watcher，而watch本质上是 user watcher（用户自己定义的watcher）
2）computed有缓存的功能，通过dirty控制
3）wacher设置deep：true，实现深度监听的功能
4）computed可以监听多个值的变化

作者：海阔_天空
链接：<https://juejin.cn/post/7146996646394462239>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

1）初始化计算属性时，遍历computed对象，给其中每一个计算属性分别生成唯一computed watcher，并将该watcher中的dirty设置为true
初始化时，计算属性并不会立即计算（vue做的优化之一），只有当获取的计算属性值才会进行对应计算
2）初始化计算属性时，将Dep.target设置成当前的computed watcher，将computed watcher添加到所依赖data值对应的dep中（依赖收集的过程），然后计算computed对应的值，后将dirty改成false

3）当所依赖data中的值发生变化时，调用set方法触发dep的notify方法，将computed watcher中的dirty设置为true
4）下次获取计算属性值时，若dirty为true, 重新计算属性的值
5）dirty是控制缓存的关键，当所依赖的data发生变化，dirty设置为true，再次被获取时，就会重新计算

```js
// 空函数
const noop = () => {};
// computed初始化的Watcher传入lazy: true，就会触发Watcher中的dirty值为true
const computedWatcherOptions = { lazy: true };
//Object.defineProperty 默认value参数
const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};
// 初始化computed
class initComputed {
  constructor(vm, computed) {
    //新建存储watcher对象，挂载在vm对象执行
    const watchers = (vm._computedWatchers = Object.create(null));
    // 遍历computed
    for (const key in computed) {
      const userDef = computed[key];
      //getter值为computed中key的监听函数或对象的get值
      let getter = typeof userDef === "function" ? userDef : userDef.get;
      // 新建computed watcher
      watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);
      if (!(key in vm)) {
        // 定义计算属性
        this.defineComputed(vm, key, userDef);
      }
    }
  }

  // 重新定义计算属性  对get和set劫持
  // 利用Object.defineProperty来对计算属性的get和set进行劫持
  defineComputed(target, key, userDef) {
    // 如果是一个函数，需要手动赋值到get上
    if (typeof userDef === "function") {
      sharedPropertyDefinition.get = this.createComputedGetter(key);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get
        ? userDef.cache !== false
          ? this.createComputedGetter(key)
          : userDef.get
        : noop;
      // 如果有设置set方法则直接使用，否则赋值空函数
      sharedPropertyDefinition.set = userDef.set ? userDef.set : noop;
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  // 计算属性的getter 获取计算属性的值时会调用
  createComputedGetter(key) {
    return function computedGetter() {
      // 获取对应的计算属性watcher
      const watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        // dirty为true,计算属性需要重新计算
        if (watcher.dirty) {
          watcher.evaluate();
        }
        // 获取依赖
        if (Dep.target) {
          watcher.depend();
        }
        //返回计算属性的值
        return watcher.value;
      }
    };
  }
}

```
