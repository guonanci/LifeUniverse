# 部署对接说明
## 2.1主、子系统部署Nginx配置示例

子系统API转发配置，如配置在子系统的Server中同样需要支持跨域，如配置在主系统的Server中则无需支持跨域；
## 2.2子系统接入
1. 增加生命周期钩子
@umijs/plugin-qiankun
2. 修改访问基路径
3. 代理配置 vue为例
4. 子系统入口配置
5. 子系统路由接管
6. 子系统样式要求
7. 菜单对象要求
## 3.1tabs实例
## 3.2authority实例

# xc-vone项目前端统一说明
## 代码启动
xc-vone文件夹里，xc-vone-framework2文件夹为主应用，xc-vone-osp文件夹为子应用。打开主应用xc-vone-framework2文件夹，启动终端
npm run start:jiuying
## 创建子应用流程说明
- react框架
src目录新增public-path.js；设置history路由的base；修改webpack配置；根目录新增.rescriptsrc.js;修改package.json
- vue
## 客户端-桌面版
1. 主应用config.cli.js 后端接口URL process.env.commonApi
2. 主应用package.json文件必须要有electron相关的包，否则打开APP报错。@electron/remote,electron,electron-builder;npm run install --save @electron/remote
3. 确保主应用package.json有：
4. 打包客户端
命令为：1. yarn build:cli2yarn build:exe

样式隔离的坑，有不同的解法：
1. 修改qiankun源码，让ant开头的样式不加前缀的；提供一个处理CSS规则的方法到配置上来支持弹框的样式，比如带有antd前缀的css不添加data-qiankun的属性。qiankun的样式隔离更多的是限制一些项目加载后对全局样式的影响
2. 修改弹窗挂载位置，不挂载到body。开启experimentalStyleIsolation的同时，修改弹窗组件的默认配置或者，通过把它的挂载点修改到子应用DOM节点下。不让弹窗插入body，还要禁用modal遮罩
3. 通过proxy修改body的appendChild方法。window都可以代理，为什么body不能呢，scoped css，用div模拟了一个body给子应用，样式隔离还是可用的。
