css_scoped.md

```html
vue css scoped
css属性选择器示例
 // 页面上 “属性选择器”这几个字显示红色
 <div data-v-hash class="test-attr">属性选择器</div>
  <style>
    /* 该标签有个data-v-hash的属性，只不过该属性为空，依然可以使用属性选择器 */
   .test-attr[data-v-hash] {
    color: red;
  }
  </style>
  <script>
     // 通过js判断是否存在 data-v-hash 属性
     console.log(document.querySelector('.test-attr').getAttribute('data-v-hash') === ''); // true
  </script>
复制代码
vue css scoped原理
1）编译时，会给每个vue文件生成一个唯一的id，会将此id添加到当前文件中所有html的标签上
如<div class="demo"></div>会被编译成<div class="demo" data-v-27e4e96e></div>
2）编译style标签时，会将css选择器改造成属性选择器，如.demo{color: red;}会被编译成.demo[data-v-27e4e96e]{color: red;}


作者：海阔_天空
链接：https://juejin.cn/post/7146996646394462239
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```
