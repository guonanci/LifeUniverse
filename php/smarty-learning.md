- [以下笔记来自于 smarty 中文易百教程]

#扩展设置
一个更灵活一点的配置 smarty 的方法是扩展类,和初始化你的 smarty 环境.为了避免重复地配置路径,我们可以在一个文件里配置这些变量(让我想起了 bootstrap.php 文件)
#注释
所有的模板标签都被加上了定界符
default: {}, and it can be changed.
所有定界符以外的内容都是静态输出的,不可改变,smarty 遇到了模板标签,将尝试解释它们,再以恰当的方式输出.
模板注释被*号包围:`{* this is a comment *}`,他不会在模板文件的最后输出中出现,只是模板内在的注释.
#函数
在模板里面无论是{if} {section} {strip},都不能被修改.
自定义函数通过插件机制起作用,他们是附加函数,可以随意修改,也可以自行添加.比如`{html_options} and {html_select_date}`
#双引号里面值的嵌入
可以识别嵌入在双引号中的变量,只要此变量值包含数字,字母,下划线和中括号.对于其他的符号,此变量必须用两个 ` 包住.
#数学运算
可以直接应用到变量
#变量
##$template_dir[模板目录变量]
##从 PHP 分配的变量
关联数组
数组下标
对象
调用从 PHP 分配的变量需要在前面加上$符号.
调用模板内的 assign 函数分配的变量也是这样
##{$smarty}保留变量

变量的类型取决于它的前缀是什么符号(或者被什么符号包围)
可以直接被输出或者作为函数属性和修饰符(modifiers)的参数,或者用于内部的条件表达式等等
如果要输出一个变量,只要用定界符将它括起来就可以


#从配置文件读取的变量
通过两个'#'或者是 smarty 的保留变量$smarty.config.来调用,第二种语法在变量作为属性值并被引号括住的时候非常有用

{include file="#includefile#"} 这样的话,#includefile#将被当作字符处理，而不表示配置文件变量，但可以这样表示 {include file="`$smarty.config.includefile`"}不要忘了加``)

配置文件的变量只有在他们被加载以后才能使用,这个过程将在以后`{config_load}`的章节里面说明.

#从配置文件读取的变量
静态数值不需要加引号,但是字符串建议使用引号.
如果用变量做属性,它们也不能加引号.
一些属性用到了布尔值(真或者假),他们不需要加引号,可以是 `true, on, yes or false, off, no.`
#变量调节器
用于变量,自定义函数和字符串.请使用 | 符号和调节器名称应用调节器.变量调节器由赋予的参数值决定其行为.参数由:符号分开
如果你给数组变量应用单值变量的调节,结果是数组的每个值都被调节.如果你只想要调节器用一个值调节整个数组,你必须在调节器名字前加上@符号.
##capitalize
将变量里面所有单词首字母大写
##count_characters
##count_paragraphs
##count_sentences
##count_words
##date_format
##default
##escape
##indent
##lower
##nl2br
##regex_replace
##replace
##spacify
##string_format
##strip
##strip_tags
##truncate
##upper

#组合修改器
对于同一个变量,你可以使用多个修改器.他们将从左到右按照设定好的顺序被依次组合使用.使用时必须要用 | 字符作为他们之间的分隔符

#include

attribute-name  type  required  default  desc
file  str  yes  n/a  the-name-of-the-tpl-file-to-include(带包含的模板文件名)
assign  str  no  n/a  the-name-of-the-variable-that-the-output-of-include-will-be-assigned-to(该属性指定一个变量保存待包含模板的输出,这样待包含模板的输出就不会直接显示)
[var ...]  [var type]  no  n/a  variable-to-pass-local-template(传递给待包含模板的本地参数,只在待包含模板中可见有效,如果传递的参数在待包含模板中有同名变量,那么该变量被传递的参数替代)

include 标签用于在当前模板中包含其他模板.当前模板中的变量在被包含的模板中可用.必须指定 file 属性,该属性指明模板资源的位置.包含$template_dir 文件夹之外的模板请使用模板资源说明的格式

#include_php

file once assign 三个参数,类似 include 函数,只是 once 参数:boolean,default-val:TRUE,如果待包含 PHP 文件已被包含是否仍然包含(类似 include_once 函数)

inluce_php 函数用于在模板中包含 php 脚本. 如果设置了安全模式，被包含的脚本必须位于 $trusted_dir 路径下. include_php 函数必须设置 file 属性，该属性指明被包含 php 文件的路径，可以是 $trusted_dir 的相对路径，也可以是绝对路径.

include_php 是解决模板部件化的好方法，它使得 php 代码从模板文件中被分离出来. 举个例子：假设有一个从数据库中动态取出数据用于显示站点导航的模板，你可以将得数据内容的 php 逻辑部分分离出来保存在一个单独的文件夹下，并在模板开始的位置包含该 php 脚本. 那么就可以在任何地方包含此模板而不用担心之前数据库信息是否已被程序取出.

即使是在模板中多次地调用 php 文件，默认情况下它们只被包含一次. 你可以设置 once 属性从而指明每次调用都重新包含该文件. 如果将 once 属性设置为 false，每次调用该文件都将被重新包含.

在待包含 php 文件中可以通过 $this 访问 smarty 对象.

#insert
类似于 inluce 函数，不同之处是 insert 所包含的内容不会被缓存，每次调用该模板都会重新执行该函数.

#if, elseif, else
这些语句当中可以使用条件修饰词:eq, ne, neq, gt, lt, let, le, gte, ge, is even, is odd, is not even, is not odd, not, mod, div by, even by, odd by, ==, !=, >, <, <=, >=使用这些修饰词必须和变量或者常量用空格隔开

```
{* test if var is divisible by 4 *}
{if $var is div by 4}
    ...
{/if}

{* test if var is even, grouped by two. i.e.,
0=even, 1=even, 2=odd, 3=odd, 4=even, 5=even, etc. *}
{if $var is even by 2}
    ...
{/if}

{* 0=even, 1=even, 2=even, 3=odd, 4=odd, 5=odd, etc. *}
{if $var is even by 3}
    ...
{/if}
```

#literal
literal 标签区域内的数据被当做文本处理,此时模板将忽略其内部的所有字符信息.该特性用于显示有可能包含大括号的等字符信息的 js 脚本.当这些信息处于{literal}{literal}标签中时,模板引擎将不分析它们,而直接显示.

#section, sectionelse
模板的 section 用于遍历数组中的数据. section 标签必须成对出现. 必须设置 name 和 loop 属性. 名称可以是包含字母、数字和下划线的任意组合. 可以嵌套但必须保证嵌套的 name 唯一. 变量 loop (通常是数组)决定循环执行的次数. 当需要在 section 循环内输出变量时，必须在变量后加上中括号包含着的 name 变量. sectionelse 当 loop 变量无值时被执行.
#自定义函数

assign

counter

cycle

debug

eval

fetch

html_checkboxes

html_image

html_options

html_radios

html_select_date

html_select_time

html_table

math

mailto

popup_init

popup

textformat

#assign用法
assign 用于在模板被执行时为模板变量赋值.
```
{assign var="name" value="Bob"}

The value of $name is {$name}.

OUTPUT:

The value of $name is Bob.
```
#配置文件
配置文件有利于设计者管理文件中的模板全局变量。最简单的例子就是模板色彩变量。一般情况下你如果想改变一个程序的外观色彩，你就必须通过去更改每一个文件的颜色变量。如果有这个配置文件的话，色彩变量就可以保存在一个地方，只要改变这个配置文件就可以实现你色彩的更新。

#调试控制台
#方法
#display方法
#fetch 方法
#Caching 缓存
缓存被用来保存一个文档的输出从而加速display()或fetch()函数的执行。如果一个函数被加进缓存，那么实际输出的内容将用缓存来代替。缓存可让事物非常快速的执行，特别是带有长计算时间的模板。一旦display()或fetch()用缓存输出，那么一个缓存文档将非常容易用几个模板文档或是配置文档等来组成〔功力不小〕。


一旦模板是动态〔应该不难理解〕的，哪些文档你加了缓存，缓存时间多长都是很重要的。举个例子，比如你站点的首页内容不是经常更改，那么对首页缓存一个小时或是更长都可得到很好效果。相反，几分钟就要更新一下信息的天 气地图页面，用缓存就不好了。
#建立缓存
#多个缓存
#缓存集合
#控制插件输出缓冲
#对象
#预过滤器
#输出滤镜
#缓冲处理函数

