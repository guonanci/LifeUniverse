https://juejin.cn/post/6844903450493321223

哪些事件无法触发冒泡：https://juejin.cn/post/7136057532246097928#heading-0
DOM事件流：*事件流简单来说就是事件执行顺序*
DOM同时支持两种事件模型：捕获型事件流和冒泡型事件流
DOM2事件流的三个阶段：
1）事件捕获阶段
2）处于目标阶段
3）事件冒泡阶段
DOM事件捕获的具体流程：
window➡️document➡️html➡️body➡️目标元素；
事件冒泡：就是这个顺序反过来
运用： 事件委托，利用事件冒泡原理
事件委托：*当一组元素要监听相同事件时，可以在父元素上绑定一个事件，利用事件冒泡原理，让父元素代理子元素事件，点击子元素，通过e.target || e.srcElement 可以获取点击的具体子元素*
事件委托的优点：
可以减少事件的注册，节省内存，也可以实现当新增对象时无需再次对其绑定事件
*addEventListener的第三个参数默认是false，表示在事件冒泡阶段调用；当该值为true，表示在事件捕获阶段调用*。
验证整个事件流执行顺序（先捕获再冒泡）


作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```js
// 鼠标点击子元素后，打印顺序为
// 父捕获、子捕获、子冒泡、父冒泡

<html>
  <div class="parent">
    <div class="child">子元素</div>
  </div>
  <script>
     let parentDom = document.querySelector('.parent');
     parentDom.addEventListener('click', function () {console.log('父捕获'); }, true)
     parentDom.addEventListener('click', function () {console.log('父冒泡');}, false)

     let childDom = document.querySelector('.child')
     childDom.addEventListener('click', function () {console.log('子捕获');}, true)
     childDom.addEventListener('click', function () {console.log('子冒泡');}, false)
  </script>
</html>
```
在捕获（capturing）阶段中，事件从祖先元素向下传播到目标元素；当事件达到目标（target）元素后，冒泡（bubbling）才开始。

13. 事件传播的三个阶段是什么？
D: Capturing > Target > Bubbling

# target
```js
当点击按钮时，event.target 是什么？
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
A: Outer div
B: Inner div
C: button
D: 一个包含所有嵌套元素的数组。
答案
答案: C
导致事件的最深嵌套的元素是事件的 target。你可以通过 event.stopPropagation 来停止冒泡。
```
# 冒泡
当您单击该段落时，日志输出是什么？
<div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div>
A: p div
B: div p
C: p
D: div
答案
答案: A

如果我们点击 p，我们会看到两个日志：p 和 div。在事件传播期间，有三个阶段：捕获、目标和冒泡。*默认情况下，事件处理程序在冒泡阶段执行*（除非将 useCapture 设置为 true）。它从嵌套最深的元素向外传播。
