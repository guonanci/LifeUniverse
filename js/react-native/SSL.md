# react-native [Error: ws does not work in the browser. Br
owser clients must use the native WebSocket object] 忽略https证书校验
在 React Native 中，如果你需要忽略 HTTPS 证书校验来使用 WebSocket，以下是如何实现这一目标的详细步骤：

### 使用 `react-native-ssl-pinning`

虽然 React Native 并不直接提供忽略 SSL/TLS 证书校验的功能，但你可以使用 `react-native-ssl-pinning` 库来实现对 SSL/TLS 证书的处理。这个库可以配置以允许忽略特定的 SSL/TLS 证书校验。

### 1. 安装依赖

首先，安装 `react-native-ssl-pinning` 库：

```bash
npm install react-native-ssl-pinning
npx pod-install
```

### 2. 配置 WebSocket 客户端

虽然 `react-native-ssl-pinning` 库主要用于 HTTP 请求，但我们可以通过一些配置让它与 WebSocket 一起使用。这里是一个示例代码，展示如何在 React Native 中设置忽略证书校验：

#### 创建自定义的 WebSocket 客户端

我们需要创建一个自定义的 WebSocket 客户端，以便在连接过程中忽略 SSL/TLS 证书校验。

```javascript
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import WebSocket from 'react-native-websocket'; // 你可能需要安装这个库: npm install react-native-websocket

const WebSocketExample = () => {
  useEffect(() => {
    const ws = new WebSocket('wss://your-websocket-server', null, {
      // 添加自定义 headers 来忽略 SSL/TLS 校验
      headers: {
        // 你可以在这里添加自定义的 header 来配置 SSL/TLS 选项
      },
      // 使用自签名证书 (仅用于开发环境)
      rejectUnauthorized: false, // 忽略 SSL 校验
    });

    ws.onopen = () => {
      console.log('WebSocket connection established');
      ws.send('Hello Server!');
    };

    ws.onmessage = (event) => {
      console.log('Message from server:', event.data);
    };

    ws.onclose = (event) => {
      console.log('WebSocket closed. Reason:', event.reason, 'Code:', event.code);
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error.message);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <View>
      <Text>WebSocket Example</Text>
    </View>
  );
};

export default WebSocketExample;
```

### 3. 使用原生的 WebSocket API 并忽略 SSL 校验

对于 React Native 环境，你可能需要在原生代码中进行更多配置来忽略 SSL 校验。

#### Android 配置

在 `android/app/src/main/java/com/yourproject/MainApplication.java` 中添加以下代码来忽略 SSL 校验：

```java
import javax.net.ssl.SSLContext;
import javax.net.ssl.X509TrustManager;
import javax.net.ssl.TrustManager;
import javax.net.ssl.HttpsURLConnection;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.SSLSession;

public class MainApplication extends Application implements ReactApplication {

  @Override
  public void onCreate() {
    super.onCreate();
    // 忽略所有证书校验 (仅用于开发环境)
    try {
      TrustManager[] trustAllCerts = new TrustManager[]{
          new X509TrustManager() {
              public X509Certificate[] getAcceptedIssuers() {
                  return null;
              }

              public void checkClientTrusted(X509Certificate[] certs, String authType) {
              }

              public void checkServerTrusted(X509Certificate[] certs, String authType) {
              }
          }
      };

      SSLContext sc = SSLContext.getInstance("SSL");
      sc.init(null, trustAllCerts, new java.security.SecureRandom());
      HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
      HttpsURLConnection.setDefaultHostnameVerifier(new HostnameVerifier() {
          public boolean verify(String hostname, SSLSession session) {
              return true;
          }
      });
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
```

#### iOS 配置

对于 iOS，你需要在 `AppDelegate.m` 中进行类似的配置。但请注意，这样做会影响所有的网络请求。

在 `AppDelegate.m` 中添加以下代码：

```objc
#import "AppDelegate.h"
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <ReactNativeConfig/ReactNativeConfig.h>

#import <Security/Security.h>
#import <Foundation/Foundation.h>
#import <CommonCrypto/CommonDigest.h>
#import <React/RCTLog.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"yourproject"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];

  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];

  // 忽略所有证书校验 (仅用于开发环境)
  NSURLSessionConfiguration *sessionConfig = [NSURLSessionConfiguration defaultSessionConfiguration];
  sessionConfig.TLSMinimumSupportedProtocol = kTLSProtocol1;
  NSURLSession *session = [NSURLSession sessionWithConfiguration:sessionConfig
                                                        delegate:self
                                                   delegateQueue:nil];
  NSURL *url = [NSURL URLWithString:@"https://your-websocket-server"];
  NSURLSessionDataTask *dataTask = [session dataTaskWithURL:url];
  [dataTask resume];

  return YES;
}

// NSURLSession delegate methods to bypass SSL certificate validation
- (void)URLSession:(NSURLSession *)session didReceiveChallenge:(NSURLAuthenticationChallenge *)challenge completionHandler:(void (^)(NSURLSessionAuthChallengeDisposition disposition, NSURLCredential * _Nullable credential))completionHandler
{
  if ([challenge.protectionSpace.authenticationMethod isEqualToString:NSURLAuthenticationMethodServerTrust]) {
    NSURLCredential *credential = [NSURLCredential credentialForTrust:challenge.protectionSpace.serverTrust];
    completionHandler(NSURLSessionAuthChallengeUseCredential, credential);
  } else {
    completionHandler(NSURLSessionAuthChallengePerformDefaultHandling, nil);
  }
}

@end
```

### 注意事项

- **安全性**：这些配置仅应用于开发和测试环境。在生产环境中，务必使用正确的 SSL/TLS 证书，并确保所有的网络通信都是安全的。
- **风险**：忽略 SSL/TLS 校验会带来安全风险。请在部署到生产环境之前移除这些忽略校验的配置，并确保使用有效的证书进行安全通信。

### 结论

在 React Native 中，可以通过自定义配置和调整原生代码来忽略 SSL/TLS 证书校验。然而，这些方法仅应在开发环境中使用。在生产环境中，确保使用正确的 SSL/TLS 证书以保证应用程序的安全性。



# react-native WebSocket error: Chain validation failed不校验证书


https://juejin.cn/post/7159978844689006605
# aar-debug
`./gradlew clean assembleDebug`

rn版本升级的话，这里也必须改，所以最好不要升级，以免遗忘这里的修改。

# techxiaoma.com

*百度智能云上的JoySSL-techxiaoma.com证书将在2024.08.16过期。*
