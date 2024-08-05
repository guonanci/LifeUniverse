// Arrow Functions
// Syntactically anonymous, harder to debug: when you get an error, you will not be able to trace the name of the function or the exact line number where it occurred
// No self-referencing,,, If your function needs to have a self-reference at any point(e.g. recursion, event handler that needs to unbind), it will not work.

// Main benefit: no bind of this
// In classic function expressions, the this keyword is bound to different values based on the context in which is called.
// With arrow functions however, this is lexically bound. It means that it uses this from the code that contains the arrow function

// In the ES5 example, `.bind(this)` is required to help pass the this context into the function.
// Otherwise, by default this would be undefined.
var obj = {
  id: 42,
  counter: function counter () {
    setTimeout(function () {
      console.log(this.id);

    }.bind(this), 1000)
  }
}

// es6 arrow functions cant be bound to a this keyword, so it will lexically go up a scope, and use the value of this
// in the scope in which it was defined.
var obj = {
  id: 42,
  counter: function counter () {
    setTimeout(() => {
      console.log(this.id)
    }, 1000)
  }
}

// When you should not use functions
// 1. obj methods. when you call cat.jumps, the number of lives does not decrease. It is because this is not bound to
// anything, and will inherit the value of this from its parent scope.

// 2. cb functions with dynamic context. If you need your context to be dynamic, arrow functions are not the right choice. Take a look at this event handler below:
var button = document.getElementById('press')
button.addEventListener('click', () => { this.classList.toggle('on') })
// if we click the button, we would get a typeerror. It is because this is not bound to the button, but instead bound to its parent scope.
// 3. when it makes your code less readable
// It is worth taking into consideration the variety of syntax we covered earlier. With regular functions,
// people know what do expect. With arrow functions, it may be hard to decipher what you are looking at straightaway.


// When you should use them
// Arrow functions shine best with anything that requires this to be bound to the context, and not the function itself.
// Despite the fact that they are anonymous, I also like using them with methods such as map and reduce, because I think it makes my code more readable. To me, the pros outweigh the cons.




// Async-Await
// Benefits: 1. Concise and clean.
const makeReq = () => {
  getJSON()
    .then(data => {
      console.log(data);
      return 'done'

    })
}
const makeReq = async () => {
  console.log(await getJSON())
  return 'done'
}
// 2. Error handling. Async/await makes it finally possible to handle both syncchronous and asychronous errors with the same construct, good old try/catch
const makeReq = () => {
  try {
    getJSON()
      .then(r => {
        // this parse may fail
        const data = JSON.parse(r)
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  } catch (e) {
    console.log(e)
  }
}
const makeReq = async () => {
  try {
    // this parse may fail
    const d = JSON.parse(await getJSON())
    console.log(d)
  } catch (e) {
    console.log(e)
  }
}
// 3. Conditionals
const makeReq = () => {
  return getJSON()
    .then(d => {
      if (d.needsAnotherReq) {
        return makeAnotherReq(d)
          .then(moreData => {
            console.log(moreData)
            return moreData
          })
      } else {
        console.log(d)
        return d
      }
    })
}
const makeReq = () => {
  const d = await getJSON()
  if (d.needsAnotherReq) {
    const moreData = await makeAnotherReq(d)
    console.log(moreData)
    return moreData
  } else {
    console.log(d)
    return d
  }
}
// 4. Intermediate values
const makeReq = () => {
  return promise1()
    .then(v1 => {
      // do sth
      return promise2(v1)
        .then(v2 => {
          // do sth
          return promise3(v1, v2)
        })
    })
}
// This pproach sacrifices for the sake of sake of readability. There is no reason for v1 & v2 to belong in an
// array together, except to avoid nesting promises.
const makeReq = () => {
  return pro1()
    .then(v1 => {
      return Promise.all([v1, pro2(v1)])
    })
    .then([v1, v2] => {
      return pro2(v1, v2)
    })
}
// This same logic becomes ridiculously simple and intuitive with async/await. It makes you wonder about all the
// things you could have done in the time that you spent struggling to make promises look less hideous.
const makeReq = async () => {
  const v1 = await pro1()
  const v2 = await pro2()
  return pro3(v1, v2)

}
// 5. Error stacks
const makeReq = () => {
  return callAPromise()
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => {
      throw new Error('oops')
    })
}
makeReq()
  .catch(err => {
    console.log(err)
    // output
    // Error: oops at callPromise.then.then.then.then.then (index.js:8:13)

  })
const makeReq = async () => {
  await callAPromise()
  await callAPromise()
  await callAPromise()
  await callAPromise()
  await callAPromise()
  throw new Error('oops')
}
makeReq()
  .catch(e => {
    console.log(e)
    // output
    // Error: oops at makeReq (index.js:7:9)
  })
// Imagine a piece of code that calls multiple promises in a chain, and somewhere down the chain an error is thrown.
// The error stack returned from a promise chain gives no clue of where the error happened. Even worse, its mislead-
// -ing; The only function name it contains is callAPromise which is totally innocent of this error (the file and l-
// -ine number are still useful though).
// However, the error stack from async/await points to the function that contains the error.
// This is not a huge plus when youre developing on your local environment and have the file open in an editor, but
// its quite useful when youre trying to make sense of error logs coming from your production server. In such cases
// knowing the error happened in `makeReq` is better than knowing that the error came from a then after a then after
// a then ...

// 6. Debugging
// Last but not least, a killer advantage when using async/await is that its much easier to debug. Debugging promis-
// -es has always been such a pain for 2 reasons. 1. You cant set breakpoints in arrow functions that functions
// return expressions (no body) 2. If you set a breakpoint inside a .then block and use debug shortcuts like
// step-over, the debugger will not move to the line following .then because it only 'steps' through syncchronous code.
// With async/await you dont need arrow functions as muach, and you can step through await calls exactly as if they were
// normal synchronous calls

// Node.js 7.6+ support async/await, Async/await is one of the most revolutionary features that have been added to
// JavaScript in the few years. It makes you realize what a syntactical mess promises are, and provides an intuitive
// replacment.

// Decorator
// So remember what we learned from Python. An ES2016 decorator is an expression which returns function and can take a
// target, name and property descriptor as arguments. You apply it by prefixing the decorator with an `@` character and
// placing this at the top of what you are trying to decorate. Decorators can be defined for either a class or property.

// Lets take a look at a basic Cat Class:
Class Cat {
  meow () { return `${this.name} says Meow!`}
}

Object.defineProperty(Cat.prototype, 'meow', {
  value: specifiedFunction,
  enumerable: false,
  configurable: true,
  writeable: true
})
// Imagine we want to mark a property or method name as not being writable. A decorator precedes the syntax that defines
// a property. We could thus define a `@readonly` decorator for it as follows:
function readonly (target, key, descriptor) {
  descriptor.writable = false
  return descriptor
}
class Cat {
  @readonly
  meow () { return `${this.name} says Meow!`}
}
// A decorator is just an expression that will be evaluated and has to return a function. This is why `@readonly` and
// `@sth(parameter)` can both work.

import { readonly } from 'core-decorators'

class Meal {
  @readonly
  entree = 'steak'
}

var dinner = new Meal()
dinner.entree = 'salmon'

import { deprecate } from 'core-decorators'
class Person {
  @deprecate
  facepalm () {}

  @deprecate('We stopped facepalming')
  facepalmHard () {}

  @deprecate('We stopped facepalming', { url: 'http://knowyoumeme.com/memes/facepalm'})
  facepalmHarder () {}
}

let captainPicard = new Person()

captainPicard.facepalm()
// DePRECATION Person#facepalm: This function will be removed in future versions

captainPicard.facepalm()
// DEPRECATION Person#facepalmHard: We stopped facepalming

captainPicard.facepalmHarder()
// DEPRECATION Person#facepalmHarder: We stopped facepalming
//
//    See http://knowyoumeme.com/memes/facepalm

// Decorating a class. In this case, per the proposed specification, a decorator takes the target constructor. For a
// fictional `MySuperHero` class, we can define a simple decorator for it as follows using a `@superhero` decoration:

function superhero (target) {
  target.isSuperhero = true
  target.power = 'flight'
}

@superhero
class MySuperHero () {}

MySuperHero.isSuperhero // true
// This can be expanded further, enabling us to supply arguments for defining out decorator function as a factory:

function superhero (isSuperhero) {
  return function (target) {
    target.isSuperhero = isSuperHero
  }
}

@superhero(true)
class MySuperheroClass () {}
@superhero(false)
class MySuperheroClass () {}

// ES2016 Decorators
// http://es6.ruanyifeng.com/#docs/decorator
@testable
class MyTestableClass {
  // ...
}
function testable (target) { // target equals to class MyTestableClass-target class
  target.isTestable = true // add static property
}
MyTestableClass.isTestable

@decorator
class A {}

class A {}
A = decorator(A) || A

// 也就是说修饰器是一个对类进行处理的函数，修饰器函数的第一个参数，就是所要修饰的目标类
// 如果觉得一个参数不够用，可以在修饰器外面再封装一层函数
function testable (isTestable) {
  return function (target) {
    target.isTestable = isTestable
  }
}
@testable(true)
class MyTestableClass()
MyTestableClass.isTestable

@testable(false)
class MyClass {}
// 修饰器对类的行为的改变，是代码编译时发生的，而不是在运行时，意味着修饰器能在编译阶段运行代码。修饰器本质就是编译时执行的函数。前面的例子是为
// 类添加一个静态属性，如果想添加实例属性，可以通过目标类的prototype对象操作
function testable (target) {
  target.prototype.isTestable = true
}
@testable
class MyTestableClass {}

let obj = new MyTestableClass()
obj.isTestable // true，修饰器函数testable是在目标类的prototype对象上添加属性，因此可以再实例上调用

// mixins.js
export function mixins (...list) {
  return function (target) {
    Object.assign(tartet.prototype, ...list)
  }
}

// main.js
import { mixins } from './mixins'

const Foo = {
  foo () { console.log('foo')},
  bar () { console.log('bar')}
}

@mixins(Foo)
class MyClass {}
let obj = new MyClass {}
obj.foo() // 'foo'
obj.bar() // 'bar'
// 上面的代码通过修饰器mixins，把Foo对象的方法添加到了MyClass的实例上面，可以用Object.assign()模拟这个功能

const Foo = {
  foo () { console.log('foo') }
}

class MyClass {}
Object.assign(MyClass.prototype, Foo)

class MyReactComponent extends React.Component {}
export default connect(mapStateToProps, mapDispatchToProps)(MyReactComponent)

@connect(mapStateToProps, mapDispatchToProps)
export default class MyReactComponent extends React.Component {}

// methods decorator
class Person {
  @readonly
  name () { return `${this.first} ${this.last}`}
}
function readonly (target, name, descriptor) {
  // descriptor 对象原来的值如下
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true,
  // }
  descriptor.writable = false
  return descriptor
}

readonly(Person.prototype, 'name', descriptor)
// similar to
Object.defineProperty(Person.prototype, 'name', descriptor)

// @nonenumerable
class Math {
  @log
  add (a, b) {
    return a + b
  }
}

function log (target, name, descriptor) {
  const oldV = descriptor.value

  descriptor.value = function () {
    console.log(`Calling ${name} with ${arguments}`)
    return oldV.apply(this, arguments)
  }

  return descriptor
}

const math = new Math()
math.add(2, 4)


// 修饰器有注释的作用

@Component({
  tar: 'my-component',
  styleUrl: 'my-component.scss'
})
export class MyComponent {
  @Prop() first: string
  @Prop() last: string
  @Prop() isVisible: boolean = true

  render () {
    return (
      <p>Hello, my name is {{this.first}} {{this.last}}</p>

    )
  }
}
// 如果一个方法有多个修饰器，那么会像剥洋葱一样，先从外到内进入，然后由内向外扩散执行
function dec (id) {
  console.log(`evaluated ${id}`)
  return (target, property, descriptor) => console.log(`executed ${id}`)
}
class Example {
  @dec(1)
  @dec(2)
  method () {}
}
// evaluated 1
// evaluated 2
// executed 2
// executed 1
// 上面代码中@dec（1）先进入，但是内层修饰器@dec（2）先执行
@f @g x

@f
@g
x

function f () {
  console.log('f(): evaluated')
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('f(): called')
  }
}
function g () {
  console.log('g(): evaluated')
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('g(): called')
  }
}
// f(): evaluated g(): evaluated g(): called f(): called
// 除了注释，修饰器还能用来类型检查。所以，对于类来说，这项功能相当有用，是JavaScript代码静态分析的重要工具
// 为什么修饰器不能用于函数，因为存在函数提升(class doesnt have hoisting)，修饰器只能用于类和类的方法
var counter = 0
var add = function () { counter++ }
@add
function foo () {}

// turns to:
@add
function foo () {}
var counter
var add
counter = 0
add = function () { counter++ }
// counter === 0

var readOnly = require('some-decorator')
@readOnly
function foo () {}

var readOnly
@readOnly
function foo () {}
readOnly = require('some-decorator')

// Correct
function doSth (name) { console.log(`Hello, ${name}`)}

function loggingDecorator (wrapped) {
  return function () {
    console.log(`Starting`)
    const r = wrapped.apply(this)
    console.log('Finished')
    return r
  }
}
cosnt wrapped = loggingDecorator(doSth)

// core-decorators.js
// autobind
import { autobind, readonly } from 'core-decorators'

class Person {
  @autobind
  getperson () {
    return this
  }
}
let person = new Person ()
let getPerson = person.getPerson
getPerson() === person // true
class Meal {
  @readonly
  entree = 'stack'
}

var dinner = new Meal()
dinner.entree = 'salmon' // Cannot assign to readonly property 'entree' of [object Object]

class Parent {
  speak(first, second) {}
}
class Child extends Parent {
  @override
  speak () {} // SyntaxError: Child#speak() does not properly override Parent@speak(first, second)

  @override
  speaks () {} // SyntaxError: No descriptor matching Child#speaks() was found on the prototype chain. Did you mean
  // 'speak'?
}
// @deprecate @deprecated @suppressWarnings

// use decorator to  auto publish events when obj methods called
const postal = require('postal/lib/postal.lodash')

// Mixin 模式，是对象继承的一种替代方案，混入mixin in，在一个对象之中混入另一个对象的方法
const Foo = {
  foo () { console.log('foo')}
}
class MyClass {}
Object.assign(MyClass.prototype, Foo)
let obj = new MyClass()
obj.foo() // 'foo'

// mixins.js
export function mixins (...methods) {
  return function (target) {
    Object.assign(target.prototype, ...methods)
  }
}
// Above will change MyClass prototype object.

// traits-decorator


// let, const
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statement/let
// The let state declares a block scope local variable, optionally initialzing it to a value.
let x = 1
if (x === 1) {
  let x = 2
  console.log(x) // 2
}
console.log(x) // 1
// let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is
// used. This is unlike the var keyword, which defines a variable globally, or locallly to en entire function regardless
// regardless of block scope

/**
  Variable declared by `let` have their scope in the block for which they are defined, as well as in any contained sub-
  blocks. In this way, `let` works very much like `var`. The main difference is that the scope of a `var` variable is
  the entire enclosing function:
  */
function varTest () {
  var x = 1
  if (true) {
    var x = 2 // same variable
    console.log(x) // 2
  }
  console.log(x) // 2
}
function letTest () {
  let x = 1
  if (true) {
    let x = 2 // different variable
    console.log(x) // 2
  }
  console.log(x) // 1
}

var x = 'x'
let y = 'y'
console.log(this.x) // 'x'
console.log(this.y) // undefined
// In dealing with constructors it is possible to use the let bindings to share one or more private members without
// using closures
var Thing
{
  let privateScope = new WeakMap()
  let counter = 0

  Thing = function () {
    this.someProp = 'foo'

    privateScope.set(this, { hidden: ++counter })
  }
  Thing.prototype.showPublic = function () {
    return this.someProp
  }
  Thing.prototype.showPrivate = function () {
    return privateScope.get(this).hidden
  }
}

console.log(typeof privateScope) // undefined

var thing = new Thing()
console.log(thing) // Thing { somgProp: 'foo' }
thing.showPublic() // 'foo'
thing.showPrivate() // 1
// Redeclarations. Redeclaring the same variable within the same function or block scope raises a SyntaxError
if (x) {
  let foo
  let foo // SyntaxError thrown
}
let x = 1
switch (x) {
  case 0:
    let foo
    break
  case 1:
    let foo // SyntaxError for redeclaration
    break
}
let x = 1
switch (x) {
  case 0: {

    let foo
    break
  }
  case 1: {

    let foo
    break
  }
}
// Temporal dead zone
function doSth () {
  console.log(bar) // undefined
  console.log(foo) // ReferenceError
  var bar = 1
  let foo = 1
}
console.log(typeof undeclaredVariable) // 'undefined'
console.log(typeof i) // ReferenceError
let i = 1
// Another example of temporal dead zone combined with lexical scoping
function test () {
  var foo = 1
  if (true) {
    let foo = (foo + 1) // ReferenceError
  }
}
function go (n) {
  // n here is defined
  console.log(n)
  for (let n of n.a) {
    console.log(n) // Refe..
  }
}
go({ a: [1, 2, 3] })

function go (nn) {
  // nn here is defined
  console.log(nn)
  for (let n of nn.a) {
    console.log(n) // Refe..
  }
}
go({ a: [1, 2, 3] })

const n = 1
try {
  n = 2
} catch (e) {
  console.log(e) // TypeError: invalid assignment to const `n`, Note: error msg will vary depending on browser
}


// destructuring
const arr = [ 5, 'b', 4, 'd', 'e', 'f', 2 ];
const {
  6: x,           // x = 2
  0: y,           // y = 5
  2: z,           // z = 4
  length: count,  // count = 7
  name = 'array', // name = 'array' (not present in arr)
  ...restData     // restData = { '1': 'b', '3': 'd', '4': 'e', '5': 'f' }
} = arr;
