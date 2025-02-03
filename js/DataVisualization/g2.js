// https://www.bookstack.cn/read/g2-4.x/8cfb69bb3d2ed8d1.md
// tooltip
// 提示信息 (Tooltip)，是指当鼠标悬停在图形上时，以提示框的形式展示该点的数据，比如该点的值，数据单位等，帮助用户快速获取图形的关键数据。

// G2 提供的 Tooltip 组件由以下部分组成：

// image.png

// crosshairs: tooltip 辅助线，用于辅助定位数据在坐标系的位置，不同坐标系下的有不同的展现方式。
// 直角坐标系	极坐标
// image.png	image.png
// marker: 突出当前数据点的位置
// tooltip: 展示数据信息的内容框，我们使用 HTML 的方案，包含 title 以及 items 数据项信息，DOM 结构如下：
// 配置项详解
// 开启/关闭
// G2 提供了三个层级的 Tooltip 开关配置：

// Chart：控制整个图表的 tooltip 开关，当 chart.tooltip(false) 将 tooltip 关闭时，view 及 geometry 上的 tooltip 配置均不生效，整个图表 tooltip 关闭。
// View：控制当前 View 的 tooltip 开关，当 view.tooltip(false) 将 tooltip 关闭时，当前 view tooltip 将被关闭，其下所有 Geometry 几何标记的 tooltip 配置均不生效。
// Geometry：控制当前 Geometry 几何标记的 tooltip 开关，当 geometry.tooltip(false) 将 tooltip 关闭时，该 Geometry 的数据将不展示在 tooltip 内容框中 其中 Chart/View 上的 tooltip() 接口用于控制 tooltip 的显示样式配置，Geometry 上的 tooltip() 接口用于 tooltip 显示内容的配置。
// 最佳实践
// G2 4.0 中，为了达到功能的最大化，将一些针对特定图表的内置 tooltip 配置规则移除，所以用户需要自己进行配置，比如 marker 是否展示，crosshairs 是否展示等，下面就以一些特定图表类型为例，向大家展示 tooltip 的最佳配置：

// 折线图
// 对于折线，默认的 tooltip 展示效果如下：

// 2020-02-13 10-05-39.2020-02-13 10_06_17.gif

// 但是对于折线图，辅助线会更好得帮助我们定位数据，如下：

// chart.tooltip({
//   showCrosshairs: true, // 展示 Tooltip 辅助线
// });
// 对于柱状图，默认的 tooltip 展示效果如下：

// 2020-02-13 10-07-18.2020-02-13 10_08_00.gif

// 为了更聚焦，我们同样可以添加 crosshairs，效果如下：

// chart.tooltip({
//   showCrosshairs: true, // 展示 Tooltip 辅助线
// });
// 2020-02-13 10-12-12.2020-02-13 10_12_29.gif

// 当然我们建议的最佳实践是如下的效果，结合 active-region 交互行为，具体配置如下:

// chart.tooltip({
//   showMarkers: false, // 不展示 tooltip markers
// });
// chart.interaction('active-region'); // 使用 active-region 交互行为

// G2是一套基于图形语法理论的可视化底层引擎，以数据驱动，提供图形语法与交互语法，具有高度的易用性和扩展性。使用G2，你可以无需关注图表各种繁琐的实现细节，一条语句即可使用Canvas或SVG构建出各种各样
// 的可交互的统计图表
// 特性：
// - 完善的图形语法：数据到图形的映射，能够绘制出所有的图表。
// - 全新的交互语法：通过触发和反馈机制可以组合出各种交互行为，对数据进行探索。
// - 强大的View模块：可支持开发个性化的数据多维分析图形。
// - 双引擎渲染：Canvas或SVG任意切换。
// - 可视化组件体系：面向交互、体验优雅
// - 全面拥抱 TypeScript：提供完整的类型定义文件
// G2 4.0 升级指南
// 作为图形语法（the Grammar of Graphics）的前端实现，G2已经经历多个版本的迭代。本次G2 4.0是一个新的起点

// 在绘图前我们需要为G2准备一个DOM容器：
// <div id='c1'></div>
import {
  Chart
} from '@antv/g2'
const data = [{
    genre: 'Sports',
    sold: 275
  },
  {
    genre: 'Strategy',
    sold: 115
  },
  {
    genre: 'Action',
    sold: 120
  },
  {
    genre: 'Shooter',
    sold: 350
  },
  {
    genre: 'Other',
    sold: 150
  },
]
// Step 1: 创建Chart对象
const chart = new Chart({
  container: 'c1', // 指定图表容器ID
  width: 600, // 指定图表宽度
  height: 300, // 指定图表高度
})
// Step 2: 载入数据源
chart.data()
// Step 3: 创建图形语法，绘制柱状图
chart.interval().position('genre*sold')
// Step 4: 渲染图表
chart.render()
// G2的强大是由其背后的一套图形语法所支撑的，它基于《The Grammar of Graphics》（Leland Wikinson著）一书，是一套用来描述所有统计图表深层特性的语法规则，该语法回答了什么是统计图表这一问题，
// 以自底向上的方式组织最基本的元素形成更高级的元素。
// 由此，G2所构建出的图表是由一系列独立的图形语法元素组合而成的，包括数据、图形属性、几何标记、度量、坐标系、可视化组件、分面等等。所以，在G2中，我们通常这么描述一张图表：一张图表就是从数据到几
// 何标记对象的图形属性的一个映射，此外图形中还可能包含数据的统计变换，最后绘制在某个特定的坐标系中。
// 交互语法
// G2的图形语法本质上是将数据映射到图形的过程
// 在 G2 中，我们认为一个交互行为是由一系列交互环节组成，而每一个交互环节又由以下两部分组成：

// 触发，交互环节的触发，包括触发对象和触发事件
// 反馈，交互环节的结果

// 使用 point 几何标记绘制点图；
// 使用 position 通道， 将对应的变量映射到 x 和 y 位置空间上。

// 形状
// 同样， 我们可以通过点形状来区分不同手机的数据， 所以我们又将 phone 字段映射至 shape 图形通道， 并指定具体的 shape 形状：

chart
  .point() // .line() .area()
  .position('feature*value')
  .color('phone')
  .shape('phone', ['circle', 'square', 'triangle']);
// 叠加几何标记
// 当然我们还可以进行几何标记的叠加以实现混合图表的绘制：
chart
  .area()
  .position('feature*value')
  .color('phone');
chart
  .line()
  .position('feature*value')
  .color('phone');
chart
  .point()
  .position('feature*value')
  .color('phone')
  .shape('circle');
// 我们还可以通过 adjust() 接口将数据进行调整，让数据以层叠的方式进行展示，即绘制层叠面积图：
chart
  .area()
  .adjust('stack').position('feature*value')
  .color('phone');
chart
  .line()
  .adjust('stack').position('feature*value')
  .color('phone');
chart
  .point()
  .adjust('stack').position('feature*value')
  .color('phone')
  .shape('circle');

// 坐标系变化
// 我们还可以通过 chart.coordinate() 接口，一步将以上图形切换至极坐标系下：

chart.coordinate('polar');

// 大小
// 为了让点更清晰， 我们通过 size 图形通道适当放大这些点。

// https://www.yuque.com/seeconf/2020/ysufx8
// 为了解决可视化图表在静态渲染中遇到的裁剪、 碰撞问题， 我们将约束布局引入到可视化中。
// 使用约束给我们带来了哪些好处呢？
// 1. 将画布布局的问题转化成数学求解问题
// 2. 解除了因为组件之间的位置依赖关系带来的布局代码耦合
// 3. 强大的布局能力， 是响应式图表的基础

// 图表容器
// width,height 设置图标宽度、高度
// autoFit
// 图表是否自适应容器宽高。当 autoFit 设置为 true 时，width 和 height 的设置将失效。
// appendPadding: padding 画布的 padding 值， 代表图表在上右下左的间距， 可以为单个数字 16， 或者数组[16, 8, 16, 8] 代表四个方向， 或者开启 auto， 由底层自动计算间距。
// 额外增加的 appendPadding 值， 在 padding 的基础上， 设置额外的 padding 数值， 可以是单个数字 16， 或者数组[16, 8, 16, 8] 代表四个方向。
// renderer: 设置图表渲染方式为 canvas 或 svg。
// pixelRatio: 设置图表渲染的像素比， 和底层的 devicePixelRatio 含义一致， 一般不用设置， 除非在页面有整体 scale 的情况下， 可以自定义。
// limitInPlot: 是否对超出坐标系范围的 Geometry 进行剪切。

// 数据映射
// data required array object: 设置图表数据源。 数据源为对象集合， 例如：
[{
  time: '1991',
  value: 20
}, {
  time: '1992',
  value: 20
}]

// xField required string
// 图形在 x 方向对应的数据字段名， 一般是横向的坐标轴对应的字段。 比如： 要看不同班级的人数情况， 那么班级字段就是对应的 xField。

// yFieldrequiredstring
// 图形在 y 方向对应的数据字段名， 一般是纵向的坐标轴对应的字段。 比如： 要看不同班级的人数情况， 那么人数字段就是对应的 yField。

// meta optional object
// 全局化配置图表数据元信息， 以字段为单位进行配置， 来定义数据的类型和展示方式。 在 meta 上的配置将同时影响所有组件的文本信息。

// 细分配置项名称 类型 功能描述
// alias string 字段的别名
// formatter

// function callback 方法， 对该字段所有值进行格式化处理
// values string[] 枚举该字段下所有值
// range number[] 字段的数据映射区间， 默认为[0, 1]

// type optional jitter | stack | symmetric | dodge jitter
// 数据调整类型， 不建议修改。

// colorField optional string
// 点颜色映射对应的数据字段名。

// 图形样式
// color optional string | string[] | Function
// 指定点的颜色。 如没有配置 colorField， 指定一个单值即可。 对 colorFiled 进行了配置的情况下， 即可以指定一系列色值， 也可以通过回调函数的方法根据对应数值进行设置。

// 默认配置： 采用 theme 中的色板。

// size optional
// 指定点的大小。 如没有配置 sizeField， 指定一个即可。 对 sizeFiled 进行了配置的情况下， 可以指定大小数组[minSize, maxSize]， 也可以通过回调函数的方法根据对应数值进行设置。

// shapeField optional string
// 点形状映射对应的数据字段名。

// shape optional
// 指定点的形状。 如没有配置 shapeField， 指定一个即可。 对 shapeField 进行了配置的情况下， 可以指定形状数组['cicle', 'square']， 也可以通过回调函数的方法根据对应数值进行设置。

// 内置图形： circle, square, bowtie, diamond, hexagon, triangle, triangle - down, hollow - circle, hollow - square, hollow - bowtie, hollow - diamond, hollow - hexagon, hollow - triangle, hollow - triangle - down, cross, tick, plus, hyphen, line.

// pointStyle optional object
// 设置折线样式。 pointStyle 中的fill会覆盖 color 的配置。 pointStyle 可以直接指定， 也可以通过 callback 的方式， 根据数据指定单独的样式。

// 默认配置：

// 细分配置 类型 功能描述
// fill string 填充颜色
// stroke string 描边颜色
// lineWidth number 线宽
// lineDash number 虚线显示
// opacity number 透明度
// fillOpacity number 填充透明度
// strokeOpacity number 描边透明度
// 直接指定
{
  pointStyle: {
    fill: 'red',
    stroke: 'yellow',
    opacity: 0.8
  },
}
// Function
{
  pointStyle: (x, y, colorField) => {
    if (colorField === 'male') {
      return {
        fill: 'green',
        stroke: 'yellow',
        opacity: 0.8,
      }
    }
    // TODO
    return {
      fill: 'red',
      stroke: 'yellow',
      opacity: 0.8,
    }
  }
}


// Scatter
import {
  Scatter
} from '@antv/g2'

fetch('https://gw.alipayobjects.com/os/bmw-prod/0b37279d-1674-42b4-b285-29683747ad9a.json')
  .then((res) => res.json())
  .then((data) => {
    const scatterPlot = new Scatter('container', {
      appendPadding: 30,
      data,
      xField: 'change in female rate',
      yField: 'change in male rate',
      sizeField: 'pop',
      colorField: 'continent',
      color: ['#ffd500', '#82cab2', '#193442', '#d18768', '#7e827a'],
      size: [4, 30],
      shape: 'circle',
      pointStyle: {
        fillOpacity: .8,
        stroke: '#bbb',
      },
      xAxis: {
        min: -25,
        max: 5,
        grid: {
          line: {
            style: {
              stroke: '#eee'
            }
          }
        },
        line: {
          style: {
            stroke: '#aaa'
          }
        }
      },
      yAxis: {
        line: {
          style: {
            stroke: '#aaa'
          }
        }
      },
      quadrant: {
        xBaseline: 0,
        yBaseline: 0,
        labels: [{
          content: 'Male decrease,\nfemale increase'
        }, {
          content: 'Female decrease,\nmale increase'
        }, {
          content: 'Female & male decrease'
        }, {
          content: 'Female &\n male increase'
        }]
      }
    })
    scatterPlot.render()
  })

// Chart
import {
  Chart,
  registerAnimation
} from '@antv/g2'
registerAnimation('label-appear', (element, animateCfg, cfg) => {
  const label = element.getChildren()[0]
  const coordinate = cfg.coordinate
  const startX = coordinate.start.x
  const finalX = label.attr('x')
  const labelContent = label.attr('text')
})

import {
  Chart
} from '@antv/g2'
const data = [{
    x: '分类一',
    y: [76, 100]
  },
  {
    x: '分类二',
    y: [56, 108]
  },
]
const chart = new Chart({
  container: 'container',
  autoFit: true,
  height: 500
})
chart.data(data)
chart.scale('y', {
  nice: true
})
chart.tooltip({
  showMarkers: false
})
chart.interaction('element-active')
chart.interval().position('x*y').animate({
  appear: {
    animation: 'zoom-in'
  }
})
chart.render()

// 分面face() 方法
// changeData()=data()+render();clear();scale(defs:object);
