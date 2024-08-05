# 普通表格

## 表头设置

是否显示表头
对齐方式
表头颜色

## 表格设置

字色、字号、字体
对齐方式
网格线 水平、垂直；奇行偶行背景色
单元格上下间距

## 翻页器

是否显示，每页条数（10、20、50，100，200，500，1000），显示每页条数选择器，翻页器颜色

## 合计和均值设置

是否显示，底（顶）端显示，表格合计是否显示，表格均值是否显示，不需要合计或均值的度量

## 列

### 条件格式

_设置完条件格式后，条件格式的菜单会变更为编辑条件格式，并且在编辑条件格式下方会新增取消条件格式菜单，点击后取消条件格式设置_
弹框 title：条件格式（地区）
显示类型：背景颜色、文字颜色
添加规则：（城市、利润）

1. 如果值 包含、不包含、开头是、结尾是、等于、不等于（关系） 请输入匹配字符 则显示为（颜色）删除 icon
2. 背景颜色变化（空值处理：不显示颜色、自定义：选择颜色模版，色阶个数 2-20，是否反转）；条形图、数字颜色变化（等同背景）、突出显示

- 条形图：条形颜色（是否区分正负值，数值范围（自动、自定义-最小值最大值）
- 背景颜色变化、数值颜色变化见上
- 突出显示单元格（显示类型：背景颜色、文字颜色）
  注：规则读取顺序由上至下，后一条规则覆盖前一条生效
  显示范围：单元格、整行

### 列设置

(利润的列设置和冻结与维度设置中的一致)
表头名称、列宽度

### 冻结

『冻结」菜单变更为解除冻结

### 排序（城市、利润）

(利润的排序，没有自定义功能，其他与维度设置中一致)
字段排列后，菜单中会在排序下方新增取消排序的菜单，点击后，取消排序
升序、向上的小三角 icon，正堆叠形状
降序、向下的小三角 icon，倒堆叠形状

### 维度字段排序

用户可对维度字段进行升序与降序排序，还可选择是否进行自定义编辑。

在此弹窗中，左侧数据项列表中，用户可查看到该字段下的所有数据，并且用户也可以输入关键字搜索。

用户左键单击选中数据后，点击“>”即可将所选数据置顶或置底，用户可在置顶或置底处点击“<”将数据调回。用户在置顶或置底处选择数据后，也可以通过下图中所框选的地方对数据进行排序。未被选中置顶置底的数据将会按照用户上方所选的顺序进行排序。被置顶或置底的数据将无法重复被选中，且被添加进置顶的数据，无法添加至置底；被添加进置底的数据无法添加为置顶。

如当用户把“中南“这条数据添加进置顶后，用户在下方再选中“中南”后点击“>”后提示“该数据已被置顶无法置底”如下图所示。

### 移除

### 排序级别

按以下级别顺序对字段进行排序： 1.城市 2.利润 3.折扣 4.数量（上移下移）

用户在排序级别中可选择设置按钮的排序级别，呼出排序级别弹窗，可在此对表格设置一键排序。

打开排序级别后，弹窗展示表格中的所有列字段，用户可对这些字段的排序级别进行调整。
如果表格中有多个字段存在排序（升序、降序）的情况，那么排序的级别将会按照用户设置的级别排序。（用户如果不设置，默认按照数据中列的排列顺序）。

点击重置按钮，会将排序恢复为默认排序（数据中列的排列顺序）

## 自定义指标

固定指标：固定显示于表格的指标，阅览报告时，无法修改固定指标的显示状态。
自定义指标：阅览报告时，可以自定义筛选是否显示于表格的指标。开启』默认选中『的自定义指标在初始状态下显示于表格。
勾选掉的指标将会在表格中隐藏
设置完自定义指标后，自定义指标下方会新增取消自定义指标菜单。

表格在阅览时支持动态选择需要展示的指标。
打开“自定义指标”设置，共分为固定指标与自定义指标这两块内容。在固定指标中默认展示出所有拖入列中的字段，并且分为维度和度量展示。
固定指标：固定显示于表格的指标，阅览时，无法修改固定指标的显示状态。
自定义指标：阅览时，可以自定义筛选是否显示于表格的指标。开启“默认选中”的自定义指标在初始状态下显示于表格。关闭则表示在初始状态下不显示于表格。

## 行列转置

（在普通表格的数据 TAB “列”处，表格存在字段时，数据面板会出现设置按钮（不拖入字段不显示）。点击后出现下拉菜单，菜单中包括：1.行列转置、2.自定义指标、3.排序级别。）

## 编辑普通表格时需要满足的需求：

（大屏主页面上表格区域， 基于鼠标 hover 等事件的交互还是右侧配置区域）

- 如果添加列过多，将会出现下拉条，可进行下拉（横向滚动？）
- 用户鼠标移动至垂直网格线处会出现虚线，拖动虚线可改变列宽度
- 鼠标移动至表头时，如果此列没有进行排序那么此列表头会展示下图 icon，鼠标点击 icon 可切换排列顺序，切换顺序：无降序升序。如果此列已经进行排序，那么无需鼠标移动至表头，表头会一直显示排序 icon；同理，当用户鼠标移动至表头时，如果此列没有设置冻结，那么此表头会出现冻结 icon，点击后可进行冻结，如果此列已经被冻结那么冻结 icon 将会一直展示在表头，再次点击可取消冻结，icon 消失
- 当生成翻页器时，点击翻页器可进行翻页，以及可切换翻页器默认显示条数
- 用户在预览页查看表格时，只可拖动表格中的下拉侧拉条，编辑每页可展示条数，翻页，编辑自定义指标，以及点击表头切换排序。冻结、取消冻结列等操作，但是说有操作不进行保存，刷新页面后表格数据将会恢复至默认状态

## 样式

位置、尺寸（大小）：两者都可通过输入、拖拽更改
序号：是否显示表格序号，默认不展示。勾选后表格第一列将自动生成序号
标题：设置标题及其样式，详情请见标题设置（代码已封装）
表头：

# 图表交互

大屏柱状图、折线图、双轴图、气泡图、填充地图、轮播表、色块图新增【交互】模块，可创建图表联动。
选择播放动画时进行图表联动以及点击时进行图表联动。

## coding

3.3 数据的存储

数据存储分为两种
3.3.1 暂存，不提交数据库，storeCreator

3.3.2 提交数据库
updateConfig
表格需要更新的信息，其他地方就可以通过 config 拿到这些信息

## 舰锋

维度和度量在此不做区分：都作为列，有个新的 type：DIMTABLE

# 轮播表

**表格的编辑&&预览**

colgroup
网络释义
表格列的集合
... col 表格列 colgroup 表格列的集合 caption 表格标题 ...

基于 20 个网页-相关网页

定义一个表格的栏目组
列组
分组表格中的列
短语
colgroup column group 略

colgroup table-column-group 代表表格中所有列

colgroup-col 表单列分组

# cross

```js
if (level) {
  const restoreOrderInOneLayer = (oldChildren: any[], newChildren: any[]) => {
    if (!newChildren || !newChildren.length) return
    oldChildren.forEach((child, childI) => {
      if (!child.children || !child.children.length) return
      const oldChildrenValues = child.children.map((v) => v.value)
      newChildren = oldChildrenValues.reduce((acc, v) => {
        if (!isArray(newChildren[childI])) return acc
        // if (newChildren && newChildren[childI] && newChildren[childI].find)
        acc.push(newChildren[childI].find((child) => child.value == v))
        return acc
      }, [])
      if (child.children)
        restoreOrderInOneLayer(child.children, newChildren[childI])
    })
  }
  restoreOrderInOneLayer(oldDrillTree[0].children, firstChildren)
}

if (level) {
  const restoreOrderInOneLayer = (oldChildren: any[], newChildren: any[]) => {
    oldChildren.forEach((child, childI) => {
      if (child.children) {
        const oldChildrenValues = child.children.map((v) => v.value)
        const sameOrderChild = newChildren[childI]
        if (sameOrderChild) {
          const drillTreeChildren = oldChildrenValues.reduce((acc, v) => {
            if (!sameOrderChild.children) return acc
            const target = sameOrderChild.children.find(
              (child) => child.value == v
            )
            if (target) acc.push(target)
            return acc
          }, [])
          if (drillTreeChildren.length)
            sameOrderChild.children = drillTreeChildren
          else {
            if (child.children && child.children.length)
              sameOrderChild.children = restoreOrderInOneLayer(
                child.children,
                newChildren[childI].children
              )
            return
          }
          restoreOrderInOneLayer(child.children, newChildren[childI].children)
        }
      }
    })
  }
  restoreOrderInOneLayer(oldDrillTree[0].children, newFirstChildren)
}
```

render:(txt,record)
