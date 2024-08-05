gulp
Gulp在组件库中的运用
以elementUI为例，下载elementUI源码

打开packages/theme-chalk/gulpfile.js

https://juejin.cn/post/7146976516692410376#heading-34

gulp 是基于 node 流 实现的前端自动化开发的工具

适用场景

在前端开发工作中有很多“重复工作”，比如批量将Scss文件编译为CSS文件


```js
'use strict';

// 引入gulp
// series创建任务列表，
// src创建一个流，读取文件
// dest 创建一个对象写入到文件系统的流
const { series, src, dest } = require('gulp');
// gulp-dart-sass编译scss文件
const sass = require('gulp-dart-sass');
// gulp-autoprefixer 给css样式添加前缀
const autoprefixer = require('gulp-autoprefixer');
// gulp-cssmin 压缩css
const cssmin = require('gulp-cssmin');

// 处理src目录下的所有scss文件，转化为css文件
function compile() {
  return (
    src('./src/*.scss')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(
        // 给css样式添加前缀
        autoprefixer({
          overrideBrowserslist: ['ie > 9', 'last 2 versions'],
          cascade: false
        })
      )
      // 压缩css
      .pipe(cssmin())
      // 将编译好的css 输出到lib目录下
      .pipe(dest('./lib'))
  );
}

// 将src/fonts文件的字体文件 copy到 /lib/fonts目录下
function copyfont() {
  return src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./lib/fonts'));
}

// series创建任务列表
exports.build = series(compile, copyfont);

```

# Gulp给elementUI增加一键换肤功能
总体流程
1）使用css var()定义颜色变量
2）创建主题theme.css文件，存储所有的颜色变量
3）使用gulp将theme.css合并到base.css中，解决按需引入的情况
4）使用gulp将index.css与base.css合并，解决全局引入的情况

作者：海阔_天空
链接：https://juejin.cn/post/7146976516692410376
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
