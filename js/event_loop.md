说一说事件循环Event loop，宏任务与微任务？
解题思路
得分点 任务挂起、同步任务执行结束执行队列中的异步任务、执行script标签内部代码、setTimeout/setInterval、ajax请、postMessageMessageChannel、setImmediate、I/O（Node.js）Promise、MutonObserver、Object.observe、process.nextTick（Node.js）每个宏任务中都包含了一个微任务队列 标准回答 浏览器的事件循环：执行js代码的时候，遇见同步任务，直接推入调用栈中执行，遇到异步任务，将该任务挂起，等到异步任务有返回之后推入到任务队列中，当调用栈中的所有同步任务全部执行完成，将任务队列中的任务按顺序一个一个的推入并执行，重复执行这一系列的行为。 异步任务又分为宏任务和微任务。 宏任务：任务队列中的任务称为宏任务，每个宏任务中都包含了一个微任务队列。 微任务：等宏任务中的主要功能都完成后，渲染引擎不急着去执行下一个宏任务，而是执行当前宏任务中的微任务 宏任务包含：执行script标签内部代码、setTimeout/setInterval、ajax请、postMessageMessageChannel、setImmediate，I/O（Node.js） 微任务包含：Promise、MutonObserver、Object.observe、process.nextTick（Node.js） 加分回答 浏览器和Node 环境下，microtask 任务队列的执行时机不同 - Node端，microtask 在事件循环的各个阶段之间执行 - 浏览器端，microtask 在事件循环的 macrotask 执行完之后执行


js分为同步任务和异步任务；同步任务都在主线程上执行，形成一个执行栈；主线程之外，事件触发线程管理着一个任务队列，只要异步任务有了运行结果，就在任
务队列中放置一个事件；一旦执行栈中的所有同步任务执行完毕（此时js引擎空闲），系统就会读取任务队列，将可运行的异步任务添加到可执行栈中，开始执行。
根据规范，事件循环是通过任务队列的机制来进行协调的。一个event loop中，可以有一个或多个task queue。一个任务队列便是一系列有序任务的集合；每个
任务都有一个task source，源自同一个任务源的task必须放到同一个任务队列，从不同源来得则被添加到不同队列。
宏任务
每次执行栈执行的代码就是一个宏任务，包括每次从事件队列中获取一个事件回调并放到执行栈中执行。

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop

JavaScript 有一个基于事件循环的并发模型，事件循环负责执行代码、收集和处理事件以及执行队列中的子任务。这个模型与其它语言中的模型截然不同，比如 C 和 Java。

可视化描述
Stack-Frames,Heap-Objects,Queue-Messages
Stack
函数调用形成了一个由若干帧组成的栈。
```js
function foo(b) {
  let a = 10;
  return a + b + 11;
}

function bar(x) {
  let y = 3;
  return foo(x * y);
}

console.log(bar(7)); // 返回 42
// 当调用 bar 时，第一个帧被创建并压入栈中，帧中包含了 bar 的参数和局部变量。当 bar 调用 foo 时，第二个帧被创建并被压入栈中，放在第一个帧之上，帧中包含 foo 的参数和局部变量。当 foo 执行完毕然后返回时，第二个帧就被弹出栈（剩下 bar 函数的调用帧）。当 bar 也执行完毕然后返回时，第一个帧也被弹出，栈就被清空了。


```
Heap
对象被分配在堆中，堆是一个用来表示一大块（通常是非结构化的）内存区域的计算机术语。

Queue
一个 JavaScript 运行时包含了一个待处理消息的消息队列。每一个消息都关联着一个用以处理这个消息的回调函数。

在 事件循环 期间的某个时刻，运行时会从最先进入队列的消息开始处理队列中的消息。被处理的消息会被移出队列，并作为输入参数来调用与之关联的函数。正如前面所提到的，调用一个函数总是会为其创造一个新的栈帧。

函数的处理会一直进行到执行栈再次为空为止；然后事件循环将会处理队列中的下一个消息（如果还有的话）。

事件循环
之所以称之为 事件循环，是因为它经常按照类似如下的方式来被实现：
```js
while (queue.waitForMessage()) {
  queue.processNextMessage();
}
// queue.waitForMessage() 会同步地等待消息到达 (如果当前没有任何消息等待被处理)。


```

https://zhuanlan.zhihu.com/p/33058983

单线程是必要的，也是javascript这门语言的基石，原因之一在其最初也是最主要的执行环境——浏览器中，我们需要进行各种各样的dom操作。试想一下 如果javascript是多线程的，那么当两个线程同时对dom进行一项操作，例如一个向其添加事件，而另一个删除了这个dom，此时该如何处理呢？因此，为了保证不会 发生类似于这个例子中的情景，javascript选择只用一个主线程来执行代码，这样就保证了程序执行的一致性。

当然，现如今人们也意识到，单线程在保证了执行顺序的同时也限制了javascript的效率，因此开发出了web worker技术。这项技术号称让javascript成为一门多线程语言。

然而，使用web worker技术开的多线程有着诸多限制，例如：所有新线程都受主线程的完全控制，不能独立执行。这意味着这些“线程” 实际上应属于主线程的子线程。另外，这些子线程并没有执行I/O操作的权限，只能为主线程分担一些诸如计算等任务。所以严格来讲这些线程并没有完整的功能，也因此这项技术并非改变了javascript语言的单线程本质。

可以预见，未来的javascript也会一直是一门单线程的语言。
话说回来，前面提到javascript的另一个特点是“非阻塞”，那么javascript引擎到底是如何实现的这一点呢？答案就是今天这篇文章的主角——event loop（事件循环）。

注：虽然nodejs中的也存在与传统浏览器环境下的相似的事件循环。然而两者间却有着诸多不同，故把两者分开，单独解释。


JS 语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。所有任务都需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着
所有任务可以分成两种，一种是宏任务，另一种是微任务
宏任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行下一个任务
微任务指的是，不进入主线程、而进入"微任务列表"的任务
当前宏任务执行完后，会判断微任务列表中是否有任务。如果有，会把该微任务放到主线程中并执行，如果没有，就继续执行下一个宏任务
宏任务 微任务
1）宏任务（Macrotasks）
script全部代码（注意同步代码也属于宏任务）、setTimeout、setInterval、setImmediate等
2）微任务（Microtasks）
Promise、MutationObserver

微任务包括：MutationObserver，Promise.then（）或catch（），promise为基础开发的其他技术，比如fetch API、V8的回收过程，Node独有的process.nextTick
宏任务包括：script，setTimeout，setInterval，setImmediate，I/O,UI rendering

作者：海阔_天空
链接：https://juejin.cn/post/7146973901166215176
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

事件轮询机制执行过程
1）代码执行过程中，宏任务和微任务放在不同的任务队列中
2）当某个宏任务执行完后,会查看微任务队列是否有任务。如果有，执行微任务队列中的所有微任务(注意这里是执行所有的微任务)
3）微任务执行完成后，会读取宏任务队列中排在最前的第一个宏任务（注意宏任务是一个个取），执行该宏任务，如果执行过程中，遇到微任务，依次加入微任务队列
4）宏任务执行完成后，再次读取微任务队列里的任务，依次类推。

```js
Promise.resolve()
  .then(function() {
    console.log("promise0");
  })
  .then(function() {
    console.log("promise5");
  });
setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(function() {
    console.log("promise2");
  });
  Promise.resolve().then(function() {
    console.log("promise4");
  });
}, 0);
setTimeout(() => {
  console.log("timer2");
  Promise.resolve().then(function() {
    console.log("promise3");
  });
}, 0);
Promise.resolve().then(function() {
  console.log("promise1");
});
console.log("start");

// 打印结果： start promise0 promise1 promise5 timer1 promise2 promise4 timer2 promise3
start promise0 promise1 promise5 timer1 promise2 promise4 timer2 promise3
```
宏任务是一个个执行，执行一个宏任务，然后就把在任务队列中的所有微任务都执行完，再执行下一个宏任务，再执行所有微任务，依次类推


```js
async、await事件轮询执行时机
async隐式返回Promise，会产生一个微任务
await后面的代码是在微任务时执行

// start,asyn2 end,a1 end,Promise,p1 setT,p2,end
// start,asyn2 end,Pro,end,a1 end,p1,p2,setT
console.log("script start");
async function async1() {
  await async2(); // await 隐式返回promise
  console.log("async1 end"); // 这里的执行时机：在执行微任务时执行
}
async function async2() {
  console.log("async2 end"); // 这里是同步代码
}
async1();
setTimeout(function() {
  console.log("setTimeout");
}, 0);
new Promise(resolve => {
  console.log("Promise"); // 这里是同步代码
  resolve();
})
  .then(function() {
    console.log("promise1");
  })
  .then(function() {
    console.log("promise2");
  });
console.log("script end");

// 打印结果:  script start => async2 end => Promise => script end => async1 end => promise1 => promise2 => setTimeout
```

event loop 与 浏览器更新渲染时机
1） 浏览器更新渲染会在event loop中的 宏任务 和 微任务 完成后进行，即宏任务 →  微任务  →  渲染更新（先宏任务 再微任务，然后再渲染更新）
2）宏任务队列中，如果有大量任务等待执行时，将dom的变动作为微任务，能更快的将变化呈现给用户，这样就可以在这一次的事件轮询中更新dom
event loop与 vue nextTick
vue nextTick为什么要优先使用微任务实现？
1） vue nextTick的源码实现，优先级判断，总结就是Promise > MutationObserver > setImmediate > setTimeout
2）这里优先使用Promise，因为根据event loop与浏览器更新渲染时机，使用微任务，本次event loop轮询就可以获取到更新的dom
3）如果使用宏任务，要到下一次event loop中，才能获取到更新的dom

Node中的process.nextTick
有很多文章把Node的process.nextTick和微任务混为一谈，但其实并不是同一个东西
process.nextTick 是 Node.js 自身定义实现的一种机制，有自己的 nextTickQueue
process.nextTick执行顺序早于微任务

```js
console.log("start");
setTimeout(() => {
  console.log("timeout");
}, 0);
Promise.resolve().then(() => {
  console.log("promise");
});
process.nextTick(() => {
  console.log("nextTick");
  Promise.resolve().then(() => {
    console.log("promise1");
  });
});
console.log("end");
// 执行结果 start end nextTick  promise promise1 timeout
```
