# 打生产包到真机
https://reactnative.cn/docs/signed-apk-android
`$ keytool -genkeypair -v -storetype PKCS12 -keystore techxiaoma-release-key.keystore -alias techaxiaoma-key-alias -keyalg RSA -keysize 2048 -validity 10000`

`$ keytool -genkeypair -v -storetype PKCS12 -keystore zejingit-xllsctb-release-key.keystore -alias zejingit-xllsctb-key-alias -keyalg RSA -keysize 2048 -validity 10000`

`正在为以下对象生成 2,048 位RSA密钥对和自签名证书 (SHA256withRSA) (有效期为 10,000 天):
         CN=techxiaoma, OU=techxiaoma, O=techxiaoma, L=nanchang, ST=jiangxi, C=cn
         CN=zejingit, OU=zejingit, O=zejingit, L=nanchang, ST=jiangxi, C=cn
[正在存储techxiaoma-release-key.keystore]`
`cd android, ./gradlew assembleRelease` `android/app/build/outputs/apk/release/app-release.apk`
`$ npx react-native run-android --variant=release`

socket 和EventBus的初始化先后顺序问题；global.js；window上声明的全局变量可以省略window点前缀。
eventEmitter？地图容器的高度太高；地图界面一直render；


改好消息通知里的样式；从底部弹出picker或modal，不要从顶部;底部导航的毛玻璃效果；
地图全部改好；首页右上角导航；控制中心按钮宽度以首页的两个相应按钮为准；

typ9-points 在typ6里面的msg的索引3；模拟器上的APP一直打开不了，提示：‘多次停止’

Text/Pressable都是一行；

为啥react-native官网执行打包生产命令时，会有关Nox？？要关闭Nox，然后再重新执行`cd android, ./gradlew assembleRelease`。
