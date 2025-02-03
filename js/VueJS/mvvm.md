全称： Model-View-ViewModel ， Model 表示数据模型层。 view 表示视图层， ViewModel 是 View 和 Model 层的桥梁，数据绑定到 viewModel 层并自动渲染到页面中，视图变化通知 viewModel 层更新数据。

作者：HearLing
链接：https://juejin.cn/post/6930897845369356295
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# vue 是如何实现响应是数据的呢

vue2：Object.defineProperty 重新定义 data 中所有属性，Object.defineProperty 可以使数据的获取与设置增加一个拦截的功能，拦截属性的获取，进行依赖收集。拦截属性的更新操作，进行通知。
具体的过程：首先 Vue 使用 initData 初始化用户传入的参数，然后使用 new Observer 对数据进行观测，如果数据是一个对象类型就会调用 this.walk(value)对对象进行处理，内部使用 defineReactive 循环对象属性定义响应式变化

```html
<input id="input" />
```

```javascript
const data = {};
const input = document.getElementById("input");
Object.defineProperty(data, "text", {
  set(v) {
    input.value = v;
    this.value = v;
  },
});
input.onchange = function (e) {
  data.text = e.target.value;
};
```

# arr

pop,push,shift,unshift,splice,sort,reverse-函数劫持，重写了数组方法，更改了数组的原型，用户调用数组这些方法的时候，走的就是自己的方法通知视图去更新。vue3 使用 proxy 可直接监听对象数组对的变化

# proxy

我们对 obj 上原本不存在的 c 属性进行了一个赋值，但是在 vue2 中，是不会触发视图的响应式更新。
因为 Object.defineProperty 必须对于确定的 key 值进行响应式的定义，这样就导致了如果 data 在初始化的时候没有 c 属性那么后续对于 c 属性的赋值都不会触发 Object.defineProperty 中的 set 劫持。（在 vue2 中，只能用 Vue.set 来解决）

```js
const rawData = {};
const data = new Proxy(rawData, {
  get(target, key) {},
  set(target, key, value) {},
});
// 可以看出来Proxy在定义的时候并不用关心key值，只要你定义了get方法，那么后续对于data上任何属性的访问（哪怕不存在），都会触发get的劫持，set也是同理
```

这样 vue3 中，对于定义响应式的值，初始化时候的要求就没那么高了，只要保证它是个可以被 Proxy 接受的对象或者数组类型即可。当然 Proxy 对于数据拦截带来的便利远不止于此。

```js
import { observable, observe } from "@nx-js/observer-util";
const counter = observable({ num: 0 });
const countLogger = observe(() => console.log(counter.num)); // console 0
counter.num++; // console 1
```

Vue
手写mini版的MVVM框架
实现效果：2s后修改姓名和年龄这两个值，页面响应式更新渲染

https://juejin.cn/post/7146996646394462239


实现流程

1）定义observe函数，利用Object.defineProperty把data中的属性变成响应式的，同时给每一个属性添加一个dep对象（用来存储对应的watcher观察者）

2）定义compile 函数，模板编译，遍历 DOM，遇到 mustache（双大括号{{}})形式的文本，则替换成 data.key对应的值，同时将该dom节点添加到对应key值的dep对象中

3）当data的数据变化时，调用dep对象的update方法，更新所有观察者中的dom节点


```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>vue的MVVM简单实现</title></head>
<body>
<div id="app">
  <p>姓名: <span>{{name}}</span></p>
  <p>年龄: <span>{{age}}</span></p>
</div>
<script>
  window.onload = function () {
    // new一个vue实例
    let vue = new Vue(
       {
         el: '#app',
         data: {
             name: '加载中', age: '18'
           }
         }
      )
    // 2s后更新页面的信息
    setTimeout(() => {
      // 修改vue中$data的name和age属性
      vue.$data.name = '小明';
      vue.$data.age = 20;
    }, 2000)
  }
  class Vue {
    constructor(options) {
      this.options = options
      this.$data = options.data
      this.observe(options.data)
      this.compile(document.querySelector(options.el))
    }
    // 监听data中属性的变化
    observe(data) {
      Object.keys(data).forEach(key => {
        // 给data中的每一个属性添加一个dep对象（该对象用来存储对应的watcher观察者）
        let observer = new Dep()
        // 利用闭包 获取和设置属性的时候，操作的都是value
        let value = data[key]
        Object.defineProperty(data, key, {
          get() {
            // 观察者对象添加对应的dom节点
            Dep.target && observer.add(Dep.target)
            return value
          },
          set(newValue) {
            value = newValue
            // 属性值变化时，更新观察者中所有节点
            observer.update(newValue)
          }
        })
      })
    }
    compile(dom) {
      dom.childNodes.forEach(child => {
        // nodeType 为3时为文本节点，并且该节点的内容包含`mustache`（双大括号{{}})
        if(child.nodeType === 3 && /\{\{(.*)\}\}/.test(child.textContent)) {
          // RegExp.$1是正则表达式匹配的第一个字符串，这里对应的就是data中的key值
          let key = RegExp.$1.trim()
          // 将该节点添加到对应的观察者对象中，在下面的this.options.data[key]中触发对应的get方法
          Dep.target = child
          // 将{{key}} 替换成data中对应的值
          child.textContent = child.textContent.replace(`{{${key}}}`, this.options.data[key])
          Dep.target = null
        }
        // 递归遍历子节点
        if(child.childNodes.length) {
          this.compile(child)
        }
      })
    }
  }

  // dep对象存储所有的观察者
  class Dep {
    constructor() {
      this.watcherList = []
    }
    // 添加watcher
    add(node) {
      this.watcherList.push(node)
    }
    // 更新watcher
    update(value) {
      this.watcherList.forEach(node => {
        node.textContent= value
      })
    }
  }
</script>
</body>
</html>
```
手写 v-model 数据双向绑定

和前文mini版MVVM框架的区别
1）实现v-model指令，input值改变后，页面对应的数据也会变化，实现了数据的双向绑定
2）给input元素绑定input事件，当输入值变化会触发对应属性的dep.update方法，通知对应的观察者发生变化
3）增加了数据代理，通过this.info.person.name就可以直接修 $data对应的值，实现了this对this.$data的代理
4）数据劫持，对data增加了递归和设置新值的劫持，让data中每一层数据都是响应式的，如info.person.name
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>vue双向绑定的简单实现</title>
</head>
<body>
<div id="app">
  <div>年龄: <span>{{info.person.name}}</span></div>
  <p>{{job}}</p>
  <input v-model="job" placeholder="请输入工作" type="text">
</div>

<script>
  window.onload = function () {
    // new一个vue对象
    let vm = new Vue({
      // el为需要挂载的dom节点
      el: '#app',
      data: {
        info: {
          person: {
            name: '加载中'
          }
        },
        job: '程序猿'
      }
    })
    setTimeout(() => {
      vm.info.person.name = '小明'
    }, 2000)
  }

  class Vue {
    constructor(options) {
      this.$data = options.data
      this.$el = document.querySelector(options.el)
      observe(options.data)
      this.proxy(this.$data, this)
      this.compile(this.$el, this)
    }
    // 模板编译
    compile (dom, vm) {
      Array.from(dom.childNodes).forEach(child => {
        // 元素节点,匹配v-model，如input textArea元素等
        if (child.nodeType == 1) {
          Array.from(child.attributes).forEach(attr => {
            // 判断元素是否设置 v-model 属性
            if (attr.name.includes('v-model')) {
              Dep.target = child
              child.value = vm.$data[attr.value]
              Dep.target = null
              // 重点：给input原定绑定原生的input事件
              child.addEventListener('input', (e) => {
                // 当input输入内容发生变化时，动态设置vm.$data[attr.value]的值
                vm.$data[attr.value] = e.target.value
              })
            }
          })
        }
        if (child.nodeType === 3 && /\{\{(.*)\}\}/.test(child.textContent)) {
          let key = RegExp.$1.trim()
          let keyList = key.split('.')
          let value = vm.$data
          Dep.target = child

          // 循环遍历，找到info.person.name对应的name值
          keyList.forEach(item => {
            value = value[item]
          })
          Dep.target = null
          child.textContent = child.textContent.replace(`{{${key}}}`, value)
        }
        if (child.childNodes.length > 0) {
          // 递归模板编译
          this.compile(child, vm)
        }
      })
    }
    // this代理 this.$data
    // vm.info.person.name 相当于 vm.$data.info.person.name
    proxy ($data, vm) {
      Object.keys($data).forEach(key => {
        Object.defineProperty(vm, key, {
          set (newValue) {
            $data[key] = newValue
          },
          get () {
            return $data[key]
          }
        })
      })
    }
  }
  function observe (data) {
    if (data && typeof data == 'object') {
      return new Observe(data)
    }
  }
  // 递归进行数据劫持，使data中的每一层都是响应式的
  function Observe(data) {
    Object.keys(data).forEach(key => {
      let value = data[key]
      let dep = new Dep()
      // 递归
      observe(value)
      Object.defineProperty(data, key, {
        get () {
          Dep.target && dep.add(Dep.target)
          return value
        },
        set (newValue) {
          value = newValue
          // 如果新设置的值是一个对象，该对象也要变成响应式的
          observe(newValue)
          dep.update(newValue)
        }
      })
    })
  }

  class Dep {
    constructor() {
      this.subs = []
    }
    add (target) {
      this.subs.push(target)
    }
    update (newValue) {
      this.subs.forEach(node => {
        if (node.tagName == 'INPUT' || node.tagName == 'TEXTATEA') {
          node.value = newValue
        } else {
          node.textContent = newValue
        }
      })
    }
  }

</script>
</body>
</html>
```

使用proxy实现数据监听
vue3底层通过Proxy实现了数据监听，替代了vue2中的Object.defineProperty


```js
function observe(target) {
  return new Proxy(target, {
    get(target, key, receiver) {
      let result = Reflect.get(target, key);
      // 递归获取对象多层嵌套的情况，如pro.info.type（递归监听，保证每一层返回都是proxy对象）
      return isObject(result);
    },
    set(target, key, value, receiver) {
      if (key !== 'length') {
        // 解决对数组修改，重复更新视图的问题
        console.log('更新视图');
      }
      return Reflect.set(target, key, value, receiver);
    }
  });
}
function isObject(target) {
  if (typeof target === 'object' && target !== null) {
    return observe(target);
  } else {
    return target;
  }
}
let target = { name: '测试', info: { type: '1' } };
let pro = observe(target);
pro.info.type = 2; // 更新视图

```

# 谈谈对 MVC、MVP、MVVM 模式的理解
在开发图形界面应用程序的时候，会把管理用户界面的层次称为 View，应用程序的数据为 Model，Model 提供数据操作的接口，执行相应的业务逻辑。

MVC
MVC 除了把应用程序分为 View、Model层，还额外的加了一个 Controller层，它的职责是进行 Model 和 View 之间的协作（路由、输入预处理等）的应由逻辑（application logic）；Model 进行处理业务逻辑。

用户对 View 操作以后，View 捕获到这个操作，会把处理的权利交移给Controller（Pass calls）；Controller 会对来自 View 数据进行预处理、决定调用哪个 Model 的接口；然后由 Model 执行相关的业务逻辑；当Model 变更了以后，会通过观察者模式（Observer Pattern）通知 View；View 通过观察者模式收到 Model 变更的消息以后，会向 Model 请求最新的数据，然后重新更新界面。

MVP
和 MVC 模式一样，用户对 View 的操作都会从 View 交易给 Presenter。Presenter 会执行相应的应用程序逻辑，并且会对 Model 进行相应的操作；而这时候 Model 执行业务逻辑以后，也是通过观察者模式把自己变更的消息传递出去，但是是传给 Presenter 而不是 View。Presenter 获取到 Model变更的消息以后，通过 View 提供的接口更新界面。

MVVM
MVVM 可以看做是一种特殊的 MVP（Passive View）模式，或者说是对 MVP 模式的一种改良。

MVVM 代表的是 Model-View-ViewModel，可以简单把 ViewModel 理解为页面上所显示内容的数据抽象，和 Domain Model 不一样，ViewModel 更适合用来描述 View。 MVVM 的依赖关系和 MVP 依赖关系一致，只不过是把 P 换成了 VM。

MVVM的调用关系：

MVVM 的调用关系和 MVP 一样。但是，在 ViewModel 当中会有一个叫 Binder，或者是 Data-binding engine 的东西。以前全部由 Presenter 负责的 View 和 Model 之间数据同步操作交由给 Binder 处理。你只需要在View 的模板语法当中，指令式声明 View 上的显示的内容是和 Model 的哪一块数据绑定的。当 ViewModel 对进行 Model 更新的时候，Binder 会自动把数据更新到 View 上，当用户对 View 进行操作（例如表单输入），Binder 也会自动把数据更新到 Model 上。这种方式称为：Two-way data-binding，双向数据绑定。可以简单而不恰当地理解为一个模板引擎，但是会根据数据变更实时渲染。

# v-model

Modal： 不需要写on-cancel，只需要写v-model
