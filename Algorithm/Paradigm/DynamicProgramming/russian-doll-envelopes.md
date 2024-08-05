https://leetcode-cn.com/problems/russian-doll-envelopes/

# difficult

# 354 俄罗斯套娃信封问题

给你一个二维数组 envelopes，envelopes[i]=[wi,hi] 表示第 i 个信封的宽度和高度。当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。
请计算最多有多少个信封能组成一组「俄罗斯套娃」信封（即可以把一个信封放到另一个信封里面）
注意：不允许旋转信封

输入 envelopes=[[5,4],[6,4],[6,7],[2,3]]
输出 3
解释 最多信封个数为 3，组合为：【2，3】=》【5，4】=》【6，7】

示例 2：

输入：envelopes = [[1,1],[1,1],[1,1]]
输出：1

提示：

1 <= envelopes.length <= 5000
envelopes[i].length == 2
1 <= wi, hi <= 104
通过次数 62,681 提交次数 140,264

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/russian-doll-envelopes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

# 前言

根据题目要求，如果我们选择了 k 个信封，他们宽度依次为 w0,...,wk-1，高度依次为 h0,...hk-1，那么需要满足：w0<w1<...<wk-1
h0<h1<...<hk-1
同时控制 w 和 h 两个维度并不是那么容易，因此我们考虑固定一个维度，再在另一个维度上进行选择。例如，我们固定 w 维度：将数组 envelopes 中的所有信封按照 w 升序。这样一来，我们只要按照信封在数组中的出现顺序依次进行选取，就一定保证满足：
w0<=w1<=...<=wk-1
了。然而小于等于和小于还是有区别，但我们不妨首先考虑一个简化版本的问题：

> 如果我们保证所有信封的 w 值互不相同，那么我们可以设计出一种得到答案的方法嘛

在 w 值互不相同的前提下，小于等于和小于是等价的，那么我们在排序后，就可以完全忽略 w 维度，只需要考虑 h 维度了。此时，我们需要解决的问题即为：

> 给定一个序列，我们需要找到一个最长子序列。使得这个子序列中的元素严格单调递增，即上面要求的：
> h0< h1 < ... < hk-1

那么这个问题就是经典的[300.最长严格递增子序列问题](https://leetcode-cn.com/problems/longest-increasing-subsequence/)了，可以参考[官方题解](https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/zui-chang-shang-sheng-zi-xu-lie-by-leetcode-soluti/)。详细解决方法属于解决本题的前置知识点，不是本文分析重点，因此这里不再赘 zhui 述 shu，会在方法一和方法二中简单提及。

当我们解决了简化版本
