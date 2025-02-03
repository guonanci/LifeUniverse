# 基础
饼图主要用于表现不同类目的数据在总和中的占比。每个的弧度表示数据数量的比例。

饼图的配置和折线图、柱状图略有不同，不再需要配置坐标轴，而是把数据名称和值都写在系列中。以下是一个最简单的饼图的例子。

```js
option = {
  series: [
    {
      type: 'pie',radius:'50%',stillShowZeroSum:false,
      label: {
        show: false
      },
      data: [
        {
          value: 335,
          name: '直接访问'
        },
        {
          value: 234,
          name: '联盟广告'
        },
        {
          value: 1548,
          name: '搜索引擎'
        }
      ]
    }
  ]
};
```
需要注意的是，这里是 value 不需要是百分比数据，ECharts 会根据所有数据的 value ，按比例分配它们在饼图中对应的弧度。

# 样式
## 半径
饼图的半径可以通过 series.radius 设置，可以是诸如 '60%' 这样相对的百分比字符串，或是 200 这样的绝对像素数值。当它是百分比字符串时，它是相对于容器宽高中较小的一条边的。也就是说，如果宽度大于高度，则百分比是相对于高度的，反之则反；当它是数值型时，它表示绝对的像素大小。
## 如果数据和为 0，不显示饼图
在默认情况下，如果数据值和为 0，会显示平均分割的扇形。比如，如果有 4 个数据项，并且每个数据项都是 0，则每个扇形都是 90°。如果我们希望在这种情况下不显示任何扇形，可以将 series.stillShowZeroSum 设为 false。
如果希望扇形对应的标签也不显示，可以将 series.label.show 设为 false。
# 圆环
用来表示数据占总体的比例，相比于饼图，它中间空余的部分可以用来显示一些额外的文字等信息，因而也是一种常用的图表类型
在 ECharts 中，饼图的半径除了上一小节提到的，可以是一个数值或者字符串之外，还可以是一个包含两个元素的数组，每个元素可以为数值或字符串。当它是一个数组时，它的前一项表示内半径，后一项表示外半径，这样就形成了一个圆环图。

从这个角度上来说，可以认为饼图是一个内半径为 0 的圆环图，也就是说，饼图是圆环图的特例。

```js
option = {
  title: {
    text: '圆环图的例子',
    left: 'center',
    top: 'center'
  },
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 335,
          name: 'A'
        },
        {
          value: 234,
          name: 'B'
        },
        {
          value: 1548,
          name: 'C'
        }
      ],
      radius: ['40%', '70%']
    }
  ]
};
```
如果半径是数组，其中的两项也可以一项是数值，另一项是百分比形式的字符串。但是这样可能导致在某些分辨率下，内半径小于外半径。ECharts 会自动使用小的一项作为内半径，但是仍应小心这样可能会导致的非预期效果。
## 在圆环图中间显示高亮扇形对应的文字
上面的例子展现了在圆环图中间显示固定文字的例子，下面我们要介绍，如何在圆环图中间显示鼠标高亮的扇形对应的文字。实现这一效果的思路是，利用系列的 label（默认用扇形颜色显示数据的 name），显示在圆环图中间。在默认情况下不显示系列的 label，在高亮时显示。具体的代码如下：

```js
option={
  legend:{
    orient:'vertical',x:'left',data:['A','B','C','D','E']
  },
  series:[
    {
      type:'pie',radius:['50%','70%'],avoidLabelOverlap:false,label:{show:false,position:'center'},
      labelLine:{show:false},
      emphasis:{
        label:{show:true,fontSize:'30',fontWeight:'bold'}
      },
      data:[
        {value:335,name:'A'},{value:335,name:'B'},
        {value:335,name:'A'},{value:335,name:'B'},
      ]
    }
  ]
}
```
其中，avoidLabelOverlap 是用来控制是否由 ECharts 调整标签位置以实现防止标签重叠。它的默认值是 true，而在这里，我们不希望标签位置调整到不是中间的位置，因此我们需要将其设为 false。这样，圆环图中间会显示高亮数据的 name 值。
# 南丁格尔图（玫瑰图）
通常用弧度相同但半径不同的扇形表示各个类目。可以通过将饼图的series.roseType值设置为‘area’实现南丁格尔图，其他配置项和饼图相同。
```js
option = {
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 100,
          name: 'A'
        },
        {
          value: 200,
          name: 'B'
        },
        {
          value: 300,
          name: 'C'
        },
        {
          value: 400,
          name: 'D'
        },
        {
          value: 500,
          name: 'E'
        }
      ],
      roseType: 'area'
    }
  ]
};
```
