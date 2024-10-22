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
