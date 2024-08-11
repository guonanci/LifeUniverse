<https://github.com/mattdttam/react-native-android-hikvideo-matt/blob/master/hkplayer/HkplayerPlayBackView.js>

# 海康威视的react-native sdk

海康威视（Hikvision）是全球领先的视频监控产品供应商，他们提供了丰富的 SDK（软件开发工具包）用于集成海康威视的设备和服务。不过，海康威视的 SDK 通常针对 Android 和 iOS 的原生开发，而不直接提供针对 React Native 的 SDK。

如果你想在 React Native 中使用海康威视的功能，可以采取以下几种方式：

### 方法一：通过原生模块封装海康威视 SDK

1. **集成海康威视 Android SDK 和 iOS SDK**：
   - 在你的 Android 和 iOS 项目中分别集成海康威视提供的原生 SDK。
   - 你可以从海康威视的官方网站或联系他们的支持团队获取最新的 SDK 以及集成文档。

2. **封装原生模块**：
   - 按照前面介绍的方法创建 React Native 的原生模块，将海康威视 SDK 的功能封装成可以在 JavaScript 中调用的方法。
   - 例如，你可以创建一个原生模块来处理视频流、设备控制或其他功能。

3. **通过 React Native 调用原生模块**：
   - 封装完成后，你可以在 React Native 中通过 JavaScript 调用封装好的原生模块，从而使用海康威视的功能。

### 方法二：使用第三方库

一些社区开发者可能已经创建了封装好的 React Native 模块来使用海康威视的功能，虽然这些库的功能可能有限，但可以作为一个起点。

#### 搜索和安装

- 在 npm 或 GitHub 上搜索相关的第三方库，例如 `react-native-hikvision`，看看是否有可用的封装库。
- 如果有适用的库，可以直接安装并使用它们。

### 方法三：使用 WebView 加载海康威视的 Web SDK

如果海康威视提供了基于 Web 的 SDK（例如基于 WebRTC 的视频监控功能），你可以使用 React Native 的 `WebView` 来加载这些 Web SDK。

#### 使用 WebView

- 使用 `react-native-webview` 加载海康威视的 Web SDK 页面，并通过 Web 接口与设备进行交互。

### 总结

由于 React Native 本身并不提供对特定硬件 SDK 的直接支持，使用海康威视的功能通常需要通过封装原生模块来实现。如果你对 Android 或 iOS 原生开发有一定了解，封装原生模块是最灵活的方法。

如果你需要详细的步骤或具体帮助，例如如何封装某个功能，或者你有特定的需求，请告诉我，我可以提供更具体的指导。

<https://open.hikvision.com/download/5c67f1e2f05948198c909700?type=20>

Android sdk app\src\main\java\com\hikvision\open\app\ui\preview\PlayWindowView.kt
