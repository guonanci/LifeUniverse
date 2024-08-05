# medium

https://leetcode-cn.com/problems/decode-xored-permutation/ 1734. 解码异或后的排列
给你一个整数数组 perm ，它是前 n 个正整数的排列，且 n 是个 奇数 。

它被加密成另一个长度为 n - 1 的整数数组 encoded ，满足 encoded[i] = perm[i] XOR perm[i + 1] 。比方说，如果 perm = [1,3,2] ，那么 encoded = [2,1] 。

给你 encoded 数组，请你返回原始数组 perm 。题目保证答案存在且唯一。

示例 1：

输入：encoded = [3,1]
输出：[1,2,3]
解释：如果 perm = [1,2,3] ，那么 encoded = [1 XOR 2,2 XOR 3] = [3,1]
示例 2：

输入：encoded = [6,5,4,6]
输出：[2,4,1,5,3]

提示：

3 <= n < 105
n 是奇数。
encoded.length == n - 1
通过次数 3,244 提交次数 5,866
**这道题规定了数组 \textit{perm}perm 是前 nn 个正整数的排列，其中 nn 是奇数，只有充分利用给定的条件，才能得到答案。**
为了得到愿师叔祖 perm，首先要得到 perm[0],最容易得到。如果能得到 perm 全部元素的异或运算结果，以及 perm 除了 perm[0] 以外的全部元素的异或运算结果，即可得到 perm【0】
由于数组 perm 是前 n 个正整数排列，所以 perm 全部元素的异或运算结果：从 1 到 n 的全部正整数异或运算结果 total=1⊕2⊕...⊕n=perm[0]⊕perm[1]⊕...⊕perm[n]
**得到 perm 中除了 perm【0】以外的全部元素的异或运算结果：n 是奇数，除了 perm[0]以外，perm 除了 n-1 个其他元素，n-1 是偶数，又由于数组 Encoded 的每个元素都是 perm 每个元素异或运算的结果。所以 Encoded 中存在这样的(n-1)/2 个元素，这些元素的异或运算结果为 perm 除了 perm[0]以外的全部元素的异或运算结果。**
encoded 的所有下标为奇数的元素的异或运算结果。

具体而言，数组 \textit{encoded}encoded 的所有下标为奇数的元素的异或运算结果即为数组 \textit{perm}perm 除了 \textit{perm}[0]perm[0] 以外的全部元素的异或运算结果。用 \textit{odd}odd 表示数组 \textit{encoded}encoded 的所有下标为奇数的元素的异或运算结果，则有

\begin{aligned} \textit{odd} &= \textit{encoded}[1] \oplus \textit{encoded}[3] \oplus \ldots \oplus \textit{encoded}[n-2] \\ &= \textit{perm}[1] \oplus \textit{perm}[2] \oplus \ldots \oplus \textit{perm}[n] \end{aligned}
odd
​

=encoded[1]⊕encoded[3]⊕…⊕encoded[n−2]
=perm[1]⊕perm[2]⊕…⊕perm[n]
​

根据 \textit{total}total 和 \textit{odd}odd 的值，即可计算得到 \textit{perm}[0]perm[0] 的值：

\begin{aligned} \textit{perm}[0] &= (\textit{perm}[0] \oplus \ldots \oplus \textit{perm}[n]) \oplus (\textit{perm}[1] \oplus \ldots \oplus \textit{perm}[n]) \\ &= \textit{total} \oplus \textit{odd} \end{aligned}
perm[0]
​

=(perm[0]⊕…⊕perm[n])⊕(perm[1]⊕…⊕perm[n])
=total⊕odd
​

当 1 \le i<n1≤i<n 时，有 \textit{encoded}[i-1]=\textit{perm}[i-1] \oplus \textit{perm}[i]encoded[i−1]=perm[i−1]⊕perm[i]。在等号两边同时异或 \textit{perm}[i-1]perm[i−1]，即可得到 \textit{perm}[i]=\textit{perm}[i-1] \oplus \textit{encoded}[i-1]perm[i]=perm[i−1]⊕encoded[i−1]。计算过程见「1720. 解码异或后的数组的官方题解」。

由于 \textit{perm}[0]perm[0] 已知，因此对 ii 从 11 到 n-1n−1 依次计算 \textit{perm}[i]perm[i] 的值，即可得到原始数组 \textit{perm}perm。

```js
/**
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function (encoded) {
  const n = encoded.length + 1
  let total = 0
  for (let i = 1; i <= n; i++) total ^= i
  let odd = 0
  for (let i = 1; i < n - 1; i += 2) odd ^= encoded[i]
  const perm = new Array(n).fill(0)
  perm[0] = total ^ odd
  for (let i = 0; i < n - 1; i++) perm[i + 1] = perm[i] ^ encoded[i]
  return perm
}
```

复杂度分析

时间复杂度：O(n)O(n)，其中 nn 是原始数组 \textit{perm}perm 的长度。计算 \textit{total}total 和 \textit{odd}odd 各需要遍历长度为 n-1n−1 的数组 \textit{encoded}encoded 一次，计算原数组 \textit{perm}perm 的每个元素值也需要遍历长度为 n-1n−1 的数组 \textit{encoded}encoded 一次。

空间复杂度：O(1)O(1)。注意空间复杂度不考虑返回值。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/decode-xored-permutation/solution/jie-ma-yi-huo-hou-de-pai-lie-by-leetcode-9gw4/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
