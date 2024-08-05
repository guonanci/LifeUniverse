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

*import命令是编译阶段执行的，是在代码运行前。因此这意味着被导入的模块会先运行，而导入模块的文件会后执行*。

这是 CommonJS 中require（）和import之间的区别。使用require()，您可以在运行代码时根据需要加载依赖项。 如果我们使用require而不是import，running index.js，running sum.js，3会被依次打印。
```
