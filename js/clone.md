    看了一些博客和代码后，总结一下：


1. 第一层境界：*JSON.parse(JSON.stringify)巧妙利用JSON, 但是也受限于json，只支持json内的数据类型：Boolean，Null，Number，String，Object；Object只是普通的字面量对象以及嵌套字面量对象，Boolean，Null，Number，String的Object，不包括Function，RegExp，Date等等*

2. 第二层境界：[30-seconds-of-code/deepClone](https://github.com/30-seconds/30-seconds-of-code#deepclone)
先来个有意思的表达式： `Array.from(Object.assign({length: 2}, [1, 2]))`
巧妙利用 `Object.assign` + `Array.from`，凡是继承于Object的Function, Date, Error, RegExp, Symbol, Map, WeakMap都可以实现深clone，以及（类）数组： arguments，Array，Set，WeakSet，ES7+的ArrayBuffer，DataView，Float32Array，Float64Array，Int8Array，Int16Array，Int32Array, Uint8Array, Uint8clampedArray, Uint16Array, Uint32Array

```js
// 重点
function deepClone (obj) {
  const clone = Object.assign({}, obj)
  Object.keys(clone).forEach(
    key => (clone[key] = typeof clone[key] === 'object' ? deepClone(obj[key]) : obj[key])
  )
  return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone
}
```


3. 第三层境界：[Lodash-deepClone](https://github.com/lodash/lodash/blob/master/.internal/baseClone.js)，

支持的数据类型是在第二层境界里面提及的一致，但是实现方式不一样，Lodash针对细分的不同数据类型，会有不同的clone逻辑，分在不同的子文件，比如：

[cloneDeep](https://github.com/lodash/lodash/blob/master/.internal/cloneRegExp.js)
```js
function cloneRegExp (regexp) {
  const result = new regexp.constructor(regexp.source, reFlags.exec(regexp))
  result.lastIndex = regexp.lastIndex
  return result
}

export default cloneRegExp
```



4. 第四层境界： 考虑循环引用

在第二种，第三种的境界上考虑*递归爆栈，循环引用，引用丢失*的情况如何处理，[掘金上的这一篇文章](https://juejin.im/post/5bc1ae9be51d450e8b140b0c?utm_source=gold_browser_extension)，讲的我头大。

# deepClone深拷贝

https://juejin.cn/post/7146973901166215176

1）JSON.parse(JSON.stringify())
缺点： 无法拷贝 函数、正则、时间格式、原型上的属性和方法等

2）递归实现深拷贝

手写深拷贝
解决 循环引用 和 多个属性引用同一个对象（重复拷贝）的情况


1）循环拷贝：对象的属性引用自己
let target = {name: 'target'};
target.target = target
复制代码
2）重复拷贝：对象的属性引用同一个对象
let obj = {};
let target = {a: obj, b: obj};

```js
// 使用hash存储已拷贝过的对象，避免循环拷贝和重复拷贝
function deepClone(target, hash = new WeakMap()) {
  if (!isObject(target)) return target;
  if (hash.get(target)) return hash.get(target);
  // 兼容数组和对象
  let newObj = Array.isArray(target) ? [] : {};
  // 关键代码，解决对象的属性循环引用、和多个属性引用同一个对象的问题，避免重复拷贝
  hash.set(target, newObj);
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      if (isObject(target[key])) {
        newObj[key] = deepClone(target[key], hash); // 递归拷贝
      } else {
        newObj[key] = target[key];
      }
    }
  }
  return newObj;
}
function isObject(target) {
  return typeof target === "object" && target !== null;
}

// 示例
let info = { item: 1 };
let obj = {
  key1: info,
  key2: info,
  list: [1, 2]
};

// 循环引用深拷贝示例
obj.key3 = obj;
let val = deepClone(obj);
console.log(val);
使用WeakMap的好处是，WeakMap存储的key必须是对象，并且key都是弱引用，便于垃圾回收


```
