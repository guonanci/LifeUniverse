```css
.pointer-events-none {
  pointer-events: none;
}
```

https://stackoverflow.com/questions/25654413/add-css-cursor-property-when-using-pointer-events-none

cursor: not-allowed;鼠标样式为 禁用图标
pointer-events: auto; 效果和没有设置 pointer-events 属性相同；点击后不会穿透当前层。在 SVG 中，该值和 visiblePainted 的效果相同。
pointer-events: none；元素永远不会成为鼠标事件的 target。但是，当其后代元素的 pointer-events 属性指定其他值时，鼠标事件可以指向其后代元素。

如果同时使用，鼠标为默认样式；

    cursor: not-allowed;

    pointer-events: none;

————————————————
版权声明：本文为 CSDN 博主「低调奋进」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/zwbHUST/article/details/104663177

pointer-events-none 优先级高于 cursor-not-allowed 在同一个选择器上的话，光标变成箭头但是点击没任何反应（只能移动光标）
pointer-events-none 时，onClick 完全不执行
我发现 cursor-not-allowed 还得配合 js 代码中的 return，还是 pointer-events-none 香啊（但是没有正确的样式）

# cursorPointer 不能有误导性

比方说有一行元素集合 ABC，这三者之间的空白区域是点击没反应的，所以应该 cursor:auto;

```css
.a {
}
```
