https://blog.csdn.net/Iloveyougirls/article/details/57452246

```html
<video
     muted
     loop
     autoPlay
     style={{
       display: 'block',
       height: '100%',
       position: 'absolute',
       objectFit: 'cover',
       width: '100%',
       zIndex: -1,
     }}>
     <source
       src='https://magicbi-1302847974.cos.ap-shanghai.myqcloud.com/frontend_resource/video/login.mp4'
       type='video/mp4'
     />
   </video>
```

player DOMException: The play() request was interrupted by a new load request.
(匿名) @ umi.js:1
Promise.catch(异步)
Ie @ umi.js:1
(匿名) @ umi.js:1
setTimeout(异步)
(匿名) @ umi.js:1
ws @ umi.js:1
Xl @ umi.js:1
t.unstable_runWithPriority @ umi.js:1
oa @ umi.js:1
Yl @ umi.js:1
_l @ umi.js:1
(匿名) @ umi.js:1
t.unstable_runWithPriority @ umi.js:1
oa @ umi.js:1
ua @ umi.js:1
ca @ umi.js:1
wl @ umi.js:1
Ro @ umi.js:1
(匿名) @ umi.js:1
d @ umi.js:1
(匿名) @ umi.js:1
(匿名) @ umi.js:1
r @ umi.js:1
s @ umi.js:1
Promise.then(异步)
r @ umi.js:1
s @ umi.js:1
(匿名) @ umi.js:1
(匿名) @ umi.js:1
(匿名) @ umi.js:1
(匿名) @ umi.js:1
ws @ umi.js:1
Xl @ umi.js:1
t.unstable_runWithPriority @ umi.js:1
oa @ umi.js:1
Yl @ umi.js:1
_l @ umi.js:1
(匿名) @ umi.js:1
t.unstable_runWithPriority @ umi.js:1
oa @ umi.js:1
ua @ umi.js:1
ca @ umi.js:1
wl @ umi.js:1
Ro @ umi.js:1
(匿名) @ umi.js:1
d @ umi.js:1
(匿名) @ umi.js:1
(匿名) @ umi.js:1
r @ umi.js:1
s @ umi.js:1
Promise.then(异步)
r @ umi.js:1
s @ umi.js:1
(匿名) @ umi.js:1
(匿名) @ umi.js:1
t @ umi.js:1
e @ umi.js:1
(匿名) @ umi.js:1
ws @ umi.js:1
Xl @ umi.js:1
t.unstable_runWithPriority @ umi.js:1
oa @ umi.js:1
Yl @ umi.js:1
_l @ umi.js:1
(匿名) @ umi.js:1
t.unstable_runWithPriority @ umi.js:1
oa @ umi.js:1
ua @ umi.js:1
ca @ umi.js:1
wl @ umi.js:1
enqueueSetState @ umi.js:1
I.setState @ umi.js:1
(匿名) @ umi.js:1
(匿名) @ umi.js:1
setTimeout(异步)
(匿名) @ umi.js:1
n @ umi.js:1
(匿名) @ umi.js:1
a @ umi.js:1
x @ umi.js:1
(匿名) @ umi.js:1
n @ umi.js:1
D @ umi.js:1
K @ umi.js:1
onClick @ umi.js:1
s @ umi.js:1
p @ umi.js:1
f @ umi.js:1
y @ umi.js:1
pt @ umi.js:1
dt @ umi.js:1
ft @ umi.js:1
It @ umi.js:1
G @ umi.js:1
W @ umi.js:1
ln @ umi.js:1
sn @ umi.js:1
t.unstable_runWithPriority @ umi.js:1
oa @ umi.js:1
P @ umi.js:1
an @ umi.js:1

# H264-H265

flv.js video.js

<https://github.com/ErosZy/WXInlinePlayer?tab=readme-ov-file#%E7%A4%BA%E4%BE%8B>

<https://github.com/EasyDarwin/EasyPlayer.js>

## Jessibuca
<https://github.com/bosscheng/jessibuca-react-demo/tree/v3>

# video.js支持flv吗？

`Video.js`本身并不原生支持FLV（Flash Video）格式。不过，可以通过安装插件来扩展其功能，使其支持FLV视频播放。

有一个常用的插件叫做 [videojs-flvjs](https://github.com/matthew-oates/videojs-flvjs)，它使用 `flv.js` 库来实现 FLV 视频流的播放。`flv.js` 是一个使用 HTML5 `Media Source Extensions` (MSE) 实现的 JavaScript 库，专门用来播放 FLV 格式的视频。

你可以按照以下步骤集成：

1. 安装 `videojs-flvjs` 插件：

   ```bash
   npm install video.js
   npm install videojs-flvjs
   ```

2. 引入和初始化插件：

   ```javascript
   import videojs from 'video.js';
   import 'videojs-flvjs';

   const player = videojs('my-video', {
     techOrder: ['flvjs'],
   });

   player.src({
     type: 'video/flv',
     src: 'your-video-url.flv'
   });
   ```

3. 使用 `video.js` 播放器加载 FLV 格式的视频。

这样，你就可以在 `Video.js` 中播放 FLV 格式的视频了。

如果你没有强烈的需求使用 FLV 格式，考虑使用 MP4 或其他更广泛支持的格式，通常能够获得更好的兼容性和性能。

# 安装这个插件后，可以同时支持flv和mp4吗？

是的，安装 `videojs-flvjs` 插件后，你可以同时支持 FLV 和 MP4 格式的视频。`Video.js` 允许你指定多个视频源格式，播放器会根据浏览器的支持和视频格式自动选择合适的解码器。

为了实现这一点，你可以像下面这样配置多个源格式：

```javascript
import videojs from 'video.js';
import 'videojs-flvjs';

const player = videojs('my-video', {
  techOrder: ['html5', 'flvjs'],  // 优先使用 HTML5 播放器，若不支持则使用 flvjs 播放器
});

player.src([
  {
    type: 'video/mp4',
    src: 'your-video-url.mp4',
  },
  {
    type: 'video/flv',
    src: 'your-video-url.flv',
  },
]);

player.play();
```

在这个例子中：

1. `techOrder` 配置告诉 `Video.js` 首先尝试使用原生 HTML5 播放器（它支持 MP4 等常见格式），如果该格式不支持（例如浏览器不支持 MP4），则会回退到 `flvjs` 来支持 FLV 格式。

2. `src` 配置中提供了 MP4 和 FLV 的两个视频源。`Video.js` 会根据浏览器的支持自动选择哪个格式进行播放。

这样一来，你就能在同一个播放器实例中同时支持 FLV 和 MP4 格式的视频。

需要注意的是，浏览器的兼容性和性能可能会影响 FLV 播放的效果，因为 FLV 格式相比 MP4 格式较少被现代浏览器原生支持，因此通常需要通过 `flv.js` 或其他 JavaScript 库来实现。

# video.js-flv.js
<https://blog.csdn.net/lilongsy/article/details/128508902>
