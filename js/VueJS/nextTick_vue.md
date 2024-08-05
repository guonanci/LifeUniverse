nextTick为什么要优先使用微任务实现？
1）vue nextTick的源码实现，异步优先级判断，总结就是Promise > MutationObserver > setImmediate > setTimeout
2）优先使用Promise，因为根据 event loop 与浏览器更新渲染时机，宏任务 →  微任务  →  渲染更新，使用微任务，本次event loop轮询就可以获取到更新的dom
3）如果使用宏任务，要到下一次event loop中，才能获取到更新的dom


作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```js
// 定义nextTick的回调队列
let callbacks = [];

// 批量执行nextTick的回调队列
function flushCallbacks() {
  callbacks.forEach((cb) => cb());
  callbacks = [];
  pending = false;
}

//定义异步方法，优先使用微任务实现
let timerFunc;

// 优先使用promise 微任务
if (Promise) {
  timerFunc = function () {
    return Promise.resolve().then(flushCallbacks);
  };
  // 如不支持promise，再使用MutationObserver 微任务
} else if (MutationObserver) {
  timerFunc = function () {
    const textNode = document.createTextNode('1');
    const observer = new MutationObserver(() => {
      flushCallbacks();
      observer.disconnect();
    });
    const observe = observer.observe(textNode, { characterData: true });
    textNode.textContent = '2';
  };
  // 微任务不支持，再使用宏任务实现
} else if (setImmediate) {
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  timerFunc = function () {
    setTimeout(flushCallbacks);
  };
}

// 定义nextTick方法
export function nextTick(cb) {
  callbacks.push(cb);
  if (!pending) {
    pending = true;
    timerFunc();
  }
}
```
