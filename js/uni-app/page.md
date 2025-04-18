https://uniapp.dcloud.net.cn/tutorial/page.html#%E9%A1%B5%E9%9D%A2%E9%80%9A%E8%AE%AF

# 页面模板
https://uniapp.dcloud.net.cn/tutorial/page.html#%E6%96%B0%E5%BB%BA%E9%A1%B5%E9%9D%A2

通过HBuilderX开发 uni-app 项目时，在 uni-app 项目上右键“新建页面”，HBuilderX会自动在pages.json中完成页面注册，开发更方便。

同时，HBuilderX 还内置了常用的页面模板（如图文列表、商品列表等），选择这些模板，可以大幅提升你的开发效率。

# export default 外的代码
写在 export default {} 外面的代码，一般有几种情况：

引入第三方 js/ts 模块
引入非 easycom 的组件（一般组件推荐使用easycom，无需导入注册）
在 ts/uts 中，对 data 进行类型定义
定义作用域更大的变量
