if-else_switch.md
<https://www.cnblogs.com/ranyonsue/p/12744066.html#:~:text=switch%E4%BD%BF%E7%94%A8%E6%9F%A5%E6%89%BE%E8%A1%A8%E7%9A%84,%E4%B8%80%E4%B8%AA%E6%89%80%E9%9C%80%E8%A6%81%E7%9A%84%E6%9D%A1%E4%BB%B6%E3%80%82&text=%E4%BD%86%E6%98%AFswitch%E5%8F%AA%E8%83%BD%E5%88%A4%E6%96%AD,%E4%B8%AD%E7%9A%84%E6%95%B0%E6%8D%AE%E8%BF%9B%E8%A1%8C%E5%88%A4%E6%96%AD%E3%80%82>
if-else
只是单纯地一个接一个比较；if...else 每个条件都计算一遍；

switch (dont forget break in every case branch)
使用了 Binary Tree 算法；绝大部分情况下 switch 会快一点，除非是 if-else 的第一个条件就为 true 编译器编译 switch 与编译 if...else...不同。不管有多少 case，都直接跳转，不需逐个比较查询；switch 只计算一次值，然后都是 test , jmp,

有很多 else if 的时候，用 switch case 比较清晰。switch 使用查找表的方式决定了 case 的条件必须是一个连续的常量。而 if-else 则可以灵活的多。对于 switch 语句来说，起实际是使用一个跳转表实现分支结构，不需要一次进行比较每一个所需要的条件。进行比较的次数为 1.但是对于 if…else 语句来说：最少的比较次数为 1，跟 switch 相比，在时间方面，switch 语句的执行速度比 if else 要快，但是在程序执行占用的空间方面，switch 语句需要一张跳转表来维护。这个跳转，表的本质是一个拥有标号的数组，需要额外的存储空间，if else 语句的空间效率更好一点。switch 是一个很典型的空间换时间的例子。但是 switch 只能判断是一个指定值的数据，而不能对一个区间中的数据进行判断。这时候选择 if…else 语句是一个很好的选择。

switch case 与 if else 的效率问题

switch case 与 if else 的区别：switch case 会生成一个跳转表来指示实际的 case 分支的地址，而 if...else 却需要遍历条件分支直到命中条件。

switch case 的优缺点

（1）switch case 的优点：

当分支较多时，用 switch 的效率是很高的。因为 switch 是确定了选择值之后直接跳转到那个特定的分支.

（2）switch case 的缺点：

1.switch...case 占用较多的代码空间，因为它要生成跳表，特别是当 case 常量分布范围很大但实际有效值又比较少的情况，switch...case 的空间利用率将变得很低。

2.switch...case 只能处理 case 为常量的情况。

if else 的优缺点

（1）if else 的优点：if else 能应用于更多的场所以 if else 比较灵活。

（2）if else 的缺点：if else 必须遍历所以的可能值。

总结：
在选择分支较多时，选用 switch…case 结构会提高程序的效率，但 switch 不足的地方在于只能处理字符或者数字类型的变量，if…else 结构更
加灵活一些，if…else 结构可以用于判断表达式是否成立，比如 if(a+b>c),if…else 的应用范围更广，switch…case 结构在某些情况下可以替代 if…else 结构。

<https://juejin.cn/post/7172147708914827300>?

eslint-default // Expected a default case

# 告别 "if-else"，改用 "return"

<https://juejin.cn/post/7431120645981831194>

在日常的开发中，很多人习惯于使用 if-else 语句来处理各种条件。但你有没有想过，层层嵌套的条件判断，可能会让代码变得难以维护且难以阅读？今天，我想分享一个让代码更清晰易读的技巧，那就是——return。✨

if-else 真的有必要吗？
初学编程时，我们都习惯通过 if-else 语句来处理分支逻辑。比如判断一个用户是否活跃，是否有折扣，代码通常会写成这样：
js 代码解读复制代码function getDiscountMessage(user) {
  if (user.isActive) {
    if (user.hasDiscount) {
      return `折扣已应用于 ${user.name}！`;
    } else {
      return `${user.name} 不符合折扣条件。`;
    }
  } else {
    return `用户 ${user.name} 已被停用。`;
  }
}

你看，这段代码嵌套了多个 if-else 语句。如果我们继续在这种风格的代码上添加更多条件判断，会变得更加难以阅读和维护。过多的嵌套让人一眼难以理清逻辑。更严重的是，随着代码量增多，容易导致出错。

## return：清晰与高效的代码编写方式

所谓的*提前return，就是在遇到异常情况或不符合条件时，立即返回并结束函数。通过提前处理错误情况或边界情况，我们可以把代码的“理想情况”留到最后处理*。这种写法可以让代码更清晰，逻辑更加直接。🎯

示例：用return优化代码
来看一看如何用return来重写上面的代码：

```js

function getDiscountMessage(user) {
  if (!user.isActive) {
    return `用户 ${user.name} 已被停用。`;
  }

  if (!user.hasDiscount) {
    return `${user.name} 不符合折扣条件。`;
  }

  // 理想情况：用户活跃且符合折扣条件
  return `折扣已应用于 ${user.name}！`;
}
```

🌟 优势

- 每个条件只处理一次：每个 if 语句都提前处理好错误情况，让后面的代码不必考虑这些条件。

- 代码结构更扁平：没有嵌套的 if-else 块，更加一目了然。

- 更易维护：当我们想增加或修改判断逻辑时，只需在前面添加或修改条件判断，不会影响到“理想情况”的代码部分。

作者：CodeQi技术小栈
链接：<https://juejin.cn/post/7431120645981831194>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
