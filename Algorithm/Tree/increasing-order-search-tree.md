# easy

https://leetcode-cn.com/problems/increasing-order-search-tree/solution/di-zeng-shun-xu-cha-zhao-shu-by-leetcode-dfrr/ 897. 递增顺序搜索树
给你一棵二叉搜索树，请你 按中序遍历 将其重新排列为一棵递增顺序搜索树，使树中最左边的节点成为树的根节点，并且每个节点没有左子节点，只有一个右子节点。

示例 1：

输入：root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
示例 2：

输入：root = [5,1,7]
输出：[1,null,5,null,7]

提示：

树中节点数的取值范围是 [1, 100]
0 <= Node.val <= 1000
通过次数 29,632 提交次数 40,534

# 方法一：中序遍历之后生成新的树

返回中序遍历的结果改造而成的、只有右节点的等价二叉搜索树。我们可以如下操作：

- 先对输入的二叉搜索树进行中序遍历，将结果保存到一个列表中
- 然后根据列表中的节点值，创建等价的只含有右节点的二叉搜索树，其过程等价于根据节点值创建一个链表

```js
var increasingBST = function (root) {
  const ret = []
  inOrder(root, ret)

  const dummyNode = new TreeNode(-1)
  let curNode = dummyNode
  for (const v of ret) {
    curNode.right = new TreeNode(v)
    curNode = curNode.right
  }
  return dummyNode.right
}

const inOrder = (node, ret) => {
  if (!node) return
  inOrder(node.left, ret)
  ret.push(node.val)
  inOrder(node.right, ret)
}
```
