好的，我现在需要为用户提供TypeScript面试题及其答案的列表。用户之前已经询问过数据大屏前端面试题和TypeScript面试题，现在他们可能希望得到更具体的问题和对应的答案，以便更好地准备面试。

首先，我要回顾之前的回答，确保这次的内容不重复，同时补充更多细节和实际例子。用户可能需要的是直接可以用于面试准备的材料，所以问题需要覆盖基础到进阶，并且答案要简洁明确。

接下来，我需要整理常见的TypeScript面试题，覆盖基本概念、类型系统、泛型、工具类型、类与装饰器、工程化应用以及实战场景。每个问题需要附上清晰易懂的答案，可能还需要代码示例来说明。

需要注意的是，答案不仅要正确，还要解释清楚背后的原理，例如解释interface和type的区别时，要提到声明合并和类型定义的限制。对于泛型的问题，要给出实际的代码例子，并说明如何应用。

此外，用户可能对高级类型和工具类型感兴趣，比如条件类型、映射类型，以及如何自定义工具类型。因此，我需要包括一些高级问题，例如实现DeepReadonly或处理复杂的类型转换。

还要考虑工程化方面的问题，比如tsconfig.json的配置，模块化，以及如何为第三方库编写声明文件。这些问题能展示候选人在实际项目中使用TypeScript的经验。

最后，开放性问题如项目迁移、设计模式的应用，以及性能优化，这些能体现候选人的综合能力和实战经验。需要给出建议性的答案，说明解决思路和最佳实践。

在整理过程中，要确保问题分类清晰，结构合理，答案准确且有深度，帮助用户全面准备TypeScript相关的面试。




以下是常见的 TypeScript 面试题及其答案整理，涵盖基础到高级知识点，助你高效备战：

---

### **一、基础概念与类型系统**
#### 1. **TypeScript 和 JavaScript 的核心区别是什么？**
**答案**：
• TypeScript 是 JavaScript 的超集，添加了**静态类型系统**，支持编译时类型检查，减少运行时错误。
• 提供**接口、泛型、枚举、装饰器**等高级特性，提升代码可维护性和可读性。
• 需通过编译器（如 `tsc`）将 TypeScript 转换为 JavaScript 才能在浏览器或 Node.js 中运行。

---

#### 2. **`any`、`unknown` 和 `never` 的区别？**
**答案**：
• **`any`**：禁用类型检查，允许任意操作（如调用不存在的方法），慎用。
• **`unknown`**：表示“未知类型”，需通过类型断言或类型守卫（Type Guard）后才能操作，更安全。
• **`never`**：表示永远不会发生的值（如抛出错误的函数返回值）。

**示例**：
```typescript
let a: any = "hello";
a.toFixed(); // 编译通过，但运行时报错！

let b: unknown = "world";
if (typeof b === "string") {
  console.log(b.length); // 必须通过类型守卫
}

function error(): never {
  throw new Error("error");
}
```

---

### **二、接口、类型别名与高级类型**
#### 3. **`interface` 和 `type` 的区别？**
**答案**：
• **相同点**：均可定义对象、函数、联合类型等。
• **不同点**：
  • **`interface`**：
    ◦ 支持**声明合并**（多次定义同一接口会合并）。
    ◦ 更适合描述对象形状（如类实现接口）。
  • **`type`**：
    ◦ 可定义更复杂类型（如元组、字面量联合类型 `'A' | 'B'`）。
    ◦ 不可重复声明。

**示例**：
```typescript
// 接口合并
interface User { name: string; }
interface User { age: number; }
const user: User = { name: "Alice", age: 20 };

// 类型别名
type Status = "success" | "error";
```

---

#### 4. **如何实现一个 `DeepReadonly<T>` 工具类型？**
**答案**：
递归地将所有属性（包括嵌套对象）设置为 `readonly`。
```typescript
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

// 测试
type User = {
  name: string;
  address: { city: string };
};
type ReadonlyUser = DeepReadonly<User>;
// 结果：address 也是 readonly
```

---

### **三、泛型与工具类型**
#### 5. **泛型的作用是什么？写一个泛型函数示例**
**答案**：
泛型用于**创建可复用的组件，支持多种类型而不丢失类型信息**。

**示例**：反转数组
```typescript
function reverse<T>(items: T[]): T[] {
  return items.reverse();
}
const nums = reverse([1, 2, 3]); // 类型推断为 number[]
const strs = reverse(["a", "b"]); // 类型推断为 string[]
```

---

#### 6. **如何用泛型约束限制参数必须包含 `length` 属性？**
**答案**：
使用 `extends` 约束泛型参数。
```typescript
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(obj: T): void {
  console.log(obj.length);
}

logLength("hello"); // 5
logLength({ length: 10, value: "test" }); // 10
```

---

### **四、类与装饰器**
#### 7. **抽象类和接口的区别？**
**答案**：
• **抽象类**：
  • 可以包含具体方法和抽象方法（`abstract` 标记）。
  • 通过 `extends` 继承，一个类只能继承一个抽象类。
• **接口**：
  • 仅定义方法签名和属性，无具体实现。
  • 通过 `implements` 实现，一个类可实现多个接口。

**示例**：
```typescript
abstract class Animal {
  abstract move(): void;
  eat() { console.log("eating"); }
}

interface Flyable {
  fly(): void;
}

class Bird extends Animal implements Flyable {
  move() { console.log("flying"); }
  fly() { console.log("flapping wings"); }
}
```

---

#### 8. **如何用装饰器实现方法执行时间的日志打印？**
**答案**：
使用**方法装饰器**拦截方法调用，记录执行时间。
```typescript
function logTime(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const start = Date.now();
    const result = originalMethod.apply(this, args);
    const end = Date.now();
    console.log(`${methodName} 执行时间：${end - start}ms`);
    return result;
  };
}

class Calculator {
  @logTime
  add(a: number, b: number) {
    for (let i = 0; i < 1e6; i++) {} // 模拟耗时操作
    return a + b;
  }
}
```

---

### **五、工程化与配置**
#### 9. **如何为第三方库编写类型声明文件？**
**答案**：
在 `.d.ts` 文件中使用 `declare module` 扩展类型。

**示例**：为未提供类型的库 `myLib` 添加声明
```typescript
// myLib.d.ts
declare module "myLib" {
  export function greet(name: string): string;
}
```

---

#### 10. **`tsconfig.json` 中 `strictNullChecks` 的作用？**
**答案**：
启用后（`true`），TypeScript 会严格检查 `null` 和 `undefined`，防止意外访问可能为 `null` 的值。

**示例**：
```typescript
let a: number = null; // 报错（若 strictNullChecks 为 true）
let b: number | null = null; // 正确
```

---

### **六、实战场景与开放问题**
#### 11. **如何设计一个类型安全的 API 请求层？**
**答案**：
• 使用泛型封装请求函数，约束请求参数和响应类型。
• 示例：
```typescript
interface ApiResponse<T> {
  code: number;
  data: T;
  message: string;
}

async function request<T>(url: string, params: any): Promise<ApiResponse<T>> {
  const response = await fetch(url, { body: JSON.stringify(params) });
  return response.json();
}

// 使用
interface User { id: number; name: string; }
const result = await request<User>("/api/user", { id: 1 });
```

---

#### 12. **迁移 JavaScript 项目到 TypeScript 的关键步骤？**
**答案**：
1. 重命名文件为 `.ts`，逐步修复类型错误。
2. 配置 `tsconfig.json`（如开启 `allowJs` 兼容旧代码）。
3. 为第三方库添加类型声明（或安装 `@types` 包）。
4. 优先迁移核心模块，逐步覆盖工具函数和组件。

---

### **附：学习资源**
• **官方文档**：[TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
• **类型挑战**：[type-challenges](https://github.com/type-challenges/type-challenges)（提升类型编程能力）
• **在线练习**：[TypeScript Playground](https://www.typescriptlang.org/play)（实时测试类型逻辑）

掌握这些知识点后，结合项目中的实际应用案例，能大幅提升面试通过率！ 🚀




JS=解释型，只能在运行时发现错误；是弱类型语言，没有静态类型选项；
TS-可以在编译期间发现并纠正错误；是强类型语言，支持静态和动态类型、以及函数重载；

顶级类型：**unknown&&any**

❌✅❗️

https://jkchao.github.io/typescript-book-chinese/#%E7%BF%BB%E8%AF%91%E5%86%85%E5%AE%B9
https://github.com/microsoft/TypeScript/wiki/Performance#preferring-interfaces-over-intersections

https://github.com/typescript-cheatsheets/react

No overload matches this call.

```tsx
// You may have probably heard of very useful TS types like Partial<T>, that let you produce a type derived from T, but with every property being optional.
type Partial<T> = {
  [P in keyof T]?: T[P];
};
type Required<T> = {
  [P in keyof T]-?: T[P];
};
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

# 按照类型驱动原则来编写代码（设计模式除外）

# tuple元组

可是假如我们想定义一个长度限制在 50 的数组呢?难不成要写 50 遍 number?

不,解决办法还是有的,在 Typescript 3.0 中引入一个新的特性叫元组展开

假如我们想定义一个长度为 50 的数组, 我们只要这样写:

type Tuple50<TItem> = [TItem, ...TItem[]] & { length: 50 };

let iMArray: Tuple50<number> = [0,...,50];

可以看到,结合元组展开以及交叉类型,我们成功定义了一个长度为 50,数组元素为 number 的数组.

回到前言提到的那个棋盘类,我们就可以这样定义一个 9x9 的棋盘类型了.

type Tuple9<TItem> = [TItem, ...TItem[]] & { length: 9 };

type TypeBoard<T> = Tuple9<Tuple9<T>>;

let board: TypeBoard<number> = [
[0, ..., 9],
...
[0, ..., 9],
]

最后给一个封装好的 Tuple 类

type Tuple<TItem, TLength extends number> = [TItem, ...TItem[]] & { length: TLength };

# playground

https://www.typescriptlang.org/zh/play?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCoASMFmgY7p7ehCTkVOle4jUMdRLYTqCc8LEZzCZmoNJODPHFZZXVtZYYkAAeRJTInDQS8po+rf40gnjbDKv8LqD2jpbYoACqAEoAMsK7sUmxkGSCc+VVQQuaTwVb1UBrDYULY7PagbgUZLJH6QbYmJAECjuMigZEMVDsJzCFLNXxtajBBCcQQ0MwAUVWDEQNUgADVHBQGNJ3KAALygABEAAkYNAMOB4GRogLFFTBPB3AExcwABT0xnM9zsyhc9wASmCKhwDQ8ZC8iElzhB7Bo3zcZmY7AYzEg-Fg0HUiS58D0Ii8AoZTJZggFSRxAvADlQAHJhAA5SASAVBFQAeW+ZF2gldWkgx1QjgUrmkeFATgtOlGWH0KAQiBhwiudokkuiIgMHBx3RYbC43CCJVljEEwgA4mQGAjUagAMIKyWgADeihKNMLc7FZHy11QlE4zBXEJ4G8l25pe4Pq4UBG3nHYiGkP0Pct37Fg6DIKrXZFn863O4vfhUW4E9-3PUY7GvW970fMg9SXQ8ShGQQAm-X9Nz5Hd1z-RCBBQ4DQMwgicJKJC1BQmlIAITDKIIQ8AF9DxdGgEE3QQXiEVAVXg5dSLLPNCUyciAmY0D2M47iGKYvMxI4mluIQviXyXLCf1AoDjz-SCqNAejMOQ3DlLQp5RwAIX04TWMlJ5mGkL8CzUv94JUQAbeMAI2NAC45MhbMAB1NABG-QBCK0AeH1DPgal80LJ4aIc1ATNMgBtAAGABdULwtU1BR2iyKzPigBGVKlLCmkMvM-ljNygAmVK0pK4C4osoQAissgbLs4jNwNIr0vqoieDipLCtI5TgKy-l6tygrapoYCyqPbgBuq4JupKwQov5FVevKYznJ3HSQEAbgNADvdQAeBWm64xtATaeCy7aYtHXbaPOwQ5uu7hzLuwtTMe69ltI9wWL-CoyBxfl4qGkpkgXFUAZETDEoAbjhgAePaCCRigAGpMZ43CShUQBC6MAdO9AHnrQAAOUAU2tABC3bBVjOviSlh2nGpQlqRVWFU8dI6NvLs6NQExq61tAAAqOHBZ2gXQGjXh+cFr8srFigpbQh6pZluWhfMpWVZi771b1GWua6hmWuBsgAgIdh7BVWmTZKRi+KcAkzXRTdzak-GwEAMB1acACwjAC5PQBO0yC9yvNswOQ5VQBN+MAGcTABX4wA9tV5-zgpNlq2q-UCz13UY9Wgh8fnBxThuKmgnDGflgAAPQAYhVJLSgATgYUpkgqUoADFksXABmeiAB9G5btuO+7xcADZ6L1AASYBcMEQjytAgJ0BeeApDIGcGGzSS+MRIXCIAMiP-jmFX-QuMXpzcYZkRUizv8lVRZhPl5d-QAAFlvu+3Dza5QIJgkJhaMtdoxc0htDWGyt+R5QxqAVGn94GY1gT-X+AC-xAIFsvJ+ggPQWBVBQfgytBZ5T1M1MKsB8SP03KhfBkBCHEKlmQ+2DNHa-2vhhHBm4gFc3YXxFQgAQTUAGAugBbRUALLyVNAA5GYAJyD6YM1hpwyUM4HD7hQGDCGpEoY4hhv-GBoA4Eo1AAAdmQfySqaCGZKK3qol0ltraYBVAQRw2YACS2wVTRkSqsTW1i6HqAYUQ8WoALF6lYQ7LmztBIYM3Coh0Sg+J6RgNmEuTsBKu3Brhdh7CVDe15pHUOnl-bBxCiUNmawVS8xzhefOAEqy8X+v-AA+shTCvNcKwwrphGu9dh6t3bl3Hu-ch6JWbv0sePcp6z3nvvB+NdKm2QHnFPUwAL7yRaeRMJqTGm0iXqADZTUnDdAIcAFUAB+fIAAdFUA9Ll6gHrzJZZk9Qi2AMwfg0ZozkMEDUeQnjZbhL-vmMg7MQFgK5toq60D4bwNRgwFe7h9yxAxtjSxfEmZrEwnGGCPw1SgXihQZK5D0DEFzvuFUeUJ6ApKMzfkmNmaozyolUAZzQDMsFp8qWzNtzMxUIAXflACD0STQAVHK8ypidDylVxEQPvldWlH8vFfNAMzFByq1gyvPKC1VtM+FcwPvZEFaxn5Is0AAQg-sY+CmrMX8gOX8O+UTXbWtWFkiE0AUn6ormsridqtkNPRf-Bg2LECYTtQEI5SwVTAFrsAD5XzUK-K4p8wF+qg33mNa-TQ79+RUu2Wkl2Xg7V8LdSk-1DMVBpsQBmt+H9e4ythneRAoL+SgPAegyFuj0gwqMZW6tmAzEGLRQzRtWr+SVoJclKW47CUyv4QzR1XgR3qrvnOpJ7qUBlpKAu-ZBlElSUYspVgk4KDTj2ZwRMoBxzHtPX+FUApa4ABEn3PoFPwe9eUH0AFYZymU-a+kJeoEaymKgqSASp4CqiPVObYK8WriRpHqIAA

## readonly and const

https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#discriminated-unions

TypeScript additionally has a readonly modifier for properties.

interface Rx {
readonly x: number;
}
let rx: Rx = { x: 1 };
rx.x = 12; // error
It also ships with a mapped type Readonly<T> that makes all properties readonly:

interface X {
x: number;
}
let rx: Readonly<X> = { x: 1 };
rx.x = 12; // error
And it has a specific ReadonlyArray<T> type that removes side-affecting methods and prevents writing to indices of the array, as well as special syntax for this type:

let a: ReadonlyArray<number> = [1, 2, 3];
let b: readonly number[] = [1, 2, 3];
a.push(102); // error
b[0] = 101; // error
You can also use a const-assertion, which operates on arrays and object literals:

let a = [1, 2, 3] as const;
a.push(102); // error
a[0] = 101; // error
However, none of these options are the default, so they are not consistently used in TypeScript code.

# union

联合类型值的传递容易产生 bug

# params

1-3 个参数的话不用 object
4 个的话用 object

Type '((\_: DrillNode) => { position: any; value: string | undefined; }) | ((drillNode: DrillNode) => null)' is not assignable to type '(drillNode: DrillNode) => { position: "start" | "end"; value: string; } | null'.

a?.b 等同于 a && a.b

# import
copy 目录和文件时，文件内部的 imports 会自动去除 index.d 后缀.

type，interface、enum 要写到 d.ts 里去，要不然容易出现循环 imports 的情况

# 可选属性访问

赋值表达式的左侧不能是可选属性访问。ts(2779)

# 非空断言

```ts
const a = queryTxt!;
```

The exported identifier "ModelFieldI" is not declared in Babel's scope tracker
as a JavaScript value binding, and "@babel/plugin-transform-typescript"
never encountered it as a TypeScript type declaration.
It will be treated as a JavaScript value.

This problem is likely caused by another plugin injecting
"ModelFieldI" without registering it in the scope tracker. If you are the author
of that plugin, please use "scope.registerDeclaration(declarationPath)".

'name' is deprecated.ts(6385)
lib.dom.d.ts(18305, 5): The declaration was marked as deprecated here.
Type 'void' is not assignable to type 'string'.ts(2322)
portal.ts(110, 3): The expected type comes from property 'name' which is declared here on type 'SavePortalParams'
(property) SavePortalParams.name: string

No overload matches this call.
Overload 1 of 2, '(props: MenuProps | Readonly<MenuProps>): Menu', gave the following error.
Type 'import("/Users/guonanci/Documents/magicbi_web/node_modules/antd/lib/menu/index").MenuMode | undefined' is not assignable to type 'import("/Users/guonanci/Documents/magicbi_web/node_modules/antd/node_modules/rc-menu/lib/interface").MenuMode | undefined'.
Type '"vertical-left"' is not assignable to type 'MenuMode | undefined'.
Overload 2 of 2, '(props: MenuProps, context: any): Menu', gave the following error.
Type 'import("/Users/guonanci/Documents/magicbi_web/node_modules/antd/lib/menu/index").MenuMode | undefined' is not assignable to type 'import("/Users/guonanci/Documents/magicbi_web/node_modules/antd/node_modules/rc-menu/lib/interface").MenuMode | undefined'.ts(2769)
Menu.d.ts(12, 5): The expected type comes from property 'mode' which is declared here on type 'IntrinsicAttributes & IntrinsicClassAttributes<Menu> & Readonly<MenuProps> & Readonly<{ children?: ReactNode; }>'
Menu.d.ts(12, 5): The expected type comes from property 'mode' which is declared here on type 'IntrinsicAttributes & IntrinsicClassAttributes<Menu> & Readonly<MenuProps> & Readonly<{ children?: ReactNode; }>'
(JSX attribute) mode?: MenuMode | undefined

Type '{ fullScreenId: string; displayChartsOnly: boolean; }' is not assignable to type 'IntrinsicAttributes & Omit<{ fullScreenId: string; sceneryDetail?: SceneryDetail | undefined; }, "sceneryDetail">'.
Property 'displayChartsOnly' does not exist on type 'IntrinsicAttributes & Omit<{ fullScreenId: string; sceneryDetail?: SceneryDetail | undefined; }, "sceneryDetail">'.

'findTargetFirstLevelMenu' implicitly has return type 'any' because it does not have a return type annotation and is referenced directly or indirectly in one of its return expressions.ts(7023)
const findTargetFirstLevelMenu: any

TypeError: Reduce of empty array with no initial value

字符串的联合类型或者多种类型值的联合类型 && 枚举

添加一级菜单后，leftTop-left 反应有问题。图表渲染区应该保持不动；

主题设置要一点点设置，js 里的样式怎么写到 antd-menu 组件特定 dom 样式里面去，css file，inlineStyle？classNames，styled-component？(就决定用它了)，（只研究自定义的即可,黑白主题是特例）
用正确的数据结构和算法、设计模式来避开

Argument of type '{ partToChange: Partial<{ leftTopTheme: Record<Theme, LeftTopTheme>; leftTheme: Record<Theme, LeftTheme>; topTheme: Record<Theme, TopTheme>; }>; ... 10 more ...; menus: PortalMenu[]; }' is not assignable to parameter of type 'SetStateAction<PortalSetting>'.
Object literal may only specify known properties, and 'partToChange' does not exist in type 'SetStateAction<PortalSetting>'.ts(2345)
(property) partToChange: Partial<{
leftTopTheme: Record<Theme, LeftTopTheme>;
leftTheme: Record<Theme, LeftTheme>;
topTheme: Record<Theme, TopTheme>;
}>

Property 'firstLayerMenuColor' does not exist on type 'LeftTopTheme | LeftTheme | TopTheme'.
Property 'firstLayerMenuColor' does not exist on type 'LeftTheme'.ts(2339)

Type '{ children: Element; ref: RefObject<Element>; className: string; key: string; title: Element; onTitleClick: () => void; }' is not assignable to type 'IntrinsicAttributes & SubMenuProps'.
Property 'ref' does not exist on type 'IntrinsicAttributes & SubMenuProps'.ts(2322)
(JSX attribute) ref: React.RefObject<JSX.Element>
No quick fixes available

泛型是为了减少类型声明次数？

Conversion of type 'EventDataNode' to type 'PortalMenu' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
Type 'EventDataNode' is missing the following properties from type 'PortalMenu': k, layerIts(2352)

Argument of type 'Key' is not assignable to parameter of type 'string'.
Type 'number' is not assignable to type 'string'.ts(2345)
const findDftOpenKeys: (menusArr: PortalMenu[]) => Key[]
No quick fixes available

            setMenuOpenKeys([key] as any)
            setMenuOpenKeys([key]) // Type 'string' is not assignable to type 'string[]'.ts(2322) ????

Parsing error: Cannot find module '@babel/plugin-proposal-decorators'
Require stack:

- /Users/guonanci/Documents/magicbi_web/node_modules/@babel/core/lib/config/files/plugins.js
- /Users/guonanci/Documents/magicbi_web/node_modules/@babel/core/lib/config/files/index.js
- /Users/guonanci/Documents/magicbi_web/node_modules/@babel/core/lib/index.js
- /Users/guonanci/Documents/magicbi_web/node_modules/@babel/eslint-parser/lib/worker/babel-core.cjs
- /Users/guonanci/Documents/magicbi_web/node_modules/@babel/eslint-parser/lib/worker/index.cjs
- /Users/guonanci/Documents/magicbi_web/node_modules/@babel/eslint-parser/lib/client.cjs
- /Users/guonanci/Documents/magicbi_web/node_modules/@babel/eslint-parser/lib/analyze-scope.cjs
- /Users/guonanci/Documents/magicbi_web/node_modules/@babel/eslint-parser/lib/index.cjs
- /Users/guonanci/Documents/magicbi_web/node_modules/@eslint/eslintrc/lib/config-array-factory.js
- /Users/guonanci/Documents/magicbi_web/node_modules/@eslint/eslintrc/lib/index.js
- /Users/guonanci/Documents/magicbi_web/node_modules/eslint/lib/cli-engine/cli-engine.js
- /Users/guonanci/Documents/magicbi_web/node_modules/eslint/lib/cli-engine/index.js
- /Users/guonanci/Documents/magicbi_web/node_modules/eslint/lib/api.js
- /Users/guonanci/.vscode/extensions/dbaeumer.vscode-eslint-2.1.25/server/out/eslintServer.jseslint

为什么 ts 的 cmd+click，每次都要点击两次

只在每个大 page 目录下面定义 index.d.ts

The left-hand side of an assignment expression may not be an optional property access.ts(2779)

# 圆括号报错：

```tsx
  // ype 'ThemeField' is not assignable to type 'Record<string, string>'.
  // Index signature for type 'string' is missing in type 'ThemeField'.ts(2322)

  // wrong
  export const getFieldColorMap = (theme: string, fields: ThemeField[]): Record<string, string> => {
    const themeColors = getThemeColors(theme) || []
    return fields.reduce((acc:Record<string, string>,({ key: k }), i:number) => {
      if(themeColors.length) acc[k] = themeColors[i % themeColors.length]
      return acc
    },{})
    // right
    return fields.reduce((acc:Record<string, string>,{ key: k }, i:number) => {
      if(themeColors.length) acc[k] = themeColors[i % themeColors.length]
      return acc
    },{})
  }
```

Initializer provides no value for this binding element and the binding element has no default value.ts(2525)

```js
This condition will always return 'false' since the types 'Element' and 'boolean' have no overlap.ts(2367)
The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.ts(2362)
(property) pieInst: React.MutableRefObject<any>
```

```tsx
This condition will always return 'false' since the types 'Element' and 'boolean' have no overlap.ts(2367)
The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.ts(2362)
(property) pieInst: React.MutableRefObject<any>
          Chart={<Pie ref={pieInst} />}
          Chart={<Pie ref=={pieInst} />}

```

```js
Type '({ config: originConfig, isPreview, fetchData, onMessage, postMessage, updateConfig, }: PropsWithChildren<MBIComponentProps>) => void' is not assignable to type 'FC<MBIComponentProps>'.
  Type 'void' is not assignable to type 'ReactElement<any, any> | null'.ts(2322)

```

泛型：类型的传递，减少类型声明和类型引用 import

you
有 1 个 bug 是混淆了「按位或」和「逻辑或」，怎么提前避免，似乎无法做到，只能用人脑？

# ts in js

https://juejin.cn/post/6844904030221631501

运行`yarn tsc`对ts文件进行类型检查。

括号内的as语法，直接js抛错？？
