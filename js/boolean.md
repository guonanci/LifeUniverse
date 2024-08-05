# falsy
```js
下面哪些值是 falsy?
0
new Number(0)
('')
(' ')
new Boolean(false)
undefined
A: 0, '', undefined
B: 0, new Number(0), '', new Boolean(false), undefined
C: 0, '', new Boolean(false), undefined
D: All of them are falsy
答案
答案: A
```
*只有 8 种 falsy 值：undefined、null、NaN、false、''、0、-0、0n (BigInt(0))，new Number 和 new Boolean这类的Function 构造函数是 truthy*。


```js
const one = (false || {} || null)
const two = (null || false || "")
const three = ([] || 0 || true)

console.log(one, two, three)
```
A: false null []
B: null "" true
C: {} "" []
D: null null true

答案: C
使用||运算符，我们可以返回第一个真值，如果所有值都是假值，则返回最后一个值。

false || {} || null：空对象{}是一个真值，这是第一个真值，也是唯一的真值，它将被返回。null || false || ""：所有值都是假值。这意味着返回传递的值""。[] || 0 || ""：空数组[]是一个真值,这是第一个返回的真值。
