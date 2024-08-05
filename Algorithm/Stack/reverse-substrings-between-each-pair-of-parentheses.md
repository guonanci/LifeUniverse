# medium

https://leetcode-cn.com/problems/reverse-substrings-between-each-pair-of-parentheses/ 1190. 反转每对括号间的子串
给出一个字符串 s（仅含有小写英文字母和括号）。

请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。

注意，您的结果中 不应 包含任何括号。

示例 1：

输入：s = "(abcd)"
输出："dcba"
示例 2：

输入：s = "(u(love)i)"
输出："iloveu"
示例 3：

输入：s = "(ed(et(oc))el)"
输出："leetcode"
示例 4：

输入：s = "a(bcdefghijkl(mno)p)q"
输出："apmnolkjihgfedcbq"

提示：

0 <= s.length <= 2000
s 中只有小写英文字母和括号
我们确保所有括号都是成对出现的
通过次数 36,818 提交次数 56,616
请问您在哪类招聘中遇到此题？
贡献者
LeetCode
Find all brackets in the string.
Does the order of the reverse matter ?
The order does not matter.

# 1Stack

要求按照从括号内到外的顺序进行处理。如字符串(u(love)i) 首先处理内层括号 变成 (uevoli) 然后处理外层括号，变成 iloveu

**对于括号序列相关的题目，通用的解法是使用递归或栈**。本题中我们将使用栈解决。

我们从左到右遍历该字符串,使用字符串 str 记录当前层所遍历到的小写英文字母。对于当前遍历的字符：

- 如果是左括号，将 str 插入到栈中，并将 str 置为空，进入下一层；
- 如果是右括号，这说明遍历完了当前层，需要将 str 反转，返回给上一层。具体地，将栈顶字符串弹出，然后将反转后的 str 拼接到栈顶字符串末尾，将结果
  - 赋值给 str
- 如果是小写英文字母，将其加到 str 末尾

注意到我们仅在遇到右括号时才进行字符串处理，这样可以保证我们按照从括号内到外的顺序处理字符串

```js
var reverseParentheses = function (s) {
  const stk = []
  let str = ''
  for (const ch of s) {
    if (ch == '(') {
      stk.push(str)
      str = ''
    } else if (ch == ')') {
      str = str.split('').reverse().join('')
      str = stk[stk.length - 1] + str
      stk.pop()
    } else {
      str += ch
    }
  }
  return str
}
```

## 复

- 时： n2 n 为字符串长度，栈的最大深度为 O（n），每一层处理时间复杂度主要为反转的时间复杂度，为 O(n),因此总时间复杂度为 n2
- 空：n，n 为字符串长度。对于任意时刻，字符串中的任意一个字符至多只被栈中的一个位置包含一次

# 2 预处理括号

我们可以将括号的反转理解为逆序地遍历括号

1. 第一步我们向右移动到左括号，此时我们跳跃到该左括号对应的右括号（进入了更深一层）
2. 第二到三步我们在括号内部向左移动（完成了更深层遍历）
3. 第四步我们向左移动到左括号，此时我们跳跃到该左括号对应的右括号（返回到上一层）
4. 第五步我们在括号外向右移动（继续遍历）

读者们可以自行尝试模拟两层至多层括号嵌套的移动方案，规律可以从当前的当层括号中总结出来

假设我们沿着某个方向移动，此时遇到了括号，那么我们只需要首先跳跃到该括号对应的另一个括号所在处，然后改变我们的移动方向即可。**这个方案同时适用于遍历时进入更深一层，以及完成当前层的遍历后返回到上一层的方案**

在实际代码中，我们需要预处理出每一个括号对应的另一个括号所在的位置，这一部分我们可以使用栈解决。当我们预处理完成后，即可在线性时间内完成遍历，遍历
的字符串顺序即为反转后的字符串

```js
var reverseParentheses = function (s) {
  const n = s.length
  const pair = new Array(n).fill(0)
  const stack = []
  for (let i = 0; i < n; i++) {
    if (s[i] == '(') {
      stack.push(i)
    } else if (s[i] == ')') {
      const j = stack.pop()
      pair[i] = j
      pair[j] = i
    }
  }

  const sb = []
  let i = 0,
    step = 1
  while (i < n) {
    if (s[i] == '(' || s[i] == ')') {
      i = pair[i]
      step = -step
    } else {
      sb.push(s[i])
    }
    i += step
  }
  return sb.join('')
}
```

## 复

- 时 n，n 为字符串长度，预处理出括号的对应关系的序列的时间复杂度为 n。遍历字符串的时间复杂度同样为 n
- 空 n，n 为字符串长度，栈大小不会超过 n，以及我们需要 n 的空间记录括号的对应关系
