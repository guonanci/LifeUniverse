https://juejin.cn/post/7155434131831128094?

如何给所有的async函数添加try/catch？

```js
// 示例
async function fn() {
  let value = await new Promise((resolve, reject) => {
    reject('failure');
  });
  console.log('do something...');
}
fn()

async function fn() {
  await new Promise((resolve, reject) => reject('报错'));
  await new Promise((resolve) => resolve(1));
  console.log('do something...');
}
fn();

async function fn() {
  try {
    await new Promise((resolve, reject) => reject('报错'));
    await new Promise(resolve => resolve(1));
    console.log('do something...');
  } catch (e) {
    console.log("\nfilePath: E:\\myapp\\src\\main.js\nfuncName: fn\nError:", e);
  }
}
fn();

```

通过详细的报错信息，帮助我们快速找到目标文件和具体的报错方法，方便去定位问题
babel插件的实现思路
1）借助AST抽象语法树，遍历查找代码中的await关键字
2）找到await节点后，从父路径中查找声明的async函数，获取该函数的body（函数中包含的代码）
3）创建try/catch语句，将原来async的body放入其中
4）最后将async的body替换成创建的try/catch语句
babel的核心：AST
先聊聊 AST 这个帅小伙🤠，不然后面的开发流程走不下去
AST是代码的树形结构，生成 AST 分为两个阶段：词法分析和 语法分析
词法分析
词法分析阶段把字符串形式的代码转换为令牌（tokens） ，可以把tokens看作是一个扁平的语法片段数组，描述了代码片段在整个代码中的位置和记录当前值的一些信息

作者：海阔_天空
链接：https://juejin.cn/post/7155434131831128094
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```js
(() => {
  let x, y
  try {
    throw new Error()
  } catch (x) {
    (x = 1), (y = 2)
    console.log(x)
  }
  console.log(x)
  console.log(y)
})()
A: 1 undefined 2
B: undefined undefined undefined
C: 1 1 2
D: 1 undefined undefined
答案
答案: A
catch 代码块接收参数 x。当我们传递参数时，这与之前定义的变量 x 不同 。这个 x 是属于 catch 块级作用域的。

然后，我们将块级作用域中的变量赋值为 1，同时也设置了变量 y 的值。现在，我们打印块级作用域中的变量 x，值为 1。

catch 块之外的变量 x 的值仍为 undefined， y 的值为 2。当我们在 catch 块之外执行 console.log(x) 时，返回 undefined，y 返回 2。
```

# error
```js
function greeting() {
  throw "Hello world!";
}

function sayHi() {
  try {
    const data = greeting();
    console.log("It worked!", data);
  } catch (e) {
    console.log("Oh no an error:", e);
  }
}

sayHi();
A: "It worked! Hello world!"
B: "Oh no an error: undefined
C: SyntaxError: can only throw Error objects
D: "Oh no an error: Hello world!
答案
答案: D
通过throw语句，我么可以创建自定义错误。 而通过它，我们可以抛出异常。异常可以是一个字符串，一个 数字，一个 布尔类型 或者是一个 对象。在本例中，我们的异常是字符串'Hello world'.

通过 catch语句，我们可以设定当try语句块中抛出异常后应该做什么处理。在本例中抛出的异常是字符串'Hello world'. e就是这个字符串，因此被输出。最终结果就是'Oh an error: Hello world'.
```
