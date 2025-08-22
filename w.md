徐帅哲，绑定手机号的过程需要
其他页面（模块）用不到的 constant 就写到./constant.js 就行了
永远不写分号
微信选择器组件的所有选项都加上全部
微信小程序 wxss 只能写原生的 css，没法写嵌套？
图片用 png？回转成 base64 吗
直销小程序交互优化，比如说只能点击右边的小 icon 才能选择东西
还有选择时间的时候还可以手动输入，输入任意字母和数字也可以(手机上只能输入数字，但是年份没做范围限制，主要是不太方便做，几万年是允许输入的,
然后左边的输入框是方便清空用的所以就暂时不优化)
中国习惯 4 个进位数数，国外习惯 3 个进位数数
package.config.json-libVersion 每次上线并发布到小程序之前动态更新？

# directsalemina, fengchaomina

## 目录，代码结构，主要业务逻辑

constants(divide into subDirectorys, and put uncommon constants into subPageModules); images; libs/auth, http, runtime,
token, utils, wx;miniprogram_npm/lodash.set;node_modules/lodash.set;pages;services;.gitignore;app.js;app.json;app.wxss;
ci.sh;package.json;project.config.json;sitemap.json;

## 优化点


# 上海数禾信息科技有限公司

我们的价值观：挑战、专业、创新
我们的使命：让人人都能享有金融最优解
我们的愿景：作陪伴一生的智能金融家
上海数禾项目管理系统，集项目管理、缺陷管理、任务管理的一站式管理平台。

# wiki

前台 http://wiki.caijj.net/pages/viewpage.action?pageId=63605090
新人 wiki.caijj.net:8090/pages/viewpage.action?pageId=2195508
平台规范 http://wiki.caijj.net:8090/pages/viewpage.action?pageId=360644
如何更新 antd 到 3.16.3，更新 moka 支持 React16.8.6
今日业绩的表单重置
作为众享云的前端 leader，要做到熟悉每一行代码，并且知道怎么优化代码，怎么减小小程序体积，经常举办技术讲座
https://shuhe.api.lattebank.com/taskmgr/login

# directmarketingmgr

package.json "DEV_PORT": 3002,
src/main/webapp/WEB-INF/ftl/index.ftl
<@rsrc.dist filename="index-stamp4hash.js" inline="false" devPort="3002" />

# directmarketingweb

# directsalemina

prod: "appid": "wxca8ac604871b3f16",
sit: "appid": "wx502514098efb78f4",

# fengchaomina

prod: "appid": "wx63e3f500334b3513",
sit: "appid": "wx05a717dce2a786d8",
["es2015", { "loose": true, "modules": false }]
stamp4hash.css,js
不要在本地 build，freemarker 的 stamp4hash 背后原理（build 会导致 stamp4hash 改名）
tomcat 服务跑起来的话会根据 src/main/webapp/WEB-INF/wechatLogin.ftl 来动态更改 rsrc/js/core-manifest.json 文件(另外也会动态生成
core-xxxxx.json 文件）所以千万不要轻易更改，自己琢磨可以但是千万不能耽误项目进度，耽误别人的开发时间和测试时间。
wechatLogin.ftl,
客户管理点击进入详情页后再点击返回会有当前页重置为 1 的问题，筛选条件却没有变
注册礼排期：
商城模块，不用抓包，自己写页面
周三周四周五 周日周一周二
周三周四绑定模块联调完毕，
周五周日 商城模块 4 个页面联调完毕
周一上午修修补补、完善整个流程
周一中午左右提测，周二下午上线
http://c.lattebank.com/directmarketingweb/offline-loan/register
能用 const 就用 const
React 方法还是用箭头函数好！！不要用 bindFunctions 了
select，等等所有表单的 value 都统一改成 string，不要有 number
多用用 getFieldDecorator 比较好
directmarketingmgr
pengyujiao 2wsx#EDC
实在不行我可以用
merge request 是迭代的标志（必须提交），tag 不用打
小团队管理，怎么给团队成员分配任务，估点要和他一起估
构建成功，部署失败的话要去看 graylog
context:appName AND level:error(warning)
keyword
HTTP Status 500 - Cannot get Jedis connection; nested exception is res.clients.jedis.exceptions.JedisConnectionException:
Could not get a response from the pool
type Exception report
message Cannot get Jedis connection; nexted...
description The server encountered an internal error that pervented it from fulfilling this request.
exception org.springframework.data.redis.RedisConnectionFailureException: Cannot get Jedis connections; ...
org.springframework.data.redis.connection.jedis.JedisConnectionFactory.fetchJedisConnector(JedisConnectionFactory.java:162)
org.springframework.data.redis.connection.jedis.JedisConnectionFactory.getConnection(JedisConnectionFactory.java:251)

post http://clientproxy.sit.lattebank.com/stagestore/storeConfirmOrder?p_c=F4BBC4F1879C92A68BD838D325103E15&r_i=c01e2cb1-43ca-4896-bdb2-92d3649f509a.M&p_o=a&r_c=hb&r_e=hb&p_u=476f6573-ae80-472b-929c-72e5879f5a73&p_s=0a6049d0-1923-43d8-92c3-91524b716c7c&p_t=9jwOS9D_NhKC9lS9a_6Jl6h0bOxpJE6TXfaXd3prTNz-2ew0QnOQ6_LN_kZyE3T_wJv2tpVRSmA&p_i=113&o_v=4.1.7&s_h=2340&s_w=1080&p_m=officialSite

{
"addressInfo": {
"addressId": 3057,
"area": "新罗区",
"city": "龙岩市",
"detailAddress": "福建省 龙岩市 新罗区 你好啊美女",
"district": "你好啊美女",
"isDefault": true,
"isDelete": false,
"mobile": "18201949282",
"name": "李海涛",
"province": "福建省",
"uid": "476f6573-ae80-472b-929c-72e5879f5a73"
},
"amount": "0.00",
"coupons": [],
"deliveryFeeInfo": [{
"key": "YX",
"value": "0"
}],
"originAmount": "0.0;0",
"payInfo": {
"key": "实际需支付",
"value": "￥ 0.00"
},
"priceInfo": {
"priceDetails": [{
"key": "商品金额",
"value": "￥ 0.00"
}, {
"key": "运费",
"value": "￥ 0.00"
}],
"subtotalInfo": "<font size = '14'>小计: </font><font size='16'>0.00</font>",
"totalPriceDesc": "￥ 0.00",
"totalPriceName": "商品合计"
},
"productInfo": [{
"campaignGoodsTag": "",
"deliverSupport": false,
"goodsId": "1650490001",
"imgUrl": "https://o5v085qn7.qnssl.com/merchantx/upload//r485c8xeu0q.png",
"merchant": "CS",
"name": "多供应商商品测试",
"num": 1,
"priceDesc": "￥ 3,000.00",
"skuDesp": "M、zise",
"skuProductId": "1650490003"
}],
"topUnDeliveryDes": "您有 <font color='#ff673f' size='12'><strong>1</strong></font> 个商品无法配送至当前地址。",
"unsatisfiedTip": "以上商品不包含在本订单中,您可更换地址进行购买"
}
java project
gulp \_copy
event => changeInput(event, 'name')
wrong: (event) => changeInput(event, 'name')
HTTP Status 500 – Internal Server Error
Type Exception Report
Message Request processing failed; nested exception is org.springframework.context.ApplicationContextException: Could not load FreeMarker template for URL [bindingForOfflineLoan.ftl]; nested exception is java.io.IOException: There was an error loading the template on an earlier attempt; it's attached as a cause
Description The server encountered an unexpected condition that prevented it from fulfilling the request.
Exception

freemarker.core.ParseException: Syntax error in template "bindingForOfflineLoan.ftl" in line 16, column 7:
You can't use "${" here as you are already in FreeMarker-expression-mode. Thus, instead of ${myExpression}, just write myExpression. (${...} is only needed where otherwise static text is expected, i.e, outside FreeMarker tags and ${...}-s.)
freemarker.core.TokenMgrError.toParseException(TokenMgrError.java:247)
freemarker.template.Template.<init>(Template.java:215)
freemarker.cache.TemplateCache.loadTemplate(TemplateCache.java:495)
freemarker.cache.TemplateCache.getTemplate(TemplateCache.java:409)
freemarker.cache.TemplateCache.getTemplate(TemplateCache.java:261)
freemarker.template.Configuration.getTemplate(Configuration.java:1786)
freemarker.template.Configuration.getTemplate(Configuration.java:1655)
org.springframework.web.servlet.view.freemarker.FreeMarkerView.getTemplate(FreeMarkerView.java:351)
org.springframework.web.servlet.view.freemarker.FreeMarkerView.checkResource(FreeMarkerView.java:204)
org.springframework.web.servlet.view.UrlBasedViewResolver.loadView(UrlBasedViewResolver.java:483)
org.springframework.web.servlet.view.AbstractCachingViewResolver.createView(AbstractCachingViewResolver.java:244)
org.springframework.web.servlet.view.UrlBasedViewResolver.createView(UrlBasedViewResolver.java:446)
org.springframework.web.servlet.view.AbstractCachingViewResolver.resolveViewName(AbstractCachingViewResolver.java:156)
org.springframework.web.servlet.DispatcherServlet.resolveViewName(DispatcherServlet.java:1283)
org.springframework.web.servlet.DispatcherServlet.render(DispatcherServlet.java:1224)
org.springframework.web.servlet.DispatcherServlet.processDispatchResult(DispatcherServlet.java:1027)
org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:971)
org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:893)
org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:967)
org.springframework.web.servlet.FrameworkServlet.doGet(FrameworkServlet.java:858)
javax.servlet.http.HttpServlet.service(HttpServlet.java:635)
org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:843)
javax.servlet.http.HttpServlet.service(HttpServlet.java:742)
org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)
org.springframework.session.web.http.SessionRepositoryFilter.doFilterInternal(SessionRepositoryFilter.java:126)
org.springframework.session.web.http.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:65)
org.springframework.web.filter.DelegatingFilterProxy.invokeDelegate(DelegatingFilterProxy.java:344)
org.springframework.web.filter.DelegatingFilterProxy.doFilter(DelegatingFilterProxy.java:261)
cn.caijiajia.framework.filter.LogFilter.doFilter(LogFilter.java:114)
org.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java:85)
org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:107)
cn.caijiajia.framework.filter.ParameterFilter.doFilterInternal(ParameterFilter.java:116)
org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:107)
brave.servlet.CjjTracingFilter.doFilter(CjjTracingFilter.java:92)
cn.caijiajia.framework.tracing.TracingConfig\$CjjDelegatingTracingFilter.doFilter(TracingConfig.java:139)
Note The full stack trace of the root cause is available in the server logs.

Apache Tomcat/8.5.24

grayLog: tomcat-syslog

http://c.sit.lattebank.com/directmarketingweb/registerGiftEntry?t_pp=/directmarketingweb/web-wechat/pivot-login/registerGiftEntry

directmarketingweb, fengchaomgr 蜂巢信用卡链接配置统一到 fengchaomgr？
directmarketingmgr, loanweb 直销信用卡链接配置统一到 directmarketingmgr?
掘金上的文章不用粘贴地址烂了，直接赞就好了
github 也一样，直接 star 就好了
摩卡平台--欢迎使用分众小贷管理系统
http://directmarketing.apps.sit.caijj.net/directmarketing/swagger-ui.html#!/performance-controller/getDailyPerformanceUsingGET_1
spring20 key file download
估点，优先级定下来
?uid=4e3e5627-ff3b-4d14-a83f-02b4d4bbf57a&sessionId=9841aea4-1ab6-455f-a169-ac905fff03a0&rc=null&shelfId=HJ0041
http://clientproxy.sit.lattebank.com/stagestore/v3/order?p_c=F4BBC4F1879C92A68BD838D325103E15&r_i=c79f7576-0162-4f9b-9a4c-2a1027bbc2d3.M&p_o=a&r_c=hb&r_e=hb&p_u=476f6573-ae80-472b-929c-72e5879f5a73&p_s=c43f4078-3fc6-4c19-b112-3763dfa25ab7&p_t=9jwOS9D_NhKC9lS9a_6Jl6h0bOxpJE6TXfaXd3prTNz-2ew0QnOQ65VnA8FnvYy0gilwaF9ubjQ&p_i=113&o_v=4.1.7&s_h=2340&s_w=1080&p_m=officialSite
参数命名问题，能不动后端命名，原模原样搬过来
知道怎么调试微信的东西了 c.sit 环境把 sessionId 拷过来就好了
clientproxy.sit.lattebank.com/stagestore/v3/order ?
036b5a06-4a55-451d-a69a-7438ce82a819.W
状态管里
注册礼具备上线条件
当前迭代分工：
咨询经理小程序更多按钮的处理发券、撤回券
客户列表页新增筛选条件
直销管理平台-客户详情新增优惠券 tab 页
非标审批增加意见（结果页和审批页）
行政、人事后台权限； 在业绩管理吧、实时进件、客户管理、今日业绩的权限等同于分总（测试用例：四个页面的分部推广组客户经理下拉框筛选条件 disable 以及筛选子项是否异常）
客户经理管理-客户经理管理 子页面 分公司人事看 table 数据只能看到当前分公司的客户经理而且没有删除按钮。
小程序热刷新 X-TOKEN
郭南赐 employee_no 0010020010
代码中无关注释都删掉，项目该上线就要及时上线，不要等欢哥来找你问上线进度
微信小程序最小化 wxml 节点数量
wxss 用 4 格做 tab，js 用 2 格
const util = require('../../../libs/utils.js')
不要用这种写法了，采用多个 import 的 es6 写法
不能让线上有告警，freemarker 要注意，语法必须正确，不能随意改东西
解决问题一定要找到根本原因，并且讲出来
图片采用 adlink 图片 tinypng cdn
昨天已经开始
小程序全局搜索时可以搜页面的 title
复盘
先查找原来的
新增一个 public 会覆盖原来的
修改配置一定要区分 sit 和 prod
新增 Propplus 配置要新增 private，不要新增任何 public 的东西
如果是现有的 public 配置就应该提示不能新增同名的 public，新增操作失败，只能关掉 modal，重新在页面右侧搜索并引用。
排查问题需要从代码、环境、构建、部署、gitlab==方面去排查
/images/ 这样来写根目录下的绝对路径！！
帮别人解决问题这种感觉蛮不错的
master 曹比较忙，有事直接理清思路后
398Kb
lss two catch place in the same try, bu then in catch we can not get error msg content
生产环境 微信公众号的 H5 页面调试 https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1455784140 yaoyuxuan@lattebank.com
又忘了 merge
binding/success/\d+
swagger-ui(directMarketing): http://directmarketing.apps.sit.caijj.net/directmarketing/swagger-ui.html#!/%E6%A1%88%E4%BB%B6/getCouponsUsingGET_1
以后上线之前需要先配置好网关、Proplus、Confplus、网关然后再上线;还有欧蕾菜单、关联接口、角色授权;要不然会引发线上告警
fengchaomgr 加了并发限流，目前的 200 是针对现在 4 个点的情况，未来扩点了，这里的并发数可以提高
一定要注意，上线的代码包含哪几部分需求，确定都能上才上，某些不确定上线日期（上线日期不统一）的需求代码要单独划到另一分支
所有的自己的代码和任何人的代码要新建分支
p_v
分支管理：（没有 dev 但是要有 feature，不确定上线日期的需求就需要单独拉分支，而且放到最后测试，mgr、web 的 release 分支比较固定，sit 环境）
小程序强制升级 api
先连接
直销和蜂巢的信用卡链接配置：
目前生产是 loanweb（credit_card_apply_v2 直销） + directmarketingmgr(directmarketingmgr_credit_card 直销) + fengchaomgr
（credit_card_apply_fengchao 蜂巢）+directmarketingweb（dscampaign_creditCard_config 蜂巢）
测试是 directmarketingmgr（credit_card_apply_v2 直销） + directmarketingmgr(directmarketingmgr_credit_card 直销)+ fengchaomgr
（credit_card_apply_fengchao 蜂巢）+directmarketingweb(dscampaign_creditCard_config 蜂巢)
p_u uid 如何才能不暴露在链接里面
Charles 192.168.74.110 8888 mobile-vpn-closed
fetch-timeout-must-be-set?
宣传物料 前端资源管理 cdn
ViewController.java 每次新增页面都要新增一个 view
工作上基本的配置问题，上线流程问题，坚决不能再犯了！！
getCode（）报错的话，target 删除重新 run 就好了
git update-index --assume-unchanged .project.config.json
4 点钟之前提测今日业绩，然后就可以干其他事情了
antd rowKey functioin form
12 点之前写好已审批进件的刷新机制优化
提测之前，自己需要所有边界情况都测试一遍，不方便测试的话也需要 QA 配合你创造好了条件，去测。
14:30 之前测好蜂巢小程序业绩数据
15:30 之前搞定已审批进件、业绩管理数据
{"creditCardApprovalNum":0,"heavyAuditNum":0,"heavyFirstLendAmount":0,"heavyFirstLendNum":0,"lightAuditNum":0,"lightFirstLendNum":0}
{"creditCardApprovalNum":0,"heavyAuditNum":1,"heavyConversionAmount":0,"heavyConversionDetail":[{"amount":0,"num":0,"period":3},{"amount":0,"num":0,"period":6},{"amount":0,"num":0,"period":12}],"lightAuditNum":1,"lightLendAmount":0,"lightLendNum":0}
2 点之前改好今日业绩公众号 bug（样式比较难修复，先 push）+已审批进件刷新机制优化
5 点之前改好刷新机制优化 5 点半之前改好今日业绩样式
isBrief 也要保持好状态？
11 点半之前改好所有的，提测所有手上的东西
封装的 getStorage() 的数组里面取不到的话就不用
部署 a b 点各百分之五十；所以并不是每次线上部署都是成功的，需要自己核对一下路由完全切换过来了没
场景推广 5sp
http://shuhe.prod.caijj.net/admin/#/outersso/per-menu/a7f8662d-a1d2-11e8-b700-02eda6df23fe,7a57b053-6a24-42d2-b545-3e733728acfc/apis
dmweb dmmgr
10:30 关闭所有的
11：30
15:30 先做陌拜注记的刷新优化
10：30 陌拜注记搞好，然后提测
http://shuheoa.caijj.net/seeyon/main.do?method=index
overallInfo searchInfo??
setStateAsync = state => new Promise((resolve) => {
this.setState(state, resolve)
}),

？？？
resources/applicationContext.xml 也要配置 url.fengchao 要不然会报 bean 的错！
业务上常见的规范 UI 描述、文案：不能为空、格式不正确；手机号、身份证号
应用部署描述写个 1 就好了！！不要浪费时间
spring23-前端估点
场景推广审核-注册页面调整 2sp
场景推广审核 5sp --
直销管理平台-业绩管理 3sp + 3sp
直销管理平台-客户管理 3sp
直销管理平台-客户详情 1sp
小程序-客户详情 2sp --
直销-前端资源管理 5sp
直销用户角色调整 2sp
蜂巢代理人管理 5sp --
maven 前端应用启动不了的话可以删除 target 然后重启 Java 项目！！
filename="firstLoan-stamp4hash.js" serverIp=""
spring23 配置
前端资源管理 3 个接口
咨询经理注册更改成新接口
dmmgr-resourceservice
dmmgr-adlink
CITY_MGR 分部负责人 不应该有 null
陌拜注记 返回问题
行政或者人事更改分部后，null 选项消失了
ldh7.png 增加了然后再删掉然后就不能增加了。。。原因类似于无法实现上传覆盖的功能（具体需要帅哲来解释！！）
H5 页 荣耀 8 点击没法输入
咨询经理注册和家英商量一下，身份证是 15 位还是 18 位！--管理平台要兼容 15 位的第一代身份证
192.168.74.110
小程序完全可以等测试好了再 push 到远程的 release 分支上去，这样就不会莫名提交 project.config.js 和 services/api.js 的更改了
以后早上我会 9 点半之前准时到达公司，平常有什么问题，我和娇娇、家英、建阳、薛凡、向阳他们都能很好的协调、沟通、保持好正常进度；
平常梅梅有什么问题我都会悉心指导。前端组我都会积极融入、探讨进去
我以前有过一些小问题，上线流程上出的问题，但是我立马吸取教训，总结经验、记住错误确保不犯第二遍
而且我还会一直保持对技术的热情。
上完线之后及时删除未用上的分支。
spring24-前端估点：
业绩管理 5sp
离职咨询经理客户分配 va
表单、表格部分 3sp
弹框部分 3sp
咨询经理管理
新增 2sp
编辑 3sp
分支命名也采用下划线连接！！前后端保持一致
moka domain names:
vpn visit: http://moka.dmz.prod.caijj.net
public visit: https://moka.api.lattebank.com
shuhe domain names(short time):
vpn visit: http://shuhe.prod.caijj.net
public visit: https://shuhe.api.lattebank.com
mp less turns to wxss
spring24 配置变更: performance/detail/customer => performance/customer
spring_boot 迁移时刻更新进度：http://wiki.caijj.net/pages/viewpage.action?pageId=69211498
小程序上线之前要让后端先上线，过审的话跟他们及时说一下，需要配置的话让他们先配！dire && direct.尽量能不麻烦家英就不麻烦家英，打扰的时间最小化
即可。
spring25-前端估点
直销管理平台-业绩管理（分总）3sp
注记优化 5sp me
直销管理平台-陌拜注记 5sp
案件状态变更 1sp me
业绩管理跳转的客户明细不刷新 3sp
销售信息反馈
小程序-有话说 5sp me
展业二维码失效 3sp me
直销管理平台-有话说列表 5sp
直销管理平台-有话说新增 2sp
直销管理平台-有话说管理 5sp
http://moka.dmz.prod.caijj.net/admin/login
补件自测一下货梯识别、货梯识别活体识别！！
所有的需求历史、迭代历史相关文档、资料都在这里：http://wiki.caijj.net/pages/viewpage.action?pageId=69212832
fengchaomgr spring_boot 迁移
二维码失效问题 a20 页面入口，生产环境确定还在用嘛
fcmgr 的密码是 111111，特别简单不用点记住
spring_boot:
http://gitlab.sit.caijj.net/yanfaerbu/qianduan/directmarketingmgr/blob/master/src/main/resources/spring-config.properties
http://gitlab.sit.caijj.net/yanfaerbu/qianduan/directmarketingmgr/blob/master/src/main/java/cn/caijiajia/directmarketingmgr/delegator/OuterssoDelegator.java
小程序的开发权限没有通过 wx.login fail 的时候 toast 提示出来，有点坑。。。体验权限就会提示出来
除了总部是一排二排，其余所有的账号都是 6 个 1 ，记住哈。不要相信任何人的
import cn.caijiajia.directmarketingweb.vo.\*;
a21/651
a15/479
hbzc 网关配置 isEmployeeActive，白名单 get 请求添加进去 + a15 rewrite
directsalemina 新的有话说接口已经配置好了 done
hbzc 上线工单 token 发给毅泽
灰度发布工单监控流程，提醒大佬
k5/709 的 title 需要配置一下
工作上遇到推不动的事情，比如架构组的人就亲自去 E 座找他们聊
直销小程序有话说、案件状态变更代码证里并上线(要上线的代码抽成一个新分支合并到 master，不经过 release)
dmweb 的迁移需不需要在 sprint26 迁移
head.sso.hasRoles
sprint26-前端估点
直销管理平台-业绩管理 全选 2sp
直销管理平台-业绩管理 查询条件增加显示模块 10sp
直销二维码有效性 3sp
直销管理平台-客户经理管理 5sp
directsalemina 体验版本 3.5.8.5
fengchaomina 体验版本 1.1.6.9
git commit msg 采用中文！！
merge request 之前先 local merge origin/master，然后就不会有冲突、需要 rebase 的理由了。
活动模板的需求需要仔细仔细再仔细！！确认确认再确认
去掉分号的时候应该小心不要去掉字符串里的分号（比如样式！！）这样不会有任何警告、报错，样式 not working 你也不一定会发现异常！！
有些请求（比如日志类请求）的 catch 是可以不用写的，允许他请求失败，请求失败就继续主进程，不能写 await。
.Register padding-top: { 20px; }
部署验证失败没有关系，照样算部署成功
backup-guest 1qaz2WSX 本周 lattebank-guest 密码：U2xsq7X9Mz
.stylelintrc 中写上 "rule-empty-line-before": null,居然不起作用！！
➜ directmarketingmgr git:(feature-perfSearch) ✗ lsof -i:1100
不到万不得已不要切换自己的小程序开发者登录账号,这样就不用登录网页版微信公众平台切换体验版了。。
我和菜菜确认一下，原来逻辑是这样，总部进来看到所有分部。分总进来看到所有推广组。推广主任进来看到所有咨询经领。后端返回的表格数据是按照权限来的，
只不过是说下拉框展示成全部
抽时间更新 leangoo
周报 名单拨打反馈 NH19415150942
分号删除后一定要好好检查有没有删错 for 循环（不过一般会标红报错）、英文文案语句中间的分号很有可能会删错，还有就是 split(';')这样的方法调用也很可
能会删错。最好就是一个个去选分号的时候就好好看！！
jedisConnection 错误的处理方法是重连 vpn 就行了不用重启项目
能不控制 antd-table 各个列的宽度就不控制，要不然遇到固定列后的各个列宽度样式问题会疯掉的卧槽！！
fengchaomgr fengchaomina directmarketingweb directmarketingmgr directsalemina
H5 两个 mgr 的迁移我一定要做完，来证明我的能力。
boot 迁移
mgr
http://gitlab.caijj.net/JiShuBaoZhang/QianDuanJiaGou/web-starter
H5
你看下 java 控制台报的什么错误，要学会用 idea 的 Java 控制台工具！！
生产环境 直销朋友圈二维码隐藏， 但是不能影响 mgm 的 k2
生产环境 fcmgr、dmmgr、dmweb 需要在上线前一天提前申请好生产环境的 OpenShift 灰度发布资源工单！！
陌拜注记导出功能
dev fcmgr boot 构建部署 灰度集群这个地方 sit 环境一般选择 cjjoc02, prod 环境一般选择 dsocza01, dsoczb01
NoClassDefFoundError 包冲突 open ~/.m2 删除本地缓存的 maven 包；工作上多用自己的账号，虽然目前没有权限，但是可以越来越多的申请很多权限。
Command+Delete, Option+Enter 快捷迅速地删包导包。
帅帅这个故事什么时候走通。
idea 的日志换行技巧
prod k5/999
直销、蜂巢小程序登录页增加一张点击可隐藏的全屏注册图片。
gitlab smallModal-recent-projects-search!!
部署失败直接看 graylog 日志就能查出原因。以后找帅哲只在群里@他，千万不要私聊！！以后只点击 debugger 启动 spring-boot 服务，这样会很方便调试！！
流程上那么多东西，那我以后估点就估两倍！！
对故事的分析能力很重要，有时候只是某个节点卡住了或者需要改动一下。apiController 等等的 controller 有可能是 maven 包里面的可以不用在项目的
Forward.controller 里面写转发的，比如说 outersso-client。
fengchaomgr table、select 等等的英文空文案替换成中文
和自己相关的生产告警一定要及时处理，不要等 master 来找你，一定要主动点。
fengchaomgr token 失效但是还是可以新增分部成功；idea 的 debug、evaluate。Drop-frame 然后 Stop debug。
lsof -i:8080 kill -9 16620 8080 打不开的话很有可能是被某个莫名程序占用了。。。接口返回的 message、developerMessage
以后统一用 release-boot 分支吧，不用 develop-boot 了！！切分 maven 分支只需要点击一下就可以了（无论切换方向）；有些本地开发页面的编辑操作、页面
切换、按钮点击步骤比较麻烦的话，重启 boot 服务或者 node 服务不需要刷新页面的，直接继续操作就好了。看 graylog 日志这项活确实需要耐心且认真，冷静思考
分析才能深入理解出错机制及底层原理。千万不要自己给自己挖坑！！ dir && dire、fengc in moka-apps-search；蜂巢小程序的生产验证需要找帆哥，
mgr 的验证需要找娇姐。
杨勇 dsmgm m1 record-bug 修复
fengchaomgr、业绩管理点击查询后再去看分部不应该出分部的，（cityList、等等其他 list 在点击重置按钮的时候没有去清空）
dmmgr outersso-client to outersso
dmmgr boot 上线的时候 directsalemina 也需要添加三个新接口
dev sit prod 三个环境三个应用的所有 openshift 资源下线工单
fengchaomina outersso-client 调用时一直 401 报错
腾讯地图 LBS 服务 g6 地图可视化
fcmina current 接口怎么经常没被调用。摩卡-我的应用页面不要等所有应用加载出来，直接聚焦搜索框 dir 或者 fengc 就好了
上线文档以后一定要记得写上流量比例计划。
需要基础架构组支持的问题一定要今早提前暴露出来，尽早解决，别让自己的迭代出现问题，这就是最好的结果。
下午 1 点填周报, gitlab and moka 都可以找到应用负责人。技术保障部、服务组件组
小程序偶尔登录的上，偶尔登录不上，是个比较大的坑。
caijiajia.distributesession.redis.namespace 生产上的不同配置值，毛薛强那边的代码还没有上线。
Request post = Request.create("post","http://outersso/outersso" + "/private-api/wechat-login?r_e="
outersso dev 数据库连接;注册礼 dev 环境 新增货架：https://note.youdao.com/ynoteshare1/index.html?id=b22ee1f66605bdd52b0faaecc79fc0ac&type=note
禅道第二个按钮是解决，不用悬浮看文案，直接点击就好了。不要再给 ftl 增加 devPort 了没有任何必要。moka.dmz.sit && moka.sit。
lib/wx toast.show({ title: 'xxx' }) 不能没有 title，很多地方都用错了. maven 包里面原来可以打断点！！！所以不要什么都问 shuaiz！！
部署失败的话很有可能需要通过新建分支来解决。新建的宣传物料-活动模板-预览操作就是编辑操作，编辑好后再回到列表页点击复制。怎么避免在地址栏传公共参
数，这部分工作需要后端去取，必须让他去自己取！！活动模板第一个页面图片替换-内容替换备注不用写任何东西。摩卡新增菜单的时候不用填写描述。
git branch -d branch_name // delete remote branch。所有代码去除分号；idea 打开项目直接双击打开根目录就好了。小程需要重新登录的话必须在
数据库里删除绑定关系后杀掉小程序杀掉微信重新进入微信重新打开小程序才有用（似乎不用杀掉微信只需重新扫码进入小程序就好）。微信开发者工具的话清除缓
存之后重新打开小程序就好了。删除分号的问题不用告诉别人，省的 they retest，sheng 的 they daodao！！idea 只需打开 3 个，其他都可以通过找 maven 包里
的源码去调试。idea 强制退出的话之前的 80 端口一直在跑着！！所以 idea 最好先把项目停掉再关闭窗口。一定要给娇姐一种靠谱感，起码不能犯任何错误。任何一
件手上的工作都要有负责，生产验证要到位！功能验证好，验证时间要长！！上线后直觉上有问题直接说出来一起讨论改过来就好了！！
sit
mysql.address.fengchao cjjloan.crqqtvsjmosc.rds.cn-north-1.amazonaws.com.cn:3306
dev
mysql.address.directmarketing devloan.czkud4y2sz2c.rds.cn-northwest-1.amazonaws.com.cn:3306
mysql.address.directmarketing.slave devloan.czkud4y2sz2c.rds.cn-northwest-1.amazonaws.com.cn:3306
customer/export 写进上线文档里面去；切完 boot 后，线上流量都要达到百分百！！
p_s undefined；k2 页面 vcode 收不到验证码；今日业绩 H5 页迁移；提示娇姐多测一下注册落地页、mgm 注册页
dmweb 新增配置项 webprefixUrl dmmgr 新增配置项 mgrprefixUrl
dmweb directmarketingweb.url.webprefix https://c.lattebank.com/directmarketingweb
dmmgr directmarketingmgr.url.mgrprefix https://b.lattebank.com/directmarketingmgr
dmmgr directmarketingweb.url.webprefix https://c.lattebank.com/directmarketingweb
dmmgr 小程序校验是否可注记的接口新增。公众号今日业绩 H5 页入口地址链接配置变更！！
领取公司的前端技术升级任务. 每次上线前一天下午 5 点之前完成所有工作（因为要记录 master 上的最新 git log 写进上线计划 checklist）
小程序插件、拆包。
##Sprint78 迭代计划 ###迭代周期：
2019.09.11 ～ 2019.09.24

###迭代目标： 1.花费系统 SIT 测试完成；
2.Dashboard 1.0 技术方案确定； 3.今日头条测试环境联调通过； 4.亿玛 dsp 对接上线； 5.开心消消乐 dsp 对接上线； 6.投诉名单同步渠道对接上线；

###迭代风险： 1.花费系统 SIT 部署有未知的环境联通风险，需要提前协调；9.17/曹臻 2.花费系统登陆接口依赖舜飞生产登陆接口，存在联通风险，需要提前协调；9.17/曹臻
3.Dashboard 可行性分析存在未知的细节风险，需要尽快梳理；9.20/曹臻 4.投诉名单同步渠道对接依赖渠道方，有时间风险； 5.今日头条对接依赖中台系统，存在时间风险；9.17/曹臻

###迭代内容：

#### 花费系统运营公司结算方式模块（CPM） 13sp

- 运营公司结算方式（CPM）添加接口 6sp QXJ
- 运营公司单条结算方式（CPM）详情接口 3sp YXY
- 运营公司结算方式（CPM）编辑接口 4sp YXY

####花费系统运营公司费用模块（CPM）24sp

- 运营公司运营费用费用详单单条结算数、总花费修改接口 2sp YXY
- 运营公司运营费用费用详单（CPM）查询接口 8sp XF
- 运营公司运营费用结算确认函（CPM）生成接口 8sp LZB
- 运营公司运营费用费用详单（CPM）Excel 生成模块 6sp XF

####SIT 环境部署+联调 10sp

- SIT 环境部署+联调 10sp CZ

####Dashboard 1.0 梳理+技术方案确认 8sp CZ

#### CPM 结算方式 14sp LYZ

- CPM 列表(沿用之前的，接口联调) 1sp
- CPM 结算基本信息 2sp
- CPM 结算-KPI 考核 5sp
- CPM 结算-固定系数 1sp
- CPM 结算-有效期校验 2sp
- CPM 添加页面通用编辑查看功能 3sp

####运营费用 21sp

- 列表 5sp GNC
- 生成结算确认函 + 下载费用详单 3sp GNC
- CPA 费用详单 3sp TMM
- CPM 费用详单 3sp TMM
- 确认函记录 3sp GNC
- 编辑邮件内容 2sp GNC
- 邮件列表 2sp GNC

####dashboard 数据可视化选型调研 8sp TMM

####今日头条编码 sp2 LK

- 近期应还款信息对账文件生成和上传 2 [n2h]

####今日头条还款入账部分联调 sp6 LK

- 主动还款 2
- 系统批扣 2
- 提前结清 2

####今日头条借款+协议+绑卡联调 4sp LZB

- 头条借款对接联调 3
- 头条协议接口联调 1
- 头条绑卡接口联调 1

####今日头条文件上传 SFTP 联调 sp5 LK

- 生成的数据格式与头条方验证 3
- sftp 文件目录规则编码与联调 2

####亿玛 dsp 对接 5sp SQ

- 下载 2
- h5 落地页 3

####开心消消乐 dsp 对接 5sp SQ

- 下载 2
- h5 落地页 3

####投诉名单同步渠道对接 7sp ZNH

- 数据营销\_qlt 1
- 数据营销\_rp 1
- 数据营销\_lyd1 1
- 数据营销\_lli 1
- 数据营销\_at 1
- 数据营销\_jhrc 1
- 数据营销\_bst 1

####头条联调 7sp ZNH

- 授信联调 4
- 授信资料补充接口开发 联调 3

####蜜小蜂 3sp ZNH

- 建项+资源申请 2
- 蜜小蜂流程梳理 1

####撞库数据清理 1sp ZNH

- 撞库数据清理 job 1

####新浪微卡贷对接联调 4sp LZB

- 新浪测试问题协助解决 4

####巨掌-积分墙撞库&点击回调 2sp QXJ

####告警通知接神策 3sp YXY

####特赞 H5 落地页对接 7sp

- 前端 4 LYZ
- 后端 3 LK

####新 msggateway 接入 7sp

- 对接账户配置 2
- 短信发送 5

####实时归因系统增加捞回 DSP 点击未转化用户的逻辑

- 实时归因系统增加捞回 DSP 点击未转化用户的逻辑 3sp LK
- 渠道归因添加 dsp 点击记录查询接口 3sp SQ

###将要实施的改进内容列表：
1、设计、准备工作不充分，导致接口频繁变动 - 屈晓军
2、实际开发人员及时对原有设计进行完善 - 薛凡
3、开发对已有功能做改动后明确指出需要对哪些功能模块做回归 - 马若兰
4、开发任务各时间点明确并记录 - 曹臻
5、某些功能上线后业务验证困难 - 彭玉娇
6、上线 checklist confplus 填写规范（不用修改-追加选项），异常情况备注说明清楚，方便运维人员配置 - 张能华
7、迭代进度曲折，估点偏差较大，实际工作量比估点大不少 - 刘毅泽

###持续改进内容列表：
1、前后端接口对接、联调不顺畅（后端主导，定好接口后主动与前端勾兑、确认，项目负责人把关）- 刘毅泽
2、dev 环境工单流程繁琐、时间长 - 郭南赐
3、后端接口尽量通用给到前端，减少前端开发量 - 谭梅梅
4、sprint 燃尽图不合理（早会各自拖动自己的任务进度） - 何澄清
eslint-error 会阻止页面的正确渲染，页面渲染的还是旧代码。 lizhongbao@lattebank.com d9654f 需要架构层面的代码改动或者设计改动同一天上线的
话需要至少提前一天跟架构沟通。公司内所有觉得有用的 wiki 文档都要收藏起来！openshift 资源下线周二申请。以后构建部署工作都交给 QA。

第四季度给自己定个职业目标。

# lc

linkedcare.cn:Aa168168168；Mac 修改 dns 的方式最好通过 hosts 文件不要通过 preference-network；
antd 升级
componentWillReceiveProps 里面通常是改变 mobx 的 store（class 组件的 private \_store）不是 react-state，所以说怎么迁移这个钩子呢~
https://zhuanlan.zhihu.com/p/37169569;
测试环境密码随便填~local-swagger:admin 123qwe;
http://point.lctest.cn/swagger/index.html;http://lccrm.lctest.cn:1568/swagger/index.html;https://openplatform-app.lctest.cn:20443/swagger/index.html;
http://openplatform-app.lctest.cn:9688/#/enterprise-center/point;
http://localhost:9688/#/enterprise-center/point;/Users/nanci/bjhl/projects/lc.crm.mobile;
/Users/nanci/bjhl/projects/lc.bms/src/Lc.Bms.Web.Client;https://lcbms.linkedcare.cn/#/;http://lccrm.linkedcare.cn:9635/#/;
useless import 可能有点难以完全去除~不太彻底
GetCustomerIdByAccountId

@郭南赐
诊所中心
git 地址: http://git.lc.com/NeptuneTeam/LinkedX.OpenFront.git
开发目录: /src/
项目分类:
/LinkedX.EnterpriseCenter/ 诊所中心
/Mobile/ 移动端 bms 产品购买申请
/PC/ PC 端 产品购买申请

注: 现开发都在 enterprise 分支上，后期可合并到 master 分支

/Users/nanci/bjhl/projects/lc.bms/src/Lc.Bms.Web.Client/app/modules/workTable/workOrderDetail/customerField/customerFIeld.tsx
/Users/nanci/bjhl/projects/lc.bms/src/Lc.Bms.Web.Client/app/common/components/ProductSearch/ProductSearch.tsx

webpack 升级到 4
https://reactjs.org/docs/optimizing-performance.html

rc-dynamic-form && antd-v4: <Application>受影响嘛
tslint-error 绝对不能提交了~工作中再也不能犯任何错了;自测的时候需要明确准备好完全充分无误的测试条件！http://localhost:21022/;http://lccrm.lctest.cn:1568/;
http://lccrm.lctest.cn:1568/swagger/index.html；

https://blog.csdn.net/baozhuona/article/details/94007661；https://github.com/ant-design/ant-design/releases?after=3.24.3；
http://106.14.37.60:8081/；https://fulin602.lctest.cn/ares3/#/new/enterpriseCenter.services fulin 123qwe;
估点时，如果对 UI 变化不是很清楚，那么一定要对比好~才好估点;postMessage 的缺点，PWA 怎么用上，用好~；领口罩 215；工号 LC151824;SaaS not Saas
or saas; 1.浏览器自动切换到 HTTP 解决方式
浏览器打开 chrome://net-internals/#hsts
在最下面输入 openplatform-app.lctest.cn, 点击 delete
webview chrome 调试：chrome://inspect/#devices;open -na Google\ Chrome --args --allow-running-insecure-content;

# 5.29

- run the react todo list app with redux, react-router, webpack
- add wds
- jest testing reducer selector
- scss font
- global jquery lodash, and validate in component1/page.js

# 5.30

- using node koa, mongoDB to play as server role
  -- be familiar with node api, mongoDB api.
- epic rxjs
- report/page2.js

# new todo

- when I'm quite familiar with above react-scratch app, I'll add some own react component like react-photo-viewer, react-upload-file, react-copy-paste, react-select-all-not, and push them on npm packages community, then you can download and use them in your projects.

- then I'll start to touch Vue community with Vue-scratch

我还是写成浏览器端渲染比较好一些 + koa 跑一跑,,,给好 json 文件就行

另外自己好好研究 chart + React Component,,, 还有就是 ProgressBars DoughnutText TableFunctional Confirm
帮雅琪姐修复好审批流的 bug
d3 怎么耍
react-script-async

然后 npm run dev -s 的时候

making some material-ui-based component, and then let it watched on gh-pages, (webpack wds aixos json--false-data, node-koa, jest, redux rxjs updeep reselect normalizr epic-middleware ) and make some common-chart components using d3

#practicing NODE API with electron-api-demos

#react-amusement-park yarn browserify npm-package.json node-koa server socket.io eslint
webpack-react-koa
browserify-react-koa-yarn
vue2-vuex weex
ionic
angular2
node-electron

meteor 全栈的一个框架 但是感觉被束缚了挺多的, mongo 用的肯定不爽...我还是自己用 material-UI koa(暂定) 来搭吧

koajs.com 应该是很不错的文档

先自己搞 webpack 的 htmlPlugin 前端渲染, 之后比较熟悉 node 还有 koa 的 API 的话,(新建个项目)采用服务端渲染

webpack 简单化, 先考虑好 npm run dev -s 之后再考虑 npm run build -s; 不采用 gulp, 采用 npm scripts 来写 clean 还有其他命令...

redux react-redux meterial-UI react-router jest reselect reducer-updeeep(immutable) normalizr
axios json-false-data
wds

后端给的格式有问题,,,的时候我前端得核对数据格式问题才不会报错阻断页面...(不过格式没有统一的话怎么在 ajax 请求返回重新渲染到 HTML 之前对格式做验证)

# For interview

做公司业务的时候, 发现许多需求变更是涉及到样式小细节的更改, 想了想, 应该最好能抽成公共组件就抽成公共组件, 这样可以随意更改, 不用好多个地方小样式改来改去, 统一更改多好, 多方便...

````javascript
// nodejs koa
import https from 'http2'
import fs from 'fs'
const options = {
  key: fs.readFileSync('localhost.key'),
  cert: fs.readFileSync('localhost.crt'),
}
https.createServer(opyions, (req, res) -> {
  fs.readFile(__dirname + req.url, (err, data) => {
    if (err) {
      res.writeHead(404)
      response.end(JSON.stringify(err))
      return
    }
    res.writeHead(200)
    res.end(data)
  })
}).listen(8080)

749 js 模块化:理解模块
750 js 模块化:模块打包构建
756 2016 学习 js
761 js 快速学习
762 CSS 忍者上
762 CSS 忍者下
763 atom
764 你不懂 js: this
768 主动工作
775 前后端分离
778 美团点评酒旅前端的技术体系
779 es6 module
780 你不懂 js: es6 class
783 程序员练级指北
786 for 循环
787 你不懂 js： es
791 console
793 service worker
794 2016前端技术观察(上)
794 2016前端技术观察(下)
800 es2016 改变
811 js 模块化
812 前端技术体系大局观
814 你不懂js: es6与未来语法(下)

---------done

766 你不懂 js: 对象
765 你不懂 js: this 豁然开朗 implicitly lost
767 你不懂 js: 混合`类`的对象 class inheritance
772 你不懂 js: 原型 Prototype Object.prototype
773 你不懂 js: 行为委托
781 7种方式实现下划线 box-shadow
790 node 前端异常监控服务-采集篇
798 你不懂 js: es6与未来语法(上)
801 CSS 框架构建原则 使用一致的命名空间
802 webpack从入门到上线
808 你不懂 js: es6与未来语法(中) es5 getter/setter
813 PWA
816 node 服务的监控预警系统架构
817 复杂单页应用的数据层设计
818 2016情封
818 js 数组去重
820 整洁的 js 代码
821 摩拜小程序
823 Web 路由
824 es6 笔记
824 网络连接
825 2017前端
827 全栈 js
828 2017前端性能优化清单
829 你不懂 js: es6与未来组织(上)
830 超完美服务端渲染开发环境
832 10倍效率 js 开发者
833 设计一个前端监控系统
843 前端性能优化
844 界面组件化设计
845 扩展运算符
847 前端路由
848 webpack 打包分析与性能优化
849 XSS攻击防御
850 为什么学前端
851 八大网页动画设计
852 高效小程序
853 js启动性能
854 flex 布局
855 单页面应用下的 js 内存管理
856 单页面应用下的 js 内存管理实战
856 程序员生长
857 Web 持续集成实践
858 函数式码农之一
859 函数式码农之二
859 没有循环的 js
861 chrome源码如何计算CSS
861  PWA
867 前端 UI 工程化
869 搜索框设计

752 React diff 算法
770 react+redux渲染性能优化原理
792 react lifecycle
799 重新设计React 组件库
805 React && Vue
815 从 React 谈 WebUI 开发
819 React组件库设计
826 React5大核心概念
873 工程化开发 React 组件
897 使用 Flow 编写 js (静态类型检查工具)
902 React生命 周期使用场景 04.08React15.5.0
904 React 常见面试题
908 深入理解 json
936 比较与理解 React 的 components elements instances

868 Mobx 思想的实现原理 && redux
889 mobx redux comparing the opposing paradigms

实践计划:
- react-addons-perf
2. react组件渲染性能监控

787 2016图书


在进行性能优化前，我们先来了解如何对React组件渲染性能进行监控。React官方提供了Performance Tools，其使用起来也很简单，通过Perf.start启动一次性能分析，并通过Perf.stop结束一次性能分析。


调用Perf.stop后，我们就可以通过Perf提供的API来获取本次性能分析的数据指标。其中最有用的API是Perf.printWasted()，其结果给出你在哪些组件上进行了无意义的(没有引起真实DOM的改变)虚拟DOM比较，比如如下结果表明我们在TodoItem组件上浪费了4ms进行无意义的虚拟DOM比较，我们可以从这里入手，进行性能优化。


而Perf.printInclusive()的结果则给出渲染各个组件的总体时间，通过它的结果我们可以找出哪个组件是页面渲染的性能瓶颈。


和Perf.printInclusive()相似的API还有Perf.printExclusive()，只是其结果是组件渲染的独占时间，即不包括花费于加载组件的时间： 处理 props, getInitialState, 调用 componentWillMount 及 componentDidMount, 等等。

自己在项目里面画 d3 流程图(审批流什么的...)

以后看别人的博客, 别人的文章时, 看到好的东西怕了忘记, 就 copy 一下(留作备忘)...实在太好了, 就多思考几遍,,, 更好就多练练手, 多想想原理, 好的不能再好就分享到微博朋友圈上面...

其他情况下,,,多想想怎么为面试做准备,,,多想想数据结构和算法, 还有自己手写出很多有意思有挑战的项目出来


全选全不选做成组件 发布到 github 上面去
go to better place as soon as earlier as possible
为阿里, 腾讯, 百度, 网易, 美团, 有关原生 js, es6, 数据结构, 算法面试题做准备
leetcode
css dom 二叉树 伯乐在线
react-treemenu  my-project-published-on-npm-and-github before I find a new job~~~要考虑好这一个个叶子节点不仅仅是简单的链接, 还有样式要写好 复用性高, 不要写死, 可配置主题色, 色系可选择, 还有完全自定制各种元素,各种状态的字色背景色, 按钮大小
还有 treemenu 的展开方向??
做完之后和 react-tree-menu 做了对比, 看看有没有什么地方可以借鉴过来

guonanci/react-image-viewer  vs react-images  我的有个默认的 prev next 函数, 只要你把图片 URL 数组传进来就行了, 默认: 无限滚动,,,

material-ui && ant-design

好好借鉴 react-lazyload treemenu.js react-images(<Lightbox />)

ABTest

reduce  方法多尝试尝试

所有 vue 暂时跳过, 以后想过来看就来看, 不过暂时还是先不看为主(自己好好捣鼓捣鼓为先...)吧...


ownership
技能
熟悉 es6 的常用语法
代码规范意识强, 遵循 airbnb/javascript/style-guide的基本原则
熟练操作 git 命令行的常用命令, 项目协作能力强
经常性在项目当中配置 ESLint
有单元测试的经验, 习惯搭配 mocha + chai
熟悉 React, redux, webpack, react-router; 熟悉 React 技术栈内其他类库, 工具的使用
了解响应式编程的使用, Rxjx/Observable 概念清晰
熟悉 chart.js d3
了解 node/koa/express 的基本原理, API 使用, electron
有一定的数据结构与算法基础, 熟悉常用的数据结构, 算法还行
了解 Vue, 微信小程序,
熟悉 scss 的配置, 使用, 懂得解决常见的 CSS 布局, 兼容问题
熟悉原生 js, 了解 lodash 源码

移动端:??
vue, 小程序
weex, React Native

兴趣 && 认知
js 控, 热爱前端, 对服务器方面也充满兴趣, 希望以后成为js全栈大神
Mac 控, 同时搭配两台高清大屏幕是最好不过了
日常性的了解前端新标准, 新趋势, 新技术, 新产品; 经常性的升级自己的工具
节约时间, 远离百度, 从程序员做起
经常闲逛gayhub, 喜欢看源代码
有一定的设计常识, 会自觉调整到适当的基本颜色, 字体, 间距, 对齐, 样式, 布局等等, 减少CSS工作量

SATs:
8.12 3:00 4:00 pm 电话微店现场链家
8.19 3:00 4:00 pm 电话网易现场美团
8.26 3:00 4:00 pm 电话阿里现场滴滴
9.02 3:00 4:00 pm 电话腾讯现场百度
9.09 3:00 4:00 pm 现场头条

杭州 微店 姜天航
北京 链家 雷哥

杭州 网易 没有人诶 只能看脉脉或者拉勾了
北京 美团

杭州 mark.chenfl@alibaba-inc.com 蚂蚁金服(早读课) 张云也可以 王陟诚天猫前端
北京 滴滴 院长 王旭

腾讯 袁威
百度 陈奇 王陟诚 陈默
头条 万郁青 李朋耀
摩拜小程序


webpack

npm run dev
npm run prod
npm run test

为什么 EXTRACT_TEXT_PLUGIN 还做 dev 合 prod 的区别?


webpack.config.js   只支持 let const 什么的, 不支持尾逗号 无分号...


.editorconfig.js



8080 但是页面没有出来...


"react-hot-loader": "^1.3.1", 会在 react-hot-loader/patch 上面报错,
"react-hot-loader": "^3.0.0-beta.7", 就不会,,,但是我看了看 changelog 里面没有 patch 相关的 bugfix, 只看到了一个小的 issue


http://localhost:8080/Users/bjhl/pro/react-app/public/app.js   404 GET


Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
 - configuration.output.path: The provided value "http://localhost:8080/public" is not an absolute path!






eslintrc
editorconfigrc


"import/extensions": 0,
"jsx-quotes": [2, "prefer-single"],

difference ??

use eslint: recommended with some rules from airbnb-style-eslint
airbnb 8.2
font-awesome 怎么用上呢
.editorconfig .travis.yml




mengge 回去的路上就要时刻告诫猛哥 我今晚上至少要写上2000行代码...就问你你信不信

赶紧走赶紧吃 我要开始写代码了

scss 搭起来 这个差不多, 不多得自己搞一套 CSS class库(好原始...)

redux
react-router
jest write reducer UT
mongo node webpack.server 怎么写 node怎么启动, 然后怎么造出假数据


mocha with vue later after


减少 action, 将一个组件(或者相似交互)的 action 合并成一个 action, 通过 payload.type 加以区分

BEM 实践


import normalize.scss   css的 import 怎么支持从 node_modules 里面引

no-console
no-alert

杜绝前两个, 实在卡住了, 可以用 debugger , 然后再 console里面去 log 变量

主要是正确思路上多下功夫


 Cannot read property 'apply' of undefined


如果  是从自己写的 json 假数据里面 搞来 state子树, 很有可能自己会犯一些低级错误, 但是浏览器报错不友好,,, 尾逗号问题还有 duplicate key 这样的问题

所以说自己写 json 一定要注意这样的问题...



router usage

flex usage

scss lib often used

must use BEM


how to avoid css important!!


函数头尾不断行, 中间按逻辑断行...


npm i 新的版本号的话不用 npm un 旧的 但是要注意 -S 还是 -D


output.path
output.publicPath

dev.publicPath


their difference

and how to combine usage with react-router node mongo
when

react-dom/server



renderToString


以后箭头函数单个参数的() 我也加上, 不用搞来搞去多好  省心, 一直加上不就行了


以后 如果是一个组件 或者 UI 单元的 actions 我应该把它们抽成一个 payload 自带 type 的 action, 这样可以减少 action 数量, 使代码更简洁, 也更不容易出错...嗯嗯嗯, 就是这个道理, 总结的很不错小伙子



react-router-redux 什么情况下用起来最爽 syncHistoryWithStore

还有 react-router/lib/createMemoryHistory 的 createHistory

react-router {match, RouterContext}


_.map()  适用于 arr 或者 obj 都可以

和 native-js-arr-map-method 不一样...

js-obj-no-map-method

// 存储过程不显示不反不就行了嘛

一般来说, json 接口能不加字段就不加字段, 前端显示不需要xxx的时候不反xxx不就行了吗


原来 _.filter 是 Collection-method, 所以用在对象上面的话会得到数组


http://lodashjs.com/docs/#_assignobject-sources-customizer-thisarg

一般来讲 _.assign _.merge 用的比较多, _.create(prototype, [properties]) 用的比较少...


https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object


熟悉一下 express http httpProxy pretty-error 在 nodejs 环境下的基本 API


算法备战


对 rd 传来的 json 原生数据进行解构赋值时 会有命名冲突, 后端是下划线间隔, 前端是 camelCase, 解构赋值会破坏前端命名规则,,,暂时不知道怎么解决这个冲突...mgj


_.clone(xxx, true), _.cloneDeep


how to turn ['a', 'b'], [1, 2] to {a: 1, b: 2}


jsx 里面无论任何类型的属性值都至少必须用花括号括起来

组件是不是有时候不需要传给它 data, 只需要一个回调就行了

_.without 应该设计成可以传 第二个参数为数组形式的才对




updeep 应该用好他的 API, 而不是依赖lodash 写出更复杂的逻辑, 而且会经常发现一些奇怪的逻辑


时间 2016.08.01 2016/08/01 20160801 2016-08-01


By default with version npm 5.0+ npm install adds the module to the dependencies list in the package.json file; with earlier versions of npm, you must specify the --save option explicitly. Then, afterwards, running npm install in the app directory will automatically install modules in the dependencies list.


写 react 组件的时候用 const settings = {optionA: 'a', optionB: 'b'}; <ComponentA {...settings} /> 替代 <ComponentA options={{optionA, optionB, ...}} />


坚决杜绝王者荣耀, 当然和猛哥撸几把除外...哈哈...我相信和和猛哥感情还是很好的...


react-slick 我就不用在项目里面了, 优先赶进度, 而且...要用好它除了解决 React node-sass react-slick Windows Mac 的兼容问题, 还得考虑到API 使用遇到的问题, 暂时不好描述

if else 的 else 只有 return 的话, 可以不写 else{}...错错错!

级联 需要考虑到 title 还有如果有全部的话, `全部`的 id 是 0 或者 '', null, 只要_.isEmpty(pid) 是 TRUE


公共的 Select(labelKey, valueKey 可以自定义, 所以暂时没什么可封装的) 还有 SelectCascades 两个应该

select 的宽度问题不会自适应嘛, 还需要我来加样式?


写公司项目公共组件时代码量尽量少, 可以满足目前需求就行, fz next month i will leave, just do it as efficiencyly as possible, and prepare for interview


UI 不能想替换就提换, 得统一, 一致


好多地方前端暂时写死的字段名比如说 id, 最好一定要和后端统一, 否则前端好多地方都要做兼容处理(前端一开始做好组件公共化就可以有效减少这种问题)



实时 筛选 value ...


epic 可以传 payload 进去 太爽了...


堆栈区别  栈是 stack, 堆 === 队列?嘛


react-router-redux 的 routerMiddleWare 我暂时不打算用上...以后再说



王者荣耀好多都是他们智商不够10岁的傻屌猪队友, 玩起来没意思...你猥琐发育就行, 不要送人头, 不要坑队友


navigator.serviceWorker / fetch  eslint-plugin-compat installed will throw errors about them and more...


现在，我们的 JS 代码是标准的 ES6 格式。Flow 能够检查这样的代码，但为了发挥它的最大威力，我们要在我们的代码中加入注释；但这样，我们的代码就不那么符合标准了。为了让 Babel 和 ESLint 在解析我们的代码时不崩溃，我们需要通过配置让它们理解注释。

运行 yarn add --dev flow-bin babel-preset-flow babel-eslint eslint-plugin-flowtype
flow-bin 是在 scripts 任务中用的, babel-preset-flow 帮助 Babel 理解 Flow 注释， babel-eslint 让 ESLint 依赖于 Babel 解析器， eslint-plugin-flowtype 是一个用来检查注释错误的 ESLint 插件。


如果你想让 Flow 忽略下一行代码，你可以用上面的注释方法；它的用法和 eslint-disable 很像：


creating isomorphic react+redux, webpack1, scss app and deploying it on Heroku  including 3 episodes (learning express, nodemon, pm2 apis, heroku nodejs apis, funny) (2017-08-02, )

learning react npmjs fully, write react-tree-menu-component, and publish it on npmjs.com and github.com, (2017-08-10)


then using it on yiminanci.herokuapp.com, also using ant-design, material-ui ...and more in my app, also (2017-08-20)

start interviewing meituan, dd on 2017.08.26 am and pm(time is precious, value the whole day, and use it fully)

writing a mini-program using weex, heroku, maybe working as a bookshop including functions like register, loginout, homepage(view, edit, verify), booklist(pagination way? scrolling down-up or click-on-buttons), book details(how to get real book data source by node from other websites like amaze, dangdang)(2017-09-20)


learn angular4 with a good tutorial, learning ts fully using a week, then a week later, learning angular4 usage fully, and try to do sth more interesting, using mongo, docker```css

react, redux, webpack, node, express, scss(BEM practice, what is my styles structure), heroku, updeep, rxjs, normalizr, reselect, ui-lib-in-app, material-ui-ant-design, git(rebase, hooks, git-pro-zh-cn 多做笔记...), algorithm(binary tree, quick sorting and other sorting methods, and time complexity, room complexity understading), leetcode, d3, c3, chartjs(talk about how I practice it well) rubix can be talked less


````

```js
// throttle and debounce 一般伴随着客户端 DOM 事件监听
实现一个原生的拖拽功能（不用 H5 Drag & Drop API），需要一路监听 mousemove 事件，在回调中获取元素当前位置，然后重置 DOM 的位置（样式改变），每移动一定像素而触发的回调数量是会非常惊人的，回调中又伴随着 DOM 操作，然后引发浏览器重排和重绘，性能差的浏览器可能会直接假死，用户体验非常糟糕。

DOM 元素的拖拽功能实现
mousedown/keydown(射击游戏，单位时间只能发射一颗子弹）
计算鼠标移动的距离（mousemove）
Canvas模拟画板功能（mousemove）
搜索联想（keyup）
监听滚动事件判断是否到页面底部自动加载更多：给scroll。。。
// 函数节流： 让一个函数不要执行得太频繁，减少一些过快的调用来节流，可以理解为间隔时间段触发

function throttle(fn, delta, context) {
	let safe = true
	return function () {
		// 这里不是很理解， 直接去掉 return function () { ...}可以吗， arguments 属于哪个函数， fn 吗，怎么看出来的？
		let args = arguments
		if (safe) {
			fn.call(context, args)
			safe = false
			setTimeout(() => {
				safe = true
			}, delta)
		}
	}
}

// 函数去抖就是对于一定时间段的连续的函数调用，只让其执行一次。
function debounce（fn, delta, context）{
	let timeoutID = null
	return function () {
		if (timeoutID) {
			clearTimeout(timeoutTD)
		}
		let args = arguments
		timeoutID = setTimeout(() => {
			fn.call(context, args)
		}, delta)
	}
}

function insertHTML() {
	document.body.innnerHTML += '<br>'
}
window.addEventListener('mousemove', debounce(insertHTML, 1000)


```

#2018.3.14
熟悉页面代码（一个目录为例，完完全全看懂）

antd && antd-pro

找准入口一个业务目录的所有文件及联系先看懂， 然后在了解整个项目各个文件夹的定位及相互联系

dva 使用及原理

how to write antd :global style override prob

可以参考其他没有 model 的静态页面进行 flex 布局

可复用： 底部 + 小标题（有背景色配置）+ 技术文档子节点（用好 antd 基础组件， 注意 hover 的效果，要不要手写 js，高度变化。。。） + 产品优势子节点（头部 icon + 中间加粗标题 + 底部描述部分）

产品流程就不复用了

antd Card 组件!

#be very good at:
react + redux
antd + dva + webpack
react-picture-github-npm-module-development
react-tree-menu

react-ui-kit-development

vue2 vuex
webkit 写到 segmentfault 去
编程之美
编程珠玑 1 + 2
数据结构
react vs vue
node express db: mongo mysql
mini-program
angular-component
react-native
html5 webapp
WebAssembly
electron
nwjs

{
!!selectedRows.length &&
<Button onClick={this.handleDelete}>删除</Button>
}

{
selectedRows.length &&
<Button onClick={this.handleDelete}>删除</Button>
}

@import "~antd/lib/style/themes/default.less"; 一直都在重复

jsx 属性值{。。。} 花括号内靠近属性的时候可以不用加空格

首页 需要加在产品中心上

hover 在卡片上的时候 有动画 而且需要切换隐藏显示 还有上下坐标平移，，，是不是可以用 React 插件还是手写 js，，，css3-transition-or-animation

总共七张页面都需要写好

dva 的错误提示很友好呀。。。不错不错

lodash/fp

{/\* {cardInfo.forEach((item, ind) => {

  <Col span={6} style={{padding: '60px 45px', background: innerBg}}>
  <a href={cardInfo.link}>
  <Icon type={cardInfo.iconType || 'file'} />
  {cardInfo.text}
</a>
</Col>
})} */}

you should never forget key-prop when you use a for-loop
map forEach 更换之后才可以渲染。。。

jsx 的 （） {} 没有必要加就不要加

红色下划线 用 css 来写。。。

有没有公共的 class 呀。。。比如这样的.tac

尽量不要用原生 DOM 标签，能用 antd 就用 antd

````


#eslint


9:45  error  Block must not be padded by blank lines         padded-blocks
14:9   error  Unnecessarily quoted property 'iconType' found  quote-props
16:36  error  Missing trailing comma                          comma-dangle


 2:30  error  Unexpected trailing comma                             comma-dangle

 import { Row, Col, Icon, Card } from 'antd';
 import { Row, Col, Icon, Card, } from 'antd';


31:9   error  Missing parentheses around multilines JSX                            react/jsx-wrap-multilines

23:46  error  Unexpected trailing comma                             comma-dangle
24:12  error  Missing parentheses around multilines JSX             react/jsx-wrap-multilines


jsx return must begin with `(`

冒号, 逗号; 缩进   import, export {} ()

能用stateless function 就尽量用
能用react component life circle 就尽量用

新的footer替换以前的老footer  ？？ 多好

引入图片好多个import。。。草草草，，，好像也想不到什么好的办法。。。要是可以

import {aPng as 'a.png', bJpg as 'b.jpg'} from 'common/assets';

或者干脆直接require也好。。。（路径放在common里面好还是放在各个业务目录好）

.roadhogrc .webpackrc alias   分别都是什么写法

css modules 如果不使用styles.wrapper 会不会起作用或者会不会出现覆盖的情况。。。不过


CSS 伪元素 伪类 做好笔记。。。

自从用了css-module之后， css类命名都变成了camelCase。。。


less 的类继承  mixin。。。


[babel-plugin-dva-hmr][INFO] got routerPath ./router



17 stack frames were collapsed...


```css
min-width: '1100px';
min-width: 1100 px;

````

#上线流程：

生产环境：

=> npm run build (//打包，更新 dist 文件夹文件，修改版本日期)
=> git add
=> git commit -m "上生产"
=> git pull
=> git push -u origin prd
=> git log (//commitId/版本 ID)（word 上线工单需要填写）

css module styles.bannerWrapper.banner.text.title or just styles.title to find the first-match

敢时间的话就先不写 static propTypes 和 defaultProps 了，反正自己知道怎么写。。。

接口文档 比如说银行卡认证有许多文档 应该用第一个。。。或者说直接链接比较好

诚信认证 + 负面探针 接口文档找不到链接

车险保单 iconSrc

/src/routes/Cpzx/Fmtz/index.js
Syntax error: /Users/bjhl/pro/openapi-web/src/routes/Cpzx/Fmtz/index.js: Unterminated string constant (134:6)

132 | ];
133 | const customerText = [

> 134 | '某现金贷平台产品分为额度为 500 元、1000 元的小额现金贷，还款期限为 7、14 天。

      |       ^

135 | 成立初期由于风控系统尚未健全，无法精准对用户进行信用评估，在使用全景雷达后，
136 | 通过对用户在它平台的申请行为、履约行为、平均授信额度等数据的参考，
137 | 合理的优化了现有流程，一定程度上的缓解了大量新用户授信难的问题。',

Failed to compile
./src/components/Cpzx/ProductIntro/index.js
Syntax error: /Users/bjhl/pro/openapi-web/src/components/Cpzx/ProductIntro/index.js: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (37:6)

    35 |         <main className={styles.desc}>{desc}</main>
    36 |       </article>

> 37 | <ul>

       |       ^
    38 |         {featuresList.map((item, key) => {
    39 |           <li>
    40 |             <img src={item.iconSrc} />

Atom eslint-linter package fix errors 自动在 jsx 末尾加上分号。。。

jsx for 循环用 （） 包起来。。。不是用{}

no-style-attr-in-jsx!! use css-module-and-ant-ui-components(grid-layout) well~

eslint

no-script-url

node module resolver
Expected exception block, space or tab after '/\*' in comment spaced-commentp

npm run build ...在 Mac 上不起作用。。。。

#css-modules
不要写内联 style 属性！！

还有看看 styles 对象是什么数据结构，，，一个层次的对象吗

尽量好好复用所有代码

能复用就复用。。。

阿里云官网的一个 cubicbizier 无敌了。。。非常舒爽的感觉。。。

还有测试快速一些。。。

#响应式：

vw vh 兼容性怎么做处理。。。

如果要做卡片布局的响应式。。。必须做成双数一排。。。否则不要做响应式。。。

###/src/components/Authorized/AuthorizedRoute.js

import React from 'react';
import { Route, Redirect } from 'dva/router';
import Authorized from './Authorized';

class AuthorizedRoute extends React.Component {
componentDidMount() {
window.scrollTo(0, 0);
}
render() {
const { component: Component, render, authority,
redirectPath, ...rest } = this.props;
return (
<Authorized
onEnter={() => window.scrollTo(0, 0)}
authority={authority}
noMatch={<Route {...rest} render={() => <Redirect to={{ pathname: redirectPath }} />} />} >
<Route
onEnter={() => window.scrollTo(0, 0)}
{...rest}
render={props => (Component ? <Component {...props} /> : render(props))}
/>
</Authorized>
);
}
}

export default AuthorizedRoute;

不方便做响应式就采用 min-width + overflow-x: scroll

一般来讲 PC 端的设计图都是 1200 的 min-width, 如果要求 PC 移动同一套代码的话需要提前讲出，，，看看能不能实现，，，而且需要标明各个窗口宽度范围内需要有什么样的布局和样式细节。。。

通常来讲都是采用 PC 移动端两套代码。。。

两边大屏上留下的背景色有许多都是这样的。。。而且每一竖直块也没法统一背景色

有前端性能问题或者设计方案相关需要统一意见时，我要用我的聪明才智，，，前端大师修养来完全说服 UI 和 PM，，，让你们都得听我的。。。靠。。。

#布局涉及到响应式的话：：

如果有很多块背景色不一致的水平区域。。。应该分别包一层 w1000。。。还有外面的 wrapperBg

代码能复用就服用。。。一定要这样。。。

严格的 eslint 校验，，，（只能在保存文件时进行部分性 fix，还不知道修复地对不对，，，）让我放弃了 atom

#CSS 技术选型。。。项目架构
是否

多用 switch-case-break。。。少用 if-else if-else,,,这样代码可以更加声明式。。。

es6-decorator && dva connect

antd-form decorator usage and principle

validateFieldsAndScroll({ force: true }, (err, values) => {

import { Form, Row, Col, Card, Input, Button, Checkbox, message } from 'antd';
import { fieldRule, isMail, desensitize } from '../../utils/utils';

const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group
const { FieldRequired, }

每一个行业都有套路，有许多技巧，，，我们几要少加班，多学点知识，多掌握点本领，，，又要讨 leader 喜欢，讨领导欢喜。。。就好~~~

我靠。。。居然提示我用对象解构或者数组解构。。。纽币的 vscode eslint。。。

dva 的 reducers 只有 changeReducers 方法？？

可以写成：
yield put({
type: 'changeReducers',
payload: {
a: {
b: 'nobb',
c: {
d: 'nodd',
}
}
}
})

来进行逐层更新吗，，，类似 updeep。。。

effects 的 select 可以选择全局的 state 就是方便了许多。。。哈哈哈，dva 封装了 store.getState...

延迟多少秒多少秒。。。可以采用 setTimeout 内嵌于 new Promise 的形式来弄。。。

```js
export const delay = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

delay(1000);
```

[eslint] Missing parentheses around multilines JSX (react/jsx-wrap-multilines)

给多行 JSX 加上圆括号就行了

yield call...赋值给左边时， 不要和{}相||
fdf

Chrome Tabs recent closed:
[doughnut](http://www.chartjs.org/docs/latest/charts/doughnut.html)
[override base64](http://www.cnblogs.com/hongru/archive/2012/01/14/2321397.html)
[github algorithms](https://github.com/nonstriater/Learn-Algorithms)
[VSC](http://imweb.io/topic/5a257453a192c3b460fce289)
[HOC on zhihu](https://zhuanlan.zhihu.com/p/24776678)
[react sources](https://www.jianshu.com/p/a1790e1945a8)
[npm react github](http://julian.io/creating-react-npm-packages-with-es2015/)
引用 img 的时候不用加上本地目录比如说 mxdz sqbg
[react-tree-menu-github](https://github.com/MandarinConLaBarba/react-tree-menu/issues)
[npm docs](https://docs.npmjs.com/getting-started/what-is-npm)
[fist npm package](https://codeburst.io/how-to-create-and-publish-your-first-node-js-module-444e7585b738)
[npm packages setup in google](https://www.google.com.hk/search?hl=en-US&source=hp&q=how+to+develop+a+npmjs+package+tutorial&aq=f&aqi=&aql=&oq=&gs_rfai=)
[create-react-app-uage](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#updating-to-new-releases)
[jest](https://facebook.github.io/jest/docs/en/getting-started.html)
[hero jianshu](https://www.jianshu.com/p/7bc34e56fa39)
[heroku on zhihu](https://www.zhihu.com/question/19983570)
[heroku nodejs docs](https://devcenter.heroku.com/categories/nodejs)
[heroku nodejs getStart](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
[heroku buildpack for nodejs](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-nodejs)
[nodejs api](https://nodejs.org/dist/latest-v9.x/docs/api/)
[js-stack-scratch](https://github.com/yepbug/js-stack-from-scratch)
[path-to-regexp](https://www.npmjs.com/package/path-to-regexp)
[js-little-algorithm](http://www.thatjsdude.com/interview/js1.html)
[universal-react-app](https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app)
[mini-program-register](https://mp.weixin.qq.com/wxopen/waregister?action=step1)
[mini-program-code-composition](https://developers.weixin.qq.com/miniprogram/dev/quickstart/basic/file.html)
[Googlebase64 编码 原理](https://www.google.com.hk/search?hl=en-US&source=hp&q=base64%E7%BC%96%E7%A0%81+%E5%8E%9F%E7%90%86&aq=f&aqi=&aql=&oq=&gs_rfai=)

[React for Beginners - Episode 1, 2, 3 - Creating isomorphic React+Redux App and deploying it on Heroku](https://blog.codingbox.io/react-for-beginners-part-1-setting-up-repository-babel-express-web-server-webpack-a3a90cc05d1e)
[RX-gitbooks](https://mcxiaoke.gitbooks.io/rxdocs/content/Intro.html)
#data stucture
[data structures by js](https://initjs.org/tagged/data-structures)
#react
[react docs](https://reactjs.org/docs/try-react.html)
#redux
[redux js org](https://redux.js.org/)
[redux advanced](https://cn.redux.js.org/docs/advanced/index.html)
[redux-async-actions](https://redux.js.org/advanced/async-actions)
[redux-observable-epics](https://redux-observable.js.org/docs/basics/Epics.html)
#react-router
[ReactTraining react-router](https://github.com/ReactTraining/react-router/blob/v3/docs/API.md#browserhistory)
#rxjs
[rxjs-official-website](http://reactivex.io/rxjs/)
#webpack
[github configuration wiki](https://github.com/webpack/docs/wiki/configuration)
#material-ui
[mui-0.20.0](http://www.material-ui.com/#/get-started/required-knowledge)
#antd
#antd-mobile

#circle ci
[circle ci docs](https://circleci.com/docs/2.0/)
#react-components-publish-in-npmjs-and-github
picture-viewer (image must be sharp considering its size, so you should adjust it flexiblely,,,)
tree-menu...
##references
[material-ui-tab.js](https://github.com/mui-org/material-ui/blob/master/src/Tabs/Tab.js)

啥时候需要改变 URL，啥时候不需要改变 URL。。一定要衡量好。。。

图片验证码一直失效。。。
redis 分布式的 session
与老 session 的区别。。。
测试环境 生产环境 的区别。。。http && https, 一台机器 && 多台机器（是否分布式的做法区别）

有懂 react 网站打开速度优化的吗

如何让表单只可以被鼠标点击，，，而不是被键盘 tab 键导航寻找到。。。

如何让表单无法记住历史记录。。。但是 type 是 password 的 input。。。浏览器会强制记住。。。就算从下拉框中自动填入历史密码，，，如果让提交按钮被点击的时候 提示用户必须手动输入。。。

github

cms java as backend, and

意见反馈页面的 textarea。。。

#工作时间工单数量，绩效，KPI 最重要，，，应用性能，工作效率也很重要。。。 #业余时间提高效率，，，注重方法 #离开手机，不看微信，不抢红包。。。 #工作时间，业余时间都要多喝水。。。多上厕所（可以不吃饭，但是一定要多喝水。。。）

细化每一个小时的目标，每个上午，每个下午，每个晚上的目标，，，，（实在没事做就把 chrome 的收藏夹全部过一遍，顺便清理一下，，，还有公众号的文章都好好的看一遍）提高效率，注重技巧方法。。。

在 html，css 上面画的时间应该最小化。。。

cms 这么 nb 嘛，浏览器没法记住密码，，，强制不让你记住。。。（JAVA 的一个模板，整个旧版 cms 是）

input type textarea 怎么不起作用。。。

.webpackrc 的 alias 验证一下 models, services, 。。。utils, utils$ 和其他的 alias 都要尝试一下。。。

feedback userinfo() 之后再调用新增，查询接口。。。

Command Shift H

sendValidCode 应该是 sendVarifyCode... wocao,,, woyaoquali。。。at least no pinyin and wrong word。。。

feedback-add-interface needs to add

如何减少调试时间：

文件增删， 文件路径。路由变动的改动尽量少。。。可以在单个单个文件里面去增删代码行数。。。

现在的 connect 可以连上多个命名空间的话，那么 defaultProps 是否可以嵌套。。。

考虑到 line-length 过大的话对于鼠标用户不方便查看代码，所以说注释要单独一行或多行统一放在被注释代码的上方

操作员信息页面无权限。。。

密码控件是不是已经被时代潮流淘汰了。。。

routerRedux 如何打开一个夹带参数的新页面。。。另外我想通过 url-query 以外的方式去传递参数。。。好像不行

callback fn is not defined ...有很能是因为 service 文件中没有找到对应的请求函数

table-dataSource-length 大于默认的 pageSize 的话，而且 pagination 没有设置为 FALSE，前端自动进行 pagination？

Atom-string-autocomplete can not make it???

modal 可以不用在前面写{ 、、、visible && 。。。

充值成功会有适当延迟的温馨提示？？？

// prevent
window.open().location = `/yhzx/zhgl/zhczRedirect?${stringify(result)}`;

修改密码的提示框样式。。。白色背景黑色字体

只和我重要亲戚，要好的玩得来的初中同学，高中同学，大学同学，关系密切的长辈，还有和本岗位，本行业相关度高的人密切联系，只向比我厉害、与我水平相当的人请教，更关注户口所在城市--杭州的主要生活指标。。。
多发展职业规划路上的好朋友（特别要好的那种）。。。买房也买地近，一起锻炼，孩子一起上学的那种。。。性格相似就比较好。。。孩子以后大了最好也是从事技术相关的，当 CTO，CEO，一起创业，创业公司合作伙伴或者全球化公司里面工作，
拱墅 西溪 那边买房子。。。
雪铁龙或者 panemena
进入互联网金融，batj 美团滴滴（外号啥来着。。。）也可以，，，
几乎不看朋友圈，，，关注所有前后端技术，（主要注重前端，先特别注重，吃透前端，之后往全栈发展，，，javascript，react rn，electron，node 为主）

select 选择框默认选择的空，之后需不需要设计成切空。。。的样式

ajax 的 error 处理可以统一处理到 request.js 或者 吧？？？
fetchFail fetchFailFinish difference
catch 我现在想要处理的是 status === 200 但是 success 是 false。。。

我现在可以自己尝试只处理 success 的逻辑。。。除非 fail 有特殊逻辑。。。
一个页面对应一个 state 好。。。还是一个页面对应一个 tab 好。。。

应该用 tab 更好一些？？？

涉及到查询条件的 select-option 在哪里去找到对应的 value。。。之前没有查询条件。。。比如说个人认证-身份认证-单量模式

Record.less 没有这个文件。。。start 得起来吗。。。

Search 可不可以写到 components 目录下，回调似乎不太方便写入 payload。。。我再看看吧

postDownload postFormDownload 区别主要在于 body 格式不一样，以及 Content-Type 取值不一致。。。

你需要我给你表单格式的数据还是 json 格式

我给你 json 格式那你这个接口为什么什么也不返回，，，我文件名也加上了。。。

你是参考的负面探针身份探针单量批量的核查记录核查结果。。。那个可以正常下载。。。但是你的 response 啥也没有。。。

核查记录 TabContent 就应该做成两个组件，，，（单量，批量应做区分），而且接口都统一了。。。

输入的时候会有

银行卡五要素
6230580000030768886 330282198208190017 施志乐 13656888228
6230580000036704752 41060319890402369X 马晓光 13136131812
6230580000087344649 440181198601274835 关立恒 13434317649
6225380074998636 362133198301262315 陈荣辉 15989358330
6230582000004079649 519004196603284032 毛宝山 13520945508
6230580000006676337 440624196802063816 潘黎明 18802590858
6230580000050699896 350822198605256155 谌寿春 18850372968
6222980021376308 430124196307261226 罗九中 13728897256
6230580000102144321 622627199207152433 杨爱佳 18693919003
6216262000011723169 350524199004056124 吴娟娟 13618213892
6230580000100781199 370826198711284634 杨汝武 13072539959
6230580000111790668 350581198907073032 蔡加富 15980015146
6230582000025035224 441522199009051015 李金龙 13543334885
6230580000013618082 433127198409047010 王本洋 13632615935
6230584000000907874 411202197104232539 马建春 13099955381
6230582000056960365 372925199007104340 冯亚南 18827675813
6216262000005389548 430725198604078012 黄兵 15118822140
6230583000001579079 342401198812026930 潘正龙 18389330283
6270670398557496 332527197002120821 陈爱青 18967740385
6230580000104459131 370702196810094814 孙仲建 13455668885

默认的选择时间 截止到今天的话

申请雷达报告

顶部 banner 100%宽度。。。
下面内容 w1200 m0-auto

操作员管理 没有给加上。。。

还得继续做迁移。。。

不行，我还是得用 vscode。。。还有就是 npm start npm start:no-proxy npm run build git commit 必须得开启 eslint。。。这样写出的代码保障级别一下就上去了。。。

css 最多嵌套三级的话 类似写 json 格式。。。只对第一层级做对齐，内部层级多的话就不要对齐了。。。麻烦

如何减少用户操作。。。是一个好的优化点。。。

我来搞一个 Pa

local prd:::

compress-to-dist.zip

rm -rf dist.zip && sh ci.sh push-build-dist && git log

10：22

是不是 npm run build 志前需要把 npm start 停掉。。。

在本地一定要测好。。。之后再上测试环境的话之后就直接上线了 我的大部分时间都花在 Warning: `defaultValue` is invalid for `getFieldDecorator` will set `value`, please use `option.initialValue` instead. bu 多看警告果然会有好处。。。为什么我的 delete 键经常会有问题。。。 不行

> find / -name nginx
> cp -r source dest/

bootstrap b9b3470857c97ccbf38e:756 Uncaught (in promise) Error: Loading chunk 82 failed.
at onScriptComplete (bootstrap b9b3470857c97ccbf38e:756)

    md的return不起作用。。。ctrl + return才起作用。。。


    roadhog dev的recompile实在太慢了。。。


    这他妈还叫增量compile吗。。。这叫全量编译。。。

我比较倾向于 global state。。。

要让测试一次性测完再统一改 bug。。。

npm build time: 15:39 到 16：32 到 16：40

黄欣 npm build time： 16：40 到
npm restart time:
15:39 到
18：25：52 到
19：04：00 到 19：08：00
npm first start time:
08:27:38 到 08:30:00 zuoyou
08:48:19 到 08：51：28 （cpzxIndexImgs all altered）

npm run build time:
09:46:40 到 10:40:00(大约而已，实际上我也不知道具体哪一分钟。。。) （cpzxIndexImgs all altered）
09:43:55 到 09：44：30

npm run analyze::
19：11：30 20:03

20：42 到

alias 都改好之后，，，那时间长度比较一下，，，看看时间少了没。。。

23：10：30
08：50：00 09：34 已经打包完但是似乎在等待--watch --debug 的反馈。。。
11：02
13：41 到 14：36 之前某一时间。。。
grid 布局 会好好用用。。。先把 flex 用熟，大的布局单位不要出现任何 width。。。height。。。之类的绝对值

任何命名都应该保证命名到位，，，一看就了解了百分之八十到百分之一百的含义。。。

不需要用的就坚决不 import。。。

Modal 有 confirmLoading 属性。。。

handle 对内，，，on 对外？？
之后

services/**.js 里面名字简单一点。。。update。。。add。。。delete。。。之类的。。。(不能这么些)
改用 fetch\*** 不用 query\*\*\*

generator

手机号最好不要是 InputNumber，antd-input 没有记忆功能。。。卧槽，，，组件封装的有问题。。。

好好用好招商信用卡，其他的，，，好好提升额度，把建设银行，兴业银行信用卡注销掉。。。尼玛的敢瞧不起我

一般来讲，都需要用到 loading。。。这样比较方便一些。。。
加载需要消耗较长时间的。。。比如说弹窗之类的

收支明细
明细的备注是哪个字段。。。
导出前置接口是在哪个地方用到。。。三个导出接口的区别。。。
getBAlDetailDetail 接口的 accoutType 字段为‘商户手续费-预付费’中文值？ 和所有导出接口的 accountType 传数组？
内外两种订单状态，，，订单类型的枚举值分别是多少
分页一直返回第一页的数据（尽管我传的 pageNo 一直在变化）
凭证导出：http://10.0.21.52:10112/baofu-cms/account/exportBalDetailCertificate2?startAccDate=2018-04-14&endAccDate=2018-04-21&relationNo=

导出：

涉及到无权限的东西，比如表格这样的。。。只要把 errorMsg 设置成 emptyText 写到表格体就行了。。。。

余额告警
余额告警为什么总是处理失败。。。

操作员管理
删除按钮是调哪个接口，，，
修改登录状态 登录密码是同一个接口吗，可以只传某个某些字段吗。。。如果不是，可以合并吗。。。
是否验证短信。。。isBindMobile 几个意思。。。
获取手机验证码是哪个接口，，，是否可以统一，，，codeType 是什么鬼，，，邮箱手机?
修改操作员的登录状态（初始选中了哪个 option）启用、暂停 和 正常，销户，锁定之间有什么样的关系。。。
codeType 验证码类型传什么。。。不存在的验证码类型。。。
添加操作员的时候总是返回 一直返回，亲，用户不存在，，，那我要怎么才能添加成功呢。。。
安全认证中心
解除认证接口？

jira 上面要实时更新任务状态。。。汇报给 报告人

公司有 github 网址就好了，，，

表格类页面进入或者离开页面的状态重置 只是重置你需要重置的就行，比如说表格数据部分 record。。。

modify 主要是特指某个某些字段某些信息的修改，，，Update 通常是指页面大范围的刷新。。。

C 是 1 == type,,,javascript 是 type === 1 可阅读性更强

错误采用 notification 正常查询不用 notification 也不用 message，，，采用 errorMsg,,,按钮点击类是用成功必要的话给一些 message 提示，错误统一采用 notification。。。

前端两次密码的输入是否相同验证，以及设置默认的密码格式。。。可以传入正则进行替换

10：50：45

请求 token 接口的时候，后端可以直接取到浏览器 refer 或者页面 URL 还是需要我传给你？ 用户在没有登录系统的情况下打开一个页面，，，和服务端配合一下在调用 login 或者 password 接口的时候后端返回一个 pathBefore 字段给我，，，之后我来做引导。。。导过去，，，提升用户体验。。。

DOM-input 经常会有 autocomplement。。。

身份生物认证，，，下次建个工单加上核查记录。。。

认证功能 可以写到 Enum.js 里面去吗。。。应该是不太好。。。如果后端返回的数据有问题，，，那肯定会有问题。。。不要轻易缓存一个东西。。。除非好多地方用到，，，而且必须跟后端确认。。。

安全认证中心
认证模式是不是有 分手机和邮箱两种。。。要看后端怎么返回的？

修改

https://cms.baofu.com/account/exportBalDetailToExcel2?startAccDate=2018-03-23&endAccDate=2018-04-23&relationNo=

手机验证码，邮箱验证码抽象一下，做成公共组件。。。

npm start 之前先看看有没有 vscode 侧边栏有没有显示红色错误。。。

#为了方便写代码 Command D 以及上下行对齐方便同时编辑。。。我决定还是命名还是采用宾语前置方便些。。。

有时候为了用户的方便，必须要写出更复杂的代码，，，用户第一，至于优化，重用，性能提升的事情，带吗简洁化这类的事情之后再说吧。。。

能尽量给用户提示引导式信息就很好，，，比如说按钮的样式，，，能不能点，，，等等

不要说什么反正点了没发请求。。。。你这么做用户体验不好，，，搞毛呀。。。

能不用 global state 就不用 global state 一进入页面就重新查询。。。

昨天今天 1 周一月 可以用 RangePicker 自带的 ranges 选项实现。。。不用自己手写逻辑。。。

新工单：
雷达预警的脱敏，，，
企业固话，企业变更的核查记录，，，
身份生物认证单量模式的核查记录。。。

预警状态是给你传 status 字段吗。。。生产环境上有的不能修改预警状态。。。测试环境可以而且。。。accountName 还是 accountType....POUNDAGE PREPAYMENT_FEE..。？？？

\_.keyBy

以后每个工单开发 90%以上了，就同时让亚辉和振华在我本地测，测试的时候千万不要改动本地代码，，，之后再发测试环境。。。。

16：13 到 16：45？？ 16：50？？ 我觉得挺快的了。。。

#ssh root@192.168.57.225 password: 2haolou@64

cd /usr/share/nginx/html/openapi-web/ && rm -rf _ && rz -be && unzip dist.zip && mv dist/_ ./ && rm -rf dist.zip dist

18：58：40 到

gitlab cpzx/index/index.js 找到那个 log 号 git reset

09：07 到

10:21:10

ipv6 设置成本地连接 。。。。

要做架构师的话，，，那么自己要兼具产品开发测试 UED 的综合性格与能力~

fetch("https://www.google.com/complete/search?client=psy-ab&hl=zh-CN&gs_rn=64&gs_ri=psy-ab&tok=CSAB6t1boBQR9H8fPUyUXA&cp=0&gs_id=2ks&q=&xhr=t", {"credentials":"include","headers":{},"referrer":"https://www.google.com/","referrerPolicy":"origin","body":null,"method":"GET","mode":"cors"});

以后建工单分开来建，多建点。。。别一次性压死人。。。

有弹窗 Modal 下发接口的我先改改。。。好像公共的`fetchFail`不起作用。。。需要手写 fetchFail...

formItemLayout 带有轻微的响应式，，，直接用，，，Enum 里的东西，不要轻易自己下改。。。

validateFieldAndScroll 要包住。。。getFieldsValue

以后统一写成 payload。。。不要写成 values 或者 inputPayload...懒得命名。。。

清除缓存。。。
表格类的直接写到 Modal 弹框类组件的 prop。。。不要写到 global state 里面去。。。。

工作当中可以学到很多很多东西，所以说工作很重要很重要，，，而且还可以提升绩效。。。。拿越来越多的年终奖！！！

要做一个喜欢啃骨头的人，再硬的骨头也可以啃断，，，就喜欢做有挑战的事情。。。

安全认证中心
设置认证和解除认证的接口。。。

React component 的方法和 componentDidMount 一样都不在末尾加分号

我还是用保持一致吧，，，所有地方跟我 service 里面的命名保持一致。。。我命名还是很准确的 bindMobile bindedMobile...

詹姆斯就是纽币，明星就是有气场

错误码细粒度足够就很好了。。。

react 有参方法 要放在 无参方法之前？ 否则会报错？？

直接在模板文件里面写 changeReducers....

少写 generator。。。直接在 index.js 里面 changeReducers 就行了

手机验证码或者邮箱验证码长度 格式不一定，所以不要做校验比较好
16:54:05 到

首先是思路，，，其次是敲键盘不要敲错单词。。。比如说 chageReducers...一定一定要看屏幕。。。特别是对于字符串，不会自动补全。。。所以说能复制就复制那些低水平的代码。。。

有挺多 const response = yield call(fetcnInfo, payload) || {};

改成 const responses = yield call(fetchInfo, payload);
const response = responses || {};

不然线上会有 Unhandled Rejection(TypeError): Cannot read property 'success' of undefined ??? 后端挂了线上页面出现这个影响就不好了。。。

思路是最重要的，，，思考思考再思考，，，要想用好 10 秒内的 hotreload,,,那么最好每次代码更新就几行而已。。。

14:17 - 14:

以后让志前帮忙打包吧。。。我这里打包还是比较慢。。。这些

下载 CFCA 证书 需要某个字段来控制权限？？？？

17:53:45 到

有按时间排序的数据进行页面展示时，一般来讲如果是时间顺序，那么最近的一般在列表顶部，，，不是底部。。。（用户体验会更好 ）

jira 上面没有确定这个礼拜上线的东西就暂时不去动他。。。不要更改状态到 处理中，，，不然邮件统计需求会有未完成。。。的比率

CSS calc（）函数完全可以在各个浏览器中正常使用。。。

021-5895-076
021-508-7235

以后解构赋值的时候直接在末尾加上就行了，，，这样 AutoComplement 出来的也比较快

vars && ( expression ); // expression can only be an assignment...
18:51:35 -- 19：15：40
上完线立马就把工单关掉！！
搞需求，写代码要先把关键代码先写出来！！把关键思路理清先！！
决策引擎的 test，还有 mock 功能怎么搭建起来的。。。
utils.less

Compiling...

<--- Last few GCs --->

[4475:0x104800000] 590880 ms: Mark-sweep 1591.0 (1762.4) -> 1591.0 (1738.9) MB, 1736.1 / 2.2 ms (+ 0.0 ms in 0 steps since start of marking, biggest step 0.0 ms, walltime since start of marking 1736 ms) last resort
[4475:0x104800000] 592665 ms: Mark-sweep 1591.0 (1738.9) -> 1591.0 (1738.4) MB, 1784.9 / 2.2 ms last resort

<--- JS stacktr
==== JS stack trace =========================================

Security context: 0x2f5a9d51bbd9 <JS Object>
2: \_load [module.js:~432] [pc=0x344226515f3a](this=0x2302cbac3e11 <JS Function Module (SharedFunctionInfo 0x398dc1ec9301)>,request=0x261bf67ade19 <String[18]: ./DirectoryWatcher>,parent=0x354bc46ac6b9 <a Module with map 0x3735fd849481>,isMain=0x2f5a9d5022f1 <false>)
3: require [module.js:~510] [pc=0x344226fa448c](this=0x354bc46ac6b9 <a Module with map 0x3735fd849481>,path=0x261bf67ade19...

FATAL ERROR: CALL*AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
1: node::Abort() [/usr/local/Cellar/node/8.2.1/bin/node]
2: node::FatalException(v8::Isolate*, v8::Local<v8::Value>, v8::Local<v8::Message>) [/usr/local/Cellar/node/8.2.1/bin/node]
3: v8::Utils::ReportOOMFailure(char const*, bool) [/usr/local/Cellar/node/8.2.1/bin/node]
4: v8::internal::V8::FatalProcessOutOfMemory(char const*, bool) [/usr/local/Cellar/node/8.2.1/bin/node]
5: v8::internal::Factory::NewByteArray(int, v8::internal::PretenureFlag) [/usr/local/Cellar/node/8.2.1/bin/node]
6: v8::internal::SourcePositionTableBuilder::ToSourcePositionTable(v8::internal::Isolate*, v8::internal::Handle<v8::internal::AbstractCode>) [/usr/local/Cellar/node/8.2.1/bin/node]
7: v8::internal::FullCodeGenerator::MakeCode(v8::internal::CompilationInfo*, unsigned long) [/usr/local/Cellar/node/8.2.1/bin/node]
8: v8::internal::FullCodegenCompilationJob::ExecuteJobImpl() [/usr/local/Cellar/node/8.2.1/bin/node]
9: v8::internal::CompilationJob::ExecuteJob() [/usr/local/Cellar/node/8.2.1/bin/node]
10: v8::internal::(anonymous namespace)::GenerateUnoptimizedCode(v8::internal::CompilationInfo*) [/usr/local/Cellar/node/8.2.1/bin/node]
11: v8::internal::(anonymous namespace)::CompileUnoptimizedCode(v8::internal::CompilationInfo*, v8::internal::Compiler::ConcurrencyMode) [/usr/local/Cellar/node/8.2.1/bin/node]
12: v8::internal::(anonymous namespace)::GetUnoptimizedCode(v8::internal::CompilationInfo\*, v8::internal::Compiler::ConcurrencyMode) [/usr/local/Cellar/node/8.2.1/bin/node]
13: v8::internal::Compiler::Compile(v8::internal::Handle<v8::internal::JSFunction>, v8::internal::Compiler::ClearExceptionFlag) [/usr/local/Cellar/node/8.2.1/bin/node]
14: v8::internal::Runtime_CompileLazy(int, v8::internal::Object\*\*, v8::internal::Isolate\_) [/usr/local/Cellar/node/8.2.1/bin/node]
15: 0x3442252040bd
通过良好的封装，propTypes defaultProps。。。来尽量避免 && || 操作符！！
box-shadow && outline
linear-gradient 条纹
以后不用频繁切换输入法。。。只要巧用 shift 键就好了。。。
看看需不需要引入 updeep。。。
15:52:30 --
import { map, chunk } from 'lodash'; // try lodash fp programming!!
less - @import can not apply alias...
出门的时候一定要记得带走垃圾，，，注意地铁站换门（真如）还有人多的地铁站的人身安全还有财产安全问题
杜绝用复数形式来命名变量
14：28：15
15:13:40
jira 上分配给自己的工单就不要点击关注了。。。将要，有可能会分配给自己的就点击关注。。。。。。
19:07:30
自己发现了的隐藏性 bug 要及时修复，不要存有侥幸心理
坚持自己认为正确的事情。。。坚持每天早起锻炼！！
必须养成高效用电脑的习惯，不管是 windows 还是 mac，每天晚上睡觉前必须关机。。。手机每个礼拜天晚上必须关机 4 小时。。。
写代码志前一定要好好思考一番关键思路再动手，无论问题大小。。。
麻辣隔壁，这个下拉框的全部不是应该后端给我的吗。。。曹
loading 一个 generator 有多个 service 的 call。。。好像取不到恰当的 loading 值。。。
不用跟后端联调接口的话我自己也可以先调 CSS 和 HTML
晓媛你的数据有误。。。这是统计数据。。。不是瞎鸡巴凑出来的。。。
不管有多累，不管累不累，走路时走快点，听跑起来的节奏里面的一首歌或半首歌，然后在家或者地铁上停下来好好学习手机上的前端技术，包括所有收藏过的 chrome 书签，看一个删一个 copy 到 tpdolist 标准来讲八点或八点之前下班，八点半，9 点 9 点半，，，12 点每个半小时看一次 td，有达到 15 点以上的把握就立马买下，接近期望最大盈利点的时候卖出 白天高效完成工作上的事情并好好利用自己所有学过的前端知识去提升性能，提升一切用户体验，，，锻炼的终极目标每天早上坚持 50 分钟内跑完 10km，50 个俯卧撑，13 分钟热身拉伸，，，每天跑完步还没有犯困的话一辈子也不会得病 搞个好发型 一辈子不用手干抓头发 ，每天早上跑完步就稍微洗把脸洗个头，洗澡之前不洗头，晚上刷完牙坚决不吃东西，不要让吃零食分散你的注意力，，，晚上十二点坚决上床睡觉，打开飞行模式，不看手机！！跑步之前喝完一瓶水，上个厕所，然后带好一包纸巾，跑步的过程如果有汗滴在眉毛上面，那么一定要及时擦干，千万不要滴到眼睛里面去，每分钟控制在 4 分半到 5 分以内，最后两圈还有跑回去的过程中再冲刺一下。。。（估计 4 分钟以内的速度是很棒的。。。）这样我的 10 公里就可以比较容易地突破 45 分钟。。。这是我的中级目标，最后的终极目标是 40 分钟以内。。。半马 85 分钟的样子（或者说一个半小时以内，我知道很难但是要抽出时间来搞）

5 公里一定要突破到 19 分！！

3 公里一定要突破 11 分！！

2 公里一定要突破 7 分钟！！

1 公里一定要突破 3 分半！！

无论何时何地想听歌的话就听 跑起来的节奏。。。其他的不要听。。。跑步的时候如果单纯跑步自己可以找到完美节奏的话就自己去找。。。不用听歌，实在无聊就听歌。。。一开始 3 分半的一公里可以选择性地要听歌，，，（当然个人建议 5 公里以内其实可以不用听歌的），7 分钟的 2 公里，11 分的 3 公里。。。
我一定要完成我人生的第一个马拉松（还有正式的半马），之后好好把姐姐，妈妈带会，这样可以大幅度减少疾病侵袭。。。

经常跑步，，，要有一些好习惯，好好找到最佳的呼吸节奏，随脚步快慢变化，还有就是脚步要抬得高一些，注意勾腿跳还有高抬腿的完美应用，提升加速能力。。。之后心脏和肺会变得很强大，，，不会像狗一样呼气。。。

经常跟永明哥，远明哥，光明哥，大舅，二舅，三舅，四舅，姨娘，联系。。。哥哥姐姐级别的可以多多向他们请教理财渠道。。。还有职场经验还有其他靠谱的进钱渠道。。。实在不行自己好好搞白银 td！！反正一句话，我以后一定要在杭州阿里上班，在杭州买房！！

还有就是一定要当前端大神！！！

跑步方面呢，其实马拉松对于经常跑步的人来说应该很简单的，只要掌握好节奏，，，就一定可以跑完，跑完是前提，跑的有多快要看自己本事，技巧，还有心脏能力，肺能力，身体综合素质各个方面共同决定的！！我以后的马拉松成绩要保持在 3 小时半左右或者更进一步！！（3 小时以内其实很难的！！）

随时准备跑半马，全马，每天都要跑 10 公里，周六晚 11 点睡觉，周日 5 点钟起床，一定要跑个半马（跑完 22 公里或者 43 公里）呦，这样早上就不会晒屁股。。。5 点肯定是起不来，但是 6 点钟一定要准时起来呦，，，
22 46 00
font-family: Times, TimesNR, 'New Century Schoolbook', Georgia, 'New York', Serif;
echartsInstance setting....
变量命名如果要用复数就用复数，，，别用单数，为了可阅读性更高！！
今天处理 echarts 的离散问题搞死人喽。。。cao 电脑太卡了，，，编辑器都不报错了。md 文件编辑也有问题。。。。
node_modules/_af-webpack@0.17.4@af-webpack/lib/dev.js
node_modules/_roadhog@2.3.0@roadhog/lib/dev.js
https://blog.csdn.net/sinat_17775997/article/details/78454300

https://redux-saga-in-chinese.js.org/docs/introduction/BeginnerTutorial.html
https://www.bountysource.com/teams/roadhog/issues?tracker_ids=50164640
https://webpack.js.org/configuration/other-options/#cache
https://github.com/sorrycc/roadhog
https://segmentfault.com/a/1190000013827826#articleHeader53
https://mp.weixin.qq.com/s/KZYm76up2DrC0gUza7V_og
https://blog.csdn.net/wgl3k77y9fr1k61t1as/article/details/78883396
http://www.echartsjs.com/gallery/editor.html?c=doc-example/candlestick-axisPointer
https://pro.ant.design/components/Charts-cn/
http://echarts.baidu.com/tutorial.html#%E5%B0%8F%E4%BE%8B%E5%AD%90%EF%BC%9A%E5%AE%9E%E7%8E%B0%E6%97%A5%E5%8E%86%E5%9B%BE
http://echarts.baidu.com/examples/
http://echarts.baidu.com/examples/editor.html?c=line-stack
http://www.echartsjs.com/gallery/editor.html?c=doc-example/line-stack-tiled
http://echarts.baidu.com/api.html#echartsInstance.setOption
http://www.echartsjs.com/gallery/editor.html?c=dynamic-data
https://github.com/lodash/lodash/wiki/FP-Guide
https://ant.design/components/form-cn/
http://p.baofoo.net/secure/attachment/16848/%E6%9F%A5%E5%BE%97.jpg
http://p.baofoo.net/secure/attachment/16847/%E6%9C%AA%E6%9F%A5%E5%BE%97.jpg
https://lanhuapp.com/web/#/item/board/detail?pid=87754933-f4e4-4687-804e-3fa62e585513&project_id=87754933-f4e4-4687-804e-3fa62e585513&image_id=6e456d63-e6ba-4052-80f9-71cd99b51ba2
http://localhost:8000/blank/radarH5?member_id=8000013190&terminal_id=8000013190&data_content=33
https://www.lodashjs.com/docs/4.17.5.html#without
http://momentjs.cn/docs/#/displaying/fromnow/
http://echarts.baidu.com/option.html#tooltip.confine
20:04:40
tooltip 怎么控制某一对 {b} {c} 是否显示。。。
css qwzn 168
PC 端采用 flex grid 百分比就好，，，
对于移动端需要展示的页面，引入手写的 rem.js + flex + grid + 百分比
15：05：40
写完代码所有的 console. // console. debugger debugger; // debugger // debugger; 要及时删除掉！！ 还有就是无用的注释也给删掉！！减少代码体积到最小

研究一下为什么有的 lodash 方法不能单独 import
志前 menu.js 里面是不是需要隐藏 name：‘画像雷达’ ????
司法，失信字段？？？

rebuild 太慢了，以后改代码要好好改，认真改，尽量批量化地改！！！

无状态函数公共组件。。。需要用扩展符？？？
信用查 app 下载链接？
写样式的时候内部直接贴标签就好了，不用写那么多 className
每次 map 都要加上 key 比较好，，，这样不会在 jsx 里面忘记加。。。

_.map 不能被单独抽出来。。。好纠结呀。。。算了，我以后一直用_.map 但是优先采用 js 原生的对象，数组方法！！
merge 也不能简写！！
08：44：40
微信，支付宝 手机浏览器上的支付接口！！详细了解一下
https://blog.csdn.net/sinat_17775997/article/details/78454300
https://github.com/zuiidea/antd-admin/blob/master/.roadhogrc.js
https://github.com/lodash/lodash/wiki/FP-Guide
https://www.zhihu.com/question/23783142
http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html
https://github.com/progit/progit2-zh
https://evdokimovm.github.io/windows/zsh/shell/syntax/highlighting/ohmyzsh/hyper/terminal/2017/02/24/how-to-install-zsh-and-oh-my-zsh-on-windows-10.html
https://github.com/apache/incubator-echarts/issues/3976
http://gitlab.baofoo.net/new-credit/openapi-web/blob/prd/src/components/FormAgreement/Agreement.js
https://docs.open.alipay.com/203/105285/
https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=15_3
http://wxpay.wxutil.com/mch/pay/h5.v2.php
http://echarts.baidu.com/examples/editor.html?c=line-stack
http://localhost:8000/blank/radarH5?member_id=8000019451&terminal_id=8000019451&data_type=json&data_content=759b4fcd31699f6c3306ed07c9cc0b915c5ad6f0497b4a46b169526dc831f762b12b0c0819a5952418d59d6a36ea70343524de4ecfdc9dc339a06948af32cd28a143e74cf733c357fb4915f6f96c71bc847884ffcd452e581f975cceab74061bcb763ee3e3aeb61acc5c9be8c3d925ace2ad3a90c2e2d02bd43031fe14d06168791b3bcbd0bc2b0d7b6052ad637c48685b1a409d186cde0069e31971085b20e9731857212986f8137c00a5ea91bfdc8348866abb15d14c9427446d3f5bc88bbbb53ce8abb023b30779d4f24323d6ec52fddf2122c67a5b9cd1c8a2b23b116dcc713631b2458cfefbbda0aaef0dc234cfa732d069526ca378cb8990a7e2321c6988c8db3baa42a533870b45c77e59e2f6c6241874e8ffd4efe49fa90255862794d1946baff02f30839955f79a19c89b83a51c09509f9411456dfbb9cd6011df0a04703f7909b33597f9be90a1da171b8915069d228e70c1020033d15b9425c472adcf9e9e4c3e0b2845ac943f42132bfdc34ce1e36814f4a665f6836e6ace2629
http://echarts.baidu.com/option.html#tooltip.formatter
13:04:20
工作的时候只做工作上的事情。。。电脑保持在 10G 以下的使用内存。。。不然会有打包内存崩掉的问题。。。
lodash 引入方式有关系吗
有时候遇到语法问题的时候可以采用整个文件拷贝到 Command N，然后再逐行替换，，，逐行找出错误点。。。
获取验证码就用灰色背景的按钮就行。。。
发送验证码的 loading
[babel-plugin-dva-hmr][info] got routerPath ./router

<--- Last few GCs --->

[72054:0x105000000] 102686 ms: Mark-sweep 1373.1 (1445.8) -> 1373.5 (1445.8) MB, 479.6 / 0.0 ms allocation failure GC in old space requested
[72054:0x105000000] 103133 ms: Mark-sweep 1373.5 (1445.8) -> 1373.3 (1432.8) MB, 446.4 / 0.0 ms last resort GC in old space requested
[72054:0x105000000] 103557 ms: Mark-sweep 1373.3 (1432.8) -> 1373.4 (1432.8) MB, 424.1 / 0.0 ms last resort GC in old space requested

<--- JS stacktrace --->

==== JS stack trace =========================================

Security context: 0x27f8691a06a9 <JSObject>
0: builtin exit frame: stringify(this=0x27f8691886a9 <Object map = 0x27f867e02ac1>,0x27f8778022e1 <undefined>,0x27f8778022e1 <undefined>,0x27f8cde5dc19 <Object map = 0x27f81405e461>,0x27f8691886a9 <Object map = 0x27f867e02ac1>)

    1: arguments adaptor frame: 1->3
    2: /* anonymous */(aka /* anonymous */) [/Users/bjhl/pro/openapi-web/node_modules/_webpack@3.12.0@webpack/lib/SourceMapDevTo...

FATAL ERROR: CALL*AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
1: node::Abort() [/usr/local/Cellar/node/10.1.0/bin/node]
2: node::FatalTryCatch::~FatalTryCatch() [/usr/local/Cellar/node/10.1.0/bin/node]
3: v8::Utils::ReportOOMFailure(char const*, bool) [/usr/local/Cellar/node/10.1.0/bin/node]
4: v8::internal::V8::FatalProcessOutOfMemory(char const*, bool) [/usr/local/Cellar/node/10.1.0/bin/node]
5: v8::internal::Factory::NewRawTwoByteString(int, v8::internal::PretenureFlag) [/usr/local/Cellar/node/10.1.0/bin/node]
6: v8::internal::String::SlowFlatten(v8::internal::Handle<v8::internal::ConsString>, v8::internal::PretenureFlag) [/usr/local/Cellar/node/10.1.0/bin/node]
7: v8::internal::JsonStringifier::SerializeString(v8::internal::Handle<v8::internal::String>) [/usr/local/Cellar/node/10.1.0/bin/node]
8: v8::internal::JsonStringifier::Result v8::internal::JsonStringifier::Serialize*<false>(v8::internal::Handle<v8::internal::Object>, bool, v8::internal::Handle<v8::internal::Object>) [/usr/local/Cellar/node/10.1.0/bin/node]
9: v8::internal::JsonStringifier::SerializeArrayLikeSlow(v8::internal::Handle<v8::internal::JSReceiver>, unsigned int, unsigned int) [/usr/local/Cellar/node/10.1.0/bin/node]
10: v8::internal::JsonStringifier::Result v8::internal::JsonStringifier::Serialize*<true>(v8::internal::Handle<v8::internal::Object>, bool, v8::internal::Handle<v8::internal::Object>) [/usr/local/Cellar/node/10.1.0/bin/node]
11: v8::internal::JsonStringifier::Result v8::internal::JsonStringifier::Serialize*<false>(v8::internal::Handle<v8::internal::Object>, bool, v8::internal::Handle<v8::internal::Object>) [/usr/local/Cellar/node/10.1.0/bin/node]
12: v8::internal::JsonStringifier::Stringify(v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>) [/usr/local/Cellar/node/10.1.0/bin/node]
13: v8::internal::Builtin_Impl_JsonStringify(v8::internal::BuiltinArguments, v8::internal::Isolate\*) [/usr/local/Cellar/node/10.1.0/bin/node]
14: 0x3b838230913d
15: 0x3b838230cac3
16: 0x3b83823144f7
17: 0x3b838230cac3
18: 0x3b838238f7d6
19: 0x3b83823144f7

roadhog@2.2.0 dev DISABLE_ESLINT=none

21：46
23:40:30

23:42:50
23:45:45
09：07：00 09：09：09
09：09：43 09：11：27
092216 092240
092655
8000019451
慎用 \_.merge
npm run limit
npm run build && zip -r dist.zip dist
vim /Users/bjhl/.oh-my-zsh/plugins/git/git.plugin.zsh
表格里面的按钮统一采用 small。。。
{
"success": true,
"result": {
"totalCount": 1,
"pageNo": 1,
"pageSize": 10,
"list": [
{
"id": 1,
"dateTime": 1526972452000,
"memberName": "开放平台测试商户",
"memberId": "8000019451",
"memblackrateDay": "1",
"memcumulativeBlackrate": "2",
"rn": "1",
"last1dValueMemblackrateDay": "0.1",
"last2dValueMemblackrateDay": "0.2",
"last3dValueMemblackrateDay": "0.3",
"allblackrateDay": "4",
"allcumulativeBlackrate": "5",
"remarks": null,
"dvalue": "6"
}
]
},
"errorCode": null,
"errorMsg": null
}
模型同事已经把表建好，现在需要展示在开放平台上，只对已经开通使用负面拉黑的商户展示，对未开通商户不展示。
展示 5 条线图：商户日拉黑率、全量数据日拉黑率、日偏离值、商户累计拉黑率、全量数据累计拉黑率。
横轴表示时间，纵轴表示拉黑率
查询条件：时间，默认最近一个月的数据
设计的原型中，用百分比表示不用小数，百分比保留 2 位小数，比如：18.65%

app-report-h5
主题替换，
scss 配置
hmr
flexible.js
axios
webpack-proxy
common/PageHeader 组件
vux
vuex
https://www.yangzhiping.com/tech/github.html
https://github.com/amfe/lib-flexible/blob/master/src/flexible.js
主题可设置化 运营商认证 淘宝认证 QQ 认证可以设置成不一样的。。。

develop
H^netu%4L3xiv,$D
http://jenkins.baofu.com/login?from=%2F
http://10.0.19.143:22333/#/sbzx/fwgk
http://128kj.iteye.com/blog/2007436
https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API
https://www.google.com/search?q=canvas%E5%8A%A8%E7%94%BB%E5%AE%9E%E4%BE%8B&oq=canvas%E5%8A%A8%E7%94%BB%E5%AE%9E%E4%BE%8B&aqs=chrome..69i57.7253j0j7&sourceid=chrome&ie=UTF-8
https://blog.csdn.net/m0_38069630/article/details/79172700 3. 为什么总是报错短信验证码错误：首先确认短信是否有输入错误，如若没有，请至官网登录查询，确认是否可以正常输入短信验证码查询。
404 500 页面配置。。。
以后增加新功能的时候需要注意一下原有侧边菜单栏的显示隐藏是否正常
所以说代码要尽量写的严密一些。。。要是利用正则匹配就能大概率减少这类 bug，因为这块代码不是我写的，所以有些特殊菜单的隐藏逻辑没有仔细去看实现过程。。。
以后尽量把新增菜单放到最后就好了，，，千万不要问 PM 放在哪个位置，只要问清楚文案就行了。。。
webpack externals 使用详解，，，以 SDK_H5 lodash 做实验。。。
Ctrl Command left toggle mac notification！！
一切配置都从 URL 里面获取，写到 vuex 里面去吧
地铁上是用来睡觉的，站也要站着睡，十二点睡觉 5 点钟起床
vue-router-children 的正确配置写法。。。
className 在 vue 中统一用中划线的形式来写，在 React 中用驼峰

```css
/* @keyframes duration | timing-function | delay | iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slidein;
```

calc(50% - 50px) === calc(0%),
calc(50% - 112.5px) === calc(-62.5%) ???

import { ... }尽量不分行，其他情况下{ XXX } 的 XXX 以新行开头。。。
没有发送验证码的接口，后台自动发送不用前端调接口是吧？
第一次定义变量的时候需要注意大小写，之后全部小写就好了，tab，tab，and，always tabbing。。。
template script style 标签和各自内层第一级都保持平齐
less 的@import 不支持 alias 吗
充分利用所有的研发条件，还有就是 ios 也算前端可以一起交流的
root /usr/share/nginx/html/SDK_H5;
今天碰到的 vscode 还是 git 的大小写居然有问题。。。
http://cubic-bezier.com/#.39,.91,.4,.92
lodash 的 map 是可以单独引入的，只不过有时候 Object.keys 或者数组在 jsx 里没有及时取到值。。。
react-images-viewer support yarn add???
https://medium.com/@jdaudier/how-to-create-and-publish-your-first-node-js-module-444e7585b738

https://codeburst.io/how-to-create-and-publish-your-first-node-js-module-444e7585b738

好好利用好的 vsc 的最近打开！！！
react-images with thumbnails is often too slowly, because of pictures-large-size or too-many-pics???
I'll fix it in my npm package!!
coverage unknow?? 0 passing!!?? let it be 100%, please!!
index.js:2177 Warning: This synthetic event is reused for performance reasons. If you're seeing this, you're accessing the property `defaultPrevented` on a released/nullified synthetic event. This is set to null. If you must keep the original synthetic event around, use event.persist(). See https://fb.me/react-event-pooling for more information.
dva changeReducers 最多更新两层
H5 报告 loading。。。
http://0.0.0.0:8080/#/operatorCertification?member_id=800001311&terminal_id=800001311&user_id=201806061854020124003621&trade_no=201806061854020124003621&id_card=36240219940426001X&real_name=%E9%83%AD%E5%8D%97%E8%B5%90
http://0.0.0.0:8080/#/operatorCertification?member_id=8000013112&terminal_id=8000013112&user_id=201806061854020124003621&trade_no=201806061854020124003621&id_card=341204198706262021&real_name=%E5%88%98%E9%9B%AA
vm.$set vm.$data 没法直接用解构赋值简写到$set,$data 的形式。。。！！！
[eslint] Resolve error: Cannot find module '/Users/bjhl/pro/node_modules/vux/src/components/map.json' (import/no-extraneous-dependencies)
[eslint] Resolve error: Cannot find module '/Users/bjhl/pro/node_modules/vux/src/components/map.json'
(import/no-duplicates)
还真是重装一遍 vux 就好了！！完美，，，
晓萌你得测试一下 URL 的主题配置问题还有失败退出模式 成功退出模式也得测试一下。。。
服务密码错误的 toast 提示！！
URL 里面需要携带的参数名包括：

接口类

订单号 trade_no（必须）, 商户号 member_id（必须）, 终端号 terminal_id（必须）, 身份证号 id_card（必须）, 姓名 real_name（必须）

配置类

导航栏背景色 head_bg，页面背景色 result_bg, 阅读协议文字颜色 agreeement_text_color，协议名称文字颜色 agreement_title_color，导航栏文字颜色 head_text_color， 进度动画颜色 progress_animation_color， 成功退出模式 suc_exit_mode（查询成功退出：search，登录成功退出：login ），失败退出模式 fail_exit_mode（失败退出 SDK：exit, 失败继续查询：goon）

配置类都是非必须，有默认值
认证已超过 10 分钟，已暂停 这个也得好好测试一下。。。
路由 path 名字应该尽量简单些！！文件 文件夹名字可以长一点！！
10.0.192.215
255.255.248.0
10.0.199.254
表单组件的 validator 出现时机是 onInput onChange 还是 onBlur 呢，，，我怎么遇到的两个 PM 都是说要 onBlur 呢。。。
img-taobao-click-to-get-new-qrcode
wechat vue-wechat-title
favicon.ico correct-src
场景版回溯
查询成功退出模式是说需要
所以说要不就是统一成成功的话停留原页面吧，也不加额外字段配置吧？？？
toast 在一些手机浏览器上不显示，，，卧槽。。。
移动端的 chrome 正常，
safari 的话需要往回退到上一个页面。。。
QQ 浏览器跳页面，而且 不弹出对话框（所以说建议用 iframe）
UC 第一次授权之后是好的，一旦你第一次授权给 UC 以淘宝身份登录 UC 的话他妈后面，，，一直都会跳 appstore 不管你有没有安装过淘宝。。。（所以说建议用 Safari）
http://10.0.70.140:8080/#/taobao?member_id=800012593&terminal_id=8000012593&trade_no=201806151949270104020501
https://api.51datakey.com/online-docs/api/api.html
10.0.23.75:1113/my-test/task/index.html
vm.a = 1 比 $set($data, 1)要快很多，看来以后还是直接赋值法比较 6
nowadays we can use [...arr.map( // ... )] to map an arr(like an iterator)
android chrome abnormal 两种方式都行不同。。。
安卓 360 浏览器 下 toast 看不见！！，，，
原来 github/gitlab 的 ssh-key 可以公用！！艹
li:not(:last-child) {

}
表单的输入应该带有记忆功能比较好，，，哈哈哈，vuex 就是好用
vue 里面我还是推崇驼峰命名，实在不行就中划线，不要用下划线。。。URL 里面也尽量改过来。。。只要是我来定接口的话就这么搞，当然后端给我的字段另外起数
ios - chrome 有问题，屡次打开，，，我艹，我没有屡次打开呀，，，
百度和 chrome QQ 浏览器(会跳 appstore）登录后没有弹窗，，，其他浏览器都是好的
曹，感觉我的 getObjFromUrl 用了 reduce 怎么有点慢，都报 can not get property of undefined 了。。。
5 个 filter。。。
无用的 import 之后再请理还有就是要及时替换所有的产品中心图片，，，做完一个模块，发现没用上的图片就一个个删掉！！
尽量用组件自带样式， flex 和 grid 来完成布局，样式修改杜绝 style，，，手写的样式必须写到 style.less index.less 还有 antd.less, componentX.less，common.less，
以后都在 test，prd 分支上面打包，上线前测试的话在 test 分支上面打包，快上线了在 prd 分支上面打包，这样 dist 就不会越打越大
JSX 的 multiple lines error 真是烦人，我要关掉他?
原来 less 的：global 是用来写 common.less 以及全局样式的。。。

但是 vue-cli 可以自动化处理，不用加上：global 诶
为什么 RangePicker 的 keyCode 不起作用了，，，艹，，，
老子我要统治 SDKH5 ，不要叫黄欣搞了，，，最好全部自己搞定，，，还有王拯也得听我的，，，
我也要开始支持左侧的字母选择了，还有中文 全拼 首字母
能少写代码就少写代码，能不用变量就不用变量，如果只用一次，那就先不考虑优化，先考虑开发速度，，，
如果变量使用次数大于等于 2 次，就考虑缓存，，，
vue 绑定事件到 dom 上不用箭头函数，直接： @click="fn(arg1, arg2)" !!
cell-box 需要 click.native
util 纯手写，拜托 lodash！！
SDK_H5 项目有一个比较大的，自挖自跳的坑，字段名都采用 下划线分割，因为后端接口用的这样命名，然后自己稀里糊涂的给商户设置 URL 接口的时候也用的这个，，，不过也还好，提前接触后端命名也不错。。。凡是涉及到和我司后端交互，商户交互的字段命名都带下划线，其他还是以 js 驼峰式为准，不过方法名，函数名，js vue 图片文件名还是用的驼峰！！
$data 一般来讲需要放到组件开头部位
"此业务暂时无法使用，详情请咨询新颜"
multiple variable imports must be multiple lines, and expressions also, result begin from second line.
when you wake up，always ask yourself: how's your yesterday, and how will you spend today, and what's more, how will you spend tomorrow, once you know these three answers, just try to finish it in these two days!!

in fact, i know many gods like to use () instead of {}, but i would like to

IF YOU know some words or one statement needs to be write again, just once you finish it and copy it!! it will save much your time!!
DO NOT EASILY CLOSE ONE ESLINT RULE, think twice before deciding
i like to add things firstly whenever i want to add, it can also save much time
微信运动不要主要去看，只是查看微信消息的时候不小心看到的话别人给你点了赞的话那你也得主动给别人回赞，在我看来，那是一种基本的礼貌，，，
我会竭尽所能去拜托 moment，lodash，，，
链式操作应该应点号分行书写，，，
参数名应该尽量避免 str，arr，obj 这样的命名，应该做到见名知意
sometimes when i modify .eslintrc.js, hot-module didnt work...
脱敏函数里面先用正则判断，不用传 type 参数了，，，哦耶

# mini-programs

https://github.com/Tencent/wepy
https://tencent.github.io/wepy/document.html#/api
https://pan.baidu.com/disk/home?errno=0&errmsg=Auth%20Login%20Sucess&&bduss=&ssnerror=0&traceid=#/all?vmode=list&path=%2F%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B%EF%BC%88%E5%85%A8%EF%BC%89
https://mp.weixin.qq.com/wxopen/devprofile?action=get_profile&token=1339547118&lang=zh_CN
https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html
https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1650183953&docid=0000a26e1aca6012e896a517556c01
https://tencent.github.io/wepy/document.html#/
https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651551300&idx=1&sn=07ce421f88805303f4f4705ddea2a48a&chksm=8025a185b7522893cda66c69af087428ea8827419e174207c537f73c704e854ea3cdbbbdb889&scene=0#rd
https://www.jianshu.com/p/79a7c6f67a8f

https://www.jianshu.com/p/f121b73c3593

#vue2-elm-webpack1&2, elm-manager-elementui, node-elm
https://github.com/bailicangdu/node-elm

#Shell
https://github.com/qinjx/30min_guides/blob/master/shell.md

#react-images-viewer
https://medium.com/@jdaudier/how-to-create-and-publish-your-first-node-js-module-444e7585b738

https://codeburst.io/how-to-create-and-publish-your-first-node-js-module-444e7585b738

http://www.mescroll.com/index.html vue 的滚动插件
http://webpack.wuhaolin.cn/
https://dwqs.gitbooks.io/frontenddevhandbook/content/tools/css.html
https://pan.baidu.com/s/1c0frhIS
https://www.w3cplus.com/mobile/vw-layout-in-vue.html
https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html
https://www.w3cplus.com/css/vw-for-layout.html
https://www.google.com/search?q=%E5%A4%A7%E6%BC%A0+vm+%E7%A7%BB%E5%8A%A8%E7%AB%AF%E9%80%82%E9%85%8D&oq=%E5%A4%A7%E6%BC%A0+vm+%E7%A7%BB%E5%8A%A8%E7%AB%AF%E9%80%82%E9%85%8D&aqs=chrome..69i57.7936j0j7&sourceid=chrome&ie=UTF-8

github push should use ss-global-mode!!
VM24588 vue.esm.js:1740 TypeError: Object(...) is not a function
at eval (VM24837 util.js:156)
at Array.reduce (<anonymous>)
at eval (VM24837 util.js:154)
at Array.reduce (<anonymous>)
at merge (VM24837 util.js:153)
at request (VM24858 service.js:27)
at requestCreateOrder (VM24857 request.js:9)
at VueComponent.createOrder (VM24894 index.vue:63)
at VueComponent.mounted (VM24894 index.vue:100)
at callHook (VM24588 vue.esm.js:2920)
小的 method 不用想着变量缓存。。。有时候真的完全没必要
password 不必记住，button 被点击时需要加上 loading，如果接口返回的话
sdkBasicQuery.json 配置 jingdong 字段，test.xinyan.com ====> api.xinyan.com
跳转页面之前的 setTimeout 都改成 1 秒就好了
v-if 指令放到最前面

ctrl shift l choose language mode
ctrl alt B 格式化文本

淘宝 一打开页面没有显示二维码，，，
最好不要有闪的问题，用户体验不好，，，
滴滴
password username 带有保存记忆的特性，，，
后端问题不要找我复现，不要找我浪费时间，，，我的时间不是用来复现后端问题的
setTimeout 必须写成回调的形式，不然 setTimeout 不起任何作用
现在越发体验到 ant-design 的 getFieldDecorators() required 校验的重要性了，，，不用手动写校验还有提交按钮的 disable 了（虽然说 antd 还做不到这一步）
涉及到 inputs + submit=btn 的时候最好才用表单提交的方式，这样手机上点击回车就不用点按钮了！！yeah

原来按住 command + 单击可以实现 target="\_blank"的效果，完美！！
两个 root 的问题还是没能解决好，，，
https://github.com/nuonuoge/ionic4_angular5_elm
最近我的 vscode 有点卡呀，需要优化优化了，，，是时候需要搞搞了
{"success":true,"data":{"logins":[{"login_type":"IDCARD","username_desc":"身份证","username_regex":"^(\\d{15}$|^\\d{18}$|^\\d{17}(\\d|X|x))$","username_tips":"15 位或 18 位","username1_desc":"借记卡卡号","username1_regex":"^\\d{12,20}$","username1_tips":"12-20 位完整卡号","password_desc":"取现密码","password_regex":"^\\d{6}$","password_tips":"6 位数字"}],"bank_name":"兴业银行","subtype":"CIB"},"errorCode":null,"errorMsg":null}
不要依赖多屏，要多使用 vsc 的多屏编写
获取 IP 或许可以实现，，，
https://www.ipaddress.com/
预订单页面不要暴露在生产环境！！
vue 的 obj-prop 没有作用诶，还是老老实实地写一个值这样可以设置有效的 defaultValue 了
做任何事情，一定要注重效率！！
一定要至少在一个小时内制定目标！！并且竭尽所能完成他！！
坚决不自慰，自慰一下就少了许多精气神！！(要知道你以后还要留着精力买房子，娶老婆，跑步（1Km 突破）)
https://pixabay.com/ -- 好网站！！可以找到好多图片资源并且直接用 URL 引用，访问速度也很快！！完美

react-images-viewer
相比 react-images 优化点:

1. 默认预加载两张图片，反正缓存永远只有两张或者四张，
2. 默认图片大小更合适
3. 末尾开头可连接（不设置参数），就是可连接
4. 在移动端打开没有缩略图，（还有什么其他考虑到缓存，网速慢之类的优化点），移动端可以手指触摸左右滑动替换左右箭头，但是 closeBtn 还在，还有就是往下滑相当于 closeBtn 退出, 双击不起作用！！（没必要）
5. examples 应该以中式化，但是不能出现中文，暂时不支持中文注释及文档

尾逗号还是给加上，采用 eslint-standard 去规范代码
要注意特有食物的固定命名。不要瞎鸡巴改，，，
按键，能用字母就用字母，这样最省时间，比如说你按 Command D 去选中一个单词来编辑（做替换）肯定要比 Command + Enter 要快，而且还会有停顿感，而且前者选中编辑直接替换就好了
其实我们用键盘大多数情况下更多的应该是考虑到按键距离，而不是按键数量
起间隔划分作用的空行 可以从 3 2 1 开始递减了
以后我用英语很少首字母大写了，实在不习惯 shift 键，(还是需要 Capitalize 的，英语句子多，没有首字母大写的话看起来会更难受！！)
还有就是 取现密码是不是搞错了 要改成 登录密码？
不要一个个去看 commit 了，每次都变化不一样，其实有可能经常改动某些文件，直接先看前几个 commit，差不多的话，然后在 vsc 打开两个窗口来编辑，，，爽翻天，，，不用重度依赖浏览器了，，，完美！！
以后单个屏幕也可以做许多事情！！！完美！！
Meta Property=og 标签是什么呢?
og 是一种新的 HTTP 头部标记，即 Open Graph Protocol：

The Open Graph Protocol enables any web page to become a rich object in a social graph.+ n3 }

即这种协议可以让网页成为一个“富媒体对象”。
用了 Meta Property=og 标签，就是你同意了网页内容可以被其他社会化网站引用等，目前这种协议被 SNS 网站如 Fackbook、renren 采用。
SNS 已经成为网络上的一大热门应用，优质的内容通过分享在好友间迅速传播。为了提高站外内容的传播效率，2010 年 F8 会议上 Facebook 公布 了一套开放内容协议(Open Graph Protocol)，任何网页只要遵守该协议，SNS 就能从页面上提取最有效的信息并呈现给用户。
外国小伙伴喜欢写 class 用 page-nav > page-nav**item > page-nav**link 这种形式，，，挺好的，，，但是我觉得比较长呀，我还是用嵌套手法吧，写嵌套形式的样式，，，

http://css88.com/dev/
翻译的最小单位应该是一句话，这样可以有效提升翻译效率，在每句话翻译准确性的基础上再考虑起承转合连接词的使用。
习惯翻译的话你会发现英语里面一大批定语后置，所以首先翻译定语就行！！
文件名采用中划线方式来命名即可
created 要刚好跟在 data 和 computed 之后，，，要不然可能取不到
1、理解客户需求，创造性的提供客户真正需要的产品和服务
2、积极响应客户需求，第一时间为客户解决问题，超出客户期望值
3、不断追问客户价值，发现和探索客户潜在、长远需求，与客户建立长期共赢互利关系
4、站在生态的角度，不仅能解决客户的问题，更能思考客户的客户

1、时刻保持对结果和效率的激情，不达目标誓不罢休
2、目标不是终点，而是起点，用目标驱动自身的行为，而非金钱
3、注重部门间的沟通与合作，凡事以公司利益为重
4、拥抱变化，鼓励创新，当变化来临时，主动适应变化，积极行动，持续改进
5、当目标模糊时，不断思考和追问，调动所有资源聚焦执行‘

1、积极进取，传播正能量，重视个人信誉，塑造良好口碑
2、工作充满激情，勇于创新，大胆试错，勤于反思
3、正直坦诚，一诺千金，言必行，行必果
4、追求提供给客户的产品、服务的极致体验
5、有情有义，做彼此一辈子的合作伙伴

https://www.zhihu.com/question/19907735
按钮点了没反应。。。
vue 的 ：style 不支持数字值。。。
吃完饭拉臭臭是最好的！！每次肯定都拉得出，，，以后每天晚饭过后拉臭臭！！
x-input 会自动弹奏手机键盘 (v-for 不能随意用，，，不然 vue 会不停的去重新渲染 v-for 内部，如果包含正在输入的 x-input，input 这样的输入框会使得手机上的输入框消失！！还有就是 v-model 取值重复也有可能导致这种情况)
Couldn't find enough finder patterns:2 patterns found
qrcode-reader Error.checkAndNudgePoints
https://jeffjade.com/2017/03/11/120-how-to-write-vue-better/
https://router.vuejs.org/zh/guide/advanced/lazy-loading.html
能手写代码就手写代码不要依赖 npm package！！要不然 npm 崩了就完蛋了。。。
网银样式优化（背景改成蓝湖灰）
原来 Mac QQ 客户端还可以输入 糗大了，，，擦汗这样的来弹出，快速选择表情！！amazing 可惜手机和 Mac wechat 都不支持，，，！！！可惜了
react-scrolllock have to be replaced!!
full understand Viewer.js
nowadays, I have to see more others code, then automatically will know es5, es6, es7, es8, es9, webpack, rollup, node.js, vue, wx-mini-program, all of frond-end!!
every sentance I speak will have much meaning, I'm very kaopu!! I'll let everyone trust me, I have much mental power to let you love me right away!!

second function must write in third line.
(method) Viewer.UNSAFE_componentWillReceiveProps(nextProps: any): void
Called when the component may be receiving new props. React may call this even if props have not changed, so be sure to compare new and existing props if you only want to handle changes.

Calling Component#setState generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps prevents this from being invoked.
https://www.zcfy.cc/article/update-on-async-rendering
UNSAFE_componentWillMount, UNSAFE_componentWillUpdate, UNSAFE_componentWillReceiveProps, UNSAFE_componentWillUnmount -- will take many risks in react-16.x (especially in async-rendering)

static getDerivedStateFromProps (nextProps, prevState) {
// when component instanced or receive new props this lifehook is called, return a new obj to update state, or return null meaning new props needs no update.
// And combine with componentDidUpdate to replace componentWillReceiveProps
}
getSnapshotBeforeUpdate (prevProps, pervState) {
// called before dom get updated, return value will be the third parameter of componentDidUpdate
// and together with componentDidUpdate, this new lifehook will replace old componentWillUpdate.
}

# 初始化状态：

这个例子展示了一个调用 componentWillMount 中带有 setState 的组件：
这种类型的组件最简单的重构是将状态初始化移动到构造函数或者属性初始值设定项

# 获取外部数据：

以下是使用 componentWillMount 获取外部数据的组件示例：上述代码对于服务端渲染（其中不使用外部数据的地方）和即将到来的异步渲染模式（其中可能发生多次请求）是有问题的。建议将数据提取移入 componentDidMount

# 添加事件监听

不幸的是，这会导致服务器渲染（componentWillUnmount 永远不会被调用）和异步渲染（在渲染完成之前渲染可能被中断，导致 componentWillUnmount 不被调用）的内存泄漏。

# 在更新之前读取 DOM 属性

人们经常认为 componentWillMount 和 componentWillUnmount 总是配对，但这并不能保证。只有调用 componentDidMount 后，React 才能保证稍后调用 componentWillUnmount 进行清理。

出于这个原因，添加事件监听的推荐方式是使用 componentDidMount 生命周期：

在异步模式下使用 componentWillUpdate 都是不安全的，因为外部回调可能会多次调用只更新一次。相反，应该使用 componentDidUpdate 生命周期，因为它保证每次更新只调用一次：

if only one setence in if-block, no need to use curly braces {}
I will only congratulate to neccessary thing, and tell them I bought a house in hangzhou, and also bought xuetielong(in majitang and qinren wechat group)!!
since i change shift not to change english/chinese-switch, coding get much easier
when you type the last two character in one line, just type page-down to focus in the next line, at least you can save 10ms!!! first no semilon!!!!!
i will only type english on vsc, including note, remark,,,of course excluding blogs

weshould put 1 or 2 empty lines between attrs and methods in one class or function

must not to complete repeat typing one same word secondily, thirdily, only complete at the first time, then use Tab Tab Tab and Tab!!!!!!!!!!

whatever lifecycle-methods, or private,public-functions, just keep two blanks!! keep the consistence!!!
no need to close netease-mailbox and netease-music, always!!!
on the right of bag, ihpone headset and casio watch, and on the left mac headset!!!!
each 5 minutes close and open baiduNetdisk again!! to try high download-speed!!
iphone also does not need to close some app, just put the ofen-used-app at the front, and will switch easily and quickly.
do not watch wechat-steps or care about kilometers, it's matter that keep a wonderful breath beat and vary fast speed!!(keep both is a little difficult)

multiple line parameters must all end with comma,,,
早上见人或者别人路过一定要抬头笑脸相迎打招呼，，，这是做人最基本的礼貌

# watch react-images, and use some powerful unmerged PRs!! and also avoid all issued opened in this repo!!

# what is the most difficult, and most wonderful part in this repo

direction: PropTypes.oneOf(['left', 'right']), !!

Context API

do not need to input one empty line at the endd of file, as when you save it, automatically finishing this.

# 组件思路

`先看所有选项了解基本用法：backdropCloseable，closeBtnTitle(关闭（空格）），currImg（number：0），customControls（arrof（node）），enableKeyboardInput(true), imgs(src, srcSet, caption, thumbnail).isRequired, isOpen, leftArrowTitle（上一张）, onClickImg, onClickShowNextImg(true ??), onClickNext, onClickPrev, onClickThumbnail, onClose, preloadNextImg(true), preventScroll(true), rightArrowTitle（下一张）, showCloseBtn(true, if false, backdropCloseable must be true(default)), showImgCount(true),showThumbnails, spinner(DefaultSpinner), spinnerColor(#fff), spinnerSize(100), theme({}), thumbnailOffset(2), width)1024)`

```jsx
Viewer.propTypes
Viewer.defaultProps
Viewer.childContextTypes
defaultStyles(content, figure, img(remove browser default( gutter), main center on very short screens or very narrow img), imgLoaded, spinner(opacity animation to make spinner appear with delay, spinnerActive)
childContextTypes: theme: PropTypes.object.isRequired
normalizeSourceSet

class Viewer
  constructor (props) {
    super(props)
    this.theme
    this.state = { imgLoaded: false }
  }
    theme, classes, state
    bindFunctions.call(this, ['gotoNext', 'gotoPrev', 'closeBackdrop', 'handleKeyboardInput', 'handleImgLoaded']) ??
  getChildContext () {
    return {
      theme: this.theme
    }
  }
  componentDidMount {
    if (this.props.isOpen) {
      if (this.props.enableKeyboardInput)
      addEventListener('keyboard', this.handleKeyboardInput)
    }
    if (typeof this.props.currImg === 'number') {
      this.preloadImg(this.props.currImg, this.handleImgLoaded)
    }
  }
  UNSAFE_componentWillReceiveProps (nextProps) {
    if (!canUseDom) return

    // preload imgs with both directions
    if (nextProps.preloadNextImg) {
      const nextIdx = nextProps.currImg + 1
      this.preloadImg(prevIdx)
      this.preloadImg(nextIdx)
    }
    // preload currImg
    if (this.props.currImg !== nextProps.currImg || !this.props.isOpen && nextProps.isOpen) {
      const img = this.preloadImg(nextProps.currImg, this.handleImgLoaded)
      this.setState({ imgLoaded: img.complete })
    }

    // add/remove event listeners
    if (!this.props.isOpen && nextProps.isOpen && nextProps.enableKeyboardInput) {
      window.addEventListener('keyboard', this.handleKeyboardInput)
    }
    if (!nextProps.isOpen && nextProps.enableKeyboardInput) {
      window.removeEventListener('keyboard', this.handleKeyboardInput)
    }
  }
  UNSAFE_componentWillUnmount () {
    if (this.props.enableKeyboardInput) {
      window.removeEventListener('keydown', this.handleKeyboardInput)
    }
  }

  // Methods
  preloadImg (idx, onload) {
    const data = this.props.imgs[idx]

    if (!data) return

    const img = new Image()
    const sourceSet = normalizeSourtSet(data)
  }
```

from entry file, we know that theme, methods, and renderers
tab-selected should standout its color, borderTop(Bottom)

reactjs.org/docs respoonsive design is perfect!!

Container
Fragment
.content
{imgLoaded && this.renderHeader()}
{this.renderImgs()}
{this.renderSpinner()}
{imgLoaded && this.renderFooter()}
{imgLoaded && this.renderThumbails()}
{imgLoaded && this.renderArrowPrev()}
{imgLoaded && this.renderArrowLeft()}

vux 异步加载组件
Vue global common function Vue.prototype.$method = function () {}
strictly follow eslint max-length rule, write the best code!!
multiplelines must use comma-dangle(recommended but i like to write in one line, seems to be less code), and one line must not!!

postcss-px-to-vw not working!!
I like command l !!

后端报错的话应该尽量为用户考虑，，，比如说帐号密码错误，我们应该尽量重新回到上一个 帐号密码 tab 页。。。

Note: Unlike the --global flag in npm, global is a command which must immediately follow yarn.

I will never eat junkfood in company, excluding which others give to me, i will pick one or two to express thanks...

I will always watch front-end knowledge on subway, otherwise I take a short sleep~~~

yarn upgrade: upgrade packages to their latest version based on the specified range.
yarn upgrade-interactive: similar to upgrade command, but display the outdated packages before performing any upgrade, allowing the user to select which packages to upgrade.

upon | BrE əˈpɒn, AmE əˈpɑn |
preposition
[on 的更为正式的用法，尤用于抽象意义]

vue skills:

1. Vue.prototype
   tip: 把方法挂在到 prototype 上的时候，最好加一个 $ 前缀，避免跟其他变量冲突

tip again: 不要挂载太多方法到 prototype 上，只挂载一些使用频率非常高的 2. 需要响应的数据，在获取到接口数据的时候，先设置

大家有没有很经常碰到这样都一种情况，在循环列表的时候，我们需要给列表项一个控制显示的属性，如 是否可删除，是否已选中等等，而后端接口一般不会返回这种字段，因为这属于纯前端展示的，跟后端没啥关系，比如后端给的数据如下

[
{name: 'abc', age: 18},
{name: 'def', age: 20},
{name: 'ghi', age: 22},
]
我们不妨假设以上数据为学生列表

然后我们需要渲染这个列表，在每一项后面显示一个勾选按钮，如果用户打勾，则这个按钮是绿色，默认这个按钮是灰色，这个时候，上表是没有满足这个渲染条件的数据，而如果我们在用户打勾的时候，再去添加这个数据的话，正常的做法是无法及时响应的。

如果我们在获取到数据的时候，先给数组的每一项都加一个是否打勾的标示，就可以解决这个问题，我们假设我们获取到的数据是 res.list

res.list.map(item => {
item.isTicked ＝ false
}) 3. 如果你觉得有时候，你真的需要父子组件共享一个值，不如试试传个引用类型过去

vue 的父子组件传值，有好多种方法，这里就不一一列举了，但是今天我们要了解的，是利用 javascript 的引用类型特性，还达到另一种传值的目的

假设有这么一个需求，父组件需要传 3 个值到子组件，然后再子组件里面改动后，需要立马再父组件上作出响应，我们通常的做法上改完以后，通过 this.$emit 发射事件，然后再父组件监听对应的事件，然而这么做应对一两个数据还好，如果传的数据多了，会累死人。
我们不妨把这些要传递的数据，包再一个对象／数组 里面，然后在传给子组件

<subComponent :subData="subData"></subComponent>
data () {
return {
subData: {
filed1: 'field1',
filed2: 'field2',
filed3: 'field3',
filed4: 'field4',
filed5: 'field5',
}
}
}
这样，我们在子组件里面改动 subData 的内容，父组件上就能直接作出响应，无需 this.$emit 或 vuex 而且如果有其他兄弟组件的话，只要兄弟组件也有绑定这个 subData ，那么兄弟组件里面的 subData 也能及时响应

tip: 首先，这么做我个人上感觉有点不符合规范的，如果没有特别多的数据，还是乖乖用 this.$emit 吧，其次，这个数据需要有特定的条件才能构造的出来，并不是所有情况都适用。

4. 异步请求的参数在 data 里面构造好，用一个对象包起来，会方便很多

<input type="text" v-model="queryParam.backend_field1">
 <input type="text" v-model="queryParam.backend_field2">
 <input type="text" v-model="queryParam.backend_field3">
 ....
 <input type="text" v-model="queryParam.backend_fieldn">

5. data 里面的数据多的时候，给每个数据加一个备注，会让你后期往回看的时候很清晰

6. 大部分情况下，生命周期里面，不要有太多行代码，可以封装成方法，再调用

看过很多代码，包括我自己之前的，在生命周期里面洋洋洒洒的写了一两百行的代码，如：把页面加载的时候，该做的事，全部写在 created 里面，导致整个代码难以阅读，完全不知道你在页面加载的时候，做了些什么，
这个时候，我们不妨把那些逻辑封装成方法，然后在生命周期里面直接调用：

yarn install --flat // Installing one and only one version of a package
https://yarnpkg.com/en/docs/install-ci
https://docs.npmjs.com/files/package.json

# Pre-release tags

Versions can also have pre-release tags (e.g. 3.1.4-beta.2). If a comparator includes a version with a pre-release tag it will only match against versions that have the same major.minor.patch version.

For example, the range >=3.1.4-beta.2 would match 3.1.4-beta.2 or 3.1.4-beta.12, but would not match 3.1.5-beta.1 even though it is technically “greater than or equal to” (>=) the 3.1.4-beta.2 version.

#Tilde Ranges
Using ~ with a minor version specified allows patch changes. Using ~ with only major version specified will allow minor changes.

Version range Expanded version range
~3.1.4 >=3.1.4 <3.2.0
~3.1 3.1.x or >=3.1.0 <3.2.0
~3 3.x or >=3.0.0 <4.0.0
#Caret Ranges
Allow changes that do not modify the first non-zero digit in the version, either the 3 in 3.1.4 or the 4 in 0.4.2.

Version range Expanded version range
^3.1.4 >=3.1.4 <4.0.0
^0.4.2 >=0.4.2 <0.5.0
^0.0.2 >=0.0.2 <0.0.3
Note: By default when you run yarn add [package-name] it will use a caret range.

Your life is just to dream and try your best to reliaze it, think more and do more to verify what you think, give yourself a goal and must finish it. if you cant finish it, you will be a loser, always a loser!!
iron out === solve (RC)
governance

# vue 指令基本使用大全

指定 Directives 是带有 v-前缀的特殊属性
作用：当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM

- v-text 更新元素的 textContent
- v-html 更新元素的 innerHTML
- v-bind 当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM
- v-on @click="say('param', $event)" .stop .prevent .capture .self .once
- key 属性
  vue 会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。当 vue 用 v-for 正在更新已渲染过的元素列表时，默认采用就地复用策略。如果数据项的顺序改变了，vue 将不会移动 DOM 元素来匹配数据项的顺序，而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。
  v-pre v-once

when we write english document, must use standard word, not javascript abbreviate variable.

小伙子加油，你可是世界上精力无限的大牛哦，我一定要进阿里！！
07.21 我一定要进 ali！！
i dont like games, and i just like coding,,,and im not good at games,but im very good at coding!!
"coveralls": "cat ./coverage/lcov/lcov.info | ./node_modules/.bin/coveralls",
"coverage-old": "./node_modules/.bin/istanbul cover ./node_modules/mocha/bin/\_mocha --reporter spec test/\*",
"coverage": "cat ./coverage/lcov.info | coveralls"

http://taobaofed.org/blog/2016/01/08/karma-origin/
https://github.com/jossmac/react-scrolllock/blob/master/src/ScrollLock.js
https://gist.github.com/CFJSGeek/5550678
https://thebrainfiles.wearebrain.com/moving-from-webpack-3-to-webpack-4-f8cdacd290f9
https://github.com/nicejade/nicelinks-vue-client/blob/master/build/webpack.prod.conf.js
https://github.com/jossmac/react-images/issues/14
https://reactjs.org/docs/forwarding-refs.html
https://reactjs.org/docs/legacy-context.html
https://reactjs.org/docs/react-component.html
https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#fetching-external-data-when-props-change
https://cli.vuejs.org/guide/plugins-and-presets.html#installing-plugins-in-an-existing-project
https://github.com/storybooks/storybook
https://storybook.js.org/
https://eggjs.org/zh-cn/tutorials/typescript.html
https://eggjs.org/zh-cn/tutorials/typescript.html
https://medium.com/m/global-identity?redirectUrl=https%3A%2F%2Fhackernoon.com%2Fcontinuous-integration-circleci-vs-travis-ci-vs-jenkins-41a1c2bd95f5
https://www.google.com/search?q=vue+%E6%8F%90%E5%8D%87%E6%80%A7%E8%83%BD&oq=vue+%E6%8F%90%E5%8D%87%E6%80%A7%E8%83%BD&aqs=chrome..69i57.12344j0j7&sourceid=chrome&ie=UTF-8
https://unpkg.com/#/
https://webpack.js.org/api/loaders/
https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
https://parceljs.org/
https://github.com/parcel-bundler/parcel
https://reactjs.org/docs/react-component.html#displayname
https://gist.github.com/cobyism/4730490
https://webpack.js.org/api/cli/
https://cn.vuejs.org/v2/guide/installation.html
https://github.com/wbuchwalter/tslint-loader
https://wdd.js.org/all-best-ui-frame.html

增加 vue 骨架屏
移除 eslint 所有 package
yarn 替换 npm 流程：

1. 去官网 https://yarnpkg.com/en/ 下载 yarn：
   windows： 下载 msi 文件，下载完成双击运行，运行后执行 npm install -g yarn
   Mac： brew install yarn

2. 到项目目录下，删除 node_modules 文件夹，执行 yarn config set registry https://registry.npm.taobao.org，yarn install 这两条命令

3 之后跑 package.json 里的 scripts 脚本 都可以用 yarn，比如说 yarn start，yarn build

4. 安装包用 yarn add <package-name>，删除包用 yarn remove <package-name>，更多命令可参考： https://yarnpkg.com/en/docs/cli/

5. yarn 主要是要比 npm 更安全，依赖包的版本管理策略更好，另外就是 yarn add 比 npm install —save，yarn (install)比 npm install 快很多，还有包缓存等好处，可以参考一下这篇文章：https://www.jianshu.com/p/2db9f278494a

"coverage-old": "./node_modules/.bin/istanbul cover ./node_modules/mocha/bin/\_mocha --reporter spec test/\*",
"coverage": "cat ./coverage/lcov.info | coveralls"
Select 选择器
下拉选择器。

何时使用#
弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。

当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

核查结果那边有下载，核查记录那里也有下载

http://zxc0328.github.io/2017/09/28/react-16-source/

https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/shallowEqual.js
https://segmentfault.com/a/1190000006741060

use Object.keys(o).map((k) => ...) to replace \_.map

https://blog.csdn.net/qq_41139830/article/details/80531802

Actually, PureComponent is more suited to more scenes than Component, because usually we dont need nested prop and state keys. Simple component use PureComponent(and we'd better to flat-define our states and props, rather than objs and arrs)

https://blog.csdn.net/csdnnews/article/details/81187618

https://blog.csdn.net/GitChat/article/details/81172576

jest 自带对 React 的支持，同事也很容易支持其他框架
jest support test lib, test runner, assertion library, mock library,,,and include Snapshot rendering, Instant Feedback.

jest + enzyne

SegmentFault
首页问答专栏讲堂 发现
搜索问题或关键字
消息私信
热门标签
全部 reduxreact.jssvgnode.jshtml5css3vue.jsjquerycsshtmljavascriptphp 前端 javapythonmysqllinuxandroidioswebpackc++
问
有没有什么实惠的 VPN 推荐呀
vpn vpn-server vpn 连接 南赐 3 月 10 日提问 · 3 月 10 日更新
6 关注
1 收藏，392 浏览
问题对人有帮助，内容完整，我也想知道答案 0 问题没有实际价值，缺少关键内容，没有改进余地
RT，之前自己一直用的公司 VPN 翻的墙，现在想自己购买付费 VPN，我在这里看到的都是比较好的国外 VPN，感觉好贵呀，请问有没有什么值得推荐的 VPN ，国内国外的都可以，讲讲理由呗！
https://cn.linkedin.com/pulse/%E7%9F%A5%E4%B9%8E%E6%8E%A8%E8%8D%90%E5%9B%BD%E5%A4%96%E6%9C%80%E5%A5%BD%E7%9A%84top-10%E4%BB%98%E8%B4%B9vpn%E6%8E%A8%E8%8D%90%E7%BD%91%E7%A8%B3%E5%AE%9A%E7%9A%84ss%E6%8E%A8%E8%8D%90-gudeer-kitty

这个问题已被删除，原因：违规内容 - 色情、暴力、血腥、敏感信息等

问题解决后请 采纳答案 进行终结；如果自己找到解决方案，你可以 自问自答 并采纳。

3 月 10 日提问 1 评论邀请回答编辑
怎么都觉着是来钓鱼的

— 我养了一窝汪汪 · 4 月 24 日
这个问题已经被删除无法评论

5 个回答
答案对人有帮助，有参考价值 1 答案没帮助，是错误的答案，答非所问

采纳
自己买个海外服务器，搭一个，跟人合用来分摊服务器租金。海外服务器上放网站还不用备案，一举多得

3 月 11 日回答 4 评论赞赏编辑

cheereus
84 声望
答案对人有帮助，有参考价值 1 答案没帮助，是错误的答案，答非所问

采纳
https://www.findhao.net/res/1417

Host1Plus(美国便宜 VPS)购买和使用|板瓦工 bandwagon、Vultr、digital ocean、阿里云国际主机购买

3 月 11 日回答 2 评论赞赏编辑

FindHao
94 声望
答案对人有帮助，有参考价值 0 答案没帮助，是错误的答案，答非所问

采纳
可以去 搬挖工 买一台外国服务器，搭一个。一年费用大概 30 美元

3 月 11 日回答 1 评论赞赏编辑

qqlcbb
317 声望
答案对人有帮助，有参考价值 0 答案没帮助，是错误的答案，答非所问

采纳
我用的是 linode 服务器，5 刀一个月，每月 1000G 流量，两三个人合用很便宜了。

如果 10 块钱都你觉得贵，想想 4G 流量费用，是不是顿时就释然了？

图片描述

3 月 11 日回答 2 评论赞赏编辑

小明
355 声望
答案对人有帮助，有参考价值 0 答案没帮助，是错误的答案，答非所问

采纳
可以自己搭建，我之前一直是自己搭建的，不过需要好几个人一起用划算，怕麻烦的话，可以跟我一样用这个，性价比很高，https://hideuvpn.github.io/

4 月 24 日回答评论赞赏编辑

sieben
152 声望
这个问题已经被删除无法回答

Planets
想在上方展示你的广告？
产品
热门问答
热门专栏
热门讲堂
最新活动
圈子
找工作
移动客户端
资源
每周精选
用户排行榜
徽章
帮助中心
声望与权限
社区服务中心
开发手册
商务
人才服务
企业培训
活动策划
广告投放
区块链解决方案
合作联系
关于
关于我们
加入我们
联系我们
关注
产品技术日志
社区运营日志
市场运营日志
团队日志
社区访谈
微信 新浪微博 Github Twitter
条款
服务条款
内容许可

扫一扫下载 App

Copyright © 2011-2018 SegmentFault. 当前呈现版本 17.06.16
浙 ICP 备 15005796 号-2 浙公网安备 33010602002000 号 杭州堆栈科技有限公司版权所有
CDN 存储服务由 又拍云 赞助提供

https://juejin.im/post/59a65113f265da247b4e98c1

ali-frontend-prepare:

#css-animation

name, duratioin, timing-function delay iteration-count direction

#js-animation

```js
// polyfill
window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (cb) {
      window.setTimeout(cb, 1000 / 60);
    }
  );
})();

const elm = document.getElementById("elm");
let flag = true;
let left = 0;
// setTimeout(() => {
//   left === 0 ? flag = true : left === 100 ? flag = false : ''
//   flag ? e.style.left = `${left++}px` : e.style.left = `${left--}px`
// }, 1000 / 60)

function render() {
  left === 0 ? (flag = true) : (left = 100 ? (flag = false) : "");
  flag ? (e.style.left = `${left++}px`) : (e.style.left = `${left--}px`);
}

(function animloop() {
  render();
  requestAnimFrame(animloop);
});
```

- 浏览器可以优化并行的动画动作，更合理的重新排列动作序列，并把能够合并的动作放在一个渲染周期内完成，从而呈现出更流畅的动画效果
- 解决毫秒的不准确性
- 避免过度渲染（渲染频率太高，tab 不可见暂停等等）
- cancelAnimationFrame

右边宽度固定，左边自适应

```html
<style>
  body {
    display: flex;
  }
  .left {
    background-color: rebeccapurple;
    height: 200px;
    flex: 1;
  }
  .right {
    background-color: red;
    height: 200px;
    width: 100px;
  }

  /* second */
  div {
    height: 200px;
    overflow: hidden;
  }
  .left {
    margin-right: 200px;
    background: rebeccapurple;
  }
  .right {
    width: 100px;
    float: right;
    background: red;
  }
</style>
<body>
  <div class="left"></div>
  <div class="right"></div>
</body>
```

水平垂直居中

```css
#container {
  por
}
#center {
  w100+h100+poa+t50p+l50p
  transfrom: translate(-50%, -50%)
}

#container {
  por
}
#center {
  w100+h100+poa+t50p+l50p
  margin: -50px 0 0 -50px;
}

#container {
  por
}
#center {
  poa
  mau+t0+b0+l0+r0
}

#container {
  df+jcc++aic
}
```

公积金优化：山西挖煤部下拉列表，，，arealist/ex + 所有的置灰处理 + 友明社保对接 + 社保公积金第一个都是账号最后一个都是密码 + 社保公积金搜索正则匹配好开头

生产环境，1107602 256600 滨州 创建任务还是会有 不存在该地区编码 报错，，，获取地区列表 status 是 0，可以获取到登录信息

你周四再优化吧

How many mac browsers exist?

上传文件如果一定要明确需求对文件类型，大小，数量的要求，做好相应验证，不满足就不给上传

`cmd shift e` replace ` cmd k b`

https://stackoverflow.com/questions/40880942/swfobject-embedswf-not-working

[Log] this.get – "\_system_x_token" (2) (fingerprint.js, line 1)
function (e,t){var n;(window.\_xfp_ec_all=t,e==undefined)?(n=s("backend"==l?"":\_saber.token,\_saber.merchantNo,64),o.set("\_system_x_token",n),d.everCookie=n):d.everCookie=e;if(navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices)navigator.mediaDevices.enumerateDevices().then(function(e){for(var t="",n="",r="",i=0,a=0,o=0,s=0;s<e.length;s++)"audiooutput"==e[s].kind?(t=t+e[s].deviceId+",",i++):"videoinput"==e[s].kind?(n=n+e[s].deviceId+",",a++):"audioinput"==e[s].kind&&(r=r+e[s].deviceId+",",o++);d.cameraId="NOVAL",d.audioId=t?i+"-"+CryptoJS.MD5(t).toString():"NOVAL",d.videoId=n?a+"-"+CryptoJS.MD5(n).toString():"NOVAL",d.microphone=r?o+"-"+CryptoJS.MD5(r).toString():"NOVAL";var l=JSON.stringify(d),c=p(h,f,l),u=window.\_saber&&window.\_saber.env_is_test?"/gateway/device-engine-pc/pc/v1/gather":"https://dfp.xinyan.com/gateway/device-engine-pc/pc/v1/gather";g(u,c,d,d.merchantNo||"NOVAL"),v=1}),setTimeout(function(){if(1!=v){d.cameraId="NOVAL",d.audioId="NOVAL",d.videoId="NOVAL",d.microphone="NOVAL";var e=JSON.stringify(d),t=p(h,f,e),n=window.\_saber&&window.\_saber.env_is_test?"/gateway/device-engine-pc/pc/v1/gather":"https://dfp.xinyan.com/gateway/device-engine-pc/pc/v1/gather";g(n,t,d,d.merchantNo||"NOVAL")}},2e3);else{d.cameraId="NOVAL",d.audioId="NOVAL",d.videoId="NOVAL",d.microphone="NOVAL";var r=JSON.stringify(d),i=p(h,f,r),a=window.\_saber&&window.\_saber.env_is_test?"/gateway/device-engine-pc/pc/v1/gather":"https://dfp.xinyan.com/gateway/device-engine-pc/pc/v1/gather";g(a,i,d,d.merchantNo||"NOVAL"),v=1}}
undefined
[Log] opts.lso – "\_system_x_token" – undefined (fingerprint.js, line 1)
[Error] Failed to load resource: the server responded with a status of 404 (Not Found) (evercookie_png.php, line 0)
[Error] Failed to load resource: the server responded with a status of 404 (Not Found) (evercookie_etag.php, line 0)
[Error] Failed to load resource: the server responded with a status of 404 (Not Found) (evercookie_cache.php, line 0)
[Error] Failed to load resource: the server responded with a status of 404 (Not Found) (get_java.png, line 0)
[Error] Failed to load resource: the server responded with a status of 404 (Not Found) (evercookie.swf, line 0)
[Error] Failed to load resource: 在此服务器上找不到所请求的 URL。 (evercookie.swf, line 0)
[Log] this.set – "\_system_x_token" – "8037506450153308843545044em9swdegq" (fingerprint.js, line 1)
[Log] opts.lso – "\_system_x_token" – "8037506450153308843545044em9swdegq" (fingerprint.js, line 1)

思路：
如何获取 flash-cookie 并加以利用以计算 evercookie，，，baseurl assetpath swffilename 在第一次启用 flash 的时候怎么取值，，，

flash lsoData retriving duration:: (with backend interaction)

1. this.set('\_system_x_token', merchantToken)

\_evercookie(name, function () {}, value)

evercookie_database_storage
evercookie_indexdb_storage
evercookie_png

important!!!
but pngData do what ??

evercookie_etag
evercookie_cache

evercookie_lso(name, value)

=====> swfobject.embedSWF(url, id, width, height, flashMinVersion, expressinstallUrl, flashvars, params, attributes) did what????????

how to get swfUrl??(on server?)

======>

2. this.get => this.\_evercookie (name, cb, value, i, dont_reset)

i=== 0 first run, opts.lso evercookie_lso(name, value)

http://the-echoplex.net/log/swfobject-for-phpx

服务器是否必须安装任何东西？
服务器必须至少可以访问 JavaScript evercookie 文件。
另外，要使用本地共享对象（Flash Cookies）存储，
evercookie.swf 文件必须存在，并使用自动生成的 PNG
缓存，标准缓存和 ETag 存储机制，PHP 必须
安装和 evercookie\_（png | etag |缓存）.php 必须在服务器上。

PNG 缓存如何工作？
当 evercookie 设置一个 cookie 时，它会访问 evercookie_png.php 并带有一个特殊的 cookie
HTTP cookie，与用于标准会话数据的 cookie 不同。这个
PHP 文件读取特殊 cookie，如果找到，则生成 PNG 文件
其中所有 RGB 值都设置为会话数据的等价物
存储。此外，PNG 将被发送回客户端浏览器
缓存文件 20 年的请求。

    当evercookie检索此数据时，它会删除特殊的HTTP cookie，
    然后在没有任何用户信息的情况下向同一文件发出相同的请求。
    当PHP脚本看到它没有生成PNG的信息时，它
    返回强制Web的“304 Not Modified”的伪造HTTP响应
    浏览器访问其本地缓存。然后浏览器生成缓存
    然后将图像应用于HTML5 Canvas标记。一旦应用，evercookie
    读取Canvas标签的每个像素，提取RGB值，从而
    生成存储的初始cookie数据。

\_global_lso 怎么作用的，，，机制如何

https://github.com/Liqihan/blog/issues/5
https://blog.jeremiahgrossman.com/2006/08/i-know-where-youve-been.html
https://en.wikipedia.org/wiki/HTTP_cookie
https://html.spec.whatwg.org/multipage/webstorage.html
https://github.com/truongsinh/evercookie/commit/65f73dcab40f9227e3a4c52a38ff7046760e0d74#diff-896b1f038322567718f93ab66e04bcfcL67
https://en.wikipedia.org/wiki/Local_shared_object
https://github.com/swfobject/swfobject/issues/57
http://blog.deconcept.com/swfobject/
http://code.ciaoca.com/javascript/swfobject/
http://learnswfobject.com/the-basics/advanced-options-with-dynamic-publishing/index.html
https://github.com/swfobject/swfobject/wiki/SWFObject-API
https://samy.pl/evercookie/
http://10.0.19.145:21993/
http://the-echoplex.net/log/swfobject-for-php
https://github.com/truongsinh/node-evercookie/blob/master/index.js
https://blog.csdn.net/shatamadedongxi/article/details/8082165
https://github.com/gdmka/django-evercookie/issues/8
https://stackoverflow.com/questions/40880942/swfobject-embedswf-not-working
https://blog.jeremiahgrossman.com/
https://paper.seebug.org/229/
https://github.com/Valve/fingerprintjs2

https://stackoverflow.com/questions/40880942/swfobject-embedswf-not-working

上周

1. BFZX-6795
   OCR 识别产品开放平台单笔测试功能开发 已完成
2. BFZX-7216 H5 公积金特殊地区界面优化 已完成
3. 设备指纹 js evercookie 调研 开发中，继续调研
   这周
4. 设备指纹 js evercookie 继续调研
5. BFZX-6738 信用卡聚合 H5 1.0.0 开发（前端）开发中
6.

flex auto -- flex: 1 1 auto
flex none -- flex: 0 0 auto

工作，跑步，坐地铁都不听歌，，，工作时好好提高工作效率，跑步时速度一直维持在至少 5min 的配速，，，，有望达到 4min 最佳，可以突破就是完美的！！坐地铁时好好看书还有公众号文章！！食堂吃饭排队时好好看文章，别瞎鸡巴吹牛！！

设备指纹好好研究，要搞就要搞完美！！
https://www.zhihu.com/question/24375983
目前实测 IE/Maxthon/Firefox/Safari/360 浏览器都是采用系统的 Flash 实例，所以能够共享 flash cookie，目前测到的几个特例是 chrome/搜狗/百度浏览器，分别采用了自己浏览器内部打包的 flash 实例。另外不同系统用户的 cookie 不共享。

所有的常见问题大小，位置
sub_area placeholder position change

util.js getObjFromUrl undefined 的话设置成 '' -- 找找大乔什么时候会有 undefined 情况出现

localhost 什么情况下会有插件选项。。。

// Frame 0
// Action tag #0

shared = ShareObject.getLocal("evercookie");

以后爬虫上线每次逗自己主动更新一下文档,,,~~不要等着 PM 和支持来催你~~

aviod use 0 or off in .eslintrc.js !!!!!

keep max-len equal to 120 and not to write many characters in one line, focus on the bottom right corner, whether
it over 115, if it is, you must start a new line, no matter what kind of this file!!!!

/\* Click to Go to Web Page
Clicking on the specified symbol instance loads the URL in a new browser window.

Instructions:

1. Replace http://www.adobe.com with the desired URL address.
   Keep the quotation marks ("").
   \*/

instance_name_here.addEventListener(MouseEvent.CLICK, fl_ClickToGoToWebPage);

function fl_ClickToGoToWebPage(event:MouseEvent):void
{
navigateToURL(new URLRequest("http://www.adobe.com"), "\_blank");
}

https://ustbhuangyi.github.io/vue-analysis/
http://hcysun.me/vue-design/art/

function deleteAllCookies() {
var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }

}

https://stackoverflow.com/questions/1811736/can-flash-action-script-read-and-write-local-file-system

https://www.cnblogs.
com/janas/archive/2013/05/18/3085494.html

https://www.adobe.com/devnet/flash/articles/first_as3_application.html

https://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/external/ExternalInterface.html

https://blog.csdn.net/u010395804/article/details/31356885

https://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/net/SharedObject.html

http://cxh.me/2014/11/25/flash-shared-cookie/

flashvars 对象是一个为了增加易用性而设计的作为快捷方式的参数，所以你可以先忽略它，然后在 params 对象中指定你的 flashvars：

<script type=“text/javascript“>

var flashvars = false;
var params = {
menu: “false“,
flashvars: “name1=hello&name2=world&name3=foobar“
};
var attributes = {
id: “myDynamicContent“,
name: “myDynamicContent“
};

swfobject.embedSWF(“myContent.swf“, “myContent“, “300“, “120“, “9.0.0“,“expressInstall.swf“, flashvars, params, attributes);

</script>

https://imququ.
com/post/how-to-use-flash-sharedobject.html

每次发版的时候记得打个 tag

#evercookie:
https://help.adobe.com/zh_CN/FlashPlatform/reference/actionscript/3/flash/external/ExternalInterface.html
http://learnswfobject.com/advanced-topics/the-callback-function/index.html

chrome 浏览器自带的 flash 插件，与系统的 flash 存放.sol 文件是不在同一个地方的，而 chrome 浏览器可能含有两个 flash（如果你又独自为其他浏览器安装了 flash player），默认两个都开启，但是 chrome 优先选择内置的 flash 插件，从而导致 flash cookie 存放路径与其他浏览器（ie，firefox）不一样，结果就是不能共享数据

https://docs.google.com/presentation/d/106_KLNJfwb9L-1hVVa4i29aw1YXUy9qFX-Ye4kvJj-4/edit#slide=id.p

https://www.cnblogs.com/mooncher/p/7400975.html

windows IE!! firefox 共享 flash cookie？

windows IE11, IE Edge, 360fast-ie11-mode ...

https://security.stackexchange.com/questions/95331/does-microsoft-edge-spartan-share-cookies-cache-passwords-or-tls-certificat

http://blogs.adobe.com/flashplayer/2015/10/flash-player-guidance-for-internet-explorer-11-and-microsoft-edge.html#sthash.hbasH1S3.dpbs

https://blogs.windows.com/msedgedev/2017/07/25/flash-on-windows-timeline/

How to clear all flash cookies on Windows

http://learnswfobject.com/advanced-topics/executing-javascript-when-the-swf-has-finished-loading/index.html

https://epic.org/privacy/cookies/flash.html

#IE11 IE Edge flash:
https://security.stackexchange.com/questions/95331/does-microsoft-edge-spartan-share-cookies-cache-passwords-or-tls-certifica

##chrome flash:
https://forums.adobe.com/thread/2456034

flash tech is low and uprecated, but I learn how to use parallels desktop!!!

##andriod flash cookies:
Note that the HTML5 client-side storage isn't in either of those locations.

To clear that, you need to go into your browser, press the Menu button, select, More, then Settings then scroll right to the bottom where you can see (under the Advanced heading) Website settings, now you should be able to see which websites have stored data on your phone (shows as a rectangle that fills up, the more they store), as well as what other permissions you've given websites, like which ones can use your location data.

http://www.allaboutcookies.org/mobile/mobile-tracking.html

http://www.allaboutcookies.org/mobile/galaxy-s-II.html

http://www.allaboutcookies.org/manage-cookies/remove-flash-cookies.html

https://www.google.com/search?q=android+flash+player&oq=andriod+flash+player&aqs=chrome.1.69i57j0l5.10424j0j7&sourceid=chrome&ie=UTF-8
#fingerprint:

上周：
SDKH5
BFZX-7570 APP SDK 添加 QQ 邮箱 JS、优化京东一键授权登录 JS 已上线
设备指纹
evercookie-flash cookie 部分调研及研发完毕
BFZX-7673 ios H5，是否伪装操作系统识别错误 待测试
本周：
SDKH5

设备指纹
BFZX-7673 ios H5，是否伪装操作系统识别错误 待上线

## mediaDevices:

audioID-unknown: ios-safari，android-baidu，
audioid-microphone-notsame：Android-oupeng，
cannotsend：android-baidubrowser，android-sougou,

3-unknown:

modal: qqbrowser firefox

ios: navigator.mediaDevices.enumerateDevices not supported: qqbrowser,chrome, 360jisu,sougou,liebao,qingning,uc,baidu,opera
android:

##javascript-obfuscator
http://www.javascriptobfuscator.com/Javascript-Obfuscator.aspx
http://www.javascriptobfuscator.com/dashboard/home.aspx

##gbk2utf8
https://www.google.com/search?hl=zh-CN&ei=Eq57W4vlOLi60PEPvfe94Ac&q=gbk+to+utf8+javascript&oq=gbk+to+utf8+javascript&gs_l=psy-ab.3..0i8i30k1.4187.9030.0.9460.11.11.0.0.0.0.230.1641.0j2j6.8.0....0...1.1j4.64.psy-ab..4.7.1440...0j0i30k1j0i5i30k1j0i13k1j0i8i13i30k1.0.4fJL6JbfXQI ##邦盛 fingerprint
http://10.0.23.69:10010/public/downloads/frms-fingerprint.js
http://tfk.baofoo.com/baofoo-rm-device/baofoo-test.html
http://tfk.baofoo.com/baofoo-rm-device/js/member/getBSDevice.js
##charset
charset changing when refresh on android-qq，，，

##邦盛
FFDhu1IOd2R6C2qfRZB-YD_YBxmUMlgf ##添加过的特征字段有：
flashVersion，localIP，wapWeb，scrAvailSize, srcScreenSize, timeZone(/60),
os(sysVer),touchSupport(0, 0, false??),

mimeTypes，hashCode，passiveCode, plugins: timestamp??, webSmartID, crc64code, passiveIP(localIP), dfp?? possibility, createTime, updateTime?? ##这次我主要加的字段有：localIP, wapWeb, flashVersion, mimeTypes 当前浏览器可识别的特定插件关联的 mime 对象的列表,这个字段比较稳定 scrAvailSize(resolution), srcScreenSize(IE 有个特殊字段 screen.colorDepthxdeviceXDPI 返回显示屏幕的每英寸水平点数 xscreen.heightx),,,hashCode 是将采集过的字段先排好序，字符串逐位编码，求和，反转,所有的奇数位反转，CryptoJS 加密，，，

plugins mimeTypes 重复概率很高，，，但是质量要比 videoIdaudioId 质量要高，，，得重新确认一下算分逻辑

##evercookie differences
evercookie.swf one has one not

注意记录每个特征值的采集耗时，，，耗时长的需要额外注意，权重低的直接干掉。。。

localIP mobile:
android two-baidu sougou, kuake, uc, opera, qq,
ios
localIP pc:
ie, edge
evercookie buyiyang php,etag,color

1246 4
012345
aabbab
aaaaab

hashCode 这个值比较复杂，生成过程: 先将对象数组排序

console.table(............)
##deviceId
https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo

## fingerprint bugs:

andriod Maxthon5 userAgent:::
[2018-08-28 11:54:31,925] [INFO ] c.xinyan.device.pc.api.PcDeviceGatherApi 87 -- [6e9298dc-331d-40c4-8f56-5c684a5988d4] call pc gather PARAM:{"charset":"UTF-8","userAgent":"Mozilla/5.0 (Linux; Android 7.1.1; MI MAX 2 Build/NMF26F) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/64.0.3282.137 Mobile Safari/537.36 Maxthon/3232","colorDepth":24,"webglVendor":"Qualcomm~Adreno (TM) 506","webglRenderer":"3a10e7ef29cac4d4770cf7c62cd9c21c","sessionStorage":1,"localStorage":1,"hashIndexedDB":1,"canvasId":"50718ac81b7b08f9d9ab0a20e62607d0","cpuClass":"","platform":"Linux armv8l","timeZone":-480,"plugins":[],"adBlock":0,"pretendSystem":0,"pretendResolution":0,"pretendBrowser":0,"language":"zh-CN","deviceMemory":"","hardwareConcurrency":8,"resolution":[699,393],"openDatabase":1,"hasLiedLanguages":0,"touchSupport":[5,true,true],"pixelRatio":2.75,"jsFonts":["Arial","Courier","Courier New","Georgia","Helvetica","Monaco","Palatino","Tahoma","Times","Times New Roman","Verdana"],"sdkVer":"1.0.1","sysVer":"Android","browserName":"Chrome","browserVer":"64.0.3282.137","networkType":"4g","deviceSys":"ANDROID","merchantNo":"8037506450","appName":"oms-测试","token":"","extra":"{\"aa\":\"aa\",\"bb\":\"bb\"}","everCookie":"201808281152171277333948431541252aa16370f2fcc5590c3dc17304838b5f","audioId":"1-a03e84c07866c2dbd1e9512002abc279","videoId":"2-1b583adbd5d45644cb371d70f173968e","microphone":"1-a03e84c07866c2dbd1e9512002abc279"}
宝付测试赵松 13:48:58
[2018-08-28 11:55:11,778] [INFO ] c.xinyan.device.pc.api.PcDeviceGatherApi 87 -- [10159d83-d57e-4922-a93f-f697b8dfc816] call pc gather PARAM:{"charset":"UTF-8","userAgent":"Mozilla/5.0 (Linux; Android 7.1.1; MI MAX 2 Build/NMF26F; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/64.0.3282.137 Mobile Safari/537.36","colorDepth":24,"webglVendor":"Qualcomm~Adreno (TM) 506","webglRenderer":"3a10e7ef29cac4d4770cf7c62cd9c21c","sessionStorage":1,"localStorage":1,"hashIndexedDB":1,"canvasId":"50718ac81b7b08f9d9ab0a20e62607d0","cpuClass":"","platform":"Linux armv8l","timeZone":-480,"plugins":[],"adBlock":0,"pretendSystem":0,"pretendResolution":0,"pretendBrowser":0,"language":"zh-CN","deviceMemory":"","hardwareConcurrency":8,"resolution":[699,393],"openDatabase":1,"hasLiedLanguages":0,"touchSupport":[5,true,true],"pixelRatio":2.75,"jsFonts":["Arial","Courier","Courier New","Georgia","Helvetica","Monaco","Palatino","Tahoma","Times","Times New Roman","Verdana"],"sdkVer":"1.0.1","sysVer":"Android","browserName":"Chrome","browserVer":"64.0.3282.137","networkType":"4g","deviceSys":"ANDROID","merchantNo":"8037506450","appName":"oms-测试","token":"","extra":"{\"aa\":\"aa\",\"bb\":\"bb\"}","everCookie":"201808281152171277333948431541252aa16370f2fcc5590c3dc17304838b5f","audioId":"1-a03e84c07866c2dbd1e9512002abc279","videoId":"2-1b583adbd5d45644cb371d70f173968e","microphone":"1-a03e84c07866c2dbd1e9512002abc279"}

android qq document.charset

android 360 canvasId, webglVendor, webglRender,,,:::
ip=10.0.19.145, userAgent=Mozilla/5.0 (Linux; Android 7.1.1; MI MAX 2 Build/NMF26F; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.97 Mobile Safari/537.36, colorDepth=32, webglVendor=Qualcomm ~Adreno (TM) 506, webglRenderer=a51059ef18f3941bda3b6ad94e076226, sessionStorage=1, localStorage=1, hashIndexedDB=1, canvasId=d8c9b728b2d983fbcdab3ae00662291c, cpuClass=, platform=Linux arm v8l, timeZone=-480, plugins=[], adBlock=0, pretendSystem=0, pretendResolution=0, pretendBrowser=0, cameraId=null, audioId=1-a03e84c07866c2dbd1e9512002abc279, language=zh-CN, deviceMemory=, hardwareConcurrency=8, resolution=[699,393], openDatabase=1, hasLiedLanguages=0, touchSupport=[5,true,true], jsFonts=["Arial","Courier","Courier New","Georgia","Helvetica","Monaco","Palatin o","Tahoma","Times","Times New Roman","Verdana"], microphone=1-a03e84c07866c2dbd1e9512002abc279, pixelRatio=2.75, everCookie=20180820185920350276748911233936ece68b625acd4372b1f27db9bed56ba6 , videoId=2-47ba0129276b0e96f40630779310b389, deviceSys=ANDROID, transLogId=fae14f33-ec8c-4db7-a5d3-0318879eb805

ip=10.0.19.145, userAgent=Mozilla/5.0 (Linux; Android 7.1.1; MI MAX 2 Build/NMF26F; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.97 Mobile Safari/537.36, colorDepth=32, webglVendor=null, webglRenderer=, sessionStorage=1, localStorage=1, hashIndexedDB=1, canvasId=941a47395653d88fecfb843b56fa0429, cpuClass=, platform=Linux armv8l, timeZone=-480, plugins=[], adBlock=0, pretendSystem=0, pretendResolution=0, pretendBrowser=0, cameraId=null, audioId=1-a03e84c07866c2dbd1e9512002abc279, language=zh-CN, deviceMemory=, hardwareConcurrency=8, resolution=[699,393], openDat abase=1, hasLiedLanguages=1, touchSupport=[5,true,true], jsFonts=["Arial","Courier","Courier New","Georgia","Helvetica","Monaco","Palatino","Tahoma","Times","Times New Roman","Verdana"], mi crophone=1-a03e84c07866c2dbd1e9512002abc279, pixelRatio=2.75, everCookie=20180820185920350276748911233936ece68b625acd4372b1f27db9bed56ba6, videoId=2-47ba0129276b0e96f40630779310b389, deviceSys=ANDROID, transLogId=5961cefe-3cad-45c4-a508-107bdb1e503c

localIP:::
IE 11 and IE edge cant get..

获取真实 IP，，，

webgl 在 android 什么手机上清除缓存后再次打开会变？

deviceMemory
webgl ios-baidu, windows-pc-sougou ===> none
adroid 360 ======> sometimes change or canot get value....

MAC 命令行 查看硬盘和文件夹大小（占用空间）
2015 年 09 月 15 日 10:26:31 阅读数：14864 更多
个人分类： MAC
版权声明：本文为博主原创文章，未经博主允许不得转载。 https://blog.csdn.net/hch201201/article/details/48463911
df -h 命令查看整个硬盘的大小 ，-h 表示人可读的
du -d 1 -h 命令查看当前目录下所有文件夹的大小 -d 指深度，后面加一个数值

BAOFOO-USER
BAOFOO-GUEST baofoo99
BAOFOO-VIP mandao9999
I like tab, shift much more than ctrl, ctrl x,,,and use shift-begin, shift-end more often than ctrl x,,,and tap much more quickly than ctrl x!!!notice: use two shifts with line-break-seperator...

think deeply, and move effectively!!

no need to specify inline-array-elements-number,,,just always remember max-length: 120 in one line!!

Command H 隐藏当前活动窗口！！蛮好用的

只在地铁上看书或者看视频，最快速度看完， 能大致看懂就行，，，回家就好好写代码写代码写代码，，，，webpack4，node，，，vue-skeleton，，，mongodb，so much you need to write，，

dismiss google-translate, and learn to use apple-dictionary always.

weixin,qq steps text

京东扫码比淘宝扫码要快很多~~

vux form validating,,,or vue-validator from github??

WARNING Compiled with 1 warnings 上午 9:02:35

warning in ./node_modules/vux/src/styles/weui/base/mixin/setOnePX.less

There are multiple modules with names that only differ in casing.
This can lead to unexpected behavior when compiling on a filesystem with other case-semantic.
Use equal casing. Compare these module identifiers:

- /Users/bjhl/pro/XinQiXiang-H5/node_modules/less-loader/stringify.loader.js!/Users/bjhl/pro/XinQiXiang-H5/node_modules/vux/src/styles/weui/base/mixin/setOnePX.less
  Used by 2 module(s), i. e.
  /Users/bjhl/pro/XinQiXiang-H5/node_modules/css-loader/index.js?{"sourceMap":false}!/Users/bjhl/pro/XinQiXiang-H5/node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-5aacdd02","scoped":false,"hasInlineConfig":false}!/Users/bjhl/pro/XinQiXiang-H5/node_modules/vux-loader/src/after-less-loader.js!/Users/bjhl/pro/XinQiXiang-H5/node_modules/less-loader/index.js?{'modifyVars':{'theme-color':'#04bff7','toast-content-font-size':'14px','header-background-color':'#172d44','button-primary-bg-color':'#04bff7','button-primary-active-bg-color':'#049ff7','button-primary-disabled-bg-color':'rgba(4, 191, 70, .5)','icon-success-color':'#049ff7','search-cancel-font-color':'rgb(213, 76, 70)','search-bg-color':'#f7f7f7','cell-value-color':'#666'},'sourceMap':true}!/Users/bjhl/pro/XinQiXiang-H5/node_modules/vux-loader/src/style-loader.js!/Users/bjhl/pro/XinQiXiang-H5/node_modules/vue-loader/lib/selector.js?type=styles&index=0!/Users/bjhl/pro/XinQiXiang-H5/node_modules/vux/src/components/calendar/index.vue
- /Users/bjhl/pro/XinQiXiang-H5/node_modules/less-loader/stringify.loader.js!/Users/bjhl/pro/XinQiXiang-H5/node_modules/vux/src/styles/weui/base/mixin/setOnepx.less
  Used by 1 module(s), i. e.
  /Users/bjhl/pro/XinQiXiang-H5/node_modules/css-loader/index.js?{"sourceMap":false}!/Users/bjhl/pro/XinQiXiang-H5/node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-5aacdd02","scoped":false,"hasInlineConfig":false}!/Users/bjhl/pro/XinQiXiang-H5/node_modules/vux-loader/src/after-less-loader.js!/Users/bjhl/pro/XinQiXiang-H5/node_modules/less-loader/index.js?{'modifyVars':{'theme-color':'#04bff7','toast-content-font-size':'14px','header-background-color':'#172d44','button-primary-bg-color':'#04bff7','button-primary-active-bg-color':'#049ff7','button-primary-disabled-bg-color':'rgba(4, 191, 70, .5)','icon-success-color':'#049ff7','search-cancel-font-color':'rgb(213, 76, 70)','search-bg-color':'#f7f7f7','cell-value-color':'#666'},'sourceMap':true}!/Users/bjhl/pro/XinQiXiang-H5/node_modules/vux-loader/src/style-loader.js!/Users/bjhl/pro/XinQiXiang-H5/node_modules/vue-loader/lib/selector.js?type=styles&index=0!/Users/bjhl/pro/XinQiXiang-H5/node_modules/vux/src/components/calendar/index.vue

?jumpUrl=http%3A%2F%2F10.1.60.235%3A3000%2F%23%2Fsuccess.html
Bs#39i5f
fastclick 记得改一下源码！！
v-if 应该放在用组件的地方，不放在组件里面
淘宝连接置灰
message two btns submitting is slowly
toast or loadingMsg?? how do toast exist with x-dialog??
vuex-action real usage cases????????????
短信验证码有效期二分钟可以重发吗？？？？
code error happen once, can you send the second time? whats the CODE value?
上海移动
郭南赐
36240219940426001X
18201949282
091537
王丽凯
410521199207290524
15520078681
15821685642

中国联通
王叠
330226199106234473
13127760242
512718

13652072629
454933
刘家涛
130425198503053855
13919852716

安徽电信
季益亮
342623198704158513
18119910561
曾明杰
35012519940501005X
17621149556
上海电信
王娇
430822199003030866
15316503027
上海电信
余洋军
340828198802165312
15300587785
342114
江西移动
周智慧
430903199402263321
18296115341
朱艮春
83987054
421081196910133983
18062611449﻿
青海电信
刘洪辰
41142619900315339X
17740713391
17709713704
929883
广西移动
张瑞
231025198311064325
15778049754
北京移动
all 299999 toast and then shortTaskMessage
host: 10.0.19.41, username: xinyan, pwd:xinyan@123, spcard, sms_recv
navicat for mysql，，，学会自己看猫池短信
按钮不要被点击两次发送两次请求，，，
暂无消息还是会有空白。。。
新版运营商读秒加速
新版运营商用户配置失败，，，要去掉
授权中请耐心等待。。。修改一下，，，，改成 授权成功
sass-resource-loader credit-card-h5 how to import mixin.scss in app.vue
短信输错了 29999 继续弹框？
授权成功 logo 突然消失，，，授权中，请耐心等待，，，？？
formType 变成 login 的时候 clearInterval
alterp,resetp, imgcode need to show login layer as bg
给所有的数据源加入 HEAD_TITLES
// loading
all trims
qz mobile goBackExamplePage
checkIcon background
auth_page head back-icon
underlying h5 x-input without underline:::::x-input 的：title font-size，，，跟多出来的两层 div 有关系吗？？
success-btn:::
上海电信 两个连续倒计时之间的及时没有清除，其他数据源也类似
授权协议打开再回到支付宝，二维码需要重新获取，改成不需要。。
支付宝授权协议
webpack-external
北京移动 toast 先 dialog 后
QQ 二群，设置新密码
南平 fundAccount
张掖公积金 idCardNum？？
魅族夸克浏览器 页面空白
module.js 里面要有 field 的初始值，要不然会有 bug。。。
TypeError: undefined is not a function at app.
app.js is too big, 900 多 KB
淘宝支付宝聚合 提交按钮隐藏掉吧
学信网 h5 1.用户名或密码错误 返回至学信网认证页 能否记住用户名 2.身份证密码登录 输入任意的身份证密码 提示：输入项不能为空 3.邮箱密码登录 邮箱格式错误 提示后仍进入 loading 页
学信网邮箱密码 bug
支付宝闪一下超时浮层，但是浮层内没有内容。。。
华为荣耀手淘 http://弹层，，，iOS loading 好了没
SDK_H5 /gateway-data, /data interface can change to qz-uat??
老 H5 项目从 test.xinyan.com 迁移到 qz-uat.xinyan.com
老 H5 增加淘宝、淘宝支付宝短信验证登录方式
运营商 loadingPercent===100 的完成对勾给加上。。。
502 ====》 用 nginx 重启一下就好了。。。
淘宝支付宝 二次验证需要短信验证码。。。
必填参数不能为空。。。
webpack v3 optimize uglify drop_console
alitaobao 页面离开后请求还在继续。。。
SDK_H5 ios 短信输入框
dialog 内输入框 在 app 里面打开运营商 H5 链接。。。

1.浏览器中打开淘宝，一键授权按钮点不了 2.常见问题的 title 需要改成“常见问题” 3.重置密码后，返回首页，点击淘宝认证，界面显示的是重置后的密码 4.浏览器中打开，进入淘宝，刷新二维码，等到二维码过期，返回首页，首页图表显示了 √ 号，并且提示：等待验证码超时

1.浏览器中打开淘宝，一键授权按钮点不了（安卓+iOS 机型） 2.常见问题的 title 需要改成“常见问题”（安卓+iOS 机型） 3.浏览器中打开淘宝，等到二维码过期，返回首页，首页图标显示了 √ 号，并且提示：等待扫码超时（安卓+iOS 机型） 4.微信中打开链接，认证成功后，图标没有显示 √ 号（安卓+iOS 机型） 5.浏览器中公积金任务采集完成后，点击确定，没有返回到首页？（安卓机型）

react-scratch:
home in sidebar
icons
lifecycle
HOC
TypeScript
Redux
Reselect Request URL: https://qz-uat.xinyan.com/api/task/short/message?apiUser=13127760242&apiEnc=63b31c13547de2bcaeed33258f6c7c27&token=f8836be1-3a0a-46d7-bf49-6f79cc7741f6
raw html5(not gongzhonghao) input element show qqDangerousTip when opened in Wechat.
jumpUrl

http://localhost:3333/h5/aggregation?apiUser=13127760242&apiEnc=63b31c13547de2bcaeed33258f6c7c27&jumpUrl=%2Fh5%2Fsuccess
运维-缓存配置，阿里 CDN 配置
h5/experience 改数据源来提高测试效率。。。
experience imgFinished 运营商定位错误
调样式的时候调好了直接看 Elements 里面各个 HTML 元素的 style，不用看右边的 Styles 了
圆形包住数字
bordre-bottom-left-radius
https://blog.csdn.net/Tong_T/article/details/73320701
frida Nodejs 全局。。。
vivo，oppo
huaweiyun before-unload
uihome page applytry open-animation, headnav min-width
轮询右边 1px
 百度云 Message.vue iPhone7 输入框不能为空或特殊字符
SDK 集成 H5 加载特别慢
jumpUrl carrier h5/experience %20%20%20%20%20&source=carrier
只在 app 外跳转至指定页面，可以封装成一个带有默认值指定条件下的跳转方法
systemSettings 跟 settings 接口有关系吗怎么取不到值
每一个 log 的时间戳，换行，，，还有两个请求的 success=false 的情况。。。
isXinyanApp 判断优化
vue.min.js 每次上线前都记得改好！！
baiduyun login tip abstract into one component
/fron/statistics meaning
请求 400 的问题似乎跟 vconsole 的动态加载有关系。。。ohmygod。。。还得解决或者换个 vconsole 源。。。

Process adb taobao.com
uat，这笔米房，没有弹出验证码输入框，导致超时。大佬有空看下@南赐 53b6527b-5125-4c81-be13-9d8725370c8e
h5 webview load slowly first-time or second, third??
h5 self vux Vue.Component() in main.js or other load performance enhancement??
/h5/experience housingfund => taobao
input dialog ios

iPhoneX 左上角返回点不了，网银提交按钮，，，芝麻分跟淘宝一样

document.documentElement.offsetHeight vs document.documentElement.clientHeight
vux querystring.parse querystring.stringify 有兼容性问题。。。自己抽空再好好看看源码:
https://github.com/airyland/vux/blob/b4adbc292055043e6d9eb15de64c123a27a3160a/src/tools/querystring/index.js#L84

new Date().toJSON()时区问题再好好看看

芝麻分王叠的 task-center 不区分 A B 环境了。。。

https://blog.csdn.net/superKM/article/details/83721633
有时候，回归到上一个版本就好了我也不太清楚问题在哪里
分析问题解决问题的能力很重要就算你不知道具体错在哪里但是能够解决问题就已经很不错了。。。

const date = new Date()
const timeMark = new Date(date.getTime() - (date.getTimezoneOffset() \* 60000)).toJSON().replace(/[-:ZT.]/g, '').slice(0, -3)

2 点之前完成好工作上的事情（除去官网重构）

webpack 两个插件的优化
软键盘收起来之前操作不了其他的东西看看能不能改进
client.xinyan.com/h5/

for i in `seq 1 2000000`
do
echo $i

    curl -X POST --header 'Content-Type: application/json' --header 'Accept: text/plain' 'http://10.0.221.102:9093/tao-bao/enc/task?token=tb'$i'&cookie=%7B%22cookie2%22%3A%2214dfc54c5fafba7'$i'300f5fb650f84104c%22%2C%22unb%22%3A%221064957986%22%7D'

done
for i in `seq 1 2000000`
do
echo $i
  curl -X POST --header 'Content-Type: application/json' --header 'Accept: text/plain' 'http://10.0.221.102:9093/tao-bao/enc/task?token=tb'$i'&cookie=%7B%22cookie2%22%3A%2214dfc54c5fafba7'$i'300f5fb650f84104c%22%2C%22unb%22%3A%221064957986%22%7D'
done
for i in `seq 1 2000000`
do
echo $i

    curl -X POST --header 'Content-Type: application/json' --header 'Accept: text/plain' 'http://10.0.221.102:9093/tao-bao/enc/task?token=xxx$i&cookie=%7B%22api%22%3A%22com.taobao.idle.zhima.user.score.get%22%2C%22appKey%22%3A%2221646297%22%2C%22data%22%3A%22%7B%7D%22%2C%22features%22%3A%221051%22%2C%22sid%22%3A%221581cc1101d8b869d42c244cc10bd05b%24i%22%2C%22ttid%22%3A%22701186%40fleamarket_android_6.3.0%22%2C%22uid%22%3A%221064957986%22%2C%22v%22%3A%221.0%22%7D'

done

http://w.baofoo.net/pages/viewpage.action?pageId=8070313

https://mp.weixin.qq.com/s/pDsvuiWvsyp-n-YL2aEZgg
https://juejin.im/post/5c2dd1855188257c30462962?utm_source=gold_browser_extension
http://louiszhai.github.io/2019/01/04/webpack4/
23.225s
https://juejin.im/post/5c2c27096fb9a049f66c3672?utm_source=gold_browser_extension
https://www.google.com/search?q=innerheight+outerheight&oq=innerHeight&aqs=chrome.1.69i57j0l6.7738j0j1&sourceid=chrome&ie=UTF-8
https://juejin.im/entry/5c3489d7f265da617465048e?utm_source=gold_browser_extension
https://juejin.im/post/5c2c47dcf265da616d544a53?utm_source=gold_browser_extension
https://juejin.im/post/5c24b7a851882509a76875e8?utm_source=gold_browser_extension
https://github.com/iamkun/dayjs
https://github.com/typicode/json-server?utm_source=gold_browser_extension
http://huyangjie.com/2018/05/02/赋予H5以Native的生命-——《WebView优化》/
https://zhuanlan.zhihu.com/p/21417465?refer=no-backend
https://www.jianshu.com/p/67e4bd47d981

aliyuncdn 2 个小时弄不好就不弄了。。。
赶紧先把官网弄好。。。

less 动态修改主题变量值，或者加载不同的样式文件
data:base64 李拓这个太长了

SECOND_DSS document.title topTitleContent

和晓光说一下改一下 gitlab 的 XinQiXiang-H5 改成 qz-h5, XinQiXiang-UI 改成 qz-ui

document.title 有问题，微信里面看不到，还有就是 uat 为啥在微信里看得到导航头。。。

准备面试小姐姐
季总，下个礼拜面试几个人呢，有简历可以先发我看看嘛

季总，我申请一下发版权限吧 🙂

微信文件大小限制 100M

QA 同事考虑的很全面嘛，只要产品不能正常使用那就不能上线！！必须前后端都测试通过

过年前后：
图解设计模式 深入浅出 Rxjs

https://192.168.10.19/cgi-bh/login.cgi
https://ncon.zhongwan999.com/com/installClient.html
https://ncon.zhongwan999.com/por/service.csp?showsvc=1&autoOpen=1&rnd=lppdikcbaao#

fetch.ts request.abort() xhr.timeout = 4000 implementation??
iOS focusing-gray
window.innerHeight && window.outerHeight && document.body.clientHeight

XinQiXiang-UI
老 H5 的其他 certify 还没改
切域名的时候只切一次不报警
认证失败后还可以继续用。。。
process.stdio.write Buffer Data canot be JSON.
常见问题优化一下，密码重置也加上常见问题链接吧？
vuex 里面最好不要有冗余字段

打开淘宝
adb shell am start -n com.taobao.taobao/com.taobao.tao.welcome.Welcome
关闭淘宝
adb shell am force-stop com.taobao.taobao
Unable to start server: Error binding to address: Adress already in use
https://qz-uat.xinyan.com/manage/index/
淘宝测试帐号：
xinyantest01/xinyan111 手机号：15715691457 xinyan222
xinyantest02/xinyan111 手机号：15102452956
xinyantest03/xinyan111 手机号：13951735713
https://docs.xinyan.com/login
nanci*guo nanci_guo123
http://10.1.70.120:3333
http://10.0.192.78:3333
cd /home/h5/ && rm -rf * && rz -be && unzip dist.zip && mv dist/_ ./ && rm -rf dist.zip dist && ll
cd /usr/share/nginx/html/dragonfly-fund-h5/ && rm -rf _ && rz -be && unzip dist.zip && mv dist/_ ./ && rm -rf dist.zip dist && ll
cd /usr/share/nginx/html/openapi-web/ && rm -rf _ && rz -be && unzip dist.zip && mv dist/_ ./ && rm -rf dist.zip dist && ll
cd /usr/share/nginx/html/SDK_H5/ && rm -rf _ && rz -be && unzip dist.zip && mv dist/_ ./ && rm -rf dist.zip dist && ll
cd /usr/share/nginx/html/SDK_H5/ && rm -rf _ && rz -be && unzip dist.zip && mv dist/index.html ./ && mv dist/static/js/_ ./ && mv dist/static/css/_ ./ && rm -rf dist.zip dist && ll
cd /usr/share/nginx/html/spider-h5/ && rm -rf _ && rz -be && unzip dist.zip && mv dist/_ ./ && rm -rf dist.zip dist && ll
cd /usr/share/nginx/html/credit-card-h5/ && rm -rf _ && rz -be && unzip dist.zip && mv dist/_ ./ && rm -rf dist.zip dist && ll
cd /etc/nginx/conf.d&&ll
cd /home/device-fingerprint/gather && rm -rf demo.html dist dist.zip fingerprint.js index.html list.html pre-integ.html shijiezhichuang.html test-integ.html assets&& rz -be&&unzip dist.zip && mv dist/\_ ./ && rm -rf dist.zip dist && ll

芝麻分

FastClick 在 SDK_H5,XinQiXiang-H5 每次移除 node_modules 或者有人加入项目的话，之后都要确认`${root}/node_modules/fastclick/lib/
fastclick.js onTouchEnd = ...

xinyanjixiao 有一项标准是 daimatijiaoliang，所以每次改了代码都 build 好后提交，这样包括 dist 的 tijiaoliang 肯定是全 gongsizuigao 的。。。
哈哈哈，tbwanmei，jixiaotebiegao，10.0~~~

622908321066952015

border-radius 小一点或者没有，不要随随便便设置 border-radius，那样会有问题。。。

x-header title 长度截取问题。。。

提交按钮
淘宝一键授权

vue 单页应用，刷新问题怎么弄。。。
城市列表页的双重点击事件

https://help.aliyun.com/document_detail/91857.html?spm=a2c4g.11186623.4.1.41131f52jK9xno

https://signin.aliyun.com/1015277566952318.onaliyun.com/login.htm?callback=https%3A%2F%2Fcdn.console.aliyun.com%2F%3Fspm%3D5176.100251.aliyun_sidebar.aliyun_sidebar_cdn.259c4f15WeGCJb%23%2Fdomain%2Fdetail%2Fres.xinyan.com%2Fbasic&accounttraceid=fe89ee43-9115-41b4-a7cb-3ff27b4daa72&oauth_callback=https%3A%2F%2Fcdn.console.aliyun.com%2F%3Fspm%3D5176.100251.aliyun_sidebar.aliyun_sidebar_cdn.259c4f15WeGCJb%23%2Fdomain%2Fdetail%2Fres.xinyan.com%2Fbasic&spma=a2c44&spmb=11131515

7P 图片显示不出来

刷新图片验证码加个 loading 比较好，避免网络问题引起的图片重叠。。。

client.xinyan.com
https://www.google.com/search?q=nginx+proxy_pass%E5%90%AB%E4%B9%89&oq=nginx+proxy_pass%E5%90%AB%E4%B9%89&aqs=chrome..69i57.10724j0j1&sourceid=chrome&ie=UTF-8

https://www.google.com/search?ei=IrNFXNSKCa3D0PEPjsil-A4&q=Vim%E5%BF%AB%E6%8D%B7%E9%94%AE&oq=Vim%E5%BF%AB%E6%8D%B7%E9%94%AE&gs_l=psy-ab.3..0i7i30l3j0i12j0i7i30l6.2283.2417..3884...0.0..0.270.534.2-2......0....1..gws-wiz.CY3Lr5IHVjE

https://www.google.com/search?q=nginx+location+%5E~&oq=nginx+location+%5E~&aqs=chrome..69i57j69i65j0l5.18027j0j1&sourceid=chrome&ie=UTF-8

https://www.google.com/search?q=nginx+try_files+404&oq=nginx+try_files&aqs=chrome.1.69i57j35i39j0l5.7729j0j1&sourceid=chrome&ie=UTF-8

https://www.google.com/search?q=nginx+try_files+404&oq=nginx+try_files&aqs=chrome.1.69i57j35i39j0l5.7729j0j1&sourceid=chrome&ie=UTF-8

# async

https://medium.com/@yiminanci/has-recommended
https://juejin.im/post/5c39523651882525a67c53d6?utm_source=gold_browser_extension

# juejin

https://juejin.im/post/5c23993de51d457b8c1f4ee1?utm_source=gold_browser_extension

https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files
https://medium.com/@martin_hotell/react-typescript-and-defaultprops-dilemma-ca7f81c661c7

Todos in 2019:
主题色设置。。。
发版 yarn build 自动编译+测试环境 jenkins 配置好(3 个项目，H5+front+back+H5-back)以及改名:
https://my.oschina.net/520wsl/blog/2997382
Vue，React，Angular 代码都要好好写。。。
如何才能高效编写 typescript 代码。。。按自己的心来走
class 命名
td earn to 200 wan
qz-front react+typescript+immutable+rxjs
qz-back angular
手机版后台采用 ionic 风格！！或者采用 dart2+flutter 或者 react-native 来写如何？
vue3 vue-cli3
漫道讲师资格申请
体验版聚合版 H5 页面开发，小的 bug 修复比如说 vivo，oppo 手机自带浏览器无法一键授权，银行卡列表页选择之后回到上一个页面 header-title 太长了。。。枣庄公积金的图片刷新有可能会重叠。。。需要做 loading 优化

cd /data/appdeploy/
tar zxf dist.tar.gz
cd dist
rm -rf /root/h5/static /root/h5/index.html
mv _ /root/h5/
cd /data/appdeploy/
rm -rf dist_

git@gitlab.xinyan.com:NewCrawl/XinQiXiang-H5.git

优化类的代码先记下来，先把整个项目重构完再说！
优化类工作：
webpack-external typescript-external
happypack webpack-parallel (qz-h5)

setInterval，++，全局标志位，，解决芝麻分 Nodejs 报警困扰

https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b

https://weekly.docschina.org/javascript/421.html

btns 合并到 links 里面采用 btn: boolean

链接颜色可配置，菜单里的链接文字颜色可以配置成至少三种

vw 配置成 baseWidth1920

input 到底要不要有 shadow 还有上右左三条边框？？

how to make variable.scss only import at one place.

Form getFieldDecorator Form.Item 没法和 React hooks 共存。所以表单验证手写比较好

message：请先登录 code：11001 重定向到登录界面即可。

pragramatically routing

api 和 official-api，在前端上需要做什么区别对待吗

antd Form + React class vs React Hooks

普通话在阻挡我的事业发展吗，我都 25 岁了还有办法改善普通话吗（有一点就是大胆说，就像练习英文原音一样从基础抓起联系声母韵母鼻音平舌音翘舌音后鼻音），
https://zh.wikihow.com/学习汉语（普通话）
而且我方言也说的不标准，只会一丢丢我老家的方言（这个直接放弃不用理解不用记忆说不出的话直接用普通话或者英语来代替）

还有就是我要挽救我的五音+乐感，唱一首歌要抓稳节奏的快慢停顿加速还有音准的变化，都是很有规律的要看作曲了
https://zhidao.baidu.com/question/103998547.html
https://zhidao.baidu.com/question/918097130944419459.html?fr=iks&word=%C8%E7%BA%CE%CC%E1%B8%DF%D7%D4%BC%BA%B5%C4%C0%D6%B8%D0%3F&ie=gbk

我要低调做做聪明人，高调做聪明事。

穿过漫长的黑暗前方就是黎明，我是一个聪明人，虽然我一年级的时候普通话没学好那时候脑子特别笨，数学考 7 分还嘲笑别人考 0 分，语文更加差但是我不放弃。
而且完全没有乐感，就跟个乡巴佬一样完全不会唱歌，你说一个普通话都说的不标准的人唱的出国歌吗。。。但是我 20 多岁还可以补救，因为我一直在反思自己的条件

英语口语
还是得坚持每天早上听一曲 TED，早上听效果要比晚上听更好（早上的记忆力更好理解力更好口齿理解力更强咬合度更好）

vuex-mapState 的 user、userInfo、systemSettings 采用 React-context 来实现

https://overreacted.io

https://tech.antfin.com

Rxjs 实践

json-to-pdf js 单文件原生包

这周末加班两天把官网所有东西重构完毕，而且周五之前需要做好许多东西。

脸上这 3 天来一丁点水都不要沾，一定一定不要沾

SDK：：

https://docs.xinyan.com/docs/pc-sdk/sdk
https://www.jianshu.com/p/cc49dbe56b78

去除脂肪粒https://jingyan.baidu.com/article/5225f26b10ac6ae6fa0908a4.html

痣千万不要再扣了，已经扣了一个了不能再扣了让他自己脱落。再扣就断子绝孙，明早就可以正常洗脸了

iOS9.2 以下低版本暂不支持一键授权。

回家也可以发版的，所以说发了一个环境之后没问题就回家等网关爬虫那边切环境之后跑批没问题的话，再等网关爬虫发完版之后我再发版。

整理一下 typescript + react + scoped-scss

antd-table 表格样式统一改成 UI 图，1.8 漫游分析 column 固定 width

社保的短信弹框在 iPhoneX 上样式不对，而且短信验证码错误没有提示出来，没有 msgToXinyanApp 过。

上线后需要更新文档https://docs.qq.com/sheet/DYllXSFBub0pWSnRi?tab=BB08J2

antd-build/utils.js less modifyVars text-color

call_service_detail 有数据的

https://docs.xinyan.com/docs/qzh5?token=jhqbrm8neXlb

portraitCarrier suspense loading

react-hooks 好卡

react-devtools crashed？

是这样的：

因为用户点击左上角返回关闭了淘宝一次验证授权登录页（无论是从前端还是后端我们都无法检测到用户关闭这个淘宝内部页面的这个动作）之后，点击我们 H5 页面的 跳转到淘宝 app 确认按钮，实际上是用 taobao://该地址去打开淘宝，正常来讲用户没有关闭淘宝一次验证授权登录页的话是不会有任何问题的，可以一次验证之后再进行淘宝二次验证，但是像视频中的那样的话，原来的一次验证页面被关闭了，就没法再次打开这个验证页面（强制打开的话淘宝会显示二维码失效请重新扫描所以我们采用 taobao://的形式）；但是一次验证页面被用户手动关闭后用 taobao://去唤醒淘宝 app 的话，我们的 taobao://就会被淘宝转换成 http://，淘宝这时候通知用户要使用外部应用来打开 http://(选择浏览器的话，浏览器默认搜索引擎百度会去搜索 http:// )

我们最终想出的最好方案是：
在我们小对勾的页面出来的时候，二维码下方文案增加一些：

请不要主动关闭淘宝 app 的一次验证页，否则再次返回本页面需要重新刷新页面后刷新二维码即可重新授权。

表格文字颜色，内容背景色，表头背景色

anchor affix 位置只能固定成 500 嘛

登录页 记住用户名 checkboxelement 类型错误

工作时别人叫你要第一时间回应一下

serverIP 在正式提测之前需要更改。

react-router children 需要花点时间研究一下，不过有没有 children 都一样没什么区别，/user/userCenter 也一样

https://levelup.gitconnected.com/ultimate-react-component-patterns-with-typescript-2-8-82990c516935

nginx 404 try_files $uri

分页 Pagination 定制化

rewriteAntd.css reset.css

点击适用 要做

数据源 logo

点击刷新二维码的时候可以判断是轮询还是重新创建任务 通过在 Loading 页 compentWillUnmount 加上一个 sessionStorage.setItem('loadingToken')

登录按钮 Firefox 点不了

https://stackoverflow.com/questions/14425568/interface-type-check-with-typescript

[at-loader] ./src/api/fetch.ts:40:24
TS7017: Element implicitly has an 'any' type because type '{}' has no index signature.

const temp = {}
const temp: GlobalObj = {}

分页跳转

每个页面做到极致，所以排期上需要自己多给自己小组多分配点时间

pageHeader 里面的数据源列表有时候变色有时候不变色。

搜索框做到单一条件查询，只查询 queryStr，其他参数都不传。分页的时候不传 pageNum 也是一样的道理。

报告 Modal 的宽度占据页面的 85%

Request URL: https://qz-uat.xinyan.com/official-api/front/dictionary/get-dictionary?dictTypes=1007&_=1551918909955之后再更新。

没刷牙没洗脸没洗澡没洗脚没洗头的日子真难受。。。

HashRouter BrowserRouter
以后抽空找运维配置一下 qz.xinyan.com 改成 BrowserRouter

const topSearch = (queryStr: string) => {
setQueryStrOnce(false)
location.href = `/#/dataSources?queryStr=${queryStr}`
}

useEffect(() => {
const queryString = getObjFromUrl().queryStr
if (queryString && !queryStrOnce) {
// sessionStorage.setItem('queryStr', queryString)
searchDataSources()
}
return () => {
setQueryStrOnce(true)
}
})

npm config set unsafe-perm=true

node -v
npm -v

npm install --registry https://registry.npm.taobao.org
npm run build

日期控件汉化有问题。

有些逻辑必须在请求成功后才进行。

微信浏览器 safari taskId 不能重复的问题，我目前想到一种需要后端配合的方案：后端提供一个接口，前端用户在微信浏览器内刷新二维码的时候就去调用该接口 setTaskId，记录一下 taskId；在同一个手机的 safari 浏览器上刷新二维码之前就通过另一个接口 getTaskId 去查该 token，
有没有在微信浏览器打开过，如果有就调用 requestEndTask

两次请先登录已解决？

italent2018 下半年绩效填写：http://www.italent.cn/118546624/UpaasHome#widget%2Fitalent%3FiTalentNavId%3D163%26iTalentFrameType%3Diframe%26iTalentFrame%3D%252F%252Fwww.italent.cn%252Fmenuroute%253FmenuId%253D163%2526roleId%253D

如何做出一个新功能引导对话框流程 UI（跳过、上一步、下一步），怎么确定用户第一次打开后

任务历史 客户报告 报告横向滚动 Windows 上有兼容性问题，滚动不了。

线上 bug 问题需求人和测试人都填自己比较好

任务历史 detail 接口和 isLogin 接口都报错请先登录？

1. 右下角回到功能按钮无法点击及右上角 pgf 下载无法点击

2. 1.4 社会分析摘要 近 3/6 月联系次数最多的归属地，与接口返回地区不一致

3. 1.6 活跃分析摘要 通话活跃天数近 6 月与接口返回数据不一致

4. 2.2 详细统计 样式设计不合理，无法同时查看数据与导航栏

5. 2.3 通话时间详细统计
   时长在 1min 内的通话次数近 3 月均，与接口返回数据不一致，
   时长在 1min~5min 内的通话次数，近三月均与接口返回数据不一致
   时长在 10min 以上的通话次数，近三月均与接口返回数据不一致
   白天(7:00-18:00)通话时长（秒），近 3 月均及近 6 月均报告页面不显示
   夜晚(18:00-7:00)通话时长（秒），近 3 月均及近 6 月均报告页面不显示
   白天(7:00-18:00)通话次数，近 1 月，近 3 月，近 6 月，近 3 月均，近 6 月均报告页面不显示
   夜晚(18:00-7:00)通话次数，近 1 月，近 3 月，近 6 月，近 3 月均，近 6 月均报告页面不显示
   本机号码归属地通话次数，近 3 月均，近 6 月均报告页面不显示
   本机号码归属地以外通话次数，近 3 月均，近 6 月均报告页面不显示

6. 3.1 风险统计 所有报告显示都没有显示近 3 月均，近 6 月均

7. 3.2 稳定性 所有近 1 月，近 3 月，近 6 月，近 3 月均，近 6 月均报告页面全部显示错误

8. 4.1 通话活跃 无呼出天数，近 3 月，近 6 月均报告页面无显示
   无通话天数，近 3 月，近 6 月均报告页面无显示

https://qz.xinyan.com/#/portraitCarrier?apiUser=8150725022&apiEnc=8aa53097e4f1133a91bd249c8da8f7f5&token=9d174095-991b-4712-81bf-7ce3a91feb12

10.b3c2335a955d72a805b4.min.js:57 Uncaught (in promise) Error: Supplied Data is not a valid base64-String jsPDF.convertStringToImageData
at Object.t.convertStringToImageData (10.b3c2335a955d72a805b4.min.js:57)
at Object.t.addImage (10.b3c2335a955d72a805b4.min.js:57)
at 12.504a0cf81a9f0f738fcc.min.js:1

官网页面关键字和描述

周一胖红，你看看 beforeDestroy if (formType === 'loading') shallowReport({ formType: 'loading' }) poll()

商户号： 8150730125
账户名： fanglindong@163.com
您现在可以登录新颜科技开放平台：
登录地址： https://open.xinyan.com
登录名： fanglindong@163.com
登录密码： 640899

上线文档https://docs.qq.com/sheet/DYllXSFBub0pWSnRi?tab=b7jegq

社保 H5 点击不了

大乔

爬虫 H5：去除无用变量

运营商 公积金 社保 信用卡申请 loading 页刷新问题

重置密码组件中间切换的特别慢，空白页等待较久！！

short502 应该恢复按钮正常状态！

2019/03/27

技术能力，沟通能力，综合素质，职场素养不合格，项目管理能力不达标不适合当组长。留在公司会使得一颗老鼠屎坏了一锅粥，离开是对双方目前最好的选择。

手上的爬虫前端项目交接正常，正在整理交接文档，和上级领导沟通过了，爬虫前端组成员已经较为熟悉项目了。

模拟一下 async await

pdf 下载按钮兼容性问题修复

对接文档里面要涉及业务介绍，代码结构介绍，主逻辑介绍。

手机版后台框架搭建封装好公共请求，公共登录模块，以及登录页面登出功能。

qz-h5 代码添加注释并做优化，
qz-front 代码添加注释并做优化。
跟他们每人过一遍项目的每一行代码

jenkins node 环境配置并且改一下脚本配置，写一些脚本其中需要加入 npm packages cache，进行增量安装！

devops bin_zhang@xinyan.com baofu@525

auth、settings 必须做重试机制，这两个接口 502 的话页面交互没法继续。

全知后台生产账号：：

15900578770 w123456

http://10.1.71.110:8081/#/smsCode

安卓 input 输入框点不动问题。

25 21
26 21 27 21 28 22 01 22 02 10-21 03 10-22 04 22 05 21 06 00 07 23 09 11-16 11 21 12 22 13 00 15 21 18 23 19 22
20 21 22 21 24 10-19

16：12：23
16：13：00
16：23：55
16：24：25

1107603

兼容性测试时机，以及覆盖程度

UI 问题应该提测一开始就统一修复好

重构时间到底多长，什么时候定下来，应该是在 UI 设计图完全确定下来的时候

产品文档

API 文档，swagger-ui 接口文档

运营要跟踪用户，分析用户；不能只是反馈 bug，反馈问题

15821685642
15821685642
15821685642
这么难记的号码我居然记得住，我不去想应该会很快忘了吧。。。我 1 天之内必须忘干净

10.1.71.241-244 BF4000000 123456 BF

# angular && ionic

https://angular.io/guide/quickstart
https://ionicframework.com/docs
https://www.google.com/search?q=ionic+scratch&oq=ionic+scratch&aqs=chrome..69i57j69i64j69i59j69i60l2j0l2.8312j1j1&sourceid=chrome&ie=UTF-8
https://dashboard.ionicframework.com/welcome
https://ionicframework.com/docs/components
https://www.joshmorony.com/beginners-guide-to-getting-started-with-ionic-2/

全知前台生产、uat 账号：
1107603 hongchen_liu@xinyan.com admin123
dev 账号：
8013933867 hongchen_liu@xinyan.com

爬虫专用测试商户 1：8013933867
密码：038010
爬虫专用测试商户 2：8013933878
密码：423078
登录名：hongchen_liu@xinyan.com

新颜商户测试专用 4：1107603
新颜商户测试专用 5：1107604
登录名： hongchen_liu@xinyan.com;
密码：admin123

# latte

http://gitlab.sit.caijj.net/dashboard/projects

## workmate

公司利益是我们的共同利益，共同进步（行业、业务、产品、技术栈），投其所好

我和思佚、柳程、青松要保持共同的技术爱好

莫非、得意感觉有点像局外人了（他们或许更注重生活，而不是事业，他们只是将事业看做任务）

# yo 有问题先定位 1665

webpack-cfg 不要随便改，不然容易出问题。张贺是上海土著，记住这个事实。记住有一点，你是跟世界上所有人竞争（尽管你一直跟同事嬉皮笑脸，但是要一直保持最高效率）

# 减少消息打扰

4 个小时看一次企业微信（不要被女同事给色诱了，不要因为是女孩子就动摇内心），8 小时看一次微信

玛德，上班每时每刻必须带耳塞，对面做了个喇叭卧槽日了狗了
能不摘耳塞就不摘 zhai 耳塞；

青松比较注重职能单一，但是他缺乏复杂一点，比较考验脑力（智商）方面的技能。他其实除了 eventEmitter 和职责单一模式，其他模式不太会，还有就是我看到他写了 bfs 函数，我非常擅长各种算法和各种设计模式。

http://gitlab.qingxueketang.com/magicbi/magicbi_web/blob/feat/resource-v2/src/pages/resourcesV2/Model/components/ModelEditor/index.tsx

http://gitlab.qingxueketang.com/magicbi/magicbi_web/blob/feat/resource-v2/src/pages/resourcesV2/Model/EditPage/Content/Editor/index.tsx

ai 环境账号：gesiyi 123abcac

http://apidoc.magicbi.cn/doc.html#/default/%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E6%8E%A5%E5%8F%A3/selectDataMigrationTaskPageUsingGET

**柳程很聪明，但是缺少自制力，需要我来协助他推动需求的完成进度。**

老板要给我涨工资了，我一定要更加努力，做出更大的贡献，哦耶~

柳程你刚刚跟我讲了句「你以为我跟你似的」，是因为我之前讲的「你代码不要随便动」，我觉得吧不至于这么回复
你跟我这么说，那我下次也这么怼回你（假如你下次怼我或者诬赖我的话）。

我看旁边的阿旅科技吃饭时特别团结，居然是一起在同一张桌子上吃饭的（真有趣真团结）

我以后吃完晚饭不休息了（吃饱了继续工作，发现其实是特别享受的：稍微休息下其实就可以的）

# 我爱工作，工作爱我

下次让海梅测试之前，我们自己先在 test 点几下 😂

善用数据源、大屏、报表以及其他所有地方的左侧边栏（菜单栏）的搜索栏，可以提升键盘效率

模型更改、报表更改、大屏更改后要保存（要不然有问题，容闹出笑话，同事会笑个不停）

二面最好是现场面，所有一面让青松来面；简历只下载到公司电脑上，因为自己的电脑电池完全坏了，脱离不了插座。

快捷返回 report-list、scenery-list 的办法是点击顶部菜单。

电脑只设置一个自动加入的 WIFI

思佚和陈锦非常有可能不打算在上海买房，为了大家的未来，为了公司早点上市，为了大家早点成为百万富翁，一定要珍惜在一起的时间，特别注重办公效率。

每天下班之前交代工作百分比进度，然后每天 9 点 18 或者之前必须下班。每天晚上 10 点 40 之前必须入睡--实在不行就听一首爸爸妈妈就好了，眼含热泪入睡就好了。

柳程这厮有时候我发了 2 条消息竟然 1 条都不回我，那我以后也这样对他，不想浪费我的时间，我可以多写几行代码。

我们旁边那公司的姑娘一直打喷嚏，搞得我好害怕，唉，还是把口罩戴得严实点

# 为了周一到周四代码写到尽兴，和 boss 他们一起加班到 10 点半就赶紧撤（一定要骑车回家，骑完车立马洗澡，洗完澡躺下就能睡着）

我的大脑只有两种状态：睡觉+稍微休息+异常活跃（上班写代码，思考中）：代码脑

WIFI 本地 ip： http://192.168.1.109:8000

主动跟思佚汇报需求进度。

坏孩子喜欢暴力喜欢霸凌，柳程喜欢无厘头搞笑，而我都只需回以沉默，便可制止一切，我最喜欢的还是无穷无尽的前端代码
得意对陈锦说：你很有想法，不愧姓陈；

没有思佚吵我，我可以迅速完成需求~
看着柳程他们后端一起完成很多东西，很爽，对我来说很有激励作用
洗完手后一定要把手擦干，不然感觉粘粘的特别不爽。
从离开工位下楼开始，到拿完外卖回到工位感觉需要 4-5 分钟；

思佚热点：男神的热点-1030hongmeigui
公司公用 WIFI：MAGIC_BI magicbi1234

为了花更多时间去写代码，merge request 对于我来说只限定于 featBranch 到 testBranch

张贺在工作上很自觉，比较正经，但是需要花更多时间来写代码，另外的话需要多学一些让自己变聪明的技巧；
现在，敏哥好像也不一定会给我们加竞业限制金吧；

# 团建

每次团建，建议得意在每日优鲜上买冬枣、洛川红富士苹果或山东烟台栖霞红富士苹果、徐香猕猴桃、库尔勒香梨、

企业微信，不要关注别人已读还是未读（一对一还好，群里一对多时我觉得这个功能对我来说没有任何作用，压根不在乎）

每晚 10 点 20 下班，有可能除去中秋节当天和农历除夕过年回家
我要把百分百精力放在工作上（除去睡觉、吃饭、休息（洗澡、刷牙、泡脚、远望））
为了缓解骑车路上的无聊，我一般会选择听书或者听歌（我喜欢的，符合我心境的歌其实特别少）；

交叉表底层我还是没怎么接触，感觉特别愧疚，我必须精通公司可能用到的全部前端技术；

能影响到我生活的消息就几乎没有一个，好像就是公司又招进了前端组员进公司了，老板给我涨薪，加工资加期权；脑袋里不能有任何负面情绪；任何负面情绪都是非常影响工作效率的；大部分 msg 都是耽误我的宝贵时间，所以可以完全屏蔽掉的。

我应该把大部分时间花在 coding、思考上面去，记笔记只占少量时间。

看任何 YouTube 视频其实大部分都是没任何用途，占用你的大脑空间，工作效率低下涨不了薪，给公司提供不了足够的商业价值。

以后不用把力气甩在手臂上，要不然又要破口了。

我一定要证明给别人看，究竟是一个人内在更重要还是外表更重要，我想当然是内在更重要，重要 1 亿倍。

紫琪、莫非、得意，台风那天请假了，怕走在路上会比较危险？(老子就相当不服，我就不信我搞不赢他们这些懒人，我肯定要做出相当漂亮的工作业绩。所谓的在家办公也不知道任务量到底是不是降低了，大概率是完全降低的)

# 跟老板的谈薪筹码

我承认我有时候状态不太好，可能是心态不太对不够自然放松且认真不够专注，但是这并不动摇我会一直提升自己的决心
我比我们同组的前端同事，写了更多的代码（和青松差不多吧）
我一定且必须相信我长期认真的付出，会换来理所应当的回报
前端要写很多代码，要封装很多东西，涉及到许多完美的设计模式，数据结构、算法（然后好的前端的招聘成本比较难）
没有我的自觉带动，我觉得思佚陈锦做不到这么自觉，他们有时候比较喜欢摸鱼（之所以会摸鱼是因为身体需要一些放松，为什么身体需要一些放松是因为身体缺乏一些日常锻炼，不像我这样天天骑车））

工作时最大的动力是来自自身，而不是音乐；解决问题的能力来自于自身内心，而不是任何其他形式的东西。

前端代码量是后端的 10 倍。所以我肯定是没有空去写摸鱼的，我只能一直摸键盘,+远望（休息一下眼睛，放空大脑）。

敏哥问午饭怎么搞，有没有点外卖，反应快一点（1 秒内回答），就说点外卖或者出去吃

每天面对 IDE（vsc）（写代码时），我必须相当专注

我现在 174 的身高，体重必须控制在 134-138 斤（不多也不少），买把称，每天骑车过来上班时称一下体重

只要给我足够的水、营养素（足够的蛋白质、维生素、纤维素）我就可以一直加班一直加班，一直干一直干。

咳嗽会传染，张贺的咳嗽已经传染给两个人了，我还是每天都戴上口罩吧，我也不知道他什么时候会咳嗽，太可怕了，一旦坐在办公桌上就戴上口罩。

我感觉阿里员工还是很难挖的：要是我在阿里，敏哥如果想挖我，那我就开个条件：千八股票、月薪 3 万 8：你们考虑一下如果能满足的话我就立马过来，想从阿里出来的人，一般手上有两个大厂升级加薪的 offer 等待选择，还有两个中厂（千八股票、月薪 3 万 8）的备胎 offer。

我知道，思佚头脑里的前后端写代码是这样的：copy 来 copy 去，这两天有个新需求，你把之前各处的代码到处 copy 一下，组装一下就好了。
怎么讲呢，技术方面和你没法沟通

每个工作日 9：20 离开工位

我必须保持住一个习惯，经常看时间，这样能提高不少的工作效率。每次听红日只听 1 分半。

工作忙时，所有时间主要是花在工作上，写尽量多的代码。

以后还是坚决不打车了，除非下特大暴雨（要不然没什么是雨衣、拖鞋、伞解决不了的事情）

工作上我一定要拼尽全力，效率全场最佳。

一直在工位努力努力工作，远眺也在工位，除非接水+上厕所；

我们公司的曹世昌，能和葛思佚聊的来一些，应该是不太想跟我接触，眼神都不想接触，那行我成全你，我要做到无敌（你这样的，千万别打扰我）

美团点外卖，用招行储蓄卡可以减 1 毛钱，每次都可以嘛？每次都可以的话，那我就每次都用招行储蓄卡支付

我就是一个特别冷淡特别冷漠的人（对待任何人都是，脑中技术至上），别跟我说吃，别跟我说吃烧烤我不喜欢吃烧烤

张贺清华同方显示器的连接线一直要记在心里，是我的财产。

使用频率低的场景下的 bug，可以往后推（不管优先级如何）

陈锦和思佚在 2021.09.16 一起出去吃饭了（应该是烧烤，他俩是要确定去杭州了）

思佚肯定是觉得我和柳程都不太喜欢，那好，我和柳程还是可以合得来的，我一定做到工作效率最大化，卷死你们，让你们感到最大的压力。

一件事情上只能花一定或少时间

（奇数周：南赐=》青松=》张贺=》南賜，偶数周：南赐=》张贺=》青松=》南賜，每周一在群里会发个消息公布 review 顺序）
如：这周是奇数周，review 顺序为南赐=》青松=》张贺=》南賜

嗯嗯，我来负责吧，要同步到 ai 环境的话发在群里就行，我负责 mr 柳程构建部署，我应该不会 review 代码的，咱们已经把 review 流程提前了

每周一更新群公告，群公告规则里的每 1 条牢记在心，所以每周一都会看 1 遍

咱们最好开个会，柳程刚刚和我讨论了下，我们开发和测试也要同步一些规范，关于 dev 和 test 分支的同步问题和有效限制代码提交频率问题，前后端开发和测试流程问题，最好和思佚，海梅，柳程，明天新来的测试妹子开个会，形成规范文档，总结一下共同遵守，还有陈锦

一定要用技术水平、代码水平、积极态度、协作水平、沟通水平、技术管理水平来证明给大家看，来影响他人，给大家带来无比的正能量,提升公司整体的办公效率。

联调时，只要不是阻碍性的后端 bug，我都会先记录下来，最后自测完（我一个人联调）一轮再集中反馈给后端（最大化节约时间，用来写好前端代码）

S 楼扔垃圾的时间点是，早上 9:30 扔到大楼门口，然后下午是 15:30-17:30，扔到浦软大厦东侧垃圾回收点。做好干湿分离

我知道我们公司每个人都相当讨厌我，但是我就是这样的一个人，没办法，我就是这么活的。我掉头发肯定是一直掉头发没救了，那我就只好破罐子破摔，一条路走到黑。

思佚，生活方面的聊天我肯定是不会跟你们聊的，我只在乎技术。我不清楚思佚、陈锦怎么沟通的，反正我依然坚持做我自己，，这个是会一直坚持下去的。

为方便周日加班，周六不加班的话一定要留公司。
必须每天下午 3 点半（上午 9 点半）准时倒垃圾。

上传图片参考 Background-Image 组件

工作进入状态时，一定要把他们保持住，投入到表格、交叉表的底层工作中，投入进去。保持住深入思考的状态。

跟思佚说下，drag 菜单时，如果没有子菜单了，那么当前菜单会变成没有内容的菜单。

# 沟通成本

## 沟通工具

为了减少沟通成本，不要在 test 环境更新代码（没这么快上线的话连入口都不能开放，以免造成误会），只能合并到 test 环境。
企业微信超过 5 条消息的话再去看。。。减少沟通时间成本。
柳程这个小伙子，比较有自知之明，我很欣赏（都是乡村来的小伙子）。我们要一起努力一份好好奋斗。
张贺又请假了，我嘞个去。（前端代码开发、维护、管理还是得靠我一个人，靠我自己）
上线日第二天上午，没说封板的话不要往 test 分支合并代码。
办公室的门，打开了就一定不能关闭（考虑到办公室里，正常上下班的时间，一定有人在办公室；而且也不会有人去关闭大门）
QA 没有仔细看需求文档，提出了不是 bug 的 bug，这时候把 bug 指给她自己或者产品经理。
中午 12 点 00 准时拿外卖，12 点 30 准时睡觉（不能在这个之前）；13：00 准时开工。
柳程经常找我摸鱼，好烦哦。（开启自我世界模式）
拒绝柳程的一切骚扰，我在忙在改 bug。
20 条以上的企业微信信息才去看。
有许多 bug 要解决的情况下，需要等到 200 条信息才去看
ip: own mac 192.168.1.26,company's computer 192.168.1.25
worktitle-bug 工单最后方会显示是谁创建的。所以以后完全不用看活动记录。
我以后要早点下班，早点来公司（04：05 起床 22：00 下班，尽最大努力只限定于这个区间，而且每天都是如此），保证好自己的身体健康的同时，也保证了同事的身体健康。
柳程这屄，又是一个已读不回。好的那我以后也‘已读不回’，以其人之道还治其人之身。感觉跟陈锦当面说话可能有时候需要说两次（好像他耳朵不太好使）
一看到得意进来，我就知道我该撤回消息了。
完全投入到工作中来吧，刚放完假又回归到工作中了，真开心~~
每天晚上 18：45 开始写代码。
想听歌的时候，用手机听就行了。还有更多可选择性，可以听一听自己唱过的歌
以后每次有人过来我这，就跟他打声招呼，起码要问候一下）
只有修复好的 bug 标为修复中，最后统一部署好了自己验证通过所有 bug 的话，同时把所有修复好了的 bug 标记为待测试
睡午觉时，手一定不能麻痹掉，必须防止，对健康不好。
写代码时，必须条理清晰、思路清晰
这段时间（20 年）一把游戏都不玩：看文章看视频都可以加强自己的专业知识，完善自己的世界观。
诶，青松根本不按照 merge 顺序指派给张贺，是瞧不起张贺吗？我忙着去写交叉表 sourceCode 和吃透设计模式和各种前端算法，吃透 js，吃透 js，吃透 react（recoil）

如果想实现给报表页面的所有 queryChartInfo 请求结果加上缓存功能，依据总的图表数量给缓存池设置大小（比如说某个报表有 1000 张报表），那么缓存池存放的报表页面数就会减少

大家有什么想法（脱离 dva)

有时候硬骨头必定还是需要我自己来啃

看看我的居住证什么时候到期。。（找不到了），还居转户？（真可怜），只管拼命赚钱和拼命工作（除了生命健康，其他都不用管）
popupClassName='portalTopPopupMenu' 用在 styled-component 的话会使其失效

menu-onOpenChange（hoverTrigger）。会有闪烁问题（openKeys 受控带来的弊端）

优化类 bug（思佚提的，也很重要，一定要解决掉）：2094

# 柳程

360 很强大
中国科学技术大学的语音识别
浏览器在忙着渲染时，鼠标会暂时失效，处于不可交互状态（任何交互都不行，不能移动），渲染工作结束后，一切恢复正常

切换同一个报表的不同页面，切换失败。

添加菜单内容时，页面自动缓存和默认门户打开页自动反选

在 3 下，添加一个 4；添加 3-2，再添加 4，出问题了（自动缓存功能反选，默认门户打开页也有可能反选）。

对切换布局，更改菜单具体设置的数据流理解

顶部菜单要有高亮和选中的样式（还是 click 触发）
Menu 组件缺少 onMouseLeave，onMouseEnter 选项（subMenu 和 menuItm）

test 环境验证一下 bug2110

添加子菜单后，右边 selectedMenu 切换到父菜单了，应该保持不变。

右侧切换无内容叶子菜单，在父级添加子菜单===》左侧菜单选中了内容菜单，但是图表区显示空

totalNodeTxt 设置成’汇总‘。??ali-react-table 好像做不到

普通表格的高级版携带参数的链接跳转就是高级版的外部输入联动条件的图表联动功能？

果然，如果我的折叠床被收起来了的话，就是代表有投资人马上就要过来了。

户口本找到了，但是居住证还是没有找到。

fix bug 时，为了提升修复速率：修复 bug 时不用关注 bug 的增减（只需知道当前 bug 的），在 bu 列表一个个点过去就好了，修复完后不通知（QA 自己会看 worktitle 消息）
绝不和任何人扯皮，只讨论跟技术相关的东西。

现在主要瓶颈在于前端开发~所以我一定要努力努力哦，加油加油哦

每个迭代的 bug 修复情况：
fixed：bug 2125 2133 2122 2123 2128 2139 2131 2132 2133 2134 2135 2138（指派给思佚，跟思佚说一下这个本身就不是 bug，完全不需要修复） 2137(去掉灰色和白色边框的话会显得过于紧密？) 2143(目前的交互是符合 antd 组件交互规范的，目前的中间菜单点击行为是整体性的，中间菜单没有 selected 状态（所以说中间菜单没有选中不选中这一说，只有展开不展开这一说），只有 expanded 状态，和叶子菜单区分开了；左侧正常菜单 Menu 的交互规范和右侧菜单树 Tree 的交互规范不一样) 2124 2126(notFixed；不要指派给思佚：这里只是编辑操作，默认折叠好像确实有问题，select 还是 expand 操作触发 dftSelected 变更) 2127(notFixed；左侧 selectedMenuItm 没有高亮效果了) 2129/2136（2127 先 fix 掉再 fix 这个高亮颜色不对的问题） 2130（notFixed；）2140、2141（可能没空看没核对，没 fix） 2143（不是 bug，不用 fix）2144(应该是修复了，再校验一下)

再买一手 3.80 亚泰和药玻；
defaultOpenKeys 分支好像一直没走
顶部菜单只能有一个 menuItm 是 selected（subMenu 不能被 selected，只有 expanded 状态）。
有个 bug：左侧中间菜单展开时，应该设置为[selectedK]:编辑时的中间菜单 selected 状态和 dftPortalLeafMenu 。dftSelectedLeafMenu 冲突，所以做不到左侧中间菜单的 selected 状态
招人的话需要成本，我们老板比较看重这点。我可以感受得到。所以我必须特别优秀，以一当十，这样的话我们公司发展的特别好，我也能实现亿万富翁的梦想。

顶部菜单的中间菜单没有 selected 状态

双导航：点击顶部菜单一级菜单时，怎么切换顶部菜单和左侧菜单（和右侧菜单设置区的点击切换行为冲突）
怎么以最快速度靠近我的理想。

频繁跟思佚、陈锦、柳程、有朋、一心、敏哥讨论产品、业务、架构和技术。
完全理解好目前我们的 BI 业务，BI 前端框架搭建，BI 前端工作分配

**3.14159 26535 89793 23846 26433 83279 50288 41971 69399 37510 58209 74944 59230 78164 06286 20899**
接下来，2 天面 1 个人吧。。。
新的联动场景：普通表格或者其他图表上点击后跳转到其他标签页的（通过 URL 传递吧，5M 的 localStorage 存不下来：设置 10000 个图表的联动跳转场景）。
model（name，code。search）。model 有 selectedField
全局参数:链接跳转，postMessage 参数传递；页面设置-新设置
是否需要 addModel;allCanRelatedComps;allCanRelatedModels;

https://www.ruanyifeng.com/blog/2021/07/weekly-issue-165.html
https://juejin.cn/user/3491704660305111/likes
https://overreacted.io%20http://iamsujie.com/
https://www.one-tab.com/page/IyjiviQMQU2Bj0IBfE6Evw
最近再也不面试了，没空面试的（一两个礼拜都不面试了，不知道周欣怎么样，可能是他开的工资太高了，或者要求的期权、职位--leader？？太多了;）
双十一：买阿迪帽子、那双鞋子和那件衣服；丢掉一些不喜欢的衣服、鞋子、裤子。找到居住证。

前端改动特别大，确实很有挑战性，但是 sorry，我肝不动，心力有限。这个答案在第 108 层循环里，但是我没有力气走下去了。

投资方把钱打过来，每天最多打 1 万（他们那边，由于政策原因，限额了）。

这周为了把国药所有需求弄上线，必须每天 9 点 50 准时下班，11 点 05 之前睡觉，稍微刷刷牙泡泡脚（只占用很少时间），2 点 05 准时起床。

周四早上 10 点之前提测所有国药前端需求（我手下的）。-----考验我最强执行力的时候到了。
3 点 15 开始写代码，一直写到 21：50 准点下班；[['1']] 以后一直这样干（中午不玩游戏，也是忙着最大化理解公司业务、前端项目）

上海到江西需要核酸证明吗 江西到上海需要核酸证明吗？？（都是低风险的话都不要，否则只要有一个省份含有中风险地区，那么就很有可能从该省份到任何地方都要做核酸证明）

回家后第一件事是把两件衣服给缝好，然后洗澡。

我这段时间眼里只有工作，不断地 coding，coding，coding。

怎么一次性让全局参数对所有图表起作用，改动代码最少。（可以添加全局参数的图表就是可以被联动的图表）

放松、快速高效深入思考并 coding（执行）。

选择跳转资源时，querySceneryDetail 接口的 isPublish 参数的影响面？
最强火力全面爆发。
花 1 个小时修复 react-images-viewer 的所有 issue（自己尝试 TypeScript 使用方案并分享在 issue 当中）。

localStorage 存储全局参数（前端可以搞定吗。暂时可以搞定，但是需要继续优化，后端提供接口）；怎么从读取

普通表格携带全局参数跳转到柱状图。。。
11 月 27 日取消网易云会员。
retMessage: "筛选器【列表筛选】method 标签不能为空！"
同一个模型下的所有图表会使用同一个全局参数

# 对称条形图

## 分组

## 堆叠

图例维度？？

ModelSetting 参考哪个(ChartDualAxes)
11 月 8 日，骑车戴手套。
11 月 18 日请假去参加叶倩红的婚礼（11 月 3 日 14:30、4 日 15：30 购买车票 T25、T78）。
NormalChartViewData
formatChartsViewData
yFieldFormatted 只用在 tooltip 上面？

formatChartsViewData 的 prefix、yFieldSuffix，有个屁用？加上$$$方便 chart 视图层取数-值？
我今晚必须证明好自己（一晚上提测 3 个大需求）。

08:50 对称条形图开发 100%（支持下钻联动，暂不支持多度量，没调研到多度量案例）并提测；iframe 组件 50%， 饼图轮播 100%（支持联动）

x(y)AxisOption 设置有问题。。
对称条形图开发完成。
两边的 fill 怎么控制
xAxis 的 position 要控制一下，去变换

饼图的轮播联动最后完成。

https://www.bilibili.com/video/BV1XP4y1L7xL?t=0.3
https://bilibili.com?t=1
http://magicbi.cn
http://localhost:8000/#/report/view/1447179536654233600?tabPageCode=a808-9c45-afde-c5d9&jumpFilterParamObj=%7B%22%E6%9C%AA%E5%91%BD%E5%90%8D%E6%8A%A5%E8%A1%A8-396-city666%22%3A%7B%22v%22%3A%22%E4%B8%B9%E4%B8%9C%22%2C%22code%22%3A%221326078475467636743%22%2C%22modelCode%22%3A%221326078403107504128%22%2C%22tableCode%22%3A%221326078475467636736%22%7D%7D

刚添加的组件没有及时更新 compList 到 PageSetting.tsx？？

携带参数跳转过去后，视频消失；能不能失去焦点后就让 Handler 符号出来（自定义组件操作起来不方便，因为大屏和报表布局第三方库不一样，所以关于这个细节的处理方式不一致，）

loding Icon（antd）+「MagicIQ」替换成「MagicIQ logo」
项目当中引入 s2.开始耍 shua 起来（电子表格）.普通表格和交叉表同步开发
给甩棍老板发一张照片，要求赔偿。
整理好第二天要丢掉的衣裤。第二天把垃圾都倒掉
对称条形图中的右侧 x 轴也不见了，右侧网格线也不见了
对称条形图两侧背景可以配置不同的颜色吗（建议去掉颜色配置项，跟思佚确认下）
门户 layerI 的 bug：http://localhost:8000/#/portal/edit?portalUrl=4314036495&code=1439050556239536128

减少用户交互次数--善于设置 select 默认选择项（配置主题，添加层级）
配置主题 modal 里出现了错误的 fieldData-种植面积（只在 dftJsonData 里面出现过）

国药、门户所有遗留 bug

主题设置存在一点（稍微有点间接哈）：
对称条形图的标签又不显示了；
那个每个图表后面显示。的 bug 我复现不了，是不是缓存问题。
动态参数不支持占位符。
对称条形图：realSlider
bug1000115 xAxis 设置不对? 跟 realBarStyle 没关系吧
对称条形图目前不支持缩略轴
对称条形图不支持联动了
每个大屏、报表中的图表右下角有个白点，只有云静电脑上可以复现
大屏选中组件后自动失去焦点。

[test-bugID10000061-大屏（跳转）](https://syzn.test.magicbi.cn/#/scenery/edit/144692961878233088)

全局参数跳转时还有 bug，下钻日期的年份数据没有携带过去
四级菜单被选中的话，初始化时没渲染出选中状态

默认门户页初始选中状态正确（左边和右边都正确），但是最右边的当前菜单内容错误。渲染的图表也是错的
http://localhost:8000/#/report/edit/1415519914528931840

顶部导航--淡雅黑时，子菜单的高亮背景色、高亮色不对。
双导航时，顶部菜单切换不了
更改完数据门户中间菜单的设置时，setMenuCfg 到第一个 selected 的叶子菜单了。。
保存后，重新加载到页面第一个叶子图表菜单了（dftPortalPage）

编辑页面的预览模式也在更改设置，退出按钮点击时：提示需要保存

http://syzn.test.magicbi.cn/#/scenery/view/1454692961878233088?tabPageCode=37b4-d582-d5a6-beb1&jumpFilterParamObj=%7B%7D

bug 【ID1000129】还没改好。。
http://localhost:8000/#/scenery/view/1458249504644751360?tabPageCode=776e-71d7-36e4-6f8c&jumpFilterParamObj=%7B%221ATTqooeAu%22%3A%7B%22v%22%3A%22https%3A%2F%2Fwww.so.com%2Fs%3Fie%3Dutf-8%26src%3D360chrome_newtab_isearch%26q%3D1688%25E9%2598%25BF%25E9%2587%258C%25E5%25B7%25B4%25E5%25B7%25B4%22%2C%22code%22%3A%221457608812947902466%22%2C%22modelCode%22%3A%221457608707956084736%22%2C%22tableCode%22%3A%221457608812943708160%22%7D%7D

www.so.com 将您重定向的次数过多。

监督新同学刘陈的进度。每隔 2 天监督一下，解决一下主要问题，每天问问他有没有疑惑。

双导航 一级菜单选

9:10 解决完所有国药 bug。

水波图是否有联动需求（只有被联动需求）

大屏编辑页面-顶部菜单的 icon 数量太多时

饼图的背景图替换下，不是甜圈圈图（环图）

Excel:柳程还有 bug（某个 itm 为 Null，导致查看宽表数据返回为空）

NLQ
表格跳转设置弹窗里面的切换 resource 逻辑还存在问题
大屏模型快照不存在的巨大 bug；全局参数设置弹窗显隐时，需要控制 initialV 的正确赋值（qiehuan 不同 tab 页面时）
12：00 完成 1120

zhex 保存-右上角关闭退出。。。。再进入，修改成一个维度，表格展示（保存退出，看到空数据的折现）

表格重复请求两次的问题。普通表格组件前端分页功能。
产品培训视频
11.28 领取当日流量

subModal 里面的 chartType 还是不对；改完所有 bug 后解决 npm login 问题

163

localStorage.getItem('contentPcObj')不断增大 （NLQ 编辑页关闭时直接 set curReportContentPcV = undefined in contentPcObj）
http://localhost:8000/#/setting/permissions/users/1460198408399421440

bug517,569,564(NLQModal);confirmedTokens 保存到 cmptNLQInfo 里面去（歧义词 bug）；

bug564,581，574,499,566,523,565(复现不了),555（脏数据问题，新版的 contructInfo 里面没有 queryStr，我复现不了，定位不了原因，不知道这条脏数据是如何操作出来的，不是版本兼容问题），543，567,428（保存后点击关闭不应该再次弹窗。）,532（报表不存在）,574(曹钢你看一下吧：https://www.tapd.cn/65245365/bugtrace/bugs/view?bug_id=1165245365001000574&url_cache_key=a70fe3d07ab37c28a77881a9c48071f5)，592（无法复现：https://www.tapd.cn/65245365/bugtrace/bugs/view?bug_id=1165245365001000592&url_cache_key=a70fe3d07ab37c28a77881a9c48071f5），430，587，560(https://www.tapd.cn/65245365/bugtrace/bugs/view?bug_id=1165245365001000560&url_cache_key=a70fe3d07ab37c28a77881a9c48071f5)，576（https://www.tapd.cn/65245365/bugtrace/bugs/view?bug_id=1165245365001000576&url_cache_key=a70fe3d07ab37c28a77881a9c48071f5 轮播表卡顿）,(560 报表名称重复 https://www.tapd.cn/65245365/bugtrace/bugs/view?bug_id=1165245365001000560&url_cache_key=a70fe3d07ab37c28a77881a9c48071f5);轮播表格 minMax 问题；答案列表 Tab 样式修复；

565,
NLQ 编辑页关闭弹窗的取消功能？

提 bug 的报表、大屏、数据模型资源要做保存，方便开发在 test 环境复现，能查看到错误请求，并且不要删除该资源。最好有一个用红框标出来的截图，不要只是一句话，我定位不到具体出错点（比如说某张图表组件）

搜索历史接口里面的 constructInfo 还没有改过来
进入 NLQ 编辑页时，搜索框焦点没有处于末尾
进入编辑页请求两遍 searchChart 的问题
NLQ 编辑 Modal 频繁调用 getSearchHistory、getRecommendWords。

566(还是存在后端接口慢的缘故)。
残余的 RecommendNLQSearchRes 是不是要做全量替换;暂无数据 UI；

保存为答案后，跳转页面时请求参数有误？；点击左上角的关闭按钮失效了。

历史项当中存在混淆词（不给提示）。
轮播表偶现 bug：无法选中组件。

前端估点有误是因为没有给出前端代码设计方案、实现方案。导致估点错误。

二次确认

NLQ 编辑页切换模型-大屏模型快照不存在。

https://codesandbox.io/s/ji-ben-antd-4-17-2-forked-d2s4p?file=/index.js:732-808 (新建报表-三指拖动全选)；
https://ant.design/components/spin/

浏览器卡顿（死循环嘛）

自助分析编辑页一进去，点击关闭按钮都会弹窗。

国药 bug

本地开发热刷新或者刷新页面后，组件 一直莫名 loading（请求早就结束，没有明显 console 报错；localStorage-updateReportNotFinished）

构建提速 external、多线程构建

# 复制并编辑（把路由替换成/search history.replace( params data:curAnswerInfo)即可）

## 「添加至」

## 「编辑」

# 前端技术架构升级

记录和青松聊天的笔记： 去掉 umi、远程第三方组件、和前后端解耦一起做（）、前端 todo-list 不要影响到业务功能（新增模块、页面、组件）的开发

antd-pro umi 组件市场：https://preview.pro.ant.design/dashboard/analysis?navTheme=light&primaryColor=%231890ff&layout=mix&fixSiderbar=true&title=Ant+Design+Pro https://pro.ant.design/zh-CN/

紧急且重要的 长期任务：主持前端架构升级;

http://localhost:8000/#/report/view/1422440457521930240
http://localhost:8000/#/report/view/1469345690759737344
前端实习生的实习目标，点击左侧报表菜单项去切换时不起作用（本地 debug）
完成所有目标，填写周报。
预警模块需求评审（让天雨和刘陈一起做，我来提供指导、跟进、修正）
消除 umi3.5 console-sourcemap-warning；让天雨研究 umi-mfsu-OOM（reportModule、NLQModule）的解决方案；

找回 SelfHelpAnalysisConditions/index.d.ts

http://localhost:8000/#/report/edit/1466688125311647744

bug1000106 fixed? https://www.tapd.cn/my_worktable?source_user=1600235969&workspace_id=53183819&workitem_type=bug&workitem_id=1153183819001000106#&filter_close=true#&filter_close=true

选择资源的 tab 页面上没有设置全局参数的话，选择不了关联字段（就这样吧，「请在你选择的页面配置全局参数」msgInfo 提前，并且直接禁用掉关联字段的配置入口，把携带参数跳转直接改成否）;

自助分析之后的 area 保存错误（位置错了）;

在我电脑上的 test 环境上 NLQ 或者自助分析的字段双击没有反应，云静没有复现;答案组件编辑之后，是否保存过报表（添加至组件保存过，答案组件没有保存过）；usePersistFn 是不是被青松用烂了，我仔细研究下这个 hook;

组件很卡。setTimeout:50(updateReportNotFinished)

https://www.tapd.cn/tapd_fe/worktable/search?queryToken=3574ff444b87da54d742c06600726405&dialog_preview_id=bug_1153183819001000505
https://www.tapd.cn/tapd_fe/worktable/search?queryToken=56d831d0f961fca9159c83a46ee15246&dialog_preview_id=bug_1161504556001000773
https://www.tapd.cn/my_worktable/view_history
chrome-extension://chphlpgkkbolifaimnlloiipkdnihall/onetab.html
http://localhost:8000/#/report/edit/1415519914528931840

清除所有的 DevTools-sourceMap-warning。

before 14:00,scatter everything ok!!

熟悉各类不同分析需求的数据可视化组件的使用、了解原理
熟悉各类电子表格的分析场景、原理实现
有良好的软件开发意识、能力；效率最大化
熟悉常见的算法、设计模式，加以实际运用

删掉一些图表后保存再刷新又恢复过来了，似乎是受答案组件编辑功能影响（localStorage）

图表异常的文字色（和每个图表组件的样式设置-背景色反转）；

所有图表的 customSettings 必须要归一化 dimensions 和 measures，可以配置其他的。但是这两项需要归一化

报表预览页面的左侧菜单搜索过后，应该自动打开文件夹;
updateReport 之后为什么会更新其他图表组件（带有 exceptionLog 请求的表格组件都会在每一次 updateReport 之后调用）。。聚焦到其他表格也会触发；表格（本地开发时）还是会一直占用 CPU-99%；热刷新开始失效（有时候又不管用了，禁用掉部分路由）。
更改数据格式之后只需要发起一个请求 updateReport。
左侧的选中叶子菜单没更新，中间菜单的选中属性没有更新。(portal;menu)
22：00 所有 bug 解决完毕。散点图提测，数据格式化和交叉表新版排序确定下来
http://localhost:8000/#/report/edit/1415519914528931840
http://localhost:8000/#/portal/list

周二中午 12：00 到周四晚上 20：00，不要 push 代码到 test 环境。地图不会出现加载失败的情况，但是会出现加载不出来的情况（第一个默认数据，第二个有数据）

logout 401 改成 200.
"umi_build": "cross-env NODE_OPTIONS=--max-old-space-size=4096 umi build",

ai-oauth/token post=>get
请求中间变动过，getToPost。。
请求数据还是在 url 里面，应该只是放在 body 上。如果不设置 application/json,chartset=UTF-8; local,dev,test&ai (cookie)
umi_mfsu 开启后路由层面只开启首页和 report（+NLQ）页面，看看还有没有 OOM 问题

交叉表排序，联调好所有前后端解耦部分。

upgrade ahook to learn every hook.

504 很频繁

轮播表的实现方式更改

数据格式先做成简化版（只在 requestData 里面获取 style.dataFormat）；以后报表、大屏减少 queryResult 请求次数的性能优化时）再去弄。

交叉表排序、总计

$originName=》aliasName

交叉表排序和展开收拢不起作用

漏斗图默认按度量降序。

l7 地图组件需不需要更换。(开发之前的设计问题)

交叉表的排序、维值节点的展开收拢；地图渲染；散点图渲染；水波图渲染；这些还存在问题，需要修复好才能提测

前后端解耦耽误了 2 天左右的工作进度。主要原因在于交叉表代码改动较大（排序功能从后端转到前端，另外的话现在用的是 ali-react-table 偏展示组件，几乎无任何分析功能，新版电子表格的开发工作应该提上议程，要慢慢加新功能，和旧版表格交叉表的使用不一致，前端同学和产品同学要提前介入，了解 s2 的具体使用、产品架构。因为现在的普通表格、旧版表格满足不了我们以后更多的需求所以要开发新版电子表格），轮播表的改动较多（之前主要是兼职同学的代码，不合规范）；另外的话我还介入了加速需求、修改 BI bug 和指导新同学的时间比较多，面试耽误了一点时间。

insight 归因线调研；

周一中午去麦当劳 12 元中份薯条买一送一+免费麦麦脆汁鸡+芝香培根可颂（拿铁）+经典杯拿铁（泡芙）

趋势线 tickInterval(typ??)崩溃问题。（alternative：tickCount--tickStart(xStartV)??）

键盘用户使用轮播组件时，满足 top-right-down-left 的切换动作（加分项）

speedup-sql codemirror:编辑器（自动补全）、
https://knexjs.org/ https://hiddentao.github.io/squel/
https://codemirror.net/6/examples/config/

https://microsoft.github.io/monaco-editor/
https://github.com/Microsoft/monaco-editor
预览（格式化，目前的最佳方案：highlight.js）
https://blog.csdn.net/chengcheng111111111/article/details/114283924
https://github.com/ajaxorg/ace
https://ourcodeworld.com/articles/read/309/top-5-best-code-editor-plugins-written-in-javascript

出众分析柱状图：https://g2plot.antv.vision/zh/examples/column/basic#color

散点图上班时间+业余时间尽快提测；
交叉表展开收拢

以后项目中一大堆 todo，替换 fixme

出现不好修复的 bug、或者思路不清晰时，全面对比一下 dev 和 test 的代码差异。最终 solve it
10:15 insight 交叉表和散点图开发完毕 技术调研和技术方案完全确定下来 https://github.com/antvis/G2/issues/3782 https://mail.google.com/mail/u/0

我对所有前端代码的细节把控、总体进度和风险把控（要比其他组员思考到更高层级，多角度、更全面）

[区间折线图](https://antv-g2.gitee.io/zh/examples/area/range#range)
https://github.com/antvis/S2 https://s2.antv.vision/zh https://gw.alipayobjects.com/os/bmw-prod/ff31b171-17a7-4d29-b20a-0b90a810d2de.json https://s2.antv.vision/zh/docs/manual/basic/conditions/

https://camo.githubusercontent.com/d1d1715d8e862af97918c56ac0a9d7eac021e4d92101cea0bf8fc749da32bb3a/68747470733a2f2f67772e616c697061796f626a656374732e636f6d2f7a6f732f616e7466696e63646e2f7643756b6274564e766c2f36313666376566312d653632362d343232352d393966382d6463386636636136333064642e706e67
https://s2.antv.vision/zh/examples/case/proportion/#single-population-proportion
https://g2plot.antv.vision/zh/examples/gallery/
https://g2plot.antv.vision/zh/examples/column/basic#color
https://antv-2018.alipay.com/zh-cn/vis/chart/tag-range.html
https://antv-g2plot.gitee.io/zh/examples/pie/donut/#statistics

<--- JS stacktrace --->

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory（超，感觉真的像是项目代码内存泄露了。。。）
每次上线之前把 esbuild 关闭一下。

15：35 之前实现多折线图组件的开发自测联调
clean-code 175 normalCompRender 截图给王学通
多折线图组件的颜色配置
家里的一对小耳塞，带到公司嘛

09:00 完成好趋势预测的所有 BUG 自测工作 09:30 开始填 HAO 周报

路过人间最后一句：设置成一个单独的作品

你们用的日志工具是什么 graphman？我之前的金融公司用的 graylog（test、prod H5+小程序 应用服务层面、网关层面、底层服务层面的接口）；之前我听柳程讲过
要唱出能表达自己感情的歌曲；
爱记笔记，Susie
体面。。。路过人间最后一句。

找不到具体颜色名-色值文件了。。

多折线图组件的报表顶部菜单入口需要隐藏起来~：report-menu.ts;多折线图初始化渲染失败；

menu

2127 官方组件就是中间菜单不能点击去选中；（而且多条蓝色背景选中条会很丑很丑）

要花费更多的精力去研究去练习去实践，才能设计出更好的代码架构、工程化。
晚上修剪阴毛，换洗棉裤，不穿秋裤（开始只穿一件牛仔裤）；

monorepo？搞明白（微前端）
左侧
家里的被子套上被套。

公司项目开发环境本地经常崩溃。
切换成顶部导航会报错；
事实证明

工作上一定要认真努力~~~；有杭州那边的王学通跟我竞争，强烈竞争。

叠好被套；把护照和抽屉、衣柜里的所有必要物品带到公司来；找到另一条运动短裤（找不到就再买 1 条，所以一定要找到）；2.17 买一条压缩裤；跑步不用穿外套了；

标签显示地不对；

scatter:toolTip 字段和颜色图例（样式-图例显示）

公司开始招聘前端专家了，看来工作时间之内我必须全身心放在工作上去。

19:55 scatter all bugs；

除了赵玉这顿饭（尽量不借钱，最多 2 万，毅泽 3 万的样子）之外，今年不回复任何朋友的微信上的问候

离散、连续的 x 轴数据造成的渲染差异。

做任何事情必须采用快乐高效原则（一目十行，1 分钟 10 行代码）

title key。

一直感觉自己唱歌的声音很娘，这个必须改。就算音准没完全对上，也必须要改过来，声音绝对不能娘。

组件化开发规范和设计规范制定；
https://www.google.com/search?q=%E5%89%8D%E7%AB%AF%E7%BB%84%E4%BB%B6%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83%E5%92%8C%E6%A0%B7%E5%BC%8F%E8%A7%84%E8%8C%83&oq=%E5%89%8D%E7%AB%AF%E7%BB%84%E4%BB%B6%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83%E5%92%8C%E6%A0%B7%E5%BC%8F%E8%A7%84%E8%8C%83&aqs=chrome..69i57.20160j0j1&sourceid=chrome&ie=UTF-8
https://github.com/musicode?tab=repositories
轮播表内存泄露(3 ge)；

x 轴标签显示错误（混合错误）；周期线显示错误;tooltip 显示位置不对，没有起到共用效果；

明天早起后需要看会书~早起后打开电脑看会电子书是我的习惯（比较冷，先把全部的衣服都给穿上）

必须搞定 insight 的折线图离散数据绘制问题，很严重(research g2, render mechanism)

微前端的概念、如何设计 https://zh-hans.single-spa.js.org/docs/microfrontends-concept/

https://juejin.cn/post/6844904162509979662

g2 的比例尺 scale 方法目前存在无法让不同的 chartView 实例在同样的坐标轴中绘制不同的 scale type
本地构建 OOM 问题；jenkins dev+test 的包很大的问题；

16：45 解决掉所有的门户 bug。

顶部、左侧、双导航。 白天只听你一次你唱过的歌，让你知道我今天想过你，从没有忘记过，每天都这样。

除除；

数据门户 书籍+网页都必须看完；

icon_data_connections.png

一旦有钱后立马把家里的脏衣服扔掉，买点新衣服（主要是外套）。

每天 5：13 必须起来看书，技术相关和飞技术相关都要看，看书要看懂看透，基于业务任务优先的前提下

selected 总是停留在第二个顶部一级菜单。。。

工作上有很多事要做，别想着早下班了。。。

忙着赚钱，忙着暧昧忙着恋爱，忙着工作。

顶部导航时有问题；f1-2 有选中属性 f1-1 没有选中属性。
顶部一级菜单和左侧导航中的一级菜单的高亮显示问题：

顶部导航
双导航
左侧导航

tree 中只有一个 selectedK 要支持多个 selectedK 的话，一切问题迎刃而解。

来公司第一件事就是了解 BI、数据可视化数据分析的一切，一切重点难点的技术架构、前端技术架构、实现方案。（以此为目标导向，去展开地思考好）

明天中午吃饭的时候先把月付额度去掉，吃完之前提前去结账，跟收银说我要开发票。

双导航时，没有子级菜单的顶部空一级菜单切换不过去；
tree 中间菜单选中了，但是没有高亮效果(tree 有多选效果)。

从 Tree 到 Menu、从 Menu 到 Tree 的两种交互细节上有什么区别；

bug1411 默认折叠的值和打开的值 不是 bug，因为用一个状态属性去控制初始渲染后的中间菜单的折叠，再用另一个状态属性去控制编辑状态下的中间菜单的折叠情况会让代码变得复杂许多，而且现在中间菜单和叶子菜单其实是共用这个折叠属性 isDftSelected 的

青松在和范总，沟通我的事情。他们想要取代我和刘陈，把我俩 lia 踢出局。老子要火力全开

他俩在沟通前端 leader，要不青松你来当的事情

今晚周五 9 点下班，回去跑 5 公里，跟 Susie 好好聊聊天~

提升数据门户渲染速度；

谷歌翻译 中文显示错别字

5:55 一起聚个餐吧，你们有什么推荐的餐馆

单选还是多选（tree、menu 都要支持），中间菜单和叶子菜单都支持 selectedK 不(改成只支持叶子菜单，双导航点击顶部一级菜单后，再点击左侧导航，）；expand；

我想过段时间开车来找你玩，现在我还没买车，(以后必须要自己开车，靠导航，出行方便许多）。电动轿车的话充电不方便，所以必须烧油的，家里上个牌照，上海买房后摇号上沪牌。

# 2022.02.16-2022.12.31 之间有多少个工作日，可以赚到多少亿。

15000\*1.09 的 200 次方。现在偏离了我很慌(2.23 本来要有 23079 存款的，可是现在只有 19000 不到，必须反思，每天必须认认真真反思我这 1 天有没有赚到 9%的收益。)
02.23

https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=15000%E4%B9%98%E4%BB%A51.09%E7%9A%845%E6%AC%A1%E6%96%B9&oq=15000%25E4%25B9%2598%25E4%25BB%25A51.09%25E7%259A%2584200%25E6%25AC%25A1%25E6%2596%25B9&rsv_pq=9e223f1e000015b8&rsv_t=6c538%2BqKTDiSrmkU0TRTTTi6d5Z6TvvEqUmG23%2BKyLEZ6%2BbDdh4D9iKTQ4E&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_sug3=5&rsv_sug1=5&rsv_sug7=100&rsv_sug2=0&rsv_btype=t&inputT=33311&rsv_sug4=34270

http://www.fynas.com/workday

抓紧时间赚钱，写代码（范总、思佚、朋哥、青松、各位前端小伙伴都在监督着我的工作内容、工作量），只在路上看书。

周报和上一周的计划和这周匹配/连贯！！

# 原则性问题 1

数据门户 bug 修复的分类：技术架构能力、问题沟通能力、代码实现能力哪个方面有问题；很严重

# 原则性问题 2

s2Demo，我们的产品需求要设计成什么样子（有个初版设置 tab 选项）；原则性问题（没什么进展）

NLQ 下钻升级。（青松）

单人群占比，KPI 趋势

建议分期实现新版表格的基本看数需求（主要和旧版表格和交叉表的设置区别在在于表格的）和下钻联动需求。另外的话还有表格跳转、全局参数

减少沟通时间（刘陈），多写代码
回去拉泡屎，检验一下粉碎机的作用

bug1427: dftPortalPage dftSelectec
权限方案定型，初步开发

tree、menu 组件：中间菜单只含有是否展开的属性，selected：TRUE 永远只作用于一个叶子菜单

菜单名不能为空，阻止它保存；

门户名称的两个修改点、菜单名（报表名称不能为空的类似效果）；

isDftSelected only one when rerender
choose isDftPortalPage when init_render

所有测试基于新的门户来测试

https://s2.antv.vision/zh/examples/case/proportion#single-population-proportion
https://s2.antv.vision/zh/examples/react-component/drill-dwon#basic-panel
https://s2.antv.vision/zh/examples/react-component/header#default
https://s2.antv.vision/zh/examples/basic/pivot#tree
https://s2.antv.vision/zh/examples/analysis/conditions#table-text

https://s2.antv.vision/zh/docs/api/general/S2DataConfig
https://s2.antv.vision/zh/examples/case/performance-compare#pivot

https://juejin.cn/post/6844903634870730766

默认折叠是否起作用。

3-1 3-2(4-1, when onClick,to 3-2)

#f0f2f5 统一去掉这种背景色（答案页面）

门户解决掉 8 个 bug（1 个小时内）

dragDrop 之后，clickNewMenu 时还是会回到原位？

lack of useEffect setLefeMenusArr

10：00 Portal bugs fixed.

增加菜单的两种 action 场景的逻辑混乱了，需要重新整理逻辑，会相互影响：

加号添加菜单：
dragDrop 添加菜单：

允许折叠 怎么复现？

尽全力 fix all portal bugs

menu-expanedKeys 的设置在 disabledMenu 出现时，disabledMenu 不展开了；

范总、朋哥，我状态恢复过来了，请相信我的实力；我可能不太擅长管理、但是我能写好代码；

我想复用一些 function，其实不能复用；
把问题想复杂了，组件用错了（selectedKeys 和 expandKeys 分离在不同 menu 实体上）；

17:00 之前解决所有 bug；

http://localhost:8000/#/portal/edit?portalUrl=3008340731&code=1499365198542929920

https://antv-s2.gitee.io/zh/examples/react-component/drill-dwon#for-pivot https://antv-s2.gitee.io/zh/examples/analysis/conditions#multi-background http://localhost:8000/#/portal/edit?portalUrl=3518469228&code=1499422838379773952 https://antv-s2.gitee.io/zh/docs/api/general/S2Options#conditions https://antv-s2.gitee.io/zh/docs/api/general/S2Options#totals https://antv-s2.gitee.io/zh/docs/api/general/S2DataConfig https://antv-s2.gitee.io/zh/examples/analysis/sort#table-sort https://antv-s2.gitee.io/zh/examples/basic/table#table

顶部导航的双

数据门户的难点：1. 之前的代码复用逻辑存在一些 function，其实不能复用
涉及到编辑模式和预览模式的不同组件的切换显示隐藏导致各组件总高度的；
涉及到切换不同导航布局的 antd menu 组件样式覆盖的问题（复杂的地方在于多层级 css 选择器的覆盖起来不方便、调试起来不方便）；
切换导航布局时，无内容菜单的收拢展开逻辑和内容菜单的选中属性的设置存在冲突，现在将逻辑分离了已经解决好；

我工作起来很忙，别来打扰我 ~ 每天忙到死（别来吵我）；数据门户的样式 bug -- 要修复两种布局上的更改；周三修复门户 bug 和权限功能开发完毕；

工作起来开始没有难度：s2 表格组件全面开发、数据门户 bug 修复；代码量很多，需要更多时间去敲代码，这两天就不要骑车了，只是早起跑步就好了，晚上不跑步（我不想猝死。。。在地铁上好好看书）这周六开始早晚跑步 10 公里+骑车 28 公里

每天早上的 5 公里必须要跑

每天晚上跟着柳程一起下班，算了我只是骑车罢了。以前每次找车然后骑车总共需要 1 小时，现在自行车放在全家门口，下班时直接骑回家就好了（不带电脑）--路上半小时就好；

回到家后带着兴趣继续写代码到 11 点 10 分;隐藏字段（区分于 自定义指标）；schema 保持跟原来的一致，导出导入不会有问题；
晚上回家后收鞋,16:50 点外卖；12：00 全力 coding

顶部菜单过多的 bug~~

顶部导航时，没有正确高亮出选中的一级的内容菜单

menuItmClicked 为 FALSE 时，dftPortalPage=》dftSelected=》第一个叶子节点

增加菜单时

双导航：点击一级无内容菜单没反应；menus-more-icon(hover on it)

金鹏-预览模式-顶部导航切换一级菜单（有子级时不要有任何效果，金鹏说他那里有错误效果）

带着感冒工作的 1 天反而最高效~~

11：00 解决掉所有的 bug

shuangNav setLeftMenus

简易预览时，一级菜单过多，hover 上去没反应 hover 上去的一级菜单高亮色应该为白色-简约白；

门户改成 flex+fixed 布局的话，改动较大~~（以顶部导航为例）

setTopMenusArr
setTargetTopMenu

代码一定要分层~~
08：25 所有门户 bug。

双导航：点击顶部菜单时，自动聚焦 leftMenusArr 的唯一一个 selectedKeys

顶部导航中的一级内容菜单 蓝色底部边框

完成 s2 的数据、样式设置标签栏
青松说需要拆分一下 PortalPreviewCmpt 嗯 renderMenus 和 renerSubMenus 成新组件，今天来不及拆分了。（要不一级菜单的个数先限制成 8 个以内，包括 8 个）；下期上线吧

9:55 填写周报：
s2 新版表格组件 1.0 版本提测（上线后，今天下午放到 test 环境测试）
数据门户 bug 修复，有一个 bug 需要拆分原有组件，下期和世昌的数据门户样式升级需求一起上线。

1. 样式配置与现在拉齐
2. 实现排序功能（产品先调研）
3. 实现字段的条件格式
4. 实现冻结功能
5. 列设置实现更改表头名称 明细表 S2DataConfig.meta Meta[] Meta.name
6. 隐藏字段 预览页可以实现原本自定义指标的功能
7. 导出 EXCEL（还是用我们系统的导出 API）

今天必须全力开发，提测 s2；数据门户 双侧导航一级菜单过多，more-icon 点击后不显示的问题修复；明天继续上班（我最近是真的忙得很）；没空去验乙肝小三阳了；

今晚 21：00 点下班，回去跑 5 公里跑完后敷面膜，明早 3：10 起来后还得跑 5 公里然后来公司开发完；目标是称重降到 72.2kg；以后周五周日敷清洁面膜；

这两天必须认认真真开发完 s2 新版表格组件，提测，跟学通说一下。 下钻功能还没有开发

我没做完疗程的话，你们的业绩是把整个疗程算进去了是吧；今天在你这来了几位顾客呀~~

表格样式设置这里还有点小问题，云静我马上处理好了(你先忙好这周的其他工作，这个 s2 这周肯定要上线的，明天上午你就开始全面测试)

确实青松说得对，组件的状态管理很重要。要分层设计；

分页样式（明细表有分页的话，不滚动页面）；
数据筛选（viewChartReq）和定时器

工作效率是第一位，代码逻辑的维护和组织比 ts 语法要重要得多

排序级别就先这样；

我不能辜负金鹏和云静对我的期待，今天必须火力全开；

**工作最重要的是兴趣、激情；而且是持续高效才能有所在工作上成就；持续心流状态；**

排序级别不需要~~晚上 8 点 50（忙到特别累）不带电脑直接回家，到家后洗完澡就睡

我刚才感觉我的效率是之前效率的 100 倍（脑子飞速 100 亿转每秒，没有任何代码）；

1. 样式配置与现在拉齐
2. 实现排序功能（产品先调研）
3. 实现字段的条件格式
4. 实现冻结功能
5. 列设置实现更改表头名称 明细表 S2DataConfig.meta Meta[] Meta.name
6. 隐藏字段 预览页可以实现原本自定义指标的功能
7. 导出 EXCEL（还是用我们系统的导出 API）

1 个小时之后 17:25 让金鹏找一下学通，改改代码（说你自己要测试洞察）;

交叉表和普通表具有相同功能时，s2 要同时考虑两边原有的逻辑

表头样式、网格线这样的，s2 设置不了

一定要周四上线（不管什么时候提测，周二上午是最晚时间-自测充分的情况下）

早点下班的话一定要早点来公司（必须做到）

今早 9：30 提测 s2；
s2 的柱状图字段标记还有渐变色

现在气氛很紧张，s2 必须周四上午 10 点之前解决完所有 bug

普通表格 dataCfg.sortParams 不是 sheetHeader 里的 sortParams 高级排序；
明细表的表头可以点击排序嘛（点击不了）；

9：15 问一下思佚是不是，排序还需要思佚稍作整理一下，其他都已经提测好了，下周四上线包括排序的功能。
权限管理前端开发完成，现在还差联调部分。
接点热水喝

hover 上表头和表格

表头文字颜色改变不了;

23 hao 9:00 防晒霜定金退款 20 元

明细表和透视表之间切换时，不清除设置和数据？

切换表格类型，quickBI 账号登录，体验一下他们的表格产品。这样我自己设计出来的产品就不会出错

11:30 完成 s2，开发权限模块。

canvas 画出来的 s2，颜色有交叠现象（比如表头文字设置成#333 的话， color 看起来并不是该颜色）

http://localhost:8000/#/report/view/1415519914528931840 打开两个一模 mu 一样的窗口。
http://localhost:8000/#/scenery/edit/1375714122250686464
http://syzn.test.magicbi.cn/#/report/edit/1481147113697067008 http://syzn.test.magicbi.cn/#/scenery/edit/1505826538384478208

这两天我也会很忙~~
让自己忙起来多好~~忘我投入于工作当中了~ 工作上一定不能懈怠，一定要多和同事沟通，这样的话思路来得快~~
12：05 18：05 准时吃饭，人生最重要的是自律~~
今天的主要任务是提测权限管理；

今天工作上必须火力全开~~

从资源中删除部门

百分之一万的效率~~

权限 1.0 接口文档 http://apidoc.magicbi.cn/doc.html#/default/%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86API%E6%8E%A5%E5%8F%A3/deleteUserTypeResourceGrantUsingDELETE

**S2 组件 bug 太多了，出 bug 的原因主要是什么，一定要提升开发质量！！**

theme i.tsx cmpt.tsx 完整修复和所有 bug 修复~~

6 点之前跟云静说已解决的 bug 可以

sql （presto 集群，对接的一部分。）
对接文档

以后的 S2 表格要区分类型来进行产品设计。（占比表、对比表、KPI 分析表）
透视表的默认样式表单里，缺少很多值。

21: 05; 两种排序操作 表格类型切换（样式设置就暂时不清空了吧）； NLQ 组件样式设置编辑不生效
同环比一定要生效。数据筛选
透视表的数据、样式设置；

stress Condition；表头底部边框没有颜色设置

数据格式 分页时，序号连贯 透视表组件规划（进一步理清排序逻辑 涉及到数据分页-序号 bug）

修复好 S2 明细表组件一期功能点的 bug，上线，包括数据 Tab 项下的列数据（自定义指标、列设置、同环比等等）、数据筛选、定时刷新和样式 Tab 项下的表格样式功能（冻结、网格线显示隐藏、表格文字样式）、数据格式、恢复默认配置

下周计划：
开发 S2 组件二期的需求功能（包括 S2 明细表组件的二期交互功能和更多样式设置需求、透视表组件的一期需求）

调研 S2 报表组件的二次分析-快速计算、表记算方案（参考火山疫情、FineBI 产品文档。目前我们实现的是同环比相关 之后和思佚按优先级讨论，包括总额百分比、汇总、百分位、排名、移动计算，占比、组内占比、组内排名、累计值、组内累计值、所有值、组内所有值、当前维度百分比）。计划每天工作结束之际写一下日报，发到前端组内群
备注（修复的 bugID 隐藏的功能包括哪些）；
拆分规划；

【列设置】改成「设置显示名」，类似 FineBI，目前 S2 组件设计的列宽功能是不能保存的，主要是页面上能拖拽就好，不支持传递列宽参数固定列宽

认真钻研明细表和透视表的排序方案（明细表的话涉及到分页）

每天必须写日报。这样工作才会有动力
今日的工作内容：
排序分两个方向：表头的点击排序，是不是还是按照以前的自定义渲染表头排序 icon 和冻结 icon（建议不要这么弄，有点违反 S2 的组件交互设计，尽量不要自定义） 但是操作起来少了一点方便度，我觉得表格组件更重要的是取数、分析能力，不要因为重交互而把代码写乱。

组内排序
高级排序
S2 组件的高级排序系分文档：
预估工时
分页
21：30 日报内容：

S2 已修复的 bug（让云静、金鹏抽空测试一下），预估剩余 bug 的修复完成时间点给出（list），有些 bug 实在修复不了的也得说。
S2 组件残余 bug 的修复

权限管理人员管理需求、权限管理样式优化

每天写工作日报给自己（一定要每天都认真写好）1 年当中的每 1 天都给自己设立投资目标、工作目标、成长目标、阅读目标。

https://juejin.cn/post/7061588533214969892 https://juejin.cn/post/7071518211392405541 https://juejin.cn/post/7073869980411887652 https://juejin.cn/post/7079935342966472711

S2 组件二期需求开发 50% 组件拆分：明细表和透视表，排序功能开发
提测权限 1.0
提测 S2 组件二期需求 下周二上午提测，提测之前测试部分遗留 bug 修复

https://www.zhihu.com/question/20585936 https://zhuanlan.zhihu.com/p/33976675 https://www.jianshu.com/p/27b0ffcafea4 https://zhuanlan.zhihu.com/p/118183282 https://zhuanlan.zhihu.com/p/94537060 https://www.jianshu.com/p/64feb55c8c00 https://baike.baidu.com/item/STAR%E6%B3%95%E5%88%99/9056070 https://www.jianshu.com/p/8ef73ec19664 https://zhuanlan.zhihu.com/p/368416473

不要花费时间在改 bug 状态，而是真正的 coding（所有高效专注时间）

一定要认认真真工作，一定要时刻保持乐观积极，一定要最高效率地工作

9：55 完成 s2 二期需求。必须高效
jinpeng: Formily error: Can not found the field component <undefined>. Its keys is paging.title.curPage;Uncaught (in promise) 请先在右侧移除图表中的失效字段：求和聚合（salary）的年环比差异百分比

MagicBI、数据门户的 bug 修复
写好排序弹窗组件，S2 剩余 bug 修复（所以说只在晚上跟 Susie 交流）
拼多多买花生
S2 整体排序和透视表，今天上午必须提测

一定要在周四正常上线 11:55

青松很有可能要离职了，我必须全力以赴了（每天 24 小时）：20 分钟（09：00-15：00，前后各 10 分钟）投资、22：35-04：45 睡觉，22：30 听晚安曲- 早中晚洗漱、保养头发、吃喝拉撒总共耗时 90 分钟（包括午休、散步） 路上交通总共 100 分钟（来回加起来）

24\*60=1440-600 分钟是技术性产品性业务性工作、个人所有方面成长的总时间（14 个小时）

真的是全力以赴用在工作上（洗澡在 22 点 15）

类似 Number 组件的 min、max 属性（封装 input，加上拦截，不 update 请求）

git add &&git
commit -m 'fix(auth): bug
s'&&gp

07:35 激情最重要，S2 提测，柳程
分页（序号列）
干完所有手上的活（包括解决 bug、bug 原因分类统计给金鹏）

自定义地图调研+需求排期。 自定义地图组件 https://cn.bing.com/search?q=%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9C%B0%E5%9B%BE%E7%BB%84%E4%BB%B6&PC=U316&FORM=CHROMN https://lbs.amap.com/product/mapstyle#/ https://antv-2018.alipay.com/zh-cn/l7/1.x/demo/component/extendControl.html https://elemefe.github.io/react-amap/articles/extend https://help.grapecity.com.cn/pages/viewpage.action?pageId=50743029#:~:text=%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9C%B0%E5%9B%BE%E7%BB%84%E4%BB%B6%E6%94%AF,%E7%BB%91%E5%AE%9A%E5%92%8C%E5%91%88%E7%8E%B0%E6%95%B0%E6%8D%AE%E3%80%82 自定义图片背景+渲染逻辑（拖拽生成交互） 主要参考葡萄城的渲染逻辑

报表不存在-report/view/undefined ;柳程 https 需求；改掉 5 个周常 bug；refresh；隐藏字段功能（看齐条形图）--viewReq;筛选器菜单；
报表新版表格标题样式不对；
周二上午用行动证明一切；

esslipsis-title 这类问题暂时不看：nlq 数据资产 FieldList 正上方的数据模型名称

mfsu umi4; s2 回滚，ai-s2 代码 copy 到 test 分支，从 test 新拉一个 release 分支，

从 tes 新建一个 release/2022-04-28 分支，release/2022-04-22 中的 s2 代码（只有）合并到 2022-04-28 上去

09:30 S2+可搜索的权限部门目录（部分权限 2.0 工作可以直接开发起来了）

多洗脸，3 天（耳后、脸、鸡巴依然存在湿疹的可能）洗一次澡，1 天洗一次头。
