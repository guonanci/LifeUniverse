# Difficulty：medium

evaluate-reverse-polish-notation

根据逆波兰表示法，求表达式的值。有效的算符包括`+`,`-`,`*`,`/`.每个运算对象可以是整数，也可以是另一个逆波兰表达式。

- 整数除法只保留整数部分
- 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况

输入：tokens = ["2","1","+","3","*"]
输出：9
解释：该算式转化为常见的中缀算术表达式为：((2 + 1) \* 3) = 9

示例  2：
输入：tokens = ["4","13","5","/","+"]
输出：6
解释：该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6

示例  3：
输入：tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
输出：22
解释：
该算式转化为常见的中缀算术表达式为：
((10 _ (6 / ((9 + 3) _ -11))) + 17) + 5
= ((10 _ (6 / (12 _ -11))) + 17) + 5
= ((10 _ (6 / -132)) + 17) + 5
= ((10 _ 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22

提示：

1 <= tokens.length <= 104
tokens[i] 要么是一个算符（"+"、"-"、"\*" 或 "/"），要么是一个在范围 [-200, 200] 内的整数

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/evaluate-reverse-polish-notation
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

逆波兰表达式主要有以下两个优点：

去掉括号后表达式无歧义，上式即便写成 1 2 + 3 4 + \* 也可以依据次序计算出正确结果。
适合用栈操作运算：遇到数字则入栈；遇到算符则取出栈顶两个数字进行计算，并将结果压入栈中。

# 方法二：数组模拟栈

方法一使用栈存储操作数。也可以使用一个数组模拟栈操作。

如果使用数组代替栈，则需要预先定义数组的长度。对于长度为 nn 的逆波兰表达式，显然栈内元素个数不会超过 nn，但是将数组的长度定义为 nn 仍然超过了栈内元素个数的上界。那么，栈内元素最多可能有多少个？

对于一个有效的逆波兰表达式，其长度 nn 一定是奇数，且操作数的个数一定比运算符的个数多 11 个，即包含 \frac{n+1}{2}
2
n+1
​
个操作数和 \frac{n-1}{2}
2
n−1
​
个运算符。考虑遇到操作数和运算符时，栈内元素个数分别会如何变化：

如果遇到操作数，则将操作数入栈，因此栈内元素增加 11 个；

如果遇到运算符，则将两个操作数出栈，然后将一个新操作数入栈，因此栈内元素先减少 22 个再增加 11 个，结果是栈内元素减少 11 个。

由此可以得到操作数和运算符与栈内元素个数变化的关系：遇到操作数时，栈内元素增加 11 个；遇到运算符时，栈内元素减少 11 个。

最坏情况下，\frac{n+1}{2}
2
n+1
​
个操作数都在表达式的前面，\frac{n-1}{2}
2
n−1
​
个运算符都在表达式的后面，此时栈内元素最多为 \frac{n+1}{2}
2
n+1
​
个。在其余情况下，栈内元素总是少于 \frac{n+1}{2}
2
n+1
​
个。因此，在任何情况下，栈内元素最多可能有 \frac{n+1}{2}
2
n+1
​
个，将数组的长度定义为 \frac{n+1}{2}
2
n+1
​
即可。

具体实现方面，创建数组 \textit{stack}stack 模拟栈，数组下标 00 的位置对应栈底，定义 \textit{index}index 表示栈顶元素的下标位置，初始时栈为空，\textit{index}=-1index=−1。当遇到操作数和运算符时，进行如下操作：

如果遇到操作数，则将 \textit{index}index 的值加 11，然后将操作数赋给 \textit{stack}[\textit{index}]stack[index]；

如果遇到运算符，则将 \textit{index}index 的值减 11，此时 \textit{stack}[\textit{index}]stack[index] 和 \textit{stack}[\textit{index}+1]stack[index+1] 的元素分别是左操作数和右操作数，使用运算符对两个操作数进行运算，将运算得到的新操作数赋给 \textit{stack}[\textit{index}]stack[index]。

整个逆波兰表达式遍历完毕之后，栈内只有一个元素，因此 \textit{index}=0index=0，此时 \textit{stack}[\textit{index}]stack[index] 即为逆波兰表达式的值。

# 时间复杂度：O(n)

# 空间复杂度：O(n)。需要创建长度为(n+1)/2 的数组模拟栈操作。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/solution/ni-bo-lan-biao-da-shi-qiu-zhi-by-leetcod-wue9/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```js
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const tokensLen = tokens.length
  const stack = new Array(Math.floor(n + 1) / 2).fill(0)
  let idx = -1
  for (i = 0; i < n; i++) {
    const token = tokens[i]
    if (token === '+') {
      idx--
      stack[idx] += stack[idx + 1]
    } else if (token === '-') {
      idx--
      stack[idx] -= stack[idx + 1]
    } else if (token === '*') {
      idx--
      stack[idx] *= stack[idx + 1]
    } else if (token === '/') {
      idx--
      stack[idx] =
        stack[idx] / stack[idx + 1] > 0
          ? Math.floor(stack[idx] / stack[idx + 1])
          : Math.ceil(stack[idx] / stack[idx + 1])
    } else {
      idx++
      stack[idx] = parseInt(token)
    }
  }
  return stack[idx]
}
```

# 方法一：栈

逆波兰表达式严格遵循「从左到右」的运算。计算逆波兰表达式的值时，使用一个栈存储操作数，从左到右遍历逆波兰表达式，进行如下操作：

如果遇到操作数，则将操作数入栈；

如果遇到运算符，则将两个操作数出栈，其中先出栈的是右操作数，后出栈的是左操作数，使用运算符对两个操作数进行运算，将运算得到的新操作数入栈。

整个逆波兰表达式遍历完毕之后，栈内只有一个元素，该元素即为逆波兰表达式的值。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/solution/ni-bo-lan-biao-da-shi-qiu-zhi-by-leetcod-wue9/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```js
var evalRPN = function (tokens) {
  const stack = []
  const n = tokens.length
  for (let i = 0; i < n; i++) {
    const token = tokens[i]
    if (isNumber(token)) {
      stack.push(parseInt(token))
    } else {
      const num2 = stack.pop()
      const num1 = stack.pop()
      if (token === '+') {
        stack.push(num1 + num2)
      } else if (token === '-') {
        stack.push(num1 - num2)
      } else if (token === '*') {
        stack.push(num1 * num2)
      } else if (token === '/') {
        stack.push(
          num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2)
        )
      }
    }
  }
  return stack.pop()
}

const isNumber = (token) => {
  return !('+' === token || '-' === token || '*' === token || '/' === token)
}
```
