Canvas是一个可以使用脚本（通常为Javascript，其它比如 Java Applets or JavaFX/JavaFX Script）来绘制图形，默认大小为300像素×150像素的HTML元素。

https://blog.csdn.net/weixin_43392489/article/details/108368993

```html
<canvas style="background: purple;"></canvas>

<!-- canvas -->

<canvas id="canvas"></canvas>

<!-- javascript -->

<script>

const canvas = document.getElementById('canvas')

const ctx = canvas.getContext('2d')

ctx.fillStyle = 'purple'

ctx.fillRect(0, 0, 300, 150)

</script>
```


应用案例如下：

动画、游戏
视频（因为生产环境还不成熟，略）
截图
合成图
分享网页截图
滤镜
抠图
旋转、缩放、位移、形变
粒子

```html
<!-- canvas -->

<canvas id="canvas" width="600" height="600"></canvas>

<!-- javascript -->

<script>

const canvas = document.getElementById('canvas')

const ctx = canvas.getContext('2d')

ctx.fillStyle = 'purple'

const step = 1 // 每步的长度

let xPosition = 0 // x坐标

move() // call move

function move() {

    ctx.clearRect(0, 0, 600, 600)

    ctx.fillRect(xPosition, 0, 300, 150)

    xPosition += step

    if (xPosition <= 300) {

        requestAnimationFrame(() => {

            move()

        })

    }

}

</script>
```


游戏
三要素
个人做游戏总结的三要素：

*对象抽象*
*requestAnimationFrame*
*缓动函数*
对象抽象：即对游戏中角色的抽象，面向对象的思维在游戏中很普遍。举个例子，我们来抽象一个《勇者斗恶龙》里的史莱姆：


requestAnimationFrame：之前我们已经接触过这个API了，结合上面动画的例子，我们很容易自然的就能想到，游戏动起来的原理了。

缓动函数：我们知道，匀速运动的动画会显得很不自然，要变得自然就得时而加速，时而减速，那样动画就会变得更灵活，不再生硬。

Demo
有兴趣的同学可以看我以前写的小游戏。项目地址：github.com/CodeLittleP…

截图
API介绍
drawImage(image, sx, sy [, sWidth, sHeight [, dx, dy, dWidth, dHeight]])

绘制图像方法。

*toDataURL(type, encoderOptions)返回一个包含图片展示的 data URI* 。可以使用 type 参数指定其类型，默认为 PNG 格式，图片分辨率为96dpi。 注意：

该方法必须在http服务下；非同源的图片需要CORS支持，图片设置crossOrigin =“”（只要crossOrigin的属性值不是use-credentials，全部都会解析为anonymous，包括空字符串，包括类似'abc'这样的字符）
canvas.style.width 和 canvas.width 的区别
把canvas元素比作画框： canvas.width则是控制画框尺寸的方式。 canvas.style.width则是控制在画框中的画尺寸的方式。


# 算法题：求如下图片各个图形的面积
https://segmentfault.com/a/1190000009738785


平面上有若干个不特定的形状，如下图所示。请写程序求出物体的个数，以及每个不同物体的面积。

image.png

分析
想要知道有多少个图形，想到的就是先获取图片中的每一个像素点然后判获取像素点的背景颜色（RGBA）。想要获得图片中的每一个像素点，那就可以联想到使用h5的canvas。

如下：

菜鸟教程中canvas的getimagedata方法

书写html标签。

 <canvas id="canvas" height="200" width="350">对不你，你的浏览器不支持Canvas</canvas>
js获取canvas对象

```js

let ctxt = canvas.getContext('2d');
js创建image对象

let img = new Image;
img.src = './image.png'; //图片路径
img.onload = function(){}  //加载成功后的执行函数，之后的代码就写在其中
创建存储图片像素点的二维数组

let coordinates = [];
for(let i=0; i<200; i++){
       coordinates[i] = [];
}
获取像素点，也就是使用getimagedata方法。

ctxt.drawImage(img, 0, 0);  // 将图片画入canvas
let data = ctxt.getImageData(0, 0, 350, 200).data;//读取整张图片的像素，将像素存入二维数组

let x=0, y=0;  // 二维数组的行和列， x：列  y：行
for(let i =0, len = data.length; i<len;i+=4){
        let red = data[i],//红色色深
        green = data[i+1],//绿色色深
        blue = data[i+2],//蓝色色深
        alpha = data[i+3];//透明度
        //把每个像素点，以二维数组形式展开
        if(`${red} ${green} ${blue}` === '210 227 199'){
            coordinates[y][x] = 0;
        }else{
            coordinates[y][x] = 1;
        }
        x++;
        if(x >= 350){
            x = 0;
            y++;
        }
}

(function(){
        let ctxt = canvas.getContext('2d');
        let img = new Image;
        let coordinates = [];
        let h = 200,w = 350;
        for(let i=0; i<200; i++){
            coordinates[i] = [];
        }
        img.src = './image.png'; //图片路径
        img.onload = function(){
            ctxt.drawImage(img, 0, 0);
            let data = ctxt.getImageData(0, 0, 350, 200).data;//读取整张图片的像素。
            let x=0,y=0;
            for(let i =0,len = data.length; i<len;i+=4){
                    let red = data[i],//红色色深
                    green = data[i+1],//绿色色深
                    blue = data[i+2],//蓝色色深
                    alpha = data[i+3];//透明度
                    //把每个像素点，以二位数组的形式展开
                    if(`${red} ${green} ${blue}` === '210 227 199'){
                        coordinates[y][x] = 0;
                    }else{
                        coordinates[y][x] = 1;
                    }
                    x++;
                    if(x >= 350){
                        x = 0;
                        y++;
                    }
                }
                console.log(coordinates);
        }
    })();
```


那么我们就只需要知道二维数组中这种连续为1的块有多少个就知道了图片中形状有多少个，并且块中有多少个1，那么这个块的面积就是1的个数。

递归回溯算法


```js
//计算连续的面积和个数
const linkSum = (i,j,num)=>{
        //走过的路就置0
      coordinates[i][j] = 0;
      num++;
      //向上
      if((i+1 < h) && coordinates[i+1][j] == 1){
        num = linkSum(i+1 , j , num);
      }
      //向下
      if((j+1 < w) && coordinates[i][j+1] == 1){
        num = linkSum(i , j+1 , num);
      }
      //向左
      if((i-1 >= 0) && coordinates[i-1][j] == 1){
        num = linkSum(i-1 , j , num);
      }
      //向右
    if((j-1 >= 0) && coordinates[i][j-1] == 1){
        num = linkSum(i , j-1 , num);
    }

    return num;
}
```
```js
// 使用算法，统计并计算出结果。
const getCountAndArea = () =>{
    let sum = [];
    let count = 0;
    for(let i = 0; i < h; i++)  //遍历二维数组
    {
      for(let j = 0; j < w; j++)
      {
       //连续1的个数
       if(coordinates[i][j] == 1)
       {
        let buf = 0;  //连续1的个数
        buf = linkSum(i,j,buf);
        count++;  //形状的总数
        sum.push({
            index: count,   //第几个形状
            area: buf         //形状的面积
        });
       }
      }
    }
    return {
        count,
        sum
    };
}
```

```js
(function(){
        let ctxt = canvas.getContext('2d');
        let img = new Image;
        let coordinates = [];
        let h = 200,
            w = 350;
        for(let i=0; i<200; i++){
            coordinates[i] = [];
        }
        img.src = './image.png'; //图片路径
        img.onload = function(){
            ctxt.drawImage(img, 0, 0);
            let data = ctxt.getImageData(0, 0, 350, 200).data;//读取整张图片的像素。
            let x=0,y=0;
            for(let i =0,len = data.length; i<len;i+=4){
                    let red = data[i],//红色色深
                    green = data[i+1],//绿色色深
                    blue = data[i+2],//蓝色色深
                    alpha = data[i+3];//透明度
                    //把每个像素点，以二位数组的形式展开
                    if(`${red} ${green} ${blue}` === '210 227 199'){
                        coordinates[y][x] = 0;
                    }else{
                        coordinates[y][x] = 1;
                    }
                    x++;
                    if(x >= 350){
                        x = 0;
                        y++;
                    }
                }
                // console.log(coordinates);
                let rst = getCountAndArea();
                // console.log(rst);
                console.log('个数： ' + rst.count);
                for(let i=0; i<rst.sum.length; i++){
                    console.log(`第${i+1}个面积为: ${rst.sum[i].area} px`);
                }
        }

        const getCountAndArea = () =>{
            let sum = [];
            let count = 0;
            for(let i = 0; i < h; i++)
            {
              for(let j = 0; j < w; j++)
              {
               //连续1的个数
               if(coordinates[i][j] == 1)
               {
                let buf = 0;
                buf = linkSum(i,j,buf);
                count++;
                sum.push({
                    index: count,
                    area: buf
                });
               }
              }
            }
            return {
                count,
                sum
            };
        }

        //计算连续的面积和个数
        const linkSum = (i,j,num)=>{
            //走过的路就置0
          coordinates[i][j] = 0;
          num++;
          //向上
          if((i+1 < h) && coordinates[i+1][j] == 1){
            num = linkSum(i+1 , j , num);
          }
          //向下
          if((j+1 < w) && coordinates[i][j+1] == 1){
            num = linkSum(i , j+1 , num);
          }
          //向左
          if((i-1 >= 0) && coordinates[i-1][j] == 1){
            num = linkSum(i-1 , j , num);
          }
          //向右
        if((j-1 >= 0) && coordinates[i][j-1] == 1){
            num = linkSum(i , j-1 , num);
        }

        return num;
        }
    })();

```

https://juejin.cn/post/6844903680945192974

# getImageData
https://blog.csdn.net/qq_40129176/article/details/103600918
像素点数据
返回值： 返回的是一个ImageData对象，该对象包含了三个只读属性：

属性	含义
ImageData.width	ImageData的宽度，用像素表示
ImageData.height	ImageData的高度，用像素表示
ImageData.data	类型为Uint8ClampedArray的一维数组，每四个数组元素代表了一个像素点的RGBA信息，每个元素数值介于0~255
ImageData.data的结构：
假设现在取到了画布上的两个像素点，分别是不透明度为100%的纯黑色和纯白色，那么平常在写css的时候可以这么表示：rgba(0,0,0,1)，rgba(255,255,255,1)

我们都知道，前面的三个参数代表了RGB颜色，这个与ImageData.data表示方式相同；最后一个参数1代表了透明度A，范围为(0, 1)。但是ImageData.data的元素数值范围都在(0, 255)。因此这里需要按照0 => 0，1 => 255的方式对应下。

因此，如果用getImageData()获取这两个像素点的信息，得到的ImageData.data如下：

[0,0,0,255,255,255,255,255]
1
注意：getImageData按照从左到右，从上到下的顺序去存储像素点信息的

示例：

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
...

var imgData=ctx.getImageData(0,0,width,height);
————————————————
版权声明：本文为CSDN博主「ck_1」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_40129176/article/details/103600918


1、先在 canvas 上画出图片，
2、通过 getImageData()  方法，获取整个 canvas 上的像素信息，

3、点击按钮时，遍历获取到的像素信息的每个像素的 红色值、绿色值 和 蓝色值，相加求出平均值，再把平均值赋值给红色、绿色和蓝色，这么做是为了求出每个像素的灰度，

4、然后把改变后的像素信息，通过 putImageData() 方法重新添加到 canvas中，就实现了图片灰度的效果。


作者：FEWY
链接：https://juejin.cn/post/6844903680945192974
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

通过JavaScript绘制2D图形，是HTML5中新增的元素，
# 特点

- 绘制的是位图，图像放大后会失真
- 不支持事件处理器
- 能够以.png或.jpg格式保存图像
- 适合游戏应用

# Image-Annotator

```js
// src/components/ImageAnnotator.js
import React, { useRef, useState, useEffect } from 'react';

const ImageAnnotator = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [annotations, setAnnotations] = useState([]);
  const [currentAnnotation, setCurrentAnnotation] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const drawAnnotations = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      annotations.forEach(annotation => {
        ctx.beginPath();
        ctx.rect(annotation.x, annotation.y, annotation.width, annotation.height);
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    };

    drawAnnotations();
  }, [annotations]);

  const handleMouseDown = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCurrentAnnotation({ x, y, width: 0, height: 0 });
    setIsDrawing(true);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCurrentAnnotation(prev => ({
      ...prev,
      width: x - prev.x,
      height: y - prev.y
    }));
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    setAnnotations(prev => [...prev, currentAnnotation]);
  };

  return (
    <div>
      <img src="https://via.placeholder.com/640x360" alt="Annotatable" style={{ position: 'absolute' }} />
      <canvas
        ref={canvasRef}
        width={640}
        height={360}
        style={{ position: 'absolute', top: 0, left: 0 }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
    </div>
  );
};

export default ImageAnnotator;

```

<https://annotorious.github.io/api-docs/annotorious/> <https://annotorious.github.io/getting-started/web-annotation/>

选用annotorious的话，没有线段和箭头标记类型，只有矩形和多边形，也没有圆点标记类型，所以不太合适；多条线段没有正确回显；

# xiaomarobot-Annotation

currentSelectShape;polygonArrRef.current是一维数组，在Annotation组件内里面，目前不方便维护成二维数组的形式，还不具备绘制多个多边形的功能；
