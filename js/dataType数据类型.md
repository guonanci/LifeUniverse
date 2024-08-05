https://www.nowcoder.com/exam/interview/detail?questionClassifyId=0&questionId=2412338&questionJobId=156&type=1

*Number,String,Boolean,BigInt,Symbol,Null,Undefined,Object8种*

*JS数据类型分为两类：一类是基本数据类型，即简单数据类型，包含7种，分别是Number 、String、Boolean、BigInt、Symbol、Null、Undefined。另一类是引用数据类型即复杂数据类型Object，包含普通对象、函数Function、数组Array、正则RegExp、日期Date、Math数学函数*。

*两大类的本质区别：基本数据类型和引用数据类型在内存中的存储方式不同。基本数据类型是直接存储在栈中的简单数据段，占据空间小，属于被频繁使用的数据。引用数据类型是存储在堆内存中，占据空间大。引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址，当解释器寻找引用值时，会检索其在栈中的地址，取得地址后从堆中获得实体*。


加分回答
*Symbol是ES6新出的一种数据类型，这种数据类型的特点就是没有重复的数据，可以作为object的key*。

数据的创建方法Symbol()，因为它的构造函数不够完整，所以不能使用new Symbol()创建数据。由于Symbol()创建数据具有唯一性，所以 Symbol() !== Symbol(), 同时使用Symbol数据作为key不能使用for获取到这个key，需要使用*Object.getOwnPropertySymbols(obj)*获得这个obj对象中key类型是Symbol的key值。

let key = Symbol('key');
let obj = { [key]: 'symbol'};
let keyArray = Object.getOwnPropertySymbols(obj); // 返回一个数组[Symbol('key')]
obj[keyArray[0]] // 'symbol'

BigInt也是ES6新出的一种数据类型，这种数据类型的特点就是数据涵盖的范围大，能够解决超出Number类型范围报错的问题。

使用方法：
-整数末尾直接+n：647326483767797n
-调用BigInt()构造函数：BigInt("647326483767797")

注意：*BigInt和Number之间不能进行混合操作*


*说一说JavaScript有几种方法判断变量的类型*？

得分点 *typeof、instanceof、Object.prototype.toString.call()对象原型链判断方法、 constructor用于引用数据类型*

标准回答 JavaScript有4种方法判断变量类型，分别是*typeof、instanceof、Object.prototype.toString.call()（对象原型链判断方法）、 constructor (用于引用数据类型)*

*typeof：常用于判断基本数据类型，对于引用数据类型除了function返回’function‘，其余全部返回’object'*。

instanceof用于区分引用数据类型，如果检测的类型在当前实例的原型链上，那么得到true，不适合用于简单数据类型的检测，检测过程繁琐，而且检测不出简单数据类型中的undefined, null, symbol。

constructor也用于检测引用数据类型，判断获取实例的构造函数是否和某个类相同，相同就说明该数据符合那个数据类型，该方法不会把原型链上的其他类也加入进来，避免了原型链的干扰。

*Object.prototype.toString.call()：适用于所有类型的判断检测，返回该数据类型对应的字符串*。

加分回答

*instanceof的实现原理：验证当前类的原型prototype是否会出现在实例的原型链__proto__上，在的话为true*。因此，`instanceof`在查找过程中会遍历左边变量的原型链，找到右边变量的`prototype`就返回true，未找到就返回false。

Object.prototype.toString.call()原理：Object.prototype.toString 表示一个返回对象类型的字符串，call()方法可以改变this的指向，把Object.prototype.toString()方法指向不同的数据类型上，可返回不同的结果。

# 隐式类型转换coercion
https://juejin.cn/post/6844903934876745735

js数据类型：null/undefined/String/Number/Boolean/Symbol/Object,原始类型Number、String、Null、Undefined、Boolean，引用类型Object，包含Array。
JavaScript是弱类型或者说动态语言，不用提前声明变量类型，程序运行过程中，类型会自动确定。可以使用同一个变量保存不同类型的数据。
常见的隐式转换场景：
- if判断
- 比较操作符==
- 加号与减号
有些情况下用作*加号操作符*，有些时候为*字符串连接符*，true转换为Number类型，值为1
- 点号操作符
.toString()、.valueOf()；对数字、字符串进行点操作调用方法时，默认将数字、字符串转换成对象
- 关系运算符比较
非数值比较时，转换为数字后再比较。如果两侧都是字符串，不会将其转换为数字，而是分别比较unicode编码；null和undefined没有toString和valueOf方法，valueOf（）返回的是原对象。包装对象的valueOf方法返回该包装对象对应的原始值，使用toString可以区分*内置函数和自定义函数*
## String、Boolean、Number、对象之间的相互转换
### 其他类型转换成字符串
- null ‘null’
- undefined ‘undefined’
- Boolean true‘true’false‘false’
- Number 11‘11’*11e20‘11e+21’*
- 数组
【】'',如果数组元素有null、undefined，同样转换成‘’【1,2,3,4】‘1,2,3,4’，相当于数组的join方法，将各元素用‘，’连接起来
- 函数 function a(){}'function a(){}'
- 一般对象
相当于调用对象的toString方法，‘[object,object]’
### 其他类型转为Boolean
*只有null、undefined、0、false、NaN、空字符转为false，其余全为true*
### 其他类型转Number
- null，0
- undefined，NaN
- Boolean：true1，false0
- 字符串
如果是纯数字的字符串‘11’11，‘1.1e+21’1.1e+21，‘’0，其余情况则为NaN
- 数组
数组首先会被转换成原始类型，得到原始类型后再根据上面的转换规则转换。
- 对象
和数组一样，`Number([]),Number([0],[1],['abc'],{})` `0,0,1,NaN,NaN`。
### 对象转化为其他类型（原始类型）
当对象转为其他原始类型时，会先调用对象的valueOf()方法，如果valueOf()方法返回的是原始类型，则直接返回这个原始类型
如果valueOf()方法返回的是不是原始类型或者valueOf()方法不存在，则继续调用对象的toString()方法，如果toString()方法返回的是原始类型，则直接返回这个原始类型,如果不是原始类型，则直接报错抛出异常。


注意：对于不同类型的对象来说，转为原始类型的规则有所不同，比如Date对象会先调用toString

作者：Autumn秋田
链接：https://juejin.cn/post/6844903934876745735
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```js
    var o1 = {
        valueOf(){
            return 1
        }
    }
    var o2 = {
        toString(){
            return 2
        }
    }
    var o3 = {
        valueOf(){
            return {}
        },
        toString(){
            return 3
        }
    }

    Number(o1)  //1
    Number(o2)  //2
    Number(o3)  //3


```
将一个空数组转成Number类型，空数组是一个对象，先调用valueOf()得到[]，不是原始类型，继续调用toString()方法，得到的是一个空字符串，根据Number的转换规则，空字符串转换成数字为0,故Number([])为0

### 宽松相等==的隐式转换
只需要两边值相等，不需要类型相同，就可以true
#### 原始类型之间比较
- 字符串与数字比较，字符串转数字
```js
'Infinity' == Infinity // true
NaN == NaN // false,NaN与任何值都不相等，包括自己
```
#### 布尔值与其他类型比较
只要布尔类型参与比较，该布尔类型就会率先被转成数字类型
```js
true == 1  // true
false == 0  // true
true == 2  // false
"" == false // true
"1" == true // true
```
根据规则，布尔型参与比较，会把布尔类型转为数字类型。第一个demo，true被转为数字类型1，比较变为1 == 1,结果为true。第二个demo，false被转为数字类型0，比较变为0 == 0，结果为true。第三个demo，true被转为数字类型1，，比较变为1 == 2，结果为false。第四个demo，false被转为数字类型0，比较变为"" == 0，根据字符串与数字相比较，会率先把字符串变成数字，空字符串转为数字类型为0，比较变为0 == 0，故结果为true。第五个demo与第四个相似，true被转换成数字类型1，比较变为"1" == 1，根据字符串与数字相比较，会率先把字符串变成数字，字符串"1"转为数字类型为1，变成1 == 1，故结果为true。
#### null、undefined与其他类型比较
null，代表‘空值’，一个空对象指针，typeof运算得到‘object’，可认为是一个特殊的对象值
undefined，声明了一个变量但并未给该变量赋值，默认值为undefined
null场景：作为原型链终点；作为函数函数，表示该函数参数
undefined场景：
- 声明了一个变量但并未为该变量赋值，此变量的值默认为undefined
- 函数没有明确写return，默认返回undefined
- 调用函数时，没有传参数，默认参数值为undefined
- 对象的某个属性没有赋值，默认值为undefined

*Javascript规定null与undefined宽松相等(==)，并且都与自身相等，但是与其他所有值都不宽松相等。*
```js
null == null   //true
undefined == undefined  //true
null == undefined  //true
null == 0  //false
null == false  //false
undefined == 0  //false
undefined == false  //false
null == []  //false
null == {}  //false
unfefined == []  //false
undefined == {}  //false
```

对象与原始类型相比较时，会把对象按照对象转换规则转换成原始类型，再比较。

```js

 {} == 0  // false
 {} == '[object object]'  // true
 [] == false  // true
 [1,2,3] == '1,2,3' // true

```
第一个例子,根据上图可知，{}的原始值为"[object object]"，比较变成"[object object]" == 0，接着根据字符串与数字类型相比较规则，先将字符串转换成数字类型，可知[object Object]转为数字为NaN，比较变成NaN == 0，因为NaN与任何值都不想等，故结果为false。
第二个例子，由第一个分析可知，{}的原始值为"[object Object]"，比较变成"[object Object]" =="[object Object]",故结果为true。
第三个例子,根据上图可知，[]的原始值为空字符串""，比较变成"" == 0，接着根据字符串与数字类型相比较规则，先将字符串转换成数字类型，可知""转为数字0，比较变成0 == 0，故结果为true。
第四个例子，根据数组转换成原始类型的规则可知，数组的原始类型结果是由数组各个元素由逗号进行分割组成的字符串，故比较变成"1,2,3" == "1,2,3",所以结果为true。


作者：Autumn秋田
链接：https://juejin.cn/post/6844903934876745735
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

#### 对象和对象比较

首先先说一下基本类型(原始类型)与引用类型的存储。

基本类型：是指存放在栈内存中的简单数据段，数据大小确定，内存空间大小可以分配，它们是直接按值存放的，所以可以直接按值访问。


引用类型：是指存放在堆内存中的对象，变量名保存在栈内存里，而对应的值保存在堆内存里，这个变量在栈内存中实际保存的是：这个值在堆内存中的地址，也就是指针，指针指向堆内存中的地址。

那么对象相比较的规则就出来了:

如果两个对象指向同一个对象，相等操作符返回 true，否则为false。

var a = {};
var b = {};
a == b  // false

var c = [];
var d = [];
c == d  // false
复制代码虽然 a 和 b 都保存了一个 Object，但这是两个独立的 Object，它们的地址是不同的。c与d也是如此。
所以 [] == [] 为false，{} == {} 也是false。
那么改成如下呢？
var a = {};
var b = a;
a == b;
复制代码变量b保存的是a的指针，指向同一个对象，所以a == b。
那么接下来看下面的例子
[] == ![]  // true
{} == !{}  // false
复制代码Javascript规定，逻辑非 (!) 的优先级高于相等操作符 ( == )

取非：首先通过Boolean()函数将它的操作值转换为布尔值，然后求反。
第一个例子，先看![]，也就是对空数组[]取非，根据取非定义，先执行Boolean([]),我们知道只有null，undefined，false，0，""，NaN，执行Boolean()函数时结果才为false，取余全为true，故Boolean([])结果为true，取非得到false，比较变为[] == false, 这下变成了对象类型与布尔类型相比较了，这就比较简单了，根据前面的对象类型比较规则，布尔类型比较规则，很容易的出比较变为"" == 0，再根据字符串与数字类型相比较规则，比较变为0 == 0，显然结果为true。
第二个例子，同第一个例子一样，先执行Boolean({})得到true,再取反得到false，比较变为{} == false,现在比较变为对象类型与布尔类型相比较了，根据之前写的例子知道，先指向{}的valueOf()方法得到的不是原始类型，继续执行{}的toString()方法到的结果为"[object object]"，比较变为"[object object]" == 0,再根据字符串与数字类型相比较规则,"[object object]"转为数字类型为NaN，比较变成NaN == 0,NaN不与任何值相等，显然结果为false。

#### 字符串连接符（+）与加号运算符（+）如何区分
*减法运算若存在字符串拼接中，需要注意把数字部分整体括起来*。
以下情况可视为字符串连接符

含有+两边的数据，任意一个为字符串
含有+两边的数据，其中一边为对象，并且取得的原始值为字符串

以上2种情况都视为字符串连接符，将自动的对不是字符串的数据执行String()方法转为字符串
以下情况可视为加号运算符

加号两边都为数字类型
加号两边都是基本类型，除了字符串类型，则可视为加号。也就是说加号两边可以为Boolean，Number，null，undefined这种情况，肯定是加号运算符。将对不是Numebr类型的数据执行Number()方法再相加。
其中一边是基本类型，字符串除外，另一边是对象，并且对象获得的原始值不是字符串。

另外值得一提的是：
NaN与任何数相加都为NaN
```js
"a" + "b"  // "ab"
"a" + 1    // "a1"
"a" + {}   // "a[object object]"
"a" + []   // "a"
"a" + true  // "atrue"
"a" + null  // "anull"
"a" + undefined // "aundefined"

 1 + 2     // 3
 1 + true  // 2
 1 + null  // 1
 true + true   // 2
 true + false  // 1
 true + null   // 1
 false + null  // 0

 var c = {
     valueOf(){
         return 1;
     }
 }

 1 + undefined   // NaN
 true + undefined  // NaN
 true + c   // 2
 1 + c   // 2

 NaN + 1  // NaN
 NaN + null  // NaN

 [] + {}  // "[object object]"
 {} + []  // 0
```
这里值得提出来的是Number(undefined)为NaN，不难看出上面几个的结果为啥等于NaN。
那么[] + {}与{} + []只是调了一个位置，为什么结果会大不相同呢？
我们知道[]的原始值为""，{}的原始值为[object object]，在这里就不再重述了。
那么第一个例子，拼接起来等于"[object object]"没什么问题，那么第二个例子是为什么呢？
原来是js解释器会将开头的 {} 看作一个代码块，而不是一个js对象，于是运算可写成+[]，这结果可不就是0嘛

# typeof

```js
const name = "Lydia Hallie";

console.log(!typeof name === "object");
console.log(!typeof name === "string");
A: false true
B: true false
C: false false
D: true true
答案
答案: C
typeof name 返回 "string"。字符串 "string" 是一个 truthy 的值，因此 !typeof name 返回一个布尔值 false。 false === "object" 和 false === "string" 都返回 false。

（如果我们想检测一个值的类型，我们应该用 !== 而不是 !typeof）
```
```js
function sayHi() {
  return (() => 0)()
}

typeof sayHi()
A: "object"
B: "number"
C: "function"
D: "undefined"
答案
答案: B

```
sayHi 方法返回的是*立即执行函数(IIFE)*的返回值。此立即执行函数的返回值是 0， 类型是 number

参考：只有 7 种内置类型：null，undefined，boolean，number，string，object, *symbol 和 bigint*。 function 不是一种类型，函数是对象，它的类型是object。typeof 可以返回‘function’，其他引用类型返回‘object’

JavaScript 中的一切都是？
A: 基本类型与对象
B: 函数与对象
C: 只有对象
D: 数字与对象
答案
答案: A
JavaScript 只有基本类型和对象。

基本类型包括 boolean, null, undefined, bigint, number, string, symbol。

```js
const set = new Set()

set.add(1)
set.add("Lydia")
set.add({ name: "Lydia" })

for (let item of set) {
  console.log(item + 2)
}
A: 3, NaN, NaN
B: 3, 7, NaN
C: 3, Lydia2, [Object object]2
D: "12", Lydia2, [Object object]2
答案
答案: C
“+” 运算符不仅用于添加数值，还可以使用它来连接字符串。 每当 JavaScript 引擎发现一个或多个值不是数字时，就会将数字强制为字符串。

第一个是数字 1。 1 + 2 返回数字 3。

但是，第二个是字符串 “Lydia”。 “Lydia” 是一个字符串，2 是一个数字：2 被强制转换为字符串。 “Lydia” 和 “2” 被连接起来，产生字符串 “Lydia2”。

{name：“ Lydia”}是一个对象。 数字和对象都不是字符串，因此将二者都字符串化。 每当我们对常规对象进行字符串化时，它就会变成[Object object]。 与 “2” 串联的 “ [Object object]” 成为 “[Object object]2”。
```
