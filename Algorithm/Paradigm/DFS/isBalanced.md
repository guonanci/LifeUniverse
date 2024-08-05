# easy

输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过 1，那么它就是一棵平衡二叉树。



示例 1:

给定二叉树 [3,9,20,null,null,15,7]

    3

/ \
 9 20
/ \
 15 7
返回 true 。

示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \

3 3
/ \
 4 4
返回  false 。



限制：

0 <= 树的结点个数 <= 10000
注意：本题与主站 110  题相同：https://leetcode-cn.com/problems/balanced-binary-tree/



通过次数 99,858 提交次数 171,381

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

要验证一颗二叉树是否为平衡二叉树，只需要它的左子树是平衡二叉树，右子树是平衡二叉树，并且左右子树的深度差小于 2

创建深度计算函数

检测传入的树
如果为空，返回 0
如果不为空，递归调用深度计算函数，分别计算左右子树的深度，将两个深度中的最大值 +1 作为结果返回
创建平衡判断函数

使用深度计算函数计算左右子树的深度
计算深度差
递归调用平衡判断函数，判断左右子树是否是平衡
如果深度差小于 2，且左右子树都平衡，返回 true
否则返回 false

作者：Mazan
链接：https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof/solution/cong-shang-xiang-xia-lu-cong-xia-wang-sh-w8tt/
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
 * @return {boolean}
 */
/**
 * 平衡判断函数
 */
var isBalanced = function(root) {
    if(!root){
        return true
    }
    // 计算左子树和右子树的深度差
        // 判断左右子树是否平衡
    return Math.abs(depth(root.left) - depth(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right)
};

/**
 * 深度计算函数
 */
var depth = function(root) {
    if(!root) {
        return 0
    }
    else {
                // 取左右子树中深度比较大的值作为返回结果 +1
        return Math.max(depth(root.left), depth(root.right)) + 1
    }
}

作者：Mazan
链接：https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof/solution/cong-shang-xiang-xia-lu-cong-xia-wang-sh-w8tt/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

/\*\*

- 平衡判断函数
  \*/
  var isBalanced = function(root) {
  if(!root){
  return true
  }
  // 计算左子树和右子树的深度差
  // 判断左右子树是否平衡
  return Math.abs(depth(root.left) - depth(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right)
  };

/\*\*

- 深度计算函数
  \*/
  var depth = function(root) {
  if(!root) {
  return 0
  }
  else {
  // 取左右子树中深度比较大的值作为返回结果 +1
  return Math.max(depth(root.left), depth(root.right)) + 1
  }
  }

作者：Mazan
链接：https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof/solution/cong-shang-xiang-xia-lu-cong-xia-wang-sh-w8tt/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```js
var isBalanced = function (root) {
  if (!root) return true
  return defs(root) !== -1
}
// 计算数的深度
var defs = function (node) {
  if (!node) return 0
  const left = defs(node.left)
  const right = defs(node.right)
  switch (true) {
    case left == -1:
      return -1
    case right == -1:
      return -1
    case Math.abs(left - right) > 1:
      return -1
    default:
      // 取左右子树中深度较大值+1返回
      return Math.max(left, right) + 1
  }
}
```

https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof/solution/mian-shi-ti-55-ii-ping-heng-er-cha-shu-cong-di-zhi/

复杂度分析：
时间复杂度 O(N)O(N)： NN 为树的节点数；最差情况下，需要递归遍历树的所有节点。
空间复杂度 O(N)O(N)： 最差情况下（树退化为链表时），系统递归需要使用 O(N)O(N) 的栈空间。

作者：jyd
链接：https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof/solution/mian-shi-ti-55-ii-ping-heng-er-cha-shu-cong-di-zhi/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
