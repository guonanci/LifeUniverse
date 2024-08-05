# high

面试题 17.21. 直方图的水量
给定一个直方图(也称柱状图)，假设有人从上面源源不断地倒水，最后直方图能存多少水量?直方图的宽度为 1。

上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的直方图，在这种情况下，可以接 6 个单位的水（蓝色部分表示水）。 感谢 Marcos 贡献此图。

示例:

输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6
通过次数 10,297 提交次数 16,682
在真实的面试中遇到过这道题？
直方图中最高的长方形起什么作用?
想象一下最高的长方形、左边第二高的长方形和右边第二高的长方形。水会填满它们之间的区域。你能计算出其面积吗？其余的面积怎么办？
为了计算出整体上最高的长方形和左侧最高的长方形之间的面积，你只需遍历直方图并减去这两个长方形之间的任何长方形的面积。你可以在右侧做同样的事情。如何处理剩下的图表?
你可以通过重复这个过程来处理图的其余部分：找到最高的长方形和第二高的长方形，然后减去它们之间的长方形的面积。
怎样才能更快地找到两边的下一个最高的长方形?
你能通过预计算来得出每边下一个最高的长方形是哪个么？
作为另一种解决方案，请从每个长方形的角度来考虑。每个长方形上面都有水。每个长方形上面会有多少水？
每个长方形的顶部都有水，水的高度应与左侧最高长方形和右侧最高长方形的较小值相匹配，也就是说，water*on_top[i] = min(tallest* bar(0->i), tallest_bar(i, n))。
你应该能在 O(N)时间和 O(N)空间中解出该题。

https://leetcode-cn.com/problems/volume-of-histogram-lcci/

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (h) {
  // h:height
  const n = h.length
  if (n == 0) return 0
  const leftMax = new Array(n).fill(0)
  leftMax[0] = h[0]
  for (let i = 1; i < n; ++i) leftMax[i] = Math.max(leftMax[i - 1], h[i])
  const rightMax = new Array(n).fill(0)
  rightMax[n - 1] = h[n - 1]
  for (let i = n - 2; i >= 0; --i) rightMax[i] = Math.max(rightMax[i + 1], h[i])
  let rs = 0
  for (let i = 0; i < n; ++i) rs += Math.min(leftMax[i], rightMax[i]) - h[i]
  return rs
}
```

# 1DP

方法一：动态规划
对于下标 ii，水能到达的最大高度等于下标 ii 两边的最大高度的最小值，下标 ii 处能接的水的量等于下标 ii 处的水能到达的最大高度减去 \textit{height}[i]height[i]。

朴素的做法是对于数组 \textit{height}height 中的每个元素，分别向左和向右扫描并记录左边和右边的最大高度，然后计算每个下标位置能接的水的量。假设数组 \textit{height}height 的长度为 nn，该做法需要对每个下标位置使用 O(n)O(n) 的时间向两边扫描并得到最大高度，因此总时间复杂度是 O(n^2)O(n
2
)。

上述做法的时间复杂度较高是因为需要对每个下标位置都向两边扫描。如果已经知道每个位置两边的最大高度，则可以在 O(n)O(n) 的时间内得到能接的水的总量。使用动态规划的方法，可以在 O(n)O(n) 的时间内预处理得到每个位置两边的最大高度。

创建两个长度为 nn 的数组 \textit{leftMax}leftMax 和 \textit{rightMax}rightMax。对于 0 \le i<n0≤i<n，\textit{leftMax}[i]leftMax[i] 表示下标 ii 及其左边的位置中，\textit{height}height 的最大高度，\textit{rightMax}[i]rightMax[i] 表示下标 ii 及其右边的位置中，\textit{height}height 的最大高度。

显然，\textit{leftMax}[0]=\textit{height}[0]leftMax[0]=height[0]，\textit{rightMax}[n-1]=\textit{height}[n-1]rightMax[n−1]=height[n−1]。两个数组的其余元素的计算如下：

当 1 \le i \le n-11≤i≤n−1 时，\textit{leftMax}[i]=\max(\textit{leftMax}[i-1], \textit{height}[i])leftMax[i]=max(leftMax[i−1],height[i])；

当 0 \le i \le n-20≤i≤n−2 时，\textit{rightMax}[i]=\max(\textit{rightMax}[i+1], \textit{height}[i])rightMax[i]=max(rightMax[i+1],height[i])。

因此可以正向遍历数组 \textit{height}height 得到数组 \textit{leftMax}leftMax 的每个元素值，反向遍历数组 \textit{height}height 得到数组 \textit{rightMax}rightMax 的每个元素值。

在得到数组 \textit{leftMax}leftMax 和 \textit{rightMax}rightMax 的每个元素值之后，对于 0 \le i<n0≤i<n，下标 ii 处能接的水的量等于 \min(\textit{leftMax}[i],\textit{rightMax}[i])-\textit{height}[i]min(leftMax[i],rightMax[i])−height[i]。遍历每个下标位置即可得到能接的水的总量。

动态规划做法可以由下图体现。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/volume-of-histogram-lcci/solution/zhi-fang-tu-de-shui-liang-by-leetcode-so-7rla/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# 2 单调栈

# 3 双指针
