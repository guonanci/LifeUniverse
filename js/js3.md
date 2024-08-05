面试要点：
    1、JS基础：原型/原型链、闭包、ES6、call/apply/bind、promise/async - await/ generator - yeild 、 Object.defineProperty/Proxy、 Map/Set、Class
    2、跨域
    3、http/https 1.0 2.0 3.0
    4、安全
    5、浏览器
    6、缓存：cookie/session localStorage/sessionStorage disk缓存/indexDB 304
    7、宏任务/微任务 eventLoop
    8、从输入URL到页面渲染整个流程

    html/css3
    设计模式
    vue/vuex 2.0 3.0 / for - key / 双向数据绑定/ 组件/ 传值交互/ 生命周期
    react/redux
    性能优化
    做的比较好的项目
    webpack
    git
    CI/CD 持续集成/持续发布
    技术选型
    组件库
    封装库

目录
    一、JS基础
    二、框架
    三、安全
    四、http
    五、浏览器
    六、工具
        webpack

模块规范：
    ES6
        import
        export
        同步异步
    CommonJs
        require
        同步异步
    AMD
        define
        同步异步


    1、ES6

        import
            webpack:
                import( // 2.6.0
                    /* webpackChunkNameL "myname" */
                    /* webpackMode: "lazy" */ // lazy-once eager weak
                )
        export 标签
            导出给定的 value。export 标记可以出现在函数声明或变量声明之前。函数名或变量名是导出值的标识符。
            ```
                export: var answer = 42;
                export: function method(value) {
                // 做一些操作……
                };
            ```
        附录：
            调用 import() 时，包含在其中的动态表达式 request，会潜在的请求的每个模块。
            例如，import(`./locale/${language}.json`) 会导致 ./locale 目录下的每个 .json 文件，
            都被打包到新的 chunk 中。在运行时，当计算出变量 language 时，任何文件（如 english.json
            或 german.json）都可能会被用到。

   2、CommonJs
        CommonJS 致力于为浏览器之外的 JavaScript 指定一个生态系统
        require(dependency: String)
            以同步的方式检索其他模块的导出。
            由编译器(compiler)来确保依赖项在最终输出 bundle 中可用。
        require.resolve(dependency: String)
            以同步的方式获取模块的 ID。
        require.cache
            多处引用同一个模块，最终只会产生一次模块执行和一次导出。
            所以，会在运行时(runtime)中会保存一份缓存。删除此缓存，会产生新的模块执行和新的导出。
            删除此缓存，会产生新的模块执行和新的导出。
        require.ensure
            <!-- require.ensure() 是 webpack 特有的，已经被 import() 取代。 -->
            require.ensure(
                dependencies: String[],
                callback: function(require),
                errorCallback: function(error),
                chunkName: String
            )
            给定 dependencies 参数，将其对应的文件拆分到一个单独的 bundle 中，此 bundle 会被异步加载。
            当使用CommonJS 模块语法时，这是动态加载依赖的唯一方法。意味着，可以在模块执行时才运行代码，
            只有在满足某些条件时才加载依赖项。
            这个特性依赖于内置的 Promise。如果想在低版本浏览器使用 require.ensure，
            记得使用像 es6-promise 或者 promise-polyfill 这样 polyfill 库，
            来预先填充(shim) Promise 环境。
                dependencies：字符串构成的数组，声明 callback 回调函数中所需的所有模块。
                callback：只要加载好全部依赖，webpack 就会执行此函数。require 函数的实现，
                         作为参数传入此函数。当程序运行需要依赖时，
                         可以使用 require() 来加载依赖。函数体可以使用此参数，来进一步执行 require() 模块。
                errorCallback：当 webpack 加载依赖失败时，会执行此函数。
                chunkName：由 require.ensure() 创建出的 chunk 的名字。通过将同一个 chunkName 传递给不同的 require.ensure()             调用，我们可以将它们的代码合并到一个单独的 chunk 中，从而只产生一个浏览器必须加载的 bundle。

    3、AMD
        AMD(Asynchronous Module Definition) 是一种定义了写入模块接口和加载模块接口的 JavaScript 规范
        define
            define(
                [name: String],
                [dependencies: String[]],
                factoryMethod: function(...)
            )
        require
            与 require.ensure 类似，给定 dependencies 参数，将其对应的文件拆分到一个单独的 bundle 中，此 bundle 会被异步加载。
            然后会调用 callback 回调函数，并传入 dependencies 数组中每一项的导出。

            这个特性依赖于内置的 Promise。如果想在低版本浏览器使用 require.ensure，
            记得使用像 es6-promise 或者 promise-polyfill 这样 polyfill 库，来预先填充(shim) Promise 环境。

    4、webpack扩充方法
        require.context
            require.context(
                directory: String,
                includeSubdirs: Boolean /* 可选的，默认值是 true */,
                filter:RegExp /* 可选的 */
            )
            使用 directory 路径、includeSubdirs 选项和 filter 来指定一系列完整的依赖关系，
            便于更细粒度的控制模块引入。后面可以很容易地进行解析：
        require.include
            引入一个不需要执行的依赖，这可以用于优化输出 chunk 中的依赖模块的位置。
            ```
                require.include('a');
                require.ensure(['a', 'b'], function(require) { /* ... */ });
                require.ensure(['a', 'c'], function(require) { /* ... */ });
                这会产生以下输出:

                entry chunk: file.js and a
                anonymous chunk: b
                anonymous chunk: c
                如果不使用 require.include('a')，输出的两个匿名 chunk 都有模块 a。
            ```
        require.resolveWeak
        与 require.resolve 类似，但是这不会将 module 引入到 bundle 中。这就是所谓的"弱(weak)"依赖。
        ```
            if(__webpack_modules__[require.resolveWeak('module')]) {
            // 模块可用时，执行一些操作……
            }
            if(require.cache[require.resolveWeak('module')]) {
            // 在模块被加载之前，执行一些操作……
            }

            // 你可以像执行其他 require/import 方法一样，
            // 执行动态解析（“上下文”）。
            const page = 'Foo';
            __webpack_modules__[require.resolveWeak(`./page/${page}`)]

            require.resolveWeak 是通用渲染（SSR + 代码分离）的基础，例如在 react-universal-component 等包中的用法。它允许代码在服务器端和客户端初始页面的加载上同步渲染。它要求手动或以某种方式提供 chunk。它可以在不需要指示应该被打包的情况下引入模块。它与 import() 一起使用，当用户导航触发额外的导入时，它会被接管。
        ```



#一、JS基础
1、原始值和引用值
        在 ECMAScript 中，变量可以存在两种类型的值，即原始值和引用值。
    原始值
        原始值存栈中，存取快
        存储在栈（stack）中的简单数据段，也就是说，它们的值直接存储在变量访问的位置。
    引用值
        存储在堆（heap）中的对象，也就是说，存储在变量处的值是一个指针（point），指向存储对象的内存处。
1、JS的组成：ECMAScript、DOM、BOM
2、script标签，默认同步脚本，先下载，再执行，再下载（阻塞）
    延迟脚本（外部引入脚本）：defer，脚本可以延迟到整个页面都解析完毕后再运行，不影响页面构造
    异步脚本（外部引入脚本）：async，立即下载脚本，不应妨碍页面中的其他操作

 每个对象都是基于一个引用对象创建的
3、面向对象：把相关的数据作为一个整体来看待，从更高层次来进行建模
    // 抽象性。
       // 抽象性是指将具有一致的数据结构和行为的对象抽象成类。
    封装
        1、把公有属性方法转为私有属性方法。作用域隔离（封装体内不影响封装体外）。2、绑定属性和方法
    继承性
        继承性是子类自动共享父类数据结构和方法的机制
    多态性：不同对象获取同一消息输出不同结果
        多态性是指相同的操作或函数、过程可作用于多种类型的对象上并获得不同的结果。
4、类与对象的区别：
    同：无序属性集合。
    不同：类的实例是对象，类是具有相同特性和行为对象的抽象。
    Map/Set 有序属性集合
5、原型：创建新函数会自动获得一个指向原型对象的指针，而原型对象中会自动获得一个指向prototype指针所在的函数的constructor属性，原型对象中其他属性则继承自Object
6、原型链：利用原型让一个引用对象继承另一个引用对象的属性和方法（重写原型和constructor）
    <!-- 原型：创建一个函数会自动获得一个原型属性prototype，而prototype则指向一个原型对象，而原型对象中的constructor指向prototype所在函数
    创建自定义函数获取的原型对象仅有constructor，其他皆继承自Object -->
    缺点：1、包含引用类型值的原型。2、向超类传递参数将影响所有实例。
    <!-- 2、创建子类型实例时，不能向超类型构造函数传递参数否则会影响所有对象实例 -->
7、闭包：有权限访问另一个函数内部作用域中的变量的函数
    特点：1、可访问函数内部作用域的变量
         2、变量一直存在于内存中
    缺点：注意内存泄漏

8、创建对象的7大模式：可重用性、扩展性、健壮性
    1、工厂模式
    2、构造函数模式
    3、原型模式
    4、组合使用原型和构造函数模式
    5、动态原型模式
    6、寄生构造函数模式
    7、稳妥构造函数模式

9、继承的六大方式
    1、原型链继承
    2、借用构造函数
    3、组合使用原型链和构造函数
    4、原型模式
    5、寄生式继承
    6、寄生组合继承
10、call/apply/bind/promise/new
    call和apply区别
        call/apply：call接受的是一个参数列表，而 apply接受的是一个包含多个参数的数组
        Math.max.call(null/undefined/this, 0, 1, 2, 3 )
        Math.max.apply(null/undefined/this, [1, 2, 3])

    实现call

        ```
        Function.prototype.mycall = function(ctx) {
            ctx = ctx || window
            ctx.fn = this
            const res = ctx.fn(...[...arguments].slice(1))
            delete ctx.fn
            return res
        }
        ```

      实现apply

        ```
        Function.prototype.myApply = function(ctx) {
            ctx = ctx || window
            ctx.fn = this
            let res;
            if(arguments[1])
                res = ctx.fn(...arguments[1])
            else
                res = ctx.fn()
            delete ctx.fn
            return res
            }
        ```
        实现bind

        ```
        Function.prototype.bind = function(newThis) {
            if (typeof this !== 'function') {
            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable')
            }
            let args =[...arguments]slice(1);
            const _this = this,
                propFn = function () {},
                bindFn = function() {
                    return _this.apply(this instanceof bindFn ? this : newThis, args.concat([...arguments].slice()))
                }
            // 维护原型关系
            if (this.prototype) propFn.prototype = this.prototype;
            bindFn.prototype = new propFn();

            return bindFn
        }

        ```
        实现promise
            ```
            const PENDING = 'pending'
            const RESOLVED = 'resolved'
            const REJECTED = 'rejected'

            function $promise(fn) {
            Object.assign(this, {
                state: PENDING,
                value: null,
                resolvedCallbacks: [],
                rejectedCallbacks: []
            })
            let that = this
            function resolve(value) {
                if (value instanceof $promise) {
                return value.then(resolve, reject)
                }
                setTimeout(() => {
                if (that.state === PENDING) {
                    that.state = RESOLVED
                    that.value = value
                    that.resolvedCallbacks.map(cb => cb(value))
                }
                }, 0)
            }

            function reject (value) {
                if (that.state === PENDING) {
                that.state = REJECTED
                that.value = value
                that.rejectedCallbacks.map(cb => cb(value))
                }
            }

            try {
                fn(resolve, reject)
            } catch(e) {
                reject(e)
            }

            }
            let promise2
            function resolutionProcedure(promise2, x, resolve, reject) {

            }
            $promise.prototype.then = function(onFulfilled, onRejected) {
            onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : r => r
            onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }
            let that = this
            if (that.state === PENDING) {
                return (promise2 = new $promise((resolve, reject) => {
                that.resolvedCallbacks.push(() => {
                    try {
                    const x = onFulfilled(that.value)
                    resolutionProcedure(prommise2, x, resolve, reject)
                    }catch (e) {
                    reject(e)
                    }
                })
                that.rejectedCallbacks.push(() => {
                    try {
                    const x = onRejected(that.value)
                    resolutionProcedure(promise2, x, resolve, reject)
                    } catch(e) {
                    reject(e)
                    }
                })
                }))
            }
            if (that.state === RESOLVED) {
                return (promise2 = new $promise((resolve, reject) => {
                try {
                    const x = onFulfilled(that.value)
                    resolutionProcedure(promise2, x, resolve, reject)
                }catch (e) {
                    reject(e)
                }
                }))
            }
            if (that.state === REJECTED) {
                return (promise2 = new $promie((resolve, reject) => {
                try {
                    const x = onRejected(that.value)
                    resolutionProcedure(promise2, x, resolve, reject)
                } catch(e) {
                    reject(e)
                }
                }))
            }
            }
            const p = new $promise((resolve,reject) => {
            resolve(1)
            })
            p.then(res => {
            console.log(res)
            })
        ```
11、push/concat：push在原数组后追加而concat是创建并返回新数组
12、箭头函数：
    1、没有内部作用域（使用外部作用域，不能隐式绑定到对象上，也不能bind, call, apply），也就是所谓this穿透
    2、不能作为构造函数使用（不能使用new实例化）
    3、没有augments对象，只能使用rest参数
    4、不能用作generator函数
    5、不适用this的隐式绑定
        ```
            let obj = {
                a: 2,
                fn: () => {
                    console.log(this.a)
                },
                fn1: function() {
                    console.log(this.a)
                }
            }
            obj.fn() // undefined
            obj.fn1() // 2
        ```
13、var/let/const
    1、无声明提前
    2、不可重复定义
    3、块级作用域
    4、暂时性死区
    5、声明的全局变量不会绑定到window对象上【var声明或非严格模式下未声明的变量自动绑定到window对象上】
    6、const声明的是常量，值或引用类型的指针不可修改
14、Object/Set去重的原理：值的唯一性（Object的key强转为string类型，Set的值可为任意类型）
15、扩展运算符：
    1、复制（浅拷贝）
    2、合并
    3、解构赋值生成新对象/数组
    4、可将拥有iterator接口的对象转化为数组（Map、Set、 Generator 、 String，调用Symbol.iterator接口实现）
16、Map/Set
    1、Set：操作方法：size/has/add/delete/clear 遍历方法：values/keys/entries/forEach
    2、Map：（有序集合）操作方法：size/get/set/has/delete/clear 遍历方法：values/keys/entries/forEach
17、Proxy/Reflect
    let watcher = new Proxy(target, {
        get(target, property, recevier) {
            Reflect.get(target, property, receiver)
        },
        set(target, property, value, recevier) {
            Reflect.set(target, property, value)
        }
    })
18、Class：原型继承与Class继承
    相同点：1、原型对象上的constructor指向prototype所在函数/类
           2、重写了所有子类的原型对象以及原型对象上的constructor
    不同点：
           1、必须使用new关键字创建实例
           2、原型对象上的属性不可枚举
           3、可以使用get set方法拦截属性值的存取
           4、属性名可以使用表达式
           5、使用extends实现继承
           6、子类的作用域基于父类构建，子类必须在constructor中调用super方法（继承父作用域）才能使用this，super作为对象使用时可以直接调用父类的属性方法

19、async ... await / generator ... yeild
    generator ... yeild ES6/ES2015
        1、语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。
        2、返回一个遍历器对象，可以依次遍历函数内部的每一个状态。
        3、形式
            1、function关键字与函数名之间有一个星号；
            2、函数体内部使用yield表达式，定义不同的内部状态

    async ... await ES8/ES2017
        1、是 Generator 函数的语法糖。（星号（*）替换成async，将yield替换成await，）
        2、对 Generator 函数的改进
            1、内置执行器（Generator 函数的执行必须靠执行器，所以才有了co模块）
            2、更好的语义
            3、更广的适用性。（co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）。）
            4、返回值是 Promise。
异步编程方法
    回调函数
    事件监听
    发布/订阅
    Promise 对象
    async ... await
    generator ... yeild

20、this绑定
    默认绑定    （不是以下三种情况）
    隐式绑定    （对象调用属性方法）
    显式绑定    （bind/call/apply)
    new绑定     (new实例化构造函数)

21、浅拷贝/深拷贝
22、原始数据类型
    undefined
    null
    boolean
    string 受物理内存限制
    number  【-2^53 + 1， 2^53 - 1】 // +- 2^53 -+ 1
    symbol
    BigInt

    Array 32位整型 [0, 2^32 - 1]

23、filter/map/reduce
    filter/map返回新数组
    reduce数组仅有一个参数，返回参数，不执行回调。reduce(fn, options)，第二个参数传入null，防止数组为空报错

24、ES6模块
    特点：静态加载/编译时加载，可引入宏和类型检测
    区别：ES6模块是静态加载（编译时加载），编译时就能确定依赖关系，可只加载部分属性方法，不支持动态导入
         CommonJs、AMD是运行时加载，运行时才能确定依赖关系，加载整个模块（对象），支持动态导入

    ES Module 是原生实现的模块化方案，与 CommonJS 有以下几个区别
        CommonJS 支持动态导入，也就是 require(${path}/xx.js)，后者目前不支持，但是已有提案
        CommonJS 是同步导入，因为用于服务端，文件都在本地，同步导入即使卡住主线程影响也不大。
        而ES Module是异步导入，因为用于浏览器，需要下载文件，如果也采用同步导入会对渲染有很大影响
        CommonJS 在导出时都是值拷贝，就算导出的值变了，导入的值也不会改变，所以如果想更新值，必须重新导入一次。
        但是 ES Module 采用实时绑定的方式，导入导出的值都指向同一个内存地址，所以导入值会跟随导出值变化
        ES Module 会编译成 require/exports 来执行的
25、静态方法与实例方法的区别
    1、静态方法属于整个类所有，因此调用它不需要实例化，可以直接调用（类.静态方法（））。实例方法必须先实例化，创建一个对象，才能进行调用（对象.实例方法（））。
    2、静态方法只能访问静态成员，不能访问实例成员；而实例方法可以访问静态成员和实例成员。
    3、在程序运行期间，静态方法是一直存放在内存中，因此调用速度快，但是却占用内存。实例方法是使用完成后由回收机制自动进行回收，下次再使用必须再实例化。
    4、一般来说，公共的函数、经常调用的可以写成静态方法，比如数据连接等（SqlHelper)。

26、防抖节流
        防抖
        function debounce(fn, delay) {
            if (typeof fn !== 'function') {
                throw new TypeError('error')
            }
            if (!delay || typeof delay !== 'number') {
                throw new TypeError('error')
            }

            let timer = null;
            return function() {
                if (timer) clearTimeout(timer);
                timer = setTimeout(() => {
                    fn.apply(this, [...arguments].slice());
                }, delay);
            };
            }

            // 2、节流函数体
            function throttle(fn, delay) {
                if (typeof fn !== 'function') {
                throw new TypeError('error')
                }
                if (!delay || typeof delay !== 'number') {
                throw new TypeError('error')
                }

                let canRun = true;
                return function() {
                if(!canRun) return
                canRun = false;
                let timer = setTimeout( () => {
                    clearTimeout(timer)
                    fn.apply(this, [...arguments].slice());
                    canRun = true;
                }, delay);
                };
            }

27、从输入到页面展示经历什么？

    输入 ---> 编码 ---> 页面卸载 ---> 重定向 ---> 开辟缓存空间 ---> DNS解析 ---> TCP连接 ---> Request/Response --->
    首字节渲染 ---> HTML解析生成DOM tree ---> css解析生成css tree ---> DOM tree + css tree 合成render tree ---> 下载script内的js，js执行



二、框架vue/vuex
1、vue 生命周期，四个阶段共触发八个生命钩子
    创建
        beforeCreate：初始化事件 & 生命周期
        created：初始化注入 & 检验 (data & props已经可以拿到，也就是可以在这里修改数据)
    挂载
        beforeMount：模版编译到render函数，生成真实DOM
        mounted：将真实DOM插入到浏览器DOM片段
    更新
        beforeUpdate：监听数据变动
        updated：虚拟DOM重新渲染，更新应用
    销毁
        beforeDestory：当手动调用vm.$destory()函数触发
        destoryed：解除绑定、销毁子组件以及事件监听器

2、数据双向绑定原理
    Object.defineProperty
    优点：深层次拦截，proxy仅拦截第一层
    缺陷：数组
    重写数组的方法：
                    'push',
                    'pop',
                    'shift',
                    'unshift',
                    'splice',
                    'sort',
                    'reverse'

3、编译过程
    1、将模板解析为 AST
    2、优化 AST
    3、将 AST 转换为 render 函数

4、NextTick 原理分析
    nextTick 可以让我们在下次 DOM 更新循环结束之后执行延迟回调，用于获得更新后的 DOM。
    在 Vue 2.4 之前都是使用的 microtasks，但是 microtasks 的优先级过高，
    在某些情况下可能会出现比事件冒泡更快的情况，但如果都使用 macrotasks 又可能会出现渲染的性能问题。
    所以在新版本中，会默认使用 microtasks，但在特殊情况下会使用 macrotasks，比如 v-on。
    对于实现 macrotasks ，会先判断是否能使用 setImmediate ，不能的话降级为 MessageChannel ，以上都不行的话就使用 setTimeout

        异步更新队列
    可能你还没有注意到，Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。

    例如，当你设置 vm.someData = 'new value'，该组件不会立即重新渲染。当刷新队列时，组件会在下一个事件循环“tick”中更新。多数情况我们不需要关心这个过程，但是如果你想基于更新后的 DOM 状态来做点什么，这就可能会有些棘手。虽然 Vue.js 通常鼓励开发人员使用“数据驱动”的方式思考，避免直接接触 DOM，但是有时我们必须要这么做。为了在数据变化之后等待 Vue 完成更新 DOM，可以在数据变化之后立即使用 Vue.nextTick(callback)。这样回调函数将在 DOM 更新完成后被调用。例如：

5、组件更新原理
    VNode的类型
        注释节点
        文本节点
        元素节点
        组件节点
        函数式组件节点
        克隆节点

    patch VNode/oldVNode

    创建节点：新的VNode中有而旧的oldVNode中没有，就在旧的oldVNode中创建。
        VNode类可以描述6种类型的节点，而实际上只有3种类型的节点能够被创建并插入到DOM中，它们分别是：元素节点、文本节点、注释节点。
    删除节点：新的VNode中没有而旧的oldVNode中有，就从旧的oldVNode中删除。
    更新节点：新的VNode和旧的oldVNode中都有，就以新的VNode为准，更新旧的oldVNode
        使用策略模式
        1、相同结点直接return
        2、静态结点直接return
        3、文本结点查看文本是否有更新，无更新则return，有更新则替换文本
        4、有子结点则触发updateChildren函数
            updateChildren
            新增
            删除
            修改

6、依赖收集
7、vuex
    <!-- actions: 动作函数的集合，是一个架构概念，一个函数无论做什么都可以，可以是异步，只要触发commit就行 -->
    <!-- mutations：数据更改函数的集合，只能为同步，是为了(time-traval)追踪 -->
    <!-- mutation获取一个同步的数据，更新state，state更新视图 -->

    state，驱动应用的数据源；
    view，以声明方式将 state 映射到视图；
    actions，响应在 view 上的用户输入导致的状态变化。

    Vue Components ---dispatch---> Actions ---commit---> Mutations ---mutate---> State ---render---> Vue Components
8、computed 和 watch 区别
    计算属性：合法js表达式
    computed 是计算属性，依赖其他属性计算值，并且 computed 的值有缓存，只有当计算值变化才会返回内容。
    watch 监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作。
    所以一般来说需要依赖别的属性来动态获得值的时候可以使用 computed，对于监听到值的变化需要做一些复杂业务逻辑的情况可以使用 watch。

9、extend 能做什么
    扩展组件生成一个构造器，通常会与 $mount 一起使用

10、组件通信

    1、props/$emit
    2、$emit/$on    vue-bus
    3、vuex
    4、provide/inject
    5、$attrs/$listeners
    6、$parent/$children ref


vue的渲染过程：
  vue.js会自动通过状态生成DOM，并将其输出到页面上显示出来。
  我们通过模版来描述状态与DOM之间的映射关系

angular1脏检查机制：
  $$watcher收集所有变量的值，$digest循环会触发脏检查。
  当$digest循环发生的时候，它会遍历当前$scope及其所有子$scope上已注册的所有watchers函数。

#1、什么是变化侦测
  应用运行时内部状态不断发生改变，需要不停地重新渲染。
  vue在虚拟DOM这个对象上监听了每个key的值的存取（Object property get set方法）


#2、如何追踪变化
  双向数据绑定
  3、如何收集依赖
  4、依赖收集在哪里
  5、依赖是谁
  6、什么是watcher
  7、递归侦测所有key
  8、关于Object
  // watcher
  Object.defineProperty
  Proxy

```
  if (Array.isArray(value)) {
    oberveArray(value)
  } else {
    walk(value)
  }

  function walk(item) {
    let keys = Object.keys(item)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(item, keys[i])
    }
  }

  function oberveArray(value) {
    for (let i = 0; i < value.length; i++) {
      walk(value[i])
    }
  }
  function defineReactive(data, key) {
    let val = data[key]
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get: function() {
        // dep.depend()

        return val
      },
      set: function(newVal) {

        // dep.notify()
      }
    })

  }

```

proxy
````
let watcher = new Proxy(item, {
  enumerable: true,
  configrable: true,
  get: function(target, key, receiver) {
    Reflect.get(target, key, receiver)
  },
  set: function(target, key, value, receiver) {
    Reflect.set(target, key, value, receiver)
  }
})

````

# 3、watch方法的实现
//deep
// immediate
// 返回unwatch() 取消观察数据


```
Vue.prototype.$watch = function(expOrFn, cb, options) {
  const vm = this
  options = options || {}

  const watcher = new Watcher(vm, expOrFn, cb, options)
  if (options.immediate) {
    cb.call(vm, watcher.value)
  }
  return function unwatchFn() {
    watcher.teardown()
  }
}

class Watcher {
  constructor(vm, expOrFn, cb, options) {
    this.vm = vm
    this.cb = cb
    this.value = this.get()
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn
    } else {
      this.getter = parsePath(expOrFn)
      // parsePath 读取keyPath 如：a.b.c.d
    }

  }
}
```
```
  function watch(newVal, oldVal) {
    // deep
  }
  if (Array.isArray(value)) {
    observeArray(value)
  } else {
    walk(value)
  }

  function walk(value) {
    let keys = Object.keys(value)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(value, keys[i])
    }
  }

  function observeArray(value) {
    for (let i = 0; i < value.length; i++) {
      walk(value[i])
    }
  }

  function defineReactive(data, key) {
    let val = data[key]
    Object.defineProperty(data, key, {
      enumerable: true,
      configrable: true,
      get: function() {
        // Dep.depend()
        return val
      },
      set: function(newVal) {
        watch(newVal, val)
        // Dep.notify()
      }
    })
  }
```
#4、虚拟DOM
  通过状态生成一个虚拟节点树，然后使用虚拟节点树进行渲染，渲染之前会拿新生成的虚拟节点树和上一次的虚拟节点树比较，只渲染不同的部分
  1、vnode类型
    注释节点
    文本节点
    克隆节点// 优化静态节点 插槽节点
    元素节点
    组件节点
    函数式组件

  2、patch
    patching算法
    每次都从根结点开始比较，先比较同级节点再递归
    新建节点 new vnode 有而old vnode无
    删除节点 old vnode中存在，new vnode不存在
    修改节点

    // 流程：patch ---> oldVnode是否存在，不存在，则使用vnode创建节点并插入到视图。

    patchVnode：src/core/vdom/patch.js

    1、判断新旧是否同一节点  if (oldVnode === vnode) return
    2、判断节点是否能克隆
        判断虚拟节点是否挂有真实DOM （vnode.elm）
        克隆vnode和真实元素节点（elm = vnode.elm = oldVnode.elm）
    3、判断新旧是否异步placeholder节点
    4、判断新旧是否是静态节点
        vnode、oldVnode是否静态节点，key是否相等，是否克隆节点，是否第一次创建，都是则return
        isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    5、判断新旧vnode上是否有data属性
    6、判断新节点是否文本节点 vnode.text
        如果是，且文本变化则使用setTextContent更新
        如果不是：
          1、判断新旧节点是否都存在children
          2、如果都存在，且新旧children不 ===，则调用updateChildren
          3、如果只存在新children，新增节点、清除旧节点文本
          4、如果只存在旧children，删除节点
          5、如果只存在旧children且为文本节点，则清除文本

  3、updateChildren
    1、新旧节点都存在children，则递归
        1、检查旧左节点是否被移除，是则右子节点左移
        2、检查旧右节点是否被移除
        3、检查新旧左节点是否相同
        4、检查新旧右节点是否相同
        5、检查旧左节点和新右节点是否相同
        6、检查旧右节点和新做节点是否相同
        7、检查是否有新节点存在于旧节点，没有则创建新节点。有则移动节点，缺失的则新建节点插入

    2、旧右节点没有，新增节点
    3、新右节点没有，删除节点
    // 2、oldStartIdx > oldEndIdx oldStartIdx初始值0，新增节点
    // 3、newStartIdx > newEndIdx 删除节点



    patchVnode
        <!-- 开发环境还有个注释节点 -->
      1、同一节点吗？
      2、能克隆吗？
      3、是异步placeholder吗？
      4、是静态节点吗？
      5、有data属性吗？
      6、是文本节点吗？
          1、有children吗？
          2、都有：比较children 不同则updateChildren
          3、旧的没有：新增、清除文本
          4、新的没有：删除
          5、都没有：清除文本

    updateChildren：vnode VS oldVnode
      1、都有children吗？有则递归
          1、检查oldVnode始终节点是否缺失                                  // 1-2检查旧节点头尾是否被删除
          2、检查vnode与oldVnode始终节点是否相同，patchVnode新旧子节点       // 3-4比较新旧节点头尾是否相同 patchVnode
          3、检查新旧终始节点、始终节点是否相同，patchVnode新旧子节点，移动节点 // 5-6假定元素反序 ，比较新旧节点是否相同 patchVnode 移动节点
          4、检查旧节点中是否有新节点，没有则新建，有则移动节点并补齐
      2、没有则看是否要新增或删除

#6、生命周期
  赋值在哪个生命周期

#7、组件之间传值方式
  1、props/emit 自定义事件
  2、Vue.prototype.$bus = new Vue()
    $bus.$on(eventName, value)
    $bus.$emit(eventName, value)
  3、vuex
  4、$parent/$children ref
  5、inject/provide 单向传递，broadcast FORM表单验证
    原理：inject在props/data之前初始化，provide在props/data之后初始化
  6、$attrs/$listeners = 自定义事件

#8、路由
#9、vuex
  单向数据流
#10、发布订阅模式
#11、函数式编程
#12、函数可里化
#13、指令原理
  v-if
    v-if v-else
    在模版编译阶段会生成一个三元表达式。最后根据变量的值来选择生成节点并渲染
    需要销毁/创建真实DOM，有GC消耗
  v-show
    v-show 的元素始终会被渲染并保留在 DOM 中。
    v-show 只是简单地切换元素的 CSS 属性 display。

    v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销

  v-for：默认使用“就地更新”的策略，不移动元素
    当 Vue 正在更新使用 v-for 渲染的元素列表时，它默认使用“就地更新”的策略。
    如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，
    而是就地更新每个元素，并且确保它们在每个索引位置正确渲染
  v-on
#14、代码生成器
#15、key的作用
  1、通过key辨识新旧vnode是否相同
  2、用 key 管理可复用的元素，基于key排列元素，无key则就地修改元素

  key 的特殊属性主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。
  如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法。
  而使用 key 时，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。

  有相同父元素的子元素必须有独特的 key。重复的 key 会造成渲染错误。

  #16、手写vue-router
  #17、手写vuex

  #18、源码解析

  ```
                                                              -----> parse
      new Vue() ---init----> $mount ---执行---> compile() ----|-----> optimize
                                                  编译         -----> generate
                                                                |
                                                                |
                                                                v
                                                          render function
                                                                |
   Watcher <--- Collect as Dependency=--- getter <-----touch----|
      | ^                                                       |
      | |---- notify ---- setter                                |
      |                                                       render
    update                                                      |
      |                                                         |
      |                                                         v
      |   ------------------------------------------------ Virtual DOM Tree
      |   |
      v   v     ----> patchVnode
      patch() --
                -----> updateChildren
                          |
                          |
                          v
                         DOM

  ```
  ```
  render(h) { // h === createElement = 返回虚拟DOM Tree
    return h() // createElement('table', { attrs: { border: '' } ...} )
  }


  ```
  1、编译
    1、parse：使用正则解析template(vue的指令（v-xx @ : {{}} ...变量等等），形成抽象语法树AST
    2、optimize：标记一些静态节点，用做后面的性能优化，在diff的时候直接略过
    3、generate：把第一部分生成的AST转化为渲染函数render function
  2、响应式
    vue核心内容，初始化的时候通过defineProperty定义对象getter、setter，设置通知机制，
    当编译生成的渲染函数被实际渲染的时候，会触发getter进行依赖收集，在数据变化的时候，触发setter进行更新



19、vue-router
    1、功能：
        嵌套的路由/视图表
        模块化的、基于组件的路由配置
        路由参数、查询、通配符
        基于 Vue.js 过渡系统的视图过渡效果
        细粒度的导航控制
        带有自动激活的 CSS class 的链接
        HTML5 历史模式或 hash 模式，在 IE9 中自动降级
        自定义的滚动条行为

    2、基本使用
    ```
    <html>
        ...vue.js vue-router
        <body>
            <div id="app">
                <head>
                    <p>
                        <!-- 使用 router-link 组件来导航. -->
                        <!-- 通过传入 `to` 属性指定链接. -->
                        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
                        <router-link to="/foo">home</router-link>
                        <router-link to="/bar">about</router-link>
                    </p>
                </head>
                <content>
                    <router-view></router-view>
                </content>
            </div>
        </body>
    </html>

    const Foo = {template: '<div>foo</div>'}
    const Bar = {template: '<div>bar</div>'}

    const routes = [
        {
            path: '/foo',
            component: Foo
        },
        {
            path: '/bar',
            component: Bar
        }
    ]

    const router = new VueRouter({
        routes
    })

    const app = new Vue({
        router
    }).$mount('#app')

    ...
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }

    ```
    3、动态路由匹配
        1、“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params
            ```
            const routes = [
                {
                    path: '/user/:username/post/:post_id',
                    component: `<div>{{ $route.params.username }} - {{ $route.params.post_id }}</div>`
                }
            ]

            const router = new VueRouter({
                routes
            })

            ----------------------------------------------------------------------------------------------------
            ----------------------------------------------------------------------------------------------------
            模式	                           匹配路径	                        $route.params
            ----------------------------------------------------------------------------------------------------
            /user/:username	                   /user/evan	                      { username: 'evan' }
            ----------------------------------------------------------------------------------------------------
            /user/:username/post/:post_id	   /user/evan/post/123	     { username: 'evan', post_id: '123' }
            ----------------------------------------------------------------------------------------------------
            ----------------------------------------------------------------------------------------------------

            ```
        2、响应路由参数的变化：组件复用
            当使用路由参数时，例如从 /user/foo 导航到 /user/bar，原来的组件实例会被复用。
            因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。

            ```
                // 复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化) $route 对象：

                const User = {
                    template: '...',
                    watch: {
                        '$route' (to, from) {
                        // 对路由变化作出响应...
                        }
                    }
                }

                // 或者使用 2.2 中引入的 beforeRouteUpdate 导航守卫：

                const User = {
                    template: '...',
                    beforeRouteUpdate (to, from, next) {
                        // react to route changes...
                        // don't forget to call next()
                    }
                }

            ```
        3、捕获所有路由或 404 Not found 路由
            通配符的路由应该放在最后
            当使用一个通配符时，$route.params 内会自动添加一个名为 pathMatch 参数
            ```
                // 常规参数只会匹配被 / 分隔的 URL 片段中的字符。如果想匹配任意路径，我们可以使用通配符 (*)：
                {
                    // 会匹配所有路径
                    path: '*'
                },
                {
                    // 会匹配以 `/user-` 开头的任意路径
                    path: '/user-*'
                }
                --------------------------------------------------------------------------------------------------
                --------------------------------------------------------------------------------------------------
                当使用通配符路由时，请确保路由的顺序是正确的，也就是说含有通配符的路由应该放在最后。
                路由 { path: '*' } 通常用于客户端 404 错误。如果你使用了History 模式，请确保正确配置你的服务器。

                当使用一个通配符时，$route.params 内会自动添加一个名为 pathMatch 参数。它包含了 URL 通过通配符被匹配的部分：

                // 给出一个路由 { path: '/user-*' }
                this.$router.push('/user-admin')
                this.$route.params.pathMatch // 'admin'
                // 给出一个路由 { path: '*' }
                this.$router.push('/non-existing')
                this.$route.params.pathMatch // '/non-existing'

            ```
            4、高级匹配模式
                vue-router 使用 path-to-regexp 作为路径匹配引擎，所以支持很多高级的匹配模式，
                例如：可选的动态路径参数、匹配零个或多个、一个或多个，甚至是自定义正则匹配

            5、匹配优先级
                有时候，同一个路径可以匹配多个路由，此时，匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高









#三、安全
1、XSS
    类型：1、反射型：URL注入、cookie注入
            2、储存型：表单/评论非法字符串/DOM上的事件
            3、基于DOM
    防御：1、转译，用户的输入检查，服务端的输出检查
         2、禁止XSS过滤，res.writehead(X-XSS-Protection: 0)
         3、CSP：Content-Security-Policy: default-src/ img-src
            只允许加载本站资源/限定网络协议/不允许加载任何来源框架
         4、httpOnly 防止劫取 Cookie

2、CSRF
    CSRF（Cross-site request forgery）跨站请求伪造：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。
    利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的

    几种常见的攻击类型
        GET类型的CSRF
            GET类型的CSRF利用非常简单，只需要一个HTTP请求，一般会这样利用：
        POST类型的CSRF
            这种类型的CSRF利用起来通常使用的是一个自动提交的表单
        链接类型的CSRF
            链接类型的CSRF并不常见，比起其他两种用户打开页面就中招的情况，这种需要用户点击链接才会触发。
            这种类型通常是在论坛中发布的图片中嵌入恶意链接，或者以广告的形式诱导用户中招，攻击者通常会以比较夸张的词语诱骗用户点击
    CSRF的特点
        攻击一般发起在第三方网站，而不是被攻击的网站。被攻击的网站无法防止攻击发生。
        攻击利用受害者在被攻击网站的登录凭证，冒充受害者提交操作；而不是直接窃取数据。
        整个过程攻击者并不能获取到受害者的登录凭证，仅仅是“冒用”。
        跨站请求可以用各种方式：图片URL、超链接、CORS、Form提交等等。部分请求方式可以直接嵌入在第三方论坛、文章中，难以进行追踪。

    防御：
    阻止不明外域的访问
        同源检测：使用Origin Header确定来源域名。使用Referer Header确定来源域名
        Samesite Cookie
    提交时要求附加本域才能获取的信息
        CSRF Token
        验证码：双重Cookie验证，自定义HTTP头并验证

    1、- __验证码__，CSRF 攻击往往是在用户不知情的情况下构造了网络请求。而验证码会强制用户必须与应用进行交互，才能完成最终请求
    2、- __Referer Check__，根据 HTTP 协议，在 HTTP 头中有一个字段叫 Referer，它记录了该 HTTP 请求的来源地址。通过 Referer Check，可以检查请求是否来自合法的"源"。
    3、- __Token 验证__，CSRF 攻击之所以能够成功，是因为攻击者可以完全伪造用户的请求，该请求中所有的用户验证信息都是存在于 Cookie 中，
    因此攻击者可以在不知道这些验证信息的情况下直接利用用户自己的 Cookie 来通过安全验证。要抵御 CSRF，关键在于在请求中放入攻击者所不能伪造的信息，
    并且该信息不存在于 Cookie 之中。可以在 HTTP 请求中以参数的形式加入一个随机产生的 token，并在服务器端建立一个拦截器来验证这个 token，
    如果请求中没有 token 或者 token 内容不正确，则认为可能是 CSRF 攻击而拒绝该请求。
    4、自定义HTTP头并验证
3、CDN、DNS劫持

# 四、HTTP
1、缓存
    强缓存
        Expires: Wed, 21 Oct 2015 07:28:00 GMT
                 日期 时间戳，设置Cahe-Control自动忽略
                 修改本地时间可能会导致缓存时间失效
        Cache-Control: public max-age: 60 * 60 * 1000 （毫秒数）
                       public：响应可被任何对象缓存（代理服务器，客户端），即使不可缓存的内容
                       private：仅单个用户可缓存，不能作为共享缓存
                       no-cache：强制交给原始服务器验证
                       no-store：不存储客户端或服务端任何内容
                       禁止缓存：Cache-Control: no-cache no-store must-revalidate


    协商缓存
            ETag / If-None-Match
            Last-Modified / If-Modified-Since

2、304
    1、浏览器请求资源时首先命中Expires和Cache-Control，Expires受制于本地时间，如果本地时间修改可能导致缓存失效。
    可以通过Cache-Control：max-age 60 * 1000 指定最大生命周期，未过期，状态返回200，但是不会请求数据，浏览器标记from cache
    2、强缓存失效，进入协商缓存阶段，首先验证ETag可以保证每个资源是唯一的，
    资源变化都会导致ETag变化，服务器会根据客户端发送的If-None-Match（响应的Etag的值交给If-None-Match）的值
    来判断是否命中缓存
    3、Last-Modified/ If-Modified-Since阶段，第一次请求服务端会响应一个Last-Modified（资源最后修改时间）
    作为请求时If-Modified-Since的值传回给服务端判断是否命中缓存

        不同：强缓存不向服务器发请求，协商缓存向服务器发起请求
        同：都从客户端读取文件

3、HTTP1.x - 2 - 3区别(附录二)
    1、多路复用：TCP通道并发处理多个请求，减少创建TCP通道开销，增加请求数量
    2、数据传输方式：http1为文本格式，http2为二进制解析起来更高效
    3、头部压缩：HTTP2采用HPACK算法对header的数据进行压缩
    4、服务器推送


4、CDN
    1、什么是CDN？
        储存着静态资源副本的一组服务器，就近响应请求
        CDN(内容分发网络)，指的是一组分布在各地区的服务器。这些服务器储存着数据（静态资源）的副本，
        因此服务器可以根据哪些服务器离用户距离最近来满足数据请求
    2、好处：1、降低时延
            2、减轻自身服务器请求压力
            3、减少静态资源缓存设置（CDN已经配置了恰当的缓存设置）
    3、原理：
        域名劫持，服务器群组就近返回静态资源副本
            1、用户向浏览器提供域名
            2、浏览器调用域名解析库，CDN劫持，解析为域名的CNAME值，全局负载均衡DNS解析，CNAME值再次解析为IP（IP：最近服务器IP）
            3、浏览器对缓存服务器发起请求
            4、cache服务器根据内部专用DNS解析出真实服务器IP并发起请求
            5、获取到数据，缓存，返回给浏览器
            6、浏览器响应数据，缓存，展示

5、运营商HTTP、CDN劫持
    1、使用HTTPS
    2、设置协议、端口、IP、域名白名单，屏蔽黑名单资源

6、http协议中301和302的区别
    301代表资源的永久重定向
    302代表资源的临时重定向

7、 HTTP协议是什么？
    HTTP协议是超文本传输协议的缩写，英文是Hyper Text Transfer Protocol。是从万维网服务器传输超文本到本地浏览器的传送协议。

    原理
        HTTP是应用层，TCP传输层
        HTTP是一个基于TCP/IP通信协议来传递数据（HTML 文件, 图片文件, 查询结果等）的请求应答协议。
        HTTP协议工作于客户端-服务端架构为上。浏览器作为HTTP客户端通过URL向HTTP服务端即WEB服务器发送所有请求。Web服务器根据接收到的请求后，向客户端发送响应信息。
    HTTP特点：
        1、简单快速：客户向服务器请求服务时，只需传送请求方法和路径。请求方法常用的有GET、HEAD、POST。
        2、灵活：HTTP允许传输任意类型的数据对象。传输的类型由Content-Type加以标记。
        3.无连接：限制每次连接只处理一个请求。服务器处理完请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。
        4.无状态：无状态是指协议对于事务处理没有记忆，后续处理需要前面的信息，则必须重传。

    常用的请求方法：
        GET:请求指定的页面信息，并返回实体主体。
        POST:向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的建立和/或已有资源的修改。
        HEAD:类似于get请求，只不过返回的响应中没有具体的内容，用于获取报头
        PUT:从客户端向服务器传送的数据取代指定的文档的内容。
        DELETE:请求服务器删除指定的页面。
    请求报文构成
        http请求由请求行、消息报头、请求正文构成。
        请求行以一个方法符号开头，以空格分开，后面跟着请求的URL和协议的版本。
    响应报文构成
        HTTP响应也由状态行、消息报头、空行和响应正文构成。
    三次握手
        1、探测服务器响应是否存在
        2、服务器回应
        3、数据传输
    四次挥手
        每次握手都有一次挥手，多了传输完成挥手

8、 http与https的区别？
    HTTPS是HTTP协议的安全版本，HTTP协议的数据传输是明文的，是不安全的，HTTPS使用了SSL/TLS协议进行了加密处理。


9、post和get的区别：
    都包含请求头请求行，post多了请求body。
    get多用来查询，请求参数放在url中，不会对服务器上的内容产生作用。post用来提交，如把账号密码放入body中。
    GET是直接添加到URL后面的，直接就可以在URL中看到内容，而POST是放在报文内部的，用户无法直接看到。
    GET提交的数据长度浏览器限制，而POST没有。
10、响应状态码

    状态码分类
        1XX- 信息型，服务器收到请求，需要请求者继续操作。
        2XX- 成功型，请求成功收到，理解并处理。
        3XX - 重定向，需要进一步的操作以完成请求。
        4XX - 客户端错误，请求包含语法错误或无法完成请求。
        5XX - 服务器错误，服务器在处理请求的过程中发生了错误。

    常见状态码
        200 OK - 客户端请求成功
        301 - 资源（网页等）被永久转移到其它URL
        302 - 临时跳转
        400 Bad Request - 客户端请求有语法错误，不能被服务器所理解
        401 Unauthorized - 请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用
        404 - 请求资源不存在，可能是输入了错误的URL
        500 - 服务器内部发生了不可预期的错误
        503 Server Unavailable - 服务器当前不能处理客户端的请求，一段时间后可能恢复正常。
11、https加密机制
    两种加密方式
    对称加密：使用同样的密钥进行加密和解密
    非对称加密：公钥私钥，用对方公钥加密，用自己的私钥解
12、HTTPS 原理
    ① 客户端将它所支持的算法列表和一个用作产生密钥的随机数发送给服务器 [2]  ；
    ② 服务器从算法列表中选择一种加密算法，并将它和一份包含服务器公用密钥的证书发送给客户端；该证书还包含了用于认证目的的服务器标识，服务器同时还提供了一个用作产生密钥的随机数 [2]  ；
    ③ 客户端对服务器的证书进行验证（有关验证证书，可以参考数字签名），并抽取服务器的公用密钥；然后，再产生一个称作 pre_master_secret 的随机密码串，并使用服务器的公用密钥对其进行加密（参考非对称加 / 解密），并将加密后的信息发送给服务器 [2]  ；
    ④ 客户端与服务器端根据 pre_master_secret 以及客户端与服务器的随机数值独立计算出加密和 MAC密钥（参考 DH密钥交换算法） [2]  ；
    ⑤ 客户端将所有握手消息的 MAC 值发送给服务器 [2]  ；
    ⑥ 服务器将所有握手消息的 MAC 值发送给客户端 [2]  。

13、常见http头
    Gneral
        Request URL: http://linyu520.club/
        Request Method: GET
        Status Code: 304 Not Modified
        Remote Address: 47.240.11.223:80
        Referrer Policy: no-referrer-when-downgrade
    Response Headers
        Content-Encoding: gzip
        Content-Type: text/html
        Date: Fri, 03 Apr 2020 16:32:45 GMT
        ETag: W/"5ce19984-3956"
        Last-Modified: Sun, 19 May 2019 17:59:32 GMT
        Server: nginx/1.10.3 (Ubuntu)
    Requset Headers
        Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
        Accept-Encoding: gzip, deflate
        Accept-Language: zh-CN,zh;q=0.9,en;q=0.8
        Cache-Control: max-age=0
        Connection: keep-alive
        Host: linyu520.club
        If-Modified-Since: Sun, 19 May 2019 17:59:32 GMT
        If-None-Match: W/"5ce19984-3956"
        Upgrade-Insecure-Requests: 1
        User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1



五、浏览器

1、说一下浏览器中的事件机制。
    DOM2级事件规定时间流包括三个阶段：事件捕获阶段、处于目标阶段、事件冒泡阶段
    高版本浏览器都会在捕获阶段触发事件对象上的事件
    事件捕获：根结点到目标
    事件冒泡：目标到根结点

2、简述下浏览器的EventLoop
    JS是单线程，为提高效率，设置了一个辅线程用来处理延时/异步任务，等有结果了再交还主线程执行，不断循环

    指的是计算机系统的一种运行机制。
    JavaScript语言就采用这种机制，来解决单线程运行带来的一些问题。

    在程序中设置两个线程：一个负责程序本身的运行，称为"主线程"；另一个负责主线程与其他进程（主要是各种I/O操作）的通信，被称为"Event Loop线程"（可以译为"消息线程"）。
    Event Loop是一个程序结构，用于等待和发送消息和事件

3、宏任务、微任务

    |宏任务|浏览器|Node|
    |               :---: | :---: | :---: |
    |                I/O  |     √ |  √    |
    |           setTimeout|     √ |    √  |
    |          setInterval|     √ |    √  |
    |         setImmediate|     x |   √   |
    |requestAnimationFrame|     √ |  x    |
    |||

    |微任务|浏览器|Node|
    |:---:|:---:|:---:|
    |process.nextTick|x|√|
    |MutationObserver|√|x|
    |promise.then catch finally|√|√|
    |||

    优先级
    process.nextTick promise.then setTimeout setImmediate

    MutationObserver promise setTimeout/setInterval requestAnimationFrame
    MutationObserver 与promise.then同级优先于promise.catch promise.finally

4、跨域
    ### CORS
        CORS 需要浏览器和后端同时支持。IE 8 和 9 需要通过 XDomainRequest 来实现。

        浏览器会自动进行 CORS 通信，实现 CORS 通信的关键是后端。只要后端实现了 CORS，就实现了跨域。

        服务端设置 Access-Control-Allow-Origin 就可以开启 CORS。 该属性表示哪些域名可以访问资源，
        如果设置通配符则表示所有网站都可以访问资源。

        虽然设置 CORS 和前端没什么关系，但是通过这种方式解决跨域问题的话，会在发送请求时出现两种情况，分别为简单请求和复杂请求。

    ### document.domain
        该方式只能用于二级域名相同的情况下，比如 a.test.com 和 b.test.com 适用于该方式。

        只需要给页面添加 document.domain = 'test.com' 表示二级域名都相同就可以实现跨域

    ### postMessage
        这种方式通常用于获取嵌入页面中的第三方页面数据。一个页面发送消息，另一个页面判断来源并接收消息

        // 发送消息端
        window.parent.postMessage('message', 'http://test.com')
        // 接收消息端
        var mc = new MessageChannel()
        mc.addEventListener('message', event => {
        var origin = event.origin || event.originalEvent.origin
        if (origin === 'http://test.com') {
            console.log('验证通过')
        }
        })
5、浏览器缓存：Cookie/localStorage/sessionStorage （附录五：浏览器 cookie/session设置）
    | 特性 | Cookie | localStorage | sessionStorage |
    |:------| :------ | :------| :------ |
    |应用|身份标识|存储数据|存储数据|
    |数据的生命周期|（一般由服务器生成）可自由设置失效时间。|	数据持久化|存在于一次session会话，关闭页面后销毁|
    |数据结构|键值对的集合|键值对的集合|键值对的集合|
    |存放数据	|每条4KB，一般50条（IE6 20），客户端最多300条|	一般为5MB|同（localStorage）|
    |存放位置|客户端|客户端|客户端|
    |作用域|（可设置）本域和任何父域|在所有同源窗口中共享|当前会话窗口|
    |与服务器端通信|携带在HTTP头中参与通信，影响请求响应时间|	仅存在于客户端（即浏览器）中，不参与通信|同（localStorage）|
    |数据提交|被动（全部提交）|主动（选择性）|主动（选择性）|
    |安全性|明文（不安全）|明文（不安全）|明文（不安全）|

6、addEventListener
    event.stopImmediatePropagation();
        阻止事件冒泡并且阻止相同事件的其他侦听器被调用。
        如果有多个相同类型事件的事件监听函数绑定到同一个元素，当该类型的事件触发时，它们会按照被添加的顺序执行。
    event.stopPropagation();
        阻止捕获和冒泡阶段中当前事件的进一步传播。
    event.preventDefault();
        阻止默认动作
        Event 接口的 preventDefault()方法，告诉user agent：如果此事件没有被显式处理，它默认的动作也不应该照常执行。此事件还是继续传播，除非碰到事件侦听器调用stopPropagation() 或stopImmediatePropagation()，才停止传播。

        ```
            target.addEventListener(type, listener, options);
            target.addEventListener(type, listener, useCapture);
            target.addEventListener(type, listener, useCapture, wantsUntrusted  );  // Gecko/Mozilla only

            type
                表示监听事件类型的字符串。
            listener
                当所监听的事件类型触发时，会接收到一个事件通知（实现了 Event 接口的对象）对象。listener 必须是一个实现了 EventListener 接口的对象，或者是一个函数。有关回调本身的详细信息，请参阅The event listener callback
            options 可选
                一个指定有关 listener 属性的可选参数对象。可用的选项如下：
            capture:  Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。
            once:  Boolean，表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除。
            passive: Boolean，设置为true时，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。
            mozSystemGroup: 只能在 XBL 或者是 Firefox' chrome 使用，这是个 Boolean，表示 listener 被添加到 system group。
            useCapture  可选
                Boolean，在DOM树中，注册了listener的元素， 是否要先于它下面的EventTarget，调用该listener。 当useCapture(设为true) 时，沿着DOM树向上冒泡的事件，不会触发listener。当一个元素嵌套了另一个元素，并且两个元素都对同一事件注册了一个处理函数时，所发生的事件冒泡和事件捕获是两种不同的事件传播方式。事件传播模式决定了元素以哪个顺序接收事件。进一步的解释可以查看 事件流 及 JavaScript Event order 文档。 如果没有指定， useCapture 默认为 false 。
        ```







# 六、工具
webpack
优点：
  1、加载顺序  传统的script标签引入多个第三方库不但增加请求数且需要根据依赖关系控制引入顺序
  2、依赖关系   无法立即体现脚本执行依赖第三方库，第三方库缺失或引入顺序错误不易察觉【执行脚本与第三方库依赖关系一目了然】
  3、剔除未引入的代码   传统方式可能引入未被使用过对三方库【可提出未使用过对代码，例如工具库】

1、webpack与SSR
2、如何设置缓存
    1、生产环境
        1、输出文件的文件名
            文件版本缓存：启用chunkhash以便资源更新浏览器可以获取更新版本 { output: { filename: '[name].[chunkhash].js' } }
        2、提取模板
            <!-- CommonsChunkPlugin 可以用于将模块分离到单独的文件中。
            将 webpack 的样板(boilerplate)和 manifest 提取出来。
            将第三方库(library)（例如 lodash 或 react）提取到单独的 vendor chunk 文件中 -->
        3、模块标识符(Module Identifiers)
            模块hash基于module.id，module.id变化会导致module的hash变更
            模块的增减会导致其他未变动的文件指纹变更
            可以使用插件 NamedModulesPlugin或HashedModuleIdsPlugin（时间短，生成环境推荐）
    2、开发环境构
        optimization { cacheGrounps: {} }
        cache-loader：在一些性能开销较大的 loader 之前添加此 cache-loader，以将结果缓存到磁盘里。


3、如何实现代码分割 code spliting
    有三种常用的代码分离方法：
        入口起点：使用 entry 配置手动地分离代码。
        防止重复：使用 SplitChunksPlugin 去重和分离 chunk。
        动态导入：通过模块的内联函数调用来分离代码。

        SplitChunksPlugin
            默认webpack将根据以下条件自动分割块：
                可以共享新块，或者模块来自node_modules文件夹
                新的块将大于30kb（在min + gz之前）
                按需加载块时并行请求的最大数量将小于或等于5
                初始页面加载时并行请求的最大数量将小于或等于3
                有模块动态导入import()
            配置缓存组
                缺省值将所有模块从分配node_modules给一个名为的缓存组，vendors并将所有以至少2个块重复的模块分配给一个缓存组default。
                可以将一个模块分配给多个缓存组。然后，优化将选择具有较高priority（priority选项）或形成更大块的缓存组。
            有4个选项可配置条件：
                minSize （默认值：30000）块的最小大小。
                minChunks （默认值：1）在拆分之前共享模块的最小块数
                maxInitialRequests （默认值为3）入口点的最大并行请求数
                maxAsyncRequests （默认为5）按需加载时并行请求的最大数量
            ```
                optimization: {
                    splitChunks: {
                        chunks: "async",                        // 必须三选一： "initial" | "all"(默认就是all) | "async"
                        minSize: 30000,                         // 最小体积，默认30kb
                        minChunks: 1,                           // 最少引用次数 默认1次
                        maxAsyncRequests: 5,                    // 按需加载最大并行请求数，默认5
                        maxInitialRequests: 3,                  // 初始页面最大并行请求数，默认3
                        automaticNameDelimiter: '~',
                        name: true,
                        cacheGroups: {                          // 缓存设置
                            vendors: {
                                test: /[\\/]node_modules[\\/]/, // 匹配到的资源缓存
                                <!-- test: /react/, -->
                                priority: -10                   // 缓存组优先级
                            },
                            default: {
                                minChunks: 2,
                                priority: -20,
                                reuseExistingChunk: true,
                                name: vendor
                            }
                        }
                    }
                }
            ```

4、版本差异
    版本1升级版本2:
        1、新增tree-shaking
        2、配置文件对象化
        3、插件写法优化
        4、支持原生ES6模块语法
        5、2.6.0 动态语句import(/* webpackChunkName: "myName" */ /* webpackMode: "lazy" */ 'module')
        通过注释法可以修改webpackChunkName以及懒加载模式
    版本2升级版本3:
        1、新增scope-hoisting // 函数/作用域合并
        2、内置webpack-dev-server
    版本3升版本4:
        1、默认生产环境开起了很多代码优化（minify, splite）
        2、开发时开启注释和验证，并加上了evel devtool
        3、生产环境不支持watching，开发环境优化了打包的速度
        4、生产环境开启模块串联（原ModulecondatenationPlugin）
        5、自动设置process.env.NODE_EVN到不同环境，也就是不使用DefinePlugin了
        6、新增mode，设置development/production。如果mode设置none，所有默认设置都去掉了。
        7、模块拆分，按需加载，CommonsChunkPlugin开始，删除了，改为使用optimization.splitChunks和optimization.runtimeChunk选项

        8、资源压缩，去掉UglifyJsPlugin 开发环境配置 optimization.minimize为true就行，生成环境默认为true
        9、compilation.mainTemplate.applyPluginsWaterfall is not a function  // yarn add html-webpack-plugin -D
        <!-- 10、去除extract-text-webpack-plugin -->




5、优化可以做哪些，【打包加速/构建性能】【文件瘦身、懒加载、预加载、按需加载、同步代码、异步代码】
    1、构建性能（通用）
        1、loaders
            使用HappyPack开启多个子进程，默认3个
            由于HappyPack 对file-loader、url-loader 支持的不友好，所以不建议对该loader使用。

            将 loaders 应用于最少数的必要模块中。
            使用 include/exclude 字段仅将 loader 模块应用在实际需要用其转换的位置中
            ```
                {
                    test: /\.js$/,
                    include: path.resolve(__dirname, "src"),
                    loader: "babel-loader"
                }
            ```
        2、Bootstrap
            每个额外的 loader/plugin 都有启动时间。尽量少使用不同的工具。
            尽量减少 resolve.modules, resolve.extensions, resolve.mainFiles, resolve.descriptionFiles 中类目的数量，因为他们会增加文件系统调用的次数。
            如果你不使用 symlinks ，可以设置 resolve.symlinks: false (例如 npm link 或者 yarn link).
            如果你使用自定义解析 plugins ，并且没有指定 context 信息，可以设置 resolve.cacheWithContext: false 。
        3、Dlls
            使用 DllPlugin 将更改不频繁的代码进行单独编译。这将改善引用程序的编译速度，即使它增加了构建过程的复杂性。
        4、Smaller = Faster
            减少编译的整体大小，以提高构建性能。尽量保持 chunks 小巧。

            使用 更少/更小 的库。
            在多页面应用程序中使用 SplitChunksPlugin
            移除不使用的代码。
            只编译你当前正在开发部分的代码。
        5、Worker Pool
            thread-loader 可以将非常消耗资源的 loaders 转存到 worker pool 中。
        6、持久化缓存
            使用 cache-loader 启用持久化缓存。使用 package.json 中的 "postinstall" 清除缓存目录。
            在一些性能开销较大的 loader 之前添加此 cache-loader，以将结果缓存到磁盘里。
        7、开发环境
            1、增量编译
                使用 webpack 的监听模式。不要使用其他工具来监听你的文件和调用 webpack 。在监听模式下构建会记录时间戳并将信息传递给编译让缓存失效。
                在某些设置中，监听会回退到轮询模式。有许多监听文件会导致 CPU 大量负载。在这些情况下，你可以使用 watchOptions.poll 来增加轮询的间隔。
            2、在内存中编译，版本4以经内置webpack-dev-server
                以下几个实用工具通过在内存中进行代码的编译和资源的提供，但并不写入磁盘来提高性能:
                webpack-dev-server
                webpack-hot-middleware
                webpack-dev-middleware
            3、Devtool： cheap-module-eval-source-map
                需要注意的是不同的 devtool 的设置，会导致不同的性能差异。
                "eval" 具有最好的性能，但并不能帮助你转译代码。
                如果你能接受稍差一些的 mapping 质量，可以使用 cheap-source-map 选项来提高性能
                使用 eval-source-map 配置进行增量编译。
                => 在大多数情况下，cheap-module-eval-source-map 是最好的选择。
            4、避免在生产环境下才会用到的工具：hash/chunkhash 关闭代码压缩
            5、最小化入口 chunk
                下述代码块将只提取包含 runtime 的 chunk ，其他 chunk 都作为子模块:
                ```
                    // splitChunks
                    {
                        name: "manifest",
                        minChunks: Infinity
                    }
                ```
        8、生产环境
            1、多个编译时
                当进行多个编译时，以下工具可以帮助到你:

                parallel-webpack: 它允许编译工作在 worker 池中进行。
                cache-loader: 缓存可以在多个编译时之间共享。
            2、Source Maps
                Source maps 真的很消耗资源。你真的需要他们？
        9、工具相关问题
            下列工具存在某些可能会降低构建性能的问题。

            Babel
                项目中的 preset/plugins 数量最小化。
            TypeScript
                在单独的进程中使用 fork-ts-checker-webpack-plugin 进行类型检查。
                配置 loaders 跳过类型检查。
                使用 ts-loader 时，设置 happyPackMode: true / transpileOnly: true。
            Sass
                node-sass 中有个来自 Node.js 线程池的阻塞线程的 bug。 当使用 thread-loader 时，需要设置 workerParallelJobs: 2。

    2、开发环境
        缓存
            在一些性能开销较大的 loader 之前添加此 cache-loader，以将结果缓存到磁盘里。
        公共库分离再缓存
        开启并行

    3、生产环境
        懒加载
        预加载
        按需加载
        代码分割
        控制并行
        tree-shaking

6、实现原理
    1、实现了一个函数webpack_require
    2、webpack_require函数来达到自己的模块化
    3、将代码缓存在 installedModules里
    4、再将模块整理为对象传进来
        转对象的过程中首先被转为AST，然后对AST进一步加工，最后再转译回代码
        key是文件路径，value是包裹的代码字符串，最后再将代码内部的依赖最终替换成webpack_require
        (import 首先被替换成require再将require替换成webpack_require)

    手写bundle
        1、获取配置options
        2、模块分析，读取入口文件，分析代码
        3、分析代码中的依赖，使用@babel/paser分析代码，返回AST，再使用@babel/traverse辅助遍历深度依赖
        4、生成一个对象（key: 在项目中的路径, value: 代码)
            入口文件，入口文件路径
            依赖模块，依赖模块引入路径以及在项目中的路径
        5、返回浏览器可执行代码
    ```
        const fs = require('fs')
        const path = require('path)
        const parser = require('@babel/parser')
        const traverse = require('@babel/traverse').default
        const babel = require('@babel/core')

        const moduleAnalyser = (filename) => {
            const content = fs.readFileSync(filename, 'utf-8')
            const AST = parser.parse(content, {
                sourceType: 'module'
            })
        }
        const dependencies = {}
        tranverse(AST, {
            ImportDeclaration({ node }) {
                const dirname = path.dirname(filename)
                const newFile = './' + path.join(dirname, node.source.value)
                dependencies[node.source.value] = newFile
            }
        })
        const { code } = babel.transformFromAst(AST, null, {
            presets: ['@babel/preset-env']
        })
        return {
            filename,
            dependencies,
            code
        }

        const makeDependenciesGraph = (entry) => {
            const entryModule = moduleAnalyser(entry)
            const graphArray = [ entryModule ]

            for (let i = 0; i < graphArray.length; i++ ) {

                const { dependencies } = graphArray[i]
                if (dependencies) {
                    for (let j in dependencies) {
                        graphArray.push(moduleAnalyser(dependencies[j]))
                    }
                }
            }
            const graph = {}
            graphArray.forEach(item => {
                graph[item.filename] = { ...item }
            })
            return graph
        }

        const generateCode = (entry) => {
            const graph = JSON.stringify(makeDependenciesGraph(entry)); return `
                (function(graph){
                    function require(module) {
                        function localRequire(relativePath) {
                            return require(graph[module].dependencies[relativePath]);
                        }
                        var exports = {}; (function(require, exports, code){
                        eval(code)
                        })(localRequire, exports, graph[module].code); return exports;
                };
                require('${entry}') })(${graph});
            `;
        }

    ```

7、热更新原理
    1、HMR 修改样式表
        借助于 style-loader 的帮助，CSS 的模块热替换实际上是相当简单的。当更新 CSS 依赖模块时，此 loader 在后台使用 module.hot.accept 来修补(patch) <style> 标签。

    2、在应用程序中
        通过以下步骤，可以做到在应用程序中置换(swap in and out)模块：

        应用程序代码要求 HMR runtime 检查更新。
        HMR runtime（异步）下载更新，然后通知应用程序代码。
        应用程序代码要求 HMR runtime 应用更新。
        HMR runtime（同步）应用更新。
        你可以设置 HMR，以使此进程自动触发更新，或者你可以选择要求在用户交互时进行更新。

    3、在编译器中
        除了普通资源，编译器(compiler)需要发出 "update"，以允许更新之前的版本到新的版本。"update" 由两部分组成：

        更新后的 manifest(JSON)
        一个或多个更新后的 chunk (JavaScript)
        manifest 包括新的编译 hash 和所有的待更新 chunk 目录。每个更新 chunk 都含有对应于此 chunk 的全部更新模块（或一个 flag 用于表明此模块要被移除）的代码。

        编译器确保模块 ID 和 chunk ID 在这些构建之间保持一致。通常将这些 ID 存储在内存中（例如，使用 webpack-dev-server 时），但是也可能将它们存储在一个 JSON 文件中。

    4、在模块中
        HMR 是可选功能，只会影响包含 HMR 代码的模块。举个例子，通过 style-loader 为 style 样式追加补丁。为了运行追加补丁，style-loader 实现了 HMR 接口；当它通过 HMR 接收到更新，它会使用新的样式替换旧的样式。

        类似的，当在一个模块中实现了 HMR 接口，你可以描述出当模块被更新后发生了什么。然而在多数情况下，不需要强制在每个模块中写入 HMR 代码。如果一个模块没有 HMR 处理函数，更新就会冒泡(bubble up)。这意味着一个简单的处理函数能够对整个模块树(complete module tree)进行更新。如果在这个模块树中，一个单独的模块被更新，那么整组依赖模块都会被重新加载。

        有关 module.hot 接口的详细信息，请查看 HMR API 页面。

    5、在 HMR Runtime 中
        这些事情比较有技术性……如果你对其内部不感兴趣，可以随时跳到 HMR API 页面或 HMR 指南。

        对于模块系统的 runtime，附加的代码被发送到 parents 和 children 跟踪模块。在管理方面，runtime 支持两个方法 check 和 apply。

        check 发送 HTTP 请求来更新 manifest。如果请求失败，说明没有可用更新。如果请求成功，待更新 chunk 会和当前加载过的 chunk 进行比较。对每个加载过的 chunk，会下载相对应的待更新 chunk。当所有待更新 chunk 完成下载，就会准备切换到 ready 状态。

        apply 方法将所有被更新模块标记为无效。对于每个无效模块，都需要在模块中有一个更新处理函数(update handler)，或者在它的父级模块们中有更新处理函数。否则，无效标记冒泡，并也使父级无效。每个冒泡继续，直到到达应用程序入口起点，或者到达带有更新处理函数的模块（以最先到达为准，冒泡停止）。如果它从入口起点开始冒泡，则此过程失败。

之后，所有无效模块都被（通过 dispose 处理函数）处理和解除加载。然后更新当前 hash，并且调用所有 "accept" 处理函数。runtime 切换回闲置状态(idle state)，一切照常继续。

8、打包分析【图表分析、模块依赖分析】
9、代码使用率分析
10、手写loader
    不能使用箭头函数
    资源文件默认转为UTF-8字符串传给loader，可以是指raw接收原始的buffer
    loader总是从右到左被调用（实际执行），执行loader之前从左到右调用loader上的pitch方法 【pitching 跳跃阶段】
    loader是一个声明式函数，获取代码并进一步修饰，在返回处理后的源码
    loader是一个声明式，参数为获取到的文件的代码，loader的option参数会自动绑定到this上下文到this.query上
    webpack官方参与者文档详细规定了loader需要暴露的属性方法
    ```
    {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    <!-- 简写： use: path.resolve(__dirname, './testLoader.js'), -->
                    use: [
                        {
                            loader: xxx,
                            options: {
                                name: 'name123xxx'
                            }
                        }
                    ]
                }
            ]
        }
    }
    ```
    ```
        module.exports = function (source) { // 读取的文件代码
            // loader option自动绑定到this.query
            console.log(this.query)
            // 处理源代码并返回
            return source.replace('console.log', 'Print')
        }
    ```

    同步loader sync-loader
    异步loader async-loader
    this.callback
        无论是使用return还是this.callback都可以同步返回转换后的content内容
        异步loader使用this.async()获取callback函数
        ```
        module.exports = function (content, map, meta) {
            const callback = this.async()
            someAsyncOption(content, function(err, result) {
                if (err) return calback(err)
                callback(null, result, map, meta)
            })
        }
        ```

11、手写plugin
    compiler：编译器
    compilation：当前编译版本
    ```
        module export class CopyRightWebpackPlugin {
            <!-- constructor (options) {
                console.log(options)
            } -->
            apply (compiler) {
                <!-- 同步 -->
                compiler.hooks.compilation.tap(
                    'CopyRightWebpackPlugin',
                    compilation => {
                        console.log('compilation')
                    }
                )
                <!-- 异步 -->
                compiler.hooks.emit.tapAsync(
                    'CopyRightWebpackPlugin',
                    (compilation, cb) => {
                        compilation.assets['copyright.txt'] = {
                            source: function () {
                                return 'copy right xxx'
                            },
                            size: function () {
                                return 1024
                            }
                        }
                        cb()
                    }
                )
            }
        }
    ```

1、webpack

    2、tree-shaking配置，
        支持ES6模块（静态编译）规范
        需要关闭source-map，否则不生效，或者修改为cheap-module-source-map // dev使用cheap-module-eval-source-map
        options添加optimization: { usedExports: true } // 默认所有模块进行摇树操作
        package.json文件中添加sideEffects: [ "*.css", "@babel/polyfill"] // 剔除全局引入的模块不进行摇树操作

    3、package.json启动配置
        "script": {
            “analyse”: "webpack --profile --json > stats.json --config ./config..", // 生成分析文件
            // http://webpack.github.io/analyse 文件分析网站
            // webpack-chart
            "test": "webpack --env.development --config ./",
            "dev": "webpack-dev-server --config ./config/webpack.dev.js", // --config 指定options文件
            "build": "webpack --config ./config/webpack.pro.js",
        }

        webpack.config.js中可以获取到env
        ```
            module.exports = env => {
                if (env && env.development) {
                    // development
                } else {
                    // production
                }
            }
        ```
    4、生产环境浏览器JS兼容
        不全局导入@babel/polyfile，体积过大，9K左右
        可使用@babel/plugin-transform-runtime

    5、文件目录
        --src
            --assets
            --view
        --config
            --webpack.base.js // module.exports = { ...baseConfig }
            --webpack.dev.js
            --webpack.pro.js
        --dist
        --.babelrc
        --index.html
        --package.json

    6、webpack.dev.js // 或者在base中根据env判断引入
        ```
            const merge = require('webpapck-merge')
            const baseConfig = require('webpack.base.js')
            const devConfig = {
                devtool: ...,
                devServer: ...
            }
            module.exports = merge(baseConfig, devConfig)
        ```
    7、code spliting // 代码分割
        // 第三库、公共库体积肯比较大
        业务代码与第三库拆分
        官方案例：异步导入第三方库
        ```
            function getComponent() {
                return import('lodash').then(({default: _}) => {
                    let ele = document.createElement('div)'
                    ele.innerHTML = _.join({'a', 'b', 'c'})
                    return ele
                })
            }
            getCompoent().then(ele => {
                document.body.appendChild(ele)
            })
        ```
        ```
            {
                entry: {
                    // 很多script时如何添加deffer async属性
                    lodash: require('lodash'),
                    main: [name].js
                },
                optimization: {
                    // 代码分割
                    splitChunks: {
                        // 同步iitial、异步async加载代码
                        chunks: 'all', // 默认支持异步，这里使用all，无论同步还是异步加载代码都分割
                        miniSize: 30000, //  小于30k的不分割
                        maxSize: 0, // 对模块进行二次分割使用，不推荐使用
                        minChunks: 1, //打包生成的chunk文件最少有几个chunk引用了这个模块
                        maxAsyncRequests: 5, // 最大异步请求数，默认5
                        maxInitialRequests: 3, // 最大初始化请求数，入口文件同步请求，默认3
                        automaticNameDelimiter: '-', // 打包分割符
                        name: true, // 打包后的名称，除了布尔值，还可以接收一个函数function
                        cacheGroups: { // 缓存组
                            venders: {
                                test: /[\\/]node_modules[\\/]/,
                                name: 'vender', // 要缓存的 分割出来的chunk名称
                                priority: -10, // 缓存组优先级 数字越大，优先级越高
                            }
                        }
                    }
                }
            }
        ```
    8、webpack懒加载
    9、webpack预加载
        区别：
            prefetch在网络空闲的时候加载
            preload主进程之后加载
        prefetch(预取):将来某些导航下可能需要的资源
        ```
             如何使用prefetch (魔法注释)
             import(/*webpackPrefetch: true*/ "a.js").then(({ default: func}) => {
                 // 需要用到 npm install --save-dev @babel/plugin-syntax-dynamic-import
                 // 新版本已经内置，不需要引入
                 func()
             })

        ```
    10、webpack按需加载
    11、浏览器network面板 ctrl + p调出代码利用率Coverage分析面板
    12、使用import('./xxx)异步加载代码，可以开启预加载 import(/*webpackPrefetch: true*/ './xxx')

    options组成：
        entry： './src/index.js' || { main: './src/index.js' }
                // @String/Array/Object
        output: { path: path.resolve(__dirname, '../dist'), fileename: [name].js, publicPath: 'https://.xxx' }
                // [name] 占位符，使用原文件name
                // publicPath 为输出文件添加前缀
        loader： 模块转换器，用于把模块原内容按照需求转换成新内容
        plugin
        ```
        // html-webpack-plugin
        // clearn-webpack-plugin
        // mini-css-extract-plugin
        {
            entry: {
                index: index.js,
                detail: detail.js
            },
            output: {
                path: 'xxx',
                filename: [name].js
            },
            mode: 'development',
            devtool: 'cheap-module-eval-source-map', // 映射原文件，错误快速定位
            devServer: {
                contentBase: './dist', // 资源文件目录
                open: true, // 自动打开浏览器
                hot: true,
                // 即便HMR不生效，浏览器也不自动刷新，就开启hotOnly
                hotOnly: true,
                port: 8000,
                proxy: {
                    '/api': {
                        target: 'http://xxxx'
                    }
                }
            },
            module: {
                rules: [
                    {
                        test: /\.(jpe?g|png|bmp|webp|gif)$/,
                        use: {
                            loader: 'url-loader', // 输出base64 // file-loader
                            options: {
                                name: '[name].[md5:hash:5][ext]', // [name]保留文件名、[ext]后缀名 、[md5:hash:5] 输出文件类型，文件指纹长度
                                ouputPath: 'assets/xxx',
                                limit: 2048
                            }
                        }
                    },
                    {
                        test: /\.(css|less|scss)$/,
                        use: [
                            MiniCssExtractPlugin.loader, // 单独生成css文件
                            <!-- 'style-loader', -->
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    ident: 'postcss',
                                    plugins: [
                                        require('autoprefixer)({...options})
                                    ]
                                }
                            },
                            'sass-loader'
                        ],
                        // 自下往上，自右往左 postcss-loader模块autoprefixer 自动添加前缀
                        // 也可以使用postcss.config.js文件配置
                    },
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        include: path.resolve(__disname, ./src''),
                        loader: 'babel-loader',
                        options: { // 可以放在.babelrc文件，自动读取.babelrc
                            /* presets: [
                                [
                                    '@babel/preset-env',
                                    { // 按需注入 @babel/polyfill
                                    // polyfill是注入到全局变量window/global下，会污染全局环境， // 第三库就不合适
                                    // 所以推荐闭包方式：@babel/plugin-transform-runtime
                                        targets: {
                                            edge: '17',
                                            firefox: '60',
                                            chrome: '67',
                                            safari: '11.1'
                                        },
                                        useBuiltIns: 'usage',
                                        corejs: 2

                                    }
                                ],
                                // 配置react
                                'babel/preset-react'
                            ], */
                            'plugins': [
                                [
                                    '@babel/plugin-transform-runtime',
                                    {
                                        'absolutetime': false,
                                        // 'corejs': 2,
                                        'helpers': true,
                                        'regenerator': true,
                                        'useESMOdules': false
                                    }
                                ]
                            ]
                        }
                    }
                ]
            },
            optimization: { // tree-shaking
                // package.json
                // "sideEffects": // 正常对所有模块进行tree shaking
                // [
                //      "*.css", // 需要全部导入的，不配置将默认不导入 // import ‘./xx.css’ 默认摇出不导入
                //      "@babel/polyfill" // 默认导入a，其他模块摇出不导入  // import { a } from './xx
                // ]
                usedExports: true
            },
            plugins: [
                new HtmlWebpackPlugin({
                    title: 'xxx',
                    template: './index.html',
                    inject: 'body',
                    filename: [chunk].html
                }),
                new HtmlWebpackPlugin({
                    title: 'detail.xxx',
                    template: './index.html',
                    inject: 'body',
                    filename: detail.html,
                    chunks: ['detail']
                    <!-- files: {
                        js: ['detail.js],
                        css: ''
                    } -->
                }),
                new CleanWebpackPlugin(), // 自动清理打包文件
                new webpack.HotModuleReplacementPlugin() // html局部刷新，会保留状态，css js
            ]
        }
        ```

H5: PWA + SSR





















# 附录一：JS基础

8、创建对象的7大模式
    1、工厂模式
        函数/接口名首字母小写
        优点：工厂模式抽象了创建具体对象的过程，用函数封装特定接口创建对象的细节
        缺点：不能共享公有属性
        实现：【 1、创建函数（函数名即为接口）。
                2、函数内部显式创建一个新对象。
                3、为新对象添加属性。
                4、返回新对象。
               】
            创建新实例，直接调用函数接口，传入参数即可。实例的constructor指向原生构造函数Object
            ```
                function createPerson(name, age) {
                    let o = new Object()
                    o.name = name
                    o.age = age
                    o.sayName = function() {
                        console.log(this.name)
                    }
                    return o
                }
                let person1 = createPerson('person1', 30)
                let person2 = createPerson('person2', 26)
            ```
    2、构造函数模式
        函数/接口名首字母大写
        优点：相比工厂函数模式，构造函数模式构建新实例使用new操作符，省去了函数中创建与返回对象
        缺点：不能共享公有属性
        实现：【 1、创建函数
                2、在函数作用域上添加属性
              】
            创建新实例，使用new操作符，调用接口并传入参数
            实例的constructor指向构造函数
            ```
                function Person(name, age) {
                    this.name = name
                    this.age = age
                    this.sayName = function () {
                        console.log(this.name
                    }
                }
                let p1 = new Person('p1', 20)
                let p2 = new Person('p2', 22)
            ```
        new 操作符
            1、新建对象，新对象的construtor指向构造函数
            2、将构造函数的作用域赋给了新对象（所以this指向了新对象）
            3、执行构造函数内的代码（为新对象添加属性）
            4、返回对象
            ```
                function myNew(fn) {
                    let o = Object.create(null)
                    o.__proto__ = fn.prototype
                    let res = fn.call(o)
                    if (typeof res === 'object' || typeof res === 'function') return res
                    return o
                }
            ```
    3、原型模式
        优点：所有子实例自动共享原型上的属性和方法
        缺点：如果共享的是函数将比较适合，而不适合引用值，例如数组，若实例对数组进行添加操作，最后对结果是操作的累加
        实现：重写原型（prototype指向的原型对象），或在原型对象上添加属性方法
        ```
            function Person() {}
            Person.prototype = {
                constructor: Person,
                sayName: function() {
                    console.log(this.name)
                }
            }
            let person1 = new Person()
        ```

            Person.constructor == Function && Person.prototype.constructor == Person
            person1.constructor == Person (person1.__proto__.constructor)
            person1.prototype === undefined && person1.__proto__ =             == Person.prototype
            判断实例是否继承了构造函数的原型对象：Person.prototype.isPrototypeOf(person1)返回true则是
            判断谁是构造函数只需判断其constructor是否等等于Function即可
            获取原型的值：Object.getPrototypeOf(person1) // {...}
            判断属性是否是实例上的：person1.hasOwnProperty('name') // true
            Object.getOwnPropertyDescriptor(person1, prop)只能获取实例属性的描述符 // { value: "person1", writable: true, enumerable: true, configurable: true, __proto__: {...} }
            Object.getOwnPropertyDescriptor(person1.__proto__, prop)
            Object.getOwnPropertyDescriptors(person1) // { sayName: { value: ... }, ...  }
            Object.getOwnPropertyDescriptors(person1.__proto__)
            in/for-in/Object.defineProperty/Object.keys [key, key, ...]/Object.values [value, ...]/
            Object.entries // [[key, value], [key, value], ...]
            person1.propertyIsEnumerable('name) // true

    4、组合使用构造函数模式和原型模式
        优点：集构造函数模式和原型模式之长
        实现：构造函数模式定义实例属性，原型模式定义方法和共享属性
        ```
            function Person (name, age) {
                this.name = name
                this.age = age
            }
            Person.prototype.sayName = function () {
                console.log(this.name)
            }
            let person1 = new Person('person1', 18)
            let person2 = new Person('person2', 28)
        ```
    5、动态原型模式
        优点：把所有信息封装在了构造函数中，并能够根据条件决定是否初始化原型
        实现：
        ```
            function Person (name, age) {
                this.name = name
                this.age = age
                if (typeof this.sayName !== 'function') {
                    Person.prototype.sayName = function () {
                        console.log(this.name)
                    }
                }
            }
        ```
    6、寄生构造函数模式
        实现：使用new操作符实例化工厂模式函数
        ```
        function Person (name, age) {
            let o = new Object()
            o.name = name
            o.age = age
            o.sayName = function () {
                console.log(this.name)
            }
        }
        let person1 = new Person('person1', 20)
        ```
    7、稳妥构造函数模式
        只暴露方法，不暴露其他属性。不使用this和new
        稳妥对象指的是没有公共属性
        特点：1、实例方法不引用this。2、不使用new操作符调用构造函数。
        实现：
        ```
        function Person (name, age) {
            let o = new Object()
            // 可以在这里定义私有变量和函数
            o.sayName = function () {
                console.log(name)
            }
            return o
        }
        let friend = Person('friend1', 22)
        friend.sayName()
        // friend中保存的是一个稳妥对象，除了调用sayName()之外，没有别的方式可以访问其数据成员
        ```

8、继承：
    1、原型链继承
        实现：
        ```
            function SuperType() {
                this.property = true
            }
            function SubType() {
                this.subproperty = false
            }
            SubType.property = new SuperType()
            SubType.property.getSubProperty = function () {
                return this.subproperty
            }

            let sub = new SubType()
        ```
    2、借用构造函数
        优点：可以向超类传参，超类为引用类型也不影响，构造函数内部属性方法为私有
        实现：通过call，apply扩充作用域
        ```
            function SuperType (name) {
                this.name = name
            }
            function SubType() {
                SuperType.call(this, 'subname')
                this.age = 20
            }
            let sub = new SubType()
        ```
    3、组合使用原型继承和构造函数
        优点：既可以使用原型的优点，子类共享超类上的公有属性方法又可以获得构造函数传参优势以及私有属性
        缺点：调用两次超类函数
        ```
            function SuperType(name) {
                this.name = name
            }
            SuperType.prototype.sayName = function() {
                console.log(this.name)
            }

            function SubType () {
                SuperType.call(this, 'subname')
                this.age = 30
            }
        ```
    4、原型式继承
        实现：创建函数，再在函数内部创建一个临时性构造函数
        ```
         function object (o) {
            function F () {}
            F.prototype = o
            return new F()
         }

        ```
        ES5新增Object.create方法规范原型式继承

    5、寄生式继承
        实现：创建函数
             在函数内部新创建一个对象对新传进来的对象进行浅拷贝
             为新对象添加属性方法
             返回新对象
        ```
            function createAnother (original) {
                let clone = Object(original)
                clone.sayHi = function () {
                    console.log('hi')
                }
                return clone
            }
        ```
    6、组合原型和寄生继承

# 附录三：安全

web攻击技术
我了解到的web安全方面的一些攻击有:
   XSS攻击
   CSRF攻击
   网络劫持攻击
   控制台注入代码
   钓鱼
XSS攻击(cross-site script)
1、XSS攻击形式：

主要是通过html标签注入，篡改网页，插入恶意的脚本，前端可能没有经过严格的校验直接就进到数据库，数据库又通过前端程序又回显到浏览器

例如一个留言板：
如果内容是
    hello!<script type="type/javascript src="恶意网址"></script>
 这样会通过前端代码来执行js脚本，如果这个恶意网址通过cookie获得了用户的私密信息，那么用户的信息就被盗了
2、攻击的目的：

攻击者可通过这种方式拿到用户的一些信息，例如cookie 获取敏感信息，甚至自己建网站，做一些非法的操作等；或者，拿到数据后以用户的身份进行勒索，发一下不好的信息等。

3、攻击防御

首先前端要对用户输入的信息进行过滤，可以用正则，通过替换标签的方式进行转码或解码
例如<> 空格 & '' ""等替换成html编码

  htmlEncodeByRegExp:function (str){
       var s = "";
       if(str.length == 0) return "";
       s = str.replace(/&/g,"&amp;");
       s = s.replace(/</g,"&lt;");
       s = s.replace(/>/g,"&gt;");
       s = s.replace(/ /g,"&nbsp;");
      s = s.replace(/\'/g,"&#39;");
      s = s.replace(/\"/g,"&quot;");
      return s;
 },

其次在java后端还要进行安全防御，具体可以看一下这个http://blog.csdn.net/qq_34120041/article/details/76890092
CSRF攻击(cross site request forgery,跨站请求伪造)
CSRF也是一种网络攻击方式，比起xss攻击，是另外一种更具危险性的攻击方式，xss是站点用户进行攻击，而csrf是通过伪装成站点用户进行攻击，而且防范的资源也少，难以防范

csrf攻击形式：攻击者盗用用户的身份信息，并以用户的名义进行发送恶意的请求等，例如发邮件，盗取账号等非法手段

例如：你登录网站，并在本地种下了cookie
     如果在没退出该网站的时候 不小心访问了恶意网站，而且这个网站需要你发一些请求等
     此时，你是携带cookie进行访问的，那么你的重在cookie里的信息就会被恶意网站捕捉到，那么你的信息就被盗用，导致一些不法分子做一些事情

攻击防御：
1、验证HTTP Referer字段

在HTTP头中有Referer字段，他记录该HTTP请求的来源地址，如果跳转的网站与来源地址相符，那就是合法的，如果不符则可能是csrf攻击，拒绝该请求
2、在请求地址中添加token并验证

这种的话在请求的时候加一个token，值可以是随机产生的一段数字，
token是存入数据库之后，后台返给客户端的，如果客户端再次登录的时候，
后台发现token没有，或者通过查询数据库不正确，那么就拒绝该请求

如果想防止一个账号避免在不同的机器上登录，那么我们就可以通过token来判断，
如果a机器登录后，我们就将用户的token从数据库清除，从新生成，
那么另外一台b机器在执行操作的时候，token就失效了，只能重新登录，这样就可以防止两台机器登同一账号
3、在HTTP头中自定义属性并验证

如果说通过每次请求的时候都得加token那么各个接口都得加很麻烦，
那么我们通过http的请求头来设置token
例如：
    $.ajax({
        url: '/v1/api',
        dataType: 'json',
        data: param,
        type:'post',
        headers: {'Accept':'application/json','Authorization':tokenValue}
        success:function(res){
            console.log(res)
        }
    })
网络劫持攻击
网络劫持攻击这种攻击主要是通过一些代理服务器，或者wifi等有中间件的网络请求，进行劫持，不法分子通过这种方式获取到用户的信息，那么我们该怎么防御呢？
最好是采用https进行加密，这种通过请求网络地址攻击的我们可以通过对http进行加密，来防范，这样不法分子即使或得到，也无法解密

控制台注入代码
这种就是不法分子通过各种提示诱骗用户在控制台做一些操作，从而获取用户信息，那么我们最好在控制台对用户进行友好的提示，必要轻易相信这种提示灯。

钓鱼
钓鱼！一个传统的攻击方式，也是通过人性的弱点来诱骗用户登录一些不法网站，我们要科学上网，不要被钓...

# 附录四：HTTP

# HTTP/1.1的缺陷
# 1.高延迟--带来页面加载速度的降低
网络延迟问题主要由于队头阻塞(Head-Of-Line Blocking),导致带宽无法被充分利用。
队头阻塞是指当顺序发送的请求序列中的一个请求因为某种原因被阻塞时，在后面排队的所有请求也一并被阻塞，
会导致客户端迟迟收不到数据。针对队头阻塞,人们尝试过以下办法来解决:

将同一页面的资源分散到不同域名下，提升连接上限。 Chrome有个机制，对于同一个域名，默认允许同时建立 6 个 TCP持久连接，
使用持久连接时，虽然能公用一个TCP管道，但是在一个管道中同一时刻只能处理一个请求，在当前的请求没有结束之前，
其他的请求只能处于阻塞状态。另外如果在同一个域名下同时有10个请求发生，那么其中4个请求会进入排队等待状态，直至进行中的请求完成。

Spriting合并多张小图为一张大图,再用JavaScript或者CSS将小图重新“切割”出来的技术。

内联(Inlining)是另外一种防止发送很多小图请求的技巧，将图片的原始数据嵌入在CSS文件里面的URL里，减少网络请求次数。

# 2.无状态特性--带来的巨大HTTP头部

由于报文Header一般会携带"User Agent""Cookie""Accept""Server"等许多固定的头字段（如下图），
多达几百字节甚至上千字节，但Body却经常只有几十字节（比如GET请求、
204/301/304响应），成了不折不扣的“大头儿子”。Header里携带的内容过大，在一定程度上增加了传输的成本。
更要命的是，成千上万的请求响应报文里有很多字段值都是重复的，非常浪费。

# 3.明文传输--带来的不安全性
# 4.不支持服务器推送消息

# SPDY 协议与 HTTP/2 简介
HTTP/1.1有两个主要的缺点：安全不足和性能不高，由于背负着 HTTP/1.x 庞大的历史包袱,所以协议的修改,
兼容性是首要考虑的目标，否则就会破坏互联网上无数现有的资产。如上图所示,
SPDY位于HTTP之下，TCP和SSL之上，这样可以轻松兼容老版本的HTTP协议(将HTTP1.x的内容封装成一种新的frame格式)，
同时可以使用已有的SSL功能。

SPDY 协议在Chrome浏览器上证明可行以后，就被当作 HTTP/2 的基础，主要特性都在 HTTP/2 之中得到继承。

# 1.二进制传输
HTTP/2传输数据量的大幅减少,主要有两个原因:以二进制方式传输和Header 压缩。我们先来介绍二进制传输,HTTP/2 采用二进制格式传输数据，
而非HTTP/1.x 里纯文本形式的报文 ，二进制协议解析起来更高效。HTTP/2 将请求和响应数据分割为更小的帧，并且它们采用二进制编码。
HTTP/2 中，同域名下所有通信都在单个连接上完成，该连接可以承载任意数量的双向数据流。每个数据流都以消息的形式发送，而消息又由一个或多个帧组成。
#多个帧之间可以乱序发送，根据帧首部的流标识可以重新组装。

# 2.Header 压缩
HTTP/2并没有使用传统的压缩算法，而是开发了专门的"HPACK”算法，在客户端和服务器两端建立“字典”，用索引号表示重复的字符串，
还采用哈夫曼编码来压缩整数和字符串，可以达到50%~90%的高压缩率。

具体来说:

在客户端和服务器端使用“首部表”来跟踪和存储之前发送的键-值对，对于相同的数据，不再通过每次请求和响应发送；

首部表在HTTP/2的连接存续期内始终存在，由客户端和服务器共同渐进地更新;

每个新的首部键-值对要么被追加到当前表的末尾，要么替换表中之前的值
# 3.多路复用
在 HTTP/2 中引入了多路复用的技术。多路复用很好的解决了浏览器限制同一个域名下的请求数量的问题，同时也接更容易实现全速传输，
毕竟新开一个 TCP 连接都需要慢慢提升传输速度。

# 4.Server Push
HTTP2还在一定程度上改变了传统的“请求-应答”工作模式，服务器不再是完全被动地响应请求，也可以新建“流”主动向客户端发送消息。比如，在浏览器刚请求HTML的时候就提前把可能会用到的JS、CSS文件发给客户端，减少等待的延迟，这被称为"服务器推送"（ Server Push，也叫 Cache push）
# 5.提高安全性
出于兼容的考虑，HTTP/2延续了HTTP/1的“明文”特点，可以像以前一样使用明文传输数据，不强制使用加密通信，不过格式还是二进制，只是不需要解密。

但由于HTTPS已经是大势所趋，而且主流的浏览器Chrome、Firefox等都公开宣布只支持加密的HTTP/2，所以“事实上”的HTTP/2是加密的。
也就是说，互联网上通常所能见到的HTTP/2都是使用"https”协议名，跑在TLS上面。HTTP/2协议定义了两个字符串标识符：“h2"表示加密的HTTP/2，
“h2c”表示明文的HTTP/2。

# HTTP/3 新特性
# QUIC新功能
上面我们提到QUIC基于UDP，而UDP是“无连接”的，根本就不需要“握手”和“挥手”，所以就比TCP来得快。此外QUIC也实现了可靠传输，
保证数据一定能够抵达目的地。它还引入了类似HTTP/2的“流”和“多路复用”，单个“流"是有序的，可能会因为丢包而阻塞，
但其他“流”不会受到影响。具体来说QUIC协议有以下特点：

实现了类似TCP的流量控制、传输可靠性的功能。

虽然UDP不提供可靠性的传输，但QUIC在UDP的基础之上增加了一层来保证数据可靠性传输。它提供了数据包重传、拥塞控制以及其他一些TCP中存在的特性。

实现了快速握手功能。

由于QUIC是基于UDP的，所以QUIC可以实现使用0-RTT或者1-RTT来建立连接，这意味着QUIC可以用最快的速度来发送和接收数据，
这样可以大大提升首次打开页面的速度。0RTT 建连可以说是 QUIC 相比 HTTP2 最大的性能优势。

集成了TLS加密功能。

目前QUIC使用的是TLS1.3，相较于早期版本TLS1.3有更多的优点，其中最重要的一点是减少了握手所花费的RTT个数。

多路复用，彻底解决TCP中队头阻塞的问题

和TCP不同，QUIC实现了在同一物理连接上可以有多个独立的逻辑数据流（如下图）。实现了数据流的单独传输，就解决了TCP中队头阻塞的问题。


# 附录五：浏览器
1、事件：addEventListener
> event.stopImmediatePropagation(); 阻止事件冒泡并且阻止相同事件的其他侦听器被调用。

如果有多个相同类型事件的事件监听函数绑定到同一个元素，当该类型的事件触发时，它们会按照被添加的顺序执行。

> event.stopPropagation(); 阻止捕获和冒泡阶段中当前事件的进一步传播。

> event.preventDefault();

Event 接口的 preventDefault()方法，告诉user agent：如果此事件没有被显式处理，
那么它默认的动作也不要做（因为默认是要做的）。此事件还是继续传播，除非碰到事件侦听器调用
stopPropagation() 或stopImmediatePropagation()，才停止传播。

### log: btn
```
<body>
  <div>
    <ul>
      <li>
        <button>111</button>
      </li>
    </ul>
  </div>
  <script>
    let li = document.querySelector('li')
    let ul = document.querySelector('ul')
    let btns = document.querySelector('button')
    ul.addEventListener('click', e => {
      console.log('ul')
    }, false)
    li.addEventListener('click', e => {
      console.log('li')
    }, false)
    btns.addEventListener('click', e => {
      e.stopImmediatePropagation()
      console.log('btn')
    }, true)
    btns.addEventListener('click', e => {
      console.log('btn 2')
    }, false)

    // btn
  </script>
```

### log: btn, btn2
```
<body>
  <div>
    <ul>
      <li>
        <button>111</button>
      </li>
    </ul>
  </div>
  <script>
    let li = document.querySelector('li')
    let ul = document.querySelector('ul')
    let btns = document.querySelector('button')
    ul.addEventListener('click', e => {
      console.log('ul')
    }, false)
    li.addEventListener('click', e => {
      console.log('li')
    }, false)
    btns.addEventListener('click', e => {
      console.log('btn')
    }, true)
    btns.addEventListener('click', e => {
      e.stopImmediatePropagation()
      console.log('btn 2')
    }, false)

    // btn,  btn 2
  </script>
```

### log: btn, btn2, li, ul

```
<body>
  <div>
    <ul>
      <li>
        <button>111</button>
      </li>
    </ul>
  </div>
  <script>
    let li = document.querySelector('li')
    let ul = document.querySelector('ul')
    let btns = document.querySelector('button')
    ul.addEventListener('click', e => {
      console.log('ul')
    }, false)
    li.addEventListener('click', e => {
      console.log('li')
    }, false)
    btns.addEventListener('click', e => {
      console.log('btn')
    }, true)
    btns.addEventListener('click', e => {
      console.log('btn 2')
    }, false)

    // btn, btn 2, li, ul
  </script>
```

1、Cookie

1、Cookie是在RFC2109里初次被提及，是为了辨别用户信息而存储在客户端的数据。
2、每个客户端最多保持300个Cookie，每个域名下一般为50个（IE 6仅20个）
3、每个Cookie最多存储最多4KB
4、Cookie的信息每次发起请求都会随请求头提交给服务器
5、Cookies 使用不同的源定义方式。一个页面可以为本域和任何父域设置cookie，只要是父域不是公共后缀（public suffix）即可。Firefox 和 Chrome 使用 [Public Suffix List](http://publicsuffix.org/) 决定一个域是否是一个公共后缀（public suffix）。Internet Explorer使用其自己的内部方法来确定域是否是公共后缀。不管使用哪个协议（HTTP/HTTPS）或端口号，浏览器都允许给定的域以及其任何子域名(sub-domains) 访问 cookie。设置 cookie 时，你可以使用Domain，Path，Secure，和Http-Only标记来限定其访问性。读取 cookie 时，不会知晓它的出处。 即使您仅使用安全的https连接，您看到的任何cookie都可能使用不安全的连接进行设置。

[链接：跨源网络访问](https://www.jianshu.com/p/7056d77781eb)
```
1、客户端设置Cookie（HTTP响应中）

Set-cookie:name='...name';expires='...date';path='...path';domain='...domain'

支持Cookie的浏览器将创建Cookie文件并保存（也可能是写入内存中）。用户

每次发起请求时浏览器根据条件过滤（expires path）后加入请求头响应：

请求头：Cookie: name='...name';Path='.../path'

2、Node中设置Cookie（response中提供了原生方法）：

res.cookie(name, value [, options]);

name: 类型为String

value: String或Object（自动序列化，JSON.stringify(obj)）

Option：Object

Option包含：

domain：String， //有效域名，默认网站域名

expires：Date， //过期时间，没有设置或为0，浏览器关闭后清除（当前session有效）

httpOnly: Boolean， //只能被WEB server访问

maxAge：String， // 类似expires 过期时间

path：String，//有效路径，默认'/'

secure：Boolean, //只能被https使用，默认false

singed：Boolean //使用签名，默认false（express ,cookie-parse ->> req.secret）

3、Koa中使用Cookie

ctx.cookies.get(name, [, options]) //获取

ctx.cookies.set(name, value,  [options]) //设置

```

![image](http://upload-images.jianshu.io/upload_images/12041061-bf6d69300d022296?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 2、Session

Session（主要用来管理会话）是一种概念，表示用户从进入到离开网络应用这段时间内产生的动作以及上下文

```

1、HTTP中的Session

Cookie每次请求都随着HTTP发送给服务器，给每个Cookie一个唯一的ID用来记录用户

2、Session的步骤

1）生成SessionId

2）SessionId写入内存（一旦服务器断电或重启就会丢失，--redis持久化...）

3）将带有SessionId的Cookie发送给客户端

3、Koa中使用Session (koa-session)

const Koa = require('koa')

const session = require('koa-session')

const app = new Koa()

...

app.keys = ['secret key']

const CONFIG = {

  key: 'login', /** (string) cookie key (default is koa:sess) */

  /** (number || 'session') maxAge in ms (default is 1 days) */

  /** 'session' will result in a cookie that expires when session/browser is closed */

  /** Warning: If a session cookie is stolen, this cookie will never expire */

  maxAge: 86400000, // (number) maxAge in ms (default is 1 days)

  overwrite: true, /** (boolean) can overwrite or not (default true) */

  httpOnly: true, /** (boolean) httpOnly or not (default true) */

  signed: true, /** (boolean) signed or not (default true) */

  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */

  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/

};

app.use(session(CONFIG, app))

....

router.get('/login', (ctx, next) => {

    ctx.session.login = true

    ...

})

...





二、跨域
1、JSONP
原理：
实现：

2、CORS
原理：
实现：

3、websoket
4、











3、link标签，默认同步，CSP
4、meta标签
5、vidio/audio
6、canvas
7、img

8、操作符
typeof
instanceof
symbol
==
===
< >
9、基本值类型
10、引用类型
11、原型
12、原型链
13、函数
14、闭包
15、函数柯里化
16、面向对象：面向对象是相对于面向过程来讲的，面向对象方法，把相关的数据和方法组织为一个整体来看待，从更高的层次来进行系统建模，更贴近事物的自然运行模式
        【特性】
        对象唯一性。
            每个对象都有自身唯一的标识，
            通过这种标识，可找到相应的对象。在对象的整个生命期中，它的标识都不改变，不同的对象不能有相同的标识。
        抽象性。
            抽象性是指将具有一致的数据结构（属性）和行为（操作）的对象抽象成类。
            一个类就是这样一种抽象，它反映了与应用有关的重要性质，而忽略其他一些无关内容。任何类的划分都是主观的，但必须与具体的应用有关。
        继承性。
            继承性是子类自动共享父类数据结构和方法的机制
        多态性（多形性）
            多态性是指相同的操作或函数、过程可作用于多种类型的对象上并获得不同的结果。
            不同的对象，收到同一消息可以产生不同的结果，这种现象称为多态性。
17、对象：对象的含义是指具体的某一个事物，即在现实生活中能够看得见摸得着的事物。
        【特性】
        继承
        类
        多态
        动态绑定
        消息传递

18、类：类是具有相同特性（数据元素）和行为（功能）的对象的抽象。因此，对象的抽象是类，类的具体化就是对象，也可以说类的实例是对象，类实际上就是一种数据类型。类具有属性，它是对象的状态的抽象，用数据结构来描述类的属性。类具有操作，它是对象的行为的抽象，用操作名和实现该操作的方法来描述。 [2]  类映射的每一个对象都具有这些数据和操作方法，类的继承具有层次性和结构性，高层次对象封装复杂行为，具体细节对该层次知识保持透明，可以减小问题求解的复杂度。

18、继承：继承简单地说就是一种层次模型，这种层次模型能够被重用。层次结构的上层具有通用性，但是下层结构则具有特殊性。在继承的过程中类则可以从最顶层的部分继承一些方法和变量。类除了可以继承以外同时还能够进行修改或者添加。通过这样的方式能够有效提高工作效率。在这里举一个例子，当类X继承了类Y后，此时的类X则是一个派生类，而类Y属于一个基类。 [3]  继承是从一般演绎到特殊的过程，可以减少知识表示的冗余内容，知识库的维护和修正都非常方便。更有利于衍生复杂的系统。 [4]

20、多态：多态是指不同事物具有不同表现形式的能力。多态机制使具有不同内部结构的对象可以共享相同的外部接口，通过这种方式减少代码的复杂度。一个接口，多种方式。 [1]




### 前端架构设计

>当在一个系统内时，微前端是一个应用间的架构方案，当在多个应用间时，微前端则是一种系统间的架构方案。

### 层次设计

  - 系统级：前后端分离架构，微前端架构
  - 应用级：模式库，组件库，设计系统
  - 模块级：组件化、模块化
  - 代码级：规范、原则、质量

### 系统内架构

   - 多个前端应用（之间如何交互通信）
   - 对接后台服务（通信、鉴权、授权、API管理）

### 应用级架构

  - 脚手架
    - 用于快速生成、搭建前端应用
  - 模式库
  - 设计系统

### 前端框架选型
 - 框架是否满足大部分应用的需求？
 - 框架是否有丰富的组件库
 - 框架的社区支持？
 - 框架的替换成本？能否快速迁移至本框架？
 - 团队成员能否快速掌握框架
 - 不同框架对浏览器支持程度
 - 后期维护成本和难度？
 - 构建发布、测试


### React（小而美）
  - 优点
    - 是一个为数据提供渲染为HTML试图的开源javascript库，作用是提供了一套数据机制
    - Virtual DOM通过DIFF算法对需要修改的DOM进行比较，减少直接对DOM的操作，提升性能（不适应于少量DOM操作）
    - 跨平台（平台无关性），React Native在一定程度可以用来解决Hybrid App的性能瓶颈，以及实现安卓和ios应用程序之间大部分业务逻辑的共享。
    - 活跃的社区，丰富的轮子
  - 不足
    - 需要开发者自行解决路由库、数据管理（单向流库）库、web API 调用库、测试库、依赖管理库、构建发布脚本等
    - 表单提交需要自行实现数据收集

### angular（大而全）
  - 优点
    - 官方脚手架包含：测试、运行服务、打包甚至包含浏览器动画、表单、http服务请求和页面路由
    - 适合大公司规模化运作(不仅提供开发要素，还提供了一系列开发规范和指南)
    - 社区跨平台方案，原生App方案Native Script 和混合App方案Ionic框架
    - 活跃的社区，丰富的轮子
    - 双向数据绑定（减轻工作量）、web API 调用库JQlight、脏检查机制等
  - 不足
    - 版本迭代速度太快，本版1与之后的版本差异较大，出现断层
    - 社区活跃度不如react和vue

### Vue
  - 优点
    - 渐进式框架，无需打包，应用引入vue.min.js即可使用，方便传统多页面项目的迁移
    - 活跃的社区，丰富的轮子
    - 完善的中文文档，平缓的学习曲线，适合新手快速上手、上线
    - 双向数据绑定（减轻工作量）
    - Vue全家桶，开发、测试、构建等
  - 跨平台Weex框架方案跟不上




#css

1、水平居中
2、BFC
    块格式化上下文（Block Formatting Context，BFC） 是Web页面的可视化CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。
    下列方式会创建块格式化上下文：
    根元素(<html>)
    浮动元素（元素的 float 不是 none）
    绝对定位元素（元素的 position 为 absolute 或 fixed）
    行内块元素（元素的 display 为 inline-block）
    表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值）
    表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
    匿名表格单元格元素（元素的 display为 table、table-row、 table-row-group、
        table-header-group、table-footer-group（分别是HTML table、row、tbody、thead、tfoot的默认属性）或 inline-table）
    overflow 值不为 visible 的块元素
    display 值为 flow-root 的元素
    contain 值为 layout、content或 paint 的元素
    弹性元素（display为 flex 或 inline-flex元素的直接子元素）
    网格元素（display为 grid 或 inline-grid 元素的直接子元素）
    多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）
    column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。
    块格式化上下文包含创建它的元素内部的所有内容.

    块格式化上下文对浮动定位（参见 float）与清除浮动（参见 clear）都很重要。
    浮动定位和清除浮动时只会应用于同一个BFC内的元素。浮动不会影响其它BFC中元素的布局，
    而清除浮动只能清除同一BFC中在它前面的元素的浮动。外边距折叠（Margin collapsing）
    也只会发生在属于同一BFC的块级元素之间。

    范例
3、响应式布局
4、display
    display: none;
    将 display 设置为 none 会将元素从 可访问性树 accessibility tree 中移除。
    这会导致该元素及其所有子代元素不再被屏幕阅读技术 screen reading technology 访问。

    如果你只是想从视觉上隐藏这个元素，对可访问性更加友好的做法是使用 属性组合 来将其从屏幕上隐藏，
    但仍可以被屏幕阅读器 screen readers  等辅助技术解析。

    display: contents;
    当前大多数浏览器对 display: contents; 的实现是：将设置了该值的元素从 可访问性树 accessibility tree 中移除，但保留其子代元素。
    这会导致该元素自身不再被屏幕阅读技术 screen reading technology  访问。这在 CSS 规范 中被视为不正确的行为。

5、visibility
    visible
        元素正常显示。
    hidden
        隐藏元素，但是其他元素的布局不改变，相当于此元素变成透明。要注意若将其子元素设为 visibility: visible，则该子元素依然可见。
    collapse
        用于 <table> 行、列、列组和行组，隐藏表格的行或列，并且不占用任何空间（与将 display: none 用于表格的行/列上的效果相 当）。
        但是，仍会计算其他行和列的大小，就好像折叠的行或列中的单元格一样。此值允许从表中快速删除行或列，而不强制重新计算整个表的宽度和高度。
        折叠的弹性项目被隐藏，他们将占用的空间被删除。
        对于 XUL 元素，元素的计算大小始终为零，而且通常会忽略影响大小的其他样式，尽管边距仍然有效。
        对于其他元素，折叠处理与隐藏相同。

js已经支持`?.`判空简便语法
