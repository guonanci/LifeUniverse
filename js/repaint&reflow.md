https://juejin.cn/post/6844903569087266823 https://juejin.cn/post/6844904083212468238

http://obkoro1.com/web_accumulate/accumulate/tool/%E6%B5%8F%E8%A7%88%E5%99%A8%E9%87%8D%E7%BB%98%E9%87%8D%E6%8E%92.html#%E8%BD%BB%E6%9D%BE%E6%8E%8C%E6%8F%A1%E6%B5%8F%E8%A7%88%E5%99%A8%E9%87%8D%E7%BB%98%E9%87%8D%E6%8E%92%E5%8E%9F%E7%90%86

css
避免频繁使用table布局
尽可能在dom树的最末端改变class
避免设置多层内联样式
将动画效果应用到position属性为absolute或fixed的元素上
避免使用css表达式，如calc（）
js
避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性
避免频繁操作dom，创建一个documentFragment,在它上面应用所有Dom操作，最后再把它添加到文档中
也可以先为元素设置display：none，操作结束后再把它显示出来。因为在display：none的元素上进行的DOM操作不会引发回流和重绘
避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。
对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流

https://www.google.com/search?q=%E9%87%8D%E7%BB%98%E5%92%8C%E9%87%8D%E6%8E%92&oq=%E9%87%8D%E7%BB%98%E5%92%8C&aqs=chrome.2.69i57j0l4j69i65.6930j0j1&sourceid=chrome&ie=UTF-8

https://segmentfault.com/a/1190000018452924
回流（重排）与重绘.md
DOM =》 DOM Tree
HTML=》HTML parser =》DOM Tree =》 Attachment
Layout 《=》 Render Tree
Attachment =》 Render Tree =》 Painting=》Painting

Style Sheets=》CSS Parser=》Style Rules

浏览器生成渲染树的过程：
DOM:
html=》head（=》meta、link） + body（=》1. p=》hello(txt)+span(=>web performance(txt))+students + 2. div=>img
CSSOM:
font-size:16px<=body

body(font-size:16px;) => p(font-size:16px;font-weight:bold;=>span(font-size:16px)) + span + img

https://gist.github.com/paulirish/5d52fb081b3570c81e3a

https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/renderer/core/css/properties/css_property.h;l=69;drc=d685ea3c9ffcb18c781bc3a0bdbb92eb88842b1b
https://stackoverflow.com/questions/510213/when-does-reflow-happen-in-a-dom-environment
https://dev.to/gopal1996/understanding-reflow-and-repaint-in-the-browser-1jbg
https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/renderer/core/frame/visual_viewport.cc;l=435-461;drc=a3c165458e524bdc55db15d2a5714bb9a0c69c70?originalUrl=https:%2F%2Fcs.chromium.org%2F
https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/renderer/core/editing/element_inner_text.cc;l=462-468;drc=d685ea3c9ffcb18c781bc3a0bdbb92eb88842b1b

https://segmentfault.com/a/1190000038204886

https://blog.csdn.net/HWSss/article/details/106549261


css方面如何减少回流、重绘
1）可以使用GPU硬件加速
2）动画可以使用绝对定位或fixed，让其脱离文档流，修改动画不造成主界面的影响
3）使用 visibility 替换 display: none（前者只会引起重绘，后者则会引发回流）
4）避免使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局


作者：海阔_天空
链接：https://juejin.cn/post/7146973901166215176
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# 浏览器渲染机制
1. 浏览器采用*流式布局模型Flow Based Layout*，
2. 浏览器会把HTML解析成DOM，把CSS解析成CSSOM，DOM和CSSOM合并就产生了渲染树Render Tree
3. 有了RenderTree，我们就知道了所有节点的样式，然后计算他们在页面上的大小和位置，最后把节点绘制到页面上
4. 对Render Tree的计算通常只需要遍历一次就可以完成，但table及其内部元素除外，他们可能需要多次计算，通常要花3倍于同等元素的时间，这也是为什么要避免使用table布局的原因之一
# 重绘
由于节点的集合属性改变或者样式改变而不会影响布局的，称为重绘。如outline、visibility、color、background-color等等。重绘代价高昂，所以浏览器必须验证DOM树上其他节点元素的可见性。
# 回流
布局或者几何属性需要改变就称为回流。回流是影响浏览器性能的关键因素，*页面重新渲染*。一个元素的回流，可能会导致其所有子元素以及DOM中紧随其后的节点、祖先节点元素的随后回流。
# 浏览器优化
现代浏览器大多是通过队列机制来批量更新布局，浏览器会把修改操作放在队列中，至少一个浏览器刷新帧（例如16.6ms）才会清空队列，但当你*获取布局信息的时候，队列中可能会有影响这些属性或者方法返回值的操作。即使没有，浏览器也会强制清空队列*，*触发回流和重绘*来*确保返回正确值*。
例如offsetTop、clientTop、scrollTop、getComputedStyle()、width、height、getBoundingClientRect()，应避免频繁使用这些属性，他们都会强制渲染刷新队列。
# 减少重绘、回流
## CSS
- 使用transform代替top
- 使用visibility替换display：none，前者引发重绘，后者回流
- 避免使用table布局
- 尽可能在DOM树的最末端改变class
- 避免设置多层内联样式，CSS选择符从右往左匹配查找，避免节点层级过多
- 将动画效果应用到position属性为absolute或者fixed的元素上，避免影响其他元素的布局
- 避免使用CSS表达式，可能会引发回流
- CSS硬件加速
## JavaScript
- 避免频繁操作DOM样式，修改class最好
- 避免频繁操作，合并多次修改为一次
- 避免频繁读取会引发回流、重绘的属性，将结果缓存。
- 对具有复杂*动画的元素使用绝对定位*，使它脱离文档流
