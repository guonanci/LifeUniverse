# medium

1035. 不相交的线
      在两条独立的水平线上按给定的顺序写下 nums1 和 nums2 中的整数。

现在，可以绘制一些连接两个数字 nums1[i] 和 nums2[j] 的直线，这些直线需要同时满足满足：

nums1[i] == nums2[j]
且绘制的直线不与任何其他连线（非水平线）相交。
请注意，连线即使在端点也不能相交：每个数字只能属于一条连线。

以这种方法绘制线条，并返回可以绘制的最大连线数。

示例 1：

输入：nums1 = [1,4,2], nums2 = [1,2,4]
输出：2
解释：可以画出两条不交叉的线，如上图所示。
但无法画出第三条不相交的直线，因为从 nums1[1]=4 到 nums2[2]=4 的直线将与从 nums1[2]=2 到 nums2[1]=2 的直线相交。
示例 2：

输入：nums1 = [2,5,1,2,5], nums2 = [10,5,2,1,5,2]
输出：3
示例 3：

输入：nums1 = [1,3,7,1,7,5], nums2 = [1,9,2,5,1]
输出：2

提示：

1 <= nums1.length <= 500
1 <= nums2.length <= 500
1 <= nums1[i], nums2[i] <= 2000

通过次数 9,274 提交次数 15,952

# 1dp

给定两数组 nums1,nums2.当 nums1[i]=nums2[j] 时，可以用一条直线连接 nums1[i],nums2[j].假设一共绘制了 k 条互不相交的直线，其中第 x 条直线连接
nums1[ix] nums2[jx]则对于任意 1<=x<=k，都有 nums1[ix],nums2[jx] i1 < i2<...< ik,j1< j2<...< jk
直线分别连接了 k 对相等元素，而且这 k 对相对顺序一致。所以这 k 对组成的序列是 nums1，nums2 的公共子序列。要计算可以绘制的最大连接数，计算 nums1、
nums2 的最长公共子序列长度。

最长公共子序列长度是典型的二维动态规划

数组长度为 m，n。创建 m+1 行，n+1 行的二维数组 dp，dp[i][i] 表示 nums1[0:i] 和 nums2[0:j] 的最长公共子序列长度

> 上述表示中，nums[0:i] 表示数组 nums1 的长度为 i 的前缀，nums2[0:j]...
> 边界情况：
> 当 i=0，nums1[0:i]为空，空数组和任何数组最长公共子序列长度都是 0，所以对任意 0<=j<=n，dp[0][j]=0
> 当 j=0，nums2[0:j] ...0<=i<=m， dp[i][0]=0

所以边界情况：i=0 或者 j=0，dp[i][j]=0

当 i >0 且 j>0 时，考虑 dp[i][j] 的计算

- 当 nums1[i-1]=nums2[j-1]时，将这两个相同元素称为公共元素，考虑 nums1[0:i-1] nums2[0:j-1]的最长公共子序列，再赠加一个元素（公共元素）
  - 即可得到 nums1[0:i] 和 nums2[0:j] 的最长公共子序列，所以 dp[i][j]=dp[i-1][j-1]+1
- 当 nums1[i-1]不等于 nums2[j-1]时，考虑两项：
  - nums1[0:i-1]和 nums2[0:j]的最长公共子序列
  - nums1[0:i]和 nums2[0:j-1]的最长公共子序列
    要得到 nums1[0:i],nums2[0:j] 的最长公共子序列，应取两项中长度较大的一项，所以 dp[i][j]=max(dp[i-1][j],dp[i][j-1])

所以状态转移方程如下：

```js
dp[i][j] = dp[i - 1][j - 1] + 1 // nums1[i-1] = nums2[j-1]
dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]) // nums1[i-1] != nums2[j-1]
```

最终计算得到 dp[m][n]即为最长公共子序列长度,即可以绘制的最大连线数

```js
var maxUncrossedLines = function (nums1, nums2) {
  const m = nums1.length,
    n = nums2.length
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    const num1 = nums1[i - 1]
    for (let j = 1; j <= n; j++) {
      const num2 = nums2[j - 1]
      if (num1 == num2) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[m][n]
}
```

# 复

- 时： O(mn) dp 有 m+1 行，n+1 列，需要对 dp 每个元素进行计算
- 空：O（mn） 创建了 m+1 行、n+1 列的二维数组 dp
