# medium
[希望用一种规律额搞定背包问题](https://leetcode-cn.com/problems/combination-sum-iv/solution/xi-wang-yong-yi-chong-gui-lu-gao-ding-bei-bao-wen-/)
https://leetcode-cn.com/problems/combination-sum-iv/
377. 组合总和 Ⅳ
给你一个由 不同 整数组成的数组 nums ，和一个目标整数 target 。请你从 nums 中找出并返回总和为 target 的元素组合的个数。

题目数据保证答案符合 32 位整数范围。



示例 1：

输入：nums = [1,2,3], target = 4
输出：7
解释：
所有可能的组合为：
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
请注意，顺序不同的序列被视作不同的组合。
示例 2：

输入：nums = [9], target = 3
输出：0


提示：

1 <= nums.length <= 200
1 <= nums[i] <= 1000
nums 中的所有元素 互不相同
1 <= target <= 1000


进阶：如果给定的数组中含有负数会发生什么？问题会产生何种变化？如果允许负数出现，需要向题目中添加哪些限制条件？

通过次数28,263提交次数62,847


# 方法一：动态规划
给定数组nums和目标值target，要求计算从nums中选取若干个元素，使得他们和等于target的方案数。其中nums的每个元素可以选取多次，且需要考虑选取元素的顺序。由于需要考虑选取元素的顺序，所以这道题需要计算选取元素的拍列数
可以通过动态规划的方法计算可能的方案数。dp[x]表示选取的元素之和等于x的方案数，目标是求dp[target]

动态规划边界是dp[0]==1.只有当不选取任何元素时，元素之和才为0.因此只有1种方案

当1<=i<=target时

```js
var combinationSum4=function(nums,target){
  const dp=new Array(target+1).fill(0)
  dp[0]=1
  for(let i=1;i<=target;i++){
    for(const num of nums){
      if(num<=i) dp[i]+=dp[i-num]
    }
  }
  return dp[target]
}
```
