A powerful rendering engine which providing Canvas and SVG draw for G2 & G6
G 是一款易用、高效、强大的 2D 可视化渲染引擎，提供 Canvas、SVG 等多种渲染方式的实现。目前，已有多个顶级的可视化开源项目基于 G 开发，比如图形语法库 G2、图可视化库 G6 等。

特性

- 强大、可扩展的渲染能力，并内置常用的基础图形。
- 极致的渲染性能，支持大数据量的可视化场景
- 完整模拟浏览器 DOM 的事件，与原生事件的表现无差异
- 流畅的动画实现，以及丰富的配置接口
- 同时提供 Canvas 和 SVG 版本的实现，且两者的 API 基本保持一致

```js
import { Canvas } from '@antv/g-canvas'
// import { Canvas } from '@antv/g-svg'
const cvs = new Canvas({
  container: 'c1',
  width: 500,
  height: 500,
})

const group = canvas.addGroup()
group.addShape('circle', {
  attrs: {
    x: 100,
    y: 100,
    r: 50,
    fill: 'red',
    stroke: 'blue',
    lineWidth: 5,
  },
})
```

# 性能优化

减少 drawCall 是提升渲染性能的常用手段，应该在每一帧中尽可能减少提交的绘制命令数量，有三种优化手段：

## 脏矩形渲染

仅 g-canvas/g-webgl 下生效
G4.0 已经支持了**局部渲染**，ECharts5 中称之为**脏矩形渲染**。很多 2D 渲染引擎都支持他。例如 Egret。浏览器在绘制页面内容时也使用了这一策略。
例如下图 Shape 的位置发生了移动，通过包围盒计算得到了两个待重绘的脏矩形，

## Instance 绘制

## 剔除策略

对于视口之外的对象，我们并不希望渲染它们。

g-canvas
仍然可以通过 R-tree 加速结构查询视口内可见的对象。

g-webgl
背面剔除，简单通过 WebGL 全局状态实现
视锥剔除，基于 masking 等优化手段，详见
⚠️ 遮挡查询需要 WebGL2 暂不支持。

Offscreen Canvas
⚠️ 仅 g-webgl 下生效。
https://doc.babylonjs.com/divingDeeper/scene/offscreenCanvas babylon.js

当主线程需要处理较重的交互时，我们可以将 Canvas 的渲染工作交给 Worker 完成，主线程仅负责同步结果。 目前很多渲染引擎已经支持，例如 Babylon.js。

为了支持该特性，引擎本身并不需要做很多改造，只要能够保证 g-webgl 能在 Worker 中运行即可。

局限性
由于运行在 Worker 环境，用户需要手动处理一些 DOM 相关的事件。

# 路线图

https://g.antv.vision/zh/docs/guide/roadmap
g-core 中各个核心系统实现，每一帧按优先级顺序执行
Timeline (进度)✅ 动画系统，通过 shape.animate()触发对 Shape 属性的插值更新
AABB ✅ 包围盒计算系统，计算当前最小重绘区域（脏矩形）
SceneGraph ✅ 场景图系统，维护 Shape、Group 间层次关系，同事处理变换
Culling ✅ 剔除系统，供上层自定义剔除策略，例如 g-webgl 中基于视锥剔除策略
Renderer ✅ 渲染系统，供上层自定义渲染服务实现
Event 事件系统，通过对图形的拾取完成事件冒泡
基础图形迁移、实现
| 图形 | g-canvas | g-svg | g-webgl |
| ---- | :--: | ---- | ---- |
| Circle | ✅ | | ✅ |
| Ellipse | ✅ | | ✅ |
| Image | ✅ | | ✅ |
| Rect | | | |
| Text | | | |
| Line | | | |
| Path | | | |
| Polygon | | | |
| Polyline | | | |
| Marker | | | |

## 新增特性

脏矩形渲染

```js
{
  dirtyRectangle: {
    enable: true,
    debug: true,
  }
}
```

可以在运行时关闭：

```js
canvas.setConfig({
  dirtyRectangle: {
    enable: false,
  },
})
```

## Group

### Transform

提供在 2D 世界坐标系和局部坐标系下的变换能力

https://g.antv.vision/zh/docs/guide/roadmap
https://github.com/antvis/g
