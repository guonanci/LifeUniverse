https://cloud.tencent.com/developer/article/1644688
https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index
http://itmyhome.com/css/z-index.html
https://www.w3cplus.com/preprocessor/sassy-z-index-management-for-complex-layouts.html
https://juejin.cn/post/6844904090602831885
https://m.w3cschool.cn/cssbmgf/tmvxnr.html

position && z-index : https://segmentfault.com/a/1190000014382426

http://itmyhome.com/css/z-index.html

[建议] 将 z-index 进行分层，对文档流外绝对定位元素的视觉层级关系进行管理。
解释：

同层的多个元素，如多个由用户输入触发的 Dialog，在该层级内使用相同的 z-index 或递增 z-index。

建议每层包含100个 z-index 来容纳足够的元素，如果每层元素较多，可以调整这个数值。

[建议] 在可控环境下，期望显示在最上层的元素，z-index 指定为 999999。
解释：

可控环境分成两种，一种是自身产品线环境；还有一种是可能会被其他产品线引用，但是不会被外部第三方的产品引用。

不建议取值为 2147483647。以便于自身产品线被其他产品线引用时，当遇到层级覆盖冲突的情况，留出向上调整的空间。

[建议] 在第三方环境下，期望显示在最上层的元素，通过标签内联和 !important，将 z-index 指定为 2147483647。

http://www.w3cplus.com/preprocessor/sassy-z-index-management-for-complex-layouts.html

https://m.w3cschool.cn/cssbmgf/tmvxnr.html

https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index

sass管理順序。99999臭名昭著、

## 策略1：两位数递增

*项目遮罩层、过滤器栏、位置搜索弹出窗、下拉菜单、导航。*

index($elements, project-cover,sorting-bar,modals,navigation)

$elements:project-covers,user-tooltip,sorting-bar,modals,navigation
层叠上下文顺序，position值不是static，z-index才起作用。多个列表，多个层叠上下文和层叠顺序，每个列表被认为是一个上下文，层叠顺序值指定所有元素的父元素上。

```scss
$elements:project-covers,user-tooltip,sorting-bar,modals,navigation;
$modal-elements:fields, form-controls,errors,autocomplete-dropdown;

.modal {
  z-index: index($elements, modals);

  .field {
    z-index: index($modal-elements, fields)
  }
  .form-con
}

编译出来的css：
.modal {
  z-index: 4;
}
.modal .field {
  z-index: 1;
}
.modal .form-controls {
  z-index: 2；
}
.modal .error
```
跨网站解决方案，局部文件存储网站颜色、字体等变量 _ZINDEX.SCSS MYPAGE.SCSS 每个页面修改或合并全聚德列表是有可能的，$modal-elements: append($modal-elements, close-button);$elements: insert-nth($elements, sidebar-filters, 3),insert-nth

.modal .close-button {
  z-index: index($modal-elements, close-button)
}
.sidebar-filter {
  z-index: index($elements, sidebar-filter)
}

这个Sass会在modal-elements列表最后面插入一个close-buttons和在elements列表第三个顺序中插入sidear-filters，而且不会影响其他页面使用的_z-index.scss。著作权归作者所有。
商业转载请联系作者获得授权,非商业转载请注明出处。
原文: http://www.w3cplus.com/preprocessor/sassy-z-index-management-for-complex-layouts.html © w3cplus.com

@warn

*跟踪上下文的层叠顺序=使用CSS是非常难的-但使用预处理程序使它变得更容易*。有许多方法可以处理它，但我们看到这里的做法是最简单的，需要最少的维护。而且由于Sass的列表和函数如此强大，你必须扩大这项技术，因为你需要更好的掌握他们。* 著作权归作者所有。
商业转载请联系作者获得授权,非商业转载请注明出处。
原文: http://www.w3cplus.com/preprocessor/sassy-z-index-management-for-complex-layouts.html © w3cplus.com


z-index 属性设定了一个定位元素及其后代元素或 flex 项目的 z-order。当元素之间重叠的时候，z-index 较大的元素会覆盖较小的元素在上层进行显示。

```css
.a {
  z-index: auto;
}
```

对于一个已经定位的盒子（即其 position 属性值不是 static，这里要注意的是 CSS 把元素看作盒子），z-index 属性指定：

盒子在当前堆叠上下文中的堆叠层级。
盒子是否创建一个本地堆叠上下文。

auto
盒子不会创建一个新的本地堆叠上下文。在当前堆叠上下文中生成的盒子的堆叠层级和父级盒子相同。

<integer>
<integer>（整型数字）是生成的盒子在当前堆叠上下文中的堆叠层级。此盒子也会创建一个堆叠层级为 0 的本地堆叠上下文。这意味着后代（元素）的 z-indexes 不与此元素的外部元素的 z-indexes 进行对比。
