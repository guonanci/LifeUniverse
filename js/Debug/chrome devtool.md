// https://developers.google.com/web/tools/chrome-devtools/speed/get-started

// cmd shift c is very convenient when debug to choose elements in page.

// vsc 中记住目标代码在第几行，然后 chrome devTool 中找到

// 点击右边的断点行概览的话会快速定位到具体行

cmd shift c/i（F12）+cmd shift c 适用于大部分调试 js 进入场景（调试 css 除外，只需要按一下 cmd shift c）

# style

- => element:hover (will show new realtime page style)

嵌套样式的样式覆盖很繁琐真的是相当的繁琐（也要考虑到 hover 的覆盖）

取消 bug 行在下方取消就行了，不用点上面去（还得用滚轮，太麻烦了）

debug 时，基本上 network 只过滤成 Fetch/XHR

cmd+w 失效，需要手动点击才能关闭死循环的调试中的网页。

切换到其他;bug1000115;

不同页面 cmd+p 出来的不一样

# network

copy as fetch,Replay fetch,截屏（整个网页，不是一屏,cmd+shift+p,full screen or node），$0,$\_,cmd+shift+p switch to dark/light theme $,$$(document.querySelector(All))

console importer 插件 $i('dayjs') lodash

条件断点 conditional breakpoint 左边栏右键 eg, in arr_forEach method

## initiator 启动器

每个请求右击也看的到；载荷 payload、启动器 initiator、

## Record network requests

Stop recording network requests(一般都不 stop recording)
clear requests
Preserve log（非必要时不开启，特别消耗性能）:save requests across page loads
capture screenshots during page load
replay XHR request

## changing loading behavior

Emulate a first-time visitor by disabling the browser cache(not localStorage/sessionStorage(html5), just http cache and cookies(nonono)?) 一般都是关闭状态（最大程度利用 http 缓存来加速本地开发体验）

filter 可点击

import HAR file Export HAR...
**Emulate offline** Progressive Web Apps，a new class of web apps. service workers.
Emulate slow network connections Emulate 2G,3G, and other connection speeds from the Network Throttling menu.

# 每个请求的右键菜单

open in source panel
open in new tab
clear browser cache/storage
clear browser cookies
copy link address/request headers/response/response headers/as fetch/as Node.js fetch/cURL/all as fetch...
block request url
block request domain
sort by name/status/

- second
- third
  https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#timing-explanation

## timing

一定要用好网络请求的清除操作，每次比较两三个请求（timing 这样的时间指标）时，先把所有的请求记录清除

Queued at 445.32 ms
Started at 453.30 ms setTimeout 的数值

# console

## console.table

## JSON preview

自带功能
500 多 K 的 json 用 vscode（json.cn 的算力等同于 chrome devtool）

# violation

[Violation] 'setTimeout' handler 用时 <N> 毫秒
commons_1.js:41 [Violation] 'react-invokeguardedcallback' handler took 154ms
[Violation] Forced reflow while executing JavaScript took 36ms
5[Violation] 'requestAnimationFrame' handler 用时 <N> 毫秒
8[Violation] Added non-passive event listener to a scroll-blocking <某些> 事件. Consider marking event handler as 'passive' to make the page more responsive. See <URL>
commons_1.js:41 [Violation] 'react-invokeguardedcallback' handler took 211ms
commons_1.js:41 [Violation] 'react-invokeguardedcallback' handler took 343ms
[Violation] Forced reflow while executing JavaScript took 227ms
commons_1.js:41 [Violation] 'message' handler took 2160ms
commons_1.js:187 [Violation] 'message' handler took 2165ms
[Violation] Forced reflow while executing JavaScript took 50ms
commons_1.js:41 [Violation] 'react-invokeguardedcallback' handler took 1444ms

为什么有时候需要经常刷新页面,才能及时热更新出最新的网页内容呢？

# maximum stack / crash
可以通过立马按一下debug，停止内存的增加。
