简述 Rem 及其转换原理
rem 是 CSS3 新增的相对长度单位，是指相对于根元素 html元素的font-size大小，而言的长度单位。

默认根元素的 font-size 都是 16px的。如果想要设置 12px 的字体大小也就是 12px/16px = 0.75rem。

由于 px 是相对固定单位，字号大小直接被定死，无法随着浏览器进行缩放；
rem 直接相对于根元素 html，避开层级关系，移动端新型浏览器对其支持较好；

个人较多地使用 vw + 百分比布局，可以使用 webpack 的 postcss-loader 的一个插件 postcss-px-to-viewport 实现对 px 到 vw 的自动转换，非常适合开发。

*rem+vw布局是手机端常见的布局方案*

## rem布局的原理：
本质是等比缩放，rem作用于根元素字体大小
1）假设屏幕宽度为750px，将屏幕平分为10份，1rem=75px，根元素的fontSize大小为75px
html {font-size: 75px}
div {width: 1rem} // div {width: 75px}

2）利用js动态的设置html的font-size
// 设置html的font-size
```html
<script>
document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px'
</script>
```

## rem布局的缺点

*字体并不合适使用rem, 字体的大小和字体宽度，并不成线性关系，会出现随着屏幕的变大，字体变的越来越大，所以需要结合媒体查询来调整字体大小*

## rem+vw布局
优势
1）*使用纯css方式来实现，避免使用js动态计算html根元素的font-size大小*
2）*结合使用媒体查询，解决宽屏下，如ipad的字体过大问题*

rem+vw布局的原理

1）设计稿为750px时，rootValue设置为75，则屏幕宽为10rem，1rem=75px，根元素的fontSize大小为75px
2）屏幕总共有100vw，所以1vw为7.5px ，10vw为75px， 得出1rem为10vw， 故得到根元素的fontSize为10vw
在项目入口文件中引入flexible.less中，flexible.less代码如下
```less

@base_fontSize: 10vw;

html{
    font-size: @base_fontSize;
}
// 使用媒体查询，解决宽屏，如ipad上的字体过大问题
@media screen and (min-width: 560px) {
    html{
        font-size: @base_fontSize * 0.7
    }
}
```


作者：海阔_天空
链接：https://juejin.cn/post/7146973901166215176
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


说一说CSS尺寸设置的单位
解题思路
得分点 px、rem、em、vw、vh 标准回答 px：pixel像素的缩写，绝对长度单位，它的大小取决于屏幕分辨率，是开发网页中常常使用的单位。 *em：相对长度单位，在 `font-size`中使用，是相对于父元素的字体大小，在其他属性中使用是相对于自身的字体大小，如width*。如当前元素的字体尺寸未设置，由于字体大小可继承的原因，可逐级向上查找，最终找不到则相对于浏览器默认字体大小。

rem：相对长度单位，相对于根元素的字体大小，根元素字体大小未设置的话，使用浏览器默认字体大小。

vw：相对长度单位，相对于视窗宽度的1%。

vh：相对长度单位，相对于视窗高度的1%。

加分回答 rem应用：在移动端网页开发中，页面要做成响应式的，可使用*rem配合媒体查询*或者flexible.js实现。原理是通过媒体查询或者flexible.js，能够在屏幕尺寸发生改变时，重置html根元素的字体大小，页面中的元素都是使用rem为单位设置的尺寸，因此只要改变根元素字体大小，页面中的其他元素的尺寸就自动跟着修改。

vw应用：

由于vw被更多浏览器兼容之后，在做移动端响应式页面时，通常使用vw配合rem。原理是使用vw设置根元素html字体的大小，当窗口大小发生改变，vw代表的尺寸随着修改，无需加入媒体查询和flexible.js，页面中的其他元素仍使用rem为单位，就可实现响应式。
