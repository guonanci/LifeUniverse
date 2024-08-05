# Object.create
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create
ES5提供的
Object.create(proto, [propertiesObject])方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。 它接收两个参数，不过第二个可选参数是属性描述符（不常用，默认是undefined）。对于不支持ES5的浏览器，MDN上提供了ployfill方案。 MDN Object.create()
```js
// 简版：也正是应用了new会设置__proto__链接的原理。
if(typeof Object.create !== 'function'){
    Object.create = function(proto){
        function F() {}
        F.prototype = proto;
        return new F();
    }
}

const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"

```

Syntax
Object.create(proto[, propertiesObject])
Parameters
proto
The object which should be the prototype of the newly-created object.
propertiesObject
Optional. If specified and not undefined, an object whose enumerable own properties (that is, those properties defined upon itself and not enumerable properties along its prototype chain) specify property descriptors to be added to the newly-created object, with the corresponding property names. These properties correspond to the second argument of Object.defineProperties().
a1 = Object.create({}, {a11: {value: 'a11', writable: true, enumerable: true, configurable: true}}); a1;

// Shape - superclass
function Shape() {
this.x = 0;
this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
this.x += x;
this.y += y;
console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?',
rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'

##If you wish to inherit from multiple objects, then mixins are a possibility.

function MyClass() {
SuperClass.call(this);
OtherSuperClass.call(this);
}

// inherit one class
MyClass.prototype = Object.create(SuperClass.prototype);
// mixin another
Object.assign(MyClass.prototype, OtherSuperClass.prototype);
// re-assign constructor
MyClass.prototype.constructor = MyClass;

MyClass.prototype.myMethod = function() {
// do a thing
};
#Object.assign
The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.

Object.assign(target, ...sources)

##target object itself is changed.

##Merging objects with same properties
#Inheritance
function Teacher(first, last, age, gender, interests, subject) {
Person.call(this, first, last, age, gender, interests);

this.subject = subject;
}

`__proto__` is the actual object that is used in the lookup chain to resolve methods, etc.

`prototype` is the object that is used to build `__proto__` whn you create an object with `new`

{ new Foo }.**proto** === Foo.prototype

{ new Foo }.prototype === undefined

显式原型 explicit prototype property `prototype`
隐式原型 implicit prototype link `__proto__`

`Object.prototype.__proto__ === null`

一个对象的引用隐式原型指向创建这个对象的 constructor 构造函数 的 prototype 对象属性

prototype 作用： 用来实现基于原型的继承与属性（方法）的共享
**proto**作用： 构成原型链，同样用于实现基于原型的继承，访问 obj 对象的 x 属性时，如果 obj 中找不到，就会沿着**proto** 依次查找

字面量实际上只是语法糖，

function object(o){
function F(){}
F.prototype = o;
return new F()
}
----- 《JavaScript 高级程序设计》P169

//以下是用于验证的伪代码
var f = new F();
//于是有
f.**proto** === F.prototype //true
//又因为
F.prototype === o;//true
//所以
f.**proto** === o;
因此由 Object.create(o)创建出来的对象它的隐式原型指向 o。

作者：苏墨橘
链接：https://www.zhihu.com/question/34183746/answer/59043879
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

Array.prototype.**proto** === Object.prototype

构造函数的隐式原型
既然是构造函数那么它就是 Function（）的实例，因此也就指向 Function.prototype,比如 Object.**proto** === Function.prototype

##instanceof

instanceof 操作符的内部实现机制和隐式原型、显式原型有直接的关系。instanceof 的左值一般是一个对象，右值一般是一个构造函数，用来判断左值是否是右值的实例。它的内部实现原理是这样的： //设 L instanceof R
//通过判断
L.**proto**.**proto** ..... === R.prototype ？
//最终返回 true or false
也就是沿着 L 的**proto**一直寻找到原型链末端，直到等于 R.prototype 为止。知道了这个也就知道为什么以下这些奇怪的表达式为什么会得到相应的值了 Function instanceof Object // true
Object instanceof Function // true
Function instanceof Function //true
Object instanceof Object // true
Number instanceof Number //false

作者：苏墨橘
链接：https://www.zhihu.com/question/34183746/answer/59043879
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

清单 2. instanceof 常规用法
1
2
3
4
// 判断 foo 是否是 Foo 类的实例
function Foo(){}
var foo = new Foo();
console.log(foo instanceof Foo)//true
另外，更重的一点是 instanceof 可以在继承关系中用来判断一个实例是否属于它的父类型。例如：

清单 3. instanceof 在继承中关系中的用法
1
2
3
4
5
6
7
8
// 判断 foo 是否是 Foo 类的实例 , 并且是否是其父类型的实例
function Aoo(){}
function Foo(){}
Foo.prototype = new Aoo();//JavaScript 原型继承

var foo = new Foo();
console.log(foo instanceof Foo)//true
console.log(foo instanceof Aoo)//true

Object.prototype.**proto** === null

```js
function instance_of(L, R) {
	const O = R.prototype
	L = L.__proto__
	while(true) {
	if (L === null) {
		return false
	}
	if (O === L) {
		return true
	}
	L = L.__proto__
}
```

清单 7. Object instanceof Object
1
2
3
4
5
6
7
8
9
10
11
12
// 为了方便表述，首先区分左侧表达式和右侧表达式
ObjectL = Object, ObjectR = Object;
// 下面根据规范逐步推演
O = ObjectR.prototype = Object.prototype
L = ObjectL.**proto** = Function.prototype
// 第一次判断
O != L
// 循环查找 L 是否还有 **proto**
L = Function.prototype.**proto** = Object.prototype
// 第二次判断
O == L
// 返回 true
清单 8. Function instanceof Function
1
2
3
4
5
6
7
8
// 为了方便表述，首先区分左侧表达式和右侧表达式
FunctionL = Function, FunctionR = Function;
// 下面根据规范逐步推演
O = FunctionR.prototype = Function.prototype
L = FunctionL.**proto** = Function.prototype
// 第一次判断
O == L
// 返回 true
清单 9. Foo instanceof Foo
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
// 为了方便表述，首先区分左侧表达式和右侧表达式
FooL = Foo, FooR = Foo;
// 下面根据规范逐步推演
O = FooR.prototype = Foo.prototype
L = FooL.**proto** = Function.prototype
// 第一次判断
O != L
// 循环再次查找 L 是否还有 **proto**
L = Function.prototype.**proto** = Object.prototype
// 第二次判断
O != L
// 再次循环查找 L 是否还有 **proto**
L = Object.prototype.**proto** = null
// 第三次判断
L == null
// 返回 false

```js
TypeError: Cannot convert undefined or null to object
> 118 | const urlName = Object.entries(data[0]).reduce((acc, v) => {
      | ^  119 |   if (isUrl(v[1] as string)) acc = v[0]
  120 |   return acc
  121 | }, '')

```

# setPrototypeOf
ES6
Object.setPrototypeOf() 方法设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或  null。 Object.setPrototypeOf(obj, prototype)

```js
`ployfill`
// 仅适用于Chrome和FireFox，在IE中不工作：
Object.setPrototypeOf = Object.setPrototypeOf || function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
}
```


# hasOwnProperty
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty Object.prototype.hasOwnProperty()
hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。

https://juejin.cn/post/6975531514444562462 稀疏数组
https://juejin.cn/post/7146973901166215176 手写reduce

# toString
判断所有数据类型的方法
通过Object.prototype.toString.call实现
```js
function getDataType(target) {
  return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
}
// 判断所有的数据类型
console.log(getDataType(null)); // null
console.log(getDataType(undefined)); // undefined
console.log(getDataType(Symbol())); // symbol
console.log(getDataType(new Date())); // date
console.log(getDataType(new Set())); // set

```

使用动态属性名创建对象
```js
// bad
const obj={
  id:5
}
obj[getKey('enabled')]=true
const obj={
  id:5,
  [getKey('enabled')]:true
}

属性值缩写eslint:object-shorthand
const obj={
  lukeSkywalker:lukeSkywalker,
}
为了易读性，建议将所有缩写属性放在一起
const obj={
  lukeSkywalker,
  anakinSkywalker,
  episodeOne:1,
  twoJediWalkIntoACantina:2,
}
不要直接调用Object.prototype的方法，hasOwnProperty和isPrototypeOf，因为空对象和{hasOwnProperty:false}情况下容易出问题no-prototype-builtins
可以使用*`Object.prototype.hasOwnPropert.call(obj,key))`*
console.log(obj.hasOwnProperty(k))

使用对象方法的简写模式eslint:object-shorthand
const item={
  value:1,
  addV: function(v){
    return item.v+v
  },
  addValue(v){
    return item.value+v
  }
}
```

eslint:The object literal notation {} is preferrable

```js
const bird = {
  size: 'small'
}

const mouse = {
  name: 'Mickey',
  small: true
}
A: mouse.bird.size是无效的
B: mouse[bird.size]是无效的
C: mouse[bird["size"]]是无效的
D: 以上三个选项都是有效的

A

在JavaScript中，所有对象的keys都是字符串（除非对象是Symbol），尽管我们可能不会定义它们为字符串，但他们在底层总会被转换为字符串。当我们使用括号语法（[]）时，JavaScript会解释（unboxes）语句。它首先看到第一个开始括号[并继续前进直到找到结束括号]。只有这样，他才会计算语句的值。

mouse[bird.size]：首先计算 bird.size，这会得到 small。mouse["small"] 返回 true。

然后使用点语法的话，上面这一切都不会发生。mouse 没有 bird 这个 key，这也就意味着 mouse.bird 是 undefined。然后当我们使用点语法 mouse.bird.size 时，因为 mouse.bird 是 undefined，这也就变成了 undefined.size。这个行为是无效的，并且会抛出一个错误类似 Cannot read property "size" of undefined。


```

```js
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log('You are an adult!')
  } else if (data == { age: 18 }) {
    console.log('You are still an adult.')
  } else {
    console.log(`Hmm.. You don't have an age I guess`)
  }
}

checkAge({ age: 18 })
A: You are an adult!
B: You are still an adult.
C: Hmm.. You don't have an age I guess
答案
答案: C
在测试相等性时，基本类型通过它们的值（value）进行比较，而对象通过它们的引用（reference）进行比较。JavaScript 检查对象是否具有对内存中相同位置的引用。

题目中我们正在比较的两个对象不是同一个引用：作为参数传递的对象引用的内存位置，与用于判断相等的对象所引用的内存位置并不同。

这也是 { age: 18 } === { age: 18 } 和 { age: 18 } == { age: 18 } 都返回 false 的原因。
```

```js
const obj = { 1: 'a', 2: 'b', 3: 'c' }
const set = new Set([1, 2, 3, 4, 5])

obj.hasOwnProperty('1')
obj.hasOwnProperty(1)
set.has('1')
set.has(1)
A: false true false true
B: false true true true
C: true true false true
D: true true true true
答案
答案: C
所有对象的键（不包括 Symbol）在底层都是字符串，即使你自己没有将其作为字符串输入。这就是为什么 obj.hasOwnProperty('1') 也返回 true。

对于集合，它不是这样工作的。在我们的集合中没有 '1'：set.has('1') 返回 false。它有数字类型为 1，set.has(1) 返回 true。
```
```js
const obj = { a: 'one', b: 'two', a: 'three' }
console.log(obj)
A: { a: "one", b: "two" }
B: { b: "two", a: "three" }
C: { a: "three", b: "two" }
D: SyntaxError
答案
答案: C
如果你有两个名称相同的键，则键会被替换掉。它仍然位于第一个键出现的位置，但是值是最后出现那个键的值。
```
```js
const a = {}
const b = { key: 'b' }
const c = { key: 'c' }

a[b] = 123
a[c] = 456

console.log(a[b])
A: 123
B: 456
C: undefined
D: ReferenceError
答案
答案: B
对象的键被自动转换为字符串。我们试图将一个对象 b 设置为对象 a 的键，且相应的值为 123。

然而，当字符串化一个对象时，它会变成 "[object Object]"。因此这里说的是，a["[object Object]"] = 123。然后，我们再一次做了同样的事情，c 是另外一个对象，这里也有隐式字符串化，于是，a["[object Object]"] = 456。

然后，我们打印 a[b]，也就是 a["[object Object]"]。之前刚设置为 456，因此返回的是 456。


```

```js
let person={name:'Lydia'}
const members=[person]
person=null
console.log(members)//[{name:'Lydia'}]

```
首先我们声明了一个拥有name属性的对象 person。


然后我们又声明了一个变量members. 将首个元素赋值为变量person。 *当设置两个对象彼此相等时，它们会通过 引用 进行交互。但是当你将引用从一个变量分配至另一个变量时，其实只是执行了一个 复制 操作。（注意一点，他们的引用 并不相同!）*接下来我们让person等于null。


我们没有修改数组第一个元素的值，而只是修改了变量person的值，因为元素（复制而来）的引用与person不同。members的第一个元素仍然保持着对原始对象的引用。当我们输出members数组时，第一个元素会将引用的对象打印出来。

```js
const person = {
  name: "Lydia",
  age: 21
};

for (const item in person) {
  console.log(item);
}
A: { name: "Lydia" }, { age: 21 }
B: "name", "age"
C: "Lydia", 21
D: ["name", "Lydia"], ["age", 21]
答案
答案: B
在for-in循环中，我们可以通过对象的 key 来进行迭代，也就是这里的name和age。在底层，对象的 key 都是字符串（如果他们不是 Symbol 的话）。在每次循环中，我们将item设定为当前遍历到的 key.所以一开始，item是name，之后 item输出的则是age。
```
# defineProperty
Vue的响应式原理中Object.defineProperty有什么缺陷？为什么在vue3.0采用Proxy，抛弃Object.defineProperty？
1. defineProperty无法低耗费的监听数组下标的变化，导致通过数组下标添加元素，不能实时响应
2. defineProperty只能劫持对象属性，从而需要对每个对象，每个属性进行遍历，如果属性值是对象，还需要深度遍历。Proxy可以劫持整个对象，并返回一个新对象
3. Proxy不仅可以代理对象，还可以代理数组。还可以代理动态增加的属性
```js
const person = { name: "Lydia" };

Object.defineProperty(person, "age", { value: 21 });

console.log(person);
console.log(Object.keys(person));
A: { name: "Lydia", age: 21 }, ["name", "age"]
B: { name: "Lydia", age: 21 }, ["name"]
C: { name: "Lydia"}, ["name", "age"]
D: { name: "Lydia"}, ["age"]
答案
答案: B
通过defineProperty方法，我们可以给对象添加一个新属性，或者修改已经存在的属性。而我们使用defineProperty方法给对象添加了一个属性之后，属性默认为 不可枚举 (not enumerable). Object.keys方法仅返回对象中 可枚举 (enumerable) 的属性，因此只剩下了"name".

用defineProperty方法添加的属性默认不可变。你可以通过writable, configurable 和 enumerable属性来改变这一行为。这样，defineProperty方法可以让您更好地控制要添加到对象的属性。
```

# freeze frozen
```js
以下哪一项会对对象 person 有副作用？
const person = {
	name: "Lydia Hallie",
	address: {
		street: "100 Main St"
	}
};

Object.freeze(person);
A: person.name = "Evan Bacon"
B: delete person.address
C: person.address.street = "101 Main St"
D: person.pet = { name: "Mara" }
答案
答案: C
使用方法 Object.freeze 对一个对象进行 冻结。不能对属性进行添加，修改，删除。

然而，它仅 对对象进行 浅 冻结，意味着只有 对象中的 直接 属性被冻结。如果属性是另一个 object，像案例中的 address，address 中的属性没有被冻结，仍然可以被修改。
```
```js
const box = { x: 10, y: 20 };

Object.freeze(box);

const shape = box;
shape.x = 100;
console.log(shape)
A: { x: 100, y: 20 }
B: { x: 10, y: 20 }
C: { x: 100 }
D: ReferenceError
答案
答案: B
Object.freeze使得无法添加、删除或修改对象的属性（除非属性的值是另一个对象）。

当我们创建变量shape并将其设置为等于冻结对象box时，shape指向的也是冻结对象。你可以使用Object.isFrozen检查一个对象是否被冻结，上述情况，Object.isFrozen（shape）将返回true。

由于shape被冻结，并且x的值不是对象，所以我们不能修改属性x。 x仍然等于10，{x：10，y：20}被打印。

注意，上述例子我们对属性x进行修改，可能会导致抛出 TypeError 异常（最常见但不仅限于严格模式下时）。
```

# entries
```js
const person = {
  name: "Lydia",
  age: 21
}

for (const [x, y] of Object.entries(person)) {
  console.log(x, y)
}
A: name Lydia and age 21
B: ["name", "Lydia"] and ["age", 21]
C: ["name", "age"] and undefined
D: Error
答案
答案: A
Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组，上述情况返回一个二维数组，数组每个元素是一个包含键和值的数组：

[['name'，'Lydia']，['age'，21]]

使用for-of循环，我们可以迭代数组中的每个元素，上述情况是子数组。 我们可以使用const [x，y]在for-of循环中解构子数组。 x等于子数组中的第一个元素，y等于子数组中的第二个元素。

第一个子阵列是[“name”，“Lydia”]，其中x等于name，而y等于Lydia。 第二个子阵列是[“age”，21]，其中x等于age，而y等于21。
```
# keys
```js
const info = {
  [Symbol('a')]: 'b'
}

console.log(info)
console.log(Object.keys(info))
A: {Symbol('a'): 'b'} and ["{Symbol('a')"]
B: {} and []
C: { a: "b" } and ["a"]
D: {Symbol('a'): 'b'} and []
答案
答案: D
Symbol类型是不可枚举的。Object.keys方法返回对象上的所有可枚举的键属性。Symbol类型是不可见的，并返回一个空数组。 记录整个对象时，所有属性都是可见的，甚至是不可枚举的属性。

这是Symbol的众多特性之一：除了表示完全唯一的值（防止对象意外名称冲突，例如当使用 2 个想要向同一对象添加属性的库时），您还可以隐藏这种方式对象的属性（尽管不完全。你仍然可以使用Object.getOwnPropertySymbols()方法访问 Symbol。
```

# 属性property
```js
const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
}

const colors = ["pink", "red", "blue"]

console.log(colorConfig.colors[1])
A: true
B: false
C: undefined
D: TypeError
答案
答案: D
在 JavaScript 中，我们有两种访问对象属性的方法：括号表示法或点表示法。 在此示例中，我们使用点表示法（colorConfig.colors）代替括号表示法（colorConfig [“ colors”]）。

使用点表示法，JavaScript 会尝试使用该确切名称在对象上查找属性。 在此示例中，JavaScript 尝试在 colorconfig 对象上找到名为 colors 的属性。 没有名为 “colors” 的属性，因此返回 “undefined”。 然后，我们尝试使用[1]访问第一个元素的值。 我们无法对未定义的值执行此操作，因此会抛出Cannot read property '1' of undefined。

```
JavaScript 解释（或*取消装箱*）语句。 当我们使用方括号表示法时，它会看到第一个左方括号[并一直进行下去，直到找到右方括号]。 只有这样，它才会评估该语句。 如果我们使用了 colorConfig [colors [1]]，它将返回 colorConfig 对象上 red 属性的值。
# seal()
```js
以下哪一项会对对象 person 有副作用？
const person = { name: "Lydia Hallie" };

Object.seal(person);
A: person.name = "Evan Bacon"
B: person.age = 21
C: delete person.name
D: Object.assign(person, { age: 21 })
答案
答案: A
使用 Object.seal 我们可以防止新属性 被添加，或者存在属性 被移除.

然而，你仍然可以对存在属性进行更改。
```
# valueOf()
```js
下面代码中 a 在什么情况下会打印 1？
var a = ?;
if(a == 1 && a == 2 && a == 3){
 	console.log(1);
}
解答：

var a = {
  value: 0,

  valueOf() {
    return ++this.value;
  }
};
```
