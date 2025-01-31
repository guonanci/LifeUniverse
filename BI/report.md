针对不同图表类型，设置不同的最小拖拽宽高的流动布局单元框大小

# req

同样的请求参数在同一个 CmptRender 再次调用时，不会发起 新请求，直接采用上一次的请求结果，甚至不去 loading，great。

热刷新会丢失 sharedData.reportCode

后端为了减少接口依赖查询，所以把这些中间关系 code 都让前端传了

# right-setting

## todo

拖动来移除字段的话，涉及到同环比配置的扩展字段同步移除的问题，需要做到跟 ModelFieldDropbox/MenuItems/Remove.tsx 类似的移除逻辑

单颜色选择参考 ConditionFormatModal 的代码
setPortalSetting({ ...portalSetting, thme: Theme.BLACK }) ts-er

Type '{ LEFT_TOP?: { top: { bg: string; titleColor: string; subTitleColor: string; firstLayerMenuTxtColor: string; firstLayerMenuHighlightColor: string; }; left: { bg: string; menuTxtColor: string; menuHighlightTxtColor: string; menuHighlightBg: string; }; } | undefined; LEFT?: { ...; } | undefined; TOP?: { ...; } | undef...' is not assignable to type 'ThemeSetting'.
Types of property '[NavLayoutTyp.LEFT]' are incompatible.
Type '{ titleBg: string; titleColor: string; subTitleColor: string; bg: string; menuTxtColor: string; menuHighlightTxtColor: string; menuHighlightBg: string; } | undefined' is not assignable to type '{ titleBg: string; titleColor: string; subTitleColor: string; bg: string; menuTxtColor: string; menuHighlightTxtColor: string; menuHighlightBg: string; }'.
Type 'undefined' is not assignable to type '{ titleBg: string; titleColor: string; subTitleColor: string; bg: string; menuTxtColor: string; menuHighlightTxtColor: string; menuHighlightBg: string; }'.ts(2322)
(property) PortalSetting.themeSetting?: ThemeSetting | undefined

# 同环比

分两种枚举类型？没必要
现在季同比没有实际上的统计意义。

有时候后端定义的数据结构确实不好，嵌套太深。所以前端会 flat obj 或者 arr 后，存到 model、store。比如说 getSelectedModels-req

排查 bug 需要有理可循，有据可查，不能只靠直觉去排查（因为代码并非你一个人完成的，所以有些 bug 必须一点点找线索）

# 组件加载失败或该组件不存在

@/local-comp/index.ts 需要注册新组件

# viewDataReqParCollector: collector

BlockWithCheck

自定义组件没法隐藏；(艹，老子看错组件了，有两个一模一样的自定义组件-标题是一样的)

Wake lock active.

# class CompViewReqParamsCache

在图表组件里去 updCfg 的话需要加上 setTimeout。（很慢诶--更改聚合方式）
