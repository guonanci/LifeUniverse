# 132 模式

medium中等难度

 给你一个整数数组 nums ，数组中共有 n 个整数。132 模式的子序列 由三个整数 nums[i]、nums[j] 和 nums[k] 组成，并同时满足：i < j < k 和 nums[i] < nums[k] < nums[j] 。

如果 nums 中存在 132 模式的子序列 ，返回 true ；否则，返回 false 。

进阶：很容易想到时间复杂度为 O(n^2) 的解决方案，你可以设计一个时间复杂度为 O(n logn) 或 O(n) 的解决方案吗？

示例 1：

输入：nums = [1,2,3,4]
输出：false
解释：序列中不存在 132 模式的子序列。
示例 2：

输入：nums = [3,1,4,2]
输出：true
解释：序列中有 1 个 132 模式的子序列： [1, 4, 2] 。
示例 3：

输入：nums = [-1,3,2,0]
输出：true
解释：序列中有 3 个 132 模式的的子序列：[-1, 3, 2]、[-1, 3, 0] 和 [-1, 2, 0] 。

提示：

n == nums.length
1 <= n <= 104
-109 <= nums[i] <= 109
<https://leetcode.cn/problems/132-pattern/solutions/676437/132mo-shi-by-leetcode-solution-ye89/> 方法二-单调栈的正确使用，需要结合寻求答案过程中的，关键算法过程及目标。

*单调栈*

```js
var find132pattern = function (nums) {
  const n = nums.length
  const candidate_k = [nums[n - 1]]
  let max_k = -Number.MAX_SAFE_INTEGER // 设置好了恰当的‘2’元素初始值，使得不进入第一趟的‘nums[i]<max_k’if条件

  for (let i = n - 2; i >= 0; --i) { // 从右到左的话，方便123-132程序的遍历查找
    if (nums[i] < max_k) {
      return true // key
    }
    while (
      candidate_k.length &&
      nums[i] > candidate_k[candidate_k.length - 1]
    ) {
      // 第一趟循环可能会先进入这里的while，设置max_k为第一个更有意义的值；第二趟进入第二个if条件，pushcandidate_k
      max_k = candidate_k[candidate_k.length - 1] // 取‘2’元素集的单调栈当中的栈顶元素，作为‘2’元素集的最大值
      candidate_k.pop()
    }
    if (nums[i] > max_k) {
      candidate_k.push(nums[i]) // 更新candidate_k
      // 第一趟循环也可能会先进入这里的if
    }
  }
  return false // key
}

var find132Pattern=function(nums){
  const n=nums.length
  const candidate_k=[nums[n-1]]
  let max_k=-Number.MAX_SAFE_INTEGER

  for(let i=n-2;i>=0;--i){
    if(nums[i]<max_k){
      return true
    }
  }
}
```
