该系统运用智能化-也就是机器人巡检的新技术与新方法，*实现输煤栈桥全线路、全方位、全自主的智能化巡检管理，无人化巡检、可视化管理，提高输煤系统运行的安全性，降低因人工巡检不全面、未量化等因素，导致的各种安全事故与损失*。

文档说明：*本文档旨在详细阐述轨道巡检机器人的需求，为轨道巡检机器人的设计、开发、测试、及部署，提供明确的安全性指导*。
# 概述
## 产品概述及目标
随着工业技术的不断发展，传统的巡检方式已经难以满足现代企业的需求，为了提高巡检效率、确保安全、降低人力成本，我们计划开发一套挂轨巡检机器人及平台，本文旨在明确该项目的开发目的，为后续的研发工作提供明确的指导。
## 背景介绍
随着现代工业的快速发展，各种设施与设备的规模不断扩大、结构日益复杂，对巡检工作的要求也日益提高。传统的巡检方式依赖于人工，不仅效率低下，而且难以确保巡检的全面性和及时性。此外，一些高风险区域或恶劣环境下的巡检工作，对人员安全构成了严重威胁。因此，开发一种能够自动化、智能化进行巡检的机器人及平台成为迫切需求。
## 产品目的
1. 自动化巡检：通过挂轨巡检机器人代替人工进行巡检，实现24小时不间断的自动化巡检，减少人力成本，提高巡检效率。
2. 智能化监控：通过搭载先进的传感器和图像处理技术，实现对设备运行状态的实时监控和智能分析，及时发现设备异常，提高巡检质量。
3. 数据化管理：通过平台实现对巡检数据的收集、存储、和分析，为企业的设备管理和维护提供数据支持，提高管理效率。
## 产品说明书编写目的
- 开发人员开发依据
- 设计人员输入源
- 项目经理跟进产品执行实现程度的依据
- 测试人员编写功能测试用例的输入源
- 项目成员产品理解或执行的依据

产品开发PRD的输入包括：市场调研、产品需求分析、用户定位、竞品分析；输出包括：产品定义、供应商评估、成本分析、项目开发周期、市场与推广策略。
## 数据字典-前端、后端、嵌入式、图像
> 介绍本产品中数据的数据项、数据结构、数据流、数据存储、处理逻辑、外部实体等。
## 数据库实体类
### 基础公共字段
| 字段名 | 类型 | 描述 |
| ---- | :--: | ---- |
| creator | varchar | 创建人 |
| create_time | datetime | 创建时间 |
updator、update_time、status-int-状态1有效0无效
### 主设备信息表device_info
id-int-主键ID、device_name-varchar-设备名称、floor-v-楼层名称、region-v-区域名称
### 环境异常记录表environment_exception_record
id-int-主键ID、room_id-int-房间ID、robot_id-i、time-d-异常发生时间、exception_item-v-告警项、alert_level-v-告警等级、exception_value-v-异常值、is_read已读状态1已读0未读
### equipment_info设备模型及设备点位模型文件信息
id、station_code变电站编码、station_name、area_id、area_name、bay_id间隔、bay_name、main_device_id-name、component_id-name部件ID（3D地图）、device_id-name设备点位ID、device_type主设备类型、meter_type表记类型、region设备区域、apperance_type辅助设施类型、save_type_list采集/保存文件类，格式：多个采集文件类型，采用‘,’分隔型列表。

recognition_type_list识别类型列表，格式：多个识别类型，采用‘,’分隔。phase相位，多个相位用，分隔。device_info备注信息、data_type设备点位支持的；lower_value正常范围下限；upper_value正常范围上限；video_pos关联视频编码；label_type标注类型；warning预警值、serious严重值、crisis危急值、abnormal异常值；three_contrast三项对比范围；general一般值、intervals间隔、

device_parameter摄像头设备参数、image_label_parameter标注数据、device_template_image_path设备模板图片路径、equipment_name机器人或摄像头名称、equipment_id、device_management_name装置名称、device_manage_id装置ID、deployment_status、point_class_name点位分类名称、unit单位、label_status、point_class_id：1摄像头2机器人、

temperature_contrast温度差值、linkage_point_id联动点位ID、whether_silent是否为静默点位1-0、navigation_id导航点ID、interval_time静默时间、recognitionDefect是否开启缺陷识别、job_id任务绑定ID、execute_count执行次数、sort排序、room_id、floor
## equipment_model设备模型文件表
id、station_name、station_code、patroldevice_name设备名称、patroldevice_code、device_model设备型号、manufacturer生产厂家、use_unit使用单位、device_source、production_date、production_code生产编号、istransport是否轮转0不轮转1轮转、use_mode使用类型，当设备类型为高清视频时传递该字段，10枪机11球机12云台；video_mode视频类型1可见光2红外3可见光与红外

place安装位置；type-设备类型：1室外轮式机器人，2室内非轮式机器人、3挂轨机器人、10高清视频、11硬盘录像机、12智能分析主机、13无人机、14声纹、20巡视主机；patroldevice_info备注信息、robots_code所属机器人、port端口、password、user_name、ip_adress、max_zoom最大倍率、connection连接状态、camera_type摄像头或机器人类型。

number_of_points部署点位数、silent_status静默状态：1静默状态开启0关闭、substation变电站、device_type、region、intervals、whether_support_focusing是否支持调焦、sip_service_id SIP服务ID、sip_service_domain SIP服务域、sip_server_address、sip_server_port、sip_server_name SIP用户名、sip_user_authentication_id、sip_server_password,linkage_equipment_status是否为联动摄像头状态1是0否；

infra_red_ip_address双光谱摄像头红外IP、zoneId、silent_last_execution_time静默上一次执行时间、interval_time间隔时间（分钟）、zone_id、floor、visible_light_nvr_state_grid_code视频设备可见光通道绑定的nvr国网编码、visible_light_nvr_channel_code视频设备绑定的nvr通道的编码、infrared_nvr_state_grid_code视频设备红外通道绑定的nvr的国网编码、infrared_nvr_channel_code。
## export_record导出记录表
id、begin_time导出开始时间、end_time、path路径、exporter_status导出状态、export_user导出人、file_name报表名称、
## label_dictionary标注类型表
id、name、code、type：0标注类型1把标注说明
## map_info地图表
id、name地图名称、device_json地图设备配置json串、map_path地图文件路径、scale缩放、rotate、x-x轴、y、model_overall_zoom模型整体缩放、x_axis_offset-x轴偏移量、y_axis_offset、z_axis_offset、xyz_axis_rotation-x轴旋转量、map_scale比例缩放、ignore_model忽略模型列表（json字符串）、robot_id、map_id、source来源结：1站端。
## nvr-NVR信息表
id-bigint、name、ip、port、server_ip：服务IP，国网B接口的服务部署服务器所在ip、server_id、connection连接状态、username、password、state_grid_code国网设备唯一编码、connect_type：tinyint 0无线1有线
## position_mark预置位表
title、sort、device_manage设备表id、device_paramet自定义数据、remark备注、del_flag：0正常1删除、
## recognition_record识别结果记录表
intelligent_linkage_id联动id、intelli_linkage_code联动任务编码、recognition_result识别结果、recognition_time、img_url、is_count识别次数、all_count总次数、remark、send_img_url发送算法识别图片地址、
## robot_exception_info异常信息表
point_id、patrodevice_name（code）巡视设备编码、time、exception_message异常信息、is_read
## robot_info机器人信息表
name、code、map_id、scene_type、ptz_type云台类型、threshold气体阈值、electricity_state电量状态、mileage运行里程（米）、change_point_info充电点点位信息JSON串、control_machine_ip机器人主体IP、control_machine_port、visible_ip机器人可见光摄像头IP、infrared_camera_ip、yuntai_port机器人摄像头端口号、visible_camera_username、visible_camera_password登录密码

infrared_size机器人红外线画面尺寸、visible_size、connection连接状态、video_port视频端口、yuntai_last_position机器人云台最后位置保存、
## room房间表
id、name
## room_particulars房间详情表
room_name、robot_ids、map_path_2d-2D地图、wiring_diagram_id接线图ID、map_path_3d、map_id：varchar
## security_alarm_info安防告警信息表
name事件名称、type事件类型、time告警时间、result_image、device_ip摄像头IP、is_read0未读1已读（bit）、recognition_status识别状态、device_name摄像头名称、compress_image压缩图片地址
## silent_info静默结果信息表
equipment_info_id设备模型及设备点位模型id、recognition_type识别类型、device_management_id装置ID、img_path、hd_img_path红外识别时高清图片地址、recognition_result、gradle告警等级、days静默文件保存期限、color_handle可见光句柄，大于零正常小于零异常、is_read、identification_info识别结果记录信息、compress_image

recognition_status、alarm_confirmation告警确认0未确认1确认、video_path
## substation变电站信息表
title登录页标题、subheading登录页副标题、background_file登录页背景、logo_file登录页logo、main_title导航条标题、nav_bar_logo_file导航条logo、substation_no变电站编号、substation_name变电站名称、substation_longitude变电站经度、substation_latitude纬度、robot_file_days文件删除时间间隔、camera_file_days、robot_charge_battery机器人返航电量、robot_task_battery机器人任务所需最低电量
## sys_belt_config皮带撕裂设备配置表
monitor_name测点名称、device_name、belt_name、belt_length皮带长度、belt_speed、belt_width、state采集状态0开启1关闭、remark
## sys_belt_info皮带撕裂报价信息表
alarm_time告警时间、picurl-longtext实际是图片base64、belt_name、device_name、moitor_name、note报警消息、pick_interval采集间隔、type1皮带撕裂2皮带跑偏3异物检测、remark、people_process 0未处理、
## sys_code系统码表
name、desc、remark、code码值、type
## sys_menu系统菜单表
name、url路径、root_id根路径ID、parent_id、level、image、visible是否隐藏、permissions菜单拥有的权限、description备注、
## sys_role系统角色表
name菜单名称
## sys_role_rel系统角色绑定关系表
role_id、menu_id、permissions
## sys_user用户表
name用户名称、pwd、origin_pwd、nick_name别名、contact联系方式、login_count登录次数、login_time登录时间、role_id
## sys_video_oper_info视频录像操作记录表
equipment_name设备名称、equipment_id设备ID、start_time开始时间、over_time结束时间、record_time录像时长、file_type1视频3图片、video_url、color_img_url可见光图片url、infrared_img_url、type：0录像中1结束录像、days删除间隔时间（天）、remark备注、review_status审核状态：2误告警3转缺陷4确认告警、mark_process_time标记处理时间，指标记确认/缺陷/误告警的标记时间
## system_exception巡视设备异常告警数据
patroldevice_name巡视设备名称、patroldevice_code、type、point_id、content告警描述
## task任务记录表
task_status任务状态、name任务名称、point_ids点位ID集合、task_edit_id任务模板ID、task_type、task_execute任务执行类型、execute_time执行时间、execute_end_time结束时间、week_day：0表示每天、1-7表示星期1到7, 1,2,3表示周一二三执行、statistical_info点位统计信息（JSON串）、note备注、machine_type机器人或摄像头类型、task_id任务表id

data_source数据来源ID：1摄像头2机器人、intelligent_linkage_id智能联动ID、room_id 表room_particulars主键
## task_edit任务配置表
name、point_ids、perform_count执行次数、task_type、search_conditions查询条件、room_id
## task_item任务详细记录表（以点位为基础）
device_management_id摄像头ID、task_id、task_name、point_id、three_contrast_result三项对比结果、point_name点位名称、device_focus_value设备焦距、environment_focus_value环境焦距、device_zoom设备倍率、environment_zoom、recognition_defect识别缺陷、image_label_parameter图片模板标注参数JSON串

device_parameter摄像头设备信息、device_template_image_path设备模板图片路径、recognition_type、recognition_time、recognition_result、recognition_result_image、recognition_result_video、recognition_status、review_status、audit_time、audit_result、audit_user、audit_gradle、audit_actual_data、task_type、gradle告警等级、

defect_result缺陷识别结果，逗号分隔、defect_result_image缺陷识别结果图片、visual_image_path_not_recog、camera_photo_image_path摄像头拍照图片、camera_video_path摄像头录像路径、label_type标注类型、is_read、machine_type机器人或摄像头类型、task_item_id任务结果ID、data_source、mark_process_time、color_handle、infrared_handle、alarm_confirmation告警确认：0未确认1确认、video_path
## threshold环境信息阈值信息表
room_id、robot_id、value环境阈值项、label环境阈值项中文名、warning预警、general一般告警、serious严重告警、crisis危急告警、three_contrast三相差值、normal_state正常状态
## track_info轨道信息表
robot_id、map_id、track_index二维码标识、x-x坐标、y
## user_log系统日志表
user_id操作用户主键、user_name、table_name操作的表id、table_attribute_id操作的数据id，逗号分隔、operation_type操作类型、operation_time、client_id客户端ID（每次登录，都会有不同的客户端ID，不同电脑同用户也是）
# 名词说明
术语/缩略词   说明
X-IIS-CTB 输煤栈桥智能巡检系统的简称
MG-420 挂轨巡检机器人本体
## 文档阅读对象
声明本文档输出的阅读对象和注意事项

用户角色     用户描述
前端开发 项目成员产品理解或执行的依据
后端开发
图像算法
嵌入式
项目经理
软硬件测试
结构硬件
## 参考文献
GB6458-86-盐雾试验国家标
GB/T 2423.4——2008交变湿热实验
GB/T 4208——2017 外壳防护等级
GB/T 17626.2——电磁兼容静电放电抗扰度实验
GB/T 17626.3——电磁兼容射频电磁场辐射抗扰度试验
GB/T 17626.4——电磁兼容电快速脉冲群测试
GB/T 17626.5——浪涌（冲击）抗扰度试验
GB/T 17626.8——电磁兼容工频磁场抗扰度试验
GB/T2423.4 电工电子产品环境试验
GB/T 17626.5——2019浪涌（冲击）抗扰度试验
# 竞品分析
列举市面上典型的竞品，如下表（待补充）
| 公司名 | 产品类型 | 产品名 | 场景 | 技术亮点 |
| ---- | :--: | ---- |
| 内容 | 内容 | 内容 |
| 内容 | 内容 | 内容 |
# 产品描述
介绍产品用户使用流程、版本规划、产品框架、功能列表等。

*用户流程图包括如下：用户登录系统=》配置机器人参数=》设置巡检任务和计划=》启动巡检任务=》实时监控和数据分析=》处理巡检结果=》结束巡检任务*。

机器人外形有三种颜色可选，产品框架主要包括前端、后端、嵌入式、图像。

产品硬件架构包括业务层、中间层、抽象层、硬件层，业务层包括任务巡检、路径设置、地图维护、AI结果、数据分析、和视频；中间层包括ROS、数据库、任务栈、定位、导航、Service、AI、和HTTP；抽象层包括Modbus、FTP、消息队列、协议/数据库、日志/工具类；硬件层包括机器人、超声波、主控板、气体传感器、Rfid、电机、和其他。

产品软件框架如下：标杆项目系统架构图包括展现层的Web和Restful接口；通讯层的HTTP/HTTPS、WebSocket、TCP/UDP；服务层的基础服务、AI算法服务、相机SDK服务、机器人服务；数据层的MySQL和Redis。系统网络架构图暂不介绍。业务流程图的任务下发流程图，自开始后，选择需要下发的任务，判断该任务涉及相关巡视设备是否空闲，否的话，回到‘选择需要下发的任务’。

空闲的话，选择任务执行方式，并下发；最后结束。UML类图的静默任务执行类 FunctionalInterface Runnable run() TimerTask nextExecutionTime,VIRGIN,CANCELLED,state,lock,SCHEDULED,EXECUTED,period,run(),cancel(),scheduleExecutionTime();Component value()；

SilentTaskActuator iRecognitionService,silentTaskExecutor,silentTask,redisMediator,IinspectionEquipmentService,logger,mediaUtil,iPointService,doTask(InspectionEquipment,List<Point>),run(). 机器人WebSocket服务端:ServerEndPoint subprotocols(),configurator(),value(),encoders(),decoders().

Component value();BinaryWebSocketEndpoint BinaryWebSocketEndpoint(),redisMediator,dataSource,thisThreadTask,threadTask,thisRedisMediator,logger,ftpClientComponent,webSocketClientManager,thisIinspectionEquipmentService,iinspectionEquipmentService,msgCacheMap,thisWebSocketClientManager,thisFgpClientComponent.

intToByteArrayLittleEndian(int),sendMsgToRobot(String,String),init(),onError(Session,Throwable),onOpen(Session),onClose(Session,CloseReason),onMessage(Session,ByteBuffer).

描述软件平台产品的功能需求，展示产品框架流程图：

用户登录=》选择机器人=》配置点位；
创建机器人/摄像头点位=》部署点位和设备位置=》标注点位=》配置点位；

配置点位=》配置任务=》查看执行结果=》生成巡检报告=》结束巡检

配置任务的三种任务模式包括定期执行、周期执行、立即执行。

平台界面的各页面展示和功能描述包括：前置条件、功能规则、后置流程等。

首页包含各类信息总览，如设备数量及上线情况、车间环境详情、当日任务执行详情、以及机器人实时地图。

后台管理包含设备录入、点位的添加部署和标注、点位阈值设置、和环境阈值设置。

任务配置可添加巡检任务，同时具有三种执行方式。

历史信息模块包含各类任务的巡检信息。

监控大厅支持各类设备的监控视频查看，同时支持快捷布局，一键展开所有设备。

控制中心提供机器人和摄像头的实时视频，操作，录制，和拍照。

字段说明阐述出现的数据字典中的数据信息。

与功能相对应的业务详细说明，包括业务处理方法，与功能对接关系，业务手册等。

业务埋点说明表包括参数名、参数说明、参数值。

主要需求列表包含：
序号 开发小组 功能名称 功能详细说明 校验标准 优先等级 备注

1 皮带撕裂 根据皮带运行速度，提前设定好报警阈值，可以全天候持续图像识别，当检测到皮带表面异常的特征时，系统自动报警并记录截图，同样记录在数据库的皮带异常记录表中，以供后续查询使用。 校验标准为：1. 当系统产生一级撕裂报警时，软件端发出弹窗告警，提醒用户远程查看纵撕程度； 2. 当系统产生二级撕裂报警时，软件端发出弹窗告警，同时画面闪烁警醒用户需要前往现场检查；

3. 当系统产生三级撕裂报警时，系统输出信号至皮带控制系统，经由工作人员确认后，可立即连锁皮带机停机，防止事故扩大，需要确定皮带发生毛边的具体位置，方便运行和检修人员及时处理。 优先级P0

2 皮带跑偏 提前设定皮带运行过程中的正常偏移范围，当皮带边缘超出设定范围时，系统发出告警提醒；跑偏可以设定2条‘边界线’，当超过第一条线时发出告警提醒，当超过第二条线时，可以联动纠偏装置，作纠偏动作或者提醒用户停机处理。 校验标准为：需要确定皮带发生毛边的具体位置，方便运行和检修人员及时处理，暂时不做缺陷定位。 优先级P0

3 皮带磨损 优先级P0 备注：包含皮带撕裂、磨损
4 皮带打滑 P2 暂不做
5 皮带异物（识别）
6 皮带堆堵 下料口堆堵。现阶段主要通过图像算法进行识别，当堆堵现象发生时，通过现场摄像设备记录回传至后台，应用算法来判断堆堵情况，超出预设值后告警，通知人员处理。
7 人员入侵 需要增加定点相机，能对危险区域进行7*24全天候监测，当监测到有人闯入时，立即触发报警。
  人员行为 发现现场有人的行为有危险，比如抽烟，就发出告警
  人员安全 发现现场有人摔倒或者其他危险行为，就发出告警
8 周界防范 禁区监控：对现场已知禁区周边，提前设置好禁区，当有人进入时发出告警；安全护栏：对现场护栏提前设置，当有人翻越护栏时发出告警；坑洞防护；对现场已知坑洞周边提前设置好禁区，当有人掉入时发出告警；
8 火焰检测 通过机器人红外摄像仪对火点进行检测，及时发现异常。实现对环境和皮带机状态的动态实时监测，出现异常数值后，及时向后台系统发出警报和实时监测到的数据。
9 安全帽检测 定点相机+机器人相机
10 电机、滚筒温振检测 外热成像、振动传感器、采集器等设备，对皮带机电机、以及滚筒的温度分布，以及振动情况进行实时监测，热成像具有全局、实时测温的特性，能够对画面内110592个像素点的温度值，实时展现、并能够使用鼠标测量到任意位置的温度数值。
11 深度学习 暂不做
12 视频分析 支持实时视频分析，平台或本地图片分析，和通道定时抓图分析 算法模型的识别准确率不低于95%，识别速度小于80ms
13 洒sa料、漏料检测 通过机器人检测出运输过程中侧面的洒料、漏料等情形

14 表计识别 各种表计、指示灯、开关等进行识别，并基于分析结果判断设备运行状况，当出现异常时及时报警，并自动记录报警信息
15 音频采集分析 采用国际领先的音频降噪算法，自适应动态降噪处理技术，内置高速DSP数字信号处理器，独特设计噪声动态控制电路。可将电子噪音控制极低，主要针对皮带机室内部分的托辊、滚筒等设备的检测
17 预警&联动 功能1：机器人在巡检过程中，通过数值分析、阈值对比、趋势分析、数据库等相关技术，对异常数据进行自动预警。预警信息通过界面告警和声光告警两种方式呈现，及时提醒运维人员注意。功能2：当后台分析数据显示为异常时，后台监控软件界面会出现告警信息列表，运维人员通过操作滚动显示告警信息。功能3：当系统存在告警信息时，系统通过巡检机器人告警音频及灯光闪烁，提醒运维人员注意。

18 报警功能 系统具备设备检测数据的分析报警功能；报警发生时，立即发出报警信息，并伴有声光提示，并能人工退出/恢复；报警信号能实时远传在后台管理系统中，根据现场设备的运行情况，可为各种设备、各环境参数设置了一套预警策略和有多种报警类型，如短信报警、后台报警、机器人声光报警。当现场设备、环境出现异常情况时，可发生相应报警。 机器人三色灯、控制室外接音箱实现

19 数据统计 功能1：对监控数据进行储存、分析、统计、检索的功能。监控平台对数据进行标准化的整理与排序，支持Excel报表导出保存。运维人员可根据任务或监控点，在监控平台内检索数据，快速查看监控数据；功能2：后台系统具备查询、存储、统计与智能分析系统自检信息、及巡检机器人采集信息的功能，具备数据标准化组织整理、排序等功能具备巡检结果和统计结果，word、Excel等格式文件的导出功能，具备展示异常或可疑可见光、红外视频/图像功能。

20 报表输出 执行完一个任务后都会自动生成报表，运维人员可以在监控平台根据时间、巡检类型、任务名称等，进行检索并查看报表。运维人员可根据需求检索、查看、导出各类报表，包括巡检任务报表、数据报表、报警记录报表、环境信息报表等。

21 可视化界面 后台系统提供简洁、直观的操作界面，支持中文操作界面，工作人员在系统管理平台界面中，可进行实时信息查看、历史信息查询、巡检报表查询与导出、巡检点位管理、任务管理、机器人遥控、报警信息确认、系统用户权限配置、添加/删除机器人等操作。

22 云台操作 可以通过鼠标控制云台转动、放大、定位等操作。

23 例行全自动巡检 系统根据预先设定的巡检内容、时间、周期、路线等参数信息，自主启动并完成巡视任务

24 人工遥控巡检 可以在第一时间使用管理后台的人工遥控界面，操控机器人快速到达异常设备位置，及时对异常设备进行查看并核实报警信息，以便迅速制定响应策略

25 定点巡检 机器人具备对单点的持续巡检功能，驻点对设备进行持续监测检查

26 离线巡检 机器人具备离线巡检功能，当机器人与监控后台通信连接断开时，机器人可实现离线巡检，并将巡检数据存储在机器人本体存储空间，当机器人与监控后台恢复连接时，可实现与监控后台的数据同步

27 巡检功能 自动巡检的模式主要有：全面巡检、例行巡检、专项巡检、以及自定义巡检等，各种模式支持互相切换。机器人能按照事先设定的巡检模式完成任务，按照既定规则完成表计读数、温度测量、及环境监测等巡检活动。

28 巡检点位管理 工作人员能够在后台系统中配置，巡检点及其对应的巡检内容，如红外测温、图像采集，形成巡检点位信息表

29 任务管理 工作人员能够在后台系统界面中编制机器人的巡检任务，使机器人在指定时间对指定的巡检点进行巡检，巡检任务支持以任务日历的形式展示

30 地图功能 功能1:3D地图；功能2：后台系统软件支持电子地图的展示功能，地图上可呈现机器人的实时位置、行进路径、监控点信息、充电站位置等；支持对电子地图放大、缩小、拖动等基本操作

31 数据分析 针对设备温度、环境参量数据等数据，后台软件能进行数据分析，发现数据超过限值时自动触发报警

32 机器人控制 需求1：运维人员能用PAD进行机器人移动、云台转动、相机变焦等控制；需求2：运维人员能够在后台系统界面的遥控面板上，进行机器人移动、云台转动、相机变焦等控制

33 现场对讲 本功能的实现，是通过开启巡检机器人管理后台的语音对讲，同时前方工作人员，需打开机器人的语音按钮，对讲声音可达到70分贝以上
