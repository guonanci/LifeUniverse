generics是指，定义函数、接口、类的时候，不预先指定具体类型，而在使用时再指定类型的一种特性。

generic programming，generic algorithm，泛型演算法 generic criteria。

generic types。

https://zhuanlan.zhihu.com/p/149965449

```ts
// arrowFn can not use generic types, and `T extends object` is the key point
export function filterValidFieldsFromConfig<T extends object> (config: T, paths: string[]):T {
```
