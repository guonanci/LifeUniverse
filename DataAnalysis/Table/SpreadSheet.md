spreadsheet 电子表格（ss）
**交叉表**

> 这段时间只做技术架构类关键笔记，然后一步步写出抽象完美的代码
> 产品类细节要明确好

# demand

运营数据分析师高管（明细、交叉、聚合、决策），3 种不同的快捷分析模式（字段标记、属性配置），4 类增强分析字段标记（文本，颜色、背景颜色，图标）
明细表交叉表折线图指标卡饼图双轴图
2 种分析风格：平铺、下钻（下钻）
VOC 血案：小计总计类，格式、复制、交互、显示问题、排序（组内和高级）、产品使用、其他

## 决策表

- 决策分析能力：宏观指标分析功能：年度、财年、季度月度、近 7 天等时间维度分析业务数据
- QuickBI 决策表上线很久
  DI 版的决策表可复用性和通用性更好

## 能力

- 维度构成更新
- 数值行列转置
- 同环比 数值+百分比
- 指标趋势
- 解读（沉淀分析结论与分析方法）
- 维度指标支持时间维度、地理位置、不同行业

## 技术和业务对比（FBI 和 DI）

- 底层技术-交叉和明细表：FBI（SpreadJS），DI（自研底座）
- 底层技术-决策交叉表：Matrix Table 自研底座
- 数据驱动方式-交叉和明细表：对象数组 对象数组
- 数据驱动方式-决策交叉表：大宽表结构 对象数组
- 富交互能力（圈选 brushSelection、Tooltips）：无 有

1. QuickBI 的底层技术在不同表里是两套，不同的技术体系，并且数据结构不都是标准的对象数组，在渲染层和数据层都是很难直接迁移使用（前端后端都配合），成本大。但数据处理逻辑放在后端也能一定程度减轻前端计算压力
2. 决策表、交叉表公用底座的话，可以轻松地将交叉表交互继承过来，多端复用。数据格式也很常用，无后端配合压力，一次开发多方使用。**但是存在一个问题：需要将不同表的公共能力沉淀到底层，增大 size，配置项也会增多**
3. DI 基于自研，可控性更强。能快速打造需要的模式。目前和集团的团队在深度共建

### 业务

- 目前场景大部分来源于用户，处境被动，滞后=》VOC+主动对用户需求收集，推动制定通用方案落地
- 缺乏增强分析能力：互探索分析能力（粒度切换、上钻下卷、指标纬度切换、度量定义、波动归因、图表联动
- 缺失类似『决策表』等较强的分析表：落地，具备 100%的复用能力

### 提效

- 不同类型用户接入需求：1.底层版本：强 DIY 扩展场景 2.中间：有一定的定制场景 3.开箱即用

## 体验

- 500 行\*400 列：渲染时间（400ms），FPS（25）
- 表格风格 strong 版本
- 交互下钻能力
- Tooltips 新交互方式
- 表格行列头颜色风格+自定义映射
- 移动端交互，适配、性能问题=》推动打造符合移动端的交互设计

# 配置项

- 对各个配置项的理解成本大=》提供基础包和抽象实现的额外包

行头，列头，数值（编辑目录-指标目录设置：关键指标、核心指标和次要指标），数值置于（行头和列头），视图（聚合和明细-没有聚合过的数据，两者都是交叉表）

```tsx
destroy() // 销毁表及相关对象
setTotalCache(cache:Map<string,number>) // 外部设置交叉表小计总计缓存（只适用于交叉表）
ss.render(true,()=>{
  // after rendering, reset subTotal value
  ss.setTotalCache(...)
  // 不重新处理数据
  ss.render(false)
})

// setTheme
setTheme(theme:SSTheme,type?:string='default')
```

# class abstract interfaces, extends relationship, implements, customize

原始数据=配置=》DataCfg，Options，Interaction，Tooltip

DataCfg=》Data-Set 数据处理 行列值 一维到多维（Pivot）=》多维数组

DOIT =Render=》Layout+Facet
Layout 定坐标=(区域布局+节点宽高）=> 行列叶子节点 row/colLeafNodes（布局、按需渲染核心）

- 精确控制行列叶子的坐标信息（宽高、位置），标记特殊节点。隐藏节点

1. 隐藏特殊条件节点：只有一个度量时，隐藏度量行，将值挂在父节点（上海和安徽亳 bo 州等等、单价）；隐藏空文本节点及其子节点
2. 标记需要绘制趋势 icon 节点
3. 自适应计算列宽（宽度=单元格内按文本宽度适配；元素支持比例缩放）
   Facet=布局交互=》Corner/Row/ColHeader,ViewCell,Frame=>Cell

Interaction=》降低理解成本（interaction 和 tooltip 的数据流尽量简单、类型定义）
Tooltip=》已有规范待开发

单元格自定义场景（痛点）
虽然大部分的 cell

- 角头 目前只有两种形态的角头定义场景，一旦遇到其他需要自定义的情景（空或者其他展示文本）就不需要在 corner 中去新增条件实现--命令式编码
- 交叉表单元格： 普通正常情况下的单元格，有且只能承载一个数值类型的数据，但是在衍生指标场景下，需要在单元格中显示多个衍生指标，并且单元格宽高都
- 是有列行叶子节点的 cell 决定。需要在 layout 流程中去根据条件控制单元格宽高生成

解法
抽取关键节点做回调，让外部控制核心链路（如何降低理解成本）
抽象定义各个概念（Header，DataSet，Facet，Layout），外部可以继承处理

增加数据，配置的预处理能力
配置预处理-自定义目录结构+衍生指标
标记需要绘制趋势 icon 节点 自适应列宽（宽度=单元格内按文本宽度适配：元素支持比例缩放），自适应计算列宽度

LayoutResult-定数据（小计格数据）

```tsx
// 重新定义单元格数据获取方式（完全自定义）
// 1.额外的数据获取来源（小计）
// 2.不同的数据结构（按列的数据结构）

// 1.新增的小计行（数据独立于明细数据） 「单价」行为新增小计，数据需要从小计数据中获取
// 2.特殊数据格式（按列返回的数据） 在列数据中，通过行维度来定义单元格数据
export type LayoutResultCb=(layoutResult:LayoutResult)=>LayoutResult
export interface LayoutResult {
  colNodes: Node[] // 列所有节点
  colsHierarchy: hierarchy // 列结构
  rowN: Node[]
  rowsH: hierarchy
  colLeafNodes:Node[]
  rowLeafNodes: Node[]
  getViewMeta:(rowIdx:number,colIdx:number)=>ViewMeta
  spreadsheet:BaseSpreadSheet
}


// 树桩度量值格式
// 财鲸方场景
// 目前所有交叉表场景中，都是通过维度，来获取对应维度的纬度值，用维度值作为每一个单元格的项
// 只是一个简单的文本作为树节点。但是有时候需要将此简单的节点变为一颗子树，而不是简单的文本。涉及到data-set处理过程中，支持树（怎么支持）

// 布局
// 算法大致如下：
// - 通过预设规则，计算出corner坐标，作为整个表左上角，后续所有坐标基础都是在此上面计算
// - 计算行头中叶子结点的高度，这个高度和container高度做交集，也就是表实际高度，多余的高度用作滚动场景
// - 计算列头中叶子结点高度，这个高度和container
// 单元格都是以corner坐标作为左上角起点开始布局

// 想想以下用户场景（明细表）：
// 没有配置行头，按照现在算法逻辑，此时实际内容高度就会是0，导致单元格无法显示，同理没有配置列头也是一样道理


// 抽象方法
// 抽象实例入口类，所有表操作都在此向外透出接口，并且能提供表抽象能力
protected abstract registerInteractions(opts: SsOpts)
protected abstract initDataset(opts: Partial<SsOpts>)
protected abstract initTooltip(): BaseTooltip
protected abstract bindEvs() // Events

protected initFacet(facetCfg:SpreadsheetFacetCfg):BaseFacet{
  return new SpreadsheetFacet(facetCfg)
}
// BaseSpreadSheet公共方法
setDataCfg
setOpts(opts:SpreadsheetOpts)
render(reload=false:boolean,cb?:()=>void) // 渲染表，是否重新处理data

isDerivedV(fieldId):boolean // 维度id，判断某个维度是否为衍生指标
getDerivedV(fieldId):DerivedV // 获取任意度量对应的指标对象（包含主指标和衍生指标）

isSpreadsheet // 交叉表还是明细表（FALSE）

doesScrollContainRowHeader

rowSubAggregation // 小计聚合方式
rowSubTotalsVisibility // 行小计开关
chartFieldsSwitcher // 维度切换 阅读端切换行列维度
rowsCntVisibility // 数据总量行是否可见
customCycleCompare // 同环比弹窗配置
advancedCycleCompare // 同环比配置
filter // 筛选器
reportFilter // 报表筛选
reportGranularity // 报表粒度
xReport.relatedDataMap // 关联数据Map
xReport.fieldMeta // field元信息（格式化）
xReport.reportGranularity // 报表粒度
xReport.customTimeCfg // 自定义时间配置

xReport.originalData // 源数据（包含小计）
xReport.formattedData // 格式化后的数据
state.granularity // 时间粒度
state.cycleCompareMeasures // 同环比切换
state.chartFieldsFilter // 维度切换

vLocation // 数值挂行列头
meas,dims,dimsY,row(Sub,Grand)TotalsVisibility
// 行列小计总计 - queryData
colsAgg,rowAgg,colsSubAgg,rowSubAgg,
colTotalReverseLayout,rowTotalReverseLayout,colSubTotalReverseLayout,rowSubTotalReverseLayout,
colTotalsVisibility,rowTotalsVisibility,colSubTotalsVisibility,subSubTotalsVisibility,
rowSubTotalsDims

idxTrendSwitcher // 指标趋势

linkUrls // 链接跳转
hierarchyType // 树状/平铺 hierarchy阶层、等级制度
hierarchyCollapse // 树状结构全部收紧
layout // 列布局样式
containerRowHeader // 冻结行列头
xReport.engineVersion
xReport.originalData // 需要处理条件格式
xReport.device // 设备信息

// render-noReloadData筛选不需要reload
container - resize // 外部宽高变化
hierarchyType // 行头结构
showSeriesNum
style // 表样式变化
// syncTotalData
xReport.totalOriginalData // 新引擎下的小计

getContentH // 获取交叉表真实的高度，包括所有被展开的的高度不为0的cell
// 使用：
// 一般场景是在header布局完成后，或者下钻操作时动态调整外部容器宽度时使用：监听如下事件即可：
// KEY_AFTER_HEADER_LAYOUT: 每次布局完成后触发
// KEY_AFTER_COLLAPSE_ROWS: 下钻操作后触发

changeSize(w,h) // 100,400 改变画布的实际宽高

// 配置Cfg

// UI Opts
// w600h400,hierarchyType(tree,grid),treeAllCollapse,conditionFormats,totals,linkFields,pagination,frozenRowHeader,cellStyle,serialNumVisibility,
// isVInCols // 数值是否挂在列头，默认TRUE
// 需要将在data-set数据处理时，将数值作为行维度子项来配置
// cellHook:cornerCell,rowsCell,colsCell,panelCell
// areaHook:cornerHeader,frame
// lifeCycleHook：layout,hierarchy,layoutArrange,layoutResult
// layoutArrange定顺序（自定义排序，按以下规则排序（优先级由高到低）：
// 规则 按字母，手动排序，其他字段（单价、单位成本）
export type LayoutArrangeCb=(
  ss: BSs,parent:Node, // 需要调整子节点顺序的父节点
  fieldId:str,// 父节点对应的维度id
  fieldValues:string[] // 维度的子维度值
)=>string[]
// 行，列维度值的自定义排序
// 高级排序-按维度值本身排序（三种方式：首字母、手动排序、其他字段：单价+单位成本）
// 自定义排序-俺维度窒息对应的度量排序（按纬度下度量）
// DataCfg:data,fields(chartFields),meta,sortParams
// fields: rows,cols,values,derivedValues,
// meta: field name formatter
// sortParams: dims:fieldId, method, by;meas:field,method.

// Hierarchy-定结构（新增汇总行）
// 行列结构的自定义
export type HierarchyResult={
  nodes:Node[]
  push:boolean
}
export HierarchyCb=(ss:BSs,node:Node)=>HierarchyResult
// =在某个节点前后新增N个节点=> 汇总省维度【上海，安徽】下的度量【单价，单位成本】，单独成行
// 存在多个度量：新增度量行到第一个子节点前
// 存在单个度量：隐藏度量行，并且将值映射到父节点行
// Theme
// fontFamily,fz,header(rowCell,colCell,cornerCell,txt,borderTxt)
// panelCell:cell(borderCorner,borderW,bgColor),txt,borderTxt
// frame:verticalBorderColor,verticalBorderW,horizontalBorderColor,horizontalBorderW
// scrollbar:trackColor,thumbHoverColor,thumbColor,size
const opts={
  // ui层
  dataCell: (viewMeta: ViewMeta)=>Group,
  // BaseCell<T>,Frame<T> Extends Group
  // RowCell<Node>,Cell<ViewMeta>,ColCell<Node>,CornerCell<Node> Extends BaseCell<T>
  // RowCellList<Node> extends RowCell<Node>;ColCellList<Node> Extends ColCell<Node>;CornerCellList<Node> Extends CornerCell<Node>
  // 自定义cornerCell
  cornerCell?: (node:Node,ss:BaseSpreadsheet,...restOpts)=>Group,
  // 自定义行头cell
  rowHeaderCell?: (node:Node,ss:BSS,...restOpts)=>Group,
  // colHeaderCell...
  // 自定义frame边框 Todo类型定义
  frame:(cfg:object)=>Frame,
  // 角头可能需要全部自定义，而不是用交叉表概念的node来渲染
  cornerHeader?: (parent:Group,ss:BSS,...restOpts),

  // layout layer
  // 行列每个节点的控制
  layout(ss:BSs, rowNode:Node,colNode:Node)=>void, // export type LayoutCb=... Node可能为Null
  // 布局结构的控制，比如getViewMeta的重新实现
  layoutResult(layoutResult:LayoutResult)=> LayoutResult,
}
const customSheet=new CustomSheet('#container',cfg,options)
// updCfg
customSheet.setDataCfg(cfg)
// updOpts
customSheet.setOpts(opts)
// setTheme
customSheet.setTheme(theme)
// 改变画布大小
customSheet.changeSize(w,h)
// 更新滚动位置
customSheet.updScrollOffset(offsetCfg)
custSheet.getPanelAllCells(cb):Cell // 获取可视范围内的交叉出的所有cell对象
custSheet.getRowNodes // 根据层级获取行头所有Nodes节点
custSheet.getColNodes
isTreeHierarchy // 形态是否是树形结构，树形更紧凑些，网状的列头行头更加松散（可以添加网格线）
customSheet.render(reload=false:boolean,cb?:()=>void) // 渲染表，是否重新处理data

// updDataOpts(updDataCfg)
values // 所有度量id
rowSubAggCustCfg // 行小计自定义配置
colSubReverseLayout,colSubTotalDims,ssType,serialNumVisibility,paginationVisibility,pageSize,


// Features
// 文本，颜色条，背景色，背景色，图标
conditionFormatTxt,conditionFormatBar,conditionFormatBgColor,conditionFormatIcon

// Pagination
// 数据所见所得导出
// 组内排序，高级（维度值，自定义、其他字段）
// 同环比 平铺、部分
// 链接跳转（待定）：行、列、值
// 小计总计：行，列（求和，平均、最大，最小）；外部接口设置
// 宽高适配：高度自适应、高度平铺（待定）、宽度自适应、宽度平铺
// 下钻：树状、平铺的切换；work only in Tree
// 交互：普通事件；复杂交互（行列resize，Brush Selection）；Tooltip(colCell,rowCell,dataCell-适配各种)

// 明细表（待定）

// Components
// 表React组件 交叉表组件
// 分页组件
// 切换行列维度（选择分析维度：行头列头数值三个栏目下方都有刷新icon取到最新数据）
// 下钻：选择下钻维度
// 字段标记（待定）

// Demo：行头聚合，无列；行、列聚合；汇总（行汇总-树状+平铺，列汇总）


registerInteractions // 当前方式，后续可能会变成全局注册
// 交叉表默认交互有8个
ss:row-col-selection RowColSelection // 行列选择的高亮（contextmenu：排序；3项已选择\n一个比率（总和：81.87%）；商品类别：家具
ss:brush-selection BrushSelection // 会累加选中单元格的值
```

# project directories 工程目录结构 工程化 插件（可扩展性）

整体原则是在现有代码库的基础上，重新建立一个开源版库地址。在此过程中，手动 pick 原库新加的增强能力
库目录结构
index.ts
interface.ts
row-col-resize-interaction.ts
tooltip
interface.ts
index.tsx
theme
index.ts
cell
index.ts
row-cell.ts
common
constant
debug
i18n
store
scroll-bar
tests
database
unit
bugs
examples

# architecture

PLUGINS =》《= Data 层(JSON,CSV) Layout 算法（分区深度遍历树状网络、分区数据流（配置数据流)-Pivot Table 数查（高频数查优）
交互+Slots=》 Row,Frame(布局框架)Corner 角头 Col ViewCell 交叉单元格 Cell+Meta 节点+关键信息
交互+Slots=》 Facet 按需渲染（LRU 缓存复用）-五层布局抽象（面向抽象接口实现）
Theme + Tooltips == Antv G(图+文)
Theme + Tooltips == Canvas Svg
====》x 轴
| 初始状态 当前状态
| Cell Pool
|
y 轴
初始状态=add=移除=》Cell Pool=新增=》当前状态

const data=pivot.getRecord({category:'办公用品',subC:''}),{province:'',city:''})

Pivot Table/SS 条格、文本、背景色、数据条、图标

# Pics 4,35/38

# dataStructure & key algorithm

## icon

精确到单元格的条件格式（ICON）
圆形展开收拢形状
条件格式-单元格右上角的小三角 icon

- 这段时间，只在早上花一点时间只看一道有趣的算法题，其他时间用来钻研交叉表、普通表格、所有表格的公用架构~好好理清架构
- 所有时间放在写表格代码和看表格资料上面去

虚拟滚动与分页，排序（前端、后端谁来做？）

# ROW

# FRAME 布局框架

# cell

新增列，cell 不单单只是文字
cell 数据的来源（内、外）

# CORNER

与常规交叉表不同

LRU 缓存（Facet）、树算法（树的节点变成一颗子树来支持条件格式、衍生指标？）

# 毅泽

- 排序（过滤）时间复杂度
- 缓存策略（LRU？），按需渲染（Facet）
- 链表，B+数

# 柳程

每次展开操作只是请求本次变化节点相关的部分变更数据，做增量更新

# 文档

- 边开发边整理文档

（宏观到微观再到宏观）
认知+记忆
理解+记忆

交叉表+普通表格

交叉表同环比是字符串类型（但是交叉表默认中间都是数值类型，因为有 aggregate 的存在）

# S2

数据驱动的多维分析表格。是 AntV 在多维交叉分析表格领域的解决方案，完全基于数据驱动的方式。通过提供底层能力库，基础组件，业务场景组件以及自由扩展的能力，让开发者基于自身场景自由选择，既能开箱即用，又能自由发挥。
特性：

1. 多维交叉分析：告别单一分析维度，全面拥抱任意维度的自由组合分析。
2. 高性能：能支持全量百万数据下 `<8s`渲染，也能通过局部下钻来实现秒级渲染。
3. 高扩展性：支持任意的自定义扩展（包括但不局限于布局，样式、交互、数据 hook 流
4. 开箱即用：提供不同分析场景下开箱即用的 react 表组件及配套分析组件，只需要简单的配置即可轻松实现复杂场景的表渲染。
5. 可交互：支持丰富

## s2-core

```js
// S2/packages/s2-core/src/index.ts
export * from "./facet/header";
export { Hierarchy } from "./facet/layout/hierarchy";
export * from "./interaction";
export { BaseEvent, BaseEventImplement } from "./interaction/base-interaction";
export * from "./interaction/row-col-resize";
export * from "./interaction/base-interaction";
export { GuiIcon } from "./common/icons/gui-icon";
export * from "./common/constant";
export * from "./common/interface/index";

export * from "./components/index";
export * from "./utils";
export * from "./cells";
export * from "./sheet-type";
export * from "./data-set";
export * from "./ui/tooltip";
```

- .github dir
- .husky dir
  - pre-commit,pre-push

链接跳转点击之后，链接颜色恢复默认，不是可点击色

S2 多维交叉分析表格

交叉表左上角只有行名没有列名。

合并单元格动作撤销不了。

@antv/s2-react

https://antv-s2.gitee.io/zh/examples/case/proportion/#single-population-proportion

面向可视化分析领域的数据驱动的表可视化引擎。「S」取自于「SpreadSheet」的两个「S」，「2」代表了透视表中的行列两个维度。旨在提供美观、易用、高性能、易扩展的多维表格

# 特性

1. 开箱即用：提供不同场景下开箱即用的 react 表组件及配套分析组件，只需要简单的配置即可轻松实现复杂场景
2. 多维交叉分析：告别单一分析维度，全面拥抱任意维度的自由组合分析分析
3. 高性能：能支持全量百万数据下 < 4s 渲染，也能通过局部下钻下钻实现秒级渲染>
4. 高扩展性：支持任意的自定义扩展（包括但不局限于布局，样式，交互，数据流）
5. 交互友好：支持丰富的交互形式（单选、圈选、行选、列选，冻结行头，宽高拖拽，自定义交互）

npm install @antv/s2

数据准备

```js
const s2DataConfig = {
  fields: {
    rows: ["province", "city"],
    columns: ["type"],
    values: ["price"],
  },
  data: [
    {
      province: "zhejiang",
      city: "hangzhou",
      type: "pen",
      price: "1",
    },
  ],
};
// 配置项准备
const s2options = {
  width: 600,
  height: 600,
};

// render
<div id="container"></div>;

import { PivotSheet } from "@antv/s2";
const container = document.getElementById("container");
const s2 = new PivotSheet(container, s2DataConfig, s2options);
s2.render();
```

import { PivotSheet } from '@antv/s2';

fetch(
'https://gw.alipayobjects.com/os/bmw-prod/2a5dbbc8-d0a7-4d02-b7c9-34f6ca63cff6.json',
{
describe: '标准交叉表数据',
fields: {
rows: [
'province',
'city'
],
columns: [
'type',
'sub_type'
],
values: [
'number'
]
},
meta: [
{
field: 'number',
name: '数量',
},
{
field: 'province',
name: '数量',
},
{
field: 'city',
name: '数量',
},
{
field: 'type',
name: '数量',
},
{
field: 'sub_type',
name: '子类别',
},
]，
data: [
{
number: 7789,
province: 'zhejiang'
city: 'hangzhou',
type:'jiaju',
sub_type:'zhuozi',
},
{
number:14013,
province: 'zhejiangsheng',
type: 'bangongyongpin',
sub_type:'pen',
},
{
number:7585,
province:'sichuansheng',
city:'leshanshi', // 乐山市
}
{
number
province:
}
]
}
)
.then((res) => res.json())
.then((dataCfg) => {
const container = document.getElementById('container');

    const s2Options = {
      width: 600,
      height: 480,
    };
    const s2 = new PivotSheet(container, dataCfg, s2Options);

    s2.render();

});

tooltip 注意事项
@antv/s2 中只保留了 tooltip 的核心显隐逻辑，我们将所有 tooltip 定制化交互都迁移到了@antv/s2-react 中，因此如果您有 tooltip 的需求，我们强烈建议您使用@antv/s2-react，细节参见 tooltip 组件使用文档。

React 版本
S2 提供了开箱即用的 React 版本 表格组件，还有配套丰富的 分析组件, 帮助开发者快速满足业务看数分析需求。

使用 React 版本 S2，只有渲染这一步有所不同：

import React from 'react';
import ReactDOM from 'react-dom';
import { SheetComponent } from '@antv/s2-react';
import '@antv/s2-react/dist/style.min.css';

const container = document.getElementById('container');

ReactDOM.render(
<SheetComponent
    dataCfg={s2DataConfig}
    options={s2options}
  />,
document.getElementById('container'),
);

# API

https://s2.antv.vision/zh/docs/api/general/S2DataConfig

S2DataConfig
data 原始数据 Data[]
fields 维度指标配置项 Fields
totalData Data[]
meta 全局化配置表数数据元信息，以度量为单位进行配置.在 meta 上的配置将同时影响所有组件的文本信息 Meta[]
sortParams 全局化配置表数数据元信息，以度量为单位进行配置。在 meta 上的配置将同时影响所有组件的文本信息 SortParams
晚上吃个饭

Data arr obj **required** dft: null
功能描述： 设置表的数据源为对象集合；

```js
const data = [
  {
    area: "dongbei",
    province: "jilin",
    city: "白山",
    type: "办公用品",
    subType: "纸张",
    cost: "2",
  },
];
```

周一到周五工作最重要，冲澡洗头；每天早晚都跑 5 公里冲澡洗头；冲完澡穿长裤（外裤）、短袖或者长袖出卫生间；

工作最重要的是要有激情、挑战者心态、攀岩者心态、兴趣十分浓厚的心态。（心态对了是最重要的，可以完成许多事情，可以写很多代码）

基础明细表和透视表 类型切换(style 配置第一项影响到 model 的)

new_table 思路：

width,height,debug,
先整理好需求-原型图，ued 图，然后去思考、设计、实现它

# styleSetting

表类型：透视表、明细表 hierarchyType(S2Options)；

## 明细表样式配置：

序号 showSeriesNumber,表头显示做不到了--canvas 绘制(showDefaultHeaderActionIcon ?cornerHeaer？)
@antv/s2-react SheetComponent: HeaderCfgProps title/description/className/style/extra/advancedSortCfg/ 不是明细表的「表头」，是表组件的顶部文案性表头，不是每一个字段的表头；
表头样式： 文字字色、字号、字体、对齐方式、表头颜色（背景色）--好像也做不到

表格：文字样式、对齐方式、奇偶行背景色，边框样式，水平+垂直的网格线
分页设置 分页组件
总计设置
S2DataConfig.totalData:[{price:100,cost:100,city:'',province:'',type:''}]
S2Options.totals:{col:{calcTotals: {
aggregation: "SUM",
},showGrandTotals:true,showSubTotals:true,subTotalsDimensions:['price','cost'],reverseLayout:false,reverseSubLayout:false}} 需要查看不生效的原因..

## 透视表样式设置

今天的目标，设计好结构，写完基本的代码，（明天很忙，还要忙着设计权限模块的代码架构、技术选型、实现方案）

mapping 作用映射函数
new RegExp('vo\*')
色块图、色阶图

```js
import { PivotSheet } from "@antv/s2";

fetch(
  "https://gw.alipayobjects.com/os/bmw-prod/2a5dbbc8-d0a7-4d02-b7c9-34f6ca63cff6.json"
)
  .then((res) => res.json())
  .then((dataCfg) => {
    const container = document.getElementById("container");

    const s2Options = {
      width: 600,
      height: 480,
      interaction: {
        hoverHighlight: false,
      },
      conditions: {
        text: [
          {
            field: "number",
            mapping(fieldValue) {
              if (fieldValue >= 2000) {
                return {
                  fill: "#fff",
                };
              }
            },
          },
        ],
        background: [
          {
            field: "number",
            mapping(fieldValue) {
              if (fieldValue <= 1397) {
                return {
                  fill: "#B8E1FF",
                };
              } else if (fieldValue <= 2797) {
                return {
                  fill: "#9AC5FF",
                };
              } else if (fieldValue <= 4191) {
                return {
                  fill: "#7DAAFF",
                };
              } else if (fieldValue <= 5588) {
                return {
                  fill: "#5B8FF9",
                };
              } else if (fieldValue <= 6985) {
                return {
                  fill: "#3D76DD",
                };
              }
              return {
                fill: "#085EC0",
              };
            },
          },
        ],
      },
    };
    const s2 = new PivotSheet(container, dataCfg, s2Options);

    s2.render();
  });
```

## 自定义目录树

当前节点位移的 id key，当前节点展示名 title，collapsed 节点是否收起(只会在自身代表非叶子节点生效)
valueInCols: false,

hierarchyType: 'customTree',

## 明细表交互

图表联动、下钻、联动（一期暂时不实现）

## 明细表排序

import { TableSheet } from '@antv/s2';的排序配置不起作用
S2DataConfig.sortParams SortParams SortParam:{sortFieldId,sortMethod,sortBy,sortByMeasure,query,type,sortFunc}
高级排序功能
<SheetComponent
sheetType={'pivot'}
adaptive={false}
dataCfg={dataCfg}
options={s2Options}
header={{
              advancedSortCfg: {
                open: true,
                sortParams,
                onSortConfirm: (ruleValues, sortParams) => {
                  setDataCfg({ ...dataCfg, sortParams });
                },
              },
            }}
/>
https://antv-s2.gitee.io/zh/examples/analysis/sort#advanced

sortBy: ['舟山', '杭州', '白山', '丹东']

EXTRA_FIELD? 根据度量值排序 https://antv-s2.gitee.io/zh/examples/analysis/sort#custom-measure

根据汇总值排序 sortByMeasure: TOTAL_VALUE,

https://antv-s2.gitee.io/zh/examples/analysis/sort#custom-totals

```js
import { PivotSheet, EXTRA_FIELD, TOTAL_VALUE } from "@antv/s2";

fetch(
  "https://gw.alipayobjects.com/os/bmw-prod/ad982192-a708-4732-99af-153f422e7b75.json"
)
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("container");
    const s2DataConfig = {
      fields: {
        rows: ["province", "city"],
        columns: ["type"],
        values: ["price"],
      },
      meta: [
        {
          field: "province",
          name: "省份",
        },
        {
          field: "city",
          name: "城市",
        },
        {
          field: "type",
          name: "商品类别",
        },
        {
          field: "price",
          name: "价格",
        },
      ],
      data,
      sortParams: [
        {
          // province 依据（ province - 小计 ）&（ 总计 - price ）& 升序 排序
          sortFieldId: "province",
          sortMethod: "ASC",
          sortByMeasure: TOTAL_VALUE,
          query: {
            [EXTRA_FIELD]: "price",
          },
        },
        {
          // type 依据 （ type - 小计 ）&（ price ）& 降序 排序
          sortFieldId: "type",
          sortMethod: "DESC",
          sortByMeasure: TOTAL_VALUE,
          query: {
            province: "浙江",
            [EXTRA_FIELD]: "price",
          },
        },
      ],
    };

    const s2Options = {
      width: 600,
      height: 480,
      totals: {
        row: {
          showGrandTotals: true,
          showSubTotals: true,
          reverseLayout: true,
          reverseSubLayout: true,
          subTotalsDimensions: ["province"],
        },
        col: {
          showGrandTotals: true,
          showSubTotals: true,
          reverseLayout: true,
          reverseSubLayout: true,
          subTotalsDimensions: ["type"],
        },
      },
    };
    const s2 = new PivotSheet(container, s2DataConfig, s2Options);

    s2.render();
  });
```

https://antv-s2.gitee.io/zh/examples/analysis/sort#custom-sort-func 根据自定义方法排序

      sortParams: [
        {
          // sortFieldId 为维度值时，params.data 为维度值列表
          sortFieldId: 'province',
          sortFunc: (params) => {
            const { data } = params;
            return data?.sort((a, b) => a?.localeCompare(b));
          },
        },
        {
          // sortFieldId 为度量值时，需传入 query 定位数值列表，params.data 为带有度量值的 data 列表
          sortFieldId: 'price',
          sortByMeasure: 'city',
          sortFunc: function (params) {
            const { data, sortByMeasure, sortFieldId } = params || {};
            return data
              ?.sort((a, b) => b[sortByMeasure] - a[sortByMeasure])
              ?.map((item) => item[sortFieldId]);
          },
          query: { type: '纸张', [EXTRA_FIELD]: 'price' },
        },
      ],

按字母、度量排序；自定义排序；
普通表格（明细表）的排序设置（度量、维度）
一期需求:
抓紧时间完成好，给学通用
隐藏列头的交互比我们自定义指标的弹窗交互要更好！！

1. 样式配置与现在拉齐
2. 实现排序功能（产品先调研）
3. 实现字段的条件格式
4. 实现冻结功能
5. 列设置实现更改表头名称 明细表 S2DataConfig.meta Meta[] Meta.name
6. 隐藏字段 预览页可以实现原本自定义指标的功能（保留原本的自定义指标弹窗组件 API、维度+度量：要不要保存到 cmptCfg？）；
7. 导出 EXCEL（还是用我们系统的导出 API）

这两天都要做到 10 点下班，好好完美解决所有数据门户的 bug 和开发完成 s2 新版表格组件

# 默认数据保持跟原来的一样~ 上海一二三四季度的销售额、利润

## 明细表/透视表字段的条件格式

原来的交叉表的 rows、cols 字段不能设置条件格式
普通表格组件的所有列字段都可以设置条件格式

Conditions 字段标记 s2Options.conditions
text/background/interval(isCompare: true,
maxValue: 8000,
minValue: 300,)/icon both_val: Condition[]
Condition：{field:str or re,mapping:fn}
type MappingFn = (
fieldV: number | str | null,
data: Record<string, any>
) => {
icon?: str // 仅用于图标字段标记，可选
fill: str // bg txt interval icon 字段标记颜色填充、比选
// 仅用于柱状图字段标记，可选
isCompare?: boolean;
minValue?: number;
maxValue?: number;
} | null | undefined // 返回值为空时，表示当前字段不显示字段标记样式

      conditions: {
        text: [
          {
            field: 'number',
            mapping() {
              return {
                // fill 是文本字段标记下唯一必须的字段，用于指定文本颜色
                fill: '#5B8FF9',
              };
            },
          },
        ],
      },
    };

const options = {
conditions: {
text: [
{
field: "province",
mapping: () => ({
fill: "rgba(0, 0, 0, .65)",
}),
},
],
interval: [
{
field: "sub_type",
mapping: () => {
return {
fill: "green",
};
},
},
],
background: [
{
field: "count",
mapping: () => ({
fill: "#ff00ff",
}),
},
],
},
};

IconCondition null/obj required

icon 条件格式。field 字段 ID： str，position icon 相较于文字的位置 left/right

ResizeActiveOptions
参数 说明 类型 默认值 必选
rowCellVertical 是否开启行头垂直方向 resize 热区

下午开始解决 5 个门户 bug，唉，加油加油加油

我就只留短发（我不是一个花里胡哨 shao 的人，比较传统，我也不擅长花里胡哨）

目前的普通表格、交叉表的条件格式设置上和 s2 的差异：
显示类型：背景颜色、文字颜色
规则：如果值包含、不包含、开头是、结尾是（字段）、等于、不等于；

注：规则读取顺序由上至下，后一条规则覆盖前一条生效
（度量）更复杂:
背景颜色变化(色阶-反转动作、空值处理--不显示颜色+自定义)

条形图 (条形颜色-区分正负值默认区分一绿一红,数值范围:自动、自定义比如 0-100 的默认值)

数字颜色变化

突出显示单元格 照搬维度的条件格式设置

作用范围：单元格 or 整行

我觉得思佚原来在普通表格、交叉表的设计不能照搬到 s2 新版表格组件上，有些地方不符合 s2 的设计规范，需要再探讨一下细节，比如说条件格式、高级排序的摆放位置；另外 s2 可以实现更复杂的分析功能、高级交互等等，我们需要探讨一下怎么取舍、怎么设置并添加进来

## 自定义布局

自定义行列顺序(layoutArrange)、

```js
fetch(
  "https://gw.alipayobjects.com/os/bmw-prod/cd9814d0-6dfa-42a6-8455-5a6bd0ff93ca.json"
)
  .then((res) => res.json())
  .then((res) => {
    const container = document.getElementById("container");
    const s2DataConfig = {
      fields: {
        rows: ["province", "city"],
        columns: ["type", "sub_type"],
        values: ["number"],
      },
      data: res.data,
    };

    const s2Options = {
      width: 600,
      height: 480,
      layoutArrange: (s2, parent, field, fieldValues) => {
        console.log(fieldValues);
        if (field === "city" && parent.label === "浙江省") {
          // layoutArrange 可手动设置行、列顺序，适用于局部调整，非规则调整。
          // 手动设置浙江省内部市的顺序，比如指定「宁波市」在第一位。
          const keyIndex = fieldValues.indexOf("宁波市");
          fieldValues.splice(keyIndex, 1);
          fieldValues.unshift("宁波市");
        }
        return fieldValues;
      },
    };
    const s2 = new PivotSheet(container, s2DataConfig, s2Options);

    s2.render();
  });
```

## 自定义 icon

## 增加列展开模式

## antd spin 样式被污染了

s2 的交叉表有没有数据格式（90%sure s2 没有数据格式功能）

https://github.com/antvis/S2/issues/1137
https://antv-s2.gitee.io/zh/examples/react-component/tooltip/#basic
https://antv-s2.gitee.io/zh/examples/custom/custom-layout/#custom-layout-arrange

https://help.fanruan.com/finebi/doc-view-1686.html
https://www.volcengine.com/docs/4726/66566

[
{
"province": "浙江",
"city": "杭州",
"type": "笔",
"price": "1"
},
{
"province": "浙江",
"city": "杭州",
"type": "纸张",
"price": "2"
},
{
"province": "浙江",
"city": "舟山",
"type": "笔",
"price": "17"
},
{
"province": "浙江",
"city": "舟山",
"type": "纸张",
"price": "6"
},
{
"province": "吉林",
"city": "丹东",
"type": "笔",
"price": "8"
},
{
"province": "吉林",
"city": "白山",
"type": "笔",
"price": "12"
},
{
"province": "吉林",
"city": "丹东",
"type": "纸张",
"price": "3"
},
{
"province": "吉林",
"city": "白山",
"type": "纸张",
"price": "25"
},
{
"province": "浙江",
"city": "杭州",
"type": "笔",
"cost": "0.5"
},
{
"province": "浙江",
"city": "杭州",
"type": "纸张",
"cost": "20"
},
{
"province": "浙江",
"city": "舟山",
"type": "笔",
"cost": "1.7"
},
{
"province": "浙江",
"city": "舟山 2",
"type": "笔",
"cost": "1.7"
},
{
"province": "浙江",
"city": "舟山 2",
"type": "纸张",
"cost": "1.7"
},
{
"province": "浙江",
"city": "舟山",
"type": "纸张",
"cost": "0.12"
},
{
"province": "吉林",
"city": "丹东",
"type": "笔",
"cost": "10"
},
{
"province": "吉林",
"city": "白山",
"type": "笔",
"cost": "9"
},
{
"province": "吉林",
"city": "丹东",
"type": "纸张",
"cost": "3"
},
{
"province": "吉林",
"city": "白山",
"type": "纸张",
"cost": "1"
}
]
