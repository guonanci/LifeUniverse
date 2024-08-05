[github-CyC2018 大神](https://github.com/CyC2018/CS-Notes/blob/master/notes/Leetcode%20%E9%A2%98%E8%A7%A3%20-%20%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.md#0-1-%E8%83%8C%E5%8C%85)
[希望用一种规律搞定背包问题](https://leetcode-cn.com/problems/combination-sum-iv/solution/xi-wang-yong-yi-chong-gui-lu-gao-ding-bei-bao-wen-/)
递归和动态规划都是将愿问题拆成多个子问题然后求解，最本质区别是，动态规划保存了子问题的解，避免重复计算

方法一：动态规划
思路和算法

我们用
f(x) 表示爬到第x 级台阶的方案数，考虑最后一步可能跨了一级台阶，也可能跨了两级台阶，所以我们可以列出如下式子：
f(x)=f(x−1)+f(x−2)

它意味着爬到第
x 级台阶的方案数是爬到第
x−1 级台阶的方案数和爬到第
x−2 级台阶的方案数的和。很好理解，因为每次只能爬
1 级或
2 级，所以
f(x) 只能从
f(x−1) 和
f(x−2) 转移过来，而这里要统计方案总数，我们就需要对这两项的贡献求和。

以上是动态规划的转移方程，下面我们来讨论边界条件。我们是从第
0 级开始爬的，所以从第
0 级爬到第0 级我们可以看作只有一种方案，即
f(0)=1；从第
0 级到第
1 级也只有一种方案，即爬一级，
f(1)=1。这两个作为边界条件就可以继续向后推导出第
n 级的正确结果。我们不妨写几项来验证一下，根据转移方程得到
f(2)=2，
f(3)=3，
f(4)=5，……，我们把这些情况都枚举出来，发现计算的结果是正确的。

我们不难通过转移方程和边界条件给出一个时间复杂度和空间复杂度都是
O(n) 的实现，但是由于这里的
f(x) 只和
f(x−1) 与
f(x−2) 有关，所以我们可以用「滚动数组思想」把空间复杂度优化成
O(1)。下面的代码中给出的就是这种实现。

作者：LeetCode-Solution
链接：https://leetcode.cn/problems/climbing-stairs/solution/pa-lou-ti-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# 斐波那契数列

1. 爬楼梯 70.Climbing Stairs（Easy）

有 N 阶楼梯，每次可以上 1 阶或 2 阶，求有多少种上楼梯的方法
定义一个数组 dp 存储上楼梯的方法数，为了方便讨论，数组下标从 1 开始，dp[i]表示走到第 i 个楼梯的方法数目
第 i 个楼梯可以从第 i-1 个和 i-2 个楼梯再走一步到达，走到第 i 个楼梯的方法数为走到第 i-1 和第 i-2 个楼梯的方法数之和

dp[i]=dp[i-1]+dp[i-2]
考虑到 dp[i]只和 dp[i-1],dp[i-2]相关，因此可以只用两个变量来存储 dp[i-1],dp[i-2]，使原来的 O(n)空间复杂度优化为 O(1)复杂度

```java
class Solution {
  public int climbStairs(int n) {
    if(n<=2)return n;
    int pre2=1,pre1=2;
    for(int i=2;i<n;i++){
      int cur=pre1+pre2;
      pre2=pre1;
      pre1=cur;
    }
    return pre1;
  }
}
```

https://zhuanlan.zhihu.com/p/72734380
