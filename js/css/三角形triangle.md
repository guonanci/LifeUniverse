用纯CSS创建一个三角形
```css
# demo {
  width:0;
  height:0;
  border-width:20;
  border-style:'solid',
  border-color:transparent transparent red transparent;
 }
```
原理是*边框的相邻连接处，是均匀分布的*的道理。
