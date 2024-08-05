# medium

bit or trie 前缀树
https://leetcode-cn.com/problems/maximum-xor-of-two-numbers-in-an-array/solution/shu-zu-zhong-liang-ge-shu-de-zui-da-yi-h-n9m9/ 421. 数组中两个数的最大异或值
给你一个整数数组 nums ，返回 nums[i] XOR nums[j] 的最大运算结果，其中 0 ≤ i ≤ j < n 。

进阶：你可以在 O(n) 的时间解决这个问题吗？

示例 1：

输入：nums = [3,10,5,25,2,8]
输出：28
解释：最大运算结果是 5 XOR 25 = 28.
示例 2：

输入：nums = [0]
输出：0
示例 3：

输入：nums = [2,4]
输出：6
示例 4：

输入：nums = [8,10,2]
输出：10
示例 5：

输入：nums = [14,70,53,83,49,91,36,80,92,51,66,70]
输出：127

提示：

1 <= nums.length <= 2 \* 104
0 <= nums[i] <= 231 - 1
通过次数 12,085 提交次数 19,877
请问您在哪类招聘中遇到此题？
贡献者
LeetCode

假设我们在数组中选择了元素 a_ia
i
​
和 a_ja
j
​
（i \neq ji

​
=j），使得它们达到最大的按位异或运算结果 xx：

x = a_i \oplus a_j
x=a
i
​
⊕a
j
​

其中 \oplus⊕ 表示按位异或运算。要想求出 xx，一种简单的方法是使用二重循环枚举 ii 和 jj，但这样做的时间复杂度为 O(n^2)O(n
2
)，会超出时间限制。因此，我们需要寻求时间复杂度更低的做法。

根据按位异或运算的性质，x = a_i \oplus a_jx=a
i
​
⊕a
j
​
等价于 a_j = x \oplus a_ia
j
​
=x⊕a
i
​
。我们可以根据这一变换，设计一种「从高位到低位依次确定 x 二进制表示的每一位」的方法，以此得到 x。精髓在于：

- 由于数组中元素都在[0, 2^31)范围内，那么我们可以将每一个数表示为一个长度为 31 的二进制数（如果不满 31 为，在最高位之前补上若干个前导 0 即可）
- 这 3131 个二进制位从低位到高位依次编号为 0, 1, \cdots, 300,1,⋯,30。我们从最高位第 3030 个二进制位开始，依次确定 xx 的每一位是 00 还是 11；

- 由于我们需要找出最大的 xx，因此在枚举每一位时，我们先判断 xx 的这一位是否能取到 11。如果能，我们取这一位为 11，否则我们取这一位为 00。

# 1 哈希表

思路与算法：
假设我们已经确定了 x 最高的若干个二进制位，当前正在确定第 k 个二进制位。根据「前言」部分的分析，我们希望第 k 个二进制位能够取到 1.
我们用 pre^k(x)表示 x 从最高位第 30 个二进制位开始，到第 k 个二进制位为止的数，那么 aj=x 异或 ai

蕴含着：

\textit{pre}^k (a_j) = \textit{pre}^k (x) \oplus \textit{pre}^k (a_i)
pre
k
(a
j
​
)=pre
k
(x)⊕pre
k
(a
i
​
)

由于 \textit{pre}^k(x)pre
k
(x) 对于我们来说是已知的，因此我们将所有的 \textit{pre}^k (a_j)pre
k
(a
j
​
) 放入哈希表中，随后枚举 ii 并计算 \textit{pre}^k (x) \oplus \textit{pre}^k (a_i)pre
k
(x)⊕pre
k
(a
i
​
)。如果其出现在哈希表中，那么说明第 kk 个二进制位能够取到 11，否则第 kk 个二进制位只能为 00。

本方法若仅阅读文字，理解起来可能较为困难，读者可以参考下面的代码以及注释。

细节

计算 \textit{pre}^k(x)pre
k
(x) 可以使用右移运算 \texttt{>>}>>。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/maximum-xor-of-two-numbers-in-an-array/solution/shu-zu-zhong-liang-ge-shu-de-zui-da-yi-h-n9m9/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```js
var findMaximumXOR = function (nums) {
  const HIGH_BIT = 30
  let x = 0
  for (let k = HIGH_BIT; k >= 0; --k) {
    const seen = new Set()
    // 将所有的 pre^k(a_j)放入哈希表中
    for (const n of nums) {
      // 如果只想保留从最高位开始到第 k 个二进制位为止的部分
      // 只需将其右移 k 位
      seen.add(num >> k)
    }
    // 目前 x 包含从最高位开始到第 k+1个二进制为止的部分
    // 我们将 x 的第 k 个二进制位置为1，即为 x=x*2+1
    const xNext = x * 2 + 1
    let found = false
    // enumerate i
    for (const n of nums) {
      if (seen.has(xNext ^ (num >> k))) {
        fount = true
        break
      }
    }
    if (found) {
      x = xNext
    } else {
      // 如果没有找到满足等式的 a_i 和a_j， 那么x 的第 k 个二进制位只能为0
      // 即为 x=x*2
      x = xNext - 1
    }
  }
  return x
}
```

# 复

- 时： O(n logC)，n 是数组 nums 的长度，C 是数组中的元素范围，本题中 C<2^31.枚举 x 的每一个二进制位的时间复杂度为 O(log C)，在每一次枚举过
- 程中，我们需要 O(n) 时间进行判断
