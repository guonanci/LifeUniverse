# medium

https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days/solution/zai-d-tian-nei-song-da-bao-guo-de-neng-l-ntml/ 1011. 在 D 天内送达包裹的能力
传送带上的包裹必须在 D 天内从一个港口运送到另一个港口。

传送带上的第 i 个包裹的重量为 weights[i]。每一天，我们都会按给出重量的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。

返回能在 D 天内将传送带上的所有包裹送达的船的最低运载能力。

示例 1：

输入：weights = [1,2,3,4,5,6,7,8,9,10], D = 5
输出：15
解释：
船舶最低载重 15 就能够在 5 天内送达所有包裹，如下所示：
第 1 天：1, 2, 3, 4, 5
第 2 天：6, 7
第 3 天：8
第 4 天：9
第 5 天：10

请注意，货物必须按照给定的顺序装运，因此使用载重能力为 14 的船舶并将包装分成 (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) 是不允许的。
示例 2：

输入：weights = [3,2,2,4,1,4], D = 3
输出：6
解释：
船舶最低载重 6 就能够在 3 天内送达所有包裹，如下所示：
第 1 天：3, 2
第 2 天：2, 4
第 3 天：1, 4
示例 3：

输入：weights = [1,2,3,1,1], D = 4
输出：3
解释：
第 1 天：1
第 2 天：2
第 3 天：3
第 4 天：1, 1

提示：

1 <= D <= weights.length <= 50000
1 <= weights[i] <= 500
通过次数 20,276 提交次数 35,141

假设船运载能力为 x，我们可以在 D 天内送完所有包裹，那么只要运载能力大于 x，我们同样可以在 D 天内运送完所有包裹：我们只需要使用运载能力为 x 时的运送方法即可。

> 存在一个运载能力的【下限】

二分查找的判定问题：

**贪心**

按照给定顺序，首元素开始遍历，连续的包裹安排在同一天。当这批包裹重量大于运载能力 x 时，我们就需要将最后一个包裹拿出来，安排在新一天，继续往下遍历：当我们遍历完整个数组后，就得到了最少需要天数

将【最少需要运送的天数】和 D 比较，就可以解决判定问题。小于等于 D 时，我们忽略二分的右半区间；大于 D 时，忽略二分的左半部分区间。

左边界为 weights 中最大值。右边界：weights 中的元素和

```js
var shipWithinDays = function (weights, D) {
  let l = Math.max(...weights),
    r = weights.reduce((acc, v) => acc + v)
  while (l < r) {
    const mid = Math.floor((l + r) / 2)
    let needDays = 1,
      curWeights = 0
    for (const w of weights) {
      if (curWeights + w > mid) {
        needDays++
        curWeights = 0
      }
      curWeights += w
    }
    if (needDays <= D) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  return l
}
```

复杂度分析

时间复杂度：O\big(n\log(\Sigma w)\big)O(nlog(Σw))，其中 nn 是数组 \textit{weights}weights 的长度，\Sigma wΣw 是数组 \textit{weights}weights 中元素的和。二分查找需要执行的次数为 O(\log(\Sigma w))O(log(Σw))，每一步中需要对数组 \textit{weights}weights 进行依次遍历，时间为 O(n)O(n)，相乘即可得到总时间复杂度。

空间复杂度：O(1)O(1)。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days/solution/zai-d-tian-nei-song-da-bao-guo-de-neng-l-ntml/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
