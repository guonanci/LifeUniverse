YApi 是一个可本地部署的、打通前后端及QA的、可视化的接口管理平台

<https://github.com/YMFE/yapi>

# YApi 可视化接口管理平台

体验地址：

<http://yapi.smart-xwork.cn/>

文档：

hellosean1025.github.io/yapi

# 平台介绍

avatar

YApi 是高效、易用、功能强大的 api 管理平台，旨在为开发、产品、测试人员提供更优雅的接口管理服务。可帮助开发者轻松创建、发布、维护 API，YApi 还为用户提供了优秀的交互体验，开发人员只需利用平台提供的接口数据写入工具，以及简单的点击操作，就可实现接口管理。

QQ交流群:

644642474 主群可能已满

941802405 群2欢迎加入

# 特性

- 基于 Json5 和 Mockjs 定义接口返回数据的结构和文档，效率提升多倍
- 扁平化权限设计，即保证了大型企业级项目的管理，又保证了易用性
- 类似 postman 的接口调试
- 自动化测试, 支持对 Response 断言
- MockServer 除支持普通的随机 mock 外，还增加了 Mock 期望功能，根据设置的请求过滤规则，返回期望数据
- 支持 postman, har, swagger 数据导入
- 免费开源，内网部署，信息再也不怕泄露了

# 内网部署

## 环境要求

nodejs（7.6+)
mongodb（2.6+）
git

## 安装

使用我们提供的 yapi-cli 工具，部署 YApi 平台是很容易的。执行 yapi server 启动可视化部署程序，输入相应的配置和点击开始部署，就能完成整个网站的部署。部署完成后，可按照提示信息，执行 node/{网站路径/server/app.js} 启动服务器。在浏览器打开指定url, 点击登录输入您刚才设置的管理员邮箱，默认密码为 ymfe.org 登录系统（默认密码可在个人中心修改）。

npm install -g yapi-cli --registry <https://registry.npm.taobao.org>
yapi server

## 服务管理

利用pm2方便服务管理维护。

npm install pm2 -g  //安装pm2
cd  {项目目录}
pm2 start "vendors/server/app.js" --name yapi //pm2管理yapi服务
pm2 info yapi //查看服务信息
pm2 stop yapi //停止服务
pm2 restart yapi //重启服务

## 升级

升级项目版本很容易，并且不会影响已有项目数据，只会同步 vendors 目录下的源码文件。

cd  {项目目录}
yapi ls //查看版本号列表
yapi update //更新到最新版本
yapi update -v {Version} //更新到指定版本

# 教程

使用 YApi 管理 API 文档，测试， mock
自动更新 Swagger 接口数据到 YApi 平台
自动化测试
GTest(基于YApi)接口研发效能提升10倍 实战
YApi 插件
yapi sso 登录插件
yapi cas 登录插件 By wsfe
yapi gitlab集成插件
oauth2.0登录
rap平台数据导入
dingding 钉钉机器人推送插件
export-docx-data 数据导出docx文档
interface-oauth-token 定时自动获取鉴权token的插件
import-swagger-customize 导入指定swagger接口

# 代码生成

yapi-to-typescript：根据 YApi 的接口定义生成 TypeScript 的请求函数
yapi-gen-js-code: 根据 YApi 的接口定义生成 javascript 的请求函数
SwiftJSONModeler: 根据 YApi 的接口生成 Swift 模型代码

# YApi docker部署（非官方）

使用 alpine 版 docker 镜像快速部署 yapi
docker-yapi: 基于官方yapi-cli的docker-compose方案
docker-compose一键部署yapi
docker-YApi: 更易用的 YApi 镜像
使用DockerCompose构建部署Yapi
yapi-docker: dockerized yapi deployment all in one

# 一些YApi工具

Api Generator 接口文档自动生成插件（零入侵）
mysql服务http工具,可配合做自动化测试
idea 一键上传接口到yapi插件
idea 接口上传调试插件 easy-yapi
执行 postgres sql 的服务
SpringBoot依赖自动生成YApi
Yapi X 一键生成接口文档, 上传到yapi, rap2, eolinker等（IDEA插件）

# YApi 的一些客户

去哪儿
携程
艺龙
美团
百度
腾讯
阿里巴巴
京东
今日头条
唯品支付
链家网
快手
便利蜂
中商惠民
新浪
VIPKID
马蜂窝
伴鱼
旷视科技

# Authors

hellosean1025
gaoxiaomumu
zwjamnsss
dwb1994
fungezi
ariesly15
License
Apache License 2.0
