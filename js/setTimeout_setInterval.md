setTimeout_setInterval.md

代码中如果有异步问题需要采用这两者来解决的话，所有的间隔时长能短则短（react-updSt 不会占用多少时间，耗费时间很短，比如说 20ms 以内，复杂页面 50ms 以内）

容易导致卡死问题。。

setTimeout、setInterval最短时长为4ms
https://juejin.cn/post/7146973901166215176

setTimeout/setInterval的执行时间并不是确定的
setTimeout/setInterval是宏任务，根据事件轮询机制，其他任务会阻塞或延迟js任务的执行
考虑极端情况，假如定时器里面的代码需要进行大量的计算，或者是DOM操作，代码执行时间超过定时器的时间，会出现定时器不准的情况


setTimeout/setInterval 动画卡顿
不同设备的屏幕刷新频率可能不同， setTimeout/setInterval只能设置固定的时间间隔，这个时间和屏幕刷新间隔可能不同
setTimeout/setInterval通过设置一个间隔时间，来不断改变图像实现动画效果，在不同设备上可能会出现卡顿、抖动等现象
requestAnimationFrame
requestAnimationFrame 是浏览器专门为动画提供的API
requestAnimationFrame刷新频率与显示器的刷新频率保持一致，使用该api可以避免使用setTimeout/setInterval造成动画卡顿的情况
requestAnimationFrame：告诉浏览器在下次重绘之前执行传入的回调函数(通常是操纵dom，更新动画的函数)
setTimeout、setInterval、requestAnimationFrame 三者的区别
1）引擎层面
setTimeout属于 JS引擎 ，存在事件轮询
requestAnimationFrame 属于 GUI引擎
JS引擎与GUI引擎是互斥的，也就是说 GUI引擎在渲染时会阻塞JS引擎的计算
这样设计的原因，如果在GUI渲染的时候，JS同时又改变了dom，那么就会造成页面渲染不同步
2）性能层面
当页面被隐藏或最小化时，定时器 setTimeout仍会在后台执行动画任务
当页面处于未激活的状态下，该页面的屏幕刷新任务会被系统暂停，requestAnimationFrame也会停止


setTimeout模拟实现setInterval

```js
closure
function mySetInterval(fn,delay){
  let timer=null
  function interval(){
    fn()
    timer=setTimeout(interval,delay)
  }
  interval()
  return {
    cancel(){
      clearTimeout(tiemr)
    }
  }
}
setInterval模拟实现setTimeout
function mySetTimeout(fn,delay){
  let timer=setInterval(()=>{
    clearInterval(timer)
    fn()
  },delay)
}
```

```js
for(var i=0;i<3;i++){
  setTimeout(()=>console.log(i),1)
}
for(let i=0;i<3;i++){
  setTimeout(()=>console.log(i),1)
}
// 333,012
```
由于JavaScript的*事件循环*，*settimeout回调会在遍历结束后才执行*(同步代码（script这个主线程内），宏任务队列)。因为第一个遍历中遍历i是通过var关键字声明的，所以这个值是全局作用域下的。遍历过程中，我们通过一元操作符++来每次递增i的值。当setTimeout回调执行的时候，i的值等于3。

第二个遍历中，遍历i是通过let关键字声明的：通过let和const关键字声明的变量拥有块级作用域（指的是任何在{}中的内容）。每次遍历过程中，i都有一个新值，并且每个值都在循环内的作用域中


```js
const foo = () => console.log('First')
const bar = () => setTimeout(() => console.log('Second'))
const baz = () => console.log('Third')

bar()
foo()
baz()
A: First Second Third
B: First Third Second
C: Second First Third
D: Second Third First
答案
答案: B
我们有一个 setTimeout 函数，并首先调用它。然而，它是最后打印日志的。

这是因为在浏览器中，我们不仅有运行时引擎，还有一个叫做 WebAPI 的东西。WebAPI 提供了 setTimeout 函数，也包含其他的，例如 DOM。

将 callback 推送到 WebAPI 后，setTimeout 函数本身 (但不是回调！) 将从栈中弹出。


现在，foo 被调用，打印 "First"。


foo 从栈中弹出，baz 被调用。打印 "Third"。


```
*WebAPI* 不能随时向*栈CALL STACK*内添加内容。相反，它将回调函数推到名为*QUEUE*的地方。

这就是事件循环开始工作的地方。一个事件循环查看栈和任务队列。如果栈是空的，它接受队列上的第一个元素并将其推入栈。

bar 被调用，打印 "Second"，然后它被栈弹出。

# reactjs-setState
`setRecordingDuration(recordingDuration=>recordingDuration+1)`

# js 等待n毫秒 while实现
在 JavaScript 中，可以通过一个 `while` 循环来实现等待 n 毫秒，但这是一个阻塞操作，会导致浏览器或 Node.js 环境在等待期间无法执行其他操作。这种方法通常不推荐，因为它会阻塞主线程，导致应用程序无法响应其他事件。

然而，如果你仍然想了解如何使用 `while` 循环来实现等待，可以参考以下代码示例：

```javascript
function sleep(milliseconds) {
  const start = new Date().getTime();
  while (new Date().getTime() - start < milliseconds) {
    // Do nothing
  }
}

// 示例用法：等待2秒
console.log('等待开始');
sleep(2000);
console.log('等待结束');
```

上述代码会阻塞主线程 2 秒钟，但在实际应用中，这种方式并不推荐。通常，我们会使用 `setTimeout` 或 `Promise` 来实现非阻塞的等待。

### 推荐使用 `Promise` 实现非阻塞的等待

使用 `Promise` 来实现等待是非阻塞的，且不会影响主线程的执行。以下是使用 `Promise` 的示例：

```javascript
function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

// 示例用法：等待2秒
console.log('等待开始');
sleep(2000).then(() => {
  console.log('等待结束');
});
```

如果你在异步函数中使用 `async`/`await`，可以这样实现：

```javascript
function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function demo() {
  console.log('等待开始');
  await sleep(2000);
  console.log('等待结束');
}

// 调用示例
demo();
```

这种方法不会阻塞主线程，使得应用程序在等待期间仍然可以响应其他事件。
