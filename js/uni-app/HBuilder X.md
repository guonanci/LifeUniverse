# HBuilder X - Release Notes
======================================

## 4.64.2025042916
- HBuilder
调整 windows HBuilder调整为64位，不再支持32位系统 详情
新增 HBuilderX 用户登录窗口，增加手机号密码登录方式
新增 控制台支持字符搜索 详情
修复 运行控制台打印日志时会清空选中区域的Bug 详情
修复 编辑器右键【选择相同变量】不生效的Bug 详情
修复 项目管理器下项目过多时，批量关闭项目可能导致卡死和崩溃的Bug 详情
修复 当打开一个比较大的压缩文件时，若该文件错误校验时产生错误较多，会导致编辑器卡顿的Bug 详情
修复 某些情况下中文标点自动转换不对的Bug 详情
修复 macosx HBuilderX升级后点立即重启，某些情况下无法正常重启的Bug 详情

修复 macosx arm 右键菜单不显示快捷键的Bug 详情
修复 macosx arm Git提交界面自动全屏的Bug 详情
修复 Git/SVN插件 4.52版本引发的 Git/SVN导入项目, 提示下载Tortoise Git/SVN工具的链接不生效的Bug 详情
修复 Git插件 操作命令时控制台乱报无意义日志的Bug 详情
新增 swift、kotlin等插件市场扩展的语言，支持智能编辑、智能配对、折叠、格式化等功能 详情
新增 语言服务 转到定义支持多结果 详情
新增 语言服务 uts插件 支持swift混编时的代码提示 详情
新增 语言服务 uni-app x项目 条件编译支持置灰非活动平台代码块 详情
优化 语言服务 uni-app x项目 条件编译下，提升转到定义性能
修复 语言服务 uni-app x项目 uvue文件使用computed定义的变量，在template区域提示不对的Bug 详情
修复 语言服务 uni-app x项目 对vue文件路径无法转到定义的Bug 详情
修复 语言服务 快速打开和关闭文件时语言服务提示Could not find source file的Bug 详情
新增 uni-app x Android平台debug 支持uvue及uts插件混编kotlin文件的断点调试 详情

新增 uni-app x 鸿蒙平台debug，支持调试uts、uvue、uts插件混编arkts文件 详情
新增 manifest 通过交互界面配置鸿蒙的数字签名证书，支持自动申请调试证书 详情
新增 真机运行插件 运行到鸿蒙时可以选择构建过程的缓存策略 详情
调整 真机运行插件 内置adb从29.0.4升级到35.0.2（该版本支持无线adb）
优化 uni-app (x) 运行到Android 设备列表显示设备品牌和型号
调整 uni-app (x) 运行到Android和鸿蒙时 已安装基座由卸载安装调整为覆盖安装 详情
调整 安心打包 apktool更新为2.11.1，解决安心打包时android:foregroundServiceType的参数值会被改变的Bug 详情
- uni-app
修复 Vue2 项目 使用预编译器 dart-sass 时非 uni.scss 文件不能使用 @use 语法的Bug 详情
Web平台 修复 在使用国际化时，leftWindow、topWindow 和 rightWindow 初始语言默认显示为英文的Bug 详情
App平台 修复 Canvas 设置不支持字体小数、 font-weight 不支持更多自重和数字的Bug 详情
App平台 修复 textarea 组件在某些情况下，在APP端 iOS 模拟器中无法渲染的Bug 详情
App平台 修复 有拦截器的情况下，切换 tabbar 时索引与页面不对应的Bug 详情
Android平台 修复 Vue2 模式下 data 相同值赋值不会触发 nextTick 的Bug 详情
iOS平台 修复 google 地图卫星视图模式不显示建筑和道路名称的Bug 详情
鸿蒙平台 新增 UniMP 实例支持访问 appId 属性

鸿蒙平台 新增 uni.getBackgroundAudioManager 现可以在通知栏中显示音频播放控制
鸿蒙平台 新增 defineNativeEmbed 接口，用于定义原生嵌入组件 详情
鸿蒙平台 调整 navigateBar 高度，调整返回按钮点击区域，调整 loading 改为在左侧
鸿蒙平台 调整 uni-app 页面所在的 webview 启用 MixedMode.All
鸿蒙平台 修复 setTimeout 传入错误参数导致崩溃的Bug
鸿蒙平台 修复 createWebviewContext 的相关方法调用之后闪退的Bug
鸿蒙平台 修复 getWindowInfo 部分设备获取的 windowHeight 少1px的Bug
鸿蒙平台 修复 部分情况下主应用和小程序切换时调用 uni api 报错的Bug
鸿蒙平台 修复 uni.request data 传入字符串被额外 JSON.stringify 了一次的Bug 详情
鸿蒙平台 修复 getStorage 接口返回的对象内的数组调用 push 方法无效的Bug 详情
鸿蒙平台 修复 直达页面跳转同名页面后返回直接回到了首页的 Bug 详情
鸿蒙平台 修复 web-view 的 update-title 默认表现错误的Bug 详情
鸿蒙平台 修复 uts 插件内打印日志无法在 HBuilderX 控制台查看的Bug 详情
小程序平台 修复 Node 高版本废弃部分 API 导致运行失败的Bug 详情
小程序平台 修复 编译 style 产物存在冗余 runtime 判断逻辑的Bug 详情
微信小程序平台 新增 支持 useExtendedLib 属性，引入 weui 工具库 详情
支付宝小程序平台 修复 getSystemInfo 时 osName 错误的Bug 详情
小红书小程序平台 修复 产物目录下无法编入 ext.json 的Bug
抖音小程序平台 修复 产物目录下无法编入 package.json 的Bug
uni-app x
【重要】新增 编译App到鸿蒙平台，实现跨平台开发鸿蒙原生应用 详见
Web平台、App平台 重构 uni.showModal，基于dialogPage，支持 uni.hideModal、国际化、暗黑主题、横屏 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=16800
Web平台、App平台 修复 4.51版本引发的 API uni.showActionSheet 菜单分割线太粗 详情
Web平台 修复 4.51版本引发的 API uni.showActionSheet 宽屏模式缺少阴影效果 详情

App平台 新增 组件 camera组件 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=16169
App平台 新增 组件 text 支持 css 属性 text-shadow 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=15524
App平台 新增 API uni.requestMerchantTransfer 支持调起微信请求用户确认收款 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=15360
App平台 新增 API uni.getRecorderManager 支持录音功能 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=15781
App平台 新增 API UniPage 支持 width、height、statusBarHeight 等属性 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=15946
App平台 新增 API websocket 支持 ArrayBuffer 类型数据 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=15780
App平台 新增 API uni.previewImage 完善图片加载失败逻辑 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=16001
App平台 新增 API uni.getVideoInfo 返回结果支持 thumbTempFilePath 获取视频缩略图 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=14521
App平台 新增 API uni.getVideoInfo uni.compressVideo 支持返回文件字节大小 byteSize 数据，统一调整 duration、size 等属性值精度 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=15892
App平台 新增 CSS var变量 --status-bar-height 支持动态更新 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=16070
App平台 新增 CSS justify-content 支持 space-evenly 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=13351
App平台 新增 CSS rpx 长度单位统一在排版引擎层计算，解决在应用窗口大小发生变化时可能显示不正确的问题 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=16115

App平台 新增 DOM API UniElement 支持 requestFullscreen 请求全屏显示功能 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=14131
App平台 新增 组件 web-view 支持 bounces 配置是否开启回弹效果 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=15066
App平台 修复 组件 nested-scroll-header 不能动态自适应内容高度 详情
App平台 新增 组件 web-view 支持获取内容高度及内容高度变化事件 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=16625
App平台 修复 API uni.createInnerAudioContext、uni.getBackgroundAudioManager无法播放m3u8音频直播源 详情
App平台 修复 DOM API UniElement takeSnapshot 截屏时会阻塞UI 详情
Android平台、iOS平台 新增 API uni.makePhoneCall 支持拨打电话 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=16592
Android平台、iOS平台 修复 4.51版本引发的 API uni.showActionSheet 主题监听导致内存泄漏问题 详情
Android平台 新增 pages.json 支持 androidThreeButtonNavigationStyle 配置系统虚拟导航栏前景色 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=15762
Android平台 新增 组件 web-view 支持 android-nested-scroll 属性配置嵌套滚动行为 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=16675
Android平台 新增 API uni.connectEventSource 支持 header 设置请求头 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=15956
Android平台 新增 UniPage API getAndroidActivity 获取安卓平台Activity对象 文档

Android平台 修复 vue 响应式 Array 调用 reverse 后结果不正确 详情
Android平台 修复 vue 组件:style绑定<script setup>中定义的非响应式数据运行时报类型不兼容错误 详情
Android平台 修复 4.51版本引发的 vue script setup对外导出属性的getter、setter命名函数可能调用失败 详情
Android平台 修复 vue inject在指定了默认值时仍告警not found 详情
Android平台 修复 pages.json androidThreeButtonNavigationTranslucent 设置为 false 时，通过 backgroundColorContent 修改虚拟按键区域颜色无效 详情
Android平台 修复 pages.json 横屏、分屏模式下页面默认导航栏高度可能不正确 详情
Android平台 修复 组件 Touch 事件 设置 transform 为 rotate 后 touch 事件返回的坐标信息不正确 详情
Android平台 修复 组件 Touch 事件 设置 scale 后触摸修改 translate 会引起闪烁 详情
Android平台 修复 组件 scroll-view 嵌套 web-view 后，操作 web-view 无法滚动 scroll-view 详情
Android平台 修复 组件 scroll-view 组件无法动态调整宽高 详情
Android平台 修复 组件 swiper 组件设置 border-radius 不生效 详情
Android平台 修复 组件 list-view 开启下拉刷新后 sticky-header 动态加载的数据导致无法吸顶 详情
Android平台 修复 组件 list-view 父容器设置 overflow 为 visible 时导致自定义下拉刷新样式无法隐藏 详情
Android平台 修复 组件 list-item 内元素绑定 longpress 事件，list-view 滚动几页后部分 list-item 内 longpress 事件不触发 详情
Android平台 修复 4.51版本引发的 组件 sticky-header 反复切换显示后停靠位置可能异常 详情
Android平台 修复 组件 sticky-header 父容器内容高度发生变化 sticky-header 未能及时更新停靠位置

Android平台 修复 组件 sticky-section 绑定的数据源动态 push 添加数据后引起显示错乱 详情
Android平台 修复 4.53版本引发的 组件 text tap/click 事件可能不响应 详情
Android平台 修复 组件 textarea 的 line-height 属性不支持 em 单位 详情
Android平台 修复 组件 image 加载长图片显示模糊 详情
Android平台 修复 组件 web-view 页面关闭后播放的背景音乐未关闭 详情
Android平台 修复 组件 web-view 网页中输入框获取焦点后可能被软键盘遮挡 详情
Android平台 修复 API uni.downloadFile 下载超时判断逻辑不正确 详情
Android平台 修复 API uni.createInnerAudioContext uni.getBackgroundAudioManager 返回的 buffered 属性值不正确 详情
Android平台 修复 API uni.getBackgroundAudioManager 播放背景音乐在 App 设置中的通知权限中通知类别显示为 uniappx 详情
Android平台 修复 3.99版本引发的 CSS box-shadow 子元素改变尺寸后导致设置 box-shadow 样式的元素渲染异常 详情
Android平台 修复 UniPage API 使用自定义基座包真机运行热更新可能引起页面大小异常 详情
Android平台 修复 UniPage API 应用生命周期 onLaunch 中弹出 DialogPage 后可能引起 tabBar 页面显示不正常 详情
Android平台 修复 DOM API UniElement 未设置 background-color、border-color 时执行 animate 动画将默认色修改为白色 详情
Android平台 修复 DOM API UniElement animate 方法设置 opacity 导致动画不生效 详情
Android平台 修复 运行调试 应用启动过程中代码报错没有日志输出 详情
Android平台 修复 API dialogPage 在android5.0系统设备内容显示不全 详情
Android平台 更新 云端打包环境 compileSdk 为 35、buildToolsVersion 为 35.0.0 、 Gradle 为 8.11.1 版、Android Gradle 插件为 8.7.3 版 文档
iOS平台 新增 API uni.base64ToArrayBuffer 、uni.arrayBufferToBase64 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=15969
iOS平台 新增 API uni.request 支持 ArrayBuffer 数据 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=15802
iOS平台 新增 API uni.chooseFile 选择文件 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=15672
iOS平台 新增 API uni.getFileSystemManager 支持在UTS插件中调用，补齐之前未支持的 readFileSync、writeFileSync 等API 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=15551
iOS平台 新增 API uni.connectEventSource 支持SSE 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=15664

iOS平台 新增 运行调试 CocoaPods 仓储支持配置自定义source 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=16671
iOS平台 新增 发行 uts插件支持原生iOS Extension 文档 https://issues.dcloud.net.cn/pages/issues/detail?id=4949
iOS平台 修复 pages.json 非刘海屏设备上隐藏状态栏导致导航栏显示异常 详情
iOS平台 修复 4.25版本引发的 组件 list-view 宽度动态变化时引起子组件 list-item 复用时显示异常 详情
iOS平台 修复 组件 list-item CSS 设置 margin 为负数时可能引起应用闪退 详情
iOS平台 修复 组件 rich-text 嵌入 list-item 中可能引起应用闪退 详情
iOS平台 修复 组件 input 设置 selection-start、selection-end 在某些场景失效 详情
iOS平台 修复 组件 input placeholder-style 设置 background-color 无效 详情
iOS平台 修复 组件 textarea CSS 设置 line-height 无效 详情
iOS平台 修复 组件 textarea 设置 hold-keyboard 为 true，scroll-view 滚动时软键盘还是会收起 详情
iOS平台 修复 组件 textarea 在 class 中设置 width、height 无效 详情
iOS平台 修复 组件 textarea 使用v-model 修改文本内容时光标位置会被重置到最后一行 详情
iOS平台 修复 组件 textarea 同时设置auto-height与max-height，内容高度大于max-height时视图无法滚动 详情
iOS平台 修复 4.55版本引发的 组件 text selectable 文本可选效果可能无效 详情
iOS平台 修复 4.25版本引发的 组件 list-view scroll-into-view 属性可能无效 详情
iOS平台 修复 组件 waterflow scroll-into-view 属性可能无效 详情
iOS平台 修复 组件 input 某些场景下 hold-keyboard 设置为 true 滑动 scroll-view 依然隐藏软键盘 详情
iOS平台 修复 组件 web-view web页面中 a 标签 target 属性值为 _blank 时点击无法跳转 详情
iOS平台 修复 4.51版本引发的 组件 web-view evaLJS 注入localstorage 数据没有在页面加载前生效，导致一开始获取不到token 详情
iOS平台 修复 API uni.getProviderSync 返回属性providerObject: Array不支持JSON.stringify()的问题 详情
iOS平台 修复 API uni.reLaunch relaunch后跳转到新页面 还能侧滑返回到tabbar页面 原因是relaunch没有关闭tabbar页面 详情
iOS平台 修复 API uni.compressImage 压缩compressImg_开头的文件会覆盖 详情
iOS平台 修复 API uni.requestPayment 微信支付跳转微信失败且没有返回错误码的bug 详情
iOS平台 修复 CSS transition transform 同时应用多个变换时效果可能不正确的Bug
