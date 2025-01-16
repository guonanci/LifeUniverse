# xyz

x朝右y朝上z朝向你
AxesHelper
用于简单模拟3个坐标轴的对象.
红色代表 X 轴. 绿色代表 Y 轴. 蓝色代表 Z 轴.

代码示例
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );
例子
WebGL / buffergeometry / compression
WebGL / geometry / convex
WebGL / loader / nrrd

构造函数（Constructor）
AxesHelper( size : Number )
size -- (可选的) 表示代表轴的线段长度. 默认为 1.
# 呼图壁输煤廊道光纤听诊

<https://github.com/puxiao/threejs-tutorial/blob/main/23%20Three.js%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E4%B9%8B%E5%8A%A0%E8%BD%BD.obj%E6%A8%A1%E5%9E%8B.md>
<https://liukaili.netlify.app/blogs/docs/threejs/3_1_three.js_material.html#%E6%9D%90%E8%B4%A8%E7%A7%8D%E7%B1%BB>

WebGL: INVALID_OPERATION: texImage3D: FLIP_Y or PREMULTIPLY_ALPHA isn't allowed for uploading 3D textures

# camera

```js
camera.position.set // 耗时，涉及到2000多个材质、以及control内部逻辑。
camera.lookAt // 有个中间过渡画面，显得有点卡顿的样子
```

# control

功能：放大、缩小；向左向右向上向下旋转3D模型；保存图片、设置背景颜色、设置模型颜色；

## 模型渲染不清晰，有白色部分

在 Three.js 中，如果模型渲染不清晰或出现白色部分，可能是由于材质、光照、纹理或法线方向等问题引起的。以下是一些常见问题及解决方案：

### 1. **光照不足或不正确**

   如果模型出现白色区域或渲染不清晰，通常与光照设置有关。确保你的场景有合适的光源，如环境光 (`AmbientLight`) 和点光源 (`PointLight`)、平行光 (`DirectionalLight`) 或其他类型的灯光。

   ```javascript
   const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // 环境光，柔和的整体光照
   scene.add(ambientLight);

   const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // 平行光，模拟太阳光
   directionalLight.position.set(10, 10, 10); // 设置光源位置
   scene.add(directionalLight);
   ```

### 2. **法线方向错误**

   如果模型的法线（Normals）方向错误，可能会导致模型部分区域渲染成白色或透明，特别是在使用 `MeshStandardMaterial` 或 `MeshPhongMaterial` 等依赖法线的材质时。你可以使用 `geometry.computeVertexNormals()` 方法重新计算法线。

   ```javascript
   model.geometry.computeVertexNormals(); // 重新计算模型法线
   ```

### 3. **材质属性不正确**

   如果材质属性设置不当，可能导致模型渲染不清晰或颜色失真。常见问题包括：

- **金属度和粗糙度过高**：如果使用 `MeshStandardMaterial` 或 `MeshPhysicalMaterial`，你可以调整 `metalness` 和 `roughness` 属性。

     ```javascript
     const material = new THREE.MeshStandardMaterial({
         color: 0x555555,   // 颜色
         metalness: 0.3,    // 金属度，值越高越金属化
         roughness: 0.7     // 粗糙度，值越高越粗糙
     });
     model.material = material;
     ```

- **颜色过亮或过暗**：如果你使用了 `MeshBasicMaterial`，它不受光照影响，可能会导致模型看起来很亮或很暗。你可以尝试其他材质类型，如 `MeshLambertMaterial` 或 `MeshPhongMaterial`。

   ```javascript
   const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
   model.material = material;
   ```

### 4. **纹理加载问题**

   如果你为模型应用了纹理，可能纹理没有正确加载或设置。检查你的纹理路径是否正确，并确保纹理的格式和映射方式符合要求。

   ```javascript
   const textureLoader = new THREE.TextureLoader();
   textureLoader.load('path/to/texture.jpg', (texture) => {
       model.material.map = texture;
       model.material.needsUpdate = true; // 确保材质更新
   });
   ```

### 5. **线框模式启用**

   如果你的模型显示为线框模式，会导致渲染不清晰。检查是否意外启用了线框模式。

   ```javascript
   model.material.wireframe = false; // 禁用线框模式
   ```

### 6. **Gamma校正和环境光照**

   通过启用渲染器的伽马校正，可以让模型的颜色和光照更加自然。如果你的场景光照过亮或过暗，启用伽马校正可能会有所帮助。

   ```javascript
   renderer.outputEncoding = THREE.sRGBEncoding;
   renderer.gammaFactor = 2.2;
   ```

### 7. **模型自发光 (Emissive) 属性**

   如果模型材质的自发光属性（`emissive`）设置过高，可能会导致模型某些部分看起来过亮或泛白。可以通过调整 `emissive` 的颜色和强度来解决。

   ```javascript
   model.material.emissive = new THREE.Color(0x000000); // 将自发光设置为黑色（无自发光）
   ```

### 8. **深度冲突 (Z-Fighting)**

   如果模型的表面出现闪烁或白色区域，可能是深度冲突造成的，尤其是当多个几何体非常接近时。你可以调整相机的 `near` 和 `far` 属性，或使用 `polygonOffset` 来避免这种情况。

   ```javascript
   model.material.polygonOffset = true;
   model.material.polygonOffsetFactor = 1;
   model.material.polygonOffsetUnits = 1;
   ```

### 9. **相机视角和模型距离**

   如果模型距离相机太近或太远，可能会导致模型渲染失真或不清晰。确保模型在相机的最佳视距内。

   ```javascript
   camera.position.set(0, 5, 10); // 调整相机位置
   ```

通过这些方法，你可以逐步排查模型渲染不清晰或出现白色部分的问题。如果问题仍然存在，可能需要检查模型的导入方式、材质格式是否兼容等。

## Cannot read properties of undefined (reading 'computeVertexNormals')

如果你在 Three.js 中遇到 `Cannot read properties of undefined (reading 'computeVertexNormals')` 错误，通常是因为你尝试在一个未定义的几何体上调用 `computeVertexNormals()`。这个问题可能有几种原因和解决办法：

### 1. **确保几何体存在**

   首先，确保你正确加载或创建了几何体。`computeVertexNormals()` 方法是应用在 `BufferGeometry` 或 `Geometry` 对象上的，所以如果几何体不存在或还没有完全加载，调用该方法会导致报错。

   例如，检查几何体是否从模型中正确获取：

   ```javascript
   if (model.geometry) {
       model.geometry.computeVertexNormals();
   } else {
       console.error("几何体未定义");
   }
   ```

### 2. **模型加载时机问题**

   如果你的几何体来自于异步加载的模型（例如通过 `GLTFLoader` 或 `OBJLoader`），你可能在模型还未完全加载之前尝试访问几何体。在这种情况下，确保在模型加载完成的回调函数中操作几何体。

   例如，在加载 GLTF 模型时：

   ```javascript
   const loader = new THREE.GLTFLoader();
   loader.load('path/to/model.gltf', (gltf) => {
       const model = gltf.scene.children[0];
       if (model.geometry) {
           model.geometry.computeVertexNormals();
       } else {
           console.error("几何体未找到");
       }
   });
   ```

### 3. **嵌套模型**

   如果模型具有嵌套结构（即模型包含多个子对象），`geometry` 可能位于子对象中。你需要递归遍历模型的所有子对象并在找到几何体时计算法线。

   例如，遍历整个场景或模型的所有子节点：

   ```javascript
   model.traverse((child) => {
       if (child.isMesh && child.geometry) {
           child.geometry.computeVertexNormals();
       }
   });
   ```

### 4. **加载的模型没有几何体**

   某些类型的模型文件（如某些 `.gltf` 或 `.fbx` 文件）可能不直接包含几何体，或者几何体在加载后被存储在不同的属性中。如果加载的对象是 `Group` 或 `Scene` 而不是 `Mesh`，你需要确保从中正确提取几何体。

   检查模型结构以确保你正确地引用了几何体。例如：

   ```javascript
   console.log(gltf.scene); // 输出模型结构，检查 geometry 是否存在
   ```

### 5. **几何体类型错误**

   `computeVertexNormals()` 方法只能用于 `THREE.Geometry` 或 `THREE.BufferGeometry` 类型的几何体。如果几何体是其他类型，调用该方法会失败。确保你的几何体是 `BufferGeometry` 或 `Geometry` 类型。

   如果你从旧版 Three.js 迁移到新版，请确保你使用的几何体类型是 `BufferGeometry`，因为 `Geometry` 在新版 Three.js 中已逐渐被淘汰。

   ```javascript
   const geometry = new THREE.BoxGeometry(); // 这是 BufferGeometry 类型
   geometry.computeVertexNormals();
   ```

通过这些方法检查你的代码，确保几何体存在并正确使用。通常这个错误是由于几何体未定义或者访问几何体时机不正确引起的。

看不到全貌；旋转不了模型；

```js
function animate() {
    requestAnimationFrame(animate);
    control.current.update(); // 每次渲染前更新控制器
    renderer.current.render(scene.current, camera.current);
}
animate();
```

## requestAnimationFrame

如果不添加这个的话，初始渲染很慢，其次，导致模型无法旋转。

更改材质颜色时把所有材质都改了。

3D建模 数字孪生编辑软件
<https://www.google.com.hk/search?q=3D%E5%BB%BA%E6%A8%A1+%E6%95%B0%E5%AD%97%E5%AD%AA%E7%94%9F%E7%BC%96%E8%BE%91%E8%BD%AF%E4%BB%B6&oq=3D%E5%BB%BA%E6%A8%A1+%E6%95%B0%E5%AD%97%E5%AD%AA%E7%94%9F%E7%BC%96%E8%BE%91%E8%BD%AF%E4%BB%B6&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzcxOWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8>

## OBJ/MTL文件

### creo导出obj内部的网格、材质信息

在 Creo 中导出 OBJ 格式时，内部的网格和材质信息可以通过以下步骤进行处理和导出：

### 1. **导出模型为 OBJ 格式**

在 Creo 中，你可以通过以下步骤导出模型：

1. 打开要导出的模型。
2. 点击菜单中的 **文件** > **导出** > **3D 模型**。
3. 在文件类型中选择 **OBJ 文件**。
4. 选择导出选项（如是否包括纹理、坐标等）。
5. 选择保存路径并导出文件。

### 2. **导出材质信息**

在导出过程中，确保选择了材质和纹理选项。Creo 会生成一个与 OBJ 文件同名的 MTL 文件，其中包含材质信息。

### 3. **检查生成的 OBJ 和 MTL 文件**

导出完成后，检查以下文件：

- **.obj 文件**：包含几何体网格信息。
- **.mtl 文件**：包含材质定义，包括材质名称、颜色、纹理路径等。

### 4. **内容结构**

- **OBJ 文件结构**：OBJ 文件包含了顶点、纹理坐标、法线和面定义。
- **MTL 文件结构**：MTL 文件包含了每个材质的属性，例如：

```plaintext
newmtl MaterialName
Ka 1.000 1.000 1.000   # 环境光反射
Kd 1.000 1.000 1.000   # 漫反射
Ks 0.000 0.000 0.000   # 镜面反射
map_Kd texture.jpg      # 纹理图像
```

### 5. **使用其他软件检查**

可以使用 3D 查看工具（如 MeshLab、Blender）打开导出的 OBJ 和 MTL 文件，确认网格和材质信息是否正确。

### 6. **后续处理**

在其他 3D 软件中，你可以进一步编辑材质属性或进行其他处理。

### 总结

通过正确导出和检查 OBJ 和 MTL 文件，您可以确保内部的网格和材质信息都得到了妥善处理。这样可以在其他软件中无缝使用这些信息。

## threejs如何读取obj文件内的网格信息

在 Three.js 中读取 OBJ 文件的网格信息，可以使用 `OBJLoader`。以下是具体步骤和示例代码，帮助你获取 OBJ 文件内的网格信息：

### 1. **安装 Three.js 和 OBJLoader**

确保你已经安装了 Three.js。如果使用 npm，可以这样安装：

```bash
npm install three
```

### 2. **使用 OBJLoader 加载 OBJ 文件**

使用 `OBJLoader` 加载你的 OBJ 文件，并遍历加载的对象以获取网格信息。

### 示例代码

```javascript
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

// 创建场景、相机和渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 加载 OBJ 文件
const loader = new OBJLoader();
loader.load('path/to/your/model.obj', (object) => {
    // 将加载的对象添加到场景中
    scene.add(object);

    // 遍历对象以获取网格信息
    object.traverse((child) => {
        if (child.isMesh) {
            console.log('网格名称:', child.name); // 输出网格名称
            console.log('几何体:', child.geometry); // 输出几何体信息
            console.log('材质:', child.material); // 输出材质信息

            // 例如，获取顶点数据
            const vertices = child.geometry.attributes.position.array;
            console.log('顶点数据:', vertices);
        }
    });
});

// 设置相机位置
camera.position.z = 5;

// 动画循环
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
```

### 3. **解释代码**

- **`OBJLoader`**：用于加载 OBJ 文件。
- **`object.traverse()`**：遍历加载的对象，检查每个子对象。
- **`child.isMesh`**：检查子对象是否为网格。
- **`child.geometry`**：获取网格的几何体信息，包括顶点、法线、UV 坐标等。
- **`child.material`**：获取网格的材质信息。

### 4. **获取顶点和其他属性**

通过 `child.geometry.attributes` 可以访问更多几何体属性：

- **顶点位置**：`child.geometry.attributes.position`。
- **法线**：`child.geometry.attributes.normal`。
- **纹理坐标**：`child.geometry.attributes.uv`。

### 总结

通过 `OBJLoader`，你可以轻松加载 OBJ 文件并访问其中的网格信息，包括几何体和材质数据。这为后续处理、渲染和交互提供了基础。

## threejs修改obj局部样式

在 Three.js 中修改 OBJ 模型的局部样式，通常涉及到调整材质或几何体的特定部分。下面是一些常用的方法来实现这一目标：

### 1. **加载 OBJ 模型**

使用 `OBJLoader` 加载你的 OBJ 模型。

```javascript
const loader = new THREE.OBJLoader();
loader.load('path/to/your/model.obj', (object) => {
    scene.add(object);
});
```

### 2. **修改局部材质**

如果你的模型由多个部分（子网格）组成，你可以通过遍历这些部分并修改其材质。

```javascript
loader.load('path/to/your/model.obj', (object) => {
    object.traverse((child) => {
        if (child.isMesh) {
            // 检查材质并进行修改
            child.material = new THREE.MeshStandardMaterial({ color: 0xff0000 }); // 修改为红色
        }
    });
    scene.add(object);
});
```

### 3. **选择特定子网格**

如果你知道要修改的特定子网格的名称，可以直接访问它。

```javascript
loader.load('path/to/your/model.obj', (object) => {
    const specificMesh = object.getObjectByName('MeshName'); // 替换为你的子网格名称
    if (specificMesh) {
        specificMesh.material = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // 修改为绿色
    }
    scene.add(object);
});
```

### 4. **局部纹理替换**

如果需要替换材质的纹理，可以在设置材质时指定新的纹理。

```javascript
const textureLoader = new THREE.TextureLoader();
loader.load('path/to/your/model.obj', (object) => {
    object.traverse((child) => {
        if (child.isMesh) {
            const newTexture = textureLoader.load('path/to/your/texture.jpg');
            child.material.map = newTexture;
            child.material.needsUpdate = true; // 需要更新材质
        }
    });
    scene.add(object);
});
```

### 5. **动态修改样式**

如果你需要在运行时动态修改样式，可以在动画循环中根据条件调整材质属性。

```javascript
function animate() {
    requestAnimationFrame(animate);

    // 条件修改样式
    if (someCondition) {
        specificMesh.material.color.set(0x0000ff); // 动态修改为蓝色
    }

    renderer.render(scene, camera);
}
animate();
```

### 总结

通过遍历模型的子网格并修改其材质，可以轻松实现 OBJ 模型的局部样式修改。你可以使用不同的材质类型、颜色和纹理来达到想要的效果。确保在更改材质后设置 `needsUpdate` 属性，以便 Three.js 知道需要重新渲染。
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

# 创建文字

有时候，您可能需要在你的Three.js应用程序中使用到文本，这里有几种方法可以做到。

1. DOM + CSS
使用HTML通常是最简单、最快速的添加文本的方法，这是大多数的Three.js示例中用于添加描述性叠加文字的方法。

你可以在这里添加内容

<div id="info">Description</div>
然后使用CSS来将其绝对定位在其它具有z-index的元素之上，尤其是当你全屏运行three.js的时候。

```less
#info {
 position: absolute;
 top: 10px;
 width: 100%;
 text-align: center;
 z-index: 100;
 display:block;
}
```

2. 将文字绘制到画布中，并将其用作Texture（纹理）
如果你希望在three.js的场景中的平面上轻松地绘制文本，请使用此方法。

3. 在你所喜欢的3D软件里创建模型，并导出给three.js
如果你更喜欢使用3D建模软件来工作并导出模型到three.js，请使用这种方法。

4. three.js自带的文字几何体
如果你更喜欢使用纯three.js来工作，或者创建能够由程序改变的、动态的3D文字，你可以创建一个其几何体为THREE.TextGeometry的实例的网格：

```js

new THREE.TextGeometry( text, parameters );
```

然而，为了使得它能工作，你的TextGeometry需要在其“font”参数上设置一个THREE.Font的实例。
请参阅 TextGeometry 页面来阅读如何完成此操作的详细信息，以及每一个接收的参数的描述，还有由three.js分发、自带的JSON字体的列表。

示例
WebGL / geometry / text
WebGL / shadowmap

如果Typeface已经关闭，或者没有你想使用的字体，这有一个教程:<http://www.jaanga.com/2012/03/blender-to-threejs-create-3d-text-with.html>
这是一个在blender上运行的python脚本，能够让你将文字导出为Three.js的JSON格式。

5. 位图字体
BMFonts (位图字体) 可以将字形批处理为单个BufferGeometry。BMFont的渲染支持自动换行、字母间距、字句调整、signed distance fields with standard derivatives、multi-channel signed distance fields、多纹理字体等特性。 详情请参阅 three-mesh-ui 或 three-bmfont-text。

现有库存的字体在项目中同样可用，就像A-Frame Fonts一样， 或者你也可以从任何TTF字体中创建你自己的字体，优化时，只需包含项目中所需字符即可。

这是一些有用的工具：

msdf-bmfont-web (web-based)
msdf-bmfont-xml (commandline)
hiero (desktop app)

# 载入3D模型（Loading 3D models）

目前，3D模型的格式有成千上万种可供选择，但每一种格式都具有不同的目的、用途以及复杂性。 虽然 three.js已经提供了多种导入工具， 但是选择正确的文件格式以及工作流程将可以节省很多时间，以及避免遭受很多挫折。某些格式难以使用，或者实时体验效率低下，或者目前尚未得到完全支持。

对大多数用户，本指南向你推荐了一个工作流程，并向你提供了一些当没有达到预期效果时的建议。

## 在开始之前

如果你是第一次运行一个本地服务器，可以先阅读installation。 正确地托管文件，可以避免很多查看3D模型时的常见错误。

## 推荐的工作流程

如果有可能的话，我们推荐使用glTF（gl传输格式）。.GLB和.GLTF是这种格式的两种不同版本，都可以被很好地支持。由于glTF格式专注于在程序运行时呈现三维物体，所以传输效率很高，且加载速度很快。功能方面则包括了网格、材质、纹理、皮肤、骨骼、变形目标、动画、灯光和摄像机。

公共领域的glTF文件可以在网上找到，例如 Sketchfab，或者很多工具包含了glTF的导出功能：

Blender by the Blender Foundation
Substance Painter by Allegorithmic
Modo by Foundry
Toolbag by Marmoset
Houdini by SideFX
Cinema 4D by MAXON
COLLADA2GLTF by the Khronos Group
FBX2GLTF by Facebook
OBJ2GLTF by Analytical Graphics Inc
…and 还有更多（<http://github.khronos.org/glTF-Project-Explorer/）>

倘若你所喜欢的工具不支持glTF格式，请考虑向该工具的作者请求glTF导出功能， 或者在the glTF roadmap thread贴出你的想法。

当glTF不可用的时候，诸如FBX、OBJ或者COLLADA等等其它广受欢迎的格式在Three.js中也是可以使用、并且定期维护的。

## 加载

在three.js中只会内置一部分加载器，如：ObjectLoader，其它的需要在应用中单独引入。

```js

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
```

一旦引入了一个加载器，你就已经准备好为场景添加模型了。不同加载器之间可能具有不同语法 —— 当使用其它格式时，请参阅该格式加载器的示例及文档。对于glTF，使用全局script的用法类似：

```js

const loader = new GLTFLoader();

loader.load( 'path/to/model.glb', function ( gltf ) {

 scene.add( gltf.scene );

}, undefined, function ( error ) {

 console.error( error );

} );
```

请参阅GLTFLoader documentation来深入了解详细信息。

## 故障排除

你花了几小时亲手建了个堪称杰作的模型，现在把它导入到网页中—— 哦，天呐~😭导入后完全失真了、材质贴图丢了、或者说整个模型完全丢失了！

接下来我们按下面的步骤排除故障：

1. 在Javascript的Console中查找错误，并确定当你调用.load()的时候，使用了onError回调函数来输出结果。

2. 请在其它应用程序中查看3D模型。对于glTF格式的模型来说，可以直接在下面的应用程序中进行查看： three.js和 babylon.js。 如果该模型能够在一个或多个应用程序中正确地呈现，请点击这里向three.js提交Bug报告。 如果模型不能在任意一个应用程序里显示，我们强烈鼓励你向我们提交Bug报告，并告知我们你的模型是使用哪款应用程序创建的。

3. 尝试将模型放大或缩小到原来的1000倍。许多模型的缩放比例各不相同，如果摄像机位于模型内，则大型模型将可能不显示。

4. 尝试添加一个光源并改变其位置。模型或许被隐藏在黑暗中。

5. 在网络面板中查找失败的纹理贴图请求，比如说C:\\Path\To\Model\texture.jpg。载入贴图时，请使用相对于模型文件路径，例如 images/texture.jpg —— 这或许需要在文本编辑器中修改模型文件。

## 请求帮助

如果你已经尝试经历了以上故障排除的过程，但是你的模型仍无法工作，寻求正确的方法来获得帮助，将使您更快地获得解决方案。您可以将您的问题发布到three.js forum， 同时，尽可能将你的模型（或者一个简单的、具有相同问题的模型）包含在你能够使用的任何格式中，为其他人提供足够信息，以便快速重现该问题 —— 最好是一个能现场演示的Demo。

# 库和插件

这里列出的是由外部开发的，与three.js相兼容的库和插件。此列表和相关软件包，由社区维护，不保证是最新版本。如果您想更新此列表，请提交 PR！

## 物理引擎/效果（Physics）

Oimo.js
enable3d
ammo.js
cannon-es
rapier
Jolt

## 后期处理（Postprocessing）

除了官方的 three.js 后处理特效外，我们还可以通过外部库获得一些额外的特效和框架支持。

postprocessing

## 光线投射性能表现（Intersection and Raycast Performance）

three-mesh-bvh

## 轨迹追踪（Path Tracing）

three-gpu-pathtracer

## 文件格式（File Formats）

除官方的 three.js 加载器外，还可通过外部库支持其他一些格式。

urdf-loader
3d-tiles-renderer-js
WebWorker OBJLoader
IFC.js

## Geometry

THREE.MeshLine

## 3D 文字和布局（3D Text and Layout）

troika-three-text
three-mesh-ui

## 粒子系统（Particle Systems）

three.quarks
three-nebula

## 逆向运动学（Inverse Kinematics）

THREE.IK
fullik
closed-chain-ik

## 游戏人工智能（Game AI）

yuka
three-pathfinding
recast-navigation-js

## 封装器和框架（Wrappers and Frameworks）

A-Frame
Lume - HTML elements for 3D graphics built on Three.
react-three-fiber - React components for 3D graphics built on Three.
threepipe - A versatile 3D viewer framework using three.js for rendering.
ECSY
Threlte - Svelte components for 3D graphics built on Three.
Needle Engine
tresjs - Vue components for 3D graphics built on Three.

# 常见问题

## 哪种三维物体格式能得到最好地支持？

推荐使用glTF（gl传输格式）来对三维物体进行导入和导出，由于glTF格式专注于在程序运行时呈现三维物体，因此它的传输效率非常高，且加载速度非常快。

three.js同样也为其它广受欢迎的格式（例如FBX、Collada以及OBJ等）提供了载入工具。即便如此，你应当还是首先尝试着在项目中建立一个基于glTF的工作流程。了解更多详细信息，请查看loading 3D models。

为何在示例中会有一些和viewport相关的meta标签？
<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
这些标签用于在移动端浏览器上控制视口的大小和缩放（页面内容可能会以与可视区域不同的大小来呈现）。

Safari: Using the Viewport

MDN: Using the viewport meta tag

## 如何在窗口调整大小时保持场景比例不变？

我们希望所有物体，无论距离摄像机多远，都能呈现相同尺寸，即使是在窗口被重新调整大小时。解决该问题的关键，是一个很重要的公式：*给定距离，求可见高度*。

```js
visible_height = 2 *Math.tan( ( Math.PI / 180 )* camera.fov / 2 ) * distance_from_camera;

```

*如果我们以一定的百分比增加了窗口高度，那我们所想要的结果便是，所有距离的可见高度都增加相同的百分比。 这并不能通过改变摄像机的位置来实现，相反，你得改变摄像机的视野角度（FOV）*。这是个示例：Example.

## 为何我的物体的一部分不可见？

这可能是由于面剔除而导致。面具有朝向，该朝向决定了哪边是正面或背面。正常情况下，渲染时会剔除背面。要查看这是不是你遇到的问题，请*将material的side更改为THREE.DoubleSide*。

```js

material.side = THREE.DoubleSide
```

为何有时候无效输入会让three.js返回奇怪结果？
出于性能考虑，大多数情况下 three.js 不验证输入。确保所有输入均有效是应用的责任。

# 一些有用的链接（Useful links）

以下是一些学习three.js过程中，可能有所帮助的链接。
如果你想在此添加内容，或是认为下方某个链接不再相关或无法工作，请随时点击右下角“编辑”按钮来更改。

需注意的是，由于three.js处于快速发展中，很多链接会包含过时信息 —— 如果某个地方不能如你所想，或如链接中所说的正常工作， 请查看浏览器控制台中的警告和报错信息，同时也请参阅相关的文档页面。

## 帮助论坛

Three.js官方使用forum（官方论坛） 和 Stack Overflow来处理帮助请求。如果你需要些帮助，这才是你所要去的地方。请一定不要在GitHub上提issue来寻求帮助。

## 教程以及课程

- three.js入门
Three.js Fundamentals starting lesson
Beginning with 3D WebGL by Rachel Smith.
Animating scenes with WebGL and three.js

- 更广泛、高级的文章与教程
Discover three.js
Collection of tutorials by CJ Gammon.
Glossy spheres in three.js.
Interactive 3D Graphics - a free course on Udacity that teaches the fundamentals of 3D Graphics, and uses three.js as its coding tool.
Aerotwist tutorials by Paul Lewis.
Three.js Bookshelf - Looking for more resources about three.js or computer graphics in general? Check out the selection of literature recommended by the community.

## 新闻与更新

Three.js on Twitter
Three.js on reddit
WebGL on reddit

## 示例

three-seed - three.js starter project with ES6 and Webpack
Professor Stemkoskis Examples - a collection of beginner friendly examples built using three.js r60.
Official three.js examples - these examples are maintained as part of the three.js repository, and always use the latest version of three.js.
Official three.js dev branch examples - Same as the above, except these use the dev branch of three.js, and are used to check that everything is working as three.js being is developed.

## 工具

physgl.org - JavaScript front-end with wrappers to three.js, to bring WebGL graphics to students learning physics and math.
Whitestorm.js – Modular three.js framework with AmmoNext physics plugin.
Three.js Inspector
ThreeNodes.js.
three.quarks - 针对 three.js 高速粒子特效系统
vscode shader - Syntax highlighter for shader language.
vscode comment-tagged-templates - Syntax highlighting for tagged template strings using comments to shader language, like: glsl.js.
WebXR-emulator-extension

## WebGL参考

webgl-reference-card.pdf - Reference of all WebGL and GLSL keywords, terminology, syntax and definitions.

## 较旧的链接

这些链接是出于历史目的而保留的，你或许可以发现它们仍然很有用，它们可能含有和three.js较为早前版本的有关的信息。

AlterQualia at WebGL Camp 3
Yomotsus Examples - a collection of examples using three.js r45.
Introduction to Three.js by Ilmari Heikkinen (slideshow).
WebGL and Three.js by Akihiro Oyamada (slideshow).
Trigger Rally by jareiko (video).
ThreeFab - scene editor, maintained up until around three.js r50.
Max to Three.js workflow tips and tricks by BKcore
A whirlwind look at Three.js by Paul King
Animated selective glow in Three.js by BKcore
Building A Physics Simulation Environment - three.js tutorial in Japanese

# 进阶

## 如何更新场景（How to update things）

默认情况下，所有对象都会自动更新它们的矩阵，如果它们已添加到场景中

```js

const object = new THREE.Object3D();
scene.add( object );
// 或者它们是已添加到场景中的另一个对象的子节点:
const object1 = new THREE.Object3D();
const object2 = new THREE.Object3D();

object1.add( object2 );
scene.add( object1 ); // object1 和 object2 会自动更新它们的矩阵
```

但是，如果你知道对象将是静态的，则可以禁用此选项并在需要时手动更新转换矩阵。

object.matrixAutoUpdate = false;
object.updateMatrix();
BufferGeometry
BufferGeometries 将信息（例如顶点位置，面索引，法线，颜色，uv和任何自定义属性）存储在buffers —— 也就是， typed arrays. 这使得它们通常比标准Geometries更快，缺点是更难用。

关于更新BufferGeometries，最重要的是理解你不能调整 buffers 大小（这种操作开销很大，相当于创建了个新的geometry）。 但你可以更新 buffers的内容。

这意味着如果你知道BufferGeometry的一个属性会增长，比如顶点的数量， 你必须预先分配足够大的buffer来容纳可能创建的任何新顶点。 当然，这也意味着BufferGeometry将有一个最大大小 —— 无法创建一个可以高效地无限扩展的BufferGeometry。

我们以在渲染时扩展的line来示例。我们将分配可容纳500个顶点的空间但起初仅绘制2个，使用 在500个顶点的缓冲区中，但首先只使用 BufferGeometry.drawRange。

const MAX_POINTS = 500;

// geometry
const geometry = new THREE.BufferGeometry();

// attributes
const positions = new Float32Array( MAX_POINTS * 3 ); // 3 vertices per point
geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );

// draw range
const drawCount = 2; // draw the first 2 points, only
geometry.setDrawRange( 0, drawCount );

// material
const material = new THREE.LineBasicMaterial( { color: 0xff0000 } );

// line
const line = new THREE.Line( geometry, material );
scene.add( line );
然后我们随机增加顶点到line中，以这样的一种方式：

const positionAttribute = line.geometry.getAttribute( 'position' );

let x = 0, y = 0, z = 0;

for ( let i = 0; i < positionAttribute.count; i ++ ) {

 positionAttribute.setXYZ( i, x, y, z );

 x += ( Math.random() - 0.5 ) *30;
 y += ( Math.random() - 0.5 )* 30;
 z += ( Math.random() - 0.5 ) * 30;

}
如果要更改第一次渲染后渲染的点数，执行以下操作：

line.geometry.setDrawRange( 0, newValue );
如果要在第一次渲染后更改position数值，则需要像这样设置needsUpdate标志：

positionAttribute.needsUpdate = true; // 需要加在第一次渲染之后
这个fiddle展示了一个你可以参考的运动的line。

例子
WebGL / custom / attributes
WebGL / buffergeometry / custom / attributes / particles

材质（Materials）
所有uniforms值都可以自由改变（比如 colors, textures, opacity 等等），这些数值在每帧都发给shader。

GL状态相关参数也可以随时改变（depthTest, blending, polygonOffset 等）。

在运行时无法轻松更改以下属性（一旦material被渲染了一次）：

uniforms的数量和类型
是否存在
texture
fog
vertex colors
morphing
shadow map
alpha test
transparent
这些变化需要建立新的shader程序。你需要设置

material.needsUpdate = true
请记住，这可能会非常缓慢并导致帧率的波动。（特别是在Windows上，因为shader编译在directx中比opengl慢）。

为了获得更流畅的体验，您可以通过“虚拟”值（如零强度光，白色纹理或零密度雾）在一定程度上模拟这些功能的变化。

您可以自由更改用于几何块的材质，但是无法更改对象如何划分为块（根据面材料）。

如果你需要在运行时使用不同的材料配置：
如果材料/块的数量很少，您可以事先预先划分物体（例如，人的头发/脸部/身体/上衣/裤子，汽车的前部/侧面/顶部/玻璃/轮胎/内部）。

如果数量很大（例如，每个面可能有所不同），请考虑不同的解决方案，例如使用属性/纹理来驱动不同的每个面部外观。

例子
WebGL / materials / car
WebGL / webgl_postprocessing / dof

纹理（Textures）
如果更改了图像，画布，视频和数据纹理，则需要设置以下标志：

texture.needsUpdate = true;
渲染对象就会自动更新。

例子
WebGL / materials / video
WebGL / rtt

相机（Cameras）
相机的位置和目标会自动更新。 如果你需要改变

fov
aspect
near
far
那么你需要重新计算投影矩阵：

camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();

# 参考

## 动画

`AnimationAction/AnimationClip/AnimationMixer/AnimationObjectGroup/AnimationUtils/KeyframeTrack/PropertyBinding/PropertyMixer`

## 动画、轨道

`BooleanKeyframeTrack/ColorKeyframeTrack/NumberKeyframeTrack/QuaternionKeyframeTrack/StringKeyframeTrack/VectorKeyframeTrack`

## 音频

`Audio/AudioAnalyser/AudioContext/AudioListener/PositionalAudio`

## 摄像机

`ArrayCamera/Camera/CubeCamera/OrthographicCamera/PerspectiveCamera/StereoCamera`

## 常量

`Animation/Core/CustomBlendingEquation/BufferAttributeUsage/Materials/Renderer/Textures`

## 核心

`BufferAttribute/BufferGeometry/Clock/EventDispatcher/GLBufferAttribute/InstancedBufferGeometry/InstancedInterleavedBuffer/InterleavedBuffer/InterleavedBufferAttribute/Layers/Object3D/Raycaster/Uniform`
Interleaved:交叉；raycaster：光线投射器

## 核心/BufferAttributes

BufferAttributes Types

## 附件

Controls、DataUtils、Earcut、ImageUtils、PMREMGenerator、ShapeUtils

## 附件/核心

Curve、CurvePath、Interpolations、Path、Shape、ShapePath

## 附件/曲线

ArcCurve、CatmullRomCurve3、CubicBezierCurve、CubicBezierCurve3、EllipseCurve、LineCurve、LineCurve3、QuadraticBezierCurve、QuadraticBezierCurve3、SplineCurve

## 几何体

BoxGeometry、CapsuleGeometry、CircleGeometry、ConeGeometry、CylinderGeometry、DodecahedronGeometry、EdgesGeometry、ExtrudeBeometry、IcosahedronGeometry、LatheGeometry、LatheGeometry、OctahedronGeometry、PlaneGeometry、PolyhedronGeometry、RingGeometry、

ShapeGeometry、SphereGeometry、TetrahedronGeometry、TorusGeometry、TorusKnotGeometry、TubeGeometry、WireframeGeometry、

## 辅助对象

ArrowHelper/AxesHelper/BoxHelper/Box3Helper/CameraHelper/DirectionalLightHelper/GridHelper/PolarGridHelper/HemisphereLightHelper/PlaneHelper/PointLightHelper/SkeletonHelper/SpotLightHelper

## 灯光

AmbientLight/DirectionalLight/HemisphereLight/Light/LightProbe/PointLight/RectAreaLight/SpotLight/

## 灯光/阴影

LightShadow/PointLightShadow/DirectionalLightShadow/SpotLightShadow/

## 加载器

AnimationLoader/AudioLoader/BufferGeometryLoader/Cache/CompressedTextureLoader/CubeTextureLoader/CubeTextureLoader/DataTextureLoader/FileLoader/ImageBitmapLoader/ImageLoader/Loader/LoaderUtils/MaterialLoader/ObjectLoader/TextureLoader/

## 加载器/管理器

DefaultLoadingManager/LoadingManager

## 材质

LineBasicMaterial/LineDashedMaterial/Material/MeshBasicMaterial/MeshDistanceMaterial/MeshLambertMaterial/MeshMatcapMaterial/MeshNormalMaterial/MeshPhongMaterial/MeshPhysicalMaterial/MeshStandardMaterial/MeshToonMaterial/

PointsMaterial/RawShaderMaterial/ShaderMaterial/ShadowMaterial/SpriteMaterial/

## 数学库

Box2/Box3/Color/Cylindrical/Euler/Frustum/Interpolant/Line3/MathUtils/Matrix3/Matrix4/Plane/Quaternion/Ray/Sphere/Spherical/SphericalHarmonics3/Triangle/Vector2/Vector3/Vector4

## 数学库/插值

CubicInterpolant/DiscreteInterpolant/LinearInterpolant/QuaternionLinearInterpolant

## 物体

BatchedMesh/Bone/Group/InstancedMesh/LOD/Mesh/Points/Skeleton/SkinnedMesh/Sprite

## 渲染器

WebGLRenderer/WebGLRenderTarget/WebGLArrayRenderTarget/WebGLCubeRenderTarget/

## 渲染器/着色器

ShaderChunk/ShaderLib/UniformsLib/UniformsUtils

## 渲染器/WebXR

WebXRManager

## 场景

Fog/FogExp2/Scene

## 纹理贴图

CanvasTexture/CompressedTexture/CompressedArrayTexture/CubeTexture/Data3DTexture/DataArrayTexture/DataTexture/DepthTexture/FramebufferTexture/Source/Texture/VideoTexture/

# 附加

## 动画

CCDIKSolver/MMDAnimationHelper/MMDPhysics

## 控制

ArcballControls/DragControls/FirstPersonControls/FlyControls/MapControls/OrbitControls/PointerLockControls/TrackballControls/TransformControls/

## 几何体

ConvexGeometry/DecalGeometry/ParametricGeometry/TeapotGeometry/TextGeometry/SDFGeometryGenerator/

## 辅助对象

LightProbeHelper/PositionalAudioHelper/RectAreaLightHelper/VertexNormalsHelper/VertexTangentsHelper/

## 灯光

LightProbeGenerator

## 加载器

3DMLoader/DRACOLoader/FontLoader/GLTFLoader/KTX2Loader/LDrawLoader/LUT3dlLoader/LUTCubeLoader/MMDLoader/OBJLoader/PCDLoader/PDBLoader/SVGLoader/TGALoader/

## 物体

Lensflare/Sky

## 后期处理

EffectComposer

## 导出器

DRACOExporter/EXRExporter/GLTFExporter/PLYExporter/STLExporter/

## 数学库

LookupTable/MeshSurfaceSampler/OBB

## 修改器

EdgeSplitModifier

## 杂项

Timer

## 凸包

Face/HalfEdge/ConvexHull/VertexNode/VertexList

## 渲染器

CSS2DRenderer/CSS3DRenderer/SVGRenderer/

## 实用工具

BufferGeometryUtils/CameraUtils/SceneUtils/SkeletonUtils

## WebXR

XREstimatedLight

# 开发者参考

## WebGL渲染器

WebGLProgram

# Examples

张成说，threejs没有球体的圆滑感，都是块状的。

# 怎么操作，以确定三维模型中两点的距离

要确定三维模型中两点的距离，可以使用 **欧几里得距离公式**。在 Three.js 中，如果你有两个点的坐标（假设为 `(x1, y1, z1)` 和 `(x2, y2, z2)`），你可以直接计算它们之间的距离。

### 欧几里得距离公式

在三维空间中，两点之间的距离 \(d\) 可以通过以下公式计算：

\[
d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}
\]

### 使用 Three.js 计算两点间的距离

Three.js 提供了 `Vector3` 类，可以方便地计算两点之间的距离。

假设你有两个 `Vector3` 对象分别代表两点的位置，你可以使用 `distanceTo` 方法来计算它们之间的距离。

#### 示例代码

```javascript
// 导入 Three.js
import * as THREE from 'three';

// 定义两个点
const point1 = new THREE.Vector3(1, 2, 3); // 点1 (x1, y1, z1)
const point2 = new THREE.Vector3(4, 5, 6); // 点2 (x2, y2, z2)

// 计算两点之间的距离
const distance = point1.distanceTo(point2);

console.log("两点之间的距离是: " + distance);
```

### 代码解释

1. **`THREE.Vector3`**：这是 Three.js 中表示三维向量的类。每个点在三维空间中都可以表示为 `Vector3` 对象。
2. **`distanceTo` 方法**：`distanceTo` 方法可以直接计算当前 `Vector3` 对象与另一个 `Vector3` 对象之间的距离。它会自动使用欧几里得公式进行计算。
3. **输出**：打印出两点之间的距离。

### 输出示例

对于点 `point1 = (1, 2, 3)` 和 `point2 = (4, 5, 6)`，输出会是：

```
两点之间的距离是: 5.196152422706632
```

### 注意事项

- 如果你有两个三维模型的物体，并且你想计算它们的某个具体点之间的距离，你需要获取这些物体的位置。例如，如果你有两个 `Mesh` 对象 `mesh1` 和 `mesh2`，你可以通过 `mesh1.position` 和 `mesh2.position` 获取它们的位置（`Vector3` 对象），然后计算它们之间的距离。

```javascript
const distance = mesh1.position.distanceTo(mesh2.position);
```

这种方法可以用来计算任意两点之间的空间距离，适用于三维模型中的节点、物体或任意两点之间的测量。

# 三维模型中的折线距离或两点距离是同一个概念吗

**三维模型中的折线距离和两点距离**是两个不同的概念，尽管它们都涉及到测量空间中的距离，但它们的定义和计算方法有所不同。

### 1. **两点距离（Euclidean Distance）**

- **定义**：两点之间的距离是指在三维空间中，两个点之间的直线距离，也叫欧几里得距离。它是两个点之间的最短路径。
- **计算**：两点的欧几里得距离可以通过上述的公式计算：

  \[
  d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}
  \]

  在 Three.js 中，计算两点之间的距离可以使用 `Vector3.distanceTo()` 方法。

### 2. **折线距离（Polyline Distance）**

- **定义**：折线距离是指由多个点组成的折线（Polyine）沿路径的总长度。在三维空间中，折线通常由若干个连续的线段组成，每个线段连接两个相邻的点。折线的总距离就是所有这些线段的长度之和。
- **计算**：折线的总距离可以通过计算每一对相邻点之间的两点距离并累加来得到：

  \[
  d_{\text{折线}} = d_1 + d_2 + \cdots + d_{n-1}
  \]
  其中，\( d_1, d_2, \ldots, d_{n-1} \) 是相邻点之间的两点距离。

  在 Three.js 中，如果你有多个 `Vector3` 点组成的折线，你可以通过遍历所有点对并使用 `distanceTo` 方法来累加计算折线的总距离。

### 折线距离的计算示例

假设我们有一个折线，包含多个点（例如 `point1`, `point2`, `point3` 等），我们想要计算折线的总长度。

```javascript
import * as THREE from 'three';

// 定义多个点
const point1 = new THREE.Vector3(0, 0, 0);  // 起点
const point2 = new THREE.Vector3(1, 2, 0);  // 第二个点
const point3 = new THREE.Vector3(4, 6, 0);  // 第三个点

// 计算折线总长度
const points = [point1, point2, point3];

let totalDistance = 0;

for (let i = 0; i < points.length - 1; i++) {
  totalDistance += points[i].distanceTo(points[i + 1]);
}

console.log("折线的总距离是: " + totalDistance);
```

### 输出结果

假设 `point1 = (0, 0, 0)`，`point2 = (1, 2, 0)`，`point3 = (4, 6, 0)`，那么折线的总距离为各段距离的和：

```
折线的总距离是: 7.6157
```

### 总结

- **两点距离**：是指两点之间的最短距离，通常是直线距离。
- **折线距离**：是指多个点连接成折线的总路径长度，通常需要计算每一段相邻点之间的距离并累加。

因此，**两点距离**是折线距离的一个特殊情况，当折线只有两个点时，折线的总距离就是两点之间的距离。

# 计算两点角度

计算三维空间中两点之间的角度，通常指的是计算从一个点到另一个点所形成的**方向角**，或者说是这两个点连线与某个坐标轴（如X轴、Y轴、Z轴）之间的夹角。

根据你的需求，以下是一些常见的角度计算方法：

### 1. **计算两点之间的角度：**

   假设你想计算两点之间的夹角。可以将两点看作是从原点到目标点的向量，然后计算这些向量之间的夹角。

- 给定两点 `point1(x1, y1, z1)` 和 `point2(x2, y2, z2)`，可以得到两点之间的向量：

     \[
     \vec{A} = (x1, y1, z1) \quad \text{and} \quad \vec{B} = (x2, y2, z2)
     \]

- 这两个向量之间的夹角 \( \theta \) 可以通过 **点积公式**计算：

     \[
     \cos(\theta) = \frac{\vec{A} \cdot \vec{B}}{|\vec{A}| |\vec{B}|}
     \]

     其中：
  - \( \vec{A} \cdot \vec{B} = x1 \cdot x2 + y1 \cdot y2 + z1 \cdot z2 \) 为点积。
  - \( |\vec{A}| \) 和 \( |\vec{B}| \) 是向量的模长，计算方式为：

       \[
       |\vec{A}| = \sqrt{x1^2 + y1^2 + z1^2}, \quad |\vec{B}| = \sqrt{x2^2 + y2^2 + z2^2}
       \]

     计算结果为：

     \[
     \theta = \cos^{-1} \left( \frac{\vec{A} \cdot \vec{B}}{|\vec{A}| |\vec{B}|} \right)
     \]

### 2. **使用 Three.js 计算两点之间的角度：**

在 Three.js 中，你可以通过 `Vector3` 类提供的 `.angleTo()` 方法来计算两个向量之间的夹角。

假设你有两个点 `point1` 和 `point2`，你可以按照以下步骤计算它们之间的夹角：

#### 示例代码

```javascript
import * as THREE from 'three';

// 定义两个点
const point1 = new THREE.Vector3(1, 0, 0);  // 点1 (x1, y1, z1)
const point2 = new THREE.Vector3(0, 1, 0);  // 点2 (x2, y2, z2)

// 计算从点1到原点的向量（point1）
const vectorA = new THREE.Vector3(1, 0, 0);  // 假设 point1 为 (1, 0, 0)
const vectorB = point2.clone().sub(point1);  // point2 相对于 point1 的向量

// 计算两个向量之间的夹角（以弧度为单位）
const angle = vectorA.angleTo(vectorB);

// 将角度转换为度数
const angleInDegrees = THREE.MathUtils.radToDeg(angle);

console.log("两点之间的角度是: " + angleInDegrees + "°");
```

### 代码解释

- **`vectorA.angleTo(vectorB)`**：该方法返回两个向量 `vectorA` 和 `vectorB` 之间的夹角，单位是弧度。
- **`THREE.MathUtils.radToDeg(angle)`**：将弧度转换为度数。

### 输出

如果 `point1 = (1, 0, 0)` 和 `point2 = (0, 1, 0)`，则两点之间的夹角为 90 度，因为它们分别位于 X 和 Y 轴上。

```
两点之间的角度是: 90°
```

### 3. **计算两点与坐标轴之间的夹角：**

如果你想计算某个点与 X、Y 或 Z 轴之间的夹角，可以通过与轴向量进行夹角计算。

例如，计算点 `point = (x, y, z)` 与 X 轴（向量 `(1, 0, 0)`）之间的夹角：

```javascript
const point = new THREE.Vector3(x, y, z);
const xAxis = new THREE.Vector3(1, 0, 0);

// 计算夹角（弧度）
const angleWithXAxis = point.angleTo(xAxis);

// 转换为度数
const angleWithXAxisInDegrees = THREE.MathUtils.radToDeg(angleWithXAxis);
console.log("与 X 轴的夹角是: " + angleWithXAxisInDegrees + "°");
```

### 总结

- **计算两点之间的夹角**：使用向量的点积公式或 Three.js 的 `angleTo` 方法计算。
- **计算两点与坐标轴之间的夹角**：使用向量与轴向量的夹角。

这种角度计算常用于确定三维空间中物体的方向性、旋转角度等应用场景。
