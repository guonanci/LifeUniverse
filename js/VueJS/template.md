不要随便加注释，比如说keep-alive标签的前后注释快可能会导致页面渲染空白，可能是router-view的多层嵌套相关问题。

```html
:style={height: bannerHeight}  bannerHeight='400rpx' :bannerHeight='400'
```

style不要用es6的字符串模板来写，而是采用object！！类似reactjs。
