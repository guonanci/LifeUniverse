# easy

https://leetcode-cn.com/problems/xor-operation-in-an-array/solution/shu-zu-yi-huo-cao-zuo-by-leetcode-solution/ 1486. 数组异或操作
给你两个整数，n 和 start 。

数组 nums 定义为：nums[i] = start + 2\*i（下标从 0 开始）且 n == nums.length 。

请返回 nums 中所有元素按位异或（XOR）后得到的结果。

示例 1：

输入：n = 5, start = 0
输出：8
解释：数组 nums 为 [0, 2, 4, 6, 8]，其中 (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8 。
"^" 为按位异或 XOR 运算符。
示例 2：

输入：n = 4, start = 3
输出：8
解释：数组 nums 为 [3, 5, 7, 9]，其中 (3 ^ 5 ^ 7 ^ 9) = 8.
示例 3：

输入：n = 1, start = 7
输出：7
示例 4：

输入：n = 10, start = 5
输出：2

提示：

1 <= n <= 1000
0 <= start <= 1000
n == nums.length
通过次数 35,933 提交次数 42,531

记 \oplus⊕ 为异或运算，异或运算满足以下性质：

x \oplus x = 0x⊕x=0；
x \oplus y = y \oplus xx⊕y=y⊕x（交换律）；
(x \oplus y) \oplus z = x \oplus (y \oplus z)(x⊕y)⊕z=x⊕(y⊕z)（结合律）；
x \oplus y \oplus y = xx⊕y⊕y=x（自反性）；
\forall i \in Z∀i∈Z，有 4i \oplus (4i+1) \oplus (4i+2) \oplus (4i+3) = 04i⊕(4i+1)⊕(4i+2)⊕(4i+3)=0。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/xor-operation-in-an-array/solution/shu-zu-yi-huo-cao-zuo-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```cpp
class Solution {
public:
  int xorOperation(int n,int start) {
    int ans=0;
    for(int i=0;i<n;++i) ans^=(start+i*2);
    return ans;
  }
}
```

```cpp
class Solution {
public:
  int sumXor(int x) {
    if(x%4==0){
      return x;
    }else if(x%4==1){
      return 1;
    }else if(x%4==2){
      return x+1;
    }
    return 0;
  }
  int xorOperation(int n,int start){
    int s=start>>1,e=n&start&1;
    int ret=sumXor(s-1)^sumXor(s+n-1);
    return ret << 1 | e;
  }
}
```
