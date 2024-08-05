https://www.30secondsofcode.org/blog/s/javascript-memoization

Memoization is a commonly used technique that you can use to speed up your code significantly. It uses a cache to store
results, so that subsequent calls of time-consuming functions do not perform the same time. Based on this definition,
we can easily extract 提取 e some criteria 标准，条件 t that can help us decide when to use memoization in our code:

- Memoization should be mainly used to speed up slow-performing, costly or time-consuming function calls
- memoization speeds up subsequent calls, so it is best when you anticipate 预料 multiple calls of the same function under the
  - same circumstances 环境-复数

A simple,object-oriented example of implementing memoization could be as follows:

```js
class MyObj {
  constructor(data) {
    this.data = data
    this.data[this.data.length - 2] = { v: 'Non-empty' }
  }
  firstNonEmptyItm() {
    return this.data.find((v) => !!v.value)
  }
  firstNonEmptyItmMemo() {
    if (!this.firstNonEmpty)
      this.firstNonEmpty = this.data.find((v) => !!v.value)
    return this.firstNonEmpty
  }
}

const myObj = new MyObj(Array(2000).fill({ v: null }))
for (let i = 0; i < 100; i++) myObj.firstNonEmptyItm() // ~4000ms
for (let i = 0; i < 100; i++) myObj.firstNonEmptyItmMemo() // ~70ms
```

The above example showcases a way to implement memoization inside a class, however it makes the assumptions that the
data structure will not be altered over the lifecycle of the obj and that this is the only expensive function call we
will make, so it cannot be reused. It also doesnt account for arguments being passed to the function, which would alter
the result. A functional approach that would work with any given function and also account for arguments can be found in
the form of the memoize snippet, which uses a Map to store different values.

We still recommend using that snippet as the primary way to memoize a function, however JavaScript's Proxy object provides
an interesting alternative via the use of handler.apply() trap, which can be used for this purpose as follows:

```js
const memoize = (fn) =>
  new Proxy(fn, {
    cache: new Map(),
    apply(target, thisArg, argsList) {
      let cacheK = argsList.toString()
      if (!this.cache.has(cacheK))
        this.cache.set(cacheK, target.apply(thisArg, argsList))
      return this.cache.get(cacheK)
    },
  })

const fibonacci = (n) => (n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2))
const memoizedFibonacci = memoize(fibonacci)
for (let i = 0; i < 100; i++) fibonacci(30) // ~5000ms
for (let i = 0; i < 100; i++) memoizedFibonacci(30) // ~50ms
```

https://www.ctolib.com/topics-121043.html
https://leetcode-cn.com/problems/climbing-stairs/
https://leetcode-cn.com/problems/climbing-stairs/solution/javascriptji-yi-hua-di-gui-qiu-jie-by-huang-shan-h/
https://juejin.cn/post/6844903477559164942
