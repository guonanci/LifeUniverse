https://leetcode-cn.com/problems/largest-divisible-subset/solution/zui-da-zheng-chu-zi-ji-by-leetcode-solut-t4pz/

```java
class Solution {
  public List<Integer> largestDivisibleSubset(int[] nums) {
    int l=nums.length
    Arrays.sort(nums);
  }
}
```

```js
var largestDivisibleSubset = function (nums) {
  const len = nums.length
  nums.sort((a, b) => a - b)

  // 第1步：动态规划找出最大子集的个数、最大子集中的最大整数
  const dp = new Array(len).fill(1)
  let maxSize = 1,
    maxV = dp[0]
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      // 没有重复元素很重要
      if (nums[i] % nums[j] == 0) dp[i] = Math.max(dp[i], dp[j] + 1)
    }
    if (dp[i] > maxSize) {
      maxSize = dp[i]
      maxV = nums[i]
    }
  }
  // 第2步：倒推获得最大子集
  const ret = []
  if (maxSize == 1) {
    ret.push(nums[0])
    return ret
  }
  for (let i = len - 1; i >= 0 && maxSize > 0; i--) {
    if (dp[i] == maxSize && maxV % nums[i] == 0) {
      ret.push(nums[i])
      maxV = nums[i]
      maxSize--
    }
  }
  return ret
}
```
