spread_operator.md
将可迭代对象展开到单独的元素中，所谓的可迭代对象就是任何能用 for of 循环进行遍历的对象，例如：数组（数组常用方法）、字符串、Map、Set、DOM 节点
1 拷贝数组对象
2 合并操作（数组、对象）
3 参数传递（还有 math min+max 函数）
4 数组去重
5 字符串转字符数组
6NodeList 转数组 NodeList 对象是节点集合，通常是由属性，如 `Node.childNodes` 和方法，如`document.querySelectorAll`返回。
类似于数组，但不是数组。没有 Array 的所有方法如 find、map、filter，但是可以使用 forEach 来遍历。可以通过扩展运算符将其转为数组。

```js
const nodeList = document.querySelectorAll('.all')
const nodeArr = [...nodeList]
```

7 解构变量(arr,obj)
8 打印日志（传递参数这一项）
<https://juejin.cn/post/6979840705921286180>

<https://segmentfault.com/q/1010000023041006>
<https://tc39.es/proposal-object-rest-spread/>
<https://segmentfault.com/a/1190000019115131?utm_source=sf-similar-article>
<https://www.bookstack.cn/read/es6-3rd/spilt.1.docs-array.md>

*使用对象扩展操作符代替Object.assign来实现浅拷贝*

```js
const original={a:1,b:2}
//bad
const copy=Object.assign({},original,{c:3})
//good
const copy={...original,c:3}
使用对象的rest操作符来获得一个具有部分属性的新对象
```

使用展开符拷贝数组，而不是for循环；使用扩展运算符代替Array.from将可迭代对象转换成数组

```js
function getAge(...args) {
  console.log(typeof args)
}

getAge(21)
A: "number"
B: "array"
C: "object"
D: "NaN"
答案
答案: C
扩展运算符（...args）会返回实参组成的数组。而数组是对象，因此 typeof args 返回 "object"。
```

```js
function getItems(fruitList, ...args, favoriteFruit) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")
A: ["banana", "apple", "pear", "orange"]
B: [["banana", "apple"], "pear", "orange"]
C: ["banana", "apple", ["pear"], "orange"]
D: SyntaxError
答案
答案: D
... args是剩余参数，剩余参数的值是一个包含所有剩余参数的数组，并且只能作为最后一个参数。上述示例中，剩余参数是第二个参数，这是不可能的，并会抛出语法错误。

function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")
上述例子是有效的，将会返回数组：[ 'banana', 'apple', 'orange', 'pear' ]
```
