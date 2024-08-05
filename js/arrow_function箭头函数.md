https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26

https://www.30secondsofcode.org/blog/s/javascript-arrow-function-event-listeners

a syntactic sugar on top of regular functions
the way the this context is bound.

Can I use an arrow function as the callback for an event listener in JavaScript?

JS ES6 , a new way to define and write functions. While they might seem like a syntactic sugar on top on regular functions,
they have a key difference which lies in the way the `this` context is bound. I will not go into a lot of detail in this
article, however I strongly suggest you read Understanding the 'this' keyword in JS before continuing. To summarize what the aforementioned 前面提及的. blog post explains in more detail:

> Arrow functions do not have their own bingings for `this`, resulting in `this` retaining the v of the enclosing lexical
> context's `this`

# Event listener callbacks

One task that we often perform when writing browser-side JS is creating event listeners. e.g.

```js
const toggleElements = document.querySelectorAll('.toggle')
toggleElements.forEach((el) => {
  el.addEventListener('click', function () {
    this.classList.toggle('active')
  })
})
```

In the example above, we use `NodeList.prototype.forEach()` to iterate over the nodes matching a given selector and
`EventTarget.addEventListener()` with a regular function as the cb for the `click` event to swap between an active and
inactive state for the clicked element. As we are using a regular function, the `this` context inside the callback will
be bound to the element on which the event was fired.

# arrow functions as callbacks

do not have their own bindings for `this`. convert the previous code snippet's cb to an arrow function? Its `this` context
refers to the global one, which in this case is the `window` obj.

```js
const toggleElements = document.querySelectorAll('.toggle')
toggleElements.forEach((el) => {
  el.addEventListener('click', () => {
    this.classList.toggle('active') // `this` refers to `window`
    // Error: Cannot read property 'toggle' of undefined
  })
})
```

This code will throw an error anytime the matching element is clicked, finding the event listener and executing the
callback, due to the `window` obj not having a `classList` prop. Ofentimes, however

```js
el.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('active') // works correctly
})
```


说一说es6中箭头函数？

得分点 *没有this，this是从外部获取、不能使用new、没有arguments、没有原型和super*

标准回答 箭头函数相当于匿名函数，简化了函数定义。箭头函数有两种写法，当函数体是单条语句时可以省略{}和return；另一种是包含多条语句，不可以省略{}和return。 箭头函数最大的特点就是没有this，this是从外部获取，就是*继承外部的执行上下文中的this*，*由于没有this关键字，所以箭头函数也不能作为构造函数， 同时通过 `call()` 或 `apply()` 方法调用一个函数时，只能传递参数（不能绑定this），第一个参数会被忽略*。

箭头函数也没有原型和super，不能使用yield关键字，因此箭头函数不能用作 Generator 函数，不能返回直接对象字面量。

加分回答 *箭头函数的不适用场景*：

- 定义对象上的方法 当调用` dog.jumps` 时，`lives` 并没有递减。因为 `this` 没有绑定值，而继承父级作用域。 var dog = { lives: 20, jumps: () => { this.lives--; } }

- 不适合做事件处理程序
此时触发点击事件，this不是button，无法进行class切换。

```js
var button = document.querySelector('button'); button.addEventListener('click', () => { this.classList.toggle('on'); });
```

*箭头函数的适用场景*：

- 简单的函数表达式，内部没有this引用，没有递归、事件绑定解绑定，适用于map、filter等方法中，写法简洁。
```js
var arr = [1,2,3];
var newArr = arr.map((num)=>num*num)
```
- 内层函数表达式，需要调用this，且this应与外层函数一致时

```js
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList() {
   this.students.forEach( student =>
    alert(this.title + ': ' + student)
   )
  }
}
group.showList();
```

# prototype

```js
function giveLydiaPizza() {
  return "Here is pizza!"
}

const giveLydiaChocolate = () => "Here's chocolate... now go hit the gym already."

console.log(giveLydiaPizza.prototype)
console.log(giveLydiaChocolate.prototype)
```
A: { constructor: ...} { constructor: ...}
B: {} { constructor: ...}
C: { constructor: ...} {}
D: { constructor: ...} undefined

答案
答案: D
常规函数，例如*giveLydiaPizza函数，有一个prototype属性，它是一个带有constructor属性的对象，即原型对象*。 然而箭头函数，例如giveLydiaChocolate函数，没有这个prototype属性。 尝试使用giveLydiaChocolate.prototype访问prototype属性时会返回undefined。

```js
const add = x => y => z => {
	console.log(x, y, z);
	return x + y + z;
};

add(4)(5)(6);
```
A: 4 5 6
B: 6 5 4
C: 4 function function
D: undefined undefined 6
答案
答案: A
函数 add 是一个返回 返回箭头函数的箭头函数 的箭头函数（still with me?）。第一个函数接收一个值为 4 的参数 x。我们调用第二个函数，它接收一个值为 5 的参数 y。然后我们调用第三个函数，它接收一个值为 6 的参数 z。当我们尝试在最后一个箭头函数中获取 x, y 和 z 的值，JS 引擎根据作用域链去找 x 和 y 的值。得到 4 5 6.

# eslint-space-lint
箭头函数的参数括号前后、简写标识前后的空格需要加上，要不然项目跑不起来~~

箭头函数与普通函数（function）的区别是什么？构造函数（function）可以使用 new 生成实例，那么箭头函数可以吗？为什么？
箭头函数是普通函数的简写，可以更优雅的定义一个函数，和普通函数相比，有以下几点差异：

函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象；
不可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替；
不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数；
不可以使用 new 命令，因为：
没有自己的 this，无法调用 call、apply；
没有 prototype 属性，而 new 命令在执行时需要将钩子函数的 prototype 赋值给新的对象的 __proto__
