解构destructure解构_deconstruction解构主义.md

访问对象多个属性时使用解构，避免创建临时引用

一般情况下，函数返回值使用解构时，使用对象解构而不是数组，因为后者需要关注顺序

```js
const { name: myName } = { name: "Lydia" };

console.log(name);
A: "Lydia"
B: "myName"
C: undefined
D: ReferenceError
答案
答案: D
当我们从右侧的对象解构属性name时，我们将其值Lydia分配给名为myName的变量。

使用{name：myName}，我们是在告诉 JavaScript 我们要创建一个名为myName的新变量，并且其值是右侧对象的name属性的值。

当我们尝试打印name，一个未定义的变量时，就会引发ReferenceError。
```

```js
const spookyItems = ["👻", "🎃", "🕸"];
({ item: spookyItems[3] } = { item: "💀" });

console.log(spookyItems);
A: ["👻", "🎃", "🕸"]
B: ["👻", "🎃", "🕸", "💀"]
C: ["👻", "🎃", "🕸", { item: "💀" }]
D: ["👻", "🎃", "🕸", "[object Object]"]
答案
答案: B
通过解构对象们，我们可以从右手边的对象中拆出值，并且将拆出的值分配给左手边对象同名的属性。在这种情况下，我们将值 "💀" 分配给 spookyItems[3]。相当于我们正在篡改数组 spookyItems，我们给它添加了值 "💀"。当输出 spookyItems 时，结果为 ["👻", "🎃", "🕸", "💀"]。
```
