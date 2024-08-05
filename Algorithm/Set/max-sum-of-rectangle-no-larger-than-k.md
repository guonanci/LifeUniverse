# 有序集合 Ordered Set

# difficult

363. 矩形区域不超过 K 的最大数值和
     给你一个 m x n 的矩阵 matrix 和一个整数 k ，找出并返回矩阵内部矩形区域的不超过 k 的最大数值和。

题目数据保证总会存在一个数值和不超过 k 的矩形区域。

示例 1：

输入：matrix = [[1,0,1],[0,-2,3]], k = 2
输出：2
解释：蓝色边框圈出来的矩形区域 [[0, 1], [-2, 3]] 的数值和是 2，且 2 是不超过 k 的最大数字（k = 2）。
示例 2：

输入：matrix = [[2,2,-1]], k = 3
输出：3

提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-100 <= matrix[i][j] <= 100
-105 <= k <= 105

进阶：如果行数远大于列数，该如何设计解决方案？

通过次数 9,607 提交次数 23,319

我们枚举矩形的上下边界，计算出该边界内每列元素和，则转换成一维问题：

> 给定一个整数数组和一个整数 k，计算概述组的最大区间和，要求区间和不超过 k

定义长度 n 的数组 a 的前缀和
Si=0(i=0),=a0+a1+...+a(i-1) 1<=i<=n
那么区间[l,r]的区间和 a(l)+a(l+1)+...+a(r-1)可以表示为 Sr-Sl
枚举 r，上述问题的约束 Sr-Sl<=k 转化成 Sl>=Sr-k。要使 Sr-Sl 尽可能大，则需要寻找最小的满足 Sl>=Sr-r 的 Sl。我们可以在枚举 r 的同时维护一个存储 Si(i<r)的有序集合，则可以在 O(log n)的时间内二分找到符合要求的 Sl

```cpp
class Solution {
public:
  int maxSumSubMatrix(vector<vector<int>>& matrix, int k) {
      int ans=INT_MIN;
    int m=matrix.size(),n=matrix[0].size();
    for(int i=0;i<m;++i){
      vector<int> sum(n);
      for(int j=i;j<m;++j){
        for(int c=0;c<n;++c)sum[c]+=matrix[j][c];
        set<int> sumSet{0};
        int s=0;
        for(int v:sum){
          s +=v;
          auto lb=sumSet.lower_bound(s-k);
          if(lb!=sumSet.end()) ans=max(ans,s-*lb);
          sumSet.insert(s);
        }
      }
    }
    return ans;
  }
}
```

# 复杂度

- 时间：O(m2n log n), m,n 分别是矩阵的行数和列数
- 空间：O(n)

对于行数远大于列数的情况，枚举矩形的左右边界更优，对应的时间复杂度为 O(n2m log m)
总之，根据 m 和 n 的大小来细化枚举策略，我们可以做到 O(min(m,n)2 max(m,n) log max(m,n))的时间复杂度
