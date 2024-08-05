[view-router 实现原理](https://segmentfault.com/a/1190000018227116)

# umi-router

history.push 之后必须 ret

说一说 HashRouter 和 HistoryRouter的区别和原理？
解题思路
##得分点 `#` `window.onhashchange` `history.pushState ` `window.onpopstate` 标准回答 HashRouter和 HistoryRouter的区别： 1. history和hash都是利用浏览器的两种特性实现前端路由，history是利用浏览历史记录栈的API实现，hash是监听location对象hash值变化事件来实现 2. history的url没有'#'号，hash反之 3. 相同的url，history会触发添加到浏览器历史记录栈中，hash不会触发，history需要后端配合，如果后端不配合刷新新页面会出现404，hash不需要。 HashRouter的原理：通过`window.onhashchange`方法获取新URL中hash值，再做进一步处理 HistoryRouter的原理：通过`history.pushState `使用它做页面跳转不会触发页面刷新，使用`window.onpopstate` 监听浏览器的前进和后退，再做其他处理 加分回答 hash模式下url会带有#，需要url更优雅时，可以使用history模式。 需要兼容低版本的浏览器时，建议使用hash模式。 需要添加任意类型数据到记录时，可以使用history模式。


# vue-router中router和route的区别
router是路由实例对象，包含一些路由跳转方法，比如push。

route是路由信息对象，包含和路由相关的一些信息，比如params,location等。

# vue单页面应用无刷新更新组件怎么实现的

我理解面试官询问的点在于vue-router两种模式下如何实现的url到组件的映射
- hash模式
vue-router的默认模式，hash指的是url锚点，当锚点变化时，浏览器只会修改访问历史记录，不会访问服务器重新获取页面，因此可以监听锚点值变化，根据锚点值渲染指定dom；改变锚点，可以通过location.hash = '/hashpath'的方式修改hash值；监听锚点变化：可以通过监听hashchange事件监听hash值的变化。
```js
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substr(1)
    // 根据hash值渲染不同的dom
})
```
- history模式
通过mode选项开启history模式，history模式的区别在于：
1. history不带‘#’，更加美观
2. 当用户刷新或者直接输入地址时会向服务器发送一个请求，所以需要服务端同学支持，将路由都重定向到跟路由
改变url
history对象提供了pushState和replaceState两个方法，调用时，url会变化，浏览器访问历史也会变化，但是浏览器不会向后台发送请求
```js
// 第一个参数：data对象，在监听变化的事件中能够获取到
// 第二个参数：title标题
// 第三个参数： 跳转地址
history.pushState({}, '', '/a')
```

监听url变化
可以通过监听popstate事件监听history变化，也就是点击浏览器的前进或者后退功能时触发
```js
window.addEventListener('popstate', () => {
  const path = window.location.pathname
})
pushState() and window.location = '#foo' 基本上一样，都会在当前的document中创建和激活一个新的历史记录，但是pushState有优势：新的 URL 可以是任何和当前 URL 同源的 URL。但是设置 window.location 只会在你只设置锚的时候才会使当前的 URL。
非强制修改 URL。相反，设置 window.location = "#foo"; 仅仅会在锚的值不是 #foo 情况下创建一条新的历史记录。
可以在新的历史记录中关联任何数据。window.location = "#foo"形式的操作，你只可以将所需数据写入锚的字符串中。
 pushState() 不会造成 hashchange 事件调用

vue在页面中如何监听回到上一步的操作
挂载完成后，判断浏览器是否支持popstate
mounted(){
  if (window.history && window.history.pushState) {
    history.pushState(null, null, document.URL);
    window.addEventListener('popstate', this.goBack, false);
  }
},
复制代码
页面销毁时，取消监听。否则其他vue路由页面也会被监听
destroyed(){
  window.removeEventListener('popstate', this.goBack, false);
},
复制代码
页面跳转函数
methods:{
  goBack(){
    this.$router.replace({path: '/'});
    //replace替换原路由，作用是避免回退死循环
  }
}

```
作者：let_code
链接：https://juejin.cn/post/7178783712363708475
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


vue-router原理
1）创建的页面路由会与该页面形成一个路由表（key value形式，key为该路由，value为对应的页面）
2）vue-router原理是监听 URL 的变化，然后匹配路由规则，会用新路由的页面替换到老的页面 ，无需刷新
3）目前单页面使用的路由有两种实现方式: hash 模式、history 模式
5）hash模式（路由中带#号），通过hashchange事件来监听路由的变化
window.addEventListener('hashchange', （)=>{})
6）history 模式，利用了pushState() 和replaceState() 方法，实现往history中添加新的浏览记录、或替换对应的浏览记录
通过popstate事件来监听路由的变化，window.addEventListener('popstate', （)=>{})


作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


https://github.com/browserstate/history.js/

页面跳转时，想把上一个页面的大 obj 携带到下一个页面，不需要在新页面额外调用接口，也不需要用 localStorage、redux 什么的

用 Location HistoryState 技术即可...但是，为了方便用户右键点击链接-在新标签页中直接打开链接，还是用原始 API 比较好；
[后退不刷新的问题](https://juejin.cn/post/6844903742681137160)

刷新后，history（umi）.push 时携带的 params 参数依然保留~

# react-router 里的 Link标签和 a标签有什么区别
有 onClick 则执行 OnClick；
阻止 a 标签默认事件（跳转页面）；
在取得跳转 href（to 属性值），用 history/hash 跳转，此时只是链接改变，并没有刷新页面；
