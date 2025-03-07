不要随便加注释，比如说keep-alive标签的前后注释快可能会导致页面渲染空白，可能是router-view的多层嵌套相关问题。

```html
:style={height: bannerHeight}  bannerHeight='400rpx' :bannerHeight='400'
```

style不要用es6的字符串模板来写，而是采用object！！类似reactjs。

多出闭合标签导致HBuilderX编译失败，微信小程序开发者工具拿不到最近的代码文件

# HBuilder&微信开发者工具

遇到v-for数组时，却循环到一个undefined，则两个console都不会有任何报错。这算js层的问题，可能也不算问题。
