# expo init xiaoma-app1
WARNING: The legacy expo-cli does not support Node +17. Migrate to the new local Expo CLI: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.
┌───────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│   The global expo-cli package has been deprecated.                        │
│                                                                           │
│   The new Expo CLI is now bundled in your project in the expo package.    │
│   Learn more: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.        │
│                                                                           │
│   To use the local CLI instead (recommended in SDK 46 and higher), run:   │
│   › npx expo <command>                                                    │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘

Migrate to using:
› npx create-expo-app --template

? Choose a template: » - Use arrow-keys. Return to submit.
    ----- Managed workflow -----
    blank               a minimal app as clean as an empty canvas
>   blank (TypeScript)  same as blank but with TypeScript configuration
    tabs (TypeScript)   several example screens and tabs using react-navigation and TypeScript
    ----- Bare workflow -----
    minimal             bare and minimal, just the essentials to get you started
# EXPO_OFFLINE
开启 `EXPO_OFFLINE` 环境变量可以让你在离线模式下使用 Expo，避免网络请求，这在没有互联网连接时特别有用。以下是如何在不同操作系统中设置 `EXPO_OFFLINE` 环境变量的方法：

### 在 macOS 和 Linux 中设置 `EXPO_OFFLINE`

1. **临时设置环境变量**

   你可以在当前终端会话中临时设置环境变量：

   ```sh
   export EXPO_OFFLINE=1
   ```

   然后运行你的 Expo 命令：

   ```sh
   expo start
   ```

2. **永久设置环境变量**

   如果你希望每次启动终端时都设置该环境变量，可以将其添加到你的 shell 配置文件中（如 `.bashrc`, `.bash_profile`, `.zshrc` 等）。

   - 对于 Bash 用户：

     ```sh
     echo 'export EXPO_OFFLINE=1' >> ~/.bashrc
     source ~/.bashrc
     ```

   - 对于 Zsh 用户：

     ```sh
     echo 'export EXPO_OFFLINE=1' >> ~/.zshrc
     source ~/.zshrc
     ```

### 在 Windows 中设置 `EXPO_OFFLINE`

1. **临时设置环境变量**

   在当前命令提示符（CMD）会话中临时设置环境变量：

   ```cmd
   set EXPO_OFFLINE=1
   ```

   然后运行你的 Expo 命令：

   ```cmd
   expo start
   ```

   或者在 PowerShell 中：

   ```powershell
   $env:EXPO_OFFLINE=1
   ```

   然后运行你的 Expo 命令：

   ```powershell
   expo start
   ```

2. **永久设置环境变量**

   - 打开 **系统属性** > **高级系统设置** > **环境变量**。
   - 在 **系统变量** 或 **用户变量** 中，点击 **新建**。
   - 输入变量名为 `EXPO_OFFLINE`，变量值为 `1`。
   - 点击 **确定** 保存。

   或者，你可以通过 PowerShell 永久设置环境变量：

   ```powershell
   [System.Environment]::SetEnvironmentVariable("EXPO_OFFLINE", "1", [System.EnvironmentVariableTarget]::User)
   ```

### 验证设置

你可以通过以下命令验证环境变量是否正确设置：

- 在 macOS 或 Linux 中：

  ```sh
  echo $EXPO_OFFLINE
  ```

- 在 Windows CMD 中：

  ```cmd
  echo %EXPO_OFFLINE%
  ```

- 在 Windows PowerShell 中：

  ```powershell
  echo $env:EXPO_OFFLINE
  ```

输出应为 `1`，表示环境变量已正确设置。

### 使用 Expo CLI

设置好环境变量后，你可以运行 Expo 命令。例如：

```sh
expo start
```

这会在离线模式下启动 Expo，避免进行网络请求。注意，离线模式下，某些功能可能会受到限制，例如无法下载新的依赖项或更新。

这样你就可以在离线模式下使用 Expo 来开发 React Native 应用程序了。
# expo 打包iOS
要使用 Expo 打包 iOS 应用，有几种不同的方法。Expo 提供了简化的流程，通过使用其构建服务，你可以在不需要本地 macOS 环境的情况下完成 iOS 应用的构建。

以下是详细的步骤：

### 1. 确保使用 Expo Managed Workflow

如果你还没有一个现有的 Expo 项目，你可以创建一个新的项目：

```sh
expo init my-new-project
cd my-new-project
```

### 2. 登录 Expo 帐号

确保你已经登录到你的 Expo 帐号。如果没有 Expo 帐号，你可以先创建一个：

```sh
expo login
```

### 3. 更新 `app.json`

在你的项目根目录中找到 `app.json` 文件，并更新以下配置：

```json
{
  "expo": {
    "name": "YourAppName",
    "slug": "your-app-slug",
    "version": "1.0.0",
    "ios": {
      "bundleIdentifier": "com.yourcompany.yourappname",
      "buildNumber": "1.0.0"
    }
  }
}
```

确保 `bundleIdentifier` 是唯一的，符合你的公司和应用名称。

### 4. 生成 iOS 构建

Expo 提供了两个构建命令：`expo build:ios` 和 `eas build`。`eas build` 是 Expo 的新构建服务，推荐使用这个方法。

#### 使用 `eas build`

首先，你需要安装 `eas-cli`：

```sh
npm install -g eas-cli
```

然后初始化 EAS：

```sh
eas build:configure
```

运行以下命令开始构建 iOS 应用：

```sh
eas build -p ios
```

EAS CLI 会引导你完成构建过程，包括登录你的 Apple 开发者帐号和选择构建配置。

### 5. 下载构建的应用

构建完成后，Expo 会提供一个下载链接，你可以通过该链接下载构建好的 `.ipa` 文件。你也可以登录到 [Expo Dev Tools](https://expo.dev/accounts/your-username/projects/your-app-slug/builds) 查看和下载你的构建。

### 6. 测试和发布

下载 `.ipa` 文件后，你可以使用 TestFlight 或其他工具在真实设备上测试应用。你也可以通过 App Store Connect 提交应用以发布到 App Store。

### 注意事项

1. **Apple 开发者帐号**：你需要一个有效的 Apple 开发者帐号来进行 iOS 构建和发布。
2. **构建时间**：Expo 的云构建服务有时可能会有排队时间，尤其是在高峰期。
3. **应用大小**：确保你的应用符合 App Store 的大小限制和其他审核要求。

### 使用 `expo build:ios` (旧方法)

虽然 `eas build` 是推荐的方法，但你仍然可以使用 `expo build:ios` 命令来构建 iOS 应用。

```sh
expo build:ios
```

Expo CLI 会引导你完成构建过程，包括处理证书和配置文件等。

### 总结

使用 Expo 提供的 EAS 构建服务，你可以轻松地在 Windows 或其他非 macOS 环境中构建 iOS 应用。这消除了对本地 macOS 和 Xcode 环境的依赖，使得开发和发布流程更加简便和高效。
# expo的adaptive-icon什么含义
在 Expo 中，`adaptive-icon` 是一种适用于 Android 应用的图标配置，它使得应用图标可以适应不同设备的形状和大小。自 Android 8.0 Oreo 开始，Android 引入了自适应图标（Adaptive Icons），这种图标可以在不同的设备上展示为不同的形状（圆形、方形、圆角矩形等），从而提供一致的视觉体验。

### `adaptive-icon` 配置详解

在 `app.json` 文件中，`adaptive-icon` 配置项允许你定义应用的自适应图标。下面是一个示例配置：

```json
{
  "expo": {
    "name": "YourAppName",
    "slug": "your-app-slug",
    "version": "1.0.0",
    "platforms": ["ios", "android"],
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    }
  }
}
```

### 配置项解释

- **foregroundImage**：前景图像。它是图标的前景部分，可以包含透明区域。此图像通常是一个 PNG 文件，文件路径相对于项目根目录。
- **backgroundColor**：背景颜色。它是图标的背景颜色，用于填充前景图像之外的区域。此颜色是一个十六进制颜色值（例如 `#FFFFFF` 表示白色）。

### 创建自适应图标

为了创建一个适配 Android 的自适应图标，你需要准备前景图像和背景颜色。以下是步骤：

1. **创建前景图像**：
   - 创建一个 108x108 像素的前景图像，并确保其中的透明区域适当。这将是图标的主要部分。

2. **设置背景颜色**：
   - 选择一个与你的应用设计相匹配的背景颜色。该颜色会在前景图像的透明区域显示。

3. **更新 `app.json`**：
   - 更新 `app.json` 文件，添加 `adaptiveIcon` 配置，如上所述。

### 示例

假设你有一个前景图像文件 `./assets/adaptive-icon.png` 和背景颜色 `#FFFFFF`，那么你的 `app.json` 文件中的配置如下：

```json
{
  "expo": {
    "name": "YourAppName",
    "slug": "your-app-slug",
    "version": "1.0.0",
    "platforms": ["ios", "android"],
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    }
  }
}
```

### 注意事项

1. **图像尺寸**：确保前景图像的尺寸和分辨率足够高，以适应不同设备的需求。
2. **透明度处理**：前景图像中应该适当使用透明度，以便自适应图标在各种背景形状下都能良好显示。
3. **测试**：在不同设备和 Android 版本上测试你的自适应图标，以确保视觉效果一致。

通过正确配置 `adaptive-icon`，你可以确保你的 Android 应用在各种设备上都具有一致且专业的外观。
# react-native iOS APP 如何安装到真机
要将 React Native iOS 应用安装到真机上进行测试，需要使用 macOS 并且安装了 Xcode。以下是详细的步骤：

### 准备工作

1. **安装 Xcode**：
   确保你已经安装了最新版本的 Xcode。你可以在 Mac App Store 中下载并安装 Xcode。

2. **安装 Xcode Command Line Tools**：
   打开终端并运行以下命令：
   ```sh
   xcode-select --install
   ```

3. **设置 Apple 开发者账户**：
   如果还没有 Apple 开发者账户，访问 [Apple Developer](https://developer.apple.com/) 注册一个帐户。免费帐户可以在真机上运行应用，但需要每七天重新签名。付费帐户 ($99/年) 可以生成发布版应用并具有更多功能。

### 配置项目

1. **打开项目**：
   打开你的 React Native 项目的根目录，运行以下命令以打开 iOS 项目：
   ```sh
   npx react-native run-ios
   ```

2. **打开 Xcode**：
   在你的项目根目录中找到 `ios` 文件夹，双击其中的 `YourProjectName.xcworkspace` 文件以打开 Xcode。

3. **配置签名设置**：
   - 选择左侧的项目导航器中的项目文件（顶层的文件夹图标）。
   - 选择目标（Targets）中的你的应用（通常是项目名称）。
   - 选择“Signing & Capabilities”选项卡。
   - 在“Team”下拉菜单中，选择你的 Apple ID。如果没有，请点击“Add an Account...”添加你的 Apple ID。

### 连接设备

1. **连接 iOS 设备**：
   使用 USB 数据线将你的 iOS 设备连接到 Mac。

2. **信任设备**：
   第一次连接时，需要在设备上选择信任此电脑，并输入设备密码。

### 运行应用

1. **选择设备**：
   在 Xcode 中，选择顶栏中的设备选项，然后选择你连接的设备。

2. **构建并运行**：
   点击 Xcode 顶部的运行按钮（或者按 `Cmd + R`），Xcode 将会编译并安装应用到你的设备上。

### 使用 Expo (可选)

如果你使用的是 Expo，可以更加方便地将应用运行在 iOS 设备上：

1. **安装 Expo CLI**：
   如果还没有安装 Expo CLI，可以运行以下命令：
   ```sh
   npm install -g expo-cli
   ```

2. **启动 Expo 项目**：
   在你的项目根目录运行：
   ```sh
   expo start
   ```

3. **使用 Expo Go App**：
   在你的 iOS 设备上安装 Expo Go App（可以从 App Store 下载）。
   - 打开 Expo Go App，使用它扫描终端中显示的二维码。
   - 应用将会在设备上运行，而无需通过 Xcode 进行签名和构建。

### 常见问题和解决方法

1. **设备未找到**：
   - 确保设备已解锁并选择信任此电脑。
   - 在 Xcode 中，确保设备已被识别。在 Xcode 顶部的设备选择菜单中应该能看到设备名称。

2. **代码签名错误**：
   - 确保在 Xcode 中选择了正确的团队（Team）。
   - 如果使用免费开发者帐户，每七天需要重新签名应用。

3. **运行失败或崩溃**：
   - 检查 Xcode 控制台中的错误信息。
   - 确保你的 React Native 项目依赖已安装并且版本兼容。

通过以上步骤，你可以将 React Native iOS 应用成功安装到真机上进行测试。
# react-native iOS APP 如何发布到真机
要将 React Native iOS 应用发布到真机进行测试或发布到 App Store，需要完成一些必要的步骤。这包括设置签名证书、配置 App Store Connect 账户以及使用 Xcode 构建和分发应用。以下是详细步骤：

### 1. 配置 Apple 开发者账户

首先，确保你已经注册了 Apple 开发者账户（$99/年）。登录 [Apple Developer](https://developer.apple.com/) 注册或管理你的账户。

### 2. 配置 App Store Connect

1. **创建 App ID**：
   - 登录到 [Apple Developer Account](https://developer.apple.com/account/)。
   - 转到 “Certificates, Identifiers & Profiles”。
   - 选择 “Identifiers” > “App IDs” > “+” 。
   - 创建新的 App ID，填写相关信息并保存。

2. **创建 App 在 App Store Connect**：
   - 登录 [App Store Connect](https://appstoreconnect.apple.com/)。
   - 选择 “My Apps” > “+” > “New App”。
   - 填写应用的基本信息，如名称、语言、捆绑 ID（Bundle ID）等。

### 3. 配置 Xcode 项目

1. **打开项目**：
   在项目根目录中，双击 `ios` 文件夹中的 `YourProjectName.xcworkspace` 文件以打开 Xcode。

2. **配置签名和团队**：
   - 在 Xcode 左侧的项目导航器中，选择你的项目。
   - 选择你的目标（Targets），通常是项目名称。
   - 选择 “Signing & Capabilities” 选项卡。
   - 在 “Team” 下拉菜单中，选择你的 Apple ID 或团队。
   - 确保 “Automatically manage signing” 选项已勾选。

3. **配置项目设置**：
   - 设置版本号和构建号。版本号是应用的外部版本号（例如 1.0.0），构建号是内部版本号（例如 1）。

### 4. 构建应用

1. **连接设备**：
   使用 USB 数据线将 iOS 设备连接到你的 Mac。

2. **选择设备**：
   在 Xcode 中，选择顶部的设备菜单，然后选择你的设备。

3. **构建并运行**：
   点击 Xcode 顶部的运行按钮（或者按 `Cmd + R`），Xcode 将会编译并安装应用到你的设备上。

### 5. 使用 TestFlight 分发应用（可选）

TestFlight 是 Apple 提供的测试平台，用于分发测试版本的应用。

1. **构建应用**：
   在 Xcode 中选择 “Product” > “Archive” 来构建应用。
   - 构建完成后，会自动打开 Organizer 窗口。

2. **上传到 App Store Connect**：
   - 在 Organizer 窗口中，选择刚刚构建的应用，点击 “Distribute App”。
   - 选择 “App Store Connect” > “Upload”，并按照提示完成上传过程。

3. **TestFlight 测试**：
   - 登录 [App Store Connect](https://appstoreconnect.apple.com/)。
   - 选择你的应用，转到 “TestFlight” 选项卡。
   - 添加测试人员并开始测试。

### 6. 发布到 App Store

1. **提交应用审查**：
   - 登录 [App Store Connect](https://appstoreconnect.apple.com/)。
   - 在 “My Apps” 中选择你的应用。
   - 转到 “App Store” 选项卡，填写应用信息、截图、描述等。
   - 提交应用进行审查。

2. **发布应用**：
   - 审查通过后，你可以选择发布应用。

### 注意事项

- **证书和配置文件**：确保你的开发和发布证书以及配置文件正确配置。如果有问题，可以在 Apple Developer Portal 中重新生成。
- **错误和调试**：如果在构建或上传过程中遇到错误，检查 Xcode 和 App Store Connect 提供的错误日志和提示信息。

通过以上步骤，你可以将 React Native iOS 应用成功发布到真机上进行测试或发布到 App Store。确保每一步都按照要求配置和操作，以确保顺利完成发布流程。
# expo一直在new update available，downloading
当使用 Expo 时，如果你看到 `new update available，downloading` 一直出现，并且 Expo 在下载更新时卡住，可能是由于网络问题、缓存问题或者 Expo CLI 和依赖项的问题。以下是一些可能的解决方法：

### 1. 检查网络连接

确保你的网络连接稳定。你可以尝试以下操作：

- 切换到更稳定的网络（例如有线网络）。
- 重启路由器。

### 2. 清理缓存

Expo 和 npm 的缓存有时可能会导致问题。你可以尝试清理缓存：

```sh
expo start -c
```

清理 npm 缓存：

```sh
npm cache clean --force
```

清理 watchman 缓存：

```sh
watchman watch-del-all
```

删除临时文件和缓存：

```sh
rm -rf $TMPDIR/metro-cache
rm -rf $TMPDIR/react-native-packager-cache-*
```

### 3. 更新 Expo CLI 和依赖

确保你使用的是最新版本的 Expo CLI 和相关依赖项。你可以通过以下命令更新 Expo CLI：

```sh
npm install -g expo-cli
```

在你的项目目录中，更新项目的依赖项：

```sh
expo upgrade
```

### 4. 删除 node_modules 并重新安装依赖

有时，重新安装依赖项可以解决问题：

```sh
rm -rf node_modules
rm package-lock.json  # 如果你使用 npm
rm yarn.lock  # 如果你使用 yarn
npm install  # 或者 yarn install
```

### 5. 创建新的 Expo 项目

如果以上方法都没有解决问题，你可以尝试创建一个新的 Expo 项目，并将现有项目的代码迁移到新项目中。这可以帮助你排除项目配置问题。

```sh
expo init new-project
```

然后，将你现有项目的代码复制到新项目中。

### 6. 检查 Expo CLI 配置文件

确保你的 Expo CLI 配置文件（如 `app.json`）没有错误配置。例如，确保没有设置错误的 `sdkVersion` 或其他参数。

### 7. 手动下载更新

如果 Expo CLI 的自动更新一直卡住，你可以尝试手动下载并安装更新：

```sh
npm install -g expo-cli
```

### 8. 检查权限设置

确保你有权限写入缓存目录和项目目录。有时，权限问题会导致缓存无法正确清理或更新下载失败。

### 9. 使用 VPN 或代理

如果你所在的网络环境限制了某些网络请求，可以尝试使用 VPN 或代理来下载更新。

### 10. 尝试其他电脑或网络

如果问题依然存在，可以尝试在另一台电脑上进行相同的操作，或者切换到另一网络环境。

### 综述

以上步骤应该能够帮助你解决 Expo `new update available，downloading` 卡住的问题。通常，这种问题是由缓存或网络问题引起的，因此清理缓存和确保稳定的网络连接是关键。如果问题持续存在，考虑查看 Expo 的官方文档和社区论坛，获取更多帮助和支持。
# expo upgrade
WARNING: The legacy expo-cli does not support Node +17. Migrate to the new local Expo CLI: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.
┌───────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│   The global expo-cli package has been deprecated.                        │
│                                                                           │
│   The new Expo CLI is now bundled in your project in the expo package.    │
│   Learn more: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.        │
│                                                                           │
│   To use the local CLI instead (recommended in SDK 46 and higher), run:   │
│   › npx expo <command>                                                    │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
Warning! Your git working tree is dirty.
It's recommended to commit all your changes before proceeding, so you can revert the changes made by this command if necessary.

√ Would you like to proceed? ... yes

We found an existing expo-cli instance running for this project and closed it to continue.

√ You are already using the latest SDK version. Do you want to run the update anyways? This may be useful to ensure that all of your packages are set to the correct version. ... yes

√ Validated configuration.
√ No additional changes necessary to app.json config.

√ Updated known packages to compatible versions.
√ Cleared packager cache.
√ Validated project

👏 Automated upgrade steps complete.
...but this doesn't mean everything is done yet!

✅ The following packages were updated:
expo-status-bar, react, react-native, @react-native-async-storage/async-storage, @react-native-community/netinfo, @react-native-community/slider, react-native-gesture-handler, react-native-pager-view, react-native-reanimated, react-native-safe-area-context, react-native-screens, react-native-svg, react-native-webview, @shopify/flash-list, jest, typescript, @babel/core, @types/react, expo

🚨 The following packages were not updated. You should check the READMEs for those repositories to determine what version is compatible with your new set of packages:
@ant-design/icons-react-native, @ant-design/react-native, @react-native-community/masked-view, @react-native-community/segmented-control, @react-navigation/bottom-tabs, @react-navigation/native, @react-navigation/stack, @topology/core, agent-base, assert, axios, dayjs, debug, dva-core-ts, dva-loading, events, http-proxy-middleware, lodash, qs, react-hook-form, react-loadable, react-native-canvas, react-native-fast-image, react-native-intersection-observer, react-native-linear-gradient, react-native-orientation-locker, react-native-paper, react-native-splash-screen, react-native-ssl-pinning, react-native-tree-multi-select, react-native-vector-icons, react-native-video, react-native-vlc-media-player, react-native-websocket, react-redux, redux, regenerator-runtime, rn-fetch-blob, socket.io-client, timers, umi-request, url, util, xml2js, @babel/plugin-transform-class-properties, @babel/plugin-transform-private-methods, @babel/plugin-transform-private-property-in-object, @babel/preset-env, @babel/runtime, @react-native/babel-preset, @react-native/eslint-config, @react-native/metro-config, @react-native/typescript-config, @types/jest, @types/lodash, @types/qs, @types/react-native, @types/react-native-canvas, @types/react-native-video, @types/react-test-renderer, babel-jest, babel-plugin-import, babel-plugin-module-resolver, cross-env, eslint, husky, lint-staged, metro-react-native-babel-preset, mockjs, prettier, react-native-svg-transformer, react-test-renderer

Please refer to the release notes for information on any further required steps to update and information about breaking changes:

splash两边有边框

# metro.config.js
在 Expo 项目中，`metro.config.js` 文件用于自定义 Metro bundler 的配置。Metro 是 React Native 默认的 JavaScript 打包工具，通过修改这个配置文件，你可以调整打包行为、添加自定义处理器和其他高级配置。

以下是一个基本的 `metro.config.js` 文件示例，以及一些常见的配置示例：

### 1. 创建 `metro.config.js`

在你的项目根目录下创建一个名为 `metro.config.js` 的文件：

```js
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  ...defaultConfig,
  resolver: {
    sourceExts: [...defaultConfig.resolver.sourceExts, 'cjs'], // Add other extensions if needed
  },
};
```

### 2. 添加自定义配置

根据你的需求，你可以添加更多的配置。例如：

#### 2.1 配置别名

配置模块别名，以便在项目中使用更简洁的导入路径：

```js
const { getDefaultConfig } = require('expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    extraNodeModules: {
      '@components': `${__dirname}/src/components`,
      '@assets': `${__dirname}/src/assets`,
    },
  },
};
```

#### 2.2 支持其他文件扩展名

扩展 Metro 解析器以支持其他文件扩展名：

```js
const { getDefaultConfig } = require('expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    sourceExts: [...defaultConfig.resolver.sourceExts, 'cjs', 'jsx', 'ts', 'tsx'],
  },
};
```

#### 2.3 自定义 Transformer

如果你需要自定义 Transformer，可以这样配置：

```js
const { getDefaultConfig } = require('expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  ...defaultConfig,
  transformer: {
    ...defaultConfig.transformer,
    babelTransformerPath: require.resolve('react-native-typescript-transformer'),
  },
};
```

#### 2.4 忽略特定文件或文件夹

忽略特定文件或文件夹，以减少打包时间：

```js
const { getDefaultConfig } = require('expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    blacklistRE: /ignored-folder\/.*/,
  },
};
```

### 3. 高级配置示例

以下是一个综合配置示例，包括别名、扩展名和自定义 Transformer：

```js
const { getDefaultConfig } = require('expo/metro-config');
const blacklist = require('metro-config/src/defaults/blacklist');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    sourceExts: [...defaultConfig.resolver.sourceExts, 'cjs', 'jsx', 'ts', 'tsx'],
    extraNodeModules: {
      '@components': `${__dirname}/src/components`,
      '@assets': `${__dirname}/src/assets`,
    },
    blacklistRE: blacklist([/ignored-folder\/.*/]),
  },
  transformer: {
    ...defaultConfig.transformer,
    babelTransformerPath: require.resolve('react-native-typescript-transformer'),
  },
};
```

### 4. 使用 Metro Babel Transformer

确保你已经安装了所需的 Babel Transformer 依赖，例如 `react-native-typescript-transformer`：

```sh
npm install --save-dev react-native-typescript-transformer
```

### 5. 重启开发服务器

在修改 `metro.config.js` 文件后，重新启动 Expo 开发服务器：

```sh
expo start -c
```

### 总结

通过自定义 `metro.config.js` 文件，你可以配置 Metro bundler 以满足项目的特定需求。上述示例涵盖了常见的配置需求，如别名、扩展名和自定义 Transformer。根据你的具体需求，调整这些配置可以优化你的开发体验和项目结构。

# upgrade
https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/
# expo 启动Android时：Uncaught Error:java.net.SocketException:Connection reset
`java.net.SocketException: Connection reset` 错误在 Expo Android 启动时通常与网络请求有关，可能是由于设备的网络配置、服务器的连接问题或者请求参数的错误引起的。以下是一些排查和解决此问题的步骤：

### 1. 检查设备的网络连接

确保你的 Android 设备或模拟器有稳定的网络连接。可以尝试通过浏览器访问同一个 URL 来确认网络连接是否正常。

### 2. 检查请求的 URL 和参数

确保你在代码中使用的 URL 和参数正确且可访问。通常，在启动时会进行一些初始化请求，比如检查更新、获取配置等。确保这些请求的 URL 是正确的。

### 3. 检查服务器配置

确保服务器能够正常处理请求，并且没有因为并发连接过多或其他问题导致连接被重置。可以查看服务器的日志来确认是否有异常。

### 4. 增加错误处理和重试机制

在网络请求中增加错误处理和重试机制，以便在连接重置时能够自动重试。

### 代码示例

#### 1. 使用 `fetch` 进行网络请求并增加错误处理

```javascript
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error.message);
  }
}

fetchData('https://example.com/api/data');
```

#### 2. 使用 `AbortController` 设置请求超时

```javascript
const fetchWithTimeout = (url, options, timeout = 5000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  return fetch(url, {
    ...options,
    signal: controller.signal,
  })
    .then((response) => {
      clearTimeout(id);
      return response;
    })
    .catch((error) => {
      if (error.name === 'AbortError') {
        throw new Error('Request timed out');
      }
      throw error;
    });
};

fetchWithTimeout('https://example.com/api/data', {}, 5000)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error.message));
```

#### 3. 实现重试机制

```javascript
const fetchWithRetry = async (url, options, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      console.error(`Fetch attempt ${i + 1} failed, retrying...`);
    }
  }
};

fetchWithRetry('https://example.com/api/data', {}, 3)
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error.message));
```

### 5. 检查网络安全配置

确保你的应用允许进行明文 HTTP 通信（如果你在使用 HTTP 而不是 HTTPS）。在 Android 上，默认情况下不允许进行明文 HTTP 通信，需要在 `AndroidManifest.xml` 文件中配置网络安全策略：

```xml
<application
  android:usesCleartextTraffic="true"
  ...>
  ...
</application>
```

### 6. 查看 Expo 和 Android Studio 的日志

查看 Expo 和 Android Studio 的日志可以帮助你找到更多的错误信息：

```bash
# 在终端中运行
adb logcat
```

### 总结

`java.net.SocketException: Connection reset` 错误通常与网络连接或服务器配置有关。通过检查网络连接、验证请求 URL 和参数、查看服务器配置、增加错误处理和重试机制、配置网络安全策略，以及查看日志信息，你可以有效排查和解决这一问题。如果问题仍然存在，建议进一步分析网络环境和具体的应用程序逻辑。

# TestFlight



https://forums.expo.dev/t/uncaught-error-java-net-sockettimeoutexception-react-native-macbook/18617/10
