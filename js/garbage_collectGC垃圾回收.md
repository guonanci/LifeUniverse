```js
let config = {
  alert: setInterval(() => {
    console.log('Alert!')
  }, 1000)
}

config = null
A: setInterval 的回调不会被调用
B: setInterval 的回调被调用一次
C: setInterval 的回调仍然会被每秒钟调用
D: 我们从没调用过 config.alert(), config 为 null
答案
答案: C
一般情况下当我们将对象赋值为 null，那些对象会被进行 垃圾回收（garbage collected） 因为已经没有对这些对象的引用了。然而，setInterval的参数是一个箭头函数（所以上下文绑定到对象 config 了），回调函数仍然保留着对 config的引用。只要存在引用，对象就不会被垃圾回收。因为没有被垃圾回收，setInterval 的回调每 1000ms (1s) 会被调用一次。
```


# 简单说说 js 中有哪几种内存泄露的情况
意外的全局变量；
闭包；
未被清空的定时器；
未被销毁的事件监听；
DOM 引用；
