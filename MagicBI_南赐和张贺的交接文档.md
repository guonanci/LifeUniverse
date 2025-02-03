# 郭南赐和张贺的项目交接文档

- 这里所有的模块，在我们的微文档、蓝湖或者产品、设计同学手上都保留着需求文档、原型图、设计图

## CAS 第三方登录

南赐负责
提测了，还没有测试完成。具体上线时间需要看优先级、客户的期望上线时间

## 自定义地图

南赐负责
采用 canvas 实现
还没有开发完的部分：主要是报表侧的自定义地图组件的渲染，报表侧还缺少弹窗的地图渲染代码和维值对应不同图形区域的渲染代码（不同图形的 fillText 代码）。还有自定义地图配置页面编辑自定义地图时，切换绘图工具时还存在一些难点的 bug 没解决好。

# 表格

南赐负责
新版交叉表的代码框架好了，客户需要的话，需要一点点实现原本旧交叉表的数据、样式、交互设置里的功能。
用 S2 的 table 和 pivot 去维护新版表格和新版交叉表，不要维护旧的（ali-react-table）普通表格和交叉表
Todo 项：二次分析，参考火山引擎: https://www.volcengine.com/docs/4726/66566 和帆软：https://help.fanruan.com/finebi/doc-view-1686.html

## 数据填报

张贺和刘陈（能力挺好的，写了挺多需求）负责，我没参与
src/pages/fillin
表单设计器组件地址：[https://xrender.fun/generator][1]
表单渲染组件：[https://xrender.fun/form-render][2]

Generator：可视化表单设计器，通过拖拽控件生成 schema（json 格式）
FormRender：在填写表单时，按照 schema 描述渲染成表单。

在使用此表单设计器时，Generator 在控件属性设置上有些 bug（比如：多选控件的默认值设置、日期范围的默认值设置、控件宽度设置等，目前处理的方法是把这些配置项进行了隐藏），已把遇到的问题反馈官网。在后续开发时，可考虑升级下组件。

表单设计器左侧控件和右侧属性配置在：src\pages\fillin\DesignForm\Settings\index.tsx

[1]: https://xrender.fun/generator
[2]: https://xrender.fun/form-render

## 地图

张贺负责
地图开发 src/local-comp/ChartMap
bug: 报表编辑页会偶现地图模糊的 bug

## 第三方接入

张贺负责
（微信、企业微信、飞书）在登录模块
未上线，这个就是扫码登录，没啥可说的；后端是莫非$$

## 移动端

张贺负责
项目地址：https://gitlab.magicbi.cn/magicbi/magicbi_mobile
难点在 nlq，是从 pc 端挪过去的（现在 nlq 是学通维护）
