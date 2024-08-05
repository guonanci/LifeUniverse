requestIdleCallback.md
浏览器空闲时间
页面是一帧一帧绘制出来的，一般情况下，设备的屏幕刷新率为1s 60次，而当FPS小于60时，会出现一定程度的卡顿现象
下面来看完整的一帧中，具体做了哪些事情:
1）首先需要处理输入事件，能够让用户得到最早的反馈
2）接下来是处理定时器，需要检查定时器是否到时间，并执行对应的回调
3）接下来处理 Begin Frame（开始帧），即每一帧的事件，包括 window.resize、scroll、media query change 等
4）接下来执行请求动画帧 requestAnimationFrame（rAF），即在每次绘制之前，会执行 rAF 回调
5）紧接着进行 Layout 操作，包括计算布局和更新布局，即这个元素的样式是怎样的，它应该在页面如何展示
6）接着进行 Paint 操作，得到树中每个节点的尺寸与位置等信息，浏览器针对每个元素进行内容填充
7）到这时以上的六个阶段都已经完成了，接下来处于空闲阶段（Idle Peroid）
requestIdleCallback
在空闲阶段（Idle Peroid）时，可以执行 requestIdleCallback 里注册的任务
requestIdleCallback接收两个参数：
window.requestIdleCallback(callback, { timeout: 1000 })
1）第一个参数是一个函数，该函数的入参，可以获取当前帧的剩余时间，以及该任务是否超时


作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```js
window.requestIdleCallback(deadline => {
  // 返回当前帧还剩多少时间供用户使用
  deadline.timeRamining;
  // 返回 callback 任务是否超时
  deadline.didTimeout;
});
```
2）第二个参数，传入timeout参数自定义超时时间，如果到了超时时间，浏览器必须立即执行

例子：打印此帧的剩余时间

```js
// 该函数的执行时间超过1s
function calc() {
  let start = performance.now();
  let sum = 0;
  for (let i = 0; i < 10000; i++) {
    for (let i = 0; i < 10000; i++) {
      sum += Math.random();
    }
  }
  let end = performance.now();
  let totolTime = end - start;
  // 得到该函数的计算用时
  console.log(totolTime, "totolTime");
}

let tasks = [
  () => {
    calc();
    console.log(1);
  },
  () => {
    calc();
    console.log(2);
  },
  () => {
    console.log(3);
  }
];

let work = deadline => {
  console.log(`此帧的剩余时间为: ${deadline.timeRemaining()}`);

  // 如果此帧剩余时间大于0或者已经到了定义的超时时间（上文定义了timeout时间为1000，到达时间时必须强制执行），且当时存在任务，则直接执行这个任务
  // 如果没有剩余时间，则应该放弃执行任务控制权，把执行权交还给浏览器
  while (
    (deadline.timeRemaining() > 0 || deadline.didTimeout) &&
    tasks.length > 0
  ) {
    let fn = tasks.shift();
    fn();
  }
  // 如果还有未完成的任务，继续调用requestIdleCallback申请下一个时间片
  if (tasks.length > 0) {
    window.requestIdleCallback(work, { timeout: 500 });
  }
};
window.requestIdleCallback(work, { timeout: 500 });
```
