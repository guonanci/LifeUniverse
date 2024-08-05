```js
function getAge() {
  'use strict'
  age = 21
  console.log(age)
}

getAge()
A: 21
B: undefined
C: ReferenceError
D: TypeError
答案
答案: C
使用 "use strict"，你可以确保不会意外地声明全局变量。我们从来没有声明变量 age，因为我们使用 "use strict"，它将抛出一个引用错误。如果我们不使用 "use strict"，它就会工作，因为属性 age 会被添加到全局对象中了。
let greeting
greetign = {} // Typo!
console.log(greetign) // {}
```
在全局对象上创建了一个空对象！当我们把greeting写错成greetign时，js解释器实际上在浏览器中将它视为global.greetign={}或者window.greetign={}。我们可以使用"use strict"来避免该问题，*能确保你声明变量时必须赋值*。

use_strict.md https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/ Strict_mode https://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html
严格模式通过抛出错误来消除了一些原有静默错误。
严格模式修复了一些导致 JavaScript 引擎难以执行优化的缺陷：有时候，相同的代码，严格模式可以比非严格模式下运行得更快。
严格模式禁用了在 ECMAScript 的未来版本中可能会定义的一些语法。

严格模式同时改变了语法及运行时行为。变化通常分为这几类：将问题直接转化为错误（如语法错误或运行时错误）, 简化了如何为给定名称的特定变量计算，简化了 eval 以及 arguments, 将写"安全“JavaScript 的步骤变得更简单，以及改变了预测未来 ECMAScript 行为的方式。

将过失错误转成异常
在严格模式下，某些先前被接受的过失错误将会被认为是异常。JavaScript 被设计为能使新人开发者更易于上手，所以有时候会给本来错误操作赋予新的不报错误的语义 (non-error semantics). 有时候这可以解决当前的问题，但有时候却会给以后留下更大的问题。严格模式则把这些失误当成错误，以便可以发现并立即将其改正。

第一，严格模式下无法再意外创建全局变量。在普通的 JavaScript 里面给一个错误命名的变量名赋值会使全局对象新增一个属性并继续“工作”（尽管将来可能会失败：在现代的 JavaScript 中有可能）。严格模式中意外创建全局变量被抛出错误替代：

严格模式下，变量都必须先用var命令声明，然后再使用。

"use strict";
                       // 假如有一个全局变量叫做 mistypedVariable
mistypedVaraible = 17; // 因为变量名拼写错误
                       // 这一行代码就会抛出 ReferenceError
Copy to Clipboard
第二，严格模式会使引起静默失败 (silently fail，注：不报错也没有任何效果) 的赋值操作抛出异常。例如，NaN 是一个不可写的全局变量。在正常模式下，给 NaN 赋值不会产生任何作用; 开发者也不会受到任何错误反馈。但在严格模式下，给 NaN 赋值会抛出一个异常。任何在正常模式下引起静默失败的赋值操作 (给不可写属性赋值，给只读属性 (getter-only) 赋值，给不可扩展对象 (non-extensible object) 的新属性赋值) 都会抛出异常：

"use strict";

// 给不可写属性赋值
var obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9; // 抛出 TypeError 错误

// 给只读属性赋值
var obj2 = { get x() { return 17; } };
obj2.x = 5; // 抛出 TypeError 错误

// 给不可扩展对象的新属性赋值
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai"; // 抛出 TypeError 错误

```js
(() => {
  let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);
A: "undefined", "number"
B: "number", "number"
C: "object", "number"
D: "number", "undefined"
答案
答案: A
let x = y = 10; 是下面这个表达式的缩写：

y = 10;
let x = y;
我们设定y等于10时，我们实际上增加了一个属性y给全局对象 (浏览器里的window, Nodejs 里的global)。在浏览器中， window.y等于10.

然后我们声明了变量x等于y，也是10.但变量是使用 let声明的，它只作用于 块级作用域，仅在声明它的块中有效；就是案例中的立即调用表达式 (IIFE)。使用typeof操作符时，操作值 x没有被定义：因为我们在x声明块的外部，无法调用它。这就意味着x未定义。未分配或是未声明的变量类型为"undefined". console.log(typeof x)返回"undefined".

而我们创建了全局变量y，并且设定y等于10.这个值在我们的代码各处都访问的到。 y已经被定义了，而且有一个"number"类型的值。 console.log(typeof y)返回"number".


```
