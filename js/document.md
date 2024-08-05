# 检查当前选项卡是否在后台
浏览器使用选项卡 任何网页都可能在后台，用户没有在浏览，怎么快速检测到，你的网页对用户是隐藏还是可见？

```js
const isTabActive=()=>!document.hidden
```
# 检测元素是否处于焦点
```js
const isElementInFocus=el=>el===document.activeElement // activeElement返回文档中当前获得焦点的元素
```
