28. 数组定义的两种方式

type Foo= Array<string>;
interface Bar {
     baz: Array<{ name: string, age: number}>
}

type Foo = string[];
interface Bar {
     baz : { name: string, age: number }[]
}

作者：周姐日常事
链接：https://juejin.cn/post/6999985372440559624
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
