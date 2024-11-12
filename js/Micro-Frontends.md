类似于微服务的架构，它将微服务的理念应用于浏览器端，即将 Web 应用由单一的单体应用

# 微前端框架的几种技术选型

<https://juejin.cn/post/7113503219904430111>

文章主要介绍了微前端架构的技术选型，包括其产生背景、概念、优势及几种实现方式。背景是 SPA 应用规模扩大带来诸多问题，微前端应运而生。其核心原则是独立运行、独立部署、独立开发。实现方式有 single-spa、qiankun、micro-app、Module Federation，各自有特点和配置方法，且技术不断演进，应按需选择。

## 背景

### 随着SPA大规模的应用，紧接着就带来个新问题：一个规模化应用需要拆分

一方面功能快速增加导致打包时间成比例上升，而紧急发布时要求是越短越好，这是矛盾的。另一方面当一个代码库集成了所有功能时，日常协作绝对是很困难的。而且最近十多年，前端技术发展很快，每两年就是一个时代，导致同志们必须升级项目甚至换个框架。

但如果大家想在规模化应用中的一个版本做好这事，基本上不可能。最早的解决方案是采用iframe，根据功能主要模块拆分规模化应用，子应用间使用跳转，但该方案最大问题是页面重新加载和白屏。那有啥好的解决方案呢？微前端这种跨应用的解决方案在此背景下应运而生了！

## 微前端的概念

微前端是一种类似于微服务的架构，是一种由独立交付的多个前端应用组成整体的架构风格，将前端应用分解成一些更小更简单的，能独立开发、测试、部署的应用，而在用户看来仍然是内聚的单个产品。有一个*基座应用（主应用），来管理各个子应用的加载和卸载*。

所以微前端不是指具体的库，不是具体框架和工具，而是一种理想与架构模式。
*前端的核心三大原则就是：独立运行、独立部署、独立开发*

### 微前端的优势

采用微前端架构的好处就是，将这些小型应用融合为一个完整应用，或者将原本运行已久、没有关联的几个应用融合为一个应用。可以将多个项目融合为一，又可以减少项目间耦合，提升项目扩展性。

### 实现微前端的几种方式

从single-spa到qiankun
基于WebComponent的micro-app
webpack5实现的Module Federation

## 微前端框架的分类

### Single-spa

single-spa是一个很好的微前端基础框架，而qiankun框架就是基于single-spa实现，在其基础上做了层封装，也解决了single-spa的一些缺陷。

首先我们先来了解该如何使用single-spa来完成微前端的搭建。

### Single-spa实现原理

首先在基座应用中注册所有App的路由，single-spa保存各子应用的路由映射关系，充当微前端控制器Controller。URL响应时，匹配子应用路由并加载渲染子应用。上图便是对single-spa完整的描述。

有了理论基础，接下来看看代码层如何使用。

以下以Vue工程为例基座构建single-spa，在Vue工程入口文件main.js完成基座配置。

```js
// 子应用配置
//main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerApplication, start } from 'single-spa'

Vue.config.productionTip = false

const mountApp = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url

    script.onload = resolve
    script.onerror = reject

    // 通过插入script标签的方式挂载子应用
    const firstScript = document.getElementsByTagName('script')[0]
    // 挂载子应用
    firstScript.parentNode.insertBefore(script, firstScript)
  })
}

const loadApp = (appRouter, appName) => {

  // 远程加载子应用
  return async () => {
    //手动挂载子应用
    await mountApp(appRouter + '/js/chunk-vendors.js') // react的话该怎么弄，umi4的话该怎么弄呢？
    await mountApp(appRouter + '/js/app.js')
    // 获取子应用生命周期函数
    return window[appName]
  }
}

// 子应用列表
const appList = [
  {
    // 子应用名称
    name: 'app1',
    // 挂载子应用
    app: loadApp('http://localhost:8083', 'app1'),
    // 匹配该子路由的条件
    activeWhen: location => location.pathname.startsWith('/app1'),
    // 传递给子应用的对象
    customProps: {}
  },
  {
    name: 'app2',
    app: loadApp('http://localhost:8082', 'app2'),
    activeWhen: location => location.pathname.startsWith('/app2'),
    customProps: {}
  }
]

// 注册子应用
appList.map(item => {
  registerApplication(item)
})

// 注册路由并启动基座
new Vue({
  router,
  mounted() {
    start()
  },
  render: h => h(App)
}).$mount('#app')


// 配置子应用为umd打包方式
//vue.config.js
const package = require('./package.json')
module.exports = {
  // 告诉子应用在这个地址加载静态资源，否则会去基座应用的域名下加载
  publicPath: '//localhost:8082',
  // 开发服务器
  devServer: {
    port: 8082
  },
  configureWebpack: {
    // 导出umd格式的包，在全局对象上挂载属性package.name，基座应用需要通过该全局对象获取些信息，比如子应用导出的生命周期函数
    output: {
      // library的值在所有子应用中需要唯一
      library: package.name,
      libraryTarget: 'umd'
    }
  }
}


// 配置子应用环境变量
// .env.micro
NODE_ENV=development
VUE_APP_BASE_URL=/app2
isMicro=true

```

*子应用配置的核心是用singleSpaVue生成子路由配置后，必须要抛出其生命周期函数。*

用以上方式便可轻松实现一个简单的微前端应用了。

那么我们有single-spa这种微前端解决方案，为何还需要qiankun呢？

相比于single-spa，qiankun解决了JS沙盒环境，不需要我们自己去进行处理。在single-spa开发过程中，我们需自己手动写调用子应用JS的方法，如上面的 createScript方法；而qiankun不需要，qiankun只需要你传入响应的apps的配置即可，会帮助我们去加载。

### Qiankun

#### Qiankun的优势

基于 single-spa 封装，提供了更开箱即用的 API。

*技术栈无关*，任意技术栈的应用均可 使用/接入，不论是 React/Vue/Angular/JQuery 还是其他框架。

*HTML Entry* 接入方式，让你接入微应用像使用 iframe 简单。

*样式隔离*，确保微应用之间样式互不干扰。

*JS 沙箱，确保微应用间 全局变量/事件 不冲突*。

*资源预加载，在浏览器空闲时间预加载未打开的微应用资源*，加速微应用打开速度。

#### 基座配置

```js
import { registerMicroApps, start } from 'qiankun';


registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:3000',
    container: '#container',
    activeRule: '/app-react',
  },
  {
    name: 'vueApp',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/app-vue',
  },
  {
    name: 'angularApp',
    entry: '//localhost:4200',
    container: '#container',
    activeRule: '/app-angular',
  },
]);
// 启动 qiankun
start();


```

#### 子应用配置

 create react app 生成的 react 16 项目为例，搭配 react-router-dom 5.x。

1.在 src 目录新增 public-path.js，解决子应用挂载时，访问静态资源冲突

```js
  if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  }

```

2.设置 history 模式路由的 base：

```js
  <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}>

```

3.入口文件 index.js 修改，为了避免根 id #root 与其他的 DOM 冲突，需要限制查找范围。

```js
  import './public-path';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';


  function render(props) {
    const { container } = props;
    ReactDOM.render(<App />, container ? container.querySelector('#root') :
    document.querySelector('#root'));
  }


  if (!window.__POWERED_BY_QIANKUN__) {
    render({});
  }


  export async function bootstrap() {
    console.log('[react16] react app bootstraped');
  }


  export async function mount(props) {
    console.log('[react16] props from main framework', props);
    render(props);
  }


  export async function unmount(props) {
    const { container } = props;
    ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') :
    document.querySelector('#root'));
  }

```

作者：花小白
链接：<https://juejin.cn/post/7113503219904430111>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
作者：花小白
链接：<https://juejin.cn/post/7113503219904430111>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

作者：花小白
链接：<https://juejin.cn/post/7113503219904430111>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
