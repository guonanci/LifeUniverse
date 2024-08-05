web_worker.md
让前端拥有后端的计算能力
在HTML5的新规范中，实现了 Web Worker 来引入 js 的 多线程 技术, 可以让我们在页面主运行的js线程中，加载运行另外单独的一个或者多个 js线程

https://juejin.cn/post/7146973901166215176
Web Worker专门处理复杂计算的，从此让前端拥有后端的计算能力

页面大量计算，造成假死
浏览器有GUI渲染线程与JS引擎线程，这两个线程是互斥的关系
当js有大量计算时，会造成UI 阻塞，出现界面卡顿、掉帧等情况，严重时会出现页面卡死的情况，俗称假死
Web Worker使用案例
计算十万条数据，计算时长从35s变成6s，并且全程无卡顿
一文彻底了解Web Worker，十万、百万条数据都是弟弟
https://juejin.cn/post/7137728629986820126#heading-3
postMessage message事件 e.data new Worker() worker.addEventListener('message',e=>{}) worker.terminate performance.now()
worker-loader!./worker

开启多线程，并行计算

回到要解决的问题，执行多种运算时，给每种运算开启单独的线程，线程计算完成后要及时关闭

```html
<template>
    <div>
        <button @click="makeWorker">开始线程</button>
        <!--在计算时 往input输入值时 没有发生卡顿-->
        <p><input type="text"></p>
    </div>
</template>

<script>
    import Worker from "worker-loader!./worker";

    export default {
        data() {
          // 模拟数据
          let arr = new Array(100000).fill(1).map(() => Math.random()* 10000);
          let weightedList = new Array(100000).fill(1).map(() => Math.random()* 10000);
          let calcList = [
              {type: 'sum', name: '总和'},
              {type: 'average', name: '算术平均'},
              {type: 'weightedAverage', name: '加权平均'},
              {type: 'max', name: '最大'},
              {type: 'middleNum', name: '中位数'},
              {type: 'min', name: '最小'},
              {type: 'variance', name: '样本方差'},
              {type: 'popVariance', name: '总体方差'},
              {type: 'stdDeviation', name: '样本标准差'},
              {type: 'popStandardDeviation', name: '总体标准差'}
          ]
          return {
              workerList: [], // 用来存储所有的线程
              calcList, // 计算类型
              arr, // 数据
              weightedList // 加权因子
          }
        },
        methods: {
            makeWorker() {
                this.calcList.forEach(item => {
                    let workerName = `worker${this.workerList.length}`;
                    let worker = new Worker();
                    let start = performance.now();
                    worker.postMessage({arr: this.arr, type: item.type, weightedList: this.weightedList});
                    worker.addEventListener("message", (e) => {
                        worker.terminate();

                        let tastName = '';
                        this.calcList.forEach(item => {
                            if(item.type === e.data.type) {
                                item.value = e.data.value;
                                tastName = item.name;
                            }
                        })

                        let end = performance.now();
                        let duration = end - start;
                        console.log(`当前任务: ${tastName}, 计算用时: ${duration} 毫秒`);
                    });
                    this.workerList.push({ [workerName]: worker });
                })
            },
            clearWorker() {
                if (this.workerList.length > 0) {
                    this.workerList.forEach((item, key) => {
                        item[`worker${key}`].terminate && item[`worker${key}`].terminate(); // 终止所有线程
                    });
                }
            }
        },
        // 页面关闭，如果还没有计算完成，要销毁对应线程
        beforeDestroy() {
            this.clearWorker();
        },
    }
</script>
```
```js
worker.js
import { create, all } from 'mathjs'
const config = {
  number: 'BigNumber',
  precision: 20 // 精度
}
const math = create(all, config);

//加
const numberAdd = (arg1,arg2) => {
  return math.number(math.add(math.bignumber(arg1), math.bignumber(arg2)));
}
//减
const numberSub = (arg1,arg2) => {
  return math.number(math.subtract(math.bignumber(arg1), math.bignumber(arg2)));
}
//乘
const numberMultiply = (arg1, arg2) => {
  return math.number(math.multiply(math.bignumber(arg1), math.bignumber(arg2)));
}
//除
const numberDivide = (arg1, arg2) => {
  return math.number(math.divide(math.bignumber(arg1), math.bignumber(arg2)));
}

// 数组总体标准差公式
const popVariance = (arr) => {
  return Math.sqrt(popStandardDeviation(arr))
}

// 数组总体方差公式
const popStandardDeviation = (arr) => {
  let s,
    ave,
    sum = 0,
    sums= 0,
    len = arr.length;
  for (let i = 0; i < len; i++) {
    sum = numberAdd(Number(arr[i]), sum);
  }
  ave = numberDivide(sum, len);
  for(let i = 0; i < len; i++) {
    sums = numberAdd(sums, numberMultiply(numberSub(Number(arr[i]), ave), numberSub(Number(arr[i]), ave)))
  }
  s = numberDivide(sums,len)
  return s;
}

// 数组加权公式
const weightedAverage = (arr1, arr2) => { // arr1: 计算列，arr2: 选择的权重列
  let s,
    sum = 0, // 分子的值
    sums= 0, // 分母的值
    len = arr1.length;
  for (let i = 0; i < len; i++) {
    sum = numberAdd(numberMultiply(Number(arr1[i]), Number(arr2[i])), sum);
    sums = numberAdd(Number(arr2[i]), sums);
  }
  s = numberDivide(sum,sums)
  return s;
}

// 数组样本方差公式
const variance = (arr) => {
  let s,
    ave,
    sum = 0,
    sums= 0,
    len = arr.length;
  for (let i = 0; i < len; i++) {
    sum = numberAdd(Number(arr[i]), sum);
  }
  ave = numberDivide(sum, len);
  for(let i = 0; i < len; i++) {
    sums = numberAdd(sums, numberMultiply(numberSub(Number(arr[i]), ave), numberSub(Number(arr[i]), ave)))
  }
  s = numberDivide(sums,(len-1))
  return s;
}

// 数组中位数
const middleNum = (arr) => {
  arr.sort((a,b) => a - b)
  if(arr.length%2 === 0){ //判断数字个数是奇数还是偶数
    return numberDivide(numberAdd(arr[arr.length/2-1], arr[arr.length/2]),2);//偶数个取中间两个数的平均数
  }else{
    return arr[(arr.length+1)/2-1];//奇数个取最中间那个数
  }
}

// 数组求和
const sum = (arr) => {
  let sum = 0, len = arr.length;
  for (let i = 0; i < len; i++) {
    sum = numberAdd(Number(arr[i]), sum);
  }
  return sum;
}

// 数组平均值
const average = (arr) => {
  return numberDivide(sum(arr), arr.length)
}

// 数组最大值
const max = (arr) => {
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if(max < arr[i]) {
      max = arr[i]
    }
  }
  return max
}

// 数组最小值
const min = (arr) => {
  let min = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if(min > arr[i]) {
      min = arr[i]
    }
  }
  return min
}

// 数组有效数据长度
const count = (arr) => {
  let remove = ['', ' ', null , undefined, '-']; // 排除无效的数据
  return arr.filter(item => !remove.includes(item)).length
}

// 数组样本标准差公式
const stdDeviation = (arr) => {
  return Math.sqrt(variance(arr))
}

// 数字三位加逗号，保留两位小数
const formatNumber = (num, pointNum = 2) => {
  if ((!num && num !== 0) || num == '-') return '--'
  let arr = (typeof num == 'string' ? parseFloat(num) : num).toFixed(pointNum).split('.')
  let intNum = arr[0].replace(/\d{1,3}(?=(\d{3})+(.\d*)?$)/g,'$&,')
  return arr[1] === undefined ? intNum : `${intNum}.${arr[1]}`
}

onmessage = function (e) {

  let {arr, type, weightedList} = e.data
  let value = '';
  switch (type) {
    case 'sum':
      value = formatNumber(sum(arr));
      break
    case 'average':
      value = formatNumber(average(arr));
      break
    case 'weightedAverage':
      value = formatNumber(weightedAverage(arr, weightedList));
      break
    case 'max':
      value = formatNumber(max(arr));
      break
    case 'middleNum':
      value = formatNumber(middleNum(arr));
      break
    case 'min':
      value = formatNumber(min(arr));
      break
    case 'variance':
      value = formatNumber(variance(arr));
      break
    case 'popVariance':
      value = formatNumber(popVariance(arr));
      break
    case 'stdDeviation':
      value = formatNumber(stdDeviation(arr));
      break
    case 'popStandardDeviation':
      value = formatNumber(popStandardDeviation(arr));
      break
    }

  // 发送数据事件
  postMessage({type, value});
}
```

# web worker 提高Canvas运行速度
web worker除了单纯进行计算外，还可以结合离屏canvas进行绘图，提升绘图的渲染性能和使用体验

```html
<template>
    <div>
        <button @click="makeWorker">开始绘图</button>
        <canvas id="myCanvas" width="300" height="150"></canvas>
    </div>
</template>

<script>
    import Worker from "worker-loader!./worker";
    export default {
        methods: {
            makeWorker() {
                let worker = new Worker();
                let htmlCanvas = document.getElementById("myCanvas");
                // 使用canvas的transferControlToOffscreen函数获取一个OffscreenCanvas对象
                let offscreen = htmlCanvas.transferControlToOffscreen();
                // 注意：第二个参数不能省略
                worker.postMessage({canvas: offscreen}, [offscreen]);
            }
        }
    }
</script>
```
```js
worker.js
onmessage = function (e) {
  // 使用OffscreenCanvas（离屏Canvas）
  let canvas = e.data.canvas;
  // 获取绘图上下文
  let ctx = canvas.getContext('2d');
  // 绘制一个圆弧
  ctx.beginPath() // 开启路径
  ctx.arc(150, 75, 50, 0, Math.PI*2);
  ctx.fillStyle="#1989fa";//设置填充颜色
  ctx.fill();//开始填充
  ctx.stroke();
}
离屏canvas的优势

1、对于复杂的canvas绘图，可以避免阻塞主线程

2、由于这种解耦，OffscreenCanvas的渲染与DOM完全分离了开来，并且比普通Canvas速度提升了一些


```
# Web Worker的限制
1、在 Worker 线程的运行环境中没有 window 全局对象，也无法访问 DOM 对象
2、Worker中只能获取到部分浏览器提供的 API，如定时器、navigator、location、XMLHttpRequest等
3、由于可以获取XMLHttpRequest 对象，可以在 Worker 线程中执行ajax请求
4、每个线程运行在完全独立的环境中，需要通过postMessage、 message事件机制来实现的线程之间的通信

# 计算时长 超过多长时间 适合用Web Worker

原则上，运算时间超过50ms会造成页面卡顿，属于Long task，这种情况就可以考虑使用Web Worker
但还要先考虑通信时长的问题
假如一个运算执行时长为100ms, 但是通信时长为300ms, 用了Web Worker可能会更慢

*通信时长*
新建一个web worker时, 浏览器*会加载对应的worker.js资源*
下图中的*Time*是这个 js 资源的加载时长

最终标准：
*计算的运算时长 - 通信时长 > 50ms*，推荐使用Web Worker

遇到大数据，第一反应: 为什么不让后端去计算呢？
这里比较特殊，表格4000行，25列
1）用户可以对表格进行灵活操作，比如删除任何行或列，选择或剔除任意行
2）用户可以灵活选择运算的类型，计算一个或多个
即便是让后端计算，需要把大量数据传给后端，计算好再返回，这个时间也不短，还可能出现用户频繁操作，接口数据被覆盖等情况

Web Worker为前端带来了后端的计算能力，扩大了前端的业务边界

可以实现主线程与复杂计运算线程的分离，从而减轻了因大量计算而造成UI阻塞的情况

并且更大程度地利用了终端硬件的性能


web worker 优化长任务。由于浏览器GUI渲染线程与js引擎线程关系互斥。当页面中有很多长任务时，会造成页面UI阻塞，出现界面卡顿、掉帧等等情况。
查看页面长任务：打开控制台，选择performance工具，点击start按钮，展开Main选项，会发现很多奇妙只红色三角，这些就属于执行时间超过50ms的长任务
```js
// 如果直接把下面这段代码直接丢到主线程中，计算过程中页面一直处于卡死状态，无法操作
let sum = 0;
for (let i = 0; i < 200000; i++) {
    for (let i = 0; i < 10000; i++) {
      sum += Math.random()
    }
  }
// 使用 Web Worker 执行上述代码时，计算过程中页面正常可操作、无卡顿

// worker.js
onmessage = function (e) {
  // onmessage获取传入的初始值
  let sum = e.data;
  for (let i = 0; i < 200000; i++) {
    for (let i = 0; i < 10000; i++) {
      sum += Math.random()
    }
  }
  // 将计算的结果传递出去
  postMessage(sum);
}
```
