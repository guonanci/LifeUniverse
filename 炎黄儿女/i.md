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

搜索好友和群聊功能目前是模糊搜索好友名和群名，无法做到3.0版本UI设计的群内成员的搜索。
热门话题列表，里面是否支持‘新’和‘热门’的标志位？

更改广场推荐页的年龄、城市、行业、在线状态的mock。

测试各个页面的真机的键盘弹出。

```js
{
    "tokens": {
        "im_tourists_token": "70764|8640000|1753951145|e50908d79375a789fb24e9ddc8aef736"
    },
    "userinfo": {
        "id": 70764,
        "type": "user",
        "gongxiantype": "0",
        "user_id": 7717,
        "admin_id": 0,
        "avatar": "https://oss.yanhuangernv.com/zpupload/20230911/bfc12ff4011731d7b4.jpeg",
        "nickname": "郭南赐",
        "email": "",
        "status": 0,
        "identity": "imuser"
    },
    "config": {
        "theme": "default",
        "wss_switch": "1",
        "websocket_port": "2089",
        "max_connections": "9144",
        "ringing": "/assets/addons/fastim/audio/ringing.mp3",
        "__CDN__": "",
        "user_config": {
            "login_status": "0",
            "busy_reply": "你好，我现在有事不在，一会儿再和你联系~",
            "send_message_key": "0",
            "ecs_exit": "1",
            "new_message_shake": "1",
            "new_message_sound": "1",
            "new_message_push_notice": "1",
            "window_display_push_notice": "0",
            "verify_method": "0",
            "add_my_way": "0,1,2,3",
            "temp_session": "1",
            "input_status": "1",
            "mobile_privacy": "1",
            "email_privacy": "1",
            "age_privacy": "1",
            "occupation_privacy": "1",
            "company_privacy": "1"
        },
        "upload": {
            "cdnurl": false,
            "uploadurl": "https://api.yanhuangernv.com/addons/fastim/index/upload",
            "bucket": "local",
            "maxsize": "10mb",
            "mimetype": "jpg,png,bmp,jpeg,gif,webp,zip,rar,wav,mp4,mp3,webm",
            "chunking": false,
            "chunksize": 2097152,
            "savekey": "/{year}{mon}{day}/{filemd5}{.suffix}",
            "multipart": [],
            "multiple": false,
            "fullmode": false,
            "thumbstyle": "",
            "storage": "local"
        },
        "im_name": "FastIm",
        "h5_url": "/h5",
        "open_csr": "1",
        "new_user_tip": "您准备好体验企业IM客服系统了吗？",
        "distribution_group_select": "1",
        "distribution_type": "2",
        "welcome_new_user_msg": "欢迎访问！",
        "no_csr_tip": "您好，人工客服工作时间为：上午8:00至下午18:00。请在工作时间联系人工客服哦~您也可以选择：1、使用不同的关键词询问智能客服。2、点击左下角菜单内的问题反馈给我们留言，我们会尽快与您联系~",
        "uni_push_switch": "0",
        "uni_push_appid": "",
        "uni_push_appkey": "",
        "uni_push_master_secret": "",
        "package_name_android": ""
    }
}
```

{
    "type": "TODO_LIST_RESPONSE",
    "success": true,
    "message": "Success",
    "data": [
        {
            "id": 6,
            "type": "default",
            "groupId": 0,
            "sessionId": 0,
            "senderId": 0,
            "recipientId": 0,
            "message": "6666",
            "readNumber": 0,
            "status": 0,
            "createtime": null,
            "deleteuser": null,
            "content": null
        }
    ]
}
创建群聊；加好友、群；扫一扫；搜索好友、最近会话、群聊；
聊天设置chat-setting；search;new-contact;notice-message-info;notice-session-info;

userPage 人脉走的接口返回，没用上WebSocket统计；

address-list: loadContact;
pick-user: serach 已废弃；被new-contact的searchNewContact替代；
new-contact:openSession
pick-user forward

distributionGroupSelect啥意思？？--distributionCsr
loadKbs 客服代表分组、联系人工客服

OPEN_SESSION打开会话；DISTRIBUTION_CSR客服代表分组的选择操作，打开已有的客服对话或者新建客服对话；LOAD_KBS加载客服分组；GROUP_CHAT_NOTICE_OPT查看群公告详情；

INFO_DETAIL查看用户详情；LOAD_CONTACT获取好友数量和群数量；LOAD_SESSION_LIST加载会话列表；SESSION_OPERATION会话操作（置顶、取消置顶、删删除）

SEND_ORDER查看合同；

infoDetial info-detail(ws.js Line887) getUploadMultipart(edit-info.vue);

familytrees.vue;

address-list：新的朋友、常用联系人、群聊

个人搜索+群聊搜索+外面大搜索（xhr），添加好友申请与确认同意（socket） ；

socket搜索出所有sessions对话列表，session页面的操作，比如：置顶和取消置顶、删除会话、发送消息（图片+视频+收藏+语音） 、转发消息给多个好友；

查看用户主页内的信息（xhr）；

群聊设置，设置管理员，管理员权限管理


top-contacts: loadContact top-friend取消置顶
{"c":"User","a":"sessionOperation","data":{"id":12442,"action":"session-top","source":"uni-app"}}

{"event":"session-operation-tips","data":{"type":"success","msg":"\u4f1a\u8bdd\u5df2\u7f6e\u9876~"}}

{"c":"User","a":"loadSessionList","data":{"refresh":false}}
{"c":"ImBase","a":"loadTODO","data":{"method":"get-all-count"}}
{"event":"load_session_list","data":{"session":[{"sessionInfo":{"id":12442,"type":"single","user_one":70042,"user_two":70764,"chat_id":0,"createtime":1744349975,"deleteuser":0,"aiid":0,"gc_chat_id":null,"gc_history_message":null,"jointime":null,"m_createtime":1744349975,"top":1,"pushUser":{"id":70042,"type":"user","gongxiantype":"2","avatar":"zpupload\/image\/touxiang\/42.jpg","nickname":"\u5f20\u6167\u7433","status":{"value":0,"chinese":"\u79bb\u7ebf"},"bio":"\u8fd9\u5bb6\u4f19\u5f88\u61d2\uff0c\u4ec0\u4e48\u4e5f\u6ca1\u5199\uff01","gender":{"chinese":"\u5973","value":"female"},"welcome_msg":null,"fu_user_id":7042,"group":"all_friends","friend":true,"remark":"","nickname_origin":"\u5f20\u6167\u7433"},"searchContinue":true},"lastMessage":{"last_time":"1\u5468\u524d","last_message":"\u6211\u4eec\u5df2\u7ecf\u662f\u597d\u53cb\u4e86~","unread_fixed_msg":""},"unreadMessagesNumber":0},{"sessionInfo":{"id":11793,"type":"service","user_one":70764,"user_two":0,"chat_id":3,"createtime":1743164936,"deleteuser":0,"aiid":0,"gc_chat_id":null,"gc_history_message":null,"jointime":null,"m_createtime":1745393789,"top":null,"searchContinue":false,"pushUser":{"nickname":"\u5ba2\u670d\u5c0f\u708e","avatar":"\/assets\/addons\/fastim\/img\/csr.png","id":3,"bio":"\u63a5\u53d7\u5ba2\u670d\u670d\u52a1\u6d88\u606f"}},"lastMessage":{"last_time":"2\u5468\u524d","last_message":"22","unread_fixed_msg":""},"unreadMessagesNumber":0},{"sessionInfo":{"id":12262,"type":"service","user_one":70764,"user_two":0,"chat_id":1,"createtime":1743991461,"deleteuser":0,"aiid":0,"gc_chat_id":null,"gc_history_message":null,"jointime":null,"m_createtime":1745392474,"top":null,"searchContinue":false,"pushUser":{"nickname":"\u65b0\u670b\u53cb","avatar":"\/assets\/addons\/fastim\/img\/new_friends.png","id":1,"bio":"\u63a5\u53d7\u65b0\u597d\u53cb\u9a8c\u8bc1\u6d88\u606f"}},"lastMessage":{"last_time":"15:14","last_message":"\u7533\u8bf7\u6dfb\u52a0Jun\u4e3a\u597d\u53cb","unread_fixed_msg":""},"unreadMessagesNumber":0},{"sessionInfo":{"id":12350,"type":"service","user_one":70764,"user_two":0,"chat_id":2,"createtime":1744187860,"deleteuser":0,"aiid":0,"gc_chat_id":null,"gc_history_message":null,"jointime":null,"m_createtime":1744961575,"top":null,"searchContinue":false,"pushUser":{"nickname":"\u7fa4\u901a\u77e5","avatar":"data:image\/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxMDAiIHdpZHRoPSIxMDAiPjxyZWN0IGZpbGw9InJnYigyNTUsMTc1LDgxKSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjwvcmVjdD48dGV4dCB4PSI1MCIgeT0iNTAiIGZvbnQtc2l6ZT0iNTAiIHRleHQtY29weT0iZmFzdCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgdGV4dC1yaWdodHM9ImFkbWluIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCI+576kPC90ZXh0Pjwvc3ZnPg==","id":2,"bio":"\u63a5\u53d7\u7fa4\u804a\u901a\u77e5\u6d88\u606f"}},"lastMessage":{"last_time":"5\u5929\u524d","last_message":"\u674e\u5b50\u9a8f\u9000\u51fa\u4e86\u7fa4\u804a\u90ed\u6c0f\u5bb6\u8c31","unread_fixed_msg":""},"unreadMessagesNumber":1},{"sessionInfo":{"id":12440,"type":"single","user_one":70045,"user_two":70764,"chat_id":0,"createtime":1744349964,"deleteuser":0,"aiid":0,"gc_chat_id":null,"gc_history_message":null,"jointime":null,"m_createtime":1744349964,"top":null,"pushUser":{"id":70045,"type":"user","gongxiantype":"2","avatar":"zpupload\/image\/touxiang\/45.jpg","nickname":"\u6797\u7433","status":{"value":0,"chinese":"\u79bb\u7ebf"},"bio":"\u8fd9\u5bb6\u4f19\u5f88\u61d2\uff0c\u4ec0\u4e48\u4e5f\u6ca1\u5199\uff01","gender":{"chinese":"\u5973","value":"female"},"welcome_msg":null,"fu_user_id":7045,"group":"all_friends","friend":true,"remark":"","nickname_origin":"\u6797\u7433"},"searchContinue":true},"lastMessage":{"last_time":"1\u5468\u524d","last_message":"\u6211\u4eec\u5df2\u7ecf\u662f\u597d\u53cb\u4e86~","unread_fixed_msg":""},"unreadMessagesNumber":0},{"sessionInfo":{"id":12438,"type":"single","user_one":70070,"user_two":70764,"chat_id":0,"createtime":1744349927,"deleteuser":0,"aiid":0,"gc_chat_id":null,"gc_history_message":null,"jointime":null,"m_createtime":1744349927,"top":null,"pushUser":{"id":70070,"type":"user","gongxiantype":"2","avatar":"zpupload\/image\/touxiang\/70.jpg","nickname":"\u80e1\u8431","status":{"value":0,"chinese":"\u79bb\u7ebf"},"bio":"\u8fd9\u5bb6\u4f19\u5f88\u61d2\uff0c\u4ec0\u4e48\u4e5f\u6ca1\u5199\uff01","gender":{"chinese":"\u5973","value":"female"},"welcome_msg":null,"fu_user_id":7070,"group":"all_friends","friend":true,"remark":"","nickname_origin":"\u80e1\u8431"},"searchContinue":true},"lastMessage":{"last_time":"1\u5468\u524d","last_message":"\u6211\u4eec\u5df2\u7ecf\u662f\u597d\u53cb\u4e86~","unread_fixed_msg":""},"unreadMessagesNumber":0},{"sessionInfo":{"id":12437,"type":"single","user_one":70096,"user_two":70764,"chat_id":0,"createtime":1744349806,"deleteuser":0,"aiid":0,"gc_chat_id":null,"gc_history_message":null,"jointime":null,"m_createtime":1744349806,"top":null,"pushUser":{"id":70096,"type":"user","gongxiantype":"2","avatar":"zpupload\/image\/touxiang\/96.jpg","nickname":"\u5f20\u9759\u8431","status":{"value":0,"chinese":"\u79bb\u7ebf"},"bio":"\u8fd9\u5bb6\u4f19\u5f88\u61d2\uff0c\u4ec0\u4e48\u4e5f\u6ca1\u5199\uff01","gender":{"chinese":"\u5973","value":"female"},"welcome_msg":null,"fu_user_id":7096,"group":"all_friends","friend":true,"remark":"","nickname_origin":"\u5f20\u9759\u8431"},"searchContinue":true},"lastMessage":{"last_time":"1\u5468\u524d","last_message":"\u6211\u4eec\u5df2\u7ecf\u662f\u597d\u53cb\u4e86~","unread_fixed_msg":""},"unreadMessagesNumber":1},{"sessionInfo":{"id":12436,"type":"single","user_one":70093,"user_two":70764,"chat_id":0,"createtime":1744349788,"deleteuser":0,"aiid":0,"gc_chat_id":null,"gc_history_message":null,"jointime":null,"m_createtime":1744349788,"top":null,"pushUser":{"id":70093,"type":"user","gongxiantype":"2","avatar":"zpupload\/image\/touxiang\/93.jpg","nickname":"\u738b\u6615","status":{"value":0,"chinese":"\u79bb\u7ebf"},"bio":"\u8fd9\u5bb6\u4f19\u5f88\u61d2\uff0c\u4ec0\u4e48\u4e5f\u6ca1\u5199\uff01","gender":{"chinese":"\u5973","value":"female"},"welcome_msg":null,"fu_user_id":7093,"group":"all_friends","friend":true,"remark":"","nickname_origin":"\u738b\u6615"},"searchContinue":true},"lastMessage":{"last_time":"1\u5468\u524d","last_message":"\u6211\u4eec\u5df2\u7ecf\u662f\u597d\u53cb\u4e86~","unread_fixed_msg":""},"unreadMessagesNumber":1},{"sessionInfo":{"id":12353,"type":"group","user_one":70764,"user_two":0,"chat_id":742,"createtime":1744188197,"deleteuser":0,"aiid":0,"gc_chat_id":742,"gc_history_message":0,"jointime":1744188197,"m_createtime":1744188197,"top":null,"searchContinue":true,"pushUser":{"nickname":"\u5f00\u53d1B\u7ec4","avatar":"data:image\/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxMDAiIHdpZHRoPSIxMDAiPjxyZWN0IGZpbGw9InJnYigyMjksMTYwLDIyOSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+PHRleHQgeD0iNTAiIHk9IjUwIiBmb250LXNpemU9IjUwIiB0ZXh0LWNvcHk9ImZhc3QiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRleHQtcmlnaHRzPSJhZG1pbiIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiPuW8gDwvdGV4dD48L3N2Zz4=","id":742,"bio":"B","history_message":0},"shield":false},"lastMessage":{"last_time":"1\u5468\u524d","last_message":"\u4f60\u5df2\u7ecf\u662f\u7fa4\u6210\u5458\u4e86\uff0c\u548c\u5927\u5bb6\u6253\u4e2a\u62db\u547c\u5427~","unread_fixed_msg":""},"unreadMessagesNumber":0},{"sessionInfo":{"id":12310,"type":"single","user_one":70764,"user_two":2266,"chat_id":0,"createtime":1744098857,"deleteuser":0,"aiid":0,"gc_chat_id":null,"gc_history_message":null,"jointime":null,"m_createtime":1744187618,"top":null,"pushUser":{"id":2266,"type":"user","gongxiantype":"0","avatar":"https:\/\/oss.yanhuangernv.com\/zpupload\/20240920\/a5796b41c9bf306aa0.jpg","nickname":"\u66fe\u5e7f\u777f","status":{"value":1,"chinese":"\u5728\u7ebf"},"bio":"\u8fd9\u5bb6\u4f19\u5f88\u61d2\uff0c\u4ec0\u4e48\u4e5f\u6ca1\u5199\uff01","gender":{"chinese":"\u4fdd\u5bc6","value":"secrecy"},"welcome_msg":null,"fu_user_id":3349,"group":"all_friends","friend":true,"remark":"","nickname_origin":"\u66fe\u5e7f\u777f"},"searchContinue":true},"lastMessage":{"last_time":"1\u5468\u524d","last_message":"1","unread_fixed_msg":""},"unreadMessagesNumber":0},{"sessionInfo":{"id":12263,"type":"single","user_one":70764,"user_two":70556,"chat_id":0,"createtime":1743991535,"deleteuser":0,"aiid":0,"gc_chat_id":null,"gc_history_message":null,"jointime":null,"m_createtime":1744186860,"top":null,"pushUser":{"id":70556,"type":"user","gongxiantype":"0","avatar":"https:\/\/oss.yanhuangernv.com\/zpupload\/20230911\/bfc12ff4011731d7b4.jpeg","nickname":"\u674e\u5b50\u9a8f","status":{"value":1,"chinese":"\u5728\u7ebf"},"bio":"\u8fd9\u5bb6\u4f19\u5f88\u61d2\uff0c\u4ec0\u4e48\u4e5f\u6ca1\u5199\uff01","gender":{"chinese":"\u4fdd\u5bc6","value":"secrecy"},"welcome_msg":null,"fu_user_id":7526,"group":"all_friends","friend":true,"remark":"","nickname_origin":"\u674e\u5b50\u9a8f"},"searchContinue":true},"lastMessage":{"last_time":"1\u5468\u524d","last_message":"[\u89c6\u9891]","unread_fixed_msg":""},"unreadMessagesNumber":0},{"sessionInfo":{"id":12319,"type":"group","user_one":70764,"user_two":0,"chat_id":736,"createtime":1744106031,"deleteuser":0,"aiid":0,"gc_chat_id":736,"gc_history_message":0,"jointime":1744106031,"m_createtime":1744106031,"top":null,"searchContinue":true,"pushUser":{"nickname":"\u90ed\u6c0f\u5bb6\u8c31","avatar":"data:image\/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxMDAiIHdpZHRoPSIxMDAiPjxyZWN0IGZpbGw9InJnYigxODMsMjI5LDE2MCkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+PHRleHQgeD0iNTAiIHk9IjUwIiBmb250LXNpemU9IjUwIiB0ZXh0LWNvcHk9ImZhc3QiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRleHQtcmlnaHRzPSJhZG1pbiIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiPumDrTwvdGV4dD48L3N2Zz4=","id":736,"bio":"","history_message":0},"shield":false},"lastMessage":{"last_time":"2\u5468\u524d","last_message":"\u90ed\u5357\u8d50:\u6b22\u8fce\u52a0\u5165\u90ed\u6c0f\u5bb6\u8c31\u5927\u5bb6\u5ead","unread_fixed_msg":""},"unreadMessagesNumber":0}],"data":{"refresh":"","method":"load"}}}
{"event":"load_to_do","data":{"count":0,"data":{"method":"get-all-count"}}}

前端代码不能随意改。不然曾总动不动就说‘跑路’。。

info.vue/pick-user.vue 跳转到edit-info.vue

{"event":"info-detail","data":{"info":{"id":70764,"type":"user","gongxiantype":"0","avatar":"https:\/\/oss.yanhuangernv.com\/zpupload\/20230911\/bfc12ff4011731d7b4.jpeg","nickname":"\u90ed\u5357\u8d50","mobile":"18201949282","email":null,"age":0,"birthday":false,"occupation":0,"company":"","bio":"\u8fd9\u5bb6\u4f19\u5f88\u61d2\uff0c\u4ec0\u4e48\u4e5f\u6ca1\u5199\uff01","gender":{"chinese":"\u4fdd\u5bc6","value":"secrecy"},"status":{"value":1,"chinese":"\u5728\u7ebf"},"welcome_msg":null,"fu_user_id":7717,"friend":true,"remark":"","nickname_origin":"\u90ed\u5357\u8d50","groups":[{"id":"common","name":"\u5e38\u7528\u8054\u7cfb\u4eba"},{"id":"all_friends","name":"\u5168\u90e8\u597d\u53cb"}],"occupationData":["\u4fdd\u5bc6","\u8ba1\u7b97\u673a\/\u4e92\u8054\u7f51\/\u901a\u4fe1","\u751f\u4ea7\/\u5de5\u827a\/\u5236\u9020","\u533b\u7597\/\u62a4\u7406\/\u5236\u836f","\u91d1\u878d\/\u94f6\u884c\/\u6295\u8d44\/\u4fdd\u9669","\u5546\u4e1a\/\u670d\u52a1\u4e1a\/\u4e2a\u4f53\u7ecf\u8425","\u6587\u5316\/\u5e7f\u544a\/\u4f20\u5a92","\u5a31\u4e50\/\u827a\u672f\/\u8868\u6f14","\u5f8b\u5e08\/\u6cd5\u52a1","\u6559\u80b2\/\u57f9\u8bad","\u516c\u52a1\u5458\/\u884c\u653f\/\u4e8b\u4e1a\u5355\u4f4d","\u6a21\u7279","\u7a7a\u59d0","\u5b66\u751f","\u5176\u4ed6"]},"data":{"id":"70764","type":"user","method":"user-edit"}}}

{"event":"session-setting","data":{"session_info":{"id":12353,"type":"group","user_one":70764,"user_two":0,"chat_id":742,"createtime":1744188197,"deleteuser":0,"aiid":0,"sessionUser":{"id":742,"leader":70764,"avatar":"data:image\/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxMDAiIHdpZHRoPSIxMDAiPjxyZWN0IGZpbGw9InJnYigyMjksMTYwLDIyOSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+PHRleHQgeD0iNTAiIHk9IjUwIiBmb250LXNpemU9IjUwIiB0ZXh0LWNvcHk9ImZhc3QiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRleHQtcmlnaHRzPSJhZG1pbiIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiPuW8gDwvdGV4dD48L3N2Zz4=","nickname":"\u5f00\u53d1B\u7ec4","bio":"B","max_user_count":5000,"add_mode":0,"invite_join_group":0,"speak":0,"history_message":0,"retrieval_settings":0,"createtime":1744188197,"deletetime":null,"family_id":null,"qun_id":0,"user_count":2},"user":{"id":70764,"type":"user","gongxiantype":"0","avatar":"https:\/\/oss.yanhuangernv.com\/zpupload\/20230911\/bfc12ff4011731d7b4.jpeg","nickname":"\u90ed\u5357\u8d50","status":{"value":1,"chinese":"\u5728\u7ebf"},"bio":"\u8fd9\u5bb6\u4f19\u5f88\u61d2\uff0c\u4ec0\u4e48\u4e5f\u6ca1\u5199\uff01","gender":{"chinese":"\u4fdd\u5bc6","value":"secrecy"},"welcome_msg":null,"fu_user_id":7717,"friend":false,"remark":"","nickname_origin":"\u90ed\u5357\u8d50"},"top":false,"block_messages":false,"nickname":"","isLeader":true,"notice":"0\u6761"}}}

{"event":"group_chat_member","data":{"data":{"id":"742","method":"get","limit":"11"},"group_member":[{"nickname":"","speaktime":"2\u5468\u524d","jointime":1744188197,"id":70764,"avatar":"https:\/\/oss.yanhuangernv.com\/zpupload\/20230911\/bfc12ff4011731d7b4.jpeg","status":1,"is_friend":true,"nickname_origin":"\u90ed\u5357\u8d50"},{"nickname":"","speaktime":"2\u5468\u524d","jointime":1744188197,"id":70556,"avatar":"https:\/\/oss.yanhuangernv.com\/zpupload\/20230911\/bfc12ff4011731d7b4.jpeg","status":0,"is_friend":70764,"nickname_origin":"\u674e\u5b50\u9a8f"}],"info":{"id":742,"leader":70764,"avatar":"data:image\/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxMDAiIHdpZHRoPSIxMDAiPjxyZWN0IGZpbGw9InJnYigyMjksMTYwLDIyOSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+PHRleHQgeD0iNTAiIHk9IjUwIiBmb250LXNpemU9IjUwIiB0ZXh0LWNvcHk9ImZhc3QiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRleHQtcmlnaHRzPSJhZG1pbiIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiPuW8gDwvdGV4dD48L3N2Zz4=","nickname":"\u5f00\u53d1B\u7ec4","bio":"B","max_user_count":5000,"add_mode":0,"invite_join_group":0,"speak":0,"history_message":0,"retrieval_settings":0,"createtime":1744188197,"deletetime":null,"family_id":null,"qun_id":0,"user_count":2}}}

{"event":"info-detail","data":{"info":{"id":742,"leader":{"id":70764,"type":"user","gongxiantype":"0","avatar":"https:\/\/oss.yanhuangernv.com\/zpupload\/20230911\/bfc12ff4011731d7b4.jpeg","nickname":"\u90ed\u5357\u8d50","mobile":"18201949282","email":null,"age":0,"birthday":"","occupation":0,"company":"","bio":"\u8fd9\u5bb6\u4f19\u5f88\u61d2\uff0c\u4ec0\u4e48\u4e5f\u6ca1\u5199\uff01","gender":{"chinese":"\u4fdd\u5bc6","value":"secrecy"},"status":{"value":1,"chinese":"\u5728\u7ebf"},"welcome_msg":null,"fu_user_id":7717,"friend":true,"remark":"","nickname_origin":"\u90ed\u5357\u8d50"},"avatar":"data:image\/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxMDAiIHdpZHRoPSIxMDAiPjxyZWN0IGZpbGw9InJnYigyMjksMTYwLDIyOSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+PHRleHQgeD0iNTAiIHk9IjUwIiBmb250LXNpemU9IjUwIiB0ZXh0LWNvcHk9ImZhc3QiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRleHQtcmlnaHRzPSJhZG1pbiIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiPuW8gDwvdGV4dD48L3N2Zz4=","nickname":"\u5f00\u53d1B\u7ec4","bio":"B","max_user_count":5000,"add_mode":0,"invite_join_group":0,"speak":0,"history_message":0,"retrieval_settings":0,"createtime":"2\u5468\u524d","deletetime":null,"family_id":null,"qun_id":0,"user_count":2,"isLeader":true,"groupMember":742,"group":"all_group","groups":[{"id":"all_group","name":"\u5168\u90e8\u7fa4\u804a"}]},"data":{"method":"get","type":"group","id":"742","requestor":"70764","refresh":""}}}

{"event":"load_session","data":{"message":[{"datetime":"2\u5468\u524d","data":[{"id":14623,"type":"system","group_id":742,"session_id":0,"sender_id":70764,"recipient_id":0,"message":{"message":"\u4f60\u5df2\u7ecf\u662f\u7fa4\u6210\u5458\u4e86\uff0c\u548c\u5927\u5bb6\u6253\u4e2a\u62db\u547c\u5427~","display_user":"all"},"read_number":0,"status":0,"createtime":1744188197,"deleteuser":null,"content":null,"sender":"me","userInfo":{"id":70764,"type":"user","gongxiantype":"0","avatar":"https:\/\/oss.yanhuangernv.com\/zpupload\/20230911\/bfc12ff4011731d7b4.jpeg","nickname":"\u90ed\u5357\u8d50","status":{"value":1,"chinese":"\u5728\u7ebf"},"bio":"\u8fd9\u5bb6\u4f19\u5f88\u61d2\uff0c\u4ec0\u4e48\u4e5f\u6ca1\u5199\uff01","gender":{"chinese":"\u4fdd\u5bc6","value":"secrecy"},"welcome_msg":null,"fu_user_id":7717,"friend":true,"remark":"","nickname_origin":"\u90ed\u5357\u8d50"}}]}],"info":{"id":12353,"type":"group","user_one":70764,"user_two":0,"chat_id":742,"createtime":1744188197,"deleteuser":0,"aiid":0,"sessionUser":{"id":742,"leader":70764,"avatar":"data:image\/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxMDAiIHdpZHRoPSIxMDAiPjxyZWN0IGZpbGw9InJnYigyMjksMTYwLDIyOSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+PHRleHQgeD0iNTAiIHk9IjUwIiBmb250LXNpemU9IjUwIiB0ZXh0LWNvcHk9ImZhc3QiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRleHQtcmlnaHRzPSJhZG1pbiIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiPuW8gDwvdGV4dD48L3N2Zz4=","nickname":"\u5f00\u53d1B\u7ec4","bio":"B","max_user_count":5000,"add_mode":0,"invite_join_group":0,"speak":0,"history_message":0,"retrieval_settings":0,"createtime":1744188197,"deletetime":null,"family_id":null,"qun_id":0,"user_count":2},"user":{"id":70764,"type":"user","gongxiantype":"0","avatar":"https:\/\/oss.yanhuangernv.com\/zpupload\/20230911\/bfc12ff4011731d7b4.jpeg","nickname":"\u90ed\u5357\u8d50","status":{"value":1,"chinese":"\u5728\u7ebf"},"bio":"\u8fd9\u5bb6\u4f19\u5f88\u61d2\uff0c\u4ec0\u4e48\u4e5f\u6ca1\u5199\uff01","gender":{"chinese":"\u4fdd\u5bc6","value":"secrecy"},"welcome_msg":null,"fu_user_id":7717,"friend":false,"remark":"","nickname_origin":"\u90ed\u5357\u8d50"},"top":null,"windowType":"message"},"nextpage":false,"data":{"session_id":"12353","page":1},"lastMessage":{"last_time":"2\u5468\u524d","last_message":"\u4f60\u5df2\u7ecf\u662f\u7fa4\u6210\u5458\u4e86\uff0c\u548c\u5927\u5bb6\u6253\u4e2a\u62db\u547c\u5427~","unread_fixed_msg":""},"unreadFixedMsg":false}}

{"event":"info-detail","data":{"info":{"id":742,"leader":{"id":70764,"type":"user","gongxiantype":"0","avatar":"https:\/\/oss.yanhuangernv.com\/zpupload\/20230911\/bfc12ff4011731d7b4.jpeg","nickname":"\u90ed\u5357\u8d50","mobile":"18201949282","email":null,"age":0,"birthday":"","occupation":0,"company":"","bio":"\u8fd9\u5bb6\u4f19\u5f88\u61d2\uff0c\u4ec0\u4e48\u4e5f\u6ca1\u5199\uff01","gender":{"chinese":"\u4fdd\u5bc6","value":"secrecy"},"status":{"value":1,"chinese":"\u5728\u7ebf"},"welcome_msg":null,"fu_user_id":7717,"friend":true,"remark":"","nickname_origin":"\u90ed\u5357\u8d50"},"avatar":"data:image\/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxMDAiIHdpZHRoPSIxMDAiPjxyZWN0IGZpbGw9InJnYigyMjksMTYwLDIyOSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+PHRleHQgeD0iNTAiIHk9IjUwIiBmb250LXNpemU9IjUwIiB0ZXh0LWNvcHk9ImZhc3QiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRleHQtcmlnaHRzPSJhZG1pbiIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiPuW8gDwvdGV4dD48L3N2Zz4=","nickname":"\u5f00\u53d1B\u7ec4","bio":"B","max_user_count":5000,"add_mode":0,"invite_join_group":0,"speak":0,"history_message":0,"retrieval_settings":0,"createtime":"2\u5468\u524d","deletetime":null,"family_id":null,"qun_id":0,"user_count":2,"isLeader":true,"groupMember":742,"group":"all_group","groups":[{"id":"all_group","name":"\u5168\u90e8\u7fa4\u804a"}]},"data":{"id":"742","type":"group","method":"group-edit"}}}

{
    "total": 1,
    "rows": [
        {
            "id": 6,
            "avatar": "",
            "nickName": "大头",
            "status": "0",
            "bio": null,
            "gender": null,
            "is_friend": false,
            "remark": null
        }
    ],
    "code": 200,
    "msg": "查询成功"
}
[
    {
        "sessionInfo": {
            "id": 11524,
            "type": "service",
            "userOne": 6,
            "userTwo": 1,
            "chatId": 0,
            "createtime": 1745630766,
            "deleteuser": 0,
            "aiid": 0,
            "gcChatId": null,
            "gcHistoryMessage": null,
            "jointime": null,
            "top": null,
            "searchContinue": null,
            "pushUser": {
                "nickname": "炎黄儿女系统",
                "avatar": "http://8.136.127.105:9000/ruoyi/2024/11/09/1e8e3b155a304887929505c4ac22fdec.png",
                "id": null,
                "bio": null
            },
            "mcreatetime": null
        },
        "lastMessage": {
            "lastTime": "过去了2883439周",
            "lastMessage": null,
            "unreadFixedMsg": null
        },
        "unreadMessagesNumber": 0
    },
    {
        "sessionInfo": {
            "id": 11525,
            "type": "service",
            "userOne": 6,
            "userTwo": 1,
            "chatId": 0,
            "createtime": 1745630766,
            "deleteuser": 0,
            "aiid": 0,
            "gcChatId": null,
            "gcHistoryMessage": null,
            "jointime": null,
            "top": null,
            "searchContinue": null,
            "pushUser": {
                "nickname": "炎黄儿女系统",
                "avatar": "http://8.136.127.105:9000/ruoyi/2024/11/09/1e8e3b155a304887929505c4ac22fdec.png",
                "id": null,
                "bio": null
            },
            "mcreatetime": null
        },
        "lastMessage": {
            "lastTime": "过去了2883439周",
            "lastMessage": null,
            "unreadFixedMsg": null
        },
        "unreadMessagesNumber": 0
    },
    {
        "sessionInfo": {
            "id": 11526,
            "type": "service",
            "userOne": 6,
            "userTwo": 1,
            "chatId": 0,
            "createtime": 1745630766,
            "deleteuser": 0,
            "aiid": 0,
            "gcChatId": null,
            "gcHistoryMessage": null,
            "jointime": null,
            "top": null,
            "searchContinue": null,
            "pushUser": {
                "nickname": "炎黄儿女系统",
                "avatar": "http://8.136.127.105:9000/ruoyi/2024/11/09/1e8e3b155a304887929505c4ac22fdec.png",
                "id": null,
                "bio": null
            },
            "mcreatetime": null
        },
        "lastMessage": {
            "lastTime": "过去了2883439周",
            "lastMessage": null,
            "unreadFixedMsg": null
        },
        "unreadMessagesNumber": 0
    },
    {
        "sessionInfo": {
            "id": 11527,
            "type": "service",
            "userOne": 6,
            "userTwo": 1,
            "chatId": 0,
            "createtime": 1745630766,
            "deleteuser": 0,
            "aiid": 0,
            "gcChatId": null,
            "gcHistoryMessage": null,
            "jointime": null,
            "top": null,
            "searchContinue": null,
            "pushUser": {
                "nickname": "炎黄儿女系统",
                "avatar": "http://8.136.127.105:9000/ruoyi/2024/11/09/1e8e3b155a304887929505c4ac22fdec.png",
                "id": null,
                "bio": null
            },
            "mcreatetime": null
        },
        "lastMessage": {
            "lastTime": "过去了2883439周",
            "lastMessage": null,
            "unreadFixedMsg": null
        },
        "unreadMessagesNumber": 0
    },
    {
        "sessionInfo": {
            "id": 11528,
            "type": "service",
            "userOne": 6,
            "userTwo": 1,
            "chatId": 0,
            "createtime": 1745630766,
            "deleteuser": 0,
            "aiid": 0,
            "gcChatId": null,
            "gcHistoryMessage": null,
            "jointime": null,
            "top": null,
            "searchContinue": null,
            "pushUser": {
                "nickname": "炎黄儿女系统",
                "avatar": "http://8.136.127.105:9000/ruoyi/2024/11/09/1e8e3b155a304887929505c4ac22fdec.png",
                "id": null,
                "bio": null
            },
            "mcreatetime": null
        },
        "lastMessage": {
            "lastTime": "过去了2883439周",
            "lastMessage": null,
            "unreadFixedMsg": null
        },
        "unreadMessagesNumber": 0
    },
    {
        "sessionInfo": {
            "id": 11529,
            "type": "service",
            "userOne": 6,
            "userTwo": 1,
            "chatId": 0,
            "createtime": 1745630766,
            "deleteuser": 0,
            "aiid": 0,
            "gcChatId": null,
            "gcHistoryMessage": null,
            "jointime": null,
            "top": null,
            "searchContinue": null,
            "pushUser": {
                "nickname": "炎黄儿女系统",
                "avatar": "http://8.136.127.105:9000/ruoyi/2024/11/09/1e8e3b155a304887929505c4ac22fdec.png",
                "id": null,
                "bio": null
            },
            "mcreatetime": null
        },
        "lastMessage": {
            "lastTime": "过去了2883439周",
            "lastMessage": null,
            "unreadFixedMsg": null
        },
        "unreadMessagesNumber": 0
    },
    {
        "sessionInfo": {
            "id": 11530,
            "type": "service",
            "userOne": 6,
            "userTwo": 1,
            "chatId": 0,
            "createtime": 1745630766,
            "deleteuser": 0,
            "aiid": 0,
            "gcChatId": null,
            "gcHistoryMessage": null,
            "jointime": null,
            "top": null,
            "searchContinue": null,
            "pushUser": {
                "nickname": "炎黄儿女系统",
                "avatar": "http://8.136.127.105:9000/ruoyi/2024/11/09/1e8e3b155a304887929505c4ac22fdec.png",
                "id": null,
                "bio": null
            },
            "mcreatetime": null
        },
        "lastMessage": {
            "lastTime": "过去了2883439周",
            "lastMessage": null,
            "unreadFixedMsg": null
        },
        "unreadMessagesNumber": 0
    },
    {
        "sessionInfo": {
            "id": 11531,
            "type": "service",
            "userOne": 6,
            "userTwo": 1,
            "chatId": 0,
            "createtime": 1745630766,
            "deleteuser": 0,
            "aiid": 0,
            "gcChatId": null,
            "gcHistoryMessage": null,
            "jointime": null,
            "top": null,
            "searchContinue": null,
            "pushUser": {
                "nickname": "炎黄儿女系统",
                "avatar": "http://8.136.127.105:9000/ruoyi/2024/11/09/1e8e3b155a304887929505c4ac22fdec.png",
                "id": null,
                "bio": null
            },
            "mcreatetime": null
        },
        "lastMessage": {
            "lastTime": "过去了2883439周",
            "lastMessage": null,
            "unreadFixedMsg": null
        },
        "unreadMessagesNumber": 0
    },
    {
        "sessionInfo": {
            "id": 11534,
            "type": "service",
            "userOne": 11,
            "userTwo": 6,
            "chatId": 0,
            "createtime": 1745630864,
            "deleteuser": 0,
            "aiid": 0,
            "gcChatId": null,
            "gcHistoryMessage": null,
            "jointime": null,
            "top": null,
            "searchContinue": null,
            "pushUser": {
                "nickname": "大头",
                "avatar": "",
                "id": null,
                "bio": null
            },
            "mcreatetime": null
        },
        "lastMessage": {
            "lastTime": "过去了2883439周",
            "lastMessage": null,
            "unreadFixedMsg": null
        },
        "unreadMessagesNumber": 0
    },
    {
        "sessionInfo": {
            "id": 11532,
            "type": "single",
            "userOne": 6,
            "userTwo": 1,
            "chatId": 0,
            "createtime": 1745630864,
            "deleteuser": 0,
            "aiid": 0,
            "gcChatId": null,
            "gcHistoryMessage": null,
            "jointime": null,
            "top": null,
            "searchContinue": null,
            "pushUser": {
                "nickname": "炎黄儿女系统",
                "avatar": "http://8.136.127.105:9000/ruoyi/2024/11/09/1e8e3b155a304887929505c4ac22fdec.png",
                "id": null,
                "bio": null
            },
            "mcreatetime": null
        },
        "lastMessage": {
            "lastTime": "过去了2883439周",
            "lastMessage": null,
            "unreadFixedMsg": null
        },
        "unreadMessagesNumber": 0
    }
]


family_id1449 jiapu/category jiapu/index/index?family_id=1449

谱书页：有页数统计吗？

onMessageCallBack失效？？ 18146611487

ws.js imSession({..}) getUploadMultipart无用？？  center/general-sesstings updateUserConfig?
聊天的头像都是后端返的avatar字段； msg.data.type == 'single'/group/service

全家福详情界面上方还有内容，要不要显示，还有删除按钮；序言界面的路由是哪个？
"此谱不是您创建"1447--1449是对的；

http://localhost:8080/h5/#/pages/zupu/puwen/wen_info/wen_info?article_id=217&family_id=1449&column_id=1

http://localhost:8080/h5/#/pages/zupu/puwen/wen_info/wen_info?article_id=218&family_id=1449&column_id=8

6月份：java的自动对账；在线祭祀界面，要增加动效（烟花）、增加祭品品类；

# 日报
## 今日
开发家谱介绍-序言界面和传记页面

编写2025.5的月度分享飞书文档《App3.0分享-2025.5.5》
## 明日
和子骏继续按im系统的使用流程对接，消息模块的接口、长连接的消息格式

和子骏对接短视频、广场模块的接口
# 周报
上周主要是开发：
开发广场的动态详情页和推荐页、消息页、消息聊天页；
开发短视频页，以及二级评论功能、展开和收起二级评论列表；
将项目备份文件打包到飞书文档，减小项目体积；
开发家谱介绍页、

# 月报
开发内容：
## 202505分享
前后端联调完3.0版本的JAVA接口，按照新版UI设计实现界面；功能性测试、兼容性测试界面的内容；
### 加快首页和树谱图的页面初始化打开速度，减少100毫秒左右的等待时间；
### 开发广场动态页和推荐页的新样式和交互
- 页面更加偏向现代化的互联网APP设计，更简洁更美观；
- 视觉层面减少对用户的干扰，更快速地浏览到重要的关键信息和操作区域；
  比方说‘广场’和‘推荐’的标题栏提升到顶部，增加单屏能容纳的信息量；
  热门话题的文字样式采用渐变色设计，变得多彩绚烂起来，有热闹感和氛围感；
  突出了话题图标，增加了文字信息间的对比度，阅读信息的速度更快
### 开发新的视频页
短视频界面去掉顶部标题栏，采用全屏设计，显得更大气，也有利于中老年人观看；
摄像头图标变成圆型的白底款，相比于以前的菱角款更加柔和，没有生硬感；
点赞色从纯红变成浅一些的主题红，减少突兀感和情绪上的刺激；
底部tabbar的上边框从黑色变成透明，这样全屏播放视频时，降低下方进度条和底部导航栏的界限感。
底部显示发布短视频的作者名称和简要内容，同时表达视频和文字方面的信息；
### 开发新的消息页
顶部标题栏变得更简洁，用刷新的图标代替巨大的按钮；
去除标题栏的搜索按钮，用标题栏下面的搜索框替代，点击搜索框后不跳转路由，在同一个页面切换展示搜索好友和群聊的结果列表，操作起来更方便；
用户头像从方形框变成圆框，贴合3.0版本的UI设计理念


APP端的测试，也要在排期中。佩琪比较闲的时候，拿自己手机到佩琪那里测试，看看有啥意见。

wifi密码：pj88888888

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
