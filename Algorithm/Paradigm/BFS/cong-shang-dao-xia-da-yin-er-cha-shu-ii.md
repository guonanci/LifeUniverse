https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/

剑指 Offer 32 - II. 从上到下打印二叉树 II
从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3

/ \
 9 20
/ \
 15 7
返回其层次遍历结果：

[
[3],
[9,20],
[15,7]
]

提示：

节点总数 <= 1000
注意：本题与主站 102 题相同：https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

通过次数 96,994 提交次数 141,581
题目分析
从题目中可以看到，本题考察的是二叉树的层序遍历，并且在结果中要体现出“层次”。

思路
稍微改变一下对队列的使用，就可以在遍历过程中体现出层次，大致过程如下：

初始化 queue，用于存储当前层的节点
检查 queue 是否为空
如果不为空：依次遍历当前 queue 内的所有节点，检查每个节点的左右子节点，将不为空的子节点放入 queue，继续循环
如果为空：跳出循环
在上面的思路上，稍微改造下就可以了。代码如下：

作者：xin-tan
链接：https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/solution/jie-zhu-dui-lie-zai-jie-guo-zhong-ti-xian-chu-ceng/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  const queue = [root]
  const res = [] // 存放遍历结果
  let level = 0 // 代表当前层数
  while (queue.length) {
    res[level] = [] // 第level层的遍历结果

    let levelNum = queue.length // 第level层的节点数量
    while (levelNum--) {
      const front = queue.shift()
      res[level].push(front.val)
      if (front.left) queue.push(front.left)
      if (front.right) queue.push(front.right)
    }
    level++
  }
  return res
}
```

# complexity

- time: O(n)
- space: O(n)
