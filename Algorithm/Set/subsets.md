# Depth-First-Search（DFS）

https://baike.baidu.com/item/%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2/5224976?fromtitle=DFS&fromid=5055
https://baike.baidu.com/item/%E5%9B%9E%E6%BA%AF/23724802#viewPageContent
https://zh.wikipedia.org/wiki/%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2
深度优先搜索算法（英語：Depth-First-Search，DFS）是一种用于遍历或搜索树或图的算法。 这个算法会尽可能深的搜索树的分支。当节点 v 的所在边都己被探寻过，搜索将回溯到发现节点 v 的那条边的起始节点。这一过程一直进行到已发现从源节点可达的所有节点为止。如果还存在未被发现的节点，则选择其中一个作为源节点并重复以上过程，整个进程反复进行直到所有节点都被访问为止。... 这种算法不会根据图的结构等信息调整执行策略。 深度优先搜索是图论中的经典算法，利用深度优先搜索算法可以产生目标图的拓扑排序表，利用拓扑排序表可以方便的解决很多相关的图论问题，如无权最长路径问题等等。

# medium

https://leetcode-cn.com/problems/subsets/

78. 子集
    给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

示例 1：

输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
示例 2：

输入：nums = [0]
输出：[[],[0]]

提示：

1 <= nums.length <= 10
-10 <= nums[i] <= 10
nums 中的所有元素 互不相同
通过次数 219,033 提交次数 275,212
在真实的面试中遇到过这道题？
贡献者
LeetCode

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (numbers) {
  const rs = []
  const len = numbers.length
  for (let mask = 0; mask < 1 << len; ++mask) {
    const t = []
    for (let i = 0; i < len; ++i) {
      if (mask & (1 << i)) t.push(numbers[i])
    }
    rs.push(t)
  }
  return rs
}
var subsets = function (numbers) {
  const rs = []
  const t = []
  const len = numbers.length
  const dfs = (cur) => {
    if (cur === len) {
      rs.push(t.slice())
      return
    }
    t.push(numbers[cur])
    dfs(cur + 1)
    t.pop()
    dfs(cur + 1)
  }
  dfs(0)
  return rs
}
```
