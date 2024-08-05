12. 整数转罗马数字
    罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。

字符 数值
I 1
V 5
X 10
L 50
C 100
D 500
M 1000
例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做 XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。

示例 1:

输入: 3
输出: "III"
示例 2:

输入: 4
输出: "IV"
示例 3:

输入: 9
输出: "IX"
示例 4:

输入: 58
输出: "LVIII"
解释: L = 50, V = 5, III = 3.
示例 5:

输入: 1994
输出: "MCMXCIV"
解释: M = 1000, CM = 900, XC = 90, IV = 4.

提示：

1 <= num <= 3999
通过次数 165,887 提交次数 254,645

罗马数字的唯一表示法

让我们从一个例子入手。考虑 140140 的罗马数字表示，下面哪一个是正确的？

我们用来确定罗马数字的规则是：对于罗马数字从左到右的每一位，选择尽可能大的符号值。对于 140140，最大可以选择的符号值为 \texttt{C}=100C=100。接下来，对于剩余的数字 4040，最大可以选择的符号值为 \texttt{XL}=40XL=40。因此，140140 的对应的罗马数字为 \texttt{C}+\texttt{XL}=\texttt{CXL}C+XL=CXL。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/integer-to-roman/solution/zheng-shu-zhuan-luo-ma-shu-zi-by-leetcod-75rs/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# 1 模拟

根据罗马数字的唯一表示法，为了表示一个给定整数 num，我们寻找不超过 num 的最大符号值，将 num 减去该符号值，然后继续寻找不超过 num 的最大符号值
，将该符号拼接在上一个找到的符号之后，循环直至 num 为 0.最后得到的字符串即为 num 的罗马数字表示

编程时，可以见一个数值-符号对的列表 valueSymbols，按数值从大到小排列。遍历 valueSymbols 中的每个数值-符号对，若当前数值 value 不超过 num，
则从 num 中不断减去 value，直至 num 小于 value，然后遍历下一个数值-符号对。若遍历中 num 为 0 则跳出循环

```js
var intToRoman = function (num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const valueSymbols = new Map()
  valueSymbols.set(1000, 'M')
  valueSymbols.set(900, 'CM')
  valueSymbols.set(500, 'D')
  valueSymbols.set(400, 'CD')
  valueSymbols.set(100, 'C')
  valueSymbols.set(90, 'XC')
  valueSymbols.set(50, 'L')
  valueSymbols.set(40, 'XL')
  valueSymbols.set(10, 'X')
  valueSymbols.set(9, 'IX')
  valueSymbols.set(5, 'V')
  valueSymbols.set(4, 'IV')
  valueSymbols.set(1, 'I')
  const roman = []
  for (const v of values) {
    const symbol = valueSymbols.get(v)
    while (num >= v) {
      num -= v
      roman.push(symbol)
    }
    if (num == 0) break
  }
  return roman.join('')
}
```

# 复

- 时： O(1)，由于 valueSymbols 长度是固定的，且这 13 个字符中的每个字符出现次数均不会超过 3，因此循环次数有一个确定上限，对于本题给出的数据范围，
  - 循环次数不会超过 15
- 空：O（1）

# 2 硬编码数字

回顾前言中列出的这 13 个字符，可以发现：

- 千位数字只能用 M 表示
- 百位数字只能由 C，CD，D 和 CM 表示
- 十位数字只能由 X，XL，L 和 XC 表示为个位数字只能由 I，IV，V 和 IX 表示
  这恰好把这 13 个符号分为 4 组，且组与组直接没有公共符号。因此，整数 num 的十进制表示中的每一个数字都可以单独处理
  进一步地，我们可以计算出每个数字在每个位上的表示形式，整理成一张硬编码表，0 对应的是空字符串

利用模运算和除法运算，我们可以得到 num 每个位上的数字：

```js
thousands_digit = num / 1000
hundreds_digit = (num % 1000) / 100
tens_digit = (num % 100) / 10
ones_digit = num % 100
```

最后，根据 num 每个位上的数字，在硬编码表中查找对应的罗马字符，并将结果拼接在一起，即为 num 对应的罗马数字

```js
var intToRoman = function (num) {
  const thousands = ['', 'M', 'MM', 'MMM']
  const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
  const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
  const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']

  const roman = []
  roman.push(thousands[Math.floor(num / 1000)])
  roman.push(hundreds[Math.floor((num % 1000) / 100)])
  roman.push(tens[Math.floor((num % 100) / 10)])
  roman.push(ones[num % 10])
  return roman.join('')
}
```

https://leetcode-cn.com/problems/integer-to-roman/solution/tan-xin-ha-xi-biao-tu-jie-by-ml-zimingmeng/
