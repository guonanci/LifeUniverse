不要使用Function构造函数创建函数，此方式创建函数和对字符串使用eval（）一样会产生漏洞no-new-func

使用具名函数表达式而非函数声明func-style

```js
// bad
function foo(){
  // ...
}
// bad
const foo=function(){
  // ...
}
// good
// lexical词汇的字面量上的 name distinguished区分开的 from the variable-referenced变量引用 invocation(s)调用
const short=function longUniqueMoreDescriptiveLexicalFoo(){

}

避免在非函数代码块if、while中声明函数eslint:no-loop-func
// bad
if(isUse){
  function test(){
    // do sth
  }
}
// good
let test
if(isUse){
  test=()=>{
    // do sth
  }
}

使用rest语法中的……代替arguments
// bad
function concatenateAll(){
  const args=Array.prototype.slice.call(arguments)
  return args.join('')
}
// good
function concatenateAll(...args){
  return args.join('')
}
函数的默认参数放在最后
避免对函数的参数重新赋值，可能造成意想不到的变量副作用
```

```js
function bark() {
  console.log('Woof!')
}

bark.animal = 'dog'
A: 正常运行！
B: SyntaxError. 你不能通过这种方式给函数增加属性。
C: undefined
D: ReferenceError
答案
答案: A
这在 JavaScript 中是可以的，因为函数是对象！（除了基本类型之外其他都是对象）

```
*函数是一个特殊的对象*。你写的这个代码其实不是一个实际的函数。函数是*一个拥有属性的对象，并且属性也可被调用*。
# 参数parameter
```js
const person = {
  name: "Lydia",
  age: 21
}

const changeAge = (x = { ...person }) => x.age += 1
const changeAgeAndName = (x = { ...person }) => {
  x.age += 1
  x.name = "Sarah"
}

changeAge(person)
changeAgeAndName()

console.log(person)
A: {name: "Sarah", age: 22}
B: {name: "Sarah", age: 23}
C: {name: "Lydia", age: 22}
D: {name: "Lydia", age: 23}
答案
答案: C
函数 changeAge 和函数 changeAgeAndName 有着不同的参数，定义一个 新 生成的对象 { ...person }。这个对象有着所有 person 对象 中 k/v 值的副本。

首项，我们调用 changeAge 函数并传递 person 对象作为它的参数。这个函数对 age 属性进行加一操作。person 现在是 { name: "Lydia", age: 22 }。

然后，我们调用函数 changeAgeAndName ，然而我们没有传递参数。取而代之，x 的值等价 new 生成的对象：{ ...person }。因为它是一个新生成的对象，它并不会对对象 person 造成任何副作用。person 仍然等价于 { name: "Lydia", age: 22 }。


```
```js
function getInfo(member, year) {
  member.name = "Lydia";
  year = "1998";
}

const person = { name: "Sarah" };
const birthYear = "1997";

getInfo(person, birthYear);

console.log(person, birthYear);
A: { name: "Lydia" }, "1997"
B: { name: "Sarah" }, "1998"
C: { name: "Lydia" }, "1998"
D: { name: "Sarah" }, "1997"
答案
答案: A
普通参数都是 值 传递的，而对象则不同，是 引用 传递。所以说，birthYear是值传递，因为他是个字符串而不是对象。当我们对参数进行值传递时，会创建一份该值的 复制 。（可以参考问题 46）

变量birthYear有一个对"1997"的引用，而传入的参数也有一个对"1997"的引用，但二者的引用并不相同。当我们通过给 year赋值"1998"来更新year的值的时候我们只是更新了year（的引用）。此时birthYear仍然是"1997".

而person是个对象。参数member引用与之 相同的 对象。当我们修改member所引用对象的属性时，person的相应属性也被修改了，因为他们引用了相同的对象。person的 name属性也变成了 "Lydia".
```

```js
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log(x.number *= 2);
};

multiply();
multiply();
multiply(value);
multiply(value);
A: 20, 40, 80, 160
B: 20, 40, 20, 40
C: 20, 20, 20, 40
D: NaN, NaN, 20, 40
答案
答案: C
在 ES6 中，我们可以使用默认值初始化参数。如果没有给函数传参，或者传的参值为 "undefined" ，那么参数的值将是默认值。上述例子中，我们将 value 对象进行了解构并传到一个新对象中，因此 x 的默认值为 {number：10} 。

默认参数在调用时才会进行计算，每次调用函数时，都会创建一个新的对象。我们前两次调用 multiply 函数且不传递值，那么每一次 x 的默认值都为 {number：10} ，因此打印出该数字的乘积值为20。

第三次调用 multiply 时，我们传递了一个参数，即对象value。 *=运算符实际上是x.number = x.number * 2的简写，我们修改了x.number的值，并打印出值20。

第四次，我们再次传递value对象。 x.number之前被修改为20，所以x.number * = 2打印为40。
```
```js
function sum(num1, num2 = num1) {
  console.log(num1 + num2)
}

sum(10)
A: NaN
B: 20
C: ReferenceError
D: undefined
答案
答案: B
您可以将默认参数的值设置为函数的另一个参数，只要另一个参数定义在其之前即可。 我们将值10传递给sum函数。 如果sum函数只接收 1 个参数，则意味着没有传递num2的值，这种情况下，num1的值等于传递的值10。 num2的默认值是num1的值，即10。 num1 + num2返回20。

如果您尝试将默认参数的值设置为后面定义的参数，则可能导致参数的值尚未初始化，从而引发错误。比如：

function test(m = n, n = 2) {
	console.log(m, n)
}
test() // Uncaught ReferenceError: Cannot access 'n' before initialization
test(3) // 3 2
test(3, 4) // 3 4
```

```js
function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log("Not the same!")
  } else {
    console.log("They are the same!")
  }
}

const person = { name: "Lydia" }

compareMembers(person)
A: Not the same!
B: They are the same!
C: ReferenceError
D: SyntaxError
答案
答案: B
对象通过引用传递。 当我们检查对象的严格相等性（===）时，我们正在比较它们的引用。

我们将 “person2” 的默认值设置为 “person” 对象，并将 “person” 对象作为 “person1” 的值传递。

这意味着两个值都引用内存中的同一位置，因此它们是相等的。

运行 “ else” 语句中的代码块，并记录They are the same! 。
```
# 纯函数
##　为什么 Vuex 的 mutation 和 Redux 的 reducer 中不能做异步操作？
纯函数，给定同样的输入返回同样的输出，可预测性。


有时候会犯双层函数的错，多了一层，比如接口调用或者eventListener的地方。
