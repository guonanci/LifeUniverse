styled-component.md

```js
`&,` is necessary to modify styles of root-elements.
const StyledMenu = styled(Menu)`
  &,
  .ant-menu-horizontal {
    background: ${menuBg};
  }
`
```

嵌套会用到多个`&`符号。

styled 包裹 popover 元素时，要 styled 要包裹全局位置。

styled-component 时能不能把 important 去掉。

不支持嵌套语法

切换时，如果`display: a ? 'none' : 'dontChange'.那你完了。一个大 bug。一定不要出现这样的写法，要不然一旦切换到 none，之后就切不回来了。一直都是 none

css 孩子选择器是用大于号：>

请注意这个选择器与子选择器的区别，子选择器（child selector）仅是指它的直接后代，或者你可以理解为作用于子元素的第一代后代。而后代选择器是作用于所有子后代元素。后代选择器通过空格来进行选择，而子选择器是通过“>”进行选择。

总结：>作用于元素的第一代后代，空格作用于元素的所有后代。

————————————————
版权声明：本文为 CSDN 博主「绝地反击 T」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/u012110719/article/details/41171517
https://www.w3cschool.cn/css/css-selector.html
子选择器 ul > li
后代选择器 li a

https://styled-components.com/docs/faqs#can-i-nest-rules

(x+1)(x+1)(x+1) x2+2x+1

x3 + 3 \* x2 + 3x + 1

15625+1951=17625-49=17576
3x2+3x+1 3\*625=1875+75+1=1951
