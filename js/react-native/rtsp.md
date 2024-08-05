# react-native 播放websocket rtsp视频流的组件

在 React Native 中播放 RTSP 视频流通常需要借助第三方库来处理视频流的解码和渲染。`react-native-video` 是一个常用的视频播放库，但它不直接支持 RTSP。为了播放 RTSP 流，可以使用 `react-native-vlc-media-player`，它基于 VLC 播放器，支持各种视频流，包括 RTSP。

### 步骤 1：安装 `react-native-vlc-media-player`

首先，安装 `react-native-vlc-media-player`：

```bash
npm install react-native-vlc-media-player
```

或使用 Yarn：

```bash
yarn add react-native-vlc-media-player
```

### 步骤 2：配置项目

#### Android 配置

确保你已经按照 `react-native-vlc-media-player` 的[安装指南](https://github.com/ghondar/react-native-vlc-media-player#installation)进行配置，尤其是 Android 项目的配置。

在 `android/app/build.gradle` 中添加：

```gradle
android {
    ...
    defaultConfig {
        ...
        missingDimensionStrategy 'react-native-vlc-media-player', 'default'
    }
}
```

在 `android/settings.gradle` 中添加：

```gradle
include ':react-native-vlc-media-player'
project(':react-native-vlc-media-player').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vlc-media-player/android')
```

在 `android/app/src/main/java/com/<your_project>/MainApplication.java` 中注册模块：

```java
import com.yuanzhou.vlc.ReactVlcPlayerPackage;

@Override
protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new ReactVlcPlayerPackage() // 添加这一行
    );
}
```

#### iOS 配置

确保在 `Podfile` 中包含：

```ruby
pod 'MobileVLCKit', '3.3.10' # 或者最新版本
```

然后运行：

```bash
cd ios
pod install
```

### 步骤 3：使用 `react-native-vlc-media-player` 播放 RTSP 流

在你的 React Native 组件中，使用 `VLCPlayer` 来播放 RTSP 视频流。

```jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import VLCPlayer from 'react-native-vlc-media-player';

const RTSPStreamPlayer = () => {
  return (
    <View style={styles.container}>
      <VLCPlayer
        style={styles.video}
        source={{
          uri: 'rtsp://<your-rtsp-url>',
          autoplay: true,
          initOptions: ['--network-caching=150'],
        }}
        onBuffering={(e) => console.log('Buffering:', e)}
        onError={(e) => console.log('Error:', e)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default RTSPStreamPlayer;
```

### 解释

1. **安装和配置**：
   - 按照库的说明进行安装和配置，确保在 Android 和 iOS 上都正确配置了 `react-native-vlc-media-player`。

2. **使用 `VLCPlayer` 播放 RTSP 流**：
   - `VLCPlayer` 组件接受一个 `source` prop，其中 `uri` 是 RTSP 流的 URL。
   - `initOptions` 可以配置 VLC 的初始化选项，例如 `--network-caching` 以减少延迟。

3. **样式和布局**：
   - 通过 `StyleSheet` 设置视频播放器的样式，使其全屏显示或按需调整大小。

通过这些步骤，你应该能够在 React Native 应用中播放 RTSP 视频流。如果遇到问题，请确保你已正确配置了所有依赖项，并查看 `react-native-vlc-media-player` 的文档以获取更多详细信息和故障排除步骤。



在 React Native 中使用 WebSocket 进行实时通信时，可能会遇到各种错误，包括你提到的 `{"isTrusted": false, "message": null}`。这个错误信息通常来自于网络连接问题或 WebSocket 服务器配置问题。

要解决这个问题，可以按照以下步骤进行排查和调试：

### 步骤 1：检查 WebSocket 服务器 URL

确保 WebSocket 服务器 URL 是正确的，并且服务器正在运行。例如，确保使用正确的 `ws://` 或 `wss://` 前缀：

```jsx
const WS_URL = 'wss://your-websocket-url';
```

### 步骤 2：检查服务器端配置

确保 WebSocket 服务器正确配置，并且可以接受来自客户端的连接。确认服务器在正确的端口上监听并允许跨域请求（CORS）。

### 步骤 3：检查网络连接

确保设备（模拟器或真实设备）具有有效的网络连接，并且能够访问 WebSocket 服务器的地址。可以尝试使用 `ping` 命令或其他网络工具检查连接。

### 步骤 4：添加错误处理和日志

在 WebSocket 客户端代码中添加更多错误处理和日志记录，以便更详细地了解错误的原因。

```jsx
import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import Video from 'react-native-video';
import { Buffer } from 'buffer';
import RNFetchBlob from 'rn-fetch-blob';

const WS_URL = 'wss://your-websocket-url';

const WebSocketVideoPlayer = () => {
  const [videoUri, setVideoUri] = useState(null);
  const ws = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    ws.current = new WebSocket(WS_URL);

    ws.current.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.current.onmessage = (event) => {
      if (event.data instanceof Blob) {
        const reader = new FileReader();
        reader.onload = () => {
          const buffer = Buffer.from(reader.result);
          const path = `${RNFetchBlob.fs.dirs.CacheDir}/temp-video.mp4`;
          RNFetchBlob.fs.writeFile(path, buffer.toString('base64'), 'base64')
            .then(() => {
              setVideoUri(path);
              setLoading(false);
            })
            .catch((error) => console.error('File write error:', error));
        };
        reader.readAsArrayBuffer(event.data);
      }
    };

    ws.current.onerror = (event) => {
      console.error('WebSocket error', event);
      setError(event.message);
    };

    ws.current.onclose = () => {
      console.log('WebSocket closed');
    };

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Video
          source={{ uri: videoUri }}
          style={styles.video}
          controls={true}
          resizeMode="contain"
        />
      )}
      {error && <Text style={styles.errorText}>Error: {error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  errorText: {
    color: 'red',
    marginTop: 20,
  },
});

export default WebSocketVideoPlayer;
```

### 步骤 5：使用调试工具

使用调试工具（如 React Native Debugger）来查看完整的错误消息和堆栈跟踪。这样可以帮助你找出更多细节和问题的根源。

### 步骤 6：确保使用安全的 WebSocket 连接

如果你的 WebSocket 服务器使用 `wss://`（安全 WebSocket），确保服务器的 SSL 证书是正确的，并且客户端能够验证该证书。如果证书不被信任，可能会导致连接失败。

### 步骤 7：尝试简单的 WebSocket 客户端测试

创建一个简单的 WebSocket 客户端测试应用，连接到相同的 WebSocket 服务器，查看是否能成功连接并接收消息。这可以帮助你确认问题是否出在服务器配置或网络连接。

```jsx
import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const WS_URL = 'wss://your-websocket-url';

const WebSocketTest = () => {
  const ws = useRef(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    ws.current = new WebSocket(WS_URL);

    ws.current.onopen = () => {
      console.log('WebSocket connected');
      ws.current.send('Hello Server');
    };

    ws.current.onmessage = (event) => {
      console.log('Message from server:', event.data);
      setMessage(event.data);
    };

    ws.current.onerror = (event) => {
      console.error('WebSocket error:', event);
    };

    ws.current.onclose = () => {
      console.log('WebSocket closed');
    };

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Message from server: {message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WebSocketTest;
```

通过这些步骤和检查，你应该能够更好地诊断和解决 WebSocket 错误 `{"isTrusted": false, "message": null}`。
