# Mutator methods

These methods modify the array:

## Array.prototype.copyWithin()

The copyWithin() method shallow copies part of an array to another location in the same array and returns it, without modifying its size.

var array1 = [1, 2, 3, 4, 5];

// place at position 0 the element between position 3 and 4
console.log(array1.copyWithin(0, 3, 4));
// expected output: Array [4, 2, 3, 4, 5]

// place at position 1 the elements after position 3
console.log(array1.copyWithin(1, 3));
// expected output: Array [4, 4, 5, 4, 5]

## fill()

*fills all the elements of an array from a start index to an end index with a static value*

```js

var array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4：
console.log(array1.fill(0, 2, 4))
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]
```


## pop()

*adds one or more elements to the end of fan array, and returns the new length of the array.*

## reverse()

reverses the order of the elements of an array **in place**

## shift

*removes the first element from an array, and returns that elment*

## sort

*sorts the elements in place, and returns the array.The default sort order is according to string Unicode code points.*
```js
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]

```

## splice

*The splice() method changes the contents of an array by removing existing elements and/or adding new elements*.

array.splice(start[, *deleteCount*[, item1[, item2[, ...]]]])

If deleteCount is omitted, or if its value is larger than array.length - start (that is, if it is greater than the number of elements left in the array, starting at start), then all of the elements from start through the end of the array, will be deleted.

*If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element* (see below).

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum');

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed

```js
const emojis = ['✨', '🥑', '😍']

emojis.map(x => x + '✨')
emojis.filter(x => x !== '🥑')
emojis.find(x => x !== '🥑')
emojis.reduce((acc, cur) => acc + '✨')
emojis.slice(1, 2, '✨')
emojis.splice(1, 2, '✨')
A: All of them
B: map reduce slice splice
C: map slice splice
D: splice
答案
答案: D
使用splice方法，我们通过删除，替换或添加元素来修改原始数组。 在这种情况下，我们从索引 1 中删除了 2 个元素（我们删除了'🥑'和'😍'），同时添加了✨emoji 表情。

map，filter和slice返回一个新数组，find返回一个元素，而reduce返回一个减小的值。
```
## unshift

*The unshift method inserts the given values to the beginning of an array-like object*.

# Accessor methods
Do not modify the array and return some representation of the array.

var num1 = [[1]];
var num2 = [2, [3]];

var nums = num1.concat(num2);

console.log(nums);
// results in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);

console.log(nums);
// results in [[1, 4], 2, [3]]

## includes

`arr.includes(searchElement[, fromIndex])`

## indexOf

The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

arr.indexOf(searchElement[, fromIndex])

var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

## slice

The slice() method returns a shallow copy of a portion of an array into a new array object,selected from begin to end (end not included). The original array will not be modified.

In the following example, slice creates a new array, newCar, from myCar. Both include a reference to the object myHonda. When the color of myHonda is changed to purple, both arrays reflect the change.

## toString

*Returns a string representing the array and its elements. Overrides the Object.prototype.toString() method.*

[1, 2].toString
// '1,2'

## toLocaleString

# Iteration methods

## entries

The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
var array1 = ['a', 'b', 'c'];

var iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]

var a = ['a', 'b', 'c'];
var iterator = a.entries();

for (let e of iterator) {
console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']

##filter
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

### parameters

callback
Function is a predicate, to test each element of the array. Return true to keep the element, false otherwise, taking three arguments:
element
The current element being processed in the array.
indexOptional
The index of the current element being processed in the array.
arrayOptional
The array filter was called upon.
thisArg Optional
Optional. Value to use as this when executing callback.

## find

if rs is not undefined, then we can in-place change arrItm, instead of `findIndex-indirect间接的-path`
returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

## findIndex

## forEach

## keys

returns a new Array Iterator object that contains the keys for each index in the array.

var array1 = ['a', 'b', 'c'];
var iterator = array1.keys();

for (let key of iterator) {
console.log(key); // expected output: 0 1 2
}

## map

eslint-warning: Expected to return a value in arrow function(change to forEach method)

The map() method creates a new array with the results of calling a provided function on every element in the calling array.
map(v,i)
map中的第二个参数作为第一个参数的this

注意：需要判断稀疏数组，跳过稀疏数组中的空值

```js
Array.prototype.selfMap = function(fn, context) {
  // map中的第二个参数作为fn函数的this
  // Array.prototype.slice.call将类数组转化为数组，同Array.from, this为调用的数组（arr）
  let arr = Array.prototype.slice.call(this);
  let mappedArr = Array(); // 创建一个空数组
  for (let i = 0; i < arr.length; i++) {
    // 判断稀疏数组，跳过稀疏数组中的空值
    // 稀疏数组：数组中元素的个数小于数组的长度，比如Array(2) 长度为2的稀疏数组
    if (!arr.hasOwnProperty(i)) continue;
    mappedArr[i] = fn.call(context, arr[i]);
  }
  return mappedArr;
};
let arr = [1, 2, 3];
console.log(arr.selfMap(item => item * 2)); // [2, 4, 6]
```

## reduce

acc 的类型(泛型)

```js
Array.prototype.reduce





[ 'apple', 'banana', 'orange', 'banana', 'apple', 'strawberry' ]





data.reduce<Record<string, any>[]>((prev, dataItm) => {
```

https://hashrocket.com/blog/posts/write-a-reduce-function-from-scratch

DFS（递归、reduce 方法等等）时不要随便赋予默认值，否则容易出问题
通过 reduce 来寻找唯一值时，要在 if/else-if 条件值那里加上`!acc`

It is a TypeError if the array contains no elements and initialValue is not provided.
不是万能的。(对象数组上应用 reduce，一定要给初始值，不然因为对象有引用性质，导致 reduce 执行失败得不到你想要的结果)
The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

arr.reduce(callback[, initialValue])
Parameters
callback
Function to execute on each element in the array, taking four arguments:
accumulator
The accumulator accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied (see below).
currentValue
The current element being processed in the array.
currentIndexOptional
The index of the current element being processed in the array. Starts at index 0, if an initialValue is provided, and at index 1 otherwise.
arrayOptional
The array reduce() was called upon.
initialValueOptional
Value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used. Calling reduce() on an empty array without an initial value is an error.

initialValue Optional
A value to use as the first argument to the first call of the callback. If no initialValue is supplied, the first element in the array will be used as the initial accumulator value and skipped as currentValue. Calling reduce() on an empty array without an initialValue will throw a

reduce() executes the callback function once for each element present in the array, excluding holes in the array, receiving four arguments:

accumulator
currentValue
currentIndex
array

The first time the callback is called, accumulator and currentValue can be one of two values. If initialValue is provided in the call to reduce(), then accumulator will be equal to initialValue, and currentValue will be equal to the first value in the array. If no initialValue is provided, then accumulator will be equal to the first value in the array, and currentValue will be equal to the second.

### Remove duplicate items in array
```js

let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((init, current) => {
  if (init.length === 0 || init[init.length - 1] !== current) {
    init.push(current);
  }
  return init;
}, []);
console.log(result); //[1,2,3,4,5]
```

## values()

Array.prototype.values()
Returns a new Array Iterator object that contains the values for each index in the array.

# Array.from()

Parameters
arrayLike
An array-like or iterable object to convert to an array.
mapFn Optional
Map function to call on every element of the array.
thisArg Optional
Value to use as this when executing mapFn.

将一个类数组转换成数组
```js
const arrLike={0:'f',1:'b'}
// bad
const arr=Array.prototype.slice.call(arrLike)
// good
const arr=Array.from(arrLike)
```
# Array.of()

parameters
elementN

# flat

```js
const emojis = ["🥑", ["✨", "✨", ["🍕", "🍕"]]];

console.log(emojis.flat(1));
A: ['🥑', ['✨', '✨', ['🍕', '🍕']]]
B: ['🥑', '✨', '✨', ['🍕', '🍕']]
C: ['🥑', ['✨', '✨', '🍕', '🍕']]
D: ['🥑', '✨', '✨', '🍕', '🍕']
答案
答案: B
通过方法 flat， 我们可以创建一个新的，已被扁平化的数组。被扁平化的深度取决于我们传递的值。在这个 case 里，我们传递了值 1，但是并不必要，因为1是默认值，相当于只有第一层的数组才会被连接。即这个 case 里的 ['🥑'] and ['✨', '✨', ['🍕', '🍕']]，连接这两个数组得到结果 ['🥑', '✨', '✨', ['🍕', '🍕']]。
```
Flatten an array of arrays

deep用来控制扁平的层数，默认为1


The **flat()** method creates a new arr with all sub-arr elements concatenated into it recursively up to the specified depth.

```js
;[1, [2]].flat()

flat()
flat(depth)

const arr = [1, 2, [3, 4, [5, 6]]] // [ 1, 2, 3, 4, 5, 6 ]
// to enable deep level flatten use recursion with reduce and concat
function flatDeep(arr, d = 1) {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        []
      )
    : arr.slice()
}

flatDeep(arr, Infinity)
// [1, 2, 3, 4, 5, 6]

// deep初始值为1
Array.prototype.myFlat = function(deep = 1) {
  let arr = this;
  // deep为0则返回，递归结束
  if (deep == 0) return arr;
  // 使用reduce作为累加器
  return arr.reduce((pre, cur) => {
    // cur为数组，继续递归，deep-1
    if (Array.isArray(cur)) {
      return [...pre, ...cur.myFlat(deep - 1)];
    } else {
      return [...pre, cur];
    }
  }, []);
};
console.log([1, 2, 3, [4, [5, [6]]]].myFlat(2)); // [1, 2, 3, 4, 5, [6]]

```

The depth level specifying how deep a nested arr structure should be flatted. Defaults to 1.

- Alternatives
  - reduce and concat
  ```js
  const arr = [1, 2, [3, 4]]
  // To flat single level arr
  arr.flat()
  // is equivalent to
  arr.reduce
  ```
  - use a stack
  ```js
  function flatten(input) {
    const stack = [...input]
    const res = []
    while (stack.length) {
      const first = stack.shift()
      if (Array.isArray(first)) stack.push(...first)
      else res.push(first)
    }
    return res
  }
  ```
  **depth Optional**

```js
Array.prototype.flat()
```

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
function(a, b) {
return a.concat(b);
},
[]
);
// flattened is [0, 1, 2, 3, 4, 5]

Some example run-throughs of the function would look like this:

[0, 1, 2, 3, 4].reduceRight(function(previousValue, currentValue, index, array) {
return previousValue + currentValue;
});
The callback would be invoked four times, with the arguments and return values in each call being as follows:

callback previousValue currentValue index array return value
first call 4 3 3 [0, 1, 2, 3, 4] 7
second call 7 2 2 [0, 1, 2, 3, 4] 9
third call 9 1 1 [0, 1, 2, 3, 4] 10
fourth call 10 0 0 [0, 1, 2, 3, 4] 10

```js
;[1, [2]].flat() // [1,2]
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

# 二维数组

请用数组方法创建一个 m 行 n 列个 0 的二维矩阵。

```js
const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
```

# some()
```js
Array.prototype.mySome = function(fn) {
  let result = false;
  for (let i = 0; i < this.length; i++) {
    // 判断条件是否满足，满足就跳出循环
    if (fn(this[i])) {
      result = true;
      break;
    }
  }
  return result;
};
console.log([1, 2, 3, 4].mySome(item => item > 6)); // false

```

# 自增数组
https://juejin.cn/post/6844903471435644935
怎么制造出[0,1,2,3] `Array(n).map((v,i)=>i)`
Object.keys(Array.apply(null,{length:4})).map(v=>+v)
`Array.from(new Array(4).keys())`
`[...Array(100).keys()]`

```js
[...Array(100).keys()] // [0,1,2,...,99]
new Array(5).fill(0) // 0,0,0,0,0
```


reverse会改变原来数组，从英语单词的语言角度/词义去理解。

const arrEntries = ['a', 'b'].entries()
console.log(arrEntries.next().value)
console.log(arrEntries.next().done)
console.log(arrEntries.next().value)
console.log(arrEntries.next().done)

array.concat(value1, value2.....)
// 将传入的数组或非数组值与原数组合并，组成一个新数组并返回

// 注意：concat方法在拷贝原数组的过程中，

// 对象引用（非对象直接量）：concat方法会复制对象引用放到组合的新数组里，原数组和新数组中的对象引用都指向同一个实际的对象，所以，当实际的对象被修改时，两个数组也同时被修改
字符串和数字（ 是原始值， 而不是包装

array.slice([begin = 0[, end = this.length - 1]])
// 把数组中一部分的浅复制（shallow copy）存入一个新的数组对象中，并返回这个新的数组
// 不修改原数组，只会返回一个包含了原数组中提取的部分元素的一个新数组
// 具体拷贝规则同concat函数

const arr = ['a', , 'c']
// Prints "a, undefined, c"
for (let i = 0; i < arr.length; ++i) {
  console.log(arr[i]);
}

// Prints "a, c"
arr.forEach(v => console.log(v));

// Prints "a, c"
for (let i in arr) {
  console.log(arr[i]);
}

// Prints "a, undefined, c"
for (const v of arr) {
  console.log(v);
}

// Another edge case with forEach() is that it doesn't quite work right with async/await or generators. If your forEach() callback is synchronous then it doesn't matter, but you can't use await within a forEach() callback:

async function run() {
  const arr = ['a', 'b', 'c'];
  arr.forEach(el => {
    // SyntaxError
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(el);
  });
}
// You can't use yield either:

function* run() {
  const arr = ['a', 'b', 'c'];
  arr.forEach(el => {
    // SyntaxError
    yield new Promise(resolve => setTimeout(resolve, 1000));
    console.log(el);
  });
}
// The above examples work fine with for/of:

async function asyncFn() {
  const arr = ['a', 'b', 'c'];
  for (const el of arr) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(el);
  }
}

function* generatorFn() {
  const arr = ['a', 'b', 'c'];
  for (const el of arr) {
    yield new Promise(resolve => setTimeout(resolve, 1000));
    console.log(el);
  }
}
Array.prototype._splice = function (start, deleteCount, ...addList) {
  if (start < 0) {}
  const removeList = this.slice(start, start + deleteCount)
  const right = this.slice
}

// indexOf vs findIndex

[1, [2, [3]]].flatMap(v => v)


// new了，在map之前一定要fill，然后再map
new Array(10).map(v=>1) // [ <10 empty items> ]
new Array(n)


```js
// deduplication
function a() {
  let someVar = 1
  return function (count) {
    return someVar + count
  }
}

function deepClone(obj) {
  const obj
}

function uniqueArr(arr) {
  const itemsMap = new Map({})
  const rs = []
  for (let item of arr) {
    if (!itemsMap.has(item)) {
      rs.push(item)
      itemsMap.set(item, true)
    }
  }
  return rs
}

// https://segmentfault.com/a/1190000016418021

```
# push()
```js
function addToList(item, list) {
  return list.push(item);
}

const result = addToList("apple", ["banana"]);
console.log(result);
A: ['apple', 'banana']
B: 2
C: true
D: undefined
答案
答案: B
push()方法返回新数组的长度。一开始，数组包含一个元素（字符串"banana"），长度为 1。 在数组中添加字符串"apple"后，长度变为 2，并将从addToList函数返回。

push方法修改原始数组，如果你想从函数返回数组而不是数组长度，那么应该在 push item之后返回list。
```
```js
cosnt items=[]
// bad
items[items.length]='test'
items.push('test')
```


eslint:The array literal otation [] is preferrable

# new Array()
```js
new Array(5)
new Array('5')
new Array(1,2)
```
# empty slots
const numbers = [1, 2, 3]
numbers[10] = 11
console.log(numbers)
A: [1, 2, 3, 7 x null, 11]
B: [1, 2, 3, 11]
C: [1, 2, 3, 7 x empty, 11]
D: SyntaxError
答案
答案: C
当你为数组设置超过数组长度的值的时候， JavaScript 会创建名为 "empty slots" 的东西。它们的值实际上是 undefined。你会看到以下场景：

[1, 2, 3, 7 x empty, 11]

这取决于你的运行环境（每个浏览器，以及 node 环境，都有可能不同）

# from
```js
某公司 1 到 12 月份的销售额存在一个对象里面 如下：{1:222, 2:123, 5:888}，请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]

解答：

function convert(obj) {
  return Array.from({ length: 12 }).map((item, index) => obj[index] || null).slice(1);
}
```
