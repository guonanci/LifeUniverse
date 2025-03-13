好的，用户问的是“flutter面试题”，我需要准备相关的面试问题和答案。首先，我需要回顾Flutter的核心概念、常见面试题以及可能的深入问题。用户之前询问过React Native、Webpack、Vite等的面试题，所以可能他们正在准备前端或跨平台开发的职位，需要全面的准备材料。

首先，我应该确定Flutter面试题的主要覆盖范围。通常包括Dart语言特性、Flutter框架原理、Widget系统、状态管理、性能优化、平台相关处理以及项目经验等。我需要确保每个部分都有典型的问题和答案。

接下来，我需要考虑用户可能的水平。如果他们询问面试题，可能是中级或高级开发者，所以问题需要有一定的深度，而不仅仅是基础概念。比如，可能会问到Widget树和Element树的区别，状态管理的不同方案比较，如何优化渲染性能等。

另外，用户可能希望答案结构清晰，便于复习。因此，我应该将问题分门别类，比如分为Dart语言、Flutter基础、Widget、状态管理、性能优化、项目经验等部分，每个部分列出几个常见问题，并给出简洁但完整的答案。

还要注意提供示例代码，尤其是在涉及实际编码的问题，比如如何实现一个自定义Widget，或者如何使用Provider进行状态管理。代码示例可以帮助用户更好地理解答案。

另外，可能还需要对比Flutter与其他框架，比如React Native，解释Flutter的优势和劣势。这类问题在面试中也常见，尤其是考察候选人对技术选型的理解。

同时，考虑到用户之前询问过React Native的面试题，可能在对比类问题中，需要强调Flutter的特点，比如自绘引擎带来的性能优势，Dart语言的特性，Hot Reload的机制等。

还需要考虑实际项目中的问题，比如如何处理平台特定的功能，如何与原生代码交互，如何处理应用的打包和发布等。这些都是Flutter开发中常见的挑战。

最后，我应该检查是否有遗漏的重要主题，比如Flutter的导航机制、动画实现、测试方法、国际化支持等。确保覆盖全面，但不过于冗长，保持每个问题的答案简洁明了。

在组织内容时，使用标题和子标题来分块，用代码块、列表等方式提高可读性。确保每个问题都有明确的答案，必要时提供示例和解释，帮助用户快速理解和记忆。

总结一下，我需要涵盖以下方面：
1. Dart语言相关问题
2. Flutter框架核心原理
3. Widget系统
4. 状态管理方案
5. 性能优化技巧
6. 平台相关处理
7. 项目经验与最佳实践
8. 测试与调试
9. 对比其他框架

每个部分选取2-3个典型问题，给出详细但不过于冗长的答案，并附上代码示例或比较表格。这样用户可以在准备面试时有一个全面的参考资料。




以下是 Flutter 的常见面试题及参考答案，涵盖核心原理、性能优化、状态管理及实战场景，帮助候选人系统准备：

---

### **一、Dart 语言基础**
#### 1. **Dart 的 `isolate` 是什么？与线程的区别？**
**答案**：
• **Isolate**：Dart 中的并发单元，拥有独立内存堆，通过消息传递通信（无共享内存）。
• **与线程区别**：线程共享内存，需锁机制；Isolate 更安全但通信开销更大。

**示例**：
```dart
void main() async {
  final receivePort = ReceivePort();
  await Isolate.spawn(heavyTask, receivePort.sendPort);
  receivePort.listen((data) => print('Received: $data'));
}

void heavyTask(SendPort sendPort) {
  sendPort.send('Result from isolate');
}
```

---

#### 2. **解释 `async`/`await` 和 `Future` 的关系**
**答案**：
• **Future**：表示异步操作的潜在结果（如网络请求）。
• **async/await**：语法糖，让异步代码以同步方式书写。`async` 函数返回 `Future`，`await` 暂停执行直到 Future 完成。

**示例**：
```dart
Future<String> fetchData() async {
  final response = await http.get('https://api.example.com/data');
  return response.body;
}
```

---

### **二、Flutter 核心原理**
#### 3. **Widget、Element 和 RenderObject 的关系？**
**答案**：
• **Widget**：不可变的配置描述（如 `Text('Hello')`）。
• **Element**：Widget 的实例化对象，管理生命周期和树结构。
• **RenderObject**：负责布局和绘制（如计算尺寸、位置）。
• **流程**：Widget 树 → Element 树 → RenderObject 树。

---

#### 4. **Flutter 的渲染流程（从构建到绘制）**
**答案**：
1. **构建阶段**：根据 Widget 树生成 Element 树。
2. **布局阶段**：RenderObject 计算每个节点的大小和位置（调用 `performLayout`）。
3. **绘制阶段**：RenderObject 通过 `Canvas` 绘制自身（调用 `paint`）。
4. **合成**：图层数据提交给 Skia 引擎渲染到屏幕。

---

### **三、Widget 与状态管理**
#### 5. **`StatelessWidget` 和 `StatefulWidget` 的区别？**
**答案**：
• **StatelessWidget**：无内部状态，属性由父组件传递（如 `Icon`）。
• **StatefulWidget**：持有可变状态（如计数器），通过 `setState` 触发重建。

**示例**：
```dart
class Counter extends StatefulWidget {
  @override
  _CounterState createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int _count = 0;
  void _increment() => setState(() => _count++);
  // 构建方法省略...
}
```

---

#### 6. **Provider 的实现原理？如何避免不必要的重建？**
**答案**：
• **原理**：基于 InheritedWidget，通过 `ChangeNotifier` 通知依赖项更新。
• **优化**：使用 `Selector` 或 `Consumer` 的 `child` 参数缓存静态子树。

**示例**：
```dart
Selector<AppState, String>(
  selector: (_, state) => state.username,
  builder: (_, username, __) => Text(username),
);
```

---

### **四、性能优化**
#### 7. **如何检测和解决 Flutter 应用的卡顿？**
**答案**：
• **检测工具**：
  • DevTools 的 **Performance Overlay**（查看 UI 和 GPU 耗时）。
  • **Tracing**：记录应用执行轨迹，分析卡顿帧。
• **优化手段**：
  • 减少 `build` 方法耗时（拆分复杂 Widget）。
  • 使用 `const` Widget 避免重复构建。
  • 列表使用 `ListView.builder` 懒加载。

---

#### 8. **解释 `RepaintBoundary` 的作用**
**答案**：
• **作用**：将子树绘制到独立图层，避免父组件重绘时影响该子树。
• **场景**：动画或频繁更新的组件（如游戏角色）。

**示例**：
```dart
RepaintBoundary(
  child: AnimatedContainer(/* 动画属性 */),
);
```

---

### **五、平台相关与原生交互**
#### 9. **如何调用 Android/iOS 原生功能？**
**答案**：
• **平台通道（Platform Channel）**：通过 `MethodChannel` 传递消息。
• **步骤**：
  1. Flutter 发送方法名和参数。
  2. 原生端（Java/Swift）处理并返回结果。

**示例**：
```dart
// Flutter 端
const channel = MethodChannel('battery');
final batteryLevel = await channel.invokeMethod('getBatteryLevel');
```

---

#### 10. **如何处理不同平台的 UI 适配？**
**答案**：
• **平台判断**：使用 `Platform.isAndroid` 或 `Theme.of(context).platform`。
• **自适应组件**：优先使用 `Material` 和 `Cupertino` 风格组件（如 `Switch`）。

**示例**：
```dart
Widget buildButton() {
  if (Platform.isIOS) {
    return CupertinoButton(onPressed: () {}, child: Text('iOS'));
  } else {
    return ElevatedButton(onPressed: () {}, child: Text('Android'));
  }
}
```

---

### **六、开放性问题**
#### 11. **Flutter 与 React Native 的架构差异？**
**答案**：
• **渲染引擎**：Flutter 使用 Skia 自绘，无原生控件依赖；RN 映射为原生组件。
• **性能**：Flutter 避免了 Bridge 通信，滚动和动画更流畅。
• **开发体验**：Flutter 的热重载（Hot Reload）更稳定。

---

#### 12. **你如何设计一个 Flutter 插件？**
**答案模板**：
1. **功能拆分**：确定插件核心功能（如相机扫描）。
2. **平台通道**：定义 `MethodChannel` 通信协议。
3. **原生实现**：Android（Java/Kotlin）和 iOS（Swift/Obj-C）编写底层代码。
4. **Dart 封装**：提供易用的 Dart API，处理异常和兼容性。
5. **测试与发布**：编写单元测试，发布到 pub.dev。

---

### **七、资源推荐**
• **官方文档**：[Flutter Docs](https://docs.flutter.dev/)
• **性能优化**：[Flutter 性能优化指南](https://docs.flutter.dev/perf)
• **实战案例**：[Flutter Samples](https://flutter.github.io/samples/)

掌握这些知识点后，结合项目中的性能优化案例或复杂组件实现，可在面试中脱颖而出！ 🚀



# 关于Flutter初始化流程，我必须告诉你的是...
https://www.yuque.com/xytech/flutter/cqhql4

最近在做性能优化的时候发现，在混合栈开发中，第一次启动Flutter页面的耗时总会是第二次启动Flutter页面耗时的两倍左右，这样给人感觉很不好。分析发现第一次启动Flutter页面会做一些初始化工作，借此，我梳理了下Flutter的初始化流程。
2. Flutter初始化时序

Flutter初始化主要分四部分，FlutterMain初始化、FlutterNativeView初始化、FlutterView初始化和Flutter Bundle初始化。
我们先看下Flutter初始化的时序图，来整体把握下Flutter初始化的一般流程：
Flutter初始化时序
3. 具体分析
3.1 FlutterMain初始化

这部分初始化工作是由Application.onCreate方法中调用开始的，在Application创建的时候就会初始化完成，不会影响Flutter页面的第一次启动，所以这里只是做一个简单分析。
从FlutterMain.startInitialization方法代码中可以轻易看出来，初始化主要分四部分。
前面三部分比较类似，分别是初始化配置信息、初始化AOT编译和初始化资源，最后一部分则是加载Flutter的Native环境。
这部分感兴趣的同学可以看下FlutterMain.java源码，逻辑还是比较清晰的。
# 在Flutter中嵌入Native组件的正确姿势是...
https://www.yuque.com/xytech/flutter/gb9173

在漫长的从Native向Flutter过渡的混合工程时期，要想平滑地过渡，在Flutter中使用Native中较为完善的控件会是一个很好的选择。本文希望向大家介绍AndroidView的使用方式以及在此基础之上拓展的双端嵌入Native组件的解决方案。

1.1. DemoRun

嵌入地图这一场景可能在很多App中都会存在，但是现在的地图SDK都没有提供Flutter的库，而自己开发一套地图显然不太现实。这种场景下，使用混合栈的形式是一个比较好的选择。我们可以直接在Native的绘图树中嵌入一个Map，但是这个方案嵌入的View并不在Flutter的绘图树中，是一种比较暴力且不优雅的方式，使用起来也很费劲。

这时候，使用Flutter官方提供的控件AndroidView就是一种比较优雅的解决方案了。这里做了一个简单的嵌入高德地图的demo，就让我们跟着这个应用场景，看一下AndroidView的使用方式和实现原理。

1.2. AndroidView使用方式

AndroidView的使用方式和MethodChannel类似，比较简单，主要分为三个步骤：

第一步：在dart代码的相应位置使用AndroidView，使用时需要传入一个viewType，这个String将用于唯一标识该Widget，用于和Native的View建立关联.

第二步：在native侧添加代码，写一个PlatformViewFactory，PlatformViewFactory的主要任务是，在create()方法中创建一个View并把它传给Flutter（这个说法并不准确，但是我们姑且可以这么理解，后续会进行解释）



第三步：使用registerViewFactory()方法，注册刚刚写好的PlatformViewFactory，该方法需要传入两个参数，第一个参数需要和之前在Flutter端写的viewType对应，第二个参数是刚刚写好的的PlatformViewFactory。



配置高德地图的部分这里就省略不说了，官方有比较详细的文档，可以去高德开发者平台进行查阅。

以上便是使用AndroidView的所有操作，总体看起来还是比较简单的，但是真正要用起来，还是有两个无法忽视的问题：

1. View最终的显示尺寸由谁决定？
2. 触摸事件是如何处理的？

下面就让小闲鱼来给各位一一解答。

2. 原理讲解

想要解决上面的两个问题，首先必须得理解所谓"传View"的本质是什么？

2.1. 所谓"传View"的本质是什么？

要解决这个问题，自然避免不了的需要去阅读源码，从更深的层面去看这个传递的整个过程，可以整理出一张这样的流程图：



我们可以看到，Flutter最终拿到的是native层返回的一个textureId。根据native的知识，这个textureId是已经在native侧渲染好了的，view的绘图数据对应的ID，通过这个ID可以直接在GPU中，找到相应的绘图数据并使用，那么Flutter是如何去利用这个ID的呢？

在之前的深入了解Flutter界面开发中，也给大家介绍了Flutter的绘图流程，我这里也给大家再简单整理一下。

Flutter的Framework层最后会递交给Engine层一个layerTree，在管线中会遍历layertree的每一个叶子节点，每一个叶子节点最终会调用Skia引擎完成界面元素的绘制，在遍历完成后，在调用glPresentRenderBuffer（IOS）或者glSwapBuffer(Android)按完成上屏操作。

Layer的种类有很多，而AndroidView则使用的是其中的TextureLayer。TextureLayer在之前的《Flutter外接纹理》中有更为详细的介绍，这里就不再赘述。TextureLayer在被遍历到时，会调用一个engine层的方法SceneBuilder::addTexture() 将textureId作为参数传入。最终在绘制的时候，skia会直接在GPU中根据textureId找到相应的绘制数据，并将其绘制到屏幕上。

那么是不是谁拿到这个ID都可以进行这样的操作呢？答案当然是否定的，Texture数据存储在创建它的EGLContext对应的线程中，所以如果在别的线程进行操作是无法获取到对应的数据的。这里需要引入几个概念：

● 显示屏对象（Display）：提供合理的显示器的像素密度和大小的信息
● Presentation：它给Android提供了在对应的上下文（Context）和显示屏对象（Display）上绘制的能力，通常用于双屏异显。

这里不展开讲解Presentation，我们只需要明白Flutter是通过Presentation实现了外接纹理，在创建Presentation时，传入FlutterView对应的Context和创建出来的一个虚拟显示屏对象，使得Flutter可以直接通过ID找到并使用Native创建出来的纹理数据。

2.2. View最终的显示尺寸由谁决定？

通过上面的流程大家应该都能想到，显示尺寸看起来像是由两部分决定的：AndroidView的大小，Android端View的大小。那么实际上到底是有谁来决定的呢，让我们来做一个实验？

直接新建一个Flutter工程，并把中间改成一个AndroidView。

//Flutter
class _MyHomePageState extends State<MyHomePage> {
  double size = 200.0;

  void _changeSize() {
    setState(() {
      size = 100.0;
    });
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text(widget.title),
      ),
      body: Container(
        color: Color(0xff0000ff),
        child: SizedBox(
          width: size,
          height: size,
          child: AndroidView(
            viewType: 'testView',
          ),
        ),
      ),
      floatingActionButton: new FloatingActionButton(
        onPressed: _changeSize,
        child: new Icon(Icons.add),
      ),
    );
  }
}

在Android端也要加上对应的代码，为了更好地看出裁切效果，这里使用ImageView。

//Android
@Override
public PlatformView create(final Context context, int i, Object o) {
    final ImageView imageView = new ImageView(context);
    imageView.setLayoutParams(new ViewGroup.LayoutParams(500,500));
    imageView.setBackground(context.getResources().getDrawable(R.drawable.idle_fish));
    return new PlatformView() {
        @Override
        public View getView() {
            return imageView;
        }

        @Override
        public void dispose() {

        }
    };
}



首先先看AndroidView，AndroidView对应的RenderObject是RenderAndroidView，而一个RenderObject的最终大小的确定是存在两种可能，一种是由父节点所指定，还有一种是在父节点指定的范围中根据自身情况确定大小。打开对应的源码，可以看到其中有个很重要的属性sizedByParent = true，也就是说AndroidView的大小是由其父节点所决定的，我们可以使用Container、SizedBox等控件控制AndroidView的大小。

AndroidView的绘图数据是Native层所提供的，那么当Native中渲染的View的实际像素大小大于AndroidView的大小时，会发生什么呢？通常情况下，这种情况的处理思路无非就两种选择，一种是裁切，另一种是缩放。Flutter保持了其一贯的做法，所有out of the bounds的Widget统一使用裁切的方式进行展示，上面所描述的情况就被当作是一种out of the bounds。

当这个View的实际像素大小小于AndroidView的时候，会发现View并不会相应地变小（Container的背景色并没有显露出来），没有内容的地方会被白色填充。这其中的原因是SingleViewPresentation::onCreate中，会使用一个FrameLayout作为rootView。

# Flutter瘦身大作战
https://www.yuque.com/xytech/flutter/hnxs1g


# 【QCon2018】Flutter+Dart三端一体化开发
https://www.yuque.com/xytech/flutter/gh9fq9


在通过Flutter统一iOS和Android的两端开发后，我们想尝试进一步提高开发效率，提出一个人写三端的想法，但是客户端写服务端会有一些问题：
（1）客户端的开发方式和思维方式和服务端开发有很多不同点。客户端是本地程序，服务端是分布式系统；客户端开发注重细节和检验，服务端关注性能和容灾。
（2）服务端的部署很麻烦，机器很多，运维也很麻烦，客户端同学很难掌握。
（3）这种做法纯粹给客户端同学加工作量，影响需求进度。


我们想让客户端同学简单的实现服务接口，像搭乐高积木一样方便。
由此提出“胶水层”的概念，在客户端和服务端中间加一层“胶水层”，它主要做的事情是调用后端服务，拼装客户端所需要的数据。
客户端是Flutter，用的是Dart语言，为了让客户端同学快速上手，“胶水层”优先考虑Dart。


Dart Server实现“胶水层”业务逻辑，框架提供了高性能的HTTP服务、服务路由、代码隔离、动态部署等基础服务。通过C++扩展或Service Mesh接入原有的JAVA中间件。而原有的后端服务下沉为领域服务，每个具体的领域由固定的服务端同学维护。
需要注意“胶水层多变、领域层少变”的原则，才能真正的提高开发效率。
我们选用闲鱼流量最大的商品详情接口在线上实验，运行三个多月，没任何线上问题，内存占用稳定。RT和最大QPS基本和原有JAVA服务持平。


只是统一前后端语言是不够的，怎么让Flutter开发同学快速上手。
（1）能否像写客户端程序一样写服务端胶水层？做到本地开发、运行、调试。
All-IN-IDE,通过IDE Plugins，支持一键创建接口框架，快速部署本地代码到服务端，在开发机器直接调用远程服务并把结果和日志同步回来……
（2）怎样才能快速的找到所需要的服务？能否像调用本地方法一样调用后端服务？
在服务接口和方法加注解，通过注解生成文档，可以在文档平台上搜索查询。
通过自己实现的JAVA2Dart的代码转换工具，可以把一个定义了接口和数据结构的Jar包转成Dart代码，同步也生成服务注册和发现的代码。
（3）在写代码的时候基本能否不考虑埋运维数据？
在代码生成中预埋了日志和降级开关。


移级部署是通过Dart Isolate来实现。


通过不同技术栈的同学实验。
没有任何Dart基础的Java后端开发和有Flutter基础的移动应用开发同学，基本都可以在1小时内搭好环境并把Hello World写好部署，最多半天可以写一个带有真正业务涵义的接口上线。
因为Dart Server是单线程异步开发模型，很容易写出高性能的并发请求代码。
客户端同学对后端服务理解要一定的过程，所以接口设计清晰很重要。


三端一体化开发的模式，一个人写了iOS、Android和它们所依赖的服务接口。
（1）以前在客户端拿到后端实现协议数据后，一般还要做从数据模型到视图模型的转换，现在不需要了，可以定义符合客户端展示需求的数据结构，在胶水层实现数据填充。由于前后端都是Dart语言，定义的数据结构代码是通用的，不存在兼容问题，不需要引入第三方协议定义语言。
（2）原来在客户端写的一些业务逻辑，可以根据需要转移到胶水层。
（3）Flutter实现iOS和Android两端UI。可以通过动态Widget管理框架，配合胶水层下发模板数据，让Flutter有一定的UI动态性。
三端一体化开发的一些好处：
（1）减少前后端沟通成本，减少因协同引起的时间等待成本。
（2）开发更加灵活，部分逻辑在服务端实现让客户端扩展性更好。
（3）一体化开发、全链路日志、无冲突调试，让错误排查成本降低。
（4）可以更关注领域服务的性能、通用性等问题。

# 揭秘Flutter Hot Reload（原理篇）
https://www.yuque.com/xytech/flutter/uhw8vw

1. 前言

闲鱼技术团队在2018年引入Flutter，目前越来越多的业务场景在Flutter上使用。Flutter的亚秒级热重载一直是开发者的神兵利器，提供给开发者快速修改UI，增加功能，修复bug，不需要重新启动应用，即可看到改动效果。

热重载（HotReload）到底是如何实现的呢？

本文带你一步步揭开Hot Reload神秘面纱。

2. 源码分析

2.1 FlutterTools调试

想了解HotReload如何运行，首先，我们需要掌握flutter_tools的调试方法。

我们创建一个名为fluttertest的简单flutter项目作为例子。



使用AndroidStudio打开flutter_tools(/flutter/packages/flutter_tools)，断点设置为HotRunner.restart()方法



添加新的Debug Configurations，woking directory设置为fluttertest项目地址



触发flutter_tools debug按钮，待app启动后，简单改动fluttertest代码



在flutter_tools Debug Console中输入r，开始调试。



断点成功！

2.1 HotReload基本流程

那么HotReload如何运行呢？

当我们使用运行HotReload，无论是通过控制台输入r启动，或是点击闪电运行，最终是运行flutter_tools中的HotRunner.restart(fullRestart: false)方法（上文断点处）。

restart()方法中，调用了_reloadSources(pause: pauseAfterRestart)，正是HotReload的主要代码之处。

（源码位于/flutter/packages/flutter_tools/lib/src/run_hot.dart）
Future<OperationResult> _reloadSources({ bool pause = false })



_reloadSources方法中：

1. 首先_updateDevFS()会将工程中文件逐一扫描，检查是否有删除、新增或者改动，扫描完成后，生成kernel files，命名为app.dill.incremental.dill文件，通过HTTP端口发送给DartVM;
2. 将扫描生成的.dill文件路径，通过RPC接口调用_reloadSources，进行资源加载；
3. 确认VM资源重载成功，将FlutterDevice UI线程重置，通过RPC接口，触发flutter widgets树重建、重绘

理解这个流程，前提需要明确Flutter的编译模式。

编译模式大体可以分为两种，AOT编译与JIT编译。JIT全称是Just In Time，代码可以在程序执行时期编译，因为要在程序执行前进行分析、编译，JIT编译可能会导致程序执行时间较慢；而AOT编译，全称Ahead Of Time，是在程序运行前就已经编译，从开发者修改代码、编译较慢，但运行时不需要进行分析、编译，因此执行速度更快。

Flutter使用了独特的编译模式，开发阶段下，使用Kernel Snapshot模式(对应JIT编译)，将dart代码生成标记化的源代码，运行时编译，解释执行；release阶段，ios使用AOT编译，编译器将dart代码生成汇编代码，最终生成app.framwork，android使用了Core JIT编译，dart转化为二进制模式，在VM启动前载入。

因此，基于开发阶段的Kernel Snapshot编译模式下，我们可以得知Hot Reload扫描项目文件，将有改动的dart文件转化为标记化源代码kernel files，发送到正在运行的DartVM，DartVM替换资源，然后通知Flutter Framework重建、重新布局、重新绘制WidgetsTree，即可看到改动效果。

到这里，我们已经了解HotReload基本运行流程，但app.dill.incremental.dill是怎样的文件，又怎么和旧文件替换的呢？

2.2 增量代码扫描

在启动应用后，启动HotReload之前，编译成功后，项目目录/fluttertest/build文件中，自动生成了app.dill文件。

通过strings命令解析，发现是标记化的源代码。



(篇幅较长，只截取了一部分)

同时，通过adb shell检查，发现设备中/data/data/com.loommo.fluttertest/com.loommo.fluttertest/app_flutter/flutter_assets下，生成三个文件；


其中，kernel_blob.bin通过strings命令解析，发现内容与app.dill一致；


首次启动应用后，生成的业务代码文件app.dill，在设备上体现为kernel_blob.bin；
# 如何进一步提高flutter的内存表现
https://www.yuque.com/xytech/flutter/zcdgo2
# 谷歌开发者大会2018实录——Flutter篇
# 流言终结者- Flutter和RN谁才是更好的跨端开发方案？
背景
论坛上很多小伙伴关心为什么闲鱼选择了Flutter而不选择其他跨端方案？站在质量的角度，高性能是一个很重的因素，我们使用Flutter重写了宝贝详情页之后，对比了Flutter和Native详情页的性能表现，结论是中高端机型上Flutter和Native不相上下，在低端机型上，Flutter会比Native更加的流畅，其实闲鱼团队在使用Flutter做详情页过程中，没有更多地关注性能优化，为了更快地上线，也是优先功能的实现，不过测试结果出来之后，却出乎意料地优于原先的Native的实现(具体的测试结果，属于敏感数据，要走披露流程，伤不起…)

但是这样很显然不能敷衍过去，仔细想了想，确实Flutter的定位并不是要替代Native，他只想做一个极致的跨端解决方案，所以还是要回到跨端解决方案的赛道，给您从性能角度比一比，谁才是更好的跨端开发方案？

参赛选手
[Flutter]
Flutter is Google’s mobile app SDK for crafting high-quality native interfaces on iOS and Android in record time. Flutter works with existing code, is used by developers and organizations around the world, and is free and open source.
[REACT NATIVE]
We're working on a large-scale rearchitecture of React Native to make it more flexible and integrate better with native infrastructure in hybrid JavaScript/native apps.

鸣锣开赛
怎么比
怎么比较确实伤脑筋，自己也写了一个Flutter 和 一个RN的App，但是实在太丑陋，担心大家关注点都到我的烂代码上了，所以在Github上找到了一个跨端开发高手Car Guo，用Flutter和RN分别实现的一个实际可用的App，Car Guo谦虚表示其实也写的比较粗糙，但是在我看来这个是具备真实使用场景的App（Github客户端App，提供丰富的功能，旨在更好的日常管理和维护个人Github），还是有代表性的
[Flutter] https://github.com/CarGuo/GSYGithubAppFlutter
[REACT NATIVE] https://github.com/CarGuo/GSYGithubApp

场景
1、默认登录成功
2、“动态”页，点击搜索按钮，搜索关键字“Java”，正常速度浏览3页，等第4页加载完成后回退
3、点击“趋势”页Tab，浏览Feeds到页面底部，点击最底部的Item，进入Item后，浏览详情+浏览3页的动态后回退，到“我的”Tab页
4、查看“我的”Feeds到底部，点击右上角搜索按钮，搜索关键字“C”，浏览3页后，等第4页加载完成后场景结束

测试工具
● iOS
● 掌中测(iOS端)：CPU，内存
● Instruments：FPS
● Android
● 基于Adb的Shell脚本：CPU，内存，FPS

测试机型
● iOS：iPhone 5c 9.0.1 / iPhone 6s 10.3.2
● Android：Xiaomi 2s 5.0.2 / Sumsung S8 7.0

数据分析
iOS
iPhone 5c 9.0.1


iPhone 6s 10.3.2


测试结论
1、Flutter在低端和中端的iOS机型上，FPS的表现都优于RN
2、CPU的使用上Flutter在低端机上表现略差于RN，中端机型略优于RN
3、值得注意的是内存上的表现(上图红色箭头区域)，Flutter在低端机型上的起始内存和RN几乎一致，在中端机型上会多30M左右的内存(分析为Dart VM的内存)，可以想到这应该是Flutter针对低端和中端机型上内存策略是不一样的，可用内存少的机型，Dart VM的初始内存少，运行时进行分配(这样也可以理解为什么在低端机上带来了更多的CPU损耗)，中端机器上预分配了更多的VM内存，这样在处理时会更加的游刃有余，减少CPU的介入，带来更流畅的体验.
可以看出，Flutter团队在针对不同机型上处理更加的细腻，目的就是为了带来稳定流畅的体验。

Android
Xiaomi 2s 5.0.2


Sumsung S8 7.0

● 注: MFS - Max Frame Space: 指的是去掉buffer之后的两帧的时间差

测试结论
1、Flutter在高低端机的CPU上的表现都优于RN，尤其在低端的小米2s上有着更优的表现
2、Android端在原来FPS基础上增加了流畅度的指标，FPS和流畅度的表现Flutter优于RN(计算规则见附参考文章)
3、Android端的内存也是值得关注的一点，在小米2s上起始内存Flutter明显比RN多40M，RN在测试过程中内存飞涨，Flutter相比之下会更稳定，内存上RN侧的代码是需要调优的，同一套代码Flutter在Android和iOS上并没有很大的差异，但是RN的却要在单端调优，Flutter在这项比拼上又更胜一筹。
比较奇怪的是三星S8上Flutter和RN的初始内存是一致的，猜测是RN也Android高端机型上也会预分配一些内存，具体细节还需要更进一步的研究。

升旗仪式
看了之前的数据，做为裁判的我会把金牌颁给Flutter，在测试过程中的体验和数据上来看Flutter都优于RN，并且开发这个App的是一位Android的开发同学，Flutter和RN对于他来说都是全新的技术栈，Car Guo同学更倾向性地让大家得到一致性的使用体验，性能方面并没有投入太多的时间进行调优，由此看出Flutter在跨端开发上在同样投入的情况下，可以获得更佳的性能，更好的用户体验。

一些思考

拿到了这些数据，也感受到Flutter带来福利，那Flutter为什么可以做到这么流畅呢？Flutter是如何优化了渲染，Dart VM的Runtime是怎么玩的？请大家继续关注后续解密文章，感兴趣的同学欢迎加入闲鱼，成为跨端解决方案的领军者。

参考
● Android FPS&流畅度: https://testerhome.com/topics/4775
● Android 内存获取方式:
dumpsys meminfo packageName
● Android CPU 通过busybox 执行 top命令获取
● iOS CPU获取方式：累计每个线程中的CPU利用率
```Objective-C
for (j = 0; j < thread_count; j++)
{
ATCPUDO *cpuDO = [[ATCPUDO alloc] init];
char name[256];
pthread_t pt = pthread_from_mach_thread_np(thread_list[j]);
if (pt) {
name[0] = '\0';
__unused int rc = pthread_getname_np(pt, name, sizeof name);
cpuDO.threadid = thread_list[j];
cpuDO.identify = [NSString stringWithFormat:@"%s",name];
}
thread_info_count = THREAD_INFO_MAX;
kr = thread_info(thread_list[j], THREAD_BASIC_INFO,(thread_info_t)thinfo, &thread_info_count);
if (kr != KERN_SUCCESS) {
return nil;
}
basic_info_th = (thread_basic_info_t)thinfo;
if (!(basic_info_th->flags & TH_FLAGS_IDLE)) {
tot_sec = tot_sec + basic_info_th->user_time.seconds + basic_info_th->system_time.seconds;
tot_usec = tot_usec + basic_info_th->system_time.microseconds + basic_info_th->system_time.microseconds;
tot_cpu = tot_cpu + basic_info_th->cpu_usage / (float)TH_USAGE_SCALE * 100.0;
cpuDO.usage = basic_info_th->cpu_usage / (float)TH_USAGE_SCALE * 100.0;
if (container) {
[container addObject:cpuDO];
}
}
} // for each thread
```
# Flutter快速上车之Widget
Flutter作为一种全新的响应式，跨平台，高性能的移动开发框架。从开源以来，已经得到越来越多开发者的喜爱。闲鱼是最早一批与谷歌展开合作，并在重要的商品详情页中使用上线的公司。一路走来，积累了大量的开发经验。虽然越来越多的技术大牛在flutter世界中弄得风声水起，但是肯定有很多的flutter小白希望能快速上手，享受flutter编程的乐趣。本文就是面向刚刚踏上futter的同学，从Flutter体系中最基本的一个概念widget入手学习Flutter。希望能助力每一位初学者。

可能大家要问的第一个问题是为什么从Widget开始？



从flutter的架构图中不难看出widget是整个视图描述的基础。Flutter 的核心设计思想便是

Everything’s a Widget
即一切即Widget。在flutter的世界里，包括views,view controllers,layouts等在内的概念都建立在Widget之上。widget是flutter功能的抽象描述。所以掌握Flutter的基础就是学会使用widget开始。

本文会从大家熟悉的UI绘制视角来介绍flutter组件和布局的基础知识。首先罗列了UI开发中最为常用，最为基础的组件。下面逐一进行介绍。



1 组件篇

1.1 Text
Text几乎是UI开发中最为重要的组件之一了，UI上面文字的展示基本上都要靠Text组件来完成。Flutter提供了原生的Text组件。Text的配置属性是很丰富的,属性主要分为两个部分一个是对齐&显示控制相关的在Text类的属性中，另一类是样式相关的属性使用单独的类TextStyle进行控制。跟native控件相比（以android为例），Text的组件基本上提供了同等的能力，并且提供了更加丰富的样式装饰能力。详细的属性可以参考官方文档flutter text.

1.1.1 实践Coding

设置文字&文字大小&颜色&行数限制&文本对齐

const Text(  "hello flutter!",
            textAlign: TextAlign.center,
            maxLines: 1,
            overflow: TextOverflow.ellipsis, // 溢出显示。。。
            style: TextStyle(fontSize: 30.0,// 文字大小
               color: Colors.yellow),// 文字颜色
          ),

效果如下：



1.2 Image

图片也是UI部分开发最为重要的组件之一。在能看图随看文字的年代，图片是页面展示的重中之重！Flutter同样原生提供了Image组件。下面重点介绍一下几个重点:

1.2.1 缩放
怎样设置图片显示的缩放方式呢？
Flutter中的图片缩放是fit字段来控制的。这是对最终图片展示效果影响很大的一个参数，也是容易出错的点。下面逐个分析一下flutter Image组件提供的缩放方式。

缩放属性值在BoxFit枚举中

下面列出的图片是flutter官方对各种缩放做的图片示例。基本上都表述很清楚了，就整理出来供大家查阅。
属性	缩放效果
fill
contain
cover
fitWidth
fitHeight
none
scaleDown

1.2.2 图片获取

怎样从各种来源加载图片？
默认的Image组件不能直接显示图片，他需要一个ImageProvider来提供具体的图片资源的（即Image中的image字段需要赋值）。咋一看这确实非常麻烦，但是实际上ImageProvider并不需要完全重新自己实现。在Image类中目前提供了一下几个实现好的ImageProvider，基本能满足常见的需求。
ImageProvider	用途
Image.asset	从asset资源文件中获取图片
Image.network	从网络获取图片
Image.file	从本地file文件中获取图片
Image.memory	从内存中获取图片

Image同样支持GIF图片

网络请求Image是大家最常见的操作。这里重点说明两个点：
● 缓存

ImageCache是ImageProvider默认使用的图片缓存。ImageCache使用的是LRU的算法。默认可以存储1000张图片。如果觉得缓存太大，可以通过设置ImageCache的maximumSize属性来控制缓存图片的数量。也可以通过设置maximumSizeBytes来控制缓存的大小（默认缓存大小10MB）。

● CDN优化

如果想要使用cdn优化，可以通过url增加后缀的方式实现。默认实现中没有这个点，但是考虑到cdn优化的可观收益，建议大家利用好这个优化。

1.2.3 FadeInImage

在实际开发中，考虑到图片加载速度可能不能达到预期。所以希望能增加渐入效果&增加placeHolder的功能。Flutter同样提供的这样的组件——FadeInImage。

FadeInImage也提供了从多种渠道加载图片的能力。这块跟上面所说差异不大。这里不再赘述。

1.2.4 实践Coding

● 从网络获取图片保持图片比例并尽可能大的放入

new Image.network(
            'https://gw.alicdn.com/tfs/TB1CgtkJeuSBuNjy1XcXXcYjFXa-906-520.png',
            fit: BoxFit.contain,
            width: 150.0,
            height: 100.0,
          ),

● 效果如下：


1.3 Container

Flutter的设计思想就是完全的widget化。这也就是说连最基本的padding,Center都是widget。设想一下如果每次写view，连padding,Center都要自己包一个组件是一种怎样的体验？作为一个工程师，别给只给我谈思想，实际操作的操作效率也同样非常重要。flutter 官方也意识到了这个问题，他们从实际编写效率的角提供了一个友好高效的封装，这就是Container！首先没有任何疑问，Container 本身也是一个widget。但是他却提供了对基础widget的封装，提高了UI基础装饰能力的表达效率。Container类似于android中的ViewGroup。

相信大部分的属性大家都会感觉非常亲切，结合代码注释都比较容易理解，这里就不再赘述。其中需要重点解释一下的是：Decoration和BoxConstraints。

1.3.1 装饰

Decoration是对Container进行装饰的描述。其概念类似与android中的shape。一般实际场景中会使用他的子类BoxDecoration。BoxDecoration提供了对背景色，边框，圆角，阴影和渐变等功能的定制能力。
需要注意几个点：
● BoxDecoration的image属性相当于设置的是背景图。但是image会绘制在color 和gradient之上。
● image是需要一个DecorationImage类的实现。DecorationImage的属性和Image组件比较类似，可以复用Image组件中的ImageProvider。

1.3.2 大小

BoxConstraints其实是对Container组件大小的描述。BoxConstraints属性比较简单。如果不太清楚可以研究一下盒子模型。这里有个点需要重点说明一下：
● 如何表达尽可能大这样的意思？（类似于android中的match_parent）Flutter中可以使用double.infinity来做出类似的表达。

new Container(
         alignment: Alignment.center,
         padding: const EdgeInsets.all(15.0),
         margin: const EdgeInsets.all(15.0),
         decoration: new BoxDecoration(
           border: new Border.all(
             color: Colors.red,
           ),
           image: const DecorationImage(
             image: const NetworkImage(
               'https://gw.alicdn.com/tfs/TB1CgtkJeuSBuNjy1XcXXcYjFXa-906-520.png',
             ),
             fit: BoxFit.contain,
           ),
           //borderRadius: const BorderRadius.all(const Radius.circular(6.0)),
           borderRadius: const BorderRadius.only(
             topLeft: const Radius.circular(3.0),
             topRight: const Radius.circular(6.0),
             bottomLeft: const Radius.circular(9.0),
             bottomRight: const Radius.circular(0.0),
           ),
         ),
         child: Text(''),
       ),

1.4 手势操作

手势操作是最常见的UI交互操作。在Flutter中手势识别也是一个widget！这点对新人来说又是一个新鲜的地方。通常来说可以通过GestureDetector类来完成点击事件的处理。使用时只需要将GestureDetector包裹在目标widget外面，再实现对应事件的函数即可。从点击到长按，从缩放到拖动，这个类基本上都有相应的实现。具体可以参见组件文档。

2. 布局

页面布局应该是UI编写最为根本的知识，其主要的描述的是父子组件子子组件之间的位置关系。首先我们理解一下官方文档的逻辑：



将布局分为单孩子和多孩子是Flutter布局的一大特色。这点对native研发同学来说会比较新鲜。单孩子组件主要继承自SingleChildRenderObjectWidget。这些组件能提供丰富的装饰能力（例如container），也能提供部分特定的布局能力（例如center）。多孩子组件继承自MultiChildRenderObjectWidget，能提供更加丰富的布局能力（Flex,Stack,flow）,但几乎没有装饰的能力。下面介绍几个重点布局：

2.1 Flex
Flutter在布局上也提供了完整的Flex布局能力。但是在Flutter官方文档中Layout Widgets，是看不到任何Flex的影子的。映入眼帘的却是Row，Column，这些是什么鬼？其实不难发现类似Row，Column 这样的组件，他们的基类都是Flex。Row和Column差别是设置了不同的flex-direction。而之所这么设计，是因为Flutter的widget从开始设计之初就考虑到UI布局语义保持的重要性。这块应该部分借鉴了前端的经验，极力避免一个div搞定全部页面的尴尬（当然flutter也可以使用Flex来做同样的事情，但是并不建议这么做）。
Flutter使用的Flex模型基本上跟传统的Css类似。这块前端同学可以快速上手。但是Flex对于客户端同学来说是一种全新的布局方式。Flex的基础知识可以参看flex布局基础。由于篇幅有限这里不展开叙述。这里只重点强调一个点：
如下图flex布局概念如下：

flex通过direction设置了flex的主轴方向即main axis。和主轴垂直的方向叫做cross axis。flex布局中对子布局的控制是从main axis 和cross axis两个方向上进行的。例如居中有main axis居中和cross axis居中。两者都居中才是容器的完全居中。这点是客户端同学可能会容易弄混的地方。重点关注一下。


# 《深入了解Flutter界面开发》
https://www.yuque.com/xytech/flutter/tge705
https://yuanxuxu.com/2018/09/13/flutter-load-config-by-env/


本文不是flutter界面开发入门文章，而是一篇深入介绍Flutter framework关于视图树的创建与管理机制、布局、渲染的原理、以及flutter布局与渲染相关性能优化的设计思路的文章。同时介绍在使用flutter开发过程中，遇到的一些坑和相应的解决方案。

1. 跨平台应用的框架，没有使用WebView或者系统平台自带的控件，使用自身的高性能渲染引擎(Skia)自绘，
2. 界面开发语言使用dart，底层渲染引擎使用C, C++
3. 组合大于继承，控件本身通常由许多小型、单用途的控件组成，结合起来产生强大的效果，类的层次结构是扁平的，以最大化可能的组合数量

## 视图树 Widget&Element&RenderObject

flutter视图树包含了三种树，上图只是介绍了三颗树的基础class的对应关系和功能介绍

### 创建树
1. 创建widget树
2. 调用runApp(rootWidget)，将rootWidget传给rootElement,做为rootElement的子节点,生成Element树，由Element树生成Render树
