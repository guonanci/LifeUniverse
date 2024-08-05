# 检测设备类型
使用navigator.userAgent判断是移动还是电脑设备
```js
const judgeDeviceType=()=>/Android|webOS|iPhone|iPad}BlackBerry|IEMobile}operaMini/i.test(navigator.userAgent)?'Mobile':'PC'
```

# 文字复制到剪贴板
Clipboard API的所有操作都是异步的，返回promise对象，不会造成页面卡顿。而且，可以将任意内容（比如图片）放入剪贴板
```js
const copyTxt=async (text)=>await navigator.clipboard.writeText(text)
```


