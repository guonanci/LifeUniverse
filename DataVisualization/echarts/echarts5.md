不再是简单的图表创建工具，而在*交互、性能、数据处理*等方面有了更高级的需求，始终致力于让开发者以更方便的方式创造灵活丰富的可视化作品。Apache Echarts 5，图表的叙事能力，*更简单的方式，讲述数据背后的故事*。
模块：*动态叙事、视觉设计、交互能力、开发体验、可访问性*
特性：动态排序图+自定义系列动画；默认设计+标签+时间轴+提示框+仪表盘+扇形圆角；状态管理+性能提升；数据集+国际化+TypeScript重构；主题配色+贴花图案；
*‘表-达’是核心*，初始动画和过渡动画帮助用户理解数据变换之间的联系，图表的表现和变换不再生硬。动画叙事能力，动画对用户认知的帮助作用，
动态排序柱状图bar-racing,line-racing，带有时序性的图表，展现数据随着时间维度上的变化、讲述数据的演变过程。

不同类目随着时间在排名上的演变，几行简单的配置项，自定义系列，更加丰富强大的动画效果，标签数值文本的插值动画，图形的形变morph、分裂separate，合并combine等效果的过渡动画，
# 视觉设计
视觉设计的作用，让图表更好看，符合可视化院里的设计，更快速理解图表想表达的内容，消除不良设计带来的误解。默认主题样式，设计优雅，非常重要。*颜色之间的区分度、背景色的对比度、相邻颜色的和谐度，确保色觉辨识障碍人士也能清楚的区分数据*，数据区域缩放，时间轴等交互组件。
# 标签
标签是核心元素之一，密集的标签能清晰显示、准确表意。
通过一个配置项开启自动隐藏重叠的标签。超出显示区域的标签，可以选择自动截断或者换行。密集的饼图标签，有了更美观的自动排布。*帮助避免文字过于密集影响可读性*，主动控制标签的布局策略，标签拖动、整体显示在画布边缘，用引导线和图形元素连接，联动高亮表达关联关系。移动端。
# 时间轴
适于表达时间标签刻度的时间轴，突出重要欣喜，更灵活的定制化能力，根据不同需求定制时间轴的标签内容。不是绝对平均分个，选取年、月、日、整点这类更有意义的点来展示，能同时显示不同层级的刻度。formatter支持了时间模板，例如{yyyy}-{MM}-{dd}
# 提示框Tooltip
优雅而清晰，富文本的渲染逻辑
# 仪表盘
# 扇形圆角

# 交互能力
高亮emphasis，普通normal两个交互状态，颜色、阴影
淡出非相关元素，更清晰的突出聚焦系列中数据的对比。selectchanged事件

# 性能提升
脏矩形渲染，解决只有局部变化的场景下的性能瓶颈。探测并只更新视图变化的部分，帮助提高渲染帧率，canvas，同时满足了性能和显示正确。实时时序数据、海量数据下，高性能绘制。CPU消耗、内存占用、初始化时间，深度优化，百万级数据，实时更新，每次更新少于30ms，千万级数据1s内渲染完，保持很小内存占用，流畅的提示框

# 开发体验
数据集的数据转换能力，filter、sort、aggregate、直方图histogram、简单聚类clustering、回归线计算regression，统一的声明方式。

# 国际化
原有的国际化方案，不同的语言参数打包出。动态的语言包和静态的代码包，类似挂载主题，registerLocale，重新初始化，切换语言。
# TypeScript重构
更安全高效的重构和新功能开发，强类型，更有信心的进行大刀阔斧的重构，实现更多令人激动人心的特性。DTS类型描述文件，DefinitelyTyped，ComposeOption，更严格的类型检查，提前检测到未引入的组件类型。
# 可访问性

# 升级
## theme
```js
setOption({
  color:[
    '#c23531',
    '#2f4554',
    '#61a0a8',
  ]
})
```

## 按需引入
```js
import { BarChart } from 'echarts/charts'
import { GridComponent } from 'echarts/components'


```
## geoJSON
registerMap组件，

# 全局过渡性动画
5.2新特性，自然流畅的动画，避免数据带来的突变，改善视觉效果，表达数据的关联和演变提供了可能，从表现系列内部数据的变化，泛化到全局能力。Universal Transition，如何为图表增加表现力和叙事能力。之前版本的过渡动画局限性：只能用于*相同类型的图形位置、尺寸、形状，而且只能作用在相同类型的系列*上。*通过饼图中扇区形状的变化反映了数据分布的变化*。跨系列的形变，不再局限于相同类型的系列之间。为任意类型的系列和任意类型的图形做形变动画。
`universalTransition: true`从饼图切换成柱状图、从柱状图切换成散点图，旭日图和矩形图这类复杂的图表之间，都可以通过形变的方式自然的进行动画过渡。
```js
const dataset={
  dimensions:['name','score'],
  source:[
    ['Hannah Krause',314],
    ['Zhao Qian',351],
    ['Zhao Qan',351],
    ['Zhao ian',351],
    ['ZhaoQian',351],
    ['Zha Qian',351],
  ]
}
const pieOption={
  dataset:[dataset],
  series:[
    {
      type:'pie',
      // 通过id关联需要过渡动画的系列
      id:'Score',
      radius:[0,'50%'],
      universalTransition:true,
      animationDurationUpdate:1000,
    }
  ]
}
const barOption={
  dataset:[dataset],
  xAxis:{
    type:'category'
  },
  yAxis:{},
  series:[
    {
      type:'bar'
      id:'Score',
      每个数据都用不同颜色
      colorBy:'data',
      encode:{x:'name',y:'score'},
      universalTransition:true,
      animationDurationUpdate:1000
    }
  ]
}

option=barOption
setInterval(()=>{
  option=option===pieOption?barOption:pieOption
  // 使用notMerge的形式可以移除坐标轴
  myChart.setOption(option,true)
},2000)
```
更多的常见基础图表之间的过渡，动画过渡 折柱饼、柱状图和地图之间。旭日图和矩形树图，非常灵活的自定义系列之间。需要配置系列的id来保证需要动画过渡的系列之间能够一一对应
```js
import { Univer } from 'echarts/features'
echarts.use([Univer...])
```
# 数据的分裂和合并动画
常见的数据值更新，数据聚合、下钻等交互后的更新，这个时候我们就不能直接应用一对一的动画过渡，而需要使用更多像分裂、合并这样的动画效果，正确的图形动画表达出数据的变化。
为了能够表达数据之间可能存在的多对多联系，数据组groupId，`series.dataGroupId`设置整个系列所属组，更细粒度的series.data.groupId设置每个数据所属的组。*如果使用了dataset管理数据则更方便了，可以使用encode.itemGroupId来指定一个维度编码成groupId*。
```js
options={
  xAxis:{
    data:['Animals','Fruits','Cars']
  },
  yAxis:{},
  dataGroupId:'',
  animatioinDurationUpdate:500,
  series:{
    type:'bar',
    id:'sales',
    data:[
      {
        value:5,
        groupId:'animals',
      },
      {
        value:2,
        groupId:'fruits',
      },
      {
        value:4,
        groupId:'cars',
      },
    ],
    universalTransition:{
      enabled:true,
      divideShape:'clone'
    }
  }
}
const drilldownData=[
  {
    dataGroupId:'animals',
    data:[
      ['Cats',4],
      ['Dogs',4],
      ['Cows',4],
      ['Sheeps',4],
      ['Pigs',4],
    ],
  },
  {
    dataGroupId:'fruits',
    data:[
      ['Apples',4],
      ['Oranges',4],
    ],
  },
  {
    dataGroupId:'cars',
    data:[
      ['Toyota',4],
      ['Opel',4],
      ['Volkswagen',2],
    ],
  },
]
myChart.on('click',event=>{
  if(event.data){
    const subData=drilldownData.find(data=>data.dataGroupId===event.data.groupId)
    if(!subData)return
    myChart.setOption({
      xAxis:{data:subData.data.map(itm=>itm[0])},
      series:{
        type:'bar',
        id:'sales',
        dataGroupId:subData.dataGroupId,
        data:subData.data.map(itm=>itm[1]),
        universalTransition:{
          enabled:true,
          divideShape:'clone',
        },
      },
      graphic:[
        {
          type:'text',
          left:50,
          top:20,
          style:{
            text:'Back',
            fontSize:18,
          },
          onClick:()=>myChart.setOption(options,true)
        }
      ]
    })
  }
})
```
通过groupId，我们可以实现*更丰富的聚合，下钻动画*。数据的聚合、单系列下钻成两个系列。全局过渡动画使得数据的关系和演变的表达能力走上新台阶，为你的可视化创作灵感插上翅膀。
# 调tiao色盘的取色策略
在上面全局过渡动画的示例中，大家可能有注意到了我们使用了一个之前版本没有的colorBy配置项，给系列配置不同粒度的调色盘取色。两种策略：
- ‘series’，按照系列分配调色盘中的颜色，同一系列中的所有数据都是相同颜色
- ‘data’，按照数据项分配调色盘中的颜色，每个数据项都使用不同颜色。
之前按照系列的类型固定了这个策略，比如柱状图就是固定‘series’策略，饼图则是固定‘data’的策略。
```js
// 新增这个配置项后，我们可以在柱状图中给每个数据项都分配不同颜色
option={
  xAxis:{
    type:'category',
    data:['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
  },
  yAxis:{type:'value'},
  series:[
    {
      data:[120,200,150,20,30,60],
      type:'bar',
      colorBy:'data',
    }
  ]
}
// 或者在饼图中统一使用一个颜色
option={
  series:{
    type:'pie',
    colorBy:'series',
    radius:[0,'50%'],
    itemStyle:{
      borderColo:'#ff',
      borderW:1,
    },
    data:[
      {
        value:335,
        name:'Direct Visit'
      },
      {value:234,name:'Union Ad'},
      {value:234,name:'Search Engine'},
    ]
  }
}
```
# 极坐标柱状图的标签
丰富的标签定位配置，标签显示在端点的进度图。
```js
option={
  angleAxis:{
    show:false,
    max:10
  },
  radiusAxis:{
    show:false,
    type:'category',
    data:['AAA','BBB','CCC','DDD']
  },
  polor:{},
  series:[
    {
      type:'bar',
      data:[3,4,5,5],
      colorBy:'data',
      roundCap:true,
      label:{
        show:true,
        position:'start',//insideStart
        formatter:'{b}'
      },
      coordinateSystem:'polar'
    }
  ]
}
```
这一灵活的标签位置配置项大大丰富了极坐标柱状图的表达能力，*让文字清晰的匹配对应数据*。
# 空数据的饼图样式
之前的版本中，如果饼图没有数据，画面中可能就是完全空白的，没有任何视觉元素，所以用户会疑惑是不是出现了bug导致图中没有内容。为了解决这个问题，这个版本呢我们默认在无可显示数据时显示一个，灰色的占位圆，以防止画面中完全空白。我们可以通过`emptyCircleStyle`配置这个占位圆的样式。
```js
option={
  series:[
    {
      type:'pie',
      data:[],
      //showEmptyCircle:false,
      emptyCircleStyle:{
        // 将样式改为空心圆
        color:'transparent',
        borderColor:'#ddd',
        borderWidth:1,
      }
    }
  ]
}
```
# 高维数据的性能增强
4.0引入dataset，用来管理图表数据，通常情况下dataset提供了更方便的数据管理方式而且跟传统的方式不会有什么性能上的差别，但是在一些极端的特别高维（>100）数据的场景下，我们还是会碰到一些性能急剧下降的问题，比如下面这种通过一千个系列去可视化纤维数据的场景，甚至可能卡住。
```js
const indices=Array.from(Array(1000),(+,i)=>`index${i}`)
const option={
  xAxis:{type:'categ'},
  yAxis:{},
  dataset:{
    //dimensions:['date',...indices]
    source:Array.from(Array(10),(_,i)=>({date:i,
    ...indices.reduce((itm,next)=>{
      itm[next]=Math.random()*100
      return itm
    },{})
    }
    ))
  },
  series:indices.map(i=>({type:'line',name:i}))
}
```
产生这个性能问题，在底层每个系列，数据以及维度等元信息。1000*1000个维度的信息，巨大的内存和垃圾回收的压力，导致了高纬度的性能的急剧下降。所有系列都尽可能共享dataset存储，内存，只处理和存储了使用到的数据。大幅度的提升了极端场景下初始化性能，数据量很大
# 自定义系列的类型优化
非常灵活的创建系列图形的方式，陡峭，核心方法`renderItem`，参数和返回值类型做了更精确的推断，根据返回的图形类型推断出可以设置该图形的哪些属性。
```js
series={
  type:'custom',
  renderItem(params){
    return{
      type:'group',//group类型使用children存储其他类型子元素
      children:[
        {
          type:'circle',//circle拥有下面这些可以配置的shape属性
          shape:{r:10,cx:0,cy:0},
          style:{fill:'red'}//可以配置的样式
        },
        {
          type:'rect',
          shape:{x:0,y:0,width:100,height:100}
        },
        {
          type:'path',
          shape:{d:'...'}
        }
      ]
    }
  }
}
```
## 5.3特性
动画表达力、渲染性能、服务端渲染上做了大幅度的增强，新增了多坐标轴刻度自动对齐、tooltip数值格式化、地图投影
- *关键帧动画*
在之前ECharts的动画集中在图形添加、更新以及移除的过渡动画上，过渡动画往往只有开始状态和结束状态。为表达更复杂的动画效果，自定义系列和图形组件引入了全新的关键帧动画。*呼吸动画*：
```js
option={
  graphic:{
    type:'circle',
    shape:{r:100},
    left:'center',
    top:'center',
    keyframeAnimation:[
      {
        duration:3000,
        loop:true,
        keyframes:[
          {
            percent:.5,
            easing:'sinusoidalInOut',
            scaleX:0.1,
            scaleY:.1,
          },
          {
            percent:1,
            easing:'sinu',
            scaleX:1,
            scaleY:1,
          }
        ]
      }
    ]
  }
}
```
关键帧动画中，可以配置动画时长、缓动、是否循环、每个关键帧位置、缓动、图形属性等等。每个图形可以同时设置，多个不同配置的关键帧动画。灵活的配置让我们可以实现非常复杂的动画效果。
# 自定义加载动画
默认内置了一个加载动画，用showLoading显示。通过图形组件graphic、配合关键帧动画，实现任何想要的加载动画效果。
文本描边动画：
```js
option={
  graphic:{
    elements:[
      {
        type:'text',
        left:'center',
        top:'center',
        style:{
          text:'Apache Echarts',
          fontSize:40,
          fontWeight:'bold',
          lineDash:[0,200],
          lineDashOffset:0,
          fill:'transparent',
          stroke:'#000',
          lineWidth:1
        },
        keyframeAnimation:{
          duration:3000,
          loop:true,
          keyframes:[
            {
              percent:0.7,
              style:{
                fill:'transparent',
                lineDashOffset:200,
                lineDash:[200,0]
              }
            },
            {
              //Stop for a while
              percent:.8,
              style:{
                fill:'transparent'
              }
            },
            {
              percent:1,
              style:{
                fill:'black'
              }
            }
          ]
        }
      }
    ]
  }
}

//柱状图形状的加载动画
const cols=[]
for(let i=0;i<7;i++){
  cols.push({
    type:'rect',
    x:i*20,
    shape:{
      x:0,
      y:-40,
      width:10,
      height:80,
    },
    style:{
      fill:'#5470c6'
    },
    keyframeAnimation:{
      duration:1000,
      delay:i*200,
      loop:true,
      keyframes:[
        {
          percent:0.5,
          scaleY:0.1,
          easing:'cubicIn',
        },
        {
          percent:1,
          scaleY:1,
          easing:'cubicOut',
        }
      ]
    }
  })
}
option={
  graphic:{
    elements:[
      {
        type:'group',
        left:'center',
        top:'center',
        children:columns
      }
    ]
  }
}
```
## 扩展更丰富的散点图动画特效
ECharts的特色功能，开发者可以使用`effectScatter`系列来实现带有涟漪特效的动态散点图，除了让作品更有趣，也起到了高亮提示用户的效果。自定义系列绘制的图钉加上了跳动的动画效果，
## 加载Lottie动画
解析库，洗你的动画，将Lottie动画文件解析成ECharts的图形格式。
`transition,enterFrom,leaveTo`配置每个图形哪些属性会拥有过渡动画，当图形创建和被移除的时候该执行怎么样的动画。

```js
function renderItem(){
  //...
  return {
    //...
    x:100,
    //'style','x','y'会被动画
    transition:['style','x','y'],
    enterFrom:{
      style:{
        opacity:0,//淡入
      },
      x:0,//从左侧飞入
    },
    leaveTo:{
      opacity:0,//淡出
    },
    x:200,//向右侧飞出
  }
}
```
过渡动画的配置，为所有属性加上动画过渡`transition:'all'`，不行一一写出每个要动画的属性。enterAnimation、upateAnimation、leaveAnimation。入场更新出场动画的时长duration、延迟delay、缓动easing。
## 全新的SVG渲染器
重构了，性能提升2x~10x，某些特殊场景，直接从渲染队列更新到DOM。*ZRender的图形属性跟DOM并不是一一对应的*，中间需要实现非常复杂的diff逻辑，容易出错，而且在某些场景下性能并不能做到最好。*这个版本我们重构成全量渲染到VDOM，然后再将VDOM patch到DOM完成渲染。可以避免复杂的diff逻辑带来的潜在bug。而VDOM和DOM的一一对应可以保证在patch的时候保证更新是最少的，带来巨大的性能提升*。

新版本在SVG模式下拖动的交互比之前版本流畅很多。中间全量渲染得到的VDOM，服务端渲染
## 零依赖的服务端渲染
以来node-canvas？JSDOM-SVG，模拟DOM环境，额外的体积和使用要求，更多的性能损耗。从中间的VDOM渲染，得到字符串，带来了完全零依赖的服务端渲染，输出更精简并且带有CSS动画的SVG字符串。
```js
const echarts=require('echarts')
//SSR模式下第一个参数不需要再传入DOM对象
const chart=echarts.init(null,null,{
  renderer:'svg',
  ssr:true,
  width:400,
  height:300,
})

chart.setOption({
  xAxis:{
    type:'category',
    data:['Mon','Tue',...]
  },
  yAxis:{type:'value'},
  series:[{data:[120,300,150,...],type:'bar'}]
})

const svgStr=chart.renderToSVGString()
```
CodeSandbox搭建一个最简单的NodeJS服务器，然后使用ECharts服务端渲染的效果。优化了输出的SVG字符串。
## 自定义地图投影
一般地图组件使用存储了经纬度的GeoJSON格式数据，计算出合适的显示区域，把经纬度映射到这个区域。*简单的线性投影无法满足某些复杂的地图场景，使用Albers投影解决线性投影中面积失真的问题，或者在世界地图中让太平洋显示在中间等等*。
`project/unproject`方法告诉ECharts如何投影坐标，如何根据投影后坐标计算经纬度。
```js
series={
  type:'map',
  projection:{
    project:point=>[
      (point[0]/180)*Math.PI,
      -Math.log(Math.tan((Math.PI/2+(point[1]/180)*Math.PI)/2))
    ],
    unproject:point=>[
      (point[0]/180)*Math.PI,
      ((2*180)/Math.PI)*Math.atan(Math.exp(point[1]))-90
    ]
  }
}
// 除了我们自己实现投影公式，还可以使用d3-geo等第三方库提供的现成的投影实现
const project=d3.geoConicEqualArea()
series={
  type:'map',
  projection:{
    project:point=>projection(point),
    unproject:point=>projection.invert(point)
  }
}
```
- 对GeoJSON数据提供了`LineString`和`MultiLineString`的支持，
- 将默认标签位置的计算从包围盒中心改为最大区域的重心坐标，计算结果更加准确
## 多坐标轴的刻度对齐
社区中提了很久的一个需求，自己实现的话会比较麻烦，而且有比较多的局限性。我们终于引入了数值轴坐标轴刻度对齐的功能。`alignTicks:true`，该坐标轴会根据第一个坐标轴的刻度划分去调整自己的刻度，实现自动对齐。
```js
option={
  tooltip:{
    trigger:'axis',
  },
  lagend:{},
  xAxis:[
    {
      type:'category',
      data:['Mon','Tue',...],
      axisPointer:{type:'shadow'}
    }
  ],
  yAxis:[
    {
      type:'value',
      name: 'Percipitation',
      alignTicks:true,
      axisLabel:{
        formatter:'{vlaue} m1'
      }
    },
    {
      type:'value',
      name:'Temperature',
      axisLabel:{formatter:'{value} 摄氏度符号'}
    }
  ],
  series:[
    {
      name:'Evaporation',
      type:'bar',
      //perttier-ignore
      data:[2.0,4.9,7.0,23.2,162.2,145.2,3.3]
    },
    {
      name:'Temperature',
      type:'line',
      yAxisIndex:1,
      data:[2.0,2.2,3.3,4.5,12]
    }
  ]
}
```
## 支持高亮和选中状态的关闭
ECharts中高亮状态可以在鼠标移到图形上时给用户提供反馈，但是在图表中有海量图形时，高亮的动画也可能带来交互上的性能问题，特别在tooltip或者图例组件联动触发的高亮会同时高亮多个图形。

因此新增了`emphasis.disabled`配置项，如果不需要高亮的反馈，又对交互性能特别在意，可以关闭高亮状态。对于选中状态`select.disabled`用于细粒度配置部分数据不可选。
## 整个系列的选中
selectedMode ‘series’，实现所有数据的选中
## tooltip中的数值格式化
移到图形上时，通过提示框显示更详细的相关信息，ECharts也提供了formatter回调函数可以让开发者更灵活的自定义提示框内容。但是大部分时候开发者只是需要格式化提示框中的数字部分，例如固定精度，加上$前缀等等。之前为了格式化数字，开发者只能通过formatter重写整个提示框内容，特别是在5.0后ECharts的提示框结构更复杂，样式更美观，重写变得成本很大，而且很难达到默认效果。`valueFormatter`。每个系列可以根据自己的数值格式配置自己的`valueFormatter`
```js
option={
  tooltip:{
    trigger:'axis'
  },
  legend:{},
  xAxis:[
    {
      type:'category',
      data:['Mon','Tue','Wed'],
      axisPointer:{type:'shadow'}
    }
  ],
  yAxis:[
    {
      type:'value',
      name:'Perciptation',
      alignTicks:true,
      axisLabel:{
        formatter:'{value} ml1'
      }
    }
  ]
}
```
每个系列都可以根据自己的数值格式配置自己的valueFormatter。
## 更灵活的扇区圆角
为扇区新增了圆角配置，可以让饼图、旭日图更加有趣，之前圆角的配置 roseType
## 饼图的复杂标签优化
换行、背景色、富文本等格式。宽度的自适应、超出容器、引导线的计算
## 柱状图large模式优化
数据量很多（》2k）的时候，支持柱状图通过开启large模式加速渲染，提升交互性能，但是之前large模式下对柱状图布局比较简单，
## registerMap和getMap方法需要在引入地图组件后才能使用
## 折线图移除默认高亮加粗的效果

## 智能指针吸附
## 更多坐标系中使用饼图
直角、日历、地理坐标系
## 仪表盘文字旋转
`axisLabel.rotate` `tangential,radial,number`切向、径向旋转

# 图表容器及大小
echarts.init 已经有宽高，如果图表容器不存在宽高，或者你希望图表宽高不等于容器大小，则可以初始化时指定：
```html
<div id='main'></div>
<script type='text/javascript'>
  var myChart=echarts.init(document.getElementById('main'),null,{
    width:600,
    height:400
  })
</script>
```
# 响应容器大小的变化
`echartsInstance.resize(),resize({width:800,height:400})`
# 样式
用哪些方法，改变图形元素或文字的颜色、明暗、大小。数据可视化思维。功能范畴可能会有交叉。
各有各的场景偏好。颜色主题、调色盘、直接样式设置itemStyle、lineStyle、areaStyle、label；视觉映射visualMap
切换深色模式，主题编辑器，vintage.json，自行加载和注册；umd格式而
文件-文件内部已经做了自注册，直接引入js即可。

## 调色盘
option中设置，一组颜色，图形、系列会自动从其中选择颜色，全局，系列自己专属的调色盘。
```js
option={
  color:[
    '#c23531',
    '#2f4554',
    '#61a0a8',
    '#d48265',
    '#91c7ae',
    '#749f83',
    '#ca8622',
    '#bda29a',
    '#6e7074',
    '#6e7074',
    '#6e7074',
  ],
  series:[
    {
      type:'bar',
      color:[...],
    },...
  ]
}
```

图形元素的颜色、线宽、点大小、标签文字、标签样式等等。ECharts的各个系列和组件，都遵从这些命名习惯，不同图表和组件中，itemStyle、label可能出现在不同地方。气泡图 阴影、渐变色。
```js
var data=[
  [
    [28222,77,12000000,'Australia',1990],
  ],
  [
    [28222,77,12000000,'Australia',1990],
  ]
]
option={
  backgroundColor:{
    type:'radial',
    x:0.3,
    y:0.3,
    r:0.8,
    colorStops:[
      {
        offset:0,
        color:'#f7f8fa'
      }
      ..1,
    ]
  },
  grid:{
    left:10,
    containLabel:true,
    bottom:10,
    top:10,
    right:30
  },
  xAixs:{
    splitLine:{
      show:false
    }
  },
  yAxis:{
    splitLine:{
      show:false
    },
    scale:true,
  },
  series:[
    {
      name:'1990',
      data:data[0],
      type:'scatter',
      symbolSize:function(data){
        return Math.sqrt(data[2])/5e2
      },
      emphasis:{
        focus:'series',
        label:{
          show:true,
          formatter:function(param){
            return param.data[3]
          },
          position:'top'
        }
      },
      itemStyle:{
        shadowBlur:10,
        shadowColor:'rgba(11,11,11,.1)',
        shadowOffsetY:5,
        color:{
          type:'radial',
          x:.4,
          y:.3,
          r:1,
          colorStops:[
            {
              offset:0,
              color:'rgb(251,118,123)'
            },..1
          ]
        }
      }
    },
    {
      name:'2015',
      data:data[1],
      type:'scatter',
      symbolSize:function(data){
        return Math.sqrt(data[2])/5e2
      },
      emphasis:{
        focus:'series',
        label:{
          show:true,
          formatter:function(param){
            return param.data[3]
          },
          position:'top'
        }
      },
      itemStyle:{
        shadowBlue:10,
        shadowColor:'rgba(25,25,25,.1)',
        shadowOffsetY:5,
        color:{
          type:'radial',
          x:.4,
          y:.3,
          r:1,
          colorStops:[
            {
              offset:0,
              color:'rgb(12,122,12)',
            },..1
          ]
        }
      }
    }
  ]
}
```
## 高亮样式emphasis
鼠标悬浮，和普通样式结构相同itemStyle-color、label-show&formatter
```js
option={
  series:{
    type:'scatter',
    itemStyle:{
      color:'red'
    },
    label:{
      show:true,
      formatter:'This is a normal label.'
    },
    emphasis:{
      itemStyle:{
        color:'blue'
      },
      label:{
        show:true,
        formatter:'This is a emphasis label'
      }
    }
  }
}
```
ECharts5配置项更扁平简单。
visualMap组件指定数据到颜色、图形尺寸的映射规则。
# 数据集
