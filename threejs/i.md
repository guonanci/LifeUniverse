# 3DMap

胜利能源智能巡检系统-国家能源集团；

# 智能巡检数字孪生平台技术要求

## 智能巡检三维可视化要求

主要包括输煤廊道智能巡检机器人系统，相关三维模型制作、以及模型数据叠加相关的要求；一方面实现输煤廊道的整体三维模型展示；另一方面实现与机器人、智能巡检等系统的集成，在模型中进行数据叠加展示。

投标人负责构建一条输煤廊道、及内部设备的精细化模型；
依据招标人提供的图纸构建设备三维精细化模型，含廊道内外部结构、内部设备、钢架、托辊等；
实现廊道表内所有设备、核心部件的建模，包括但不限于皮带机、托辊、钢架、摄像头等；
对输煤巡检机器人及相关设备、系统进行建模，包括但不限于机器人本体、轨道、充电坞等；
实现在网页客户端进行三维输煤廊道的选择、漫游、放大、缩小、查看、点选、平移、旋转、居中、隐藏、测量两点距离、测量折线距离、测量角度等功能。

# 安装

public/
public/ 文件夹有时也被称为 "静态（static）"文件夹，因为其中包含的文件会原封不动地推送到网站上。纹理（textures）、音频和 3D 模型通常会放在这里。
现在我们已经建立了基本的项目结构，便需要一种方法在本地运行并通过浏览器访问它。我们可以使用 npm 和构建工具来完成安装和本地开发，也可以从 CDN 导入 three.js。下面将对这两种方案进行说明。

## 附加组件（Addons）

开箱即用的 three.js 包含 3D 引擎的基本要素。而其他 three.js 组件，如控件（controls）、加载器（loaders）和后期处理效果（post-processing effects）则属于 addons/ 目录的一部分。附加组件无需单独安装，但需要单独导入。

下面的示例展示了如何导入 three.js 的 OrbitControls 和 GLTFLoader 附加组件。必要时每个附加组件的文档或示例中也会提及这一点。

```js
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();

```

一些优秀的第三方项目也可用于 three.js。这些项目需要单独安装，请参见 库和插件。

# 创建一个场景Creating a scene

这一部分将对 three.js 做一个简要介绍；我们将开始搭建一个场景，其中包含一个正在旋转的立方体。页面下方有一个已经完成的例子，当你遇到麻烦，或需要帮助时，可以看一看。

## 开始之前

如果您还没有安装，请先阅读安装指南。我们假设你已经设置了相同的项目结构（包括 index.html 和 main.js），安装了 three.js，运行了构建工具，或使用了带有 CDN 和导入映射的本地服务器。

## 创建一个场景

*为了真正能让你的场景借助 three.js 来进行显示，我们需要以下几个对象：场景（scene）、相机（camera）、和渲染器（renderer），这样我们就能透过摄像机渲染出场景*。

main.js —

```js
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

```

我们花一点点时间来解释一下这里发生了什么。我们现在建立了*场景、相机、和渲染器*。

three.js 里有几种不同的相机，在这里，我们使用的是 *PerspectiveCamera（透视摄像机）*。

第一个参数是*视野角度（FOV）*。视野角度就是无论在什么时候，你所能在显示器上看到的场景的范围，它的单位是角度(与弧度区分开)。

第二个参数是*长宽比（aspect ratio）*。也就是你用一个物体的宽除以它的高的值。比如说，当你在一个宽屏电视上播放老电影时，可以看到图像仿佛是被压扁的。

接下来的两个参数是*近截面（near）和远截面（far）*。 当物体某些部分比摄像机的远截面远或者比近截面近的时候，这些部分将不被渲染到场景中。或许现在你不用担心这个值的影响，但未来为了获得更好的渲染性能，你将可以在应用程序里去设置它。

接下来是渲染器，这是施展魔法的地方。除了我们在这里用到的 WebGLRenderer 渲染器之外，Three.js 同时提供了其他几种渲染器，当用户所使用的浏览器过于老旧，或者由于其他原因不支持 WebGL 时，可使用这几种渲染器降级。

除了创建渲染器实例外，我们还需要在应用程序里设置渲染器尺寸。比如说，我们可使用所需要的渲染区域的宽高，来让渲染器渲染出的场景填充满应用程序，可将渲染器宽高设置为浏览器窗口宽高。*对于性能比较敏感的应用程序来说，可使用 setSize 传入一个较小值*，例如 window.innerWidth/2 和 window.innerHeight/2，这将使得应用程序在渲染时，以一半的长宽尺寸渲染场景。

如果希望保持应用程序的尺寸，但以较低分辨率来渲染，那么在调用 setSize 时，将第三个参数 updateStyle设为 false。例如，假设你的 <canvas> 标签现在已具有 100% 的宽和高，调用 setSize(window.innerWidth/2, window.innerHeight/2, false) 将使得你的应用程序以四分之一的大小来进行渲染。

最后一步很重要，我们将 renderer（渲染器）的dom元素（renderer.domElement）添加到我们的 HTML 文档中。这就是渲染器用来显示场景给我们看的 <canvas> 元素。

接下来，我们添加立方体。

```js
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
```

*要创建一个立方体，我们需要一个 BoxGeometry（立方体）对象. 这个对象包含了一个立方体中所有的顶点（vertices）和面（faces）*。未来我们将在这方面进行更多探索。

接下来，*对于这个立方体，我们需要给它一个材质，来让它有颜色。Three.js 自带了几种材质，在这里我们使用的是 MeshBasicMaterial*。所有材质都存有应用于它们的属性的对象。在这为简单起见，只设置一个color属性，值为 0x00ff00绿色。这里所做的事，和在 CSS 或 Photoshop 中使用十六进制（hex colors）颜色格式设置颜色的方式一致。

第三步，我们需要一个 *Mesh（网格）。 网格包含一个几何体以及作用在此几何体上的材质，可直接将网格对象放入场景中，并让它在场景中自由移动*。

默认情况下，调用 scene.add() 时，物体将会被添加到 (0,0,0) 坐标。但将使得摄像机和立方体彼此在一起。为防止这种情况发生，我们只需将摄像机稍微向外移动些即可。

## 渲染场景

现在，如果将之前写好的代码复制到HTML文件中，你不会在页面中看到任何东西。这是因为我们还没有对它进行真正的渲染。为此，我们需要使用一个被叫做“渲染循环”（render loop）或“动画循环”（animate loop）的东西。

```js
function animate() {
 requestAnimationFrame( animate );
 renderer.render( scene, camera );
}
animate();

```

在这里，我们创建了一个，使渲染器能够在每次屏幕刷新时，绘制场景的循环（在大多数屏幕上，刷新率一般是60次/秒）。如果你是一个浏览器游戏开发的新手，你或许会说“为何我们不直接用 setInterval 来实现刷新的功能呢？”当然啦，我们的确可以用 setInterval，但requestAnimationFrame 有很多优点。最重要的一点或许就是当用户切换到其它标签页时，它会暂停，因此不会浪费用户宝贵的处理器资源，也不会损耗电池使用寿命。

## 使立方体动起来

在开始之前，如果你已经将上面代码写入到了所创建的文件中，就可以看到一个绿色方块。让我们来做一些更有趣的事 —— 让它旋转起来。

将下列代码添加到 animate() 函数中 renderer.render 调用的上方：

```js
cube.rotation.x += 0.01;
cube.rotation.y += 0.01;
```

这段代码每帧都会执行（正常情况下是60次/秒），这就让立方体有了一个看起来很不错的旋转动画。基本上来说，当应用程序运行时，如果你想要移动或改变任何场景中的东西，都必须要经过这个动画循环。当然，你可以在这个动画循环里调用别的函数，这样你就不会写出有上百行代码的 animate 函数。

结果
祝贺你！你现在已经成功完成了你的第一个 three.js 应用程序。虽然它很简单，但现在你已经有了一个入门的起点。

下面是完整的代码，可在 live example 运行、编辑；运行或者修改代码有助于你更好的理解它是如何工作的。

index.html —

```html
<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8">
  <title>My first three.js app</title>
  <style>
   body { margin: 0; }
  </style>
 </head>
 <body>
  <script type="module" src="/main.js"></script>
 </body>
</html>
```

main.js —

```js

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
 requestAnimationFrame( animate );

 cube.rotation.x += 0.01;
 cube.rotation.y += 0.01;

 renderer.render( scene, camera );
}

animate();
```

# WebGL兼容性检查（WebGL compatibility check）

虽然这个问题现在已经变得越来不明显，但不可否定的是，某些设备以及浏览器直到现在仍然不支持WebGL 2。
以下的方法可以帮助你检测当前用户所使用的环境是否支持WebGL 2，如果不支持，将会向用户提示一条信息。

导入 WebGL 兼容检测模块，并在尝试渲染任何内容之前运行以下程序。

```js

import WebGL from 'three/addons/capabilities/WebGL.js';

if ( WebGL.isWebGL2Available() ) {

 // Initiate function or other initializations here
 animate();

} else {

 const warning = WebGL.getWebGL2ErrorMessage();
 document.getElementById( 'container' ).appendChild( warning );

}
```

# 画线（Drawing lines）

假设你将要画一个圆或一条线，而非一个线框模型，或者说不是一个Mesh网格。 第一步我们要做的，是设置好renderer（渲染器）、scene（场景）、和camera（相机）。（如果对这里所提到的东西，还不了解，请阅读本手册第一章“创建一个场景 - Creating a scene”）

这是我们将要用到的代码：

```js
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 ); // 用来设置相机对象看向的位置，比如在Threejs三维场景中通过相机对象 .lookAt() 方法指向场景中的一个球体，球体渲染出来后会显示在Canvas画布的正中间， .lookAt() 方法就是旋转相机对象以面向世界空间中的某个点，本质上改变的是相机对象的视图矩阵，具体点说是视图矩阵的旋转部分，如果你有兴趣了解Threejs是如何封装的.lookAt()方法可以参考src目录下Object.js文件，如果你想了解视图矩阵的知识可以学习图形学内容。

const scene = new THREE.Scene();

```

接下来我们要做的事情是定义一个材质。对线条来说，我们能使用的材质只有LineBasicMaterial 或 LineDashedMaterial。

```js
//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

```

定义好材质后，我们需要一个带有一些顶点的geometry几何体。

```js
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) ); // 该类表示的是一个三维向量（3D vector）。 一个三维向量表示的是一个有顺序的、三个为一组的数字组合（标记为x、y和z）， 可被用来表示很多事物，例如： 一个位于三维空间中的点。
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );

```

注意，线画在每一对连续的顶点之间，而非在第一个顶点和最后一个顶点之间绘制线条，线条并未闭合。

既然我们已经有了能画两条线的点和一个材质，那现在就可以将它们组合在一起，形成一条线。

```js

const line = new THREE.Line( geometry, material );
```

剩下的事就是把它添加到场景中，并调用render渲染函数。

```js
scene.add( line );
renderer.render( scene, camera );

```

你现在应当已经看到了一个由两条蓝线组成的、指向上的箭头。

# 参考

## 动画

`AnimationAction/AnimationClip/AnimationMixer/AnimationObjectGroup/AnimationUtils/KeyframeTrack/PropertyBinding/PropertyMixer`

## 动画、轨道

`BooleanKeyframeTrack/ColorKeyframeTrack/NumberKeyframeTrack/QuaternionKeyframeTrack/StringKeyframeTrack/VectorKeyframeTrack`

## 音频

`Audio/AudioAnalyser/AudioContext/AudioListener/PositionalAudio`
