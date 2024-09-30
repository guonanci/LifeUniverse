之前我不太确定的变量取值的地方都是 log 一下, 主要集中在 schema(normalizr), selector, table, 之前我对这些部分不是很熟悉, 所以说经常 console, 有时候想想要是前任把变量命名的更简单一些, 就应该要好一些

##React-component 的 return 部分不能有单行注释// ... 不能被 JSX 语法引擎正常解析

#控制台经常报的错

##Uncaught (in promise) Error: ModalCheck.render(): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.

    at invariant (app.js:1398)
    at ReactCompositeComponentWrapper._ renderValidatedComponent (app.js:22150)

## Uncaught (in promise) TypeError: Cannot read property 'getHostNode' of null

    at Object.getHostNode (app.js:14155)
    at ReactCompositeComponentWrapper.getHostNode (app.js:21703)
    at Object.getHostNode (app.js:14155)
    at ReactCompositeComponentWrapper.getHostNode (app.js:21703)
    at Object.getHostNode (app.js:14155)
    at ReactDOMComponent._ updateChildren (app.js:20818)
    at ReactDOMComponent.updateChildren (app.js:20771)
    at ReactDOMComponent._ updateDOMChildren (app.js:18020)
    at ReactDOMComponent.updateComponent (app.js:17838)
    at ReactDOMComponent.receiveComponent (app.js:17800)

##./src/components/missions/ModalCheck.js
Module build failed: SyntaxError: Unterminated JSX contents (103:11)

101 | return (
102 | <div>

> 103 | {modal}

      |            ^

104 | )
105 | }
106 | })

Error
at transpile (/Users/bjhl/pro/ReliTemperature/node_modules/.npminstall/babel-loader/6.4.1/babel-loader/lib/index.js:61:13)
at Object.module.exports (/Users/bjhl/pro/ReliTemperature/node_modules/.npminstall/babel-loader/6.4.1/babel-loader/lib/index.js:163:20)
@ ./src/components/missions/TableCheck.js 1:703-726

##Warning: setState(...): Cannot update during an existing state transition (such as within `render` or another component's constructor). Render methods should be a pure function of props and state; constructor side-effects are an anti-pattern, but can be moved to `componentWillMount`.

printWarning @ app.js:1830
warning @ app.js:1854
getInternalInstanceReadyForUpdate @ app.js:23323
enqueueSetState @ app.js:23469
ReactComponent.setState @ app.js:2313
**delMission**REACT*HOT_LOADER\_\_ @ 0.f3645ff….hot-update.js:8
ContentTDView.* this4.delMission @ 0.f3645ff….hot-update.js:8
render @ 0.f3645ff….hot-update.js:10
(anonymous) @ app.js:22115
measureLifeCyclePerf @ app.js:21394
_ renderValidatedComponentWithoutOwnerOrContext @ app.js:22114
_ renderValidatedComponent @ app.js:22141
_ updateRenderedComponent @ app.js:22065
_ performComponentUpdate @ app.js:22043
updateComponent @ app.js:21964
performUpdateIfNecessary @ app.js:21880
performUpdateIfNecessary @ app.js:14249
runBatchedUpdates @ app.js:13838
perform @ app.js:15132
perform @ app.js:15132
perform @ app.js:13777
flushBatchedUpdates @ app.js:13860
closeAll @ app.js:15198
perform @ app.js:15145
batchedUpdates @ app.js:24319
batchedUpdates @ app.js:13785
dispatchEvent @ app.js:24476

##[Violation] 'requestIdleCallback' handler took 213ms

##从 reducer 和 selector 引过来的 function 忘了加 _{}_ 尴尬\***\*\*\*\*\***\_\_\***\*\*\*\*\***

##app.js:1398 Uncaught (in promise) Error: Attempted to update component `Connect(ContentTDView)` that has already been unmounted (or failed to mount).
at invariant (app.js:1398)
at ReactCompositeComponentWrapper.updateComponent (app.js:21903)
at ReactCompositeComponentWrapper.receiveComponent (app.js:21866)
at Object.receiveComponent (app.js:14217)
at Object.updateChildren (app.js:21137)
at ReactDOMComponent._ reconcilerUpdateChildren (app.js:20680)
at ReactDOMComponent._ updateChildren (app.js:20784)
at ReactDOMComponent.updateChildren (app.js:20771)
at ReactDOMComponent.\_ updateDOMChildren (app.js:18020)
at ReactDOMComponent.updateComponent (app.js:17838)

##app.js:1398 Uncaught (in promise) Error: ContentTDView.render(): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.
at invariant (app.js:1398)
at ReactCompositeComponentWrapper._ renderValidatedComponent (app.js:22150)
at ReactCompositeComponentWrapper.performInitialMount (app.js:21681)
at ReactCompositeComponentWrapper.mountComponent (app.js:21577)
at Object.mountComponent (app.js:14138)
at ReactCompositeComponentWrapper.performInitialMount (app.js:21690)
at ReactCompositeComponentWrapper.mountComponent (app.js:21577)
at Object.mountComponent (app.js:14138)
at ReactDOMComponent.mountChildren (app.js:20710)
at ReactDOMComponent._ createInitialChildren (app.js:17781)

    function invariant(condition, format, a, b, c, d, e, f) {
    	  validateFormat(format);

    	  if (!condition) {
    	    var error;
    	    if (format === undefined) {
    	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    	    } else {
    	      var args = [a, b, c, d, e, f];
    	      var argIndex = 0;
    	      error = new Error(format.replace(/%s/g, function () {
    	        return args[argIndex++];
    	      }));
    	      error.name = 'Invariant Violation';
    	    }

    	    error.framesToPop = 1; // we don't care about invariant's own frame
    	    throw error;
    	  }
    	}

##app.js:1398 Uncaught (in promise) Error: Objects are not valid as a React child (found: object with keys {id, text}). If you meant to render a collection of children, use an array instead or wrap the object using createFragment(object) from the React add-ons.
at invariant (app.js:1398)
at traverseAllChildrenImpl (app.js:2106)
at traverseAllChildren (app.js:2134)
at Object.forEachChildren [as forEach] (app.js:1071)
at flattenChildren (app.js:20004)
at Object.mountWrapper (app.js:20051)
at ReactDOMComponent.mountComponent (app.js:17515)
at Object.mountComponent (app.js:14138)
at ReactDOMComponent.mountChildren (app.js:20710)
at ReactDOMComponent.\_ createInitialChildren (app.js:17781)

http://stackoverflow.com/questions/34919111/how-to-debug-this-error-uncaught-in-promise-error-objects-are-not-valid-as-a

##app.js:20084 Uncaught (in promise) TypeError: Cannot read property 'selected' of null
at Object.getHostProps (app.js:20084)
at ReactDOMComponent.updateComponent (app.js:17823)
at ReactDOMComponent.receiveComponent (app.js:17800)
at Object.receiveComponent (app.js:14217)
at Object.updateChildren (app.js:21137)
at ReactDOMComponent._ reconcilerUpdateChildren (app.js:20680)
at ReactDOMComponent._ updateChildren (app.js:20784)
at ReactDOMComponent.updateChildren (app.js:20771)
at ReactDOMComponent.\_ updateDOMChildren (app.js:18020)
at ReactDOMComponent.updateComponent (app.js:17838)

##表头 icon-fontello-sort-down
显示不正常的话, 可以看看是不是有许多 return 的地方, 只看了一个 return,却忽视了另一个出错的 return

##Unknown warnings without time to do research

##can not console.log in render function...
Only could we log it when

##ReliTemperature/missions/Pager.js

fetchMissions(`current_page=${this.props.paginator.current_page}&per_page=${e.target.value}`).then(this.props.initData)

vs

fetchMissions(`current_page=${this.props.paginator.current_page}&per_page=${e.target.value}`).then(this.props.initData())

vs
pageCheck.js
dispatch => ({
fetchData: () => {
fetchMissions().then(compose(dispatch, initData))
},

##千万不要再改错文件了...超低级的错误

##Error: Actions must be plain objects. Use custom middleware for async actions.
Object.performAction
liftAction
dispatchhttp://localhost:8078/assets/js/app.js:30913:15
Array.reduceRight
(native)

#对象里面有一个对象数组, 外层大对象做遍历完后内层数组遍历时 会直接取数组的 各个 index 做值, 不能继续遍历内层对象

#Uncaught (in promise) Error: Actions must be plain objects. Use custom middleware for async actions.

#return

```js
return (
  <DropdownLine
    totalSize={500}
    data={graphDataData}
    title={graphTitle}
    size={graphSize}
    dropdown_by={graphDropdown}
  />
);

vs;
// nothing rendered, why
return;
<DropdownLine
  totalSize={500}
  data={graphDataData}
  title={graphTitle}
  size={graphSize}
  dropdown_by={graphDropdown}
/>;
```

#有时候是项目改动文件位置或者删除减少文件, 然后在项目 index.html 类似的地方需要改动静态依赖, 那么有可能需要保存改变后重启项目...才看得到效果

#about npm module
使用某个 module 之前先去看看 github 上面 star 多不多, 很少的话肯定不能用, bug 多,就算 bug 不多也没人维护( 有许多潜在 bug 或者使用场景小)...
#mix
犯了一个低级错误, 本来要取某个对象属性的值, 然后脑残的看了半天发现原来一直取得是对象的值...

#Warnings
app.js:1830 Warning: Failed form propType: You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`. Check the render method of `CheckHeader`.

Warning: Failed form propType: Invalid prop `onChange` of type `boolean` supplied to `select`, expected `function`. Check the render method of `FormControl`.

#果然用别人的 module 多看官方文档总是有好处的

比如 {SingleDatePicker, } from 'react-dates' prop-isOutSideRange

#Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in.

#

app.js:1830 Warning: performUpdateIfNecessary: Unexpected batch number (current 132, pending 129)
printWarning @ app.js:1830
warning @ app.js:1854
performUpdateIfNecessary @ app.js:14233
runBatchedUpdates @ app.js:13830
perform @ app.js:15124
perform @ app.js:15124
perform @ app.js:13769
flushBatchedUpdates @ app.js:13852
closeAll @ app.js:15190
perform @ app.js:15137
batchedUpdates @ app.js:24311
enqueueUpdate @ app.js:13880
enqueueUpdate @ app.js:23285
enqueueSetState @ app.js:23470
ReactComponent.setState @ app.js:2313
activateSidebar @ app.js:88977
(anonymous) @ app.js:90839
callSubscriberWithDelayedExceptions @ app.js:90913
deliverMessage @ app.js:90934
deliverNamespaced @ app.js:90945

#TypeError: Cannot read property 'type' of null

#[HMR] Invariant Violation: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in.

```js
const sidebarNavItemHome = roleRightHome ? (
  <SidebarNavItem glyph='icon-fontello-home' name='首页展示' href='#' />
) : (
  <div></div>
);

const sidebarNavItemCheck = roleRightCheck ? (
  <SidebarNavItem
    glyph='icon-ikons-notepad-ok'
    name='任务下发'
    href='/mission'
  />
) : (
  <div></div>
);

const sidebarNavItemAssign = roleRightAssign ? (
  <SidebarNavItem
    glyph='icon-ikons-notepad-ok'
    name='任务指派'
    href='/missionSub'
  />
) : (
  <div></div>
);

const sidebarNavItemRecord = roleRightRecord ? (
  <SidebarNavItem
    glyph='icon-pixelvicon-document-1'
    name='测温明细'
    href='/record'
  />
) : (
  <div></div>
);

const sidebarNavItemReport = roleRightReport ? (
  <SidebarNavItem
    glyph='icon-nargela-statistics'
    name='统计报表'
    href='/report'
  />
) : (
  <div></div>
);

const sidebarNavItemCWUsers = roleRightCWUsers ? (
  <SidebarNavItem glyph='icon-fontello-users' name='下属人员' href='/cwUsers' />
) : (
  <div></div>
);

const sidebarNavItemSearch = roleRightSearch ? (
  <SidebarNavItem glyph='icon-fontello-magic' name='智能查询' href='/search' />
) : (
  <div></div>
);

const sidebarNavItemDevice = roleRightDevice ? (
  <SidebarNavItem glyph='icon-fontello-box-1' name='设备情况' href='/device' />
) : (
  <div></div>
);

const sidebarNavItemException = roleRightException ? (
  <SidebarNavItem glyph='icon-fontello-box-1' name='异常室温' href='/#' />
) : (
  <div></div>
);

const sidebarNavItemWeather = roleRightWeather ? (
  <SidebarNavItem glyph='climacon cloud sun' name='气象信息' href='/weather' />
) : (
  <div></div>
);
```

Cannot apply update. Need to do a full reload!
(anonymous) @ app.js:187325
hotApply @ app.js:528
(anonymous) @ app.js:187317
hotUpdateDownloaded @ app.js:312
hotAddUpdateChunk @ app.js:284
webpackHotUpdateCallback @ app.js:5
(anonymous) @ 0.f9f29ef….hot-update.js:1
app.js:187326 [HMR] TypeError: Cannot read property 'remove' of undefined
at Object.onHide (http://localhost:8078/assets/js/app.js:112419:35)
at Object.componentWillUnmount (http://localhost:8078/assets/js/app.js:112397:13)
at http://localhost:8078/assets/js/app.js:21723:26
at measureLifeCyclePerf (http://localhost:8078/assets/js/app.js:21389:13)
at ReactCompositeComponentWrapper.unmountComponent (http://localhost:8078/assets/js/app.js:21722:12)
at Object.unmountComponent (http://localhost:8078/assets/js/app.js:14166:23)
at ReactCompositeComponentWrapper.unmountComponent (http://localhost:8078/assets/js/app.js:21732:24)
at Object.unmountComponent (http://localhost:8078/assets/js/app.js:14166:23)
at ReactCompositeComponentWrapper.unmountComponent (http://localhost:8078/assets/js/app.js:21732:24)
at Object.unmountComponent (http://localhost:8078/assets/js/app.js:14166:23)

React 组件生命周期使用及相互关系(比如 componentWillupdate && componentWillReceiveProps && shouldComponentUpdate, componentWillMount && componentWillUpdate && componentWillUnmount, ...) 还有就是到底该不该

const entryAdd = btnsVisible.add && btnsVisible.add.is_visible && <div>

  <div onClick={() => !onEdit && this.toggleModalAdd(true)}
    className={`bg-white tc ma5 mt4 pa3 fz18 ${!onEdit ? 'pointer link' : ''}`}>
    <span className='icon-fontello-plus-outline dark-1 pr3 '></span><span>{btnsVisible.add.text}</span>
  </div>
  {/* fix: Safari底部留白 */}
  <div className='h1'></div>
</div>

const entryAdd = {btnsVisible.add && btnsVisible.add.is_visible && <div>

  <div onClick={() => !onEdit && this.toggleModalAdd(true)}
    className={`bg-white tc ma5 mt4 pa3 fz18 ${!onEdit ? 'pointer link' : ''}`}>
    <span className='icon-fontello-plus-outline dark-1 pr3 '></span><span>{btnsVisible.add.text}</span>
  </div>
  {/* fix: Safari底部留白 */}
  <div className='h1'></div>
</div>}

Module build failed: SyntaxError: Unexpected token, expected , (150:33)

组件 ctEditing CtEditing 命名区别会导致 React Unknown prop warning

最近老是在异步的地方出错, 看来我还真得在异步编程方面多下功夫
基本的 promise then 都会经常报错...(说是和 reducer compose dispatch 混着用就会经常报错...)

不要轻易才用浮动布局, 否则会带来一些难以处理的细节问题,比如 iconfont 的 定位问题...

btnClick(url, method, data, cb) {
btnClick(url, method='post', data, cb) {

default-parameter 有滞后性 if i only want to pass url-data-cb, how can i do it, 这种情况没办法, 只能在函数内部判断 undefined

jintian 碰到的奇怪问题好像是由于 state 没有及时取到 props 传过来的值, 然后一直渲染不出来...

es6 碰到一个有关函数简写的问题
funA(...args) {

}

作为 React 的组件方法的时候, 有时候找得到 this, 有时候找不到

原来是 onClick 没有写成 {(e) => this.changeRange(e)}
写成 {this.changeRange}

就会在 React 方法里面报错, 找不到 this -- undefined

dateRangePicker focusedInput 如果不是 START_DATE 或者 END_DATE 的话会出不来选择器,也不会报错...

application/x-www-form-urlencoded application/form-data

以后得经常对 React 组件属性名做检查, 没有任何交互效果, 错误警告提示有可能就是这个原因 这个得留意一下

有点健忘症了

今天早上还想着写下一些话

#jsx return 一个 DOM 的时候, 如果 return 后面不加括号, 换行就不会 work, 不换行就可以正常 return...

fn+F8(直接用 magic keyboard)用来继续走下一个 debug

# Breakpoints

右侧的这么多个断点有预览小功能（一行代码的行首），而且每个断点的左侧有复选框可以快速暂停或重新打开断点

# 逐步

bug 是一点点排查，一点点优化，一点点改的

# 节约时间

确定没用（已经排除）的断点直接放开，减少不必要的断点可以节省许多时间~

# 第三方 lib

万物皆可 debug

# 数据量大

- 遍历时，可采用 指定条件下的 console，比 debug 更方便

死循环时要避免服务器挂掉（紧急按下 debug 暂停）

TypeError: Object(...) is not a function

getPopupContainer

get-method:params()
post-method:data(body)

bug 出现的原因有很多：技术能力、设计架构能力、产品思维能力、后端设计能力、整体能力、分工协作水平等等方面的不足导致 bug（要尽量用自己的能力去避免 bug

每个 bug 一定要打破沙锅问到底

debug 时间过长，页面渲染进程被打断，最终渲染失败

# requirejs

require.js:168 Uncaught Error: Load timeout for modules: require-conf
https://requirejs.org/docs/errors.html#timeout
at makeError (require.js:168)
at checkLoaded (require.js:698)
at require.js:719

# Warning: React does not recognize the `inlineIndent` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `inlineindent` instead. If you accidentally passed it from a parent component, remove it from the DOM element.

https://github.com/ant-design/ant-design/issues/8708

# Warning: Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?

https://github.com/ant-design/ant-design/issues/21543
https://juejin.cn/post/6844904097720565773

# Warning: Each child in a list should have a unique "key" prop.

# Warning: MenuItem should not leave undefined `key`.

# debug-keyword

当 debug 关键词动作会打断连续渲染的时候（最终渲染结果呈现不出来），那么我们应该用 console

# TypeError: Object(...) is not a function

我再也不改目录了，一次性搭好目录结构和文件名和目录名的正确拼写，因为代码写到一半再去改目录，很可能 ts 会带来许多未知错误，浪费许多时间去排查

## Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.

    at SortModal (http://localhost:8000/umi.js:336932:23)
    at Field (http://localhost:8000/p__NLQ__index.js:12740:28)
    at div
    at http://localhost:8000/umi.js:114227:34
    at div
    at DimsMeasFilters (http://localhost:8000/p__NLQ__index.js:12418:24)
    at ConnectFunction (http://localhost:8000/umi.js:286306:75)
    at div
    at TabPane (http://localhost:8000/umi.js:233188:24)
    at div
    at div
    at TabPanelList (http://localhost:8000/umi.js:233257:17)
    at div
    at Tabs (http://localhost:8000/umi.js:233368:17)
    at Tabs (http://localhost:8000/umi.js:127699:17)
    at div
    at NLQMain (http://localhost:8000/p__NLQ__index.js:13510:99)
    at main
    at div
    at NLQ
    at LoadableComponent (http://localhost:8000/umi.js:317898:75)
    at Route
    at Switch
    at DndProvider (http://localhost:8000/vendors~layouts__BasicLayout~p__NLQ__index~p__SharingView~p__resourcesV2__Model__EditPage~p__resourc~de7fbe03.js:2738:23)
    at Authorized (http://localhost:8000/umi.js:325893:23)
    at main
    at Basic (http://localhost:8000/umi.js:116483:25)
    at Adapter (http://localhost:8000/umi.js:116466:79)
    at ConfigProviderWrap (http://localhost:8000/umi.js:51513:23)
    at WrapContent (http://localhost:8000/umi.js:50315:21)
    at section
    at BasicLayout (http://localhost:8000/umi.js:116498:76)
    at Adapter (http://localhost:8000/umi.js:116466:79)
    at section
    at BasicLayout (http://localhost:8000/umi.js:116498:76)
    at Adapter (http://localhost:8000/umi.js:116466:79)
    at div
    at Provider (http://localhost:8000/umi.js:319131:31)
    at BasicLayout (http://localhost:8000/umi.js:47150:24)
    at BasicLayout (http://localhost:8000/layouts__BasicLayout.js:2582:24)
    at ConnectFunction (http://localhost:8000/umi.js:286306:75)
    at LoadableComponent (http://localhost:8000/umi.js:317898:75)
    at Route
    at Switch
    at SecurityLayout (http://localhost:8000/layouts__SecurityLayout.js:49:175)
    at ConnectFunction (http://localhost:8000/umi.js:286306:75)
    at LoadableComponent (http://localhost:8000/umi.js:317898:75)
    at Route
    at Switch
    at Router (http://localhost:8000/umi.js:288144:30)
    at RouterComponent (http://localhost:8000/umi.js:317079:23)
    at Provider (http://localhost:8000/umi.js:286019:20)
    at _DvaContainer (http://localhost:8000/umi.js:323151:175)
    at http://localhost:8000/umi.js:323291:24
    at FormProvider (http://localhost:8000/umi.js:205192:31)
    at LocaleProvider (http://localhost:8000/umi.js:117225:94)
    at ProviderChildren (http://localhost:8000/umi.js:110147:24)
    at LocaleReceiver (http://localhost:8000/umi.js:117098:94)
    at ConfigProvider (http://localhost:8000/umi.js:110255:13)
    at _LocaleCon

debugger 有时候完全可以替代 console.log 的

报错信息里的第一行第二行很重要！必须认真对待

# Uncaught SyntaxError: Unexpected token o in JSON at position 1

**at JSON.parse (<anonymous>)** 传入的不是 str，而是 obj。。
at Field (index.tsx:608)
at renderWithHooks (react-dom.development.js:14985)
at updateFunctionComponent (react-dom.development.js:17356)
at beginWork (react-dom.development.js:19063)
at HTMLUnknownElement.callCallback (react-dom.development.js:3945)
at Object.invokeGuardedCallbackDev (react-dom.development.js:3994)

# Uncaught Error: A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.

    at Object.invokeGuardedCallbackDev (react-dom.development.js:4005)
    at invokeGuardedCallback (react-dom.development.js:4056)
    at beginWork$1 (react-dom.development.js:23964)
    at performUnitOfWork (react-dom.development.js:22776)
    at workLoopSync (react-dom.development.js:22707)
    at renderRootSync (react-dom.development.js:22670)
    at performSyncWorkOnRoot (react-dom.development.js:22293)
    at react-dom.development.js:11327
    at unstable_runWithPriority (scheduler.development.js:468)
    at runWithPriority$1 (react-dom.development.js:11276)
    at flushSyncCallbackQueueImpl (react-dom.development.js:11322)
    at flushSyncCallbackQueue (react-dom.development.js:11309)
    at discreteUpdates$1 (react-dom.development.js:22420)
    at discreteUpdates (react-dom.development.js:3756)
    at dispatchDiscreteEvent (react-dom.development.js:5889)

# 脏数据 bug

这类是 dev 环境发现，但是 test、prd 一定要避免的低级 bug（也可以做到只在本地发现，dev 完全避免）

debug 时，先确定好运行时状态变化过程，然后再在 vsc 中改，只改一遍

# 热更新 bug

比如说数预智能-编辑大屏-添加模型处新增了模型，因为没有及时保存，热更新后就变成一串 code。

普通表格、交叉表的相关配置比较多，改代码的话，要好好考虑到所有相关的渲染逻辑，重复渲染的 case。

# Warning: React does not recognize the `inlineIndent` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `inlineindent` instead. If you accidentally passed it from a parent component, remove it from the DOM element.

- antd: Don't put <a className="logo" to="/" /> under Menu directly.

devScripts.js:6523 Warning: unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.
at PortalEditPage (http://localhost:8000/p**portal**editPage**index.6ca2ce9cf55b5fa24d66.hot-update.js:275:74)
at LoadableComponent (http://localhost:8000/umi.js:317898:75)
at Route
at Switch
at Route
at Switch
at DndProvider (http://localhost:8000/vendors~layouts**BasicLayout~p**NLQ**index~p**SharingView~p**resourcesV2**Model**EditPage~p**resourc~de7fbe03.js:2738:23)
at Authorized (http://localhost:8000/umi.js:325951:23)
at main
at Basic (http://localhost:8000/umi.js:116483:25)
at Adapter (http://localhost:8000/umi.js:116466:79)
at ConfigProviderWrap (http://localhost:8000/umi.js:51513:23)
at WrapContent (http://localhost:8000/umi.js:50315:21)
at section
at BasicLayout (http://localhost:8000/umi.js:116498:76)
at Adapter (http://localhost:8000/umi.js:116466:79)
at section
at BasicLayout (http://localhost:8000/umi.js:116498:76)
at Adapter (http://localhost:8000/umi.js:116466:79)
at div
at Provider (http://localhost:8000/umi.js:319131:31)
at BasicLayout (http://localhost:8000/umi.js:47150:24)
at BasicLayout (http://localhost:8000/layouts**BasicLayout.js:2582:24)
at ConnectFunction (http://localhost:8000/umi.js:286306:75)
at LoadableComponent (http://localhost:8000/umi.js:317898:75)
at Route
at Switch
at SecurityLayout (http://localhost:8000/layouts\_\_SecurityLayout.js:49:180)
at ConnectFunction (http://localhost:8000/umi.js:286306:75)
at LoadableComponent (http://localhost:8000/umi.js:317898:75)
at Route
at Switch
at Router (http://localhost:8000/umi.js:288144:30)
at RouterComponent (http://localhost:8000/umi.js:317079:23)
at Provider (http://localhost:8000/umi.js:286019:20)
at \_DvaContainer (http://localhost:8000/umi.js:323209:180)
at http://localhost:8000/umi.js:323349:24
at FormProvider (http://localhost:8000/umi.js:205192:31)
at LocaleProvider (http://localhost:8000/umi.js:117225:94)
at ProviderChildren (http://localhost:8000/umi.js:110147:24)
at LocaleReceiver (http://localhost:8000/umi.js:117098:94)
at ConfigProvider (http://localhost:8000/umi.js:110255:13)
at \_LocaleContainer (http://localhost:8000/umi.js:324009:70)
at http://localhost:8000/umi.js:324429:23

preserve console log&&preserve network log&&debug to avoid page-refresh temporarly

# TypeError: Object(...) is not a function

import { cloneDeep, indexOf } from '@umijs/deps/compiled/lodash'

# ×

TypeError: Converting circular structure to JSON
--> starting at object with constructor 'Object'
| property '\_context' -> object with constructor 'Object'
--- property 'Provider' closes the circle
deepClone
./src/utils/utils.ts:194
191 |
192 | export function deepClone<T>(value: T): T {
193 | if (!isObjectLike(value)) return value

> 194 | return JSON.parse(JSON.stringify(value))
> 195 | }
> 196 |
> 197 | export const parseRedirectUrl = (): string => {
> View compiled
> addChildMenu
> ./src/pages/portal/editPage/index.tsx:361
> 358 | }
> 359 | const addChildMenu = (layerI: number, k: string) => {
> 360 | const title = `${['一', '二', '三', '四'][layerI + 1]}级菜单`
> 361 | const clonedMenus: PortalMenu[] = deepClone(menus)

      | ^  362 |   clonedMenus.forEach((v) => addMenuFn({ v, k, title, newLayerI: layerI + 1 }))

363 | setPortalSetting({ ...portalSetting, menus: clonedMenus })
364 | }

为了减少（热）刷新时的等待时间，一定要用尽量多得用上快捷刷新键。

有很多地方加不了 debugger，好烦

为了减少 bug 浏览时间（比如 worktile 上面录入的，尽量只看标题就能知道 bug 含义，搞清楚 bug 的真正正确含义必须是解 bug 走对的第一步）。

# Error: Objects are not valid as a React child (found: object with keys {key, ref, type, props, \_owner, \_store}). If you meant to render a collection of children, use an array instead.

Error: Objects are not valid as a React child (found: object with keys {key, ref, type, props, \_owner, \_store}). If you meant to render a collection of children, use an array instead.
▶ 38 stack frames were collapsed.
(anonymous function)
./src/pages/scenery/EditPage/Header/CompMenu/index.tsx:70
67 | message.error('图表添加失败，请重新添加！')
68 | return
69 | }

> 70 | dispatch({

     | ^  71 |   type: 'sceneryDesigner/addComponent',

72 | payload: {
73 | ...dragInfo,
View compiled
**persistFn.current**(umi-dispatchFn in usePersistFn)
./node_modules/ahooks/es/usePersistFn/index.js:16
\_callee$
./src/pages/scenery/EditPage/Header/CompMenu/index.tsx:176
173 | }}
174 | onFinish={async (values) => {
175 | const answer = options.find((item) => item.value === values.code) as DataProps

> 176 | onClick({ ...JSON.parse(answer.chartContent), answerCode: values.code })

      | ^  177 |   return true

178 | }}>
179 | <ProFormSelect

# console/debug 触发不到

没有 render 到，比如说 tabPaneContent 部分

# 排除法解 bug

先认真思考整个链路过程、关键点，然后一定要注重效率，实在不能短时间内想出，就一点点按优先级、可能性去逐步排查

涉及到的文件比较多，最近代码提交次数比较多的话，需要看 bug 最初创建时间往前 1-2 天的时候相关文件的所有提交

# devtool

NotAllowedError, The requesting page is not visible
console.<computed> @ devScripts.js:6523
overrideMethod @ react_devtools_backend.js:4045
eval @ index.js:90
devScripts.js:6523 Warning: Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?

# react_devtools_backend.js:4045 TypeError: Cannot convert undefined or null to object

    at assign (<anonymous>)
    at O (home.ts:22)
    at home.tsx:24
    at tf (react-dom.production.min.js:262)
    at KqkS.O.unstable_runWithPriority (scheduler.production.min.js:18)
    at or (react-dom.production.min.js:122)
    at Zn (react-dom.production.min.js:261)
    at react-dom.production.min.js:261
    at G (scheduler.production.min.js:16)
    at MessagePort.KqkS.Se.port1.onmessage (scheduler.production.min.js:12)

difficult code must be with comments!!

# Er: Should have a queue. This is likely a bug in React. Please file an issue.

Error: Should have a queue. This is likely a bug in React. Please file an issue.
▶ 4 stack frames were collapsed.
PortalEditPage
.ant-design-pro/src/pages/portal/editPage/index.tsx:813:49
810 | uid: guidWithLen(),
811 | },
812 | ])

> 813 | const [logoVisible, setLogoVisible] = useState(false)

      |                                               ^  814 | useEffect(() => {

815 | if (logoFileName || logoVisible) {
816 | setLogoImagesList(
View compiled
▶ 22 stack frames were collapsed.
This screen is visible only in development. It will not appear if the app crashes in production.
Open your browser’s developer console to further inspect this error. Click the 'X' or hit ESC to dismiss this message.

写的代码经常出异常，经常报错（比如有取值错误，语法错误，死循环这些等等，都是元凶，真正应该反思的是写代码的人），才会导致项目崩溃

Error: Objects are not valid as a React child (found: object with keys {type, properties}). If you meant to render a collection of children, use an array instead.
▶ 38 stack frames were collapsed.
NormalCompRender.\_useDebounceFn.wait [as current]
.ant-design-pro/src/pages/scenery/components/SyDesigner/CompRender/NormalCompRender.tsx:157:6
154 | const newDataModelCode = getDataModelCodeFromCompData({ ...config, ...newCompConfig })
155 | // 同步更新 RunTimeSharedData.compCnModelMap
156 | RunTimeSharedData.compCnModelMap = { [code]: newDataModelCode }

> 157 | dispatch({
> 158 | type: 'sceneryDesigner/updateComponent',
> 159 | payload: {
> 160 | code,

**await 这一行打断点会有问题。会先进入 await**

解决问题、障碍、bug 的关键在于正确、合理、敢于尝试的思路，并保持优秀的思维习惯，而不是一来就打开 chrome devtool 拖慢页面渲染速度。

# 页面闪烁
websocket，可用display：none元素逐个排除法来解决闪烁问题。并且当你确定引起闪烁问题的那个元素时，其实宽高是分开闪烁的。还有元素的

# difficult

面对难题时，代码要一点点调试！！不能一下改很多！！
