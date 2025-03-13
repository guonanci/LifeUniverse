嗯，用户现在问的是React Native的面试题。之前他已经问过数据大屏、TypeScript、Webpack/Vite/Gulp，还有Hybrid相关的面试题，看起来他可能在准备前端或者全栈开发的职位，需要覆盖多个技术栈。现在他转向React Native，可能是在寻找跨平台移动开发的职位，或者希望扩展自己的技能范围。

首先，我需要回顾用户之前的对话，确保这次回答的风格和结构一致。之前的回答都是分模块，每个问题有答案和示例代码，所以这次也应该保持类似的结构。用户可能期望的是常见问题、核心概念、性能优化、实战问题以及开放性问题等部分。

接下来，考虑React Native的面试题通常涵盖哪些方面。核心原理如JSX、组件生命周期、状态管理，然后是性能优化、调试、与原生模块的交互，以及热门库如Redux、React Navigation的使用。此外，可能会涉及与原生开发的对比，热更新机制，以及常见问题的解决策略。

用户可能希望问题不仅涵盖基础，还要有深度，比如虚拟DOM的工作原理，桥接机制的细节，状态管理库的选择原因等。同时，实际开发中的问题，比如内存泄漏、白屏问题，也是常见的面试题点。

需要注意React Native的更新较快，一些旧的问题可能已经过时，比如关于过时的生命周期方法，但用户可能仍然需要了解这些，因为有些项目可能还在使用旧版本。同时，新特性如Fabric和TurboModules可能成为高级问题。

另外，用户可能对调试工具、测试框架（如Jest、Detox）以及如何与原生代码交互感兴趣。需要确保这些问题都被覆盖，并且答案准确，示例代码正确。

最后，开放性问题如项目经验、遇到的挑战，用户可能希望展示自己的实际经验，所以提供答案模板会很有帮助，帮助用户结构化他们的回答。

总结下来，我需要组织React Native的面试题分为核心概念、组件与API、状态管理、性能优化、与原生交互、调试与测试、常见问题、开放性问题等模块，每个模块下有几个典型问题，答案要简明扼要，附带代码示例，并保持与之前回答一致的格式。




以下是 React Native 的常见面试题及参考答案，涵盖核心原理、性能优化、实战场景及高级特性：

---

### **一、核心概念与原理**

#### 1. **React Native 与原生应用的本质区别是什么？**
**答案**：
• **渲染机制**：React Native 使用 JavaScript 线程和原生 UI 线程通信，通过 **Shadow Tree** 计算布局，最终渲染为原生组件（如 Android 的 `View`、iOS 的 `UIView`），而非 WebView。
• **跨平台性**：一份代码可生成 iOS/Android 应用，但部分组件需平台特定适配（如 `Platform.select`）。

---

#### 2. **解释 React Native 的 Bridge 机制及其性能瓶颈**
**答案**：
• **Bridge 作用**：在 JS 线程与原生线程间传递异步序列化消息（如事件、方法调用）。
• **性能瓶颈**：
  • **频繁通信**：大量消息会导致延迟（如滚动列表快速更新）。
  • **解决方案**：
    1. 使用 `useMemo`/`React.memo` 减少不必要的渲染。
    2. 原生模块处理高性能任务（如图像处理）。
    3. 新架构（Fabric）减少序列化开销。

---

### **二、组件与 API**

#### 3. **RN 中 `ScrollView` 和 `FlatList` 的区别？如何优化长列表性能？**
**答案**：
• **区别**：
  • `ScrollView`：一次性渲染所有子组件，适合少量数据。
  • `FlatList`：懒加载+虚拟化渲染，支持动态行高和增量更新。
• **优化手段**：
  • 设置 `initialNumToRender`、`windowSize` 控制渲染范围。
  • 使用 `keyExtractor` 确保列表项唯一性。
  • 复杂项使用 `React.memo` 避免重复渲染。

**代码示例**：
```javascript
<FlatList
  data={data}
  keyExtractor={(item) => item.id}
  renderItem={({item}) => <MemoizedItem {...item} />}
  initialNumToRender={10}
  windowSize={5}
/>
```

---

#### 4. **如何实现 RN 与原生模块的通信？**
**答案**：
• **步骤**：
  1. **原生模块定义**：Android（Java/Kotlin）、iOS（Objective-C/Swift）实现功能。
  2. **JS 层封装**：通过 `NativeModules` 调用原生方法。
• **示例（Android Toast）**：
  ```java
  // Android 原生模块
  public class ToastModule extends ReactContextBaseJavaModule {
    public ToastModule(ReactApplicationContext context) { super(context); }
    @ReactMethod
    public void show(String message) { Toast.makeText(getContext(), message, LENGTH_SHORT).show(); }
  }
  ```
  ```javascript
  // JS 调用
  import { NativeModules } from 'react-native';
  const { ToastModule } = NativeModules;
  ToastModule.show('Hello Native!');
  ```

---

### **三、状态管理与性能优化**

#### 5. **RN 中如何避免不必要的组件重渲染？**
**答案**：
• **策略**：
  1. **`React.memo`**：缓存函数组件，浅比较 props 变化。
  2. **`useMemo`/`useCallback`**：缓存值和函数，避免依赖项未变时重新计算。
  3. **状态管理工具**：如 Redux 或 Context API 配合选择性更新。

**示例**：
```javascript
const MemoizedButton = React.memo(({ onPress }) => {
  return <Button title="Submit" onPress={onPress} />;
});
```

---

#### 6. **解释 Hermes 引擎的优势及如何启用**
**答案**：
• **优势**：专为 RN 优化的 JS 引擎，提升启动速度、减少内存占用。
• **启用方式**：
  ```javascript
  // android/app/build.gradle
  project.ext.react = [
    enableHermes: true  // 默认从 RN 0.70 开始启用
  ]
  ```
  ```javascript
  // ios/Podfile
  use_react_native!(:hermes_enabled => true)
  ```

---

### **四、调试与工程化**

#### 7. **RN 应用如何调试网络请求与性能问题？**
**答案**：
• **调试工具**：
  1. **React DevTools**：检查组件树与状态。
  2. **Flipper**：网络监控、日志查看、插件扩展。
  3. **Chrome DevTools**：调试 JS 代码、Sources 面板断点。
• **性能分析**：
  • 使用 `console.log` + `performance.now()` 测量关键路径耗时。
  • 集成 Firebase Performance Monitoring 监控线上性能。

---

#### 8. **如何实现 RN 的热更新（CodePush）？**
**答案**：
• **步骤**：
  1. 注册 Microsoft App Center，创建 CodePush 应用。
  2. 集成 `react-native-code-push` SDK。
  3. 通过 CLI 发布更新包：
     ```bash
     code-push release-react MyApp android --d Production
     ```
• **代码封装**：
  ```javascript
  import CodePush from 'react-native-code-push';
  const App = () => <MainApp />;
  export default CodePush({ checkFrequency: CodePush.CheckFrequency.MANUAL })(App);
  ```

---

### **五、开放性问题**

#### 9. **React Native 新架构（Fabric、TurboModules）的优势？**
**答案**：
• **Fabric**：
  • UI 线程同步渲染，减少丢帧。
  • 支持优先级调度和同步更新。
• **TurboModules**：
  • 延迟加载原生模块，提升启动速度。
  • 强类型接口（通过 Codegen 生成）。

---

#### 10. **你在 RN 开发中遇到的最难问题是什么？如何解决？**
**答案模板**：
• **问题**：Android 端列表滚动时内存持续增长导致崩溃。
• **分析**：图片未优化加载，`FlatList` 未正确回收内存。
• **解决**：
  1. 使用 `resizeMode="cover"` 和缓存库（如 `react-native-fast-image`）。
  2. 优化 `onEndReached` 分页加载逻辑，避免一次性渲染过多数据。
  3. 使用 Android Profiler 分析内存泄漏点。

---

### **六、资源推荐**
• **官方文档**：[React Native Docs](https://reactnative.dev/docs/getting-started)
• **新架构解读**：[React Native New Architecture](https://reactnative.dev/architecture/overview)
• **性能优化指南**：[RN Performance](https://reactnative.dev/docs/performance)

掌握以上内容后，结合具体项目经验（如性能优化指标、跨平台适配案例），可显著提升面试表现！ 🚀





<https://cloud.tencent.com/developer/article/1896498> <https://juejin.cn/post/6844903462501613575> <https://github.com/reactnativecn/react-native-guide> <https://todoit.tech/> <https://reactnative.cn/docs/getting-started>

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

# nativewind--twrnc

<https://juejin.cn/post/7369861479384875049>
