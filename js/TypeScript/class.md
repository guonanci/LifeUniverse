Property 'cache' has no initializer and is not definitely assigned in the constructor.ts(2564)

```tsx
class LRUCache {
  capacity:number
  cache:Map<any, any> // | undefined
  constructor(capacity:number) {
    this.cache=new Map()
    this.capacity=capacity
  }
```

# class-fields

ie11 不支持
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/Public_class_fields

10. TypeScript 如何设计 Class 的声明？
```js
// 在声明类的时候，一般类中都会包含，构造函数、对构造函数中的属性进行类型声明、以及类中的方法
class Greeter {
   greeting: string;
   constructor(message: string) {
       this.greeting = message;
   }
   greet(): string{
       return "Hello, " + this.greeting;
   }
}
let greeter = new Greeter("world");
```


作者：周姐日常事
链接：https://juejin.cn/post/6999985372440559624
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
