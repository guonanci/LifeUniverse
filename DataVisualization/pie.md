```js
import React, { useRef, useEffect } from 'react'
import { Pie } from '@ant-design/charts'

const DemoPie: React.FC = () => {
  const dataRef = useRef({ curIndex: 0, timer: undefined })
  var data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ]
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    interactions: [
      {
        type: 'element-single-selected',
      },
    ],
  }
  return (
    <Pie
      {...config}
      onReady={(plot) => {
        if (!plot) return
        const { chart } = plot
        const { elements } = chart.geometries[0]
        const maxIndex = elements.length - 1
        const animationFn = () => {
          elements.forEach((ele, index) => {
            ele.setState('selected', index === dataRef.current.curIndex)
          })
        }
        dataRef.current.curIndex = 0
        clearInterval(dataRef.current.timer)
        animationFn()
        dataRef.current.timer = setInterval(() => {
          dataRef.current.curIndex++
          if (dataRef.current.curIndex > maxIndex) {
            dataRef.current.curIndex = 0
          }
          animationFn()
        }, 500)
      }}
    />
  )
}

export default DemoPie
```

https://codesandbox.io/s/festive-platform-qs7i4?file=/App.tsx

1.折线图、区域折线图、柱状图中新增配置“tips”在菜单中可配置默认显示最后一项 tips
参考线上例子 https://codesandbox.io/s/magical-currying-n14dk?file=/App.tsx 2.联动交互升级，如何选中图中某一项（用于高亮突出图表联动操作）
下方仅适用于 饼图、柱状图、条形图，其他类图形还需自行研究文档
参考线上例子https://codesandbox.io/s/festive-platform-qs7i4?file=/App.tsx 3.如何实现轮播饼图
如何在轮播过程中发送联动参数，请参考图表已有逻辑
参考线上例子https://codesandbox.io/s/cranky-water-0jo03?file=/App.tsx
