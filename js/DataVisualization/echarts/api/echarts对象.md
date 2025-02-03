全局 echarts 对象，在 script 标签引入 echarts.js 文件后获得，或者在 AMD 环境中通过 require('echarts') 获得。

*所有属性*
# init
function
```js
(dom?: HTMLDivElements|HTMLCanvasElement,theme?:Object|string,opts?:{
  devicePixelRatio?: number,
  renderer?: string,
  useDirtyRect?:boolean,
  useCoarsePointer.
  pointerSize,
  ssr,width,height,locale
})=>ECharts
```
创建一个 ECharts 实例，返回 echartsInstance，不能在单个容器上初始化多个 ECharts 实例。

参数解释：
- dom
实例容器，一般是一个具有高度的div元素，只有在设置了opts.ssr开启了服务端渲染后该参数才是可选。
也支持直接使用canvas元素作为容器，这样绘制完图表可以直接将 canvas 作为图片应用到其它地方，例如在 WebGL 中作为贴图，这跟使用 getDataURL 生成图片链接相比可以支持图表的实时刷新。
- theme
应用的主题，可以是一个主题的配置对象，也可以是使用已经经过 echarts.registerTheme 注册的主题名称。参见 ECharts 中的样式简介。
- opts
renderer 渲染模式，支持'canvas'或者'svg'。参见 使用 Canvas 或者 SVG 渲染。
ssr 是否使用服务端渲染，只有在 SVG 渲染模式有效。开启后不再会每帧自动渲染，必须要调用 renderToSVGString 方法才能得到渲染后 SVG 字符串。
useDirtyRect是否开启脏矩形渲染，只有在 Canvas 渲染模式有效，默认为false。参见 ECharts 5 新特性。
useCoarsePointer 是否扩大可点击元素的响应范围。null 表示对移动设备开启；true 表示总是开启；false 表示总是不开启。参见增加交互响应范围。
pointerSize 扩大元素响应范围的像素大小，配合 opts.useCoarsePointer使用。
width 可显式指定实例宽度，单位为像素。如果传入值为null/undefined/'auto'，则表示自动取 dom（实例容器）的宽度。
height 可显式指定实例高度，单位为像素。如果传入值为null/undefined/'auto'，则表示自动取 dom（实例容器）的高度。
locale 使用的语言，内置 'ZH' 和 'EN' 两个语言，也可以使用 echarts.registerLocale 方法注册新的语言包。目前支持的语言见 src/i18n。

如果不指定主题，也需在传入opts前先传入null，如：
```js
const chart = echarts.init(dom, null, {renderer: 'svg'});
```
如果容器是隐藏的，ECharts可能会获取不到div高度导致初始化失败，这时可以明确指定div的style.width/height，或者div显示后手动调用resize调整尺寸。在使用服务端渲染的模式下，必须通过opts.width和opts.height设置高和宽。

# connect
```js
(group:string|Array)
多个图表实例实现联动。

参数：

group group 的 id，或者图表实例的数组。
示例：

// 分别设置每个实例的 group id
chart1.group = 'group1';
chart2.group = 'group1';
echarts.connect('group1');
// 或者可以直接传入需要联动的实例数组
echarts.connect([chart1, chart2]);

```
# dispose
# getInstanceByDom
# use
```js
使用组件，配合新的按需引入的接口使用。

注意：该方法必须在echarts.init之前使用。

// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import {
    BarChart
} from 'echarts/charts';
// 引入直角坐标系组件，组件后缀都为 Component
import {
    GridComponent
} from 'echarts/components';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import {
    CanvasRenderer
} from 'echarts/renderers';

// 注册必须的组件
echarts.use(
    [GridComponent, BarChart, CanvasRenderer]
);
```
# registerMap
```js
{
  mapName,opt:{geoJSON:Object|string,specialAreas?:Object}
}
| {
  mapName,opt:{svg:Object|string}
}
|{
  mapName,geoJSON:Object|string,specialAreas?:Object
}
```
注册可用的地图，只在geo组件或者map图表类型中使用。
- mapName
地图名称，在geo或者map图表类型中设置的map对应的就是该值。
- opt
geoJSON 可选。GeoJson 格式的数据，具体格式见 https://geojson.org/。可以是 JSON 字符串，也可以是解析得到的对象。这个参数也可以写为 geoJson，效果相同。
svg 可选。从 v5.1.0 开始支持SVG 格式的数据。可以是字符串，也可以是解析得到的 SVG DOM 对象。更多信息参见 SVG 底图。

specialAreas 可选。将地图中的部分区域缩放到合适的位置，可以使得整个地图的显示更加好看。只在 geoJSON 中生效，svg 中不生效。
```js
示例 USA Population Estimates：

echarts.registerMap('USA', usaJson, {
    // 把阿拉斯加移到美国主大陆左下方
    Alaska: {
        // 左上角经度
        left: -131,
        // 左上角纬度
        top: 25,
        // 经度横跨的范围
        width: 15
    },
    // 夏威夷
    Hawaii: {
        left: -110,
        top: 28,
        width: 5
    },
    // 波多黎各
    'Puerto Rico': {
        left: -76,
        top: 26,
        width: 2
    }
});
注：如果你在项目中使用了按需引入，从 v5.3.0 开始registerMap必须要在引入地图组件后才能使用。
```
# getMap
# registerTheme
# registerLocale
# setPlatformAPI
# graphic
