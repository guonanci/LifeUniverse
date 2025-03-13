https://segmentfault.com/a/1190000039366748
https://juejin.cn/post/6844903474212143117
https://juejin.cn/post/7146973901166215176

*闭包是一个可以访问外部作用域中变量的内部函数，这些被引用的变量直到闭包被销毁才会被销毁。闭包使得timer定时器、事件处理、AJAX请求等异步任务更容易。另外，可以通过闭包来达到封装性*

*闭包是一个可以访问外部作用域的内部函数，即使这个外部作用域已经执行结束。*

*一个函数内部有外部变量的引用，比如函数嵌套函数时，内层函数引用了外层函数作用域下的变量，就形成了闭包。最常见的场景是：函数作为一个函数的参数传递，或者函数作为一个函数的返回值*。
*闭包形成的原理：作用域链，当前作用域可以访问上级作用域中的变量。闭包解决的问题：能够让函数作用域中的变量，在函数执行结束后不被销毁，同时也能在函数外部，可以访问函数内部的局部变量。闭包带来的问题：由于垃圾回收器不会销毁闭包中的变量，于是就造成了内存泄露，泄露积累多了就容易导致内存溢出*。
*闭包的应用：能够模仿块级作用域，能够实现柯里化，在构造函数中定义特权方法，Vue中数据响应式Observer中使用闭包等*。

作用域决定这个变量的生命周期及其可见性，当我们创建了一个函数或者 {} 块，就会生成一个新的作用域。需要注意的是，通过 var 创建的变量只有函数作用域，而通过 let 和 const 创建的变量既有函数作用域，也有块作用域。


*闭包的第一个作用是，让局部变量的值始终保持在内存中；第二个作用是，保护内部变量，不让外部访问到。最常见的案例：函数节流和防抖*

闭包的*垃圾回收*：

副作用：不合理的使用闭包，会造成内存泄露，就是该内存空间使用完毕后未被回收。

直到闭包被销毁时，闭包中引用的变量才会被垃圾回收。

```js
// 原始题目
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i); // 1s后打印出5个5
  }, 1000);
}

// ⬅️利用闭包，将上述题目改成1s后，打印0,1,2,3,4

// 方法一：
for (var i = 0; i < 5; i++) {
  (function(j) {
    setTimeout(function timer() {
      console.log(j);
    }, 1000);
  })(i);
}

// 方法二：
// 利用setTimeout的第三个参数，第三个参数将作为setTimeout第一个参数的参数
for (var i = 0; i < 5; i++) {
  setTimeout(function fn(i) {
    console.log(i);
  }, 1000, i); // 第三个参数i,将作为fn的参数
}

// ⬅️将上述题目改成每间隔1s后，依次打印0,1,2,3,4
for (var i = 0; i < 5; i++) {
  setTimeout(function fn(i) {
    console.log(i);
  }, 1000 * i, i);
}
```
```js



https://juejin.cn/post/6844903769646317576 https://juejin.cn/post/6844903474212143117

嵌套作用域
在 Javascript 中函数里面可以嵌套函数，如下：
(function autorun(){
    let x = 1;
    function log(){
       console.log(x);
    }
    log();
})();

log() 即是一个嵌套在 autorun() 函数里面的函数。在 log() 函数里面可以通过外部函数访问到变量 x。此时，log() 函数就是一个闭包。
闭包就是内部函数，我们可以通过在一个函数内部或者 {} 块里面定义一个函数来创建闭包。
外部函数作用域
内部函数可以访问外部函数中定义的变量，即使外部函数已经执行完毕。如下：
(function autorun(){
    let x = 1;
    setTimeout(function log(){
      console.log(x);
    }, 10000);
})();
并且，内部函数还可以访问外部函数中定义的形参，如下：
(function autorun(p){
    let x = 1;
    setTimeout(function log(){
      console.log(x);//1
      console.log(p);//10
    }, 10000);
})(10);

外部块作用域
内部函数可以访问外部块中定义的变量，即使外部块已执行完毕，如下：
{
    let x = 1;
    setTimeout(function log(){
      console.log(x);
    }, 10000);
}

词法作用域

词法作用域是指内部函数在定义时，就决定了其外部作用域。

看如下代码：
(function autorun(){
    let x = 1;
    function log(){
      console.log(x);
    };

    function run(fn){
      let x = 100;
      fn();
    }

    run(log);//1
})();
```
log() 函数是一个闭包，它在这里访问的是 autorun() 函数中的 x 变量，而不是 run 函数中的变量。

*闭包的外部作用域是在其定义的时候已决定，而不是执行的时候*。
autorun() 的函数作用域即是 log() 函数的词法作用域。

外部作用域执行完毕后

当外部作用域执行完毕后，内部函数还存活（仍在其他地方被引用）时，闭包才真正发挥其作用。譬如以下几种情况：

在异步任务例如 timer 定时器，事件处理，Ajax 请求中被作为回调

被外部函数作为返回结果返回，或者返回结果对象中引用该内部函数

考虑如下的几个示例：
Timer
```js
(function autorun(){
    let x = 1;
    setTimeout(function log(){
      console.log(x);
    }, 10000);
})();





// intelligence multiply
function multiply(num1, num2) {
  // ...
}
multiply(4, 5) // 20
multiply(5, 8) // 40

const double = multiply(2)
double(5) // 10

const triple = multiply(3)
triple(2) // 6

const quadruple = multiple(4)
const quintuple = multiple(5)












function multiply(num1, num2) {
  if (num2 !== undefined) return num1 * num2
  return function doMultiply(nextTimeNum) {
    return num1 * nextTimeNum
  }
}
```

如果 num2 参数不是 undefined，则意味着已经只使用一个参数调用了 multiply 函数。这时就要返回一个函数 doMultiply。稍后调用该函数时，将执行实际的乘法运算。
doMultiply()是闭包，因为他从 multiply 作用域得到了 num1 变量。


```js
(function autorun(){
    let x = 1;
    $("#btn").on("click", function log(){
      console.log(x);
    });
})();
当变量 x 在事件处理函数中被使用时，它将一直存活直到该事件处理函数被移除。
(function autorun(){
    let x = 1;
    fetch("http://").then(function log(){
      console.log(x);
    });
})();
变量 x 将一直存活到接收到后端返回结果，回调函数被执行。
在已上几个示例中，我们可以看到，log() 函数在父函数执行完毕后还一直存活着，log() 函数就是一个闭包。

除了 timer 定时器，事件处理，Ajax 请求等比较常见的异步任务，还有其他的一些异步 API 比如 HTML5 Geolocation，WebSockets , requestAnimationFrame()也将使用到闭包的这一特性。

变量的生命周期取决于，闭包的生命周期。被闭包引用的外部作用域中的变量，将一直存活，直到闭包函数被销毁。如果一个变量被多个闭包所引用，那么直到所有闭包被垃圾回收后，该变量才会被销毁。


闭包与循环
闭包只存储外部变量的引用，而不会拷贝这些外部变量的值。
查看如下示例：
function initEvents(){
  for(var i=1; i<=3; i++){
    $("#btn" + i).click(function showNumber(){
      alert(i);//4
    });
  }
}
initEvents();

在这个示例中，我们创建了3个闭包，皆引用了同一个变量 i，且这三个闭包都是事件处理函数。由于变量 i 随着循环自增，因此最终输出的都是同样的值。
修复这个问题最简单的方法是在 for 语句块中使用 let 变量声明，这将在每次循环中为 for 语句块创建一个新的局部变量。如下：
function initEvents(){
  for(let i=1; i<=3; i++){
    $("#btn" + i).click(function showNumber(){
      alert(i);//1 2 3
    });
  }
}
initEvents();

但是，如果变量声明在 for 语句块之外，即使采用let声明，所有闭包还是会引用同一个变量，最终输出的还是同一个值。


```

对象与私有状态

以上示例中，我们可以创建一个拥有私有状态的函数。同时，我们也可以创建，多个拥有同一私有状态的函数。基于此，我们还可以创建一个拥有私有状态的对象。
```js

function TodoStore(){
  let todos = [];

  function add(todo){
    todos.push(todo);
  }
  function get(){
    return todos.filter(isPriorityTodo).map(toTodoViewModel);
  }

  function isPriorityTodo(todo){
     return todo.type === "RE" && !todo.completed;
  }

  function toTodoViewModel(todo) {
     return { id : todo.id, title : todo.title };
  }

  return Object.freeze({
    add,
    get
  });
}
TodoStore() 函数返回了一个拥有私有状态的对象。在外部，我们无法访问私有的 todos 变量，并且 add 和 get 这两个闭包拥有相同的私有状态。在这里，TodoStore() 是一个工厂函数。



```
*为了更好的理解，我们将内部函数拆成闭包和纯函数两个方面：闭包是那些引用了外部作用域中变量的函数；纯函数是那些没有引用外部作用域中变量的函数，它们通常返回一个值，并且没有副作用*。

在上述例子中，add() 和 get() 函数是闭包，而 isPriorityTodo() 和 toTodoViewModel() 则是纯函数。


https://medium.freecodecamp.org/why-you-should-give-the-closure-function-another-chance-31253e44cfa0


https://juejin.cn/post/6844903474212143117
相比而言，笔者更倾向于下面这样看起来更简洁的代码，要知道编程风格也是很多面试官重点考察的点，*代码阅读时的颗粒度更小，模块化更好，无疑会是加分点*。
```js


const tasks = []; // 这里存放异步操作的 Promise
const output = (i) => new Promise((resolve) => {
    setTimeout(() => {
        console.log(new Date, i);
        resolve();
    }, 1000 * i);
});

// 生成全部的异步操作
for (var i = 0; i < 5; i++) {
    tasks.push(output(i));
}

// 异步操作完成之后，输出最后的 i
Promise.all(tasks).then(() => {
    setTimeout(() => {
        console.log(new Date, i);
    }, 1000);
});
```
我们都知道使用 Promise 处理异步，比回调机制的代码更具可读性，但是Promise的问题也很明显，也就是，如果没有处理 Promise 的 reject，会导致错误被丢进黑洞。好在新版的 Chrome 和 Node 7.x 能对未处理的异常，给出 Unhandled Rejection Warning，而排查这些错误还需要一些特别的技巧（浏览器、Node.js）。
```js
// 模拟其他语言中的 sleep，实际上可以是任何异步操作
const sleep = (timeountMS) => new Promise((resolve) => {
    setTimeout(resolve, timeountMS);
});

(async () => {  // 声明即执行的 async 函数表达式
    for (var i = 0; i < 5; i++) {
        if (i > 0) {
            await sleep(1000);
        }
        console.log(new Date, i);
    }

    await sleep(1000);
    console.log(new Date, i);
})();
```
则要明确合格前端工程师应该具备的特征：扎实的语言基础、与时俱进的能力、强大的技术自驱力，

```js
function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }

  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }

  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // => ?

输出：'Count is 0'

increment() 函数被调用 3 次，将 count 增加到 3。

message 变量存在于 createIncrement() 函数的作用域内。其初始值为 'Count is 0'。但即使 count 变量已经增加了几次，message 变量的值也始终为 'Count is 0'。

log() 函数是一个闭包，它从 createIncrement() 作用域中获取 message 变量。 console.log(message) 输出录'Count is 0'到控制台。


6. 重新封装
下面的函数 createStack() 用于创建栈结构：

function createStack() {
  return {
    items: [],
    push(item) {
      this.items.push(item);
    },
    pop() {
      return this.items.pop();
    }
  };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5

stack.items; // => [10]
stack.items = [10, 100, 1000]; // 栈结构的封装被破坏了
它能正常工作，但有一个小问题，因为暴露了 stack.items 属性，所以任何人都可以直接修改 items 数组。

这是一个大问题，因为它破坏了栈的封装：应该只有 push() 和 pop() 方法是公开的，而 stack.items 或其他任何细节都不能被访问。

使用闭包的概念重构上面的栈实现，这样就无法在 createStack() 函数作用域之外访问 items 数组：

function createStack() {
  // 把你的代码写在这里
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5

stack.items; // => undefined
答案
以下是对 createStack() 的重构：

function createStack() {
  const items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    }
  };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5

stack.items; // => undefined
items 已被移至 createStack() 作用域内。

这样修改后，从 createStack() 作用域的外部无法访问或修改 items 数组。现在 items 是一个私有变量，并且栈被封装：只有 push() 和 pop() 方法是公共的。

push() 和 pop() 方法是闭包，它们从 createStack() 函数作用域中得到 items 变量。



```

得分点 变量背包、作用域链、局部变量不销毁、函数体外访问函数的内部变量、内存泄漏、内存溢出、形成块级作用域、柯里化、构造函数中定义特权方法、Vue中数据响应式Observer

标准回答 闭包 一个函数和词法环境的引用捆绑在一起，这样的组合就是闭包（closure）。一般就是一个函数A，return其内部的函数B，被return出去的B函数能够在外部访问A函数内部的变量，这时候就形成了一个B函数的变量背包，A函数执行结束后这个变量背包也不会被销毁，并且这个变量背包在A函数外部只能通过B函数访问。


*闭包形成的原理：作用域链，当前作用域可以访问上级作用域中的变量。闭包解决的问题：能够让函数作用域中的变量，在函数执行结束后不被销毁，同时也能在函数外部，可以访问函数内部的局部变量。闭包带来的问题：由于垃圾回收器不会销毁闭包中的变量，于是就造成了内存泄露，泄露积累多了就容易导致内存溢出*。

加分回答*闭包的应用：能够模仿块级作用域，能够实现柯里化，在构造函数中定义特权方法，Vue中数据响应式Observer中使用闭包等*。

# 内存泄漏&闭包的内存回收机制
https://juejin.cn/post/7196636673694285882 闭包不能多用吗？ 内存回收 闭包用多了会造成内存泄漏？闭包，是JS中的一大难点；网上有很多关于闭包会造成内存泄露的描述，说闭包会使其中的变量的值，始终保持在内存中，一般都不太推荐使用闭包。

而项目中确实有很多使用闭包的场景，比如函数的节流与防抖

那么闭包用多了，会造成内存泄露吗？

以下案例：A页面引入了一个 debounce 防抖函数，跳转到 B 页面后，该防抖函数中闭包所占的内存会被 gc 回收吗？
该案例中，通过变异版的防抖函数来演示闭包的内存回收，此函数中引用了一个内存很大的对象 info（42M的内存），便于明显地对比内存的前后变化
```js
// util.js`
export const debounce = (fn, time) => {
  let info = {
     arr: new Array(10 * 1024 * 1024).fill(1),
     timer: null
  };
  return function (...args) {
    info.timer && clearTimeout(info.timer);
    info.timer = setTimeout(() => {
      fn.apply(this, args);
    }, time);
  };
};
2） A 页面中引入并使用该防抖函数
import { debounce } from './util';
mounted() {
    this.debounceFn = debounce(() => {
      console.log('1');
    }, 1000)
}

抓取 A 页面内存： 57.1M

```
问题： 从 A 跳转到 B 后，该函数所占的内存会被释放掉吗？

此时，抓取 B 页面内存： 15.3M


前后对比发现，从 A 跳转到 B 后，该函数所占的内存会被释放掉，证明闭包没有造成内存泄露
事实证明：“闭包会使其中的变量的值始终保持在内存中” 这句话是错误的，闭包所占的内存依然会被 gc 回收。

下面一起来研究下闭包的内存回收机制

闭包：*一个函数内部有外部变量的引用，比如函数嵌套函数时，内层函数引用了外层函数作用域下的变量，就形成了闭包。最常见的场景是：函数作为一个函数的参数，或者函数作为一个函数的返回值。*

闭包示例：
function fn() {
  let num = 1;
  return function f1() {
    console.log(num);
  };
}
let a = fn();
a();

上面代码中，a 引用了 fn 函数返回的 f1 函数，f1 函数中引入了内部变量 num，导致变量 num 滞留在内存中

打断点调试一下

展开函数f的Scope选项，会发现有local局部作用域、Closure闭包、Global，展开Closure，会发现该闭包访问的变量是num，包含num的函数为fn。
总结来说，函数f的作用域中，访问到了fn 函数中的 num 这个局部变量，从而形成了闭包

所以，如果真正理解好闭包，需要先了解闭包的内存引用，并且要先搞明白这几个知识点：
- 函数作用域
- 执行上下文
- 变量对象、活动对象

函数的内存表示
```js
let a='x' // 内存结构：变量a，引用，根对象window，字符串对象'x'
function fn() {
  let num=1
} // [[scope]]属性-函数fn的作用域链，全局作用域下global指向window。
```
*函数的作用域链是在创建时就确定了，js引擎会创建函数时，在该对象上添加一个名叫作用域链的属性，它包含当前函数的作用域以及父作用域，一直到全局作用域。函数执行时，js引擎会创建执行上下文，该执行上下文会包含函数的作用域链（上图中红色的线），其次包含函数内部定义的变量、参数等。在执行时，会首先查找当前作用域下的变量，如果找不到，就会沿着作用域链中查找，一直到全局作用域*。
# 垃圾回收
两种方法：标记清除、引用计数reference counting，‘引用表’保存了内存里所有资源（各种值）的引用次数，0就表示不再用到，可以释放内存。如果不再需要一个值，引用数却不为0，垃圾回收机制就无法释放这块内存，会造成内存泄漏。
*判断一个对象是否会被垃圾的标准*：从全局对象window开始，顺着引用表能找到的都不是内存垃圾，不会被回收掉。只有那些找不到的对象才是内存垃圾，才会在适当时机被gc回收.

debounce的函数作用域、util.js所在模块的作用域
当从A页面切换到B页面时，A页面被销毁，debounce函数的引用会被释放掉，此时会销毁该函数的作用域，从window对象上沿着引用表查不到info对象，info对象被gc回收

项目中大量使用闭包，并不会造成内存泄漏，除非是错误写法；绝大多数情况，*只要引用闭包的函数被正常销毁，那么闭包所占内存都会被gc自动回收，特别是现在SPA项目的盛行，用户切换页面时，老页面组件会被框架自动清理*。

如果把 info 变量放到 debounce 函数外部，从 A 页面跳转到 B 页面后，该 info 变量所占的内存会被释放掉吗？
此时，抓取 B 页面内存： 58.1M
```js
// util.js`
let info = {
  arr: new Array(10 * 1024 * 1024).fill(1),
  timer: null
};
export const debounce = (fn, time) => {
  return function (...args) {
    info.timer && clearTimeout(info.timer);
    info.timer = setTimeout(() => {
      fn.apply(this, args);
    }, time);
  };
};
```
前后对比发现，B 页面原始内存为 15.3M，现在为 58.1M，内存增大约了 42M，说明 info 变量所占的内存没有被释放掉

为什么会这样呢？

对该代码进行断点调试
当从 A 页面切换到 B 页面时，虽然 debounce 函数被销毁，但 info 是 util.js 该模块的局部变量（如同全局变量），所以并没有被销毁 ，只要不刷新页面，util.js 模块就不会被销毁
之前我把这种情况当成了闭包所造成的内存泄露，其实是局部变量导致的，感谢评论区小伙伴的指正😘





好的，我现在要处理用户关于闭包面试题的问题。用户提供的搜索结果中有多个相关文档，我需要综合这些信息来生成一个全面的答案。首先，我需要理解闭包的核心概念，以及在面试中常见的考察点。

根据搜索结果，闭包涉及函数能够访问其词法作用域外的变量，即使外部函数已经执行完毕。这在面试题中经常通过循环中的闭包问题、变量捕获时机、闭包的应用场景等方面进行考察。例如，文档[1]中的例子展示了在循环中使用闭包时，由于变量i的延迟绑定，导致所有闭包都引用同一个i，最终输出相同值的问题。这里需要解释闭包捕获变量的机制，以及如何通过立即执行函数或参数传递来创建新的作用域，从而正确捕获每次循环的i值。

文档[4]和[5]讨论了闭包的底层原理，包括执行上下文、变量对象、作用域链等，这些是理解闭包的关键。需要将这些概念融入到答案中，解释闭包如何通过作用域链访问外部变量。此外，文档[7]中的面试题涉及闭包在模块化、防抖节流等实际应用中的使用，这也是面试中常问的题目，需要举例说明。

另外，文档[3]提到的闭包漏洞问题，即通过原型链或访问器属性修改闭包内部变量，展示了闭包的安全性问题。这可能不是所有面试都会涉及，但高级岗位可能会问到，因此需要简要提及。

接下来，我需要整理常见的闭包面试题类型，并针对每个类型给出例子和解决方案。例如，循环中的闭包问题、闭包的应用场景、闭包的变量捕获时机等。需要确保每个问题都结合搜索结果中的例子，并引用对应的文档编号。

还需要注意回答的结构，分点说明，每个点包含问题描述、示例代码、输出结果、原因分析及解决方法。同时，在解释闭包应用场景时，要提到防抖、节流、模块化等，并引用相关文档中的例子。

最后，总结闭包的理解重点，如词法作用域、执行上下文、变量生命周期等，并强调在面试中如何清晰表达这些概念。需要检查每个部分的引用是否正确，确保每个例子或解释都有对应的文档支持，避免遗漏或错误引用。




以下是 JavaScript 闭包相关的高频面试题及解析，结合经典场景和底层原理，帮助系统性掌握闭包的核心考察点：

---

### 一、**基础闭包陷阱题**
#### 1. **循环中闭包捕获变量问题**
**题目**：以下代码输出什么？如何修正？
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// 输出：3, 3, 3（非预期的 0,1,2）
```
**解析**：
• **问题根源**：`var`声明的 `i` 是函数作用域变量，循环结束后 `i` 值为 3。所有闭包共享同一个 `i`。
• **修正方法**：
  • **使用 `let`**：`let i` 创建块级作用域，每次循环生成独立变量。
  • **IIFE（立即执行函数）**：为每次循环创建新作用域：
    ```javascript
    for (var i = 0; i < 3; i++) {
      (function(j) {
        setTimeout(() => console.log(j), 0);
      })(i);
    }
    ```

---

### 二、**闭包变量捕获时机**
#### 2. **变量延迟绑定问题**
**题目**：以下代码输出什么？
```javascript
function createFunctions() {
  var result = [];
  for (var i = 0; i < 3; i++) {
    result.push(function() { return i; });
  }
  return result;
}
var funcs = createFunctions();
console.log(funcs[0]()); // 3
```
**解析**：
• **闭包捕获的是变量引用**，而非值。所有函数共享同一 `i`，循环结束后 `i=3`。
• **修正**：通过参数传递或 `let` 创建独立作用域：
  ```javascript
  for (let i = 0; i < 3; i++) {
    result.push(() => i);
  }
  ```

---

### 三、**闭包应用场景**
#### 3. **实现模块化与私有变量**
**题目**：设计一个计数器模块，隐藏内部变量。
```javascript
const counter = (function() {
  let count = 0;
  return {
    increment: () => ++count,
    get: () => count
  };
})();
counter.increment(); // 1
```
**原理**：通过 IIFE 返回闭包函数，`count` 变量对外不可见。

#### 4. **防抖与节流**
**题目**：手写防抖函数。
```javascript
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
```
**关键点**：闭包保存 `timer` 状态，控制函数执行频率。

---

### 四、**闭包底层原理**
#### 5. **执行上下文与作用域链**
**题目**：解释闭包如何访问外部变量。
**解析**：
• **词法作用域**：函数定义时确定作用域链，闭包通过作用域链访问外层变量。
• **变量对象（VO）**：函数执行时创建变量对象，闭包引用导致外层 VO 无法销毁。

#### 6. **内存泄漏风险**
**示例**：
```javascript
function leak() {
  const data = new Array(1e6); // 大对象
  return function() { console.log(data.length); };
}
const leaked = leak(); // 闭包引用 data，无法被回收
```
**解决方案**：手动解除引用（如 `leaked = null`）。

---

### 五、**高级闭包问题**
#### 7. **闭包漏洞与安全性**
**题目**：如何通过闭包访问“私有”变量？
```javascript
const obj = (function() {
  let secret = 123;
  return { getSecret: () => secret };
})();
// 攻击方法：修改原型链或访问器属性（需特定条件）
```
**防御**：
• 使用 `Object.freeze()` 冻结对象。
• 避免暴露原型链敏感方法。

---

### **面试回答要点总结**
1. **定义清晰**：闭包是函数与其词法作用域的组合，能访问外部作用域变量。
2. **核心机制**：作用域链、变量对象、词法作用域。
3. **应用场景**：模块化、防抖/节流、柯里化、缓存等。
4. **注意事项**：内存泄漏、循环引用、变量捕获时机。

掌握以上内容，可系统性应对闭包相关的面试问题。如需更深入的技术细节或调试技巧，可参考[闭包底层原理文档]。
