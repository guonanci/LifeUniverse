# title标题组件
主标题和副标题.在 ECharts 2.x 中单个 ECharts 实例最多只能拥有一个标题组件。但是在 ECharts 3 中可以存在任意多个标题组件，这在需要标题进行排版，或者单个实例中的多个图表都需要标题时会比较有用。

## id,show,text,link,target,textStyle
id默认不指定，指定则可用于在option或API中引用组件；text:\n,target:'self/blank',textStyle:{color,fontStyle:'normal/italic/oblique'字体风格,fontWeight:'normal/bold/bolder/lighter',fontFamily:'sans-serif/serif/monospace/Arial/Courier New/Microsoft YaHei,lineHeight,width,height,textBorderColor,textBorderWidth/Type:'solid/dashed/dotted/dash array,textBorderDashOffset,textShadowColor,textShadowBlur,textShadowOffsetX,textShadowOffsetY,overflow超出宽度是否截断或换行，配置width时有效，‘truncate’截断，并在末尾显示ellipsis配置的文本默认为……break换行，breakAll英语拉丁文中强制单词内换行'}
textStyle.ellipsis/rich自定义富文本样式，可以在标签中丰富效果。
```js
label:{
  //在文本中，对部分文本采用rich中定义样式
  // 这里需要在文本中使用标记符号：`{styleName|text content text content}标记样式名
  formatter:[
    '{a|这段文本采用样式a}',
    '{b|这段文本采用样式a}这段用默认样式{x|这段用样式x}',
  ].join('\n'),
  rich:{
    a:{color:'red',lineHeight:10},
    b:{backgroundColor:{image:'xxx/xxx.jpg'},height:40},
    x:{fontSize:18,fontFamily:'Microsoft YaHei',borderColor:'#449933',borderRadius:4},//<style_name>
  }
}
```
## subtext,sublink副标题,subtarget,subtextStyle.align,verticalAlign...
## triggerEvent是否触发事件，padding默认为5【top,right,btm,left】
itemGap主副标题之间的间距，
## zlevel
所有图形的zlevel值，用于canvas分层，不同zlevel值的图形会放置在不同canvas中，常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独zlevel，需要注意过多canvas内存开销增大，手机端需要谨慎使用以防崩溃。
## z
组件的所有图形的z值。控制图形的前后顺序。z值小的图形会被z值大的图形覆盖。

z相比zlevel优先级更低，而且不会创建新的 Canvas。
## top,right,bottom,left
title 组件离容器左侧的距离。

left 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right'。

如果 left 的值为'left', 'center', 'right'，组件会根据相应的位置自动对齐。
如果 top 的值为'top', 'middle', 'bottom'，组件会根据相应的位置自动对齐。
# legend
图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。
单个 echarts 实例中可以存在多个图例组件，会方便多个图例的布局。

当图例数量过多时，可以使用 滚动图例（垂直） 或 滚动图例（水平），参见：legend.type
## type
plain,scroll,when scroll:legend.scrollDataIndex,pageButtonItemGap,pageButtonGap,page...
## orient = 'horizontal'
图例列表的布局朝向。
## align='auto'
图例标记和文本的对齐。默认自动，根据组件的位置和 orient 决定，当组件的 left 值为 'right' 以及纵向布局（orient 为 'vertical'）的时候为右对齐，即为 'right'。
## itemStyle.borderGap
用于指定线段末端的绘制方式，可以是：

'butt': 线段末端以方形结束。
'round': 线段末端以圆形结束。
'square': 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。
## itemStyle.borderJoin = 'inherit'
从 v5.0.0 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

'bevel': 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
'round': 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
'miter': 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 borderMiterLimit 属性看到效果。
默认值为 'bevel'。 更多详情可以参考 MDN lineJoin。
## itemStyle.decal
图形的贴花图案，在 aria.enabled 与 aria.decal.show 都是 true 的情况下才生效。

如果为 'none' 表示不使用贴花图案。
## lineStyle.cap,join,miterLimit
## symbolRotate
## formatter
## selectedMode
图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。

除此之外也可以设成 'single' 或者 'multiple' 使用单选或者多选模式。
## inactiveColor,inactiveBorderColor/Width
## selected
## textStyle.backgroundColor
```js
文字块背景色。

可以使用颜色值，例如：'#123234', 'red', 'rgba(0,23,11,0.3)'。

也可以直接使用图片，例如：

backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
当使用图片的时候，可以使用 width 或 height 指定高宽，也可以不指定自适应。
```
## tooltip
配置项同tooltip，默认不显示。
```js
legend: {
    formatter: function (name) {
        return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
    },
    tooltip: {
        show: true
    }
}
```
## pageIcons
## selectorLabel
obj
## selectorPosition
end、start 默认情况下，图例横向布局的时候，选择器放在图例的尾部；图例纵向布局的时候，选择器放在图例的头部。
# grid
直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。可以在网格上绘制折线图，柱状图，散点图（气泡图）。

在 ECharts 2.x 里单个 echarts 实例中最多只能存在一个 grid 组件，在 ECharts 3 中可以存在任意个 grid 组件。

## containLabel
boolean
grid 区域是否包含坐标轴的刻度标签。

containLabel 为 false 的时候：
grid.left grid.right grid.top grid.bottom grid.width grid.height 决定的是由坐标轴形成的矩形的尺寸和位置。
这比较适用于多个 grid 进行对齐的场景，因为往往多个 grid 对齐的时候，是依据坐标轴来对齐的。
containLabel 为 true 的时候：
grid.left grid.right grid.top grid.bottom grid.width grid.height 决定的是包括了坐标轴标签在内的所有内容所形成的矩形的位置。
这常用于『防止标签溢出』的场景，标签溢出指的是，标签长度动态变化时，可能会溢出容器或者覆盖其他组件。
## backgroundColor
网格背景色，默认透明。

颜色可以使用 RGB 表示，比如 'rgb(128, 128, 128)' ，如果想要加上 alpha 通道，可以使用 RGBA，比如 'rgba(128, 128, 128, 0.5)'，也可以使用十六进制格式，比如 '#ccc'

注意：此配置项生效的前提是，设置了 show: true。
## tooltip
Object
本坐标系特定的 tooltip 设定。

提示框组件的通用介绍：

提示框组件可以设置在多种地方：

可以设置在全局，即 tooltip

可以设置在坐标系中，即 grid.tooltip、polar.tooltip、single.tooltip

可以设置在系列中，即 series.tooltip

可以设置在系列的每个数据项中，即 series.data.tooltip

所有属性
{ show , trigger , axisPointer , position , formatter , valueFormatter , backgroundColor , borderColor , borderWidth , padding , textStyle , extraCssText }
# xAxis
直角坐标系 grid 中的 x 轴，一般情况下单个 grid 组件最多只能放上下两个 x 轴，多于两个 x 轴需要通过配置 offset 属性防止同个位置多个 x 轴的重叠。
## gridIndex
## alignTicks
在多个 x 轴为数值轴的时候，可以开启该配置项自动对齐刻度。只对'value'和'log'类型的轴有效。
## position
top/bottom,第二个 x 轴视第一个 x 轴的位置放在另一侧。
注：若未将 xAxis.axisLine.onZero 设为 false , 则该项无法生效
## type='category'
value,category,time,log  类目轴，适用于离散的类目数据。为该类型时类目数据可自动从 series.data 或 dataset.source 中取，或者可通过 xAxis.data 设置类目数据。

'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。
## nameLocation
'start' 'middle/center,end'
## nameTextStyle
overflow:none/truncate/break/breakAll,ellipsis='...',rich
## nameGap,nameRotate,inverse,
## max
'dataMax'
## scale
只在数值轴中（type: 'value'）有效。

是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用。

在设置 min 和 max 之后该配置项无效。
## splitNumber=5
坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整。

在类目轴中无效。
