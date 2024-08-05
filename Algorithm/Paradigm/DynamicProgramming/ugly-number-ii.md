# adequate difficulty

https://leetcode-cn.com/problems/ugly-number-ii/

给你一个整数 n ，请你找出并返回第 n 个 丑数 。

丑数 就是只包含质因数  2、3 和/或  5  的正整数。

示例 1：

输入：n = 10
输出：12
解释：[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] 是由前 10 个丑数组成的序列。
示例 2：

输入：n = 1
输出：1
解释：1 通常被视为丑数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ugly-number-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```go
func nthUglyNumber(n int) int {
  dp := make([]int, n+1)
  dp[1]=1
  p2, p3, p5 :=1,1,1
  for i :=2; i<=n;i++{
    x2,x3,x5 := dp[p2]*2,dp[p3]*3,dp[p5]*5
    dp[i]=min(min(x2,x3),x5)
    if dp[i]==x2{
      p2++
    }
    if dp[i]==x3{
      p3++
    }
    if dp[i]==x5{
      p5++
    }
  }
  return dp[n]
}
func min(a, b int) int{
  if a<b {
    return a
  }
  return b
}
```
