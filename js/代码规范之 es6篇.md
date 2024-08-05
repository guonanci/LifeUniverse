##ESNext
此部分针对 ES设计,基于 ES 扩展的语言如(JSX, TS...)等等都应尽量遵守该规范.
###文件
- ES 语法的 JS 文件使用.js文件名.
- 当文件无法使用.js 扩展名时,使用.es扩展名.
某些应用开发时,可能同时包含 ES5和 ESNext 文件,运行环境仅支持 ES5,ESNext文件需要经过预编译.部分场景下,编译工具的选择需要通过扩展名区分,需要重新定义 ESNext文件的扩展名.此时 ESNext文件必须使用.es 扩展名.
但是更推荐使用其他条件作为是否需要编译的区分:
1. 基于文件内容
2. 不同类型文件放在不用目录下
###结构
####缩进
- 使用 generator 时, *前面不允许有空格, *后面必须有一个空格.
```
//good
function* caller() {
    yield 'a';
    yield* callee();
    yield 'd';
}

//bad
function * caller() {
    yield 'a';
    yield *callee();
    yield 'd';
}
```
####语句
- 类声明结束不允许添加分号
与函数声明保持一致
- 类成员定义中,方法递给你以后不允许添加分号,成员属性定义后必须添加分号.
```
//good
class Foo {
    foo = 3;

    bar() {

    }
}

//bad
class Foo {
    foo = 3

    bar() {

    }
}
```
- export 语句后, 不允许出现空语句的分号
export 关键字不影响后续语句类型 export 归属于 es6 module模块化
```
//good
export function bar() {
    ...
}

export default function bar() {
    ...
}

//bad
export function foo() {
    ...
};

export default function bar() {}
    ...
};
```
- 属性装饰器后,可以不加分号的场景,不允许加分号
只有一种场景必须加分号:当属性 key 是 computed property key 时,