compose
*在函数式编程当中，有一个很重要的概念就是函数组合，实际上就是像管道一样连接处理数据的函数，然后让数据穿过管道得到最终结果。在多个框架源码中都有用到，比如redux、koa中多次遇到这个方法*。

效果： 将一系列函数，通过compose函数组合起来，像管道一样连接起来，比如函数结合[f, g, h ]，通过compose最终达到这样的效果： f(g(h()))。compose函数要求：可执行同步方法，也可执行异步方法，两者都可以兼容。

手写compose函数


作者：海阔_天空
链接：https://juejin.cn/post/7146973901166215176
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```js
function compose(list) {
  // 取出第一个函数，当做reduce函数的初始值
  const init = list.shift();
  return function(...arg) {
    // 执行compose函数，返回一个函数
    return list.reduce(
      (pre, cur) => {
        // 返回一个promise实例，外部就可以通过then获取
        return pre.then(result => {
          // pre始终为一个promise实例，result为累计值
          // 在前一个函数的then中，执行当前的函数，并返回一个promise实例，实现累计传递的效果
          return cur.call(null, result);
        });
      },
      // Promise.resolve可以将非promise实例转为promise实例（一种兼容处理）
      Promise.resolve(init.apply(null, arg))
    );
  };
}

// 同步方法案例
let sync1 = data => {
  console.log("sync1");
  return data;
};
let sync2 = data => {
  console.log("sync2");
  return data + 1;
};
let sync3 = data => {
  console.log("sync3");
  return data + 2;
};
let syncFn = compose([sync1, sync2, sync3]);
syncFn(0).then(res => {
  console.log(res);
});
// 依次打印 sync1 → sync2 → sync3 → 3

// 异步方法案例
let async1 = data => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("async1");
      resolve(data);
    }, 1000);
  });
};
let async2 = data => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("async2");
      resolve(data + 1);
    }, 1000);
  });
};
let async3 = data => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("async3");
      resolve(data + 2);
    }, 1000);
  });
};
let composeFn = compose([async1, async2, async3]);
composeFn(0).then(res => {
  console.log(res);
});
// 依次打印 async1 → async1 → async1 → 3

```
