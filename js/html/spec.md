https://juejin.cn/post/6846687599281569800

使用 HTML5 的 doctype 来启用标准模式
```html
<!DOCTYPE html>
```
统一使用 UTF-8 编码
```html
<meta charset="utf-8" />
```
优先使用 IE 最新版本和 Chrome
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
```
移动设备添加 viewport
```html
<meta name="viewport" content="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no" />

```
自闭合标签无需闭合,例如： img， input， br， hr 等
```html
<img src="https://xxx.png" alt="Google" />
<br />
<input type="text" name="title" />
```
使用语义化标签
html 的标签能使用语义化的，尽量使用语义化标签，避免一个页面都是 div 或者 p 标签
```html
<!-- bad -->
<div>
  <p></p>
</div>

<!-- good -->
<header></header>
<footer></footer>

```
属性顺序要求
HTML 属性应该按照特定的顺序出现以保证易读性。
```html
id
class
name
data-xxx
src, for, type, href
title, alt
aria-xxx, role

```
