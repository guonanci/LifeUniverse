注：当代码运行到断点的时候，整个小程序都停止了，所以模拟器会出现白屏或者无法操作的情况

AppData panel 用于显示当前项目运行时小程序 AppData 具体数据，实时地反映项目数据情况，可以在此处编辑数据，并及时地反馈到界面上。


Storage panel 用于显示当前项目使用 wx.setStorage 或者 wx.setStorageSync 后的数据存储情况。

注：uploadFile 和 downloadFile 暂时不支持在 Network Panel 中查看

在控制台中可以输入以下命令

build: 编译小程序

preview: 预览

upload: 上传代码

openVendor: 打开基础库所在目录

openToolsLog: 打开工具日志目录

checkProxy(url): 检查指定 url 的代理使用情况

Sensor panel 有两大功能：

开发者可以在这里选择模拟地理位置

开发可以在这里模拟移动设备表现，用于调试重力感应 API



自动预览
自动预览可以实现编写小程序时快速预览，免去了每次查看小程序效果时都要扫码或者使用小程序助手的麻烦。只需按下快捷键，保持前台运行的微信即可自动唤出或刷新小程序。

要使用自动预览功能，需要配合 6.6.7 及以上的微信客户端版本。

Source Map
目前只在 iOS 6.7.2 及以上版本支持

小程序/小游戏在打包时，会将所有 js 代码打包成一个文件，为了便于开发者在手机上调试时定位错误位置，小程序/小游戏提供了 Source Map 支持。

在开发者工具中开启 ES6 转 ES5、代码压缩时，会生成 Source Map 的 .map 文件。开发版小程序中，基础库会使用代码包中的 .map 文件，对 vConsole 中展示的错误信息堆栈进行重新映射（只对开发者代码文件进行）。

如果使用外部的编译脚本对源文件进行处理，只需将对应生成的 Source Map 文件放置在源文件的相同目录下

如：

pages/index.js

pages/index.js.map

app.js

app.js.map

开发者工具会读取、解析 Source Map 文件，并进行将其上传

后续可以在小程序后台的运营中心可以利用上传的 Source Map 文件进行错误分析

Source Map 文件不计入代码包大小计算。
开发版代码包中由于包含了 .map 文件，实际代码包大小会比体验版和正式版大。

页面内导航
开发者可根据自身功能设计需要在页面内添加自有导航。并保持不同页面间导航一致，指向清晰，有路可退。受限于手机屏幕尺寸的限制，小程序页面的导航应尽量
简单。建议开发者设计的自有导航样式与微信官方小程序菜单样式保持一定差异，以便区分。

字体
微信内字体的使用与所运行的系统字体保持一致，常用字号为20, 18, 17, 16,14 13, 11(pt)，使用场景具体如下：

tip: 从 2.1.0 起，button 可作为原生组件的子节点嵌入，以便在原生组件上使用 open-type 的能力。


微信开发者工具去除编辑器，用vscode编写代码，只用微信开发者工具来预览和调试，一切流程将变得特别简单！！

module.exports

<scroll-view scroll-y class="container">
  <view class="list-container" wx:for="{{listData}}" wx:key="{{iChunk}}"
  wx:for-index="iChunk" wx:for-item="itemChunk">
    <view class="list-container" wx:for="{{itemChunk}}" wx:key="{{i}}"
    wx:for-index="i" wx:for-item="item">
      <view class="list-item" wx:for="{{item}}"  wx:key="{{itemInner.label}}" wx:for-item="itemInner"
      wx:if="{{itemInner.value}}">
        <view class="label">{{itemInner.label}}</view>
        <view class="value">{{itemInner.value}}</view>
      </view>
    </view>
  </view>
</scroll-view>

小程序里面的className，this.data（wxml）数据都采用驼峰命名！

https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html

slot：
https://blog.csdn.net/qq_42767631/article/details/84982169

absolute '/pages/home/home'
除此之外，分享路径略有不同：“/pages/index/index”

https://github.com/Tencent/westore

# taro
https://github.com/NervJS/taro
https://github.com/NervJS/awesome-taro
https://juejin.im/book/5b73a131f265da28065fb1cd?referrer=5ba228f16fb9a05d3251492d

# components
## PullDownRefresh PushUpLoadMore
https://www.jianshu.com/p/8c98af820fea


```html
<modal show="{{showModal}}" height="60%" bindCancel="modalCancel" bindConfirm="modalConfirm">
  <view class="modal-content">
    <formRow wx:for="{{goodsList}}" wx:key="{{index}}" title="{{item.name}}" placeholder="store{{item.store}}" rowPadding="10rpx">
    </formRow>
  </view>
</modal>
````
wxStorage存储大小有限，一定要限制住其使用场合，比如说可以采用urlSearchParams+onLoad 来避免wxStorage的使用。
开发者工具有缓存艹，我说怎么娇娇的账号登录后一直wx.login调用失败，原来是这个原因。。
