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

## 创建一个场景Creating a scene

这一部分将对 three.js 做一个简要介绍；我们将开始搭建一个场景，其中包含一个正在旋转的立方体。页面下方有一个已经完成的例子，当你遇到麻烦，或需要帮助时，可以看一看。

### 开始之前

如果您还没有安装，请先阅读安装指南。我们假设你已经设置了相同的项目结构（包括 index.html 和 main.js），安装了 three.js，运行了构建工具，或使用了带有 CDN 和导入映射的本地服务器。

### 创建一个场景

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

接下来是渲染器，这是施展魔法的地方。除了我们在这里用到的 WebGLRenderer 渲染器之外，Three.js 同时提供了其他几种渲染器，当用户所使用的浏览器过于老旧，或者由于其他原因不支持 WebGL 时，可以使用这几种渲染器降级。

除了创建一个渲染器的实例之外，我们还需要在我们的应用程序里设置一个渲染器的尺寸。比如说，我们可以使用所需要的渲染区域的宽高，来让渲染器渲染出的场景填充满我们的应用程序。因此，我们可以将渲染器宽高设置为浏览器窗口宽高。对于性能比较敏感的应用程序来说，你可以使用 setSize 传入一个较小的值，例如 window.innerWidth/2 和 window.innerHeight/2，这将使得应用程序在渲染时，以一半的长宽尺寸渲染场景。

如果你希望保持你的应用程序的尺寸，但是以较低的分辨率来渲染，你可以在调用 setSize 时，将 updateStyle（第三个参数）设为 false。例如，假设你的 <canvas> 标签现在已经具有了 100% 的宽和高，调用 setSize(window.innerWidth/2, window.innerHeight/2, false) 将使得你的应用程序以四分之一的大小来进行渲染。

最后一步很重要，我们将 renderer（渲染器）的dom元素（renderer.domElement）添加到我们的 HTML 文档中。这就是渲染器用来显示场景给我们看的 <canvas> 元素。
