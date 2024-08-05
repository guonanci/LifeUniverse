# difficult

https://leetcode-cn.com/problems/find-minimum-time-to-finish-all-jobs/solution/wan-cheng-suo-you-gong-zuo-de-zui-duan-s-hrhu/ 1723. 完成所有工作的最短时间
给你一个整数数组 jobs ，其中 jobs[i] 是完成第 i 项工作要花费的时间。

请你将这些工作分配给 k 位工人。所有工作都应该分配给工人，且每项工作只能分配给一位工人。工人的 工作时间 是完成分配给他们的所有工作花费时间的总和。请你设计一套最佳的工作分配方案，使工人的 最大工作时间 得以 最小化 。

返回分配方案中尽可能 最小 的 最大工作时间 。

示例 1：

输入：jobs = [3,2,3], k = 3
输出：3
解释：给每位工人分配一项工作，最大工作时间是 3 。
示例 2：

输入：jobs = [1,2,4,7,8], k = 2
输出：11
解释：按下述方式分配工作：
1 号工人：1、2、8（工作时间 = 1 + 2 + 8 = 11）
2 号工人：4、7（工作时间 = 4 + 7 = 11）
最大工作时间是 11 。

提示：

1 <= k <= jobs.length <= 12
1 <= jobs[i] <= 107
通过次数 4,034 提交次数 8,906

# 1 二分查找+回溯+剪枝

很难直接计算完成所有工作的最短时间。注意到完成所有工作的最短时间已经确定为 limit 时，如果存在可行的方案，那么对于任意长于 \textit{limit}limit 的最短时间，都一定也存在可行的方案。因此我们可以考虑使用二分查找的方法寻找最小的存在可行方案的 \textit{limit}limit 值。
当完成所有工作的最短时间已经确定为 \textit{limit}limit 时，我们可以利用回溯的方式来寻找方案。

一个朴素的方案是，开辟一个大小为 kk 的数组 \textit{workloads}workloads，\textit{workloads}[i]workloads[i] 表示第 ii 个工人的当前已经被分配的工作量，
然后我们利用一个递归函数 \text{backtrack}(i)backtrack(i) 递归地枚举第 ii 个任务的分配方案，过程中实时地更新 \textit{workloads}workloads 数组。具体地，函数中我们检查每一个工人 jj 当前已经被分配的工作量，如果被分配的工作量 \textit{workloads}[j]workloads[j] 与当前工作的工作量 \textit{jobs}[i]jobs[i] 之和不超过 \textit{limit}limit 的限制，我们即可以将该工作分配给工人 jj，然后计算下一个工作 jobs[i+1]jobs[i+1] 的分配方案。过程中一旦我们找到了一个可行方案，我们即可以返回 \text{true}true，而无需枚举完所有的方案。

朴素的方案中，\text{backtrack}backtrack 函数的效率可能十分低下，有可能需要枚举完所有的分配方案才能得到答案，因此我们提出几个优化措施：

缩小二分查找的上下限，下限为所有工作中的最大工作量，上限为所有工作的工作量之和。
每一个工作都必须被分配，因此必然有一个工人承接了工作量最大的工作；
在最坏情况下，只有一个工人，他必须承接所有工作。
优先分配工作量大的工作。
感性地理解，如果要求将小石子和大石块放入玻璃瓶中，优先放入大石块更容易使得工作变得简单。
在搜索过程中，优先分配工作量小的工作会使得工作量大的工作更有可能最后无法被分配。
当工人 ii 还没被分配工作时，我们不给工人 i+1i+1 分配工作。
如果当前工人 ii 和 i+1i+1 都没有被分配工作，那么我们将工作先分配给任何一个人都没有区别，如果分配给工人 ii 不能成功完成分配任务，那么分配给工人 i+1i+1 也一样无法完成。
当我们将工作 ii 分配给工人 jj，使得工人 jj 的工作量恰好达到 \textit{limit}limit，且计算分配下一个工作的递归函数返回了 \text{false}false，此时即无需尝试将工作 ii 分配给其他工人，直接返回 \text{false}false 即可。
常规逻辑下，递归函数返回了 \text{false}false，那么我们需要尝试将工作 ii 分配给其他工人，假设分配给了工人 j'j
′
，那么此时工人 j'j
′
的工作量必定不多于工人 jj 的工作量；
如果存在一个方案使得分配给工人 j'j
′
能够成功完成分配任务，那么此时必然有一个或一组工作 i'i
′
取代了工作 ii 被分配给工人 jj，否则我们可以直接将工作 ii 移交给工人 jj，仍然能成功完成分配任务。而我们知道工作 i'i
′
的总工作量不会超过工作 ii，因此我们可以直接交换工作 ii 与工作 i'i
′
，仍然能成功完成分配任务。这与假设不符，可知不存在这样一个满足条件的工人 j'j
′
。

```js
var minimumTimeRequired = function (jobs, k) {
  jobs.sort((a, b) => a - b)
  let low = 0,
    high = jobs.length - 1
  while (low < high) {
    const tmp = jobs[low]
    jobs[low] = jobs[high]
    jobs[high] = tmp
    low++
    high--
  }
  let l = jobs[0],
    r = jobs.reduce((prev, cur, i, jobs) => prev + cur)
  while (l < r) {
    const mid = Math.floor((l + r) >> 1)
    if (check(jobs, k, mid)) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  return l
}
const check = (jobs, k, limit) => {
  const workloads = new Array(k).fill(0)
  return backtrack(jobs, workloads, 0, limit)
}
const backtrack = (jobs, workloads, i, limit) => {
  if (i >= jobs.length) return true
  let cur = jobs[i]
  for (let j = 0; j < workloads.length; ++j) {
    if (workloads[j] + cur <= limit) {
      workloads[j] += cur
      if (backtrack(jobs, workloads, i + 1, limit)) {
        return true
      }
      workloads[j] -= cur
    }
    // 如果当前工人未被分配工作，那么下一个工人也必然未被分配工作
    // 或者当前工作恰能使该工人的工作量达到了上限
    // 这两种情况下我们无需尝试继续分配工作
    if (workloads[j] === 0 || workloads[j] + cur === limit) {
      break
    }
  }
  return false
}
```

# 复杂度分析

时间复杂度：O(n \log n + \log (S-M) \times n!)O(nlogn+log(S−M)×n!)，其中 nn 是数组 \textit{jobs}jobs 的长度，SS 是数组 \textit{jobs}jobs 的元素之和，MM 是数组 \textit{jobs}jobs 中元素的最大值。最坏情况下每次二分需要遍历所有分配方案的排列，但经过一系列优化后，实际上可以规避掉绝大部分不必要的计算。

空间复杂度：O(n)O(n)。空间复杂度主要取决于递归的栈空间的消耗，而递归至多有 nn 层。
