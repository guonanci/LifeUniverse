# easy

https://leetcode-cn.com/problems/implement-strstr/

# KMP

28. 实现 strStr()
    实现 strStr() 函数。

给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回 -1 。

说明：

当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。

示例 1：

输入：haystack = "hello", needle = "ll"
输出：2
示例 2：

输入：haystack = "aaaaa", needle = "bba"
输出：-1
示例 3：

输入：haystack = "", needle = ""
输出：0

提示：

0 <= haystack.length, needle.length <= 5 \* 104
haystack 和 needle 仅由小写英文字符组成
通过次数 334,127 提交次数 839,060

```js
var strStr = function (haystack, needle) {
  // 草垛
  const n = haystack.length,
    m = needle.length
  if (m == 0) return 0
  const pi = new Array(m).fill(0)
  for (let i = 1, j = 0; i < m; i++) {
    while (j > 0 && needle[i] != needle[j]) j = pi[j - 1]
    if (needle[i] == needle[j]) j++
    pi[i] = j
  }
  for (let i = 0, j = 0; i < n; i++) {
    while (j > 0 && haystack[i] != needle[j]) j = pi[j - 1]
    if (haystack[i] == needle[j]) j++
    if (j == m) return i - m + 1
  }
  return -1
}
```

复杂度分析

时间复杂度：O(n+m)O(n+m)，其中 nn 是字符串 \textit{haystack}haystack 的长度，mm 是字符串 \textit{needle}needle 的长度。我们至多需要遍历两字符串一次。

空间复杂度：O(m)O(m)，其中 mm 是字符串 \textit{needle}needle 的长度。我们只需要保存字符串 \textit{needle}needle 的前缀函数。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/implement-strstr/solution/shi-xian-strstr-by-leetcode-solution-ds6y/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

[Sunday 解法](https://leetcode-cn.com/problems/implement-strstr/solution/python3-sundayjie-fa-9996-by-tes/)

暴力解法

```js
var strStr = function (haystack, needle) {
  const n = haystack.length,
    m = needle.length
  for (let i = 0; i + m <= n; i++) {
    let flag = true
    for (let j = 0; j < m; j++) {
      if (haystack[i + j] != needle[j]) {
        flag = false
        break
      }
    }
    if (flag) {
      return i
    }
  }
  return -1
}
```

[维基百科 KMP 算法](https://zh.wikipedia.org/wiki/KMP%E7%AE%97%E6%B3%95)
[最短回文串](https://leetcode-cn.com/problems/shortest-palindrome/solution/zui-duan-hui-wen-chuan-by-leetcode-solution/)
[重复子字符串](https://leetcode-cn.com/problems/repeated-substring-pattern/)
