// arraycards
// devScripts.js:5836 [ Formily error ]: Can not found the field component <arraycards>.Its key is colorSetting.

// https://www.cnblogs.com/leomYili/p/13579690.html
// https://zhuanlan.zhihu.com/p/142237587

// https://formilyjs.org/#/0yTeT0/jAU8UVSYI8

// 对于 g2 中，function 可以作为 value 的那些 property，在 schema.ts 和 StyleSetting 其实是可以用返回值来设置成 value 的

// 1.1.2 JSON Schema 描述表单数据结构
// 为什么采用 JSON Schema？主要有几方面的考虑：

// 标准化协议，不管是对前端，还是对后端都是易于理解的通用协议
// JSON Schema 更侧重于数据的描述，而非 UI 的描述，因为表单，它就是数据的输入，我们希望，用户关心的,更多是数据，而非 UI
// JSON Schema 可以用在各种数据驱动场景，比如可视化搭建引擎中的组件配置器等

// 上述内容总结于 Formily 团队。参见完整内容链接：

// baixuan：面向复杂场景的高性能表单解决方案(背景篇)
// ​
// zhuanlan.zhihu.com

SchemaForm 结构
<
SchemaForm
components = {
components
}
actions = {
actions
}
initialValues = {
initialValues
}
value = {
value
}
defaultValue = {
defaultValue
}
onSubmit = {
console.log
}
effects = {
effects
}
schema = {
schema
}
editable = {
false
}
expressionScope = {
expressionScope
} >
<
FormButtonGroup >
<
Submit > 提交 < /Submit> <
/FormButtonGroup> <
/SchemaForm>

## ModelFieldDropBox

limit: 0 no limit
limit: -1 disabled

setting schema 时一点不能忽略 styleCollapse 的存在
