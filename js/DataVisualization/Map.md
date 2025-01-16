Fetch finished loading: PUT "<URL>".
19WARNING: Too many active WebGL contexts. Oldest context will be lost.
react_devtools_backend.js:2430 Error: (regl) context lost
at Function.s [as raise] (p**scenery**EditPage**index.993cc25f.async.js:3669)
at Qi (p**scenery**EditPage**index.993cc25f.async.js:3675)
at Function.Ac [as clear] (p**scenery**EditPage**index.993cc25f.async.js:3675)
at nt.clear (p**scenery**EditPage**index.993cc25f.async.js:4224)
at yr.value (p**scenery**EditPage**index.993cc25f.async.js:2860)
at yr.value (p**scenery**EditPage**index.993cc25f.async.js:2860)
at yr.value (p**scenery**EditPage**index.993cc25f.async.js:2860)
at Wt.value (p**scenery**EditPage**index.993cc25f.async.js:2867)
at nt.value (p**scenery**EditPage**index.993cc25f.async.js:4224)
at p**scenery**EditPage**index.993cc25f.async.js:1831

# L7

https://zhuanlan.zhihu.com/p/102034758
Quick BI V3.5 可视化地图组件全新升级
舞动的林小一
舞动的林小一
立志让自己学会跳舞的程序媛一枚
​ 关注她
9 人赞同了该文章
地图作为可视化图表不可或缺的一类图表，在 QuickBI 中使用量是除了线柱面条、交叉表、指标看板之外使用量最高的图表。凡是涉及到地理信息的可视化，地图相比起其他类型的图表更加直观。例如下图，双十一中国不同区域的订单成交额，地图显然比线柱图更能让用户获取到有效的信息。

双十一订单成交额柱图

双十一订单成交额地图
此次地图升级主要包括视觉的升级；更强大便捷的自定义区间划分能力；提供丰富的颜色模板选择以及对样式更多可定制的能力；支持更加友好的交互；更多图例的展示方式；新增对美国、日本等 6 个国家的支持；支持 5 层地理维度的钻取；以及更自由的区域范围选择。

视觉升级
整体上进行了视觉的效果升级，包括

地图本身的渲染效果，地名碰撞检测等细节的处理
图例的位置更改，更利于用户的阅读习惯
图例添加蒙层，避免地图对图例的遮挡
无数据的气泡地图背景色的处理等细节
色彩地图升级前后的效果对比：

QuickBI 色彩地图视觉效果升级
气泡地图的升级前后效果对比图：

QuickBI 气泡地图视觉效果升级
更强大的自定义分区间能力
升级前的区间设置分成自动设置和手动设置：自动设置只能是分成 5 个分区间，而手动设置需要 2N（N 表示区间个数）个数字的修改。

而升级后的分区间可支持线性映射和非线性映射，同时在交互上可勾选最值的自动，分区间的自动、取整，以及可视化分区间的组件让用户可以更加便捷地配置出自己想要的区间范围。

自定义分区间功能升级
多套颜色模板
根据不同场景精心设计了八套默认的色系，并提供序列渐变、分离渐变、分类配色三种类型的自定义配色功能，随心所欲配置自己喜欢的色彩。

多套颜色模板
结合自定义分区间能力和颜色能力的升级，看下地图的展示效果：之前除了默认的蓝色系地图之外，只能手动配置颜色，你无法保证配置出让人满意的效果；而升级后的地图，除了提供八套默认颜色选择之后，还提供主题色系随时都能做出很好的颜色效果。

QuickBI 地图颜色升级效果
不同粒度的地理纬度支持
在地理粒度上，我们支持国家级、区域、省级、市级、县级 5 个层级的展示，并且支持在不同范围下展示不同的粒度。同时，支持 5 个层级的钻取功能。另外除了中国，还支持美国、日本、墨西哥等其他 6 个国家的展示。

中国范围下市粒度的展示：

中国市粒度的展示
只显示西南区域范围的省份：

区域范围的省份地图
从区域到省到市的下钻

QuickBI 地图的下钻操作
更多图例样式
色彩地图根据数据是否线性映射以及图例是简化类型的，可以分成以下类型的图例；用户可以根据场景需要自行选择。

地图更丰富的图例样式
以上即为本次 QuickBI 可视化地图组件升级的功能，主要体验在视觉交互升级，自定义分区间、地理范围、图例等功能增强上。技术实现上采用的是 Antv 的地理空间可视化库 L7，感谢
@ThinkGIS
技术上的支持以及遇到问题时的及时响应。

参考链接：

智能分析套件 Quick BI\_智能 BI 服务平台-阿里云
​
www.alibabacloud.com
图标
Quick BI-阿里云
​
help.aliyun.com
L7
​
l7.antv.vision

3 条评论
​ 切换为时间排序
写下你的评论...

发布
天凛凛
天凛凛 2020-01-10
配图的色彩感十足！

​ 赞
​ 回复
​ 踩
​ 举报
土豆磊
土豆磊 2020-01-10
之前的 qbi 的地图组件是做的真的差
​ 赞
​ 回复
​ 踩
​ 举报
ThinkGIS
ThinkGIS2020-01-09
Quick BI 让地理数据拿来即用，在地理数据分析领域 L7 和 Quick BI 持续合作共建提供更丰富的可视分析功能。
​ 赞
​ 回复
​ 踩
​ 举报

[百度 vs 高德-区域搜索指数](http://www.woshipm.com/evaluating/4149698.html)

# echarts

## json
<https://datav.aliyun.com/portal/school/atlas/area_selector#&lat=31.769817845138945&lng=104.29901249999999&zoom=4>
