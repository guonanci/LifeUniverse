# medium

https://leetcode-cn.com/problems/house-robber/ 198. 打家劫舍
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

示例 1：

输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
偷窃到的最高金额 = 1 + 3 = 4 。
示例 2：

输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
偷窃到的最高金额 = 2 + 9 + 1 = 12 。

提示：

0 <= nums.length <= 100
0 <= nums[i] <= 400
通过次数 271,887 提交次数 560,091
请问您在哪类招聘中遇到此题？
贡献者
LeetCode

# method1: DP

首先考虑最简单的情况。如果只有一间房屋，则偷窃该房屋，可以偷窃到最高总金额。如果只有两间房屋，则由于两间房屋相邻，不能同时偷窃，只能偷窃其中的一间房屋，因此选择其中金额较高的房屋进行偷窃，可以偷窃到最高总金额。

如果房屋数量大于两间，应该如何计算能够偷窃到的最高总金额呢？对于第 k~(k>2)k (k>2) 间房屋，有两个选项：

偷窃第 kk 间房屋，那么就不能偷窃第 k-1k−1 间房屋，偷窃总金额为前 k-2k−2 间房屋的最高总金额与第 kk 间房屋的金额之和。

不偷窃第 kk 间房屋，偷窃总金额为前 k-1k−1 间房屋的最高总金额。

在两个选项中选择偷窃总金额较大的选项，该选项对应的偷窃总金额即为前 kk 间房屋能偷窃到的最高总金额。

用 \textit{dp}[i]dp[i] 表示前 ii 间房屋能偷窃到的最高总金额，那么就有如下的状态转移方程：

\textit{dp}[i] = \max(\textit{dp}[i-2]+\textit{nums}[i], \textit{dp}[i-1])
dp[i]=max(dp[i−2]+nums[i],dp[i−1])

边界条件为：

\begin{cases} \textit{dp}[0] = \textit{nums}[0] & 只有一间房屋，则偷窃该房屋 \\ \textit{dp}[1] = \max(\textit{nums}[0], \textit{nums}[1]) & 只有两间房屋，选择其中金额较高的房屋进行偷窃 \end{cases}
{
dp[0]=nums[0]
dp[1]=max(nums[0],nums[1])
​

只有一间房屋，则偷窃该房屋
只有两间房屋，选择其中金额较高的房屋进行偷窃
​

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/house-robber/solution/da-jia-jie-she-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```java
class Solution {
  public int rob(int[] nums) {
    if(nums==null||nums.length==0)return 0;
    int length=nums.length;
    if(length==1) return nums[0];
    int[] dp=new int[length];
    dp[0]=nums[0];
    dp[1]=Math.max(nums[0],nums[1]);
    for(int i=2;i<length;i++) dp[i]=Math.max(dp[i-2]+nums[i,dp[i-1]]);
    return dp[length-1];
  }
}
```

上述方法使用了数组存储结果。考虑到每间房屋的最高总金额只和该房屋的前两间房屋的最高总金额相关，因此可以使用滚动数组，在每个时刻只需要存储前两间房屋的最高总金额。

```java
class Solution {
  public void search(paramWithItsType) {

  }
}
```

class Solution {
public int rob(int[] nums) {
if (nums == null || nums.length == 0) {
return 0;
}
int length = nums.length;
if (length == 1) {
return nums[0];
}
int first = nums[0], second = Math.max(nums[0], nums[1]);
for (int i = 2; i < length; i++) {
int temp = second;
second = Math.max(first + nums[i], second);
first = temp;
}
return second;
}
}
复杂度分析

时间复杂度：O(n)O(n)，其中 nn 是数组长度。只需要对数组遍历一次。

空间复杂度：O(1)O(1)。使用滚动数组，可以只存储前两间房屋的最高总金额，而不需要存储整个数组的结果，因此空间复杂度是 O(1)O(1)。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/house-robber/solution/da-jia-jie-she-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

[与打家劫舍相关的动态规划题目](https://leetcode-cn.com/problems/house-robber/)

首先考虑最简单的情况。如果只有一间房屋，可以偷窃到最高总金额。如果只有两间房屋，则由于两间房屋相邻，不能同时偷窃，，只能偷窃其中的一间房屋，因此选择其中金额较高的房屋进行偷窃，可以偷窃到最高总金额。

如果房屋数量大于两间，应该如何计算能够偷窃到的最高金额呢？对于第 k（k>2)间房屋，有两个选项：

1. 偷窃第 k 间房屋，那么就不能偷第 k-1，偷窃总金额为前 k-2 间的最高总金额与第 k 间房屋的金额之和。
2. 不偷窃第 k 间，偷窃总金额为前 k-1 间的最高总金额

**在这两个选项中选择偷窃总金额较大的选项，该选项对应的偷窃总金额即为前 k 间房屋能偷窃到的最高总金额。**

用 dp[i] 表示前 i 间房屋能偷窃到的最高总金额，那么就有如下的状态转移方程：
dp[i]=max(dp[i-2]+nums[i],dp[i-1])
边界条件为：
dp[0]=nums[0] 只有一间房屋，则偷窃该房屋
dp[1]=max(nums[0],nums[1]) 只有两间，选择其中金额较高的房屋进行偷窃
最终答案为 dp[n-1],n 是数组长度

```java
class Solution {
  public int rob(int[] nums) {
    if(nums==null||nums.length==0)return 0;
    int len=nums.length;
    if(len==1)return nums[0];
    int[] dp=new int[len];
    dp[0]=nums[0];
    dp[1]=Math.max(nums[0],nums[1]);
    for(int i=2;i<len;i++)dp[i]=Math.max(dp[i-2]+nums[i],dp[i-1]);
    return dp[len-1];
  }
}
```

上述方法使用了数组存储结果。考虑到每间房屋的最高总金额只和该房屋的前两间房屋的最高总金额相关，因此可以使用滚动数组，在每个时刻只需要存储前两间房屋的最高总金额

```java
class Solution {
  public int rob(int[] nums) {
    if(nums==null||nums.length==0)return 0;
    int len=nums.length;
    if(length=1)return nums[0];
    int first=nums[0],second=Math.max(nums[0],nums[1]);
    for(int i=2;i<len;i++){
      int tmp=second;
      second=Math.max(first+nums[i],second);
      first=tmp;
    }
    return second;
  }
}
```

# fu

- time: n n 是数组长度，只需要对数组遍历一次
- space：1 使用滚动数组，可以只存储前两间的最高总金额，而不需要存储整个数组的结果，所以空间复杂度是 O（1）
