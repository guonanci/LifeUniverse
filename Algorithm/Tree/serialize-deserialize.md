# high

https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof/
实现两函数
设计一个算法，不嫌多执行逻辑，只需保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构

输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。并非必须采取这种方式，也可以采用其他的方法解决这个问题
input: root=[1,2,3,null,null,4,5]
output: [1,2,3,null,null,4,5]

# 剑指 Offer37.序列化二叉树

# 1dfs

思路和算法
二叉树的序列化本质上是对其值进行编码，更重要的是对其结构进行编码。可以遍历树来完成上述任务。众所周知，我们一般有两个策略：广度优先搜索和深度优先搜索

- 广度优先搜索可以按照层次顺序从上到下遍历所有节点
- 深度优先搜索可以从一个根开始，一直延伸到某个叶，然后回到根，到达另一个分支。根据根节点，左节点和右节点之间的相对顺序，可以进一步将深度优先搜索策略区分为
  - 先
  - 中
  - 后
- 从根节点 1 开始，序列化字符串是 1。然后我们跳到根节点 2 的左子树，序列化字符串变成 1，2. 现在从节点 2 开始，我们访问它的左节点 3，

先序遍历，空子树的时候序列化成 None。继续递归序列化，反序列化：需要根据`,`把原先的序列分割开来先序遍历的元素列表，然后从左向右遍历这个序列：

- 如果当前元素为 None，则当前为空树
- 否则先解析这棵树左子树，再解析他的右子树

```js
var serialize = function (root) {
  return rserialize(root, '')
}
var deserialize = function (data) {
  const dataArr = data.split(',')
  return rdeserialize(dataArr)
}
const rserialize = (root, str) => {
  if (root == null) {
    str += 'None,'
  } else {
    str += root.val + '' + ','
    str = rserialize(root.left, str)
    str = rserialize(root.right, str)
  }
  return str
}
const rdeserialize = (dataList) => {
  if (dataList[0] == 'None') {
    dataList.shift()
    return null
  }
  const root = new TreeNode(parseInt(dataList[0]))
  dataList.shift()
  root.left = rdeserialize(dataList)
  root.right = rdeserialize(dataList)
  return root
}
```

复杂度分析：

- 时：在序列化和反序列化函数中，我们只访问每个节点一次，因此时间复杂度为 O（n）。其中 n 是节点数，即树大小。
- 空：在序列化和反序列化函数中，我们递归会使用栈空间，故渐进空间复杂度为 O（n）

# 2 括号表示编码，递归下降解码

我们也可以这样表示一颗二叉树：

- 如果当前树为空，则表示为 X
- 如果当前树树不为空，则表示为(<LEFT_SUB_TREE>)CUR_NUM(<RIGHT_SUB_TREE>)
  - <LEFT_SUB_TREE>是左子树序列化后的结果
  - 。。。
  - CUR_NUM 是当前节点的值
- 根据这样的定义，我们很好写出序列化过程，后序遍历这可二叉树即可，那如何反序列化呢。根据定义，我们可以推导出这样的巴科斯范式（BNF）：`T -> (T) num (T) | X`

意义是：用 T 表示一棵树序列化之后的结果，`|`表示`T`的构成为`(T) num (T)` 或者`X`，`|`左边是对`T`的递归定义，右边规定了递归的边界条件。因为：

- T 的定义中，序列中的第一个字符要么是`X`，要么是`(`，所以这个定义不含左递归
- 当我们开始解析一个字符串时，如果开头是 `X`，我们就知道这一定是解析一个「空树」的结构，如果开头是`(`，我们就知道需要解析`(T) num (T)`的结构，因此这里两种开头和两种解析方法一一对应，可以确定这是一个无二义性的文法
- 我们只需要通过开头的第一个字母是`X`还是`(`来判断使用哪一种解析方法

所以这个文法是`LL(1)`型文法，你只需要知道他定义了一种递归的方法来反序列化，也保证了这个方法的正确性--我们可以设计一个递归函数：

- 这个递归函数传入两个参数，带解析的字符串和当前当解析的位置`ptr`,ptr 之前的位置是已经解析的，ptr 和 ptr 后面的字符串是待解析的
- 如果当前位置为 X 说明解析到了一颗空树，直接返回
- 否则当前位置一定是`(`，对括号内部按照`(T) num (T)`的模式解析

```js
var serialize = function (root) {
  if (root == null) return 'X'
  const l = '(' + serialize(root.left) + ')'
  const r = '(' + serialize(root.right) + ')'
  return l + root.val + r
}
const deserialize = function (data) {
  const ptr = [0]
  return parse(data, ptr)
}
const parse = (data, ptr) => {
  if (data[ptr[0]] == 'X') {
    ++ptr[0]
    return null
  }
  let cur = new TreeNode(0)
  cur.left = parseSubtree(data, ptr)
  cur.val = parseInt(data, ptr)
  cur.right = parseSubtree(data, ptr)
  return cur
}
const parseSubtree = (data, ptr) => {
  ++ptr[0] // 跳过左括号
  const subtree = parse(data, ptr)
  ++ptr[0] // 跳过右括号
  return subtree
}
const parseInt = (data, ptr) => {
  let x = 0,
    sgn = 1
  if (isNaN(Number(data[ptr[0]]))) {
    sgn = -1
    ++ptr[0]
  }
  while (!isNaN(Number(data[ptr[0]])))
    x = x * 10 + data[ptr[0]++].charCodeAt() - '0'.charCodeAt()
  return x * sgn
}
```

# 复

- 时：序列化时做了一次遍历，渐进时间复杂度为 O（n）。反序列化时，在解析字符串是 ptr 指针对字符串做了一次顺序遍历，字符串长度为 O（n）。故这里的
  - 渐进时间复杂度为 O（n）
- 空：考虑递归使用的栈空间大小，这里栈空间的使用和递归深度有关，递归深度又和二叉树深度有关，在最差情况下，二叉树退化成一条链，故这里的渐进空间复杂度为 O（n）
