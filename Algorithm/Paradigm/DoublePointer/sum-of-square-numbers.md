# medium

https://leetcode-cn.com/problems/sum-of-square-numbers/

633. 平方数之和
     给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。

示例 1：

输入：c = 5
输出：true
解释：1 _ 1 + 2 _ 2 = 5
示例 2：

输入：c = 3
输出：false
示例 3：

输入：c = 4
输出：true
示例 4：

输入：c = 2
输出：true
示例 5：

输入：c = 1
输出：true

提示：

0 <= c <= 231 - 1
通过次数 46,302 提交次数 128,518

对于给定的非负整数 cc，需要判断是否存在整数 aa 和 bb，使得 a^2 + b^2 = ca
2
+b
2
=c。可以枚举 aa 和 bb 所有可能的情况，时间复杂度为 O(c^2)O(c
2
)。但是暴力枚举有一些情况是没有必要的。例如：当 c = 20c=20 时，当 a = 1a=1 的时候，枚举 bb 的时候，只需要枚举到 b = 5b=5 就可以结束了，这是因为 1^2 + 5^2 = 25 > 201
2
+5
2
=25>20。当 b > 5b>5 时，一定有 1^2 + b^2 > 201
2
+b
2

> 20。

注意到这一点，可以使用 \texttt{sqrt}sqrt 函数或者双指针降低时间复杂度。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/sum-of-square-numbers/solution/ping-fang-shu-zhi-he-by-leetcode-solutio-8ydl/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
在枚举 aa 的同时，使用 \texttt{sqrt}sqrt 函数找出 bb。注意：本题 cc 的取值范围在 [0,2^{31} - 1][0,2 31 −1]，因此在计算的过程中可能会发生 \texttt{int}int 型溢出的情况，需要使用 \texttt{long}long 型避免溢出。

```java
class Solution {
  public boolean judgeSquareSum(int c) {
    for(long a=0;a*a<=c;a++){
      double b=Math.sqrt(c-a*a);
      if(b==(int) b) return true;
    }
    return false;
  }
}
```

```js
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {}
```

```java
class Solution {
  public boolean judgeSquareSum(int c) {
    int l=0,r=(int) Math.sqrt(c); // js:Math.floor(Math.sqrt(c))
    while(l<=r){
      int sum=l*l+r*r;
      if(sum==c){
        return true
      }else if(sum>c){
        r--
      }else{
        l++
      }
    }
  }
}
```

方法三：数学
费马平方和定理告诉我们：

一个非负整数 cc 如果能够表示为两个整数的平方和，当且仅当 cc 的所有形如 4k + 34k+3 的质因子的幂均为偶数。

证明请见 这里。

因此我们需要对 cc 进行质因数分解，再判断所有形如 4k + 34k+3 的质因子的幂是否均为偶数即可。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/sum-of-square-numbers/solution/ping-fang-shu-zhi-he-by-leetcode-solutio-8ydl/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# easy: https://leetcode-cn.com/problems/valid-perfect-square/

367. 有效的完全平方数
     给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。

进阶：不要 使用任何内置的库函数，如 sqrt 。

示例 1：

输入：num = 16
输出：true
示例 2：

输入：num = 14
输出：false

提示：

1 <= num <= 2^31 - 1
通过次数 61,004 提交次数 139,620

[x 的平方根](https://leetcode-cn.com/problems/sqrtx/)
[平方数之和](https://leetcode-cn.com/problems/sum-of-square-numbers/)
