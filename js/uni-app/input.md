单行输入框。

html规范中input不仅是输入框，还有radio、checkbox、时间、日期、文件选择功能。在uni-app规范中，input仅仅是输入框。其他功能uni-app有单独的组件或API：radio组件、checkbox组件、时间选择、日期选择、图片选择、视频选择、多媒体文件选择(含图片视频)、通用文件选择。

属性说明
属性名	类型	默认值	说明	平台差异说明
value	String		输入框的初始内容
type	String	text	input 的类型 有效值
text-content-type	String		文本区域的语义，根据类型自动填充 有效值	仅 App-nvue-iOS 支持
password	Boolean	false	是否是密码类型	H5和App写此属性时，type失效
placeholder	String		输入框为空时占位符
placeholder-style	String		指定 placeholder 的样式
placeholder-class	String	"input-placeholder"	指定 placeholder 的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/	抖音小程序、飞书小程序、快手小程序不支持
disabled	Boolean	false	是否禁用
maxlength	Number	140	最大输入长度，设置为 -1 的时候不限制最大长度
cursor-spacing	Number	0	指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离	App、微信小程序、百度小程序、QQ小程序、京东小程序
focus	Boolean	false	获取焦点。	H5、App需要点击按钮获取焦点的，必须使用@touchend.prevent="onTap"阻止键盘收起默认事件才能获取焦点关于软键盘弹出的逻辑说明，小程序、nvue需使用组件的 focus()、blur() 方法控制焦点
confirm-type	String	done	设置键盘右下角按钮的文字，仅在 type="text" 时生效。有效值	微信小程序、App、H5、快手小程序、京东小程序
confirm-hold	Boolean	false	点击键盘右下角按钮时是否保持键盘不收起	App(3.3.7+)、H5 (3.3.7+)、微信小程序、支付宝小程序、百度小程序、QQ小程序、京东小程序
cursor	Number		指定focus时的光标位置
cursor-color	String		光标颜色	微信小程序 3.1.0+、H5(4.0+)、App-Vue(4.0+)
selection-start	Number	-1	光标起始位置，自动聚集时有效，需与selection-end搭配使用
selection-end	Number	-1	光标结束位置，自动聚集时有效，需与selection-start搭配使用
adjust-position	Boolean	true	键盘弹起时，是否自动上推页面	App-Android（vue 页面 softinputMode 为 adjustResize 时无效，使用 x5 内核时无效）、微信小程序、百度小程序、QQ小程序、京东小程序
auto-blur	Boolean	false	键盘收起时，是否自动失去焦点	App-Vue 3.0.0+
ignoreCompositionEvent	Boolean	true	是否忽略组件内对文本合成系统事件的处理。为 false 时将触发 compositionstart、compositionend、compositionupdate 事件，且在文本合成期间会触发 input 事件	App-vue (3.4.4+)、H5 (3.4.4+)、App-nvue不支持
always-embed	Boolean	false	强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)	微信小程序 2.10.4+
hold-keyboard	Boolean	false	focus时，点击页面的时候不收起键盘	微信小程序 2.8.2+
safe-password-cert-path	String		安全键盘加密公钥的路径，只支持包内路径	微信小程序 2.18.0+
safe-password-length	Number		安全键盘输入密码长度	微信小程序 2.18.0+
safe-password-time-stamp	Number		安全键盘加密时间戳	微信小程序 2.18.0+
safe-password-nonce	String		安全键盘加密盐值	微信小程序 2.18.0+
safe-password-salt	String		安全键盘计算 hash 盐值，若指定custom-hash 则无效	微信小程序 2.18.0+
safe-password-custom-hash	String		安全键盘计算 hash 的算法表达式，如 md5(sha1('foo' + sha256(sm3(password + 'bar'))))	微信小程序 2.18.0+
random-number	Boolean	false	当 type 为 number, digit, idcard 数字键盘是否随机排列	支付宝小程序 1.9.0+
controlled	Boolean	false	是否为受控组件。为 true 时，value 内容会完全受 setData 控制	支付宝小程序 1.9.0+
always-system	Boolean	false	是否强制使用系统键盘和 Web-view 创建的 input 元素。为 true 时，confirm-type、confirm-hold 可能失效	支付宝小程序 2.7.3+
inputmode	String	"text"	是一个枚举属性，它提供了用户在编辑元素或其内容时可能输入的数据类型的提示。有效值	H5（3.6.16+）、App-vue（3.6.16+）
@input	EventHandle		当键盘输入时，触发input事件，event.detail = {value}	差异见下方 Tips
@focus	EventHandle		输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度	仅微信小程序、京东小程序、App（2.2.3+） 、QQ小程序、快手小程序支持 height
@blur	EventHandle		输入框失去焦点时触发，event.detail = {value: value}
@confirm	EventHandle		点击完成按钮时触发，event.detail = {value: value}
@keyboardheightchange	eventhandle		键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration}	微信小程序基础库2.7.0+、App 3.1.0+

Tips

input 事件处理函数可以直接 return 一个字符串，将替换输入框的内容。仅微信小程序支持。
如果遇到 value 属性设置不生效的问题参考：组件属性设置不生效解决办法
input 组件上有默认的 min-height 样式，如果 min-height 的值大于 height 的值那么 height 样式无效。
微信小程序 cursor-color 属性在iOS下的格式为十六进制颜色值 #000000，安卓下只支持 default 和 green，Skyline 下无限制。
在 Web 和 app-plus vue 上 iOS 自带键盘的智能标点功能会导致：在 type 为 number、digit 时，连续输入两次 . 后，在第三次输入 . 时，会触发两次 deleteContentBackward（删除） 的输入外加一次 insertText 为 …（三个点） 的输入。会导致表现异常，关闭智能标点功能后正常。
type 有效值
值	说明	平台差异说明
text	文本输入键盘
number	数字输入键盘	均支持，App平台、H5平台 3.1.22 以下版本 vue 页面在 iOS 平台显示的键盘包含负数和小数。
idcard	身份证输入键盘	微信、支付宝、百度、QQ小程序、快手小程序、京东小程序
digit	带小数点的数字键盘	均支持，App平台、H5平台 vue 页面在 iOS 平台显示的键盘包含负数（原生键盘不支持负号）。
tel	电话输入键盘
safe-password	密码安全输入键盘	微信小程序
nickname	昵称输入键盘	微信小程序
注意事项

小程序平台，number 类型只支持输入整型数字。微信开发者工具上体现不出效果，请使用真机预览。
如果需要输入浮点型数字，请使用 digit 类型。
小程序端input在置焦时，会表现为原生控件，此时会层级变高。如需前端组件遮盖input，需让input失焦，或使用cover-view等覆盖原生控件的方案，参考。具体来讲，阿里小程序的input为text且置焦为原生控件；微信、头条、QQ所有input置焦均为原生控件；百度小程序置焦时仍然是非原生的。也可以参考原生控件文档
input组件若不想弹出软键盘，可设置为disabled
placeholder-style指定样式类font-size单位为rpx时，抖音小程序、飞书小程序、快手小程序不支持，可使用uni.upx2px()将rpx单位值转换成px。

