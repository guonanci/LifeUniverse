# 维基

数字映射（Digital twin），或译作数字孪生、数字分身、数位双生，指在信息化平台内模拟物理实体、流程、或系统，类似实体系统在信息化平台中的双胞胎。借助于数字映射，可以在信息化平台上了解物理实体的状态，甚至可以对物理实体里面预定义的接口组件进行控制。

数字映射是物联网里面的概念，是指通过集成物理反馈数据，并辅以人工智能、机器学习、和软件分析，在信息化平台内置立一个数字化模拟。这个模拟会根据反馈，随着物理实体变化而自动做出相应变化。理想状态下，数字映射可根据多重反馈源数据自我学习，从而几乎实时地在数字世界里呈现物理实体的真实状况。

数字映射的反馈源主要依赖于各种传感器，如压力、角度、速度传感器等。数字映射的自我学习，或称机器学习，除了可依赖于传感器的反馈信息，也可是通过历史数据，或集成网络的数据学习。后者常指多个同批量的物理实体同时进行不同操作，并将数据反馈到同一个信息化平台，数字映射根据海量的信息反馈，进行迅速的深度学习和精确模拟。

## 应用

数字映射可应用在各种行业（目前主要是工业）对核心设备、流程的使用进行优化，并简化维护工作，目前也有农渔业数字分身应用的尝试[1]。

在建筑行业，数字映射可透过大量嵌入式感测器，持续监控资产，从而实现基础设施各方面的即时资料收集。这种主动的 DT 即时监控和维护方法可确保及时介入，并最大限度减少停机时间。此外，虚拟数字映射模型通常反映竣工实体产品的几何形状，从而优化现场施工作业。

DT 使​​所建构的实体产品的三维几何形状来识别表面参数。在营运优化情况下，数字映射透过分析来自感测器的资料流，并即时调整参数，来实现营运的即时优化，从而提高建筑单元的性能。在当前建筑环境数位化和绿色转型的时代，数字映射可更有效地监控资源消耗和利用，从而可以对能源、材料使用、和水进行数据驱动的优化，从而透过确定需要改进的领域来支持永续发展目标[2]。

# 百度百科

数字孪生是充分利用物理模型、传感器、运行历史等数据，集成多学科、多物理量、多尺度、多概率的仿真过程，在虚拟空间中完成映射，从而反映相对应的实体装备的全生命周期过程。数字孪生是一种超越现实的概念，可以被视为一个或多个重要的、彼此依赖的装备系统的数字映射系统。 [1]

数字孪生是个普遍适应的理论技术体系，可在众多领域应用，在产品设计、产品制造、医学分析、工程建设等领域应用较多。在国内应用最深入的是工程建设领域，关注度最高、研究最热的是智能制造领域。 [2]

中文名 数字孪生 [2]
外文名 Digital Twin [2]
其他译法 数字镜像、数字化映射 [2]
别    名 信息镜像模型、Cyber-Physical System（CPS） [2]
相关概念 Digital Thread [1]
意    义 实现了现实物理系统向赛博空间数字化模型的反馈。 [1]

目录

1含义
2原理
3基本组成
4意义
5进展
6现状
7应用场景
8数字孪生与Digital Thread
9标准体系

## 含义

美国国防部最早提出利用Digital Twin技术，用于航空航天飞行器的健康维护与保障。首先在数字空间建立真实飞机的模型，并通过传感器实现与飞机真实状态完全同步，这样每次飞行后，根据结构现有情况和过往载荷，及时分析评估是否需要维修，能否承受下次的任务载荷等。 [1]

数字孪生，有时候也用来指代将一个工厂的厂房及产线，在没有建造之前，就完成数字化模型。从而在虚拟的赛博空间中对工厂进行仿真和模拟，并将真实参数传给实际的工厂建设。而工房和产线建成之后，在日常的运维中二者继续进行信息交互。值得注意的是：Digital Twin不是构型管理的工具，不是制成品的3D尺寸模型，不是制成品的MBD定义。 [1]

对于Digital Twin的极端需求，同时也将驱动着新材料开发，而所有可能影响到装备工作状态的异常，将被明确地进行考察、评估和监控。Digital Twin正是从内嵌的综合健康管理系统（IVHM）集成了传感器数据、历史维护数据，以及通过挖掘而产生的相关派生数据。通过对以上数据的整合，Digital Twin可以持续地预测装备或系统的健康状况、剩余使用寿命以及任务执行成功的概率，也可以预见关键安全事件的系统响应，通过与实体的系统响应进行对比，揭示装备研制中存在的未知问题。Digital Twin可能通过激活自愈的机制或者建议更改任务参数来减轻损害或进行系统的降级，从而提高寿命和任务执行成功的概率。 [1]
原理
播报
编辑
最早，数字孪生思想由密歇根大学的 Michael Grieves 命名为“信息镜像模型”（Information Mirroring Model），而后演变为“数字孪生”的术语。数字孪生也被称为数字双胞胎和数字化映射。数字孪生是在 MBD 基础上深入发展起来的，企业在实施基于模型的系统工程（MBSE）的过程中产生了大量的物理的、数学的模型，这些模型为数字孪生的发展奠定了基础。2012 年 NASA 给出了数字孪生的概念描述：数字孪生是指充分利用物理模型、传感器、运行历史等数据，集成多学科、多尺度的仿真过程，它作为虚拟空间中对实体产品的镜像，反映了相对应物理实体产品的全生命周期过程。为了便于数字孪生的理解，庄存波等提出了数字孪生体的概念，认为数字孪生是采用信息技术对物理实体的组成、特征、功能和性能进行数字化定义和建模的过程。数字孪生体是指在计算机虚拟空间存在的与物理实体完全等价的信息模型，可以基于数字孪生体对物理实体进行仿真分析和优化。数字孪生是技术、过程、方法，数字孪体是对象、模型和数据。 [3]
进入21世纪，美国和德国均提出了 Cyber-Physical System（CPS），也就是“信息-物理系统”，作为先进制造业的核心支撑技术。CPS 的目标就是实现物理世界和信息世界的交互融合。通过大数据分析、人工智能等新一代信息技术在虚拟世界的仿真分析和预测，以最优的结果驱动物理世界的运行。数字孪生的本质就是在信息世界对物理世界的等价映射，因此数字孪生更好的诠释了 CPS,成为实现 CPS 的最佳技术。 [3]

# 公司对接数字孪生

我们公司的方案是尽量采用一个echarts基座的方式……那么将不是threejs……

<https://blog.csdn.net/littleyy666/article/details/123245157>

## 永拓-小马-哈密

### Home-index.tsx

```js
import { WebApp } from '@/api/ytcomponent/src/app'

useEffect(() => {
  if(!WebApp.instance){
    new WebApp({container:'yt_mapcontainer'})
  }else {
    WebApp.instance.Switch({container:'yt_mapcontainer'})
    ClearOrExit()
    WebApp.instance.engine.Miaokit.camera.DrawFrame(1)
  }
}, [])
useEffect(() => {
  WebApp.instance.uiMain.m_pEvents.AddOnLoadServiceEndListener({
    OnLoadServiceEnd:()=>{
      if(robot) {
        let pState=robot.taskStatus==0?'空闲':'忙'
        let pDesc='运行速度 '+robot.speed+'<br/>'
        pDesc+='所在位置  '+robot.position+'<br/>'
        pDesc+='系统版本  '+robot.version+'<br/>'
        pDesc+='型号  '+robot.model
        let pLine=WebApp.instance.uiMain.m_pUIModle.GetDefaultRobotLine()
        if(pLine) {
          pLine.SetRobotPos(robot.position)
          pLine.SetDescript(pDesc)
          pLine.SetRobotState(pState)
        }else{
          console.error('没有相关机器人模型！');
        }
      }else{
          console.error('没有机器人状态信息！');
      }
    }
  })
}, [robotRealTimeInfo])
const setManipulate=(pIndex:number)=>{
  switch(pIndex){
    case 1:
      WebApp.instance.uiMain.CamScaleUp()
      break
    case 2:
      WebApp.instance.uiMain.CamScaleDown()
      break
    case 3:
        console.error('顶视图/透视图切换')
        let pCam=WebApp.instance.engine.App.m_pProject.camera
  }
}
const ClearOrExit=()=>{ // 清空或退出调用的方法
  WebApp.instance.uiMain.m_pUIModle.m_pUITransformCtrl.m_pUIMeasurePoint.m_pMeasurePointCtrl.CleraData()
  displayAndHideSwitch(false)
}
const displayAndHideSwitch =(isVisible:boolean)=>{ // 设置测量面板的显示与隐藏
  WebApp.instance.uiMain.m_pUIModle.m_pUITransformCtrl.m_bIsShow=isVisible
}
```
