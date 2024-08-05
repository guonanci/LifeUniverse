# medium

https://leetcode-cn.com/problems/house-robber-ii/solution/da-jia-jie-she-ii-by-leetcode-solution-bwja/

你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，能够偷窃到的最高金额。

示例  1：

输入：nums = [2,3,2]
输出：3
解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
示例 2：

输入：nums = [1,2,3,1]
输出：4
解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
  偷窃到的最高金额 = 1 + 3 = 4 。
示例 3：

输入：nums = [0]
输出：0

提示：

1 <= nums.length <= 100
0 <= nums[i] <= 1000
通过次数 88,764 提交次数 213,602

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/house-robber-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```java
class Solution {
    public int rob(int[] nums) {
        int length = nums.length;
        if (length == 1) {
            return nums[0];
        } else if (length == 2) {
            return Math.max(nums[0], nums[1]);
        }
        return Math.max(robRange(nums, 0, length - 2), robRange(nums, 1, length - 1));
    }

    public int robRange(int[] nums, int start, int end) {
        int first = nums[start], second = Math.max(nums[start], nums[start + 1]);
        for (int i = start + 2; i <= end; i++) {
            int temp = second;
            second = Math.max(first + nums[i], second);
            first = temp;
        }
        return second;
    }
}

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/house-robber-ii/solution/da-jia-jie-she-ii-by-leetcode-solution-bwja/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

是「198 打家劫舍」的进阶，不同之处是，这里的房屋首尾相连，第一间房屋和最后一间房屋相邻 lin，因此第一间和最后一间不能在同一晚偷窃

# 1 动态规划

首先考虑最简单情况。如果只有一间房屋，则偷窃该房屋，可以偷窃到最高总金额。如果只有两件房屋，则由于两间房屋相邻，不能同时偷窃，只能偷窃其中一间房屋，
因此选择其中金额较高的房屋进行偷窃，可以偷窃到最高金额

**注意到当房屋数量不超过两间时，最多只能偷窃一间房屋，因此不需要考虑首尾相连的问题。如果房屋数量大于两间，就必须考虑首尾相连的问题，地一间房屋和最后一间不能同时偷窃**
**如何才能保证第一间和最后一间不同时偷窃呢。如果偷窃了第一间，则偷窃范围是第一间到最后第二间；如果偷窃了最后一间，则偷窃范围是第二间到最后第一间**

假设数组 nums 长度为 n。如果不偷窃最后一间房屋，则偷窃房屋下标范围是[0,n-2]；如果不偷窃第一间，则偷窃的范围是[1,n-1].在确定偷窃房屋下标范围后，即可用第 198 的方法解决。对于两段下标范围分别计算可以偷窃到的最高总金额，其中的最大值即为在 n 间房屋中可以偷窃到的最高总金额

假设范围是[start,end]，用 dp[i] 表示在[start,i]内可以偷到的最高总金额，那么状态转移方程：
dp[i]=max(dp[i-1]+nums[i],dp[i-1])

边界条件：
dp[start]=nums[start]
dp[start+1]=max(nums[start],nums[start+1])

计算得到 dp[end]即为下标范围[start,end]内可以偷到的最高总金额
分别取(start,end)=(0,n-2)和（start,end)=(1,n-1)进行计算，去两个 dp[end]中的最大值，即可得到最终结果

时:O(n)
空:O(n)

考虑到每间房屋的最高总金额只和该房屋的前两间房屋的最高总金额相关，因此可以使用滚动数组
在每个时刻只需要存储前两件前两间房屋的最高总金额，将空间复杂度降到 O(1)

```js
var rob = function (nums) {
  const len = nums.length
  if (len == 1) return nums[0]
  else if (len == 2) return Math.max(nums[0], nums[1])
  return Math.max(robRange(nums, 0, len - 2), robRange(nums, 1, len - 1))
}
const robRange = (nums, start, end) => {
  let first = nums[start],
    second = Math.max(nums[start], nums[start + 1])
  for (let i = start + 2; i <= end; i++) {
    const tmp = second
    second = Math.max(first + nums[i], second)
    first = tmp
  }
  return second
}
```

# 复

- 时： O（n），n 是数组长度，需要对数组遍历两次，计算可以偷到的最高总金额
- 空：O（1）
