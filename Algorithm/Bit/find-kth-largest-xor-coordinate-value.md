# medium

https://leetcode-cn.com/problems/find-kth-largest-xor-coordinate-value/

1738. 找出第 K 大的异或坐标值
      给你一个二维矩阵 matrix 和一个整数 k ，矩阵大小为 m x n 由非负整数组成。

矩阵中坐标 (a, b) 的 值 可由对所有满足 0 <= i <= a < m 且 0 <= j <= b < n 的元素 matrix[i][j]（下标从 0 开始计数）执行异或运算得到。

请你找出 matrix 的所有坐标中第 k 大的值（k 的值从 1 开始计数）。

示例 1：

输入：matrix = [[5,2],[1,6]], k = 1
输出：7
解释：坐标 (0,1) 的值是 5 XOR 2 = 7 ，为最大的值。
示例 2：

输入：matrix = [[5,2],[1,6]], k = 2
输出：5
解释：坐标 (0,0) 的值是 5 = 5 ，为第 2 大的值。
示例 3：

输入：matrix = [[5,2],[1,6]], k = 3
输出：4
解释：坐标 (1,0) 的值是 5 XOR 1 = 4 ，为第 3 大的值。
示例 4：

输入：matrix = [[5,2],[1,6]], k = 4
输出：0
解释：坐标 (1,1) 的值是 5 XOR 2 XOR 1 XOR 6 = 0 ，为第 4 大的值。

提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 1000
0 <= matrix[i][j] <= 106
1 <= k <= m \* n
通过次数 4,773 提交次数 7,449
请问您在哪类招聘中遇到此题？
贡献者
LeetCode
Use a 2D prefix sum to precalculate the xor-sum of the upper left submatrix.

前言
思路与算法

我们用 \oplus⊕ 表示按位异或运算。

由于「按位异或运算」与「加法运算」有着十分相似的性质，它们都满足交换律：

a \oplus b = b \oplus a
a⊕b=b⊕a

以及结合律：

(a \oplus b) \oplus c = a \oplus (b \oplus c)
(a⊕b)⊕c=a⊕(b⊕c)

因此我们可以使用「前缀和」这一技巧对按位异或运算的结果进行维护。由于本题中给定的矩阵 \textit{matrix}matrix 是二维的，因此我们需要使用二维前缀和。

设二维前缀和 \textit{pre}(i, j)pre(i,j) 表示矩阵 \textit{matrix}matrix 中所有满足 0 \leq x < i0≤x<i 且 0 \leq y < j0≤y<j 的元素执行按位异或运算的结果。与一维前缀和类似，要想快速得到 \textit{pre}(i, j)pre(i,j)，我们需要已经知道 \textit{pre}(i-1, j)pre(i−1,j)，\textit{pre}(i, j-1)pre(i,j−1) 以及 \textit{pre}(i-1,j-1)pre(i−1,j−1) 的结果，即：

\textit{pre}(i, j) = \textit{pre}(i-1, j) \oplus \textit{pre}(i, j-1) \oplus \textit{pre}(i-1, j-1) \oplus \textit{matrix}(i, j)
pre(i,j)=pre(i−1,j)⊕pre(i,j−1)⊕pre(i−1,j−1)⊕matrix(i,j)

下图给出了该二维前缀和递推式的可视化展示。

当我们将 \textit{pre}(i-1, j)pre(i−1,j) 和 \textit{pre}(i, j-1)pre(i,j−1) 进行按位异或运算后，由于对一个数 xx 异或两次 yy，结果仍然为 xx 本身，即：

x \oplus y \oplus y = x
x⊕y⊕y=x

因此 \textit{pre}(i-1, j-1)pre(i−1,j−1) 对应区域的按位异或结果被抵消，我们需要将其补上，并对位置 (i, j)(i,j) 的元素进行按位异或运算，这样就得到了 \textit{pre}(i, j)pre(i,j)。

在得到了所有的二维前缀和之后，我们只需要找出其中第 kk 大的元素即为答案。这一步我们可以直接将 mnmn 个二维前缀和进行排序后返第 kk 大的元素，也可以参考「215. 数组中的第 K 个最大元素的官方题解」中时间复杂度更低的做法。

下面的方法一给出的是基于排序的解法，方法二给出的是基于快速排序思路的、时间复杂度更低的快速选择算法的解法。

细节

在二维前缀和的计算过程中，如果我们正在计算首行或者首列，即 i=0i=0 或 j=0j=0，此时例如 \textit{pre}(i-1,j-1)pre(i−1,j−1) 是一个超出下标范围的结果。因此我们可以使用一个 (m+1) \times (n+1)(m+1)×(n+1) 的二维矩阵，将首行和首列空出来赋予默认值 00，并使用接下来的 mm 行和 nn 列存储二维前缀和，这样就不必进行下标范围的判断了。

方法一：二维前缀和 + 排序
代码

C++JavaC#Python3GolangCJavaScript

class Solution {
public:
int kthLargestValue(vector<vector<int>>& matrix, int k) {
int m = matrix.size(), n = matrix[0].size();
vector<vector<int>> pre(m + 1, vector<int>(n + 1));
vector<int> results;
for (int i = 1; i <= m; ++i) {
for (int j = 1; j <= n; ++j) {
pre[i][j] = pre[i - 1][j] ^ pre[i][j - 1] ^ pre[i - 1][j - 1] ^ matrix[i - 1][j - 1];
results.push_back(pre[i][j]);
}
}

        sort(results.begin(), results.end(), greater<int>());
        return results[k - 1];
    }

};
复杂度分析

时间复杂度：O(mn \log (mn))O(mnlog(mn))。计算二维前缀和的时间复杂度为 O(mn)O(mn)，排序的时间复杂度为 O(mn \log (mn))O(mnlog(mn))，因此总时间复杂度为 O(mn \log (mn))O(mnlog(mn))。

空间复杂度：O(mn)O(mn)，即为存储二维前缀和需要的空间。

方法二：二维前缀和 + 快速选择算法
代码

C++JavaC#Python3GolangCJavaScript

class Solution {
public:
int kthLargestValue(vector<vector<int>>& matrix, int k) {
int m = matrix.size(), n = matrix[0].size();
vector<vector<int>> pre(m + 1, vector<int>(n + 1));
vector<int> results;
for (int i = 1; i <= m; ++i) {
for (int j = 1; j <= n; ++j) {
pre[i][j] = pre[i - 1][j] ^ pre[i][j - 1] ^ pre[i - 1][j - 1] ^ matrix[i - 1][j - 1];
results.push_back(pre[i][j]);
}
}

        nth_element(results.begin(), results.begin() + k - 1, results.end(), greater<int>());
        return results[k - 1];
    }

};
复杂度分析

时间复杂度：O(mn)O(mn)。计算二维前缀和的时间复杂度为 O(mn)O(mn)，快速选择找出第 kk 大的元素的期望时间复杂度为 O(mn)O(mn)，最坏情况下时间复杂度为 O((mn)^2)O((mn)
2
)，因此总时间复杂度为 O(mn)O(mn)。

空间复杂度：O(mn)O(mn)，即为存储二维前缀和需要的空间。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/find-kth-largest-xor-coordinate-value/solution/zhao-chu-di-k-da-de-yi-huo-zuo-biao-zhi-mgick/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# 前言

由于「按位异或运算」与「加法运算」有着十分相似的性质，它们都满足交换律
我们可以使用「前缀和」这一技巧对按位异或运算的结果进行维护。由于本题中给定的 matrix 是二维，所以我们需要使用二维前缀和

设二维前缀和 pre（i,j)表示矩阵中 matrix 中所有满足 0<=x< i 且 0<=y< j 的元素执行异或运算的结果。与一维前缀和类似，要想快速得到 pre(i,j)，需要已经
知道 pre(i-1,j),pre(i，j-1)、pre(i-1,j-1)的结果，即：
pre(i,j)=pre(i-1,j)⊕pre(i,j-1)⊕pre(i-1,j-1)⊕matrix(i,j)

当我们将 \textit{pre}(i-1, j)pre(i−1,j) 和 \textit{pre}(i, j-1)pre(i,j−1) 进行按位异或运算后，由于对一个数 xx 异或两次 yy，结果仍然为 xx 本身，即：

x \oplus y \oplus y = x
x⊕y⊕y=x

因此 \textit{pre}(i-1, j-1)pre(i−1,j−1) 对应区域的按位异或结果被抵消，我们需要将其补上，并对位置 (i, j)(i,j) 的元素进行按位异或运算，这样就得到了 \textit{pre}(i, j)pre(i,j)。

当我们将 \textit{pre}(i-1, j)pre(i−1,j) 和 \textit{pre}(i, j-1)pre(i,j−1) 进行按位异或运算后，由于对一个数 xx 异或两次 yy，结果仍然为 xx 本身，即：

x \oplus y \oplus y = x
x⊕y⊕y=x

因此 \textit{pre}(i-1, j-1)pre(i−1,j−1) 对应区域的按位异或结果被抵消，我们需要将其补上，并对位置 (i, j)(i,j) 的元素进行按位异或运算，这样就得到了 \textit{pre}(i, j)pre(i,j)。
在得到了所有二维前缀和之后我们只需找出其中第 k 大的元素即为答案，我们可以直接将 mn 个二维前缀和进行排序后返回第 k 大的元素，也可以参考 215.数组中
第 k 大元素的官方题解 https://leetcode-cn.com/problems/kth-largest-element-in-an-array/solution/shu-zu-zhong-de-di-kge-zui-da-yuan-su-by-leetcode-/ 中时间复杂度更低的做法

下面的方法一给出的是基于排序的解法，方法二给出基于快速排序思路的，时间复杂度更低的快速选择算法的解法。

细节
在二维前缀和计算过程中，如果我们正在计算首行、首列，i=0j=0.此时例如 pre(i-1,j-1)是一个超出下标范围的结果。因此我们可以使用一个（m+1)\*(n+1)的
二维矩阵，将首行和首列空出来赋予默认值 0，并使用接下来的 m 行、n 列存储二维前缀和，这样就不必进行下标范围的判断了

```js
var kthLargestValue=function(matrix,k){
  const m=matrix.length,n=matrix[0].length
  const pre=new Array(m+1).fill(0).map(()=>new Array(n+1).fill(0))
  const results=[]
  for(let i=1;i<m+1;i++){
    for(let j>1;j<n+1;j++){
      pre[i][j]=pre[i-1][j]^pre[i][j-1]^pre[i-1][j-1]^matrix[i-1][j-1]
      results.push(pre[i][j])
    }
  }
  results.sort((a,b)=>b-a)
  return results[k-1]
}
```

# 复

- 时：O(mn log(mn)) 计算二维前缀和的时间复杂度为 O(mn)，排序时间复杂度为 O(mn log(mn))
- 空： O(mn) 存储二维前缀和需要的空间

# 2.二维前缀和+ 快速选择算法

```js
var kthLargestValue = function (matrix, k) {}
```
