1. 从属关系区别 @import只能导入样式表，link还可以定义RSS、rel连接属性、引入网站图标

2. 加载顺序区别：加载页面时，link标签引入的CSS被同时加载；@import引入的CSS在页面加载完后被加载。
3. 兼容性区别

link style @import及三者的区别

加载顺序的差别
1）当一个页面被加载的时候，link引用的CSS会同时被加载
2）而@import引用的CSS，会等到页面全部被下载完再被加载
。有时候浏览用@import加载CSS的页面时，可能会出现闪烁的情况。

加载内容的区别
1）@import只能导入样式文件
2）link不仅可以引入样式，还可以引入js文件
3）style标签，它是定义在当前页面的样式


作者：海阔_天空
链接：https://juejin.cn/post/7146973901166215176
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
