# 正常模式
```html
<script src='index.js' />
```
这种情况下js会阻塞Dom渲染，浏览器必须等待index.js加载和执行完成后才能去做其他事情
# async模式
```html
<script async src='index.js'></script>
```
加载是异步的，*js不会阻塞DOM的渲染，无顺序*，加载结束时，js会立即执行
## 使用场景：

若*该js资源与DOM元素没有依赖关系，也不会产生其他资源所需要的数据*时，可以使用async模式，比如*埋点统计*
# defer模式
```html
<script defer src='index.js' />
```
加载也是异步的，defer资源会在*DOMContentLoaded*执行之前加载，并且defer是有*顺序的加载。如果有多个设置了defer的script标签存在，则会按照引入的前后顺序执行，即便后面的script资源先返回*。所以*defer可以控制js文件的执行顺序*，比如element-ui.js和vue.js。因为 element-ui.js 依赖于 vue，所以必须先引入 vue.js，再引入 element-ui.js
```html
<script defer src="vue.js"></script>
<script defer src="element-ui.js"></script>
```
defer 使用场景：一般情况下都可以使用 defer，特别是需要控制资源加载顺序时


# module模式
```html
<script type='module'>import {a} from './a.js'</script>
```
主流的现代浏览器中，script标签的属性可以加上type='module'，浏览器会对其内部的*import引用发起http请求，获取模块内容*。这时script的行为会像defer，在后台下载，等待DOM解析

*Vite*就是利用现代浏览器支持原生的es module模块，开发时跳过打包的过程，提升编译效率。

# preload
```html
<link rel='preload' as='script' href='index.js'>
```
link标签的preload属性：用于提前加载一些需要的依赖，这些资源会优先加载。vue2项目打包生成的index.html，会自动给首页需要的资源，全部添加preload，实现关键资源的提前加载。
特点：
1. 加载的资源是在浏览器渲染机制之前处理的，不会阻塞onload事件
2. 加载的js其加载和执行的过程相分离，preload会预加载相应的脚本代码，待到需要时自行调用
# prefetch
```html
<link rel='prefetch' as='script' href='index.js'>
```
利用浏览器空闲时间，加载页面将来可能用到的资源的一种机制。通常用于加载其他页面（非首页）需要的资源，以便加快后续页面的打开速度。
特点：1. 加载的资源可以获取当前页面所需要的资源，并且将其放入缓存至少5分钟，无论资源是否可以缓存
2. 当页面跳转时，未完成的prefetch请求不会被中断

# 总结
async、defer是script标签的专属属性，对于网页中的其他资源，可以通过link的preload、prefetch属性来预加载。如今现代框架已经将preload、prefetch添加到打包流程中了，通过灵活的配置，去使用这些预加载功能，我们也可以审时度势的向script标签添加async、defer属性去处理资源，这样可以显著提升性能。
