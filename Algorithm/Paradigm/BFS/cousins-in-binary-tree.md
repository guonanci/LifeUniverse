# easy

https://leetcode-cn.com/problems/cousins-in-binary-tree/ 993. 二叉树的堂兄弟节点
在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。

如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。

我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。

只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。

示例 1：

输入：root = [1,2,3,4], x = 4, y = 3
输出：false
示例 2：

输入：root = [1,2,3,null,4,null,5], x = 5, y = 4
输出：true
示例 3：

输入：root = [1,2,3,null,4], x = 2, y = 3
输出：false

提示：

二叉树的节点数介于 2 到 100 之间。
每个节点的值都是唯一的、范围为 1 到 100 的整数。

通过次数 20,740 提交次数 39,256
请问您在哪类招聘中遇到此题？
贡献者
LeetCode
二叉树的层序遍历

# 前言

首先要判断两节点是否为堂兄弟节点，我们就需要求出这两个节点分别的深度以及父节点
因此，我们可以从根节点开始，对树进行一次遍历，在遍历的过程中维护深度和父节点这两个信息。当我们遍历到 x 或 y 节点时，就将信息记录下来；当这两个节点都遍历完成了以后，我们就可以退出遍历的过程，判断他们是否为堂兄弟节点了。

常见的遍历方法有两种，深度优先搜索和广度优先搜索

# 1.DFS

思路与算法
我们只需在 DFS 递归函数中增加表示深度和父节点两个参数即可

```js
var isCousins = function (root, x, y) {
  // x 的信息
  let x_parent = null,
    x_depth = null,
    x_found = false
  //  y 的信息
  let y_parent = null,
    y_depth = null,
    y_found = false

  const dfs = (node, depth, parent) => {
    if (!node) return
    if (node.val == x) {
      ;[x_parent, x_depth, x_found] = [parent, depth, true]
    } else if (node.val == y) {
      ;[y_parent, y_depth, y_found] = [parent, depth, true]
    }
    // 如果两节点都找到了，就可以提前退出遍历
    // 即使不提前退出，对最坏情况下的时间复杂度也不会有影响
    if (x_found && y_found) return
    dfs(node.left, depth + 1, node)
    if (x_found && y_found) return
    dfs(node.right, depth + 1, node)
  }
  dfs(root, 0, null)
  return x_depth == y_depth && x_parent != y_parent
}
```

# 复

- 时：O（n），其中 n 是树中的节点个数，在最坏情况下，我们需要遍历整棵树，时间复杂度为 O（n）
- 空：O（n） DFS 过程中需要使用的栈空间，最坏情况下，树呈现链状结构，递归深度为 O（n）

# 2.BFS

思路与算法
在 BFS 过程中，每当我们从队首取出一个节点，他就会作为父节点，将最多两个子节点放入队尾。因此，除了节点以外，我们只需要在队列中额外存储【深度】
的信息即可。

```js
var isCousins = function (root, x, y) {
  // x 的信息
  let x_parent = null,
    x_depth = null,
    x_found = false
  //  y 的信息
  let y_parent = null,
    y_depth = null,
    y_found = false

  // 用来判断是否遍历到 x 或y的辅助函数
  const upd = (node, parent, depth) => {
    if (node.val == x) {
      ;[x_parent, x_depth, x_found] = [parent, depth, true]
    } else if (node.val == y) {
      ;[y_parent, y_depth, y_found] = [parent, depth, true]
    }
  }
  q = [[root, 0]]
  upd(root, null, 0)

  while (q.length) {
    const [node, depth] = q.shift()
    if (node.left) {
      q.push([node.left, depth + 1])
      upd(node.left, node, depth + 1)
    }
    if (node.right) {
      q.push([node.right, depth + 1])
      upd(node.right, node, depth + 1)
    }
    if (x_found && y_found) break
  }
  return x_depth == y_depth && x_parent != y_parent
}
```

# 复

- 时：O（n），n 是树中的节点个数。最坏情况下，我们需要遍历整棵树
- 空：O(n) 广度优先搜索过程中需要使用的队列空间
