# fixed

*祖先元素出现 transform 的话，有冲突；改用 transform 替代品，或者 fixed 的后代元素移动到祖先平级或上级*。
https://blog.csdn.net/xiao_yu_liu/article/details/111457394

https://juejin.cn/post/6844903489122861069

羁绊君
前端工程师 @ 🐒
4 年前
这只是 position: fixed 的一个特性，和 bug 无关。*fixed 不为元素预留空间，而是通过指定元素相对于屏幕视口viewport的位置来指定元素位置。元素的位置在屏幕滚动时不会改变；打印时，元素会出现在的每页的固定位置。fixed 属性会创建新的层叠上下文。当元素祖先的transform 属性非 none 时，容器由视口改为该祖先*。
# sticky粘性布局
*当元素在屏幕内，表现为relative，当就要滚出屏幕时，表现为fixed*
随着页面的滚动，将元素固定在设置的位置（固定效果如同fixed），position:sticky可以看作是position:relative和position:fixed的结合体

以下情况粘性布局会失效
1）父元素设置overflow：hidden
2）父元素高度不够，或高度为内部元素高度之和，总之没有剩余的高度，不会产生滚动。


作者：海阔_天空
链接：https://juejin.cn/post/7146973901166215176
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
