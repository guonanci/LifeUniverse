# scrollTo
window.scrollTo,element.scrollTop,element.scrollLeft.

# event
event.target.scrollTop
# ScrollToOptioins
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
