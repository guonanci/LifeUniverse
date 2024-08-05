# sleep

promise 版本

# sleepSync

while 实现，同步代码

sleep函数的多种实现
JS没有语言内置的休眠（sleep or wait）函数，所谓的sleep只是实现一种延迟执行的效果

等待指定时间后再执行对应方法

```js
// 方法一：
// 这种实现方式是利用一个伪死循环阻塞主线程。
// 因为JS是单线程的，所以通过这种方式可以实现真正意义上的sleep
function sleep1(fn, time) {
  let start = new Date().getTime();
  while (new Date().getTime() - start < time) {
    continue;
  }
  fn();
}

// 方式二： 定时器
function sleep2(fn, time) {
  setTimeout(fn, time);
}

// 方式三： promise
function sleep3(fn, time) {
  new Promise(resolve => {
    setTimeout(resolve, time);
  }).then(() => {
    fn();
  });
}

// 方式四： async await
async function sleep4(fn, time) {
  await new Promise(resolve => {
    setTimeout(resolve, time);
  });
  fn();
}
function fn() { console.log("fn")}

sleep1(fn, 2000);
sleep2(fn, 2000);
sleep3(fn, 2000);
sleep4(fn, 2000);

```
实现一个 sleep 函数
比如 sleep(1000) 意味着等待1000毫秒，可从 Promise、Generator、Async/Await 等角度实现

```js
//Promise
function sleep1(time){
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve()
    },time)
  })
}
sleep1(1000).then(()=>console.log('sleep1'))
//Generator
function* sleep2(time){
  return yield sleep1(time)
}
const s=sleep2(150)
s.next().value.then(()=>console.log('sleep2'))
//Async/Await
async function sleep3(time){
  await sleep1(time)
}
(async ()=>{
  await sleep3(2000)
  log('3')
})()
```
