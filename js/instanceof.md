```js
Function instanceof Object // true
 	Object instanceof Function // true
 	Function instanceof Function //true
 	Object instanceof Object // true
 	Number instanceof Number //false

作者：苏墨橘
链接：https://www.zhihu.com/question/34183746/answer/59043879
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

可以判断一个对象的原型链上是否包含该构造函数的原型，经常用来判断对象是否为该构造函数的实例
手写
function instanceof(obj, Obj) {
	let proto = obj.__proto__
	if (proto) {
		if (proto === Obj.prototype) {
			return true
		} else {
			return instanceOf(proto, fn)
		}
	} else {
		return false
	}
}

typeof一般被用于来判断一个变量的类型
typeof可以用来判断number、undefined、symbol、string、function、boolean、object 这七种数据类型，特殊情况：typeof null === 'object'
2）instanceof判断一个对象的原型链上是否包含该构造函数的原型


作者：海阔_天空
链接：https://juejin.cn/post/7146973901166215176
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```
