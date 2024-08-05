整数和浮点数。 遵循(*IEEE 754*)[https: //zh.wikipedia.org/wiki/IEEE_754] 标准，通过 64 位来表示一个数字
通过图片具体看一下数字在内存中的表示 图片文字说明 第 0 位： 符号位， 0 表示正数， 1 表示负数（ s） 第 1 到 11 位： 存储指数部分（ e） 第 12 位到 63 位： 存储小数部分（ 有效数字 f）

toFixed => toString stringify

```js
1 +
  '12' + // '112'
  '12' +
  1 // 13
'12' + 1 // '121'
isFinite('1.2') // true
isFinite('1.2s') // false
isFinite('.2') // true
isFinite('1') // true
3/2 // 1.5,not 1
Math.floor(3/2) //1
0.1+0.2=0.30000000000000004
```
遵循IEEE 754标准的双精度64位格式double-precision 64-bit format IEEE 754 values，除了BigInt，JavaScript中并不存在整数（型）Integer

32位整型变量，更多的高级数学函数和函数，
```js
Math.sin(3.5)
var circumference = 2*Math.PI*r
```

```js
let a = 3
let b=new Number(3)
let c=3
a==b // true
a===b//false
b===c//false
```
*new Number()是一个内建的函数构造器*，虽然它看着像是一个number，但它实际上并不是一个真实的number：有一堆额外的功能并且他是一个*对象*。==操作符只会检查两者是否拥有相同值，返回TRUE。===还会检查类型，new Number（3）是一个对象不是number。

```js
console.log(3 + 4 + "5");
A: "345"
B: "75"
C: 12
D: "12"
答案
答案: B
当所有运算符的 优先级 相同时，计算表达式需要确定运算符的结合顺序，即从右到左还是从左往右。在这个例子中，我们只有一类运算符+，对于加法来说，结合顺序就是从左到右。

3 + 4首先计算，得到数字7.

由于类型的强制转换，7 + '5'的结果是"75". JavaScript 将7转换成了字符串，可以参考问题 15.我们可以用+号把两个字符串连接起来。 "7" + "5" 就得到了"75".
```
# isNaN&&Number.isNaN
```js
const name = "Lydia Hallie";
const age = 21;

console.log(Number.isNaN(name));
console.log(Number.isNaN(age));

console.log(isNaN(name));
console.log(isNaN(age));
A: true false true false
B: true false false false
C: false false true false
D: false true false true
答案
答案: C
通过方法 Number.isNaN，你可以检测你传递的值是否为 数字值 并且是否等价于 NaN。name 不是一个数字值，因此 Number.isNaN(name) 返回 false。age 是一个数字值，但它不等价于 NaN，因此 Number.isNaN(age) 返回 false.

通过方法 isNaN， 你可以检测你传递的值是否一个 number。name 不是一个 number，因此 isNaN(name) 返回 true. age 是一个 number 因此 isNaN(age) 返回 false.
```
*Number.isNaN用于判断是否是`NaN`,isNaN判断数字类（包含`NaN`）和非数字类*
# 除法
```js
10^4
Math.pow(10,4)// 比前者更准确
```
# prototype
实现`(5).add(3).minus(2)`
```js
Number.prototype.add=function(n){
  return this+n
}
Number.prototype.minus=function(n){
  return this-n
}
```
