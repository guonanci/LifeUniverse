# uni-app递归渲染family-node组件时，H5端显示正常，微信小程序只显示第一代
```js
import FamilyNode from './family-node.vue' // 必须显式导入自身
export default {
  name: 'family-node',
  components: { FamilyNode }, // 注册自身组件
  options: {
    virtualHost: true, // 消除多余容器[2,4](@ref)
    styleIsolation: 'shared' // 样式隔离[3](@ref)
  },
  props: {
    node: Object
  }
}
```
# image
https://uniapp.dcloud.net.cn/component/image.html#image


图片格式说明：
mode 有效值
示例
image
图片需要上传？推荐uni-cdn，帮你节省至少30%的 CDN 费用！详情。

HarmonyOS

HarmonyOS
HBuilderX 4.23
图片组件。

属性名	类型	默认值	说明	平台差异说明
src	String		图片资源地址
mode	String	'scaleToFill'	图片裁剪、缩放的模式
lazy-load	Boolean	false	图片懒加载。只针对page与scroll-view下的image有效	微信小程序、百度小程序、抖音小程序、飞书小程序
fade-show	Boolean	true	图片显示动画效果	仅App-nvue 2.3.4+ Android有效
webp	boolean	false	在系统不支持webp的情况下是否单独启用webp。默认false，只支持网络资源。webp支持详见下面说明	微信小程序2.9.0
show-menu-by-longpress	boolean	false	开启长按图片显示识别小程序码菜单	微信小程序2.7.0
draggable	boolean	false	是否能拖动图片	H5 3.1.1+、App（iOS15+）
@error	HandleEvent		当错误发生时，发布到 AppService 的事件名，事件对象event.detail = {errMsg: 'something wrong'}
@load	HandleEvent		当图片载入完毕时，发布到 AppService 的事件名，事件对象event.detail = {height:'图片高度px', width:'图片宽度px'}
图片格式说明：
当使用浏览器/webview渲染时，支持哪些图片格式由webview决定，详见
当使用uvue原生渲染时支持的格式如下
 bmp
 gif
 ico
 jpg
 png
 webp
 heic（Android10+支持）
 avif
 tif
 svg
可以通过插件来扩展app平台nvue/uvue的图片支持，比如插件市场搜索svg插件
小程序上只支持网络地址的svg图
webp图片支持详解
Android4以上（含）、iOS14以上（含）系统内置支持webp，此时，不管web、小程序、app，也不管vue/nvue/uvue都可以直接使用webp；
iOS14以下，app-vue下，iOS不支持；app-nvue/uvue下，iOS支持；微信小程序2.9.0起，配置属性webp为true时iOS支持；
pc浏览器上，webp在不同浏览器的支持详见：https://caniuse.com/?search=webp
Tips

<image> 组件未设置宽高时，默认宽度320px、高度240px。尤其注意当图片加载失败时，widthFix模式指定宽度的图片，虽然图片空白，但其高度会变成240px；app-nvue平台，暂时默认为屏幕宽度、高度 240px；
src 仅支持相对路径、绝对路径，支持 base64 码；
页面结构复杂，css样式太多的情况，使用 image 可能导致样式生效较慢，出现 “闪一下” 的情况，此时设置 image{will-change: transform}，可优化此问题。
自定义组件里面使用 <image>时，若 src 使用相对路径可能出现路径查找失败的情况，故建议使用绝对路径。
mode 有效值
mode 有 14 种模式，其中 5 种是缩放模式，9 种是裁剪模式。

模式	值	说明
缩放	scaleToFill	不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
缩放	aspectFit	保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。
缩放	aspectFill	保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
缩放	widthFix	宽度不变，高度自动变化，保持原图宽高比不变
缩放	heightFix	高度不变，宽度自动变化，保持原图宽高比不变 App 和 H5 平台 HBuilderX 2.9.3+ 支持、微信小程序需要基础库 2.10.3
裁剪	top	不缩放图片，只显示图片的顶部区域
裁剪	bottom	不缩放图片，只显示图片的底部区域
裁剪	center	不缩放图片，只显示图片的中间区域
裁剪	left	不缩放图片，只显示图片的左边区域
裁剪	right	不缩放图片，只显示图片的右边区域
裁剪	top left	不缩放图片，只显示图片的左上边区域
裁剪	top right	不缩放图片，只显示图片的右上边区域
裁剪	bottom left	不缩放图片，只显示图片的左下边区域
裁剪	bottom right	不缩放图片，只显示图片的右下边区域
