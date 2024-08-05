# difficult

1269. 停在原地的方案数
      有一个长度为 arrLen 的数组，开始有一个指针在索引 0 处。

每一步操作中，你可以将指针向左或向右移动 1 步，或者停在原地（指针不能被移动到数组范围外）。

给你两个整数 steps 和 arrLen ，请你计算并返回：在恰好执行 steps 次操作以后，指针仍然指向索引 0 处的方案数。

由于答案可能会很大，请返回方案数 模 10^9 + 7 后的结果。

示例 1：

输入：steps = 3, arrLen = 2
输出：4
解释：3 步后，总共有 4 种不同的方法可以停在索引 0 处。
向右，向左，不动
不动，向右，向左
向右，不动，向左
不动，不动，不动
示例 2：

输入：steps = 2, arrLen = 4
输出：2
解释：2 步后，总共有 2 种不同的方法可以停在索引 0 处。
向右，向左
不动，不动
示例 3：

输入：steps = 4, arrLen = 2
输出：8

提示：

1 <= steps <= 500
1 <= arrLen <= 10^6
通过次数 4,495 提交次数 10,130

# 1 动态规划

对于计算方案的题目，常用方法是动态规划。需要计算在 steps 操作后，指针位于下标 0 的方案数
用 dp[i][j]表示在 i 步操作之后，指针位于下标 j 的方案数。其中，i 的取值范围是 0<=i<=steps，j 的取值范围是 0<=j<=arrLen-1
由于一共执行 steps 操作，因此指针所在下标一定不会超过 STEPS，可以进一步将 j 的取值范围缩小到 min(arrLen-1,steps)
当没有进行任何操作时，指针一定位于下标 0，因此动态规划边界条件是 dp[0][0]=1, dp[0][j]=0(1<=j<=min(arrLen-1,steps))

**每一步操作中，指针可以向左或向右移动 1 步，或者原地不动。所以，1<=i<=steps 时，状态 dp[i][j]可以从 dp[i-1][j-1],dp[i-1][j],dp[i-1][j+1]转移得到**

由于指针不能移动到数组范围外，因此对于上述状态转移方程，需要注意下标边界情况，j=0 时，dp[i-1][j-1]=0;j=min(arrLen-1,steps) 时，
dp[i-1][j+1]=0.具体实现时，**需要对下标进行判断，避免下标越界**
计算过程中需要对每个状态的值计算模 10^9+710
9
+7 后的结果。最终得到 \textit{dp}[\textit{steps}][0]dp[steps][0] 的值即为答案。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/solution/ting-zai-yuan-di-de-fang-an-shu-by-leetcode-soluti/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```js
/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function (steps, arrLen) {
  const MODULO = 1000000007 // 模数
  let maxCol = Math.min(arrLen, steps / 2 + 1)
  const dp = new Array(steps + 1)
    .fill(0)
    .map(() => new Array(maxCol + 1).fill(0))
  dp[0][0] = 1
  for (let i = 1; i <= steps; i++) {
    for (let j = 0; j <= maxCol; j++) {
      dp[i][j] = dp[i - 1][j]
      if (j - 1 >= 0) dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % MODULO
      if (j + 1 <= MODULO) dp[i][j] = (dp[i][j] + dp[i - 1][j + 1]) % MODULO
    }
  }
  return dp[steps][0]
}
```

时间复杂度是 O(steps*min(arrLen,steps)) 空间复杂度是 O(steps*min(arrLen,steps))。注意到 dp 的每一行只和上一行相关，所以
空间复杂度可以降低到 O(min(arrLen, step))

```js
var numWays = function (steps, arrLen) {
  const MODULO = 1000000007
  let maxCol = Math.min(arrLen, steps / 2 + 1),
    dp = new Array(maxCol + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i <= steps; i++) {
    const dpNext = new Array(maxCol + 1).fill(0)
    for (let j = 0; j <= maxCol; j++) {
      dpNext[j] = dp[j]
      if (j - 1 >= 0) dpNext[j] = (dpNext[j] + dp[j - 1]) % MODULO
      if (j + 1 <= maxCol) dpNext[j] = (dpNext[j] + dp[j + 1]) % MODULO
    }
    dp = dpNext
  }
  return dp[0]
}
var numWays = function (steps, arrLen) {
  const MODULO = 1000000007
  let maxCol = Math.min(arrLen, Math.ceil(steps / 2) + 1)
  let dp = new Array(maxCol).fill(0)
  dp[0] = 1
  for (let i = 1; i <= steps; i++) {
    const dpNext = new Array(maxCol).fill(0)
    for (let j = 0; j < maxCol; j++) {
      dpNext[j] = dp[j]
      if (j - 1 >= 0) dpNext[j] = (dpNext[j] + dp[j - 1]) % MODULO
      if (j + 1 < maxCol) dpNext[j] = (dpNext[j] + dp[j + 1]) % MODULO
    }
    dp = dpNext
  }
  return dp[0]
}
```
