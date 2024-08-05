https://juejin.cn/post/7146976516692410376#heading-34

*优化建议列表：去掉无用js代码；首页资源preload预加载；去掉无用css代码；使用新的图片格式，比如webp相对png、jpg格式而言，体积更小；压缩图片大小；使用preconnect or dns-prefetch，即DNS预解析*

Diagnostics诊断问题列表
这些资源需要提供长的缓存期，现发现图片都是用的协商缓存，显然不合理；给图片设置具体的宽高，减少cls的值；资源太大增加网络负载；最小化主线程，这里会执行解析 Html、样式计算、布局、绘制、合成等动作；减少非必要js资源的加载，减少必要js资源的大小；避免大的布局变化，从中可以看到影响布局变化最大的元素。



*Performance列出了FCP、SP、LCP、TTI、TBI、CLS 六个指标*的用时和得分情况

*FCP-First Contentful Paint首次内容绘制时间，标准≤1s；LCP-Largest Contentful Paint最大内容绘制时间，标准≤2秒；FID-first input delay首次输入延迟，是用户触发后到浏览器响应的时间，标准≤100ms；CLS-Cumulative Layout Shift累积布局偏移，标准≤0.1；TTFB-Time to First Byte首字节时间，是指页面发出请求，到接收第一个字节所花费的毫秒数，标准≤100毫秒*。

# Performance 寻找性能瓶颈
打开Chrome浏览器控制台，选择Performance选项，点击左侧reload图标。
Performance面板可以记录和分析页面在运行时的所有活动，大致分为以下4个区域：工具栏，overview（FPS,CPU,NET）;火焰图；统计汇总；
## 1）FPS
FPS-Frames Per Second每秒传输帧数，是用来分析页面是否卡顿的一个主要性能指标。绿色的长条越高，说明FPS越高，用户体验越好；如果发现了一个红色长条，那么就说明这些帧存在严重问题，可能会造成页面卡顿。

## 2）NET
NET记录资源的等待、下载、执行时间，每条彩色横杠表示一种资源，横杠越长，检索资源所需的时间越长。每个横杠的浅色部分表示等待时间，是指从请求资源到第一个字节下载完成的时间。Network的颜色说明：白色表示等待的颜色、浅黄色表示请求的时间、深黄色表示下载的时间。

在这里，我们可以看到所有资源的加载过程，有两个地方重点关注一下：

1）资源等待时间是否过长，标准≤100ms

2）资源文件体积是否过大，造成加载很慢，过大的话就要考虑如何拆分该资源

## 3）火焰图
火焰图Flame Chart用来可视化 CPU 堆栈信息记录

1）Network: 表示加载了哪些资源
2）Frames：表示每幅帧的运行情况
3）Timings: 记录页面中关键指标的时间

### 4）Main主线程（重点，下文会详细介绍）
### 5）GPU:表示 GPU占用情况

作者：海阔_天空
链接：https://juejin.cn/post/7146976516692410376
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

4）统计汇总
Summary: 表示各指标时间占用的统计报表
1）Loading加载时间
2）Scripting-js计算时间
3）Rendering渲染时间
4）Painting绘制时间
5）Other其他时间
6）Idle浏览器闲置时间

作者：海阔_天空
链接：https://juejin.cn/post/7146976516692410376
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


# Performance Main性能瓶颈的突破口
Main主线程主要负责：

1）Javascript 的计算与执行
2）CSS 样式计算
3）Layout 布局计算
4）将页面元素绘制成位图--即paint，也就是光栅化（Raster）

*展开Main,可以发现很多红色三角（long task），这些执行时间超过 50ms就属于长任务，会造成页面卡顿，严重时会造成页面卡死*

展开其中一个红色三角，Devtools在Summary面板里展示了更多关于该事件的信息，在Summary面板里点击app.js链接的话，Devtools就可以跳转到需要优化的代码处。

# 性能监控
项目发布生产后，用户使用时的性能如何？页面整体的打开速度是多少？白屏时间多少？FP、FCP、LCP、FID、CLS等指标，要设置多大的阀值，才能满足TP50、TP90、TP99的要求呢？

*TP指标: 总次数 * 指标数 = 对应TP指标的值。设置每个指标的阀值，比如FP指标，设置阀值为1s，要求TP95，即95%的FP指标，要在1s以下，剩余5%的指标超过1s*。TP50相对较低，TP90则比较高，TP99，TP999则对性能要求很高。

这里就需要性能监控，要采集到用户的页面数据。

作者：海阔_天空
链接：https://juejin.cn/post/7146976516692410376
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
# 性能指标的计算

```js
import {onLCP, onFID, onCLS} from 'web-vitals';

onCLS(console.log);
onFID(console.log);
onLCP(console.log);
```
# 方式二：通过performance api进行计算

下面聊一下performance api来计算各种指标

打开任意网页，在控制台中输入 performance 回车，可以看到一系列的参数。

performance.timing里面包含如下：

navigationStart可以理解为该页面的起始时间，是指同一个浏览器上下文的上一个文档，卸载结束时的时间戳，如果没有上一个文档，这个值会和 fetchStart 相同。

# 白屏时间FP
白屏时间FP--First Paint，是指从用户输入url的时刻开始计算，一直到页面有内容展示出来的时间节点，标准≤2s

这个过程包括dns查询、建立tcp连接、发送http请求、响应返回html文档、解析html文档

```js
const entryHandler = (list) => {
    for (const entry of list.getEntries()) {
        if (entry.name === 'first-paint') {
            observer.disconnect()}
       // 其中startTime就是白屏时间
       let FP = entry.startTime
    }
}
const observer = new PerformanceObserver(entryHandler)
// buffered 属性表示是否观察缓存数据，也就是说观察代码添加时机，比事件触发时机晚也没关系。
observer.observe({ type: 'paint', buffered: true })
```

##　内存泄露的情况
1）*意外的全局变量，挂载到window上的全局变量*
2）*遗忘的定时器，定时器没有清除*
3）*不当地使用闭包*


## 3、首屏必要资源preload预加载 和 DNS预解析
### preload 预加载
```html
<link rel="preload" href="/path/style.css" as="style">
<link rel="preload" href="/path/home.js" as="script">
<link rel="dns-prefetch" href="//img1.taobao.com">
```

使用 link 标签创建preload预加载，告诉浏览器，页面必定需要的资源，浏览器会优先加载这些资源。（vue项目打包后，会将首页所用到的资源都加上preload）

注意：**preload只是预加载资源，但不会执行，还需要引入具体文件后才会执行** <script src='/path/home.js'>

### DNS预解析
DNS Prefetch是一种DNS预解析技术，当你浏览网页时，浏览器会在加载网页时，对网页中的域名进行解析缓存。在你单击当前网页中的链接时就无需进行DNS的解析，减少用户等待时间，提高用户体验。

很多大型的网站，都会用N个CDN域名来做图片、静态文件等资源的请求访问。解析单个域名同样的地点加上高并发，难免有点堵塞，通过多个CDN域名可分担高并发下的堵塞。
## 4、首屏不必要资源延迟加载
方式一： defer或async
使用script标签的defer或async属性，这两种方式都是异步加载js，不会阻塞DOM的渲染，async是无顺序的加载，而defer是有顺序的加载。

1）使用defer可以用来控制js文件的加载顺序
比如jq 和 Bootstrap，因为Bootstrap中的js插件依赖于jQuery，所以必须先引入jQuery，再引入Bootstrap js文件。

2）如果你的脚本并不关心页面中的DOM元素（文档是否解析完毕），并且也不会产生其他脚本需要的数据，那么久可以使用async，比如添加统计、埋点等资源。


作者：海阔_天空
链接：https://juejin.cn/post/7146976516692410376
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

方式二：依赖动态引入
项目依赖的资源，推荐在各自页面中动态引入，不要全部都放到index.html中。
比如只有A页面使用echart.js，就可以在A页面的钩子函数中动态加载，在onload事件中初始化echart。

```js

// 资源动态加载的代码示例
// url 要加载的资源
// isMustLoad 是否强制加载
const asyncLoadJs = (url, isMustLoad = false) => {
  return new Promise((resolve, reject) => {
    if (!isMustLoad) {
      let srcArr = document.getElementsByTagName("script");
      let hasLoaded = false;
      let aTemp = [];
      for (let i = 0; i < srcArr.length; i++) {
        // 判断当前js是否加载上
        if (srcArr[i].src) {
          aTemp.push(srcArr[i].src);
        }
      }
      hasLoaded = aTemp.indexOf(url) > -1;
      if (hasLoaded) {
        resolve();
        return;
      }
    }

    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.body.appendChild(script);
    // 资源加载成功的回调
    script.onload = () => {
      resolve();
    };
    script.onerror = () => {
      // reject();
    };
  });
}
```

方式三：import()
使用import() 动态加载路由和组件，拆分资源，只有使用时才动态加载。
```js
// 路由懒加载
const Home = () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
const routes = [ { path: '/', name: 'home', component: Home} ]

// 组件懒加载
// 在visible属性为true时，动态去加载demoComponent组件
<demoComponent v-if="visible == true" />

components: {
    demoComponent: () => import(/* webpackChunkName: "demoComponent" */ './demoComponent.vue')
  },
```
## 5、合理利用缓存
html资源设置协商缓存，js、css、图片等资源设置强缓存。当用户再次打开页面时，html先和服务器校验，如果该资源未变化，那么服务器返回304，浏览器可直接使用缓存文件；若返回200，则使用最新的html资源。

## 6、网络方面的优化
1）*开启服务器Gzip压缩，减少请求内容的体积，对文本类能压缩60%以上*
2）*使用 HTTP2，接口解析速度快、多路复用、首部压缩等*
3）*减少 HTTP 请求，使用url-loader，limit限制图片大小，小图片转base64*

## 7、代码层面的优化
1）*用分页 + 虚拟列表来做长列表的渲染优化，长列表的渲染性能与用户体验成正比*

2）*图片的懒加载、图片的动态裁剪*
特点是手机端项目，图片几乎不需要原图，使用七牛或阿里云的动态裁剪功能，可以将原本几M的大小裁剪成几k

3）动画的优化，*动画可以使用绝对定位，让其脱离文档流，修改动画不造成主界面的影响*

使用GPU硬件加速，包括这些：transform 、opacity、filter、will-change
4）*函数的节流和防抖，减少接口的请求次数*

5）*使用骨架屏优化用户等待体验，可以根据不同路由配置不同的骨架*
vue项目推荐使用vue-skeleton-webpack-plugin，骨架屏原理是将<div id="app"></div>当中的内容替换掉

6）大数据的渲染，如果数据不会变化，那么Vue项目可以使用Object.freeze()。Object.freeze()方法可以冻结一个对象，正常情况下，Vue会将data中定义的是对象变成响应式，但是如果对象的自身属性不可修改，就直接返回该对象，省去了递归遍历对象的时间与内存消耗。

7）*在页面销毁时卸载定时器、以及绑定的事件*


作者：海阔_天空
链接：https://juejin.cn/post/7146976516692410376
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

性能分析总结
1）先用Lighthouse得到当前页面的性能得分，了解页面的整体情况，重点关注Opportunities优化建议和Diagnostics诊断问题列表

2）通过Performance工具了解页面加载的整个过程，分析到底是资源加载慢、dom渲染慢、还是js执行慢？找到具体的性能瓶颈在哪，重点关注长任务（long task）

3）利用Memory工具，了解页面整体的内存使用情况，通过JS堆动态分配时间线，找到内存最高的时刻。结合具体的代码，去解决或优化内存变大的问题

前端监控
没有监控的项目，就是在“裸奔”。需要通过监控才能真正了解项目的整体情况，各项指标要通过大量的数据采集与分析，才变得更有意义。

作者：海阔_天空
链接：https://juejin.cn/post/7146976516692410376
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
