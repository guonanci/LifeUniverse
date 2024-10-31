```js
// Grouping resources
import React from "react";
import { Chart } from "react-google-charts";

const columns = [
  { type: "string", label: "Task ID" },
  { type: "string", label: "Task Name" },
  { type: "string", label: "Resource" },
  { type: "date", label: "Start Date" },
  { type: "date", label: "End Date" },
  { type: "number", label: "Duration" },
  { type: "number", label: "Percent Complete" },
  { type: "string", label: "Dependencies" },
];

const rows = [
  [
    "Research",
    "Find sources",
    null,
    new Date(2015, 0, 1),
    new Date(2015, 0, 5),
    null,
    100,
    null,
  ],
  [
    "Write",
    "Write paper",
    "write",
    null,
    new Date(2015, 0, 9),
    3 * 24 * 60 * 60 * 1000,
    25,
    "Research,Outline",
  ],
  [
    "Cite",
    "Create bibliography",
    "write",
    null,
    new Date(2015, 0, 7),
    1 * 24 * 60 * 60 * 1000,
    20,
    "Research",
  ],
  [
    "Complete",
    "Hand in paper",
    "complete",
    null,
    new Date(2015, 0, 10),
    1 * 24 * 60 * 60 * 1000,
    0,
    "Cite,Write",
  ],
  [
    "Outline",
    "Outline paper",
    "write",
    null,
    new Date(2015, 0, 6),
    1 * 24 * 60 * 60 * 1000,
    100,
    "Research",
  ],
];

export const data = [columns, ...rows];

export function App() {
  return <Chart chartLanguage='zh-CN' chartType="Gantt"
  width="100%" height="50%" data={data} options={
    {
      gantt: {
        trackHeight: 30,
      }}
  } />;
}
// No dependencies
import React from "react";
import { Chart } from "react-google-charts";

const columns = [
  { type: "string", label: "Task ID" },
  { type: "string", label: "Task Name" },
  { type: "string", label: "Resource" },
  { type: "date", label: "Start Date" },
  { type: "date", label: "End Date" },
  { type: "number", label: "Duration" },
  { type: "number", label: "Percent Complete" },
  { type: "string", label: "Dependencies" },
];

const rows = [
  [
    "2014Spring",
    "Spring 2014",
    "spring",
    new Date(2014, 2, 22),
    new Date(2014, 5, 20),
    null,
    100,
    null,
  ],
  [
    "2014Summer",
    "Summer 2014",
    "summer",
    new Date(2014, 5, 21),
    new Date(2014, 8, 20),
    null,
    100,
    null,
  ],
  [
    "2014Autumn",
    "Autumn 2014",
    "autumn",
    new Date(2014, 8, 21),
    new Date(2014, 11, 20),
    null,
    100,
    null,
  ],
  [
    "2014Winter",
    "Winter 2014",
    "winter",
    new Date(2014, 11, 21),
    new Date(2015, 2, 21),
    null,
    100,
    null,
  ],
  [
    "2015Spring",
    "Spring 2015",
    "spring",
    new Date(2015, 2, 22),
    new Date(2015, 5, 20),
    null,
    50,
    null,
  ],
  [
    "2015Summer",
    "Summer 2015",
    "summer",
    new Date(2015, 5, 21),
    new Date(2015, 8, 20),
    null,
    0,
    null,
  ],
  [
    "2015Autumn",
    "Autumn 2015",
    "autumn",
    new Date(2015, 8, 21),
    new Date(2015, 11, 20),
    null,
    0,
    null,
  ],
  [
    "2015Winter",
    "Winter 2015",
    "winter",
    new Date(2015, 11, 21),
    new Date(2016, 2, 21),
    null,
    0,
    null,
  ],
  [
    "Football",
    "Football Season",
    "sports",
    new Date(2014, 8, 4),
    new Date(2015, 1, 1),
    null,
    100,
    null,
  ],
  [
    "Baseball",
    "Baseball Season",
    "sports",
    new Date(2015, 2, 31),
    new Date(2015, 9, 20),
    null,
    14,
    null,
  ],
  [
    "Basketball",
    "Basketball Season",
    "sports",
    new Date(2014, 9, 28),
    new Date(2015, 5, 20),
    null,
    86,
    null,
  ],
  [
    "Hockey",
    "Hockey Season",
    "sports",
    new Date(2014, 9, 8),
    new Date(2015, 5, 21),
    null,
    89,
    null,
  ],
];

export const data = [columns, ...rows];

export const options = {
  height: 400,
  gantt: {
    trackHeight: 30,
  },
};

export function App() {
  return (
    <Chart
      chartType="Gantt"
      width="100%"
      height="50%"
      data={data}
      options={options}
    />
  );
}
// Critical path
import React from "react";
import { Chart } from "react-google-charts";

const columns = [
  { type: "string", label: "Task ID" },
  { type: "string", label: "Task Name" },
  { type: "string", label: "Resource" },
  { type: "date", label: "Start Date" },
  { type: "date", label: "End Date" },
  { type: "number", label: "Duration" },
  { type: "number", label: "Percent Complete" },
  { type: "string", label: "Dependencies" },
];

const rows = [
  [
    "Research",
    "Find sources",
    null,
    new Date(2015, 0, 1),
    new Date(2015, 0, 5),
    null,
    100,
    null,
  ],
  [
    "Write",
    "Write paper",
    "write",
    null,
    new Date(2015, 0, 9),
    3 * 24 * 60 * 60 * 1000,
    25,
    "Research,Outline",
  ],
  [
    "Cite",
    "Create bibliography",
    "write",
    null,
    new Date(2015, 0, 7),
    1 * 24 * 60 * 60 * 1000,
    20,
    "Research",
  ],
  [
    "Complete",
    "Hand in paper",
    "complete",
    null,
    new Date(2015, 0, 10),
    1 * 24 * 60 * 60 * 1000,
    0,
    "Cite,Write",
  ],
  [
    "Outline",
    "Outline paper",
    "write",
    null,
    new Date(2015, 0, 6),
    1 * 24 * 60 * 60 * 1000,
    100,
    "Research",
  ],
];

export const data = [columns, ...rows];

export const options = {
  gantt: {
    criticalPathEnabled: true,
    criticalPathStyle: {
      stroke: "#e64a19",
      strokeWidth: 5,
    },
  },
};

export function App() {
  return (
    <Chart
      chartType="Gantt"
      width="100%"
      height="50%"
      data={data}
      options={options}
    />
  );
}
// Computed Start End From Duration​
import React from "react";
import { Chart } from "react-google-charts";

const columns = [
  { type: "string", label: "Task ID" },
  { type: "string", label: "Task Name" },
  { type: "string", label: "Resource" },
  { type: "date", label: "Start Date" },
  { type: "date", label: "End Date" },
  { type: "number", label: "Duration" },
  { type: "number", label: "Percent Complete" },
  { type: "string", label: "Dependencies" },
];

const rows = [
  [
    "toTrain",
    "Walk to train stop",
    "walk",
    null,
    null,
    5 * 60 * 1000,
    100,
    null,
  ],
  ["music", "Listen to music", "music", null, null, 70 * 60 * 1000, 100, null],
  [
    "wait",
    "Wait for train",
    "wait",
    null,
    null,
    10 * 60 * 1000,
    100,
    "toTrain",
  ],
  ["train", "Train ride", "train", null, null, 45 * 60 * 1000, 75, "wait"],
  ["toWork", "Walk to work", "walk", null, null, 10 * 60 * 1000, 0, "train"],
  ["work", "Sit down at desk", null, null, null, 2 * 60 * 1000, 0, "toWork"],
];

export const data = [columns, ...rows];

export const options = {
  height: 275,
  gantt: {
    defaultStartDateMillis: new Date(2015, 3, 28),
  },
};

export function App() {
  return (
    <Chart
      chartType="Gantt"
      width="100%"
      height="50%"
      data={data}
      options={options}
    />
  );
}
// Simple Example
import React from "react";
import { Chart } from "react-google-charts";

function daysToMilliseconds(days: number) {
  return days * 24 * 60 * 60 * 1000;
}

const columns = [
  { type: "string", label: "Task ID" },
  { type: "string", label: "Task Name" },
  { type: "date", label: "Start Date" },
  { type: "date", label: "End Date" },
  { type: "number", label: "Duration" },
  { type: "number", label: "Percent Complete" },
  { type: "string", label: "Dependencies" },
];

const rows = [
  [
    "Research",
    "Find sources",
    new Date(2015, 0, 1),
    new Date(2015, 0, 5),
    null,
    100,
    null,
  ],
  [
    "Write",
    "Write paper",
    null,
    new Date(2015, 0, 9),
    daysToMilliseconds(3),
    25,
    "Research,Outline",
  ],
  [
    "Cite",
    "Create bibliography",
    null,
    new Date(2015, 0, 7),
    daysToMilliseconds(1),
    20,
    "Research",
  ],
  [
    "Complete",
    "Hand in paper",
    null,
    new Date(2015, 0, 10),
    daysToMilliseconds(1),
    0,
    "Cite,Write",
  ],
  [
    "Outline",
    "Outline paper",
    null,
    new Date(2015, 0, 6),
    daysToMilliseconds(1),
    100,
    "Research",
  ],
];

export const data = [columns, ...rows];

export function App() {
  return <Chart chartType="Gantt" width="100%" height="50%" data={data} />;
}


// Reference https://developers.google.com/chart/interactive/docs/roles
export enum GoogleDataTableColumnRoleType {
  annotation = "annotation",
  annotationText = "annotationText",
  certainty = "certainty",
  emphasis = "emphasis",
  interval = "interval",
  scope = "scope",
  style = "style",
  tooltip = "tooltip",
  domain = "domain",
}

export type GoogleDataTableColumn =
  | {
      type: GoogleDataTableColumnType;
      label?: string; //  A label for the column.
      role?: GoogleDataTableColumnRoleType;
      pattern?: string;
      p?: {};
      id?: string;
    }
  | string;

// Ref : https://developers.google.com/chart/interactive/docs/reference#dataparam
```

在 `react-google-charts` 中，可以通过设置 `tooltip` 选项来自定义每行的 `title`（工具提示中显示的内容）。对于甘特图，`tooltip` 通常是自动生成的，但你可以通过配置数据或者使用自定义的 HTML 内容来调整显示。

### 1. **通过列设置自定义 Tooltip**

你可以在数据表中添加专门的 `tooltip` 列来控制每一行的 `title` 内容。

#### 数据格式修改

在你的数据中，可以使用 `{type: 'string', role: 'tooltip'}` 来定义自定义 `tooltip` 列。通过这样的方法，你可以为每一行的任务自定义提示信息。

### 示例代码

```jsx
import React from 'react';
import { Chart } from 'react-google-charts';

const GanttChart = () => {
  const data = [
    [
      { type: 'string', label: 'Task ID' },
      { type: 'string', label: 'Task Name' },
      { type: 'string', label: 'Resource' },
      { type: 'date', label: 'Start Date' },
      { type: 'date', label: 'End Date' },
      { type: 'number', label: 'Duration' },
      { type: 'number', label: 'Percent Complete' },
      { type: 'string', label: 'Dependencies' },
      { type: 'string', role: 'tooltip', label: 'Tooltip' }, // 新增 tooltip 列
    ],
    [
      'Research', 'Find sources', null, new Date(2024, 8, 1),
      new Date(2024, 8, 5), null, 100, null,
      'Research Phase: Find sources between 1st to 5th Sept.' // 自定义 tooltip
    ],
    [
      'Write', 'Write paper', 'paper', new Date(2024, 8, 6),
      new Date(2024, 8, 9), null, 25, 'Research',
      'Writing Phase: Write from 6th to 9th Sept.'
    ],
    [
      'Cite', 'Create bibliography', 'paper', new Date(2024, 8, 10),
      new Date(2024, 8, 11), null, 20, 'Research',
      'Citing Phase: 10th to 11th Sept.'
    ],
    [
      'Complete', 'Hand in paper', 'complete', new Date(2024, 8, 12),
      new Date(2024, 8, 13), null, 0, 'Cite,Write',
      'Completion: Hand in paper on 12th Sept.'
    ],
  ];

  const options = {
    height: 400,
    gantt: {
      trackHeight: 30,
    },
    tooltip: {
      isHtml: true, // 如果你想使用 HTML 格式化工具提示
    },
  };

  return (
    <Chart
      chartType="Gantt"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

export default GanttChart;
```

### 2. **通过 `tooltip` 选项来自定义**

可以通过 `options.tooltip` 来进一步控制工具提示的行为。`react-google-charts` 允许自定义 `tooltip` 的格式和样式。

```js
const options = {
  tooltip: {
    isHtml: true, // 允许使用 HTML 格式的工具提示
    trigger: 'focus', // 工具提示触发条件，可以是 'focus' 或 'selection'
  },
};
```

### 3. **自定义 HTML Tooltip（高级）**

如果你想完全自定义工具提示的内容和样式，可以使用 HTML 格式的 `tooltip`。通过 `options.tooltip.isHtml = true`，你可以为 `tooltip` 列提供 HTML 内容，进一步丰富提示信息的展示。

```jsx
const data = [
  [
    { type: 'string', label: 'Task ID' },
    { type: 'string', label: 'Task Name' },
    { type: 'string', label: 'Resource' },
    { type: 'date', label: 'Start Date' },
    { type: 'date', label: 'End Date' },
    { type: 'number', label: 'Duration' },
    { type: 'number', label: 'Percent Complete' },
    { type: 'string', label: 'Dependencies' },
    { type: 'string', role: 'tooltip', label: 'Tooltip' }, // Tooltip列
  ],
  [
    'Research', 'Find sources', null, new Date(2024, 8, 1),
    new Date(2024, 8, 5), null, 100, null,
    '<div><strong>Research Phase</strong><br>Find sources from 1st to 5th Sept.</div>' // HTML 格式 Tooltip
  ],
  // ... 其他数据
];
```

### 总结

- 如果你希望为每一行设置自定义的 `tooltip`，可以在数据表中添加专门的 `tooltip` 列，并为每个数据行提供相应的 `title` 或描述。
- 使用 `options.tooltip.isHtml = true` 可以允许你使用 HTML 格式的工具提示，使其更灵活。

```js
[
    [
      { type: 'string', label: '任务 ID' },
      { type: 'string', label: '任务名' },
      { type: 'string', label: '计划时间' },
      { type: 'date', label: '开始时间' },
      { type: 'date', label: '结束时间' },
      { type: 'number', label: '阶段' },
      { type: 'number', label: '进度比' },
      { type: 'string', label: '依赖项' },
      // { type: 'string', role: 'tooltip', label: '提示' }, // 自定义 tooltip 列
    ],
    [
      'Research', '找文献', '研究团队', new Date(2024, 8, 1),
      new Date(2024, 8, 5), null, 100, null,
      '<div><strong>Task Name:</strong> Find sources<br>' +
      '<strong>Resource:</strong> Research Team<br>' +
      '<strong>Start Date:</strong> 1st Sept 2024<br>' +
      '<strong>End Date:</strong> 5th Sept 2024</div>'  // 自定义 tooltip 内容，显示 label
    ],
    [
      'Write', '写论文……', '作者', new Date(2024, 8, 6),
      new Date(2024, 8, 9), null, 25, 'Research',
      '<div><strong>Task Name:</strong> Write paper<br>' +
      '<strong>Resource:</strong> Author<br>' +
      '<strong>Start Date:</strong> 6th Sept 2024<br>' +
      '<strong>End Date:</strong> 9th Sept 2024</div>'
    ],
    [
      'Cite', 'Create bibliography', 'Author', new Date(2024, 8, 10),
      new Date(2024, 8, 11), null, 20, 'Research',
      '<div><strong>Task Name:</strong> Create bibliography<br>' +
      '<strong>Resource:</strong> Author<br>' +
      '<strong>Start Date:</strong> 10th Sept 2024<br>' +
      '<strong>End Date:</strong> 11th Sept 2024</div>'
    ],
    [
      'Complete', '提交报告', 'Submission', new Date(2024, 8, 12),
      new Date(2024, 8, 13), null, 0, 'Cite,Write',
      '<div><strong>Task Name:</strong> Hand in paper<br>' +
      '<strong>Resource:</strong> Submission<br>' +
      '<strong>Start Date:</strong> 12th Sept 2024<br>' +
      '<strong>End Date:</strong> 13th Sept 2024</div>'
    ],
  ]
```

# gantt-schedule-timeline-calendar

搞明白example-complex，看看到底能否完全满足需求？
<https://github.com/neuronetio/gantt-schedule-timeline-calendar?tab=readme-ov-file>

## style

reset.css

## dayjs

weekOfYear,advancedFormat

## examples

### custom-period

CalendarScrollPlugin,DependencyLinesPlugin,SelectionPlugin,TimelinePointerPlugin,ItemMovementPlugin,ItemResizingPlugin


## plugins

### movement-plugin

- Item can change row? 更换行号
- Item can collide with others in the same row? 重叠或碰撞动作是否被允许

### selection-plugin

```js
const
```

### item-image-plugin

### resizing-plugin

```js
ItemResizing({
  events:{
    onStart({items}){
      console.log('Resizing start',items.after)
      return items.after
    },
    onResize({vido,items}){
      const filtered = items.after
      .map((item,i)=>{
        if(!isItemResizable(item)) return items.before[index]
        return item
      })
      .map((itm,i)=>limitTime(itm,items.before[index]))
      .map((itm)=>snapToTimeSeparately(itm,vido))
    }
  }
})
```

## 交互

禁止拖拽的时机？还是任何时候都禁止拖拽？

任务条的状态，以及任务状态col的添加？

拖拽

任务状态、任务的实际执行时间段、以及任务的计划时间段；
