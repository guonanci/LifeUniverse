background简写属性的顺序：是background-color，background-image，background-repeat，background-attachment，background-position，background-size。

body
{
background: #ff0000 url(/i/eg_bg_03.gif) no-repeat fixed center/100% 100%;
}
注意：如果用background-size,一定要用/分隔
————————————————

                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。

原文链接：https://blog.csdn.net/m0_57033755/article/details/132457282




# background-size

图片可以保留原有尺寸，或者拉伸到新尺寸，或者在保持其原有比例的同时，缩放到元素的可用空间的尺寸。
50%(3em,12px,auto):
一个值: 这个值指定图片的宽度，图片的高度隐式的为 auto
100% 100%
逗号分隔的多个值：设置多重背景
<percentage> 值，指定背景图片相对背景区（background positioning area）的百分比。背景区由 background-origin 设置，默认为盒模型的内容区与内边距，也可设置为只有内容区，或者还包括边框。如果 attachment 为 fixed，背景区为浏览器可视区（即视口），不包括滚动条。不能为负值。
auto 以背景图片的比例缩放背景图片；

cover

contain

# bg-clip

设置元素的背景（图片或颜色）是否延伸到边框、内边距盒子、内容盒子。border-box,padding-box,content-box

# bg-color

不继承。

Global values：inherit，initial，unset

# bg-img

`background-image:linear-gradient(rgba(0, 0, 255, .5), rgba(255, 255, 0, .5)), url('../../media/examples/lizard.png')`
`background-image`设置一个或多个背景图像。在绘制时，图像以 z 方向堆叠进行。先指定的图像会在之后指定的图像上面绘制。因此指定的第一个图像『最接近用户」。然后元素的边框 border 会在他们之上被绘制，而 bg-color 会在它们之下被绘制。图像的绘制与盒子以及盒子的边框的关系，需要在`bg-clip`和`bg-origin`中定义

如果图像无法被加载—例如，在网络连接断开的情况下—背景色就会被绘制。

# bg-origin (border-box, padding-box, content-box)

if bg-attachment == fixed, this property wont work.
applies to all elements. It also applies to ::first-letter and ::first-line.

# bg-position

相对于 bg-origin 定义的位置图层的。
top/right/bottom/left/center/25% 75%/0 0/1cm 2cm/10ch 8em
0 0, center
bottom 10px right 3em
bottom 10% right
bottom right 10px(Edge offsets values)

关键字 top, left, bottom, right 中的一个。用来指定把这个项目（原文为 item）放在哪一个边缘。另一个维度被设置成 50%，所以这个项目（原文为 item）被放在指定边缘的中间位置。
<length> 或 <percentage>。指定相对于左边缘的 x 坐标，y 坐标被设置成 50%。
如果一个值是 top 或 bottom，那么另一个值不应该是 top 或 bottom。
如果一个值是 left 或 right，那么另一个值不应该是 left 或 right 。

# bg-repeat

repeat（图像会按需重复来覆盖整个背景图片所在的区域,最后一个图像如果大小不合适的话会被裁剪）repeat-x,repeat-y,
space（均匀分布）,图像会尽可能得重复, 但是不会裁剪. 第一个和最后一个图像会被固定在元素(element)的相应的边上, 同时空白会均匀地分布在图像之间.

background-position 属性会被忽视, 除非只有一个图像能被无裁剪地显示. 只在一种情况下裁剪会发生, 那就是图像太大了以至于没有足够的空间来完整显示一个图像.
round(缩放),随着允许的空间在尺寸上的增长, 被重复的图像将会伸展(没有空隙), 直到有足够的空间来添加一个图像. 当下一个图像被添加后, 所有的当前的图像会被压缩来腾出空间. 例如, 一个图像原始大小是 260px, 重复三次之后, 可能会被伸展到 300px, 直到另一个图像被加进来. 这样他们就可能被压缩到 225px.

译者注: 关键是浏览器怎么计算什么时候应该添加一个图像进来, 而不是继续伸展.

no-repeat,图像不会被重复(因为背景图像所在的区域将可能没有完全被覆盖). 那个没有被重复的背景图像的位置是由 background-position 属性来决定.

background-color会被background覆盖；
