```js
// 1） Class 类可以看作是构造函数的语法糖
class Point {}
console.log(typeof Point); // "function"
console.log(Point === Point.prototype.constructor); // true

// 2） Class 类中定义的方法，都是定义在该构造函数的原型上
class Point {
  constructor() {}
  toString() {}
}
// 等同于
Point.prototype = { constructor() {}, toString() {} };

// 3）使用static关键字定义静态方法，只能通过类调用静态方法，实例不能调用
class Foo {
  static classMethod() {
    return "hello";
  }
}
Foo.classMethod(); // 'hello'

class Chameleon {
  static colorChange(newColor) {
    this.newColor=newColor
    return this.newColor
  }
  constructor({newColor='green'}={}){
    this.newColor=newColor
  }
}
const freddie=new Chameleon({newColor:'purple'})
dreddie.colorChange('orange')  //TyepError
// colorChange是一个静态方法，被设计为只能被创建他们的构造器使用，并且不能传递给实例。Freddie是一个实例，静态方法不能被实例使用，因此抛出了TypeError

// 4）实例属性的简写写法
class Foo {
  bar = "hello";
  baz = "world";
}
// 等同于
class Foo {
  constructor() {
    this.bar = "hello";
    this.baz = "world";
  }
}

// 5）extends 关键字，底层也是利用的寄生组合式继承

class Parent {
  constructor(age) {
    this.age = age;
  }
  getName() {
    console.log(this.name);
  }
}
class Child extends Parent {
  constructor(name, age) {
    super(age);
    this.name = name;
  }
}
let child = new Child("li", 16);
child.getName(); // li
```
手写Class类
*ES6的 Class 内部是基于寄生组合式继承，它是目前最理想的继承方式，ES6的 Class 允许子类继承父类的静态方法和静态属性*
```js
// Child 为子类的构造函数， Parent为父类的构造函数
function selfClass(Child, Parent) {
  // Object.create 第二个参数，给生成的对象定义属性和属性描述符/访问器描述符
  Child.prototype = Object.create(Parent.prototype, {
    // 子类继承父类原型上的属性和方法
    constructor: {
      enumerable: false,
      configurable: false,
      writable: true,
      value: Child
    }
  });
  // 继承父类的静态属性和静态方法
  Object.setPrototypeOf(Child, Parent);
}

// 测试
function Child() {
  this.name = 123;
}
function Parent() {}
// 设置父类的静态方法getInfo
Parent.getInfo = function() {
  console.log("info");
};
Parent.prototype.getName = function() {
  console.log(this.name);
};
selfClass(Child, Parent);
Child.getInfo(); // info
let tom = new Child();
tom.getName(); // 123
```

```js
class Person {
  constructor(name) {
    this.name = name
  }
}

const member = new Person("John")
console.log(typeof member)
A: "class"
B: "function"
C: "object"
D: "string"

答案: C
// 类是构造函数的语法糖，如果用构造函数的方式来重写Person类，则将是：

function Person() {
  this.name = name
}
```
通过new来调用构造函数，将会生成构造函数Person的实例，*对实例执行typeof关键字将返回"object"*


```js
class Person {
  constructor() {
    this.name = "Lydia"
  }
}

Person = class AnotherPerson {
  constructor() {
    this.name = "Sarah"
  }
}

const member = new Person()
console.log(member.name)
A: "Lydia"
B: "Sarah"
C: Error: cannot redeclare Person
D: SyntaxError
答案
答案: B
我们可以将类设置为等于其他类/函数构造函数。 在这种情况下，我们将Person设置为AnotherPerson。 这个构造函数的名字是Sarah，所以新的Person实例member上的 name 属性是Sarah。
```

```js
class Counter {
	constructor() {
		this.count = 0;
	}

	increment() {
		this.count++;
	}
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);
A: 0
B: 1
C: 2
D: 3
答案
答案: D
counterOne 是类 Counter 的一个实例。类 Counter 包含一个在构造函数里初始化的count属性， 和一个 increment 方法。首先，我们通过 counterOne.increment() 调用increment方法两次。现在，counterOne.count 为2。


然后，我们创建一个新的变量 counterTwo 并将 counterOne 的引用地址赋值给它。因为对象受引用地址的影响，我们刚刚创建了一个新的对象，其引用地址和 counterOne 的等价。因此它们指向同一块内存地址，任何对其的副作用都会影响 counterTwo。现在 counterTwo.count 为 2。

我们调用 counterTwo.increment() 将 count 的值设为 3。然后，我们打印 counterOne 里的 count，结果为 3。
```

# 私有属性
```js
class Counter {
  #number = 10

  increment() {
    this.#number++
  }

  getNum() {
    return this.#number
  }
}

const counter = new Counter()
counter.increment()

console.log(counter.#number)
```
A: 10
B: 11
C: undefined
D: SyntaxError

答案: D
*在 ES2020 中，通过 # 可以给 class 添加私有变量，我们无法在class外部获取其值。当我们尝试输出 counter.#number，语法错误会被抛出*

# super
```js
class Bird {
	constructor() {
		console.log("I'm a bird. 🦢");
	}
}

class Flamingo extends Bird {
	constructor() {
		console.log("I'm pink. 🌸");
		super();
	}
}

const pet = new Flamingo();
```
A: I'm pink. 🌸
B: I'm pink. 🌸 I'm a bird. 🦢
C: I'm a bird. 🦢 I'm pink. 🌸
D: Nothing, we didn't call any method

答案: B
我们创建了类 Flamingo 的实例 pet，当我们实例化这个实例时，Flamingo 中的 constructor 被调用。首先，输出 "I'm pink. 🌸"，之后我们调用super()。*super()是在调用父类的构造函数Bird*

```js
class Calc {
	constructor() {
		this.count = 0
	}

	increase() {
		this.count++
	}
}

const calc = new Calc()
new Calc().increase()

console.log(calc.count)
```
A: 0
B: 1
C: undefined
D: ReferenceError
答案
答案: A
*我们设置 calc 变量为 Calc 类的一个新实例。 然后，我们初始化一个 Calc 的新实例，而且调用了这个实例的 increase 方法。因为 count 属性是在 Calc class 的 constructor 内部的，所以 count 属性不会在 Calc 的原型链上共享出去。这就意味着 calc 实例的 count 值不会被更新，count 仍然是0*。
