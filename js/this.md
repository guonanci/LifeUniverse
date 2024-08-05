说一说this指向（普通函数、箭头函数）？

得分点 全局执行上下文、函数执行上下文、this严格模式下undefined、非严格模式window、构造函数新对象本身、普通函数不继承this、箭头函数无this，可继承

标准回答 this关键字由来：*在对象内部的方法中使用对象内部的属性是一个很普遍的需求，但是 JavaScript 的作用域机制并不支持这一点，基于这个需求，JavaScript 又搞出一套 this 机制*。

this存在的场景有三种：全局执行上下文、函数执行上下文和eval执行上下文，在此不讨论eval。在全局执行环境中,无论是否在严格模式下，（在任何函数体外部）`this` 都指向全局对象。*在函数执行上下文中访问this，函数的调用方式决定了 `this` 的值*。在全局环境中调用一个函数，函数内部的 this指向的是，全局变量 window，通过一个对象来调用其内部的一个方法，该方法的执行上下文中的 this 指向对象本身。

普通函数当中的this指向：当函数被正常调用时，严格模式下this指向undefined；非严格模式下this 指向全局对象window。通过一个对象来调用其内部的一个方法，该方法的执行上下文中的 this 指向对象本身。*new 关键字构建好了一个新对象，并且构造函数中的 this 其实就是新对象本身*。

嵌套函数中的 this 不会继承外层函数的 this 值。

箭头函数this指向：*箭头函数并不会创建其自身的执行上下文，所以箭头函数中的 this 取决于它的外部函数*。

加分回答 *因为箭头函数没有this，所以不能作为构造函数，但是需要继承函数外部this的时候，使用箭头函数会比较方便*
```js

var myObj = {
  name : "闷倒驴",
  showThis:function(){
    console.log(this); // myObj
    var bar = ()=>{
      this.name = "王美丽";
      console.log(this) // myObj
    }
    bar();
  }
};
myObj.showThis();
console.log(myObj.name); // "王美丽"
console.log(window.name); // ''
```


https://juejin.cn/post/6844904083707396109

this存在隐式绑定，而隐式绑定有丢失问题，所以有时候需要显式绑定call、apply、bind。显式绑定的其它用法
包括：new绑定和箭头函数绑定。


默认绑定是指，非严格模式下this指向全局对象, 严格模式下this会绑定到undefined；
隐式绑定是指，当函数引用有上下文对象时, 如 obj.foo()这样的调用方式, foo内部的this会指向obj。



作者：LinDaiDai_霖呆呆
链接：https://juejin.cn/post/6844904083707396109
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```js
var a = 10;
function foo () {
  console.log(this.a)
}
foo(); // 我们知道在使用var创建变量时(不在函数里)，会把创建的变量绑定到window上，所以此时a是window下的属性。

// 而函数foo也是window下的属性。
window.a = 10;
function foo() {
  console.log(this.a)
}
window.foo();


"use strict";
var a = 10;
function foo () {
  console.log('this1', this)
  console.log(window.a)
  console.log(this.a)
}
console.log(window.foo)
console.log('this2', this)
foo();

// 开启了严格模式，只是说使得函数内的this指向undefined，它并不会改变全局中this的指向。因此this1中打印的是undefined，而this2还是window对象。

// 另外，它也不会阻止a被绑定到window对象上。
// 所以最后的执行结果：


f foo() {...}
'this2' Window{...}
'this1' undefined
10
Uncaught TypeError: Cannot read property 'a' of undefined

var a = 1
function foo () {
  var a = 2
  function inner () {
    console.log(this.a)
  }
  inner()
}

foo()

// 其实这里和1.4很像，不过一看到函数内的函数，就很容易让人联想到闭包 😂，然后... 然后就脱口而出，答案是2啊，这还不简单。

// 小伙伴们，审题可得仔细啊，这里问你的是this.a，而在inner中，this指向的还是window。

// 1

// 2隐式绑定
// OK👌，介绍完了默认绑定之后，让我们来看看隐式绑定。

// 其实大佬 sunshine小小倩 教了我们一个简单的规则，this 永远指向最后调用它的那个对象。

// 谁最后调用的函数，函数内的this指向的就是谁(不考虑箭头函数)。

// 隐式丢失是指，被隐式绑定的函数在特定情况下，会丢失绑定对象。

// 有两种情况容易发生隐式丢失问题：

// 使用另一个变量来给函数取别名
// 将函数作为参数传递时，会被隐式赋值，回调函数丢失this绑定

function foo () {
  console.log(this.a)
};
var obj = { a: 1, foo };
var a = 2;
var foo2 = obj.foo;

obj.foo();
foo2();
// 1 2
这是因为虽然foo2指向的是obj.foo函数，不过调用它的却是window对象，所以它里面this的指向是为window。

其实也就相当于是window.foo2()，如果你不相信的话，可以看下面一题👇。

function foo () {
  console.log(this.a)
};
var obj = { a: 1, foo };
var a = 2;
var foo2 = obj.foo;
var obj2 = { a: 3, foo2: obj.foo }

obj.foo();
foo2();
obj2.foo2(); // 1 2 3 obj.foo()中的this指向调用者obj
// foo2()发生了隐式丢失，调用者是window，使得foo()中的this指向window
// foo3()发生了隐式丢失，调用者是obj2，使得foo()中的this指向obj2
function foo () {
  console.log(this.a)
}
function doFoo (fn) {
  console.log(this)
  fn()
}
var obj = { a: 1, foo }
var a = 2
doFoo(obj.foo)
// 这里我们将obj.foo当成参数传递到doFoo函数中，在传递的过程中，obj.foo()函数内的this发生了改变，指向了window。

// Window{...}
// 2

// 注意，我这里说的是obj.foo()函数，而不是说doFoo()。doFoo()函数内的this本来就是指向window的，因为这里是window调用的它。

// 但是你不要以为是doFoo()函数内的this影响了obj.foo()，不信你看下一题。

// 现在我们不用window调用doFoo，而是放在对象obj2里，用obj2调用：


function foo () {
  console.log(this.a)
}
function doFoo (fn) {
  console.log(this)
  fn()
}
var obj = { a: 1, foo }
var a = 2
var obj2 = { a: 3, doFoo }

obj2.doFoo(obj.foo)
// { a:3, doFoo: f }
// 2
// 所以说，如果你把一个函数当成参数传递到另一个函数的时候，也会发生隐式丢失的问题，且与包裹着它的函数的this指向无关。在非严格模式下，会把该函数的this绑定到window上，严格模式下绑定到undefined。

// 一样的代码，试试严格模式下：
"use strict"
function foo () {
  console.log(this.a)
}
function doFoo (fn) {
  console.log(this)
  fn()
}
var obj = { a: 1, foo }
var a = 2
var obj2 = { a: 3, doFoo }

obj2.doFoo(obj.foo)
// { a:3, doFoo: f }
// Uncaught TypeError: Cannot read property 'a' of undefined

// 4. 显示绑定
// 功能如其名，就是强行使用某些方法，改变函数内this的指向。
// 通过call()、apply()或者bind()方法直接指定this的绑定对象, 如foo.call(obj)。

// 使用.call()或者.apply()的函数是会直接执行的
// bind()是创建一个新的函数，需要手动调用才会执行
// .call()和.apply()用法基本类似，不过call接收若干个参数，而apply接收的是一个数组

function foo () {
  console.log(this.a)
}
var obj = { a: 1 }
var a = 2

foo()
foo.call(obj)
foo.apply(obj)
foo.bind(obj)
第一个foo() 都很好理解，这不就是默认绑定吗？😁
而第二个和第三个foo都使用了call或apply来改变this的指向，并且是立即执行的。
第四个foo，仅仅是使用bind创建了一个新的函数，且这个新函数也没用别的变量接收并调用，因此并不会执行。
这里想要提一嘴，如果call、apply、bind接收到的第一个参数是空或者null、undefined的话，则会忽略这个参数。

var obj1 = {
  a: 1
}
var obj2 = {
  a: 2,
  foo1: function () {
    console.log(this.a)
  },
  foo2: function () {
    setTimeout(function () {
      console.log(this)
      console.log(this.a)
    }, 0)
  }
}
var a = 3

obj2.foo1()
obj2.foo2()

对于obj2.foo1()，我们很清楚，它就是打印出2。
但是对于obj2.foo2呢？在这个函数里，设置了一个定时器，并要求我们打印出this和this.a。
想想我前面说过的话，谁调用的函数，函数内的this指向的就是谁。
而对于setTimeout中的函数，这里存在隐式绑定的隐式丢失，也就是当我们将函数作为参数传递时会被隐式赋值，回调函数丢失this绑定，因此这时候setTimeout中的函数内的this是指向window的。
(之前呆呆一直认为的是定时器里的函数和定时器是有关系的，所以有一些错误的理解，感谢掘友朝游夕宴和l.jx的指出)
所以最终的结果是：
2
Window{...}
3

var obj1 = {
  a: 1
}
var obj2 = {
  a: 2,
  foo1: function () {
    console.log(this.a)
  },
  foo2: function () {
    setTimeout(function () {
      console.log(this)
      console.log(this.a)
    }.call(obj1), 0)
  }
}
var a = 3
obj2.foo1()
obj2.foo2()
2
{ a: 1 }
1

所以有小伙伴就会问了，我下面的这种写法不可以吗？
obj2.foo2.call(obj1)
复制代码注意⚠️：如果是这种写法的话，我改变的就是foo2函数内的this的指向了，但是我们知道，foo2函数内this的指向和setTimeout里函数的this是没有关系的，因为调用定时器的始终是window。
并且这里使用.bind()也是可以的，因为定时器里的函数在时间到了之后本就是会自动执行的。

OK👌，我们不用定时器，把它干掉，换成一个函数：
var obj1 = {
  a: 1
}
var obj2 = {
  a: 2,
  foo1: function () {
    console.log(this.a)
  },
  foo2: function () {
    function inner () {
      console.log(this)
      console.log(this.a)
    }
    inner()
  }
}
var a = 3
obj2.foo1()
obj2.foo2()
其实这里有点像题目1.5有木有，都是函数内包裹着函数。

调用inner函数的依然是window，所以结果为：
2
Window{...}
3
如果给inner()函数显式绑定的话：
inner.call(obj1)
2
{ a: 1 }
1

function foo () {
  console.log(this.a)
}
var obj = { a: 1 }
var a = 2

foo()
foo.call(obj)
foo().call(obj)
也就是使用.call()方法位置的不同。

结果：
2
1
2
Uncaught TypeError: Cannot read property 'call' of undefined
foo().call(obj)开始会执行foo()函数，打印出2，但是会对foo()函数的返回值执行.call(obj)操作，可是我们可以看到foo()函数的返回值是undefined，因此就会报错了。
一个是针对于函数，一个是针对于函数的返回值。

function foo () {
  console.log(this.a)
  return function () {
    console.log(this.a)
  }
}
var obj = { a: 1 }
var a = 2

foo()
foo.call(obj)
foo().call(obj)
// 2 1 2 1
第一个数字2自然是foo()输出的，虽然foo()函数也返回了一个匿名函数，但是并没有调用它呀，只有写成foo()()，这样才算是调用匿名函数。
第二个数字1是foo.call(obj)输出的，由于.call()是紧跟着foo的，所以改变的是foo()内this的指向，并且.call()是会使函数立即执行的，因此打印出1，同理，它也没有调用返回的函数。
第三个数字2是foo().call(obj)先执行foo()时打印出来的，此时foo()内this还是指向window。
在执行完foo()之后，会返回一个匿名函数，并且后面使用了.call(obj)来改变这个匿名函数的this指向并调用了它，所以输出了1。

function foo () {
  console.log(this.a)
  return function () {
    console.log(this.a)
  }
}
var obj = { a: 1 }
var a = 2

foo.call(obj)()
就像是这道题，foo()函数内的this虽然指定了是为obj，但是调用最后调用匿名函数的却是window。

1 2
var obj = {
  a: 'obj',
  foo: function () {
    console.log('foo:', this.a)
    return function () {
      console.log('inner:', this.a)
    }
  }
}
var a = 'window'
var obj2 = { a: 'obj2' }

obj.foo()()
obj.foo.call(obj2)()
obj.foo().call(obj2)
foo: obj
inner: window
foo: obj2
inner: window
foo: obj
inner: obj2

一直做这种题目是不是没意思，让我们加几个参数来玩玩。

var obj = {
  a: 1,
  foo: function (b) {
    b = b || this.a
    return function (c) {
      console.log(this.a + b + c)
    }
  }
}
var a = 2
var obj2 = { a: 3 }

obj.foo(a).call(obj2, 1)
obj.foo.call(obj2)(1)
6
b=3,this.a=2,c=1,6
开始调用obj.foo(a)将2传入foo函数并赋值给型参b，并且由于闭包的原因，使得匿名函数内能访问到b，之后调用匿名函数的时候，用call()改变了this的指向，使得匿名函数内this.a为3，并传入最后一个参数1，所以第一行输出的应该是3 + 2 + 1，也就是6。
而第二行，obj.foo.call(obj2)这里是将foo函数内的this指向了obj2，同时并没有传递任何参数，所以b开始是undefined的，但是又因为有一句b = b || this.a，使得b变为了3；同时最后一段代码(1)，是在调用匿名函数，且和这个匿名函数内的this应该是指向window的，因此输出也为3+2+1，为6。

我们可以在一个函数内使用call来显式绑定某个对象，这样无论怎样调用它，其内部的this总是指向这个对象。
function foo1 () {
  console.log(this.a)
}
var a = 1
var obj = {
  a: 2
}

var foo2 = function () {
  foo1.call(obj)
}

foo2()
foo2.call(window)

相信大家对forEach、map、filter都不陌生吧，它们是JS内置的一些函数，但是你知道它们的第二个参数也是能绑定this的吗？ 😁

1 obj,2 obj,3 obj,[3]

function Person (name) {
  this.name = name
}
var name = 'window'
var person1 = new Person('LinDaiDai')
console.log(person1.name)
// LinDaiDai
果然，window.name打印出来还是LinDaiDai。它会记住这个name属性不被回收，直到你关闭此页签。

使用new函数创建的对象和字面量形式创建出来的对象好像没什么大的区别，如果对象中有属性是函数类型的话，并且不是箭头函数，那么解法都一样。在后面说到箭头函数的时候就有区别了，不过我们一步一步来。

var name = 'window'
function Person (name) {
  this.name = name
  this.foo = function () {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo.call(person2)()
person1.foo().call(person2)
person2 window,person1 person2
person1.foo.call(person2)()将foo()函数内的this指向了person2，所以打印出person2，而内部返回的匿名函数是由window调用的，所以打印出window。(类似题目4.9)
person1.foo().call(person2)是将匿名函数的this显式绑定到了person2上，所以打印出来的会是person2。

终于到了期待已久的箭头函数绑定 😁。
在上面👆，我们有学到一个诀窍：this 永远指向最后调用它的那个对象。
但是对于箭头函数就不是这样咯，它里面的this是由外层作用域来决定的，且指向函数定义时的this而非执行时。
它里面的this是由外层作用域来决定的啥意思呢？来看看这句话：
箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined。
字面量对象中普通函数与箭头函数的区别: 只有一层函数的题目
字面量对象中普通函数与箭头函数的区别：函数嵌套的题目
构造函数对象中普通函数和箭头函数的区别：只有一层函数的题目
构造函数对象中普通函数和箭头函数的区别：函数嵌套的题目
箭头函数结合.call的题目
var obj = {
  name: 'obj',
  foo1: () => {
    console.log(this.name)
  },
  foo2: function () {
    console.log(this.name)
    return () => {
      console.log(this.name)
    }
  }
}
var name = 'window'
obj.foo1()
obj.foo2()()
window, obj obj
对于obj.foo1()函数的调用，它的外层作用域是window，对象obj当然不属于作用域了(我们知道作用域只有全局作用域window和局部作用域函数)。所以会打印出window
obj.foo2()()，首先会执行obj.foo2()，这不是个箭头函数，所以它里面的this是调用它的obj对象，因此打印出obj，而返回的匿名函数是一个箭头函数，它的this由外层作用域决定，那也就是函数foo2咯，那也就是它的this会和foo2函数里的this一样，就也打印出了obj。
7.3
var name = 'window'
var obj1 = {
  name: 'obj1',
  foo: function () {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
var obj2 = {
  name: 'obj2',
  foo: function () {
    console.log(this.name)
    return () => {
      console.log(this.name)
    }
  }
}
var obj3 = {
  name: 'obj3',
  foo: () => {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
var obj4 = {
  name: 'obj4',
  foo: () => {
    console.log(this.name)
    return () => {
      console.log(this.name)
    }
  }
}

obj1.foo()()
obj2.foo()()
obj3.foo()()
obj4.foo()()
obj1.foo()()两层都是普通函数，类似于题目4.6，分别打印出obj1和window。

obj1 window,obj2 obj2, window window, window window
obj3.foo()()外层为箭头函数，内层为普通函数，箭头函数的this由外层作用域决定，因此为window，内层普通函数由调用者决定，调用它的是window，因此也为window。obj4.foo()()两层都是箭头函数，第一个箭头函数的this由外层作用域决定，因此为window，第二个箭头函数的this也由外层作用域决定，它的外层作用域是第一个箭头函数，而第一个箭头函数的this是window，因此内层的this也是window。

构造函数对象中普通函数和箭头函数的区别：一层函数的题目

var name = 'window'
function Person (name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  }
  this.foo2 = () => {
    console.log(this.name)
  }
}
var person2 = {
  name: 'person2',
  foo2: () => {
    console.log(this.name)
  }
}
var person1 = new Person('person1')
person1.foo1()
person1.foo2()
person2.foo2()
person1,person1,window
person1.foo1()是个普通函数，this由最后调用它的对象决定，即person1。
person1.foo2()为箭头函数，this由外层作用域决定，且指向函数定义时的this而非执行时，在这里它的外层作用域是函数Person，且这个是构造函数，并且使用了new来生成了对象person1，所以此时this的指向是为person1。

构造函数对象中普通函数和箭头函数的区别：函数嵌套的题目
var name = 'window'
function Person (name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
  this.foo2 = function () {
    console.log(this.name)
    return () => {
      console.log(this.name)
    }
  }
  this.foo3 = () => {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
  this.foo4 = () => {
    console.log(this.name)
    return () => {
      console.log(this.name)
    }
  }
}
var person1 = new Person('person1')
person1.foo1()() // person1 window
person1.foo2()() // person1 person1
person1.foo3()() // person1 window
person1.foo4()() // person1 person1

箭头函数结合.call的题目

箭头函数的this无法通过bind、call、apply来直接修改，但是可以通过改变作用域中this的指向来间接修改。
var name = 'window'
var obj1 = {
  name: 'obj1',
  foo1: function () {
    console.log(this.name)
    return () => {
      console.log(this.name)
    }
  },
  foo2: () => {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
var obj2 = {
  name: 'obj2'
}
obj1.foo1.call(obj2)() // obj2 obj2
obj1.foo1().call(obj2) // obj1 obj1
obj1.foo2.call(obj2)() // window window
obj1.foo2().call(obj2) // window obj2
obj1.foo().call(obj2)第一层打印出obj1，第二层为箭头函数，使用了.call想要修改this的指向，但是并不能成功，因此.call(obj2)对箭头函数无效，还是打印出obj1。
obj1.foo2.call(obj2)()第一层为箭头函数，并且想要通过.call(obj2)改变this指向，但是无效，且它的外层作用域是window，所以会打印出window，第二层为普通函数，this是最后调用者window，所以也会打印出window。

它里面的this是由外层作用域来决定的，且指向函数定义时的this而非执行时
字面量创建的对象，作用域是window，如果里面有箭头函数属性的话，this指向的是window
构造函数创建的对象，作用域是可以理解为是这个构造函数，且这个构造函数的this是指向新建的对象的，因此this指向这个对象。
箭头函数的this是无法通过bind、call、apply来直接修改，但是可以通过改变作用域中this的指向来间接修改。

优点

箭头函数写代码拥有更加简洁的语法(当然也有人认为这是缺点)
this由外层作用域决定，所以在某些场合我们不需要写类似const that = this这样的代码

```
```js
避免使用的场景

根据箭头函数的特性，所以我们应该避免在以下四种场景中使用它：

使用箭头函数定义对象的方法
let obj = {
    value: 'LinDaiDai',
    getValue: () => console.log(this.value)
}
obj.getValue() // undefined
定义原型方法
function Foo (value) {
    this.value = value
}
Foo.prototype.getValue = () => console.log(this.value)

const foo1 = new Foo(1)
foo1.getValue() // undefined
构造函数使用箭头函数
const Foo = (value) => {
    this.value = value;
}
const foo1 = new Foo(1)
// 事实上直接就报错了 Uncaught TypeError: Foo is not a constructor
console.log(foo1);
作为事件的回调函数
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    console.log(this === window); // => true
    this.innerHTML = 'Clicked button';
});

8.1 字面量对象中的各种场景
var name = 'window'
var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    return () => {
      console.log(this.name)
    }
  }
}
var person2 = { name: 'person2' }

person1.foo1()
person1.foo1.call(person2)

person1.foo2()
person1.foo2.call(person2)

person1.foo3()()
person1.foo3.call(person2)()
person1.foo3().call(person2)

person1.foo4()()
person1.foo4.call(person2)()
person1.foo4().call(person2)

person1 person2,window window,window window  person2, person1 person2 person1
8.2 构造函数中的各种场景
var name = 'window'
function Person (name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  },
  this.foo2 = () => console.log(this.name),
  this.foo3 = function () {
    return function () {
      console.log(this.name)
    }
  },
  this.foo4 = function () {
    return () => {
      console.log(this.name)
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1()
person1.foo1.call(person2)

person1.foo2()
person1.foo2.call(person2)

person1.foo3()()
person1.foo3.call(person2)()
person1.foo3().call(person2)

person1.foo4()()
person1.foo4.call(person2)()
person1.foo4().call(person2)
person1.foo1()类似题目7.4
person1.foo2()类似题目7.4
person1.foo3()类似题目7.5
person1.foo4()类似题目7.5
person1 person2,person1 person1,window window person2,person1 person2 person1
8.3
var name = 'window'
function Person (name) {
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function () {
      return function () {
        console.log(this.name)
      }
    },
    foo2: function () {
      return () => {
        console.log(this.name)
      }
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()()
person1.obj.foo1.call(person2)()
person1.obj.foo1().call(person2)

person1.obj.foo2()()
person1.obj.foo2.call(person2)()
person1.obj.foo2().call(person2)
window window person2,obj person2 obj
person1.obj.foo2()()第一层为普通函数，第二层为匿名箭头函数。首先让我们明确匿名箭头函数内的this是由第一层普通函数决定的，所以我们只要知道第一层函数内的this是谁就可以了。而这里，第一层函数最后是由谁调用的呢 🤔️？是由obj这个对象，所以打印出obj。
person1.obj.foo2.call(person2)()中使用.call(person2)改变了第一层函数中的this指向，所以第二层的箭头函数会打印出person2。
person1.obj.foo2().call(person2)中使用.call(person2)想要改变内层箭头函数的this指向，但是失败了，所以还是为外层作用域里的this，打印出obj。


8.4
function foo() {
  console.log( this.a );
}
var a = 2;
(function(){
  "use strict";
  foo();
})();
答案并不是undefined，也不会报错，而是打印出了2。
哈哈😄，其实这里是有一个迷惑点的，那就是"use strict"。
我们知道，使用了"use strict"开启严格模式会使得"use strict"以下代码的this为undefined，也就是这里的立即执行函数中的this是undefined。
但是调用foo()函数的依然是window，所以foo()中的this依旧是window，所以会打印出2。
如果你是使用this.foo()调用的话，就会报错了，因为现在立即执行函数中的this是undefined。
或者将"use strict"放到foo()函数里面，也会报错。

```
https://juejin.cn/post/6844903496253177863
https://muyiy.cn/blog/3/3.4.html#bind
https://link.juejin.cn/?target=https%3A%2F%2Fblog.csdn.net%2Fweixin_41910848%2Farticle%2Fdetails%2F81983740

在早读课上看到几篇有关 this 的文章，写得比较入味，借此做个总结。

this 是一个在每个函数作用域中自动定义的特殊标识符关键字。首先，我们来看看一个正确展示 this 的动机与用途的 Demo：

```js
function identify() {
  return this.name.toUpperCase()
}

function speak() {
  var greeting = "Hello, I'm " + identify.call(this)
  console.log(greeting)
}

var me = {
  name: 'NanCi',
}
var you = {
  name: 'Reader',
}

identify.call(me) // NANCI
identify.call(you) // READER

speank.call(me) // Hello, I'm NANCI
speank.call(you) // Hello, I'm READER
```

可以看出 identify 和 speak 两个函数对多个环境对象(me 和 you) 进行复用，而不是针对每个对象定义函数的分离版本。

另外，还可以将环境对象传递给 identify() 和 speak()：

```js
function identify(context) {
  return context.name.toUpperCase()
}

function speak(context) {
  var greeting = "Hello, I'm " + identify(context)
  console.log(greeting)
}

identify(you) // READER
identify(me) // Hello, I'm KYLE
```

对比中看出 this 机制提供了一种更优雅的方式来隐含地传递一个对象引用。

##困惑
大部分人认为 this 指向函数自己，可以达到递归--在函数内部调用它自己的效果。但是实际上，this 可能不像我们想的那样，得到函数自身的引用。
我们看看追踪 foo 被调用了多少次：

```
function foo(num) {
    console.log("foo: " + num);

    // console.log(this.count);
    // 追踪`foo`被调用了多少次
    this.count++;
    // console.log(this.count);
}

foo.count = 0;

var i;

for(i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i);
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

//`foo`被调用了多少次
console.log(foo.count); // 0
```

foo.count 依然是 0，即时 console.log 语句明明告诉我们 foo(...) 实际上被调用了 4 次。所以说， 不能**字面化地理解 this 的含义，换句话说，用 this 指向函数自己 这句话 还不足以描述 this 的确切含义与作用。**

当代吗执行 foo.count = 0 时，它确实在函数对象 foo 中加入了一个 count 属性。但是对于函数内部 this.count 应用，this 其实根本就不指向函数对象，即便属性名称一样，但是根对象不同，所以产生了混淆。

有人会问，如果我递增的 count 属性不是我以为的那个，那么哪个 count 被我递增了。实际上，这里创建了一个全局变量 count，他当前值是 NaN，暂时先回避这个问题。

我们先用另一个方法来把刚刚的 count 计算值俺我们想要的结果正确地计算出来：

比如先创建另一个对象来持有 count 属性：

```
function foo(num) {
    console.log("foo: " + num);

    // console.log(data.count);
    // 追踪`foo`被调用了多少次
    data.count++;
    // console.log(data.count);
}

var data = {
    count: 0;
}

var i;

for(i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i);
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

//`foo`被调用了多少次
console.log(data.count); // 4
```

现在貌似得到了我梦想要的结果，但是它借用了词法作用域这么个我们更容易理解的概念。

为了从函数内部引用它自己，我们需要通过一个指向它的词法标识符（变量）得到函数对象的引用。

```
function foo() {
    foo.count = 4; // `foo`引用它自己
}

setTimeout(function () {
    var data = 1;
    // 匿名函数内部引用自己的独特方式
    console.log(arguments.callee.data);
});

// 回到之前那段代码：

function foo(num) {
    console.log("foo: " + num);

    // console.log(foo.count);
    // 追踪`foo`被调用了多少次
    foo.count++;
    // console.log(foo.count);
}

foo.count = 0;

var i;

for(i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i);
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

//`foo`被调用了多少次
console.log(data.count); // 4
```

然而这种方式还是完全依靠变量 foo 的词法作用域，继续逃避 this ing...

现在我们引蛇出洞：

通过 call 强迫 this 指向 foo 函数对象：

```
function foo(num) {
    console.log("foo: " + num);

    // console.log(this.count);
    // 追踪`foo`被调用了多少次
    // 注意： 由于函数 foo 的调用方式改为 by-call，所以 this 现在确实指向`foo`
    this.count++;
    // console.log(this.count);
}

var foo = {
    count: 0;
}

var i;

for(i = 0; i < 10; i++) {
    if (i > 5) {
        // 使用call(...)，我们可以保证 this 指向函数对象 foo
        foo.call(foo, i);
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

//`foo`被调用了多少次
console.log(foo.count); // 4
```

##this 的作用域
有个误解，this 指向了函数的作用域，其实，明确的说 this 不会指向函数词法作用域，作用域好像是一个将所有可用标识符作为属性的对象，从内部来说是对的，但是 js 代码不能访问作用域“对象”，它是引擎内部的实现。

##this 如何实现
`this 不是编写时绑定，而是运行时绑定。它依赖于函数调用的上下文，this 绑定和函数声明的位置无关，而和函数被调用的方式有关`。当一个函数被调用时，会建立一个活动记录，也成为执行环境。这个记录包含函数从何处被调用，如何被调用，被传递了什么参数。这二个记录的属性之一就是在函数执行期间将被使用的 this 引用。

    this 是一个完全根据调用点（函数如何被调用）而为每次函数调用建立的绑定。

##调用点
函数在代码中被调用的位置（不是被声明的位置），但是并不简单，某些设计模式使得真正的调用点不明确。
调用栈（call-stack）：使我们到达当前执行位置而被调用的所有方法的堆栈。

```
function baz() {
    // 调用栈： baz
    // 我们的调用点是 global scope（全局作用域）

    console.log('baz');
    bar(); // bar 的调用点
}

function bar() {
    // 调用栈是： baz -> bar
    // 我们的调用点位于`baz`

    console.log('bar');
    foo(); // foo 的调用点
}

function foo() {
    // 调用栈是： baz -> bar -> foo
    // 我们的调用点位于 bar

    console.log('foo');
}

baz(); // baz 的调用点
```

现在要从调用栈中寻找真正的调用点，它是影响 this 绑定的唯一因素。
插入 `debugger;`的时候，刷新网页，调试工具会停止在这个位置，向你展示一个到达这一行之前所有被调用过的函数列表，这就是调用栈。所以如果你调查 this 绑定，可以使用开发者工具取得调用栈，从上向下寻找真正的调用点。
现在有 4 种规则来判断函数调用期间 this 指向哪里，但是仅仅是规则。 ##默认绑定
独立函数调用，是在没有其他规则适用时的默认规则

```js
function foo() {
  console.log(this.a)
}

var a = 2

foo() // 2
```

在此，foo()是被一个直白的，毫无修饰的函数引用调用的。
如果 strict mode 在这里生效，那么对于默认绑定来说全局对象不合法，this 将被设置为 undefined。

```js
function foo() {
  'use strict'

  console.log(this.a)
}
var a = 2
foo() // TypeError: this is undefined
```

所有的 this 绑定规则完全基于调用点，如果 foo()的内容没有在 strict mode 下执行，那么对于默认绑定来说全局对象唯一且合法；foo() 的 call-site 是否处在 strict mode 状态之下与此无关。

```js
function foo() {
  console.log(this.a)
}

var a = 2

;(function () {
  'use strict'

  foo() // 2
})()
```

##隐含绑定 implicit binding
调用点是否有一个环境对象 -- 拥有者 owing 或者容器 containing 对象。

```js
function foo() {
  console.log(this.a)
}

var obj = {
  a: 2,
  foo: foo,
}

obj.foo() // 2
```

注意 foo() 被声明然后作为引用属性添加到 obj 上的方式。无论 foo()是否一开始就在 obj 上被声明，还是后来作为引用添加，都是这个函数被 ojb 所拥有或者包含。 ##隐含丢失 implicit lost
一个隐含绑定丢失了他的绑定，通常意味着他会退回到默认绑定，根据 strict mode 状态，不是全局对象就是 undefined。 ##明确绑定 explicit binding
如果你想强制一个函数调用使用某个特定对象作为 this 绑定，而不在这个对象上放置一个函数引用属性呢。js 当中所有函数的 call，apply 方法便可以做到。

```js
function foo() {
  console.log(this.a)
}

var obj = {
  a: 2,
}

foo.call(obj) // 2
```

## 硬绑定 hard binding

# https://www.30secondsofcode.org/blog/s/javascript-this

In JavaScript, the this keyword refers to the object that is currently executing the code. The short version of what this
evaluates to is as follows:

- by default, this refers to the global object.
- In a function, when not in strict mode, this refers to the global object.
- In a function, when in strict mode, this is undefined.
- In an arrow function, this retains 保持 the value of the enclosing lexical context's this.
- In an object method, this refers to the obj the method was called on.
- In a constructor call, this is bound to the new object being constructed
- in an event handler, this is bound to the element on which the listener is placed

# Global Context

In the global execution context, this refers to the global object.

# Function Context

When not in strict mode, a function's this refers to the global obj.

```js
function f() {
  return this
}
console.log(f() == window) // true
```

When in strict mode, a function's this will be undefined if not set when entering the execution context.

```js
'use strict'
function f() {
  return this
}
console.log(f() == window) // undefined
```

# Obj context

When a function is called as a method of an object, this refers to the obj the method is called on.
This applies to methods defined anywhere in the object's prototype chain(i.e. own and inherited methods)

```js
const obj = {
  f: function () {
    return this
  },
}
const myObj = Object.create(obj)
myObj.foo = 1

console.log(myObj.f()) // {foo:1}
```

Similarly, when used inside a constructor, this refers to the object being constructed.

```js
class C {
  constructor() {
    this.x = 10
  }
}
const obj = new C()
console.log(obj.x)
```

# arrow fn context

In arrowFns, `this` retains the v of the enclosing 封闭的 lexical context's `this`

```js
const f = () => this
console.log(f() === window) // true

const obj = {
  foo: function () {
    const baz = () => this
    return baz()
  },
  bar: () => this,
}
console.log(obj.foo()) // {foo,bar}
console.log(obj.bar() == window) // true
```

Notice how in the second example, an arrow function's this refers to the global obj unless wrapped inside a regular
function call, whose `this` refers to the obj its called from and its lexical context is retained by the arrowFn.

# event handler context

When used in an event handler,`this` refers to the element on which the listener is placed.

```js
const el = document.getElementById('my-el')
el.addEventListener('click', function () {
  console.log(this === el) // true
})
```

# binding this

Using `Function.prototype.bind()` returns a new function from an existing one, where `this` is permanently bound to the
first argument of `bind()`.

```js
function f() {
  return this.foo
}
var x = f.bind({ foo: 'hello' })
console.log(x()) // 'hello'
// Similarly, using `Function.prototype.call()` or `Function.prototype.apply()` will bind the called function's `this`
// to the first argument of either of these functions only for this call.
function f() {
  return this.foo
}
console.log(f.call({ foo: 'hi' })) // 'hi'


const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2
  },
  perimeter: () => 2 * Math.PI * this.radius
}

shape.diameter()
shape.perimeter()
A: 20 and 62.83185307179586
B: 20 and NaN
C: 20 and 63
D: NaN and 63
答案
答案: B
注意 diameter 的值是一个常规函数，但是 perimeter 的值是一个箭头函数。

对于箭头函数，this 关键字指向的是它当前周围作用域（简单来说是包含箭头函数的常规函数，如果没有常规函数的话就是全局对象），这个行为和常规函数不同。这意味着当我们调用 perimeter 时，this 不是指向 shape 对象，而是它的周围作用域（在例子中是 window）。

在 window 中没有 radius 这个属性，因此返回 undefined。
```

