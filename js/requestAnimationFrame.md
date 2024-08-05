requestAnimationFrame

该方法告诉浏览器您希望执行动画并请求浏览器在下一次重绘之前调用指定的函数来更新动画。 该方法使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用。

requestAnimationFrame 优点

1.避免掉帧 完全依赖浏览器的绘制频率，从而避免过度绘制，影响电池寿命。 2.提升性能 当Tab或隐藏的iframe里，暂停调用。



requestAnimationFrame.md
实现动画效果：setTimeout，css3的transition和animation，html5的canvas。除此之外，还提供一个专门用于请求动画的api，请求动画帧requestAnimationFrame
几个概念：
1. 页面可见
当页面被最小化或者被切换成后台标签页时，页面不可见，浏览器会触发一个visibilityvhange事件，并设置document.hidden属性为true；切换到显示状态时，页面可见，也同样触发一个visibilitychange事件，设置document。hidden属性为false
2. 动画帧请求回调函数列表
每个Document都有一个动画帧请求回调函数列表，该列表可以看成是由《handlerId, callback>元组组成的集合。其中，handlerId是一个整数，唯一地标识了元组在列表中的位置；callback时回调函数
3. 屏幕刷新频率
人眼的视觉停留效应

handlerId=requestAnimationFrame(callback) 传入一个cb，动画函数，handlerId唯一标识了该回调函数

浏览器执行过程：

1. 首先判断document.hidden是否为true
2. 浏览器清空上一轮的动画函数
3. 这个方法返回的handlerId值会和动画函数callback，以<handlerId, callback>进入到动画帧请求回调函数列
4. 浏览器会遍历动画帧请求回调函数列表，根据handlerId值大小，依次去执行相应的动画函数

cancelAnimationFrame

setTimeout与requestAnimationFrame

setTimeout其实就是通过设置一个间隔时间来不断地改变图像位置，从而达到动画效果。低端机上出现卡顿，抖动的现象。原因：
1. setTimeout执行时间不确定，setTimeout任务被放进了异步队列中，只有当主线程上的任务执行完以后，才会去检查该队列里的任务是否需要开始执行，因此setTimeout的实际执行时间一般要比其设定的时间晚一些
2. 刷新频率受屏幕分辨率和屏幕尺寸的影响，因此不同设备的屏幕刷频频率可能不同，而setTimeout只能设置一个固定的时间间隔，这个时间不一定和屏幕的刷新时间相同
以上两种情况都会导致setTimeout的执行步调和屏幕的刷新步调不一致，从而引起丢帧
setTimeout的执行只是在内存中改变图像属性，这个变化必须要等到屏幕下次刷新时才会被更新到屏幕上。

如果两者的步调不一致，就可能会导致中间某一帧的操作被跨越过去，而直接更新下一帧的图像。假设屏幕每隔16.7ms刷新一次，而setTimeout每隔10ms设置图像向左移动1px， 就会出现如下绘制过程：第0ms:  屏幕未刷新，等待中，setTimeout也未执行，等待中；第10ms:  屏幕未刷新，等待中，setTimeout开始执行并设置图像属性left=1px；第16.7ms:  屏幕开始刷新，屏幕上的图像向左移动了1px， setTimeout 未执行，继续等待中；第20ms:  屏幕未刷新，等待中，setTimeout开始执行并设置left=2px;第30ms:  屏幕未刷新，等待中，setTimeout开始执行并设置left=3px;第33.4ms: 屏幕开始刷新，屏幕上的图像向左移动了3px， setTimeout未执行，继续等待中；

与setTiemout相比，requestAnimationFrame最大的优势是由系统来决定回调函数的执行时机。具体一点讲，如果屏幕刷新率是60Hz，那么回调函数就每16.7ms被执行一次，如果刷新率是75Hz，1000/75=13.3 requestanimationFrame的步伐跟着系统的刷新步伐走。它能保证回调函数在屏幕每一次的刷新间隔中只被执行一次，这样就不会引起丢帧现象，也不会导致动画出现卡顿的问题。

``````js
var progress = 0
// callback
function render() {
  progress += 1 // 修改图像位置
  if (progress < 100) { // 在动画没有结束前，递归渲染
    window.requestAnimationFrame(render)

  }
}
// 第一帧渲染
window.requestAnimationFrame(render)
``````

cpu节能：使用setTimeout实现的动画，当页面被隐藏或者最小化时，setTimeout仍然在后台执行动画任务，由于此时页面处于不可见不可用状态，刷新动画没有意义，完全是浪费cpu资源。而requestanimationFrame则完全不同，页面处于未激活的状态时，该页面的屏幕刷新任务也会被系统暂停，因此，跟着系统步伐走的requestAnimationFrame也会停止渲染，当页面被激活时，动画就从上次停留的地方继续执行，有效节省了cpu开销。
函数节流：在高频率事件resize，scroll中，为了防止在一个刷新间隔内发生多次函数执行，使用rAF可保证每个刷新间隔内，函数只被执行一次，这样能保证流畅性，也能更好的节省函数执行开销。一个刷新间隔内函数执行多次是没有意义的，因为显示器每16.7ms刷新一次，多次绘制并不会在屏幕上体现出来。

优雅降级：
由于requestAnimationFrame有兼容性问题，需要带不同的浏览器前缀，通过优雅降级的方式对requestAnimationFrame进行封装，优先使用高级特性，然后再根据不同浏览器的情况进行回退，直至只能使用setTimeout的情况，polyfill


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>使用requestAnimationFrame制作进度条</title>
    <style>
      .title {
        text-align: center;
      }
      .container {
        width: 400px;
        margin: 30px auto;
      }
      img {
        width: 25px;
        height: 25px;
        position: absolute;
        bottom: 10px;
        left: -10px;
      }
      .wrap {
        height: 6px;
        border-radius: 5px;
        padding: 2px;
        position: relative;
        background-color: #31493c;
      }
      .box {
        height: 6px;
        background-color: #b3efb2;
        border-radius: 3px;
      }
      .row {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .btn {
        cursor: pointer;
        margin: 0 10px;
      }
    </style>
    <style>
      .box1 {
        height: 6px;
        background-color: #b3efb2;
        border-radius: 3px;
      }
      .row1 {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .btn1 {
        cursor: pointer;
        margin: 0 10px;
      }
    </style>
  </head>
  <body>
    <p class="title">使用requestAnimationFrame制作进度条</p>
    <div class="container">
      <div class="wrap">
        <img class="point1" id="point1" src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/22dcb4c654674ad6b50541ac07103b34~tplv-k3u1fbpfcp-watermark.image" alt="" />
        <div class="box1" id="box1"></div>
      </div>
      <div class="row1">
        <div class="txt1"><span id="txt1">0</span>%</div>
        <div class="btn1" id="btn1">暂停</div>
      </div>
    </div>

    <p class="title">使用setInterval制作进度条</p>
    <div class="container">
      <div class="wrap">
        <img class="point" id="point" src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/22dcb4c654674ad6b50541ac07103b34~tplv-k3u1fbpfcp-watermark.image" alt="" />
        <div class="box" id="box"></div>
      </div>
      <div class="row">
        <div class="txt"><span id="txt">0</span>%</div>
        <div class="btn" id="btn">暂停</div>
      </div>
    </div>
    <script>
      let box = document.getElementById('box');
      let btn = document.getElementById('btn');
      let point = document.getElementById('point');
      let handel = 0;
      let $width = 0;
      let left = -10;
      function setWidth(params) {
        handel = setInterval(() => {
          box.style.width = $width + 'px';
          point.style.left = $width + left + 'px';
          if ($width <= 396) {
            $width += 2;
          } else {
            btn.style.display = 'none';
            window.clearInterval(handel);
          }
          document.getElementById('txt').innerText = Math.ceil(($width / 400) * 100);
        }, 16);
      }
      setWidth();
      btn.addEventListener(
        'click',
        function () {
          if (handel) {
            window.clearInterval(handel);
            handel = 0;
            btn.innerText = '播放';
          } else {
            setWidth();
            btn.innerText = '暂停';
          }
        },
        false
      );
    </script>
    <script>
      let box1 = document.getElementById('box1');
      let btn1 = document.getElementById('btn1');
      let point1 = document.getElementById('point1');
      let handel1 = 0;
      let $width1 = 0;
      let left1 = -10;
      function setWidth1(params) {
        box1.style.width = $width1 + 'px';
        point1.style.left = $width1 + left1 + 'px';
        handel1 = window.requestAnimationFrame(setWidth1);
        $width1 <= 396 ? ($width1 += 2) : (btn1.style.display = 'none');
        document.getElementById('txt1').innerText = Math.ceil(($width1 / 400) * 100);
      }
      setWidth1();
      btn1.addEventListener(
        'click',
        function () {
          if (handel1) {
            window.cancelAnimationFrame(handel1);
            handel1 = 0;
            btn1.innerText = '播放';
          } else {
            setWidth1();
            btn1.innerText = '暂停';
          }
        },
        false
      );
    </script>
  </body>
</html>

```

setTimeout/setInterval属于js引擎，requestAnimationFrame属于GUI引擎。JS引擎与GUI引擎互斥，*GUI引擎渲染时会阻塞JS引擎的计算*。
#　时间是否准确
requestAnimationFrame刷新频率是固定且准确的，但是setTimeout、Interval是宏任务，根据事件轮询极致，其他任务会阻塞或延迟js任务的执行，会出现定时器不准的情况
3）性能层面

当页面被隐藏或最小化时，setTimeout/setInterval 定时器仍会在后台执行动画任务，而使用 requestAnimationFrame 当页面处于未激活的状态下，屏幕刷新任务会被系统暂停

