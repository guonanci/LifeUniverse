https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/514

https://www.jianshu.com/p/387f89bd72ed

https://www.cnblogs.com/cupid10/p/12659812.html

Block Format Context块级格式化上下文，是页面盒模型中的一种CSS渲染模式，相当于一个独立的容器，里面元素和外部元素相互不影响。

介绍一下 BFC 布局规则

一个独立的隔离容器，容器内外的元素互不干扰
# 触 chu 发 BFC 的条件、创建BFC的方式：

1. 根元素html（body）
2. 浮动：float 不为 none
3. 绝对定位
4. overflow不为visible
5. display 为表格布局或弹性布局：inline-block,table-cell,flex,inline-flex


BFC 块级格式化上下文
# BFC解决哪些问题、主要作用是啥
1. 清除浮动，解决父元素高度塌陷
2. 防止同一容器中的相邻元素间的外边距重叠


作者：海阔_天空
链接：https://juejin.cn/post/7146973901166215176
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

最常用是overflow为hidden，这种方式的副作用最小，其他三种方式的副作用较大


得分点 块级格式化上下文、独立的渲染区域、不会影响边界以外的元素、形成BFC条件、float、position、overflow、display 标准回答 BFC(Block Formatting Context)块级格式化上下文，是Web页面一块独立的渲染区域，内部元素的渲染不会影响边界以外的元素。 BFC布局规则 -内部盒子会在垂直方向，一个接一个地放置。 -Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。 -每个盒子（块盒与行盒）的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。 -BFC的区域不会与float box重叠。 -BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。 -计算BFC的高度时，浮动元素也参与计算。 BFC形成的条件 -`float `设置成 `left `或 `right` -`position `是`absolute`或者`fixed` -`overflow `不是`visible`，为 `auto`、`scroll`、`hidden` -`display`是`flex`或者`inline-block` 等。*BFC解决能的问题：清除浮动，BFC的方式都能清除浮动，但是常用方式只有`overflow:hidden`,原因是使用float或者position方式的话，虽然父级盒子内部浮动被清除，但是父级本身又脱离文档流，会影响父级后面的兄弟盒子的布局；而如果设置父级为`display:flex`，内部的浮动就会失效，所以通常只是用`overflow: hidden`清除浮动*。 IFC（Inline formatting contexts）：内联格式上下文。IFC的高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)，IFC中的line box一般左右都贴紧整个IFC，但是会因为float元素而扰乱。 GFC（GrideLayout formatting contexts）：网格布局格式化上下文。当为一个元素设置display值为grid的时候，此元素将会获得一个独立的渲染区域。 FFC（Flex formatting contexts）：自适应格式上下文。display值为flex或者inline-flex的元素，将会生成自适应容器。
