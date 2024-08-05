# for...in

> used to **iterate over all enumerable properties** of an object, **including inherited enumerable properties**. This iteration statement can be **used with arrays strings or plain objects, but not with Map or Set objects**.

# for...of

> iterate over iterable objects, iterating over their values instead of their props. This iteration statement can be used with arr,str,Map or Object object, but not with plain object.

# forEach

> only works for arr, it can access both the v and i of each element while iterating.

```js
for (let prop in ['a', 'b', 'c']) console.log(prop) // 0,1,2
for (let prop in 'str') console.log(prop) // 0,1,2
for (let prop in { a: 1, b: 2, c: 3 }) console.log(prop) // a,b,c
for (let prop in new Set(['a', 'b', 'c'])) console.log(prop) // undefined,no enumerable props

for (let v of ['a', 'b', 'c']) console.log(v) // a,b,c
for (let v of 'str') console.log(v) // s,t,r
for (let v of { a: 1, b: 2, c: 3 }) console.log(v) // TypeEr(not iterable)
for (let v of new Set(['a', 'b', 'c'])) console.log(v) // a,b,c Set values
for (let v of new Map({ a: 1, b: 2, c: 3 })) console.log(v) // a,b,c Set values
```

# if else

else 分支只包含一条语句的话，可以不用花括号

Code Anatomy - For loops, array reduce and method chaining

```js
const files = ['foo.txt ', '.bar', '   ', 'baz.foo']
let filePaths = []

for (let file of files) {
  const fileName = file.trim()
  if (fileName) {
    const filePath = `~/cool_app/${fileName}`
    filePaths.push(filePath)
  }
}

// filePaths = [ '~/cool_app/foo.txt', '~/cool_app/.bar', '~/cool_app/baz.foo']
```

- Less common nowadays, due to functional programming being more popular.
- Control over the iteration, such as skipping over elements or early returns.
- Resulting arr needs to be declared beforehand, outside the loop.
- Uses Array.prototype.push() or the spread (...) operator to add elements.
- O(N) complexity, each element will be iterated over only once.

# arr reduce

```js
const files = ['foo.txt ', '.bar', '   ', 'baz.foo']
const filePaths = files.reduce((acc, file) => {
  const fileName = file.trim()
  if (fileName) {
    const filePath = `~/cool_app/${fileName}`
    acc.push(filePath)
  }
  return acc
}, [])

// filePaths = [ '~/cool_app/foo.txt', '~/cool_app/.bar', '~/cool_app/baz.foo']
```

- Uses Array.prototype.reduce() with an empty array as the initial value.
- More common nowadays, due to functional programming being more popular.
- Less control over the iteration, cannot skip elements or return early
- Can be chained with other methods, if necessary.
- Uses Array.prototype.push() or the spread (...) operator to add elements.
- O(N) complexity, each element will be iterated over only once.

# method chaining

```js
const files = ['foo.txt', '.bar', ' ', 'baz.foo']
const filePaths = files
  .map((file) => file.trim())
  .filter(Boolean)
  .map((fileName) => `~/cool_app/${fileName}`)
// [].filter(Boolean)
```

- `Array.prototype.map,filter()`
- More common nowadays,due to functional programming being more popular.
- Less control over the iteration, cannot skip elements or return early
- Declarative,easier to read and refactor,chain can grow as necessary.
- Does not use `Array.prototype.push` or spread (`...`) operator.
- `O(cN)` complexity, `c` iterations per element, (`c`: length of the chain)

一定要用 for...in 替换 Object.keys(obj).forEach(...)，节省许多代码， for...of 通常用在 arr、str、map、set 用来取到 一个个 value

有时候需要在树里面找某个 k，实在不行，得用 forEach+someVar（循环前声明）
