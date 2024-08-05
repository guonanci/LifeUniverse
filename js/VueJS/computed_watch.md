1）计算属性本质上是 computed watcher，而watch本质上是 user watcher（用户自己定义的watcher）
2）computed有缓存的功能，通过dirty控制
3）wacher设置deep：true，实现深度监听的功能
4）computed可以监听多个值的变化


作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


1）初始化计算属性时，遍历computed对象，给其中每一个计算属性分别生成唯一computed watcher，并将该watcher中的dirty设置为true
初始化时，计算属性并不会立即计算（vue做的优化之一），只有当获取的计算属性值才会进行对应计算
2）初始化计算属性时，将Dep.target设置成当前的computed watcher，将computed watcher添加到所依赖data值对应的dep中（依赖收集的过程），然后计算computed对应的值，后将dirty改成false


3）当所依赖data中的值发生变化时，调用set方法触发dep的notify方法，将computed watcher中的dirty设置为true
4）下次获取计算属性值时，若dirty为true, 重新计算属性的值
5）dirty是控制缓存的关键，当所依赖的data发生变化，dirty设置为true，再次被获取时，就会重新计算


```js
// 空函数
const noop = () => {};
// computed初始化的Watcher传入lazy: true，就会触发Watcher中的dirty值为true
const computedWatcherOptions = { lazy: true };
//Object.defineProperty 默认value参数
const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};
// 初始化computed
class initComputed {
  constructor(vm, computed) {
    //新建存储watcher对象，挂载在vm对象执行
    const watchers = (vm._computedWatchers = Object.create(null));
    // 遍历computed
    for (const key in computed) {
      const userDef = computed[key];
      //getter值为computed中key的监听函数或对象的get值
      let getter = typeof userDef === "function" ? userDef : userDef.get;
      // 新建computed watcher
      watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);
      if (!(key in vm)) {
        // 定义计算属性
        this.defineComputed(vm, key, userDef);
      }
    }
  }

  // 重新定义计算属性  对get和set劫持
  // 利用Object.defineProperty来对计算属性的get和set进行劫持
  defineComputed(target, key, userDef) {
    // 如果是一个函数，需要手动赋值到get上
    if (typeof userDef === "function") {
      sharedPropertyDefinition.get = this.createComputedGetter(key);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get
        ? userDef.cache !== false
          ? this.createComputedGetter(key)
          : userDef.get
        : noop;
      // 如果有设置set方法则直接使用，否则赋值空函数
      sharedPropertyDefinition.set = userDef.set ? userDef.set : noop;
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  // 计算属性的getter 获取计算属性的值时会调用
  createComputedGetter(key) {
    return function computedGetter() {
      // 获取对应的计算属性watcher
      const watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        // dirty为true,计算属性需要重新计算
        if (watcher.dirty) {
          watcher.evaluate();
        }
        // 获取依赖
        if (Dep.target) {
          watcher.depend();
        }
        //返回计算属性的值
        return watcher.value;
      }
    };
  }
}

```
