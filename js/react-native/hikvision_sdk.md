<https://github.com/mattdttam/react-native-android-hikvideo-matt/blob/master/hkplayer/HkplayerPlayBackView.js>

# react-native怎么引入Android Module？

在 React Native 中，引入和使用原生 Android 模块是通过创建一个原生模块并在 JavaScript 中调用它来实现的。以下是详细的步骤：

### 步骤 1：创建一个原生 Android 模块

1. **打开你的 React Native 项目**，导航到 `android/app/src/main/java/com/yourprojectname/` 文件夹。

2. **创建一个新的 Java 文件**。在这个文件夹下新建一个 `modules` 文件夹（可以自定义名字），并在其中创建一个新的 Java 文件，例如 `MyModule.java`。

3. **编写你的 Java 代码**：

```java
package com.yourprojectname.modules;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class MyModule extends ReactContextBaseJavaModule {

    private static ReactApplicationContext reactContext;

    MyModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "MyModule";
    }

    @ReactMethod
    public void showToast(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }
}
```

- `getName()` 方法返回模块的名称，它将用于 JavaScript 端引用此模块。
- `@ReactMethod` 注解的方法将可从 JavaScript 调用。

4. **创建模块包**：

在同一文件夹中（或 `com.yourprojectname` 文件夹下），创建一个新的 Java 文件，命名为 `MyPackage.java`，用于注册你的模块。

```java
package com.yourprojectname.modules;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MyPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new MyModule(reactContext));
        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
```

### 步骤 2：注册原生模块

1. **在 `MainApplication.java` 中注册你的模块**：

打开 `android/app/src/main/java/com/yourprojectname/MainApplication.java` 文件，导入你的 `MyPackage` 并将其添加到 `getPackages()` 方法中。

```java
import com.yourprojectname.modules.MyPackage;

@Override
protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new MyPackage() // 添加你的模块包
    );
}
```

### 步骤 3：在 JavaScript 中调用原生模块

1. **创建 JavaScript 模块**：

在你的 JavaScript 文件中，通过 `NativeModules` 访问原生模块。

```javascript
import { NativeModules } from 'react-native';

const { MyModule } = NativeModules;

// 调用原生方法
MyModule.showToast('Hello from React Native!', 1);
```

### 步骤 4：重建应用

在引入原生模块后，需要重新构建你的应用以使更改生效。

```bash
npx react-native run-android
```

### 注意事项

- **权限问题**：如果你的模块需要某些权限（如相机、存储等），请确保在 `AndroidManifest.xml` 中正确配置这些权限。
- **异步操作**：如果你的原生方法涉及异步操作（如网络请求），可以使用 `Promise` 或 `Callback` 在 JavaScript 端处理。

通过这些步骤，你可以在 React Native 中成功引入并使用原生 Android 模块。如果你遇到任何问题或需要进一步帮助，请告诉我！

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

# 如何开发一个海康威视react-native package

开发一个用于海康威视的 React Native package 涉及以下几个步骤：你需要熟悉 React Native 的原生模块开发、Java 和 Swift/Objective-C 编程，以及海康威视的 SDK 使用方法。以下是一个概述：

### 1. 设置 React Native 项目环境

首先，确保你已经配置好 React Native 的开发环境：

1. 安装 Node.js 和 npm。
2. 使用 `npx react-native init YourProjectName` 创建一个新的 React Native 项目。
3. 确保项目可以在 Android 和 iOS 模拟器或设备上正常运行。

### 2. 获取并集成海康威视 SDK

#### Android 平台

1. 从海康威视官网下载 Android SDK 并解压。
2. 将 SDK 的 `.jar` 文件和 `.so` 文件添加到你的 Android 项目中：
   - `.jar` 文件放在 `android/app/libs/` 目录下。
   - `.so` 文件放在 `android/app/src/main/jniLibs/` 目录下。

3. 编辑 `android/app/build.gradle` 文件，确保包含了正确的依赖项和配置。

#### iOS 平台

1. 从海康威视官网下载 iOS SDK 并解压。
2. 将 SDK 的 `.framework` 文件添加到你的 iOS 项目中：
   - 打开 `ios/YourProjectName.xcworkspace`。
   - 将 `.framework` 文件拖到 Xcode 的项目导航中，确保它们包含在目标中。

3. 编辑 `Podfile` 文件并添加必要的依赖项。

### 3. 创建原生模块

#### Android 端

1. 在 `android/app/src/main/java/com/yourprojectname/` 目录下创建一个新的 Java 类，例如 `HikvisionModule.java`。
2. 在这个类中，集成海康威视 SDK 的功能。例如，连接到摄像头，处理视频流等。
3. 创建一个 `ReactPackage` 来将模块暴露给 React Native：

```java
package com.yourprojectname;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class HikvisionPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new HikvisionModule(reactContext));
        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
```

#### iOS 端

1. 在 `ios/YourProjectName` 目录下创建一个新的 Objective-C 或 Swift 类，例如 `HikvisionModule.m`。
2. 在这个类中，集成海康威视 SDK 的功能。
3. 使用 `RCT_EXPORT_METHOD` 将原生方法暴露给 JavaScript。

### 4. 暴露方法给 JavaScript

在 `HikvisionModule.java` 和 `HikvisionModule.m` 中，使用适当的注解或宏将你的方法暴露给 JavaScript。例如：

```java
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class HikvisionModule extends ReactContextBaseJavaModule {
    HikvisionModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "HikvisionModule";
    }

    @ReactMethod
    public void initialize(String deviceIP, Promise promise) {
        // 初始化海康威视设备的逻辑
        promise.resolve("Initialization successful");
    }
}
```

### 5. 在 JavaScript 中使用原生模块

完成原生模块的创建和注册后，你可以在 JavaScript 中导入并使用这个模块：

```javascript
import { NativeModules } from 'react-native';

const { HikvisionModule } = NativeModules;

HikvisionModule.initialize("192.168.0.100")
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

### 6. 测试与调试

- 使用 Android 和 iOS 模拟器/真机进行测试，确保模块功能正常。
- 在测试过程中，使用 `Logcat` 和 Xcode 的调试工具来监控和修复潜在的错误。

### 7. 发布你的 React Native Package

如果你打算将这个 package 分享给其他开发者，你可以将其发布到 npm 上：

1. 创建一个 README 文件，详细说明模块的使用方法和功能。
2. 确保你的 `package.json` 文件配置正确，并包含所需的依赖项。
3. 使用 `npm publish` 发布你的 package。

### 总结

开发一个 React Native package 来集成海康威视的功能是一个涉及 Android、iOS 原生开发与 React Native 的综合性工作。如果你对某个具体步骤有疑问，或者需要进一步的帮助，请告诉我！

<https://github.com/mattdttam/react-native-android-hikvideo-matt/blob/master/android/build.gradle>

```kt
// app\src\main\java\com\hikvision\open\app\ui\preview\PlayViewModel.kt
package com.hikvision.open.app.ui.preview

import android.graphics.Rect
import android.graphics.SurfaceTexture
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.hikvision.hatomplayer.DefaultHatomPlayer
import com.hikvision.hatomplayer.HatomPlayer
import com.hikvision.hatomplayer.PlayCallback
import com.hikvision.hatomplayer.PlayConfig
import com.hikvision.hatomplayer.core.*
import com.hikvision.hatomplayer.util.FileUtil
import com.hikvision.hpsclient.WaterConfig
import com.hikvision.hpsclient.WaterOffset
import com.hikvision.open.app.model.PlayResult
import com.hikvision.open.app.model.PlayStatus
import com.hikvision.open.app.utils.*
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.withContext
import java.io.File
import java.io.FileNotFoundException
import java.util.*

/**
 * <p> 预览ViewModel </p>
 * @author 段自航 2021/7/15 15:43
 * @version V1.0
 */
class PlayViewModel : ViewModel(), PlayCallback.PlayStatusCallback, PlayCallback.VoiceTalkCallback {

    /**
     * 播放结果
     */
    private val _previewResult = MutableLiveData<PlayResult>()
    val playResult: LiveData<PlayResult> = _previewResult

    /**
     * 对讲结果
     */
    private val _talkResult = MutableLiveData<PlayResult>()
    val talkResult: LiveData<PlayResult> = _talkResult

    /**
     * 录像结果
     */
    var recordFilePath = ""

    /**
     * 设置播放显示界面
     */
    var surfaceTexture: SurfaceTexture? = null

    /**
     * 硬解码是否开启  true-硬解码  false-软解码
     */
    var hardDecode: Boolean = false

    /**
     * 智能信息是否展示
     */
    var smartDetect: Boolean = false

    /**
     * 播放url
     */
    var playUrl = ""

    private val formatCalendar = Calendar.getInstance()

    var startTime = 0L

    var endTime = 0L

    /**
     * 转码句柄
     */
    private var formatHandle = 0L


    /*播放状态，一开始默认为空闲状态*/
    private var playStatus = PlayStatus.IDLE

    /**
     * 播放器
     */
    private val hatomPlayer: HatomPlayer by lazy {
        DefaultHatomPlayer()
    }

    private var playConfig = PlayConfig()

    /**
     * 录像转码结果
     */
    private val _saveResult = MutableLiveData<Int>()
    val saveResult: LiveData<Int> = _saveResult

    /**
     * 录像转码客户端
     */
    private val client by lazy {
        FileTransClient()
    }

    /**
     * 获取播放状态
     */
    fun getPlayStatus(): PlayStatus {
        return playStatus
    }

    /**
     * 设置字体大小
     */
    fun setPrivateFatio(fRatio: Float) {
        if (playStatus != PlayStatus.PLAYING) {
            return
        }
        hatomPlayer.setPrivateFatio(fRatio)
        return
    }

    /**
     * 抓图
     */
    fun capture(): String {
        if (playStatus != PlayStatus.PLAYING) {
            return ""
        }
        val path = MyUtils.getCaptureImagePath(Utils.getApp())
        hatomPlayer.screenshot(path, "")
        return path
    }

    /**
     * 开启录像
     */
    fun startRecord(): Boolean {
        if (playStatus != PlayStatus.PLAYING) {
            return false
        }
        val path = MyUtils.getLocalRecordPath(Utils.getApp())
        //todo 这里我们提供带有录像转码功能的接口: ()
        //todo 同时保留了原有接口 hatomPlayer.startRecord(path)，此接口不进行转码

        // 转码后，录像文件可以正常使用播放器播放，
        // 不进行转码，只能使用视频SDK进行播放。
//        val result = hatomPlayer.startRecordAndConvert(path) ?: -1 == 0
        val result = hatomPlayer.startRecord(path) ?: -1 == 0
        if (result) {
            recordFilePath = path
        }
        return result
    }

    /**
     * 停止录像
     */
    fun stopRecord() {
        if (playStatus != PlayStatus.PLAYING) {
            return
        }
        hatomPlayer.stopRecord()
    }

    /**
     * 转码视频
     */
    fun transVideo() {
        launch {
            flow {
                val videoFile = File(recordFilePath)
                val targetPath = getTargetFilePath(videoFile)
                if (!FileUtil.isFileExists(targetPath)) {
                    if (!realTransVideo(videoFile, targetPath)) {
                        //触发异常提示
                        throw FileNotFoundException()
                    } else {
                        FileUtil.deleteFile(recordFilePath)
                        recordFilePath = targetPath
                    }
                }
                emit(true)
            }.onStart {
                _saveResult.postValue(0)
            }.flowOn(Dispatchers.IO).catch {
                _saveResult.postValue(-1)
            }.collectLatest {
                _saveResult.postValue(1)
            }
        }
    }

    private fun getTargetFilePath(file: File): String {
        val cacheFilePath = Utils.getApp().externalCacheDir?.absolutePath ?: ""
        val targetFile = File(cacheFilePath, "file")
        if (!targetFile.exists()) {
            targetFile.mkdir()
        }
        return "$cacheFilePath/file/${file.name}"
    }

    /**
     * 文件转换
     */
    private suspend fun realTransVideo(video: File, targetPath: String): Boolean {
        var result = client.create()
        if (result == -1) {
            return false
        }
        result = client.start(video.absolutePath, targetPath)
        if (result == -1) {
            return false
        }
        var percent = 0f
        while (percent < 1f) {
            percent = client.getProgress()
        }
        client.stop()
        client.destroy()
        return true
    }

    /**
     * 开启预览
     */
    fun startPreview(url: String) {
        playUrl = url
        playConfig.secretKey = null
        playConfig.privateData = smartDetect
        playConfig.hardDecode = hardDecode
        val offset = arrayListOf<WaterOffset>()
        val fontWidth = 5
        val fontHeight = 35
        val content = arrayListOf<String>()
        content.add("自定义水印")
        offset.add(WaterOffset(500, 160))
        playConfig.waterConfig = WaterConfig(1, content, offset, fontWidth, fontHeight)
        playConfig.ttfPath = FileUtil.getExternalAppFilesPath() + "/font/songti.ttf"
        hatomPlayer.setSurfaceTexture(surfaceTexture)
        hatomPlayer.setPlayStatusCallback(this)
        playStatus = PlayStatus.LOADING
        val header = HashMap<String, String>()
        // 解决自定义水印不展示问题
        header[HeaderParams.TOKEN] = "s"
        launchOnUI {
            flow {
                hatomPlayer.setPlayConfig(playConfig)
                hatomPlayer.setDataSource(playUrl, header)
                hatomPlayer.start()
                emit(true)
            }.flowOn(Dispatchers.IO).catch { e ->
                e.printStackTrace()
                onPlayerStatus(PlayCallback.Status.FAILED, "-1")
            }.collect()
        }
    }

    /**
     * 切换码流类型
     */
    fun changeStream(quality: Quality, url: String) {
        playUrl = url
        playConfig.secretKey = null
        playConfig.privateData = smartDetect
        playConfig.hardDecode = hardDecode
        val offset = arrayListOf<WaterOffset>()
        val fontWidth = 5
        val fontHeight = 35
        val content = arrayListOf<String>()
        content.add("自定义水印")
        offset.add(WaterOffset(500, 160))
        playConfig.waterConfig = WaterConfig(1, content, offset, fontWidth, fontHeight)
        playConfig.ttfPath = FileUtil.getExternalAppFilesPath() + "/font/songti.ttf"
        hatomPlayer.setSurfaceTexture(surfaceTexture)
        hatomPlayer.setPlayStatusCallback(this)
        playStatus = PlayStatus.LOADING
        val header = HashMap<String, String>()
        // 解决自定义水印不展示问题
        header[HeaderParams.TOKEN] = "s"
        launchOnUI {
            flow {
                hatomPlayer.setPlayConfig(playConfig)
                hatomPlayer.setDataSource(playUrl, header)
                hatomPlayer.changeStream(quality)
                emit(true)
            }.flowOn(Dispatchers.IO).catch { e ->
                e.printStackTrace()
                onPlayerStatus(PlayCallback.Status.FAILED, "-1")
            }.collect()
        }
    }

    /**
     * 停止播放
     */
    fun stopPlay() {
        if (playStatus == PlayStatus.IDLE || playStatus == PlayStatus.STOP) return
        playStatus = PlayStatus.STOP
        launchOnUI {
            flow {
                emit(hatomPlayer.stop())
            }.flowOn(Dispatchers.IO).catch { e ->
                e.printStackTrace()
            }.collect()
        }
    }

    /**
     * 开启对讲
     */
    fun openVoiceTalk(url: String) {
        launchOnUI {
            hatomPlayer.setVoiceStatusCallback(this@PlayViewModel)
            withContext(Dispatchers.IO) {
                hatomPlayer.setPlayConfig(playConfig)
                hatomPlayer.setVoiceDataSource(url, null)
                hatomPlayer.startVoiceTalk()
            }
        }
    }

    /**
     * 关闭对讲
     */
    fun closeVoiceTalk() {
        launchOnUI {
            withContext(Dispatchers.IO) {
                hatomPlayer.stopVoiceTalk()
            }
        }
    }

    /**
     * 开启回放
     */
    fun startPlayback(url: String, startTime: Long, endTime: Long) {
        playUrl = url
        this.startTime = startTime
        this.endTime = endTime
        playConfig.secretKey = null
        playConfig.privateData = smartDetect
        playConfig.hardDecode = hardDecode
        val offset = arrayListOf<WaterOffset>()
        val fontWidth = 5
        val fontHeight = 35
        val content = arrayListOf<String>()
        content.add("自定义水印")
        offset.add(WaterOffset(500, 160))
        playConfig.waterConfig = WaterConfig(1, content, offset, fontWidth, fontHeight)
        playConfig.ttfPath = FileUtil.getExternalAppFilesPath() + "/font/songti.ttf"
        val header = HashMap<String, String>()
        formatCalendar.timeInMillis = startTime
        header[HeaderParams.START_TIME] =
            CalendarUtil.calendarToyyyy_MM_dd_T_HH_mm_SSSZ(formatCalendar)
        formatCalendar.timeInMillis = endTime
        header[HeaderParams.END_TIME] =
            CalendarUtil.calendarToyyyy_MM_dd_T_HH_mm_SSSZ(formatCalendar)
        // 解决自定义水印不展示问题
        header[HeaderParams.TOKEN] = "s"
        hatomPlayer.setSurfaceTexture(surfaceTexture)
        hatomPlayer.setPlayStatusCallback(this)
        playStatus = PlayStatus.LOADING
        launchOnUI {
            flow {
                hatomPlayer.setPlayConfig(playConfig)
                hatomPlayer.setDataSource(playUrl, header)
                hatomPlayer.start()
                emit(true)
            }.flowOn(Dispatchers.IO).catch { cause ->
                cause.printStackTrace()
                onPlayerStatus(PlayCallback.Status.FAILED, "-1")
            }.collect()
        }
    }

    /**
     * 获取回放的osd时间
     */
    fun getOSDTime(): Long {
        if (playStatus != PlayStatus.PLAYING) {
            return -1L
        }
        return hatomPlayer.osdTime ?: -1L
    }

    /**
     * 获取总流量
     */
    fun getTotalTraffic(): Long {
        if (playStatus != PlayStatus.PLAYING) {
            return 0L
        }
        return hatomPlayer.totalTraffic ?: -1L
    }

    /**
     * 暂停
     */
    fun pause(): Boolean {
        if (playStatus != PlayStatus.PLAYING) {
            return false
        }
        hatomPlayer.pause() ?: return false
        return true
    }

    /**
     * 恢复播放
     */
    fun resume(): Boolean {
        if (playStatus != PlayStatus.PLAYING) {
            return false
        }
        hatomPlayer.resume() ?: return false
        return true
    }

    /**
     * 设置倍速
     */
    fun setPlaybackSpeed(speed: PlaybackSpeed) {
        if (playStatus != PlayStatus.PLAYING) {
            return
        }
        hatomPlayer.playbackSpeed = speed
    }

    /**
     * 获取播放速度
     */
    fun getPlaybackSpeed(): PlaybackSpeed {
        if (playStatus != PlayStatus.PLAYING) {
            return PlaybackSpeed.NORMAL
        }
        return hatomPlayer.playbackSpeed ?: PlaybackSpeed.NORMAL
    }

    /**
     * 拖动回放
     */
    fun seekPlayback(seekTime: Long) {
        if (playStatus == PlayStatus.IDLE) {
            return
        }
        launchOnUI {
            flow {
                formatCalendar.timeInMillis = seekTime
                hatomPlayer.seekPlayback(
                    CalendarUtil.calendarToyyyy_MM_dd_T_HH_mm_SSSZ(
                        formatCalendar
                    )
                )
                emit(true)
            }.flowOn(Dispatchers.IO).catch { cause ->
                cause.printStackTrace()
            }.collect()

        }
    }

    /**
     * 开启电子放大
     */
    fun openDigitalZoom(original: Rect, current: Rect): Boolean {
        if (playStatus != PlayStatus.PLAYING) {
            return false
        }
        return (hatomPlayer.openDigitalZoom(original, current) ?: -1) == 0
    }

    /**
     * 关闭电子放大
     */
    fun closeDigitalZoom(): Boolean {
        if (playStatus != PlayStatus.PLAYING) {
            return false
        }
        return (hatomPlayer.closeDigitalZoom() ?: -1) == 0
    }

    /**
     * 开启或关闭鱼眼
     */
    fun setFishEyeEnable(isOpen: Boolean): Boolean {
        if (playStatus != PlayStatus.PLAYING) {
            return false
        }
        return (hatomPlayer.setFishEyeEnable(isOpen) ?: -1) == 0
    }

    /**
     * 设置鱼眼矫正模式
     * 这里的安装类型影响到可以用的鱼眼模式，顶装不支持维度拉伸，只有壁装支持
     */
    fun setFishEyeMode(
        @CorrectType correctType: Int,
        @PlaceType placeType: Int
    ): Boolean {
        if (playStatus != PlayStatus.PLAYING) {
            return false
        }
        return (hatomPlayer.setFishEyeMode(correctType, placeType) ?: -1) == 0
    }

    /**
     * 设置初始鱼眼PTZ参数
     */
    fun setOriginalPTZParam(
        originalX: Float,
        originalY: Float,
        textureViewWidth: Int,
        textureViewHeight: Int
    ) {
        if (playStatus != PlayStatus.PLAYING) {
            return
        }
        hatomPlayer.setOriginalFECParam(originalX, originalY, textureViewWidth, textureViewHeight)
    }

    /**
     * 根据初始参数处理鱼眼矫正
     */
    fun handleFishEyePTZ(
        isZoom: Boolean,
        zoom: Float,
        zoom3D: Float,
        curX: Float,
        curY: Float
    ): Boolean {
        if (playStatus != PlayStatus.PLAYING) {
            return false
        }
        return hatomPlayer.handleFishEyeCorrect(isZoom, zoom, zoom3D, curX, curY) ?: -1 == 0
    }


    /**
     * 是否开启声音
     */
    fun enableAudio(isOpen: Boolean): Boolean {
        if (playStatus != PlayStatus.PLAYING) {
            return false
        }
        return (hatomPlayer.enableAudio(isOpen) ?: -1) == 0
    }

    /**
     * 获取码流帧率，注意，这个是码流的帧率，并不是设置后的实时帧率，
     * 码流帧率播放成功后，一般不会变
     */
    fun getFrameRate(): Int {
        if (playStatus != PlayStatus.PLAYING) {
            return -1
        }
        return hatomPlayer.getFrameRate()
    }

    /**
     * 设置期待帧率
     */
    fun setExpectedFrameRate(rate: Float): Boolean {
        if (playStatus != PlayStatus.PLAYING) {
            return false
        }
        //硬解下不生效
        if (playConfig.hardDecode) {
            return false
        }
        return hatomPlayer.setExpectedFrameRate(rate) == 0
    }

    /**
     * 设置解码线程数
     */
    fun setDecodeThreadNum(num: Int): Boolean {
        if (playStatus != PlayStatus.PLAYING) {
            return false
        }
        //硬解下不生效
        if (playConfig.hardDecode) {
            return false
        }
        return hatomPlayer.setDecodeThreadNum(num) == 0
    }

    /**播放回调**********************************************/
    override fun onPlayerStatus(status: PlayCallback.Status, errorCode: String) {
        when (status) {
            PlayCallback.Status.SUCCESS -> {
                if (playStatus != PlayStatus.PLAYING) {
                    //播放成功
                    playStatus = PlayStatus.PLAYING
                    _previewResult.postValue(PlayResult(status = PlayCallback.Status.SUCCESS))
                } else {
                    //此时，应该是拖动了时间条后，再次播放成功
                    _previewResult.postValue(
                        PlayResult(
                            status = PlayCallback.Status.SUCCESS,
                            extraCode = PlayResult.PLAYBACK_SEEK_SUCCESS
                        )
                    )
                }
            }
            PlayCallback.Status.FAILED -> {
                //如果当前的状态为空闲或者停止，就不回调
                if (playStatus == PlayStatus.IDLE || playStatus == PlayStatus.STOP) {
                    return
                }
                //播放失败，先关闭播放
                stopPlay()
                playStatus = PlayStatus.FAIL
                _previewResult.postValue(
                    PlayResult(
                        status = PlayCallback.Status.FAILED,
                        errorCode = errorCode
                    )
                )
            }
            PlayCallback.Status.EXCEPTION -> {
                //发生异常，先关闭播放
                stopPlay()
                playStatus = PlayStatus.FAIL
                _previewResult.postValue(
                    PlayResult(
                        status = PlayCallback.Status.FAILED,
                        errorCode = errorCode
                    )
                )
            }
            PlayCallback.Status.FINISH -> {
                stopPlay()
                playStatus = PlayStatus.STOP
                _previewResult.postValue(
                    PlayResult(
                        status = PlayCallback.Status.FINISH
                    )
                )
            }
        }
    }

    /**对讲回调**********************************************/
    override fun onTalkStatus(status: PlayCallback.Status, errorCode: String) {
        when (status) {
            PlayCallback.Status.SUCCESS -> {
                //对讲成功
                _talkResult.postValue(PlayResult(status = PlayCallback.Status.SUCCESS))
            }
            PlayCallback.Status.FAILED -> {
                //对讲失败，先关闭对讲
                closeVoiceTalk()
                _talkResult.postValue(
                    PlayResult(
                        status = PlayCallback.Status.FAILED,
                        errorCode = errorCode
                    )
                )
            }
            PlayCallback.Status.EXCEPTION -> {
                //发生异常，先关闭对讲
                closeVoiceTalk()
                _talkResult.postValue(
                    PlayResult(
                        status = PlayCallback.Status.EXCEPTION,
                        errorCode = errorCode
                    )
                )
            }
            PlayCallback.Status.FINISH -> {
                //什么也不做，因为不会回调这个
            }
        }
    }


}
```
