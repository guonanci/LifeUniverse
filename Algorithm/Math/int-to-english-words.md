# difficult

https://leetcode-cn.com/problems/integer-to-english-words/solution/javascript-jian-dan-yi-dong-chu-li-shu-zi-zhuan-yi/
https://leetcode-cn.com/problems/integer-to-english-words/solution/zheng-shu-zhuan-huan-ying-wen-biao-shi-by-leetcode/

273. 整数转换英文表示
     将非负整数 num 转换为其对应的英文表示。

示例 1：

输入：num = 123
输出："One Hundred Twenty Three"
示例 2：

输入：num = 12345
输出："Twelve Thousand Three Hundred Forty Five"
示例 3：

输入：num = 1234567
输出："One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
示例 4：

输入：num = 1234567891
输出："One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"

提示：

0 <= num <= 231 - 1
通过次数 10,432 提交次数 34,331
请问您在哪类招聘中遇到此题？
贡献者
LeetCode
整数转罗马数字
中等
Did you see a pattern in dividing the number into chunk of words? For example, 123 and 123000.
Group the number by thousands (3 digits). You can write a helper function that takes a number less than 1000 and convert just that chunk to words.
There are many edge cases. What are some good test cases? Does your code work with input such as 0? Or 1000010? (middle chunk is zero and should not be printed out)

# 1 分治 divide-and-conquer

分解成一些列子问题。例如，对于数字 1234567890，我们将它从低位开始每 3 个分成一组，得到 1,234,567,890 他的英文表示：1 Billion 234 Million 567 Thousand 890
我们就将原问题分解成若干个三位整数转换为英文表示的问题
接下来，我们继续将三位整数分解 2 Hundred 34 一位整数和两位整数的英文表示。

```java
class Solution {
  public String one(int n) {
    switch(n){
      case 1: return 'One';
      case 2: return 'Two';
      case 3: return "Three";
            case 4: return "Four";
            case 5: return "Five";
            case 6: return "Six";
            case 7: return "Seven";
            case 8: return "Eight";
            case 9: return "Nine";
        }
        return "";
    }
  public String twoLessThan20(int num) {
        switch(num) {
            case 10: return "Ten";
            case 11: return "Eleven";
            case 12: return "Twelve";
            case 13: return "Thirteen";
            case 14: return "Fourteen";
            case 15: return "Fifteen";
            case 16: return "Sixteen";
            case 17: return "Seventeen";
            case 18: return "Eighteen";
            case 19: return "Nineteen";
        }
        return "";
    }

public String ten(int num) {
        switch(num) {
            case 2: return "Twenty";
            case 3: return "Thirty";
            case 4: return "Forty";
            case 5: return "Fifty";
            case 6: return "Sixty";
            case 7: return "Seventy";
            case 8: return "Eighty";
            case 9: return "Ninety";
        }
        return "";
    }
public String two(int n){
  if(n == 0) return '';
  else if(num<10) return one(num);
  else if(num<20) return twoLessThan20(num);
  else{
    int tenner=num/10;
    int rest=num-tenner*10;
    if(rest!=0) return ten(tenner)+' '+one(rest);
    else return ten(tenner);
  }
}
}
```
