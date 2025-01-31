# easyIr 流程

services/scenery.ts querySceneryCompData
----> easyIr compromise chartViewRqParamsTranslator

去掉聚合方式，针对已有数据（比如报表、模型侧），改输出（接口返回），因为输入的地方太多，不好改。

但是，报表编辑页设置区的数据 tab 页里面，所有涉及到度量的地方都不能显示‘聚合’
