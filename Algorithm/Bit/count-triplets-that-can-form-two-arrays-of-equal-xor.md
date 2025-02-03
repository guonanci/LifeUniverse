# medium

1442. 形成两个异或相等数组的三元组数目
      给你一个整数数组 arr 。

现需要从数组中取三个下标 i、j 和 k ，其中 (0 <= i < j <= k < arr.length) 。

a 和 b 定义如下：

a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]
b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]
注意：^ 表示 按位异或 操作。

请返回能够令 a == b 成立的三元组 (i, j , k) 的数目。

示例 1：

输入：arr = [2,3,1,6,7]
输出：4
解释：满足题意的三元组分别是 (0,1,2), (0,2,2), (2,3,4) 以及 (2,4,4)
示例 2：

输入：arr = [1,1,1,1,1]
输出：10
示例 3：

输入：arr = [2,3]
输出：0
示例 4：

输入：arr = [1,3,5,7,9]
输出：3
示例 5：

输入：arr = [7,11,12,9,5,2,7,17,22]
输出：8

提示：

1 <= arr.length <= 300
1 <= arr[i] <= 10^8
通过次数 7,680 提交次数 10,871
贡献者
LeetCode

We are searching for sub-array of length ≥ 2 and we need to split it to 2 non-empty arrays so that the xor of the first array is equal to the xor of the second array. This is equivalent to searching for sub-array with xor = 0.
Keep the prefix xor of arr in another array, check the xor of all sub-arrays in O(n^2), if the xor of sub-array of length x is 0 add x-1 to the answer.

前言
用 \oplus⊕ 表示按位异或运算。

定义长度为 nn 的数组 \textit{arr}arr 的异或前缀和

S*i = \begin{cases} 0,&i=0\\ \textit{arr}\_0\oplus\textit{arr}\_1\oplus\cdots\oplus\textit{arr}*{i-1},&1\le i\le n \end{cases}
S
i
​
={
0,
arr
0
​
⊕arr
1
​
⊕⋯⊕arr
i−1
​
,
​

i=0
1≤i≤n
​

由该定义可得

S*i = \begin{cases} 0,&i=0\\ S*{i-1}\oplus\textit{arr}\_{i-1},&1\le i\le n \end{cases}
S
i
​
={
0,
S
i−1
​
⊕arr
i−1
​
,
​

i=0
1≤i≤n
​

这是一个关于 S_iS
i
​
的递推式，根据该递推式我们可以用 O(n)O(n) 的时间得到数组 \textit{arr}arr 的异或前缀和数组。

对于两个下标不同的异或前缀和 S_iS
i
​
和 S_jS
j
​
，设 0<i<j0<i<j，有

S*i\oplus S_j=(\textit{arr}\_0\oplus\textit{arr}\_1\oplus\cdots\oplus\textit{arr}*{i-1})\oplus(\textit{arr}*0\oplus\textit{arr}\_1\oplus\cdots\oplus\textit{arr}*{i-1}\oplus\textit{arr}*i\oplus\cdots\oplus\textit{arr}*{j-1}）
S
i
​
⊕S
j
​
=(arr
0
​
⊕arr
1
​
⊕⋯⊕arr
i−1
​
)⊕(arr
0
​
⊕arr
1
​
⊕⋯⊕arr
i−1
​
⊕arr
i
​
⊕⋯⊕arr
j−1
​
）

由于异或运算满足结合律和交换律，且任意数异或自身等于 00，上式可化简为

S*i\oplus S_j=\textit{arr}\_i\oplus\cdots\oplus\textit{arr}*{j-1}
S
i
​
⊕S
j
​
=arr
i
​
⊕⋯⊕arr
j−1
​

从而，数组 \textit{arr}arr 的子区间 [i,j][i,j] 的元素异或和为可表示为

S*i\oplus S*{j+1}
S
i
​
⊕S
j+1
​

因此问题中的 aa 和 bb 可表示为

\begin{aligned} &a=S*i\oplus S*{j}\\ &b=S*j\oplus S*{k+1} \end{aligned}
​

a=S
i
​
⊕S
j
​

b=S
j
​
⊕S
k+1
​

​

若 a=ba=b，则有

S*i\oplus S*{j}=S*j\oplus S*{k+1}
S
i
​
⊕S
j
​
=S
j
​
⊕S
k+1
​

即

S*i=S*{k+1}
S
i
​
=S
k+1
​

作者：LeetCode-Solution
链接：<https://leetcode-cn.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/solution/xing-cheng-liang-ge-yi-huo-xiang-deng-sh-jud0/>
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# 1. 三重循环

计算数组 arr 的异或前缀和 S，枚举符合 0<=i<j<=k<n 的下标 i，j，k。统计满足等式 Si = Sk+1 的三元组个数

```js
var countTriplets = function (arr) {
  const n = arr.length
  const s = [0]
  for (const num of arr) {
    s.push(s[s.length - 1] ^ num)
  }
  let ans = 0
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j; k < n; k++) {
        if (s[i] == s[k + 1]) ans++
      }
    }
  }
  return ans
}
```

# 复

- 时： O（n），n 是数组 arr 长度
- 空：O（n）

# 2.二重循环

当 Si=Sk+1 成立时，[i+1,k]范围内的任意 j 都符合要求，对应三元组个数为 k-i。所以只需枚举 i 和 k

```js
var countTriplets = function (arr) {
  const n = arr.length
  const s = [0]
  for (const num of arr) {
    s.push(s[s.length - 1] ^ num)
  }
  let ans = 0
  for (let i = 0; i < n; i++) {
    for (let k = i; k < n; k++) {
      if (s[i] == s[k + 1]) ans += k - i
    }
  }
  return ans
}
```

# 3.hashTable

```js
var cntTriplets = function (arr) {
  const cnt = new Map(),
    total = new Map()
  let ans = 0,
    s = 0

  for (const [i, v] of arr.entries()) {
    const t = s ^ v
    if (cnt.has(t)) ans += cnt.get(t) * i - total.get(t)
    cnt.set(s, (cnt.get(s) || 0) + 1)
    total.set(s, (total.get(s) || 0) + i)
    s = t
  }
  return ans
}
```

# 复

- 时： O（n） n 是输入数组 arr 长度
- 空：O（n） 我们需要使用 O（n）的空间存储两个哈希表
