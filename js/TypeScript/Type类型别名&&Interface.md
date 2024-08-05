| Aspect                                          | Type | Interface |
| ----------------------------------------------- | :--: | --------: |
| Can describe functions                          |  ✅  |        ✅ |
| Can describe constructors                       |  ✅  |        ✅ |
| Can describe tuples                             |  ✅  |        ✅ |
| Interfaces can extend it                        |  ⚠️  |        ✅ |
| Classes can extend it                           |  🚫  |        ✅ |
| Classes can extend it(implements)               |  ⚠️  |        ✅ |
| Can intersect another one of its kind           |  ✅  |        ⚠I |
| Can create a union with another one of its kind |  ✅  |        🚫 |
| Can be used to create mapped types              |  ✅  |        🚫 |
| Can be mapped over with mapped types            |  ✅  |        ✅ |
| Expands in error messages and logs              |  ✅  |        🚫 |
| Can be augmented                                |  🚫  |        ✅ |
| Can be recursive                                |  ⚠️  |        ✅ |

⚠️: In some case

Adding new fields to an existing interface

```ts
interface Window {
  title: string
}
interface Window {
  ts: TypeScriptAPT
}
const src = 'const a="Hello World"'
window.ts.transpileModule(src, {})
```

A type cannot be changed after being created

```ts
type Window = {
  title: string
}
type Window = {
  ts: TypeScriptAPT
}
// Error: Duplicate identifier 'Window'
```

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

# interface 存放位置

把所有 interface 都存放在 pages/pageA/index.d export \* from './index.d' // index.ts

/* 可以 */
// 函数声明
interface Say {
 (name: string): viod;
}
let say: Say = (name: string):viod => {}
// Array 声明
interface NumberArray {
 [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
// Class 声明
interface PersonalIntl {
 name: string
 sayHi (name: string): string
}
7. TypeScript 中可以使用 String、Number、Boolean、Symbol、Object 等给类型做声明吗？


/* 可以 */
let name: string = "bob";
let decLiteral: number = 6;
let isDone: boolean = false;
let sym: symbol = Symbol();
interface Person {
 name: string;
 age: number;
}

12. TypeScript 中 type 和 interface 的区别?

相同点：
1. 都可以描述 '对象' 或者 '函数'
2. 都允许拓展(extends)
不同点：
1. type 可以声明基本类型，联合类型，元组
2. type 可以使用 typeof 获取实例的类型进行赋值
3. 多个相同的 interface 声明可以自动合并

使用 interface 描述‘数据结构’，使用 type 描述‘类型关系’

作者：周姐日常事
链接：https://juejin.cn/post/6999985372440559624
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



https://juejin.cn/post/6982911847888486407

```tsx
// 使用类型别名给出的二叉树结构 type alias
type Stree<T> = undefined | {
  data: T,
  left: Stree<T>,
  right: Stree<T>,
}

interface Point {
  x: number
  y: number
}
interface SetPoint {
  (x: number, y: number): void
}
type Point = {
  x: number
  y: number
}
type SetPoint = (x: number, y: number) => void
type setPoint
type Name = string

type PartialPointX = {
  x: number
}
type PartialPointＹ
type PartialPoint = PartialPointX |

type Data = [number, string]


interface PartialPointX { x: number; }
interface Point extends PartialPointX { y: number; }

type PartialPointX = { x: number; };
type Point = PartialPointX & { y: number; };

type PartialPointX = { x: number; };
interface Point extends PartialPointX { y: number; }

interface PartialPointX { x: number; }
type Point = PartialPointX & { y: number; };
```

二者均可声明对象和方法的签名，但语法不同;类型别名可以用于其他类型，如基本类型，联合类型，元组

接口扩展接口，类型别名扩展类型别名，接口扩展类型别名，类型别名扩展接口。

https://wiki.haskell.org/Algebraic_data_type

什么时候使用接口，什么时候使用类型别名？

抽象数据类型时具有相关行为的类型，但其内部实现是隐藏的An abstract data type is a type with associated operations, but whose representation is hidden.
接口更适合用来定义抽象数据类型，描述中的行为被定义为接口中的方法，此时只专注于定义类型的行为，而忽略其内部数据。当然ts的接口可以定义数，但是c#，JAVA完全面向对象，接口本身就被限制为只能够定义方法，而不可定义数据。

```tsx
interface Stack<T> {
  isEmpty(): boolean
  push(value: T): number
  pop(): T
  top(): T
}

```

代数数据类型，我们指定每个元素的形状，‘代数’是一个性质，指代数数据类型由‘代数’操作创建。‘代数’是‘sum和，代表备选，A|B，A或B但不是全部’ 、‘product乘积， AB，A和B一起’

使用元组定义二叉树

但是，需要组合多个类型时，可以使用接口进行扩展，也可以使用类型别名进行交叉，此时开始存在差异。接口创建一个对象类型，并检测属性是否冲突，解决这些冲突很重要，交叉只是递归的合并属性，某些情况下产生never，接口展示的更好，而交叉的类型别名作为其他交叉

https://www.cnblogs.com/qixingduanyan/p/11479192.html
