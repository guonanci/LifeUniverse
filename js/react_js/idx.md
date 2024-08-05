[reactjs-interview-questions(https://github.com/sudheerj/reactjs-interview-questions?utm_source=gold_browser_extension#what-is-react)

Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

Warning: unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.

https://juejin.cn/post/6950063294270930980?utm_source=gold_browser_extension

PureComponent 和 Component 用法，差不多一样，唯一不同的是，纯组件 PureComponent 会浅比较，props 和 state 是否相同，来决定是否重新渲染组件。所以一般用于性能调优，减少 render 次数。

当我做到时，你别管我怎么做到的，我只会说’山人自有妙计‘。
数据驱动，initialSettingData=》onChange。

