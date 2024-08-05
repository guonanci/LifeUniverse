https://juejin.cn/post/6846687599281569800

字符串
统一使用单引号而不是双引号
复制代码// bad
const name = 'jack'

// good
const name = 'jack'
用字符串模板而不是 '+' 来拼接字符串
复制代码function sayHi(name) {
  return 'How are you, ' + name + '?'
}

// good
function sayHi(name) {
  return `How are you, ${name}?`
}
关于数组
用字面量赋值
复制代码// bad
const items = new Array()

// good
const items = []
用扩展运算符做数组浅拷贝
复制代码// bad
let arr = [1, 2, 3]
const len = arr.length
const copyArr = []

for (let i = 0; i < len; i += 1) {
  copyArr[i] = arr[i]
}

// good
const copyArr = [...arr]
用 Array.from 去将一个类数组对象转成一个数组。
复制代码const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 }

// bad
const arr = Array.prototype.slice.call(arrLike)

// good
const arr = Array.from(arrLike)
使用数组解构
复制代码const arr = [1, 2, 3, 4]

// bad
const first = arr[0]
const second = arr[1]

// good
const [first, second] = arr
关于对象
创建对象和数组推荐使用字面量，因为这不仅是性能最优也有助于节省代码量。
复制代码// good
let obj = {
  name: 'Tom',
  age: 15,
  sex: '男',
}

// bad
let obj = {}
obj.name = 'Tom'
obj.age = 15
obj.sex = '男'

将属性的缩写放在对象声明的开头
复制代码const anakinSkywalker = 'Anakin Skywalker'
const lukeSkywalker = 'Luke Skywalker'

// bad
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
}

// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
}
对象浅拷贝时，更推荐使用扩展运算符 ...，而不是 Object.assign。解构赋值获取对象指定的几个属性时，推荐用 rest 运算符，也是 ...。

函数参数使用结构语法，函数参数越少越好，如果参数超过两个，要使用 ES6 的解构语法，不用考虑参数的顺序。
复制代码// good
function createMenu({ title, body, buttonText, cancellable }) {
   ...
}

createMenu({
  title: 'Foo',
  body: 'Bar',
  buttonText: 'Baz',
  cancellable: true,
})

// bad
function createMenu(title, body, buttonText, cancellable) {
  // ...
}
优先使用 rest 语法...，而不是 arguments
复制代码// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments)
  return args.join('')
}

// good
function concatenateAll(...args) {
  return args.join('')
}
把默认参数赋值放在最后
复制代码// bad
function handleThings(opts = {}, name) {
  // ...
}

// good
function handleThings(name, opts = {}) {
  // ...
}
尽量使用箭头函数
复制代码// bad
[1, 2, 3].map(function (x) {
    const y = x + 1
    return x * y
  })

// good
 [1, 2, 3].map((x) => {
    const y = x + 1
    return x * y
  })
# for 循环
使用 for 循环过程中，数组的长度，使用一个变量来接收，这样有利于代码执行效率得到提高，而不是每走一次循环，都得重新计算数组长度
复制代码// bad
for(var i = 0; i < arr.length; i++){

}

// good
for(var i = 0; len = arr.length; i < len; i++){

}


作者：lzg9527
链接：https://juejin.cn/post/6846687599281569800
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

