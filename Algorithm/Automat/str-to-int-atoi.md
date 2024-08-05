# medium

https://leetcode-cn.com/problems/string-to-integer-atoi/solution/zi-fu-chuan-zhuan-huan-zheng-shu-atoi-by-leetcode-/

评论排序：最热、最新、最早

8. 字符串转换整数 (atoi)
   请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。

函数 myAtoi(string s) 的算法如下：

读入字符串并丢弃无用的前导空格
检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。
读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。
将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。
如果整数数超过 32 位有符号整数范围 [−231, 231 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231 的整数应该被固定为 −231 ，大于 231 − 1 的整数应该被固定为 231 − 1 。
返回整数作为最终结果。
注意：

本题中的空白字符只包括空格字符 ' ' 。
除前导空格或数字后的其余字符串外，请勿忽略 任何其他字符。

示例 1：

输入：s = "42"
输出：42
解释：加粗的字符串为已经读入的字符，插入符号是当前读取的字符。
第 1 步："42"（当前没有读入字符，因为没有前导空格）
^
第 2 步："42"（当前没有读入字符，因为这里不存在 '-' 或者 '+'）
^
第 3 步："42"（读入 "42"）
^
解析得到整数 42 。
由于 "42" 在范围 [-231, 231 - 1] 内，最终结果为42。
示例 2：

输入：s = " -42"
输出：-42
解释：
第 1 步：" -42"（读入前导空格，但忽视掉）
^
第 2 步：" -42"（读入 '-' 字符，所以结果应该是负数）
^
第 3 步：" -42"（读入 "42"）
^
解析得到整数 -42 。
由于 "-42" 在范围 [-231, 231 - 1] 内，最终结果为 -42 。
示例 3：

输入：s = "4193 with words"
输出：4193
解释：
第 1 步："4193 with words"（当前没有读入字符，因为没有前导空格）
^
第 2 步："4193 with words"（当前没有读入字符，因为这里不存在 '-' 或者 '+'）
^
第 3 步："4193 with words"（读入 "4193"；由于下一个字符不是一个数字，所以读入停止）
^
解析得到整数 4193 。
由于 "4193" 在范围 [-231, 231 - 1] 内，最终结果为 4193 。
示例 4：

输入：s = "words and 987"
输出：0
解释：
第 1 步："words and 987"（当前没有读入字符，因为没有前导空格）
^
第 2 步："words and 987"（当前没有读入字符，因为这里不存在 '-' 或者 '+'）
^
第 3 步："words and 987"（由于当前字符 'w' 不是一个数字，所以读入停止）
^
解析得到整数 0 ，因为没有读入任何数字。
由于 0 在范围 [-231, 231 - 1] 内，最终结果为 0 。
示例 5：

输入：s = "-91283472332"
输出：-2147483648
解释：
第 1 步："-91283472332"（当前没有读入字符，因为没有前导空格）
^
第 2 步："-91283472332"（读入 '-' 字符，所以结果应该是负数）
^
第 3 步："-91283472332"（读入 "91283472332"）
^
解析得到整数 -91283472332 。
由于 -91283472332 小于范围 [-231, 231 - 1] 的下界，最终结果被截断为 -231 = -2147483648 。

提示：

0 <= s.length <= 200
s 由英文字母（大写和小写）、数字（0-9）、' '、'+'、'-' 和 '.' 组成
通过次数 284,833 提交次数 1,327,946

视频题解
简述
根据问题的描述我们来判断并且描述对应的解题方法。对于这道题目，很明显是字符串的转化问题。需要明确转化规则，尽量根据转化规则编写对应的子函数。

这里我们要进行模式识别，一旦涉及整数的运算，我们需要注意溢出。本题可能产生溢出的步骤在于推入，乘 10 操作和累加操作都可能造成溢出。对于溢出的处理方式通常可以转换为 INT_MAX 的逆操作。比如判断某数乘 10 是否会溢出，那么就把该数和 INT_MAX 除 10 进行比较。

文字题解
方法一：自动机
思路

字符串处理的题目往往涉及复杂的流程以及条件情况，如果直接上手写程序，一不小心就会写出极其臃肿的代码。

因此，为了有条理地分析每个输入字符的处理方法，我们可以使用自动机这个概念：

我们的程序在每个时刻有一个状态 s，每次从序列中输入一个字符 c，并根据字符 c 转移到下一个状态 s'。这样，我们只需要建立一个覆盖所有情况的从 s 与 c 映射到 s' 的表格即可解决题目中的问题。

算法

本题可以建立如下图所示的自动机：

```java
class Solution {
  public int myAtoi(String str) {
    Automaton automaton=new Automaton();
    int l=str.length();
    for(int i=0;i<l;++i) automaton.get(str.charAt(i));
    return (int) (automaton.sign * automaton.ans);
  }
}
class Automaton {
  public int sign=1;
  public int ans=0;
  private String state='start'
  private Map<String, String[]> table=new HashMap<String, String[]>() {{
    put('start', new String[]{'start','signed','in_number','end'})
    put('signed', new String[]{'end','end','in_number','end'})
    put('in_number', new String[]{'end','end','in_number','end'})
    put('end', new String[]{'end','end','end','end'})
  }};

  public void get(char c) {
    state=table.get(state)[get_col(c)];
    if('in_number'.equals(state)){
      ans*=10+c-'0'
      ans=sign==1?Math.min(ans,(long) Integer.MAX_VALUE) : Math.min(ans, -(long) Integer.MIN_VALUE);
    }else if('signed'.equals(state)){
      sign=c=='+'?1:-1
    }
  }
  private int get_col(char c) {
        if (c == ' ') {
            return 0;
        }
        if (c == '+' || c == '-') {
            return 1;
        }
        if (Character.isDigit(c)) {
            return 2;
        }
        return 3;
    }

}
```

```js
var myAtoi = function (s) {
  class Automaton {
    constructor() {
      this.state = 'start'
      this.sign = 1
      this.ans = 0
      this.map = new Map([
        ['start', ['start', 'signed', 'in_number', 'end']],
        ['signed', ['end', 'end', 'in_number', 'end']],
        ['in_number', ['end', 'end', 'in_number', 'end']],
        ['end', ['end', 'end', 'end', 'end']],
      ])
    }
    getIdx(c) {
      if (c == ' ') {
        return 0
      } else if (c == '-' || c == '+') {
        return 1
      } else if (typeof Number(c) == 'number' && !isNaN(c)) {
        return 2
      } else {
        return 3
      }
    }
    // 字符转换执行函数
    get(c) {
      // 每次传入字符时，都要变更自动机的执行阶段
      this.state = this.map.get(this.state)[this.getIdx(c)]
      if (this.state == 'in_number') {
        this.ans = this.ans * 10 + (c - 0)
        this.ans =
          this.sign == 1
            ? Math.min(this.ans, Math.pow(2, 31) - 1)
            : Math.min(this.ans, -Math.pow(-2, 31))
      } else if (this.state == 'signed') {
        // 优化点：
        // 对于一个整数来说，非正即负，
        // 所以正负号的判断，只需要一次。
        // 故，可以降低其判断的优先级
        this.sign = c == '+' ? 1 : -1
      }
    }
  }
  let automaton = new Automaton()
  for (let c of s) automaton.get(c)
  return automaton.sign * automaton.ans
}
```

题意分析
官方的主要规则可以概况为：

无视开头空格
返回有符号整数
无视整数部分后的字符
范围在 32 位内（含）
其他情况返回 0
各位 JSer，你品，你细品，这个转换规则，是不是很眼熟？

谜底揭晓，它就是 JavaScript 世界中的 parseInt()这一 API 的转换规则。

逻辑梳理
现在来简要阐述下 parseInt()的转换规则，关于这个 API 的具体描述，可以查看 MDN 上的这篇文档。

parseInt(string, radix)：

string：要被解析的值。如果参数不是一个字符串，则将其转换为字符串。字符串开头的空白符将会被忽略。
radix（可选）：需要转换的进制，介于 2 到 36。
返回值： 如果被解析参数的第一个字符无法被转化成数值类型，则返回 NaN。
对比下题意，发现

无视开头空格（满足）
返回有符号整数（满足）
无视整数部分后的字符（满足）
范围在 32 位内（含）（不满足）
其他情况返回 0（不满足）
那么只要有针对性的处理下不满足的条件即可。

范围在 32 位内（含）
只需简单地将 API 转换后的值与临界值进行对比就行。

if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
}
其他情况返回 0
很显然，API 的返回值如果是 NaN，则说明无法正常转换，所以只需将返回值和 NaN 进行比较即可。

注意，NaN 和 NaN 并不全等，所以各位 JSer 不能使用全等操作符（===），而该使用 isNaN()函数来比较。

if(isNaN(number)) {
return 0;
}
小细节
在使用 parseInt(string, radix)这一 API 时，如果不传入 radix 参数，会有两种特殊情况：

如果字符串 string 以"0x"或者"0X"开头, 则基数是 16 (16 进制).
如果字符串 string 以"0"开头, 基数是 8（八进制）或者 10（十进制），那么具体是哪个基数，取决与 ECMAScript 的版本。
所以，通常建议在使用 parseInt()这一 API 时，都明确给出期望的进制数，这是一个良好的编程习惯。

代码实现
以下是具体的代码实现：

结尾语
在作者写完这篇题解的同一天里，又拜读了 LeetCode 官方的解题思路——“自动机”，感觉收益匪浅。

个人收获的同时，也想将其思路分享给大家，所以又动手写了一篇关于“自动机”思路的题解。

如果你对“自动机”的解法有兴趣，可以移步这里查看。

相信我，“自动机”的解法，一定会打开你另一个思路的大门~

作者：gatsby-23
链接：https://leetcode-cn.com/problems/string-to-integer-atoi/solution/javascripttou-ji-qu-qiao-wu-xu-si-kao-yi-kan-jiu-h/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```js
var myAtoi = function (str) {
  const number = parseInt(str, 10)
  if (isNaN(number)) {
    return 0
  } else if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
    return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1
  } else {
    return number
  }
}
```
