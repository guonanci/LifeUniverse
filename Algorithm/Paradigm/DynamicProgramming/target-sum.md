# medium https://leetcode-cn.com/problems/target-sum/

494. 目标和
     给你一个整数数组 nums 和一个整数 target 。

向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：

例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。

示例 1：

输入：nums = [1,1,1,1,1], target = 3
输出：5
解释：一共有 5 种方法让最终目标和为 3 。
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3
示例 2：

输入：nums = [1], target = 1
输出：1

提示：

1 <= nums.length <= 20
0 <= nums[i] <= 1000
0 <= sum(nums[i]) <= 1000
-1000 <= target <= 1000
通过次数 121,078 提交次数 244,116
相关标签
深度优先搜索、动态规划

# 1 回溯

**数组 nums 的每个元素都可以添加符号+或-，所以每个元素有 2 种添加符号的方法，n 个数共有 2 的 n 次方种添加符号的方法，对应 2 的 n 次方种不同表达式。当 n 个元素都添加符号后，即得到一种表达式。**
如果表达式结果等于目标数 target，则该表达式即为符号要求的表达式。

**可以使用回溯方法遍历所有表达式，回溯过程中维护一个计数器 count，当遇到一种表达式结果等于目标数 target 时，将 cnt 的值加 1。边理完所有表达式后，即可得到结果等于目标数 target 的表达式数目**

```js
var findTargetSumWays = function (nums, target) {
  let cnt = 0
  const backtrack = (nums, target, i, sum) => {
    if (i == nums.length) {
      if (sum == target) cnt++
    } else {
      backtrack(nums, target, i + 1, sum + nums[i])
      backtrack(nums, target, i + 1, sum - nums[i])
    }
  }
  backtrack(nums, target, 0, 0)
  return cnt
}
```

# 复杂度分析

- 时： 2 的 n 次方，n 是数组 nums 长度，回溯需要遍历所有不同的表达式，共有 2 的 n 次方种不同表达式，每种表达式计算结果需要 O（1）的时间，所以总
  - 时间复杂度为 2 的 n 次方
- 空：n，主要取决于递归调用的栈空间，栈的深度不超过 n

# 2dp

**记数组元素和为 sum，添加-号的元素和为 neg，则其余添加+的元素和为 sum-neg，得到的表达式结果为（sum-neg）-neg=sum-2\*neg=target**

**neg=(sum-target)/2**

**由于数组中元素都是非负整数，neg 比必须是非负整数，所以上式成立的前提是 sum-target 是非负偶数。**若不符合条件可直接返回 0

**若上式成立，问题转化成在数组 nums 中选取若干元素，使得这些元素和等于 neg，计算选取元素的方案数。我们可以用 dp 求解**

**定义二维数组 dp，其中 dp[i][i]表示在数组 nums 的前 i 个数中选取元素，和等于 j 的方案数。假设 nums 长度为 n，则最终答案为 dp[n][neg]**

没有任何元素可选时，元素和只能是 0，对应方案数是 1，所以边界条件是：
dp[0][j]=1 j=0
dp[0][j]=0 j>=1
当 1<=i<=n 时，对于 nums 中的第 i 个元素 num，遍历 0<=j<=neg.计算 dp[i][j] 的值：

- 如果 j<num，则不能选 num，此时有 dp[i][j]=dp[i-1][j]
- 如果 j>=num，则如果不选 num，方案数就是 dp[i-1][j],如果选 num，方案数是 dp[i-1][j-num]
  - 所以 dp[i][j]=dp[i-1][j]+dp[i-1][j-num]

所以状态转移方程如下：
dp[i][j]=dp[i-1][j] j < nums[i]
dp[i][j]=dp[i-1][j]+dp[i-1]j-nums[i]] j >= nums[i]

最终得到 dp[n][neg] 的值即为答案

由此可以得到空间复杂度为 O(n\*neg)的实现

```js
var findTargetSumWays = function (nums, target) {
  let sum = 0
  for (const num of nums) sum += num
  const diff = sum - target
  if (diff < 0 || diff % 2 != 0) return 0
  const n = nums.length,
    neg = diff / 2
  const dp = new Array(n + 1).fill(0).map(() => new Array(neg + 1).fill(0))
  dp[0][0] = 1
  for (let i = 1; i <= n; i++) {
    const num = nums[i - 1]
    for (let j = 0; j <= neg; j++) {
      dp[i][j] = dp[i - 1][j]
      if (j >= num) dp[i][j] += dp[i - 1][j - num]
    }
  }
  return dp[n][neg]
}
```

**由于 dp 的每一行的计算只和上一行有关，因此可以使用滚动数组方式，去掉 dp 的每一个维度，将空间复杂度优化到 O（neg)**

实现时，内层循环采用倒序遍历方式，这种方式保证转移来的是 dp[i-1][j] 中的元素值。

```js
var findTargetSumWays = function (nums, target) {
  let sum = 0
  for (const num of nums) sum += num
  const diff = sum - target
  if (diff < 0 || diff % 2 != 0) return 0
  const neg = Math.floor(diff / 2)
  const dp = new Array(neg + 1).fill(0)
  for (const num of nums) for (let j = neg; j >= num; j--) dp[j] += dp[j - num]
  return dp[neg]
}
```
