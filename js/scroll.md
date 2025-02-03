# scrollTo

window.scrollTo,element.scrollTop,element.scrollLeft.

# event

event.target.scrollTop

# ScrollToOptions

top,left,behavior

```js
element.scrollTo({
  top: 100,
  left: 100,
  behavior: 'smooth'
});
```

# 内容溢出不换行并用css设置横向滚动条

Chengmin.T

于 2021-03-18 15:39:09 发布

阅读量2.3k
 收藏 2

点赞数 1
文章标签： css
版权
html内容
<div class="box">
 <div class="row">
  <div class="item" v-for="i in 50" :key="i">
   <span>学生11</span>
   <span>a</span>
   <span>b</span>
   <span>c</span>
   <span>d</span>
  </div>
 </div>
</div>
css
.box{
 width: 100%;
 white-space: nowrap;
 overflow: hidden;
 overflow-x: scroll; /* 1 */
 -webkit-backface-visibility: hidden;
 -webkit-perspective: 1000px;
 -webkit-overflow-scrolling: touch; /* 2 */
 text-align: justify; /* 3 */
}

.item{
    display: inline-block;
    color: #fff;
    text-align: center;
}

span{
    display: block;
    border: 1px solid #eeeeee;
 color: #999999;
 text-align: center;
 margin: 5px;
 border-radius: 4px;
 padding: 5px 10px;
 font-size: 12px;
}

————————————————

                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。

原文链接：<https://blog.csdn.net/qq_34007408/article/details/114981262>

# css实现上下滚动

<https://juejin.cn/post/6844904165517312014>

# scrollTop&scrollHeight

e.currentTarget.scrollTop
scrollHeight ：表示内容区域的整个高度，包括溢出的内容区域，即滚动条的高度。 scrollTop ：表示的是滚动条滚动的高度，初始未滚动时的高度为0。

# css-电梯导航

<https://juejin.cn/post/7396342567867301927>
下面总结一下

滚动锚定可以借助a标签和#id实现自动滚动跳转
scroll-behavior: smooth可以实现平滑滚动
默认情况下，CSS 滚动驱动作用范围只能影响到子元素，但是通过timeline-scope，可以让任意元素都可以受到滚动驱动的影响。
利用timeline-scope，我们可以将每个内容的位置状态和每个导航的选中状态联动起来
右边的导航会同时选中多个是因为左边的滚动视区太大了，可以同时包含多个内容区域
可以用view-timeline-inset来手动改变视区范围，缩小成一条线，这样无论怎样滚动，都只会匹配一个区域
兼容性还不足，目前是Chrome 116+

总的来说，CSS滚动驱动动画不愧是2023年度最强特性，可以做的事情太多了，很多 JS才能实现的交互都可以取代了，而且做的更好，至于兼容性，还是留给时间吧。关注我，学习更多有趣的前端新特性。最后，如果觉得还不错，对你有帮助的话，欢迎点赞、收藏、转发 ❤❤❤

作者：XboxYan
链接：<https://juejin.cn/post/7396342567867301927>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
