https://stackoverflow.com/questions/21064101/understanding-offsetwidth-clientwidth-scrollwidth-and-height-respectively/21064102#21064102

clientWidth,offsetWidth,scrollWidth

scrollbarWidth = offsetWidth - clientWidth - getComputedStyle().borderLeftWidth - getComputedStyle().borderRightWidth

简述 CSS 盒模型
盒子由 margin、border、padding、content 组成；

*标准盒模型：box-sizing: content-box;*

*IE 盒模型：box-sizing: border-box;*

CSS 盒子模型(Box Model)
所有HTML元素可以看作盒子，在CSS中，"box model"这一术语是用来设计和布局时使用。 CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。 盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。

可以认为每个html标签都是一个方块，然后这个方块又包着几个小方块，如同盒子一层层的包裹着，这就是所谓的盒模型。

*IE盒模型和W3C标准盒模型的区别是什么？*
1. W3C 标准盒模型：
属性*width,height只包含内容content*，不包含border和padding。
2. IE 盒模型：
属性*width,height包含border和padding*，指的是content+padding+border。
在ie8+浏览器中使用哪个盒模型可以由box-sizing(CSS新增的属性)控制，默认值为content-box，即标准盒模型；如果将box-sizing设为border-box则用的是IE盒模型。如果在ie6,7,8中DOCTYPE缺失会触发IE模式。在当前W3C标准中盒模型是可以通过box-sizing自由的进行切换的。

作者：哆来咪er
链接：https://juejin.cn/post/6844903505983963143
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

css的盒模型由content(内容)、padding(内边距)、border(边框)、margin(外边距)组成。但盒子（chrome f12后打开控制台时，hover到元素上时候的聚焦元素）的大小由content+padding+border这几部分决定，把margin算进去的那是盒子占据的位置，而不是盒子的大小！

我们在编写页面代码时应尽量使用标准的W3C模型(需在页面中声明DOCTYPE类型)，这样可以避免多个浏览器对同一页面的不兼容。
因为若不声明DOCTYPE类型，IE浏览器会将盒子模型解释为IE盒子模型，FireFox等会将其解释为W3C盒子模型；若在页面中声明了DOCTYPE类型，所有浏览器都会把盒模型，解释为W3C盒模型。

作者：哆来咪er
链接：https://juejin.cn/post/6844903505983963143
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
