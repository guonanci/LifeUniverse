
为编程阶段还不清楚类型的变量指定一个类型，这些值可能来自于动态内容，比如来自用户输入或第三方代码库。不希望类型检查器检查这些值，直接让它们通过编译阶段的检查。

any：动态的变量类型，失去了类型检查的作用；

never：永不存在的值类型，例如，总是抛出异常，或者不会有返回值的函数表达式，或者箭头函数表达式的返回值类型。

unknown：任何类型的值都可以赋值给unknown类型，但是unknown类型的值只能赋值给unknown和any类型。

null&undefined是所有类型的子类型，可以把null和undefined赋值给number类型的变量，指定strictNullChecks标记时，null和undefined只能赋值给void和它们自身。

void：没有任何类型，例如，一个函数如果没有返回值，那么返回值可以定义为void。
