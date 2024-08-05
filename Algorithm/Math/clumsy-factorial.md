https://leetcode-cn.com/problems/clumsy-factorial/

# medium

通常，正整数 n 的阶乘是所有小于或等于 n 的正整数的乘积。例如，factorial(10) = 10 _ 9 _ 8 _ 7 _ 6 _ 5 _ 4 _ 3 _ 2 \* 1。

相反，我们设计了一个笨阶乘 clumsy：在整数的递减序列中，我们以一个固定顺序的操作符序列来依次替换原有的乘法操作符：乘法(\*)，除法(/)，加法(+)和减法(-)。

例如，clumsy(10) = 10 _ 9 / 8 + 7 - 6 _ 5 / 4 + 3 - 2 \* 1。然而，这些运算仍然使用通常的算术运算顺序：我们在任何加、减步骤之前执行所有的乘法和除法步骤，并且按从左到右处理乘法和除法步骤。

另外，我们使用的除法是地板除法（floor division），所以  10 \* 9 / 8  等于  11。这保证结果是一个整数。

实现上面定义的笨函数：给定一个整数 N，它返回 N 的笨阶乘。

示例 1：

输入：4
输出：7
解释：7 = 4 \* 3 / 2 + 1
示例 2：

输入：10
输出：12
解释：12 = 10 _ 9 / 8 + 7 - 6 _ 5 / 4 + 3 - 2 \* 1

提示：

1 <= N <= 10000
-2^31 <= answer <= 2^31 - 1  （答案保证符合 32 位整数。）

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/clumsy-factorial
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
方法一：使用栈模拟
思路

根据求解问题「150. 逆波兰表达式求值」、「224. 基本计算器」、「227. 基本计算器 II」的经验，表达式的计算一般可以借助数据结构「栈」完成，特别是带有括号的表达式。我们将暂时还不能确定的数据存入栈，确定了优先级最高以后，一旦可以计算出结果，我们就把数据从栈里取出，整个过程恰好符合了「后进先出」的规律。本题也不例外。

根据题意，「笨阶乘」没有显式括号，运算优先级是先「乘除」后「加减」。我们可以从 NN 开始，枚举 N - 1N−1、N-2N−2 直到 11 ，枚举这些数的时候，认为它们之前的操作符按照「乘」「除」「加」「减」交替进行。

出现乘法、除法的时候可以把栈顶元素取出，与当前的 NN 进行乘法运算、除法运算（除法运算需要注意先后顺序），并将运算结果重新压入栈中；

出现加法、减法的时候，把减法视为加上一个数的相反数，然后压入栈，等待以后遇见「乘」「除」法的时候取出。

最后将栈中元素累加即为答案。由于加法运算交换律成立，可以将栈里的元素依次出栈相加

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/clumsy-factorial/solution/ben-jie-cheng-by-leetcode-solution-deh2/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```js
/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function (N) {
  const stack = [N--]
  let idx = 0 // control multiply（multiplication), divide(division), add（addition）, subtract（ion）
  while (N > 0) {
    if (idx % 4 == 0) {
      stack.push(stack.pop() * N)
    } else if (idx % 4 == 1) {
      const cur = stack.pop()
      stack.push(cur / N)
    } else if (idx % 4 == 2) {
      stack.push(N)
    } else {
      stack.push(-N)
    }
    idx++
    N--
  }
  // sum all numbers in stack when they all out
  return stack.reduce((acc, v) => (acc += v), 0)
}
```

方法二：数学
思路

让我们来尝试化简「笨阶乘」的式子。

观察「笨阶乘」的前三项，有

\begin{aligned} &5\cdot4/3=6\\ &6\cdot5/4=7\\ &7\cdot6/5=8\\ &\dots \end{aligned}
​

5⋅4/3=6
6⋅5/4=7
7⋅6/5=8
…
​

一般地，有

\begin{aligned} &\quad~ N \cdot (N - 1) / (N - 2) \\ &= \cfrac{N^2 - N}{N-2} \\ &= \cfrac{N^2 - 2N + N}{N-2} \\ &= \cfrac{N(N - 2) + N}{N-2} \\ &= N + \cfrac{N}{N-2} \\ &= N + \cfrac{N - 2 + 2}{N-2} \\ &= N + 1 + \cfrac{2}{N - 2} \end{aligned}
​

#  N⋅(N−1)/(N−2)

N−2
N
2
−N
​

=
N−2
N
2
−2N+N
​

=
N−2
N(N−2)+N
​

=N+
N−2
N
​

=N+
N−2
N−2+2
​

=N+1+
N−2
2
​

​

上式最后一项 \cfrac{2}{N - 2}
N−2
2
​
，当分子严格小于分母（2 < N - 22<N−2，即 N > 4N>4）的时候，在地板除法的定义下等于 00。
即当 N > 4N>4 时，有

N \cdot (N - 1) / (N - 2) = N + 1
N⋅(N−1)/(N−2)=N+1

我们把「笨阶乘」的计算式多写几项：

\texttt{clumsy}(N) = N \cdot (N - 1) / (N - 2) + (N - 3) - (N - 4) \cdot (N - 5) / (N - 6) + (N - 7) - \cdots
clumsy(N)=N⋅(N−1)/(N−2)+(N−3)−(N−4)⋅(N−5)/(N−6)+(N−7)−⋯

就会发现其中有可以「消去」的部分，根据以上分析，当 N > 8N>8 时，有

(N - 4) \cdot (N - 5) / (N - 6) = N - 3
(N−4)⋅(N−5)/(N−6)=N−3

此时 \texttt{clumsy}(N)clumsy(N) 除了 N \cdot (N - 1) / (N - 2) = N + 1N⋅(N−1)/(N−2)=N+1 以外，后面每 44 项的计算结果均为 00。即当 N > 8N>8 时，有

(N - 3) - (N - 4) \cdot (N - 5) / (N - 6) = 0
(N−3)−(N−4)⋅(N−5)/(N−6)=0

剩下不能够成 44 个一组成对「消去」的情况需要分类讨论。由于「笨阶乘」按照「乘」「除」「加」「减」循环的顺序定义运算，我们可以将 NN 按照对 44 取模的余数分类讨论。

下面我们分类讨论：NN 对 44 取模的余数分别是 00、11、22、33 时，最后一项 11 的符号是什么。

情况一：当 NN 对 44 取模的余数等于 00 时，有

\begin{aligned} \texttt{clumsy}(N) &= \underline{N \cdot (N - 1) / (N - 2) } + \cdots 8 \times 7 / 6 + \underline{ 5 - 4 \times 3 / 2 + 1 } \\ &= N + 1 + 5 - 6 + 1 \\ &= N + 1 \end{aligned}
clumsy(N)
​

=
N⋅(N−1)/(N−2)
​
+⋯8×7/6+
5−4×3/2+1
​

=N+1+5−6+1
=N+1
​

观察到：上式中除了有下划线的部分，其余项的和为 00。注意我们观察到数字 88 后面恰好是「笨阶乘」定义的第一种运算「乘」，由它可以观察出此时 NN 的一般规律，即当 N \bmod 4 = 0Nmod4=0 时，最后一项 11 前面是「加」。

后面的情况可以类似地进行分析。

情况二：当 NN 对 44 取模的余数等于 11 时，有

\begin{aligned} \texttt{clumsy}(N) &= \underline{N \cdot (N - 1) / (N - 2) } + \cdots 9 \times 8 / 7 + \underline{ 6 - 5 \times 4 / 3 + 2 - 1 } \\ &= N + 1 + 6 - 6 + 2 - 1 \\ &= N + 2 \end{aligned}
clumsy(N)
​

=
N⋅(N−1)/(N−2)
​
+⋯9×8/7+
6−5×4/3+2−1
​

=N+1+6−6+2−1
=N+2
​

此时最后一项 11 前面是「减」。

情况三：当 NN 对 44 取模的余数等于 22 时，有

\begin{aligned} \texttt{clumsy}(N) &= \underline{N \cdot (N - 1) / (N - 2) } + \cdots 10 \times 9 / 8 + \underline{ 7 - 6 \times 5 / 4 + 3 - 2 \times 1 } \\ &= N + 1 + 7 - 7 + 3 - 2 \\ &= N + 2 \end{aligned}
clumsy(N)
​

=
N⋅(N−1)/(N−2)
​
+⋯10×9/8+
7−6×5/4+3−2×1
​

=N+1+7−7+3−2
=N+2
​

此时最后一项 11 前面是「乘」。

情况四：当 NN 对 44 取模的余数等于 33 时，有

\begin{aligned} \texttt{clumsy}(N) &= \underline{N \cdot (N - 1) / (N - 2) } + \cdots 11 \times 10 / 9 + \underline{ 8 - 7 \times 6 / 5 + 4 - 3 \times 2 / 1 } \\ &= N + 1 + 8 - 8 + 4 - 6 \\ &= N - 1 \end{aligned}
clumsy(N)
​

=
N⋅(N−1)/(N−2)
​
+⋯11×10/9+
8−7×6/5+4−3×2/1
​

=N+1+8−8+4−6
=N−1
​

此时最后一项 11 前面是「除」。

综上所述：

当 N \le 4N≤4 时，可以分别单独计算「笨阶乘」；

当 N > 4N>4 时，可以根据 NN 对 44 取模的余数进行分类讨论。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/clumsy-factorial/solution/ben-jie-cheng-by-leetcode-solution-deh2/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
复杂度分析

时间复杂度：O(1)O(1)。对于任意的 NN，计算时间都为常数。

空间复杂度：O(1)O(1)。

```js
var clumsy = function (N) {
  if (N === 1) {
    return 1
  } else if (N === 2) {
    return 2
  } else if (N === 3) {
    return 6
  } else if (N === 4) {
    return 7
  }

  if (N % 4 === 0) {
    return N + 1
  } else if (N % 4 <= 2) {
    return N + 2
  } else {
    return N - 1
  }
}
```
