MutationObserver.md
https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver/observe
它的observe（）方法配置了MutationObserver对象的回调方法以开始接受与给定选项匹配的DOM变化的通知。根据配置，观察者会观察DOM树中的单个Node，也可能会观察被指定节点的部分或者所有子孙节点。
要停止MutationObserver，以遍不再触发它的回调方法，需要调用MutationObserver.disconnect()方法

```js
mutationObserver.observe(target[, options])
```

target
DOM树中的一个要观察变化的DOM Node（可能是一个Element），或者是被观察的子节点树的根节点
options
DOM的哪些变化应该报告给MutationObserver的cb，调用observe（）时，childList，attributes，characterData中，必须有一个参数为true，否则会抛出TypeError异常。

options的属性如下：
subtree
当为TRUE时，将会监听以target为根节点的整个子树，包括子树中所有节点的属性，而不仅仅是针对target，默认值false

