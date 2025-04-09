# 前端架构（小程序）
测出了一些bug，也发现了一些前端项目框架上的问题；
static目录里的图片总体积为137KB；网络波动的提示；点击左侧导航可以快速跳转到最左边吗？

认认真真记录技术和产品层面遇到的任何不懂的地方，要做记录
# 技术架构

Maxon Cinema 4D 2023（1.74G）已经被卸载掉了。

让后端给我加一下免验证码的权限；个人传记的语音对话功能不出现在5月份版本当中；

焦凌峰、罗田浩、汤佩（UI）、查裕心；
小程序默认设置为楷体，但是失效；
树谱图等比例缩放时，css属性失效

uni.setStorageSync('scancodedata', ddurl); //存储起来 防止没登录 登录后要重新请求


把若依框架的vue2版本替换成vue3，提升性能和开发效率，并提高代码可维护性和可读性??（接口、依赖的改造比较麻烦）

第五代-武忠学

## jiapu
peouserid != null 回到自己； tab_pu

<tree-item :xuanzhonguserid='' :family_id='' :treeData='' @openpup='' /> 创建初始成员
<uni-popup>
  <view v-if='issample==1'>
    closepups
    <view class='operation'>节点操作 member_info.name
    torefer(member_info),tishifun() 查阅此人资料；添加好友、编辑资料、添加父辈、添加配偶、添加子辈、复制激活码、添加宗祠、在线祭祀、个人传记、删除此人

  非样谱：【已认证】
```js

    touuinfo(1) member_info.is_pay&&ext0==0 添加好友
    toedit(1,member_info) create||member_info.userid==userInfo.id 编辑资料
    addparentsfun level_id==1&&maters==1&&levelers==1 添加父辈
    addspousefun create&&member_info.maters==1 添加配偶
    addneedfun create&& 添加子辈

    #ifdef MP
    jihuoma 复制激活码
    sacrifice(1) 在线祭祀
    addzongcifun(member_info.people_id) 添加宗祠

    toedit1(1) aishowBool 个人传记
    shuziren() shuzirenbool 数字人
    shenqifun 申请修改

    delpeoplefun 删除此人
```

<xkyguidestep :step />
<paytype @payreturn :price='need_pay' />
```js

```
utils/api/zupu.js
worshipHallInfo,familyInfo,familyTreeView,getArticleList,getBookList,familyList,getPhotoList,getFamilyDetail,updateFamily,updateFamilyPeople,
deleteFamilyTreeMate

payFamilyApply,payFamilyApplyLogs,jihuomafun,dleifpeople,addzongci

utils/zpi/api
getUserinfo,szrquery,showBool

utils/api/jiapu
headlist,familyTreeList,delpeople 头部数据请求
utils/config 系统参数
let{staticurl,photo_cdn1}=config.baseUrl
//谱书主体结构组件
treeItem ./tree-item/tree-item.vue
{apppay} utils/zupuapppay.js
paytype.vue

titleList key-title-url 家谱介绍category+排行榜（贡献榜）：头部列表数据
滑动距离scrollLeft1、头部初始参数tab_pu、
谱树数据：：
谱书结构treeData
滑动到指定位置scrollleft
家谱id family_id
系统固定参数staticurl+photo_cdn1
用户资料userInfo

xuanzhonguserid
member用户资料{}、userinfodata、pu_info谱的所有信息
people_id、createUserid、identity_types、
scrollheight、windowHeight、windowWidth
create:false,delbool:false,issample:1,pu_detaile/people_id,paytype:false
need_pay创建订单支付金额、order_inf订单信息、pay_way、log_id支付日志、amount支付金额
money、remark、payorder
peouserid回到自己
shuzirenbool
aishowBool

```

onLoad
  showBoolfun()
  this.family_id=option.family_id
  getUserinfofun
  if(!option.people_id) this.familyTreeListfun() 初始化获取家谱详情的数据
  else
    this.pu_detaile.people_id=option.people_id
    this.xiaMethod({id:option.id})
    this.xuanzhonguserid=option.people_id
onShow
  this.people_id=uni.getStorageSync('people_id')
  if(this.people_id&&this.people_id!=0)
    if(this.people_id==1)return
    this.xuanzhonguserid=this.people_id
    this.familyTreeListfunone(this.people_id)
  showBoolfun()
onPullDownRefresh
  familyTreeListfun()
provide
  let that=this
  let{fatherMethod,xiaMethod,shangMethod,openspouepeooufun,zuobiao,openspousepeooufun1}=this
  return {fatherMethod,...}
```
methods
  showBoolfun
    if res.code==1
      this.aishowBool=res.data.showzhuanji
  shuziren(e)
    uni.navigateTo({url:'/jiapu/humanVideo/humanVideo?id'+e.people_id})
  addzongcifun(e)
    let that=this
    addzongci({id:e}).then(res=>{
      uni.navigateTo('/jiapu/myHall/myHall?family_id='+that.family_id)
    })
  backMe
    this.treeData=[]
    this.xuanzhonguserid=0,peouserid=null,create=false
    familyTreeListfun()
  weixinAlipayfun(paytype) 微信支付、支付宝支付 weixin+alipay
    apppay(this.payorder.payLog.id,payorder.payLog.need_pay,paytype).then(..)
  payreturn(paytype) 选择完支付方式后 1微信2支付宝
    this.pay_way=paytype==1?'weixin':'alipay'
    this.weixinAlipayfun(this.pay_way)
  tishifun
    this.$api.msg('此为样谱展示按钮！')
  async getUserinfofun() 获取用户信息和身份信息
    获取用户信息
    let res=await Line339
    getUserinfo({}) getFamilyDetail({family_id:Number(family_id)})
      values[0].value.. this.userInfo=res.data.userinfo,this.userinfodata=res.data.userinfo
    let myuserid=userinfo.id
    if restwo.code!=1 return
    issample=res2.data.info.is_sample,pu_detail=res2.data.info,rw_user_id=res2.data.info.rw_user_id 读写权限人
    let create_user_id=.. 创建人
    this.createUserid=create_user_id
    if create_user_id==myuserid&&myuserid this.identiry_types=2
    else if rw_user_id
      if res2.data.info.rw_userIds!=null this.identity_types=1 读写权限人
    if res2.data.type!=2
      家谱 都可操作
      this.identity_types=1
  clickLeftItem(e) notWorking
    let that=this,idyangshi=0
    if(!e) idyangshi='#userid'+that.pu_detail.people_id
    else idyangshi='#userid'+e
    const query=uni.createSelectorQuery().in(that)
    query.select(idyangshi).boundingClientRect(data=>{
      if(!data)return
      that.scrollLeft=data.left-30
    }).exec()
  getUserinfofun1
    getUserinfo({}).then(res=>{
      this.userInfo=..
      uni.setStorageSync('u_userInfo',..)
      uni.setStorageSync('token',res.data.userinfo.user_token)
      跳转网签合同
      if(res.data.wangqian==1) uni.reLaunch({url:'/pages/mine/hetong/hetong'})
    })
  onheadlist 头部列表方法 初始化获取头部参数
    getUserinfofun()
    headlist().then
      if(res.code==1)
        this.titleList=res.data.list
        this.tab_pu=res.data.pu
  toChoice 去搜索
    this.tab_pu=1
    navigateTo(`/pages/zupu/choice_hum/choice_hum?family_id=${this.family_id}`)
  pu_type 切换tab跳转
    this.tab_pu=indexs.key
    uni.navigateTo({url:indexs.url+'?family_id='+this.family_id})
  familyTreeListfun 谱树的方法、获取谱树的数据
    familyTreeList({family_id}).then
      if(res.data==null)
        that.treeData=null
        return
      that.treeData=res.data.list
      that.xuanzhonguserid=res.data.peouserid
      this.peouserid=that.xuanz..
      this.create=res.data.create
  familyTeeListfunone(e)
    familyTreeList({family_id,type:3,family_tree_id:e}).then
      this.treeData=null
      this.treeData=res.data.list
      uni.setStorageSync('people_id',1)
  fatherMethod(e)
    for(let one=0;one< treeData.length;one++)
      if(this.treeData[one].id==e.id)
        if this.treeData[one].childbool this.treeData[one].childbool=false
        else treeData[one].childbool=true
        return

      for let tow=0;tow<this.treeData[one].child.length;tow++
        if treeData[one].child[tow].id==e.id
          treeData[one].child[tow].childbool=!treeData[one].child[tow].childbool
          return
        for(let three=0;three<treeData[one].child[two].child.length;three++){
          if treeData[one].child[two].child[three].id==e.id
            treeData[one].child[two].child[three].childbool=!treeData[one].child[two].child[three].childbool
            return
        }
  zuobiao(e)
    that.$nextTick(function(){
      that.scrollLeft=e-30
    })
  xiaMethod(e)
    familyTreeList({family_id,type:3,family_tee_id:e.people_id}).then
      treeData=null,treeData=res.data.list
    if(treeData!=null)return e
  shangMethod(e)
    familyTreeList({family_id,type:4,family_tree_id:e.people_id})..
  openspousepeooufun(e)
    this.shuzirenbool=false
    this.xuanzhonguserid=e.people_id,people_id=e.people_id,member_info=e,delbool=false
    if(e.maters==1)
      if(!e.child.length)
      if !e.mate.length&&e.is_pay==0
D:\projects\zupu\common\amap-wx.js D:\projects\zupu\utils\libs\amap-wx.130.js,qqmap-wx-jssdk.min.js


websocket 聊天界面的逻辑 红包转账功能，添加微信红包样式和转账类型的消息；common/websocket.js；接口文档；UI设计交互；

message.vue

showsp

tosearch,toggleMessageMenu,messageMenu.show,photo_cdn1,toqrcode;
commonTips,sessionLongpressList,sessionLongpressAction,sessionLongpressShow;sessionListTop gotoSessionInfo(item.id,itm,type,chat_id)
@longpress.native='sessionLongpress(item.id,item.top)'

v-for='(itm,i) in sessionList' gotoSessionInfo(item.id,item.top)

会话列表 isshowlogin closefun loginsucc

script

upgradeInheritor utils/api/Inheritor.js
utoast,umask uview-ui/components/u-mask/u-mask.vue,uactionsheet,usearch,ucellgroup,ucellitem,uline
config utils/config.js {staticurl,photo_cdn1}=config.baseUrl
videofun utils/api/circle
Handleqrcode utils/yicode

data
  isshowlogin:false,statusBarHeight:0通知栏高度；keywords,maskShow:false,messageMenu:{show:false},sessionList[],sessionListTop[],TODOcount 0,pageDataLoadBool false,sessionLognpressList,sessionLongpressShow,loadStatus:'loading...',commonTips:'',photo_cdn1

  shosp:false 分割线，百家姓内容

onLoad
  this.ws.pageFun(this.pageDataLoad,this)
  this.statusBarHeight=uni.getSystemInfoSync().statusBarHeight*2
  upgradeInheritorfun()
onShow
  videofunc()
  let token=uni.getStorageSync('token')
  if !token
    // #ifdef MP-WEIXIN
    setTimeout isshowlogin=true 1500
    // #endif

  if this.ws.pageRefresh.msg
     被其他页面通知刷新会话列表 更新列表中的好友备注等
     ws.pageFun(pageDataLoad,this)
     ws.cleaPageRefresh(),ws.pageRefresh.msg=false,..sessionInfo=false,ws.messageShow=[]已经重载，无需执行msgShow中的方法
     return
  if ws.msgShow.length
    for let m in ws.msgShow
      if typeof ws.msgShow[m]=='function'
        ws.msgShow[m](that)
        ws.msgShow[m]=null
  if !pageDataLoadBool return
  ws.checkNetwork(that)
  ws.pageFun(function(){
    that.ws.send({c:'ImBase',a:'loadTODO',data:{method:'get-all-count'}})
  },that)
  ws.pageFun(that.pageDataLoad(true),that)
  ws.onMsgCallBack.set('load_session_list',msg=>{
    if msg.data.data.refresh&&msg.data.data.method='load'
      that.$refs.uToast.show({title:'刷新成功~',type:'success'})
      uni.stopPullDownRefresh()
  })
onPullDownRefresh
  ws.pageFun(pageDataLoad(true),this)
  ws.onMsgCallBack.set('load_session_list',..)
监听页面滑动，关闭加号弹窗
onPageScroll(e)
  maskShow=false,msgMenu.show=false
methods
  videofunc
    videofun().then
      if res.code==1
      showsp=res.data.show
  shuaxinfun
    ws.reconnect()
    ws.pageFun(pageDataLoad(true),this)
    ws.onMsgCallBack
  upgradeInheritorfun 传承人等级同步更新
    upgradeInheritor
  toqrcode 扫码方法
    // userinfo im的，u_userInfo 用户的；Handleqrcode('https://zp.xicheda.com/qrcode?type=1&imuser_id=15') 封装的方法
    if !uni.getStorageSync('u_userInfo')
      this.$showModal({title:'温馨提示',content:'您还未登录，请前往授权登录',cancelText:'先逛逛',confirmVal:'去登录'}).then
        navigateTo('/pagesim/center/login')
      return
    uni.scanCode({
      success: Handleqrcode(res.result) 封装的方法
    })
  closefun 关闭授权登录弹窗
    isshowlogin-false
  pageDataLoad:(refresh=false)
    pageDataLoadBool=true
    ws.send({c:'User',a:'loadSettionList',data:{refresh}})
    ws.send({c:'ImBase',a:'loadTODO',data:{method:'get-all-count'}})
  gotoSessionInfo(id,type,chat_id)
    var url='/pagesim/session-info/session-info?id'+id+'&type='+type
    if type=='service'
    if chat_id!=3
      url=..notice-session-info..
    navigateTo(url)
  sessionLongpress(id,top)
    sessionLongPressShow=true
    sessionLongpressList=[{txt:top?'取消置顶':'置顶',id},{txt:'移除会话',color:'#f74631',id}]
  sessionLongpressAction(idx)
    if idx==0
      ws.pageFun(function(){
        ws.send({c:'User',a:'sessionOperation',data:{id:sessionLongpressList[idx].id,action:'session-top',source:'uni-app'}})
      },that)
    else if idx==1
      ws.pageFun(function(){
        ..session-remove..
      })
  maskClick
    msgMenu.show&&toggleMsgMenu()
  toggleMsgMenu(e)
    if msgMenu.show
      maskShow=false,msgMenu.show=false
      return
    msgMenu={show:true}
    maskShow=true
  search
    if !keywords
      $refs.uToast.show({title:'请输入关键词~',type:'error'})
      return
    navigateTo({url:'/pagesim/search/search?keywords='+keywords,success:()=>keyword=''})
  tosearch
    navigateTo('/pagesim/search/search')

```scss

msg-menu-box


```

common/websocket.js

imConfig,sj_show_modal,
{baseUrl:'api.yanhuangernv.com',hostUrl:'zyswoole.yanhuangernv.com:2089'启动swoole服务的域名，无需填写协议和端口
fileUrl:'oss.yanhuangernv.com/'oss文件地址,httpSwitch:true是否启用HTTPS协议，默认关，小程序和app正式版必开，且需要参考文档创建wss服务,
httpPort:'',http端口，若为默认的80端口则无需填写，请注意是http端口不是ws端口，ws请在后台插件配置中配置noNeedLogin:[
  无需登录的api '/api/sms/send','/addons/fastim/api.user/login','/addons/fastim/api.user/register','/addons/fastim/api.user/captchaPre','/addons/fastim/api.user/forgetPassword'
]}

let ssm

// #ifdef APP-PLUS||H5
const showModal=(op={})=>{
  // #ifdef APP-PLUS
  return new Promise((resolve,reject)=>{
    ssm=new sj_show_modal({...op,$event:e=>{
      if e.res resolve(e)
      else reject(e)
    }})
    ssm.show()
  })
  // #endif
  // #ifndef APP-PLUS
  return new Promise((resolve,reject)=>{
    ssm=uni.showModal({
      title:op.title,content:op.content,confirmText:op.confirmVal,cancelText,
      success:res=>{
        if res.confirm resolve()
        else if res.cancel reject()
      }
    })
  })
}

var ws={that:null,pageThat:{},//null
socketTask:null,socketOpen:false,ready:false,needReconnect:true,sessionId:0,timer:null全局计时器
reconnecting:false,errMsg:[]发送失败的消息,maxReconnectCount:30最大重连次数,currentReconnectCount:0,
initializeData:false初始化请求来的基础数据,initializeEmoji:false,connectSuccess:null,showMsgCallback:null,
msgShow:[],pageRefresh:{msg:false,addressList:false},authToken:'',userPlatform:null,innerAudioContext:null,recorder:null,onMsgCallback:new Map(),
init(token,auth_token='',openinfos=1){
  if openinfos==1
    if socketTask&&socketOpen return false
  if openinfos==2
    initializeData=false,socketOpen=false
  that.authToken=auth_token||that.authToken
  if !this.initializeData
    // 发送初始化请求
    this.that.$u.get(buildUrl('initialize',token),{}).then
      if res.code==402
        that.pageRefresh.msg=true
        // APP-PLUS H5
        showModal({title:'提示',content:'你还未登录，是否前往登录',confirmText:'去登录',cancelText:'继续体验'}).then
          let pages=getCurrentPages(),len=pages.length,curParam=pages[len-1] 获取当前页面参数
          if curParam.route.indexOf('login')==-1
            uni.setStorageSync('userinfo',{})
            uni.setStorageSync('u_userInfo',{})
            uni.setStorageSync('token',''),..userInfo,{},session_key,{}
            uni.reLaunch('/pagesim/center/login')
        // #endif
        return false
      else res.code!=1
        uni.showModal({title:'温馨提示',content:'初始化失败，请重试！',showCancel:false})
        return false
      that.initializeData={config:res.data.config,tokens,userinfo}
      来信提示音初始化
      that.innerAudioContext=uni.createInnerAudioContext()
      that.innerAudioContext.src=that.buildUrl('message_prompt',that.initializeData.tokens,im_tourists_token)
      that.recorder=uni.getRecorderManager()

      setTimeout that.connect() 2050
    userPlatform=uni.getSystemInfoSync().platform
  else setTimeout that.connect() 2050
},
connect(){
  if imConfig.httpsSwitch&&parseInt(that.initializeData.config.wss_switch)!=1
    uni.showModal({title:'wenxing',content:that.initializeData.config.im_name+' https下须创建wss服务才能连接网络，请参考文档！',showCancel:false})
    return false
  that.socketTask=uni.connectSocket({url:'wss://zyswoole.yanhuangernv.com:2089',header:{'content-type':'application/json'},complete:res=>console.log('wss结束的回调函数：',res),success:res=>log('wss接口调用成功：',res)})

  that.socketTask.onOpen(res=>{
    socketOpen=true,currentReconnectCount=0,needReconnect=true,pageThat.commonTips=''
    if timer!=null clearInterval(timer)
    timer=setInterval(function(){
      send({c:'ImBase',a:'ping'})
    },4750) 定时发送心跳
  })
  that.socketTask.onMessage(res=>{
    let msg=JSON.parse(res.data)
    onMessage(msg)
  })
  socketTask.onError(res=>{
    socketOpen=false,reconnecting=false
    if timer!=null clearInterval(timer)
    that.pageThat.commonTips='网络信号差！正在自动重连~'
    reconnect()
  })
  连接关闭
  socketTask.onClose(res=>{
    socketOpen=false,reconnecting=false
    ..
    if typeof closeCalback=='function'
      closeCallback()
      closeCallback=null
    reconnect()
  })
},
reconnect(){
  if !needReconnect||reconnecting return false
  reconnecting=true
  if currentRec< maxReconn
    currentR++
    if currentRe == 1
      init()
    else
      timer=setTimeout(init(), 2000)
  else
    if timer!=null clearInterval(timer)
    timer=setTimeout(init(),3000)
},
send(msg){
  if !msg return
  let noNeedLogin=['ImBaselogin']
  if !noNeedLogin.includes(msg.c+msg.a)&&!ready
    uni.showToast({title:'您网络信号有点差，网络连接成功后再试哦~',icon:'none',mask:true})
    return
  if that.socketTask&&that.socketOpen
    that.socketTask.send({data:JSON.stri(msg),fail:res=>errorMsg.push(msg)})
  else erorMsg.push(msg)
},
sendMsg(msg,type,sessionId){
  var msgId=new Date().getTime()+sessionId+Math.floor(Math.randowm()*10000)
  send({c:'Message',a:'sendMessage',data:{message,type,session_id:sessionId,tokens:initializeData?initializeData.tokens:false发消息时检测用户登录态是否过期,
  message_id:messageId,identity:initilizeData.userinfo.identity}})
},
fotmatMsg(data){
  let msg=''
  if(data.type=='image') msg='[图片]'
  else if data.type=='audio' msg='[音频]'
  else if data.type=='voice' msg='[语音消息]'
  else if data.type=='video' msg='[视频]'
  else if data.type=='file' msg='[文件]'
  else if data.type=='link' msg='[链接]'
  else if data.type=='kbs_list' msg=data.message.title
  else
    msg=data.message.replace(/<img.*?title="(.+?)".*?>/g, "[$1]")
    msg = msg.replace(/<img.*?src="(.+?)".*?>/g, "[图片]");
  return msg
},
imSession(data,pageThat,moveTop=true){
  msg页数据保障
  var currentSessionI=-1
  if data.sessionInfo.top
    for let m in pageThat.sessionListTop
      if pageThat.sessionListTop[m].id==data.sessionInfo.id
        currentSessionI=m
        pageThat.sessionListTop[m].unreadMessagesNumber=(data.unreadMessagesNumber!==false)?data.unreadMessagesNumber
        :pageThat.sessionListTop[m].unreadMessagesNumber
        if data.unreadMessagesNumber==0 pageThat.sessionListTop[m].unread_fixed_msg=''
        if data.lastMessage
          pageThat.sessionListTop[m].last_time=data.lastMessage.last_time
          pageThat.sessionListTop[m].last_msg=data.lastMessage.last_msg
          pageThat.sessionListTop[m].unread_fixed_msg=data.lastMessage.unread_fixed_msg?.msg||''
        break
  else
    for let m in pageThat.sessionList
      if pageThat.sessionList[m].id==data.sessionInfo.id
        currentSessionI=m
        pageThat.sessionList[m].unreadMessagesNumber=data.unreadMessagesNumber!==false?data.unreadMessagesNumber:pageThat.sessionList[m].unreadMessagesNumber
        if data.unreadMessagesNumber==0 pageThat.sessionList[m].unread_fixed_msg=''
        if data.lastMsg
          pageThat.sessionList[m].last_time=data.lastMsg.last_time
          pageThat.sessionList[m].last_msg=data.lastMsg.last_msg
          pageThat.sessionList[m].unread_fixed_msg=data.lastMsg.unread_fixed_msg?.msg||''
        break
  使用‘splice’操作数组，会造成数据渲染异常/重复；改用filter、unshift未调整会话顺序
  if currentSessionI!==-1
    if moveTop
      if data.sessionInfo.top
        let currentSessionTemp=pageThat.sessionListTop[currentSessionI]
        pageThat.sessionListTop=pageThat.sessionListTop.filter(itm=>itm.id!=data.sessionInfo.id)
        pageThat.sessionListTop.unshift(currentSessionTemp)
      else
        ..
  else
    组装会话资料，建立会话
    let sessionItm={}
    if data.sessionInfo.typ=='single'
      if !data.sessionInfo.pushUser.status return
      let statusV=parseInt(data.sessionInfo.pushUser.status.value)
      if statusV==0
        sessionItm.avatar_gray='im-img-gray'
        sessionItm.user_status='[离线]'
      else if statusV==2
        sessionItm.avatar_gray==''
        sessionItm.user_status='[忙碌]'
      else
        sessionItm.avatar_gray=''
        sessionItm.user_status=''
    sessionItm.id=data.sessionInfo.id
    sessionItm.type=data.sessionInfo.typ
    sessionItm.chat_id=data.sessionInfo.chat_id
    sessionItm.avatar=imgUrl(data.sessionInfo.pushUser.avatar)
    sessionItm.nickname=data.sessionInfo.pushUser.nickname
    sessionItm.top=data.sessionInfo.top?'session-top':''

    sessionItm.last_time=data.lastMsg.last_time,last_msg=data.lastMsg.last_msg,shield=data.shield,unreadMessagesNumber=data.unreadMessagesNumber

    if data.sessionInfo.top pageThat.sessionListTop.unshift(sessionItem)
    else 将会话移动到非置顶会话的第一位

    pageRefresh.addressList=true

},
newMsgNotice(nickname,lastMsg,noticeAvatar,ringing=true){
  新消息通知
  if(parseInt(that.initilizeData.config.user_config.new_message_shake)==1) uni.vibrateLong({})
  铃声
  if ringing && parseInt(..new_msg_sound)==1 newMsgRinging
},
newMsgRinging(){
  if this.innerAudioCxt
    innerAudioCxt.play()
    setTimeout innerAudioCxt.stop() 1500
  else console.error('来信提示音播放失败！')
},
pushCid(type='save'){
  if parseInt(initi..cfg.uni.push_switch)==0 return false
  // #ifdef APP-PLUS
  var cb=info=>{
    send({c:'User',a:'pushCid',data:{clientid:info.clientid,platform:userPlatform,type}})
  }
  let info=plus.push.getClientInfo()
  if info?.clientid cb(info)
  else
    var obtainingCIDTimer=setInterval(()=>{
      info=plus.push.getClientInfo()
      if info?.clientid
        cb(info)
        clearInterval(obtaingCIDTimer)
    },50)
}
}

ws://localhost:9527/webSocket/ ws://192.168.0.43:9527/webSocket/token
{
  event:'forward_message', // pick-user后，前端给后端发送forward-action：pickuser'1,2,3'；type:forward_type='message',message_ids：'';session_id:'' 一次只能转发一条消息，还可转发视频和收藏
  之后后端给前端发送{event:'forward_message',data:{message:[{message:'1',type:'message'}],session_ids:['11']}}

  "toUserId": 6, 用户id sessionId
  action/type:'loadSession/readMsg',
  "content": "今晚一起吃饭吗？", 发送的聊天
  "timestamp": 1714281600000  时间戳
}

toUserId非必传是吧，有必要放到外层吗，不放在data里面吗；还有完全套用以前的数据结构，咋样？代码的执行逻辑有变动吗，从PHP到JAVA，数据结构和代码的执行逻辑可以做到克隆效果吗？

转账密码888888

模拟登录，js逆向，AI大模型无法做到API调用。
# 产品架构
AIGC数字家谱+宗亲基因库+数字永生人

## 短视频、社交服务
自媒体管理
视频上传/转码，热门推荐
广场热门，点赞评论的存储，推荐搜索
视频模块点赞，评论，新增视频和热点
消息聊天和添加好友
## 文件服务
图片/视频的存储
apk包从阿里云拿到服务器，从服务器直接获取
## 监控服务
接口性能监控、异常告警、日志聚合
## 家谱服务
家谱树的生成增删改查，数据处理
寻根模块
名人堂增删改查，数据处理
名人堂内排行榜
ai传记支持新增上传，查询，排行，删除，修改
百家姓查询，数据处理
我的宗祠新增，线上祭祀，祭拜支付对接，寄哀留言
## 特殊成员后台管理功能
## 订单支付（用户、订单、支付、转账、提现）
## 传承人模块（财务统计、升级、挂载、分佣、权限）

pageRefresh：msg/sessionInfo/addressList;pageFun(this.pageDataLoad)
				that.pageThat.pageDataLoad()
# 日报
## 今日
开发A组B组共同确认了，我和子骏对接的是消息、广场、视频的接口，之后忙的话让广睿再一起对接。另外，共同确认了首页家谱轮播样式，让UI调整好消息的搜索样式，并设计好转账消息的样式
梳理common/websocket.js;pagesim/session-info.vue,pick-user.vue的逻辑。

确认转账逻辑为一条‘已转账xxx元’的消息样式，这一点和微信不同。

和子骏确认好我发给他的长连接消息格式，以及他发给我的消息格式。

安装雷电模拟器，在电脑上调整APP样式和交互，开始按照UI设计图调整消息列表界面的样式
## 明日
继续调整消息模块的APP样式，开发3.0版本的广场界面。



仁苇，这两天经过和曾广睿、罗田浩、李子骏、以及其他同事的沟通。目前发现了一些前端项目框架上的问题，以及一些bug，并作出一些总结：

static目录里的图片总体积为138KB，可以全部迁移到服务器上，不要保留在小程序项目源码里；
有测试到网络波动的提示，有点频繁，提示为‘网络信号有点差……’(目前怀疑是WebSocket连接的问题)；
子骏反馈了一个问题，就是页面跳转或交互的嵌套层级较多，用户操作起来不方便，这个在产品设计上需要考虑下；
个人传记的语音对话功能存在问题，不过听子骏说，该功能不在5月份版本中；
目前设置的kaitihuang字体存在字数少的明显缺陷，目前，小程序需选择一个免费的、较为美观的、兼容性好的字体，适用于小程序内的所有文字（有些子页面或交互有额外设置字体的除外，但是也需要注意兼容性问题）
家谱模块的树谱图等比例缩放时，css等比例缩放的属性失效，有兼容性问题；另外，点击向上或向下的圆＋号，要看到更多代的家谱时，会有卡顿问题，还需更多测试以定位问题；

另外，经过和曾广睿、罗田浩的沟通，目前的基于vue2搭建的uni-app项目还算很稳定，还没有较大的变动考虑，比如升级到vue3。
另外经过和罗田浩的沟通，了解到目前用户渠道主要为小程序，且‘基因检测’、‘脑机接口’是指接入第三方；而之前招商启动会上了解到的许多系统是销售相关，跟技术架构没多大关系。

所以，目前看来flutter版本的APP没多大必要，而且谷歌的flutter技术栈需要一定时间和精力的学习成本，需要有一定的排期和投入，尽管说长期维护成本更低。 所以说，目前暂时没必要用flutter额外开发APP。

另外，PHP MVC系统要迁移到JAVA Spring+基于ruoyi框架的vue2后台管理系统的重要性比不上小程序，界面也不算多。本来想改造成vue3版本，但是听田浩说，接口、依赖用的typescript，不太方便改造，所以继续沿用vue2版本的后台管理系统。

我们可以花更多时间来迭代升级小程序的UI、交互等等，以及后台管理系统的开发工作。

另外，我花了点时间看了看项目的一些代码，发现了一些潜在的代码问题：很多v-for的key都用的index，如果存在用户侧增删列表项，或调整顺序的操作的话，会有更新后数据错乱的问题。目前暂未出现；同时改了点代码，加快了首页首屏渲染的速度、修复了树谱图界面的问题‘点击打开详情弹窗后，横向滚动条位置变动’（还需继续修复展开下一代后的聚焦问题，并增加树谱图整体的放大、缩小按钮的功能，以及回到自己按钮的功能）



仁苇，这两天经过和曾广睿、罗田浩、李子骏、以及其他同事的沟通。目前发现了一些前端项目框架上的问题，以及一些bug，并作出一些总结：

## 静态资源占体积，影响小程序包的体积
static目录里的图片总体积为138KB，可以全部迁移到服务器上，不要保留在小程序项目源码里；

## 网络信号有点差……
有测试到网络波动的提示，有点频繁，提示为‘网络信号有点差……’(目前怀疑是WebSocket连接的问题)；

## 页面跳转或交互的嵌套层级较多
子骏反馈了一个问题，就是页面跳转或交互的嵌套层级较多，用户操作起来不方便，这个在产品设计上需要考虑下；

## 个人传记的语音对话功能
个人传记的语音对话功能存在问题，不过听子骏说，该功能不在5月份版本中；

## 字体
目前设置的kaitihuang字体存在字数少的明显缺陷，目前，小程序需选择一个免费的、较为美观的、兼容性好的字体，适用于小程序内的所有文字（有些子页面或交互有额外设置字体的除外，但是也需要注意兼容性问题）

## 树谱图
### 聚焦
目前修复了点开详情弹窗后的聚焦问题，还需继续修复展开更多代后的节点聚焦问题
### 缩放
家谱模块的树谱图等比例缩放时，css等比例缩放的属性失效，有兼容性问题；（改用放大和缩小按钮的点击操作）
### 向上或向下看到更多的代
另外，点击向上或向下的圆＋号，要看到更多代的家谱时，会有卡顿问题（卡顿现象有关数据整理，代码较复杂，较难整改，目前可以加上treeData变化后的选中节点聚焦功能），还需更多测试以定位问题；
### 回到自己
增加‘回到自己’的功能

## 技术升级或架构变动
另外，经过和曾广睿、罗田浩的沟通，目前的基于vue2搭建的uni-app项目还算很稳定，还没有较大的变动考虑，比如升级到vue3。
另外经过和罗田浩的沟通，了解到目前用户渠道主要为小程序，且‘基因检测’、‘脑机接口’是指接入第三方；而之前招商启动会上了解到的许多系统是销售相关，跟技术架构没多大关系。

所以，目前看来flutter版本的APP没多大必要，而且谷歌的flutter技术栈需要一定时间和精力的学习成本，需要有一定的排期和投入，尽管说长期维护成本更低。 所以说，目前暂时没必要用flutter额外开发APP。

## 后台管理系统
另外，PHP MVC系统要迁移到JAVA Spring+基于ruoyi框架的vue2后台管理系统的重要性比不上小程序，界面也不算多。本来想改造成vue3版本，但是听田浩说，接口、依赖用的typescript，不太方便改造，所以继续沿用vue2版本的后台管理系统。

## 代码编写
另外，我花了点时间看了看项目的一些代码，发现了一些潜在的代码问题：很多v-for的key都用的index，如果存在用户侧增删列表项，或调整顺序的操作的话，会有更新后数据错乱的问题。目前暂未出现；
同时改了点代码，减少接口重复调用，优化了一下接口调用的异步逻辑，两个await改成Promise，减少请求等待时间，加快了首页首屏渲染的速度；

## 总结
目前看来，我们可以花更多时间来迭代升级小程序的UI、交互等等，以及后台管理系统的开发工作。没多大必要花时间考虑技术框架的变动。
