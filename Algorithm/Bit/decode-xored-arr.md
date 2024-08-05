# easy

https://leetcode-cn.com/problems/decode-xored-array/solution/jie-ma-yi-huo-hou-de-shu-zu-by-leetcode-yp0mg/

1720. 解码异或后的数组
      未知 整数数组 arr 由 n 个非负整数组成。

经编码后变为长度为 n - 1 的另一个整数数组 encoded ，其中 encoded[i] = arr[i] XOR arr[i + 1] 。例如，arr = [1,0,2,1] 经编码后得到 encoded = [1,2,3] 。

给你编码后的数组 encoded 和原数组 arr 的第一个元素 first（arr[0]）。

请解码返回原数组 arr 。可以证明答案存在并且是唯一的。

示例 1：

输入：encoded = [1,2,3], first = 1
输出：[1,0,2,1]
解释：若 arr = [1,0,2,1] ，那么 first = 1 且 encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]
示例 2：

输入：encoded = [6,2,7,3], first = 4
输出：[4,2,0,7,4]

提示：

2 <= n <= 104
encoded.length == n - 1
0 <= encoded[i] <= 105
0 <= first <= 105
通过次数 12,714 提交次数 14,831

方法一：利用异或运算的性质
原数组 \textit{arr}arr 的长度为 nn，对 \textit{arr}arr 编码后得到长度为 n-1n−1 的数组 \textit{encoded}encoded，编码规则为：\textit{encoded}[i]=\textit{arr}[i] \oplus \textit{arr}[i+1]encoded[i]=arr[i]⊕arr[i+1]，其中 \oplus⊕ 是异或运算符，0 \le i<n-10≤i<n−1。

已知编码后的数组 \textit{encoded}encoded 和原数组 \textit{arr}arr 的第一个元素 \textit{arr}[0]=\textit{first}arr[0]=first，需要解码得到原数组 \textit{arr}arr。可以利用异或运算的性质实现。

异或运算具有如下性质：

异或运算满足交换律和结合律；

任意整数和自身做异或运算的结果都等于 00，即 x \oplus x = 0x⊕x=0；

任意整数和 00 做异或运算的结果都等于其自身，即 x \oplus 0 = 0 \oplus x = xx⊕0=0⊕x=x。

当 1 \le i<n1≤i<n 时，有 \textit{encoded}[i-1]=\textit{arr}[i-1] \oplus \textit{arr}[i]encoded[i−1]=arr[i−1]⊕arr[i]。在等号两边同时异或 \textit{arr}[i-1]arr[i−1]，可以得到 \textit{arr}[i]=\textit{arr}[i-1] \oplus \textit{encoded}[i-1]arr[i]=arr[i−1]⊕encoded[i−1]，计算过程如下：

\begin{aligned} \textit{encoded}[i-1] &= \textit{arr}[i-1] \oplus \textit{arr}[i] \\ \textit{encoded}[i-1] \oplus \textit{arr}[i-1] &= \textit{arr}[i-1] \oplus \textit{arr}[i] \oplus \textit{arr}[i-1] \\ \textit{arr}[i-1] \oplus \textit{encoded}[i-1] &= \textit{arr}[i-1] \oplus \textit{arr}[i-1] \oplus \textit{arr}[i] \\ \textit{arr}[i-1] \oplus \textit{encoded}[i-1] &= 0 \oplus \textit{arr}[i] \\ \textit{arr}[i-1] \oplus \textit{encoded}[i-1] &= \textit{arr}[i] \end{aligned}
encoded[i−1]
encoded[i−1]⊕arr[i−1]
arr[i−1]⊕encoded[i−1]
arr[i−1]⊕encoded[i−1]
arr[i−1]⊕encoded[i−1]
​

=arr[i−1]⊕arr[i]
=arr[i−1]⊕arr[i]⊕arr[i−1]
=arr[i−1]⊕arr[i−1]⊕arr[i]
=0⊕arr[i]
=arr[i]
​

因此当 1 \le i<n1≤i<n 时，有 \textit{arr}[i]=\textit{arr}[i-1] \oplus \textit{encoded}[i-1]arr[i]=arr[i−1]⊕encoded[i−1]。

由于 \textit{arr}[0]=\textit{first}arr[0]=first 已知，因此对 ii 从 11 到 n-1n−1 依次计算 \textit{arr}[i]arr[i] 的值，即可解码得到原数组 \textit{arr}arr。

JavaC#JavaScriptGolangPython3CC++

```java
class Solution {
    public int[] decode(int[] encoded, int first) {
        int n = encoded.length + 1;
        int[] arr = new int[n];
        arr[0] = first;
        for (int i = 1; i < n; i++) {
            arr[i] = arr[i - 1] ^ encoded[i - 1];
        }
        return arr;
    }
}
```

复杂度分析

时间复杂度：O(n)O(n)，其中 nn 是原数组 \textit{arr}arr 的长度。需要遍历长度为 n-1n−1 的编码数组 \textit{encoded}encoded 一次，计算原数组 \textit{arr}arr 的每个元素值。

空间复杂度：O(1)O(1)。注意空间复杂度不考虑返回值。
