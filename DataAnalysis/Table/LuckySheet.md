LuckySheet(Luckysheet) is an online spreadsheet like excel that is powerful, simple to configure,and completely open source.
Source Code(Github,Gitee Mirror)
Documentation(Online Documentation,Gitee Online Doc)
Demo(Online Demo/Cooperative editing demo,Gitee Online Demo)
Plugins Demo(Import Excel Demo,Gitee Import Excel Demo)
Forum(Chinese Forum,Google Group)

# Plugins

Luckyexcel: Excel import and export library
chartMix: Chart plugin

# Ecosystem 生态系统

| Project                   |                        Desc                         |
| ------------------------- | :-------------------------------------------------: |
| Luckysheet Vue            |    Luckysheet and Luckyexcel in a vue cli3 proj     |
| Luckysheet React          |             Luckysheet in a React proj              |
| Luckysheet Node           |               Use Luckysheet in koa2                |
| Luckysheet Server         |           Java backend Luckysheet Server            |
| Luckysheet Server Starter | LuckysheetServer docker deployment startup template |

# Features

- Formatting: style, conditional formatting, txt alignment and rotation, txt truncation, overflow, automatic line wrapping,multiple data types, cell segmentation style
- Cells: drag and drop, fill handle, multiple selection
- Row & col: hide,insert,delete rows or cols,freeze, and split txt
- Operation: undo,redo,copy,paste,cut,hot key,format painter, drag and drop selection
- Formulas & Functions: Built-in, remote and custom formulas
- Tables: filter,sort
- Enhanced functions: Pivot tables, charts, comments,cooperative editing, insert picture,matrix calculations,screenshots,copying
  - other formats, EXCEL import and export, etc.

# 格式设置

- **样式**修改字体、字号、颜色或其他通用的样式
- **条件格式**突出显示所关注的单元格或单元格区域：强调异常值；使用数据栏、色阶和图标集（与数据中的特定变体对应）直观地显示数据
- **文本对齐及旋转**
- **支持文本的截断、溢出、自动换行**
- **数据类型**
  - 货币、百分比、数字、日期
  - Custom（和 Excel 保持一致，如：`##,###0.00`,`$1,234.56$##,###0.00_);[Red]`,`$##,###0.00`,`_($* ##,###0.00_);_(...($* "-"_);_(@_)`,`08-05 PM 01:30 MM-dd AM/PM hh:mm`）
  - **单元格内多样式**Alt+Enter 单元格内换行、上标、下标、单元格内可定义每个文字的不同样式

# 单元格

- **拖转选取来修改单元格**（对选区进行操作，可以拖动四边来移动选区，也可以在右下角对选区进行下拉填充操作）
- **选区下拉填充**对于一个 1，2，3，4，5 的序列，将会按照间隔为 1 进行下拉填充，而对 2，4，6，8 将会以 2 作为间隔。支持等差数列，等比数列，日期、周、天、月、年，中文数字填充
- **自动填充选项**下拉填充后，会出现填充选项的菜单，支持选择复制、序列、仅格式，只填充格式，天，月、年的选择
- **多选区操作**可以按住 Ctrl 键进行单元格多选操作，支持多选区的复制粘贴
- **查找和替换**对内容进行查找替换，支持正则表达式，整词，大小写敏感
- **定位**可以根据单元格数据类型进行自动定位并选中，选中后可以批量进行格式等操作
- **合并单元格**
- **数据验证（表单功能）**支持 Checkbox，drop-down list，datePicker

# 行和列操作

- **隐藏，插入，删除行或列**
- **冻结行或列**支持冻结首行和首列，冻结到选区，冻结调节杠可以进行拖动操作
- **文本分列**可以把文本根据不同符号进行拆分，和 Excel 的分列功能类似

# 操作体验

- **撤销、重做**
- **复制、粘贴、剪切**支持 luckysheet 到 excel 和 Excel 到 luckysheet 带格式的互相拷贝
- **快捷键支持**与 Excel 一致，如果有不同或缺失请反馈给我们
- **格式刷**与 Google sheet 类似
- **任意选区拖拽**选择单元格，输入公式，插入图表，会与选区相关，可以通过拖动和放大缩小选区来改变与之关联的参数

# 公式和函数

- 内置公式
  - 数学 SUMIFS,AVERAGEIFS,SUMIF,SUM,etc.
  - 文本 CONCATENATE,REGEXMATCH,MID
  - 日期 DATEVALUE,DATEDIF,NOW,WEEKAY,etc.
  - 财务 PV,FV,IRR,NPV,etc.
  - 逻辑 IF,AND,OR,IFERROR,etc.
  - 查找和引用 VLOOKUP,HLOOKUP,INDIRECT,OFFSET,..
  - 动态数组（Excel2019 新函数，SORT,FILTER,UNIQUE,RANDARRAY,SEQUENCE)
  - 公式支持数组 （=（1，2，3，4，5，6），Ctrl+Shift+Enter）
  - 远程公式（DM_TEXT_TFIDF,DM_TEXT_TEXTRANK,DATA_CN_STOCK_CLOSE etc,Need remote interface, can realize complex calculation)
  - 自定义公式（根据身份证识别年龄，性别，生日，省份，城市等等。AGE_BY_IDCARD,SEX_BY_IDCARD,BRITHDAY_BY_IDCARD,PROVINCE_BY_IDCARD,CITY_BY_IDCARD,etc 可以任意加入自己的公司哦

# 表格操作

- 筛选（支持颜色、数字、字符、日期的筛选）
- 排序（同时加入多个字段进行排序）

# 数据透视表

- **字段拖拽**（操作方式与 Excel 类似，拖动字段到行、列、数值、筛选等 4 个区域）
- **聚合方式**（支持汇总、计数、去重计数、平均、最大最小、中位数、协方差、标准差、方差等计算）
- **筛选数据**（可对字段进行筛选后再进行汇总）
- **数据透视表下钻**（双击数据透视表中的数据，可以下钻查看到明细，操作方式与 Excel 一致
- **根据数据透视表新建图表** 数据透视表产生的数据也可以进行图表制作

# 图表

- **支持的图表类型** 目前折线图、柱状图、面积图、条形图、饼图可以使用，散点图、雷达图、仪表盘、漏斗图正在接入，其他图表正在陆续开发中，请大家给予建议
- **关于图表插件**图表使用了中间插件 ChartMix（MIT 协议），目前支持 Echarts，正在逐步接入 Highcharts、阿里 G2、amCharts，googleChart、chart.js
- **Sparklines 小图**以公式形式进行设置和展示，目前支持：折线图、面积图、柱状图、累积图、条形图、离散图、三态图、饼图、箱线图

# 分享及写作

- **评论**评论的删除、添加、修改、隐藏
- **共享编辑**支持多用户共享编辑、内置 APP

# 插入对象

- **插入图片**支持 JPG、PNG、SVG 的插入、修改和删除，并且随表格的变动而产生变化

# Luckysheet 专有

- **矩阵计算**通过右键菜单进行支持：对选区内数据进行转置、旋转、数值计算
- **截图**把选区的内容进行截图展示
- **复制到其他格式**右键菜单的「复制为」，支持复制为 json、arr、对角线数据、去重等等
- EXCEL 导入及导出（专为 Luckysheet 打造的导入导出插件，支持密码、水印、公式等的本地导入导出，导出正在开发）

# 未来开发计划

- **打印及设置**像 Excel 一样进行打印设置，并导出为图片或 PDF
- **树形菜单**类似 Excel 中的分级显示（分组）
- **表格新功能**类似 Excel 中表格的筛选器和切片器
- **CSV，TXT 导入及导出**专为 Luckysheet 打造的导入导出插件，支持密码、水印、公式等的本地导入导出
- **插入 svg 形状**支持 Pen Tool 的插入、修改和删除，并且随表格的变动而产生变化
- **文档**完善文档和 API
- **敬请期待**

# Resources

- priority reading for new users: User Guide
- For the tutorials, learning materials and supporting solutions provided by the community, please refer to: Tutorials and Resources

# 开发模式

- 环境
  - Node.js Version >= 6
- 安装
  - npm install
  - npm install gulp -g
- 开发
  - npm run dev
- 打包
  - npm run build
    **使用步骤：**

# First Step

```html
// Introduce dependencies through CDN
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/luckysheet@latest/dist/plugins/css/pluginsCss.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/luckysheet@latest/dist/plugins/css/plugins.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/luckysheet@latest/dist/css/luckysheet.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/luckysheet@latest/dist/assets/iconfont/iconfont.css"
/>
<src
  src="https://cdn.jsdelivr.net/npm/luckysheet@latest/dist/plugins/js/plugin.js"
/>
<src
  src="https://cdn.jsdelivr.net/npm/luckysheet@latest/dist/luckysheet.umd.js"
/>
```

# Second step

Specify a table container

```html
<div
  id="luckysheet"
  style="margin:0;padding:0;position:absolute;width:100%;height:100%;left:0;top:0"
></div>
```

# Third step

```html
<script>
  $(function () {
    // Cfg itm
    var options = {
      container: 'luckysheet', // luckysheet is the container id
    }
    luckysheet.create(options)
  })
</script>
```

`npm install gulp -g`

[在线案例](https://mengshukeji.github.io/LuckysheetDocs/zh/guide/#%E5%9C%A8%E7%BA%BF%E6%A1%88%E4%BE%8B) 页面边滚动边切换 hash 值

# 整体结构

一个完整的 luckysheet 表格文件数据格式为 luckysheetfile，一个表格文件包含若干个 sheet 文件，对应 Excel 的 sheet0、sheet1 等等

一个 Luckysheet 文件示例如下，该表格包含 3 个 sheet：luckysheetfile = [{sheet1 设置},{sheet2 设置},{sheet3 设置},]

文件中的一个 sheet 数据结构如下：

```js
{
  name: 'Cell', // 工作表名称
  color: '', // 工作表颜色，工作表名称下方会有一条底部边框
  i: '0', // 索引 index，工作表索引，作为唯一 key 值使用
  sts: '1', //  激活状态 active status  激活状态，仅有一个激活状态的工作表，其他工作表为 0
  order: '0', // 工作表顺序
  hidden: 0, // whether
  rows: 36,
  cols: 18,
  cfg: {
    merge: {}, // 合并单元格
    rowH: {} // table row-height
    colW: {},
    rowHidden:{},
    colHidden:{},
    // borderInfo:{},
    borderInfo:[
      {
        rangeTyp:'cell',
        value:{
          rowI:3,
          colI:3,
          l:{
            style:10,
            color:'rgb(255,0,0)',
          }
        }
      },
      {
        rangeType:'range', // 选区
        // rangeType:'cell', // 单个单元格
        place:'border-all', // 'border-left'|'border-right'|'border-top'|'border-btm'|'border-all'
        // |'border-outside'|'border-inside'|'border-horizontal'|'border-vertical|'border-none'
        style:'3', // 1Thin2Hair3Dotted4Dashed5DashDot6DashDotDot7Double8Medium
        color:'#0000ff',
        range:[ // 行列信息数组
          {
            row:[7,8],
            col:[8,9],
          }
        ]
      },
       {
          "rangeType": "cell",
          "value": {
              "row_index": 3,
              "col_index": 3,
              "l": {
                  "style": 10,
                  "color": "rgb(255, 0, 0)"
              },
              "r": {
                  "style": 10,
                  "color": "rgb(255, 0, 0)"
              },
              "t": {
                  "style": 10,
                  "color": "rgb(255, 0, 0)"
              },
              "b": {
                  "style": 10,
                  "color": "rgb(255, 0, 0)"
              }
          }
      }
      // 表示设置单元格`"D4"`，上边框/下边框/左边框/右边框都是边框粗细为`"MediumDashDot"`,颜色为`"rgb(255, 0, 0)"`

    ]
  },
  authority:{ // 当前工作表的权限配置
    selectLockedCells:1, // 选定锁定单元格
    selectLockedCells:1, // 选定解除锁定的单元格
    formatCells:1, // 设置单元格格式
    formatCols:1, // 设置列格式
    insertCols:1,
    insertHyperlinks:1,
    delCols:1,
    sort:1,
    filter:1， // enable auto-filter feature
    usePivotTableReports:1, // 使用数据透视表和报表
    editObjects:1, // 编辑对象
    editScenarios:1,
    sheet:1,// 如果为1或 TRUE，则该工作表受到保护；如果为0或者 FALSE，则该工作表不受保护
    hintTxt: '', // 弹窗提示的文字
    encryptScheme:'None', // 加密方案：MD2，4，5，RIPEMD-128，160，SHA-1,256,384,512;WHIRLPOOL漩涡
    saltV:null, // 密码解密的盐参数，为一个自己定的随机数值
    sqref:'$C$1:$D$5', // 区域范围
  },
  initialData: [] // 初始化使用的单元格数据
  data:[], // 更新和存储使用的单元格数据
  scrollLeft: 0, // 左右滚动条位置
  scrollTop: 315, // dftV:0
  // 选中的区域，支持多选，是一个包含多个选区对象的一维数组
  selectedCells: [
    {
      row:[0,1],
      col:[0,0],
    },
    {
      row:[3,4],
      col:[1,2],
    },
  ],
  conditionFormat:{},
  // 公式链是一个由用户指定顺序排列的公司信息数组，Luckysheet 会根据此顺序来决定公式执行的顺序
  // 注意，在初始化工作簿 bu（4）的时候，如果有单元格包含公式，请务必添加对应单元格位置的公式链，否则 Luckysheet 无法识别公式
  calcChain:[
    {
      r:6, // 行数
      c:3, // 列数
      i:1, // 工作表 id
      fn: [true,23.75,'=AVERAGE(D3:D6'], // 公式信息，包含公式计算结果 30,'=MAX(D3:D6)'
      color:'w', // w采用深度优先算法，b 普通计算
      parent:null,
      children:{},
      times:0,
    }
  ],
  isPivotTable:false, // 是否数据透视表
  pivotTableCfg: {
    pivotSelectedCells:{
      row: [0,12],
      col:[0,4],
    },
    dataSheetI:6, // 源数据所在的 sheet 页码
    col:[
      {
        i:3,
        name:'subject',
        fullName:'subject',
      }
    ],
    row:[
      {
        i:1,
        name:'student',
        fullName:'student',
      }
    ],
    filter:[],
    values:[
      {
        i:4,
        name:'score',
        fullName:'count:score',
        sumType:'COUNTA', // 计数聚合？
        nameI:0,
      }
    ],
    showType:'col',
    data:[ // metaData
      ['count:score','science','mathematics','foreign language','English','total'],
      ['Alex',1,1,1,1,4],
      ['Joy',1,1,1,1,4],
      ['Tim',1,1,1,1,4],
      ['total',3,3,1,3,12],
    ],
    drawPivotTable:false,
    boundary:[5,6],
    // 筛选范围，一个选区，一个 sheet 只有一个筛选范围，类似 selectedCells。如果仅仅只是创建一个选区打开筛选功能，则配置一个范围即可，如果还需要进一步设置详细的筛选条件，则需要另外配置同级的 filter 属性
    filterSelection:{
      row:[2,6],
      col:[1,3],
    },
    // 筛选的具体设置，跟 filterSelection 筛选范围互相搭配。当你在第一个 sheet 页创建了一个筛选区域，通过 luckysheet.getLuckysheetFile()[0].filter 也可以看到第一个 sheet 的筛选配置信息
    filter:{
      // 第一列
      0: {
        calJs: { // 按条件筛选
          value:'cellNull', // 筛选类型
          txt: 'Is empty', // 类型说明
          typ: 0, // 筛选大类
        },
        hiddenRows:{3:0,4:0}, // 隐藏行信息
        optionState:true, // 是否开启配置
        cI:1, // 当前范围列顺序
        str:2, // 范围，起始行
        edr:6, // 范围，结束行
        stc:1, // 范围，起始列
        edc: 3, // 范围，结束列
      },
      1: {
        calJs:{},
        hiddenRows:{1:0},
      }
    }
  },
  filterSelection:{}, // 筛选范围
  filter: null // 筛选配置
  alternateFormatSave:[
    {
      cellRange:{
        rows: [1,6],
        cols: [1,5],
      },
      format:{
        header:{ // 页眉
          fc:'#000',
          bc:'#5ed593',
        },
        first:{
          fc:'#000',
          bc:'#fff',
        },
        second:{ // 页眉
          fc:'#000',
          bc:'#e5fbee',
        },
        footer:{
          fc:'#000',
          bc:'#a5efcc',
        },
      },
      hasRowHeader:false, // 含有页眉
      hasRowFooter:false, // 含有页脚
    },
  ], // 交替颜色
  alternateFormatSaveModelCustom:[
    {
      header: {
        fc:'#6aa84f',
        bc:'#fff',
      },
      first,second,footer
    }
  ], // 自定义交替颜色，包含多个自定义交替颜色的配置
  conditionFormat: [ // 条件格式配置信息，包含多个条件格式配置对象的一维数组，type：'default'突出显示单元格规则和项目选区规则,'dataBar'数据条，'icons'图标集，colorGradation 色阶

  // type为dataBar时，应设置渐变色；默认值为蓝-白渐变["#638ec6", "#ffffff"]
  // type为icons时，应设置图标类型；默认值为"threeWayArrowMultiColors"三向箭头彩色
  // 可取值为：三向箭头，threeTriangles 3个三角形，fourWayArrowMultiColors 四向箭头（彩色），five。。。，threeWayArrowGray，four，five；threeColorsTrafficLightRimless 三色交通灯（无边框），threeSigns 三标志，greenRedBlackGradient，threeColorsTrafficLightBordered 三色交通灯（有边框），fourColorsTrafficLight，threeSymbolsCircled 三个符号（有圆圈），tricolorFlag三色旗，threeStars，fiveQuadrantDiagram 五象限图，fiveBoxes 5个框，grade4 四等级，grade5 五等级；

  // type 为 colorGradient 时，应设置色阶颜色值；默认值为绿-黄-红色阶 ["rgb(99, 190, 123)", "rgb(255, 235, 132)", "rgb(248, 105, 107)"]
  // 推荐的快捷取值：
  // ["rgb(99, 190, 123)", "rgb(255, 235, 132)", "rgb(248, 105, 107)"],  //绿-黄-红色阶
  // ["rgb(248, 105, 107)", "rgb(255, 235, 132)", "rgb(99, 190, 123)"],  //红-黄-绿色阶

  // ["rgb(99, 190, 123)", "rgb(252, 252, 255)", "rgb(248, 105, 107)"],  //绿-白-红色阶
  // ["rgb(248, 105, 107)", "rgb(252, 252, 255)", "rgb(99, 190, 123)"],  //红-白-绿色阶

  // ["rgb(90, 138, 198)", "rgb(252, 252, 255)", "rgb(248, 105, 107)"],  //蓝-白-红色阶
  // ["rgb(248, 105, 107)", "rgb(252, 252, 255)", "rgb(90, 138, 198)"],  //红-白-蓝色阶

  // ["rgb(252, 252, 255)", "rgb(248, 105, 107)"],  //白-红色阶
  // ["rgb(248, 105, 107)", "rgb(252, 252, 255)"],  //红-白色阶

  // ["rgb(99, 190, 123)", "rgb(252, 252, 255)"],  //绿-白色阶
  // ["rgb(252, 252, 255)", "rgb(99, 190, 123)"],  //白-绿色阶

  // ["rgb(99, 190, 123)", "rgb(255, 235, 132)"],  //绿-黄色阶
  // ["rgb(255, 235, 132)", "rgb(99, 190, 123)"]   //黄-绿色阶]
    {
      typ: 'dft',
      cellRange:[ // 应用范围
        {
          row:[2,7],
          col:[2,2],
        }
      ],
      format: { // when typ is dft
        txtColor:'#000',
        cellColor:'#fff',
      },
      conditionName:'betweenness', // typ
      conditionRange:[ // 条件值所在单元格
        {
          row:[4,4],
          col:[2,2],
        },
        {
        row:[6,6],
        col:[2,2],
        },
      ],
      conditionV:[2,4], // 自定义传入的条件值
    },
    {
      typ:'dataBar',
      cellRange:[
        {
          row:[10,15],
          col:[10,11],
        }
      ],
      format:[
        '#6aa84f','#fff'
      ]
    },
    {
      typ:'icons',
      cellRange:[
        {
          row:[19,23],
          col:[2,2],
        }
      ],
      format:{
        len:3,
        leftMin:0,
        top:0
      }
    },
    {
      type:'colorGradation',
      cellRange:[
        {
          row:[10,15],
          col:[6,6],
        }
      ],
      format:[
        'rgb(99,190,123)',
        'rgb(255,235,132)',
        'rgb(248,105,107)',
      ]
    }
  ]
  freeze: [ // 冻结行列，分为6种类型：row 冻结首行，col 冻结首列，both 冻结行列，rangeRow冻结行到选区，rangeBoth 冻结行到选区，cancel 取消冻结
  // 当设置冻结到选区时，需要设置开启冻结的单元格位置，格式为{rowFocus:0,colFocus: 0}，意为当前激活的单元格的行数和列数
  // sheet 新的配置属性，存储更语义化的配置，用于初始化和传给后端
  注意一点，luckysheetFile 中还有一个配置 frozen，其中的 frozenHorizontalData 仍然用作本地数据，但是不发给后台存储，只做本地调试。
    {
      typ:'row'
    },
    { // 冻结到 A1选区
      type:'rangeRow',
      range:{rowFocus:0,colFocus:0}
    }
  ],
  chart:[ // 图表配置,参照 chartMix 配置格式，允许只设置想要的图表属性，一个完整的配置案例如下：
    {
      chartId:'chart_p145W6i73otw_1596209943446',
      w:400,
      h:250,
      left:20,
      top:120,
      sheetI:'Sheet_6az6nei65t1i_1596209937084',
      needRangeShow:true,
      chartOptions:{
        chartId:'chart_p145W6i73otw_1596209943446',
        chartAllTypes:'echarts/line/default',
        rangeArr:[{row:[0,4],col:[0,7]}],
        rangeColCheck:{exits:true,range:[0,0]},
        rangeRowCheck:{exits:true,range:[0,0]},
        rangeCfgCheck:false,
        dftOption:{
          title:{
            visible:false,
            txt:'默认标题',
             label:{
               fz:12,
             }
          }
        }
      }
    }
  ],
  zoomRatio:1, // 此 sheet 页的缩放比例，为0-1之间的二位小数字，比如0.1，0.56
  images: [ // 插入表格中图片信息，包含图片地址、宽高、位置、裁剪等信息，以下为一个 imgItm 案例，通常一个工作表中可能存在多个图片，所以 img 的格式为数组[imgItm,imgItm,...]
    {
      type:'3', // 1移动并调整单元格大小2移动且不调整单元格大小3不要移动单元格并调整其大小
      src:'',
      originW：1484,
      originH:834,
      dft:{
        w:293,
        h:196,
        l:409, // 图片离表格左边的位置
        t:248,
      },
      crop:{
        w:293, // 图片裁剪后宽度
        h:196,
        offsetLeft:0, // 图片裁剪后离未裁剪时左边的位移
        offsetTop:0,
      },
      isPosFixed:false,// 固定位置
      fixedLeft:507, // 固定位置 左位移
      fixedTop:141, // 固定位置 右位移
      border:{
        w:0，
        radius:0,
        style：'solid',
        color:'#000',
      },
    }
  ],
  gridBordersVisible:1,
  dataVerify:{
    typ:'dropdown', // checkbox,num,numInt,numDecimal,txtContent,txtLen,date,validity
    typ2:null, // typ is dropdown/checkbox; num/numInt/numDecimal/txtLen: between 介于，notBetween,eq,ne,gt,lt,gte,lte 小于等于；txtContent:include,exclude,equal；date:between,notBetween,eq,ne,before,notBefore,after,notAfter;validity:card,phone;
    val1(String|Number): '1,2,3', // 条件值1。typ 为 dropdown 时，val1可谓选区或以英文逗号隔开的字符串，如'1,2,3' or 'A1:B2';validity:val1可为空；其他类型时 val1为数值或字符串
  },
  visibleDataRows: [], // 所有行的位置
  visibleDataCols: [], // 所有列的位置
  chWidth: 2322, // 工作表区域宽度
  rhHeigh: 949, // 工作表区域高度
  loaded: '1', // 已加载过此 sheet 的标识
}
```

## 查看方式

在 chrome 的 console 中查看：`luckysheet.getLuckysheetFile()`可以看到完整设置`[{sheet1},{sheet2},{sheet3}]`
**快捷键**
CTRL+C 复制单元格
CTRL+V 粘贴单元格
CTRL+X 剪切单元格
CTRL+Z 剪切
CTRL+Y 重做
CTRL+A 全选
CTRL+B 加粗
CTRL+F 查找
CTRL+H 替换
CTRL+I 斜体
CTRL+UP/DOWN/LEFT/RIGHT 快捷调整单元格选框
SHIFT+UP/DOWN/LEFT/RIGHT 调整选区
CTRL+鼠标左击 多选单元格
SHIFT+鼠标左击 调整选区
UP/DOWN/LEFT/RIGHT 移动单元格选框
ENTER 编辑单元格
TAB 向右移动单元格选框
DELETE 清除单元格数据

# 指引

如果你使用 Luckysheet 遇到了问题，按以下步骤来寻找答案

1. 使用多吉或者 Google 搜索常见技术问题
2. Luckysheet 相关的问题优先查看 Luckysheet 官方文档（标注 TODO 的功能暂未实现）
3. 搜索常见问题列表
4. 官方论坛（qq）
5. 尝试自己检查或试验以找到答案
6. 请尝试阅读源代码以找到答案

如果以上方法都没有解决你的问题，可以考虑：

- 去官方论坛提问
- 官方微信群或请求群提问
- 直接提交 issue（明显问题或者需求无法满足的）

# 整体配置

初始化表格时，可以设置一个对象配置串 options 来自定义配置 Luckysheet 表格
如下是一个简洁的配置案例：

```js
const opts = {
  // options
  container: 'luckysheet', // 设定 DOM 容器的 ID
  title: 'Luckysheet Demo',
  lang: 'zh',
}
luckysheet.create(opts)
```

options 配置项会作用于整个表格，特别的，单个 sheet 配置则需要在`opts.data`数组中，分别设置对应更详细的参数，参考工作表设置

针对个性化需求，除了允许配置信息栏（infoBarVisible）、工具栏（toolBarVisible），底部 sheet 页（sheetBarVisible)，底部计数栏 staticBarVisible 之外，luckysheet 开放了更细致的自定义配置选项，分别有：

- 自定义工具栏 toolbarCfgVisible
- 自定义底部 sheet 页 sheetBarCfgVisible
- 自定义计数栏 statisticBarCfgVisible
- 自定义单元格右键菜单 cellRightClickCfg
- 自定义底部 sheet 页右键菜单 sheetRightClickCfg

# 配置项

- container 容器 ID
- title 工作簿 bu 名 ming 称
- lang 语言，国际化配置，允许设置表格的语言，支持简体中文 zh，英文 en，繁体中文 zh_tw 和西班牙文 es。
- gridK 唯一 key，表格唯一标识 zhi 第四声 sheng 符，默认''
- loadUrl 加载整个工作簿 配置 loadUrl 接口地址，加载所有工作表的配置，并包含当前单元格数据，与 loadSheetUrl 配合使用，参数为 gridKey（表格主键）
  - 源码请求写法：
  ```js
  $.post(loadUrl, { gridK: server.gridK }, function (d) {})
  ```
  参见源码 src/core.js
  Luckysheet 会通过 ajax 请求（post）整个表格的数据，默认载入 sts 为 1 的 sheet 数据中的 cellData，其余的 sheet 载入除 cellData 字段外的所有配置字段。特别是在数据量大的时候，loadUrl 只负责当前页单元格数据，配置 loadSheetUrl 作为其他工作表异步加载单元格数据的接口，可以提高性能
  一个合格接口返回的 json 字符串数据为：
  ```js
  ;[
    // sts 为1的 sheet 页，重点是需要提供初始化的数据 cellData
    {
      name: 'Cell',
      i: 'sheet01',
      order: 0,
      sts: 1,
      cellData: [
        { r: 0, c: 0, v: { v: 1, m: '1', ct: { fa: 'General', t: 'n' } } },
      ],
    },
    {
      name: 'Data',
      i: 'sheet_02',
      order: 1,
      sts: 0,
    },
    {
      name: 'Picture',
      i: 'sheet_03',
      order: 2,
      sts: 0,
    },
  ]
  ```
  有几个注意点：
  - 这是一个字符串，类似于 JSON.stringify()处理后的 json 数据，压缩后的数据便于传输
  - loadUrl 是一个 post 请求，也是为了支持大数据量
  - 考虑到一些公式，图表数据透视表会引用其他 sheet 的数据，所以前台会加一个判断，如果当前 sheet 引用了其他 sheet 的数据则会通过 loadSheetUrl 配置的接口地址请求数据，把引用到的 sheet 的数据一并补全，而不用等切换到其他页的时候再请求
  - 当数据量小的时候，也可以不用 Luckysheet 提供的此接口，直接使用 data 参数可以提前准备好所有表格数据用于初始化
- loadSheetUrl 默认值'', 作用：配置 loadSheetUrl 接口地址，用于异步加载其他单元格数据。参数为 gridK（表格主键）和 i（sheet 主键合集，格式为['sheet_01','sheet_02','sheet_03'])
  源码要求的写法为：

  ```js
  $.post(loadSheetUrl, {
    gridK: server.gridK,
    i: sheetI.join(','),
    function(d) {},
  })
  // src/controllers/sheetManage.js
  ```

  返回数据为 sheet 的 cellData 字段数据集合。
  一个合格的接口返回的 json 字符串数据为

  ```js
  const rs = {
    sheet_01: [
      {
        r: 0,
        c: 0,
        v: { v: 1, m: '1', ct: { fa: 'General', t: 'n' } },
      },
    ],
    sheet_02: [
      {
        r: 0,
        c: 0,
        v: { v: 1, m: '1', ct: { fa: 'General', t: 'n' } },
      },
    ],
    sheet_03: [
      {
        r: 0,
        c: 0,
        v: { v: 1, m: '1', ct: { fa: 'General', t: 'n' } },
      },
    ],
  }
  ```

  同 loadUrl 类似，loadSheetUrl 也要注意这几点：

  - 这是一个字符串格式数据
  - 这是一个 post 请求
  - 这个接口会在两种情况下自动调用，一是在 loadUrl 加载的当前页数据时发现当前工作表引用了其他工作表，二是切换到一个未曾加载过数据的工作表时

- allowUpd 允许更新，boolean，FALSE。是否允许操作表格后的后台更新，与 updUrl 配合使用。如果要开启共享编辑，此参数必须设置为 TRUE。
  - updUrl 「」，操作表格后，实时保存数据的 websocket 地址，此接口也是共享编辑的接口地址。有个注意点，要想开启共享编辑，必须满足以下 3 个条件：allowUpd 为 TRUE，配置了 loadUrl，updUrl。注意，发送给后端的数据默认是经过 pako 压缩过后的。后台拿到数据需要先解压。
- updUrl 更新地址
- updImgUrl 默认值「」缩略图更新地址
- data array，默认值

  ```js
  const dftV=[{name:'Sheet1',color:'',sts:'1',order:'0',data:[],cfg:{},i:0},{name:'Sheet2',color:'',sts:'0',order:'1',data:[],cfg:{},i:1},
  ```

  当未配置 loadUrl 和 loadSheetUrl 时，需要手动配置传入整个客户端所有 sheet 数据 `[sheet1,sheet2,sheet3]`，详细参数设置参见工作表配置

- plugins 插件 array，默认值[]， 配置插件，支持图表：'chart'
- cols 列数 60，空表格默认
- rows 84
- autoFormat boolean FALSE。自动格式化超过 4 位数的数字为「亿万格式」。true 或「TRUE」，「true」
- accuracy 精度 number undefined，设置精度，小数点后的位数，'0' 0
- allowCopy 允许复制 boolean TRUE
- toolbarVisible TRUE
- toolBarCfgVisible object {}，自定义配置工具栏，可以与 toolbarVisible 配合使用，toolbarCfgVisible 有更高优先级。

  ```js
  const cfgObj = {
    undoRedo: false, // 撤销重做，注意撤销重做是两个按钮，由这一个配置决定显示还是隐藏
    paintFormat: false, // 格式刷
    currencyFormat: false, // 货币格式
    percentageFormat: false, // 百分比格式
    numberDecrease: false, // 减少小数位数
    numberIncrease: false, //
    moreFormats: false, //
    font: false, //
    fontSize: false, //
    bold: false, // Ctrl+B
    italic: false, // Ctrl+I
    strikeThrough: false, // 删除线 Alt+Shift5
    underline: false, //Alt+Shift6
    color: false, //
    fillColor: false, // 单元格颜色
    border: false, //
    mergeCell: false, //
    horizontalAlignMode: false, // 水平对齐方式
    verticalAlignMode: false, //
    txtWrapMode: false, // 换行方式
    txtRotateMode: false, // 文本旋转方式
    img: false, // 插入图片
    link: false, //
    chart: false, // 图表（图标隐藏，但是如果配置了 chart 插件，右键仍reng然ran 可以新建图表
    postil: false, // annotation 批注
    pivotTable: false, // 数据透视表
    fn: false, // 公式
    frozenMode: false, // 冻结方式
    sortAndFilter: false, // 排序和筛选
    conditionFormat: false, //
    dataVerify: false, //
    splitCol: false, // 分列
    screenshot: false, //
    findAndReplace: false, //
    protection: false, // 工作表保护
    print: false, //
  }
  //
  const opts = {
    toolBarVisible: false,
  }
  //
  const opts = {}
  ```

- infoBarVisible
- sheetBarVisible
- sheetBarCfgVisible
- statisticBarVisible
- statisticBarCfgVisible
- enableAddRow
- enableAddBackTop
- userInfo
- userMenuItm 用户信息菜单
- myFolderUrl 返回按钮链接
- devicePixelRatio
- fnBtn 功能按钮
- cfgWindowResizeVisible 自动缩进页面
- forceCalculation 刷新公式
- cellRightClickCfg 自定义单元格右键菜单
- sheetRightClickCfg 自定义 sheet 页右键菜单
- rowHeaderW 行标题区宽度
- colHeaderH 列标题区高度
- sheetFormulaBar 是否显示公示栏
- dftFontSize 初始化默认字体大小
- limitSheetNameL 是否限制工作表名长度
- dftSheetNameMaxLen 默认允许工作表名的最大长度
- pager 分页器

# [基本单元格](https://mengshukeji.github.io/LuckysheetDocs/zh/guide/cell.html#%E5%9F%BA%E6%9C%AC%E5%8D%95%E5%85%83%E6%A0%BC)

最基本单位，每个单元格都会保存为一个对象，一个工作吧数据则会保存为一个由单元格对象组成的二维数组，并存入当前工作表的`luckySheetFile[i].data`

单元格对象包含以下单元格属性
属性值 全称 说明 值示例 Aspose 方法或者属性
ct cellType 单元格值格式：文本、时间 {fa:'General',t:'g'}

用组合单词的话，不易阅读
