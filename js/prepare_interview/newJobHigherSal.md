1. why did you choose to be a fe?



2. what happened from URL-inputing to page-Loaded?


3. 如果周末休息日碰到公司领导问你为什么留在公司,真的是公司业务需要我加班,那么就实话实说;如果不是,就说我在巩固代码规范还有认认真真地熟悉公司前端架构,学会抽象的架构思维...



apollo/m-site:

appController.js原理分析

where do we have to use encodeURIComponent  or decodeURIComponent ??

怎么把设计模式相关类文章写得更好...

据说 vm vh 是以后的标准,只不过相比于rem, vm vh 现在的兼容性还不行...

- 对输入 URL 到页面加载玩作总结: 负载均衡,反向代理,网页性能优化(重点)...

-----------another part----------


##首先选择好自己受打扰程度最低,全身心投入,专注

##尽量不听歌,除非自己相当相当的累,就差闭眼流口水滴键盘上趴桌子睡觉的那种地步, 然后才听上一首激情四射的地步...否则今天定好的目标必须完成,敲键盘到第二天凌晨,然后倒床就睡, 睡两三个小时也必须完成!!

##说实话,一听到上面的言语,心里就特别期待这样的生活...

##现在我开始把ST 的 Auto-Save插件给关了(全部保存是 Alt + Command + S 快捷键吧),看到底是哪种更适合我,不管写文章还是写代码...

##好了,最近我要开始不断积累前端实践经验,然后开始在 segmentfault 上帮助别人,重要的是同时也会提高自己吧

##autoRem.html is the key.(对比一下这里的autoRem 写法和 bluegogo 的简单写法，优势在哪里，又还有哪些不足。。)

##listPager组件分析

----------excellent-npm-package-location----------

- rider.js

apollo/m-site:

@file rider
@author firede(fire@firede.us)
base.styl muse.styl font.styl /view/apollo/common/autoRem.html /node_modules/rider/lib/rider/unit.styl,setting.styl /node_modules/rider/lib/rider.js


- yargs

- rider

- leftpad

- loadash inner codes

- getCountByValue

- service.js   再也不要在每个 js 文件里面单独写 ajax 请求什么的...因为这样做的话没法配置...`~/pro/pc-site/src/apollo/common/service.js ~/pro/m-site/src/apollo/common/store.js`



##cc:

1. $.when.apply
$.isFunction $.type(有 date 类型呦) $.makeArray(args) outerHeight(true) $.contains(container, contained); :contains('text') selector
$.Event() constructor
decimalLength.js   获得小数的位数 decodeHTML.js encodeHTML.js
document.body.onselectstart = false; disableSelection.js enableSelection.js
float2Int.js 把小数转换成整数,避免小数计算的精度问题  split + join是一对神器组合.
divide

eventOffset.js: 获得当前事件event的 offsetX,offsetY;
event.target.getBoundingClientRect(); // 注意这里 Firefox 上面 Event 对象没有 offsetX属性,只有 clientX,left 属性,做差即可.

eventPage.js: 获得事件的 pageX/pageY,IE 不支持event.pageX,event.clientX + event.scrollLeft 即可

extend.js 对象之间复制属性,同名属性跳过不覆盖...$.isPlainObject() check if an object is created using `{}` or `new Object()`

firstDateInMonth 月的第一天日期
lastDateInMonth
offsetDate
firstDateInWeek
lastDateInWeek

guid 生成全局唯一的 id

imgDimension.js

innerOffset.js

isActiveElement.js -- document.activeElement  ??是否是文档当前激活元素 是focus 状态嘛?

isHidden.js   之所以这样的判断都要用上 js 文件是因为 hidden 的css 有3种可能.

isValidDate.js

keys.js

lpad.js -- node package left-pad.js

minus.js multiply.js

nextTick.js下一个时间片

common/script.html   -- 加载脚本,如果HTML任何 js 文件引入之前必须把它加上,通常放在 body 最后面...

script_path in tpl,html-file && scriptData-variable in js-file
- image-compress

canvas:

1. https://github.com/RubyLouvre/avalon.oniui/blob/master/fileuploader/inputproxy.js

node server:

2. https://help.aliyun.com/document_detail/32223.html?spm=5176.doc32228.6.475.0e5Gh4

3. https://help.aliyun.com/document_detail/oss/oss-img-guide/resize/resize.html

4. https://market.aliyun.com/spec/highload?utm_campaign=rjxz&utm_medium=rjxz&utm_source=oschina&utm_content=m_1185




- 看了这么多源码之后发现有许多小手段可以节省代码量,比如说 `&&`,`||`,`!`可以节省许多 if 语句相关的代码量,`if (arr.length) {...}`等等.
1. return $.noop;
2. $.now()


- loadNavPanel();

- lazyLoadImage.init();

- navBar.styl not work well with authoRem.html.

- `display: box;` vs `display: flex;` and also you can write `display: -webkit-box;`

- weinre VS vorlon VS chrome-on-phone-connected-with-computer

- [EFE-DEBUG-ARTICLE: ios-fixed-layout-not-work-when-softKeyboard-popUp](http://efe.baidu.com/blog/mobile-fixed-layout/?utm_source=tuicool&utm_medium=referral)


#好好完成每周的分享任务还有一些 ewiki 的编辑...这样可以在年底考核中加分,,,可以涨工资呀,技术等级也可以提升到 T4 呢...


##以后我每天都得想想有什么可以写到杭州互联网公司(好一点的比如说阿里)的简历上去呢

- 三方面吧:

##几个技术实现复杂,细节繁琐,产品价值巨大的好项目

##自己在技术上最牛逼的几件事

##git + segmentfault

##以后在北京拿不到户口的话还是去杭州买房吧


#m1:

- m-fe/view/common/base.html
- m-fe/view/v2_common/base.html
- m-fe/view/common/script.html
- m-fe/view/v2_common/page_module.html
- m-fe/view/common/autoRem.html
- m-fe/view/common/pageScale.html
- m-fe/dep/base/0.0.3/base.js
- m-fe/src/common/url.js
- m-fe/src/common/ui.js
- m-fe/src/common/ui_new.js
- m-fe/src/common/function/lazyLoadImage.js
- m-fe/src/common/loader/parts/lazyImageDataParser.js

#m2:

- jockey.js
- app.js
- manifest.js
- ga.js
- app_config.js
- gulpfile.js
- ui.js
- url.js
- getSmsCode.js
- env.js
- getImgCode.js
- swiper.styl
- swiper--README.md

#pc-site

- /Users/bjhl/pro/pc-site/src/apollo/css/common/base.less

- /Users/bjhl/pro/pc-site/src/apollo/css/common/icon.less

- /Users/bjhl/pro/pc-site/view/apollo/common/base.html

- /Users/bjhl/pro/web-fe/dep/cc/1.1.1/src/util/url.js

- /Users/bjhl/pro/web-fe/dep/cc/1.1.1/src/function/split.js

- /Users/bjhl/pro/pc-site/dep/apollo/cobble/0.3.27/src/helper/AjaxUploader.js

- /Users/bjhl/pro/pc-site/dep/apollo/cobble/0.3.27/src/ui/Pager.js

- /Users/bjhl/pro/pc-site/view/apollo/common/component/pager.html

- /Users/bjhl/pro/pc-site/src/apollo/activity/kaoba.js -- require('common/lazyImage).scaning(true, $('banner-img')

- /Users/bjhl/pro/pc-site/view/apollo/common/component/list_pager.html


#m-site

- /Users/bjhl/pro/m-site/src/apollo/common/appController.js
- /Users/bjhl/pro/m-site/build-norelease.sh
- /Users/bjhl/pro/m-site/build-branch.sh
- /Users/bjhl/pro/m-site/build
- /Users/bjhl/pro/m-site/src/apollo/common/util.js

- 作为 m 站我以后要更多地关注移动方向的技术。。。

http://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651551300&idx=1&sn=07ce421f88805303f4f4705ddea2a48a&chksm=8025a185b7522893cda66c69af087428ea8827419e174207c537f73c704e854ea3cdbbbdb889&scene=0#rd

https://github.com/xufei/blog/issues/19

#以后只要是我的merge request，diff 尽量少一些，不管是改别人的代码还是自己以前写过的代码，尽量记住 简洁 二字！！高手写出来的代码都是简要而且高效命中的！！

#实现一个一模一样的功能，代码写的越少，手指头懂得越少，证明你的能力越强。。。


#这段时间冒出了不少问题 对我以后的绩效影响比较大。。。   诶


看了看诗铭写的，觉得很不错，向他学习。不过我就也来扯一扯吧：

从 10 月份打入咱们 o2o 事业部以来，这三个月一直在做 m 站的业务开发。2016年下半年的总结有：
工作方面：
1. 有一段时间状态不是很好，经常出一些 bug；
2. m 站的业务，做了比较多的活动页面，代码主要是 jQuery 逻辑；
3. 代码规范（主要是 js 部分）遵守地比较好，但是逻辑总体来说还算比较简单，技术性也不强。
技术方面：
1. 基本上呢，我现在是碰到自己感兴趣的东西就会私下去琢磨琢磨，觉得自己懂了80%也就放下了，但是方向不系统。
2. 主要是 js，编程能力还不够。
3. css，html 提不起兴趣，一直没什么进步似的。
2017年，希望自己可以在以下方面改善：
工作方面：
1. 碰到技术痛点，bug的话，更加注重技巧，积累调试经验，如果有坑积极分享给大家；
2. 往机构方向接触，向峰爷学 angular，要是他可以建个基于 angular 2的新仓库开发新业务就好了。
3. 能用面向对象的方式开发并维护一些 m 站的公共组件。
技术方面：
1. 熟悉 es6 的常用模块，在机构项目里面使用；
2. 项目里面使用上 HTML5-API；
3. 写 css 样式和动画交互时，更多地用上 css3。
总之，自己要做的东西还很多，不过还好自己发现得还算比较早，嘻嘻，大家一起加油。2017年，我会以业务为主，碰到坑，积极面对，找到问题的关键点就行。