```js
const name = "Lydia"

console.log(name())
A: SyntaxError
B: ReferenceError
C: TypeError
D: undefined
答案
答案: C
变量name保存字符串的值，该字符串不是函数，因此无法调用。

当值不是预期类型时，会抛出TypeErrors。 JavaScript 期望name是一个函数，因为我们试图调用它。 但它是一个字符串，因此抛出TypeError：name is not a function

当你编写了一些非有效的 JavaScript 时，会抛出语法错误，例如当你把return这个词写成retrun时。 当 JavaScript 无法找到您尝试访问的值的引用时，抛出ReferenceErrors。
```

```js
const person = {
	firstName: "Lydia",
	lastName: "Hallie",
	pet: {
		name: "Mara",
		breed: "Dutch Tulip Hound"
	},
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
};

console.log(person.pet?.name);
console.log(person.pet?.family?.name);
console.log(person.getFullName?.());
console.log(member.getLastName?.());
A: undefined undefined undefined undefined
B: Mara undefined Lydia Hallie ReferenceError
C: Mara null Lydia Hallie null
D: null ReferenceError null ReferenceError
答案
答案: B
```
通过 ES10 或 TS3.7+*可选链操作符* ?.，我们不再需要显式检测更深层的嵌套值是否有效。如果我们尝试获取 undefined 或 null 的值 (*nullish*)，表达将会短路并返回 undefined.

person.pet?.name： person 有一个名为 pet 的属性： person.pet 不是 nullish。它有个名为 name 的属性，并返回字符串 Mara。 person.pet?.family?.name： person 有一个名为 pet 的属性： person.pet 不是 nullish. pet 并没有 一个名为 family 的属性，person.pet.family 是 nullish。表达式返回 undefined。 person.getFullName?.()： person 有一个名为 getFullName 的属性： person.getFullName() 不是 nullish 并可以被调用，返回字符串 Lydia Hallie。 member.getLastName?.(): 变量member 不存在，因此会抛出错误*ReferenceError*。
