a very powerful tool that every web developer should learn how to use. It allows you to define and customize the way a value
is iterated, effectively allowing to make any value iterable. You can easily apply this knowledge to plain JavaScript objects and even classes.
All you need to correctly define an iterator is a generator function yielding each of the iteration values. This could be used to retrieve 检索 k-v pairs in an obj,call specific getter functions from a class or split a number into an arr of digits.

```js
const obj={a:1,b:2}
obj[Symbol.iterator]=function* (){
  for(let k of Object.keys(obj)) yield { [k]:obj[k]}
}
[...obj] // [{a:1},{b:2}]

class IterableNumber extends Number {
  *[Symbol.iterator]() {
    for (let digit of [...`${this}`].map(d=>Number.parseInt(d))) yield digit
  }
}

const num=new IterableNumber(1337)
[...num] // [1,3,3,7]
```

# equal
```js
console.log(Number(2) === Number(2))
console.log(Boolean(false) === Boolean(false))
console.log(Symbol('foo') === Symbol('foo'))
A: true, true, false
B: false, true, false
C: true, false, true
D: true, true, true
答案
答案: A
每个Symbol都是完全唯一的。传递给Symbol的参数只是给Symbol的一个描述。 Symbol的值不依赖于传递的参数。 当我们测试相等时，我们创建了两个全新的符号：第一个Symbol（'foo'），第二个Symbol（'foo'），这两个值是唯一的，彼此不相等，因此返回false。
```

```js
我们需要向对象 person 添加什么，以致执行 [...person] 时获得形如 ["Lydia Hallie", 21] 的输出？
const person = {
  name: "Lydia Hallie",
  age: 21
}

[...person] // ["Lydia Hallie", 21]
A: 不需要，对象默认就是可迭代的
B: *[Symbol.iterator]() { for (let x in this) yield* this[x] }
C: *[Symbol.iterator]() { yield* Object.values(this) }
D: *[Symbol.iterator]() { for (let x in this) yield this }
答案
答案: C
对象默认并不是可迭代的。如果迭代规则被定义，则一个对象是可迭代的（An iterable is an iterable if the iterator protocol is present）。我们可以通过添加迭代器 symbol [Symbol.iterator] 来定义迭代规则，其返回一个 generator 对象，比如说构建一个 generator 函数 *[Symbol.iterator]() {}。如果我们想要返回数组 ["Lydia Hallie", 21]: yield* Object.values(this)，这个 generator 函数一定要 yield 对象 person 的Object.values。
```
`*[Symbol.iterator](){}` `yield* Object.values(this)`
