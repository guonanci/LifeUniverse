https://www.ruanyifeng.com/blog/2017/05/css-variables.html
https://juejin.cn/post/6844903556420632583

> css variables-css custom properties
> `$foo`被 Sass 用掉了，`@foo`被 less 用掉了，为了不产生冲突，就用两个连字符。

# declare

变量名前加两根连字符（连词线）

```css
body {
  --foo: #7f583f;
}
```

> variables are no different from `color,font-size`（正式属性），只是没有默认含义。
> 变量名大小写敏感，--header-color 和--Header-Color 是两个不同变量。
> var()函数用于读取变量。

```css
a {
  color: var(--foo);
  color: var(--foo, #7f583f);
  text-decoration-color: var(--bar);
}
```

**第二个参数不处理内部的逗号或空格**，都视作参数的一部分。

```css
a {
  var(--font-stack, "Roboto", "Helvetica");
  var(--pad, 10px 15px 20px);
}
```

注意，**变量值只能用作属性值**，**不能用作属性名**。

如果变量值是一个字符串，可以与其他字符串拼接。

--bar: 'hello';
--foo: var(--bar)' world';
利用这一点，可以 debug（例子）。

body:after {
content: '--screen-category : 'var(--screen-category);
}
如果变量值是数值，不能与数值单位直接连用。

.foo {
--gap: 20;
/_ 无效 _/
margin-top: var(--gap)px;
}
上面代码中，数值与单位直接写在一起，这是无效的。必须使用 calc()函数，将它们连接。

.foo {
--gap: 20;
margin-top: calc(var(--gap) \* 1px);
}
如果变量值带有单位，就不能写成字符串。

/_ 无效 _/
.foo {
--foo: '20px';
font-size: var(--foo);
}

/_ 有效 _/
.foo {
--foo: 20px;
font-size: var(--foo);
}

# 四、作用域

同一个 CSS 变量，可以在多个选择器内声明。读取的时候，优先级最高的声明生效。这与 CSS 的"层叠"（cascade）规则是一致的。

下面是一个例子。

<style>
  :root { --color: blue; }
  div { --color: green; }
  #alert { --color: red; }
  * { color: var(--color); }
</style>

<p>蓝色</p>
<div>绿色</div>
<div id="alert">红色</div>
上面代码中，三个选择器都声明了--color变量。不同元素读取这个变量的时候，会采用优先级最高的规则，因此三段文字的颜色是不一样的。

这就是说，变量的作用域就是它所在的选择器的有效范围。

body {
--foo: #7F583F;
}

.content {
--bar: #F7EFD2;
}
上面代码中，变量--foo 的作用域是 body 选择器的生效范围，--bar 的作用域是.content 选择器的生效范围。

由于这个原因，全局的变量通常放在根元素:root 里面，确保任何选择器都可以读取它们。

:root {
--main-color: #06c;
}

五、响应式布局
CSS 是动态的，页面的任何变化，都会导致采用的规则变化。

利用这个特点，可以在*响应式布局的 media 命令里面声明css变量variable，使得不同的屏幕宽度有不同的变量值*。

body {
--primary: #7F583F;
--secondary: #F7EFD2;
}

a {
color: var(--primary);
text-decoration-color: var(--secondary);
}

@media screen and (min-width: 768px) {
body {
--primary: #F7EFD2;
--secondary: #7F583F;
}
}
六、兼容性处理
对于不支持 CSS 变量的浏览器，可以采用下面的写法。

a {
color: #7F583F;
color: var(--primary);
}
也可以使用@support 命令进行检测。

@supports ( (--a: 0)) {
/_ supported _/
}

@supports ( not (--a: 0)) {
/_ not supported _/
}

# 七、JavaScript 操作

JavaScript 也可以检测浏览器是否支持 CSS 变量。

const isSupported =
window.CSS &&
window.CSS.supports &&
window.CSS.supports('--a', 0);

if (isSupported) {
/_ supported _/
} else {
/_ not supported _/
}
JavaScript 操作 CSS 变量的写法如下。

// 设置变量
document.body.style.setProperty('--primary', '#7F583F');

// 读取变量
document.body.style.getPropertyValue('--primary').trim();
// '#7F583F'

// 删除变量
document.body.style.removeProperty('--primary');
这意味着，JavaScript 可以将任意值存入样式表。下面是一个监听事件的例子，事件信息被存入 CSS 变量。

*const docStyle = document.documentElement.style;*

document.addEventListener('mousemove', (e) => {
*docStyle.setProperty('--mouse-x', e.clientX);*
docStyle.setProperty('--mouse-y', e.clientY);
});
那些对 CSS 无用的信息，也可以放入 CSS 变量。

--foo: if(x > 5) this.width = 10;
上面代码中，--foo 的值在 CSS 里面是无效语句，但是可以被 JavaScript 读取。这意味着，可以把样式设置写在 CSS 变量中，让 JavaScript 读取。

所以，*CSS 变量提供了 JavaScript 与 CSS 通信的一种途径*。

'--bgColor' not '--bg-color'

[进度条](https://segmentfault.com/a/1190000039011440)
