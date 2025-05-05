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
