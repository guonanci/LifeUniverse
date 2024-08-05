# event loop它的执行顺序：

*一开始整个脚本作为一个宏任务执行；执行过程中同步代码直接执行，宏任务进入宏任务队列，微任务进入微任务队列；当前宏任务执行完就出队，然后检查微任务列表，有则依次执行，直到全部执行完；之后是执行浏览器UI线程的渲染工作，检查是否有Web Worker任务，有则执行；执行完本轮宏任务后，回到第二轮循环，直到宏任务和微任务队列都为空*。

*微任务包括：MutationObserver，Promise.then（）或catch（），promise为基础开发的其他技术如fetch API、V8的回收过程，Node独有的process.nextTick；宏任务则包括：script，setTimeout，setInterval，setImmediate，I/O,UI rendering*

*注意⚠️：在所有任务开始时，由于宏任务中包括了script，所以浏览器会先执行一个宏任务，在这个过程中你看到的延迟任务，例如setTimeout，将被放到下一轮宏任务中来执行*。


# 实现Promise
https://juejin.cn/post/6844904147884441608

首先，Promise 是一个类，它接收一个执行函数 executor，executor接收两个参数：resolve 和 reject，这两个参数是 Promise 内部定义的两个函数，用来改变状态并执行对应的回调函数。

因为 Promise 本身不知道执行结果失败或成功，它只是给异步操作提供了一个容器，实际控制权在使用者手上，使用者可以分别调用上面两个函数参数来告诉 Promise 结果成功与否，同时将业务逻辑处理结果value或reason，作为参数传给resolve参数或 reject函数，执行回调。

每个 promise 都有一个 then 方法，这个是当 promise 返回结果后需要执行的回调函数，它有两个可选参数：onFulfilled的成功回调、以及onRejected失败回调。

在这里我们简单描述一下手写一个 Promise 的大致流程：
## executor 与三个状态

new Promise 时，需要传递一个 executor 执行器函数，在构造函数中，执行器函数立刻执行。executor 执行函数接受两个参数，分别是 resolve 和 reject，Promise 只能从 pending 到 rejected, 或者从 pending 到 fulfilled，Promise状态一旦确认，就凝固了状态，不再改变。

## then 方法

所有的 Promise 都有 then 方法，then 接收两个参数，分别是 Promise 成功的回调 onFulfilled，和失败的回调 onRejected。如果调用 then 时，Promise 已经成功，则执行 onFulfilled，并将 Promise 的值作为参数传递进去；如果 Promise 已经失败，那么执行 onRejected，并将 Promise 失败的原因作为参数传递进去；如果 Promise 的状态是 pending，那么需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次执行对应函数(观察者模式)。

then 的参数 onFulfilled 和 onRejected 可以不传，Promise 可以进行值穿透。

链式调用并处理 then 返回值

Promise 可以 then 多次，Promise 的 then 方法返回一个新的 Promise。
如果 then 返回的是一个正常值，那么就会把这个结果（value）作为参数，传递给下一个 then 的成功的回调（onFulfilled）
如果 then 中抛出了异常，那么就会把这个异常（reason）作为参数，传递给下一个 then 的失败的回调(onRejected)
如果 then 返回的是一个 promise 或者其他 thenable 对象，那么需要等这个 promise 执行完撑，promise 如果成功，就走下一个 then 的成功回调；如果失败，就走下一个 then 的失败回调。


https://github.com/YvetteLau/Blog/issues/2

[Promise_implementation](https://www.google.com/search?q=promise+%E5%AE%9E%E7%8E%B0&oq=promise+%E5%AE%9E%E7%8E%B0&aqs=chrome..69i57j0i12i512l2j0i512j0i12i512j0i512.5249j0j1&sourceid=chrome&ie=UTF-8)

什么是 透传

如下面代码，当 then 中没有传任何参数的时候，Promise 会使用内部默认的定义的方法，将结果传递给下一个 then。
复制代码let p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolved('成功了');
  }, 1000);
})

p1.then().then((res) => {
  console.log(res);
})
因为我们现在还没支持链式调用，这段代码运行会出问题。
支持链式调用
支持链式调用，其实很简单，我们只需要给 then 函数最后返回 this 就行，这样就支持了链式调用：
复制代码class MyPromise {
  // ...
  private then(onFulfilled, onRejected) {
    // ...
    return this;
  }
}
每次调用 then 之后，我们都返回当前的这个 Promise 对象，因为 Promise 对象上是存在 then 方法的，这个时候我们就简单的实现了 Promise 的简单调用。


作者：DARRELL
链接：https://juejin.cn/post/6844904147884441608
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
Since most people are consumers of already-created promises, this guide will explain consumption of returned promises before explaining how to create them.
Essentially, a promise it a returned obj to which you attach
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

The `Promise` obj represents the eventual completion (or failure)of an asynchronous operation and its resulting value.
This feature is available in Web Workers
To learn about the way promises work and how you can use them, we advise you to read Using promises first


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

# async-await

requestFn 前面带上 async

https://juejin.cn/post/6844904077537574919

Promise的几道基础题
Promise结合setTimeout
Promise中的then、catch、finally
Promise中的all和race
async/await的几道题
async处理错误




```js
const promise1 = new Promise((resolve, reject) => {
  console.log('promise1')
})
console.log('1', promise1)
// 'promise1'
// '1' Promise{<pending>}
从上至下，先遇到new Promise，执行该构造函数中的代码promise1
然后执行同步代码1，此时promise1没有被resolve或者reject，因此状态还是pending
const promise = new Promise((resolve, reject)=>{
  console.log(1);
  resolve('success')
  console.log(2);
})
promise.then(()=>{
  console.log(3);
})
console.log(4);
// 1 2 4 3
// 从上至下，先遇到new Promise，执行其中的同步代码1
// 再遇到resolve（）‘success’，将promise的状态改为resolved，将值保存下来
// 继续执行同步代码2
// 跳出promise，往下执行，碰到promise.then这个微任务，将其加入微任务队列
// 执行同步代码4
// 本轮宏任务全部执行完毕，检查微任务队列，发现promise.then这个微任务且状态为resolved，执行它。

const promise = new Promise((resolve, reject) => {
  console.log(1);
  console.log(2);
});
promise.then(() => {
  console.log(3);
});
console.log(4);
// 1 2 4
// 和题目二相似，只不过在promise中并没有resolve或者reject
// 因此promise.then并不会执行，它只有在被改变了状态之后才会执行。

const promise1 = new Promise((resolve, reject) => {
  console.log('promise1')
  resolve('resolve1')
})
const promise2 = promise1.then(res => {
  console.log(res)
})
console.log('1', promise1);
console.log('2', promise2);

// promise1 1 Promise<{resolved}: 'resolved1'> 2 Promise<{pending}> resolved
// promise2是一个新的状态为pending的Promise
// 宏任务(整个script宏任务里的所有同步代码)执行完毕，查找微任务队列，发现promise1.then这个微任务且状态为resolved，执行它。
const fn = () => (new Promise((resolve, reject) => {
  console.log(1);
  resolve('success')
}))
fn().then(res => {
  console.log(res)
})
console.log('start')
// 1 start success
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });
console.log("start");
fn().then(res => {
  console.log(res);
});
// 注意⚠️：之前我们很容易就以为看到new Promise()就执行它的第一个参数函数了，其实这是不对的，就像这两道题中，我们得注意它是不是被包裹在函数当中，如果是的话，只有在函数调用的时候才会执行。

const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});
promise.then((res) => {
  console.log(res);
});
console.log(4);
// 1 2 4  timerStart timerEnd success
// 然后碰到了定时器，将这个定时器中的函数放到下一个宏任务的延迟队列中等待执行
// 跳出promise函数，遇到promise.then，但其状态还是为pending，这里理解为先不执行
// 一轮循环过后，进入第二次宏任务，发现延迟队列中有setTimeout定时器，执行它
// 首先执行timerStart，然后遇到了resolve，将promise的状态改为resolved且保存结果并将之前的promise.then推入微任务队列
// 继续执行同步代码timerEnd
// 宏任务全部执行完毕，查找微任务队列，发现promise.then这个微任务，执行它。
setTimeout(() => {
  console.log('timer1');
  setTimeout(() => {
    console.log('timer3')
  }, 0)
}, 0)
setTimeout(() => {
  console.log('timer2')
}, 0)
console.log('start')
// start timer1 timer2 timer3
setTimeout(() => {
  console.log('timer1');
  Promise.resolve().then(() => {
    console.log('promise')
  })
}, 0)
setTimeout(() => {
  console.log('timer2')
}, 0)
console.log('start')
// start timer1 promise timer2

// 但是如果是定时器timer3的话，它会在timer2后执行，而Promise.then却是在timer2之前执行。

// 你可以这样理解，Promise.then是微任务，它会被加入到本轮中的微任务列表，而定时器timer3是宏任务，它会被加入到下一轮的宏任务中。
Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
});
const timer1 = setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)
console.log('start');
// start promise1 timer1 promise2 timer2
// 刚开始整个脚本作为第一次宏任务来执行，我们将它标记为宏1，从上至下执行

// 遇到Promise.resolve().then这个微任务，将then中的内容加入第一次的微任务队列标记为微1
// 遇到定时器timer1，将它加入下一次宏任务的延迟列表，标记为宏2，等待执行(先不管里面是什么内容)
// 执行宏1中的同步代码start
// 第一次宏任务(宏1)执行完毕，检查第一次的微任务队列(微1)，发现有一个promise.then这个微任务需要执行
// 执行打印出微1中同步代码promise1，然后发现定时器timer2，将它加入宏2的后面，标记为宏3
// 第一次微任务队列(微1)执行完毕，执行第二次宏任务(宏2)，首先执行同步代码timer1
// 然后遇到了promise2这个微任务，将它加入此次循环的微任务队列，标记为微2
// 宏2中没有同步代码可执行了，查找本次循环的微任务队列(微2)，发现了promise2，执行它
// 第二轮执行完毕，执行宏3，打印出timer2
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
})
const promise2 = promise1.then(() => {
  throw new Error('error!!!')
})
console.log('promise1', promise1)
console.log('promise2', promise2)
setTimeout(() => {
  console.log('promise1', promise1)
  console.log('promise2', promise2)
}, 2000)
// promise1 Promise<{pending}> promise2 Promise-pe  Error promise1-resolve promise2-rejected:Error:error!!
// 从上至下，先执行第一个new Promise中的函数，碰到setTimeout将它加入下一个宏任务列表
跳出new Promise，碰到promise1.then这个微任务，但其状态还是为pending，这里理解为先不执行
promise2是一个新的状态为pending的Promise
执行同步代码console.log('promise1')，且打印出的promise1的状态为pending
执行同步代码console.log('promise2')，且打印出的promise2的状态为pending
碰到第二个定时器，将其放入下一个宏任务列表
第一轮宏任务执行结束，并且没有微任务需要执行，因此执行第二轮宏任务
先执行第一个定时器里的内容，将promise1的状态改为resolved且保存结果并将之前的promise1.then推入微任务队列
该定时器中没有其它的同步代码可执行，因此执行本轮的微任务队列，也就是promise1.then，它抛出了一个错误，且将promise2的状态设置为了rejected
第一个定时器执行完毕，开始执行第二个定时器中的内容
打印出'promise1'，且此时promise1的状态为resolved
打印出'promise2'，且此时promise2的状态为rejected
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
    console.log("timer1");
  }, 1000);
  console.log("promise1里的内容");
});
const promise2 = promise1.then(() => {
  throw new Error("error!!!");
});
console.log("promise1", promise1);
console.log("promise2", promise2);
setTimeout(() => {
  console.log("timer2");
  console.log("promise1", promise1);
  console.log("promise2", promise2);
}, 2000);
// promise1l promise1 Promise-P promise2-P timer1
// test5.html:102 Uncaught (in promise) Error: error!!! at test.html:102
// timer2 promise1-resolve:suc promise2-reject:err
```

总结：

Promise的状态一经改变就不能再改变。(见3.1)
.then和.catch都会返回一个新的Promise。(上面的👆1.4证明了)
catch不管被连接到哪里，都能捕获上层未捕捉过的错误。(见3.2)
在Promise中，返回任意一个非 promise 的值都会被包裹成 promise 对象，例如return 2会被包装为return Promise.resolve(2)。
Promise 的 .then 或者 .catch 可以被调用多次, 但如果Promise内部的状态一经改变，并且有了一个值，那么后续每次调用.then或者.catch的时候都会直接拿到该值。(见3.5)
.then 或者 .catch 中 return 一个 error 对象并不会抛出错误，所以不会被后续的 .catch 捕获。(见3.6)
.then 或 .catch 返回的值不能是 promise 本身，否则会造成死循环。(见3.7)
.then 或者 .catch 的参数期望是函数，传入非函数则会发生值透传。(见3.8)
.then方法是能接收两个参数的，第一个是处理成功的函数，第二个是处理失败的函数，再某些时候你可以认为catch是.then第二个参数的简便写法。(见3.9)
.finally方法也是返回一个Promise，他在Promise结束的时候，无论结果为resolved还是rejected，都会执行里面的回调函数。
```js
const promise = new Promise((resolve, reject) => {
  resolve("success1");
  reject("error");
  resolve("success2");
});
promise
.then(res => {
    console.log("then: ", res);
  }).catch(err => {
    console.log("catch: ", err);
  })
// then:suc1
构造函数中的 resolve 或 reject 只有第一次执行有效，多次调用没有任何作用 。验证了第一个结论，Promise的状态一经改变就不能再改变。
const promise = new Promise((resolve, reject) => {
  reject("error");
  resolve("success2");
});
promise
.then(res => {
    console.log("then1: ", res);
  }).then(res => {
    console.log("then2: ", res);
  }).catch(err => {
    console.log("catch: ", err);
  }).then(res => {
    console.log("then3: ", res);
  })
// "catch: " "error"
// "then3: " undefined
验证了第三个结论，catch不管被连接到哪里，都能捕获上层未捕捉过的错误。

至于then3也会被执行，那是因为catch()也会返回一个Promise，且由于这个Promise没有返回值，所以打印出来的是undefined。
Promise.resolve(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    return 3;
  })
  .then(res => {
    console.log(res);
  });
// 1 2
Promise可以链式调用，不过promise 每次调用 .then 或者 .catch 都会返回一个新的 promise，从而实现了链式调用, 它并不像一般我们任务的链式调用一样return this。
上面的输出结果之所以依次打印出1和2，那是因为resolve(1)之后走的是第一个then方法，并没有走catch里，所以第二个then中的res得到的实际上是第一个then的返回值。
且return 2会被包装成resolve(2)。
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('timer')
    resolve('success')
  }, 1000)
})
const start = Date.now();
promise.then(res => {
  console.log(res, Date.now() - start)
})
promise.then(res => {
  console.log(res, Date.now() - start)
})
'timer'
'success' 1001
'success' 1002
当然，如果你足够快的话，也可能两个都是1001。
Promise 的 .then 或者 .catch 可以被调用多次，但这里 Promise 构造函数只执行一次。或者说 promise 内部状态一经改变，并且有了一个值，那么后续每次调用 .then 或者 .catch 都会直接拿到该值。

Promise.resolve().then(() => {
  return new Error('error!!!')
}).then(res => {
  console.log("then: ", res)
}).catch(err => {
  console.log("catch: ", err)
})
"then: " "Error: error!!!"

这也验证了第4点和第6点，返回任意一个非 promise 的值都会被包裹成 promise 对象，因此这里的return new Error('error!!!')也被包裹成了return Promise.resolve(new Error('error!!!'))。
当然如果你抛出一个错误的话，可以用下面👇两的任意一种：
return Promise.reject(new Error('error!!!'));
// or
throw new Error('error!!!')

const promise = Promise.resolve().then(() => {
  return promise;
})
promise.catch(console.err)

.then 或 .catch 返回的值不能是 promise 本身，否则会造成死循环。
因此结果会报错：
Uncaught (in promise) TypeError: Chaining cycle detected for promise #<Promise>

```
3.8


Promise的底层原理：callback回调函数 + 发布订阅模式

链式调用
1）promise的回调只能被捕获一次
2）在then函数加上return，后面的then函数才能继续捕获到

```js
class Promise {
  constructor(fn) {
    // resolve时的回调函数列表
    this.resolveTask = [];
    // reject时的回调函数列表
    this.rejectTask = [];
    // state记录当前状态,共有pending、fulfilled、rejected 3种状态
    this.state = "pending";
    let resolve = value => {
      // state状态只能改变一次，resolve和reject只会触发一种
      if (this.state !== "pending") return;
      this.state = "fulfilled";
      this.data = value;
      // 模拟异步，保证resolveTask事件先注册成功，要考虑在Promise里面写同步代码的情况
      setTimeout(() => {
        this.resolveTask.forEach(cb => cb(value));
      });
    };
    let reject = err => {
      if (this.state !== "pending") return;
      this.state = "rejected";
      this.error = err;
      // 保证rejectTask事件注册成功
      setTimeout(() => {
        this.rejectTask.forEach(cb => cb(err));
      });
    };

    // 关键代码，执行fn函数
    try {
      fn(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(resolveCallback, rejectCallback) {
    // 解决链式调用的情况，继续返回Promise
    return new Promise((resolve, reject) => {
      // 将then传入的回调函数，注册到resolveTask中
      this.resolveTask.push(() => {
        // 重点：判断resolveCallback事件的返回值
        // 假如用户注册的resolveCallback事件又返回一个Promise，将resolve和reject传进去，这样就实现控制了链式调用的顺序
        const res = resolveCallback(this.data);
        if (res instanceof Promise) {
          res.then(resolve, reject);
        } else {
          // 假如返回值为普通值，resolve传递出去
          resolve(res);
        }
      });

      this.rejectTask.push(() => {
        // 同理：判断rejectCallback事件的返回值
        // 假如返回值为普通值，reject传递出去
        const res = rejectCallback(this.error);
        if (res instanceof Promise) {
          res.then(resolve, reject);
        } else {
          reject(res);
        }
      });
    });
  }
}

// 测试
// 打印结果：依次打印1、2
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 500);
}).then(
    res => {
      console.log(res);
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(2);
        }, 1000);
      });
    }
  ).then(data => {
      console.log(data);
    });

class Promise {
  constructor(fn) {
    resolve时的回调函数列表
    this.resolveTasks=[]
    this.rejectTasks=[]
    this.state='pending'
    let resolve=value=>{
      // state状态只能改变一次，resolve和reject只会触发一种
      if (this.state !== 'pending')return
      this.sate='fulfilled'
      this.data=value
      // 模拟异步，保证resolveTasks事件先注册成功，要考虑在Promise里面写同步代码的情况
      setTimeout(() => {
        this.resolveTasks.forEach(cb=>cb(value))
      })
    }
        let reject = err => {
      if (this.state !== "pending") return;
      this.state = "rejected";
      this.error = err;
      // 保证rejectTask事件注册成功
      setTimeout(() => {
        this.rejectTask.forEach(cb => cb(err));
      });
    };

    // 关键代码，执行fn函数
    try {
      fn(resolve,reject)
    }catch(error){
      reject(error)
    }

    then(resolveCallback,rejectCallback){
      // *解决链式调用的情况，继续返回promise*
      return new Promise((resolve,reject)=>{
        将then传入的回调函数，注册到resolveTasks中
        this.resolveTasks.push(()=>{
          重点：判断resolveCallback事件的返回值
          假如用户注册的resolveCallback事件又返回一个Promise，将resolve和reject传进去，这样就实现控制了链式调用的顺序
          const res = resolveCallbak(this.data)
          if(res instanceof Promise){
            res.then(resolve,reject)
          }else{
            resolve(res)
          }
        })
        this.rejectTasks.push(() => {
        // 同理：判断rejectCallback事件的返回值
        // 假如返回值为普通值，reject传递出去
        const res = rejectCallback(this.error);
        if (res instanceof Promise) {
          res.then(resolve, reject);
        } else {
          reject(res);
        }
      })
      })
    }
  }
}

手写race、all
race：返回promises列表中第一个执行完的结果
all：返回promises列表中全部执行完的结果,如果执行到一个失败，就不执行剩下的promise

class Promise {
  // race静态方法，返回promises列表中第一个执行完的结果
  static race(promises) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        // Promise.resolve包一下，防止promises[i]不是Promise类型
        Promise.resolve(promises[i])
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      }
    });
  }

  // all静态方法， 返回promises列表中全部执行完的结果
  static all(promises) {
    let result = [];
    let index = 0;
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        Promise.resolve(promises[i])
          .then(res => {
            // 输出结果的顺序和promises的顺序一致
            result[i] = res;
            index++;
            if (index === promises.length) {
              resolve(result);
            }
          })
          .catch(err => {
            reject(err);
          });
      }
    });
  }
}

class Promise{
  static race(promises){
    return new Promise((resolve,reject)=>{

    })
  }
}

手写retry
/*
* @param {function} fn - 方法名
* @param {number} delay - 延迟的时间
* @param {number} times - 重发的次数
*/
function retry(fn, delay, times) {
  return new Promise((resolve, reject) => {
    function func() {
      Promise.resolve(fn()).then(res => {
          resolve(res);
        })
        .catch(err => {
          // 接口失败后，判断剩余次数不为0时，继续重发
          if (times !== 0) {
            setTimeout(fn, delay);
            times--;
          } else {
            reject(err);
          }
        });
    }
    func();
  });
}
```

# race
```js
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
A: "one"
B: "two"
C: "two" "one"
D: "one" "two"
答案
答案: B
当我们向Promise.race方法中传入多个Promise时，会进行 优先 解析。在这个例子中，我们用setTimeout给firstPromise和secondPromise分别设定了 500ms 和 100ms 的定时器。这意味着secondPromise会首先解析出字符串two。那么此时res参数即为two，是为输出结果。
```

```js
Promise.resolve(5)
A: 5
B: Promise {<pending>: 5}
C: Promise {<fulfilled>: 5}
D: Error
答案
答案: C
我们可以将我们想要的任何类型的值传递Promise.resolve，无论是否promise。 该方法本身返回带有已解析值的Promise (<fulfilled>)。 如果您传递常规函数，它将是具有常规值的已解决promise。 如果你通过了 promise，它将是一个已经 resolved 的且带有传的值的 promise。

上述情况，我们传了数字 5，因此返回一个 resolved 状态的 promise，resolve 值为5
```
# all
```js
const promise1 = Promise.resolve('First')
const promise2 = Promise.resolve('Second')
const promise3 = Promise.reject('Third')
const promise4 = Promise.resolve('Fourth')

const runPromises = async () => {
	const res1 = await Promise.all([promise1, promise2])
	const res2  = await Promise.all([promise3, promise4])
	return [res1, res2]
}

runPromises()
	.then(res => console.log(res))
	.catch(err => console.log(err))
A: [['First', 'Second'], ['Fourth']]
B: [['First', 'Second'], ['Third', 'Fourth']]
C: [['First', 'Second']]
D: 'Third'
答案
答案: D
Promise.all 方法可以并行式运行 promise。如果其中一个 promise 失败了，Promise.all 方法会带上被 reject 的 promise 的值_rejects_。在这个例子中， promise3 带着 "Third" 值 reject。我们在调用 runPromises 时在 runPromises 函数内部的 catch 方法去捕获任意 error 从而捕获到被 reject 的值。因为 promise3 带着 "Third" 被 reject，所以只有 "Third" 打印。
```
