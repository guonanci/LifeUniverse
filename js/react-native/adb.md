# no devices found
adb devices

react-native run-android --deviceId <your-device-id>

adb kill-server
adb start-server

要有左下角带有复选框的中等大小的弹窗弹出来。




React Native 提供了一个内置的开发者菜单，其中包含多个调试选项。您可以通过摇动设备或使用键盘快捷键访问开发者菜单：

iOS 模拟器：按下 Cmd ⌘ + D（或选择 设备 > 摇动）
Android 模拟器：按下 Cmd ⌘ + M（macOS）或 Ctrl + M（Windows 和 Linux）
或者，对于 Android 设备和模拟器，您可以在终端中运行 adb shell input keyevent 82。
# adb转发端口的命令
在 Android 开发中，有时你需要使用 `adb` (Android Debug Bridge) 来将设备或模拟器上的端口转发到你的主机上。这通常用于调试网络服务，确保从主机可以访问设备或模拟器上的应用服务。

### 基本 `adb` 端口转发命令

以下是一些常用的 `adb` 端口转发命令：

#### 转发本地主机端口到设备端口

```sh
adb forward tcp:<local_port> tcp:<device_port>
```

例如，将本地主机的 8080 端口转发到设备的 8081 端口：

```sh
adb forward tcp:8080 tcp:8081
```

#### 转发本地主机端口到设备的 Unix 套接字

```sh
adb forward tcp:<local_port> local:<device_socket>
```

例如，将本地主机的 8080 端口转发到设备的 `/data/local/tmp/mysocket` 套接字：

```sh
adb forward tcp:8080 local:/data/local/tmp/mysocket
```

#### 移除端口转发

```sh
adb forward --remove tcp:<local_port>
```

例如，移除本地主机 8080 端口的转发：

```sh
adb forward --remove tcp:8080
```

#### 移除所有端口转发

```sh
adb forward --remove-all
```

### 示例使用场景

#### 调试本地 Web 服务器

假设你在设备上运行一个 Web 服务器，监听端口 5000，你希望通过电脑的浏览器访问这个服务器：

1. 将设备的 5000 端口转发到本地主机的 5000 端口：

    ```sh
    adb forward tcp:5000 tcp:5000
    ```

2. 在浏览器中访问 `http://localhost:5000`，你将看到设备上的 Web 服务器响应。

#### 调试 React Native 应用

React Native 开发中常用 `adb` 端口转发来调试应用。例如，如果你需要访问运行在设备上的 Metro Bundler，通常它监听 8081 端口：

1. 将设备的 8081 端口转发到本地主机的 8081 端口：

    ```sh
    adb forward tcp:8081 tcp:8081
    ```

2. 现在你可以通过 `http://localhost:8081` 访问 Metro Bundler，进行调试和开发。

### 注意事项

- 确保你的设备或模拟器已连接并在线，可以通过 `adb devices` 检查连接状态。
- 端口冲突：确保本地和设备上的端口没有被其他应用占用。

通过使用 `adb` 端口转发命令，你可以轻松调试和测试设备或模拟器上的网络服务，提升开发效率。

# Skipping device '127.0.0.1:62001' (127.0.0.1:62001): Device is OFFLINE

`adb devices;adb kill-server;adb start-server;adb devices;`
