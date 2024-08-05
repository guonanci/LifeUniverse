if-else_switch.md
https://www.cnblogs.com/ranyonsue/p/12744066.html#:~:text=switch%E4%BD%BF%E7%94%A8%E6%9F%A5%E6%89%BE%E8%A1%A8%E7%9A%84,%E4%B8%80%E4%B8%AA%E6%89%80%E9%9C%80%E8%A6%81%E7%9A%84%E6%9D%A1%E4%BB%B6%E3%80%82&text=%E4%BD%86%E6%98%AFswitch%E5%8F%AA%E8%83%BD%E5%88%A4%E6%96%AD,%E4%B8%AD%E7%9A%84%E6%95%B0%E6%8D%AE%E8%BF%9B%E8%A1%8C%E5%88%A4%E6%96%AD%E3%80%82
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


https://juejin.cn/post/7172147708914827300?


eslint-default // Expected a default case
