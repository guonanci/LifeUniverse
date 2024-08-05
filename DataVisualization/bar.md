# 镜像分组（bar/dodge or bidirectional）

```js
import { BidirectionalBar } from '@antv/g2plot'

export const data = [
  {
    country: '乌拉圭',
    '2016年耕地总面积': 13.4,
    '2016年转基因种植面积': 12.3,
    '2017年耕地总面积': 13.4,
    '2017年转基因种植面积': 12.3,
  },
  {
    country: '巴拉圭',
    '2016年耕地总面积': 14.4,
    '2016年转基因种植面积': 6.3,
    '2017年耕地总面积': 14.4,
    '2017年转基因种植面积': 6.3,
  },
  {
    country: '南非',
    '2016年耕地总面积': 18.4,
    '2016年转基因种植面积': 8.3,
    '2017年耕地总面积': 18.4,
    '2017年转基因种植面积': 8.3,
  },
  {
    country: '巴基斯坦',
    '2016年耕地总面积': 34.4,
    '2016年转基因种植面积': 13.8,
    '2017年耕地总面积': 34.4,
    '2017年转基因种植面积': 13.8,
  },
  {
    country: '阿根廷',
    '2016年耕地总面积': 44.4,
    '2016年转基因种植面积': 19.5,
    '2017年耕地总面积': 44.4,
    '2017年转基因种植面积': 19.5,
  },
  {
    country: '巴西',
    '2016年耕地总面积': 24.4,
    '2016年转基因种植面积': 18.8,
    '2017年耕地总面积': 24.4,
    '2017年转基因种植面积': 18.8,
  },
  {
    country: '加拿大',
    '2016年耕地总面积': 54.4,
    '2016年转基因种植面积': 24.7,
    '2017年耕地总面积': 54.4,
    '2017年转基因种植面积': 24.7,
  },
  {
    country: '中国',
    '2016年耕地总面积': 104.4,
    '2016年转基因种植面积': 5.3,
    '2017年耕地总面积': 104.4,
    '2017年转基因种植面积': 5.3,
  },
  {
    country: '美国',
    '2016年耕地总面积': 165.2,
    '2016年转基因种植面积': 72.9,
    '2017年耕地总面积': 165.2,
    '2017年转基因种植面积': 72.9,
  },
]

const BidirectionalBarPlot = new BidirectionalBar('container', {
  data,
  xField: ['country'],
  isGroup: true,
  xAxis: {
    position: 'bottom',
  },
  interactions: [{ type: 'active-region' }],
  yField: [
    '2016年耕地总面积',
    '2016年转基因种植面积',
    '2017年耕地总面积',
    '2017年转基因种植面积',
  ],
  tooltip: {
    shared: true,
    showMarkers: false,
  },
})

BidirectionalBarPlot.render()

// not works(two measures)
// https://g2.antv.vision/zh/examples/bar/dodge#bar5

import { BidirectionalBar } from '@antv/g2plot'

export const data = [
  {
    country: '乌拉圭',
    '2016年耕地总面积': 13.4,
    '2016年转基因种植面积': 12.3,
    '2017年耕地总面积': 13.4,
    '2017年转基因种植面积': 12.3,
  },
  {
    country: '巴拉圭',
    '2016年耕地总面积': 14.4,
    '2016年转基因种植面积': 6.3,
    '2017年耕地总面积': 14.4,
    '2017年转基因种植面积': 6.3,
  },
  {
    country: '南非',
    '2016年耕地总面积': 18.4,
    '2016年转基因种植面积': 8.3,
    '2017年耕地总面积': 18.4,
    '2017年转基因种植面积': 8.3,
  },
  {
    country: '巴基斯坦',
    '2016年耕地总面积': 34.4,
    '2016年转基因种植面积': 13.8,
    '2017年耕地总面积': 34.4,
    '2017年转基因种植面积': 13.8,
  },
  {
    country: '阿根廷',
    '2016年耕地总面积': 44.4,
    '2016年转基因种植面积': 19.5,
    '2017年耕地总面积': 44.4,
    '2017年转基因种植面积': 19.5,
  },
  {
    country: '巴西',
    '2016年耕地总面积': 24.4,
    '2016年转基因种植面积': 18.8,
    '2017年耕地总面积': 24.4,
    '2017年转基因种植面积': 18.8,
  },
  {
    country: '加拿大',
    '2016年耕地总面积': 54.4,
    '2016年转基因种植面积': 24.7,
    '2017年耕地总面积': 54.4,
    '2017年转基因种植面积': 24.7,
  },
  {
    country: '中国',
    '2016年耕地总面积': 104.4,
    '2016年转基因种植面积': 5.3,
    '2017年耕地总面积': 104.4,
    '2017年转基因种植面积': 5.3,
  },
  {
    country: '美国',
    '2016年耕地总面积': 165.2,
    '2016年转基因种植面积': 72.9,
    '2017年耕地总面积': 165.2,
    '2017年转基因种植面积': 72.9,
  },
]

const BidirectionalBarPlot = new BidirectionalBar('container', {
  data,
  xField: 'country',
  xAxis: {
    position: 'bottom',
  },
  interactions: [{ type: 'active-region' }],
  yField: [
    '2016年耕地总面积',
    '2016年转基因种植面积',
    '2017年耕地总面积',
    '2017年转基因种植面积',
  ],
  tooltip: {
    shared: true,
    showMarkers: false,
  },
})

BidirectionalBarPlot.render()
```

fill 跟主题设置相关。

对称条形图暂不支持分组设置；对称条形图的最左侧（水平方向）是在底部位置

我们要从渲染层面理解：

```js
const yField = [
  `${prefix}yField${yFieldSuffix}`,
  `${prefix}yField${yFieldSuffix}`,
]
const seriesField = `${prefix}seriesField`
```

```js
import React, { useState, useEffect } from 'react'
import { BidirectionalBar } from '@ant-design/charts'

const DemoBidirectionalBar: React.FC = () => {
  var data = [
    {
      country: '乌拉圭',
      region: 's',
      '2016年耕地总面积': 13.4,
      '2016年转基因种植面积': 12.3,
    },
    {
      country: '乌拉圭',
      region: 't',
      '2016年耕地总面积': 13.4,
      '2016年转基因种植面积': 12.3,
    },
    {
      country: '巴拉圭',
      region: 's',
      '2016年耕地总面积': 14.4,
      '2016年转基因种植面积': 6.3,
    },
    {
      country: '巴拉圭',
      region: 't',
      '2016年耕地总面积': 14.4,
      '2016年转基因种植面积': 6.3,
    },
    {
      country: '南非',
      region: 't',
      '2016年耕地总面积': 18.4,
      '2016年转基因种植面积': 8.3,
    },
    {
      country: '南非',
      region: 's',
      '2016年耕地总面积': 18.4,
      '2016年转基因种植面积': 8.3,
    },
    {
      country: '巴基斯坦',
      region: 's',
      '2016年耕地总面积': 34.4,
      '2016年转基因种植面积': 13.8,
    },
    {
      country: '巴基斯坦',
      region: 't',
      '2016年耕地总面积': 34.4,
      '2016年转基因种植面积': 13.8,
    },
  ]
  var config = {
    data: data,
    seriesField: 'region',
    isGroup: true,
    xField: 'country',
    xAxis: { position: 'bottom' },
    interactions: [{ type: 'active-region' }],
    yField: ['2016年耕地总面积', '2016年转基因种植面积'],
    tooltip: {
      shared: true,
      showMarkers: false,
    },
    background: 'black',
  }
  return <BidirectionalBar {...config} />
}

export default DemoBidirectionalBar
```

columnBg 和 bar 的圆角、背景设置失效（项目当中失效，codesandbox 中有效：）

```js
import React, { useState, useEffect } from 'react'
import { BidirectionalBar } from '@ant-design/charts'

const DemoBidirectionalBar: React.FC = () => {
  var data = [
    {
      country: '乌拉圭',
      region: 's',
      '2016年耕地总面积': 13.4,
      '2016年转基因种植面积': 12.3,
    },
    {
      country: '乌拉圭',
      region: 't',
      '2016年耕地总面积': 13.4,
      '2016年转基因种植面积': 12.3,
    },
    {
      country: '巴拉圭',
      region: 's',
      '2016年耕地总面积': 14.4,
      '2016年转基因种植面积': 6.3,
    },
    {
      country: '巴拉圭',
      region: 't',
      '2016年耕地总面积': 14.4,
      '2016年转基因种植面积': 6.3,
    },
    {
      country: '南非',
      region: 't',
      '2016年耕地总面积': 18.4,
      '2016年转基因种植面积': 8.3,
    },
    {
      country: '南非',
      region: 's',
      '2016年耕地总面积': 18.4,
      '2016年转基因种植面积': 8.3,
    },
    {
      country: '巴基斯坦',
      region: 's',
      '2016年耕地总面积': 34.4,
      '2016年转基因种植面积': 13.8,
    },
    {
      country: '巴基斯坦',
      region: 't',
      '2016年耕地总面积': 34.4,
      '2016年转基因种植面积': 13.8,
    },
  ]
  var config = {
    data: data,
    xField: 'country',
    barStyle: { radius: 14, maxBarWidth: 10, opacity: 0.2, fillOpacity: 0.8 },
    columnBackground: {
      style: {
        fill: 'blue',
        radius: 10,
        fillOpacity: 0.1,
      },
    },
    // xAxis: { position: 'bottom' },
    interactions: [{ type: 'active-region' }],
    yField: ['2016年耕地总面积', '2016年转基因种植面积'],
    tooltip: {
      shared: true,
      showMarkers: false,
    },
    background: 'black',
  }
  return <BidirectionalBar {...config} />
}

export default DemoBidirectionalBar
// magicbi_web/node_modules/@antv/g2/esm/interface.d.ts
// https://gitlab.qingxueketang.com/magicbi/magicbi_web/blob/feat/2021-10-guoyao/node_modules/@antv/g2/esm/interface.d.ts
export declare type GeometryLabelContentCallback = (data: Datum, mappingData: MappingDatum, index: number) => string | IShape | IGroup;

```

正负值显示出错（负值在右侧）

文档错误，要看源码（minColumnWidth 和 minBarWidth）

# 圆形柱状图

G2Chart 封装
