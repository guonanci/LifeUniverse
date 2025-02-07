*LogCat是Android Studio的一个强大工具，有些问题不会在cmd抛出具体细节，但会在LogCat里面查出*。这里有一篇教程文章：<https://segmentfault.com/a/1190000044852543。>

# unknown:ReactNative

Unable to download JS bundle
com.facebook.react.common.DebugServerException: Could not connect to development server.

Try the following to fix the issue:
• Ensure that Metro is running
• Ensure that your device/emulator is connected to your machine and has USB debugging enabled - run 'adb devices' to see a list of connected devices
• Ensure Airplane Mode is disabled
• If you're on a physical device connected to the same machine, run 'adb reverse tcp:8081 tcp:8081' to forward requests from your device
• If your device is on the same Wi-Fi network, set 'Debug server host & port for device' in 'Dev settings' to your machine's IP address and the port of the local dev server - e.g. 10.0.1.1:8081

URL: <http://192.168.0.84:8081/index.bundle?platform=android&dev=true&lazy=true&minify=false&app=com.xiaomarobot&modulesOnly=false&runModule=true>
 at com.facebook.react.devsupport.BundleDownloader$1.onFailure(BundleDownloader.java:126)
 at okhttp3.internal.connection.RealCall$AsyncCall.run(RealCall.kt:525)
 at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1167)
 at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:641)
 at java.lang.Thread.run(Thread.java:929)
Caused by: java.net.UnknownServiceException: CLEARTEXT communication to 192.168.0.84 not permitted by network security policy
 at okhttp3.internal.connection.RealConnection.connect(RealConnection.kt:188)
 at okhttp3.internal.connection.ExchangeFinder.findConnection(ExchangeFinder.kt:226)
 at okhttp3.internal.connection.ExchangeFinder.findHealthyConnection(ExchangeFinder.kt:106)
 at okhttp3.internal.connection.ExchangeFinder.find(ExchangeFinder.kt:74)
 at okhttp3.internal.connection.RealCall.initExchange$okhttp(RealCall.kt:255)
 at okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.kt:32)
 at okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.kt:109)
 at okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.kt:95)
 at okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.kt:109)
 at okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.kt:83)
 at okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.kt:109)
 at okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.kt:76)
 at okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.kt:109)
 at okhttp3.internal.connection.RealCall.getResponseWithInterceptorChain$okhttp(RealCall.kt:201)
 at okhttp3.internal.connection.RealCall$AsyncCall.run(RealCall.kt:517)
 at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1167)
 at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:641)
 at java.lang.Thread.run(Thread.java:929)

Exception in native call
java.lang.RuntimeException: Unable to load script. Make sure you're either running Metro (run 'npx react-native start') or that your bundle 'index.android.bundle' is packaged correctly for release.
 at com.facebook.react.bridge.CatalystInstanceImpl.jniLoadScriptFromAssets(Native Method)
 at com.facebook.react.bridge.CatalystInstanceImpl.loadScriptFromAssets(CatalystInstanceImpl.java:234)
 at com.facebook.react.bridge.JSBundleLoader$1.loadScript(JSBundleLoader.java:27)
 at com.facebook.react.bridge.CatalystInstanceImpl.runJSBundle(CatalystInstanceImpl.java:263)
 at com.facebook.react.ReactInstanceManager.createReactContext(ReactInstanceManager.java:1421)
 at com.facebook.react.ReactInstanceManager.lambda$runCreateReactContextOnNewThread$2(ReactInstanceManager.java:1121)
 at com.facebook.react.ReactInstanceManager.$r8$lambda$AwGS8CysOZmWJw3kRVARHQvw9Ew(Unknown Source:0)
 at com.facebook.react.ReactInstanceManager$$ExternalSyntheticLambda5.run(Unknown Source:4)
 at java.lang.Thread.run(Thread.java:929)

Unable to download JS bundle
com.facebook.react.common.DebugServerException: Could not connect to development server.

Try the following to fix the issue:
• Ensure that Metro is running
• Ensure that your device/emulator is connected to your machine and has USB debugging enabled - run 'adb devices' to see a list of connected devices
• Ensure Airplane Mode is disabled
• If you're on a physical device connected to the same machine, run 'adb reverse tcp:8081 tcp:8081' to forward requests from your device
• If your device is on the same Wi-Fi network, set 'Debug server host & port for device' in 'Dev settings' to your machine's IP address and the port of the local dev server - e.g. 10.0.1.1:8081

URL: <http://localhost:8081/index.bundle?platform=android&dev=true&lazy=true&minify=false&app=com.xiaomarobot&modulesOnly=false&runModule=true>
 at com.facebook.react.devsupport.BundleDownloader$1.onFailure(BundleDownloader.java:126)
 at okhttp3.internal.connection.RealCall$AsyncCall.run(RealCall.kt:525)
 at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1167)
 at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:641)
 at java.lang.Thread.run(Thread.java:929)
Caused by: java.net.UnknownServiceException: CLEARTEXT communication to localhost not permitted by network security policy
 at okhttp3.internal.connection.RealConnection.connect(RealConnection.kt:188)
 at okhttp3.internal.connection.ExchangeFinder.findConnection(ExchangeFinder.kt:226)
 at okhttp3.internal.connection.ExchangeFinder.findHealthyConnection(ExchangeFinder.kt:106)
 at okhttp3.internal.connection.ExchangeFinder.find(ExchangeFinder.kt:74)
 at okhttp3.internal.connection.RealCall.initExchange$okhttp(RealCall.kt:255)
 at okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.kt:32)
 at okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.kt:109)
 at okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.kt:95)
 at okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.kt:109)
 at okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.kt:83)
 at okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.kt:109)
 at okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.kt:76)
 at okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.kt:109)
 at okhttp3.internal.connection.RealCall.getResponseWithInterceptorChain$okhttp(RealCall.kt:201)
 at okhttp3.internal.connection.RealCall$AsyncCall.run(RealCall.kt:517)
 at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1167)
 at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:641)
 at java.lang.Thread.run(Thread.java:929)

Error occurred, shutting down websocket connection: Websocket exception
java.io.EOFException
 at okio.RealBufferedSource.require(RealBufferedSource.kt:199)
 at okio.RealBufferedSource.readByte(RealBufferedSource.kt:209)
 at okhttp3.internal.ws.WebSocketReader.readHeader(WebSocketReader.kt:119)
 at okhttp3.internal.ws.WebSocketReader.processNextFrame(WebSocketReader.kt:102)
 at okhttp3.internal.ws.RealWebSocket.loopReader(RealWebSocket.kt:293)
 at okhttp3.internal.ws.RealWebSocket$connect$1.onResponse(RealWebSocket.kt:195)
 at okhttp3.internal.connection.RealCall$AsyncCall.run(RealCall.kt:519)
 at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1167)
 at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:641)
 at java.lang.Thread.run(Thread.java:929)

Couldn't connect to "ws://localhost:8081/message?device=MAR-AL00%20-%2010%20-%20API%2029&app=com.xiaomarobot&clientid=BridgeDevSupportManager", will silently retry

Couldn't connect to packager, will silently retry

Exception in native call
com.facebook.react.common.DebugServerException: The development server returned response error code: 500

URL: <http://localhost:8081/index.bundle?platform=android&dev=true&lazy=true&minify=false&app=com.xiaomarobot&modulesOnly=false&runModule=true>

Body:
{"type":"TransformError","lineNumber":0,"errors":[{"description":"node_modules\\react-native\\Libraries\\Debugging\\DebuggingOverlayRegistry.js: C:\\Users\\Administrator\\projects\\xiaoma-app\\node_modules\\react-native\\Libraries\\Debugging\\DebuggingOverlayRegistry.js: Class private methods are not enabled. Please add `@babel/plugin-transform-private-methods` to your configuration.\n\u001b[0m \u001b[90m 117 |\u001b[39m   }\u001b[33m;\u001b[39m\n \u001b[90m 118 |\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 119 |\u001b[39m   \u001b[33m#\u001b[39mfindLowestParentFromRegistryForInstance(\n \u001b[90m     |\u001b[39m   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 120 |\u001b[39m     instance\u001b[33m:\u001b[39m \u001b[33mReactNativeElement\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 121 |\u001b[39m   )\u001b[33m:\u001b[39m \u001b[33m?\u001b[39m\u001b[33mDebuggingOverlayRegistrySubscriberProtocol\u001b[39m {\n \u001b[90m 122 |\u001b[39m     \u001b[36mlet\u001b[39m iterator\u001b[33m:\u001b[39m \u001b[33m?\u001b[39m\u001b[33mReadOnlyElement\u001b[39m \u001b[33m=\u001b[39m instance\u001b[33m;\u001b[39m\u001b[0m","lineNumber":0}],"name":"SyntaxError","message":"node_modules\\react-native\\Libraries\\Debugging\\DebuggingOverlayRegistry.js: C:\\Users\\Administrator\\projects\\xiaoma-app\\node_modules\\react-native\\Libraries\\Debugging\\DebuggingOverlayRegistry.js: Class private methods are not enabled. Please add `@babel/plugin-transform-private-methods` to your configuration.\n\u001b[0m \u001b[90m 117 |\u001b[39m   }\u001b[33m;\u001b[39m\n \u001b[90m 118 |\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 119 |\u001b[39m   \u001b[33m#\u001b[39mfindLowestParentFromRegistryForInstance(\n \u001b[90m     |\u001b[39m   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 120 |\u001b[39m     instance\u001b[33m:\u001b[39m \u001b[33mReactNativeElement\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 121 |\u001b[39m   )\u001b[33m:\u001b[39m \u001b[33m?\u001b[39m\u001b[33mDebuggingOverlayRegistrySubscriberProtocol\u001b[39m {\n \u001b[90m 122 |\u001b[39m     \u001b[36mlet\u001b[39m iterator\u001b[33m:\u001b[39m \u001b[33m?\u001b[39m\u001b[33mReadOnlyElement\u001b[39m \u001b[33m=\u001b[39m instance\u001b[33m;\u001b[39m\u001b[0m","stack":"SyntaxError: C:\\Users\\Administrator\\projects\\xiaoma-app\\node_modules\\react-native\\Libraries\\Debugging\\DebuggingOverlayRegistry.js: Class private methods are not enabled. Please add `@babel/plugin-transform-private-methods` to your configuration.\n\u001b[0m \u001b[90m 117 |\u001b[39m   }\u001b[33m;\u001b[39m\n \u001b[90m 118 |\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 119 |\u001b[39m   \u001b[33m#\u001b[39mfindLowestParentFromRegistryForInstance(\n \u001b[90m     |\u001b[39m   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 120 |\u001b[39m     instance\u001b[33m:\u001b[39m \u001b[33mReactNativeElement\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 121 |\u001b[39m   )\u001b[33m:\u001b[39m \u001b[33m?\u001b[39m\u001b[33mDebuggingOverlayRegistrySubscriberProtocol\u001b[39m {\n \u001b[90m 122 |\u001b[39m     \u001b[36mlet\u001b[39m iterator\u001b[33m:\u001b[39m \u001b[33m?\u001b[39m\u001b[33mReadOnlyElement\u001b[39m \u001b[33m=\u001b[39m instance\u001b[33m;\u001b[39m\u001b[0m\n    at File.buildCodeFrameError (C:\\Users\\Administrator\\projects\\xiaoma-app\\node_modules\\@babel\\core\\lib\\transformation\\file\\file.js:202:12)\n    at NodePath.buildCodeFrameError (C:\\Users\\Administrator\\projects\\xiaoma-app\\node_modules\\@babel\\traverse\\lib\\path\\index.js:98:21)\n    at shouldTransform (C:\\Users\\Administrator\\projects\\xiaoma-app\\node_modules\\@babel\\helper-create-class-features-plugin\\lib\\features.js:130:

AwareLog AtomicFileUtils: readFileLines file not exist: android.util.AtomicFile@dfecc72
