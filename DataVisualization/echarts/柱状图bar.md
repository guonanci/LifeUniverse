# 应用篇-常用图表类型-柱状图
# 基础柱状图
或称条形图，一种通过柱形长度来表现数据大小，sseries的type为bar
```js
option={
  xAxis:{
    data:['Mon','Tue','Wed','..']
  },yAxis:{},series:[{type:'bar',data:[12,23,34,45,]}]
}
```
横坐标是类目型的，因此需要在xAxis中指定对应的值，而纵坐标是数值型的，可以根据series中的data，自动生成对应的坐标范围。
## 多系列
用一个系列表示一组相关数据，如果需要实现多系列的柱状图，只需要在series中添加一项就可以了。
```js
option={
  xAxis:{data:['Mon','Tue','Wed','Thu']}
}
option={
  xAxis:{data:['Mon',..,'Sun']},yAxis:{},series:[{type:'bar'}]
}
```
## 样式设置
柱条样式可以通过`series.itemStyle`设置，包括color、borderColor描边颜色、borderWidth、borderType、barBorderRadius、opacity、shadowBlur、showdowColor、showdowOffsetX,shadowOffsetY
```js
option={
  xAxis:{data:['A','B','C','D','E'],yAxis:{},
  series:[{type:'bar',
    data:[10,22,28,{value:40,itemStyle:{//设置单个柱子的样式
    color:'#91cc75',showdowColor:'#91cc75',borderType:'dashed',opacity:.5
    }},50],
    itemStyle:{
      barBorderRadius:5,borderWidth:1,borderType:'solid',borderColor:'#72c0de',shadowColor:'',shadowBlur:3
    },
    barWidth:'20%'//每个柱条的宽度是类目宽度的20%，barMaxWidth限制柱条的最大宽度，对于一些特别小的数据。barMinHeight，
    barGap:'20%',barCategoryGap:'40%',
  }]}
}
```
- 柱条间距
1不同系列在同一类目下的距离barGap,柱子间的距离相对于柱条宽度的百分比;2另一种是类目与类目的距离barCategoryGap，意味着柱条每侧空余的距离，相对于柱条宽度的百分比
通常而言，设置barGap和barCategoryGap后，就不需要设置barWidth了，这时宽度会自动调整。如果有需要，可以设置barMaxWidth作为柱条宽度的上限，当图表宽度很大时，柱条宽度也不会太宽。

在同一坐标系上，此属性会被多个柱状图系列共享。此属性应设置于此坐标系中最后一个柱状图系列上才会生效，并且是对此坐标系中所有柱状图系列生效。
### 为柱条添加背景色
```js
有时，我们希望能够为柱条添加背景色。从 ECharts 4.7.0 版本开始，这一功能可以简单地用 showBackground 开启，并且可以通过 backgroundStyle 配置。

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
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(220, 220, 220, 0.8)'
      }
    }
  ]
};
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
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(220, 220, 220, 0.8)'
      }
    }
  ]
};
```
# 堆叠
有时，我们不仅希望知道不同系列各自数值，还希望知道它们之*和的变化*，这时候可以使用堆叠柱状图来表现，一个系列的数值‘堆叠’在另一个领一个系列上。高度总和能表达总量的变化。
只需要给一个系列的 stack 值设置一个字符串类型的值，这一个值表示该系列堆叠的类别。也就是说，拥有同样 stack 值的系列将堆叠在一组。
```js
option = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      data: [10, 22, 28, 43, 49],
      type: 'bar',
      stack: 'x'
    },
    {
      data: [5, 4, 3, 5, 10],
      type: 'bar',
      stack: 'x'
    }
  ]
};
```
在这个例子中，第二个系列所在的位置是在第一个系列的位置的基础上，上升了第二个系列数值对应的高度。因此，从第二个系列的位置，就能看出这两者总和的变化趋势。

stack 的取值用来表明哪些系列将被堆叠在一起，理论上只要取值相同即可，具体的取值并没有什么区别。但在实际的应用中，我们建议使用一些有意义的字符串方便阅读。

比如，在一个统计男女人数的图中，有四个系列，“成年男性”和“男孩”系列需要进行堆叠，“成年女性”和“女孩”系列需要堆叠。这时，这两组的的 stack 值就建议分别设为 '男' 和 '女'。虽然使用 'a' 和 'b' 这样没有意义的字符串也能实现同样的效果，但是代码的可阅读性就差了。
# 动态排序
展示随时间变化的数据排名变化的图表，从ECharts 5开始内置支持
动态排序柱状图通常是横向的柱条，如果想要采用纵向的柱条，只要把本教程中的 X 轴和 Y 轴相反设置即可。
1. 系列的realtimeSort为true，开启该系列的动态排序效果
2. yAxis.inverse true，Y轴从下往上是从小到大的排列
3. yAxis.animationDuration 300，第一次柱条排序动画的时长
4. yAxis.animationDurationUpdate 300，第一次后柱条排序动画的时长
5. 如果只显示前n名，将yAxis.max设为n-1，否则显示所有柱条
xAxis.max 建议设为 'dataMax' 表示用数据的最大值作为 X 轴最大值，视觉效果更好
如果想要实时改变标签，需要将 series.label.valueAnimation 设为 true
animationDuration 设为 0，表示第一份数据不需要从 0 开始动画（如果希望从 0 开始则设为和 animationDurationUpdate 相同的值）
animationDurationUpdate 建议设为 3000 表示每次更新动画时长，这一数值应与调用 setOption 改变数据的频率相同
以 animationDurationUpdate 的频率调用 setInterval，更新数据值，显示下一个时间点对应的柱条排序
```js
var data=[]
for (let i = 0; i < 5; ++i) {
  data.push(Math.round(Math.random() * 200));
}
option={
  xAxis:{max:'dataMax'},
  yAxis:{type:'category',data:['A','B','E'],inverse:true,animationDuration:300,animationDurationUpdate:300,max:2//only the largest 3 bars will be displayed
  },
  series:[
    {realtimeSort:true,name:'X',type:'bar'data,label:{show:true,position:'right',valueAnimation:true}}
  ],
  legend:{show:true},
  animationDuration:3000,animationDuUp:3000,animationEasing:'linear',animationEasingUpdate:'linear'
}
function update(){
  var data=option.series[0].data
  for (var i=0;i<data.length;++i){
    if(Math.randowm()>0.9){
      data[i]+=Math.round(Math.random()*3000)
    }else{
      data[i]+=Math.round(Math.random()*300)
    }
  }
  myChart.setOption(option)
}
setInterval(function(){
  update()
},3000)
```
# 阶梯瀑布
没有单独的瀑布图，使用堆叠的柱状图模拟该效果，
```js
var data = [900, 345, 393, -108, -154, 135, 178, 286, -119, -361, -203];
```
也就是第一个数据是 900，第二个数据 345 表示的是在 900 的基础上增加了 345……将这个数据展示为阶梯瀑布图时，我们可以使用三个系列：第一个是不可交互的透明系列，用来实现‘悬空’的柱状图效果；第二个系列用来表示正数；第三个系列表示负数。
```js
var data=[900,345,]
var data = [900, 345, 393, -108, -154, 135, 178, 286, -119, -361, -203];
var help=[],positive=[],negative=[]
for(var i=0,sum=0;i<data.length;++i){
  if(data[i]>=0){
    positive.push(data[i])
    negative.push('-')
  }else{
    positive.push('-')
    negative.push(-data[i])
  }
  if(i==0){
    help.push(0)
  }else{
    sum+=data[i-1]
    if(data[i]<0){
      help.push(sum+data[i])
    }else{
      help.push(sum)
    }
  }
}
option={
  title:{text:'Waterfall'},
  grid:{left:'3%',right:'4%',bottom:'3%',containLabel:true},
  xAxis:{
    type:'category',splitLine:{show:false},
    data:(function(){
      var list=[]
      for(var i=1;i<=11;i++){
        list.push('Oct/'+i)
      }
      return list
    })()
  },
  yAixs:{type:'value'},
  series:[
    {
      type:'bar',stack:'all',
      itemStyle:{
        normal:{barBorderColor:'rgba(0,0,0,0)',color:'rgba(0,0,0,0)'},emphasis:{barBorderColor:'rgba(0,0,0,0)',color:'rgba(0,)'}
      },
      data:help
    },
    {
      name:'positive',type:'bar',stack:'all',data:positive,
    },
    {
      name:'negative',type:'bar',stack:'all',data:negative,
      itemStyle:{
        color:'#f33'
      }
    }
  ]
```
