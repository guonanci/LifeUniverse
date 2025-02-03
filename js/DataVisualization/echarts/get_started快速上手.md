多种下载方式，jsDelivr CDN上获取为例，dist/echarts.js，保存echarts.js的目录新建一个index.html文件

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <!-- 引入刚刚下载的 ECharts 文件 -->
    <script src="echarts.js"></script>
  </head>
  <body>
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <div id="main" style="width: 600px;height:400px;"></div>
    <!-- 可以通过 echarts.init 方法初始化一个 echarts 实例并通过 setOption 方法生成一个简单的柱状图，下面是完整代码。 -->
    <script type="text/javascript">
      // 基于准备好的dom，初始化echarts实例
      var myChart=echarts.init(document.getElementById('main'))

      // 指定图表的配置项和数据
      var option={
        title:{
          text:'Echarts '
        },
        tooltip:{},
        legend:{
          data:['销量']
        },
        xAxis:{
          data:['shirt','pants']
        },
        yAxis:{},
        series:[
          {
            name:'销量',
            type:'bar',
            data:[5,20,36]
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表
      myChart.setOption(option)
  </body>
</html>
```

`npm install echarts`,免费cdn，jsDelive，unpkg，cdnjs；GitHub-apache/echarts,release-page。Assets-source code，压接后dist目录下的echarts.js，
只想引入部分模块减少包体机，可以在线定制：https://echarts.apache.org/builder.html

# help寻求帮助
现有文档等资料。非常大量的用户，API、配置项手册的搜索功能、常见问题、本手册的文章、GitHub issue中搜索关键词、搜索引擎；官方编辑器、CodePen、CodeSandbox、JSFiddle。最小的可复现代码示例，去除不必要的配置项和数据。
bug？新功能？issue模板 不符合文档描述或者你的预期效果，按照提示详细描述。不知道如何实现某种效果，可以在stackoverflow、开源中国、segmentfault。发送邮件道dev@ecahrts.apache.org
