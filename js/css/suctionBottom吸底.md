https://juejin.cn/post/6844903688469741576;
footer‘吸底’效果

原理分析：

wrapper设置height:100%是希望无论content内容的多少，它的高度都是屏幕的高度，如此一来，content的高度=父元素wrapper高度-底部需固定元素footer的高度，最后还需要为content加上overflow:scroll，使content中隐藏的部分也可通过滚动显示。
content的父元素wrapper设置了height:100%，保证content的高度在计算时，100%固定等于屏幕的高度，而不会是随着content内容的高度变化的。

css设置：
复制代码html,
body,
.wrapper
  height 100%
.content
  height calc(100% - 100px) // 关键：使用height，而不是min-height
  overflow scroll // 关键
  ul
    list-style none
    li
      height 100px
      background lightblue
.footer
  position fixed
  left 0
  right 0
  bottom 0
  height 100px
  background orange
写在最后
以上几种实现方案，笔者都在项目中尝试过，对每个方案也都给出了demo，方便大家调试与验证，每个实现的方法都存在限制性问题，比如需要固定页脚高度，或不适用于移动端低版本的系统等等。大家可以根据具体的需求，选择最适合的方案。
由于最近项目需要，从网上查阅了许多资料，很难得到拿来就可以用的解决方案，或是缺少对实现原理的分析，所以本人针对以上问题，做了相关总结，写下了这篇文章。希望能对小伙伴有用。文章有不对的地方或是写不好的地方，辛苦大家指正，也欢迎大家一起探讨解决“吸底”问题时，遇到的一些兼容性问题，或是提出一些更好的解决方案哟~


作者：Sunflower127
链接：https://juejin.cn/post/6844903688469741576
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
