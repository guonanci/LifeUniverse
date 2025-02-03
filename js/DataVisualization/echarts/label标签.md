文本标签从v3.7开始支持富文本模式：
- 定制文本快整体样式，如背景、边框、阴影、位置、旋转等等，对文本中个别片段定义样式，如颜色、字体、高宽、背景、阴影等等，对齐方式，
- 文本中使用图片做小图标或者背景
- 特定组合以上规则，可以做出简单表格、分割线等效果

文本块text block，文本标签块整体，text fragment片段：标签块中的部分文本。提供了丰富的文本标签配置项，包括基本样式设置：fontStyle、fontWeight、fontSize、fontFamily。颜色，描边textBorderColor、textBorderWidth。阴影textShadowColor,Blur,OffsetX,OffsetY。文本块或片段大小：lineHeight,width,height,padding;对齐align、verticalAlign。边框、背景：backgroundColor、
borderColor、borderWidth、borderRadius；位置和旋转position、distance、rotate。可以在各处的tich属性中定义文本片段样式，如series-bar.label.rich。
```js
labelOption={
  //在文本中，可以对部分文本采用tich中定义样式
  // 这里需要在文本中使用标记符号
  // `{styleName|text content text content}`标记样式名
  // 换行\n
  formatter:[
    '{a|这段文本采用样式a}',
    '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}',
  ].join('\n'),
  //text block style-setting:
  color:'#3',
  fontSize:5,
  fontFa:'Arial',
  borderW:3,backgroundC:'#984455',padding:[3,10,10,5],
  lingH:20,
  // text fragment style-se:
  rich:{
    a:{
      color:'red',lineH:10
    },
    b:{
      backgroundColor:{image'xxx/x.j'},height:40,
    },
    x:{
      fontS:18,fontFa:'Microsoft YaHei',borderColor:'#449933',borderR:4
    }
  }
}
```
注意：如果不定义 rich，不能指定文字块的 width 和 height。


