```js
import * as echarts from 'echarts';

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
myChart.setOption({
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
});
```
上面代码会引入ECharts中所有图表和组件，如果不想引入所有，可以使用ECharts提供的按需引入的接口来打包必须的组件
```js
// 引入echarts核心模块，核心模块提供了ECharts使用必须要的接口
import * as echarts from 'echarts/core'
// 引入柱状图图表，图表后缀都为Chart
import {BarChart}from'echarts/charts'
// 引入提示框、标题、直角坐标系、数据集、内置数据转哈u能起组件，组件后缀都为Component
import { TitleComponent,TooltipComponent,GridComponent,DatasetComponent,TransformComponent, } from 'echarts/components'
// 标签自动布局、全局过渡动画等特性
import { LabelLayout,UniversalTransition } from 'echarts/features'
// 引入canvas渲染器，注意引入CanvasRenderer或者SVGRenderer是必须的一步
import { CanvasRenderer } from 'echarts/renderers'

// 注册必须的组件
echarts.use([TitleComponent,TooltipComponent,,GridComponent,,DatasetComponent,TransformComponent,BarChart,LabelLayout,UniversalTransition,CanvasRenderer])
// 接下来的使用就跟之前一样，初始化图表，设置配置项
var myChart=echarts.init(document.getElementById('main'))
myChart.setOption({
  // ...
})


```
# TypeScript
类型接口来组合出最小的EchartsOption类型。这个更严格的类型可以有效帮助你检查是否少加载了组件或者图表
```js
import * as echarts from 'echarts/core'
import { BarChart,
  // 系列类型的定义后缀都为SeriesOption
  BarSeriesOption,
  LineChart,
  LineSeriesOption,
} from 'echarts/charts'
import { TitleComponent,TitleComponentOption,TooltipComponent,TooltipComponentOption,GridComponent,GridComponentOption,
// 数据集组件
DatasetComponent,DatasetComponentOption,
// 内置数据转换器组件（filter、sort）
TransformComponent
  } from 'echarts/components'
import {LabelLayout,UniversalTransition}from'echarts/features'
import { CanvasRenderer } from 'echarts/renderers';
// 通过ComposeOption组合出一个只有必须组件和图表的Option类型
type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComopnentOption
  | DatasetComponentOption
>

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
])
const option:ECOption={
  // ...
}
```
