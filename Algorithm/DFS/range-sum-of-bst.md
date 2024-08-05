# easy

938. 二叉搜索树的范围和
     给定二叉搜索树的根结点 root，返回值位于范围 [low, high] 之间的所有结点的值的和。

示例 1：

输入：root = [10,5,15,3,7,null,18], low = 7, high = 15
输出：32
示例 2：

输入：root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
输出：23

提示：

树中节点数目在范围 [1, 2 * 104] 内
1 <= Node.val <= 105
1 <= low <= high <= 105
所有 Node.val 互不相同
通过次数 86,117 提交次数 105,326

按深度优先搜索的顺序计算范围和。记当前子树根节点为 \textit{root}root，分以下四种情况讨论：

\textit{root}root 节点为空

返回 00。

\textit{root}root 节点的值大于 \textit{high}high

由于二叉搜索树右子树上所有节点的值均大于根节点的值，即均大于 \textit{high}high，故无需考虑右子树，返回左子树的范围和。

\textit{root}root 节点的值小于 \textit{low}low

由于二叉搜索树左子树上所有节点的值均小于根节点的值，即均小于 \textit{low}low，故无需考虑左子树，返回右子树的范围和。

\textit{root}root 节点的值在 [\textit{low},\textit{high}][low,high] 范围内

此时应返回 \textit{root}root 节点的值、左子树的范围和、右子树的范围和这三者之和。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/range-sum-of-bst/solution/er-cha-sou-suo-shu-de-fan-wei-he-by-leet-rpq7/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
复杂度分析

时间复杂度：O(n)O(n)，其中 nn 是二叉搜索树的节点数。

空间复杂度：O(n)O(n)。空间复杂度主要取决于栈空间的开销。

方法二：广度优先搜索
思路

使用广度优先搜索的方法，用一个队列 qq 存储需要计算的节点。每次取出队首节点时，若节点为空则跳过该节点，否则按方法一中给出的大小关系来决定加入队列的子节点。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/range-sum-of-bst/solution/er-cha-sou-suo-shu-de-fan-wei-he-by-leet-rpq7/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  if (!root) return 0
  if (root.val > high) return rangeSumBST(root.left, low, high)
  if (root.val < low) return rangeSumBST(root.right, low, high)
  return (
    root.val +
    rangeSumBST(root.left, low, high) +
    rangeSumBST(root.right, low, high)
  )
}
var rangeSumBST = function (root, low, high) {
  let sum = 0
  const q = [root]
  while (q.length) {
    const node = q.shift()
    if (!node) continue
    if (node.val > high) {
      q.push(node.left)
    } else if (node.val < low) {
      q.push(node.right)
    } else {
      sum += node.val
      q.push(node.left)
      q.push(node.right)
    }
  }
  return sum
}
```

复杂度分析

时间复杂度：O(n)O(n)，其中 nn 是二叉搜索树的节点数。

空间复杂度：O(n)O(n)。空间复杂度主要取决于队列的空间。
