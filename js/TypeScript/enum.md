凡是涉及到 txt 常量的都要用到 enum，enum 的名字可以做类型用，每个枚举项可以当做某些LIST_OR_OBJ_CONSTANT 当中的 v，以此达到复用效果。

k v 取值一样，减少任何额外的记忆负担

左边用 Pascal，右边用全大写（下划线分割），一般不用默认的数字自 0 递增。

枚举和常量枚举: 常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除。 常量枚举成员在使用的地方会被内联进来。 之所以可以这么做是因为，常量枚举不允许包含计算成员。

https://juejin.cn/post/6844904112669065224

这种通过等号的显式赋值称为 initializer。*如果枚举中某个成员的值使用显式方式赋值，但后续成员没有显式赋值，那么 TypeScript 会基于当前成员的值加 1 ，作为后续成员的值*，比如以下 Enum 枚举中的成员 C：
enum Enum {
  A,
  B,
  C = 4,
  D,
  E = 8,
  F,
}

assert.deepEqual(
  [Enum.A, Enum.B, Enum.C, Enum.D, Enum.E, Enum.F],
  [0, 1, 4, 5, 8, 9]
);

作者：阿宝哥
链接：https://juejin.cn/post/6844904112669065224
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

JavaScript 使用全大写的名称，这是它从 Java 和 C 继承的约定： Number.MAX_VALUE；
众所周知的 Symbol 用驼峰式表示，并以小写字母开头，因为它们与属性名称相关： Symbol.asyncIterator；

TypeScript 手册使用以大写字母开头的驼峰式名称，这是标准的 TypeScript 风格，我们将其用于 NoYes 枚举。

异构枚举
最后一种枚举称为异构枚举。异构枚举的成员值是数字和字符串的混合：
enum Enum {
  A,
  B,
  C = 'C',
  D = 'D',
  E = 8,
  F,
}

assert.deepEqual(
  [Enum.A, Enum.B, Enum.C, Enum.D, Enum.E, Enum.F],
  [0, 1, 'C', 'D', 8, 9]
);

请注意，前面提到的规则也适用于此：如果先前的成员值为数字，则我们能省略初始化程序。异构枚举由于其应用较少而很少使用。目前 TypeScript 只支持将数字和字符串作为枚举成员值，不允许使用其他值，比如 symbols。

作者：阿宝哥
链接：https://juejin.cn/post/6844904112669065224
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

11. TypeScript 中如何联合枚举类型的 Key?
```tsx

enum str {
   A,
   B,
   C
}
// typeof是关键，不要漏写
type strUnion =  keyof typeof str; // 'A' | 'B' | 'C'
```


7.3 keyof 和枚举

我们可以使用 keyof 类型运算符创建类型，其元素是枚举成员的 key。当我们这样做，我们需要结合 keyof 和 typeof 一起使用：
```tsx

enum HttpRequestKeyEnum {
  'Accept',
  'Accept-Charset',
  'Accept-Datetime',
  'Accept-Encoding',
  'Accept-Language',
}

type HttpRequestKey = keyof typeof HttpRequestKeyEnum;
  // = 'Accept' | 'Accept-Charset' | 'Accept-Datetime' |
  //   'Accept-Encoding' | 'Accept-Language'
function getRequestHeaderValue(request: Request, key: HttpRequestKey) {
  // ···
}
```

为何这样？这比直接定义 HttpRequestKey 类型更方便。


作者：阿宝哥
链接：https://juejin.cn/post/6844904112669065224
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
