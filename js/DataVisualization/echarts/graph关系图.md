# examples
https://echarts.apache.org/examples/zh/index.html#chart-type-graph

拖动着拖动着就不见了！！不要拖出画布边界，这块就不处理了。
```js
function createNodes(count){
  var nodes=[]
  for(var i=0;i<count;i++){
    nodes.push({id:i+''})
  }
  return nodes
}
function createEdges(count){
  var edges=[]
  if(count===2)return [[0,1]]
  for(var i=0;i<count;i++){
    edges.push([i,(i+1)%count])
  }
  return edges
}
var datas=[]
for(var i=0;i<16;i++){
  datas.push({
    nodes:createNodes(i+2),edges:createEdges(i+2),
  })
}
option={
  series:datas.map(function(itm,i){
    return {
      type:'graph',animation:false,data:itm.nodes,left:(i%4)*25+'%',top:Math.floor(i/4)*25+'%',width:'25%',height:'25%',force:{
        repulsion:60,edgeLength:2,
      },
      edges:itm.edges.map(e=>({source:e[0]+'',target:e[1]+''})
    }
  })
}

option={
  title:{text:'Basic Graph'},
  tooltip:{},
  animationDurationUpdate:1500,animationEasingUpdate:'quinticInOut',
  series:[
    {
      type:'graph',layout:'none',symbolSize:50,roam:true,label:{show:true},edgeSymbol:['circle','arrow']
    }
  ]
}
```
edgeSymbol含义
