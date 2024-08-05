https://www.cnblogs.com/heyboom/p/10522059.html
https://blog.csdn.net/lord12580/article/details/105846718
https://zhuanlan.zhihu.com/p/141248420
https://blog.csdn.net/qq_38597315/article/details/80627439
https://coolshell.cn/articles/5426.html
https://www.jianshu.com/p/41c759d543b7
https://blog.csdn.net/qq_38597315/article/details/80627439
https://zhuanlan.zhihu.com/p/51440836
https://zhuanlan.zhihu.com/p/68111471
https://zhuanlan.zhihu.com/p/139847548
https://zhuanlan.zhihu.com/p/96801314

# tmux

一文助你打通 tmux - 知乎

3 basic mode: normal, insert, visual

ctrl+h ctrl+w ctrl+h 来删除前一个字符，单词，前面一行所有字符

normal => insert:a 光标之后插入；A 行尾插入；i 光标之前；I 行首；o 下一行；O 上一行；
操作（）""[]{}等等中间的内容，

[Surround](https://github.com/tpope/vim-surround)模式下用 cs{ds{命令就可以修改或者删除{}之内的字符。
解决了常用输入技巧后，接下来需要不断的练习来强化肌肉记忆。
不断练习来强化肌肉记忆。

# text object

Vim 之所以高效是因为对文本进行了抽象，如一个单词一个句子一个段落，就是 text-object，配合 d（delete）c（change）可以一次性操作不同大小的文本对象，如「dap」可以删除一个函数所有的内容，daw 删除光标所在的单词即周围的空格。
还提供了文本对象操作的范围关键字 a 和 i。
iw：inner word 光标在单词里面任何位置操作单词，如 diw 可以删除光标所在的单词，比 dw 方便很多。
aw：around word，他会选中当前单词，同时包含当前单词之后的空格。

# move fast

hjkl ctrl+u ctrl+f

- vim.easymotion:true
  - <leader></leader> t/T <char> 能够向前、向后到达可见范围内的某字符（《char》）的位置。
  - w/b 向前向后到达可见范围内任何单词的开头
  - e/ge 结尾
  - k/j 任何行的行首
- vim.sneak
  sneak 模式下键入 s 后，再输入 2 个字符就可以跳转到目标位置
  - s<char><char>往前跳
  - S 后
    'test'

# normal mode

x 删除当前光标所在的一个字符
：wq 存盘，退出 ：w 后可以跟文件名
dd 删除当前行，并把删除的行存到剪贴板里
p 粘贴剪贴板
hjkl 左下上右 j 就像下箭头
：help 《command》 command 可选 退出帮助是：q

Ctrl-C 的 Ctrl、是功能键，按下 Ctrl 后 C 就不是 C 了，而是一个命令或者快捷键。**在 Vim 的 normal 模式下，所有键都是功能键**

下文中 Ctrl-b 会写成<C-b>
以：开始的命令需要输入回车
a 在光标后插入
o 插入新行
O 插入新的上一行
cw 替换从光标所在位置到一个单词结尾的字符

## 简单的移动光标

0 到行头
^到本行第一个不是 blank 字符（空格，tab，换行，回车）的位置
$到本行行尾
g\_到本行最后一个不是 blank 字符的位置
/pattern 搜索 pattern 的字符串，如果搜索出多个匹配，可以按 n 到下一个

## 拷贝粘贴

p 粘贴，小写是当前位置之后，大写是当前位置之前
yy 拷贝当前行 相当于 ddP

## undo redo

u <C-r>

## 打开，保存，退出，改变文件（Buffer）

:e <path/to/file> 打开一个文件
：w 存盘
:saveas <path/to/file>
:x（尽在需要时保存） ZZ(不需要输入冒号和回车) :wq
:q! 退出不保存 :qa! 强行退出所有正在编辑的文件（就算别的文件有更改）
.可以重复上一次的命令
N《command》重复某个命令 N 次
2dd 删除两行
3p 粘贴文本 3 次

NG 到第 N 行
gg 到第一行
G 到最后一行
w 到下一个单词开头
e 到下一个单词结尾

> 如果你认为单词是由默认方式，那么就用小写的 e 和 w。默认上来说，一个单词由字母，数字和下划线组成（陈皓注：程序变量）

> 如果你认为单词是由 blank 字符分隔符，那么你需要使用大写的 E 和 W。（陈皓注：程序语句）

**最强光标移动**
%匹配括号移动({[]}),你需要先把光标移动到括号上
*和#匹配光标当前所在的单词，移动光标到*下一个,#上一个
一定要记住光标的移动，因为很多命令都可以如下：
<start position><command><end position>
0y$意味着
0先到行头，y从这里开始拷贝，$拷贝到本行最后一个字符
你可以输入 ye，从当前位置拷贝到本单词的最后一个字符。

你也可以输入 y2/foo 来拷贝 2 个 “foo” 之间的字符串。

不一定要按 y 才会拷贝，这些命令也会：
d 删除。v 可视化选择；gU 变大写，gu 变小写

# Vim 杀手级功能：

## 在当前行上移动光标：

`O ^ $ f F t T , ;`
0$
^到本行的第一个非 blank 字符,g\_最后一个非 blank
fa 到下一个为 a 的字符处
t,到逗号前的第一个字符。逗号可以变成其他字符。
3fa 在当前行查找第三个出现的 a
还有一个很有用的命令是 dt" → 删除所有的内容，直到遇到双引号—— "

<Leader>默认是\

yyp 复制当前行到下一行,光标自动一到下一行开头

# easymotion

https://github.com/VSCodeVim/Vim#vim-easymotion

# Normal-mode

We can copy/paste code through files by ddyyp
I prefer to press the last `s` after x,x,x, rather than choose to press `i` or `a`

# Insert-mode

double click to choose word or move cursor with three fingers too choose code block to copy(<C-c>)
and press <C-v> to paste it.
mac 自带的三指拖移用来拖代码块，或者选中代码块很方便啊
快速到行尾：command 右箭头（左箭头和上箭头都不管用，左箭头按了没反应，上箭头只能到上一行的记忆位置）
<C-d> to double-choose the same word is very useful~ I have been used to this shortcut(not the IDEA Intelij command d to copy one line to the next)

# comment

先输入注释然后再按下 command /
format on save: //a why not convert to // a

# Visual-mode

When Insert-mode, cursor at the start, Press v, move the cursor(hjkl) to the end, press p.

# Vim-tutor

https://blog.csdn.net/htianlong/article/details/7436359
https://github.com/HanielF/VimTutor
https://levelup.gitconnected.com/a-day-with-vim-tutor-vimtutor-25aa2e6ce52c
Note: Pressing <ESC> will place you in Normal mode or will cancel an unwanted and partially command.
