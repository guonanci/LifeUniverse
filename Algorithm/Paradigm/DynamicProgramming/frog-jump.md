# difficult

https://leetcode-cn.com/problems/strange-printer/solution/qi-guai-de-da-yin-ji-by-leetcode-solutio-ogbu/
https://leetcode-cn.com/problems/frog-jump/solution/ 403. 青蛙过河
一只青蛙想要过河。 假定河流被等分为若干个单元格，并且在每一个单元格内都有可能放有一块石子（也有可能没有）。 青蛙可以跳上石子，但是不可以跳入水中。

给你石子的位置列表 stones（用单元格序号 升序 表示）， 请判定青蛙能否成功过河（即能否在最后一步跳至最后一块石子上）。

开始时， 青蛙默认已站在第一块石子上，并可以假定它第一步只能跳跃一个单位（即只能从单元格 1 跳至单元格 2 ）。

如果青蛙上一步跳跃了 k 个单位，那么它接下来的跳跃距离只能选择为 k - 1、k 或 k + 1 个单位。 另请注意，青蛙只能向前方（终点的方向）跳跃。

示例 1：

输入：stones = [0,1,3,5,6,8,12,17]
输出：true
解释：青蛙可以成功过河，按照如下方案跳跃：跳 1 个单位到第 2 块石子, 然后跳 2 个单位到第 3 块石子, 接着 跳 2 个单位到第 4 块石子, 然后跳 3 个单位到第 6 块石子, 跳 4 个单位到第 7 块石子, 最后，跳 5 个单位到第 8 个石子（即最后一块石子）。
示例 2：

输入：stones = [0,1,2,3,4,8,9,11]
输出：false
解释：这是因为第 5 和第 6 个石子之间的间距太大，没有可选的方案供青蛙跳跃过去。

提示：

2 <= stones.length <= 2000
0 <= stones[i] <= 231 - 1
stones[0] == 0
通过次数 17,497 提交次数 42,104

思路及算法

我们也可以使用动态规划的方法，令 \textit{dp}[i][k]dp[i][k] 表示青蛙能否达到「现在所处的石子编号」为 ii 且「上一次跳跃距离」为 kk 的状态。

这样我们可以写出状态转移方程：

\textit{dp}[i][k] = \textit{dp}[j][k - 1] \bigvee \textit{dp}[j][k] \bigvee \textit{dp}[j][k + 1]
dp[i][k]=dp[j][k−1]⋁dp[j][k]⋁dp[j][k+1]

式中 jj 代表了青蛙的「上一次所在的石子编号」，满足 stones[i] - stones[j] = kstones[i]−stones[j]=k。

和方法一相同，状态转移的初始条件为 \textit{dp}[0][0] = \text{true}dp[0][0]=true，表示：「现在所处的石子编号」为 00（石子从 00 开始编号），「上一次跳跃距离」为 00（这样可以保证青蛙的第一次跳跃距离为 11）。当我们找到一个 \textit{dp}[n-1][k]dp[n−1][k] 为真时，我们就知道青蛙可以到达终点（第 n-1n−1 个石子）。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/frog-jump/solution/qing-wa-guo-he-by-leetcode-solution-mbuo/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
