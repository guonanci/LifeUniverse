```js
function Person(firstName,lastName){
  this.firstName=firstName
  this.lastName=lastName
}
const member=new Person('Lydia', 'Hallie')
Person.getFullName=function(){
  return `${this.firstName} ${this.lastName}`
}

console.log(member.getFullName()) // TypeError
```
不能像常规对象那样，给构造函数添加属性。如果想一次性给所有实例添加特性，应该使用原型：
```js
Person.prototype.getFullName=function(){
  return `${this.firstName}`
}
```
这样才会使`member.getFullName()`起作用。假设我们将这个方法添加到构造函数本身里，也许不是每个实例都需要该方法。这将浪费大量内存空间。*这将占用每个实例的内存空间*，相反，如果我们只将它添加到原型中，那么他只存在于内存中的一个位置，但是所有实例都可以访问它！


# 所有对象都有原型？
错！
除了基本对象base object，所有对象都有原型。基本对象可以访问一些方法和属性，比如toString（）。可以使用内置的JavaScript方法，这些内置方法在原型上都可用，是沿着原型链找到他们的，不是直接在对象上找到这些方法。

# delete
```js
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function() {
  console.log(`Woof I am ${this.name}`);
};

const pet = new Dog("Mara");

pet.bark();

delete Dog.prototype.bark;

pet.bark();
A: "Woof I am Mara", TypeError
B: "Woof I am Mara","Woof I am Mara"
C: "Woof I am Mara", undefined
D: TypeError, TypeError
答案
答案: A
我们可以用delete关键字删除对象的属性，对原型也是适用的。删除了原型的属性后，该属性在原型链上就不可用了。在本例中，函数bark在执行了delete Dog.prototype.bark后不可用，然而后面的代码还在调用它。

当我们尝试调用一个不存在的函数时TypeError异常会被抛出。在本例中就是 TypeError: pet.bark is not a function，因为pet.bark是undefined.
```
