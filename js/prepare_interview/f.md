# 不折腾的前端，和咸鱼有什么区别

这里的一切都是为了提升我的与技术相关的一切综合素质

# front-end release system design

# experience

## several async requests

await
改完东西要好好测试一下，测好了再搞下一个东西。。。

## qr

qr-img size should be moderate,

再复杂的应用主要是思路清晰就好搞，架构上，设计上理清楚（权衡的时候需要认认真真），代码就好写许多

Understanding is the base of memory.

## team-working && tech-leadership

经常推代码，和同事共同开发的时候，拉下别人的代码的时候别人写的好代码还有坏代码。

每天都要在 gitlab 网页上看看别人推的代码（在上面看方便些）

### 新人入职

要明确传达现有的开发资源，接下来的计划以及系统架构图，公司介绍等等

### 与领导相处

跟领导说进度问题一定要实事求是。说话要有底气，靠谱，踏实，实事求是的感觉，能做到多少就说多少，不要说多不要说少。

# 命名规则

## 文件 文件夹

图片采用驼峰

## js

驼峰，变量连起来不超过 5 个单词
最好不要轻易加上 data，info 这样的字眼，多余没用还增加长度

### URL

驼峰，最好不超过 3 个单词

### wordsOftenUsed

event error res item key suc cur

生活中常见的名词：HTML CSS JS TypeScript JavaScript

数组用 List，对象用 Map 命名，Collection 暂不考虑

我这个人对命名特别讲究，所有的回调函数还有方法还有数组对象的遍历方法我都会采用语义化的方式，比如说 cityItem，

### 怎么搭建 cms 或者图片服务器

## dev principles

一定要以 UI 设计图为准，万不得已某个地方实现不了的话要跟设计师商量，看看能不能妥协

## 怎么根据设计图还有后端返的数据结构，还有 UI 库去封装业务组件，而且什么时候要用上 hoc 目录呢

https://juejin.im/post/5badbf5ce51d450e8477ce58
https://echarts.baidu.com/echarts2/doc/example.html

## 和后端开发合作

有时候是他们代码没有同步到 test、dev、uat 环境造成的，生产上是好的但是没有发布到当前你要测的环境过。

## enhancement

蓝湖的 Web@2x.png 格式等等图片要开启切图压缩

原来 debugger 之后不用再去看 console，而是看右边的 scope 就可以看到所有的当前作用域的变量了。

常见正则默认值
密码至少为 6 位，而且可以为字母或数字或组合

https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

location.pathname + location.search(includes ?)

https://www.google.com/search?ei=D6l_XLOtOIXB-wTAsZKoCg&q=js+cdn+比较

Your application is running here http://localhost:3000
[HPM] Error occurred while trying to proxy request /official-api/front/category/detail?\_=1551949799403&queryStr=qq&pageSize=24&pageNum=1&current=1&totalPages=1&total=3 from localhost:3000 to https://qz-uat.xinyan.com (ENOTFOUND) (https://nodejs.org/api/errors.html#errors_common_system_errors)

user-select img-tag can not be long-pressed-auto-save-to-album

https://medium.com/crowdbotics/how-to-use-usereducer-in-react-hooks-for-performance-optimization-ecafca9e7bf5

https://www.stellarinfo.com/blog/recover-files-deleted-mac-user-account/

代码需要每日提交来积累起来！！

qz-front-dev 可以用来测试 jenkins-nodejs npm run build 环境搭建。

原来 IE 浏览器的调试工具网络项需要点记一下绿三角才可以。

客户报告 下拉框改回原始宽度。

# desktop browser

"Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Tablet PC 2.0; rv:11.0) like Gecko"

"Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Tablet PC 2.0)"

到底要不要依赖 unpkg cdn （600 多 ms，尽早挂掉的 bootCDN 也只有 100 多 ms 的配速呀），经过深思熟虑还是统一采用 cacheGroups 的形式。

# cdn

npm 5KB 以上的尽量采用 jsdeliver，5KB 以下的尽量采用 webpack splitchunks cacheGroup 做优化（不得大于 5 个）

# npm

## node-sass

node-sass@4.11.0 postinstall /Users/nanci/bjhl/pro/qz-front/node_modules/node-sass

> node scripts/build.js

Binary found at /Users/nanci/bjhl/pro/qz-front/node_modules/node-sass/vendor/darwin-x64-64/binding.node
Testing binary
Binary is fine
npm WARN qz-front@1.0.0 No repository field.

- node-sass@4.11.0
  added 128 packages from 126 contributors, removed 131 packages, updated 1294 packages and audited 33919 packages in 192.074s
  found 62 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details

# IE

IE 浏览器下使用搜狗输入法的兼容性问题。

# common business

注册的时候才去检验密码格式，登录的时候就只校验非空就行了

# 压缩图片

https://tinypng.com // best
https://www.base64-image.de
image-webpack-loader
https://juejin.im/entry/587f14378d6d810058a18e1f

# ServiceWorker

# PWA

# StoryBook

# 虚拟机 Parallels Desktop

用 IP 来替换 localhost 做 Mac 上虚拟机的调试。

# PDF downloading

jspdf 无法下载非 base64 图片、含有 backgroundImage 的网页

# package version control

一般来讲 ^允许小范围的 package 版本升级，不会带来什么问题，roadhog 比较奇葩

# SPA 首屏加载时间优化

reduce the waiting(ttfb, time to first byte) time.

# window.open()

The better way to completed avoid pop-up blocking in browsers is to

```js
printButtonClicked: function () {
  // immediately open a bew pop up window, but fill it with content later, when ajax request will be completed
  var id = (new Date()).getTime()
  var myWindow = window.open(window.location.href + '?printerFriendly=true', id, 'tooltip=1,scrollbars=1,location=0,statusbar=0,menu
  bar=1,resizable=1,width=800,height=600,left=240,top=212')

  $.post('/ajax/friendlyPrintPage', postData)
    .done(function (htmlContent) {
      myWindow.document.write(htmlContent)
      myWindow.focus()
    })
}
```

今天又要迟到了，每次迟到我都愧疚感万分，就像吃了大便，，，相当怀念以前 7 点 20 到公司的日子，特别是挤地铁的时候要么打盹要么听歌什么也干不了我再也不
要晚睡(*￣ m ￣)再也不要晚起，晚起的人只配呆呆地挤地铁( •̅\_•̅ ) 我的作息时间只有两种选择 5 点钟起床 7 点到公司 7 点半到公司还有就是 8 点起床 9 点半迟到
，世界上最幸福的事就是日常打卡，早睡早起打卡，高效投入到工作与生活打卡，尽兴早跑打卡，保持着这一切都是那么美好，这些日常打卡永远都不会变，变的是
一个个当前阶段的小目标，TD 极速增长时一定要好好辨别方向到底在哪里。一天最多玩一把游戏，别看游戏直播，别人手机也别玩）否则剁吊（和宝宝一起玩的除
外）。在家除了睡觉时间别躺床上否则剁吊（可以做一些微运动比如说仰卧起坐）。在家手机只连插排充电否则剁吊（迫不得己害怕没电回家就带充电宝出去）。
每天起床早跑喝半杯水听首歌就睡觉做不到就断子绝孙。要经常跟老爸老妈老姐伯父光明哥视频聊天。一个月最多请宝宝吃一次饭。从不吃外卖做出来的饭菜但是奶
茶咖啡披萨会考虑。不能说宝宝傻逼（如果觉得宝宝笨的话就说宝宝你弄错了）。看到好看的照片就评论一下或者点一下赞否则就当没看到。每次都要提前一天为周
例会做准备，这是对本人工作的负责，负责一直都是我的本性。每一次别人发给我的微信只要对面不是推销的就必须回复。宝宝想主动牵我的手想要勾引我的话我会
成全她，但是我肯定再也不会主动靠近你。宝宝觉得我在怀疑她才跟她说分手还说我姐怀疑宝宝欺负我，还说我确实情商低。那我就证明智商挫商比情商确实更重要
。关键是如何说到做到，人最聪明的地方在于竭尽全力、一直保持最佳状态、一步步尽早实现自己的一个又一个梦想。老妈的麻将病确实比较麻烦，必须找点事情做
就好了，老姐说得对，以后确实需要我来承担家里的一切事情拿一切主意啊。我乱花钱的毛病确实得改（不过我还是认为我赚了理发店店长的钱）。睡觉前听一首
南赐 KTV 必唱早上睁眼听一首跑步歌。开场平仓一定要操作正确千万不要搞混了(*￣ m ￣)。唱歌要用自己正常说话时的磁性声音来唱不要用公鸡音公鸭音，唱歌时一
定要贴麦，这样我唱歌没那么累(((￣へ￣井)也不容易走音，带点肢体语言更容易带上情绪。穿衣服外套要性感地呈半拉开状态。唱歌时要带些啊 耶 唔 啦 诶等
等拉高，拉平，拉低，结束，转折，强化，强调作用的语气词。我这一整天的努力都为九点下班 10 点半睡觉 5 点起床跑步作准备。跑步前把鞋带脊最紧跑完松开鞋带。
带电脑回家就一定要用上，出门之前一定要把水喝完不管有多少。一定不要因为悬浮按钮影响手机上的任何其他操作特别是 TD 的开仓平仓一定要确认好，别不点确定
把开仓当平仓。一边午睡一边按摩。喝完瓶里面全部的水再去重新装一瓶。裤子 XL 码衣服 XXL 码。吃饭一个人做大桌子最爽。TD 一点之差没关系关键是要立刻成交立
刻申报平仓别浪费时间。不用删去任何手机应用，永远不从桌面找应用。袜子每天都要换洗。起床时听两遍闹钟再起床要轻松许多，容易养成早起的习惯。每天早上
洗头边洗头边用梳子梳去头皮屑要梳 3 分钟边梳边用手打圈按摩，洗完头吹 3 分钟，然后头皮营养液贴紧头皮喷在头皮上，按摩 1 分钟摆正一下发型。解锁只需在黑屏
时用力按下 home 键就行了，查看通知也是这样。提升打字速度需要把眼睛凑近然后手指瞄准一些。2019 一年以内不买衣服裤子鞋子 π*π。TD 看不出上涨的趋势就使
劲卖。一天一定要喝够 10 杯水。一天换一双袜子一天换一双鞋子。说话的音量音准一定要保持在别人一下就能听清楚其中的含义语气心情。不想跳槽了只想好好在数
禾科技做好大前端。觉得我的发型看起来头发少，定型有问题，能不能尽量让秃的地方先遮住，解锁只按 home 键就行了，查看通知也是这样。提升打字速度需要把眼
睛凑近然后手指瞄准一些,一年以内不买衣服裤子 π*π

会煎饼，牙不好，不吃螃蟹，双眼皮，不喜欢吃鸡爪鸭爪，不吃就咸鸭蛋太咸了，下次有吃的要给我还逗我不想给的样子，我就一把抓住你的手紧紧不放，农历 4 月 2
5，6 月 30（不一定每年都有），胡辣汤 酸豆角包子 比较喜欢吃辣 性保守，163 个子高还嫌我矮说我骗她 176，俺的外号有这些：大郎 毛毛。下次你给我吃的还撒
娇不松手我就去咬你的手看你松不松，颜色较深的猪肉不新鲜，，辣椒斜切，葱段切圆，老姐的一句话怼的我不敢出声（／*＼）我要克服，，以后出门我一定要带
包带上充电宝想怎么玩手机就怎么玩，，，哼哼哼，不吃肉包，吃两个酸豆角包子，不吃烧卖说是有点腥味，，青菜能削皮的就尽量削皮，一方面干净一方面可口，
味道没那么苦。停车或者去个地方需要记住临时路线保持方向感距离感。听到事故多发地的时候要减速提神，吃泡面的时候睡两个小时。KTV 唱歌要贴近麦耳音更大
些，蹭别人车要帮付部分油费这是礼貌。宝宝和我老姐见个面而已，不谈正事，我比你小两岁如果两年之后我买不起房那我两十有八九各奔东西，一想到这个我就没
压力吗。你和我你觉得谁压力更大心里没点逼数吗。别人叫你要第一时间在二楼窗户边上回复别人然后再去穿鞋子。家里比较冷先做 50 个仰卧起坐或者电炉把身体，
手掌热乎起来再去写代码，穿两件毛衣穿秋裤，中午一定要吃两碗饭，晚上加饭加菜或者一碗半。每天最多只玩一把游戏边开音乐边玩，年夜饭要好好的自己做几个
拿手菜，红烧猪蹄，玩妲己要时刻注意准确判断好每一个敌人每时每刻的走位最好不要被别人发现你当前的位置，一辈子不要看微信直播，单排上王者就是牛逼得不
用解释눈*눈主要不是跟宝宝交代行踪而是把自己的所见所想主动跟宝宝分享，传播正能量和积极准确的认知，最好带上自己的观点，别人接电话时要先确认对方是不
是手机主人，一般凭声音判断判断不出的话再问一下确认一遍，跟别人相约见面最好要有电话，不能只有微信。妲己如果眩晕别人的时候别人有位移或者免疫效果的
时候要后退一步。家里来客人需要自己下厨做很多菜做很多家务，一家之主的大男人也需要会做很多菜。同学约我就说家里有客人要陪。手机不是很重要技术主要是
通过电脑来实践，千万不要花费大量时间在手机上。喝酒之前先喝点牛奶肉汤鸡汤。要养成作息饮食生活锻炼工作的好习惯，才能养精蓄锐事业爱情步步高升，不要
等困了去午休晚休不要等渴了去喝水不要等感冒了去锻炼。居住证是不是在换房子的时候也要更新？情人节礼物或者花朵要提前一天在网上选购。以后我再也不会主
动示好不主动牵手不主动问候不主动关心。生蚝补肾。汆 cuan 第一声萝卜，把食物放开水里煮一煮。宝宝为什么一直不想和我合照我俩在一起过吗我算她男朋友嘛我
不会一直是她备胎吧我以后去加班的时候手机开启飞行模式这样没人打扰我加班了想老爸老妈的话就恢复正常模式后给老爸老妈报平安问候一下他们但是不要告诉宝
宝我在加班我自己一个人默默高效加班就好了。这周肯定没做完官网但是周一还是需要汇报工作所以必须要弄完登录登出，运营商报告页淘宝报告页。还有数据源列
表页所以任务很艰巨。去加班的话跟我姐 6 点钟说一声今天加班去了晚上 11 点到家。然后白天一直开启飞行模式说请任何人别打扰我。我不太适合唱歌最多练一下周
杰伦还有网易云的歌练得好就发布出去，练不好就自己听。老盛昌汤包排队按序来免得让老人家误会，扫码过会扫就好了。我是中性皮肤，去角质粉刺毛孔缩小去雀
斑麻子脓包痘痘，痘疤痘坑怎么办呢。看一下头皮情况（收费的话就不看）。永远不对老姐姐夫撒谎不对老爸老妈不对宝宝撒谎，今天什么样的安排早上 6 点就直说。
每次写完 todo blur 一下。TD 和国际白银只需看日线，美元指数需要看看 15 分钟曲线。以后任何一个地铁站也不要坐过头。全民 K 歌唱歌时不要唱公鸡嗓公鸭嗓。

月目标：今天 4 月 3 日从今以后不跟别人聊天，jenkins 配置好脱离手动打包还有所有爬虫前端项目实现在线编译并且要保障很高的成功率；漫道讲师申请 ts
immutable 实践；招一个得力助手；TD 赚到 20 万；自己搬到新家，完善 H5 应用代码设计与架构。下个月目标：选一个好的 rn UI 库或者 flutter 开发完成手机版后
台系统上线也可以。处理线上问题，rxjs 应用，设计模式图解读完，实践并且准备好 PPT 读后感，实践体会。npx，defaultprops 可以尝试写但是先不考虑，antd
modifyvars，npm 锁定版本号以及^ ~ x\*，每一个异步处理都可以考虑 suspense，不止 src/index.tsx。throw error 的 error.message。vuex 源码
挖掘，redux，mobx，rxjs 源码对比。async/await two articles merged together，interface T，联合类型，多和季总，丁老板交流爬虫业务，和
架构交流后端技术前端技术。每天都要询问下属进度并帮助他解决问题或者提供思路，其实主要还是提供思路就好对双方都有很多好处，每天向领导汇报进度每天站
会，统一 css，ts，vue-ts，angular 规范，新人入职指南，上线流程，git 管理规范，组件封装规范，前端代码自动化部署规范，nginx 代理配置规范。

写一个 vue PC m 端兼顾的 vue loading 动画库，可以设置 margin padding header content footer 通常为列表型或者图表型，注意 listItem 包括
listHeader （avatar arrow#own ），listContent（img 数量 1 2 4 9，大小和布局了&或者 text 环绕图片还是只有 text）or listFooter 分享
评论 点赞，，flexspacearound flex end flexstart ，，，listNumber banner buttontab 这种情形怎么处理 type 包括 circle smaller big
ger ，bouncing skeleton progressbar mlgb 我注意到许多国内 APP 都是 APP 启动时弹广告 ，，，，还有个人主页，首页带 banner，滚动新闻 注意
skeletons 的 border 位置，有无 所有结构布局方面的灵感来自拉勾，领英，微博 微信公众号（文章类有博文标题，主体，评论留言部分） 微信钱包页
支付宝，优酷个人主页 卡片即子产品入口类型布局 微信设置页 groupcell 型 抖音 电商京东淘宝 瀑布流布局 消息对话框 淘宝首页 按展区划分商品，
swiper 代替滚动新闻 区块 header scrolltab（whether menu menu position，imgcontenttlist，，，简书，得到 知识分享类 personaltab
3imginlistitem 发现，推荐，消息，专题，functionblock square or circle 一行 5 个或者四个 ，，，content can also be alphabet list
，float right border banner whether show borderright ，，，whether show avatar in listitemfooter，，，searchheader
whether borderradius ，，，bordered banner，，，最终应该是像 antd，vux 这样去引 Button Input，，，listitemfooter can also be
lefttwo 垂直 bar and righttwo 水平 block，，，两条简要评论，位于 lisitemfooter，，，瀑布流一行四个或者三个，，，可配置 gutter，，，，什么
时候选择 grid 什么时候选择 flexbox，，， 个人资料编辑页，，，whethershow scrollfunctionblock pageflag flagposition flagnumber，
默认只居中，， star rule 4.00-4.25 算作 4，4.25-4.75 算作 4.5，4.75-5.00 算作 5，不过美团外卖卖家评分，只精确到小数点后一位，扫一扫，客服
位于搜索框左右两侧 ，，，，加载失败默认页代替 404

# 网络层面 TCP UDP

三次握手四次挥手原理详解

github 上面不写博客，博客以后只在掘金上面写。

命名即注释，代码即文档，代码自解释，设计即流程。

以后再也不用 rm -rf 命令了。只用 rm 命令

职位描述：
负责大前端的架构设计，梳理和优化前端开发流程，搭建高效集成的前端开发环境，制定合理有效的开发规范
开发和维护前端基础工具/框架/组件，并推动在各业务线的培训与落地
支持前端项目质量控制
支持移动端/后端/开发运维的架构设计和搭建，支持跨多设备（Andorid/iOS/H5/Hybrid）的架构设计，支持 CI/CD/自动化 的设计和搭建
规划前端团队发展，把握前端技术走向，分享布道
岗位要求：
本科及以上学历，5 年以上工作经验，3 年以上前端开发经验，计算机或相关专业者优先
熟悉移动端开发，熟悉主流浏览器兼容性，熟悉性能调优，对用户体验/交互/需求有深入理解
深入理解前后端的协作模式、产品和项目流程，有复杂应用开发及性能调优经验，优秀的分析问题和解决问题的能力
精通 JS/HTML/CSS，代码结构性强，命名规范准确，具有独立完成工作的能力，有学习能力和创新能力，追求极致优雅
熟悉模块化、前端编译和构建工具，熟悉主流的开发框架，如 React/Vue 等
熟悉任何一门后端语言，Java/Node/Python 等
熟悉 RN/PWA/微信小程序/SSR 优先，熟悉 数据可视化/D3/SVG/Canvas 优先
具有良好的沟通能力，团队合作精神

9.0.1. 前端架构师
职位描述：

1. 参与 PC 管理平台类产品、移动 APP 类产品、H5 活动类产品的开发

2. 参与公司内部基础库、统一框架、文档的设计与开发

3. 参与新技术探索、推进系统架构的演化，参与改进开发流程、持续构建流程、发布流程等前端工程化建设

4. 与团队成员分享经验和新技术，帮助团队成长

9.0.2. 前端工程师
岗位要求：

1. 本科及以上学历，计算机及相关专业加分

2. 阅读英文技术文档和书籍无障碍

3. 了解 HTML/CSS，熟悉 Git、Webpack 类构建工具、命令行工具的使用

4. 至少有 React/Vue 之一使用经验

5. 熟悉 Node/Java/Nginx/CDN/SEO 加分

6. 自动化脚本爱好者加分

7. 喜欢研究新技术、新标准，通过前端技术角度优化产品的用户体验，理解 web 标准和兼容性，理解可用性/响应式相关知识，对提高产品交付质量有追求、有耐心

/Users/<user>/Library/Application\ Support

vscode 做侧边栏的不显示起折叠代码块作用的加减号 icon，而且还会影响到右侧 minimap 的显示的罪魁祸首是

settings.json 里面的"editor.accessibilitySupport": "on"这一配置项。。。

1pt=2px

# performance

yahoojungui

1. 尽量减少 http 请求数--需权衡

http://www.alloyteam.com/2015/09/explore-performance/
https://www.sollrei.me/post/frontend/qian-duan-xing-neng-you-hua-yi
window.performance.timing

navigationStart
unloadEventStart
unloadEventEnd
redirectStart
redirectEnd
fetchStart
domainLookupStart
domainLookupEnd
connectStart
connectEnd
secureConnectionStart
requestStart
responseStart
responseEnd
domLoading
domInteractive
DOMContentLoaded

redirectTime
redirectEnd - redirectStart
DNS search time
domainLookupEnd - domainLookupStart
empty screen time
responseStart - navigationStart

above is related to backEnd performance, if time is long, think about server performance speed up methods like:
DNS preLoad, interface speed, cache

DOM nodes, nested layers, huge css, js block page
domComplete - domInteractive

DOMReady time
domContentLoadedEventEnd - navigationStart

FP, FirstPaint
performance.getEntriesByType('paint')[0].startTime

domInteractive - requestStart

Process exit with code 1....code 1 肯定是命令行报错了。。。

前端 3001、3002、后端 8080、8081

concise code is very important and many people like it.

# tenaries

https://medium.com/javascript-scene/nested-ternaries-are-great-361bddd0f340

# GraphQL

https://www.google.com/search?q=graphQL实践&oq=graphQL实践&aqs=chrome..69i57j0.6738j1j1&sourceid=chrome&ie=UTF-8

# Electron

https://juejin.im/post/5cb9e563f265da03712999e8?utm_source=gold_browser_extension

java 报错不要怕，把报错信息放大就好了。。。一切都没你想的那么难

# dva

effect 里面写公共的逻辑，

vue keepalive 组件 vs React keepAlive 组件

sessionStorage localStorage 存储方式不安全，可以改成 React16 Context 或者 redux

前端所有知识点不用特别懂，但是一定要宽，什么都懂到中级的程度就行。性能优化、软件设计、架构提升的东西要多看看

assets images 这样的公共目录不要放到不同模块里面去，要不然很难复用，很容易出现重复图片，增加打包体积，request、constants 这样的却和 images 相反
，比较容易判断是否是真正的 common。

commit message should be a short statement, not just one or two words

要有 Promise、async、await 思维；要有封装思维，不要动不动就写死

封装一些东西的时候注意不要和保留字重复，一般来讲都会有报错的，但是也有例外，需要注意不能用太通俗的名字

# Image

GIF - 8 bits, 256 kinds of color
JPG/JPEG - 24 bits, 16777216 kinds of color

Charles iOS Settings-About-Certificate Trust Setting

# eslint

arrow function should not return assignment
array - two spaces surrounding elements

原来线上代码也可以 debug（那我就可以干许多事情了嘿嘿嘿）

# Linux

## cmd

find / -name filename/dirName
find / -name -type f file1

request.js 文件里面要写出所有参数比较好，不要写 params。这样以后容易维护的多，可读性很强，不要怕多写几个字母

catch 的 error 都有 message 属性，所以不用加 || 符号

涉及到传给后端接口的数据，不需要的 key 就不要加，直接删掉这个 key 或者改值：undefined。

Another thing to keep in mind is being consistent with your code. If you're prepending boolean property names with `is`
or `has` one place, and skip it the next = that's going to be confusing to people.
无线 Umi+中台 Bigfish
bigfish=umi+umi-plugin-bigfish
chair eggjs
组件，指通用组件，就是 antd，在下半年将要发布的 antd@4 里，我们会陆续提取更多通用组件到 antd 中
业务组件，不能提取通用组件的，我们会提到内部统一的业务组件仓库中
区块，由组件组成，可以想象成代码片段
页面模板，由区块组成
写代码一定要注意边界测试用例，判空逻辑是否正常
微前端 java 版本不要更新因为电脑上有 tomcat 服务配置依赖特定版本的 Java antd this.props.form.resetFields('teamId')
The NRG stack is database-agnostic and GraphQL is not a query language for database, it it a query language for APIs.

# code review checkList

## js

### camelCase

```js
const car = {
  carLength: 4.85,
  carWeight: "2t",
};
```

## css

```scss
// BEM
.block__element {
  .subBlock {
    //
  }
}
.block--modifier {
}
```

## 命名需要符合语义化

动词前缀
can 判断是否可执行某个动作
has 判断是否含有某个值
is 判断是否为某个值
get 获取某个值
set 设置某个值

## 每个常量都需要命名

每个常量都应该命名

## 推荐使用字面量

创建对象和数组推荐使用字面量，因为这不仅是性能最优也有助于节省代码量.

2

401 INVALID_TOKEN OR EXPIRED
业务数据尽量不要冗余，尽量只写成一份，否则有些逻辑写起来啰嗦的一批。

## idea IDE

### debug

### spring-mvc fe project

debug flow
eslint setting
一定要有严格的分支管理意识。先 fix 好自己的 feature 分支代码，再 merge 到 develop、release 分支上去。
有严格的环境意识、开发流程意识、规范意识
合作意识、质量控制能力、进度保障能力、技术能力、

ifconfig en0
lsof -i :8080
怎么大幅提升自己远程帮别人解决 debug，技术咨询类问题的能力
不要花时间删除函数无用参数了，删掉 useless import 却有一定意义~；

GET http://lccrm.lctest.cn:1568/api/services/app/User/GetLoginDto?expiresAt=1592295430 net::ERR_CONNECTION_REFUSED -- 服务器错误
Uncaught (in promise) ReferenceError: regeneratorRuntime is not defined
github 的 changeLog 很有参考意义~

# authorization auth

[jwt](https://jwt.io/);虚拟长列表：https://blog.csdn.net/asdf8968/article/details/83183470；一切前端项目采用.prettierrc规范：
尾逗号任何情况必须有，杜绝一切分号（行内多语句除外）；

</div> not <div/>~~

#html
#html5
#css
#css3
#js

```js
/**
 * docBlockr...
 *
 */
function a() {
  let;
}
```

#react
#vue ##[计算属性 computed vs `$.watch`](https://v1-cn.vuejs.org/guide/computed.html)

Vue.js 提供了一个方法 `$.watch`，它用于观察 Vue 实例上的数据变动。当一些数据需要根据其它数据变化时， $watch 很诱人 —— 特别是如果你来自 AngularJS。不过，通常更好的办法是使用计算属性而不是一个命令式的 $watch 回调。考虑下面例子：

```html
<div id="demo">{{fullName}}</div>
```

```js
var vm = new Vue({
  el: "#demo",
  data: {
    firstName: "Foo",
    lastName: "Bar",
    fullName: "Foo Bar",
  },
});
vm.$watch("firstName", function (val) {
  this.fullName = val + " " + this.lastName;
});
vm.$watch("lastName", function (val) {
  this.fullName = this.firstName + " " + val;
});

// 上面代码是命令式的重复的。跟计算属性对比：

var vm = new Vue({
  el: "#demo",
  data: {
    firstName: "Foo",
    lastName: "Bar",
  },
  computed: {
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  },
});
```

这样更好，不是吗？ ##计算属性缓存 vs 方法
你可能已经注意到我们可以通过在表达式中调用方法来达到同样的效果：

<p>Reversed message: "{{ reversedMessage() }}"</p>
// 在组件中
methods: {
  reversedMessage: function () {
    return this.message.split('').reverse().join('')
  }
}
我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。

这也同样意味着下面的计算属性将不再更新，因为 Date.now() 不是响应式依赖：

computed: {
now: function () {
return Date.now()
}
}
相比之下，每当触发重新渲染时，调用方法将总会再次执行函数。

我们为什么需要缓存？假设我们有一个性能开销比较大的的计算属性 A，它需要遍历一个巨大的数组并做大量的计算。然后我们可能有其他的计算属性依赖于 A 。如果没有缓存，我们将不可避免的多次执行 A 的 getter！如果你不希望有缓存，请用方法来替代。 ##[filter 过滤器](https://cn.vuejs.org/v2/guide/filters.html)
Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。过滤器可以用在两个地方：双花括号插值和 v-bind 表达式 (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：

<!-- 在双花括号中 -->

{{ message | capitalize }}

<!-- 在 `v-bind` 中 -->
<div v-bind:id="rawId | formatId"></div>
你可以在一个组件的选项中定义本地的过滤器：

filters: {
capitalize: function (value) {
if (!value) return ''
value = value.toString()
return value.charAt(0).toUpperCase() + value.slice(1)
}
}
或者在创建 Vue 实例之前全局定义过滤器：

Vue.filter('capitalize', function (value) {
if (!value) return ''
value = value.toString()
return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
// ...
})
下面这个例子用到了 capitalize 过滤器：

john

过滤器函数总接收表达式的值 (之前的操作链的结果) 作为第一个参数。在上述例子中，capitalize 过滤器函数将会收到 message 的值作为第一个参数。

###过滤器可以串联：

{{ message | filterA | filterB }}
在这个例子中，filterA 被定义为接收单个参数的过滤器函数，表达式 message 的值将作为参数传入到函数中。然后继续调用同样被定义为接收单个参数的过滤器函数 filterB，将 filterA 的结果传递到 filterB 中。

过滤器是 JavaScript 函数，因此可以接收参数：

{{ message | filterA('arg1', arg2) }}
这里，filterA 被定义为接收三个参数的过滤器函数。其中 message 的值作为第一个参数，普通字符串 'arg1' 作为第二个参数，表达式 arg2 的值作为第三个参数。

#angular
#http
cdn 有什么缺点吗 首页加载的比较慢。。。
#es6
#webpack
#amd && cmd

#React ##组件间通信 ###子组件向父组件通信 回调函数 ###跨级

1. 中间组件层层传递 props
2. 使用 context 对象
   ####context
   在使用 context 时，有两点需要注意：

父组件需要声明自己支持 context，并提供 context 中属性的 PropTypes
子组件需要声明自己需要使用 context，并提供其需要使用的 context 属性的 PropTypes
父组件需提供一个 getChildContext 函数，以返回一个初始的 context 对象
如果组件中使用构造函数（constructor），还需要在构造函数中传入第二个参数 context，并在 super 调用父类构造函数是传入 context，否则会造成组件中无法使用 context。

...
constructor(props,context){
super(props,context);
}
...

作者：黑黢黢
链接：https://www.jianshu.com/p/fb915d9c99c4
來源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

改变 context 对象
我们不应该也不能直接改变 context 对象中的属性，要想改变 context 对象，只有让其和父组件的 state 或者 props 进行关联，在父组件的 state 或 props 变化时，会自动调用 getChildContext 方法，返回新的 context 对象，而后子组件进行相应的渲染。

作者：黑黢黢
链接：https://www.jianshu.com/p/fb915d9c99c4
來源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

非嵌套组件间通信
非嵌套组件，就是没有任何包含关系的组件，包括兄弟组件以及不在同一个父级中的非兄弟组件。对于非嵌套组件，可以采用下面两种方式：

利用二者共同父组件的 context 对象进行通信
使用自定义事件的方式
如果采用组件间共同的父级来进行中转，会增加子组件和父组件之间的耦合度，如果组件层次较深的话，找到二者公共的父组件不是一件容易的事，当然还是那句话，也不是不可以...
这里我们采用自定义事件的方式来实现非嵌套组件间的通信。
我们需要使用一个 events 包：

作者：黑黢黢
链接：https://www.jianshu.com/p/fb915d9c99c4
來源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
自定义事件是典型的发布/订阅模式，通过向事件对象上添加监听器和触发事件来实现组件间通信。
事实上，在组件间进行通信时，这些通信方式都可以使用，区别只在于使用相应的通信方式的复杂程度和个人喜好，选择最合适的那一个。比如，通过事件订阅模式通信不止可以应用在非嵌套组件间，还可以用于跨级组件间，非嵌套组件间通信也可以使用 context 等。关键是选择最合适的方式。
当然，自己实现组件间的通信还是太难以管理了，因此出现了很多状态管理工具，如 flux、redux 等，使用这些工具使得组件间的通信更容易追踪和管理。

完。

作者：黑黢黢
链接：https://www.jianshu.com/p/fb915d9c99c4
來源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
##HOC
HOC 工厂的实现方法
这一节我们将会研究 React 中两种 HOC 的实现方法：Props Proxy (PP) and Inheritance Inversion (II)。两种方法都可以操作 WrappedComponent。

Props Proxy PP 的最简实现：

function ppHOC(WrappedComponent) {
return class PP extends REeact.Component {
render() {
return <WrappedComponent {...this.props} />
}
}
}
HOC 在 render 方法中反悔了一个 WrappedComponent 类型的 React Element，我们还传入了 HOC 接收到的 props。。。

##rxjs/Observable ##生命周期
##React.Component vs React.PureComponent
#fsd
#es6
es6 modules are always in strict mode.
#eslint
#bable
#coding style
##airbnb/javascript
###3.6 Only quote properties that are invalid identifiers. eslint: quote-props jscs: disalllowQuotedKeysInObjects
Why? In general we consider it subjectively easier to read. It improves syntax highlighting, and is also more easily optimized by many JS engines.
###3.8 Prefer the object spread operator over Object.assign to shallow-copy objects. Use the object rest operator to get a new object with certain properties omitted.
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ
delete copy.a; // so does this
###4.2 use Array.push instead of direct assignment to add items
###4.3 use array spread ... to copy arrays
// bad
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }

###5.1 Use object destructuring when accessing and using multiple properties of an object. eslint: prefer-destructuring jscs: requireObjectDestructuring

// good
function getFullName(user) {
const {firstName, lastName} = user
return `${firstName} ${lastName}`
}

// best
function getFullName({firstName, lastName}) {
return `${firstName}`
}
###7.3 never declare a function i n a non-function block(if while, etc) assign the function to a variable instead. interpret
###7.9 always put default parameters last

###10.2 Do not use wildcard imports.
###12.3 Use exponentiation operator \*\* when calculating exponentiations. eslint: no-restricted-properties.
###U13.2se one const or let declaration per variable. eslint: one-var jscs: disallowMultipleVarDecl

Why? It’s easier to add new variable declarations this way, and you never have to worry about swapping out a ; for a , or introducing punctuation-only diffs. You can also step through each declaration with the debugger, instead of jumping through all of them at once.

###13.3 gruop all your const s and then group alll your let s
// bad
const binary = Math.pow(2, 10);

// good
const binary = 2 \*\* 10;

Why? This makes sure you have a single default export.

// bad
import \* as AirbnbStyleGuide from './AirbnbStyleGuide';

// good
import AirbnbStyleGuide from './AirbnbStyleGuide';
###13.5 Don’t chain variable assignments. eslint: no-multi-assign

##学习新知识 ##看过什么书
最近看了一些什么书？
离职后，回家过年期间寒假抽出时间好好的看了一些课外书： 三体（之前大学的时候就买了。。。然后就没抽出时间去看），曾国藩的一些书（血祭，野焚，黑雨。。。没怎么看，，，挺多的，小说似的白话文），冰鉴（学会看相，稍微看神骨，看面色比如关二爷，看眉毛。。。。等等）。。。；；；

技术书籍看了一本 progit。。。里面会深入剖析 git 从 30 个高级命令到 git 的底层数据结构。。。

看书尽量挑重点看挑感兴趣的看（可以适当做一些笔记），不要带着功利性去看，如果看的时候很乏味那这部分正在看的内容忘的也快。。。相反如果看的时候觉得很有意思很有趣自己怎么想不到这种方法没有这样的思维。。。自愧不如的时候。。。记得也牢，也容易激励自己。。。

记住自己以后必须是前端负责人或者项目的 leader。。。钱后端各方面技术通吃，细节也不放过。。。就算以后有可能会忘记当初是怎么解决的，，，但还是得很努力呀。。。你不是小孩子了必须得在杭州买房过户呀

另外最近正在看一些技术类书籍，之前买了好几本 React 的书，，，做了挺久 react，想自己抽空再好好深入一下 js（想重新再看一遍 js 高级程序设计，，，以前我在第一个老东家跟谁学的导师朱佳璐就说过这本看好几遍都不为过。。。越看越有味道，，，看山是山。。。），
数据结构，，，之前本来想在找工作之前自己设计封装一个 React 组件，，，发布在 npm 和 github 上面。。。

然后想着自己在 heroku 上面搭个小型网站（基于 React 技术栈，期间用到 express，，，自学它，，，webpack，，，css BEM。。。好多东西我都想自己认认真真地带着兴趣去钻研）

清华大学严蔚敏 C 语言版， C++Primers webKit 技术内幕。。。
