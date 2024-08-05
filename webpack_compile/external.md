external.md
https://segmentfault.com/a/1190000012113011 https://travonf.github.io/blog/dev/javascript/umi/usage.html

https://blog.csdn.net/weixin_34409741/article/details/88009294

简单理解的话，可以理解为 import react from 'react' 会被替换为 const react = window.React。

externals
Type: object
Default: {}
设置哪些模块可以不被打包，通过 <script> 或其他方式引入，通常需要和 scripts 或 headScripts 配置同时使用。

比如，

export default {
externals: {
react: 'window.React',
},
scripts: ['https://unpkg.com/react@17.0.1/umd/react.production.min.js'],
};
