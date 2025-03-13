mdn

The `transform` CSS property lets you *rotate旋转, scale缩放, skew倾斜, or translate平移* an element. It modifies the coordinate space of the CSS `visual formatting model`.

Rotates an element around a fixed point on the 2D plane.

Skews an element on the 2D plane.

https://www.cnblogs.com/huansky/p/6077166.html
```less
div {
  transform: matrix(1, 2, 3, 4, 5, 6);
  transform: translate(120px, 50%);
  transform: scale(2, 0.5);
  transform:rotate(0.5turn); // skew(30deg, 20deg), scale(0.5) translate(-100% -100%),matrix3d,perspectie,rotate3d,rotateX,rotateY,Z;translate3d,XYZ,scale3d,XYZ,skewXY;
  // Function values, Multiple function values, Global values(inherit,initial,revert,revert-layer,unset)
}
```
stacking context，containing block


https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform

当给一个元素加上transform属性的时候，这个元素就会具有relative的特性,所以若一个元素的父元素拥有tranform属性，那么子元素在使用定位属性的时候要注意。


