```js

当 Facebook 第一次发布 React 时，他们还引入了一种新的 JS 方言 JSX，将原始 HTML 模板嵌入到 JS 代码中。JSX 代码本身不能被浏览器读取，必须使用Babel和webpack等工具将其转换为传统的JS。很多开发人员就能无意识使用 JSX，因为它已经与 React 结合在一直了。

class MyComponent extends React.Component {
  render() {
    let props = this.props;
    return (
      <div className="my-component">
      <a href={props.url}>{props.name}</a>
      </div>
    );
  }
}



jsx语法
1）jsx是React.createElement(component, props, ...children) 函数的语法糖
2）底层是使用babel-plugin-transform-react-jsx插件 将jsx的语法转化为js对象，判断是否是jsx对象或是否是一个组件，转化为对应的js对象（虚拟dom）
jsx代码示例
// 示例一:
// 如下 JSX 代码
<MyButton color="blue" shadowSize={2}>Click Me</MyButton>
// 会编译为：
React.createElement( MyButton, {color: 'blue', shadowSize: 2}, 'Click Me')

// 示例二:
// 以下两种示例代码完全等效
const element = (<h1 className='greet'>Hello</h1>)
// 等价于


作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

JSX 里要写英文标点的地方写上了中文标点的话，比较难排查，得细心点(特别是用上了白色主题)

空格不用管，新增一个 attr 时，直接在上一个右花括号}或者单引号’后面加上 attrName 就是了

Failed to compile
./src/pages/portal/components/PortalPreviewCmpt.tsx
Module build failed (from ./node_modules/@umijs/deps/compiled/babel-loader/index.js):
SyntaxError: /Users/guonanci/Documents/magicbi_web/src/pages/portal/components/PortalPreviewCmpt.tsx: Expected corresponding JSX closing tag for <div>. (469:4)

RangeError: Maximum call stack size exceeded
jsxWithValidation
./node_modules/react/cjs/react-jsx-dev-runtime.development.js:1119
1116 | }
1117 | }
1118 |

> 1119 | function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
> 1120 | {
> 1121 | var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
> 1122 | // succeed and there will likely be errors in render.
> View compiled
> addEllipsisWithTitle
> ./src/utils/htmlUtils.tsx:2
> 1 | import React from 'react'
> 2 | export const addEllipsisWithTitle = (str: string, len = 15) => (
> 3 | <span title={str}> {str.length < len ? str : str.slice(0, len - 3) + '...'} </span>
> 4 | )
> 5 |
> View compiled
> (anonymous function)
> ./src/pages/portal/components/PortalPreviewCmpt.tsx:339
> 336 | return v.children ? (
> 337 | <SubMenu
> 338 | key={v.k}
> 339 | title={addEllipsisWithTitle(v.title, 10)}

      | ^  340 |     disabled={v.disabled}

341 | onTitleClick={() => {
342 | // console.log('menusArr', menusArr, v)
View compiled
renderSubMenus
./src/pages/portal/components/PortalPreviewCmpt.tsx:334
331 | mode: MenuMode
332 | navLayoutTyp: NavLayoutTyp
333 | }) => (

> 334 | <>

      | ^  335 |     {menusToRender.map((v: PortalMenu) => {

336 | return v.children ? (
337 | <SubMenu

# Failed to compile

./src/components/SelectChartResourceTabPage/index.tsx
Module build failed (from ./node_modules/@umijs/deps/compiled/babel-loader/index.js):
SyntaxError: /Users/guonanci/Documents/magicbi_web/src/components/SelectChartResourceTabPage/index.tsx: **Adjacent JSX elements must be wrapped in an enclosing tag**. Did you want a JSX fragment <>...</>? (338:12)

336 | />
337 | </Col>

> 338 | </Row>

      |             ^

339 | ))}
340 | </div></>)}
341 | </Spin>
This error occurred during the build time and cannot be dismissed.


# className
一定不要写成class，要不然会阻断接下来的任何渲染和js逻辑。

