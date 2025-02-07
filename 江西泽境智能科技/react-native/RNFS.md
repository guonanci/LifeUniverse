*`react-native-fs`这个package是我在尝试解决视频流缓存的问题上，遇到的。实际情况，应该不是让前端来手动实现这样的功能，性能上要大打折扣。*

# react-native require本地文件得到的值是数字  java.lang.Double cannot be cast to java.lang.String

react-native require本地文件得到的值是数字  java.lang.Double cannot be cast to java.lang.String

# react-native 获取NativeModule能访问的本地文件路径字符串

要在 React Native 中获取 Native Module 能够访问的本地文件路径字符串，您可以使用 React Native 提供的功能来获取项目目录的路径，然后将其传递给原生模块。以下是一种常用方法：

### JavaScript 端

在 JavaScript 端，您可以使用 `react-native-fs` 包来获取本地文件系统路径。

首先，确保安装了 `react-native-fs` 包：

```bash
npm install react-native-fs
```

然后，您可以使用以下代码获取本地文件路径：

```javascript
import RNFS from 'react-native-fs';

const getLocalFilePath = async () => {
  // 获取项目的文档目录路径
  const docDir = RNFS.DocumentDirectoryPath;

  // 拼接您的文件路径
  const filePath = `${docDir}/your_file_name.ext`;

  return filePath;
};

// 使用该函数获取文件路径
const filePath = await getLocalFilePath();
```

### Kotlin 原生模块

在 Kotlin 原生模块中，您可以直接接收 JavaScript 端传递的文件路径字符串，然后在原生代码中进行处理。

```kotlin
package com.yourapp

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class YourModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "YourModule"
    }

    @ReactMethod
    fun processFile(filePath: String, promise: Promise) {
        // 在此处处理文件，filePath 是 JavaScript 端传递的文件路径字符串
        promise.resolve("File processed successfully")
    }
}
```

### 在 JavaScript 中使用 Native Module

```javascript
import { NativeModules } from 'react-native';

const { YourModule } = NativeModules;

// 获取文件路径并将其传递给 Native Module
const filePath = await getLocalFilePath();
YourModule.processFile(filePath)
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

通过以上步骤，您可以在 JavaScript 端获取到本地文件路径字符串，并将其传递给原生模块进行进一步处理。
