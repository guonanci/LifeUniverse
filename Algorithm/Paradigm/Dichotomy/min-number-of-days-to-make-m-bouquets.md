# medium

https://leetcode-cn.com/problems/minimum-number-of-days-to-make-m-bouquets/ 1482. 制作 m 束花所需的最少天数
给你一个整数数组 bloomDay，以及两个整数 m 和 k 。

现需要制作 m 束花。制作花束时，需要使用花园中 相邻的 k 朵花 。

花园中有 n 朵花，第 i 朵花会在 bloomDay[i] 时盛开，恰好 可以用于 一束 花中。

请你返回从花园中摘 m 束花需要等待的最少的天数。如果不能摘到 m 束花则返回 -1 。

示例 1：

输入：bloomDay = [1,10,3,10,2], m = 3, k = 1
输出：3
解释：让我们一起观察这三天的花开过程，x 表示花开，而 _ 表示花还未开。
现在需要制作 3 束花，每束只需要 1 朵。
1 天后：[x, _, _, _, _] // 只能制作 1 束花
2 天后：[x, _, _, _, x] // 只能制作 2 束花
3 天后：[x, _, x, _, x] // 可以制作 3 束花，答案为 3
示例 2：

输入：bloomDay = [1,10,3,10,2], m = 3, k = 2
输出：-1
解释：要制作 3 束花，每束需要 2 朵花，也就是一共需要 6 朵花。而花园中只有 5 朵花，无法满足制作要求，返回 -1 。
示例 3：

输入：bloomDay = [7,7,7,7,12,7,7], m = 2, k = 3
输出：12
解释：要制作 2 束花，每束需要 3 朵。
花园在 7 天后和 12 天后的情况如下：
7 天后：[x, x, x, x, _, x, x]
可以用前 3 朵盛开的花制作第一束花。但不能使用后 3 朵盛开的花，因为它们不相邻。
12 天后：[x, x, x, x, x, x, x]
显然，我们可以用不同的方式制作两束花。
示例 4：

输入：bloomDay = [1000000000,1000000000], m = 1, k = 1
输出：1000000000
解释：需要等 1000000000 天才能采到花来制作花束
示例 5：

输入：bloomDay = [1,10,2,9,3,8,4,7,5,6], m = 4, k = 2
输出：9

# method1:二分查找

每束 shu 花需要 k 朵花，需要制作 m 束花，因此一共需要 k*m 朵花。如果花园中的花朵数量少于 k*m，即数组 \textit{bloomDay}bloomDay 的长度小于 k \times mk×m，则无法制作出指定数量的花束，返回 -1−1。如果数组 \textit{bloomDay}bloomDay 的长度大于或等于 k \times mk×m，则一定可以制作出指定数量的花束。
为了计算制作出指定数量的花束的最少天数，首先需要实现一个辅助函数用于判断在给定的天数内能否制作出指定数量的花束，辅助函数的参数除了 \textit{bloomDay}bloomDay、mm 和 kk 之外，还有一个参数 \textit{days}days 表示指定天数。例如，当 \textit{bloomDay}=[1,10,3,10,2]bloomDay=[1,10,3,10,2]、m=3m=3、k=1k=1 时，如果 \textit{days}=3days=3 则辅助函数返回 \text{true}true，如果 \textit{days}=2days=2 则辅助函数返回 \text{false}false。

对于辅助函数的实现，可以遍历数组 \textit{bloomDay}bloomDay，计算其中的长度为 kk 且最大元素不超过 \textit{days}days 的不重合的连续子数组的数量，如果符合要求的不重合的连续子数组的数量大于或等于 mm 则返回 \text{true}true，否则返回 \text{false}false。

当 \textit{days}days 很小的时候，辅助函数总是返回 \text{false}false，因为天数太少不能收齐 mm 个花束；当 \textit{days}days 很大的时候，辅助函数总是返回 \text{true}true，如果给定序列可以制作出 mm 个花束。在 \textit{days}days 慢慢变大的过程中，辅助函数的返回值会从 \text{false}false 变成 \text{true}true，所以我们可以认为这个辅助函数是关于 \textit{days}days 递增的，于是可以通过二分查找得到最少天数。在确保可以制作出指定数量的花束的情况下，所需的最少天数一定不会超过数组 \textit{bloomDay}bloomDay 中的最大值，因此二分查找的初始值是 \textit{low}low 等于 11，\textit{high}high 等于数组 \textit{bloomDay}bloomDay 中的最大值。

当 \textit{low}low 和 \textit{high}high 的值相等时，二分查找结束，此时 \textit{low}low 的值即为最少天数。

```js
var minDays = function (bloomDay, m, k) {
  const len = bloomDay.length
  if (k * m > len) return -1
  let low = 1,
    high = 1
  for (let i = 0; i < len; i++) high = Math.max(high, bloomDay[i])
  while (low < high) {
    const days = Math.floor((high - low) / 2) + low
    if (canMake(bloomDay, days, m, k)) {
      high = days
    } else {
      low = days + 1
    }
  }
  return low
}
const canMake = (bloomDay, days, m, k) => {
  const len = bloomDay.length
  let bouquets = 0,
    flowers = 0
  for (let i = 0; i < len && bouquets < m; i++) {
    if (bloomDay[i] <= days) {
      flowers++
      if (flowers == k) {
        bouquets++
        flowers = 0
      }
    } else {
      flowers = 0
    }
  }
  return bouquets >= m
}
```

# 复杂度

- 时： O(n log h) n 是数组 bloomDay 长度，h 是数组中最大值。需要遍历数组 bloomDay 得到最大值 h，遍历时间复杂度是 O（n）。得到最大值 h 后，二分查找迭代次数是 O(log h)，每次判断是否能制作规定数量的花束的时间复杂度是 O(n)，因此二分查找的总时间复杂度是 O（n log h)。整个算法时间复杂度是 O(n) + O(n log h)=)(n log h)
- 空 O(1)
