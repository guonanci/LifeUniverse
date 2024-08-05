https://leetcode-cn.com/problems/binary-search-tree-iterator/

# medium

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(v, l, r) {
 *  this.val = (v===undefined?0:v)
 *  this.left = (l===undefined?0:l)
 *  this.right = (r===undefined?0:r)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.idx = 0
  this.arr = []
  this.inOrderTraversal(root, this.arr)
}
/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.arr[this.idx++]
}
BSTIterator.prototype.hasNext = function () {
  return this.idx < this.arr.length
}
BSTIterator.prototype.inOrderTraversal = function (root, arr) {
  if (!root) return
  this.inOrderTraversal(root.left, arr)
  arr.push(root.val)
  this.inOrderTraversal(root.right, arr)
}
/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj=new BSTIterator(root)
 * var param_1=obj.next()
 * var param_2=obj.hasNext()
 */
```

方法二：迭代
除了递归的方法外，我们还可以利用栈这一数据结构，通过迭代的方式对二叉树做中序遍历。此时，我们无需预先计算出中序遍历的全部结果，只需要实时维护当前栈的情况即可。

C++JavaGolangJavaScriptC

```js
var BSTIterator = function (root) {
  this.cur = root
  this.stack = []
}

BSTIterator.prototype.next = function () {
  while (this.cur) {
    this.stack.push(this.cur)
    this.cur = this.cur.left
  }
  this.cur = this.stack.pop()
  const ret = this.cur.val
  this.cur = this.cur.right
  return ret
}

BSTIterator.prototype.hasNext = function () {
  return this.cur !== null || this.stack.length
}
```

复杂度分析

时间复杂度：显然，初始化和调用 \text{hasNext()}hasNext() 都只需要 O(1)O(1) 的时间。每次调用 \text{next()}next() 函数最坏情况下需要 O(n)O(n) 的时间；但考虑到 nn 次调用 \text{next()}next() 函数总共会遍历全部的 nn 个节点，因此总的时间复杂度为 O(n)O(n)，因此单次调用平均下来的均摊复杂度为 O(1)O(1)。

空间复杂度：O(n)O(n)，其中 nn 是二叉树的节点数量。空间复杂度取决于栈深度，而栈深度在二叉树为一条链的情况下会达到 O(n)O(n) 的级别。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/binary-search-tree-iterator/solution/er-cha-sou-suo-shu-die-dai-qi-by-leetcod-4y0y/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
