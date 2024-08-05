```js
String.prototype.charCodeAt.call("-"); // 45
String.prototype.charCodeAt.call("0"); // 48
String.prototype.charCodeAt.call("1"); // 49
String.prototype.charCodeAt.call("A"); // 65
String.prototype.charCodeAt.call("a"); // 97
```

# replace

[replacerFn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

# 模板字符串
## 表达式
```js
console.log(`${(x => x)('I love')} to program`)
A: I love to program
B: undefined to program
C: ${(x => x)('I love') to program
D: TypeError
答案
答案: A
带有模板字面量的表达式首先被执行。相当于字符串会包含表达式，这个立即执行函数 (x => x)('I love') 返回的值。我们向箭头函数 x => x 传递 'I love' 作为参数。x 等价于返回的 'I love'。这就是结果 I love to program。
```
## 实现ES6模板字符串

replace函数，第二个参数是函数的情况说明：每个匹配都调用该函数，它返回的字符串将替换文本使用
示例
```js
let name = "小明";
let age = 20;
let str1 = "我叫${name},我的年龄 ${ age}";
function tempalteStr(str) {
  return str.replace(/\$\{(.*?)\}/g, function(srcStr, targetStr) {
    // eval(name) 替换成 小明
    // // eval(age) 替换成 20
    return eval(targetStr);
  });
}
console.log(tempalteStr(str1)); // 我叫小明,我的年龄20

// eslint:Unexpected string concatenation of literals
```


作者：海阔_天空
链接：https://juejin.cn/post/7146973901166215176
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

"prettier.singleQuote": true // 配置文件
使用字符串模板代替字符串拼接;字符串上不要使用eval（）（eslint:no-eval）
# 反转字符串
```js

const reverse=str=>str.split('').reverse().join('')
```
# padStart
```js
const name = "Lydia Hallie"
console.log(name.padStart(13))
console.log(name.padStart(2))
A: "Lydia Hallie", "Lydia Hallie"
B: "           Lydia Hallie", "  Lydia Hallie" ("[13x whitespace]Lydia Hallie", "[2x whitespace]Lydia Hallie")
C: " Lydia Hallie", "Lydia Hallie" ("[1x whitespace]Lydia Hallie", "Lydia Hallie")
D: "Lydia Hallie", "Lyd"
答案
答案: C
使用padStart方法，我们可以在字符串的开头添加填充。传递给此方法的参数是字符串的总长度（包含填充）。字符串Lydia Hallie的长度为12，因此name.padStart（13）在字符串的开头只会插入 1（13 - 12 = 1）个空格。

如果传递给padStart方法的参数小于字符串的长度，则不会添加填充。
```
# padEnd
The `padEnd()` method pads the current string with a given string(repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.

```js
const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(25, '.'));
// Expected output: "Breaded Mushrooms........"

const str2 = '200';

console.log(str2.padEnd(5));
// Expected output: "200  "

```

# prototype
```js
String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!'
}

const name = 'Lydia'

name.giveLydiaPizza()
```
A: "Just give Lydia pizza already!"
B: TypeError: not a function
C: SyntaxError
D: undefined
答案
答案: A
String 是内置的构造函数，我们可以向它添加属性。我只是在它的原型中添加了一个方法。基本类型字符串被自动转换为字符串对象，由字符串原型函数生成。因此，所有 string(string 对象) 都可以访问该方法！

# expression-str
```js
console.log("🥑" + "💻");
A: "🥑💻"
B: 257548
C: A string containing their code points
D: Error
答案
答案: A
使用+运算符，您可以连接字符串。 上述情况，我们将字符串“🥑”与字符串”💻“连接起来，产生”🥑💻“。

console.log('❤️' === '❤️')
A: true
B: false
答案
答案: A
在内部，表情符号是 unicode。 heart 表情符号的 unicode 是“ U + 2764 U + FE0F”。 对于相同的表情符号，它们总是相同的，因此我们将两个相等的字符串相互比较，这将返回 true。
```

```js
console.log(String.raw`Hello\nworld`);
A: Hello world!
B: Hello
     world
C: Hello\nworld
D: Hello\n
     world
答案
答案: C
String.raw函数是用来获取一个模板字符串的原始字符串的，它返回一个字符串，其中忽略了转义符（\n，\v，\t等）。但反斜杠可能造成问题，因为你可能会遇到下面这种类似情况：

const path = `C:\Documents\Projects\table.html`
String.raw`${path}`
这将导致：

"C:DocumentsProjects able.html"

直接使用String.raw

String.raw`C:\Documents\Projects\table.html`
它会忽略转义字符并打印：C:\Documents\Projects\table.html

上述情况，字符串是Hello\nworld被打印出。
```
# chartAt
console.log("I want pizza"[0])
A: """
B: "I"
C: SyntaxError
D: undefined
答案
答案: B
可以使用方括号表示法获取字符串中特定索引的字符，字符串中的第一个字符具有索引 0，依此类推。 在这种情况下，我们想要得到索引为 0 的元素，字符'I'被记录。

请注意，IE7 及更低版本不支持此方法。 在这种情况下，应该使用.charAt（）
