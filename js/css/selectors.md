[选择器](https://www.w3cschool.cn/css/css-selector.html)

对大多技术人员来说都比较熟悉 CSS 选择器，举一例子来说，假设给一个 p 标签增加一个类（class），可是执行后该 class 中的有些属性并没有起作用。通过 Firebug 查看，发现没有起作用的属性被覆盖了，这个时候突然意识到了 CSS 选择器的优先级问题。严格来讲，选择器的种类可以分为三种：标签名选择器、类选择器和ID选择器。而所谓的后代选择器和群组选择器只不过是对前三种选择器的扩展应用。而在标签内写入 style="" 的方式，应该是 CSS 的一种引入方式，而不是选择器，因为根本就没有用到选择器。而一般人们将上面这几种方式结合在一起，所以就有了5种或6种选择器了。


css选择器


最基本的选择器是元素选择器(比如 div),ID 选择器(比如 #header)还有类选择器(比如.tweet)。
一些的不常见的选择器包括伪类选择器 (:hover)，很多复杂的 CSS3 和正则选择器，比如：first-child，class ^= “grid-”。CSS选择器具有高效的继承性，引用 Steve Souders 的话， CSS 选择器效率从高到低的排序如下：
选择器	用法
id选择器	#myid
类选择器	.myclassname
标签选择器	div,h1,p
相邻选择器	h1+p
子选择器	ul > li
后代选择器	li a
通配符选择器	*
属性选择器	a[rel="external"]
伪类选择器	a:hover, li:nth-child


纵使ID选择器很快、高效，但是它也仅仅如此。从 Steve Souders 的 CSS Test 我们可以看出ID选择器和类选择器在速度上的差异很小很小。

在 Windows 系统上的 Firefox 6 上，我测得了一个简单类选择器的（reflow figure）重绘速度为 10.9ms，而ID选择器为 12.5ms，所以事实上ID比类选择器重绘要慢一点点。

在一个标签选择器(a)的测试上显示，它比类或ID选择器的速度慢了很多。在一个嵌套很深的后代选择器的测试上，显示数据为440左右！从这里我们可以看出ID/类选择器 和 元素/后代选择器中间的差异较大，但是相互之间的差异较小。


选择器的优先级是怎么规定的呢？
一般而言，选择器越特殊，它的优先级越高。也就是选择器指向的越准确，它的优先级就越高。通常我们用1表示标签名选择器的优先级，用10表示类选择器的优先级，用 100 标示 ID选择器的优先级。比如上例当中 .polaris span {color:red;}的选择器优先级是 10 + 1 也就是11；而 .polaris 的优先级是10；浏览器自然会显示红色的字。理解了这个道理之后下面的优先级计算自是易如反掌：
div.test1 .span var 优先级 1+10 +10 +1

span#xxx .songs li 优先级1+100 + 10 + 1

#xxx li 优先级 100 + 1

对于什么情况下使用什么选择器，用不同选择器的原则是：
准确的选到要控制的标签；
使用最合理优先级的选择器；
HTML 和 CSS 代码尽量简洁美观。

通常：

①最常用的选择器是类选择器。

②li、td、dd等经常大量连续出现，并且样式相同或者相类似的标签，我们采用类选择器跟标签名选择器结合的后代选择器  .xx li/td/dd {}  的方式选择。

③极少的情况下会用 ID 选择器，当然很多前端开发人员喜欢 header，footer，banner，conntent 设置成 ID 选择器的，因为相同的样式在一个页面里不可能有第二次。


在这里不得不提使用在标签内引入 CSS 的方式来写 CSS，即：

<div style="color:red">polaris</div>
这时候的优先级是最高的。我们给它的优先级是 1000，这种写法不推荐使用，特别是对新手来说。这也完全违背了内容和显示分离的思想。DIV+CSS 的优点也不能再有任何体现。

怎么提升CSS选择器性能？
1、避免使用通用选择器
.content  {color: red;}

浏览器匹配文档中所有的元素后分别向上逐级匹配 class 为 content 的元素，直到文档的根节点。因此其匹配开销是非常大的，所以应避免使用关键选择器是通配选择器的情况。


2、避免使用标签或 class 选择器限制 id 选择器

避免使用

button#backButton {…}

避免使用
.menu-left#newMenuIcon {…}

推荐使用
#backButton {…}

推荐使用
#newMenuIcon {…}

3、避免使用标签限制 class 选择器

避免使用
treecell.indented {…}

推荐使用
.treecell-indented {…}

最优使用

.hierarchy-deep {…}

4、避免使用多层标签选择器。使用 class 选择器替换，减少 css 查找

避免使用
treeitem[mailfolder="true"] > treerow > treecell {…}

推荐使用
.treecell-mailfolder {…}

5、避免使用子选择器

避免使用
treehead treerow treecell {…}

BETTER, BUT STILL BAD

treehead > treerow > treecell {…}

推荐使用
.treecell-header {…}

6、使用继承

避免使用
#bookmarkMenuItem > .menu-left { list-style-image: url(blah) }

推荐使用

#bookmarkMenuItem { list-style-image: url(blah) }

简洁、高效的CSS
所谓高效的 CSS 就是让浏览器在查找 style 匹配的元素的时候尽量进行少的查找，下面列出一些我们常见的写 CSS 犯一些低效错误：

高效的CSS

不要在ID选择器前使用标签名

一般写法：DIV#divBox

更好写法：#divBox

解释： 因为ID选择器是唯一的，加上 div 反而增加不必要的匹配。


不要再class选择器前使用标签名

一般写法：span.red

更好写法：.red

解释：同第一条，但如果你定义了多个 .red，而且在不同的元素下是样式不一样，则不能去掉，比如你 CSS 文件中定义如下：

p.red{color:red;}

span.red{color:#ff00ff}
如果是这样定义的就不要去掉，去掉后就会混淆，不过建议最好不要这样写


尽量少使用层级关系

一般写法：#divBox p .red{color:red;}

更好写法：.red{..}


使用class代替层级关系

一般写法：#divBox ul li a{display:block;}

更好写法：.block{display:block;}

## 6. X:visited and X:link

a:link {color:red;}

a:visited {color: purple;}

我们使用:link这个伪类来定位所有还没有被访问过的链接。

另外，我们也使用:visited来定位所有已经被访问过的链接。

## X+Y
ul + p {

color: red;}

这个叫相邻选择器。它只会选中指定元素的直接后继元素，上面那个例子就是选中了所有ul标签后面的第一段。
## 15. X[data-*="foo"]
## 16. X[foo~="bar"]
## 21. X::pseudoElement
first-letter，first-line
## 22. X:nth-child(n),nth-last-child(n)
请注意nth-child接受一个整形参数，然后它不是从0开始的。如果你想获取第二个元素那么你传的值就是li:nth-child(2).

我们甚至可以获取到由变量名定义的个数个子标签。例如我们可以用li:nth-child(4n)去每隔3个元素获取一次标签。
```css
li:nth-child(3) {

   color: red;

}
```
## 24. X:nth-of-type(n)
```css
ul:nth-of-type(3) {

   border: 1px solid black;
}

```
想象一下有5个ul标签。如果你只想对其中的第三个进行修饰，而且你也不想使用id属性，那你就可以使用nth-of-type(n)伪类来实现了，上面的那个代码，只有第三个ul标签会被设置边框。
## 25. X:nth-last-of-type(n)

## first-child,last-child
## 29. X:only-of-type
li:only-of-type {

   font-weight: bold;

}

结构性伪类可以用的很聪明。它会定位某标签只有一个子标签的目标。设想你想获取到只有一个子标签的ul标签？

使用ul li会选中所有li标签。这时候就要使用only-of-type了。

ul > li:only-of-type {

   font-weight: bold;

}
