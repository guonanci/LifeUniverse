https://www.30secondsofcode.org/blog/s/javascript-iterators

# What are JS Iterators and where can I use them

were introduced in ES6 and they are used to loop over a sequence of values, usually some sort of collection. By definition,
an iterator must implement a `next()` function, that returns an obj in the form of `{value,done}` where v is the next v
in the iteration sequence and done is a boolean determining if the sequence has already been consumed.
A very simple iterator with practical use in a real-world proj could be as follows:

```js
class LinkedList{
  constructor(data){
    this.data=data
  }
  firstItm(){
    return this.data.find(i=>i.head)
  }
  findById(id) {
    return this.data.find(i => i.id === id);
  }
  [Symbol.iterator](){
    let itm={next:this.firstItm().id}
    return {
      next:()=>{
        itm=this.findById(itm.next)
        if(itm) return {values:itm.value,done:false}
        return {values:undefined,done:true}
      }
    }
  }
}

const myList=new LinkedList([
  {id:'a10',value:'First',next:'a13',head:true},
  {id:'a11',value:'Last',next:null,head:false},
  {id:'a12',value:'Third',next:'a11',head:false},
  {id:'a13',value:'Second',next:'a12',head:false},
])

for(let itm of myList) console.log(itm) // 'First', 'Second', 'Third', 'Last'
In the above example, we implement a LinkedList data structure, that internally uses a `data` arr where each itm has a v,
alongside some implementation-specific properties

```

useRef.current
TypeError: Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.

# for in&for of
https://www.jb51.net/javascript/308294wgb.htm

在JavaScript当中，for-in 和 for-of 是两种不同的循环结构，它们有一些重要的区别和联系。

## for-in 循环用于遍历对象的可枚举属性。

语法如下：
```js
for (variable in object) {
  // 循环体
}
```
在这个循环中，variable 是我们定义的属性名，object 是我们要遍历的对象。这个循环会遍历对象的所有可枚举属性，包括原型链上的属性，并且属性名顺序不确定。

如果你只想遍历对象的自身属性，那么可以使用 Object.keys() 方法来获取对象的所有键名，然后使用 for-of 循环来遍历这些键名对应的值。
## for-of
for-of 循环用于遍历可迭代对象，包括`Array、Map、Set、String、TypedArray、arguments`对象等等。

语法如下：
```js
for (value of iterable) {
  // 循环体
}
```
在这个循环中，value 是当前迭代的元素，iterable 是我们要遍历的可迭代对象。这个循环会按特定顺序，遍历对象的每一个元素。
## 区别包含如下：
for-in 用于遍历对象的属性， for-of 用于遍历可迭代对象的元素；for-in 会遍历对象的原型链， 而for-of 则不会。具体而言：首先，两者迭代对象的内容不同，for-in 循环迭代对象的键名，而 for-of 循环迭代对象的值；其次，被迭代的对象类型不同，for-in 循环适用于遍历普通对象、数组、函数等；for-of 循环适用于遍历可迭代对象，包括数组、字符串、Map、Set、TypedArray 等。

另外，两者迭代的顺序不同，for-in 循环的迭代顺序不确定，因为对象的属性没有固定顺序；而for-of 循环的迭代顺序是确定的，因为可迭代对象的值是按一定顺序排列的。还有，两者迭代的原理不同，for-in 循环遍历对象时，会遍历对象的原型链，会包含从原型链继承来的属性，而for-of 循环遍历的对象是可迭代对象，值是可枚举的。


## 两者的联系如下：
虽然应用场景不同，但它们都提供了一种方便的方式，来遍历一个集合的元素。在某些情况下，它们也可以互相替代。例如，如果你有一个对象数组，那么你可以使用 for-of 来遍历数组中的每个对象。同样，如果你有一个包含键值对的对象，你可以使用 for-in 来遍历这些键值对。

## 那么，如何选择合适的循环方法呢？
在选择使用 for-in 还是 for-of 循环时，我们需要考虑对象的类型以及需要迭代的内容。通常，如果需要迭代对象的键名，那么我们可以使用 for-in 循环；如果需要迭代对象的值，那么我们可以使用 for-of 循环。另外，*当需要遍历数组或字符串时，可以使用 for-of 循环，因为它可以提供更好的性能和可读性。相比之下，for-in 循环会遍历对象的原型链，导致性能下降*。

如果需要遍历一个对象，同时又需要过滤掉从原型链继承的属性，那么我们可以使用 *hasOwnProperty* 方法进行过滤。

例如：
```js
const person = {
  name: 'John',
  age: 30,
  gender: 'male'
};

for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key, person[key]);
  }
}
```
## 总结一下：
for-in 和 for-of 循环是 JavaScript 当中用于迭代对象的两种方法，它们的区别在于迭代对象的内容、类型、顺序、和原理。通常，我们应根据需要选择合适的循环方法，以高效地迭代对象。同时，*我们也需要注意到 for-in 循环的一些缺陷：由于它会遍历对象的原型链，导致性能下降，而且不能保证迭代顺序，所以我们应避免在数组和字符串上使用 for-in 循环*。

最后，*我们还可以使用一些其他方法来迭代对象，例如 forEach、map、reduce方法等。这些方法不仅可以提供更好的性能和可读性，还可以通过回调函数来实现更加灵活的操作*。总的来说，for-in 循环和 for-of 循环都是，JavaScript当中用于迭代对象的重要方法。我们需要根据对象类型，和需要迭代的内容来选择合适的循环方法，以提高代码的性能和可读性。

同时，我们也需注意 for-in 循环的缺陷，并且学会使用其他方法来迭代对象，以实现更灵活和高效的操作。

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in#%E6%95%B0%E7%BB%84%E8%BF%AD%E4%BB%A3%E5%92%8C_for...in
