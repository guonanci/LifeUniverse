虚拟滚动会在数据量较大时自动开启（10000 行或 10000 列）
虚拟滚动是表格的核心特性之一，在为表格实现新功能时，我们会确保新功能不与虚拟滚动冲突。
表格组件的基本用法和 antd/fusion 表格类似，传入 dataSource 来指定表格的数据源，传入 columns 来对表格的列进行配置。

## 特点

- 高性能，内置虚拟滚动，数据量较大时自动开启
- 简单灵活的 API，丰富的定制能力
- 实用的表格特性：表头吸顶 & 左侧/右侧锁列 & 粘性定位的滚动条

## 表格适用场景

- 需要用表格展示大量数据，对表格性能较为敏感
- 页面没有引入 React 组件库，需要一个尺寸较小的表格组件
- 原有表格组件可定制能力不够，需要更加灵活的表格组件

## 兼容性说明

表格只兼容 react ^16.8.0 || ^17.0.0
表格用到了大量较新的浏览器 API，只兼容较新版本的 PC 端浏览器或手机浏览器，详见该 issue

# 效果演示

↑ 通过 dataSource 传入一个长度超过 5 万的数组，表格依旧流畅。当表格向下滚动时，BaseTable 默认会为表头设置 style.position=sticky，表头将会吸附在页面或滚动容器的顶部。在线示例

↑ BaseTable 提供了灵活且丰富的 API，方便上层根据各类业务需求对表格进行定制，定制的内容包括单元格内容与样式、鼠标事件回调等。 留存矩阵 在线示例， 投入产出分析表格 在线示例

↑ 优化的加载图标位置，加载图标会位于表格的中心位置，并始终处于可见状态。

↑ 基于 BaseTable 的简单透视表格。一般来说，透视表展示的数据量较大，不过 BaseTable 内置的虚拟滚动保证了表格在大数据量下仍具有很好的性能，上层不需要过多担心性能问题。 在线示例

# changelog

## v2.4.0

- refactor: remove `props.flowRoot`，上层不需要指定，表格内部会自动算出正确的值
- fix:表格位于`scale(...)/rotate(...)`div 下的虚拟滚动尺寸计算问题
- fix：表格位于`display:none`div 下频繁重渲染问题
- 其他
  - 文档完善
  - 交叉表、交叉树状表 API 变得宽松

## v2.3 2021-01-29

- feat:新增表格页脚（总结栏）：`props.footerDataSource`
  - `props.isStickyFooter`是否置底
- feat:自定义滚动条样式
  - 新增一些 CSS 类名用来方便上层对滚动条样式进行设置
  - 新增`props.stickyScrollHeight`来指定自定义滚动条的高度，以配合自定义滚动条样式
  - 其他
    - 表格排序功能优化
    - 新增 props.hasStickyScroll 控制粘性滚动条是否出现

## v2.2 2020-12-11

- fix: 将 react 标记为 peerDependencies

## 2.1

- feat: [treeSelect](https://ali-react-table.js.org/docs/pipeline/features/tree-select/) 功能

## 2.0

- feat 新的表格功能拓展机制 pipeline 与默认的拓展功能
- feat 新的 BaseTable props，例如`emptyCellHeight，components，estimatedRowHeight`
- refactor:
  - 表格 DOM 结构优化，css 变量重构
- 其他：
  - ⭐ 全新的文档网站
  - `BaseTable props primaryKey`函数用法参数修改
  - 更美观的锁列阴影

## 1.2

- 新增`useAutoWidthTransform`自适应列宽
- 其他：
  - 修复 mergeCellProps 中 lodash.merge 原地修改对象的问题
  - 放宽`buildCrossTable,buildCrossTreeTable`的参数限制
  - CrossTable 和 CrossTreeTable 添加 tableRef
  - 将 makeTreeModeTransform onClick 挂到单元格上
  - makeColResizeTransform 修复 documentElm cursor 没有被重置的问题，新增 options.expanderVisibility 可隐藏可伸缩列

## 1.4

- 优化锁列实现方式

## 1.0

[迁移指南](https://ali-react-table.js.org/blog/2020/08/13/from-0.14-to-1.0)

- 移除 ali-react-table/biz
- Break Change**重构表格 DOM 结构，简化 CSS variable**
- Break Change**交叉表样式调整**
- 其他：
  - loading 图标位置计算优化
  - 优化了表格 dom 结构和表格边框
  - 自动开启虚拟滚动的行数、列数阈值从 80 到 100
  - **Break Change supportsExpand=TRUE 且 expandKeys=Null undefined 时，covertDrillTreeToCrossTree 将直接抛出异常**

## 0.14

迁移指南

- **BC（Break Change）：移除 ali-react-table/biz 入口**
  - 移除 commonTransforms，commonTransforms.XX 改名为 makeXXTransform
  - 移除 useOperationBar 和 CustomColsDialog
  - 请直接从 ali-react-table 导入阿皮。老的 API 在 1.0 以前不会真正移除，但添加了过时的警告
- **BC：移除 dvt-aggregation 依赖，移除 createAggregateFunction API**
  - 如果原先有使用 createAggregateFunction 函数，请手动安装 dvt-aggregation
- 其他：
  - 文档目录优化
  - 支持 SSR
  - 新增 mergeCellProps 方法

## 开源前的许多小版本。。

# BaseTable（BT）

## basic-usage

最主要的表格组件，提供了基本的表格渲染能力。BaseTable 自带了一些非常实用的特性（表头吸顶、加载动画、锁列、单元格合并、页脚），并自带虚拟滚动，支持大数据量的渲染
BT 只支持基本的表格渲染能力，不需要依赖特定组件库，故其打包体积很小，但也意味着一些常见的表格功能（排序、过滤、行选择、树状模式）需要在上层进行拓展（pipeline）
基本的 Table 包含行和列，使用 columns 属性来定义列的信息，使用传入的 dataSource 属性数据来创建行，这两个属性也是表格组件必传的 props（其他所有 props 都是可选的）。

dataSource 提供表格数据，数组中的每一项对应表格的一行
columns 指定表格中包含哪些列，column.code 与 dataSource 中的数据字段对应
https://ali-react-table.js.org/docs/table/basic-usage

## examples

EmptyContent，isLoading，LoadingContentWrapper，LoadingIcon
column.lock=true，isStickyHeader 默认为 TRUE。

### 表头分组

在 columns.children=[...] 中添加子节点，<BaseTable /> 会绘制相应的嵌套表头结构。

### 单元格合并与自定义单元格样式

通过`col.getCellProps(v, record, rowIdx)`返回 colSpan 与 rowSpan 可实现单元格合并。除了 colSpan，rowSpan 外,getCellProps 还可以返回 td 元素的其他 props，例如 className，style，onClick 等等。

### 自定义表格行样式

通过 getRowProps 设置 tr 元素上的 props，例如 className，style，onClick 等等

```js
function customTableRowProps() {
  const { useProvinceDataSource, testProvCols } = assets.ncov19
  const { isLoading, dataSource } = useProvinceDataSource()
  const [lastClickRowIdx, setLastClickRowIdx] = useState(2)
  return (
    <div>
      <p>点击表格行以改变该行样式</p>
      <BaseTable
        style={{ '--bgcolor': 'transparent' }}
        isLoading={isLoading}
        dataSource={dataSource.slice(0, 6)}
        columns={testProvColumns}
        getRowProps={(record, rowIdx) => {
          return {
            style:
              rowIdx === lastClickRowIdx
                ? {
                    outlinedOffset: -2,
                    outline: '2px solid gold',
                    '--hover-bgcolor': 'transparent',
                    background: 'linear-gradient(140deg, #ff000038, #009cff3d)',
                  }
                : {
                    // overwrite style website carries, and can be ignored in actual usage
                    backgroundColor: 'transparent',
                  },
            onClick() {
              setLastClickRowIdx(rowIdx)
            },
          }
        }}
      />
    </div>
  )
}
```

### 限定表格容器大小

style.width or style.maxWidth (height) 限定宽高时，要同时设置 overflow=auto

### 表格页脚

footerDataSource={[...]} 总结栏，默认吸附在表格地步，可通过 isStickyFooter={false}。。
**目前表格页脚还不兼容部分表格拓展，所以尽量只在展示类表格中使用表格页脚。**

## advanced-usage

### VirtualScroll

#### switch

数据量较大时，表格会自动开启虚拟滚动.也可以通过 useVirtual 来调整虚拟滚动功能：

- auto 默认值，表示根据表格的行数或列数自动调整是否开启虚滚
  - 行超过 100，自动开启纵向虚滚
  - 列 100
  - 表头的横向虚滚默认关闭
- 开启所有虚滚
- FALSE 关闭所有虚滚
- 传入一个对象：
  ```js
  {
    horizontal?: boolean | 'auto',
    vertical?: boolean | 'auto',
    header?: boolean | 'auto',
  }
  ```
  此外，水平方向的虚滚要求**所有列都有指定宽带**，推荐设置`<BaseTable dftColWidth={...} />`
  虚滚开启时，如果想要进行单元格合并，则要使用 col.getSpanRect 来设定
- col.getSpanRect 返回一个 SpanRect 对象来表示对应单元所处的合并后的位置
- SpanRect 的具体类型为{inset: number}
  - left/top 是 inclusive 的，right、bottom 是 exclusive 的
    不开启虚滚时，单元格合并可以通过 col.getCellProps(...)返回 colSpan，rowSpan 实现

### 滚动容器（v2.4）

表格组件会自动向上寻找第一个滚动容器，并在该容器内发生虚拟滚动。

你可以为表格设置 styles.overflow=auto 和 styles.height = 300px（也可以设置 width、maxWidth 或 maxHeight），也可以在表格的上层某个元素上设置这些样式。如果没有设置这样样式，表格将在 window 上发生虚拟滚动。

```html
<!-- 滚动发生在表格内部 -->
<BaseTable style={{ overflow: 'auto', maxHeight: 400 }} />

<!-- 滚动发生在指定的 div.scroll-container -->
<div style={{ transform: 'scale(0.8)' }}>
  <div className="scroll-container" style={{ overflow: 'auto', width: 500, height: 300 }}>
    <BaseTable />
  </div>
</div>

<!-- 滚动发生在 window 上 -->
<html>
  <body>
    <h1 />
    <p />
    <p />
    <BaseTable />
    <footer />
  </body>
</html>
```

表格的上层元素支持设置 style.transform，可以出现简单的缩放、平移和旋转。

### 预估行高

在元素被渲染在页面之前，组件是无法获取该元素的尺寸的。为了展示尽量真实的滚动条，表格组件内部需要算出所有行的高度之和。在一行没有被渲染之前，表格内部会使用 props.estimatedRowHeight (默认值为 48）来作为该行的高度，从而计算所有行的高度和。

在实际使用时，实际行高可能与预估行高有较大出入，此时可以设置 estimatedRowHeight 来提升预估高度的准确性。

### 锁列

#### 锁列的传递性

在有列嵌套的情况下（通过 column.children 设置列的子节点，形成列的嵌套结构），锁列具有传递性：

如果一个父节点设置了锁列 lock=true，则其所有子节点将自动被设置为 lock=true
如果一个节点设置了锁列 lock=true，则其父节点和所有祖先节点将被设置为 lock=true
此外，如果所有的列都设置了 lock=true，则整个表格的锁列将不生效。

#### direction

取决于该列在 columns 中的下标：

下标为 0, 1, 2, ... 左侧锁定
下标为 n-1, n-2, n-3, ... 右侧锁定

### getV render

getValue 与 render
column.getValue 与 column.render 都会影响到单元格的渲染内容，但两者有「语义」上的区别：

column.getValue 用于自定义取数方法
默认的取数方法为 row => row[column.code]
getValue 的返回值应当是一个可被序列化的值，该返回值将作为「单元格的值」
column.render 用于自定义单元格的渲染方法
render 可以返回 ReactNode 以在页面上渲染更加丰富的元素
导出表格数据时，「单元格的值」将会导出至 excel 或 json 文件。

### components 替换#

表格内部用到一些子组件来实现加载动画、空表格展现效果等，上层可以通过 props.components 覆盖内部的默认子组件，实现一些自定义的效果。

目标表格支持的自定义子组件较少，列表如下：

LoadingIcon 自定义加载图标
EmptyContent 数据为空时表格的展示内容
LoadingContentWrapper 自定义表格内容的 wrapper div，可用于实现自定义的加载效果

## theming

### CSS 变量#

<BaseTable /> 中大部分样式都是通过 CSS variables 来定义的。 通过覆盖 CSS variables 的值，可以快速定制出一套新的表格主题。

BaseTable 默认只提供了亮色主题，下面的 WebsiteBaseTable.tsx 展示了在文档网站中，我们是如何实现暗色主题的：

```tsx
// WebsiteBaseTable.tsx
import useThemeContext from '@theme/hooks/useThemeContext'
import { BaseTable, BaseTableProps } from 'ali-react-table'
import cx from 'classnames'
import React from 'react'
import styled from 'styled-components'

const DarkSupportBaseTable: any = styled(BaseTable)`
  &.dark {
    --bgcolor: #333;
    --header-bgcolor: #45494f;
    --hover-bgcolor: #46484a;
    --header-hover-bgcolor: #606164;
    --highlight-bgcolor: #191a1b;
    --header-highlight-bgcolor: #191a1b;
    --color: #dadde1;
    --header-color: #dadde1;
    --lock-shadow: rgb(37 37 37 / 0.5) 0 0 6px 2px;
    --border-color: #3c4045;
  }
`

export const WebsiteBaseTable = React.forward<BaseTable, BaseTableProps>(
  (props, ref) => {
    const { isDarkTheme } = useThemeContext()
    return (
      <DarkSupportBaseTable
        ref={ref}
        className={cs({ dark: isDarkTheme }, props.className)}
        {...props}
      />
    )
  }
)
```

### ant design style

[this file](https://github.com/alibaba/ali-react-table/blob/master/packages/website/src/assets/AntdBaseTable.tsx)

- isLoading={true} data loading effect
- className='bordered' 带边框样式
- 'compact'
- 'dark' dark theme

### 自定义滚动条样式

下面的代码片段展示了如何对表格内的滚动条样式进行定制。

纵向滚动条：表格最外层的 div 会包含表格纵向的滚动条，注意下面的 & 选择器可以匹配到该 div。
横向滚动条：表格内横向滚动条会出现在多个 div 中，组件为这些 div 均设置了 .art-horizontal-scroll-container CSS 类名。
注意改变横向滚动条的高度之后，需要相应地为表格设置 props.stickyScrollHeight={newHeight}
ali-react-table 也通过 Classes 对象暴露了相关 div 的类名，推荐使用下面的方式来引用：

Classes.artTableWrapper 表格最外层 div 的 CSS 类名
Classes.horizontalScrollContainer 表格内出现横向滚动条 div 的 CSS 类名

## API

**dataSrc 和 cols**是必传 props，其他 props 均可选
dataSrc:any[]
cols: ArtColumn[]
isLoading: boolean
primaryK: str | (row: any)=>str: 用于指定每一行的 key
传入字符串表示从数据中获取对应字段的值作为 key
传入函数时将调用该函数来生成每一行的 key
不传该 prop 时，表格将使用下标作为每一行的 key
getRowProps (record: any, rowIdx: number)=>React.HTMLAttributes 自定义每一行的 props

字段 类型

- className str 自定义类名
- style React.CSSProperties 自定义内联样式
- hasHeader boolean
- isStickyHeader
- stickyTop 表头吸顶后，距离顶部的距离默认为 0
- useOuterBorder
- dftColWidth
- emptyCellH
- footerDS
- isFooterSticky
- isScrollSticky
- stickyScrollHeight 指定自定义横向滚动条的高度，在定制滚动条样式时有用，默认为 auto
- stickyBtm
- useVirtual
- estimatedRowH
- components 表格内部使用的子组件: components.LoadingIcon,EmptyContent,LoadingContentWrapper（实现自定义的加载效果）:React.ComponentType

col 对象结构

- name 为必传字段
- 对于锁定的列（lock=true），width 为必传项
  - 推荐给所有列都配置 w，伙食给表格配置一个默认列宽
- name, code, getV:(r:any,rowIdx:number)=>any
- render:(v:any,r:any,rowIdx:number)=>ReactNode
- getCellProps: (v:any,r:any,rowIdx:number)=>any
- getSpanRect:(v:any,r:any,rowIdx:number)=>SpanRect 虚滚时设置单元格合并
- title：ReactNode 覆盖 name
- width，align（left,center,right), lock, children
- headerCellProps:React.HTMLAttributes
- **features**: { [key:sr]: any} 功能开关标记，用于对表格功能进行拓展

### CSS 变量列表

`<BaseTable />`中大部分样式都是通过 CSS variables 来定义的，可以通过下面的方式对表格进行风格化：

```tsx
<BaseTable style={{ '--color': '#333', '--cell-border': 'none' }} />
```

目前组件支持的自定义 CSS 变量：

```tsx
export type BaseTableCSSVariables = Partial<{
  // 表格一行的高度该属性将被作为CSS variable，不能使用数字简写
  '--row-height': string
  '--color': string
  '--bgcolor': string
  '--hover-bgcolor': string

  '--highlight-bgcolor': string

  /** 表头中一行的高度，注意该属性将被作为 CSS variable，不能使用数字作为简写 */
  '--header-row-height': string
  /** 表头中的字体颜色 */
  '--header-color': string
  /** 表头的背景色 */
  '--header-bgcolor': string
  /** 表头上鼠标悬停时的背景色 */
  '--header-hover-bgcolor': string
  /** 表头上单元格高亮时的背景色 */
  '--header-highlight-bgcolor': string

  /** 单元格 padding */
  '--cell-padding': string
  /** 字体大小 */
  '--font-size': string
  /** 表格内字体的行高 */
  '--line-height': string
  /** 锁列阴影，默认为 rgba(152, 152, 152, 0.5) 0 0 6px 2px */
  '--lock-shadow': string

  /** 单元格的边框颜色 */
  '--border-color': string
  /** 单元格边框，默认为 1px solid var(--border-color) */
  '--cell-border': string
  /** 单元格上下边框，默认为 var(--cell-border) */
  '--cell-border-horizontal': string
  /** 单元格左右边框，默认为 var(--cell-border) */
  '--cell-border-vertical': string
  /** 表头单元格边框，默认为 1px solid var(--border-color) */
  '--header-cell-border': string
  /** 表头单元格上下边框，默认为 var(--header-cell-border) */
  '--header-cell-border-horizontal': string
  /** 表头单元格左右边框，默认为 var(--header-cell-border) */
  '--header-cell-border-vertical': string
}>
```

**当 CSS 变量无法满足自定义样式需求时，推荐通过 styled-components 来覆盖表格的默认样式。表格内各部分的 CSS 类名可以通过 Classes 对象来获取。**
**在更精细的场景下，可以使用 getCellProps 来定制每个单元格的样式。**

## structure

[ali-react-table 自定义表格结构示例](https://ali-react-table.js.org/structure/)展开、收起控制面板
当前表格中单元格的数量：924 （包括 th 与 td，每隔 500ms 更新）

# pipeline

- **按需引入表格拓展，更好的支持 tree shaking**
- 默认提供**多种拓展功能**
  - 支持 antd、fusion 组件库
  - 支持受控和非受控
  - 支持 hooks 和非 hooks
- 支持自定义的表格拓展

## hooks usage

> 在函数组件中，可以引入 hooks useTablePipeline 来创建 pipeline

```tsx
import { useTablePipeline, features, BaseTable } from 'ali-react-table'
import { Checkbox } from '@alifd/next'
// import { Checkbox } from 'antd'
function someFunctionComponent() {
  const pipeline = useTablePipeline({ components: { Checkbox } }).input({
    dataSource,
    columns,
  })
}
```

pipeline.input({ dataSource, columns })#
input 方法用于设置 pipeline 的输入，调用后 pipeline 中当前的 dataSource/columns 将被更新。该方法会返回 pipeline 对象，方便链式调用。

pipeline.primaryKey(primaryKey)#
设置 primaryKey。primaryKey 一般是一个字符串，例如 'id'，表示数据中的 id 字段可以唯一确定一行。primaryKey 也可以是一个函数，详情可参考 BaseTable api。很多表格拓展功会要求 primaryKey 预先被设置，部分拓展还要求 primaryKey 必须为一个字符串。该方法会返回 pipeline 对象，方便链式调用。

pipeline.use(someTableFeature)#
使用指定的表格功能拓展。该方法会返回 pipeline 对象，方便链式调用。

pipeline.getProps()#
获取 <BaseTable /> 的 props，返回结果会包含 { dataSource, columns, primaryKey, getRowProps } 这四个字段。

## 使用 pipeline 上下文#

除了对 dataSource/columns 的管理之外，pipeline 内部还包含了一个上下文对象（通过 pipeline.ctx 来获取），不同的 pipeline 操作可以通过 ctx 来共享一些信息。

pipeline.ctx 中的部分字段有特定的含义，具体如下：

pipeline.ctx.primaryKey 表格的主键配置
辅助方法 pipeline.ensurePrimaryKey(hint?: string): PrimaryKey 可用于确保 primaryKey 已被设置；
如果尚未被设置，该方法将会根据 hint 参数生成报错信息
pipeline.ctx.indents 缩进配置
pipeline.ctx.components 在 pipeline 中注册的组件

## 状态管理#

在实现一些较为复杂的拓展功能时，你可能需要使用一些非受控的状态，以便屏蔽一些内部实现细节，方便上层用户使用。

拓展可以使用如下方式来从 pipeline.state 获取一份自己的状态。

function myCustomTableFeature(pipeline) {
const stateKey = 'myCustomTableFeature'

// 获取状态
const value = pipeline.getStateAtKey(stateKey, defaultValue)

// 在某个回调函数中设置状态
const onClick = () => pipeline.setStateAtKey(stateKey, nextValue)

// 对 dataSource/columns 进行处理...

return pipeline
}

### 状态管理 API#

pipeline.getStateAtKey(stateKey: string, defaultValue?: any): any#
读取 stateKey 对应的状态

pipeline.setStateAtKey(stateKey: string, partialState: any): void#
将 stateKey 对应的状态设置为 partialState

NOTE
pipeline 中所有的 stateKey 共享一个命名空间，推荐为拓展设置一个与拓展名称相同的 stateKey，避免不同拓展之间发生冲突。

所有 ali-react-table 提供的拓展都是通过上述方式来实现的，实现自定义的表格拓展时可供参考。

## Internal Getters

对表格进行封装时，可能需要用到一些表格内部的数据处理方法，使得上层封装的功能和表格内部保持一致。

ali-react-table 导出的内部方法如下：

- `safeRenderHeader(col)`获取表头的渲染内容
- `safeGetV(col, row, rowIdx)` 获取单元格的值
- `safeGetRowK(col, row, rowIdx)` 获取某一行的 key
- `safeGetCellProps(col, row, rowIdx)` 获取单元格的 props
- `safeRender(col, row, rowIdx)` 获取单元格的渲染内容

```tsx
import { internals } from 'ali-react-table'

const column = { code: 'hello', name: 'world' }
const rowIndex = 3
const row = dataSource[rowIndex]

const cellProps = internals.safeGetCellProps(column, row, rowIndex)
```

每个内部的数据方法的实现其实都很简单，详见 源码 https://github.com/alibaba/ali-react-table/blob/master/packages/ali-react-table/src/internals.ts.

注意在表格的内部实现中，可能并没有实际调用这些内部方法（在表格内部调用这些方法会产生很多的冗余计算），但表格内部的数据处理和这些方法是保持一致的。

# proto

在实际开发中过程中，一个表格可能会包含大量维度和指标（在盒马内部，超过 50 列的表格十分常见），列配置的书写工作量会很大。这其中很多的列往往具有相同的宽度、对齐方向或是类似的格式化方法，重复配置较多。ali-react-table 导出了 proto 来简化这些重复配置的书写，有效减少列配置的工作量。

注：本页文档中，「原型」指的是使用 proto 创建出来的函数，而不是指 JavaScript 中的函数原型。

## 创建对象原型#

proto.object(baseObject) 是一个工厂方法，接受一个基础对象 baseRecord，返回一个函数；调用该函数时，将以 baseRecord 为「原型」并根据输入的参数来创建一个新的对象。

在下面的例子中，我们创建了 columnProto，并用 columnProto 来生成其他的列，避免书写相同的默认配置。

import { proto } from 'ali-react-table'

const columnProto = proto.object({ width: 120, align: 'right' })

const col1 = columnProto({})
// 参数为空对象，则所有字段都来自于 baseRecord
// { width: 120, align: 'right' }

const col2 = columnProto({ width: 150 })
// 参数提供了 width 字段，其他字段来自于 baseRecord
// { width: 150, align: 'right' }

const col3 = columnProto({ code: 'code-1', align: 'left', lock: false })
// { code: 'code-1', align: 'left', lock: false, width: 120 }

创建数组原型#
proto.array(baseRecord) 与 proto.object 非常类似，也会生成一个函数，但函数的输入参数为一个数组。该函数被调用时，会遍历输入的数组，并根据 baseRecord 来生成对象。

import { proto } from 'ali-react-table'

const columnProto = proto.array({ width: 120, align: 'right', format: amount })

const columns = columnProto([
{ code: 'code-1' },
{ code: 'code-2' },
{ code: 'code-3', width: 200 },
{ code: 'code-4', align: 'left' },
])
// [
// { code: 'code-1', width: 120, align: 'right', format: amount },
// { code: 'code-2', width: 120, align: 'right', format: amount },
// { code: 'code-3', width: 200, align: 'right', format: amount },
// { code: 'code-4', width: 120, align: 'left', format: amount }
// ]

嵌套原型#
在生成对象原型或数组原型时，baseRecord 中的字段值(subProto)也可以为一个对象原型或数组原型，生成新对象时 subProto 将被调用用于对应字段的值。

const columnProto = proto.array({
width: 120,
align: 'right',
features: proto.object({ defaultVisible: true }),
})

const columns = columnProto([
{ code: 'code-1' },
{ code: 'code-2', features: { defaultVisible: false } },
{ code: 'code-3', features: { sortable: true } },
])
// [
// { code: 'code-1', width: 120, align: 'right', features: { defaultVisible: true } },
// { code: 'code-2', width: 120, align: 'right', features: { defaultVisible: false } },
// { code: 'code-3', width: 120, align: 'right', features: { defaultVisible: true, sortable: true } },
// ]

proto.string 与 proto.number#
有的时候某个字段并没有默认值，但我们又希望创建出来的对象必须包含某个对象，此时可以使用 proto.string 或 proto.number 来创建原型。

const columnProto = proto.array({
code: proto.string,
width: proto.number,
align: 'right',
})

// 调用 columnProto 时，输入参数中的 code 字段必须为字符串，width 字段必须为数字
const columns = columnProto([
{ code: 'code-1', width: 100 },
{ code: 'code-2', width: 120, features: { defaultVisible: false } },
{ code: 'code-3', width: 120, features: { sortable: true } },
])
此外，proto.notNull 用于确保输入参数中某个字段不能为 null/undefine。
原型的继承#
通过 proto.object / proto.array 生成的对象上有一个 extends 的方法，可以在已有的原型基础上生成新的原型。

const column = proto.object({ width: 120, align: 'left' })
const alignRightColumn = column.extends({ align: 'right' })
const wideColumn = column.extends({ width: 200 })

const col1 = alignRightColumn({}) // { align: "right", width: 120 }

const col2 = wideColumn({}) // { width: 200, align: "left" }
用继承的原型生成最终的对象时，会先根据继承的配置处理数据，然后调用基础的配置处理数据。

proto.empty#
proto.empty 是一个特殊的 symbol，其作用是从结果中移除特定字段。

const columnProto = proto.array({
width: 120,
align: 'right',
features: proto.object({ defaultVisible: true }),
})

const columns = columnProto([
{ code: 'code-1' },
{ code: 'code-2', align: proto.empty },
{ code: 'code-3', features: proto.empty },
])
// [
// { code: 'code-1', width: 120, align: 'right', features: { defaultVisible: true } },
// { code: 'code-2', width: 120, features: { defaultVisible: true } },
// { code: 'code-3', width: 120, align: 'right' },
// ]

### pipeline-features

- MultiSelect
  - 行多选：在每一行的左侧或右侧 渲染一个复选框，表示当前行是否被选中。

批量选择
点击复选框时，按住 shift 键可以进行批量选择/反选。
使用方式#
启用行多选功能之前，pipeline 必须已经设置了 primaryKey
行多选依赖复选框组件，使用之前需要先设置 pipeline.ctx.components.Checkbox
pipeline.use(features.multiSelect(options))

options 结构如下：

export interface MultiSelectFeatureOptions {
/\*_ 非受控用法：默认选中的值 _/
defaultValue?: string[]

/\*_ 非受控用法：默认 lastKey _/
defaultLastKey?: string

/\*_ 受控用法：当前选中的 keys _/
value?: string[]

/\*_ 受控用法：上一次操作对应的 rowKey _/
lastKey?: string

/\*_ 受控用法：状态改变回调 _/
onChange?: (
nextValue: string[],
key: string,
keys: string[],
action: 'check' | 'uncheck' | 'check-all' | 'uncheck-all',
) => void

/\*_ 复选框所在列的位置 _/
checkboxPlacement?: 'start' | 'end'

/\*_ 复选框所在列的 column 配置，可指定 width，lock, title, align, features 等属性 _/
checkboxColumn?: Partial<ArtColumnStaticPart>

/\*_ 是否高亮被选中的行 _/
highlightRowWhenSelected?: boolean

/\*_ 判断一行中的 checkbox 是否要禁用 _/
isDisabled?(row: any, rowIndex: number): boolean

/\*_ 点击事件的响应区域 _/
clickArea?: 'checkbox' | 'cell' | 'row'

/\*_ 是否对触发 onChange 的 click 事件调用 event.stopPropagation() _/
stopClickEventPropagation?: boolean
}

- 受控用法下， 状态改变回调 onChange 会接受 4 个参数：

nextValue 即将被选中的 keys 数组
key 触发本次状态改变的表格行的 key
keys 本次状态改变相关的 keys 数组。
一般情况下该数组长度为 1
多选（按住 shift 键）或全选的情况下，该数组长度可能超过 1
action 交互行为
'check' 选中一个或多个
'uncheck' 取消选中一个或多个
'check-all' 选择全部
'uncheck-all' 反选全部
受控用法#
受控用法下可以对状态进行更多的控制，实现自定义的多选交互。

覆盖 checkboxColumn.title 可以实现自定义的多选列表头，方便实现一些自定义的交互。

此外设置 options.clickArea='row' 可以将点击事件的回调放在表格行上，让多选交互更易用。

- **row-detail**
  - 表格套娃#
    递归的表格嵌套。注意此时要设置 isStickyHead={false}，避免多个表头吸附在同一个位置。
  - 使用方式#
    启用行多选功能之前，pipeline 必须已经设置了 primaryKey，且 primaryKey 只能为字符串。
    pipeline.use(features.rowDetail(options))
    options 结构如下：

export interface RowDetailFeatureOptions {
/\*_ 非受控用法：是否默认展开所有详情单元格 _/
defaultOpenAll?: boolean

/\*_ 非受控用法：默认展开的 keys _/
defaultOpenKeys?: string[]

/\*_ 受控用法：当前展开的 keys _/
openKeys?: string[]

/\*_ 受控用法：openKeys 改变的回调 _/
onChangeOpenKeys?(nextKeys: string[], key: string, action: 'expand' | 'collapse'): void

/\*_ 详情单元格的渲染方法 _/
renderDetail?(row: any, rowIndex: number): ReactNode

/\*_ 是否包含详情单元格 _/
hasDetail?(row: any, rowIndex: number): ReactNode

/\*_ 获取详情单元格所在行的 key，默认为 `(row) => row[primaryKey] + '_detail'` _/
getDetailKey?(row: any, rowIndex: number): string

/\*_ 详情单元格 td 的额外样式 _/
detailCellStyle?: React.CSSProperties

/\*_ 点击事件的响应区域 _/
clickArea?: 'cell' | 'content' | 'icon'

/\*_ 是否对触发展开/收拢的 click 事件调用 event.stopPropagation() _/
stopClickEventPropagation?: boolean

/\*_ 指定表格每一行元信息的记录字段 _/
rowDetailMetaKey?: string | symbol
}

- row-grouping
- 行单选
- 排序
  - 对表格数据行进行排序，支持单列排序、多列排序、树形数据排序、自定义比较函数等功能。

> 标准术语：展开或收拢（收起）

可视化搭建系统中各类表格的基础组件

# 交叉表

交叉表是一个比较底层的 React 组件，仅提供相应表格结构的渲染能力。注意交叉表...

- 没有 透视能力
- 没有 收拢展开功能

主要特性#
不依赖特定组件库，可独立使用
简单、一致的 API 与渲染模型：左树 + 上树 => 表格
高性能：数据量较大时，自动开启虚拟滚动
基本用法#
在简单的场景下，交叉表的用法很简单：

通过 leftTree 描述表格左侧的树状结构；
通过 topTree 描述表格上方的树状结构；

交叉表底层使用了 BaseTable 进行渲染，而 BaseTable 中主要的表格配置是放在每一列之上的。在 topTree 中，每个叶子节点都对应的了表格中的一列，所以每个节点除了包含 key/value/data/children 之外，还包含了部分列配置（即 ArtColumnStaticPart）。ArtColumnStaticPart 的结构如下：

name 列的名称；注意因为树节点已经含有 value 字段，故 name 字段在 TopCrossTreeNode 中是不起作用的）
code 在数据中的字段 code；注意交叉表使用自定义的 getValue/render 进行取值或渲染，会屏蔽掉 code 的默认取值方式
title 列标题，如果该字段非空，在渲染时会覆盖 value 字段
width 列的宽度
align 单元格中的文本或内容的 对其方向
hidden 是否隐藏；不推荐为交叉表的数据列设置隐藏
lock 是否锁列；不推荐为交叉表的数据列设置锁列
headerCellProps 表头单元格的 props
features 功能开关

其他 props#
CrossTreeTable 的底层依赖了 BaseTable，故两者的 props 大部分是相同的。两者的不同点具体如下：

交叉表没有 dataSource 和 columns
表格结构由 leftTree 和 rightTree 提供，而单元格内容由 getValue 提供
单元格渲染内容可使用 render 进行自定义；单元格的 props（即表格内的 td 元素）可使用 getCellProps 进行自定义
交叉表没有 primaryKey
交叉表左侧树中每个节点都有一个唯一的 key 值，故不再需要上层指定 primaryKey
其他新增的 props
交叉表使用 leftMetaColumns 来描述 leftTree 所处的列的配置
交叉表渲染时，左侧的树会占据表格的前几列，并自动设置 lock=true，leftMetaColumns 可用于自定义这些列

交叉表的 props 具体如下：

interface CrossTableProps extends Omit<BaseTableProps, 'dataSource' | 'columns' | 'primaryKey'> {
leftTree: LeftCrossTreeNode[]
topTree: TopCrossTreeNode[]
leftMetaColumns?: CrossTableLeftMetaColumn[]
leftTotalNode?: LeftCrossTreeNode
topTotalNode?: TopCrossTreeNode

getValue(leftNode: LeftCrossTreeNode, topNode: TopCrossTreeNode, leftDepth: number, topDepth: number): any

render?(
value: any,
leftNode: LeftCrossTreeNode,
topNode: TopCrossTreeNode,
leftDepth: number,
topDepth: number,
): ReactNode

getCellProps?(
value: any,
leftNode: LeftCrossTreeNode,
topNode: TopCrossTreeNode,
leftDepth: number,
topDepth: number,
): CellProps
}

export interface CrossTableLeftMetaColumn extends Omit<ArtColumnStaticPart, 'hidden'> {
/\*_ 自定义渲染方法 _/
render?(leftNode: LeftCrossTreeNode, leftDepth: number): ReactNode

/\*_ 自定义的获取单元格 props 的方法 _/
getCellProps?(leftNode: LeftCrossTreeNode, leftDepth: number): CellProps
}

```tsx
// /packages/ali-react-table/src/ali-react-table.ts
export * from './base-table'
export * from './interfaces'
export * from './utils'
export * from './pipeline'
export * from './internals'
```

```tsx
// /packages/ali-react-table/src/base-table/index.tsx
export { BaseTable, BaseTableProps, PrimaryKey } from './table'
export { LoadingContentWrapperProps } from './loading'
export { Classes, BaseTableCSSVariables } from './styles'
```

# pivot

## cross-table

defaultColumnWidth,leftTree,topTree,getValue

```tsx
interface CrossTreeNode{
  k:string // 在树中唯一标记一个节点
  v:string // 文本值
  title?: ReactNode // 如果导出到文件，title将被忽略
  data?:any // 附加在节点上的数据
  hidden?:boolean
  children?:CrossTreeNode[] // 子节点数组
}
interface LeftCrossTreeNode extends CrossTreeNode{
  children?: CrossTreeNode[]
}
// 列的名称现由v字段提供，故从AtrColStaticPart移除了name字段
interface TopCrossTreeNode extends CrossTreeNode, Omit<AtrColStaticPart, 'name'>{
  children?: TopCrossTreeNode[]
}
<CrossTable
dftColW={100}
leftTree={leftTree}
topTree={topTree}
getV={(leftNode:LeftNode,topNode:TopNode)=>{
  // 可选的自定义逻辑，针对每个单元格都会调用一次
  // leftNode表示当前单元格对应的左侧树节点
}}
render={(value,leftNode,topNode)=>{
  // ...
  return value
}}
>
```

交叉表底层使用了 BaseTable，而后者主要的表格配置是放在每一列之上的。在 topTree 中，每个叶子节点都对应表格中一列，所以每个节点除了包含 k，v，data
，children 外，还包含了部分列配置 ArtColStaticPart，ArtColumnStaticPart 结构如下:

- name 树节点已经包含 v，所以 name 在 TopCrossTreeNode 中不起作用
- code 交叉表使用自定义的 getV，render 进行取值或渲染的话，会屏蔽掉 code 默认取值方式
- title 如非空，渲染时覆盖 v
- width 列宽
- align
- hidden 不推荐为交叉表的数据列设置隐藏
- lock 不推荐
- headerCellProps
- features

底层依赖 BaseTable，故两者 props 大部分相同。两者不同点：

- 交 无 dS 和 cols
  - 表格结构由 leftTree 和 rightTree 提供，而单元格内容由 getV 提供
  - 单元格渲染内容可使用 render 进行自定义：单元格 props（表格内的 td 元素）可使用 getCellProps 自定义
- 无 primaryK
  - 左侧树中每个节点都有一个唯一 k，故不再需要上层置顶 primaryK
- 其他新增的 props
  - 交叉表使用 leftMetaCols 来描述 leftTree 所处的列配置
    - 交叉表渲染时，左侧树会占据表格前几列，并自动设置 lock=TRUE。leftMetaCols 可以用于自定义这些列
  - leftTotalNode：leftTree 为空，leftTotalNode 用于渲染总计行，避免表格中没有数据行
  - t。。

```tsx
interface CrossTableProps
  extends Omit<BaseTableProps, 'dS' | 'cols' | 'primaryK'> {
  leftTree: LeftCrossTreeNode[]
  topTree: topCrossTreeNode[]
  leftMetaCols?: CrossTableLeftMetaCol[]
  leftTotalNode?: LeftCrossTreeNode
  topTotalNode?: TopCrossTreeNode
  // L,l:left,T,t:top,N,n:node,v:value,k:key,c:cross,D:depth,R:react
  getV(
    leftN: LCrossTreeN,
    topN: TCrossTreeN,
    lDepth: number,
    tDepth: number
  ): any

  render?(
    v: any,
    lN: LCrossTreeN,
    tN: TCTreeN,
    lDepth: number,
    tDepth: number
  ): ReactN

  getCellProps?(
    v: any,
    lN: LCTreeN,
    tN: TCTreeN,
    lDepth: number,
    tDepth: number
  ): CellProps
}
export interface CTableLMetaCol extends Omit<ArtColStaticPart, 'hidden'> {
  render?(lN: LCTreeN, lD: number): RN
  getCellProps?(lN: LCTreeN, lDepth: number): CellProps
}
```

左树和上树的结构被设计为{k,v,children}的简单结构，方便上层调用者能够从不同数据源中生成 leftTree/topTree
在复杂场景下，需要上层根据业务需求手动生成 leftTree/topTree/getValue。ali-react-table 也提供了一定的透视能力，可在交叉表的基础上实现前端聚合的透视表，可供使用和参考。

例如，对 leftTree 进行如下处理，可以关闭左侧自动单元格合并功能：

// 注意这个时候每个节点的 key 都要不同
const leftTree = [
{ key: 'forenoon-9', value: '上午', children: [{ key: '9', value: '9:00-10:00' }] },
{ key: 'forenoon-10', value: '上午', children: [{ key: '10', value: '10:00-11:00' }] },
{ key: 'forenoon-11', value: '上午', children: [{ key: '11', value: '11:00-12:00' }] },
// other nodes...
]

定制：buildCrossTable dS,cols 处理数据 primaryK={ROW_K}.
列范围高亮

```tsx
import { BT } from 'a-r-t'
import { buildCrossT,ROW_K } from 'a-r-t/pivot'
function MyComplexT(){
  // 将传给CT的参数传给buildCT
  const { ,  } = buildCT
}
```

交叉树状表格（CrossTreeTable）与交叉表（CrossTable）类似，但在表格左侧提供了树状展开/收拢的能力，更适用于日常业务开发。
primaryCol,leftTree,topTree,getV

```tsx
<CrossTreeTable
  dftColW={100}
  primaryCol={{lock:true,name:'数据维度',width:200}} // 表格第一列配置

  leftTree={leftTree}
  topTree={topTree}
  getV={{lN,tN}=>{

  }}
  render={(v,lN,tN)=>{
    return v
  }}
>
```

leftTree/topTree 都是一个具有 key/value/children 嵌套结构的数组，
CTreeTable 对于 lTree 和 tTree 的处理有所不同：

- lTree 中的每个节点对应表格中一行，包括叶子节点与非叶子节点
- tTree 中的叶子结点对应表格上一列

CrossTreeTable 的底层依赖了 BaseTable，故两者 props 大部分相同。不同点如下：

- CTT 么有 dS 和 cols
  - 表格结构由 lT 和 rT 提供，而单元格内容由 getValue 提供

transient 短暂的

```tsx
export function buildRecordMatrix({
  data,
  leftCodes,
  topCodes,
  aggregate,
  encode,
  isLeftExpand,
  isTopExpand,
  prebuiltLeft,
  prebuiltTopTree,
}) {}
```

```tsx
// 根据指定的code序列计算下钻树
// groupBy，always，DrillNode
export default function buildDrillTree(
  data: any[],
  codes: string[],
  {
    encode,
    totalV = 'Summary',
    isExpand = always(true),
    enforceExpandTotalNode,
  }
) {
  const emptyPath: string[] = []
  const totalK = encode(emptyPath)
}
function simpleEncode(path: string[]) {
  if (!path.length) return 'key:@total@'
  return `key:${path.join(' ')}`
}
```

leftDrillTree
leftDrillTree[0]:leftDrillNode

```json
[
  {
    "key": "key:@total@",
    "value": "总计",
    "path": [],
    "children": [
      {
        "key": "key:火星",
        "value": "火星",
        "path": ["火星"],
        "hasChild": true
      }
    ]
  }
]
```

topDrillTree
topDrillTree[0]:topDrillNode

```json
[
  {
    "key": "key:@total@",
    "value": "总计",
    "path": [],
    "children": [
      {
        "key": "key:一季度",
        "value": "一季度",
        "path": ["一季度"],
        "hasChild": true
      },
      {
        "key": "key:二季度",
        "value": "二季度",
        "path": ["二季度"],
        "hasChild": true
      },
      {
        "key": "key:三季度",
        "value": "三季度",
        "path": ["三季度"],
        "hasChild": true
      },
      {
        "key": "key:四季度",
        "value": "四季度",
        "path": ["四季度"],
        "hasChild": true
      }
    ]
  }
]
```

topTreeRoot

```json
{
  "key": "key:@total@",
  "value": "总计",
  "data": {
    "dataKey": "key:@total@",
    "dataPath": []
  },
  "children": [
    {
      "key": "key:a",
      "value": "指标A",
      "data": {
        "dataKey": "key:@total@",
        "dataPath": [],
        "indicator": {
          "code": "a",
          "name": "指标A",
          "width": 100,
          "align": "right",
          "expression": "SUM(a)"
        }
      },
      "code": "a",
      "name": "指标A",
      "width": 100,
      "align": "right",
      "expression": "SUM(a)"
    },
    {
      "key": "key:b",
      "value": "指标B",
      "data": {
        "dataKey": "key:@total@",
        "dataPath": [],
        "indicator": {
          "code": "b",
          "name": "指标B",
          "width": 100,
          "align": "right",
          "expression": "SUM(b)"
        }
      },
      "code": "b",
      "name": "指标B",
      "width": 100,
      "align": "right",
      "expression": "SUM(b)"
    },
    {
      "key": "key:c",
      "value": "指标C",
      "data": {
        "dataKey": "key:@total@",
        "dataPath": [],
        "indicator": {
          "code": "c",
          "name": "指标C",
          "hidden": false,
          "align": "right",
          "expression": "SUM(c)"
        }
      },
      "code": "c",
      "name": "指标C",
      "hidden": false,
      "align": "right",
      "expression": "SUM(c)"
    },
    {
      "key": "key:d",
      "value": "指标D",
      "data": {
        "dataKey": "key:@total@",
        "dataPath": [],
        "indicator": {
          "code": "d",
          "name": "指标D",
          "expression": "SUM(d)",
          "width": 120,
          "align": "right"
        }
      },
      "code": "d",
      "name": "指标D",
      "expression": "SUM(d)",
      "width": 120,
      "align": "right"
    }
  ]
}
```

leftCodes,topCodes

```json
(["planet", "area", "one"], ["season", "month"])
```

```js
export const dimensions = [
  { code: 'planet', name: '子公司', width: 150 },
  { code: 'area', name: '门店', width: 150 },
  { code: 'season', name: '季度' },
  { code: 'month', name: '月份' },
  { code: 'one', name: '一级类目' },
  { code: 'two', name: '二级类目' },
  { code: 'three', name: '三级类目' },
]

export const incomeCacheDate = [
  {
    planet: '火星',
    area: '火星-1店',
    one: '其他',
    two: '其他',
    three: '其他',
    season: '一季度',
    month: '2022-01',
    a: 782.78,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
  },
  {
    planet: '火星',
    area: '火星-1店',
    one: '其他',
    two: '其他',
    three: '其他',
    season: '一季度',
    month: '2022-02',
    a: 856.551,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
  },
  {
    planet: '火星',
    area: '火星-1店',
    one: '其他',
    two: '其他',
    three: '其他',
    season: '一季度',
    month: '2022-03',
    a: 886.396,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
  },
  {
    planet: '火星',
    area: '火星-1店',
    one: '其他',
    two: '其他',
    three: '其他',
    season: '二季度',
    month: '2022-04',
    a: 991.274,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
  },
]
```
