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
