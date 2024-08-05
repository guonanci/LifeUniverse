类似于数组，但成员值都唯一，没有重复值。构造函数Set，用来生成Set数据结构
只有键值，没有键名

增删改查的方法
# has
判断该值是否为set成员
# delete
删除某个值，返回一个布尔值，表示删除是否成功
# add
添加某个值，返回Set结构本身
```js
const s=new Set()
s.add(1).add(2).add(2)
// 实例中已经存在
```
# clear
清除所有成员，没有返回值

实例遍历方法：
1. keys（），返回键名的遍历器
2. values 键值
3. entries 键值对
4. forEach 使用回调函数遍历每个成员

*遍历顺序就是插入顺序*
keys方法、values方法、entries方法返回的都是遍历器对象
```js
let set=new Set(['red','green'])
for (let item of set.keys()){ // values,entries
  console.log(item) // red,green;red,gr;['red','red'],['g]
}
```
forEach用于对每个成员执行某种操作，没有返回值，键值、键名都相等，同样的*forEach方法有第二个参数*，*用于绑定处理函数的this*
```js
let set=new Set([1,4,9])
set.forEach((v,k)=>console.log(k+':'+v))
// 1:1
// 4:4
```
*扩展运算符*和Set结构相结合实现数组或*字符串*去重

```js
let arr=[3,5,2,5]
let unique=[...new Set(arr)] //
let str='3522'
let unique=[...new Set(str)].join('')

并集、交集、差集
let a=new Set([1,2,3])
let b=new Set([2,3,4])
let union=new Set([...a,...b]) // Set {1,2,3,4}
let intersect=new Set([...a].filter(x=>b.has(x)))

// # WeakSet
// 成员都是对象（引用）；
// 成员都是弱引用，随时可以消失（不计入垃圾回收机制）。可以用来保存 DOM 节点，不容易造成内存泄露；
// 不能遍历，方法有 add、delete、has；
WeakSet可以接受一个具有Iterable接口的对象作为参数
const a=[[1,2],[3,4]]
const ws=new WeakSet(a)
// WeakSet {[1,2],[3,4]}
API中WeakSet与Set有两个区别：
没有遍历操作的API
没有size属性
WeakSet成员只能是引用类型，不能是其他类型值
let ws=new WeakSet()
// 成员不是引用类型
let weakSet=new WeakSet([2,3])
// 报错
let obj1={name:1}
let o2={n:2}
let ws=new WeakSet([obj1,obj2]) // WeakSet{{...},{...}}
WeakSet里面的引用只要在外部消失，它在WeakSet里的引用就会自动消失
```

```js
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
A: [1, 1, 2, 3, 4]
B: [1, 2, 3, 4]
C: {1, 1, 2, 3, 4}
D: {1, 2, 3, 4}
答案
答案: D
Set对象是独一无二的值的集合：也就是说同一个值在其中仅出现一次。

我们传入了数组[1, 1, 2, 3, 4]，他有一个重复值1.以为一个集合里不能有两个重复的值，其中一个就被移除了。所以结果是 {1, 2, 3, 4}.
```
