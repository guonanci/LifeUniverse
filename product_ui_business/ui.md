# books

写给大家看的设计书；简约至上：交互设计四策略；在你身边，为你设计；佐藤可士和的整理术,点石成金，瞬间之美，交互设计沉思录，移动射击
http://adobeedu.com/adobe/book.html
https://zhuanlan.zhihu.com/p/76252695
https://zhuanlan.zhihu.com/p/52479902

# 拼多多

http://www.woshipm.com/pd/3916042.html
https://zhuanlan.zhihu.com/p/68468924

# Apple Design

https://zhuanlan.zhihu.com/p/150806545

portfolio 文件夹；新拟态；

# font

舒适的样式设置：
#333(灰)
#999（黑）
fontW:600（加粗）

# hover

hover 时，一行一行之间会有眼花现象（color:#333 #fff,bg:xxx,yyy)

# modal

体现了什么设计原则？
把遇到的 modal maskClosable 都设置为 FALSE

# 请求次数+前端缓存

比方说删除接口调用成功后需要手动调用 list 接口的（避开两个管理员同时操作一个页面上的同一个元素时，出现接口报错，不过这种报错不打紧，为了保证极致体验，能不调接口就不调接口）

[Tooltip/Popover 区别](https://zhuanlan.zhihu.com/p/353694913)

[Google-UI 设计 由 click 和 hover 触发区别](https://www.google.com/search?q=UI%E8%AE%BE%E8%AE%A1+%E7%94%B1click%E5%92%8Chover%E8%A7%A6%E5%8F%91%E5%8C%BA%E5%88%AB&sxsrf=AOaemvJGvg9UABqLr0FMgTy8U_zRSbT_Mg%3A1631153663940&ei=_205YbOBOZq_9QPpmbXoDA&oq=UI%E8%AE%BE%E8%AE%A1+%E7%94%B1click%E5%92%8Chover%E8%A7%A6%E5%8F%91%E5%8C%BA%E5%88%AB&gs_lcp=Cgdnd3Mtd2l6EANKBAhBGAFQ4vwEWLGnBWD9qAVoAXAAeAGAAeYDiAHKFZIBCTAuMi4zLjEuM5gBAKABAqABAcABAQ&sclient=gws-wiz&ved=0ahUKEwjz_Nn16PDyAhWaX30KHelMDc0Q4dUDCA4&uact=5)

app 上弹窗的 close-icon，其实整体上增加了公司的商业收益，但是损害了我的利益，我如果会去评价的话自然会去评价，非得耽误我 3s 到 5s 的时间，但是我的你这样反而给我留下不好的印象，我以后一定尽量少用你们集团的全部 app（还不都是这个尿性），我为了把更多的时间用在工作上或者看更多的书。

# antd

https://ant.design/docs/spec/font-cn

# editor

怎么判断有没有编辑过。（内容和原始内容判断是否相等有失偏颇？就是这样的.）。因为如果去判断有没有 change 过各种表单项的值是一件非常细节的事，完美没有必要的

多和 UED 讨论问题，有助于构造出更佳的用户体验。

重复的按钮有点多，所以是不是 hover 上才显示出来？

# form

itm like input, should be focused automatically

# 设计美学

https://www.ltncg.com/info/%E8%AE%BE%E8%AE%A1%E7%BE%8E%E5%AD%A6%E4%B9%A6.html
[设计师必看的 9 本美学书籍](https://zhuanlan.zhihu.com/p/56983301)
https://www.uisdc.com/design-aesthetics-magazine
https://zhidao.baidu.com/question/310329241.html
[10 本日本设计好书](https://www.bilibili.com/read/cv5790207)

# 组件库通用样式设计总结

https://juejin.cn/post/6844903634870730766

作为前端 UI 组件库，从样式角度去看，应当满足两方面要求：一致性和可定制[1]。
其实这两点也非常好理解，一致性保证了组件库视觉上保持一致，而不是东拼西凑，而且说得高大上一点可能还有规范可循。而可定制就需要组件库暴露接口，供开发者配置形成自己风格的组件库。

作者：拾迹
链接：https://juejin.cn/post/6844903634870730766
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

可定制
根据可定制的粒度大小，可以分为组件层面的可定制和整套组件库的主题定制。有组件使用经验的同学都知道，使用具体组件时我们可以传入某些参数或主题参数，组件就可以呈现不同的表现。另外，一些有名的组件库也都提供了主题定制的相关方法，如 antd-mobile 、Vant 和 Element ，尤其是 Element ，提供了多种主题定制的方法。

作者：拾迹
链接：https://juejin.cn/post/6844903634870730766
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

设计规范先行
前面提到的一致性是由“设计规范”来保证的，其实这一块涉及到的内容非常多。可能在我们眼里就是组件库里的那套看似杂乱无序的通用变量（设计规范 ≠ 通用变量），但是其实里面还是有一些套路的，也建议多多和设计师沟通，产生思维碰撞，你会发现一些平时写代码过程中不一样的思维。在我和设计师沟通的过程中，这点体验非常深。
设计规范包含哪些内容？
那和组件库密切相关的设计规范体现在哪些方面呢？前几天饿了么前端架构师 林溪 在《Vue 组件库建设实践》分享里提到有以下内容：

统一视觉样式

色彩
布局
字体
图标

统一交互动效

时长、缓动
移动路径
形变、编排

作者：拾迹
链接：https://juejin.cn/post/6844903634870730766
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

准备周五的前端面试题（设计模式、js 底层原理（重绘重排）、算法）

MasterGo产品设计工具
