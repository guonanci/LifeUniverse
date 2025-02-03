https://www.agefans.net/play/20210005?playid=2_1

animation：名称 + 时间 + 速度曲线函数 + 是否延迟 + 次数 + 是否逆向播放

```scss
// linear 线性的  infinite 无穷的   alternate 逆向的
p {
  animation: mymove 2s linear infinite alternate;
}
```

# 动画演示
https://link.juejin.cn/?target=https%3A%2F%2Fwww.webhek.com%2Fpost%2Fcss3-animation-sniplet-collection%2F%23%2F

https://www.webhek.com/post/css3-animation-sniplet-collection/#/

# animate.css

@keyframes 0%,100%里面的transform经常和绝对定位居中用到的transform-50%,-50%冲突，所以最好不要用绝对定位方式居中，改用flex即可。
