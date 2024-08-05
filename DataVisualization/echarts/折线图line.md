# 基础折线图
主要用来展示数据项随时间推移的趋势或变化。
- 最简单的
如果我们想建立一个横坐标是类目型category，纵坐标是数值型value的折线图，我们可以使用这样的方式：
```js
option = {
  xAxis: {
    type: 'category',
    data: ['A', 'B', 'C']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150],
      type: 'line'
    }
  ]
};
```
这里 xAxis 和 yAxis 的 type 属性都可以隐去不写。因为坐标轴的默认类型是数值型，而 xAxis 指定了类目型的 data，所以 ECharts 也能识别出这是类目型的坐标轴。为了让大家更容易理解，我们特意写了 type。在实际的应用中，如果是 'value' 类型，也可以省略不写

## 笛卡尔坐标系中的折线图
```js
如果我们希望折线图在横坐标和纵坐标上都是连续的，即在笛卡尔坐标系中，应该如何实现呢？答案也很简单，只要把 series 的 data 每个数据用一个包含两个元素的数组表示就行了。

option = {
  xAxis: {},
  yAxis: {},
  series: [
    {
      data: [
        [20, 120],
        [50, 200],
        [40, 50]
      ],
      type: 'line'
    }
  ]
};
option = {
  xAxis: {},
  yAxis: {},
  series: [
    {
      data: [
        [20, 120],
        [50, 200],
        [40, 50]
      ],
      type: 'line'
    }
  ]
};
```
## 样式设置
折线的样式可以通过lineStyle设置颜色、线宽width、折线类型type、阴影、不透明度等等，
```js
option = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      data: [10, 22, 28, 23, 19],
      type: 'line',
      lineStyle: {
        normal: {
          color: 'green',
          width: 4,
          type: 'dashed'
        }
      }
    }
  ]
};
```
这里设置折线宽度时，数据点描边的宽度是不会跟着改变的，而应该在数据点的配置项中另外设置。

数据点的样式
数据点的样式可以通过 series.itemStyle 指定填充颜色（color）、描边颜色（borderColor）、描边宽度（borderWidth）、描边类型（borderType）、阴影（shadowColor）、不透明度（opacity）等。与折线样式的设置十分相似，这里不再展开说明。
在系列中，这数据点的标签通过 series.label 属性指定。如果将 label 下的 show 指定为true，则表示该数值默认时就显示；如果为 false，而 series.emphasis.label.show 为 true，则表示只有在鼠标移动到该数据时，才显示数值。
```js
option = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      data: [10, 22, 28, 23, 19],
      type: 'line',
      label: {
        show: true,
        position: 'bottom',
        textStyle: {
          fontSize: 20
        }
      }
    }
  ]
};
```
*空数据*
```js
在一个系列中，可能一个横坐标对应的取值是“空”的，将其设为 0 有时并不能满足我们的期望--空数据不应被其左右的数据连接。

在 ECharts 中，我们使用字符串 '-' 表示空数据，这对其他系列的数据也是适用的。

option = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      data: [0, 22, '-', 23, 19],
      type: 'line'
    }
  ]
};
option = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      data: [0, 22, '-', 23, 19],
      type: 'line'
    }
  ]
};
```
# 堆叠
与堆叠柱状图类似，堆叠折线图也是用系列的 stack 设置哪些系列堆叠在一起。
但是不同的是，如果不加说明的话，我们很难判断出这是一个堆叠折线图，还是一个普通的折线图。所以，对于堆叠折线图而言，一般建议使用区域填充色以表明堆叠的情况。
```js
option = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      data: [10, 22, 28, 43, 49],
      type: 'line',
      stack: 'x',
      areaStyle: {}
    },
    {
      data: [5, 4, 3, 5, 10],
      type: 'line',
      stack: 'x',
      areaStyle: {}
    }
  ]
};
```
# 区域面积
```js
区域面积图将折线到坐标轴的空间设置背景色，用区域面积表达数据。相比普通的折线图，区域面积图的视觉效果更加饱满丰富，在系列不多的场景下尤其适用。
option = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      data: [10, 22, 28, 23, 19],
      type: 'line',
      areaStyle: {}
    },
    {
      data: [25, 14, 23, 35, 10],
      type: 'line',
      areaStyle: {
        color: '#ff0',
        opacity: 0.5
      }
    }
  ]
};
```
通过 areaStyle 设置折线图的填充区域样式，将其设为为 {} 表示使用默认样式，即使用系列的颜色以半透明的方式填充区域。如果想指定特定的样式，可以通过设置 areaStyle 下的配置项覆盖，如第二个系列将填充区域的颜色设为不透明度为 0.5 的黄色。
# 平滑曲线图
平滑曲线图也是折线图的一种变形，这种更柔和的样式也是一种不错的视觉选择。使用时，只需要将折线图系列的 smooth 属性设置为 true 即可。
# 阶梯线图-方波图
它使用水平和垂直的线来连接两个数据点，而普通折线图则直接将两个点连接起来。阶梯线图能够很好地表达数据的突变。

在 ECharts 中，系列的 step 属性用来表征阶梯线图的连接类型，它共有三种取值：'start'、'middle' 和 'end'，分别表示在当前点，当前点与下个点的中间点，下个点拐弯。
```js
option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Step Start',
      type: 'line',
      step: 'start',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Step Middle',
      type: 'line',
      step: 'middle',
      data: [220, 282, 201, 234, 290, 430, 410]
    },
    {
      name: 'Step End',
      type: 'line',
      step: 'end',
      data: [450, 432, 401, 454, 590, 530, 510]
    }
  ]
};
```
