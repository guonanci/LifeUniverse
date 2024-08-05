https://zh.wikipedia.org/wiki/KMP%E7%AE%97%E6%B3%95
Knuth-Morris-Pratt 字符串查找算法 在一个字符串 S 内查找一个词 M 的出现位置。**一个词在不匹配时本身就包含足够的信息来确定下一个匹配可能的开始**
位置，此算法利用这一特性来避免重新检查先前匹配的字符
高德纳和沃恩。普拉特在 1974 年构思，同年莫里斯也独立地设计出该算法，最终 3 人 1977 年联合发表

W='ABCDABD' S='ABC ABCDAB ABCDABCDABDE' 查找过程同时使用两个循环变量 m 和 i，m 代表主文字符串 S 内匹配 W 的当前查找位置，i 代表匹配字符串
W 当前做比较的字符位置

从 W 与 S 的开头比较起，我们对比到 S[3](=' ')时，发现 W[3](='D')与之不符，接着并不是从 S[1]比较下去，我们已经知道 S[1]-S[3]不与 W[0]相合
因此，略过这些字符，令 m=4，i=0

# 部分匹配表

又称 失配函数，让算法无需多次匹配 S 中的任何字符。能够实现线性时间搜索的关键是在主串的一些字段中检查模式串的初始字段，我们可以确切知道在当前位置
之前的一个潜在匹配位置。换句话说，在不错过任何潜在匹配的情况下，我们「预搜索」这个模式串本身并将其翻译成一个包含可能失配的位置对应可以绕过最多无
效的列表

对于 W 中的任何位置，我们都希望能够查询那个位置前【不包括那个位置】有可能的 W 的最长初始字段的长度，而不是从 W[0]开始失配的整个字段，这长度就是
就是我们查找下一个匹配时要回退的距离。因此 T[i] 是 W 的可能适当初始字段同时也是结束于 W[i-1]的子串最大长度。我们使空串长度为 0.当一个失配出现
在模式串最开始，这是特殊情况（无法回退），我们设置 T[0]=-1

# 创建表算法的伪代码解释

以 W='ABCDABD'为例，我们将看到，部分匹配表的生成过程与前述查找过程类似，且出于类似原因是高效的。
首先，我们假定 T[0]=-1。为求出 T【1】,我们必须找到 A 的真后缀（不等于原串的后缀）兼 W 的前缀。但 A 没有真后缀 zhui，所以我们设定 T[1]=0.类
似地，T[2]=0
继续到 T[3]，我们注意到检查所有后缀有一个捷径 jing：假设存在符合条件的前后缀，两者分别为 W[0...1]=W[1...2]。由于 W[0..0]亦是 W 的真前缀，
上一步必然已经得到 T[2]=1

```peseodo code
algorithm kmp_table:
  input:
    an arr of characters, W（the word to be analyzed)
    an arr of integers, T(the table to be filled)
  output:
    nothing(but during operation, it populates the table)

  define variables:
    an int, pos <=2 (curPosition we are computing in T)
    ant int, cnd <= 0(the zero-based i in W of the next char of the cur candidate substring)

  (the first few values are fixed but different from what the algorithm might suggest)
  let T[0] <= -1, T[1] <=0
  while pos < length(W) do
    (first case: the subStr continues)
    if W[pos-1]=W[cnd] then
      let cnd <= cnd + 1, T[pos]<=cnd,pos<=pos+i

    (second case: it doesnt, but we can fall back)
    else if cnd > 0 then
      let cnd <= T[cnd]
    (third case: we have run out of candidates. Note cnd=0)
    else
      let T[pos]<= 0, pos <= pos+1
```

http://jakeboxer.com/blog/2009/12/13/the-knuth-morris-pratt-algorithm-in-my-own-words/
http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html
https://www.jianshu.com/p/d4cf13b32111

https://leetcode-cn.com/problems/implement-strstr/solution/kmp-suan-fa-xiang-jie-by-labuladong/

pat 表示模式串，长度为 M，txt 表示文本串，长度为 N，KMP 算法是在 txt 中查找子串 pat，如果存在，返回这个子串的起始索引，否则返回-1.

动态规划，多次强调了明确 dp 数组的含义，而且同一个问题可能有不止一种定义 dp 数组含义的方法，不同定义会有不同解法。
常见的 KMP 算法：一波诡异的操作处理 pat 后形成一个一维数组 next，然后根据该数组经过又一波复杂操作去匹配 txt。
时间复杂度 O（N），空间复杂度 O（M）。其实它这个 next 数组就相当于 dp 数组，其中元素含义跟 pat 前缀、后缀有关，判定规则比较复杂，不好理解。本文则用一个二维 dp 数组(但空间复杂度还是 O（M）)，重新定义其中元素含义，使得代码长度大大减少，可解释性大大提高。

PS：本文的代码参考《算法 4》

原代码使用的数组名称是 dfa 确定有限状态机，因为我们公众号之前有一系列动态规划文章，就不说这么高大上名词了，我对书中代码进行了一点修改,沿用 dp 数组名称。

本文用到动态规划算法的设计技巧（归纳思想），所以希望读者看过这篇文章’动态规划设计之最长递增子序列‘

# kmp 算法概述

首先还是简单介绍下 kmp 算法和暴力匹配算法不同在哪里，难点在哪里，和动态规划有啥关系：
暴力的字符匹配算法很容易写，运行逻辑：

```java
class Solution {
  public int search(String pat, String txt) {
    int patLen = pat.length;
    int txtLen = txt.length;
    for (int i=0; i <= txtLen - patLen; i++) { // line a:这层循环控制最多跑几趟对pat的匹配
      int j;
      for (j = 0; j < patLen; j++) { // line b
        if(pat[j] != txt[i+j]) // line b循环中只要pat每个索引上的char和txt 进行（i+）j长度位移过后的txt【i+j】不相等，那么就break
          break; // 跳出line b内层循环，继续跑下一趟line a循环
      }
      // line b循环体结束后j == patLen的话，pat 全都匹配了
      if (j == patLen) return i;
    }
    // txt中不存在pat子串
    return -1
  }
}
```

对于暴力算法，如果出现不匹配算法，同时回退 txt 和 pat 指针，**嵌套 for 循环，时间复杂度为 O（patLen\*txtLen）**，空间复杂度 O（1）。**最主要的问题是，如果字符串中重复字符比较多，该算法就显得很蠢 chun**

**比如 txt=‘aaacaaab',pat='aaab'**
**很明显，pat 中根本没有字符 c，指针 i 可以大幅加速**

时间上不太对劲，那就空间换时间喽（我们要熟悉各种空间换时间的套路，增加空间复杂度，减少时间复杂度而且通常情况下空间复杂度都是常数级的），**kmp 算法需要花费一些空间来记录一些信息**
再比如类似 txt=’aaaaaaab‘，pat=’aaab‘，因为 kmp 知道 b 之前的 a 都是匹配的，所以每次只需要知道字符 b 是否被匹配就行了。**永不回退 txt 的指针 i**，

https://leetcode-cn.com/problems/implement-strstr

实现 srtStr 函数，给你两个字符串 haystack 和 needle，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在则返回-1.

当 needle 是字符串时，我们应当返回什么值呢。这是一个好问题。
对于本题而言，needle 是空字符串时我们返回 0.这与 C 语言的 strstr（），JAVA、js 的 indexOf（）定义相符。

0《=haystack.length,needle.length <=5\*10^4,两者均只由小写字母组成。

1977 年

本文是经典的字符串单模匹配的模型，因此可以使用字符串匹配算法解决，常见的字符串匹配算法包括暴力匹配、Knuth-Morris-Pratt 算法、Boyer-Moore 算法、Sunday 算法

因为哈希方法可能出现哈希值相等但是字符串不相等的情况，而 strStr 函数要求匹配结果必定正确，因此本文不介绍哈希方法,有兴趣的读者可以自行了解滚动哈希的实现 Rabin-Karp 算法

# 1 暴力匹配

让字符串 needle、haystack 的所有长度为 m 的子串均匹配一次。
为了减少不必要的匹配，我们每次匹配失败即立刻停止当前子串的匹配，对下一个子串继续匹配。如果当前子串匹配成功，我们返回当前子串的开始位置即可。如果所有子串都匹配失败，返回-1

Knuth-Morris-Pratt 算法核心为**前缀函数 π（i）**：
长度 m 的字符串 s，前缀函数 π（i）（0《=i《m），表示 s 的子串 s【0：i}的最长的相等的真前缀和真后缀的长度。

特别地，如果不存在符合条件的前后缀，那么 \pi(i) = 0π(i)=0。其中真前缀与真后缀的定义为不等于自身的的前缀与后缀。

我们举个例子说明：字符串 aabaaabaabaaab 的前缀函数值依次为 0,1,0,1,2,2,30,1,0,1,2,2,3。

\pi(0) = 0π(0)=0，因为 aa 没有真前缀和真后缀，根据规定为 00（可以发现对于任意字符串 \pi(0)=0π(0)=0 必定成立）；

\pi(1) = 1π(1)=1，因为 aaaa 最长的一对相等的真前后缀为 aa，长度为 11；

\pi(2) = 0π(2)=0，因为 aabaab 没有对应真前缀和真后缀，根据规定为 00；

\pi(3) = 1π(3)=1，因为 aabaaaba 最长的一对相等的真前后缀为 aa，长度为 11；

\pi(4) = 2π(4)=2，因为 aabaaaabaa 最长的一对相等的真前后缀为 aaaa，长度为 22；

\pi(5) = 2π(5)=2，因为 aabaaa 最长的一对相等的真前后缀为 aa，长度为 2；

\pi(6) = 3π(6)=3，因为 aabaaab 最长的一对相等的真前后缀为 aab，长度为 3。

有了前缀函数，我们就可以快速地计算出**模式串在主串中的每一次出现**。

# 如何求解前缀函数

**长度 m 的字符串 s 的所有前缀函数的求解算法的总时间复杂度是严格 O（m）的，且该求解算法是增量算法**，即我们可以一边读入字符串，一边求解当前读入位的前缀函数。
为了叙述方便，我们接下来将说明几个前缀函数的性质：

1. `π(i) <= π(i-1) + 1`
   1. 依据 π(i)定义得：`s[0:π(i)-1]=s[i-π(i)+1:i]`
   2. 将两区间右端点同时左移，可得：`s[0:π(i)-2]=s[i-π(i)+1:i-1]`
   3. 依据`π(i)`定义得：`π(i) >= π(i-1) + 1` 即 `π(i) <= π(i-1) + 1`
2. 如果`s[i] = s[π(i - 1)]`，那么`π(i) = π(i-1) + 1`
   1. 依据 π(i-1)定义得：`s[0:π(i-1)-1]=s[i-π(i-1):i-1]`
   2. 如果`s[π(i-1)]==s[i]` 那么`s[0:π(i-1)]=s[i-π(i-1):i]`
   3. 依据`π(i)`定义得：`π(i) > π(i-1)+1`,结合第一个性质可得`π(i)=π(i-1)+1`

这样我们可以依据这两个性质提出求解`π(i)`的方案：**找到最大的 j，满足 s[0:j-1] = s[i-j:i-1],且 s[i]=s[j](这样就有`s[0:j]=s[i-j:i]`即`π(i)=j+1`**
这里提出两个要求：

1. j 要求尽可能大，满足`s[0:j-1] = s[i-j:i-1]`
2. j 要求满足`s[i]=s[j]`

由`π(i-1)`定义可知：
`s[0:π(i-1)-1]=s[i-π(i-1):i-1]`
那么`j=π(i-1)`符合第一个要求.如果`s[i]=s[π(i-1)]`，

j 的取值总是被描述为`π(π(π(...)-1)-1)`的结构（初始为`π(i-1)`）。于是我们可以描述我们的算法：设定`π(i)=j+1`，j 的初始值为`π(i-1)`。我们只需要不断迭代 j（令 j 变为`π(j-1)`)直到`s[i]=s[j]`或者`j=0`即可。如果最终匹配成功（找到了 j 使得`s[i]=s[j]`，那么`π(i)=j+1`，否则`π(i)=0`

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/implement-strstr/solution/shi-xian-strstr-by-leetcode-solution-ds6y/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```js
// Needle in a Haystack 大海捞针 ; 海底针 ; 干草堆里找针
// haystack n. 干草堆
// 比喻如大海捞针般难找
var strStr = function (hayStack, needle) {
  const n = haystack.length,
    m = needle.length
  for (let i = 0; i + m <= n; i++) {
    let foundFlag = true
    for (let j = 0; j < m; j++) {
      if (haystack[i + j] != needle[j]) {
        foundFlag = false
        break
      }
    }
    if (foundFlag) return i
  }
  return -1
}
var strStr = function (hayStack, needle) {
  const n = hayStack.length,
    m = needle.length
  for (let i = 0; i + m <= n; i++) {
    let foundFlag = true
    for (let j = 0; j < m; j++) {
      if (haystack[i + j] != needle[j]) {
        flag = false
        break
      }
    }
    if (flag) return i
  }
  return -1
}
```

# 复杂度证明

时间部分，注意到`π(i)<=π(i-1)+1`，即每次当前位的前缀函数至多比前 1 位增加 1，每当我们迭代 1 次，当前位的前缀函数最大值都会减少。可以发现，前缀函数的总减少次数不会超过中增加次数，而总增加次数不会超过 m 次，因此总减少次数也不会超过 m 次，即总迭代次数不会超过 m 次。
空间复杂度部分，我们只用到了长度 m 的数组保存前缀函数，以及使用了常数的空间保存了若 ruo 干变量。

# 如何解决本题

记 haystack 长度 n，needle 长度 m
str=needle+#+haystack

对 str 求前缀函数。因为特殊字符#的存在，str 中 haystack 部分的前缀函数所对应的真前缀必定落在 needle 部分，真后缀必定落在 haystack 部分。当 haystack 部分的前缀函数值为 m 时，我们就找到了一次 needle 在 haystack 中的出现（因为此时真前缀恰为字符串 needle）

实现时，我们可以进行一定的优化，包括：

1. 我们无需显式地创建字符串 str
   1. 为了节约空间，我们只需要顺次遍历 needle、特殊字符#和字符串 haystack 即可。
2. 也无需显式地保存所有前缀函数的结果，而只需要保存 needle 的前缀函数即可
   1. #的前缀函数必定为 0.且易知`π(i)<=m`（真前缀不可能包含#）
   2. 这样我们计算`π(i)`时，`j=π(π(π(...)-1)-1)`的所有取值中仅有`π(i-1)`的下标可能大于等于 m。我们只需保存前一个位置的前缀函数，其他 j 的取值将全部为 needle 部分的前缀函数。
3. 我们也无需特别处理#，只需要处理 haystack 的第一个位置对应的前缀函数时，直接设定 j 的初值为 0 即可

这样的话，代码实现分为两部分：

1. 第一部分：求 needle 的前缀函数，保留起来
2. 求 haystack 的前缀函数，我们无需保留这部分的前缀函数，只需要用一个变量记录上一个位置的前缀函数即可。当某个位置的前缀函数值等于 m 时，说明我们就找到了一次字符串 needle 在 haystack 中的出现（因为此时真前缀恰为 needle，真后缀为当前位置为结束位置的 haystack 的子串），我们计算出起始位置，将其返回即可。

```js
var strStr = function (haystack, needle) {
  const n = haystack.length,
    m = needle.length
  if (m == 0) return 0
  const pi = new Array(m).fill(0)
  // j = 0(因为处理 haystack 的第一个位置对应的前缀函数：：无需特别处理#)
  // 第一部分：求needle的前缀函数，保留起来
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

# 时间复杂度：`O(n+m)`我们至多需要遍历两字符串一次

# 空间复杂度：`O(m)`,m 是 needle 长度。我们只需要保存 needle 的前缀函数

# 复

- 时： O（n\*m），其中 n 是字符串 hayStack 长度，m 是字符串 needle 长度。最坏情况下我们需要将字符串 needle 与字符串 hayStack 的所有长度为 m 的子串均匹配一次
- 空：O（1）。我们只需要常数的空间保存若干变量
