最长递增子序列
先安排一个非常火的题目，方便小伙伴们热热身

该算法在vue3 diff算法中有用到，作用是找到最长递归子序列后，可以减少子元素的移动次数

一个整数数组 nums，找到其中一组最长递增子序列的值
最长递增子序列是指：子序列中的所有元素单调递增
例如：[3,5,7,1,2,8] 的 LIS 是 [3,5,7,8]
// 该算法用的是动态规划的思想，时间复杂度为n²，并不是最优算法，最优算法应该是二分查找，最优时间复杂度为nlogn

作者：海阔_天空
链接：https://juejin.cn/post/7146975493278367752
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

https://leetcode-cn.com/problems/longest-increasing-subsequence/

# medium

给你一个整数数组 nums，找到其中最长严格递增子序列长度

子序列是由数组派生而来的序列。删除（或不删除）数组中元素而不改变其他元素的顺序。例如【3，6，2，7】是数组【0，3，1，6，2，2，7】的子序列。

示例 1：

输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
示例 2：

输入：nums = [0,1,0,3,2,3]
输出：4
示例 3：

输入：nums = [7,7,7,7,7,7,7]
输出：1

提示：

1 <= nums.length <= 2500
-104 <= nums[i] <= 104

进阶：

你可以设计时间复杂度为 O(n2) 的解决方案吗？
你能将算法的时间复杂度降低到  O(n log(n)) 吗?
通过次数 307,588 提交次数 608,747

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-increasing-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

https://leetcode.cn/problems/longest-increasing-subsequence/solution/zui-chang-shang-sheng-zi-xu-lie-dong-tai-gui-hua-2/

# 1DP 一维

**定义 dp[i] 为考虑前 i 个元素，以第 i 个数字结尾的最长上升子序列长度**，**注意 nums[i] 必须被选取。**
我们从小到大计算 dp 数组的值，在计算 dp【i】之前，我们已经计算出 dp[0...i-1]的值，则状态转移方程为：
`dp[i]=max(dp[j])+1` 0<=j<=i & num[j]<num[i]
即考虑往 dp[0...i-1]中最长上升子序列后面再加一个 `nums[i]`。由于 dp[j]代表 nums[0...j]以 nums[j] 结尾的最长上升子序列，
最后，整个数组的最长上升 sheng 子序列的长度即所有 dp[i] 中的最大值

```js

```

```js
dp[i]=max(dp[j])+1, // o<=j<i && num[j]<num[i]
```

```java
class Solution {
  public int lengthOfLIS(int[] nums) {
    if(nums.length==0)return 0;
    int[] dp=new int[nums.length];
    dp[0]=1;
    int maxAns=1;
    for (int i=1;i<nums.length;i++){
      dp[i]=1;
      for(int j=0;j<i;j++){
        if(nums[i]>nums[j]) dp[i]=Math.max(dp[i],dp[j]+1);
      }
      maxAns=Math.max(maxAns,dp[i]);
    }
    return maxAns;
  }
}
```

```java
class Solution {
  public int lenOfLIS(int[] nums) {
    if(nums.length==0) return 0
    int[] dp=new int[nums.length]
    dp[0]=1
    int maxAns=1
    for (int i=1;i<nums.length;i++){
      dp[i]=1
      for(int j=0;j<i;j++){
        if(nums[i]>nums[j]) dp[i]=Math.max(dp[i],dp[j]+1)
      }
      maxAns=Math.max(maxAns,dp[i])
    }
    return maxAns
  }
}
```

# 复

- 时：n2，n 为 nums 长度，状态数为 n，计算状态 dp[i]时，需要 n 的时间遍历 dp[0...i-1]的所有状态，所以总时间复杂度为 n2  遍历计算dp 列表需 O(N)，计算每个 dp[i] 需 O(N)。

- 空：n，需要额外使用长度为 n 的 dp 数组，dp 列表占用线性大小额外空间。
```python
class Solutioin:
  def lengthOfLIS(self, nums: List[int]) -> int:
      if not nums: return 0
      dp = [1] * len(nums)
      for i in range(len(nums)):
        for j in range(i):
          if num[j] < nums[i]:
            dp[i]=max(dp[i],dp[j]+1)
      return max(dp)
```

# 2 贪心+二分查找

考虑一个简单的贪心，**如果我们要使上升子序列尽可能长，则我们需要让序列上升得尽可能慢，因此我们希望每次在上升子序列最后加上的那个数尽可能的小**

**维护一个数组 dp[i]，表示长度 i 的最长上升子序列的末尾元素的最小值，用 len 记录目前最长上升子序列的长度，起始时 len 为 1，d[1]=nums[0]**
**同时我们可以注意到 d[i]是关于 i 单调递增的，**
因为如果 d[j]>=d[i]且 j< i，我们考虑从长度为 i 的最长上升子序列的末尾删除 i-j 个元素，那么这个
序列长度变为 j，且第 j 个元素 x（末尾元素）必然小于 d[i]，也就小于 d[j]。那么我们就找到了一个长度 j 的最长上升子序列

```java
class Solution {
  public int lenOfLIS(int[] nums) {
    int len=1,n=nums.length;
    if(n==0)return 0;
    int[] d=new int[n+1];
    d[len]=nums[0];
    for(int i=1;i<n;++i){
      if(nums[i]>d[len]){
        d[++len]=nums[i];
      }else{
        int i=1,r=len,pos=0; // 如果找不到说明说有数逗比 nums[i]大，此时要更新 d[1],所以这里将 pos 设为0
        while(l<=r){
          int mid=(l+r)>>1;
          if(d[mid]<nums[i]){
            pos=mid;
            l=mid+1;
          }else{
            r=mid-1;
          }
        }
      }
    }
  }
}
```
