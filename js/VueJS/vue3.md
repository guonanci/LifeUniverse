https://zhuanlan.zhihu.com/p/133819602

vue3与vue2的区别
1）vue3性能比Vue2.x快1.2~2倍
2）使用proxy取代Object.defineproperty，解决了vue2中新增属性监听不到的问题，同时proxy也支持数组，不需要像vue2那样对数组的方法做拦截处理
3）diff方法优化
vue3新增了静态标记（patchflag），虚拟节点对比时，就只会对比这些带有静态标记的节点
4）静态提升
vue3对于不参与更新的元素，会做静态提升，只会被创建一次，在渲染时直接复用即可。vue2无论元素是否参与更新，每次都会重新创建然后再渲染
5）事件侦听器缓存
默认情况下onClick会被视为动态绑定，所以每次都会追踪它的变化，但是因为是同一个函数，所以不用追踪变化，直接缓存起来复用即可
6）按需引入，通过treeSharking 体积比vue2.x更小
7）组合API（类似react hooks），可以将data与对应的逻辑写到一起，更容易理解
8）提供了很灵活的api 比如toRef、shallowRef等等，可以灵活控制数据变化是否需要更新ui渲染
9）更好的Ts支持


作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# 数据双向绑定
Proxy，在目标对象之前‘拦截’，外界对该对象的访问，都必须先通过这层拦截，可以过滤和改写所有的访问。

```js
var proxy = new Proxy(target,handler)

target:用Proxy包装的被代理对象，，比如原生数组，函数，甚至另一个代理。

handler：一个对象，声明了代理target的一些操作，其属性是当执行一个操作时定义代理行为的函数。Object.defineProperty无法监听到数组下标的变化，导致直接通过下标设置值的话不能实时响应。
```

papmp项目里用的vue3，xm-web用的vue2.
