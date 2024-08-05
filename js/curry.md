函数柯里化：*将使用多个参数的一个函数，转换成一系列使用一个参数的函数，的过程。原理：用闭包把参数保存起来，当参数长度等于原函数时，就开始执行原函数。只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。柯里化不会调用函数，只是对函数进行转换，Currying是一种关于函数的高阶技术，不仅被用于JavaScript，还用于其他编程语言。*

可以一次性的调用 Curry 函数，也可以每次只传一个参数分多次调用。


```js
function mycurry(fn) {
  // fn.length 表示函数中参数的长度
  // 表示形参个数，不包含剩余参数，仅包括第一个有默认值之前的参数个数，不包含有默认值的参数。
  if (fn.length <= 1) return fn;
  // 自定义generator迭代器
  const generator = (...args) => {
    // 判断已传的参数与函数定义的参数，个数是否相等
    if (fn.length === args.length) {
      return fn(...args);
    } else {
      // 不相等就继续迭代
      return (...args1) => {
        return generator(...args, ...args1); // 扩展符有组合函数参数的效果
      };
    }
  };
  return generator;
}
function fn(a, b, c, d) {
  return a + b + c + d;
}
let fn1 = mycurry(fn);
console.log(fn1(1)(2)(3)(4)); // 10

```

https://zh.javascript.info/currying-partials#:~:text=%E6%9F%AF%E9%87%8C%E5%8C%96%EF%BC%88Currying%EF%BC%89%E6%98%AF,%E5%8C%96%E4%B8%8D%E4%BC%9A%E8%B0%83%E7%94%A8%E5%87%BD%E6%95%B0%E3%80%82


柯里化是一种函数的转换，它是指将一个函数从可调用的 f(a, b, c) 转换为可调用的 f(a)(b)(c)。


让我们先来看一个例子，以更好地理解我们正在讲的内容，然后再进行一个实际应用。

我们将创建一个辅助函数 curry(f)，该函数将对两个参数的函数 f 执行柯里化。换句话说，对于两个参数的函数 f(a, b) 执行 curry(f) 会将其转换为以 f(a)(b) 形式运行的函数：

```js
function curry(f) { // curry(f) 执行颗粒化 柯里化转换
    return function (a) {
        return function (b) {
            return f(a, b)
        }
    }
}

function sum(a, b) {
    return a + b
}

let curriedSum = curry(sum)

alert(curriedSum(1)(2)) // 3

实现非常简单，只有两个包装器wrapper


```

https://zhuanlan.zhihu.com/p/50247174

https://juejin.cn/post/6844903603266650125
