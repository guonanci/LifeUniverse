await on top of the module or in asyncFn.

https://juejin.cn/post/7146973901166215176

1）async函数是generator（迭代函数）的语法糖
2）async函数返回的是一个Promise对象，有无值看有无return值
3）await关键字只能放在async函数内部，await关键字的作用 就是获取Promise中返回的resolve或者reject的值
4）async、await要结合try/catch使用，防止意外的错误

generator
1）generator函数跟普通函数在写法上的区别就是，多了一个星号*
2）只有在generator函数中才能使用yield，相当于generator函数执行的中途暂停点
3）generator函数是不会自动执行的，每一次调用它的next方法，会停留在下一个yield的位置

```js
const getData = () => new Promise(resolve => setTimeout(() => resolve("data"), 1000));
async function test() {
  const data = await getData();
  console.log("data: ", data);
  const data2 = await getData();
  console.log("data2: ", data2);
  return "success";
}
test().then(res => console.log(res))

将上面示例转化为generator函数

function* testG(){
  // await被编译成了yield
  const data = yield getData()
  ...
}
手动执行generator函数

var gen = testG();
var dataPromise = gen.next();
dataPromise.value.then(value1 => {
  // data1的value被拿到了，继续调用next
  var data2Promise = gen.next(value1);
  data2Promise.value.then(value2 => {
    // data2的value拿到了 继续调用next并且传递value2
    gen.next(value2);
  });
});

// 手写async，await
function generatorToAsync(generatorFn) {
  // 返回的是一个新的函数
  return function() {
    // 先调用generator函数 生成迭代器
    // 对应 var gen = testG()
    const gen = generatorFn.apply(this, arguments);

    // 返回一个Promise, 因为外部是用.then的方式 或者await的方式去使用这个函数的返回值
    return new Promise((resolve, reject) => {
      // 内部定义一个step函数 用来一步步next
      function step(key, arg) {
        let res;

        // 这个方法需要包裹在try catch中
        // 如果报错了 就把promise给reject掉 外部通过.catch可以获取到错误
        try {
          res = gen[key](arg); // 这里有可能会执行返回reject状态的Promise
        } catch (error) {
          return reject(error); // 报错的话会走catch，直接reject
        }

        // gen.next() 得到的结果是一个 { value, done } 的结构
        const { value, done } = res;
        if (done) {
          // 如果done为true，说明走完了，进行resolve(value)
          return resolve(value);
        } else {
          // 如果done为false，说明没走完，还得继续走

          // value有可能是：常量\Promise；
          // Promise有可能是成功或者失败
          return Promise.resolve(value).then(
            val => step("next", val),
            err => step("throw", err)
          );
        }
      }

      step("next"); // 第一次执行
    });
  };
}

// 测试generatorToAsync

// 1秒后打印data1 再过一秒打印data2 最后打印success
const getData = () =>
  new Promise(resolve => setTimeout(() => resolve("data"), 1000));
  var test = generatorToAsync(function* testG() {
  // await被编译成了yield
    const data = yield getData();
    console.log("data1: ", data);
    const data2 = yield getData();
    console.log("data2: ", data2);
    return "success";
  }
);

test().then(res => console.log(res));

function generatorToAsync(generatorFn){
  // 返回的是一个新函数
  return function(){

  }
}
```

```js
async function getData() {
  return await Promise.resolve("I made it!");
}

const data = getData();
console.log(data);
A: "I made it!"
B: Promise {<resolved>: "I made it!"}
C: Promise {<pending>}
D: undefined
答案
答案: C
异步函数始终返回一个 promise。await仍然需要等待 promise 的解决：当我们调用getData()并将其赋值给data，此时data为getData方法返回的一个挂起的 promise，该 promise 并没有解决。

如果我们想要访问已解决的值"I made it!"，可以在data上使用.then()方法：

data.then(res => console.log(res))

这样将打印 "I made it!"


```

```js
头条、微医）Async/Await 如何通过同步的方式实现异步
Async/Await 是一个自执行的 generate 函数。利用 generate 函数的特性把异步的代码写成“同步”的形式。

var fetch = require("node-fetch");

function *gen() { // 这里的 * 可以看成 async
  var url = "https://api.github.com/users/github";
  var result = yield fetch(url); // 这里的 yield 可以看成 await
  console.log(result.bio);
}

var g = gen();
var result = g.next();
result.value.then(data => data.json()).then(data  => g.next(data));
```
# JS异步解决方案的发展历程、优缺点
*回调函数的优点是：解决了同步的问题（整体任务执行时长）；而缺点是回调地狱，不能用 try catch 捕获错误，不能 return*;

*Promise的优点是解决了回调地狱的问题；缺点是：无法取消 Promise，需要通过回调函数来捕获错误*；

Generator
特点：可以控制函数的执行。

*Async/Await的优点是：代码清晰，不用像 Promise 写一大堆 then 链，处理了回调地狱的问题；其缺点是：await 将异步代码改造成同步代码，如果多个异步操作之间没有依赖性，却使用await的话，会降低性能*；
