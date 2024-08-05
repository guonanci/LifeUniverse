new.md
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new
new 运算符创建一个用户定义的对象类型的实例、或具有构造函数的内置对象的实例

```js
function Car(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
}
const car1 = new Car('Eagle', 'Talon TSi', 1993)
console.log(car1.make) // 'Eagle'
```

`new Constructor[([arguments])]`

constructor
一个指定对象实例的类型的类或函数

arguments
一个用于被 constructor 调用的参数列表

new 关键字会进行如下操作

1. 创建一个空的简单 JavaScript 对象（`{}`）
2. 为步骤 1 新创建的对象添加属性`__proto__`，将该属性链接至构造函数的原型对象
3. 将步骤 1 新创建的对象作为`this`的上下文
4. 如果该函数没有返回对象，则返回`this`

关于对象的`constructor`,参见`Object.prototype.constructor`

创建一个用户自定义的对象需要两步：

1. 通过编写函数来定义对象类型
2. 通过 new 来创建对象实例

创建一个对象类型，需要创建一个指定其名称和属性的函数；对象的属性可以指向其他对象，看下面的例子：
当代码`new Foo(...)`执行时，会发生：

1. 一个继承自`Foo.prototype`的新对象被创建

https://www.zhihu.com/people/renlishisan

JS 的 new 到底是干什么的？ - 方应杭的文章 - 知乎
https://zhuanlan.zhihu.com/p/23987456
https://juejin.cn/post/6844903704663949325 https://juejin.cn/post/6844903789070123021

vue-router-权限路由配置机制：https://juejin.cn/post/6844903653774458888（工厂模式、超级工厂模式--抽象工厂模式）

https://blog.csdn.net/weixin_41910848/article/details/81983740
使用关键字new创建新实例对象经过了以下几步：
1. 创建一个新对象
2. 将新对象的_proto_指向构造函数的prototype原型对象
3. 将构造函数的作用域赋值给新对象 （也就是this指向新对象）
4. 执行构造函数中的代码（为这个新对象添加属性）
5. 返回构造函数中的对象型返回值（Function,Array,Date,RegExp,Error）或者新对象

```js
function create()　{
  // 1.获取构造函数，删除arguments的第一项
  var Con = [].shift.call(arguments)
  // 2. 创建一个空对象并链接到构造函数的原型，使它能访问原型中的属性
  var obj = Object.create(Con.prototype)
  // 3. 使用apply改变构造函数中this的指向实现继承，使obj能访问到构造函数中的属性
  var ret = Con.apply(obj, arguments)
  // 4. 优先返回构造函数返回的对象
  return ret instanceof Object ? ret : obj
}

function selfNew(fn, ...args) {
  // 创建一个instance对象，该对象的原型是fn.prototype
  let instance = Object.create(fn.prototype);
  // 调用构造函数，使用apply，将this指向新生成的对象
  let ret = fn.apply(instance, args);
  // 如果fn函数有返回值，并且返回值是一个对象或方法，则返回该对象，否则返回新生成的instance对象
  return typeof ret === "object" || typeof ret === "function" ? ret : instance;
  // return ret instanceof Object ? ret : obj
}

```

eslint:no-new-object 使用字面语法来创建对象，数组类似
```js
// bad
const obj=new Object()
// good
const oj={}
```
```js
function Person(firstName,lastName){
  this.firstName=firstName
  this.lastName=lastName
}
const lydia=new Person('Lydia', 'Hallie')
const sarah=new Person('Sarah', 'Smith')

console.log(lydia,sarah) // Person {firstName: 'Lydia', lastName: 'Hallie'} undefined

// 对于Sarah，我们没有使用new关键字。当使用new时，this引用我们创建的空对象。未使用new时，this引用的是全局对象global object。
// 我们说 this.firstName 等于 "Sarah"，并且 this.lastName 等于 "Smith"。实际上我们做的是，定义了 global.firstName = 'Sarah' 和 global.lastName = 'Smith'。而 sarah 本身是 undefined。
```
