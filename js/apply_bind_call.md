
# call 和 apply 的区别是啥，哪个性能更好些?

Function.prototype.apply 和 Function.prototype.call 的作用是一样的，区别在于传入参数的不同；

*第一个参数都是指定函数体内 this 的指向*；
第二个参数不同，*apply 是传入带下标的集合、数组、或类数组，apply 把它作为参数传给函数*；而call 从第二个开始传入的参数不固定，也会作为参数传给函数；

call的性能比 apply 更好，call 传入参数的格式，正是内部所需格式；

<https://juejin.cn/post/6844904083707396109>
*手写*它们一遍

<https://juejin.cn/post/7146973901166215176>

# 三者的区别

1）三者都可以*显式绑定函数的this指向*

2）第一个参数都是this要指向的对象，若该参数为undefined或null，this则默认指向全局window

3）传参不同：apply是数组、call是参数列表，而bind可以分为多次传入，实现参数的合并

4）call、apply是立即执行，而bind是返回绑定this后的函数，如果这个新函数作为构造函数被调用，那么this不再指向传入给bind的第一个参数，而是指向新生成的对象。

作者：海阔_天空
链接：<https://juejin.cn/post/7146973901166215176>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```js
// *手写call*
Function.prototype.Call = function(context, ...args) {
  // context为undefined或null时，则this默认指向全局window
  if (context === undefined || context === null) {
    context = window;
  }
  // 利用Symbol创建一个唯一的key值，防止新增加的属性与obj中的属性名重复
  let fn = Symbol();
  // this指向调用call的函数
  context[fn] = this;
  // 隐式绑定this，如果执行obj.foo(), 那么foo内的this指向obj-----关键语句！！
  let res = context[fn](...args);
  // 执行完后，删除新增加的属性
  delete context[fn];
  return res;
};

// apply与call相似，只有第二个参数是一个数组
Function.prototype.Apply = function(context, args) {
  if (context === undefined || context === null) {
    context = window;
  }
  let fn = Symbol();
  context[fn] = this;
  let res = context[fn](...args);
  delete context[fn];
  return res;
};

// bind要考虑返回的函数，作为构造函数被调用的情况
Function.prototype.Bind = function(context, ...args) {
  if (context === undefined || context === null) {
    context = window;
  }
  let fn = this;
  let f = Symbol();
  const result = function(...args1) {
    if (this instanceof fn) {
      // result如果作为构造函数被调用，this指向的是new出来的对象
      // this instanceof fn，判断new出来的对象是否为fn的实例
      this[f] = fn;
      let res = this[f](...args, ...args1);
      delete this[f];
      return res;
    } else {
      // bind返回的函数作为普通函数被调用时
      context[f] = fn;
      let res = context[f](...args, ...args1);
      delete context[f];
      return res;
    }
  };
  // 如果绑定的是构造函数 那么需要继承构造函数原型属性和方法
  // 实现继承的方式: 使用Object.create
  result.prototype = Object.create(fn.prototype);
  return result;
};
```

# 说一说call apply bind的作用和区别？

得分点 *bind改变this指向、不直接调用、call和apply改变this指向并直接调用；apply接收的第二个参数为数组 、call用于对象的继承、伪数组转换成真数组*；

*apply用于找出数组中的最大值和最小值以及数组合并、bind用于vue或者react框架中改变函数的this指向*。

标准回答 *call、apply、bind的作用都是改变函数运行时的this指向。bind在改变this指向时，返回一个改变执行上下文的函数，不会立即执行函数，而是需要调用该函数时再调用即可，但是call和apply在改变this指向的同时执行了该函数。*

bind只接收一个参数，就是this指向的执行上文。 call、apply接收多个参数，第一个参数都是this指向的执行上下文，后面的参数都是，作为要改变this指向的函数的传入参数。

但是call和apply的参数格式不同，call是一个参数对应一个原函数的参数，但apply第二个参数是数组，数组中每个元素代表函数接收的参数，数组有几个元素函数就接收几个元素。

加分回答 *call的应用场景是：对象的继承，在子构造函数中，用call调用父构造函数，改变了this指向，就可以继承父构造函数的属性：*

```js
function superClass () {
  this.a = 1;
  this.print = function () {
    console.log(this.a);
  }
}
function subClass () {
  // 执行superClass，并将superClass方法中的this指向subClass
  superClass.call(this);
  this.print();
}
subClass();
```

*借用Array原型链上的slice方法，把伪数组转换成真数组:*

```js

let domNodes = Array.prototype.slice.call(document.getElementsByTagName("div"));
```

*apply的应用场景*：

```js

// 获取数组中最大、最小的一项
let max = Math.max.apply(null, array);
let min = Math.min.apply(null, array);
// 实现两个数组合并
let arr1 = [1, 2, 3]; let arr2 = [4, 5, 6]; Array.prototype.push.apply(arr1, arr2);
console.log(arr1); // [1, 2, 3, 4, 5, 6]
```

*bind的应用场景：在vue或者react框架中，使用bind将定义的方法中的this指向当前类*。

```js
const person = { name: 'Lydia' }

function sayHi(age) {
  console.log(`${this.name} is ${age}`)
}

sayHi.call(person, 21)
sayHi.bind(person, 21)
A: undefined is 21 Lydia is 21
B: function function
C: Lydia is 21 Lydia is 21
D: Lydia is 21 function
答案
答案: D
```

使用这两种方法，我们都*可以传递我们希望 this 关键字引用的对象*。但是，.call 是立即执行的。

.bind 返回*函数的副本，但带有绑定上下文*！它不是立即执行的。
