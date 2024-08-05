https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map

Map 对象保存键值对，能够记住键的原始插入顺序。任何值（对象或者原始值）都能作为键、值。

Relation with Array objects

```js
let kvArray = [
  ['key1', 'value1'],
  ['key2', 'value2'],
]

// Use the regular Map constructor to transform a 2D key-value Array into a map
let myMap = new Map(kvArray)

myMap.get('key1') // returns "value1"

// Use Array.from() to transform a map into a 2D key-value Array
console.log(Array.from(myMap)) // Will show you exactly the same Array as kvArray

// A succinct way to do the same, using the spread syntax
console.log([...myMap])

// Or use the keys() or values() iterators, and convert them to an array
console.log(Array.from(myMap.keys())) // ["key1", "key2"]
```

嵌套了两层的 Map 往往能用来保存跟布局定位种类、主题类别的菜单样式主题设置等等。。。（为了方便，还是分开成 3 个 key，放在设置第一层，就不用嵌套 Map 了（这样也可以避免 ts 联合类型的诸多问题）

https://fe.ecool.fun/topic/4232c372-316f-4a53-99b9-6d9299b7e91f?orderBy=updateTime&order=desc&tagId=10

ES6之Set集合、Map字典、WeakSet、WeakMap数据结构
- 集合：
是由一堆无序的、相关联的，且不重复的内存结构【数学中称为元素】组成的组合。
- 字典
是一些元素的集合。每个元素有一个称作key的域，不同元素的key各不相同。

共同点：集合、字典都可以存储不重复的值
不同点：集合【值，值】的形式存储元素，字典【键，值】

键值对的有序列表，键和值都可以是任意类型，本身是一个构造函数，用来生成Map数据结构

1. size属性
成员总数
2. set（）
设置键名key对应的键值为value，然后返回整个Map结构，链式写法；如果key-k已经有值，则键值会被更新，否则新生成该键。同时返回当前Map对象

```js
const m=new Map()
m.set('edition',6)
m.set(262,'standard') // 键是数值
m.set(undefined,'nah')
m.set(1,'a').set(2,'b')
```
3. get（）
读取key对应的键值，找不到key则返回undefined
```js
const m=new Map()
const hello=function(){}
m.set(hello,'Hello') // 键是函数
m.get(hello) // Hello ES6!
```
4. has（）
当前Map对象
5. delete（）
如果删除失败返回false
6. clear（）
清除所有成员，没有返回值

原生提供3个遍历器生成函数和1个遍历方法：keys（）、values（）、entries（）键名、键值、所有成员；forEach遍历所有成员，*遍历顺序就是插入顺序*

```js
const map=new Map([
  ['F','no'],
  ['T','yno'],
])
for (let item of map.entries()){
  console.log(item[0],item[1])
}
// 'F' 'no'
// 'T' 'yes'
for (let [k,v] of map.entries)
for(let [k,v] of map)
// # WeakMap
// 只接收对象为键名（null 除外），不接受其他类型的值作为键名；
// 键名指向的对象，不计入垃圾回收机制；
// 不能遍历，方法同 get、set、has、delete；
WeakMap结构与Map类似，也是用于生成键值对的集合，API中有两个区别：
1. 没有遍历操作的API
2. 没有clear（）
// WeakMap 可以使用 set 方法添加成员
const wm1 = new WeakMap();
const key = {foo: 1};
wm1.set(key, 2);
wm1.get(key) // 2

// WeakMap 也可以接受一个数组，
// 作为构造函数的参数
const k1 = [1, 2, 3];
const k2 = [4, 5, 6];
const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]);
wm2.get(k2) // "bar"


WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名

const map = new WeakMap();
map.set(1, 2)
// TypeError: 1 is not an object!
map.set(Symbol(), 2)
// TypeError: Invalid value used as weak map key
map.set(null, 2)
// TypeError: Invalid value used as weak map key
WeakMap的键名所指向的对象，一旦不再需要，里面的键名对象和所对应的键值对会自动消失，不用手动删除引用

举个场景例子：

在网页的 DOM 元素上添加数据，就可以使用WeakMap结构，当该 DOM 元素被清除，其所对应的WeakMap记录就会自动被移除
const wm = new WeakMap();

const element = document.getElementById('example');

wm.set(element, 'some information');
wm.get(element) // "some information"
注意：WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用

下面代码中，键值obj会在WeakMap产生新的引用，当你修改obj不会影响到内部
const wm = new WeakMap();
let key = {};
let obj = {foo: 1};

wm.set(key, obj);
obj = null;
wm.get(key)
// Object {foo: 1}


```

```js
哪一个方法会返回 'Hello world!' ？
const myMap = new Map()
const myFunc = () => 'greeting'

myMap.set(myFunc, 'Hello world!')

//1
myMap.get('greeting')
//2
myMap.get(myFunc)
//3
myMap.get(() => 'greeting')
A: 1
B: 2
C: 2 and 3
D: All of them
答案
答案: B
当通过 set 方法添加一个键值对，一个传递给 set方法的参数将会是键名，第二个参数将会是值。在这个 case 里，键名为 函数 () => 'greeting'，值为'Hello world'。 myMap 现在就是 { () => 'greeting' => 'Hello world!' }。

1 是错的，因为键名不是 'greeting' 而是 () => 'greeting'。 3 是错的，因为我们给get 方法传递了一个新的函数。对象受 引用 影响。函数也是对象，因此两个函数严格上并不等价，尽管他们相同：他们有两个不同的内存引用地址。
```

本质上是键值对的集合，类似集合；
可以遍历，方法很多，可以跟各种数据格式转换；
