https://cloud.tencent.com/developer/article/1896498 https://juejin.cn/post/6844903462501613575 https://github.com/reactnativecn/react-native-guide https://todoit.tech/ https://reactnative.cn/docs/getting-started

# listening-port
yarn start --port 9988

# npm install -g react-native-cli

```js
Error: Exception in HostFunction: Malformed calls from JS: field sizes ar
e different.

[[4,4,4,21],[21,21,21,5],[[34863,"RCTView",{"width":null}],[3132,15415]],46269]

This error is located at:
    in Unknown (created by InnerScreen)
    in Suspender (created by Freeze)
    in Suspense (created by Freeze)
    in Freeze (created by DelayedFreeze)
    in DelayedFreeze (created by InnerScreen)
    in InnerScreen (created by Screen)
    in Screen (created by MaybeScreen)
    in MaybeScreen (created by CardStack)
    in RNSScreenContainer (created by ScreenContainer)
    in ScreenContainer (created by MaybeScreenContainer)
    in MaybeScreenContainer (created by CardStack)
    in RCTView (created by View)

// <Image /> style.aspectRatio <= 1
```

给rn-antd的Flex-Item设置style.background时，也不提示我报错，应该设置backgroundColor才对！！

峰峰说APP整体看起来有一些挤压感。*元素之间的距离长度都是8的倍数*；


可以用backgroundColor来区分不同的区域，以更方便地调整样式。

KeyboardAvoidingView

* What went wrong:
Execution failed for task ':react-native-async-storage_async-storage:compileDebugJavaWithJavac'.

> Could not resolve all files for configuration ':react-native-async-storage_async-storage:debugCompileClasspath'.
   > Failed to transform kotlinx-coroutines-core-jvm-1.6.1.jar (org.jetbrains.kotlinx:kotlinx-coroutines-core-jvm:1.6.1) to match attributes {artifactType=android-classes-jar, org.gradle.category=library, org.gradle.libraryelements=jar, org.gradle.status=release, org.gradle.usage=java-api, org.jetbrains.kotlin.platform.type=jvm}.
      > Could not download kotlinx-coroutines-core-jvm-1.6.1.jar (org.jetbrains.kotlinx:kotlinx-coroutines-core-jvm:1.6.1)
         > Could not get resource '<https://repo.maven.apache.org/maven2/org/jetbrains/kotlinx/kotlinx-coroutines-core-jvm/1.6.1/kotlinx-coroutines-core-jvm-1.6.1.jar>'.
            > Read timed out

* Try:

> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
> Get more help at <https://help.gradle.org>.

ERROR  Warning: React instrumentation encountered an error: RangeError: Maximum call stack size exceeded.
 LOG  通知渠道是否创建，true 创建成功，false 已创建 'false'
 LOG  Failed to print error:  Maximum call stack size exceeded
