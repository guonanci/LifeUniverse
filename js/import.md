# 一个 index.d 里 import 另一个 index.d 路径找不到的问题

重启下 vs 应该就好了
是的，切换分支时会有，修改文件夹名称时有时也会有
基本上是同时有大量文件变更时会有这种现象

所有的 import 都用绝对路径@/pages 这样的

```js
// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;
A: running index.js, running sum.js, 3
B: running sum.js, running index.js, 3
C: running sum.js, 3, running index.js
D: running index.js, undefined, running sum.js
答案
答案: B
import命令是编译阶段执行的，在代码运行之前。因此这意味着被导入的模块会先运行，而导入模块的文件会后执行。

这是 CommonJS 中require（）和import之间的区别。使用require()，您可以在运行代码时根据需要加载依赖项。 如果我们使用require而不是import，running index.js，running sum.js，3会被依次打印。
```

```js
我们怎样才能在 index.js 中调用 sum.js? 中的 sum？
// sum.js
export default function sum(x) {
	return x + x;
}

// index.js
import * as sum from "./sum";
A: sum(4)
B: sum.sum(4)
C: sum.default(4)
D: 默认导出不用 * 来导入，只能具名导出
答案
答案: C
使用符号 *，我们引入文件中的所有值，包括默认和具名。如果我们有以下文件：

// info.js
export const name = "Lydia";
export const age = 21;
export default "I love JavaScript";

// index.js
import * as info from "./info";
console.log(info);
将会输出以下内容：

{
  default: "I love JavaScript",
  name: "Lydia",
  age: 21
}
以 sum 为例，相当于以下形式引入值 sum：

{ default: function sum(x) { return x + x } }
我们可以通过调用 sum.default 来调用该函数
```
