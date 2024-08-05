# easy

https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/

# method1 中序遍历

二叉搜索树中序遍历得到的值序列是递增有序的，因此我们只要得到中序遍历后的值序列即能用上文提及的方法来解决。
朴素的方法是经过一次中序遍历将值保存在一个数组中再进行遍历求解，我们可以在中序遍历的过程中用 pre 变量保存前驱节点的值，这样既能遍历更新答案，不再需要显示创建数组来保存，需要注意的是 pre 初始值需要设置成任意负数标记开头，下文代码中设置为-1.
二叉树的中序遍历有多种方式，包括递归、栈、Morris 遍历等等。

```cpp
class Solution {
public:
  void dfs(TreeNode* root, int& pre, int& ans) {
    if (root==nullptr)return;
    dfs(root->left,pre,ans);
    if(pre==-1){
      pre=root->val;
    }else{
      ans=min(ans,root->val-pre);
      pre=root->val;
    }
    dfs(root->right,pre,ans);
  }
  int minDiffInBST(TreeNode* root){
    int ans=INT_MAX,pre=-1;
    dfs(root,pre,ans);
    return ans;
  }
}
```

```js
var minDiffInBST = function (root) {
  let ans = Number.MAX_SAFE_INTEGER,
    pre = -1
  const dfs = (root) => {
    if (root == null) return
    dfs(root.left)
    if (pre == -1) {
      pre = root.val
    } else {
      ans = Math.min(ans, root.val - pre)
      pre = root.val
    }
    dfs(root.right)
  }
  dfs(root)
  return ans
}
```
