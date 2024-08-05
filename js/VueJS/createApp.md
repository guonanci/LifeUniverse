声明式、组件化的编程模型，高效的开发用户界面
```js
import { createApp } from 'vue'

createApp({
  data(){
    return {
      count:0
    }
  }
}).mount('#app')
```

```html

<div id='app'>
  <button @lick='count++'>
    Count is: {{count}}
  </button>
</div>
```
声明式渲染：基于标准HTML拓展了一套模板语法，声明式的描述最终输出的HTML和JavaScript状态之间的关系。
响应性：vue会自动追踪JavaScript状态并在其变化时响应式的更新DOM

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Language_Overview
