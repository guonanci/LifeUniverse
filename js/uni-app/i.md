uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。

DCloud公司拥有900万开发者、数百万应用、12亿手机端月活用户、数千款uni-app插件、70+微信/qq群。阿里小程序工具官方内置uni-app（详见），腾讯课堂官方为uni-app录制培训课程（详见），开发者可以放心选择。

uni-app在手，做啥都不愁。即使不跨端，uni-app也是更好的小程序开发框架（详见）、更好的App跨平台框架、更方便的H5开发框架。不管领导安排什么样的项目，你都可以快速交付，不需要转换开发思维、不需要更改开发习惯。

快速体验

注：

- 某些平台不能提交简单demo，故补充了一些其他功能；hello uni-app示例代码可从 github 获取
- 快应用仅支持 vivo 、oppo、华为
- 360小程序仅 windows平台支持，需要在360浏览器中打开
- uni-app 已支持纯血鸿蒙开发，详见 鸿蒙开发专题。

看视频，10分钟了解uni-app
我们精心准备了一个简单的十分钟介绍视频，方便你快速了解uni-app的主要特征：

# 为什么要选择uni-app？

uni-app在*开发者数量、案例、跨端抹平度、扩展灵活性、性能体验、周边生态、学习成本、开发成本*等8大关键指标上拥有更强的优势。

## 开发者/案例数量更多

数百万应用、uni统计月活12亿、70+微信/qq群、更高的百度指数

跨端完善度更高，真正落地的提高生产力

## 平台能力不受限

在跨端的同时，通过条件编译+平台特有API调用，可以优雅的为某平台写个性化代码，调用专有能力而不影响其他平台。

支持原生代码混写和原生sdk集成。

## 性能体验优秀

加载新页面速度更快、自动diff更新数据。

App端支持原生渲染，可支撑更流畅的用户体验。

小程序端的性能优于市场其他框架。评测

## 周边生态丰富

插件市场数千款插件。

支持NPM、支持小程序组件和SDK。

微信生态的各种sdk可直接用于跨平台App。

## 学习成本低

基于通用的前端技术栈，采用vue语法+微信小程序api，无额外学习成本。

## 开发成本低

不止开发成本，招聘、管理、测试各方面成本都大幅下降。

HBuilderX是高效开发神器，熟练掌握后研发效率至少翻倍（即便只开发一个平台）。

# 功能框架图

从下面uni-app功能框架图可看出，uni-app在跨平台的过程中，不牺牲平台特色，可优雅的调用平台专有能力，真正做到海纳百川、各取所长。

# 一套代码，运行到多个平台

uni-app实现了一套代码，同时运行到多个平台；如下图所示，一套代码，同时运行到iOS模拟器、Android模拟器、web、微信开发者工具、支付宝小程序Studio、百度开发者工具、抖音开发者工具、QQ开发者工具（底部每个终端选项卡，代表1个终端模拟器）：

实际运行效果如下（点击图片可放大）：

# uniCloud的学习资料

掌握uniCloud，进阶全栈，详见：<https://uniapp.dcloud.io/uniCloud/learning>

# 关于各端的管理规则需要耐心学习

uni-app并不难学，但我们注意到很多新人在适应各个平台的规则限制时比较急躁。

每个端，有每个端的管理规则，这不是uni-app在技术层面上可以抹平的：

比如H5端的浏览器有跨域限制；
比如微信小程序会强制要求https链接，并且所有要联网的服务器域名都要配到微信的白名单中；
比如App端，iOS对隐私控制和虚拟支付控制非常严格；
比如App端，Android、国产rom各种兼容性差异，尤其是因为谷歌服务被墙，导致的push、定位等开发混乱的坑；

遇事耐心，不急不躁，虽然这不是成功的唯一要素，但它是你技术路上长远走下去的基础。

# uni-app的底层框架实现原理及优化策略（高级）

通过评测对比，我们知道uni-app的性能比其他小程序开发框架好，但底层原理是啥？ 这篇视频就是讲解uni-app框架底层的实现思路和优化策略：《uni-app框架如何实现高性能》

## 《uni-app框架如何实现高性能》

<https://v.qq.com/x/page/r0886mn8v6l.html>

wepy

减少调用setData频次（数据量）：

- 改写Vue的patch实现，删掉vnode，仅Diff Data数据
- 借鉴westore JSON Diff库，实现高效、精确的差量数据

自定义组件实现局部数据刷新

注意onPageScroll使用
避免频繁通讯，部分场景考虑InterSectionObserver替代

避免后台页面执行JS逻辑
比如定时器等

uni-app特征：性能更好；vue语法支持度更高：支持filter、v-slot、原生事件绑定等；

# uni-app选型评估23问

如果你关心竞品对比，这里有几份详尽对比：

多端开发框架对比横评，参考：<https://juejin.im/post/5e8e8d5a6fb9a03c6d3d9f42>
只做App，flutter、react native等App跨平台框架对比，参考：<https://ask.dcloud.net.cn/article/36083>
只做小程序，原生wxml开发、wepy、mpvue、taro的对比，<https://ask.dcloud.net.cn/article/35867>
uni-app和微信原生开发的详细比较评测，参考：<https://ask.dcloud.net.cn/article/36484>
uni-app 有哪些已上线的成功案例？

uni-app是当今主流的开发框架，DCloud有900万开发者，uni统计手机端月活10亿，华为、阿里、腾讯、抖音、美团、京东、快手、vivo都在用，案例参考uni-app 应用案例

# uni-app收费吗？

uni-app 是免费并且属于Apache2.0开源协议的产品。DCloud官方承诺无论HBuilderX、uni-app，面向全球程序员永久免费。大家可以放心使用。

DCloud的盈利方式在帮助开发者进行流量变现（uni-ad）和提供有价值的云服务（uniCloud）上，而不在开发工具收费上。

# 跨端会造成功能受限制吗？

uni-app在跨平台的过程中，不牺牲平台特色，不限制平台的能力使用。

应用开发中，90%的常规开发，比如界面组件、联网等api，uni-app封装为可跨多端的API。

而各个端的特色功能，uni-app引入条件编译。可以优雅的在一个项目里调用不同平台的特色能力。比如push，微信小程序里不支持，但可以在App里使用，还有很多原生sdk，在App时难免涉及，这些都可以正常的在uni-app框架下使用。

下图是uni-app产品功能框架图，uni-app在保持uni规范跨平台的前提下，还可实现每个平台特有的平台能力(如微信小程序平台，可继续调用微信卡劵等微信特有业务API)。

# uni内置组件和api

uni-app跨平台封装了常用组件和api，可覆盖大部分业务需求

# uni扩展组件和mpvue兼容组件

包括uni ui等各种扩展组件、sdk、模板项目，都在插件市场（ext.dcloud.net.cn）

# 微信小程序自定义组件和三方sdk

# uniapp的坑

<https://blog.csdn.net/weixin_42095178/article/details/134915592>

在uni-app开发app时，可能会遇到以下一些常见的坑：

- 渲染问题：在某些情况下，uni-app可能会出现渲染问题，例如在页面滚动时可能会出现卡顿或闪烁的情况。这可能与uni-app的运行机制有关，因为uni-app是使用Web技术来开发原生应用的，所以它在渲染时需要将Web页面转换为原生页面，这个过程中可能会出现一些问题。

- 性能问题：由于uni-app需要同时支持多个平台，因此它在某些情况下可能会出现性能问题。例如，在处理大量数据或进行复杂计算时，uni-app可能会出现卡顿或延迟的情况。

- 兼容性问题：由于uni-app需要适配不同的设备和应用商店，因此在某些情况下可能会出现兼容性问题。例如，在某些设备或应用商店中，uni-app可能会出现闪退或崩溃的情况。

- 更新问题：在开发过程中，如果需要对uni-app进行更新，可能会出现一些问题。例如，在更新后，之前的配置或代码可能会失效，导致应用无法正常运行。此外，如果更新需要重新提交审核，那么审核的时间可能会比较长，这也会对开发进度造成一定影响。

为了避免这些问题，建议在开发过程中注意以下几点：

- 优化渲染性能：*尽量减少页面复杂度，避免使用过多的嵌套和动态样式，同时可以使用异步加载和分页技术来减轻渲染负担*。

- 优化性能：*尽量避免大量计算和操作，可使用缓存和异步处理来提高性能*。

- 测试兼容性：*在发布前需要进行充分测试，确保uni-app在各种设备和应用商店中能正常运行*。

- 妥善处理更新：*在更新时需仔细检查更新内容，并备份原有的配置和代码，以防止更新出现问题*。x

下面是具体开发中遇到的问题

⽬前为安卓版本

⾸先第三⽅授权登录（如微信登录）中的签名为app证书的md5，⽅法按照Dcloud官⽅⾛就完事，Java可以选择下载的，更快，⽤Oracle的贼⿇烦还要注册账户，然后就到了坑，再输⼊密码时会发现不显示输⼊内容，⼀度怀疑⼈⽣，后来发现只是是隐藏了⽽已，为了安全…*

所有页⾯样式失效还是样式与⼩程序不符，先想想这个页⾯有没有input，video，textarea这类使⽤了原⽣组件的组件，解决办法官⽅有，但看不懂，笨办法是使⽤v-if来隐藏，然后v-else写个假的放上⾯，⽤的时候显⽰真的，其他时候显⽰假的*

还有显⽰隐藏样式出问题，想想有没有⽤v-show，换成v-if，还有什么属性不能为null的报错，对象最好初始化写成空{},⽽不是null

*云端打包时，videoplayer项如果使⽤到video必须打钩，其他能⼒类似，还有uni-app Error: Cannot find module ‘node-ipc’ 把uni-app编译插件卸载重装，还有编译sdk与打包sdk版本不⼀样，但实际上hbuilderx已经是最新版也可以这样操作*

新浪开发的签名为证书md5去掉:并且字母全部⼩写，必须提供下载地址，下⾯是驳回理由
不能只⽤弹出⽅式提供下载，安卓客户端下载必须要有对应的下载页⾯和下载按钮。应⽤地址处请填写客户端专⽤下载页⾯或在软件商店页⾯地址（⽹盘，论坛页⾯⽆效）。

现在的各⼤市场上架app需要软件著作权证书，最好提前备好，应⽤宝上架需要隐私政策截图，所以现在软件的⽤户协议和隐私政策⼏乎必备。

*分享这块⽬前完成了qq、微信、朋友圈分享，切记分享图⽚（视频）地址正确，不为空，不然会返回出神奇的错误信息（fail: {“errMsg”:“share:fail <http://ask.dcloud.net.cn/article/287”}），新发现的问题：分享时图⽚过⼤会分享失败，新浪分享需要回调地址，⿇烦，抖⾳对图⽚视频分辨率有限制，坑货>

⽀付功能⼏乎全是后端的活，前端⼀个uni.requestPayment就⾏，官⽅有php的demo。
⽀付宝⽀付时出现路ALIN10146错误，原因是应⽤未上架（指的是阿⾥开放平台那申请的应⽤），阿⾥的查错⽂档挺详细了。

登录部分，微信登录uni.login可以直接得到后端请求所需token，直接拿来⽤就⾏，不必code换token这么复杂，dcloud⽜逼，其他的第三⽅登录没有做。

对于有些可能是app需要⼩程序不需要的页⾯（或者相反），采⽤官⽅⽂档的条件编译是极佳的选择。

整体⽬录条件编译

如果想把各平台的页⾯⽂件更彻底的分开，也可以在uni-app项⽬根⽬录创建platforms⽬录，然后在下⾯进⼀步创建app-plus、mp-weixin等⼦⽬录，存放不同平台的⽂件。

对于第三⽅功能，最好做下判断，如果没有此应⽤跳转到下载地址

```js

// 判断⽤户是否安装抖⾳
export function checkDouyin(instal){
if(plus.runtime.isApplicationExist({
pname:'com.ss.android.ugc.aweme',
action:'wb1462309810://'
})){
if(instal){
instal()
}
console.log("抖⾳应⽤已安装");
}else{
// uninstal()
plus.runtime.openURL('<https://www.douyin.com/>');
console.log("抖⾳应⽤未安装");
}
}
// 判断⽤户是否安装⽀付宝
export function checkAlipay(instal){
if(plus.runtime.isApplicationExist({
pname:'com.eg.android.AlipayGphone',
action:'alipay://'
})){
if(instal){
instal()
}
console.log("⽀付宝应⽤已安装");
}else{
// uninstal()
console.log("⽀付宝应⽤未安装");
plus.runtime.openURL('<https://d.alipay.com/?nojump=true>');
}
}
// 判断⽤户是否安装QQ
export function checkQQ(instal){
if(plus.runtime.isApplicationExist({
pname:'com.tencent.mobileqq',
action:'mqq://'
})){
if(instal){
instal()
}
console.log("QQ应⽤已安装");
}else{
// uninstal()
console.log("QQ应⽤未安装");
plus.runtime.openURL('<https://im.qq.com/mobileqq/touch/android/>'); }
}
// 判断⽤户是否安装新浪微博
export function checkSinaweibo(instal){
if(plus.runtime.isApplicationExist({
pname:'com.sina.weibo',
action:'sinaweibo://'
})){
if(instal){
instal()
}
console.log("新浪微博应⽤已安装");
}else{
// uninstal()
plus.runtime.openURL('<https://c.weibo.cn/>');
console.log("新浪微博应⽤未安装");
}
}
// 判断⽤户是否安装微信，传⼊判断函数
export function checkWeixin(instal){
if(plus.runtime.isApplicationExist({
pname:'com.tencent.mm',
action:'weixin://'
})){
if(instal){
if(instal){
instal()
}
console.log("微信应⽤已安装");
}else{
// uninstal()
//
plus.runtime.openURL('<https://weixin.qq.com/d> ');
console.log("微信应⽤未安装");
}
}
```

如果给uni.showToast不加title的话，会显⽰成⼀个⼩⿊点
uni.getSystemInfoSync()最好在onReady中获取，不然某些⼿机会获取出问题

然后功能差不多了，等软著上架…修bug…

关于webview⽅⾯，app的webview布局采⽤flex布局，千万不要⽤浮动

————————————————

                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。

原文链接：<https://blog.csdn.net/weixin_42095178/article/details/134915592>

# uniapp有啥坑？

在使用 **uni-app** 开发时，虽然它提供了一个跨平台的开发框架，但也存在一些常见的坑和需要注意的地方。以下是一些可能会遇到的问题和解决方法：

### 1. **平台差异**

   uni-app 支持多个平台（如：H5、小程序、App 等），但不同平台之间有些细微差异，尤其是在界面表现和功能支持上。

   **常见坑：**

- **UI渲染差异**：不同平台的 UI 渲染效果可能不同，导致在一些平台上界面显示不正常。
  - **解决方案**：需要为不同平台使用条件编译或平台特定的样式调整。

     ```javascript
     <style scoped>
         /* 仅在小程序平台有效 */
         .page {
             background-color: #fff;
         }
         /* 仅在H5平台有效 */
         .page {
             background-color: #f8f8f8;
         }
     </style>
     ```

- **平台功能差异**：不同平台的 API 支持可能不同，部分小程序 API 在 H5 或 App 中无法使用，或者存在不同的实现方式。
  - **解决方案**：使用 `uni.getSystemInfoSync()` 检查平台特性，或者使用条件编译来为不同平台编写特定代码。

### 2. **性能问题**

   uni-app 的跨平台特性有时会引入性能开销，尤其是在复杂页面或动画的实现上。

   **常见坑：**

- **渲染性能**：复杂的页面布局或者大量的数据渲染可能会导致性能问题，尤其是在低端设备上。
  - **解决方案**：避免过度使用嵌套组件，减少不必要的 DOM 操作，使用虚拟列表等性能优化技术。

- **动画卡顿**：由于 uni-app 在 H5 端运行时使用的是 WebView，可能会受到浏览器的性能限制，导致动画卡顿。
  - **解决方案**：尽量使用 `CSS` 动画，而不是 JavaScript 动画，因为 CSS 动画可以交给浏览器的硬件加速渲染。

### 3. **资源管理**

   在 uni-app 中，资源的管理（如图片、字体、视频等）需要特别注意，尤其是在不同平台上可能会遇到路径或加载问题。

   **常见坑：**

- **路径问题**：uni-app 中的静态资源路径需要注意，在不同平台之间路径的写法可能不同。
  - **解决方案**：使用 `@` 和 `~` 进行路径引用，这些是统一的路径标识符，能够确保在不同平台上正确访问资源。

     ```javascript
     <image src="@/static/img/logo.png" />
     ```

- **图片缓存**：在一些平台上，图片缓存可能导致旧图像被反复加载，或者更新不及时。
  - **解决方案**：通过给图片 URL 添加时间戳或版本号来防止缓存问题。

     ```javascript
     <image :src="imageUrl + '?v=' + version" />
     ```

### 4. **组件和API差异**

   uni-app 提供了大量的跨平台组件和 API，但并非每个平台都支持所有组件或 API。

   **常见坑：**

- **小程序 API 的兼容问题**：部分小程序的 API 在 H5 或 App 中不支持，或者功能表现不同。
  - **解决方案**：检查平台文档，使用 `#ifdef` 或 `#ifndef` 条件编译来确保代码在特定平台上运行。

     ```javascript
     // 仅在微信小程序平台生效
     #ifdef MP-WEIXIN
     uni.getLocation({
         success(res) {
             console.log(res);
         }
     });
     #endif
     ```

- **第三方插件兼容性**：一些第三方插件可能只在特定平台上工作，或在不同平台上表现不同。
  - **解决方案**：使用官方推荐的插件，或者通过条件编译来针对不同平台做调整。

### 5. **开发工具问题**

   uni-app 提供了官方的 HBuilderX 编辑器来支持开发，但有时 HBuilderX 本身也存在一些问题，特别是与某些插件或第三方工具的兼容性问题。

   **常见坑：**

- **HBuilderX 编译问题**：有时在 HBuilderX 中编译时可能出现打包失败或版本不兼容的情况。
  - **解决方案**：确保使用最新版本的 HBuilderX，或者在命令行使用 `cli` 编译。

     ```bash
     npm install -g @dcloudio/uni-cli
     ```

- **调试不一致**：在 HBuilderX 中调试时，有时与实际设备上的表现不一致，尤其是在 H5 端。
  - **解决方案**：使用真实设备进行调试，或者使用 Chrome 的开发者工具调试 H5 版本。

### 6. **App 端与小程序端的差异**

   uni-app 打包为 App 时，可能会与小程序端有一些不一致的表现，特别是在 UI 和操作体验上。

   **常见坑：**

- **App 打包时的性能问题**：App 端的性能和小程序端可能有差异，特别是在页面加载和交互上。
  - **解决方案**：在开发过程中，定期使用实际设备测试性能，避免过多的页面跳转和数据请求。

- **平台差异**：App 和小程序在一些功能上差异较大，例如 App 上的原生功能可能与小程序原生功能不同。
  - **解决方案**：确保在 `manifest.json` 中为每个平台设置特定的配置，避免出现兼容性问题。

### 总结

虽然 uni-app 为开发跨平台应用提供了很多便利，但它也存在一些常见的坑和挑战。为了避免遇到这些问题，可以在开发过程中：

1. 经常检查不同平台间的差异。
2. 使用条件编译来确保代码在不同平台上正确运行。
3. 优化性能，避免过度使用嵌套组件和复杂布局。
4. 使用最新版本的开发工具，并注意第三方插件的兼容性。

通过合理的策略和经验积累，可以最大程度地避免这些坑，提高开发效率。如果你有具体问题，欢迎随时问我！
