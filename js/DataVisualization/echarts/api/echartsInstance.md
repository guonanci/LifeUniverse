通过 echarts.init 创建的实例。

# group
stringnumber
图表的分组，用于联动

# setOption
```ts
setOption(option:Object,notMerge?:boolean,lazyUpdate?:boolean) or
(option:Object,opts?:{
  notMerge?:boolean,replaceMerge?:string|stirng[],lazyUpdate?:boolean
})
```
设置图表实例的配置项以及数据，万能接口，所有参数和数据的修改都可以通过 setOption 完成，ECharts 会合并新的参数和数据，然后刷新图表。如果开启动画的话，ECharts 找到两组数据之间的差异然后通过合适的动画去表现数据的变化。

# getOption
# resize
```js
(opts?: {
    width?: number|string,
    height?: number|string,
    silent?: boolean,
    animation?: {
        duration?: number
        easing?: string
    }
}) => ECharts
```
改变图表尺寸，在容器大小发生改变时需要手动调用。
# dispatchAction
```js
Function
(payload: Object)
触发图表行为，例如图例开关legendToggleSelect, 数据区域缩放dataZoom，显示提示框showTip等等，更多见 action 和 events 的文档。

payload 参数可以通过batch属性同时触发多个行为。

注：在 ECharts 2.x 是通过 myChart.component.tooltip.showTip 这种形式调用相应的接口触发图表行为，入口很深，而且涉及到内部组件的组织。因此在 ECharts 3 里统一改为 dispatchAction 的形式。

示例

myChart.dispatchAction({
    type: 'dataZoom',
    start: 20,
    end: 30
});
// 可以通过 batch 参数批量分发多个 action
myChart.dispatchAction({
    type: 'dataZoom',
    batch: [{
        // 第一个 dataZoom 组件
        start: 20,
        end: 30
    }, {
        // 第二个 dataZoom 组件
        dataZoomIndex: 1,
        start: 10,
        end: 20
    }]
})
```

