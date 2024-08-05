# api
## alert
机器人告警系统异常、任务告警异常查询、任务告警已读、把所有的系统告警修改为已读
## global
查询菜单、查询所有菜单、点位树列表、点位树、查询设备区域、查询设备间隔、查询设备类型、查询指定设备类型、间隔列表查询、全部枚举、机器人告警系统异常、任务告警、系统版本、变电站详情、媒体资源查询、录音录像状态、修改场站信息、机器人地图同步、气体阈值获取、气体阈值设置、

环境阈值获取、环境阈值设置、查询导出记录分页、日志导出、获取识别类型、数据同步、获取后端版本信息、
## resultAnalysis
根据点位id和时间分页查询任务结果、根据点位id和时间分页导出结果、巡检结果分析接口、导出巡检点数据
## resultConfirm
巡检报告列表分页、导出总表/分表、导出任务结果、巡检点数据；导出任务、任务数据；巡检报告生成-弹窗 任务详情；巡检报告生成-弹窗 查询识别统计；任务报告漏检查询；任务报告告警查询；漏点补测任务；导出任务Excel；导出任务打卡Excel；任务名称查询；导出word文档；根据间隔查询对应设备及点位，并设置点位颜色；巡检结果确认-设备相关浏览；

巡检结果确认-设备告警查询确认：根据点位和任务名称查询任务列表；id查询点位；详单详情；任务结果审核；巡检结果确认-巡检结果浏览：巡检结果生成报表导出、任务结果分页查询、三相对比分析、获取接线图信息、修改接线图信息、任务结果转缺陷；巡检结果确认-缺陷库浏览：导出缺陷表、缺陷库列表分页查询
## robot
机器人详情、链接指定机器人-机器人上线；根据机器人类型查询机器人；查询当前机器人配置信息；巡检地图维护：根据mapId查询地图信息、查询当前机器人对应的所有地图、查询当前机器人使用的地图、保存地图配置、根据mapId查询导航点、添加导航点、导航点校正、更新充电桩、更新地图旋转角度、获取当前任务预计路径、获取当前任务已完成路径

注册后台控制模式、注销后台控制模式；获取挂轨机的轨道信息；挂轨机绘图工具导入：图片Excel导入、预设点位相关、保存预设、获取预设、删除预设、重启工控机
## robotControl
车体控制接口、云台控制、导航控制接口、摄像头重启、定位控制接口、避障控制接口、语音对讲开启、语音对讲关闭、录音开启、录音关闭、录像开启与关闭、温度数据
## robotSetting
机器人系统设置-识别异常点位查询：识别异常点位导出；机器人设置：添加机器人、修改机器人信息
## taskManage
任务模板查询、任务模板增加、任务模板删除、根据任务模板id获取地图、任务立即执行、任务周期下发、任务列表参数分页查询、任务批量删除、任务状态修改、点位信息查询、根据机器人id查询正在执行的任务、获取当前待执行任务列表、修改当前任务模板
## user
登录、登出
## userSetting
权限管理页面：分页查询用户、查询所有角色、添加用户、更新用户信息、修改密码、删除用户、添加角色、更新角色信息、删除角色、分页查询角色、获取媒体文件有效期、更新媒体文件有效期；

典型点位库维护：点位模板分页信息、点位模板信息新增、点位模板信息修改、台账数据导入、台账导出、删除模板点位

阈值设置：阈值修改、根据点位id获取相关的三相点位

联动点位设置：修改联动点位id、删除联动点位id、获取联动点位集合

巡检点位设置：对应表计类型的判断、标注说明、分页查询点位、全部查询点位、点位信息添加、点位信息修改、点位删除、点位导入、点位导出、三级点位数、点位部署信息保存、保存充电点信息、

检修区域：查询已启用检修区域列表、查询未启用检修区域列表、添加检修区域、禁用检修区域

点位部署：热缺陷去重列表、根据点位名称查询点位、点位阈值清空
## createAsyncRequest
```javascript
import createAsyncRequest from "@/api/fetch";

const apis = {
  // 注释：这里描述api需要的请求参数
  /**
  * 注释：这里描述api需要的请求参数
  * data：请求的body体数据对象
  * urlData: 用于url拼接/id/的数据
  * urlParmas：url中的请求?参数
  *
  * 请求类型 get post put delete
  *
  * data: { username, password}
  */
  getAccountInfo: "get /accountInfo"
  login: "post /login",
  sys_user_id_login: (id) => `post /sys-user/${id}/login`,
  modifyAccount: "put /modify/msg",
  modifyAccount: (id) => `put /modify/${id}/msg`,
  deleteAccounta: 'delete /modify/msg'
  deleteAccountb: (id) => `delete /modify/${id}/msg`,
};

export default createAsyncRequest(apis);


// RESTFull接口，拼接 URL 如：/orders/{orderId}/operation/close
// 或者  /sys-user/9/login  sys_user_id_login: (id) => `post /sys-user/${id}/login`
this.$api.closeOrder({
  data: {...},
  urlData:[orderId, 'operation', 'close']
}).then(res => {
  // TODO...
})
```
## robotajax
```js
    handleTest(type) {
      console.log(this, "new OperateCode();");
      const data1 = {
        arm_control_msg: {
          push_rod: 1
        },
        base_driver_control_msg: {
          vx: 2,
          vy: 3,
          vth: 4,
          max_speed: 5
        }
      };
      const data2 = {
        ptz_goal_x: 1,
        points: [
          // 云台测温轮廓点
          {
            y: 2,
            x: 3,
            z: 5
          }
        ]
      };
      const data3 = {
        navigation_id: 1090, // 导航点 id
        navigation_file: "", // 导航文件
        precise_navigation: 222 // 精确导航
      };
      const data4 = {
        initial_pose: {
          // 初始化定位姿势
          position: {
            x: 8, // 横坐标
            y: 8 // 纵坐标
          },
          orientation: {
            // 角度转换的四元数，目前角度的转换由底层计算，前端不需要使用该字段
            y: 6
          }
        }
      };
      const data5 = {
        detour_distance: 1, // 绕障距离
        detour_switch: 2, // 绕障开关
        detour_orient: 3 // 绕障方向
      };
      switch (type) {
        case 1:
          this.driverControl(data1, this.OPERATE_CODE.TASK.Send);
          break;
        case 2:
          this.ptzControl(data2, 1210);
          break;
        case 3:
          this.navigationControl(data3, 1210);
          break;
        case 4:
          this.localizationControl(data4, 1210);
          break;
        case 5:
          this.avoidobstacleControl(data5, 1210);
          break;
        default:
          break;
      }
    },
```
## websocket
#### 发送
```js
this.driverSocket(data1,this.OPERATE_CODE.TASK.Send)
```

#### 接收对应的数据 - 需要取值的页面触发
```js
    mounted(){
        this.getSocketData()
    },
    // TODO: 每个页面都需监听对应推送 type 进行赋值
    getSocketData(){
        this.$bus.$on('TYPE_8', msg => {
            console.log(msg,'+++')
            const { robot_id } = msg
            this.taskName = robot_id
        });
        this.$bus.$on('TYPE_2', msg => {
            console.log(msg,'+++11')
            const { header:{seq} } = msg
            this.taskName = seq
        });
    },
```
## fetch
data,params,urlData,urlParams的逻辑需要参考项目的fetch.js文件
## 后端系统异常 code

```
    /* 系统异常 */
    SYSTEM_ERROR(101000, "系统异常"),
    PARAM_EXIST_EXCEPTION(101001, "参数异常"),

    /* 用户相关错误码  */
    USER_NULL_ERROR(102001, "查无此人"),
    USER_PASSWORD_ERROR(102002, "账号或密码错误!"),
    USERNAME_IS_USR_ERROR(102004, "用户名已使用,请重新填写"),
    USER_DISABLE(102005, "用户未启用"),
    USER_NOT_LOGIN(102006, "请先登录"),

    /* 点位模板 */
    POINT_MODEL_NAME_REPETITION(103001, "模板点位名称重复"),
    FILE_SUFFIX_ERROR(103002, "文件格式错误"),

    /* 点位相关 */
    POINT_NAME_REPETITION(104001, "点位名称重复"),

    /* 地图相关 */
    MAP_NAME_REPETITION(105001, "地图名称重复"),

    /* 任务编辑模板 */
    TASKEDIT_NOT_POINTINFO(106001, "此ID对应的任务编辑数据中无点位信息"),

    /* 任务模板 */


    /* 机器人 */
    ROBOT_ID_IS_NULL(107001, "机器人id不能为空");
```
# mixins
## alertMixin
```js
/*
 * @Descripttion :
 * @version      :
 * @Author       : duanhuan
 * @Date         : 2021-07-14 15:17:07
 * @LastEditors  : duanhuan
 * @LastEditTime : 2021-07-22 16:35:34
 * @FilePath     : /xm-web/src/mixins/taskItemMixin.js
 */
export default {
  data() {
    return {
      // 系统告警列表
      Alert_SYSTEM: [],
      // 机器人告警列表
      Alert_ROBOT: [],
    };
  },
  methods: {
    // 机器告警
    async getAlertRobot(data) {
      return new Promise(resolve => {
        this.$api
          .alert_page_exception({ data })
          .then(res => {
            this.Alert_ROBOT = res;
            resolve({
              ...res,
            });
          })
          .catch(() => {
            resolve({});
          });
      });
    },
    // 任务告警
    async getAlertTask(data) {
      return new Promise(resolve => {
        this.$api
          .alert_task_exception({ data })
          .then(res => {
            this.Alert_SYSTEM = res;
            resolve({
              ...res,
            });
          })
          .catch(() => {
            resolve({});
          });
      });
    },
  },
  created() {},
};

```
## bottomMenuMixin
PARENT_TITLE:''/CHILD_TITLE,PARENT_MES,CHILD_MES,bottom_menu:[],NOW_PAGE_PATH,ACTIVE_INDEX,pathList,nowPageId,specialUrl,
## globalMixin
SUBSTATION_DETAIL场站信息 getAllMenus, this.$api.get_user_menus({})
## pointDeployMixin
```js
import robotControlMixin from '@/mixins/robotControlMixin'
// exceedTime:3000,forItemSize:'sml',realTimeRosMsg websocket实时推送的ros信息；ptzInfo ws接受的云台信息；waitingEnvPhoto:false 是否在等待后端回复环境图片地址 waitingDevicePhoto、waitingInfraredPhoto、gotPTZPositionInfo 是否已获取云台位置信息，用于判断获取信息按钮的两个数据都已返回

// gotPTZFocusValue 是否已获取云台焦距信息，用于判断获取信息按钮的两个数据都已返回；getPTZInfoType:0 判断是一次变焦还是二次变焦的云台信息获取；spinning:false

props: ['disableInfraredPhoto','disableAll','nonRecognition','navId']

this.$bus.$on('TYPE_2',msg=>this.realtimeRosMsg=msg) // 监听机器人实时信息
this.$bus.$on('TYPE_16',msg=>{...}) // 获取设备可见光图片地址
this.$bus.$on('TYPE_19',msg=>{...}) // 获取设备红外图片地址

setArmPosition//成功下发设置机械臂位置指令
setPTZPosition//成功下发设置云台位置指令
takePhoto // 云台拍照，第一个第二个拍照按钮 环境拍照指令、设备拍照、红外拍照
getPhoto
```
## robotControlMixin
```js
ROBOT_CONTROL,CONTROL_MAPS:BASE_DRIVER_CONTROL,PTZ_CONTROL,NAV_CONTROL,LOCALIZATION_CTRL,AVOID_OBSTACLE_CTRL

driverCtrl车体控制接口，云台、导航、定位、避障，心跳heartbeatCheckSocket，robotIdChangeSocket，voiceSpeak，handleSocket,

mounted() {
    this.ROBOT_CONTROL = new RobotControl();
    this.OPERATE_CODE = new OperateCode();
  },
```
## robotMixin
```js
ROBOT_LIST,ROBOT_LIST_DETAILS// 机器人列表简要信息、详细信息
ROBOT_CONF // 原sessionStorage中tree-robotMsg-robotConf
ROBOT_SET // 原sessionStorage中tree-robotMsg-robotSet

jumpToSet // 无机器人跳转机器人配置页面
getAllRobots // 获取机器人列表

getMapData // 获取当前机器人使用的地图信息
getCurrentRobotMapData // 根据当前机器人，获取地图、导航点、路径等信息
```

## socketMixin

## taskItemMixin
获取任务结果参数分页查询
## taskMixin
任务详情、告警点位、全部点位、漏检点位、正常点位、未巡检点位、未识别点位

获取任务详情、查询识别统计、任务报告漏检查询、漏点补测任务、导出任务Excel、任务名称查询、导出任务word、
# utils

## bus

```js
import Vue from 'vue';
export default new Vue();
```

## config

```js
DEFAULT_SUBSTATION_DETAIL:createTime/creator/updateTime/updator/id/name/title/subTitle/logoTitleEn/logoTitleZh
/navBarTitle/navBarSubTitle/rootName/backgroundImage/homePageLogo/navBarLogo/status/paramBgImg/paramHomePageLogo,paramNavBarLogo

IGNORE_PATH,themeColor-coalMine
```

## excelExport

```js
function blobDownload(params：Blob对象，excelName：导出名) {
  let url=window.URL.createObjectURL(params),link=document.createElement('a')
  link.style.display='none'
  link.href=url
  link.setAttribute('download',excelName)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(url) // 释放掉blob对象
}
// colNameArr导出的列,excelName
transToFile(blob,fileName,fileType) {
  return new window.File([blob],fileName,{type:fileType})
}

function excelExportOrDownload(){
 // 创建工作薄；添加sheet；设置sheet的默认行高；设置列；添加行数据；给表头添加背景色
}

```

## format

```js
toFixedNum(val,point=3),dateToMs(date)
// 处理浮点数不精确问题
accAdd(arg1,arg2),accSub
```

## md5

## robotConstant

```js
const SOCKET_RECEIVE_MAPS = [
  {
    name: 'TYPE_0',
    value: 0,
    remark: '前后端通信反馈(持续性消息不回馈)',
    content: {
      type: 0, // 消息类型：固定值：0
      responseId: 'uuid', // 请求的唯一标识(连接成功回馈为clientId)
      message: '{}', // 接收到的内容，json串(连接成功回馈为null)
    },
  },
  {
    name: 'TYPE_2',
    value: 2,
    remark: '实时信息 - 发送机器人实时信息。',
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 2, // 消息类型，固定值2
      message: {}, // 实时信息，具体见后台实时信息
    },
  },
  {
    name: 'TYPE_3',
    value: 3,
    remark: '系统异常 - 推送系统异常。',
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 3, // 消息类型，固定值:3
      message: {
        // 具体内容
        id: 1, // 系统异常id
        robotId: 1, // 机器人id
        task_id: 1, // 任务id
        task_name: '任务名称', // 任务名称
        code: -1, // 错误码
        message: '通讯中断', // 错误描述
        sourceType: 3, // 来源，1：机器人故障；2：机器人告警；3：系统异常
        isRead: false, // 是否已读
        createTime: 1000, // 创建时间
        creator: 'system', // 创建人
        updateTime: 1000, // 修改时间
        updator: 'system', // 修改人
      },
    },
  },
  {
    name: 'TYPE_4',
    value: 4,
    remark: '一键返航路径 - 推送一键返航路径。',
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 4, // 消息类型，固定值:4
      message: '', // 一键返航路径
    },
  },
  {
    name: 'TYPE_5',
    value: 5,
    remark: '预计路径 - 推送预计路径。',
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 5, // 消息类型，固定值:5
      message: '', // 预计路径
    },
  },
  {
    name: 'TYPE_6',
    value: 6,
    remark: '完成路径 - 推送完成路径。',
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 6, // 消息类型，固定值:6
      message: '', // 完成路径
    },
  },
  {
    name: 'TYPE_8',
    value: 8,
    remark: '任务变更 - 正在执行的任务发生变更。',
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 8, // 消息类型，固定值:8
      message: {
        createTime: null, // 创建时间
        creator: null, // 创建人
        updateTime: null, // 修改时间
        updator: null, // 修改人
        id: null, // 任务id
        name: null, // 任务名称
        pointIds: null, // 点位id，逗号分隔
        robotId: null, // 机器人id
        mapId: null, // 地图id
        taskEditId: null, // 任务模板id
        taskFinishAction: 3, // 任务结束动作
        originNavigationId: null, // 原点id
        originChargeId: null, // 充点电id
        taskType: null, // 任务类型
        executeTime: null, // 执行时间
        executeEndTime: null, // 执行结束时间
        currentPointId: null, // 当前点位
        cron: null, // cron表达式
        taskExecute: 0, // 任务执行方式：普通任务，定时，周期
        predictTime: null, // 预计时间
        sceneType: null, // 场景类型，室内，室外
        taskStatus: 4, // 任务状态
        environmentInfo: null, // 环境信息json串
        statisticalInfo: null, // 统计信息json串
        status: 1, // 数据状态
        statistical: {
          // 统计信息
          count: 0, // 总数
          normalCount: 0, // 正常点位数
          alarmCount: 0, // 告警点位数
          unrecognizedCount: 0, // 未识别点位数
          leakCount: 0, // 漏检点位数
          remainCount: 0, // 剩余点位数
        },
        environment: {
          temperature: 0.0, // 温度
          humidity: 0.0, // 湿度
          windSpeed: 0.0, // 风速
          windDirection: 0.0, // 风向
          atmosphericPressure: 0.0, // 气压
        },
        pointsList: [], // 点位数组
      },
    },
  },
  {
    name: 'TYPE_14',
    value: 14,
    remark: '云台信息',
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 14, // 消息类型，固定值:14
      message: {}, // 云台位置信息，详情与底层沟通
    },
  },
  {
    name: 'TYPE_15',
    value: 15,
    remark: '语音对讲 后台->前端，前端→后台',
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 15, // 消息类型，固定值:15
      message: {
        voice: '', // 语音流数据
      },
    },
  },
  {
    name: 'TYPE_16',
    value: 16,
    remark: '设备模板图',
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 16, // 消息类型，固定值:17
      message: {},
    },
  },
  {
    name: 'TYPE_17',
    value: 17,
    remark: '环境模版图',
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 17, // 消息类型，固定值:17
      message: {},
    },
  },
  {
    name: 'TYPE_18',
    value: 18,
    remark: '获取焦点值',
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 18, // 消息类型，固定值:17
      message: {},
    },
  },
  {
    name: 'TYPE_19',
    value: 19,
    remark: '热成像图片',
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 19, // 消息类型，固定值:17
      message: {},
    },
  },
  {
    name: 'TYPE_20',
    value: 20,
    remark: '环境信息',
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 20,
      message: {},
    },
  },
  {
    name: 'TYPE_21',
    value: 21,
    remark: '点云信息',
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 21,
      message: {},
    },
  },
  {
    name: 'TYPE_22',
    value: 22,
    remark: '导航点，导航路径变更',
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 22, // 消息类型，固定值:22
      message: {
        navigationPoints: [
          {
            // 导航点信息
            id: 1, // 导航点id
            vehicleCoordinate: '', // 坐标
            mapId: 1, // 地图id
            robotId: 1, // 机器人id
            sequence: 1, // 底层导航点id
            status: 1, // 状态
            createTime: 1000, // 创建时间
            creator: 'admin', // 创建人
            updateTime: 1000, // 修改时间
            updator: 'admin', // 修改人
          },
        ],
        navigation: '', // 导航路径
      },
    },
  },
  {
    name: 'TYPE_23',
    value: 23,
    remark: '一键导航完成',
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 23,
      message: {},
    },
  },
  {
    name: 'TYPE_24',
    value: 24,
    remark: '任务预计路径',
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 24,
      message: {},
    },
  },
  {
    name: 'TYPE_25',
    value: 25,
    remark: '任务完成路径',
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 25,
      message: {},
    },
  },
  {
    name: 'TYPE_26',
    value: 26,
    remark: '录音,录像,开启状态',
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 26,
      message: {},
    },
  },
  {
    name: 'TYPE_27',
    value: 27,
    remark: '云台位置和焦距信息',
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 27,
      message: {},
    },
  },
  {
    name: 'TYPE_28',
    value: 28,
    remark: '视频流亮度',
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 28,
      message: {},
    },
  },
  {
    name: 'TYPE_29',
    value: 29,
    remark: '补光灯状态',
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 29,
      message: {},
    },
  },
];

const SOCKET_SEND_MAPS = [
  {
    name: 'TYPE_1',
    value: 1,
    remark: '心跳 前端→后台',
    type: 'HEART_BEAT_CHECK',
    mergeRecursive: false,
    content: {
      type: 1, // 消息类型，固定值：1
      message: '', // 消息体
    },
  },
  {
    name: 'TYPE_7',
    value: 7,
    remark: '选择机器人变更 - 前端机器人选择变更  前端→后台',
    type: 'ROBOT_ID_CHANGE',
    mergeRecursive: false,
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 7, // 消息类型，固定值:7
      message: {
        robotId: 1, // 机器人id
      },
    },
  },
  {
    name: 'TYPE_9',
    value: 9,
    remark: '车体控制  前端→后台',
    type: 'BASE_DRIVER_CONTROL',
    mergeRecursive: true,
    content: {
      requestId: '-1', // 持续消息-1
      type: 9, // 消息类型，固定值:9
      message: {
        arm_control_msg: {
          // 机械臂控制信息
          arm_link: 0, // 机械臂关节
          arm_move: 0, // 机械臂运动
          push_rod: 0, // 推杆前进/后退
          arm_link1: 0, // 机械臂1位置
          arm_link2: 0, // 机械臂2位置
          arm_link3: 0, // 机械臂3位置
          arm_link4: 0, // 机械臂4位置
        },
        base_driver_control_msg: {
          exploration_ditch: 0, // 探勾开关
          charge_threshold: 0, // 充电阈值
          charging_circuit: 0, // 充电回路开关
          vx: 0, // x 速度
          vy: 0, // y 速度
          vth: 0, // 旋转速度
          max_speed: 0, // 最大速度
          enable_motor1: 0, // 驱动电机1使能开关
          enable_motor2: 0, // 驱动电机2使能开关
          enable_motor3: 0, // 驱动电机3使能开关
          enable_motor4: 0, // 驱动电机3是能开关
          ultrasonic_avoid: 0, // 超声波避障开关
        },
        lift_control_msg: {
          lift_height: 0, // 升降杆目标高度
          push_rod: 0, // 推杆前进/后退
          rotation_motor: 0, // 旋转电机目标角度
        },
        operation_code: 0, // 任务id
      },
    },
  },
  {
    name: 'TYPE_10',
    value: 10,
    remark: '云台控制  前端→后台',
    type: 'PTZ_CONTROL',
    mergeRecursive: true,
    content: {
      requestId: '-1', // 持续消息-1
      type: 10, // 消息类型，固定值:10
      message: {
        ptz_goal_x: 0, // 框选目标点 x 坐标
        ptz_goal_y: 0, // 框选目标点 y 坐标
        ptz_start_x: 0, // 框选起始点 x 坐标
        ptz_start_y: 0, // 框选起始点 y 坐标
        ptz_focus_value: 0, // 云台焦距值
        ptz_zoom_pose: 0, // 云台倍率值
        ptz_pan_pose: 0, // 云台水平位置
        ptz_tilt_pose: 0, // 云台垂直位置
        ptz_focus_mode: 0, // 云台聚焦模式 （手动/半自动）
        ptz_zoom_speed: 0, // 云台手动控制倍率速度值
        ptz_tilt_speed: 0, // 云台手动控制垂直方向速度值
        ptz_pan_speed: 0, // 云台手动控制水平方向速度值
        ptz_focus_speed: 0, // 云台手动控制聚焦速度值
        points: [
          // 云台测温轮廓点
          {
            y: 0,
            x: 0,
            z: 0,
          },
        ],
        operation_code: 0, // 操作码
      },
    },
  },
  {
    name: 'TYPE_11',
    value: 11,
    remark: '导航控制  前端→后台',
    type: 'NAVIGATION_CONTROL',
    mergeRecursive: true,
    content: {
      requestId: '-1', // 持续消息-1
      type: 11, // 消息类型，固定值:11
      message: {
        navigation_id: 0, // 导航点 id
        navigation_file: '', // 导航文件
        precise_navigation: 0, // 精确导航
        navigation_pose_x: 0, // 导航点的坐标和角度，目前不需要使用，只用传导航点 id 即可
        navigation_pose_y: 0,
        navigation_pose_th: 0,
        navigation_order: 0, // 导航指令
        operation_code: 0, // 操作码
      },
    },
    operation_code: 0, // 操作码
  },
  {
    name: 'TYPE_12',
    value: 12,
    remark: '定位控制  前端→后台',
    type: 'LOCALIZATION_CONTROL',
    mergeRecursive: true,
    content: {
      requestId: '-1', // 持续消息-1
      type: 12, // 消息类型，固定值:12
      message: {
        initial_pose: {
          // 初始化定位姿势
          position: {
            x: 0, // 横坐标
            y: 0, // 纵坐标
            z: 0, // 角度（弧度）
          },
          orientation: {
            // 角度转换的四元数，目前角度的转换由底层计算，前端不需要使用该字段
            y: 0,
            x: 0,
            z: 0,
            w: 0,
          },
        },
        operation_code: 0, // 操作码
      },
    },
  },
  {
    name: 'TYPE_13',
    value: 13,
    remark: '避障控制  前端→后台',
    type: 'AVOID_OBSTACLE_CONTROL',
    mergeRecursive: true,
    content: {
      requestId: '-1', // 持续消息-1
      type: 13, // 消息类型，固定值:13
      message: {
        detour_distance: 0, // 绕障距离
        detour_switch: 0, // 绕障开关
        detour_orient: 0, // 绕障方向
        avoid_distance: 0, // 激光避障距离
        avoid_switch: 0, // 激光避障开关
        operation_code: 0, // 操作码
      },
    },
  },
  {
    name: 'TYPE_15',
    value: 15,
    remark: '语音对讲 后台->前端，前端→后台',
    type: 'VOICE_SPEAK',
    mergeRecursive: false,
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 15, // 消息类型，固定值:15
      message: {
        voice: '', // 语音流数据
      },
    },
  },
  {
    name: 'TYPE_16',
    value: 27,
    remark: '挂轨机控制 前端→后台',
    type: 'ORBITAL_ROBOT_CONTROL',
    mergeRecursive: true,
    content: {
      requestId: 'uuid', // 请求唯一标识
      type: 27, // 消息类型，固定值:15
      message: {
        motion_type: 0, // 车体运动模式 1：速度运动模式 2：二维码运动模式
        bar_code: 0, // 二维码编号（导航点id）
        liner_vel: 0, // 车体线速度（速度模式下生效，二维码模式下由底层控制）mm/s * 1000
        life_manual_control_direction: 0, // 升降杆手动控制方向 1：上升，2：下降
        life_motion_type: 0, // 升降杆动作类型 1：复位，2：运动，3：停止
        lift_motion_height: 0, // 升降杆长度
        ptz_motion_angle_x: 0, // 云台 X 轴旋转角度
        ptz_motion_angle_y: 0, // 云台 y 轴旋转角度
        ptz_manual_xy: 0, // 选择云台电机 1: X 轴，2：Y 轴
        ptz_manual_direction: 0, // 云台电机运动方向 1：顺时针，2：逆时针
        pd_control: 0, // 局放控制
        set_max_speed: 0, // 设置最大速度
        set_bar_distance: 0, // 设置二维码中心之间的间隔，单位 mm
        set_sonar_switch: 0, // 设置超声波必涨开管
        set_lift_height: 0, // 设置升降杆最大高度
        set_ptz_pan: 0, // 设置云台 X 轴电机最大旋转角度 默认 * 100
        set_ptz_tilt: 0, // 设置云台 Y 轴电机最大旋转角度 默认 * 100
        operation_code: 0, // 操作码
      },
    },
  },
];

// 轨道类型机器人
const ROBOT_RAIL_TYPE = [3, 9];

const ROBOT_TYPE_SOCKET_MAPS = [
  {
    name: '室内机器人',
    value: 1,
    driverControlKey: 'indoor_robot_msg',
  },
  {
    name: '室外机器人',
    value: 2,
    driverControlKey: 'outdoor_robot_msg',
  },
  {
    name: '挂轨机器人',
    value: 3,
    driverControlKey: 'indoor_robot_msg',
  },
  {
    name: '室内外一体',
    value: 4,
    driverControlKey: 'indoor_robot_msg',
  },
  {
    name: '扫地机器人',
    value: 5,
    driverControlKey: 'indoor_robot_msg',
  },
  {
    name: '400B机器人',
    value: 9,
    driverControlKey: 'indoor_robot_msg',
  },
];
```

## robotFormat

```js
class OperateCode {
  // Task
  /**
   * kOperatorTaskSend       = 1000, // 任务下发
   * kOperatorTaskSwitch     = 1001, // 任务切换
   * kOperatorTaskFinish     = 1002, // 任务状态变更
   * kOperatorTaskResult     = 1003, // 任务结果上传完毕
   * kOperatorTaskPosition   = 1004, // 上传当前任务点位
   */

  TASK = {
    Send: 1000, // 任务下发
    Switch: 1001, // 任务切换
    Finish: 1002, // 任务状态变更
    Result: 1003, // 任务结果上传完毕
    Position: 1004, // 上传当前任务点位
    ExpectedPath: 1510, // 任务预计全局路径
    CompletedPath: 1511, // 任务完成路径
  };
  // robot
  /**
   * kOperatorForward        = 1100, // 前进
   * kOperatorBackward       = 1101, // 后退
   * kOperatorTurnLeft       = 1102, // 左转
   * kOperatorTurnRight      = 1103, // 右转
   * kOperatorLeftShift      = 1104, // 左移
   * kOperatorRightShift     = 1105, // 右移
   * kOperatorRobotInit      = 1106, // 机器人状态初始化
   * kOperatorRobotAlarmInit = 1107, // 机器人警告复位
   * kOperatorOpenCircuit    = 1108, // 打开充电回路，具体值由数据域决定
   * kOperatorCloseCircuit   = 1109, // 关闭充电回路，具体值由数据域决定
   * kOperatorParamSet       = 1110, // 参数设置
   */
  ROBOT = {
    Forward: 1100, // 前进
    Backward: 1101, // 后退
    TurnLeft: 1102, // 左转
    TurnRight: 1103, // 右转
    LeftShift: 1104, // 左移
    RightShift: 1105, // 右移
    RobotInit: 1106, // 机器人状态初始化
    RobotAlarmInit: 1107, // 机器人警告复位
    OpenCircuit: 1108, // 打开充电回路，具体值由数据域决定
    CloseCircuit: 1109, // 关闭充电回路，具体值由数据域决定
    ParamSet: 1110, // 参数设置
    NavigationMode: 996, // 切换导航方式
  };
  /**
   * kOperatorJoint1Up       = 1200, // 关节1上升
   * kOperatorJoint1Down     = 1201, // 关节1下降
   * kOperatorJoint2Up       = 1202, // 关节2上升
   * kOperatorJoint2Down     = 1203, // 关节2下降
   * kOperatorJoint3Up       = 1204, // 关节3上升
   * kOperatorJoint3Down     = 1205, // 关节3下降
   * kOperatorJoint4Up       = 1206, // 关节4上升
   * kOperatorJoint4Down     = 1207, // 关节4下降
   * kOperatorArmUp          = 1208, // 机械臂上升
   * kOperatorArmDown        = 1209, // 机械臂下降
   * kOperatorPDUp           = 1210, // 推杆前伸
   * kOperatorPDDown         = 1211, // 推杆回缩
   * kOperatorArmSet         = 1212, // 机械臂link1_link2_link3_link4设定
   * kOperatorArmGet         = 1213, // 机械臂link1_link2_link3_link4获取
   */
  ARM = {
    Joint1Up: 1200, // 关节1上升
    Joint1Down: 1201, // 关节1下降
    Joint2Up: 1202, // 关节2上升
    Joint2Down: 1203, // 关节2下降
    Joint3Up: 1204, // 关节3上升
    Joint3Down: 1205, // 关节3下降
    Joint4Up: 1206, // 关节4上升
    Joint4Down: 1207, // 关节4下降
    ArmUp: 1208, // 机械臂上升
    ArmDown: 1209, // 机械臂下降
    PDUp: 1210, // 推杆前伸
    PDDown: 1211, // 推杆回缩
    ArmSet: 1212, // 机械臂link1_link2_link3_link4设定
    ArmGet: 1213, // 机械臂link1_link2_link3_link4获取
    ArmLimit: 1214, // 机械臂下降
  };

  // lift
  /**
   * kOperatorLiftUp         = 1300, // 升降杆上升
   * kOperatorLiftDown       = 1301, // 升降杆下降
   * kOperatorSwingUp        = 1302, // 摆臂抬起
   * kOperatorSwingDown      = 1303, // 摆臂下落
   * kOperatorLiftPDUp       = 1304, // 推杆前伸
   * kOperatorLiftPDDown     = 1305, // 推杆回缩
   */

  LIFT = {
    LiftUp: 1300, // 升降杆上升
    LiftDown: 1301, // 升降杆下降
    SwingUp: 1302, // 摆臂抬起
    SwingDown: 1303, // 摆臂下落
    LiftPDUp: 1304, // 推杆前伸
    LiftPDDown: 1305, // 推杆回缩
    SetLiftUp: 1306,
  };

  // PTZ
  /**
   * kOperatorPTZLeft            = 1400, // 云台左转
   * kOperatorPTZRight           = 1401, // 云台右转
   * kOperatorPTZUp              = 1402, // 云台上仰
   * kOperatorPTZDown            = 1403, // 云台下俯
   * kOperatorPTZZoomIn          = 1404, // 倍率放大
   * kOperatorPTZZoomOut         = 1405, // 倍率缩小
   * kOperatorPTZFocusIn         = 1406, // 焦点前调
   * kOperatorPTZFocusOut        = 1407, // 焦点后调
   * kOperatorPTZPoseSet         = 1408, // 云台位置设置
   * kOperatorPTZPoseRead        = 1409, // 云台位置读取
   * kOperatorPTZFocusModeSet    = 1410, // 焦点模式设置
   * kOperatorPTZFocusModeRead   = 1411, // 焦点模式读取
   * kOperatorLightCapture       = 1412, // 可见光拍图
   * kOperatorTICapture          = 1413, // 热成像拍图
   * kOperatorBoxFocus           = 1414, // 框选调焦
   * kOperatorBoxTemperature     = 1415, // 框选测温
   * kOperatorFillLightOn        = 1416, // 补光灯开启
   * kOperatorFillLightOff       = 1417, // 补光灯关闭
   * kOperatorWiperOn            = 1418, // 雨刷开启
   * kOperatorWiperOff           = 1419, // 雨刷关闭
   * kOperatorFanOn              = 1420, // 风扇开启
   * kOperatorFanOff             = 1421, // 风扇关闭
   * kOperatorPTZFocusValueSet   = 1422, //焦点值设置
   * kOperatorPTZFocusValueRead  = 1423, //焦点值读取
   * kOperatorTITemperature      = 1424, //热成像测温
   */
  PTZ = {
    PTZLeft: 1400, // 云台左转
    PTZRight: 1401, // 云台右转
    PTZUp: 1402, // 云台上仰
    PTZDown: 1403, // 云台下俯
    PTZZoomIn: 1404, // 倍率放大
    PTZZoomOut: 1405, // 倍率缩小
    PTZFocusIn: 1406, // 焦点前调
    PTZFocusOut: 1407, // 焦点后调
    PTZPoseSet: 1408, // 云台位置设置
    PTZPoseRead: 1409, // 云台位置读取
    PTZFocusModeSet: 1410, // 焦点模式设置
    PTZFocusModeRead: 1411, // 焦点模式读取
    LightCapture: 1412, // 可见光拍图
    TICapture: 1413, // 热成像拍图
    BoxFocus: 1414, // 框选调焦
    BoxTemperature: 1415, // 框选测温
    FillLightOn: 1416, // 补光灯开启
    FillLightOff: 1417, // 补光灯关闭
    WiperOn: 1418, // 雨刷开启
    WiperOff: 1419, // 雨刷关闭
    FanOn: 1420, // 风扇开启
    FanOff: 1421, // 风扇关闭
    PTZFocusValueSet: 1422, //焦点值设置
    PTZFocusValueRead: 1423, //焦点值读取
    TITemperature: 1424, //热成像测温
    EnvironmentCapture: 1425, // 环境模版拍图 一次变焦
    DeviceCapture: 1426, // 设备模版拍图 二次变焦
    TiCapture: 1427, // 设备模版热成像拍图
    AllPtzInfo: 1428, // 同时获取云台位置和焦点值
    GetVideoBrightness: 1429, // 获取云台视频流亮度
    SetVideoBrightness: 1430, // 设置云台视频流亮度
    setFillLightOn: 1431, // 打开补光灯
    setFillLightClose: 1432, // 关闭补光灯
    getFillLightStatus: 1433, // 获取补光灯状态
  };

  // navigation
  /**
   * kOperatorNavigationStore    = 1500,   // 一键导航
   * kOperatorNavigationCancel   = 1501,   // 取消导航
   * kOperatorNavigationPause    = 1502,   // 暂停导航
   * kOperatorNavigationResume   = 1503,   // 恢复导航
   * kOperatorNavigationReturn   = 1504,   // 一键返航
   * kOperatorNavigationCharge   = 1505,   // 一键充电
   * kOperatorNavigationPathPull = 1506,   // 导航文件生成
   * kOperatorNavigationPlannerPath = 1507,   // 导航预计路径
   * kOperatorNavigationHistoryPath = 1508,   // 导航历史路径，已完成
   * kOperatorNavigationPointFinish = 1509, // 导航点录入完成
   */

  NAVIGATION = {
    Store: 1500, // 一键导航
    Cancel: 1501, // 取消导航
    Pause: 1502, // 暂停导航
    Resume: 1503, // 恢复导航
    Return: 1504, // 一键返航
    Charge: 1505, // 一键充电
    PathPull: 1506, // 导航文件生成
    PlannerPath: 1507, // 导航预计路径
    HistoryPath: 1508, // 导航历史路径，已完成
    PointFinish: 1509, // 导航点录入完成
  };
  /*
       Avoid Obstacle
       kOperatorAvoidOpen          = 1800, //避障打开
       kOperatorAvoidClose         = 1801, //避障关闭
       kOperatorAvoidDistanceSet   = 1802, //避障距离设置
       kOperatorDetourOpen         = 1803, //绕障打开
       kOperatorDetourClose        = 1804, //绕障关闭
       kOperatorDetourDistanceSet  = 1805, //绕障距离设置
       kOperatorLeftDetour         = 1806, //左向绕障
       kOperatorRightDetour        = 1807, //右向绕障
  */
  OBSTACLE = {
    avoidOpen: 1800, //激光避障打开
    avoidClose: 1801, //激光避障关闭
    avoidDistanceSet: 1802, //避障距离设置
    avoidDet: 1803, //避障距离设置
    detourOpen: 1804, //绕障打开
    detourClose: 1805, //绕障关闭
    distanceSet: 1806, //绕障距离设置
    leftDetour: 1807, //左向绕障
    rightDetour: 1808, //右向绕障
  };
  /**
   * kOperatorRobotRelocation    = 1600,   // 初始化重定位
   */

  LOCALIZATION = {
    Relocation: 1600, // 初始化重定位
  };

  // 挂轨机操作码
  ORBITAL_ROBOT = {
    motionControl: 2000, // 挂轨机运动控制
    motionPause: 2001, // 挂轨机暂停
    motionMove: 2002, // 挂轨机继续
    liftPositionSetting: 2003, // 升降杆控制
    ptzPositionSetting: 2004, // 云台电机控制
    liftControl: 2005, // 升降杆手动控制
    ptzControl: 2006, // 云台手动控制
    pdControl: 2007, // pd 控制
    resetPtz: 2008, // 云台，升降杆复位
  }

  // Auto response
  /**
   * kOperatorAutoSelfPost       = 1700   // 主动返数据的操作码
   */
  AUTO = {
    SelfPost: 1700, // 主动返数据的操作码
  };

  // 充电房
  CHARGEHOUSE = {
    Door: 997, // 充电房门开启和关闭
  }
}
class RobotControl {
  BASE_DRIVER_CONTROL = {
    arm_control_msg: {
      // 机械臂控制信息
      arm_link: 0, // 机械臂关节
      arm_move: 0, // 机械臂运动
      arm_safe_mode: 2, // 机械臂模式
      arm_safe_front: 0, // 机械臂前方安全距离
      arm_safe_back: 0, // 机械臂后方安全距离
      arm_link1: 0, // 机械臂1位置
      arm_link2: 0, // 机械臂2位置
      arm_link3: 0, // 机械臂3位置
      arm_link4: 0, // 机械臂4位置
      push_rod: 0, // 推杆前进/后退
    },
    base_driver_control_msg: {
      exploration_ditch: 0, // 探勾开关
      charge_threshold: 0, // 充电阈值
      charging_circuit: 0, // 充电回路开关
      vx: 0, // x 速度
      vy: 0, // y 速度
      vth: 0, // 旋转速度
      open_close_action: 0, // 充电房门状态
      mode_switch: 0, // 切换导航方式
      max_speed: 0, // 最大速度
      /* 新消息体字段 */
      motor_id: 0, // 电机校准 id
      motor_direction: 0, // 电机校准方向
      motor_speed: 0, // 电机校准速度
      fan_switch: 0, // #风扇开关
      // 挂轨
      motion_type: 0, // 车体运动模式 1: 速度运动模式,2: 二维码运动模式
      bar_code: 0, // 二维码编号
      linear_vel: 0, // 车体线速度 mm/s * 1000
      lift_manual_control_direction: 0, // 升降杆手动控制的方向 1：上升 2：下降
      lift_motion_type: 0, // 升降杆动作类型 1: 复位,2: 运动,3: 停止
      lift_motion_height: 0, // 升降杆动作类型
      ptz_motion_angle_x: 0, // 云台 X 轴电机旋转角度
      ptz_motion_angle_y: 0, // 云台 Y 轴电机旋转角度
      ptz_manual_xy: 0, // 手动控制云台 XY 电机 1: X, 2: Y
      ptz_manual_direction: 0, // 手动控制云台
      pd_control: 0, // 局方控制
      set_max_speed: 0, // 设置最大速度 * 1000
      set_bar_distance: 0, // 设置二维码中心之间的间隔 mm
      set_sonar_switch: 0, // 设置超声波避障开关
      set_lift_height: 0, // 设置升降杆最大高度 mm
      set_ptz_pan: 0, // 设置云台 X 轴电机最大旋转角度 * 100，范围 [-360, 360]
      set_ptz_tilt: 0, // 设置云台 Y 轴电机最大旋转角度 * 100，范围 [-360, 360]
      set_start_bar_code: 0, // 二维码头编号
      set_end_bar_code: 0, // 二维码尾编号
      /* 新消息体字段 */
      enable_motor1: 0, // 驱动电机1使能开关
      enable_motor2: 0, // 驱动电机2使能开关
      enable_motor3: 0, // 驱动电机3使能开关
      enable_motor4: 0, // 驱动电机3是能开关
      ultrasonic_avoid: 0, // 超声波避障开关
    },
    lift_control_msg: {
      lift_height: 0, // 升降杆目标高度
      push_rod: 0, // 推杆前进/后退
      rotation_motor: 0, // 旋转电机目标角度
    },
    operation_code: 0,
  };
  PTZ_CONTROL = {
    ptz_goal_x: 0, // 框选目标点 x 坐标
    ptz_goal_y: 0, // 框选目标点 y 坐标
    ptz_start_x: 0, // 框选起始点 x 坐标
    ptz_start_y: 0, // 框选起始点 y 坐标
    ptz_focus_value: 0, // 云台焦距值
    ptz_zoom_pose: 0, // 云台倍率值
    ptz_pan_pose: 0, // 云台水平位置
    ptz_tilt_pose: 0, // 云台垂直位置
    ptz_focus_mode: 0, // 云台聚焦模式 （手动/半自动）
    ptz_zoom_speed: 0, // 云台手动控制倍率速度值
    ptz_tilt_speed: 0, // 云台手动控制垂直方向速度值
    ptz_pan_speed: 0, // 云台手动控制水平方向速度值
    ptz_focus_speed: 0, // 云台手动控制聚焦速度值
    video_brightness: 0, // 视频流亮度
    points: [
      // 云台测温轮廓点
      {
        y: 0,
        x: 0,
        z: 0,
      },
    ],
    operation_code: 0,
  };
  NAVIGATION_CONTROL = {
    navigation_id: 0, // 导航点 id
    navigation_file: '', // 导航文件
    precise_navigation: 0, // 精确导航
    navigation_pose_x: 0, // 导航点的坐标和角度，目前不需要使用，只用传导航点 id 即可
    navigation_pose_y: 0,
    navigation_pose_th: 0,
    navigation_order: 0, // 导航指令
    operation_code: 0,
  };
  LOCALIZATION_CONTROL = {
    initial_pose: {
      // 初始化定位姿势
      position: {
        x: 0, // 横坐标
        y: 0, // 纵坐标
        z: 0, // 角度（弧度）
      },
      orientation: {
        // 角度转换的四元数，目前角度的转换由底层计算，前端不需要使用该字段
        y: 0,
        x: 0,
        z: 0,
        w: 0,
      },
    },
    operation_code: 0,
  };
  AVOID_OBSTACLE_CONTROL = {
    detour_distance: 0, // 绕障距离
    detour_switch: 0, // 绕障开关
    detour_orient: 0, // 绕障方向
    avoid_distance: 0, // 激光避障距离
    avoid_switch: 0, // 激光避障开关
    operation_code: 0,
  };
  ORBITAL_ROBOT_CONTROL = {
    motion_type: 0, // 车体运动模式 1：速度运动模式 2：二维码运动模式
    bar_code: 0, // 二维码编号（导航点id）
    liner_vel: 0, // 车体线速度（速度模式下生效，二维码模式下由底层控制）mm/s * 1000
    life_manual_control_direction: 0, // 升降杆手动控制方向 1：上升，2：下降
    life_motion_type: 0, // 升降杆动作类型 1：复位，2：运动，3：停止
    lift_motion_height: 0, // 升降杆长度
    ptz_motion_angle_x: 0, // 云台 X 轴旋转角度
    ptz_motion_angle_y: 0, // 云台 y 轴旋转角度
    ptz_manual_xy: 0, // 选择云台电机 1: X 轴，2：Y 轴
    ptz_manual_direction: 0, // 云台电机运动方向 1：顺时针，2：逆时针
    pd_control: 0, // 局放控制
    set_max_speed: 0, // 设置最大速度
    set_bar_distance: 0, // 设置二维码中心之间的间隔，单位 mm
    set_sonar_switch: 0, // 设置超声波必涨开管
    set_lift_height: 0, // 设置升降杆最大高度
    set_ptz_pan: 0, // 设置云台 X 轴电机最大旋转角度 默认 * 100
    set_ptz_tilt: 0, // 设置云台 Y 轴电机最大旋转角度 默认 * 100
    operation_code: 0, // 操作码
  }

  handleformatDatas(type, data, code) {
    let _obj = {
      ...this[type],
      operation_code: code,
    };
    this.mergeRecursive(_obj, data);
    return _obj;
  }

  mergeRecursive(obj1, obj2) {
    for (var p in obj2) {
      try {
        if (obj2[p].constructor == Object) {
          obj1[p] = this.mergeRecursive(obj1[p], obj2[p]);
        } else {
          obj1[p] = obj2[p];
        }
      } catch (e) {
        obj1[p] = obj2[p];
      }
    }
    return obj1;
  }
}

```

# assets
## scripts
intercom.js
# components
## robot-map
store.js clloz 处理地图组件的canvas渲染数据，包括point、segment、rect和不同的点线状态；points[]导航点、segments:null导航点连线、二维数组；rects[]矩形框，检修区域和点位框选；car小车的位置信息：x-y-deg-isCarArriving-isCarRunning；taskPath:[]当前任务路径；donePath:[]已完成路径；selectedPoints删除时选中的点；selectedPointsNum:[];selectedPaths:{};

hoverPoint:-1;hoverPath:{startPointId:-1,endPointId:-1} hover的线；hoverRect:{id:-1};historyPath:[];actionCache:[];newSegments:[]新添加的路径，是一个连续的数组，每两个相邻的值之间表示一条路径；newSegmentsCache保存所有新添加路径；dashedSegment:{x:-1,y:-1} 添加新路径时，鼠标位置和上一个点的虚线提示；pointCloud:[] 点云；newNavigationPoints:[]地图维护页面添加导航点；correctionPoints地图维护页面点位校正；equidistantPoints等距点位

地图组件工具函数util.js：getComputedStyle(el,prop);getDragDirection(clientX,lastClientX,clientY,lastClientY):{horizontalDragDirection:'left',verticalDragDirection:'top'}; coordinateTransform(point机器人传输的导航点坐标,originalPoint原点坐标,pixelRatio像素转换比例,imgHeight):{x,y}转换后的坐标 机器人坐标转换为canvas坐标

pointsFormatBatch(points,originalPoint,pixelRatio,imageHeight) [{pointId,vehicleCoordinate:string}] 将请求回来的点数据转换为绘制需要的数据格式;antiCoordinateTransform(point,originalPoint,pixelRatio);antiPointsFormatBatch(points,originalPoint,pixelRatio,imageHeight,scaleRatio);reactFormatBatch(rects,originalPoint,scaleRatio,pixelRatio,imgHeight)

routeArrToObj(routeArr:[[number,number]]路径二维数组) 规划线段转为对象；routeObjToArr；isInCircle(p:{x:number,y:number},c:{x:number,y:number},r:number):boolean 判断点是否在圆上； isInSegment(p:{x,y},s:{p1:{x,y},p2:{x,y}},w):boolean 判断点是否在一个有宽度的直线上;isInRect;listToIdKeyObj transform a object arr to a id-obj obj for quick search obj by id. return:formatted obj.

getRotateDelta(scaleCenter,rotateCenter1,rotateCenter2):{deltaX,deltaY} 计算地图缩放旋转90°后的Δx和Δy；getCross(p1,p2,p);isPointInMatrix(pointXYInfo,p);radians2Angles;angles2Radian;isInRectSide(point,rect,lineWidth,pointXYInfo)
```js
class BaseRobotMap extends Vue {
  @Ref() mapWrapper
  @Ref() mapCanvas
  @Ref() contextMenu//右键菜单元素

  robotType=getCurrentSceneType()
  ROBOT_RAIL_TYPE=ROBOT_RAIL_TYPE
  get contextmenuList(){
    let contextmenuArr=[{...obj}] // 开始删除、确认删除、取消删除、一键导航、开始重定位、重定位到原点 id/name/handleClick/condition
  }
}

```
# utils
# 鉴权
https://blog.csdn.net/kjc513/article/details/127639768

全面巡视标准化作业卡.xls
https://blog.csdn.net/suixishix/article/details/132492314

已加入导出队列；

```js
// http://localhost:8009/monitor/workMonitor?id=50,
// /user/position,/robotSystem/maintenance-configure
// bottomMenuMixin.js
if (this.PARENT_TITLE===""||this.CHILD_TITLE==="") {
          this.$message.error('账号权限异常，已重定向至首页')
          this.$router.push({
            path: '/robot/management?id=31',
          });
        }
```
changeImagePath;http://localhost:8009/resultConfirmation/equipmentConfirmation?id=52 设备告警查询确认 第五条数据;
xm-web\src\views\robot-setting\software-configure\index.vue;

nav_bar_logo.png; <img data-v-de5890d6="" src="/ftp//resource/logo/nav_bar_logo.png">
# telecom
http://106.225.147.115:20011/robot/management
