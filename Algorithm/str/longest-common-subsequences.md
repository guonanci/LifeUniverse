# medium

https://leetcode-cn.com/problems/longest-common-subsequence/

1143. 最长公共子序列
      给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。

示例 1：

输入：text1 = "abcde", text2 = "ace"
输出：3
解释：最长公共子序列是 "ace" ，它的长度为 3 。
示例 2：

输入：text1 = "abc", text2 = "abc"
输出：3
解释：最长公共子序列是 "abc" ，它的长度为 3 。
示例 3：

输入：text1 = "abc", text2 = "def"
输出：0
解释：两个字符串没有公共子序列，返回 0 。

提示：

1 <= text1.length, text2.length <= 1000
text1 和 text2 仅由小写英文字符组成。
通过次数 83,795 提交次数 136,102
在真实的面试中遇到过这道题？
贡献者
LeetCode
Try dynamic programming. DP[i][j] represents the longest common subsequence of text1[0 ... i] & text2[0 ... j].
DP[i][j] = DP[i - 1][j - 1] + 1 , if text1[i] == text2[j] DP[i][j] = max(DP[i - 1][j], DP[i][j - 1]) , otherwise

# DP

最长公共子序列问题是典型的二维动态规划问题
假设 txt1,txt2 length is len1, len2.创建 m+1 行和 n+1 列的二维数组 dp，其中 dp[i][j]表示 txt1【0：i] txt2[0:j]的最长公共子序列的长度。

> 上述表示中，txt1[0:i]表示 txt1 的长度为 i 的前缀，txt2[0:j]表示 txt2 的长度为 j 的前缀。
> 考虑动归的边界情况：

- 当 i==0 时，txt1[0:i]为空，空字符串和任何字符串的最长公共子序列的长度都是 0，因此对任意 0<=j<=n 时，有 dp[0][j]=0
- 当 j==0 是，txt2[0:j]为空，同理可得，对任意 0<=j<=m, dp[i][j]==0
  所以动归边界情况是：当 i==0 或 j==0 时，dp[i][j]==0
  当 i>0 且 j>0 时，考虑 dp[i][j]的计算：
- 当 txt1[i-1]==txt2[j-1]时，将这两个相同的字符称为公共字符，考虑 txt1[0:i-1]和 txt2[0:j-1]的最长公共子序列，在增加一个字符（即公共字符），即可得到 txt1[0:i] txt2[0:j]的最长公共子序列，再增加一个字符（公共字符）即可得到 txt1[0:i] txt2[0:j]的最长公共子序列，因此 dp[i][j]=dp[i-1][j-1]+1
  当 \textit{text}\_1[i-1] \ne \textit{text}\_2[j-1]text
  1
  ​
  [i−1]
  
  ​
  =text
  2
  ​
  [j−1] 时，考虑以下两项：

\textit{text}\_1[0:i-1]text
1
​
[0:i−1] 和 \textit{text}\_2[0:j]text
2
​
[0:j] 的最长公共子序列；

\textit{text}\_1[0:i]text
1
​
[0:i] 和 \textit{text}\_2[0:j-1]text
2
​
[0:j−1] 的最长公共子序列。

要得到 \textit{text}\_1[0:i]text
1
​
[0:i] 和 \textit{text}\_2[0:j]text
2
​
[0:j] 的最长公共子序列，应取两项中的长度较大的一项，因此 \textit{dp}[i][j]=\max(\textit{dp}[i-1][j],\textit{dp}[i][j-1])dp[i][j]=max(dp[i−1][j],dp[i][j−1])。

由此可以得到如下状态转移方程：

\textit{dp}[i][j] = \begin{cases} \textit{dp}[i-1][j-1]+1, & \textit{text}\_1[i]=\textit{text}\_2[j] \\ \max(\textit{dp}[i-1][j],\textit{dp}[i][j-1]), & \textit{text}\_1[i] \ne \textit{text}\_2[j] \end{cases}
dp[i][j]={
dp[i−1][j−1]+1,
max(dp[i−1][j],dp[i][j−1]),
​

text
1
​
[i]=text
2
​
[j]
text
1
​
[i]

​
=text
2
​
[j]
​

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/longest-common-subsequence/solution/zui-chang-gong-gong-zi-xu-lie-by-leetcod-y7u0/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```js
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (txt1, txt2) {
  const len1 = txt1.length,
    len2 = txt2.length
  const dp = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0))
  for (let i = 1; i <= len1; i++) {
    const char1 = txt1[i - 1]
    for (let j = 1; j <= len2; j++) {
      const char2 = txt2[j - 1]
      if (char1 == char2) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[len1][len2]
}
```
