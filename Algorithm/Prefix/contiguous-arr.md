# medium

https://leetcode-cn.com/problems/contiguous-array/solution/lian-xu-shu-zu-by-leetcode-solution-mvnm/ 525. 连续数组
给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。

示例 1:

输入: nums = [0,1]
输出: 2
说明: [0, 1] 是具有相同数量 0 和 1 的最长连续子数组。
示例 2:

输入: nums = [0,1,0]
输出: 2
说明: [0, 1] (或 [1, 0]) 是具有相同数量 0 和 1 的最长连续子数组。

提示：

1 <= nums.length <= 105
nums[i] 不是 0 就是 1
通过次数 14,408 提交次数 29,671
请问您在哪类招聘中遇到此题？
贡献者
LeetCode
和等于 k 的最长子数组长度

# 1 前缀和+哈希表

**由于 0 和 1 数量相同，等价于 1 的数量减去 0 的数量等于 0，我们可以将括号数组中的 0 视作-1，则原问题转换成求最长的连续子数组，其元素和为 0**
设数组 nums 长度为 n，将数组 nums 进行转换得到长度相等的新数组 newNums：对于 0 \le i<n0≤i<n，当 \textit{nums}[i]=1nums[i]=1 时 \textit{newNums}[i]=1newNums[i]=1，当 \textit{nums}[i]=0nums[i]=0 时 \textit{newNums}[i]=-1newNums[i]=−1。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/contiguous-array/solution/lian-xu-shu-zu-by-leetcode-solution-mvnm/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

为了快速计算 newNums 的子数组的元素和，需要首先计算 newNums 的前缀和。用 prefixSums[i] 表示 newNums 从 0 到 i 的前缀和，则 newNums 从 j+1
到 k（j< k)的子数组的元素和为 prefixSums[k]-prefixSums[j]，该子数组长度为 k-j
当 prefixSums[k]-prefixSums[j]=0 时，即得到 newNums 的一个长度为 k-j 的子数组元素和为 0，对应 nums 的长度为 k-j 的

```js
var findMaxLength = (nums) => {
  let maxLen = 0
  const map = new Map()
  let counter = 0
  map.set(counter, -1)
  const n = nums.length
  for (let i = 0; i < n; i++) {
    const n = nums[i]
    if (n == 1) {
      counter++
    } else {
      counter--
    }
    if (map.has(counter)) {
      const prevI = map.get(counter)
      maxLen = Math.max(maxLen, i - prevI)
    } else map.set(counter, i)
  }
  return maxLen
}
```
