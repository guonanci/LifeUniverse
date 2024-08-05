```js
function sayHi() {
  console.log(name)
  console.log(age)
  var name = 'Lydia'
  let age = 21
}

sayHi()
// D: undefined 和 ReferenceError

```
var 变量被提升了（*内存空间在创建阶段就被设置好了*）,直到程序运行到定义变量位置之前默认值都是undefined。因为当我们打印name变量时还没有执行到定义变量的位置，因此变量的值保持为undefined

通过let和const关键字声明的变量也会提升，但是和var不同，他们不会被初始化。在我们声明（初始化）之前不能访问它们。这个行为被称之为暂时性死区。当我们试图在声明之前访问它们时，JavaScript会抛出一个ReferenceError错误。
```js
var num = 8
var num = 10

console.log(num)
A: 8
B: 10
C: SyntaxError
D: ReferenceError
答案
答案: B
使用 var 关键字，你可以用相同的名称声明多个变量。然后变量将保存最新的值。

你不能使用 let 或 const 来实现这一点，因为它们是块作用域的。
```
