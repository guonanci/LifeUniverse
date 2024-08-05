import {
  fchmodSync
} from 'fs';
import {
  isUndefined
} from 'util';
// You must know for loop of every kind very well
// Coding Style
// stirng template use when number of `+` is over than 4
// Closure
function f() {
  var a = 1
  a = 2
  var b = g()
  a = 3
  return b

  function g() {
    return a
  }
}
// At any point that `g` gets called, the value of `a` will be tied to the value of `a` in `f`. Even if `g` is called
// once `g` is done running, it will be able to access and modify `a`.

// 具名函数表达式的函数名只能在创建函数内部使用
// 即采用此种方法创建的函数在函数外层只能使用fn1不能使用xxcanghai的函数名。xxcanghai的命名只能在创建的函数内部使用
// 在对象内定义函数如var o = { fn: function () {...}} 也属于函数表达式
var fn1 = function xxcanghai() {
  console.log('in:fn1<', typeof fn1, '>xxcanghai:<', typeof xxcanghai, '>') // function undefined

}
console.log('out:fn1<', typeof fn1, '>xxcanghai:<', typeof xxcanghai, '>') // function function

const isType = (obj, type) => {
  if (typeof obj !== 'object') return false
  const typeStr = Object.prototype.toString.call(obj)
  let typeCompareFlag
  switch (type) {
    case 'Object':
      typeCompareFlag = typeStr === '[object Object]'
      break
    case 'Array':
      typeCompareFlag = typeStr === '[object Array]'
      break
    case 'Date':
      typeCompareFlag = typeStr === '[object Date]'
      break
    case 'RegExp':
      typeCompareFlag = typeStr === '[object RegExp]'
      break
    default:
      typeCompareFlag = false
  }
  return typeCompareFlag
}
const getRegExpFlag = re => {
  let flags = ''
  if (re.global) flags += 'g'
  if (re.ignoreCase) flags += 'i'
  if (re.multiline) flags += 'm'
  return flags
}
const deepClone = parent => {
  const parents = []
  const children = []

  const _clone = parent => {
    if (parent == null) return parent
    if (typeof parent !== 'object') return parent
    let child, proto
    if (isType(parent, 'Array')) {
      child = []
    } else if (isType(parent, 'RegExp')) {
      child = new RegExp(parent.source, getRegExpFlag(parent))
      if (parent.lastIndex) child.lastIndex = parent.lastIndex
    } else if (isType(parent, 'Date')) {
      child = new Date(parent.getTime())
    } else if (isType(parent, 'Object')) {
      proto = Object.getPrototypeOf(parent)
      // cut off prototype chain
      child = Object.create(proto)
    }

    // 处理循环引用
    const index = parents.indexOf(parent)

    if (index != -1) {
      // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
      return children[index]
    }
    parents.push(parent)
    children.push(child)

    for (let i in parent) {
      // 递归
      child[i] = _clone(parent[i])
    }

    return child
  }
  return _clone(parent)
}

function fun(n, o) {
  console.log(o)
  return {
    fun: function (m) {
      return fun(m, n) // outer fun
    }
  }
}
// 第一次调用fun(0)时，o为undefined
// 第二次调用fun(1)时m为1，此时fun闭包了外层函数的n，即m=1，n=0，并在内部调用第一层fun函数fun(1, 0)所以o为0，，，第三次，第四次同理，只是m变了，其他不变，
var a = fun(0);
a.fun(1);
a.fun(2);
a.fun(3); //undefined,0,0,0

var b = fun(0).fun(1).fun(2).fun(3); //undefined,0，1，2
var c = fun(0).fun(1);
c.fun(2);
c.fun(3); //undefined,0,1,1

for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
} // 6 * 6 almost at the same time
for (var i = 1; i <= 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i)
    }, 1000)
  })(i)
}


var arr = document.getElementByTagName('p')
for (var i = 0; i < arr.length; i++) {
  // 1
  (function (index) {
    arr[i].onclick = function () {
      alert(index)
    }
  })(i)

  // 2
  arr[i].i = i
  arr[i].onclick = function () {
    alert(this.i)
  }
  // 3
  arr[i].onclick = (function (index) {
    return function () {
      alert(index)
    }
  })(i)

  // 4
  (function () {
    var index = i
    arr[i].onclick = function () {
      alert(index)
    }
  })()

  // 5
  arr[i].onclick = (function () {
    var temp = i
    return function () {
      alert(temp)
    }
  })

  // 6
  (arr[i].onclick = function () {
    alert(arguments.callee.i)
  }).i = i

  // 7
  let j = i // 创建一个块级变量
  arr[i].onclick = function () {
    alert(j)
  }
}






// this








// DOM
element.scrollHeight - element.scrollTop === element.clientHeight元素滚动到底部

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
}




// Number
// 大数危机, 四则运算
// 64 double float


// signal bit符号位 S(63)sign: 0代表正数
// 指数位E：中间的11位存储指数exponent
// 尾数位M，最后的52尾数mantissa，超出部分自动零舍一入
V = Math.pow(-1, S) * Math.pow(2, E) * M


// 十进制的0.1， 0.3转换成二进制：
// 十进制转二进制：
// 整数部分：除二取余（直到除尽），逆序排列
// 小数部分：乘二取整，每次取整后整数部分归零（直到小数部分为0），顺序排列

// 二进制转十进制：
// 整数，小数部分分别按权求和即可
// 0.0001 1001 1001 1001 .... (1001循环)
// 0.0011 0011 0011 。。。。（0011循环）

// IEEE754标准的64位双精度浮点数小数部分最多支持53位二进制，所以两者相加之后得到二进制


// curry
function mul(a) {
  return function (b) {
    return function (c) {
      return a * b * c
    }
  }
}

// function programming

// Array
// Array.from(arrLike[, mapFn[, thisArg]])
function isArr(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

function isArr(arr) {
  // return arr.__proto__ === Array.prototype // chrome, firefox, and other browsers
  return Object.getPrototypeOf(arr) === Array.prototype // better answer
}

function isArr(arr) {
  return $.isArr(arr)
}
const deepFlattern = arr => [].concat(...arr.map(item => Array.isArray(item) ? deepFlattern(item) : item))
// permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
const permutations = arr => {
  if (arr.length < 3) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr
  return arr.reduce(
    (acc, v, i) =>
    acc.concat(
      permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [v, ...val])
    ),
    [],
  )
}
// n! / (n-m)!
const permutations = arr => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr
  return arr.reduce(
    (acc, v, i) =>
    acc.concat(
      permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [v, ...val])
    ),
    [],
  )
}

// [[1, 2], [3, 4], [5, 6]] ===> [[1, 3, 5], [1, 3, 6], [1, 4, 5], [1, 4, 6], ...] // inner arr do not go on sorting
const permutations2 = arr => {
  if (arr.length <= 1) return arr.length ? arr[0].map(v => [v]) : arr
  if (arr.length === 2) return arr[0].reduce((curr, v, k, a) => {
    arr[1].forEach(vInner => acc.push(v).push(vInner))
  }, [])
  return arr.reduce(
    (acc, item, i) => acc.push(
      item.forEach(itemInner => apermutations2([...arr]))
    ),
    [])
}

const permutationTwo = (arr1, arr2) => {
  const arr = []
  for (let i = 0; i < arr1.length; i++) {
    const v1 = arr1[i]
    for (let j = 0; j < arr2.length; j++) {
      const v2 = arr2[j]
      arr.push([v1, v2])
    }
  }
  return arr
}
const permutationTwoDimensional = (arrs) => {
  let arr = arrs[0]
  for (let i = 1; i < arrs.length; i++) {
    arr = permutationTwo(arr, arrs[i])
  }
  return arr
}



// delete是将Object的属性删去的操作。这里的x并不是对象的属性，delete操作符并不能作用，，，严格模式下会报错!!!


// FaskClick
// when you click an element on mobile, events order: touchstart, touchmove, touchend, click
// and when touchend hanppens, fastclick will simulate a click event by DOM userdefine-event, and prevent the default click event after 300ms delay
// dont support double click to scale

// new-standard: pointer event and css touch-action

FastClick.prototype.onTouchEnd = function (event) {
  var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;
  var attributeType = event.target.getAttribute('type')
  if (event.target.hasAttribute("type") && (attributeType === "text" || attributeType === "tel" || attributeType === "password" || attributeType === 'number')) {
    return true
  }
}
FastClick.prototype.sendClick = function (targetEle, e) {
  let clickEvent, touch

  // on some Android devices activeElement needs to be blurred otherwise the synthetic click wiil have no effect
  if (document.activeElement && document.activeElement !== targetEle) {
    document.activeElement.blur()
  }

  touch = event.changedTouches[0]

  // Synthesise a click event, with an extra arrtibute so it can be tracked
  clickEvent = document.createEvent('MouseEvents')
  clickEvent.initMouseEvent(this.determineEventType(targetEle), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null)
  clickEvent.forwardedTouchEvent = true
  targetEle.dispatchEvent(clickEvent)
}

FastClick.prototype.onTouchEnd = function (e) {
  // ...
  this.sendClick(targetEle, e)
  // ...
}

// zepto userdefine tap event,,, but the biggest problem is click-through
// src/touch.js define tap event to replace click, repsenting a smooth-click. This module bind touchstart, touchmove, touchend event on document, then compute touch event times delta, places delta, to define tap, swipe




// Inheritance
// prototype
// constructor function
// combination inheritance:::
// use prototype chain to inherit prototypes field and method, and use
// contructor function to inherit instance field.
function SuperType(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}
SuperType.prototype.sayName = function () {
  alert(this.name)
}

function SubType(name, age) {
  SuperType.call(this, name) // call SuperType the second moment
  this.age = age
}
SubType.prototype = new SuperType()
SubType.prototype.sayAge = function () {
  alert(this.age)
}
const instance1 = new SubType('Nicholas', 30) // call SuperType first time
instance1.colors.push('black')
instance1.colors // [red, blue, gree, black]
instance1.sayName() // Nicholas
instance1.sayAge() // 30



const ins2 = new SubType('Greg', 29)
ins2.colors
ins2.sayName()
ins2.sayAge()
// set SuperType ins to SubType's prototype, and on this prototype, we define method sayAge(),
// Then, let two SubType ins own their fields, including colors, and use the same method.

function object(o) { // ES5 Object.create() standardlize this. And create method accept obj and opts for new objs.
  function F() {}
  F.prototype = o
  return new F()
}
// the second param has the same format with the second param of Object.defineProperties
// parasitic combine inheritance
// combinination's disadvantage: 在第一次调用SuperType构造函数时，SubType.prototype会得到两个属性：name和colors；他们都是SuperType的实例属性，只不过现在位于SubType的原型中。当调用SubType构造函数时，又会调用一次SuperType构造函数。这一次又在新对象上创建了实例属性name和colors。于是，这两个属性就屏蔽了原型中的两个同名属性。
// 有两组name和colors属性：一组在实例上，一组在SubType原型中。所谓寄生组合式继承，是通过借用构造函数来继承属性，通过原型链得混成形式来继承方法。。。不必为了指定子类型的原型而调用超类型的构造函数。我们所需要的无非就是超类型原型的一个副本而已。本质上，就是使用寄生式继承来集成超类型的原型。然后再将结果指定给子类型的原型
function inheritPropotype(subType, superType) { // SubType Constructor, SuperType Constructor
  const prototype = object(superType.prototype) // create object, shallow copy,创建超类型原型的一个副本，第二步是为创建的副本添加constructor属性，从而弥补因重写原型而失去的默认constructor属性。
  prototype.constructor = subType // enhance obj，最后一步，将新创建对象（副本）赋值给子类型的原型。
  subType.prototype = prototype // 指定 obj
}

function SuperType(name) {
  this.name = name
  this.colors = ['red']
}
SuperType.prototype.sayName = function () {
  alert(this.name)
}

function SubType(name, age) {
  SuperType.call(this, name)

  this.age = age
}

inheritPropotype(SubType, SuperType)
SubType.prototype.sayAge = function () {
  alert(this.age)
}
// 这个例子高效率体现在只调用了一次SuperType构造函数，并且因此避免了在SubType.prototype上面创建不必要的，多余的属性。与此同时，原型链还能保持不变；所以，还能够正常使用instanceof和isPrototypeOf。开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。
// call
Function.prototype.call2 = function (context = window) {
  context.fn = this
  const args = []
  for (let i = 1, len = arguments.length; i < len; i++) {
    args.push(`arguments[${i}]`)
  }
  const result = eval(`context.fn(${args})`)
  delete context.fn
  return result
}
// bind
Function.prototype.bind2 = function (context) {
  const that = this
  const args = [].slice.call(arguments, 1)
  return function () {
    const bindArgs = [].slice.call(arguments)
    return that.apply(context, args.concat(bindArgs))
  }
}

// 闭包是指有权访问另一个函数作用域中的变量的函数。创建闭包的常见方式，就是在一个函数内部创建另一个函数。之所以内部函数被返回并在其他地方被调用之后还能够还问外部函数内定义的变量，是因为内部函数的作用域链包含外部函数的作用域。
// 当某个函数第一次被调用时，会创建一个执行环境execution context及相应的作用域链，并把作用域链赋值给一个特殊的内部属性。然后，使用this，arguments和其他命名参数的值来初始化函数的活动对象activation object。但是在作用域中，外部函数的活动对象始终处于第二位，外部函数的外部函数的活动对象处于第三位。。。直至作用域链终点的全局执行环境。

// 后台的每个执行环境都有一个表示变量的对象--变量对象。全局环境的变量对象始终存在。而像compare（）函数这样的局部环境的变量对象，则只在函数执行的过程中存在。在创建compare（）函数时，会创建一个预先包含全局变量对象的作用域链。这个作用域链被保存在内部的【Scope】属性中对象构建起执行环境的作用域链。


// Number
// Bitwise operators,,, 32 bits,,,AND, OR, XOR, NOT, Left shift, right,

// shijinzhi zhuanqita
const n = 110
n.toString(8)
n.toString(16)
n.toString(32)
const m = '110'
parseInt(m, 2)
parseInt(m, 8)
parseInt(m, 16)
// qita zhuan qita
parseInt(m, 16).toString(8)
String.fromCharCode(parseInt(m, 16))

// Bitwise ANDing any number x with 0 yields 0. Bitwise ANDing any number x with -1 yields x.
// Performs the XOR operation on each pair of bits. a XOR b yields if a and b are different. The truth table for the XOR operation is:
// Bitwise XORing any number x with 0 yields x. Bitwise XORing any number x with -1 yields -x.
// ~(Bitwise NOT) Performs the NOT operator on each bit. NOT a yields the inverted value (a.k.a one's complement) of a. The truth table for the NOT operationi is:
// Bitwise NOTing any number x yields -(x + 1).
// >>(Sign-propagating right shift) Bitwise shift operators. Bitwise shifting any number x to the left by y bits yields x * 2 ** y
//

// better condition statement: 1. Array.includes; 2. less nesting, return earlier; 3. params use default value, and destructoring; 4. map objects, ragher than switch state; 5. use Array.every, Array.some

// ES8 features: padStart + padEnd字符串填充; Object.values；Object.entries；Object.getOwnPropertyDescriptors，函数参数列表和调用中的尾随逗号；Async Function 异步函数；共享内存和Atomics；

// Object.getPropertyDescriptories
// JavaScript中的任何对象都有一组属性，每个属性都有一个描述符。描述符是属性property的一组特性attributes，有以下的子集组成：
// value: 属性的值
// writable: true表示该属性可以被修改
// get：属性的getter函数
// set
// configurable：如果为false，则不能删除属性，也不能更改任何属性，但值除外
// enumerable 可枚举

// ES2015给我们带来了Object.assign方法，他从一个或者多个对象复制所有可枚举的属性，并返回一个新对象。。。但是存在问题：无法复制具有非默认特性attribute的属性（property）


const person2 = {}
Object.defineProperties(person2, Object.getOwnPropertyDescriptors(person1))

// 使用Object.create()对浅拷贝对象也有同样的限制

// ES9 features
// rest and spread for obj
// Asyncchronous iteration 新的for-await-of构造允许使用异步可迭代对象作为循环迭代
for await (const line of readLines(filePath)) {
  console.log(line);

}

// 正则表达式先行断言lookahead：根据前面的内容匹配字符串？=，?!;后行断言lookbehind ？<= ?<!，


// requestIdleCallback: https://developers.google.com/web/updates/2015/08/using-requestidlecallback

// Implements MVVM
<
input id = 'input' / >
  const data = {}
const input = document.getElementById('input')
Object.defineProperty(data, 'text', {
  set(v) {
    input.value = v
    this.value = v
  }
})
input.onChange = function (e) {
  data.text = e.target.value
}

// Code Style
// use variable to define long code.
// avoid to use many global variables, use (){}


// BOM
// Browsers Kernel
// IE8(Trident 4.0), IE9(Trident 5.0), IE10(Trident 6.0) Gecko(Firefox), webkit(Safari)
// Compatibility

// IE: addEventListener, Firefox: attachEvent
const addHandler = function (el, type, handler, args) {
  if (el.addEventListener) {
    el.addEventListener(type, handler, false)
  } else if (el.attachEvent) {
    el.attachEvent(`on${type}`, handler)
  } else {
    el[`on${type}`] = handler
  }
}
const removeHandler = function (el, type, handler, args) {
  if (el.addEventListener) {
    el.removeEventListener(type, handler, false)
  } else if (el.detachEvent) {
    el.attachEvent(`on${type}`, handler)
  } else {
    el[`on${type}`] = null
  }
}

target = event.target || event.srcElement

// IE6789
event.preventDefault ? event.preventDefault() : (event.returnValue = false)
event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = false)


防抖节流函数
// file uploader
// input type file
// FileReader object: read file
FileReader.readAsDataURL() // It turns file-readed to base64-encoded string
// FormData object
// axios upload
// file-input attributes:
// 1. accept='image/*' 2. capture capture='user'

https: //juejin.im/post/5c512592e51d4507786250b6?utm_source=gold_browser_extension

  document.body.clientWidth

// Async/Await
// https://juejin.im/post/5c3ff18b6fb9a04a0a5f76aa?utm_source=gold_browser_extension
https: //hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9



  // # ES2015
  // 注意， es2015的字符串模板会强制toString


  // # ES2019
  // row separator and
  // well-formed JSON.stringify



  // `for in` loops over enumerable property names of an object.
  // `for of` (new in ES6) does use an `object-specific:iterator` and loops over the values generated by that.
  // In your example, the `array iterator` does

  // 用 || && 来替换三元表达式

  // 任何原生js，react，ts，immutable.js rxjs，css，HTML的原生API别等到用的时候再去查，这些就像你的姓名一样烂记于心！

  // Array.prototype.splice

  // 什么时候做代码层面的缓存，比方说变量的缓存（比方说这几个变量要在同一模块文件的某几个地方都用上或者说好几个不同文件都用上（这时候考虑放到enum.ts里面去）或者说都经过都一个方法计算出来的变量这时候就该第一时间去缓存起来），还可以通过组件或者方法的封装来实现缓存作用



  // form request
  https: //developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript


  // For ... in
  // the for...in statement iterate over all non-Symbol, enumerable properties of an object.


  // for (variable in object) { ... }
  variable
// A different property name is assigned to variable on each iteration.

object
// Object whose non-Sumbol enumerable properties are iterated over.

// For ... of
// The for ... of statement creates a loop iterating over iterable object, including built-in String, Array, Array-like objects(e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statments to be executed for
// the value of each distinct property of object.

function* foo() {
  yield 1
  yield 2
}
for (let o of foo()) {
  console.log(0)
  console.log()
}

Syntax
for (variable of iterable) {
  statement
}
variable
// on each iteration a value of a different property is assigned to variable. variable may be declared with const, let or var.
iterable
// Object whose iterable properties are iterated.
// Iterating over an Array, String, TypedArray, Map
let iterable = [10, 20, 30]
let iterable = 'bar'
let iterable = new Uint8Array([0x00, 0xff])
let iterable = new Set([1, 1, 3, 3, 2, 2])
let iterable = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3]
])
for (const [key, value] of iterable) {
  console.log(value) // 1 2 3

}
for (let entry of iterable) {
  console.log(entry) // ['a', 1] ['b', 2] ['c', 3]
}

for (const value of iterable) {
  console.log(value) // 0 255
}
(function () {
  for (let argument of arguments) {
    console.log(argument) // 1 2 3

  }
})(1, 2, 3)

// DOM Collections like NodeList: the following example adds a read class to paragraphs that are direct descendants of an article:
// Note: This will only work in platforms that have implemented NodeList.prototype[Symbol.iterator]
let articleParagraphs = document.querySelectorAll('article > p')

for (let paragraph of articleParagraphs) {
  paragraph.classList.add('read')
}


for (let value of iterable) {
  value += 1
  console.log(vaue)
}
// You can use const instead of let too, if you dont reassign the variable inside the block.


// Difference between for...of and for...in
// Both for...in and for...of statements iterate over something. The main difference between them is in what they
// iterate over.
// The for...in statement iterates over the enumerable properties of an object, in an arbitrary order.
// The for...of statement iterates over values that the iterable object defineds to be iterated over.
// The following examples shows the difference between

// react methods use value as paramName, utils.js use functionName to express what this function want to do, also use
// proper parameter name.




// use arrow function as much as possible


// value
// The value to convert to a JSON string.

// replacer (Optional)
// A function that alters the behavior of the stringification process, or an array of String and Number object thats
// used to insert white space



// JSON
JSON.stringify({
  a: 1,
  b: {
    c: 2,
    d: 2
  }
}, ['a', 'b']) // "{"a","b": {}}"
JSON.stringify({
    a: 1
  }, (key, val) => {
    console.log('key is %s', key)
    console.log('value type is %s', typeof (val))
    return val
  }, 2) // tab size or '\t'

  // object toJSON method will overwrite the JSON.stringify() behavior

  // setTimeout setInterval
  // HTML5标准规定， setTimeout的最短时间间隔是4毫秒； setInterval的最短间隔时间是10毫秒， 也就是说， 小于10毫秒的时间间隔会被调整到10毫秒

  // 大多数电脑显示器的刷新频率是60HZ， 大概相当于每秒钟重绘60次。 因此， 最平滑的动画效的最佳循环间隔是1000ms / 60， 约等于16 .6 ms

  // 为了节电， 对于那些不处于当前窗口的页面， 浏览器会将时间间隔扩大到1000毫秒。 另外， 如果笔记本电脑处于电池供电状态， Chrome和IE10 + 浏览器， 会将时间间隔切换到系统定时器， 大约是16 .6 毫秒


  // LazyLoad PreLoad
  // 减少页面所有资源的等待时间，减少首屏时间
  // 减小无效资源的加载、减少服务器压力和流量、减少浏览器的负担
  // prevent too many parallel resources blocking javascript loading

  // principle
  // We must set img height
  // imgs src set to '', while real path is set as data-original value. While page scrolling, in scroll evnet calllback,
  // we judge whether img enter into visual zone, if then we set src value as data-origin value

  <
  html lang = "en" >
  <
  head >
  <
  meta charset = "UTF-8" / >
  <
  title > LazyLoad < /title> <
style >
  .image - item {
    display: block;
    margin - bottom: 50 px;
    height: 200 px;
  } <
  /style> < /
head > <
  body >
  <
  img src = ""
class = "image-item"
lazy - load data - original = "images/1.png" / >
  <
  img src = ""
class = "image-item"
lazy - load data - original = "images/2.png" / >
  <
  img src = ""
class = "image-item"
lazy - load data - original = "images/3.png" / >
  <
  /body> <
script >
  const viewHeight = document.documentElement.clientHeight

function lazyLoad() {
  const elms = document.querySelectorAll('img[data-original][lazy-load]')
  Array.prototype.forEach.call(elms, (item, index) => {
    if (item.dataset.original = '') return
    const rect = item.getBoundingClientRect() // get elm top,right,bottom,left borders distance to viewport border
    if (rect.bottom >= 0 && rect.top < viewHeight) {
      ! function () {
        const img = new Image()
        img.src = item.dataset.original
        img.onload = function () {
          item.src = img.src
        }
        item.removeAttribute('data-original') // remove the data-original attribute, next time we will not iterate
        item.removeAttribute('lazyload')
      }()
    }
  })
}
lazyLoad() // At the beginning, yet not scrolling the screen, we should trigger the function to initialize images on
// first screen
document.addEventListener('scroll', lazyLoad) <
  /script> < /
html >


  // PreLoad
  <
  div class = "hidden" >
  <
  script type = "text/typescript" >
  <
  !-- //--><![CDATA[//><!--
var images = new Array()

function preLoad() {
  for (i = 0; i < preload.arguments.length; i++) {
    images[i] = new Image()
    images[i].src = preload.aguments[i]
  }
}
preload(
    'http://baidu.com/1.png',
    'http://baidu.com/2.png',
    'http://baidu.com/3.png',
  )
  //--><!]]>

  <
  /script> < /
div >

  function preLoader() {
    if (document.images) {
      var img1 = new Image()
      var img2 = new Image()
      var img3 = new Image()
      img1.src = 'http://www.baidu.com/1.png'
      img2.src = 'http://www.baidu.com/2.png'
      img3.src = 'http://www.baidu.com/3.png'
    }
  }

function addLoadEvent(fun) {
  var oldOnLoad = window.onload
  if (typeof window.onload != 'function') {
    window.onload = fun
  } else {
    window.onload = function () {
      if (oldOnload) {
        oldOnLoad()
      }
      fun()
    }
  }
}
addLoadEvent(preLoader)

window.onload = function () {
  setTimeout(function () {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://domain.tld/preload.js')
    xhr.send('')
    xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://baidu.com/preload.css')
    xhr.send('')
    // preload image
    new Image().src = 'http://baidu.com/preload.png'
  })
}

// BOM
clientHeight innerHeight


// ES
const {
  x: otherName
} = obj


// RE
Assertions
x( ? = y)

  /
  x(\ ? \ = y) / .test('x?=y') /
  x(\ ? \ = y) / .test('xy') /
  x( ? = y) / .test('xy')

x( ? !y) / \d + ( ? !\.) / .exec('3.141') //141
const thousand = num => `${num}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

'at noon'.match(/\Bon/) // ['on']

const randomId = len => Math.random().toString(36).substr(3, len)

const randomColor = () => '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')

const startScore = rate => ''.slice(5 - rate, 10 - rate)

const params = new URLSearchParams(location.search) // ?name=yajun&sex=female
params.has('yajun') // true
params.get('sex') // female

const num1 = ~~1.69 // equivalent to Math.floor of positive, and Math.ceil of negative
const num2 = 1.69 | 0
const num3 = 1.69 >> 0

const fillZero = (num, len) => `${num}`.padStart(len, '0')

  +
  null === +'' === +false === 0

const timestamp = new Date('2019-03-31') // 1553990400000
const round = (num, decimal) => Math.round(num * 10 ** decimal) / 10 ** decimal
const num = round(1.69, 1)
const odd = !!(num & 1)
const arr = [0, 1, 2]
const min = Math.min(...arr)

节流的原理很简单：

如果你持续触发事件， 每隔一段时间， 只执行一次事件。

根据首次是否执行以及结束后是否执行， 效果有所不同， 实现的方式也有所不同。
我们用 leading 代表首次是否执行， trailing 代表结束后是否再执行一次。

关于节流的实现， 有两种主流的实现方式， 一种是使用时间戳， 一种是设置定时器。
const throttle = (fn, delay, ...args) => {
  let prevTime = null
  return () => {
    const curTime = +new Date()
    if (curTime - prevTime >= delay) {
      fn(args)
      prevTime = curTime
    }
  }
}
const throttleAwesome = (fn, delay, options, ...args) => {
  let timeout, rs
  let prevTime = 0
  if (!options) options = {}
  const later = () => {
    prevTime = options.leading === false ? 0 : new Date().getTime()
    timeout = null
    fn(args)
    if (!timeout) context = args = null
  }
  const throttled = () => {
    const curTime = new Date().getTime()
    if (!prevTime && options.leading === false) prevTime = curTime
    const remainingTime = delay - (curTime - prevTime)
    context = this
    args = arguments
    if (remainingTime <= 0 || remainingTime > delay) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      prevTime = curTime
      fn(args)
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
  }
  throttled.cancel = () => {
    clearTimeout(timeout)
    prevTime = 0
    timeout = null
  }
  return throttled
}
window.addEventListener('scroll', throttle(realFun, 500, 1000))
window.addEventListener('scroll', throttle(realFun, 500, 1000))

防抖的原理就是： 你尽管触发事件， 但是我一定在事件触发 n 秒后才执行， 如果你在一个事件触发的 n 秒内又触发了这个事件， 那我就以新的事件的时间为准， n
秒后才执行， 总之， 就是要等你触发完事件 n 秒内不再触发事件， 我才执行， 真是任性呐!
  const debounce = (fn, delay, ...args) => {
    let timer = null
    return () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn(args)
      }, delay)
    }
  }
const debounceAwesome = (fn, delay, immediate, ...args) => {
  let timeout, rs
  const debounced = () => {
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      // 如果已经执行过，不再执行
      const callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, delay)
      if (callNow) rs = fn(args)
    } else {
      timeout = setTimeout(() => {
        fn(args)
      }, delay)
    }
    return rs
  }
  debounced.cancel = () => {
    clearTimeout(timeout)
    timeout = null
  }
  return debounced
}

const debounce = (fn, wait) => {
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, wait)
  }
}

async function run() {
  const a1 = debounce(console.log, 50)
  debugger
  a1(1, 2)
  await sleep(10)
  a1(2, 3)
  await sleep(20)
  a1(3, 4)
  await sleep(30)
  a1(4, 5)
  await sleep(40)
  a1(5, 6)
  // 经过 50 毫秒（近似），只打印出 5 6

  await sleep(51)
  a1(6, 7)
  // 打印出 6 7
}

const sleep = ms =>
  new Promise(resolve =>
    setTimeout(resolve, ms)
  )

run()


const twoObjectsEqual = (obj1, obj2) => {
  const entries1 = Object.entries(obj1)
  const entries2 = Object.entries(obj2)
  entries1.forEach((itm, idx) => {
    if (itm[0] !== entries2[idx][0]) return false
    if (typeof itm[1] !== 'object' && typeof entries2[idx][1] !== 'object') {
      if (itm[1] !== entries2[idx][1]) return false
    } else if ((typeof itm[1] !== 'object' && typeof entries2[idx][1] === 'object') || (typeof itm[1] === 'object' &&
        typeof entries2[idx][1] !== 'object')) {
      return false
    } else {
      twoObjectsEqual(itm[1], entries2[idx][1])
    }
  })
  return true
}


function deepClone(obj) {
  const clonedObj = Object.assign({}, obj)
  Object.keys(clonedObj).forEach(
    key => (clonedObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  )
  return Array.isArray(obj) ? (clonedObj.length = obj.length) && Array.from(clonedObj) : clonedObj
}

const add = x => y => x + y

var value = 2
var obj = {
  value: 1
}

function bar(name, age) {
  console.log(this.value)
  return {
    value: this.value,
    name,
    age,
  }

}
bar.call(null) // 2
bar.call(obj, 'kevin', 18) // 1, { value: 1, name: 'kevin', age: 18 }
bar.call(foo, arg1, arg2)
// 观察者模式
Function.prototype.call2 = function (context = window) {
  context.fn = this
  const args = []
  for (let i = 1, len = arguments.length; i < len; i++) {
    args.push(`arguments[${i}]`)
  }
  const result = eval(`context.fn(${args})`)
  delete context.fn
  return result
}

if (!Function.prototype.apply) {
  Function.prototype.apply = function (context, arr) {
    context.fn = this

    let result
    if (!arr) {
      result = context.fn()
    } else {
      const args = []
      for (let i = 0, len = arr.length; i < len; i++) {
        args.push(`arr[${i}]`)
      }
      result = eval(`context.fn(${args})`)
      delete context.fn
      return result
    }
  }
}

Function.prototype.bind2 = function (context) {
  var self = this
  var args = Array.prototype.slice.call(arguments, 1)
  return function () {
    // 这个时候的 arguments 是指bind返回的函数传入的参数
    var bindArgs = Array.prototype.slice.call(arguments)
    return self.apply(context, args.concat(bindArgs))
  }
}


if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== 'function') {
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable')
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
      fToBind = this,
      fNOP = function () {},
      fBound = function () {
        return fToBind.apply(
          // 当bind返回的函数作为构造函数时，this指向实例，此时结果为TRUE，将绑定函数的this指向该实例
          this instanceof fNOP ? this : oThis,
          aArgs.concat(Array.prototype.slice.call(arguments))
        )
      }

    if (this.prototype) {
      // Function.prototype doesn't have a prototype property
      fNOP.prototype = this.prototype
    }
    fBound.prototype = new fNOP()

    return fBound
  }
}

function sleep(ms) {
  var temple = new Promise(
    (resolve) => {
      console.log(111)
      setTimeout(() => {
        resolve()
      }, ms);

    }
  )
  return temple
}

sleep(500).then(function () {
  // console.log(222)

})

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
async function test() {
  var temple = await sleep(1000)
  console.log(1111)
  // return temple
}
test()

function* sleep(ms) {
  yield new Promise(function (resolve, reject) {
    console.log(111)
    setTimeout(resolve, ms)

  })
}
sleep(500).next().value.then(function () {
  console.log(222)
})


function MyPromise(constructor) {
  const self = this
  self.status = 'pending' // 定义状态改变前的初始状态
  self.value = undefined // 定义状态为resolved的时候的初始状态
  self.reason = undefined // 定义状态为rejected的时候的初始状态
  self.onFullfilledArr = []
  self.onRejectedArr = []

  function resolve(value) {
    if (self.status === 'pending') {
      self.value = value
      self.status = 'resolved'
      self.onFullfilledArr.forEach(function (f) {
        f(self.value)
      })
    }
  }

  function reject(reason) {
    if (self.status === 'pending') {
      self.reason = reason
      self.status = 'rejected'
      self.onRejectedArr.forEach(function (f) {
        f(self.reason)
      })
    }
  }
  // 捕获构造异常
  try {
    constructor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  const self = this
  switch (self.status) {
    case 'pending':
      self.onFulfilledArr.push(function () {
        onFulfilled(self.value)
      })
      self.onRejectedArr.push(function () {
        onRejected(self.reason)
      })
    case 'resolved':
      onFulfilled(self.value)
      break
    case 'rejected':
      onRejected(self.reason)
      break
    default:
  }
}


Object.getPrototypeOf
__proto__ // chrome, firefox

function Events() {
  this.on = function (eventName, cb) {
    if (!this.handles) this.handles = {}
    if (!this.handles[eventName]) this.handles[eventName] = []
    this.handles[eventName].push(cb)
  }
  this.emit = function (eventName, params) {
    if (this.handles && this.handles[eventName]) {
      this.handles[eventName].forEach(item => {
        item(params)
      })
    }
  }
}

function instanceOf(left, right) { // instanceof is a reserved keyword.
  let proto = left.__proto__
  const prototype = right.prototype
  while (true) {
    if (proto === null) return false
    if (proto === prototype) return true
    proto = proto.__proto__
  }
}


dragstart, drag, dragenter, dragover, dragleave, drop, dragend


this.value = this.value.replace(/\s/g, '').replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ')

// x(?=y) Matches x only if x is followed by y
// x(?!y) Matches x only if x is not followed by y

function float2Int(float, len = 0) {
  const parts = `${float}`.split('.')
  if (len < 0) len = 0
  parts[1]
}

function fun(n, o) {
  console.log(o)
  return {
    fun: function (m) {
      return fun(m, n)
    }
  }
}

var a = fun(0);
a.fun(1);
a.fun(2);
a.fun(3); // undefined, undefined
var b = fun(0).fun(1).fun(2).fun(3);
var c = fun(0).fun(1);
c.fun(2);
c.fun(3);

export function bindFunction(functions) {
  functions.forEach(f => this[f] = this[f].bind(this))
}


why we need to enhance scroll event, the relationship of scrolling with page rendering, throttle and debounce, pointer - events: none


let i = 0;
window.addEventListener('scroll', () => {
  console.log(i++)
}, false)
// if there are lots of position computing, DOM opratioins, elements rePaint in the eventHandler, and these jobs cant be
// finished before next scroll triggering, then browser will lose frames. And user mouse scrolling often is continous,
// then will persistently trigger scroll event causing losing frames expand, browsers CPU use rates increase, user experience
// get influenced.
window.addEventListener('scroll', debounce(realFun, 500))

// debounce is to setTimeout, if we want to realize setInterval effects like lazyLoad, we will use throttle.


// Before page repaint, window.requestAnimationFrame(cb). This adapts to higher version browsers and mobile browsers and
// high precision scenarios.

// rAF is often used as animation, to accurately control page frame refresh rendering to make effects more smooth.

// rAF is not timer
// Usually, rAF called frequency is 60 times per second, about 16.7 triggering frequency.(And when executing complicated
// operations frequency will lower to 30fps to sustain frames stability.)
// When using requestAnimationFrame to trigger scrolling event, its like
throttle(fun, xx, 1000 / 60) // it meant that in xx ms wont trigger event handler

let ticking = false

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(realFun)
    ticking = true
  }
}

function realFun() {
  console.log('Success')
  ticking = false
}

window.addEventListener('scroll', onScroll, false)

// .disable-hover {
//   pointer-events: none;
// }


let isType = type => val => Object.prototype.toString.call(val) === '[object' + val + ']'

isType('String')(123)

add(1)(2)(3)(4)(...)(n - 1)(n)

function add(a) {
  function sum(b) { // Closure
    a += b
    return sum
  }
  sum.toString = function () { // Overwrite toString method
    return a
  }
  return sum
}

Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a - b)

// For
// for...in, 1. create index, stringified number; 2. order is not fixed; 3. use `for in` to iterate all props of  array,
// including prototype and custom props of arr
// So use for in to iterate objects, not arrays. Arrays use `for of`
// for ... in => keys, for ... of => values
// for ... of is ES6 feature, enhance ES5 for ... in
// we cant use for ... of on objects, only if with Object.keys

const {
  data: resData = []
} = resBody


Object.prototype.objCustom = function () {}
Array.prototype.arrCustom = function () {}

let iterable = [3, 5, 7]
iterable.foo = 'hello'

for (let i in iterable) console.log(i) // 0, 1, 2, 'foo', 'arrCustom', 'objCustom'

for (let i of iterable) console.log(i) // 3, 5, 7

// Engineering
// webpack vs requirejs
// when webpack manage modules, no need to seal and package: `define(['jquery'], function (jquery) {})
// webpack realize frontend code modular, raise code reuse ability, and provide common chunks caching.

// By packing, in webpack, different pages load their own javascript files and common javascript files.
// Requirejs pack all javascript into one file, common javascript modules of many pages in one site cannot cache
// Webpack import split point and chunk, split point define all modules depended, all combined is a chunk, then one page
// can import one chunk



// Virtual DOM

// When data changes, set method will Dep.notify to notify all watchers, watchers will call patch to patch real DOM, update
// corresponding view

setter

departFocus.notify

patch(oldVNode, vNode)
isSameVNode ?
  no yes
replace patchVNode
return VNode has child Node, vNode doesnt have;
oldVNode doesnt have child Node, vNode has;
both have text node


// patch function: 1. Judge two vNodes is worth comparing, if yes then execute patchVNode function; 2. If not worth then
// use VNode to replace oldVNode

// patchVNode
// find corresponding real DOM, elm
// vNode and oldVNode is the same obj? if yes, then return
// if they both have text node and not equal, then set el's text node as vNode's text node
// If oldVNode has child node but vNode doesnt have, then delete el's child node
// If oldVNode does not have child node but vNode has, then realize vNode child node and insert to el
// If they both have child node, then execute updateChildren function to compare child node

// updateChildren function
// oldS,oldE,S,E 两两做sameVNode比较，有四种比较方式，其中两个能匹配上的话那么真实DOM中的相应节点会移到vNode相应的位置
// 如果是oldS和E匹配上了，那么真实DOM中的第一个节点会移到最后
// 如果是oldE和S匹配上了，那么真实DOM中的最后一个节点会移到最前，匹配上的两个指针向中间移动
// 如果四种匹配没有一对是成功的，那么遍历oldChild，S挨个和他们匹配，匹配成功就在真实DOM中将成功的节点移到最前面，如果依旧没有成功的，那么将S
// 对应的节点插入到DOM中对应的oldS位置，oldS和S指针向中间移动


// http
// get && post
// 基本区别
// 应用: 表单的method属性设置post发送post请求，否则默认是get请求（没有考虑ajax）
// 传参方式: get请求通过URL地址发送请求参数，post请求通过请求体发送请求参数
// 安全性：get请求，参数在地址栏可见，不太安全；post请求，参数在地址栏不可见，相对安全
// 大小限制：get请求直接URL发送请求参数，URL地址的长度限制在255字节内（不同浏览器有区别），所以get请求不能发送过多的参数，post请求
// 通过body发送参数，长度没有限制
// get方法提交的数据大小长度，w3c标准并没有相关限制，但是IE浏览器本身对地址栏URL长度（浏览器对请求头有限制）有最大长度限制;2048个字符

// get本质是得，post本质是给。get的内容可以被浏览器缓存，post数据不可以。
// 1.get产生一个TCP数据包，一个是请求头，一个请求体的；post产生两个TCP数据包
// 2.在一次请求中，get一次性完成，post在部分浏览器（除了火狐）需要发送两次信息（第一次是option请求，确认浏览器支持哪些请求方式，包含post的话
// 就发送第二次的post请求，一般来讲所有浏览器都是支持post请求的，但是有可能是put、delete这种方式的请求），所以get比post更快，更有效率（所以
// 说很多大公司比较喜欢get请求，get请求只要不放关键性参数是没有安全性问题的）


// Cross Origin
// 1. 不同源就是跨域
// 2. 同源策略时浏览器的一种安全策略
// 3. 协议、域名、端口号完全相同就是同源，只要有一处不一样就是跨域
// 4. 特例：ajax在判断域名的时候只能解析字符串，导致（localhost和127.0.0.1）在它看来也是跨域请求
// 5. 解决跨域的方式通常用cors和jsonp
// 6. jsonp jsonp是一门技巧不是一门新技术；利用script标签的src属性不受跨域限制的特点；解决跨域：1.浏览器端：动态生成script标签，提前定义
// 好回调函数，在合适时机添加src属性指定请求地址。2. 服务器端：后台接收到回调函数，将数据包括在回调函数调用的句柄中，一起返回。 3. 只支持get请求
// JSONP 的理念就是，与服务端约定好一个回调函数名，服务端接收到请求后，将返回一段 Javascript，在这段 Javascript 代码中调用了约定好的回调函
// 数，并且将数据作为参数进行传递。当网页接收到这段 Javascript 代码后，就会执行这个回调函数，这时数据已经成功传输到客户端了。
nginx正向代理 https: //www.cnblogs.com/fanzhidongyzby/p/5194895.html

  function jsonp({
    url,
    params,
    callback
  }) {
    return new Promise((resolve, reject) => {
      // create script
      const script = document.createElement('script')
      window[callback] = function (data) {
        resolve(data)
        document.body.removeChild(script)
      }
      // params reformat
      params = {
        ...params,
        callback
      }
      const arr = []
      for (const key in params) {
        arr.push(`${key} = ${params[key]}`)
      }
      // background get data's interface add params
      script.src = `${url}?${arr.join('&')}`
      // script insert
      document.body.appendChild(script)
    })
  }
jsonp({
  url: 'http://localhost:3000/say',
  params: {
    wd: 'Iloveyou'
  },
  callback: 'show',
}).then(data => {
  console.log(data)
})
// 7. CORS

// 1. 浏览器端什么也不用干
// 2. 服务器端设置响应头：Access-Control-Allow-Origin
// 3. cors是一门技术，在本质上让ajax引擎允许跨域
// 4. get和post请求都支持

// 为什么cors能解决跨域
// 和第一次发送的option请求有关
// 跨域时，浏览器会拦截ajax请求，并在http头中加origin

// Storage
// localStoragese：常用于长期登录（+判断用户是否已登录），适合长期保存在本地的数据；sessionStorage：敏感账号一次性登录。
// 存储大小：localStorage和sessionStorage的存储数据大小一般都是：5MB；
// sessionStorage比localStorage更严苛一点，除了协议、主机名、端口外，还要求在同一窗口（也就是浏览器的标签页）下。
// cookie每次的发送请求是被默认带上的，
// 存储位置：localStorage和sessionStorage都保存在客户端，不与服务器进行交互通信。

// session的生命周期为什么只在一次会话中？
// session是服务端的；它用来和客户端的cookie进行匹配，说它一次会话保存的意思是sessionID每次会话都是一个新的，但是session一直是有的。

// Cookie存储和Web Storage存储区别
// localStorage与sessionStorage作为新时代的产物，相比旧时代的cookie有其巨大的优越性。优越性有三:

// 其一在能存储的数据量，cookie最大能存储4kb的数据，而localStorage与sessionStorage最大能存储5Mb，目前各大浏览器支持的标准都是如此；
// 其二在功能上，cookie只能存储String类型的数据，以往要将用户数据存储在本地，需要将数据拼接成字符串，再存进cookie,取数据的时候同样麻烦，先将整个cookie对象拿到（String对象），再按拼接的规则拆分，再拿需要的数据，存取都很麻烦！ localStorage与sessionStorage不仅支持传统的String类型，还可以将json对象存储进去,存取数据都方便不少，json的优越性就不赘述，localStorage与sessionStorage无疑更现代化；
// The second point is meaningless
// 其三是cookie是不可或缺的，cookie的作用是与服务器进行交互，作为http规范的一部分而存在；而web storage仅仅是为了在本地‘存储’而生；
// 其四在语义层面上，localStorage与sessionStorage语法更优雅、简便。

document.cookie = 'key=value' // set cookie
document.cookie // get cookie
document.cookie = 'key=value;max-age=0' // remove cookie
document.cookie = 'key=value;max-age=1000' // 1000 seconds, set max-age storage seconds

// web storage operation
setItem(key, value)
getItem(key)
removeItem(key)
clear()
key()

// Cookie
// Http Cookie(Web Cookie, Browser Cookie)是服务器发送到用户浏览器并保存在本地地一小块数据，他会在浏览器下次向同一服务器再次发起请求时被
// 携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器，如保持用户的登录状态。
// Cookie使无状态http协议记录稳定的状态信息成为可能

// 主要用于以下三个方面
// 会话状态管理（用户登录状态、购物车、游戏分数或者其他需要记录的信息）
// 个性化设置，如用户自定义设置、主题等等
// 浏览器行为跟踪，如跟踪分析用户行为等等

// Session代表着服务器和客户端一次会话地过程。Session对象存储特定用户回话所需地属性及配置信息。这样，当用户在应用程序的Web页之间跳转时，存储
// 在Session中的变量将不会丢失，而是在整个用户会话中一直存在下去。当客户端关闭会话或者Session超时失效时会话结束。

// Cookie 和 Session 有什么不同？
// 作用范围不同，Cookie 保存在客户端（浏览器），Session 保存在服务器端。
// 存取方式的不同，Cookie 只能保存 ASCII，Session 可以存任意数据类型，一般情况下我们可以在 Session 中保持一些常用变量信息，比如说 UserId 等。
// 隐私策略不同，Cookie 存储在客户端，比较容易遭到不法获取，早期有人将用户的登录名和密码存储在 Cookie 中导致信息被窃取；Session 存储在服务
// 端，安全性相对 Cookie 要好一些。
// 存储大小不同， 单个 Cookie 保存的数据不能超过 4K，Session 可存储数据远高于 Cookie。
// 有效期不同，Cookie 可设置为长时间保持，比如我们经常使用的默认登录功能，Session 一般失效时间较短，客户端关闭或者 Session 超时都会失效。

// 用户第一次请求服务器的时候，服务器根据用户提交的相关信息，创建创建对应的 Session ，请求返回时将此 Session 的唯一标识信息 SessionID 返回
// 给浏览器，浏览器接收到服务器返回的 SessionID 信息后，会将此信息存入到 Cookie 中，同时 Cookie 记录此 SessionID 属于哪个域名。

// 当用户第二次访问服务器的时候，请求会自动判断此域名下是否存在 Cookie 信息，如果存在自动将 Cookie 信息也发送给服务端，服务端会从 Cookie 中
// 获取 SessionID，再根据 SessionID 查找对应的 Session 信息，如果没有找到说明用户没有登录或者登录失效，如果找到 Session 证明用户已经登录
// 可执行后面操作。

// 根据以上流程可知，SessionID 是连接 Cookie 和 Session 的一道桥梁，大部分系统也是根据此原理来验证用户登录状态。

// 既然服务端是根据 Cookie 中的信息判断用户是否登录，那么如果浏览器中禁止了 Cookie，如何保障整个机制的正常运转。


// 第四层楼

// 第一种方案，每次请求中都携带一个 SessionID 的参数，也可以 Post 的方式提交，也可以在请求的地址后面拼接 xxx?SessionID=123456...。

// 第二种方案，Token 机制。Token 机制多用于 App 客户端和服务器交互的模式，也可以用于 Web 端做用户状态管理。

// Token 的意思是“令牌”，是服务端生成的一串字符串，作为客户端进行请求的一个标识。Token 机制和 Cookie 和 Session 的使用机制比较类似。

// 当用户第一次登录后，服务器根据提交的用户信息生成一个 Token，响应时将 Token 返回给客户端，以后客户端只需带上这个 Token 前来请求数据即可，无需再次登录验证。


// 第五层楼
// 如何考虑分布式 Session 问题？

// 在互联网公司为了可以支撑更大的流量，后端往往需要多台服务器共同来支撑前端用户请求，那如果用户在 A 服务器登录了，第二次请求跑到B 服务器就会出现
// 登录失效问题。

// 分布式 Session 一般会有以下几种解决方案：

// Nginx ip_hash 策略，服务端使用 Nginx 代理，每个请求按访问 IP 的 hash 分配，这样来自同一 IP 固定访问一个后台服务器，避免了在服务器 A 创建 Session，第二次分发到服务器 B 的现象。

// Session 复制，任何一个服务器上的 Session 发生改变（增删改），该节点会把这个 Session 的所有内容序列化，然后广播给所有其它节点。

// 共享 Session，服务端无状态话，将用户的 Session 等信息使用缓存中间件来统一管理，保障分发到每一个服务器的响应结果都一致。

// 建议采用第三种方案。

const object = {
  x: 42,
  y: 50
}
const entries = Object.entries(object)

for (const [key, value] of entries) {
  console.log(`The value of ${key} is ${value}.`)
}

Object.fromEntries

const obj = {
  x: 42,
  y: 1,
  abc: 1
}
const result = Object.fromEntries(
  Object.entries(obj)
  .filter(([key, value]) => key.length === 1)
  .map(([key, value]) => [key, value * 2])
)
// The `Map` object holds key-value pairs and remembers the original insertion order of the keys.
// Any value(both objects and primitive values) may be used as either a key or a value.

new Map([iterable]) // An array or other iterable object whose elements are key-value pairs(arrays with two elements,
// e.g. [[ 1, 'one' ], [ 2, 'two' ]])



const getGlobalThis = () => {
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  if (typeof this !== 'undefined') return this
  throw new Error('Unable to locate global object')
}
const theGlobalThis = getGlobalThis()

Promise.race Promise.any


// Whatis new in JavaScript Google I/O  '19

// numeric separators
// Object.fromEntries
// BigInt
// globalThis
// class fields
// more Intl.* APIs
// String#matchAll
// top-level await
// Array#{flat, flatMap}
// Promise.{allSettled, any}
// WeakRef

function isPowerOfFour(n) {
  while (n !== 0 && n % 4 === 0) {
    n /= 4
  }
  return n === 1
}

function hammingWeight(n) {
  let r = 0
  for (let i = 0; i < 32; ++i) {
    r += (n & 1)
    n = n >> 1 // 执行 n & （n - 1）操作来消除n末尾的1，消除了多少次就说明有多少个1
  }
  return r
}

function isPowerOfTwo(n) {
  const cnt = 0
  while (n > 0) {
    cnt += (n & 1)
    n >>= 1
  }
  return cnt === 1
}

function isPowerOfTwo(n) {
  return n > 0 && (!(n & (n - 1)))
}


// Immutable.js
// Map({ a: 1 }) is better than fromJS({ a: 1 }), but Map({ a: 1, b: List([]) }) is worse than fromJS({ a: 1, b: [] })


let a;
console.time('a');
for (let i = 0; i < 1000000; i++) {
  a = Map({
    a: 1,
    b: List([1])
  });
};
console.timeEnd('a');
let b;
console.time('b');
for (let i = 0; i < 1000000; i++) {
  b = fromJS({
    a: 1,
    b: [1]
  });
};
console.timeEnd('b');

// rules
// Arrow function used ambiguously with a conditional expression.eslint(no - confusing - arrow)

// 函数只有一个参数的时候我是肯定不会带括号的
// 写map、filter、reduce（两个参数）等等数组的遍历方法还有对象的一些方法时，就写一个参数。写到后面发现需要两个参数就写两个参数。其他经常
// 要用到方法也是类似的偷懒技巧，哈哈哈我就是个懒鬼，不会偷懒的程序员就不是一个合格的程序员

render: date => date ? moment(date).format('YYYY-MM-DD') : '-',
  render: date => (date ? moment(date).format('YYYY-MM-DD') : '-'),


  const selfMap = function (fn, context) {
    const arr = Array.prototype.slice.call(this)
    const mappedArr = []
    fo(let i = 0; i < arr.length; i++) {
      if (!arr.hasOwnProperty(i)) continue
      mappedArr.push(fn.call(context, arr[i], i, this))
    }
    return mappedArr
  }

const selfMap2 = function (fn, context) {
  const arr = Array.prototype.slice.call(this)
  return arr.reduce((acc, cur, index) => {
    return [...pre, fn.call(context, cur, index, this)]
  }, [])
}

const add = (a, b, c, d) => a + b + c + d
const curriedAdd = curry(add)
curriedAdd(5)(6)(7)(8)
add(5, 6, 7, 8)

function initials(name) {
  return name.split(' ').map(compose(toUpperCase, head)).join('. ')
}

const split = curry((separator, str) => str.split(separator))
const head = str => str.slice(0, 1)
const toUpperCase = str => str.toUpperCase()
const join = curry((separator, arr) => arr.join(separator))
const map = curry((fn, arr) => arr.map(fn))

const initials = compose(join('.'), map(compose(toUpperCase, head)), split(' '))

initials('kevin daisy kelly')

const toUpperCase = x => x.toUpperCase()
const hello = x => `HELLO, ${x}`
const greet = x => hello(toUpperCase(x)) // fn3(fn2(fn1(fn0(x))))

const compose = (f, g) => x => f(g(x))

const compose = (f, g) => {
  return function (x) {
    return f(g(x))
  }
}
// 让代码从右向左运行，而不是由内而外运行，可读性大大提升

function compose() {
  const args = arguments
  const start = args.length - 1
  return function () {
    let i = start
    let result = args[start].apply(this, arguments)
    while (i--) result = args[i].call(this, result)
    return result
  }
}



// Form
// 注意在使用fetch方法时， 不用设置header, body上直接传封装后的formData
fetch('./file.php', {
  method: 'POST',
  headers: {},
  body: formData,
})

如果不是webpack是gulp的话，
export * from './Button'
就识别不了喽


// Class Fields
// private field
class Counter {
  constructor() {
    this.count = 0
  }
  inc() {
    ++this.count
  }
}

// js@2019 独立提案、分别演进 Stage 0 => 4, ES2016 + 2, ES2017 + 6, ES2018 + 8, ES2019 + 8, ES2020 + 1.
// 语法改进、新增内置API、新语言特性、其他修订
// Exponentiation operator (ES2016), Trailing commas in function (ES2017), Optional catch binding (ES2019).
// Exponentiation operator: Math.pow(x, y); x ** y; -,~,!x ** y // SyntaxError -(x ** y), (-x) ** y // correct
(-100) ** 0.5 // NaN
// 为什么很多程序无法计算负数的立方根 IEEE754
// Trailing commas in function copy/past,diff,git blame
// Optional catch binding
try {
  // ...
} catch (unused) {
  // ...
}
try {
  return JSON.parse(input)
} catch {
  return null
}
// 简化linter，显式编码意图、引擎优化可能

// 新增内置API
Array.prototype.includes // ES2016
Array.prototype.flat / flatMap // ES2019
[NaN].indexOf(NaN) // -1
[NaN].includesf(NaN) // true
[1, 2, 3].flatMap(x => [x, x]) // [ 1, 1, 2, 2, 3, 3 ]

String.prototype.padStart / padEnd // ES2017
String.prototype.trimStart / trimEnd // ES2019
String.prototype.matchAll // ES2020

const num = 42
String(num).padStart(4, '0') // '0042'
String(num).padStart(4) // '42'
' FDCon 2019 '.padStart(17, '.:').padEnd(40, '.:') // '.:.:. FDCon 2019 .:.:.:xxx'
const s = '\u3000\u3000Test string \r\n'
s.trim() // 'Test string'
s.trimStart() // 'Test string \r\n'
s.trimEnd() // '   Test string'
// start/end && left/right
Symbol.prototype.description // ES2019
const s = Symbol('test')
s.toString() // 'Symbol(test)'
s.description // 'test'
Promise.prototype.finally // ES2018
try {
  doSth()
} catch (er) {
  handleError(er)
} finally {
  cleanup()
}
Promise
  .then(doSth)
  .catch(handleError)
  .finally(cleanup)

function ajaxGetAsync(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener('error', reject)
    xhr.addEventListener('load', resolve)
    xhr.open('GET', url)
    xhr.send(null)
  }).finally(() => {
    $('#ajax-loader-animatioin').hide()
  })
}

Object.getOwnPropertyDescriptors() // ES2017
Object.values / entries // ES2017
object.fromEntries // ES2019
// RegExp named capture groups ES2018
// RegExp Unicode ES2018
// 新语言特性
// Shared memory and atomics ES2017
// Async functions ES2017
// Asynchronous Iteration ES2018
// Rest/Spread Properties ES2018
const {
  value,
  done
} = syncIterator.next()

asyncIterator.next().then(({
  value,
  done
}) => {
  /*...*/
})
const {
  value,
  done
} = await asyncIterator.next()

for await (const line of readLines(filePath)) {
  console.log(line)
}
async function* readLines(path) {
  const file = await fileOpen(path)
  try {
    while (!file.EOF) {
      yield await file.readLine()
    }
  } finally {
    await file.close()
  }
}

const readable = fs.createReadStream()
readable.on('data', chunk => {
  /* ... */
})

// Node.js 10+
for await (const k of readable) {
  // ...
}

// JSON superset ES2019
// Well-formed JSON.stringify ES2019
// Lifting template literal restrictioin ES2018
// Function.prototype.toString revision ES2019

// 兼容性
// ES2020+
// STC vs PTC Stage ?
// globalThis stage3
// class fields stage3
function sum(n, total = 0) {
  if (n === 0) return total
  else return sum(n - 1, total + n)
}

function sum(n, total = 0) {
  if (n === 0) return total
  else return
}

let arr = Array(5).fill('')
const uniqueWithArrFrom = Array.from(new Set(arr)) // [new Set(arr)]

// Array.prototype.from还可以接受第二个参数，作用类似于Array.prototype.map

// Path
const path = require('path')
console.log(__dirname) // 总是返回被执行的js所在文件夹的绝对路径、当前执行文件所在目录的完整目录名
console.log(__filename) // 总是返回被执行的js的绝对路径、当前执行文件的带有完整绝对路径的文件名
console.log(process.cwd()) // 运行node命令时所在的文件夹的绝对路径、当前执行node命令时候的文件夹目录名
console.log(path.resolve('./')) // same as above。不使用require时候，./ is same as process.cwd(); when require, same as __dirname

// 只有在require（）才使用相对路径 ./ ../的写法，其他地方一律使用绝对路径
path.direname(__filename) + '/path.js'
path.resolve(__dirname, '../regx/regx.js')

path.normalize()
path.join('src', 'index.js')
path.join([...paths]) // Unix /, Windows \. If paths are '', return '.' presenting curDir
path.parse('/loala/Desktop/practice/nodejs')
const result = {
  root: '/',
  dir: '/koala/Desktop/practice/nodejs',
  ext: '',
  name: 'nodejs',
}

path.basename()
path.dirname()
path.extname()

path.resolve([...paths]) // shell cd command, from begin to end run `cd path`, to get absolutePath/filename, but diff
// with cd, resolve can enter file.
path.resolve('/foo/bar', '/bar/faa', '..', 'a/../c') // /bar/c
// 1、join是把各个path片段连接在一起， resolve把‘／’当成根目录
// 2、join直接拼接字段，resolve解析路径并返回
path.relative

// 基本类型和引用类型存储于内存的位置不同，基本类型直接存储在栈中；而引用类型的对象存储在堆中，而且在栈中存储了指针，这个指针指向正式堆中实体的
// 起始位置

Object.prototype.toString.call()
  // 浅拷贝只复制某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存；��拷贝就���在拷贝数据的时候，将数据的所有引用结构都拷贝一份


  // Set replace Array? https://juejin.im/post/5d2284dc51882579df4a4cee

  <
  input id = "upload"
type = "file" / >
  <
  img id = "preview"
src = ""
alt = "preview" / >

  const upload = document.querySelector('#upload')
const preview = document.querySelector('#preview')
upload.onchange = () => {
  const file = upload.files[0]
  const src = URL.createObjectURL(file)
  preview.src = src
}


// 当需要将浮点数转换成整型时，应该使用Math.floor()或者Math.round()，而不是使用parseInt（）将字符串转换成数字。Math是内部对象，所以Math
// .floor()其实并没有多少调用时间，速度最快。
const num = Math.floor('1.6')

// 如果函数参数超过两个，就使用ES6解构语法，不用考虑参数顺序。
// recommend
function a(b = 1) {
  // ...
}
// not recommend
function a(b) {
  const newB = b || 1
  // ...
}

// 最小函数准则
// 不要写全局方法，在JavaScript中，永远不要污染全局，会在生产环境中产生难以预料的bug。比如说添加一个Array.prototype.diff

// not recommended
Array.prototype.diff = function diff(comparisonArr) {
  const hash = new Set(comparison)
}

// 类型强制转换
// string强制转换为数字
// 可以用 *1，实际上是调用


var t1 = new Date().getTime()
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 1000; j++) {
    for (let k = 0; k < 10000; k++) {}
  }
}
var t2 = new Date().getTime()
console.log('first time', t2 - t1)

for (let i = 0; i < 10000; i++) {
  for (let j = 0; j < 1000; j++) {
    for (let k = 0; k < 100; k++) {}
  }
}
var t3 = new Date().getTime()
console.log('two time', t3 - t2)

// clean code javascript
// Variables
// Use meaningful and pronounceable variable anmes

// Use the same vocabulary for the same type of variablex
// Bad
getUserInfo()
getClientData()
getCustomerRecord()
// Good
getUser()

// Use searchable names
// We will read more code than we will ever write. It's important that the coee we do write is readable and searchable.
// By not naming variables end up being meaningful for understanding our program, we hurt

// Functions should do one thing
// Bad
function emailClients(clients) {
  clients.forEach(client => {
    const clientRecord = database.lookup(client)
    if (clientRecord.isActive()) {
      email(client)
    }
  })
}
// Good
function emailActiveClients(clients) {
  clients.filter(isActiveClient).forEach(email)
}

function isActiveClient(client) {
  const clientRecord = database.lookup(client)
  return clientRecord.isActive()
}

// Function names should say waht they do
// Bad
function addToDate(date, month) {
  // ...
}

const date = new Date()
// It's hard to tell from the function name what is added
addToDate(date, 1)

// Good
function addMonthToDate(month, date) {
  // ...
}
const date = new Date()
addMonthToDate(1, date)

// Functions should only be one level of abstraction
// When you have more than one level of abstraction your function is usually doing too much. Splitting up functions leads
// to reusability and easier testing.
// Bad
function parseBetterJSAlternative(code) {
  const REGEXES = []
  const statements = code.split(' ')
  const tokens = []
  REGEXES.forEach(REGEX => {
    statements.forEach(statement => {
      // ...
    })
  })

  const ast = []
  tokens.forEach(token => {
    // lex...
  })

  ast.forEach(node => {
    // parse...
  })
}

// Good
function parseBetterJSAlternative(code) {
  const syntaxTree = parse(tokens)
  syntaxTree.forEach(node => {
    // parse...
  })
}

function tokenize(code) {
  const REGEXES = [
    // ...
  ]
  const statements = code.split(' ')
  const tokens = []
  REGEXES.forEach(REGEX => {
    statements.forEach(statement => {
      tokens.push( /* ... */ )
    })
  })
  return tokens
}

function parse(tokens) {
  const syntaxTree = []
  tokens.forEach(token => {
    syntaxTree.push( /* ... */ )
  })
  return syntaxTree
}
// Remove duplicate code
// Bad
function showDeveloperList(developers) {
  developers.forEach(developer => {
    const expectedSalary = developer.calculateExpectedSalary()
    const experience = developer.getExperience()
    const githubLink = developer.getGithubLink()
    const data = {
      expectedSalary,
      experience,
      githubLink,
    }

    render(data)
  })
}

function showManagerList(managers) {
  managers.forEach(manager => {
    render({
      expectedSalary: developer.calculateExpectedSalary(),
      experience: developer.getExperience(),
      portfolio: developer.getMBAProjects(),
    })
  })
}

// Good
function showEmployeeList(employees) {
  employees.forEach(employee => {
    const expectedSalary = employee.calculateExpectedSalary()
    const experience = employee.getExperience()

    const data = {
      expectedSalary,
      experience,
    }

    switch (employee.type) {
      case 'manager':
        data.portfolio = employee.getMBAProjects()
        break
      case 'developer':
        data.githubLink = employee.getGithubLink()
        break
    }

    render(data)
  })
}

// Set default objects with spread operator
// Bad
const menuConfig = {
  title: null,
  body: 'Bar',
  btnTxt: null,
  cancellable: true,
}

function createMenu(config) {
  config.title = config.title || 'Foo'
  config.body = config.body || 'Bar'
  config.btnTxt = config.btnTxt || 'Baz'
  config.cancellable = config.cancellable !== undefined ? config.cancellable : true
}
createMenu(menuConfig)

// Good
const menuConfig = {
  title: 'Order',
  // User did not include 'body' key
  btnTxt: 'Send',
  cancellable: true,
}

function createMenu(config) {
  config = {
    title: 'Foo',
    body: 'Bar',
    btnTxt: 'Baz',
    cancelBubble: true,
    ...config
  }
  // ...
}
createMenu(menuConfig)
// Dont use flags as function parameters
// Flags tell your user that this function does more than one thing. Functions should do one thing. Split out your
// functions if they are following different code paths based on a boolean.
// Bad
function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`)
  } else {
    fs.create(name)
  }
}

// Good
function createFile(name) {
  fs.create(name)
}

function createTempFile(name) {
  createFile(`./temp/${name}`)
}
// Avoid Side Effects(part 1)
// A function produces a side effect if it does anything other than take a value in and return another value or values.
// A side  effect could be writing to a file, modifying some global variable, or accidentally wiring all your money to
// a stranger.

// Now, you do need to have side effects in a program on occasion.
const mostObj = str => {
  const objTotal = str.split('').reduce((acc, itm, idx, arr) => {
    if (acc[itm] === undefined) acc[itm] = 1
    if (acc[itm] !== undefined && arr[idx] !== arr[idx - 1]) acc[itm] = 1
    if (acc[itm] !== undefined && arr[idx] === arr[idx - 1]) acc[itm] += 1
    return acc
  }, {})
  const most = Math.max(...Object.values(objTotal))
  const result = {}
  for (const key in objTotal) {
    if (objTotal[key] === most) {
      result[key] = most
    }
  }
  return result
}

// srting强制转换为数字
// 可以用 *1 来转化为数字（实际上是调用.valueOf方法）
NaN !== NaN // a !== a,  Number.isNaN
null * 1 // 0
  // 也可以用+来转化字符串为数字
  +
  null // 0
  +
  undefined // NaN
  +
  {
    valueOf: () => '3'
  } // 3
'the Math object:' + Math // 'the Math object: [object Math]'
  'the JSON object:' + JSON // 'the JSON object: [object JSON]'
'2' + {
  valueOf: () => {}
} // '2undefined'
// 对象通过valueOf方法强制转换为数字，通过toString方法强制转换为字符串
'' + {
  toString: () => 'S',
  valueOf: () => 'J'
} // 'J'
// false, null, 0, '', undefined, NaN
const compact = arr => arr.filter(Boolean)
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]) // [ 1, 2, 3, 'a', 's', 34 ]
// 可以使用双位操作符来替代正数的Math.floor(),替代负数的Math.ceil。双否定位操作符的优势在于它执行相同的操作运行速度更快
// 对于负数来说与Math.ceil的运算结果相同

// ||为取真运算，从左到右依次判断，如果遇到一个真值，就返回真值，以后不再执行，否则返回最后一个假值。
1.3 | 0 // 取整, 1
29
035
0o35
0x1d
0b11101
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)
round(1.23, 1) // 1.2
// reduce方法同时实现map和filter，减少遍历次数
// 使用解构来交换参数数值 -- 数组
let param1 = 1
let param2 = 2[param1, param2] = [param2, param1]
// 数组的对象解构。数组也可以对象解构，可以方便地获取数组的第n个值
const csvFileLine = '1997,John Doe,US,john@doe.com,New York'
const {
  2: country,
  4: state
} = csvFileLine.split(',')
// 使用解构删除不必要属性
// 在函数参数中解构嵌套对象
'21:00' < '09:10' // false
'21:00' < '9:10' // true 从左到右，每个字符的charCode去逐个比较
// 数字补0操作
const addZero1 = (num, len = 2) => (`0${num}`).slice(-len)
const addZero2 = (num, len = 2) => (`${num}`).padStart(len, '0')
// Favor functional programming over imperative programming
// JavaScript isn't a functional language in the way that Haskell is, but it has a functional flavor to it. Functional
// languages can be cleaner and easier to test. Favor this style of programming when you can.
const programmerOutput = [{
    name: 'Uncle Bobby',
    linesOfCode: 500,
  },
  {
    name: 'Suzie Q',
    licesOfCode: 1500,
  }
]
let totalOutput = 0
for (let i = 0; i < programmerOutput.length; i++) {
  totalOutput += programmerOutput[i].linesOfCode
}

// Good
const totalOutput = programmerOutput.reduce(
  (totalLines, output) => totalLines + output.linesOfCode,
  0,
)
// Encapsulate conditionals to make code more readable
// Bad
if (fchmodSync.state === 'fetching' && isEmpty(listNode)) {
  // ...
}
// Good
function shouldShowSpinner(fsm, listNode) {
  return fsm.state === 'fetching' && isEmpty(listNode)
}
if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
  // ...
}
// Avoid negative conditionals to make code more readable
// Bad
// ...
}
if (!isDOMNodeNotPresent(node)) {
  // ...
}
// Good
function isDOMNodePresent(node) {
  // ...
}
if (isDOMNodePresent(node)) {
  // ...
}

// Avoid conditionals
// This seems like an impossible task. Upon first hearing this, most people say, "how am I supposed to do anything
// without an if statement?" The answer is that you can use polymorphism to achieve the same task in many cases. The
// second question is usually, "welll that's great but why would I want to do that?" The answer is a previous clean code
// concept we learned: a function should only do one thing. When you have classes and functions that have if statements,
// you are telling your user that your function does more than one thing. Remember, just do one thing.

// Bad
class Airphane {
  getCruisingAltitude() {
    switch (this.type) {
      case '777':
        return this.getMaxAltitude() - this.getPassengerCount()
      case 'Air Force One':
        return this.getMaxAltitude()
      case 'Cessna':
        return this.getMaxAltitude() - this.getFuelExpeniture()
    }
  }
}
// Avoid type-checking (part 1)
// JavaScript is untyped, which means your functions can take any type of argument. Sometimes you are bitten by this
// freedom and it becomes tempting to do type-checking ini your functions. There are many ways to avoid having to do
// this. The first thing to consider is consistent APIs.
// B
function travelToTexas(vehicle) {
  if (vehicle instanceof Bicycle) {
    vehicle.pedal(this.currentLocation, new Location('texas'))
  } else if (vehicle instanceof Car) {
    vehicle.drive(this.currentLocation, new Location('texas'))
  }
}
// G
function travelToTexas(vehicle) {
  vehicle.move(this.currLocation, new Location('texas'))
}
// Avoid type-checking (part 2)
// If you are working with basic primitive values like strings and integers, and you can't use polymorphism but you
// still feel the need to type-check, you should consider using TypeScript.
// B
function combine(val1, val2) {
  if (
    (typeof val1 === 'number' && typeof val2 === 'number') ||
    (typeof val1 === 'string' && typeof val2 === 'string')
  ) {
    return val1 + val2
  }
  throw new Error('Must be of type String or Number')
}

// G
function combine(val1, val2) {
  return val1 + val2
}

// Dont over-optimize
// B
// On old browsers, each iteration with uncached `list.length` would be costly
// because of `list.length` recomputation. In modern browsers, this is optimized.
for (let i = 0; len = list.length; i < len; i++) {
  // ...
}

// G
for (let i = 0; i < list.length; i++) {
  // ...
}
// Remove dead code
// Dead code is just as bad as duplicate code. There's no reason to keep it in your codebase. If it's not being called,
// rid of it! It will still be safe in your version history if you still need it.
// Objects and Data Structures
// Use getters and setters
// Using getters and setters to access data on objects could be better than simply looking for a property on object.
// . When you want to do more beyond getting an object property, you dont have to look up and change every accessor in
// your codebase.
// . Makes adding validation simple when doing a set.
// . Encapsulates the internal representation.
// Easy to add logging and error handling when getting and setting.
// . You can lazy load your object's properties, let's say getting it from a server.
// B
function makeBankAccount() {
  // ...
  return {
    balance: 0
    // ...
  }
}
const account = makeBankAccount()
account.balance = 100

// G
function makeBankAccount() {
  // this one is private
  let balance = 0

  // a 'getter', made public via the returned object below
  function getBalance() {
    return balance
  }

  function setBalance(amount) {
    // ...validate before updating the balance
    balance = amount
  }

  return {
    // ...
    getBalance,
    setBalance,
  }
}
// Make objects have private members
// This can be accomplished through closures (for ES5 and below)
// B
const Employee = function (name) {
  this.name = name
}
Employee.prototype.getName = function getName() {
  return this.name
}
// G
function makeEmployee(name) {
  return {
    getName() {
      return name
    }
  }
}

const employee = makeEmployee('John Doe')
console.log(`Employee name: ${employee.getName()}`) // Employee name: John Doe
delete employee.name
console.log(`Employee name: ${employee.getName()}`) // Employee name: John Doe

// Use method chaining
// This pattern is very useful in JavaScript and you see it in many libraries such as jQuery and Lodash. It allows your
// code to be expressive, and less verbose. For the reason, I say, use method chaining and take a look at how clean your
// code will be. In your class functions, simply return `this` at the end of every function, and you can chain further
// class methods onto it.
class Car {
  constructor(make, model, color) {
    this.make = make
    this.model = model
    this.color = color
  }

  setMake(make) {
    this.make = make
    // NOTE: Returning this for chaining
    return this
  }
  setMmodel(mmodel) {
    this.mmodel = mmodel
    // NOTE: Returning this for chaining
    return this
  }
  setColor(color) {
    this.color = color
    // NOTE: Returning this for chaining
    return this
  }

  save() {
    console.log(this.make, this.model, this.color)
    return this
  }
}
const car = new Car('Ford', 'F-150', 'red').setColor('pink').save()

// Prefer composition over inheritance
// As stated famously in Design Patterns by th Gang of Four, you should prefer composition over inheritance where you
// can. There are lots of good reasons to use inheritance and lots of good reasons to use composition. The main point
// for this maxim is that if you mind instinctively goes for inheritance, try to think if composition could model your
// problem better. In some cases it can.

// You might be wondering then, "when should I use inheritance?" It depends on your problem at hand, but this is a decent
// list of when inheritance makes more sense than composition:
// 1. Your inheritance represents an "is-a" relatioinship and not a "has-a" relationship (Human->Animal vs. User->
// UserDetails)
// 2. You can reuse code from the base classes
// 3. You want to make global changes to derived classes by changing a base class. (Change the caloric expenditure of all
// animals when they move).
class Employee {
  constructor(name, email) {
    this.name = name
    this.email = email
  }
}
// Bad because Employees 'have' tax data. EmployeeTaxData is not a type of Employee
class EmployeeTaxData extends Employee {
  constructor(ssn, salary) {
    super()
    this.ssn = ssn
    this.salary = salary
  }
}
// Good
class EmployeeTaxData {
  constructor(ssn, salary) {
    this.ssn = ssn
    this.salary = salary
  }
}

class Employee {
  constructor(name, email) {
    this.name = name
    this.email = email
  }
  setTaxData(ssn, salary) {
    this.taxData = new EmployeeTaxData(ssn, salary)
  }
}
// SOLID
// Single Responsibility Principle (SRP)
// As stated in Clean Code, "There should never be more than one reason for a class to change". It's tempting to jam-pack
// a class with a lot of functionality, like when you can only take one suitcase on your flight. The issue with this is
// that your class wont be conceptually cohesive and it will give it many reasons to change. Minimizing the amount of
// times you need to change a class is important. It's important because if too much functionality is in one class and
// you modify a piece of it, it can be difficult to understand how that will affect other dependent modules in your
// codebase.
// B
class UserSettings {
  constructor(user) {
    this.user = user
  }
  changeSettings(settings) {
    if (this.verifyCredentials()) {
      // ...
    }
  }

  verifyCredentials() {
    // ...
  }
}

// G
class UserAuth {
  constructor(user) {
    this.user = user
  }
  verifyCredentials() {
    // ...
  }
}
class UserSettings {
  constructor(user) {
    this.user = user
    this.auth = new UserAuth(user)
  }

  changeSettings(settings) {
    if (this.auth.verifyCredentials()) {
      // ...
    }
  }
}

// Open/Closed Principle (OCP)
// As stated by Bertrand Meyer, "software entitier(classes, modules, functions, etc.) should be open for extension, but
// closed for modification." What does that mean though?This principle basically states that you should allow users to
// add new functionalities without changing existing code.
// B
class AjaxAdapter extends Adapterr {
  constructor() {
    super()
    this.name = 'ajaxAdapter'
  }
}

class NodeAdapter extends Adapter {
  constructor() {
    super()
    this.name = 'nodeAdapter'
  }
}

class HttpRequested {
  constructor(adapter) {
    this.adapter = adapter
  }

  fetch(url) {
    if (this.adapter.name === 'ajaxAdapter') {
      return makeAjaxCall(url).then(res => {
        // transform res and return
      })
    } else if (this.adapter.name === 'nodeAdapter') {
      return makeHttpCall(url).then(res => {
        // transform res and return
      })
    }
  }
}

function makeAjaxCall(url) {
  // request and return promise
}

function makeHttpCall(url) {
  // req and return promise
}

// G
class AjaxAdapter extends Adapter {
  constructor() {
    super()
    this.name = 'ajaxAdapter'
  }

  request(url) {
    // request and return promise
  }
}

class NodeAdapter extends Adapter {
  constructor() {
    super()
    this.name = 'nodeAdapter'
  }

  request(url) {
    // request and return promise
  }
}
class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter
  }
  fetch(url) {
    return this.adapter.request(url).then(response => {
      // transform res and return
    })
  }
}
// Liskov Sustitution Principle (LSP)
// This is a scary term for a very simple concept. It's formally defined as "If S is a subtype of T, then objects of type
// T"
// G
class Shape {
  setColor(color) {
    // ...
  }

  render(area) {
    // ...
  }
}
class Rectangle extends Shape {
  constructor(width, height) {
    super()
    this.width = width
    this.height = height
  }
  getArea() {
    return this.width + this.height
  }
}

class Square extends Shape {
  constructor(length) {
    super()
    this.length = length
  }

  getArea() {
    return this.length * this.length
  }
}

function renderLargetShapes(shapes) {
  shapes.forEach(shape => {
    const area = shape.getArea()
    shape.render(area)
  })
}
const shapes = [new Rectangle(4, 5), new Rectangle(4, 5), new Square(5)]
renderLargetShapes(shapes)

// Interface Segregatioin Principle ISP
// JavaScript doesn't have interfaces so this principle doesn't apply as strictly as others. However, it's important and
// relevant even with JavaScript lack of type system.
// ISP states that "Clients should not be forced to depend upon interfaces that they do not use." Interfaces are implicit
// contracts in JavaScript becase of duck typing.
// A good example to look at that demonstrates
class DOMTraverser {
  constructor(settings) {
    this.settings = settings
    this.options = settings.options
    this.setup()
  }
  setup() {
    this.rootNode = this.settings.rootNode
    this.setupOptions()
  }
  setupOptions() {
    if (this.options.animationModule) {
      // ...
    }
  }
  traverse() {
    // ...
  }
}
const $ = new DOMTraverser({
  rootNode: document.getElementsByTagName('body'),
  options: {
    animationModule() {},
  },
})
// Dependency Inversion Prinple DIP
// This principle states two essential things:
// 1. High-level modules should not depend on low-level modules. Both should depend on abstractions
// 2. Abstractions should not depend upon details. Details should depend on abstractions.

// This can be hard to understand at first, but if you've worked with AngulaJS, you've seen an implementation of this
// principle in the form of Dependency Injection(DI). While they are not identical concepts, DIP keeps high-level modules
// from knowing the detail of its low-level modules and setting them up. It can accomplish this through DI. A huge benefit
// of this is that it reduces the coupling between modules. Coupling is a bery bad development pattern it makes your code
// hard to refactor.
// As stated previously, Javascript doesn't have interfaces so the abstractions that are depended upon are implicit
// contracts. That is to say, the methods

// As stated previously, Javascript doesn't have interfaces so the abstractions
声明变量、 方法时， 要符合按块分类原则， 可以同行声明。
// Dont have journal comments
// Rememver, use version control! There's no need for dead code, commented code, and especially journal comments. Use
// git log to get history!
/**
 * 2016-12-20: Removed monads, didnt understand them (RM)
 * 2016-10-01: Improved using special monads (JP)
 * 2016-02-03: Removed type-checking (LI)
 * 2015-03-14: Added combine with type-checking (JR)
 */
function combine(a, b) {
  return a + b
}
// Avoid positional markers
// They usually just add noise. Let the functions and variable names along with the proper indentation and formartting
// give the visual structure to your code.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Scope Model Instantiation实例化
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$scope.model = {
  menu: 'foo',
  nav: 'bar',
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action setup
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const actions = function () {
  // ...
}
// The pitfall of multiple responsibilities
// A common oversight happens when a component has multiple responsibilities. At first glance, this practice seems
//harmless and requires less work:
类型转换：
https: //segmentfault.com/a/1190000003867801
  https: //juejin.im/post/5a7172d9f265da3e3245cbca

  写一个单向链数据结构的 js 实现并标注复杂度
const {
  data: shelfData = []
} = await getShelfData() // = [] is very important, system 健壮性、鲁棒性很重要
this.setData({
  shelfData
})
今日面试题： 输出以下代码执行结果

function wait() {
  return new Promise(resolve =>
    setTimeout(resolve, 10 * 1000)
  )
}

async function main() {
  console.time();
  const x = wait();
  const y = wait();
  const z = wait();
  await x;
  await y;
  await z;
  console.timeEnd();
}
main();
果然用了try 被catch之后就不会阻断后面的代码执行； 如果没有用try catch后面的代码就很容易被前面的跑错阻断。
昨日面试题： Http 状态码 301 和 302 的应用场景分别是什么
前日面试题： 如何用 css 或 js 实现多行文本溢出省略效果， 考虑兼容性
前前日面试题： 如何将[{
  id: 1
}, {
  id: 2,
  pId: 1
}, ...] 的重复数组（ 有重复数据） 转成树形结构的数组[{
  id: 1,
  child: [{
    id: 2,
    pId: 1
  }]
}, ...]（ 需要去重
每日一问：
vue 渲染大量数据时应该怎么优化？
React呢
每日一问：
react 如何优化首页的加载速度？ react 首页白屏是什么问题引起的？ 如何解决呢？
每日一问：
为什么for循环嵌套顺序会影响性能？
每日一题：
webpack 打包 react 速度太慢怎么办？
每日一题：
第124题： 永久性重定向301和临时性重定向302对SEO有什么影响

key的作用： 是为了在diff算法执行时更快的找到对应的节点， 提高diff速度
不带有key， 并且使用简单的模板， 基于这个前提下， 可以更有效的复用节点， diff速度来看也是不带key更加快速的， 因为带key在增删节点上有耗时。 这就是vue
文档说的默认模式。 但是这个并不是key作用， 而是没有key的情况下可以对节点就地复用， 提高性能。

这种模式会带来一些隐藏的副作用， 比如可能不会产生过渡效果， 或者在某些节点有绑定数据（ 表单） 状态， 会出现状态错位。 这个默认的模式是高效的， 但是只适用于
不依赖子组件状态获临时DOM状态的列表渲染输出。

key的作用
key是给每一个vnode的唯一id， 可以依靠可以， 更准确更快的拿到oldVnode中对应的vnode节点
1. 更准确
因为带key就不是就地复用了， 在sameNode函数 a.key === b.key 对比中可以避免就地复用的情况， 所以会更加准确。
2. 更快
利用key的唯一性胜场map对象来获取对应节点， 比遍历方式更快。（） 这个观点就是我最初的那个观点。 从这个角度看， map会比遍历更快。

vue和React都是采用diff算法来对逼新旧虚拟节点， 从而更新节点。 在vue的diff函数中（） 建议先了解一下diff算法过程。

在交叉对比中， 当新节点跟就节点头尾交叉对比没有结果时， 会提醒新节点的key去对比旧节点数组中的key， 从而找到相应旧节点（） 这里对应的是一个key = 》
  index 的map映射。 如果没找到就认为是一个新增节点， 而过没有遍历查找的方式去找到对应的旧节点。 一种一个map映射， 另一种是遍历查找。 相比而言， map
映射的速度更快。
vue部分源码如下：
// vue项目 src/core/vdom/patch.js -488行
// 以下是为了阅读性进行格式化后的代码

// oldCh 是一个旧虚拟节点数组
if (isUndefined(oldKeyToIdx)) {
  oldKeyToIdx = createKeyToOldIdx(oldCh, oldStarIdx, oldEndIdx)
}


js去重效率最高的办法是什么 哈希表？ 比set效率高


parseInt('21', 11) // 23
['1', '2', '3'].map(itm => parseInt(itm, 10)) // [1, 2, 3]
['1', '2', '3'].map(Number) // [1, 2, 3]
['1', '2', '3'].map(parseInt) // [1, NaN, NaN]
parseInt('22', 3) // 8
parseInt('22', 2) // NaN





















闭包是指有权访问另一个函数作用域中变量的函数， 创建闭包的最常见的方式就是在一个函数内创建另一个函数， 通过另一个函数访问这个函数的局部变量， 利用闭
包可以突破作用链域， 将函数内部的变量和方法传递到外部。


内部函数将能够访问到外部函数作用域中的变量， 即使外部函数已经执行完毕。 这就是闭包

闭包的用途之一是实现对象的私有数据。 数据私有是让我们能够面向接口编程而不是面向实现编程的基础。 而面向接口编程是一个重要的概念， 有助于我们创建更加
健壮的软件， 因为实现细节比接口约定相对来说更加容易被改变。

在 JavaScript 中， 闭包是用来实现数据私有的原生机制。 当你使用闭包来实现数据私有时， 被封装的变量只能在闭包容器函数作用域中使用。 你无法绕过对象被
授权的方法在外部访问这些数据。 在 JavaScript 中， 任何定义在闭包作用域下的公开方法才可以访问这些数据。

在函数式编程中， 闭包经常用于偏函数应用和柯里化。 为了说明这个， 我们先定义一些概念：

函数应用： 一个过程， 指将参数传给一个函数， 并获得它的返回值。

偏函数应用： 一个过程， 它传给某个函数其中一部分参数， 然后返回一个新的函数， 该函数等待接受后续参数。 换句话说， 偏函数应用是一个函数， 它接受另一个函
数为参数， 这个作为参数的函数本身接受多个参数， 它返回一个函数， 这个函数与它的参数函数相比， 接受更少的参数。 偏函数应用提前赋予一部分参数， 而返回的
函数则等待调用时传入剩余的参数。

const getQueryStrFromObj = (obj) =>
  Object.entries(obj).map(([key, val]) => `${key}=${encodeURIComponent(val)}`).join('&')

Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a - b) // 升序，从小到大

new运算符创建一个用户定义的对象类型

function create(Con, ...args) { // spread operator convert args to array
  const obj = {}
  obj.__proto__ = Con.prototype // Object.setPrototypeOf(obj, Con.prototype) subClass, superClass
  const rs = Con.apply(obj, args)
  return rs instanceof Object ? rs : obj // 实现了： 忽略构造函数返回的原始值
}

function Test(name, age) {
  this.name = name
  this.age = age
}
Test.prototype.sayName = function () {
  console.log(this.name)
}
const a = create(Test, 'yck', 26)
console.log(a.name, a.age)
a.sayName()

原型：
所有对象都有一个属性 __proto__ 指向一个对象， 也就是原型
每个对象的原型都可以通过constructor找到构造函数， 构造函数也可以通过prototype找到原型
所有函数都可以通过__proto__找到Function
所有对象都可以通过__proto__找到Object
对象之间通过__proto__连接起来， 这样称之为原型链。 当前对象上不存在的属性可以通过原型链一层层往上查找， 直到顶层Object对象

继承：
寄生组合继承：
这种继承方式对组合继承进行了优化， 组合继承缺点在于继承父类函数时调用了构造函数， 我们只需要优化掉这点就行了

function Parent(val) {
  this.val = val
}
Parent.prototype.getVal = function () {
  console.log(this.val)
}

function Child(val) {
  Parent.call(this, val)
}
Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true,
  }
})

const child = new Child(1)

child.getValue() // 1
child instanceof Parent // true

// reptile
相比Python， JavaScript更适合写爬虫： JS的异步io机制适合于爬虫这种io密集型任务。 js中的回调非常自然， 使用异步网络请求能够充分利用CPU； jquery
是最强悍的HTML解析工具， 使用js写爬虫可以减少学习负担和记忆负担。




https: //thecodebarbarian.com/for-vs-for-each-vs-for-in-vs-for-of-in-javascript

  for (const [i, v] of arr.entries()) {
    console.log(i, v); // Prints "0 a", "1 b", "2 c"
  }

function _new(fn, ...arg) {
  const obj = Object.create(fn.prototype) // 以fn.prototype作为原型创建出一个object
  const ret = fn.apply(obj, arg) // 借用外部传入的构造器所用实参给obj设置属性
  return ret instanceof Object ? ret : obj // 确保构造器总是返回一个对象
}

a
  ?
  aa ?
  aaa :
  aab :
  ab

// 惰性函数
// 我们现在需要写一个 foo 函数，这个函数返回首次调用时的 Date 对象，注意是首次。
var foo = function () {
  var t = new Date()
  foo = function () {
    return t
  }
  return foo()
}
// 当我们每次都需要进行条件判断，其实只需要判断一次，接下来的使用方式都不会发生改变的时候，想想是否可以考虑使用惰性函数。

// DOM 事件添加中，为了兼容现代浏览器和 IE 浏览器，我们需要对浏览器环境进行一次判断：
function addEvent(type, el, fn) {
  if (window.addEventListener) {
    el.addEventListener(type, fn, false)
  } else if (window.attachEvent) {
    el.attachEvent('on' + type, fn)
  }
}
// 问题在于我们每当使用一次 addEvent 时都会进行一次判断。
function addEvent(type, el, fn) {
  if (window.addEventListener) {
    addEvent = function (type, el, fn) {
      el.addEventListener(type, fn, false)
    }
  } else if (window.attachEvent) {
    addEvent = function (type, el, fn) {
      el.attachEvent('on' + type, fn)
    }
  }
}
// 当然我们也可以使用闭包的形式：
var addEvent = (function () {
  if (window.addEventListener) {
    return function (el, type, fn) {
      el.addEventListener(type, fn, false)
    }
  } else if (window.attachEvent) {
    return function (type, el, fn) {
      el.attachEvent('on' + type, fn)
    }
  }
})()
var hello = function (x) {
  return 'HELLO, ' + x
}
var greet = function (x) {
  return hello(toUpperCase(x))
}
greet('kevin')
var compose = function (f, g) {
  return function (x) {
    return f(g(x))
  }
}
var greet = compose(hello, toUpperCase)
// 利用 compose 将两个函数组合成一个函数，让代码从右向左运行，而不是由内而外运行，可读性大大提升。这便是函数组合。
compose(d, compose(c, compose(b, a)))
compose(d, c, b, a)
// underscore
function compose() {
  var args = arguments
  var start = args.length - 1
  return function () {
    var i = start;
    var rs = args[start].apply(this, arguments)
    while (i--) rs = args[i].call(this, rs)
    return rs
  }
}
// ramda.js R.prop, R.filter, R.propEq, R.map, R.pick, R.sortBy
// ramda.js 提供了一个 R.pipe 函数，可以做的从左到右，以上可以改写为：

函数记忆是指将上次的计算结果缓存起来， 当下次调用时， 如果遇到相同的参数， 就直接返回缓存中的数据。

我们来测试一下：

var add = function (a, b, c) {
  return a + b + c
}

var memoizedAdd = memoize(add)

console.time('use memoize')
for (var i = 0; i < 100000; i++) {
  memoizedAdd(1, 2, 3)
}
console.timeEnd('use memoize')

console.time('not use memoize')
for (var i = 0; i < 100000; i++) {
  add(1, 2, 3)
}
console.timeEnd('not use memoize')
在 Chrome 中， 使用 memoize 大约耗时 60 ms， 如果我们不使用函数记忆， 大约耗时 1.3 ms 左右。

注意
什么， 我们使用了看似高大上的函数记忆， 结果却更加耗时， 这个例子近乎有 60 倍呢！


所以， 函数记忆也并不是万能的， 你看这个简单的场景， 其实并不适合用函数记忆。

需要注意的是， 函数记忆只是一种编程技巧， 本质上是牺牲算法的空间复杂度以换取更优的时间复杂度， 在客户端 JavaScript 中代码的执行时间复杂度往往成为
瓶颈， 因此在大多数场景下， 这种牺牲空间换取时间的做法以提升程序执行效率的做法是非常可取的。
const memoize = function (fn, hasher) {
  const memoize = function (key) {
    const cache = memoize.cache
    const address = '' + (hasher ? hasher.apply(this, arguments) : key)
    if (!cache[address]) cache[address] = fn.apply(this, arguments)
    return cache[address]
  }
  memoize.cache = {}
  return memoize
}
const memoizeAdd = memoize(add, function () {
  const args = Array.prototype.slice.call(arguments)
  return JSON.stringify(args)
})

let count = 0
let fibonacci = function (n) {
  count++
  return n < 2 ? fibonacci(n - 1) + fibonacci(n - 2)
}
// fibonacci = memoize(fibonacci)
for (let i = 0; i <= 10; i++) {
  fibonanci(i)
}
console.log(count) // 453, 12


《 JavaScript 专题之数组扁平化》
function flattern(arr) {
  return arr.reduce(function (prev, next) {
    return prev.concat(Array.isArray(next) ? flattern(next) : next)
  }, [])
}
