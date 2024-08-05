# React

```ts
const mouseEv: React.MouseEvent<HTMLElement, MouseEvent>
```

不能将类型“{ children: Element; key: string; title: string; onMouseEnter: (ev: any) => Promise<void>; }”分配给类型“IntrinsicAttributes & SubMenuProps”。
类型“IntrinsicAttributes & SubMenuProps”上不存在属性“onMouseEnter”。ts(2322)
(JSX attribute) onMouseEnter: (ev: any) => Promise<void>
没有可用的快速修复

1820 emptyCmpt 替换成 loadingIcon

# Document

```tsx
Property 'msFullscreenElement' does not exist on type 'Document'. Did you mean 'fullscreenElement'?ts(2551)

```

# removeElements

https://developer.mozilla.org/en-US/search?q=removeChild

# getBoundingClientRect
返回值是一个DOMRect对象，是包含整个元素的最小矩形 left，top，right，bottom，x，y，width和height这几个以像素为单位的只读属性描述整个矩形的位置和大小，除了width和height以外的属性是相对于视图窗口的左上角来计算的。


# Element
## getBoundingClientRect
https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect

Element.getBoundingClientRect() 方法返回一个 DOMRect 对象，其提供了元素的大小及其相对于视口的位置。


返回值是一个 DOMRect 对象，是包含整个元素的最小矩形（包括 padding 和 border-width）。该对象使用 left、top、right、bottom、x、y、width 和 height 这几个以像素为单位的只读属性，描述整个矩形的位置和大小。除了 width 和 height 以外的属性，是相对于视图窗口的左上角来计算的。

该方法返回的 DOMRect 对象中的 width 和 height 属性是包含了 padding 和 border-width 的，而不仅仅是内容部分的宽度和高度。在标准盒子模型中，这两个属性值分别与元素的 width/height + padding + border-width 相等。而如果是 box-sizing: border-box，那么这两个属性直接与元素的 width 或 height 相等。
```js

function dumpComputedStyles(elem,prop) {

  let cs = window.getComputedStyle(elem,null);
  if (prop) {
    dump("    "+prop+" : "+cs.getPropertyValue(prop)+"\n");
    return;
  }
  let len = cs.length;
  for (var i=0;i<len;i++) {

    let style = cs[i];
    dump("    "+style+" : "+cs.getPropertyValue(style)+"\n");
  }

}
```
