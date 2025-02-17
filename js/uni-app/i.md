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

# 跨端注意

<https://zh.uniapp.dcloud.io/matter.html>

## 每个端有每个端的特点，有的能被抹平，有的不可能被抹平

注意：跨端，不是把web的习惯迁移到全平台。而是按照uni的写法，然后全平台使用。

## H5正常但App异常的可能性

css异常：
不支持的选择器
非H5端不支持*选择器；

*body的元素选择器请改为page，同样，div和ul和li等改为view、span和font改为text、a改为navigator、img改为image*...

组件和页面样式相互影响
非H5端默认并未启用 scoped，如需要*隔离组件样式*可以在 style 标签增加 scoped 属性，H5端为了隔离页面间的样式默认启用了 scoped

webview浏览器兼容性
vue页面在App端，默认是被系统的webview渲染的（不是手机自带浏览器，是*rom的webview*），在较老的手机上，比如Android4.4、5.0或iOS8，很多css是不支持的，所以不要使用太新的css，会导致界面异常。

注意这不意味着不能使用flex，Android4.4也支持flex，只是不要使用太新的css。

可以找Android4.4手机或使用pc模拟器实际测试下，大多数国产Android模拟器都是4.4或5.0。

从 uni-app 2.5.3 起，Android端支持引入腾讯x5浏览器内核，可以抹平低端Android的浏览器兼容性问题，详见x5使用指南

小程序不存在浏览器兼容问题，它自带了一个很大的Webview。所以如果你的H5和小程序界面正常，而Android低端机App界面异常，且App没有使用x5引擎，那基本就可以判定是因为css兼容性。

app端nvue页面，不存在浏览器兼容问题，它自带一个统一的原生渲染引擎，不依赖webview。

Android4.4对应的webview是chrome37。各端浏览器内核的详情查阅，参考：关于手机webview内核、默认浏览器、各家小程序的渲染层浏览器的区别和兼容性

*原生组件层级问题*
H5没有原生组件概念问题，*非H5端有原生组件并引发了原生组件层级高于前端组件的概念，要遮挡video、map等原生组件，请使用cover-view组件*。

使用了非H5端不支持的API

*小程序和App的js运行在jscore下而不是浏览器里，没有浏览器专用的js对象，比如document、xmlhttp、cookie、window、location、navigator、localstorage、websql、indexdb、webgl等对象*。

*如果你的代码没有直接使用这些，那很可能是引入的三方库使用了这些。如果是后者，去插件市场搜索替代方案。要知道非H5端的js是运行在一个独立的js core或v8下，并非运行在浏览器里*。

从*HBuilderX 2.6起，App端新增了renderjs，这是一种运行在视图层的js，vue页面可通过renderjs操作浏览器对象，进而可以让基于浏览器的库直接在uni-app的App端运行，诸如echart、threejs*，详见：renderjs

使用了非H5端不支持的vue语法，受小程序自定义组件限制的写法，详见
不要在引用组件的地方在组件属性上直接写 style="xx"，要在组件内部写样式
url(//alicdn.net)等路径，改为url(<https://alicdn.net)，因为在App端//是file协议>

很多人在H5端联网时使用本地测试服务地址(localhost或127.0.0.1)，这样的联网地址手机App端是无法访问的，请使用手机可访问的IP进行联网

## H5正常但小程序异常的可能性

同上
v-html在h5和app-vue均支持，但小程序不支持
小程序要求连接的网址都要配白名单
小程序正常但App异常的可能性
vue页面在App端的渲染引擎默认是系统webview（不是手机自带浏览器，是rom的webview），在较老的手机上，比如Android4.4、5.0或iOS8，一些新出的css语法是不支持的。注意这不意味着不能使用flex，Android4.4也支持flex，只是不要使用太新的css。可以找Android4.4手机或使用pc模拟器实际测试下，大多数国产Android模拟器都是4.4或5.0。

小程序不存在浏览器兼容问题，它内置了几十M自己的定制webview。所以如果你的H5和小程序界面正常，而App界面异常，大多是因为css兼容性。

解决这类问题：

放弃老款手机支持
不用使用太新的css语法，可以在caniuse查询
从 uni-app 2.5.3 起，Android端支持引入腾讯x5浏览器内核，可以抹平低端Android的浏览器兼容性问题，详见x5使用指南
小程序或App正常，但H5异常的可能性
在 uni-app 2.4.7 以前，H5端不支持微信小程序自定义组件，即 wxcomponents 下的组件，此时可能产生兼容问题。从 2.4.7 起，H5也支持微信自定义组件，不再存在这这方面兼容问题。
App端使用了App特有的API和功能，比如plus、Native.js、subNVue、原生插件等
使用了小程序专用的功能，比如微信卡券、小程序插件、微信小程序云开发。对于云开发，建议使用可跨端的uniCloud。
App正常，小程序、H5异常的可能性
代码中使用了App端特有的plus、Native.js、subNVue、原生插件等功能

## 使用 Vue.js 的注意

uni-app 基于Vue 2.0实现，开发者需注意Vue 1.0 -> 2.0 的使用差异，详见从 Vue 1.x 迁移

data 属性必须声明为返回一个初始数据对象的函数；否则页面关闭时，数据不会自动销毁，再次打开该页面时，会显示上次数据

//正确用法，使用函数返回对象
data() {
 return {
  title: 'Hello'
 }
}
//错误写法，会导致再次打开页面时，显示上次数据
data: {
 title: 'Hello'
}
复制代码
在微信小程序端，uni-app 将数据绑定功能委托给Vue，开发者需按Vue 2.0的写法实现数据绑定，不支持微信小程序的数据绑定写法，故如下写法不支持：

  <view id="item-{{id}}"></view>
复制代码
需修改为：

<view v-bind:id="'item-' + id "></view>
复制代码

## 区别于传统 web 开发的注意

你之前可能习惯自由的web开发，但目前各家小程序都有很多限制。 当然限制是为了在框架层更好的优化用户体验，所以小程序的体验要优于web。 并且这些限制只是写法的限制，并不影响功能。 如果你做过微信小程序开发，对这些限制应该已经很了解了。如果没有做过小程序，请仔细阅读本节。

JS注意
非H5端，不能使用浏览器自带对象，比如document、window、localstorage、cookie等，更不能使用jquery等依赖这些浏览器对象的框架。因为各家小程序快应用都不支持这些对象。
没有这些浏览器自带对象并不影响业务开发，uni提供的api足够完成业务。
uni的api在编译到web平台运行时，其实也会转为浏览器的js api。
App端若要使用操作window、document的库，需要通过renderjs来实现。
uni的api是多端可用的。在条件编译区，每个平台的专有api也可以使用，比如wx.、plus.等api可以分别在微信下和app下使用。
出于降低小程序向uni-app迁移成本的考虑，wx的api在app里也可以直接运行，比如写wx.request和uni.request是一样的，但仍然建议仅在微信的条件编译区使用wx的api。
Tag注意
uni-app的tag同小程序的tag，和HTML的tag不一样，比如div要改成view，span要改成text、a要改成navigator。
出于降低h5应用向uni-app迁移成本的考虑，写成div、span也可以运行在app和小程序上，因为uni-app编译器会把这些HTML标签编译为小程序标签。但仍然建议养成新习惯。
Css注意
虽然大部分css样式在微信小程序和app中都可以支持，但推荐使用flex布局模型，这种布局更灵活高效且支持更多平台(比如nvue、快应用只支持flex布局)
单位方面，uni-app默认为rpx。这是一种可跨端的通用单位 详见
工程目录注意
页面文件：放到pages目录下；推荐方案：新建一个页面目录，然后创建一个目录同名的.vue文件，如/pages/list/list.vue，接着在pages.json里完成注册。这与小程序的策略相同。
自定义组件：放到component目录
静态资源：如图片，固定放到static目录下。这是webpack的规则
数据绑定方式的注意
uni-app 基于Vue 2.0实现，开发者需注意Vue 1.0 -> 2.0 的使用差异，详见从 Vue 1.x 迁移
每个页面支持使用原生title，首页支持使用原生底部tab，这些是要在pages.json里配置，这些并不是vue页面的一部分。当然vue里的js api也可以动态修改原生title
虽然使用vue，但在app和小程序里，不是spa而是mpa
位置坐标系统一为国测局坐标系gcj02，这种坐标系可以被多端支持。老版5+的百度定位和百度地图使用的是百度私有坐标系bd09ll，这种坐标系需要转换。新版uni-app里的百度地图已经默认改为gcj02。高德地图不受影响，一直是gcj02

## H5 开发注意

H5 发布到服务器注意：

配置发行后的路径（发行在网站根目录可不配置），比如发行网站路径是 <www.xxx.com/html5，在> manifest.json 文件内编辑 h5 节点，router 下增加 base 属性为 html5

点击菜单 发行-> H5
在当下项目下的 unpackage/dist/build/web 目录找到出的资源，部署服务器（或者使用本地服务器预览），如需部署到相对路径（Vue2 项目支持本地file协议打开）参考：<https://ask.dcloud.net.cn/article/37432。> 4. 从 HBuilderX 4.06 开始，为了统一概念，编译目录从 h5 调整为 web，开发者的 CI/CD 流程需要同步进行更新。
引用第三方 js 的方式：

通过 npm 引入（通过条件编译，只有是 h5 平台才 import 相应的库）
在 manifest.json 文件编辑 h5 节点的 template 属性，填写 html 模版路径，在 html 模版里面可以使用 script 的方式引入三方的 js，如下示例是加了百度统计的 html 模板部分代码，模版全部代码可参考：自定义模板
<!-- ... -->
<body>
            <noscript>
                <strong>Please enable JavaScript to continue.</strong>
            </noscript>
            <div id="app"></div>
            <!-- built files will be auto injected -->
            <script>
                var _hmt = _hmt || [];
                (function() {
                    var hm = document.createElement("script");
                    hm.src = "https://hm.baidu.com/hm.js?xxxxxx";
                    var s = document.getElementsByTagName["script"](0);
                    s.parentNode.insertBefore(hm, s);
                })();
            </script>
</body>
<!-- ... -->
复制代码
H5 版 uni-app 全支持 vue 语法，所以可能造成部分写法在 H5 端生效，在小程序或 App 端不生效。

H5 校验了更严格的 vue 语法，有些写法不规范会报警，比如： data 后面写对象会报警，必须写 function；不能修改 props 的值；组件最外层 template 节点下不允许包含多个节点等。

编译为 H5 版后生成的是单页应用（SPA）。

如果遇到跨域造成js无法联网，注意网络请求（request、uploadFile、downloadFile等）在浏览器存在跨域限制，解决方案有详见：<https://ask.dcloud.net.cn/article/35267>

APP 和小程序的导航栏和 tabbar 均是原生控件，元素区域坐标是不包含原生导航栏和 tabbar 的；而 H5 里导航栏和 tabbar 是 div 模拟实现的，所以元素坐标会包含导航栏和tabbar的高度。为了优雅的解决多端高度定位问题，uni-app 新增了2个css变量：--window-top 和 --window-bottom，这代表了页面的内容区域距离顶部和底部的距离。举个实例，如果你想在原生tabbar 上方悬浮一个菜单，之前写 bottom:0。这样的写法编译到 h5 后，这个菜单会和 tabbar 重叠，位于屏幕底部。而改为使用 bottom:var(--window-bottom)，则不管在 app 下还是在h5下，这个菜单都是悬浮在 tabbar 上浮的。这就避免了写条件编译代码。当然仍然也可以使用 H5 的条件编译处理界面的不同。

CSS 內使用 vh 单位的时候注意 100vh 包含导航栏，使用时需要减去导航栏和 tabBar 高度，部分浏览器还包含浏览器操作栏高度，使用时请注意。

正常支持 rpx，px 是真实物理像素。暂不支持通过设 manifest.json 的 "transformPx" : true，把 px 当动态单位使用。

使用罗盘、地理位置、加速计等相关接口需要使用 https 协议，本地预览（localhost）可以使用 http 协议。

PC 端 Chrome 浏览器模拟器设备测试的时候，获取位置 API 需要连接谷歌服务器。

vue2组件内（页面除外）不支持 onLoad、onShow 等页面生命周期， vue3请使用组合式api监听

为避免和内置组件冲突，自定义组件请加上前缀（但不能是 u 和 uni）。比如可使用的自定义组件名称：my-view、m-input、we-icon，例如不可使用的自定义组件名称：u-view、uni-input，如果已有项目使用了可能造成冲突的名称，请修改名称，另外微信小程序下自定义组件名称不能以 wx 开头。

vue3 开发阶段不会自动处理语法兼容问题，如果在低版本浏览器上运行，需要自行处理，可参考详情。

## 小程序开发注意

文件命名
vue3 项目，页面或组件目录下，不能使用与 vue、nvue 同名的 js、ts 文件。
小程序端 vue 文件会被编译为同名的 js、json、wxml、wxss 文件，如果存在同名 js、ts 文件，会导致冲突。

各家小程序实现机制不同，可能存在的平台兼容问题
浏览器内核差异
各家小程序的浏览器内核不同，可能会造成css兼容性问题，更多细节参考：<https://ask.dcloud.net.cn/article/1318>

自定义组件渲染差异
微信（可以使用virtualHost配置）/QQ/百度/抖音这四家小程序，自定义组件在渲染时会比App/H5端多一级节点，在写样式时需要注意：

使用flex布局时，直接给自定义组件的父元素设置为display:flex不能影响到自定义组件内部的根节点，需要设置当前自定义组件为display:flex才可以。
在自定义组件内部设置根元素高度为100%，不能撑满自定义组件父元素。需要同时设置当前自定义组件高度为100%才可以。
支付宝小程序默认启用了virtualHost配置不会插入节点，一般不存在如上问题。

vendor.js 过大的处理方式
小程序工具提示vendor.js过大，已经跳过es6向es5转换。这个转换问题本身不用理会，因为vendor.js已经是es5的了。

关于体积控制，参考如下：

使用运行时代码压缩
HBuilderX创建的项目勾选运行-->运行到小程序模拟器-->运行时是否压缩代码
cli创建的项目可以在package.json中添加参数--minimize，示例："dev:mp-weixin": "cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch --minimize"
使用分包优化，关于分包优化的说明

### 各家小程序开发工具下载地址

微信开发者工具
支付宝开发者工具
百度开发者工具
抖音开发者工具
飞书开发者工具

### 各家小程序更新日志列表

微信小程序更新日志
支付宝小程序更新日志
百度小程序更新日志
抖音小程序更新日志
飞书小程序更新日志

### 微信小程序开发注意

建议关注微信小程序当前bug列表，对已知Bug，想办法避让。

### 支付宝小程序开发注意

showLoading 是不透传的，也就是说 loading 显示的时候无法点击页面内容。
文件名或文件夹名中不允许出现 @ 符号。
网络请求返回的数据会严格按照 dataType 进行处理，如果不符合规范则会抛出错误，而不是按照原格式返回。
canvas 组件的标识是 id，而不是 canvas-id。目前还未进行处理，所以需要主动添加 id 属性。
目前测试的结果，导航栏只有设置背景颜色为 #FFF(FFF) 时才会变成黑色文字。
支付宝小程序的导航栏是支持透明渐变效果的，后面会提供相关的配置。
使用伪元素做边框时，高度值不能用 1rpx，需要直接用 1px。
不支持 ECharts。
支付功能模拟不了，需要真机测试。

### 百度小程序开发注意

不支持属性选择器。
不支持 scoped。
login / getUserInfo /支付等功能在模拟器（开发工具）上不能模拟。
map 组件在开发工具上预览效果不对，但是手机上是对的。
getSystemInfo 获取到的 windowHeight 在模拟器中值不正确，真机预览是正确的。
v-if 和 v-for 不可在同一标签下同时使用。
页面中引入自定义组件时，渲染的结果中外层会有一个 template 标签，这会导致部分选择器对应的样式匹配不上。

### 360小程序开发注意

HBuilderX 2.7.6+ 版支持
默认为H5平台组件，如果需要360平台组件请使用 <se-...></se-...>，例如 <se-video></se-video>
<se-...></se-...> 为360平台专有组件，不能跨平台，需要条件编译 mp-360 pages 配置
{
 //...
 "globalStyle": {
  "mp-360": {
   "navigationStyle": "custom" // 去掉uni-app header，使用360小程序header
  }
 }
 //...
}
复制代码
360小程序文档

### 快应用开发注意

HBuilderX 2.7.12+ 版支持

#### quickapp-webview

目前仅vivo oppo支持
最小平台版本支持需要 1063
暂不支持 canvas 组件

#### quickapp-webview-huawei

Huawei QuickApp IDE 最低版本 2.5.2 （已知该版本工具有个bug：不支持项目名称中包含空格）
最小平台版本支持需要 1070
暂不支持 uni.login(OBJECT)，暂时使用条件编译，参考文档 <https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/webview-api-hwaccount>
暂不支持支付，支付依赖uni.login(OBJECT)
页面有滚动条时，canvas 组件不会跟随页面滚动
rich-text 组件某些情况下显示异常

#### sign 证书配置

sign放到项目根目录，编译后自动拷贝到 .quickapp/sign，每次编译完成时会删除.quickapp，避免证书丢失

### 鸿蒙元服务

目前 uni-app 开发鸿蒙元服务还在开发迭代，暂不支持模拟器，只支持鸿蒙 Next 真机。
鸿蒙常见问题，请参考 元服务开发注意事项

### 小红书小程序

帮助我们改善此页面！
