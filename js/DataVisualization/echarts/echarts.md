```js
import * as echarts from 'echarts'
var chartDom=document.getElementById('main')
var myChart=echarts.init(chartDom)
var option
option={
  xAxis:{
    type:'category',
    data:['Mon','Tue','Wed',...]
  },
  yAxis:{
    type:'value'
  },
  series: [
    {
      data:[820,900,1100,700],
      type:'line',
      smooth:true
    }
  ]
}
option&&myChart.setOption(option)

```

https://echarts.apache.org/examples/zh/index.html#chart-type-line
https://echarts.apache.org/examples/zh/editor.html?c=line-smooth 深色模式、无障碍花纹

# feature
https://echarts.apache.org/zh/feature.html
兼容IE9、10、11，chrome、Firefox、Safari，底层依赖矢量图形库ZRender，提供直观，交互丰富，高度个性化定制的数据可视化图表。
## 丰富的可视化类型
常规的折线图、柱状图、散点图、饼图、K线图，用于统计的盒形图，用于地理数据可视化的地图、热力图、线图，用于关系数据可视化的关系图、treemap、旭日图，多维数据可视化的平行坐标，用于BI的漏斗图、仪表盘，支持图与图之间的混搭。除了已经内置的包含了丰富功能的图表，还提供饿了自定义系列，只需要传入一个renderItem函数，就可以从数据映射到任何你想要的图形，更棒的是这些都还能和已有的交互组件结合使用，而不需要操心其他事情。

你可以在下载界面下载包含所有图表的构建文件，如果只是需要其中一两个图表，又觉得包含所有图表的构建文件太大，也可以在在线构建中选择需要的图表类型后自定义构建。
## 多种数据格式无需转换直接使用
dataset属性（4.0+）支持直接传入二维表、key-value等多种格式的数据源，通过简单的设置encode属性就可以完成从数据到图形的映射，更符合可视化的直觉，省去了大部分场景下数据转换的步骤，多个组价能够共享一份数据，不用克隆。为了配合大数据量的展现，ECharts还支持输入TypedArray格式的数据，TypedArray在大数据量的存储中可以占用更少的内存，对GC友好等等特性也可以大幅提升可视化应用的性能。
## 千万数据的前端展现
通过增量渲染技术（4.0+），配合各种细致的优化，ECharts能够展现千万级数据量，并且在这个数据量级依然能够流畅的缩放平移等交互。
几千万的地理坐标数据就算使用二进制存储也要上白MB的空间，因此ECharts同事提供了对*流加载*（4.0+）的支持，可以使用WebSocket或者对数据分块后加载，加载多少渲染多少！不需要漫长的等待所有数据加载后再绘制。
## 移动端优化
针对移动端交互做了细致的优化，小屏上适合用手指在坐标系缩放、平移，PC端用鼠标缩放（滚轮）、平移。*细粒度的模块化和打包机制*可以让ECharts在移动端也拥有很小的体积，可选的SVG渲染模块让移动端的内存占用不再捉襟见肘。
## 多渲染方案，跨平台使用
Canvas、SVG、VML（低版本IE），SVG减少移动端内存，canvas轻松应对大数据量和特效。配合node-canvas，高效的SSR，和微信小程序团队合作，适配微信小程序。pyecharts、R语言的echarty，Julia语言。
## 深度的交互式数据探索
从数据中发掘信息的重要手段，‘总览为先，缩放过滤按需查看细节’是数据可视化交互的基本需求。*图例、视觉映射、数据区域缩放、tooltip、数据筛选*等开箱即用的交互组件，可以对数据进行多维度数据筛取、视图缩放、展示细节等交互细节。
## 多维数据的支持以及丰富的视觉编码手段
对多维数据的支持，除了加入了平行坐标等常见的多维数据可视化工具外，对于传统的散点图等等，传入的数据也可以是多维度的，视觉映射组件visualMap提供的丰富的视觉编码，能够将不同维度的数据映射到颜色、大小、透明度、明暗度等不同的视觉通道。
## 动态数据
由数据驱动，数据的改变驱动图表展现的改变。找到两组数据间差异，然后通过合适动画去展现数据的变化。配合timeline组件能够在更高的时间维度上表现数据的信息
### 动画实现原理
## 绚丽特效
针对线数据、点数据等地理数据的可视化提供了吸引眼球的特效
## 通过GL实现更多更强大绚丽的三维可视化
想要在VR，大屏场景里实现三维的可视化效果，提供了基于WebGL的ECharts GL，三维地球、建筑群，人口分布的柱状图，不同层级的画面配置项
## 无障碍访问
‘可视化’，与‘看得见’联系在一起，


`init(),clear(),setOption()`
`emphasis.focus,label.show,`
# dataset
是管理数据的组件，ECharts4开始支持，虽然每个系列都可以在series.data中设置数据，这样数据就可以被多个组件复用，也方便*数据和其他配置分离*的配置风格。运行时，数据最常改变，其他配置大多并不会改变。
```js
// 数据设置在系列series中：
option={
  xAxis:{
    type:'category',
    data:['Matcha Latte','Milk Tea','Cheese Cocoa','Wlanut Brownie']
  },
  yAxis:{},
  series:[
    {
      type:'bar',
      name:'2015',
      data:[89.3,9,1,1]
    },
    {
      type:'bar',
      name:'2016',
      data:[89.3,9,2,1]
    },
  ]
}
```
这种方式优点是，适合对一些特殊的数据结构，‘树’，‘图’，超大数据，进行一定的数据类型定制，缺点，用户线处理数据，把数据分割设置到各个系列和类目轴中。此外，不利于多个系列共享一份数据，也不利于基于原始数据进行图表类型、系列的映射安排。
dataset中设置数据的好处：
- 能够贴近数据可视化常见思维方式。提供数据；指定数据到视觉的映射，形成图表
- 数据和其他配置可以被分离开，数据常变，其他配置长不变，分开易于分别管理
- 复用
 支持更多的常用格式，二维数组、对象数组，一定程度上避免使用这为了数据格式而转换。
```js
option={
  legend:{},
  tooltip:{},
  dataset:{
    source:[
      ['product','2015','2016','2017'],
      ['Matcha Latte',43,3,85,93],
      ['Milk Tea',83.1,73.4,55.1],
      ['Cheese Cocoa',86.4,65,32]
    ]
  },
  //声明一个x轴，类目轴category，默认情况下，类目轴对应到dataset第一列
  xAxis:{type:'category'},
  yAixs:{},//数值轴
  //声明多个bar系列，默认情况下，每个系列会自动对应到dataset的每一列
  series:[{type:'bar'},{type:'bar'},{type:'bar'}]
}
// 或者也可以使用常见的对象数组格式：
option={
  legend:{},
  tooltip:{},
  dataset:{
    //用dimensions指定了维度的顺序。直角坐标系中，如果x轴type为category，
    // 默认把第一个维度映射到x轴上，后面维度映射到Y轴上
    // 如果不指定dimensions，也可以通过指定series.encode
    // 完成映射，参见后文
    dimensions:['product','2015','2016','2017'],
    source:[
      {product:'Macha Latte','2015'43.3,'2016':85,'2017':93},
      // ...
    ]
  },
  xAxis:{type:'category'},
  yAixs:{},
  series:[{type:'bar'},{type:'bar'},{type:'bar'}]
}
```
## 数据到图形的映射series.encode
- 指定数据集的column、row映射为系列`series.seriesLayoutBy`,def:column
- 指定维度映射的规则：如何从dataset的维度（一个维度的意思是一行、列）映射到坐标轴（如X轴、Y轴）、提示框tooltip、标签label、图形元素大小颜色等visualMap，可以使用series.encode属性，以及visualMap组件来配置（如果需要映射颜色大小等视觉维度的话），上面例子中，没有给出这种颜色配置，那么ECharts就按最常见的理解进行默认映射：X坐标轴声明为类目轴，默认情况下会自动对应到dataset.source中第一列；三个柱图系列，对应到dataset.source中后面每一列。

下面详细解释这些映射的设定。

把数据集dataset的行或列映射为系列series

sourceHeader维度名，dataset.dimensions,series.dimensions
dimension type，如ordinal、number、time,float,int axis.type is'time'；null表示不想设置维度名。series.dimensioins优先于dataset.dimension。

```js
var option={
  dataset:{
    source:[
      ['score','amount','product'],
      [89,58212,'Matcha Latte'],
      [892,58212,'Matcha Lattes'],
    ]
  },
  xAxis:{},
  yAxis:{type:'category'},
  series:[
    {
      type:'bar',
      encode:{
        x:'amount',//将‘amount’列映射到x轴
        y:'product'
      }
    }
  ]
}
```
series.encode声明的基本结构：冒号左边是坐标系、标签等特定名称x、y、tooltip。冒号右边是数据中的维度名（string格式）或者维度序号-number格式，0开始计数。可以指定一个或多个维度，
类目轴，

```js
答： 关于标签的显示 label.formatter，现在支持引用特定维度的值，例如：

series: {
  label: {
    // `'{@score}'` 表示 “名为 score” 的维度里的值。
    // `'{@[4]}'` 表示引用序号为 4 的维度里的值。
    formatter: 'aaa{@product}bbb{@score}ccc{@[4]}ddd';
  }
}
问：如何让第 2 列和第 3 列显示在提示框（tooltip）中？

答：

option = {
  series: {
    encode: {
      tooltip: [1, 2]
      // ...
    }
    // ...
  }
};
问：数据里没有维度名，那么怎么给出维度名？

答：

var option = {
  dataset: {
    dimensions: ['score', 'amount'],
    source: [
      [89.3, 3371],
      [92.1, 8123],
      [94.4, 1954],
      [85.4, 829]
    ]
  }
};
问：如何把第三列映射为气泡图的点的大小？
var option={
  dataset:{
    source: [
      [12, 323, 11.2],
      [23, 167, 8.3],
      [81, 284, 12],
      [91, 413, 4.1],
      [13, 287, 13.5]
    ]
  },
  visualMap:{
    show:false,dimension:2,//第三列
    min:2,max:15,inRange:{symbolSize:[5,60]}//气泡尺寸，5像素到60像素
  },
  xAxis:{},
  yAxis:{},
  series:{type:'scatter'}
}
```
目前并非所有图表都支持 dataset。支持 dataset 的图表有： line、bar、pie、scatter、effectScatter/parallel/candlestick/map/funnel/custom

# data transform数据转换
V5，方法transform，新的数据集，`filter/sort/regression/boxplot/cluster/aggregate(todo)`，可以做这些事情：把数据分成多份，用不同饼图展示、统计运算，展示结果、用某些数据可视化算法处理数据，展示结果、数据排序、去除或只选择数据项`dataset.transform`
```js
var option={
  dataset: [
    {
      // 这个 dataset 的 index 是 `0`。
      source: [
        ['Product', 'Sales', 'Price', 'Year'],
        ['Cake', 123, 32, 2011],
        ['Cereal', 231, 14, 2011],
        ['Tofu', 235, 5, 2011],
        ['Dumpling', 341, 25, 2011],
        ['Biscuit', 122, 29, 2011],
        ['Cake', 143, 30, 2012],
        ['Cereal', 201, 19, 2012],
        ['Tofu', 255, 7, 2012],
        ['Dumpling', 241, 27, 2012],
        ['Biscuit', 102, 34, 2012],
        ['Cake', 153, 28, 2013],
        ['Cereal', 181, 21, 2013],
        ['Tofu', 395, 4, 2013],
        ['Dumpling', 281, 31, 2013],
        ['Biscuit', 92, 39, 2013],
        ['Cake', 223, 29, 2014],
        ['Cereal', 211, 17, 2014],
        ['Tofu', 345, 3, 2014],
        ['Dumpling', 211, 35, 2014],
        ['Biscuit', 72, 24, 2014]
      ]
      // id: 'a'
    },
    {
      // 这个 dataset 的 index 是 `1`。
      // 这个 `transform` 配置，表示，此 dataset 的数据，来自于此 transform 的结果。
      transform:{
        type:'filter',
        config:{dimension:'Year',value:2011}
      }
      //我们还可以设置这些可选属性：fromDatasetIndex或fromDatasetId，指定了，transform 的输入，来自于哪个 dataset。例如，
      // `fromDatasetIndex: 0` 表示输入来自于 index 为 `0` 的 dataset 。又例如，
      // `fromDatasetId: 'a'` 表示输入来自于 `id: 'a'` 的 dataset。
      // 当这些属性都不指定时，默认认为，输入来自于 index 为 `0` 的 dataset 。
    },
    {
       // 这个 dataset 的 index 是 `2`。
      // 同样，这里因为 `fromDatasetIndex` 和 `fromDatasetId` 都没有被指定，
      // 那么输入默认来自于 index 为 `0` 的 dataset 。
      transform: {
        // 这个类型为 "filter" 的 transform 能够遍历并筛选出满足条件的数据项。
        type: 'filter',
        // 每个 transform 如果需要有配置参数的话，都须配置在 `config` 里。
        // 在这个 "filter" transform 中，`config` 用于指定筛选条件。
        // 下面这个筛选条件是：选出维度（ dimension ）'Year' 中值为 2012 的所有
        // 数据项。
        config: { dimension: 'Year', value: 2012 }
      }
    },
    {
      // 这个 dataset 的 index 是 `3`。
      transform: {
        type: 'filter',
        config: { dimension: 'Year', value: 2013 }
      }
    }
  ],
  series: [
    {
      type: 'pie',
      radius: 50,
      center: ['25%', '50%'],
      // 这个饼图系列，引用了 index 为 `1` 的 dataset 。也就是，引用了上述
      // 2011 年那个 "filter" transform 的结果。
      datasetIndex: 1
    },
    {
      type: 'pie',
      radius: 50,
      center: ['50%', '50%'],
      datasetIndex: 2
    },
    {
      type: 'pie',
      radius: 50,
      center: ['75%', '50%'],
      datasetIndex: 3
    }
  ]
}
```
- 外部的数据转换器
除了上述内置的数据转换器外，我们还可以使用外部。定制更丰富的功能，第三方库ecStat。首先要注册外部数据转换器，
```js
echarts.registerTransform(ecStatTransfrom(ecStat).regression)
option={
  dataset:[
    {
      source:rawData
    },
    {
      transform:{
        //名空间ecStat，内置数据转换器如filter、sort没有名空间
        type:'ecStat:regression',
        config:{
          //外部数据转换器所需的参数
          method:'exponential'
        }
      }
    }
  ],
   xAxis: { type: 'category' },
  yAxis: {},
  series: [
    {
      name: 'scatter',
      type: 'scatter',
      datasetIndex: 0
    },
    {
      name: 'regression',
      type: 'line',
      symbol: 'none',
      datasetIndex: 1
    }
  ]
}
```
一些使用echarts-stat的例子：聚集aggregate、直方图histogram、简单聚类clustering、线性回归线linear regression、指数回归线exponential regression，对数回归线logarithmic regression、多项式回归线polynonmial regression
# 坐标轴
X轴、y轴都轴线axisLine、刻度axisTick、刻度标签axisLabel、轴标题四个部分组成，部分图表中还有网格线来帮助查看和计算数据。
# 数据的视觉映射
数据可视化是数据到视觉元素的映射过程，这个过程也可称为视觉编码，视觉元素也可称为视觉通道。
ECharts的每种图表本身内置了这种映射过程，比如折线图映射到‘线’，柱状图映射到‘长度’，一些更复杂，关系图、事件河流图、树图。视觉元素有图形类别symbol、大小symbolSize；颜色color，opacity、colorAlpha颜色透明度；明暗度colorLightness、饱和度colorSaturation、色调colorHue。
- 数据和维度
线性表、树、图，dataItem的集合，value和其他信息，一维或者多维-数组。
例如，series.data 最常见的形式，是“线性表“，即一个普通数组：
```js
series: {
  data: [
    {
      // 这里每一个项就是数据项（dataItem）
      value: 2323, // 这是数据项的数据值（value）
      itemStyle: {}
    },
    1212, // 也可以直接是 dataItem 的 value，这更常见。
    2323, // 每个 value 都是“一维“的。
    4343,
    3434
  ];
}

series: {
  data: [
    {
      // 这里每一个项就是数据项（dataItem）
      value: [3434, 129, '圣马力诺'], // 这是数据项的数据值（value）
      itemStyle: {}
    },
    [1212, 5454, '梵蒂冈'], // 也可以直接是 dataItem 的 value，这更常见。
    [2323, 3223, '瑙鲁'], // 每个 value 都是“三维“的，每列是一个维度。
    [4343, 23, '图瓦卢'] // 假如是“气泡图“，常见第一维度映射到x轴，
    // 第二维度映射到y轴，
    // 第三维度映射到气泡半径（symbolSize）
  ];
}
```
在图表中，往往默认把 value 的前一两个维度进行映射，比如取第一个维度映射到 x 轴，取第二个维度映射到 y 轴。如果想要把更多的维度展现出来，可以借助 visualMap。最常见的情况，散点图（scatter） 使用半径展现了第三个维度。
visualMap组件定义了把数据的哪个维度映射到什么视觉元素上。
现在提供如下两种类型的visualMap组件，通过visualMap.type区分。
```js
option={
  visualMap:[
    //可以同时定义多个visualMap组件
    {
      type:'continuous'//连续型
      //...
    },
    {type:'piecewise'}//分段型
  ]
}
```
连续型的意思是，进行视觉映射的数据维度是连续的数值；而分段型则是数据被分成了多段或者是离散型的数据。
连续型视觉映射通过指定最大值、最小值，就可以确定视觉映射的范围。
```js
option={
  visualMap:[
    {
      type:'continuous',min:0,max:5000,dimension:3,//series.data的第四个维度，即value[3]被映射
      seriesIndex:4,//对第四个系列进行映射
      inRange:{
        //选中范围中的视觉配置
        color:['blue','#121122','red'],//定义了图形颜色映射的颜色列表，数据最小值映射到'blue'上，最大值映射到‘red’上，其余自动线性计算
        symbolSize:[30,100],//定义了图形尺寸的映射范围，
        // 数据最小值映射到30上，
        // 最大值映射到100上，
        // 其余自动线性计算
      },
      outOfRange:{
        // 选中范围外的视觉配置
        symbolSize:[30,100]
      }
    }
  ]
}
```

# 图例
图表中对内容区元素的注释、用不同形状、颜色、文字等来标示不同数据列，通过点击对应数据列的标记，可以显示或隐藏该数据列。图例虽然不是图表中的主要信息，却是了解图表信息的钥匙。
## 布局
图例一般放在图表的右上角、也可以放在图表的底部、同一页面中的所有图例位置保持一致，可以横排对齐也可以纵排对齐。还要综合考虑整体的图表空间是适合哪种摆放方式。当图表纵向空间紧张或者内容区量过大的时候、建议摆放在图表的下方。下面是几种图例的摆放方式：

```js
option={
  legend:{
    orient:'vertical',//'horizontal'
    right:10,top:'center'
  },
  dataset:{
    source:[
      {'product','2015','2016','2017'},
      ['Matcha Latte',43.5,85,8,93.7],
      ['Milk Tea',83.1,73,55],
      ['Cheese Cocoa',86.4]
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
}
// 图例较多时，可以使用可滚动翻页的图例：
option={
  legend:{
    type:'scroll',orient:'vertical',right:10,top:20,bottom:20,data:['图例一',...,'图例n'],backgroundColor:'#ccc',textStyle:{color:'#ccc'},
     selected: {
      图例一: true,
      图例二: true,
      图例三: false
    }
  }
}
// 深色系背景下，建议给图例加厚三杠半透明背景色，文字颜色设置为浅色
```
图例的颜色标签有很多种设计方式、针对不同的图表、图例样式也会有所不同。
根据场景需要，图例可支持交互操作，点击控制显示或隐藏对应的数据列；

图例要注意视情况使用，有些双轴图包含了多种图表类型，不同类型的图例样式要有所区分。
```js
option = {
  legend: {
    data: [
      {
        name: '图例一',
        icon: 'rect'
      },
      {
        name: '图例二',
        icon: 'circle'
      },
      {
        name: '图例三',
        icon: 'pin'
      }
    ]
    // ...
  },
  series: [
    {
      name: '图例一'
      // ...
    },
    {
      name: '图例二'
      // ...
    },
    {
      name: '图例三'
      // ...
    }
  ]
  // ...
};
```
当图表只有一种数据信息时，用图表标题说明数据信息即可。建议此时不要加上图例。

# 事件

```js
在 Apache ECharts 的图表中用户的操作将会触发相应的事件。开发者可以监听这些事件，然后通过回调函数做相应的处理，比如跳转到一个地址，或者弹出对话框，或者做数据下钻等等。

ECharts 中的事件名称对应 DOM 事件名称，均为小写的字符串，如下是一个绑定点击操作的示例。

myChart.on('click', function(params) {
  // 控制台打印数据的名称
  console.log(params.name);
});
在 ECharts 中事件分为两种类型，一种是用户鼠标操作点击，或者 hover 图表的图形时触发的事件，还有一种是用户在使用可以交互的组件后触发的行为事件，例如在切换图例开关时触发的 'legendselectchanged' 事件（这里需要注意切换图例开关是不会触发 'legendselected' 事件的），数据区域缩放时触发的 'datazoom' 事件等等。

鼠标事件的处理
ECharts 支持常规的鼠标事件类型，包括 'click'、 'dblclick'、 'mousedown'、 'mousemove'、 'mouseup'、 'mouseover'、 'mouseout'、 'globalout'、 'contextmenu' 事件。下面先来看一个简单的点击柱状图后打开相应的百度搜索页面的示例。

// 基于准备好的dom，初始化ECharts实例
// var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
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
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
// 处理点击事件并且跳转到相应的百度搜索页面
myChart.on('click', function(params) {
  window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
});
// 基于准备好的dom，初始化ECharts实例
// var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
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
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
// 处理点击事件并且跳转到相应的百度搜索页面
myChart.on('click', function(params) {
  window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
});
```

所有的鼠标事件包含参数params，这是一个包含点击图形的数据信息的对象，如下格式：
```ts
type EventParams={
  //当前点击的图形元素所属的组件名称，'series','markLine',markPoint,timeLine
  componentType:string;
  //line,bar,pie,componentType为series时有意义
  seriesType:string
  // 系列在传入的option.series中的index，当componentType为se。。
  seriesIndex:number
  seriesName:string
  name:string //数据名，类目名
  dataIndex:number//数据在传入的data数组中的index
  data:Object//传入的原始数据项
  dataType:string//sankey,graph等图表同时含有nodeData、edgeData两种data，
  //'node','edge',当前点击在node还是edge上，其他大部分图表中只有一种data，dataType无意义
  value:number|Array//传入的数据值
  color:string//数据图形的颜色，当componentType。。
}
```
如何区分鼠标点击到了哪里：
```js
myChart.on('click',function(params){
  if(params.componentType==='markPoint'){
    //点击到了markPoint上
    if(params.seriesIndex===5){
      // 点击到了i为5的series的markPoint上
    }
  }else if(params.componentType==='series'){
    if(params.seriesType==='graph'){
      if(params.dataType==='dege'){

      }
    }
  }
})
```
使用query只对指定的组件的图形元素的触发回调：
```js
chart.on(eventName,query,handler)
```
query可为string或者object，如果为string表示组件类型，mainTypeUOmainType.subType：
```js
chart.on('click','series',function(){})
chart.on('click','series.line',function(){})
chart.on('click','dataZoom',function(){})
chart.on('click','xAxis.category',function(){})
```
如果为object，可以包含以下一个或多个属性，每个属性都是可选的：
```js
{
  ${mainType}Index:number
  ${mainType}Nme:string
  ..id
  dataIndex数据项
  name
  dataType 如关系图中的node、edge
  element 自定义系列中的element的name
}
```
```js
chart.setOption({
  //...
  series:[
    {
      name:'uuu',
    }
  ]
})
chart.on('mouseover',{seriesName:'uuu'},function(){

})
chart.setOption({
  //...
  series:[
    {
      //...
    },
    {
      data:[
        {
          name:'xx',
          value:121
        }
      ]
    }
  ]
})
chart.on('mouseover',{seriesIndex:1,name:'xx'},function(){
  //series index为1的系列中 name为'xx'的元素被'mouseover‘时，此方法被回调
})
chart.setOption({
  series:[
    {
      type:'graph',
      nodes:[
        {name:'a',value:10},
        {name:'b',value:20},
      ],
      edges:[{source:0,target:1}]
    }
  ]
})
chart.on('click',{dataType:'node'},function(){})
chart.on('click',{dataType:'edge'},function(){})
chart.setOption({
  //...
  series:{
    type:'custom',
    renderItem:function(params,api){
      reutrn {
        type:'group',
        children:[
          {type:'circle',name:'my_el'}
        ]
      }
    },
    data:[[12,33]]
  }
})
chart.on('mouseup',{element:'my_el'},function(){})
你可以在回调函数中获得这个对象中的数据名、系列名称后在自己的数据仓库中索引得到其他的信息后更新图表，显示浮层等等
myChart.on('click',function(params){
  $.get('detail?q='+params.name,function(detail){
    myChart.setOption({series:[{name:'pie',
    //通过饼图表现单个柱子中的数据分布
    data:[detail.data]
    }]})
  })
})
```
组件交互的行为事件，基本上所有的ECharts组件交互行为都会触发相应事件，常用的事件和事件对应参数在events文档中有列出。下面是监听一个图例开关的实例：
```js
myChart.on('legendselectchanged',function(params){
  var isSelected=params.selected[params.name]//获取点击图例的选中状态
  console.log((isSelected ? '选中了' : '取消选中了') + '图例' + params.name);
  // 打印所有图例的状态
  console.log(params.selected);
})
```
上面提到诸如 'legendselectchanged' 事件会由组件交互的行为触发，那除了用户的交互操作，有时候也会有需要在程序里调用方法触发图表的行为，诸如显示 tooltip，选中图例。在ECharts通过调用`myChart.dispatchAction({type:''})`触发图表行为，统一管理了所有动作，可以方便的根据需要去记录用户的行为路径。
常用的动作和动作对应参数在action文档中有列出。下面示例演示了如何通过dispatchAction去轮流高亮饼图的每个扇形。
```js
option={
  title:{text:'饼图程序调用高亮示例',left:'center'},
  tooltip:{trigger:'item',formatter:'{a}<br/>{b}:{c} ({d}%)'},
  legend:{orient:'vertical',left:'left',data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','']},
  series:[
    {
      name:'访问来源',type:'pie',radius:'55%',center:['50%','60%'],
      data:[{value:335,name:'visit直接访问'},{value:310,name:'邮件营销'},{value:234,name:''}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:'rgba(0,0,0,0.5)'}}
    }
  ]
}
let currentIndex=-1
setInterval(function(){
  var dataLen=option.series[0].data.length
  //取消之前高亮的图形
  myChart.dispatchAction({type:'downplay',seriesIndex:0,dataIndex:currentIndex})
  currentIndex=(currentIndex+1)%dataLen
  myChart.dispatchAction({type:'highlight',seriesIndex:0,dataIndex:currentIndex})
  // display tooltip
  myChart.dispatchAction({type:'showTip',seriesIndex:0,dataIndex:currentIndex})
},1000)
```
开发者需要监听画布的“空白处”所触发的事件。比如，当需要*在用户点击“空白处”的时候重置图表*时。

在讨论这个功能之前，我们需要先明确两种事件。zrender 事件和 echarts 事件。
```js
myChart.getZr().on('click',function(event){
  //该监听器正在监听一个zrender事件
  //没有target意味着鼠标、指针不在任何一个图形元素上，它是从‘空白处’触发的
  if(!event.target){

  }
})
myChart.on('click',function(event){
  //该监听器正在监听一个echarts事件
})
```
ZRender事件是当鼠标在任何地方都会被出发，后者是只有当鼠标在图形元素上时才触发。事实上，echarts事件是在ZRender事件的基础上实现的。当一个ZRender事件在图形元素上被触发时，ECharts将触发一个ECharts事件给开发者。

# download下载
主题下载、扩展下载

