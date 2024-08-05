https://calliper.cn/s/83d333196af34c8fa75b33448fe4f932
vue-element-ui,canvas+svg,viewerContainer;数据层面（后端给到diff数据源吧？）要和视图层面配合好；淡红色的段落背景色（diff）、选中的段落；深红背景色色的具体diff处；两边的段落索引列表和具体text索引列表要有对应关系。下一页、下一项的diff；diff算法的输入输出，输入是否有段落信息，输出是否有段落信息。

https://www.bilibili.com/video/BV1Qi4y1m7iA/?vd_source=e7f4fba95eebd425c3c66919b01a07e7 <marked>{searchingStr}</marked>

https://blog.csdn.net/qq_43291759/article/details/125395542 <DiffString />

使用worker优化。react项目配合diff实现文件对比差异功能

diff.js 文件对比优化后的写法
```js
/**
 * @Description:
 * @version:
 * @Author: ZhangJunQing
 * @Date: 2021-11-12 17:35:23
 * @LastEditors: ZhangJunQing
 * @LastEditTime: 2022-05-12 16:00:00
 * @param  {  }
 * @desc
 * @return  {  }
 */
import React,{Fragment}from'react'
import{Modal,Divider,Spin}from'antd'
import Button from '@com/Button'
import Worker from './workerJS/differ.worker'
// const Diff=require('diff')
const pStyleObj={
  fontSize:'0',
  marginBottom:'0',
  padding:'0',
  lineHeight:'2px',
  wordBreak:'break-word',
  width:'100%',
  // minHeight: `${560}px`,
  overflowX:'auto'
}
const styleObj={
  lineHeight:'22px',
  border:'2px solid #fff',
  paddingTop:'2px',
  paddingBottom:'2px',
  borderRadius:'4px',
  fontSize:'16px',
  paddingLeft:'10px',
  marginBottom:'0',
}

export default class DiffString extends React.PureComponent{
  /**
   * oldStr 为上次文件 已生效配置
   * newStr 为最新文件 待下发
   *
   * isModalVisible
   */
  static defaultProps={
    isModalVisible:false,
    title:'预览文件差异',
    leftTitle:'已生效配置',
    rightTitle:'待下发',
    changeIsModalVisibleState:()=>{},
    oldStr:'',
    newStr:'',

    isDiffWords:false,// 是否开启单词对比 但是是在行对比的基础上进行改造的
    // 这个变量是为了空行，使两边相同的内容行对齐
    isSplitBRFlag:true,// 是否为对齐查看，这个变量目前不做动态改变，和changeIsSplitBRFlagFun方法配合
    headerHeight:1,
  }
  /**
   * attention:
   * 当开启单词对比后 isDiffWords：true，需要设置isSplitBRFlag:true
   * contextBoxLoading 加载文件的Loading
   */
  state={
    isOriginFlag:false, // 切换比较模式，默认文件差异对比 true为源文件对比,
    defaultAddColor:'green',
    defaultDelColor:'red',
    defaultColor:'grey',
    DiffLeft:[],
    DiffRight:[],
    leftSourceList:[],
    rightSourceList:[],
    contextBoxLoading:false,
  }
  myWorker=null
  componentDidMount(){
    this.myWorker=new Worker()
  }
  componentWillReceiveProps(props){
    const { newStr, oldStr,isModalVisible } = porps
    if(!isModalVisible){
      this.myWorker.terminate()
      return false
    }else{
      this.myWorker=new Worker()
    }
    if(newStr===''&&oldStr==='')return
    console.time('收到数据直至渲染结束花费时间')
    this.setState({
      contextBoxLoading:true
    })
    this.myWorker.postMessage({newStr:newStr.replace(/\r/ig,''),oldStr:oldStr.replace(/\r/ig,'')})
    const that=this
    this.myWorker.onmessage=function(e){
      const { DiffLeft, leftSourceList,rightSourceList } = e.data
      this.setState({
        DiffLeft,
        DiffRight:DiffLeft,
        leftSourceList,
        rightSourceList,
        contextBoxLoading:false,
      },()=>{
        console.timeEnd('收到数据直至渲染结束花费时间')
      })
    }
  }
  componentWillUnmount(){
    this.myWorker.terminate()
  }
  // 源文件切换变量
  changeOriginFileFun=()=>{
    this.setState({
      isOriginFlag:this.state.isOriginFlag,
    })
  }
  handleCancel(){
    this.setState({
      isOriginFlag:false,// 默认还是显示 对比文件页面
    })
    this.props.changeIsModalVisibleState()
  }

  /**
   * 这个方法 事件委托
   *
   * 点击p标签，改变当前p标签的样式，以及更改对面等行的样式
   *
   * 点击左边，有背景的为defaultDelColor；点击右边，有背景的为defaultAddColor，不是增加不是删除的为defaultColor
   *
   * 2px solid #fff 是默认边框
   * 如果只给当前点击的加边框，对引起整个页面抖动
   *
   * 所有每一个p标签都添加一个边框 颜色为底色
   *
   * 这样每次点击的时候把所有的颜色都重置
   * 然后再将点击的p换颜色 即可
   */
  changeRightLineFun=(flag,ev)=>{
    ev=ev||window.event
    let target=ev.target||ev.srcElement
    let index
    if(target.style.userSelect==='none'){
      return false
    }
    let { defaultAddColor, defaultDelColor } = this.state
    let RightFileId=flag==='right'?document.getElementById('RightFileId'):document.getElementById('LeftFileId')
    let LeftFileId=flag==='right?':document.getElementById('LeftFileId'):document.getElementById('RightFileId')
    let leftFileIdP=LeftFileId.getElementsByTagName('p')
    let rightFileIdP=RightFileId.getElementByTagName('p')
    if(target.nodeName.toLowerCase()=='p'){
      for(let i=0;i<RightFileIdP.length;i++){
        if(RightFileIdP[i]===target)index=i
        RightFileIdP[i].style.border='2px solid #fff'
      }
      for(let i=0;i<LeftFileIdP.length;i++){
        if(leftFileIdP[i]===target) index=i
        LeftFileIdP[i].style.border='2px solid #fff'
      }
      if(flag==='right'){
        if(target.parentNode.style.color===defaultAddColor){
          target.style.border=`2px solid ${defaultAddColor}`
        }else{
          target.style.border='2px solid #000'
        }
      }else{
        if(target.parentNode.style.color===defaultDelColor){
          target.style.border=`2px solid ${defaultDelColor}`
        }else{
          target.style.border='2px solid #000'
        }
      }
      LeftFileIdP[index].style.border='2px solid #000'
    }
  }
  // 左右盒子样式
  returnDivStyle=item=>{
    let {defaultAddColor,defualtDelColor,defaultColor}=this.state
    return {
      color: item?.added ? defaultAddColor:item?.removed?defaultDelColor:defaultColor
    }
  }

}
```

功能1：文件内容比对
功能2：关键词搜索+精确定位（定位到页，然后定位到具体行--页面居中）并依次跳转
