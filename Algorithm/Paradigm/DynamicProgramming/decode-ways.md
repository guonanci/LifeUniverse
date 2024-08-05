# medium

https://leetcode-cn.com/problems/decode-ways/solution/jie-ma-fang-fa-by-leetcode-solution-p8np/ 91. 解码方法
一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：

'A' -> 1
'B' -> 2
...
'Z' -> 26
要 解码 已编码的消息，所有数字必须基于上述映射的方法，反向映射回字母（可能有多种方法）。例如，"11106" 可以映射为：

"AAJF" ，将消息分组为 (1 1 10 6)
"KJF" ，将消息分组为 (11 10 6)
注意，消息不能分组为 (1 11 06) ，因为 "06" 不能映射为 "F" ，这是由于 "6" 和 "06" 在映射中并不等价。

给你一个只含数字的 非空 字符串 s ，请计算并返回 解码 方法的 总数 。

题目数据保证答案肯定是一个 32 位 的整数。

示例 1：

输入：s = "12"
输出：2
解释：它可以解码为 "AB"（1 2）或者 "L"（12）。
示例 2：

输入：s = "226"
输出：3
解释：它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
示例 3：

输入：s = "0"
输出：0
解释：没有字符映射到以 0 开头的数字。
含有 0 的有效映射是 'J' -> "10" 和 'T'-> "20" 。
由于没有字符，因此没有有效的方法对此进行解码，因为所有数字都需要映射。
示例 4：

输入：s = "06"
输出：0
解释："06" 不能映射到 "F" ，因为字符串含有前导 0（"6" 和 "06" 在映射中并不等价）。

提示：

1 <= s.length <= 100
s 只包含数字，并且可能包含前导零。
通过次数 97,779 提交次数 370,220

length of Str s is n.
**f(i)表示字符串 s 的前 i 个字符 s[1..i]的解码方法数**

```cpp
class Solution {
public:
  int numDecodings(string s) {
    int n=s.size();
    vector<int> f(n+1);
    f[0]=1;
    for(int i=1;i<=n;++i){
      if(s[i-1]!='0') f[i]+=f[i-1];
      if(
        i>1&&
        s[i-2]!='0'&&
        ((s[i-2]-'0')*10+(s[i-1]-'0')<=26)
      )f[i]+=f[i-2];
    }
    return f[n];
  }
}
```

```cpp
class Solution {
public:
  int numDecodings(string s) {
    int n=s.size();
    // a==f[i-2]b=f[i-1],c=f[i]
    int a=0,b=1,c;
    for(int i=1;i<=n;++i){
      c=0;
      if(s[i-1]!='0')c+=b;
      if(
        i>1&&
        s[i-2]!='0'&&
        ((s[i-2]-'0')*10+(s[i-1]-'0')<=26)
      )c+=a;
      tie(a,b)={b,c};
    }
    return c;
  }
}
```

```js
var numDecodings = (s) => {
  let a = 0,
    b = 1,
    c = 0
  for (let i = 1; i <= n; ++i) {
    c = 0
    if (s[i - 1] != '0') c += b
    if (
      i > 1 &&
      s[i - 2] != '0' &&
      (s[i - 2] - '0') * 10 + (s[i - 1] - '0') <= 26
    )
      c += a
    a = b
    b = c
  }
  return c
}
```

# 方法一：动态规划

## 思路与算法

思路与算法

对于给定的字符串 ss，设它的长度为 nn，其中的字符从左到右依次为 s[1], s[2], \cdots, s[n]s[1],s[2],⋯,s[n]。我们可以使用动态规划的方法计算出字符串 ss 的解码方法数。

具体地，设 f_if
i
​
表示字符串 ss 的前 ii 个字符 s[1..i]s[1..i] 的解码方法数。在进行状态转移时，我们可以考虑最后一次解码使用了 ss 中的哪些字符，那么会有下面的两种情况：

第一种情况是我们使用了一个字符，即 s[i]s[i] 进行解码，那么只要 s[i] \neq 0s[i]

​
=0，它就可以被解码成 \text{A} \sim \text{I}A∼I 中的某个字母。由于剩余的前 i-1i−1 个字符的解码方法数为 f\_{i-1}f
i−1
​
，因此我们可以写出状态转移方程：

f*i = f*{i-1}, \quad 其中 ~ s[i] \neq 0
f
i
​
=f
i−1
​
,其中  s[i]

​
=0

第二种情况是我们使用了两个字符，即 s[i-1]s[i−1] 和 s[i]s[i] 进行编码。与第一种情况类似，s[i-1]s[i−1] 不能等于 00，并且 s[i-1]s[i−1] 和 s[i]s[i] 组成的整数必须小于等于 2626，这样它们就可以被解码成 \text{J} \sim \text{Z}J∼Z 中的某个字母。由于剩余的前 i-2i−2 个字符的解码方法数为 f\_{i-2}f
i−2
​
，因此我们可以写出状态转移方程：

f*i = f*{i-2}, \quad 其中 ~ s[i-1] \neq 0 ~并且~ 10\cdot s[i-1]+s[i] \leq 26
f
i
​
=f
i−2
​
,其中  s[i−1]

​
=0  并且  10⋅s[i−1]+s[i]≤26

需要注意的是，只有当 i>1i>1 时才能进行转移，否则 s[i-1]s[i−1] 不存在。

将上面的两种状态转移方程在对应的条件满足时进行累加，即可得到 f_if
i
​
的值。在动态规划完成后，最终的答案即为 f_nf
n
​
。

细节

动态规划的边界条件为：

f_0 = 1
f
0
​
=1

即空字符串可以有 11 种解码方法，解码出一个空字符串。

同时，由于在大部分语言中，字符串的下标是从 00 而不是 11 开始的，因此在代码的编写过程中，我们需要将所有字符串的下标减去 11，与使用的语言保持一致。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/decode-ways/solution/jie-ma-fang-fa-by-leetcode-solution-p8np/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

注意到在状态转移方程中，f*if
i
​
的值仅与 f*{i-1}f
i−1
​
和 f\_{i-2}f
i−2
​
有关，因此我们可以使用三个变量进行状态转移，省去数组的空间。

C++JavaPython3JavaScriptGolangC

复杂度分析

时间复杂度：O(n)O(n)，其中 nn 是字符串 ss 的长度。

空间复杂度：O(n)O(n) 或 O(1)O(1)。如果使用数组进行状态转移，空间复杂度为 O(n)O(n)；如果仅使用三个变量，空间复杂度为 O(1)O(1)。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/decode-ways/solution/jie-ma-fang-fa-by-leetcode-solution-p8np/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
