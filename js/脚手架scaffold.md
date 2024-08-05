脚手架scaffold.md
https://juejin.cn/post/7146976516692410376#heading-34

脚手架是开发中经常会使用的工具，比如vue-cli、create-react-app等，这些脚手架可以通过简单的命令，快速去搭建项目，让我们更专注于项目的开发
随着项目的增多、人员的扩展，大家开发的基础组件和公共方法也越来越多，希望把这些积累添加到脚手架中，当成项目模板留存下来

作者：海阔_天空
链接：https://juejin.cn/post/7146976516692410376
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

node bin, npm link command

安装脚手架所需的工具
一次性安装所需的工具

npm install commander inquirer download-git-repo util ora fs-extra axios
commander自定义命令行工具inquirer命令行交互工具download-git-repo从git上下载项目模板工具utildownload-git-repo不支持异步调用，需要使用util插件的util.promisify进行转换ora命令行 loading 动效fs-extra提供文件操作方法axios发送接口，请求git上的模板列表

作者：海阔_天空
链接：https://juejin.cn/post/7146976516692410376
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
