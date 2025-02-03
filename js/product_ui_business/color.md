颜色名称对照：https://eeweb.top/tool/color_name.html

```less
.colors-lab {
  color: aliceblue;
}
```

https://www.google.com/search?q=%E9%A2%9C%E8%89%B2%E5%90%8D%E7%A7%B0%E5%AF%B9%E7%85%A7%E8%A1%A8&safe=strict&sxsrf=ALeKk02zjLCN3_sTbpjVA7N-QcCW8CkaJA:1618109665852&tbm=isch&source=iu&ictx=1&fir=imnZq7Z-kg52sM%252ChkmU6rwp56NIKM%252C_&vet=1&usg=AI4_-kTNCAKCyUq60Tk4Y-NCg2tSshXuHg&sa=X&ved=2ahUKEwiTrtyemPXvAhWTKqYKHZHnAc0Q9QF6BAgMEAE&biw=1680&bih=946#imgrc=imnZq7Z-kg52sM

http://www.360doc.com/content/10/1006/02/3690377_58725175.shtml

[rgbStr to hexStr](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/475)

3 个步骤

1. 提取 r，g，b
2. 将 r，g，b 转换为 16 进制，不足两位则补 0
3. 组合

4. 提取 r，g，b

## 1 利用 match

```js
const rgb2hex = (sRGB) =>
  sRGB.match(/^(rgb|RGB)\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/);
rgb2hex("rgb(255, 255, 255)");
// ["rgb(255, 255, 255)", "rgb", "255", "255", "255", index: 0, input: "rgb(255, 255, 255)", groups: undefined]
```

## 2 利用 match（2）

利用正则 /\d+/g 获取取所有连着的数字

```js
const rgb2hex = (sRGB) => sRGB.match(/\d+/g);
```

## 3replace+split

观察 rgb（255，255，255）的每一个色值是透过, 连接一起的，所以我们考虑是否能通过 split(',') 拆分出每一个色值，主要考虑两步

- 替换替换 rgb(255, 255, 255) 的部分字符（ rgb 、 ( 、 ) ）为 ''
- 拆分出每一个色值

```js
function rgb2hex(sRGB) {
  const rgb = sRGB.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
  return rgb;
}
rgb2hex("rgb(255, 255, 255)");
// ["255", " 255", " 255"]
rgb2hex("rgb(16, 10, 255)");
// ["16", " 10", " 255"]
```

转换为十六进制，不足补零
可采用：

- (+n).toString(16) 或 Number(n).toString(16)

不足两位补零：

- `('0'+r16).slice(-2)`
- `r16.padStart(2,'0')`
- `(r<16?'0':'')+r16`
- `r16.length < 2 ? '0' + r16 : r16`
- `((1 << 24) + (Number(r) << 16) + (Number(g) << 8) + Number(b)).toString(16).slice(1)`

# 组合

reduce
注意，输出为可为大写（ #FFFFFF ）或小写字符（ #ffffff ），本题为大写

rgb.reduce((acc, cur) => acc + hex, '#').toUpperCase()

总结
把本题拆分成以上三步，选取每步的一种实现方式组合实现本题，最终实现方案多种多样，简单这里列一下 其中的部分组合

组合一
function rgb2hex(sRGB) {
var rgb = sRGB.replace(/(?:\(|\)|rgb|RGB)\*/g, '').split(',')
return rgb.reduce((acc, cur) => {
var hex = (cur < 16? '0':'') + Number(cur).toString(16)
return acc + hex
}, '#').toUpperCase()
}

// 测试
rgb2hex('rgb(255, 255, 255)')
// "#FFFFFF"
rgb2hex('rgb(16, 10, 255)')
// "#100AFF"
组合二
function rgb2hex(rgb) {
const rgb = rgb.match(/\d+/g);
const hex = (n) => {
return ("0" + Number(n).toString(16)).slice(-2);
}
return rgb.reduce((acc, cur) => acc + hex, '#').toUpperCase()
}

// 测试
rgb2hex('rgb(255, 255, 255)')
// "#FFFFFF"
rgb2hex('rgb(16, 10, 255)')
// "#100AFF"

灰色不是棕色（特别是针对，带有生物性质的，比如眼白）

# 生成随机十六进制
随机生成十六进制颜色值
```js
const randomHexColor=()=>`#${Math.floor(Math.random()*0xffffff).toString(16).padEnd(6,'0')}`
```
# 将RGB转换为十六进制
```js
const rgbToHex=(r,g,b)=>'#'+((1 << 24)+(r<<16)+(g<<8)+b).toString(16).slice(1)
rgbToHex(255,255,255)//#ffffff

```

# 有关颜色的工具网站

比如要分十个等级计算每个等级点的颜色值
<https://photokit.com/colors/color-gradient/?lang=zh>
