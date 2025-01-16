# Viewer

activeCamera:PerspectiveCamera;animCtrls:[],animFolder:GUI,animate:f();axesCamera:Pers..;axesCorner:AxesHelper;axesDiv:div.axes;axesHelper:null;axesRenderer:WebGLRenderer;axesScene:Scene;backgroundColor:Color;

cameraCtrl:null;cameraFolder:GUI;clips:[];content:Group;controls:OrbitControls;defaultCamera;el:div.viewer;gridHelper:null;
gui:GUI;lights:[AmbientLight,DirectionalLight];mixer:null;morphCtrls;morphFolder;neutralEnvironment:Texture;

options:{kiosk:false,model:'',preset:'',cameraPosition:null};pmremGenerator:PMREMGenerator;prevTime:33050.7;renderer:WebGLRenderer;
scene:Scene;skeletonHelpers:[];state:{actionStates:{},ambientColor:'#FFFFFF',ambientIntensity:0.3;autoRotate:false,
background:false,bgColor:'#191919',camera:'[default]',directColor:'#ff',directIntensity:2.513,environment:'素净的',}

{...,exposure:0,grid:false,playbackSpeed:1,pointSize:1,punctualLights:true,skeleton:false,toneMapping:1,wireframe:false}

stats:{REVISION:16,addPanel:f(panel),begin:f(),dom:div,end:f(),setMode:showPanel(id),showPanel:showPanel(id),update:f()}

## 如何区分donmccurdy glft-viewer的activeCamera axesCamera defaultCamera

在 `donmccurdy` 的 glTF-viewer 组件中，通常会有多个摄像机，用于处理不同的功能。这里是关于 `activeCamera`、`axesCamera` 和 `defaultCamera` 的区别：

### 1. **`activeCamera`（活动摄像机）**

- **用途**：这是当前正在使用的摄像机，负责渲染整个场景。任何时候，`activeCamera` 都是用户正在使用的视角。
- **使用场景**：当用户在场景中交互或切换摄像机（如透视视图和正交视图之间切换）时，`activeCamera` 会反映这些变化。
- **如何识别**：你可以通过检查渲染循环中当前使用的摄像机或通过用户交互来获取 `activeCamera`。

   ```javascript
   console.log(viewer.activeCamera);  // 当前使用的摄像机
   ```

### 2. **`axesCamera`（坐标轴摄像机）**

- **用途**：`axesCamera` 通常用于渲染坐标轴辅助器（axes helper）或显示空间方向的小型 3D 视图。这个摄像机不用于场景主视图，而是专门用于渲染坐标系等辅助元素。
- **使用场景**：`axesCamera` 通常是正交摄像机，它的位置是固定的，提供一个明确的坐标轴视图，不影响主场景的渲染。
- **如何识别**：`axesCamera` 不用于主场景的渲染，而是用于坐标轴或小的 UI 元素。

   ```javascript
   console.log(viewer.axesCamera);  // 用于渲染坐标轴的摄像机
   ```

### 3. **`defaultCamera`（默认摄像机）**

- **用途**：`defaultCamera` 通常是场景的默认摄像机，特别是当加载的 glTF 模型没有指定摄像机时，它会作为初始摄像机或回退摄像机。
- **使用场景**：如果没有其他指定的摄像机，`defaultCamera` 会用于初始化渲染场景。
- **如何识别**：你可以通过访问 `defaultCamera` 作为初始的场景摄像机，除非用户做了摄像机切换。

   ```javascript
   console.log(viewer.defaultCamera);  // 默认的摄像机
   ```

### 总结

- **`activeCamera`**：当前用于渲染场景的摄像机。
- **`axesCamera`**：专门用于渲染坐标轴等辅助工具的摄像机。
- **`defaultCamera`**：场景的初始摄像机，或在没有其他摄像机激活时使用。

你可以通过访问 `viewer.activeCamera`、`viewer.axesCamera` 和 `viewer.defaultCamera` 来区分这些不同的摄像机，并了解它们在场景中的角色。

## 透视视图和正交视图

透视视图和正交视图之间切换）时，`activeCamera` 会反映这些变化。

# gltf-viewer添加全局的地面背景

要在 `gltf-viewer` 中添加全局的地面背景，你可以通过以下方式实现：使用 **Three.js** 的地面或背景功能，或者使用 **Skydome** 背景来创建一个视觉上类似地面的效果。具体步骤取决于你想要的背景效果，是一个平面地面、一个球形背景，还是一个类似天空的背景。

### 1. **使用 `THREE.PlaneGeometry` 创建地面背景**

这种方法会在场景中添加一个地面平面，它会在 3D 模型的下方显示出来，通常用于提供一个简单的地面背景。

```javascript
import * as THREE from 'three';

// 创建场景
const scene = new THREE.Scene();

// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 添加地面背景
const geometry = new THREE.PlaneGeometry(1000, 1000); // 大地面
const material = new THREE.MeshBasicMaterial({ color: 0x888888, side: THREE.DoubleSide });
const ground = new THREE.Mesh(geometry, material);
ground.rotation.x = - Math.PI / 2; // 旋转地面以使其平行于地面
scene.add(ground);

// 加载 glTF 模型
const loader = new THREE.GLTFLoader();
loader.load('path/to/your/model.glb', function (gltf) {
    scene.add(gltf.scene);
    renderer.render(scene, camera);
});

// 渲染场景
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
```

#### 解释

- 使用 `THREE.PlaneGeometry` 创建一个大平面，作为地面。
- 使用 `THREE.MeshBasicMaterial` 创建一个简单的材质，给地面添加颜色。
- 将地面平面旋转 `-Math.PI / 2`，使其平行于地面。
- 在场景中添加 glTF 模型，并在每一帧渲染时保持模型的显示。

### 2. **使用 `THREE.CubeTextureLoader` 添加天空盒背景**

如果你想要给场景添加一个更自然的背景，类似一个全景背景，你可以使用 `THREE.CubeTextureLoader` 加载一个天空盒或背景图片。

```javascript
import * as THREE from 'three';

// 创建场景
const scene = new THREE.Scene();

// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 加载天空盒（可以使用 6 张图片作为立方体的每个面）
const loader = new THREE.CubeTextureLoader();
const texture = loader.load([
    'path/to/px.jpg', // 正向 X
    'path/to/nx.jpg', // 负向 X
    'path/to/py.jpg', // 正向 Y
    'path/to/ny.jpg', // 负向 Y
    'path/to/pz.jpg', // 正向 Z
    'path/to/nz.jpg'  // 负向 Z
]);
scene.background = texture;

// 加载 glTF 模型
const gltfLoader = new THREE.GLTFLoader();
gltfLoader.load('path/to/your/model.glb', function (gltf) {
    scene.add(gltf.scene);
    renderer.render(scene, camera);
});

// 渲染场景
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
```

#### 解释

- 使用 `THREE.CubeTextureLoader` 加载天空盒贴图，将六张图像指定给天空盒的六个面（正向和负向的 X, Y, Z 面）。
- 将背景设置为加载的天空盒，这样场景将会有一个全景背景。
- 加载并显示你的 glTF 模型。

### 3. **使用 `THREE.Sky` 创建动态的天空背景**

如果你想要一个动态的天空背景（例如，日夜变化的背景），你可以使用 `THREE.Sky` 库，它可以渲染一个动态的天空，类似于大气背景。

首先，你需要安装 `three-sky` 库：

```bash
npm install three-sky
```

然后在代码中使用它：

```javascript
import * as THREE from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky.js';

// 创建场景
const scene = new THREE.Scene();

// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建天空
const sky = new Sky();
sky.scale.set(450000, 450000, 450000);
scene.add(sky);

const skyUniforms = sky.material.uniforms;
skyUniforms['turbidity'].value = 10;
skyUniforms['rayleigh'].value = 2;
skyUniforms['mieCoefficient'].value = 0.005;
skyUniforms['mieDirectionalG'].value = 0.8;

// 加载 glTF 模型
const loader = new THREE.GLTFLoader();
loader.load('path/to/your/model.glb', function (gltf) {
    scene.add(gltf.scene);
    renderer.render(scene, camera);
});

// 渲染场景
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
```

#### 解释

- 使用 `THREE.Sky` 对象来创建一个动态天空，它会根据不同的参数（如 `turbidity`, `rayleigh`, `mieCoefficient` 等）变化。
- 这会创建一个类似大气层的效果，适用于需要动态或日夜变化背景的场景。

### 4. **修改 glTF Viewer 的背景**

如果你在使用 `gltf-viewer` 库（如 `three-gltf-viewer`），你可以通过配置 `background` 属性来添加背景。通常，`gltf-viewer` 会有一个背景设置项，可以通过修改它来实现地面或天空背景的效果。

例如，在 `three-gltf-viewer` 中，你可以这样做：

```javascript
import { GLTFViewer } from 'three-gltf-viewer';

// 配置 viewer
const viewer = new GLTFViewer({
    canvas: document.querySelector('#myCanvas'),
    background: '#87CEEB',  // 设置背景颜色（天蓝色）
    skybox: true,  // 启用天空盒
    ground: true,  // 启用地面背景
});

viewer.load('path/to/your/model.glb');
```

如果 `gltf-viewer` 没有直接支持地面背景的选项，可以在 `three.js` 的基础上手动添加地面或天空盒。

---

通过以上方法，你可以根据需求为 `gltf-viewer` 添加合适的全局背景，增加场景的视觉效果。如果你有更具体的需求，随时可以告诉我，我可以帮助你调整代码。
