# 动态的异步数据
https://echarts.apache.org/handbook/zh/how-to/data/dynamic-data

ECharts 中在更新数据的时候需要通过name属性对应到相应的系列，上面示例中如果name不存在也可以根据系列的顺序正常更新，但是更多时候推荐更新数据的时候加上系列的name数据。

```js
如果数据加载时间较长，一个空的坐标轴放在画布上也会让用户觉得是不是产生 bug 了，因此需要一个 loading 的动画来提示用户数据正在加载。

ECharts 默认有提供了一个简单的加载动画。只需要调用 showLoading 方法显示。数据加载完成后再调用 hideLoading 方法隐藏加载动画。

myChart.showLoading();
$.get('data.json').done(function (data) {
    myChart.hideLoading();
    myChart.setOption(...);
});
```
# 数据的动态更新
ECharts 由数据驱动，数据的改变驱动图表展现的改变，因此动态数据的实现也变得异常简单。

所有数据的更新都通过 setOption实现，你只需要定时获取数据，setOption 填入数据，而不用考虑数据到底产生了哪些变化，ECharts 会找到两组数据之间的差异然后通过合适的动画去表现数据的变化。

具体可以看下面示例：
```js
var base=+new Date(2014,9,3)
var oneDay=24*36000*1000
var date=[]
var data=[Math.random()*150]
var now=new Date(base)
function addData(shift){
    now=[now.getFullYear(),now.getMonth()+1,now.getDate()].join('/')
    date.push(now)
    data.push((Math.random()-0.4)*10+data[data.length-1])
    if(shift){
        data.shift()
        data.shift()
    }
    now=new Date(+new Date(now)+oneDay)
}
for(var i=1;i<100;i++){
    addData()
}
option={
    xAxis:{
        type:'cate.',
        boundaryGap:false,
        data:date
    },
    yAxis:{
        boundaryGap:[0,'50%'],type:'value'
    },
    series:[
        {
            name:'deal',type:'line',smooth:true,symbol:'none',stack:'a',areaStyle:{normal:{}},data,
        }
    ]
}
setInterval(function(){
    addData(true)
    myChart.setOption({
        xAxis:{
            data:date,
        },
        series:[
            {name:'deal',data}
        ]
    })
},500)
```
