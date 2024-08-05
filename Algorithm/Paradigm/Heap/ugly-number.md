# easy

https://leetcode-cn.com/problems/ugly-number/

```java
class Solution {
public bool isUgly(int n) {
    if (n<=0) return false
    int[] factors={2,3,5};
    for(int factor: factors){
      while(n%factor==0) n /= factor;
    }
    return n==1;
  }
}
```

根据丑数的定义，00 和负整数一定不是丑数。

当 n>0n>0 时，若 nn 是丑数，则 nn 可以写成 n = 2^a \times 3^b \times 5^cn=2
a
×3
b
×5
c
的形式，其中 a,b,ca,b,c 都是非负整数。特别地，当 a,b,ca,b,c 都是 00 时，n=1n=1。

为判断 nn 是否满足上述形式，可以对 nn 反复除以 2,3,52,3,5，直到 nn 不再包含质因数 2,3,52,3,5。若剩下的数等于 11，则说明 nn 不包含其他质因数，是丑数；否则，说明 nn 包含其他质因数，不是丑数。
复杂度分析

时间复杂度：O(\log n)O(logn)。时间复杂度取决于对 nn 除以 2,3,52,3,5 的次数，由于每次至少将 nn 除以 22，因此除法运算的次数不会超过 O(\log n)O(logn)。

空间复杂度：O(1)O(1)。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/ugly-number/solution/chou-shu-by-leetcode-solution-fazd/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
