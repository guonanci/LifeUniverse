# terminal

https://github.com/microsoft/vscode/issues/44302

^[[A(up key)

# cmd e (+ click)

**replace cmd p+press fileName**

# keyboard shortcuts

control shift l:change language mode
sss

alt shift n:advanced new file (尽量从左边文件目录新建文件-可以同时新建目录)
永远不要手动格式化任何代码，那是 prettier 会做的事，不要浪费任何时间

# option

多处编辑（先按 alt）

# idea-key-mapping shortcuts

cmd+fn+左右键头 跳转到文件开头和结尾

# plugins

自从减少了许许多多低用户量的插件后我的 vsc 流畅了许多。

双击某个单词，cmd f，cmd g。（Find All Reference）

# keymap（vsc self）

> 不依赖 idea，只依赖 vscode（目前？）

## cmd enter(new line)

## cmd shift enter(new line up)

## alt cmd s(save)

## cmd click enter(see first definition)

## hover + cmd .(quick fix)

## alt up/down(move curLine)

## cmd d(next same word, like vim, I like)

## cmd 1234(switch split group)

## cmd x(del curLine), we should always use pasteboard content as quick as possible

## cmd c,v(press cmd, press c, release c(still pressing cmd), press v): to copy line

## cmd u

## alt click

Insert cursor

## cmd l

select curLine
**Search and replace**

## cmd g/cmd shift g

find next/previous

## alt enter

select all occurrences of find match

## cmd d

add selection to next find match

**Rich languages editing**

## ctrl space

trigger suggestion

## cmd km

change file lang

## F12

go to definition

## alt F12

pick definition

## cmd .

quick fix
**Navigation**

## ctrl g

go to line
**editor management**

## cmd \

split editor
**file management**

## cmd s : save

## cmd shift s : save as

## cmd alt s : save all

## cmd kw

close all

## shift cmd t

reopen closed editor

## Ctrl shift tab

open next/previous

## cmd kp

copy path of active file

## cmd kr

cmd active file in finder
**Display**

## ctrl cmd f

toggle full screen

## cmd b

toggle sidebar visibility

## shift cmd v

open md preview
**Debug**

## F9

toggle bk

## F5

cmd \(will blur when editing in console)
start/continue

## F11/shift F11

step into/out

## F10

step over

## shift F5

Stop
选中块，然后按下符号 [(<`"'
，你会有意外发现
⎇ alt-option
⌘ cmd
⇧ shift
⌃ ctrl

## alt cmd f: replace

> If you can just press enter, not to press cmd+enter(use less ATP energy)

# 比较消耗内存的是左边侧边栏，在代码文件间切换（Cmd p 或者点击每个区块的上方菜单栏去切换目录和文件）、新建文件（Cmd N，Cmd s）,重命名文件（Reveal In Finder, and rename it)

# terminal

- cmd \ =》split terminals

# ctrl tab

# vsc 卡的话，应该是 vsc 有新版本可以更新了（重启 vsc 即可）

# rename file

cmd ）+enter
cmd shift e+enter

# copy&paste

chrome 和 vsc 复制粘贴时，不要用鼠标去点击，而是 cmd+tab

# settings.json

- .vscode

```json
{
  "cSpell.words": ["antd", "antv", "cust", "doesnt", "keyof", "nums", "typeof"]
}
```

# cmd shift z

undo undo

每次有版本更新时如果你还没更新，编辑器就会很卡

经常更新 push front-end-career 的话可以让 vsc 不卡

# tab 文件名

正体就是「固定好的」，斜体就是 能随时被替换的,初始默认是斜体，双击可以变正体。

# theme

亮色主题给人很纯净的感觉，我以前喜欢暗黑、黑化系主题，想想最终决定还是喜欢亮色主题（我心本来就很纯净）

# 卡顿

ts lint 的类型错误提示要 10 多秒后才消失。--这个问题：似乎必须要增加电脑核数增加电脑配置，才能做到

只留 6 个插件后，感觉快了 10 倍

cmd+p，recently-opened 区域为什么显示两个一模 mu 一样（模 mu 样）的结果

为了避开一切的卡顿，所有的 import 都自己 add，千万不要依赖于 vsc 了。

click f1,type 'open settings'.

吸收所有前端知识（专研、记笔记）、公司业务项目、开源项目的架构设计、编码阶段、调试阶段时，vsc 必须全屏（最高的高度专注）；能写出好代码的标准是最大化减少调适时间；

工作时，一般最常见的的操作是 coding、cmd+tab 切换 vsc+chrome；一定要最大化减少其他操作的时间；需要长屏幕时（超级超级专注），双击 tab 就好了；

下午茶不吃或者只吃 1 个饼干就好了（绝对不能吃水果和其他零食，浪费钱，除非是公司的）；

ts 没标红的化，暂时先不要管，继续写后面的代码就是了（还是尽量用 auto-import，不要手动 import，浪费精力和时间，用来定位代码片段了）

写代码进入状态的时候，甚至连笔记都不要记（除非特别重要）

# cmd shift f

Search only in Open Editors

Use Exclude Settings and Ignore Files

因为 vscode 比较卡，所以(cmd+.)intelligent-import 时需要过 15 秒后再进行

# stuck

typescript 类型提示反应慢了的话，一定要重启 vsc（似乎重启也解决不了）？:::要先 hover 1 秒后，下划线出现后再点击。

# json

JSON: Max Items Computed
The maximum number of outline symbols and folding regions computed (limited for performance reasons).

# Explorer

Explorer: Auto Reveal
Controls whether the explorer should automatically reveal and select files when opening them.

# 缩进

必须统一好所有开发组员 IDE 的缩进，要不然没法 review

ES6 模板嵌套（代码上可以正常执行，可以 vsc 做不到正确的语法高亮：圆括号花括号中括号正确匹配成功，但是没有 vsc 语法高亮渲染不正确）。

# snippets
script===
```html
<script>

</script>
```
特别好用！！
[玛德我的 user-snippet.json 没有同步过来](https://stackoverflow.com/questions/44321000/visual-studio-code-user-snippets-not-working/48119011)

# settings.json

~/Library/Application Support/Code/User/settings.json

# sidebar

cmd+b

拼已有变量时，学会提取已有的中间关键字母（辅音、元音字母）

Editor-inline suggest:enabled

# autoReveal

https://stackoverflow.com/questions/41929709/open-current-editing-file-in-explorer-tree


# windows
ctrl＋ｅｎｄｅｎｄ tiao转到文件末尾end
切换全角半角：shift+space
shift+end 选中至行尾；选中的文字背景色时蓝色；和搜狗输入法等等的全局快捷键冲突了。

遇到一直显示繁体的问题，只需要看看vsc和其他应用是不是一样的，如果只有vsc繁体就重启vsc解决。
ctrl +ｋｓ 保存全部，
输入法混乱问题（和其他APP不一致）
chrome的报错页面显示的function-name，双击的话可以直接用vscode打开

# plugins
vscode好用的插件系列


git相关插件：gitLens、Git History、Git History Diff
汉化插件： Chinese (Simplified)
开发提示相关插件： Tabnine AI（强推）、Path Intellisense（路径提示）、Vetur、Volar、Auto Close Tag、Auto Complete Tag、Auto Rename Tag、HTML Snippets、Wrap Console Log Lite
浏览器调试插件： JavaScript Debugger、Debug Visualizer、scode-js-debug
静态服务器：Live Server
代码运行器： Code Runner
正则提示插件： any-rule、Regex Previewer（辅助验证正则结果）
Docker插件： Docker
格式化类插件： EditorConfig for VS Code、ESLint
进制文件查看： Hex Editor
TODO提示： Todo Tree
流程图绘制： drawio
PDF查看： vscode-pdf
Markdown预览：Markdown Preview Enhanced
SVG文件预览：SVG Viewer
图片预览（在html或者css写地址的时候可直接预览）：Image Preview
文件依赖分析（如：.vue文件可以通过该插件看到引用了哪些依赖）：Dependency Cruiser Extension
颜色选择、设置：Color Highlight、Color Picker
快速生成注释：vscode-fileheader 和 koroFileHeader 
npm模块导入智能提示： npm Intellisense
接口请求：REST Client

作者：趴窝熊猫
链接：https://juejin.cn/post/7187272143657730108
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

插件：Eslint、Prettier、Code Spell Checker、Auto Close Tag,Auto Import,Auto Rename Tag, ES7 React/Redux snippets,
https://zhuanlan.zhihu.com/p/347926284
离线安装插件：https://blog.csdn.net/u012814856/article/details/80684376
https://www.cnblogs.com/hwy6/p/15930217.html
方法一、

1、先在可以联网的电脑上下载好插件

2、找到已安装的插件列表文件：路径一般为 C:\用户\用户名\.vscode\extensions







3、将所需要的插件复制到U盘，再拷贝到离线安装的电脑上的 .vscode/extensions 文件夹下即可，重启vscode 即可安装成功。



方法二、

1、到vscode官网 https://marketplace.visualstudio.com/vscode 搜索需要使用的插件名称

2、下载对应的拓展程序文件，下载的文件的后缀是.vslx







  3、到vscode中安装





 4、选择下载的扩展文件进行安装即可
# shortcuts
ctrl+alt+s save_all
# format格式化
格式化工具会帮助我们处理空格问题，所以能空格替换删除键就用空格（节省ATP能量消耗），能不处理空格就不处理空格

ctrl+b可以展开或者隐藏左边功能栏。
# yarn
解决vscode中不能使用yarn命令

https://blog.csdn.net/qq_42114171/article/details/114872700
# settings sync
https://code.visualstudio.com/docs/editor/settings-sync
# save all
ctrl+k s,ctrl all s,
# save as另存为
ctrl+shift+s
# 多行复制
充分利用好这个功能

# autoSaveWhenWindowChange

*简直就是专注神器，必须专注于自己写出来的每一行文字和代码！！不在保存文件动作上浪费任何时间！！*
