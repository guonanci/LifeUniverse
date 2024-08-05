# medium

1310. 子数组异或查询
      有一个正整数数组 arr，现给你一个对应的查询数组 queries，其中 queries[i] = [Li, Ri]。

对于每个查询 i，请你计算从 Li 到 Ri 的 XOR 值（即 arr[Li] xor arr[Li+1] xor ... xor arr[Ri]）作为本次查询的结果。

并返回一个包含给定查询 queries 所有结果的数组。

示例 1：

输入：arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
输出：[2,7,14,8]
解释：
数组中元素的二进制表示形式是：
1 = 0001
3 = 0011
4 = 0100
8 = 1000
查询的 XOR 值为：
[0,1] = 1 xor 3 = 2
[1,2] = 3 xor 4 = 7
[0,3] = 1 xor 3 xor 4 xor 8 = 14
[3,3] = 8
示例 2：

输入：arr = [4,8,2,10], queries = [[2,3],[1,3],[0,0],[0,3]]
输出：[8,0,4,4]

提示：

1 <= arr.length <= 3 _ 10^4
1 <= arr[i] <= 10^9
1 <= queries.length <= 3 _ 10^4
queries[i].length == 2
0 <= queries[i][0] <= queries[i][1] < arr.length
通过次数 7,533 提交次数 10,826

```js
/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  const l = arr.length
  const preXOR = new Array(l + 1).fill(0)
  for (let i = 1; i <= n; i++) preXOR[i] = arr[i - 1] ^ preXOR[i - 1]
  const ans = []
  for (const query of queries) {
    const L = query[0],
      R = query[1]
    ans.push(preXOR[R + 1] ^ preXOR[L])
  }
  return ans
}
```

# 解题思路

类似前缀和的方法

- 首先预处理出一个前缀异或数组，时间复杂度：O(arr.length)
- 其次每次查询直接在这个数组中查询即可，每次查询只需要 O(1)时间，因此总时间复杂度：O(queries.length)
- 总的时间复杂度 O(arr.length+queries.length)

# 为什么可以使用前缀数组：

- 首先，定义前缀数组。pre_xor[i] 表示 arr 数组中，前 i 个数的异或值。即 pre_xor[i]=arr[0]⊕arr[1]⊕...⊕arr[i-1]
  - 其次，我们来观察一下这个数组的特性。取两个数 L,R(L<=R)。然后有
    - pre_xor[L]=arr[0]⊕arr[1]⊕...⊕arr[L-1]
    - pre_xor[R]=arr[0]⊕arr[1]⊕...⊕arr[L-1]⊕arr[L]⊕...⊕arr[R-1]
    - pre_xor[L]⊕pre_xor[R]=(arr[0]⊕...⊕arr[L-1])⊕(arr[0]⊕...⊕arr[R-1])
    - =(arr[0]⊕arr[0])⊕...⊕(arr[L-1]⊕arr[L-1])⊕arr[L]⊕...⊕arr[R-1]
    - arr[L]⊕...⊕arr[R-1]
  - 最后，基于以上性质，只需要代入 L，R+1，得到：
    - pre_xor[L]⊕pre_xor[R+1]=arr[L]⊕...⊕arr[R]
