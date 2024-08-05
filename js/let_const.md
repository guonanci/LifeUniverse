```js
let name = 'Lydia'

function getName() {
  console.log(name)
  let name = 'Sarah'
}

getName()
A: Lydia
B: Sarah
C: undefined
D: ReferenceError
答案
答案: D

let name = 'Lydia'

function getName() {
  console.log(name)
}

getName() // Lydia
```

每个函数都有其自己的执行上下文。 getName函数首先在其自身的上下文（范围）内查找，以查看其是否包含我们尝试访问的变量name。 上述情况，getName函数包含其自己的name变量：我们用let关键字和Sarah的值声明变量name。

带有let关键字（和const）的变量被提升，但是与var不同，它不会被***初始化*** 。 在我们声明（初始化）它们之前，无法访问它们。 这称为 “暂时性死区”。 当我们尝试在声明变量之前访问变量时，JavaScript 会抛出*ReferenceError: Cannot access 'name' before initialization*。

如果我们不在getName函数中声明name变量，则 javascript 引擎会查看原型链。会找到其外部作用域有一个名为name的变量，其值为Lydia。 在这种情况下，它将打印Lydia：

```js
const randomValue = 21;

function getInfo() {
 console.log(typeof randomValue);
 const randomValue = "Lydia Hallie";
}

getInfo();
A: "number"
B: "string"
C: undefined
D: ReferenceError
答案
答案: D
通过 const 关键字声明的变量在被初始化之前不可被引用：这被称之为 暂时性死区。在函数 getInfo 中，变量 randomValue 声明在getInfo 的作用域的此法环境中。在想要对 typeof randomValue 进行 log 之前，变量 randomValue 仍未被初始化： 错误ReferenceError 被抛出！JS 引擎并不会根据作用域链网上寻找该变量，因为我们已经在 getInfo 函数中声明了 randomValue 变量。
```

