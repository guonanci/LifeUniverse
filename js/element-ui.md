# 设计原则
https://element-plus.org/zh-CN/guide/design.html#%E4%B8%80%E8%87%B4-consistency
- 一致consistency
与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构保持一致，比如设计样式、图表和文本、元素的位置等等
- 反馈feedback
控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；页面反馈：操作后，通过页面元素的变化清晰的展现当前状态
- 效率Efficiency
简化流程：设计简洁直观的操作流程
清晰明确：语言表达清晰且表意明确，让用户快速理解进而做出决策
帮助用户识别：界面简单直白，让用户快速识别而非记忆，减少用户负担
- 可控controllability
用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策
结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等等

# 导航
访问页面时，在哪里，去哪里，怎样去的问题。【侧栏导航】、【顶部导航】2种类型。选择合适的导航，在产品的使用过程中非常流畅，若是不合适就会引起用户操作不适。
## 侧栏
可将导航栏固定在左侧，提高导航可见性，方便页面切换；顶部可放置常用工具，搜索条、帮助按钮、通知按钮等等，适用于中后台的管理型工具型网站
- 一级类目
适用于结构简单的网站，只有一级页面时，不需要使用面包屑。
- 二级类目
侧栏中做多可显示两级导航，建议搭配面包屑，方便用户定位自己的位置和快速返回。
- 三级类目
适用于较复杂的工具型后台，左侧栏为一级导航，中间栏可显示其对应的二级导航，也可放置其他的工具型选项。
## 顶部导航
顺应了从上至下的正常浏览顺序，方便浏览信息；顶部宽度限制了导航的数量和文本长度。适用于导航较少，页面篇幅较长的网站。
支持*ES2018*和*ResizeObserver的浏览器上运行，如果确实需要支持旧版本的浏览器，请自行添加Babel和相应的polyfill。由于vue3不再支持IE11，Element Plus不再支持IE浏览器。包管理器npm、yarn或pnpm，打包工具vite或webpack。网络环境不好的话，建议使用。相关镜像服务cnpm或中国npm镜像。
# 浏览器直接引入
不同的cdn提供商有不同的引入方式，直接通过浏览器的HTML标签导入Element plus，就可以使用全局变量ElementPlus了，unpkg和jsDelivr。
```html
<head>
  <!-- Import style -->
  <link rel='stylesheet' href='//unpkg.com/element-plus/dist/index.css' />
  <!-- cdn.jsdelivr.net/npm/element-plus/dist/index.css -->
  <!-- Import Vue 3 -->
  <script src='//unpkg.com/vue@3'>
    // cdn.jsdelivr.net/npm/vue@3
  </script>
  <script src='//unpkg.com/element-plus'>//cdn.../npm/element-plus
  // 我们建议在链接地址上锁定板本，以免将来ElementPlus升级时受到非兼容性影响。锁定版本的方法请查看unpkg.com。如果是通过包管理器安装，并希望配合打包工具使用，请阅读下一节：快速上手
  </script>
```
- 完整引入
如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便
```js
//main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-pl'
import 'element-/dist/index.css'
import App from './App.vue'
const app=createApp(App)
app.use(ElementPlus)
app.mount('#app')
```
- Volar支持
tsconfig.json，compilerOptions.type指定全局组件类型
```js
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["element-plus/global"]
  }
}
```
# 按需导入
额外插件unplugin-vue-components、unplugin-auto-import，vite或者webpack配置文件
```js
//vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-component/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  //...
  plugins:[
    //...
    AutoImport({
      resolvers:[ElementPlusResolver()]
    }),
    Components({
      resolvers:[ElementPlusResolver()]
    })
  ]
})
//webpack.config.js
const AutoImport=require('.../webpack')
const Components=require('.../webpack')
const { ElementPR,  } = require('.../resolvers')
module.exports={
  //...
  plugins:[...]
}
//Rollup,Vue CLI
```
- Nuxt
关于Nuxt用户， 安装@element-plus/nuxt
```js
//next.config.js
export default defineNuxtConfig({
  modules:['@ele...']
})
```
# 手动导入
EP提供了开箱即用的基于ES Module的Tree Shaking功能，但是需要安装unplugin-elment-plus来导入样式。
```html
<!-- app.vue -->
<template>
  <el-button>I'm ElButton</el-button>
</template>
<script>
  import { ElButton } from 'ele-p'
  export default {
    components:{ElButton}
  }

</script>

```
```js
//vite.config.ts
import { defineConfig } from 'vite'
import ElementPlus from 'unplugin-element-plus/vite'
export default defineConfig({
  //...
  plugins:[ElementPlus()]
})
```
# 快捷搭建项目模板
vite模板、nuxt模板、laravel模板。
# 全局配置
size表单组件的默认尺寸，zIndex设置弹出组件的层级。
按需引入：
```html
<template>
  <el-config-provider :size='size' :z-index='zIndex'>
    <app />
  </el-config-provider>
</template>
<script>
  import { defineComponent } from 'vue'
  import { ElConfigProvider } from 'el-p'
  export default defineComponent({
    components:{
      ElConfigProvider,
    },
    setup(){
      return{
        zIndex:3000,
        size:'small',
      }
    }
  })
</script>
```
# 进阶
##　国际化
组件默认使用英语，全局配置
```tsx
import ElementP from 'ep'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

app.use(ElementPlus,{
  locale:zhCn,
})

```
```html
<template>
  <el-config-provider :locale='locale'>
    <app />
  </el-config-provider>
</template>
<script>
  import { defineComponent } from 'vue'
  import { ElConfigProvider } from 'ep'
  import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
  export default defineComponent({
    components:{
      ElConfigProvider,
    },
    setup(){
      return{
        locale:zhCn
      }
    }
  })
</script>
```
## 日期和时间本地化
Day.js来管理组件的。。。DatePicker，设置一个适当的区域，以便国际化充分发挥作用。必须分开导入Day.js的区域设置。`import 'dayjs/locale/zh-cn'`
- cdn
```html
<script src='//unpkg.com/element-plus/dist/locale/zh-cn'>

</script>
<script>
  app.use(ElementPlus,{
    locale:ElmentPlusLocaleZhCn,
  })
</script>
```
# 从Element UI升级
从Element UI2.x升级到EP。vue3 内部API，compatConfig，尝试全局或将你项目中每个组件的。gogo code迁移工具，Vue Element Admin上测试过此工具。可移植代码。

# 自定义主题
默认提供一套主题，*CSS命名采用BEM风格，方便使用者覆盖样式*。大规模替换样式？
- 更换主题色
全部导入：element-plus-vite-starter、按需导入：unplugin-element-plus/examples/vite
- 通过scss变量
theme-chalk 使用scss编写而成。你可以在packages/theme-chalk/src/common/var.scss 中查找scss变量。我们使用sass模块sass：map和@use来重构所有scss变量。通过对所有scss变量使用@use，解决了由@import造成的重复输出问题。css-tricks。使用$color作为map来保存不同类型的颜色。$notification是所有notification组件的变量的映射。为每个组件自定义的变量编写文档。
```scss
$colors:() !default;
$colors: map.deep-merge(
  (
    'white':#ffffff,
    'black':#000000,
  )
)
```
