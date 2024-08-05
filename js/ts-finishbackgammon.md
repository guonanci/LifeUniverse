
##透过这次作业,我们主要的目的在于两个:

- ts基于类的面向对象编程.

- 格物致知

1. 将 js 和 ts 通过五子棋游戏在面向对象编程方面做对比,更加透彻地理解面向对象.

2. 同时,对这个作业涉及到的设计模式有较为深刻的理解.

3. 掌握几种常用的设计模式,对有没有运用设计模式来解答这道题目作出代码效率,代码可维护性(代码可阅读性)等等方面的对比.

###ts 简介

ts 是 js 的一个超集,在 js 上面添加了可选的静态类型和基于类的面向对象编程.ts 扩展了 js,所以 ts 文件里面全部采用原生 js 语法也是可以的.

ts 支持为已经存在的 js 库添加类型信息的头文件.扩展了它对于流行的库比如 jQuery,MongoDB,Node,D3等等的好处.

ts同类: coffee 和 script#...

类型批注,编译时类型检查
类
接口
模块
lambda函数

ts 很类似于 JScript.NET,不过还添加了对静态类型,经典的面向对象预约特性比如类,继承,接口,命名空间等等 MS 对 ES语言标准的实现.

###类型批注
通过类型批注提供静态类型以在编译时启动类型检查,可选,可以被忽略而去使用 js 常规的动态类型.
```
function Add(left: number, right: number): number {
    return left + right;
}
```
基本类型的批注有 number,bool,string...动态类型的结构是 any 类型.
类型批注可以被导出到一个单独的声明文件以让使用类型的已被编译为 js 的 ts 脚本的类型信息可用.批注可以为一个现有的 js 库声明,就像已经为 Node 和 jQuery 所做的那样.
当类型没有给出时,ts 编译器可以*类型推断*,如果缺乏声明,没有类型可以被推断出,就会被默认为是动态的 any 类型.
###声明文件
当一个 ts 脚本被编译时,有一个产生作为编译后的 js的组件的一个接口而起作用的声明文件(具有扩展名.d.ts)的选项.在这个过程中编译器基本上带走所有的函数和方法体而仅保留所导出类型的批注.当第三方开发者从 ts 中使用它时,由此产生的声明文件就可以被用于描述一个 js 库或者模块到处的虚拟的 ts 类型.
声明文件的概念类似于 C/C++中头文件的概念.
```
module Articthmetics {
    add(left: number, tight: number): number;
    substract(left: number, right: number): number;
    multiply(left: number, right: number): number;
    divide(left: number, right: number): number;
}
```
###对 ES6的支持
ts 中增加了对 ES6的支持.
- 类
- 模块
- Arrow functions
####类
ts 支持集成了可选的类型批注支持的 ES6的类.
```
classPerson {
    private name: string;
    private age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    toString(): string {
        return this.name + "(" + this.age + ")";
    }
}
```

####泛型
ts 支持基于类型擦除的泛型编程.
**与 js 的兼容性**
ts 是 js 的一个超集.默认倾下编译器以 ES3为目标但 ES5也是受支持的一个选项.一个 ts 应用可以利用已存在的 js 脚本,编译后的 ts脚本也可以从 js 中使用.现有框架如 jQuery 和 Node 等等收到完全支持.
**支持的浏览器和平台**
运行于任何平台上的任何网页浏览器都可以运行 ts 由于他仅仅是被编译为标准的 js.一个脚本既可以被编译为 js 也可以通过为 ts 包含 js 编译器实时编译.
**开发工具**
ts 编译器,名称叫做 tsc.是用,可以被编译为在任何 js 引擎中,在任何宿主-如浏览器中的常规 js 的 ts 写的.编译器包被绑定于一个可以执行编译器的脚本宿主.使用 Node 作为宿主的 Node 包同样可以获取到.
也有用 js 些的客户端编译器的一个 alpha 版本,它在页面载入时,实时执行 js 代码.
这种编译器默认支持 ES3.一个钻像是允许以 ES5为目标以利用该版本独有的语言特性.类尽管是 ES6标准的一部分,在这两个模式下都可以使用.
