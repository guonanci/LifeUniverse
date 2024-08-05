# easy

https://leetcode-cn.com/problems/remove-element/ 27. 移除元素
给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

说明:

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

// nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
int len = removeElement(nums, val);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
print(nums[i]);
}

示例 1：

输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
示例 2：

输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3]
解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。

提示：

0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100
通过次数 342,952 提交次数 579,224

# 1 双指针

由于题目要求删除数组中等于 \textit{val}val 的元素，因此输出数组的长度一定小于等于输入数组的长度，我们可以把输出的数组直接写在输入数组上。可以使用双指针：右指针 \textit{right}right 指向当前将要处理的元素，左指针 \textit{left}left 指向下一个将要赋值的位置。

如果右指针指向的元素不等于 \textit{val}val，它一定是输出数组的一个元素，我们就将右指针指向的元素复制到左指针位置，然后将左右指针同时右移；

如果右指针指向的元素等于 \textit{val}val，它不能在输出数组里，此时左指针不动，右指针右移一位。
整个过程保持不变的性质是：区间 [0,\textit{left})[0,left) 中的元素都不等于 \textit{val}val。当左右指针遍历完输入数组以后，\textit{left}left 的值就是输出数组的长度。

这样的算法在最坏情况下（输入数组中没有元素等于 \textit{val}val），左右指针各遍历了数组一次。

```cpp
class Solution {
public:
  int removeElement(<int>& nums, int val) {
    int n=nums.size();
    int left=0;
    for(int right=0;right<0;right++){
      if(nums[right]!=val){
        nums[left]=nums[right];
        left++;
      }
    }
    return left;
  }
}
```

复杂度分析

时间复杂度：O(n)O(n)，其中 nn 为序列的长度。我们只需要遍历该序列至多两次。

空间复杂度：O(1)O(1)。我们只需要常数的空间保存若干变量。

方法二：双指针优化
思路

如果要移除的元素恰好在数组的开头，例如序列 [1,2,3,4,5][1,2,3,4,5]，当 \textit{val}val 为 11 时，我们需要把每一个元素都左移一位。注意到题目中说：「元素的顺序可以改变」。实际上我们可以直接将最后一个元素 55 移动到序列开头，取代元素 11，得到序列 [5,2,3,4][5,2,3,4]，同样满足题目要求。这个优化在序列中 \textit{val}val 元素的数量较少时非常有效。

实现方面，我们依然使用双指针，两个指针初始时分别位于数组的首尾，向中间移动遍历该序列。

算法

如果左指针 \textit{left}left 指向的元素等于 \textit{val}val，此时将右指针 \textit{right}right 指向的元素复制到左指针 \textit{left}left 的位置，然后右指针 \textit{right}right 左移一位。如果赋值过来的元素恰好也等于 \textit{val}val，可以继续把右指针 \textit{right}right 指向的元素的值赋值过来（左指针 \textit{left}left 指向的等于 \textit{val}val 的元素的位置继续被覆盖），直到左指针指向的元素的值不等于 \textit{val}val 为止。

当左指针 \textit{left}left 和右指针 \textit{right}right 重合的时候，左右指针遍历完数组中所有的元素。

这样的方法两个指针在最坏的情况下合起来只遍历了数组一次。与方法一不同的是，方法二避免了需要保留的元素的重复赋值操作。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/remove-element/solution/yi-chu-yuan-su-by-leetcode-solution-svxi/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```cpp
class Solution {
public:
  int removeElement(vector<int>& nums, int val) {
        int left = 0, right = nums.size();
        while (left < right) {
            if (nums[left] == val) {
                nums[left] = nums[right - 1];
                right--;
            } else {
                left++;
            }
        }
        return left;
    }
}
```

复杂度分析

时间复杂度：O(n)O(n)，其中 nn 为序列的长度。我们只需要遍历该序列至多一次。

空间复杂度：O(1)O(1)。我们只需要常数的空间保存若干变量。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/remove-element/solution/yi-chu-yuan-su-by-leetcode-solution-svxi/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
