https://leetcode-cn.com/problems/distinct-subsequences/

给定一个字符串 s 和一个字符串 t，计算在 s 的子序列中 t 出现的个数

\*\*字符串的一个子序列是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，『ACE』是『ABCDE』的一个子序列，而『AEC』不是
题目数据保证答案复核 32 位带符号整数范围

示例  1：

输入：s = "rabbbit", t = "rabbit"
输出：3
解释：
如下图所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
(上箭头符号 ^ 表示选取的字母)
rabbbit
^^^^ ^^
rabbbit
^^ ^^^^
rabbbit
^^^ ^^^
示例  2：

输入：s = "babgbag", t = "bag"
输出：5
解释：
如下图所示, 有 5 种可以从 s 中得到 "bag" 的方案。
(上箭头符号 ^ 表示选取的字母)
babgbag
^^ ^
babgbag
^^ ^
babgbag
^ ^^
babgbag
^ ^^
babgbag

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/distinct-subsequences
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 提示：

- `0 <= s.length, t.length <= 1000`
- `s`和`t`由英文字母组成

# method 1: Dynamic programming

假设 s 长度为 m，t 长度为 n。（m>=n).
创建二维数组 dp，其中 dp[i][j]表示在 s[i:]的子序列中 t[j:]出现的个数

> s[i:]表示 s 从下标 i 到末尾的子字符串。

# 边界情况：

- 当 j==n 时，t[j:]为空字符串，因为空字符串是任何字符串的子序列，所以对任意 0<=i<=m,有 dp[i][n] == 1
- 当 i==m 且 j < n 时，s[i:]为空字符串，所以对任意 0<=j< n,有 dp[m][j] == 0

# i < m 且 j < n 时，考虑 dp[i][j]的计算：

- 当 s[i] == t[j]时，dp[i][j]由两部分组成：
  - 如果 s[i]和 t[j]匹配，则考虑 t[j+1:]作为 s[i+1:]的子序列，子序列数为 dp[i+1][j+1].
  - 如果 s[i]和 t[j】匹配，则考虑 t【j：】作为 s【i+1：】的子序列

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  const m = s.length,
    n = t.length
  if (m < n) return 0
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  for (let i = 0; i <= m; i++) dp[i][n] = 1
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (s[i] == t[j]) {
        dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j]
      } else {
        dp[i][j] = dp[i + 1][j]
      }
    }
  }
  return dp[0][0]
}
```
