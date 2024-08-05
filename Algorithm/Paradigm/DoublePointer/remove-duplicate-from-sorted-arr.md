# easy

https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/solution/shan-chu-pai-xu-shu-zu-zhong-de-zhong-fu-tudo/ 26. 删除有序数组中的重复项
给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

说明:

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
print(nums[i]);
}

示例 1：

输入：nums = [1,1,2]
输出：2, nums = [1,2]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
示例 2：

输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。

提示：

0 <= nums.length <= 3 \* 104
-104 <= nums[i] <= 104
nums 已按升序排列

通过次数 608,848 提交次数 1,141,319

# method1:双指针

该道题要求是：对给定有序数组 nums 删除冲父元素，在删除后，每个元素只出现一次，并返回新长度。上述操作必须通过原地修改数组的方法，使用 O(1)空间复杂度完成。
由于给定数组 nums 有序，因此对任意 i<j,如果 nums[i]<nums[j],则对任意 i<=k<=j，必有 nums[i]=nums[k]=nums[j]。即相等的元素在数组中的下标一定是连续的。利用数组有序的特点，可以通过双指针方法删除重复元素。
如果数组长度为 0.。
如果 nums 长度大于 0，nums【0】保持原状，从 1 开始删除冲父元素

**定义两个指针 fast 和 slow**，快指针表示遍历数组到达的下标位置，满指针表示下一个不同元素要填入的下标位置，出史诗两个指针都指向 1.
nums 长度为 n.fast：1=》n-1.对于每个位置，如果 nums[fast]!=nums[fast-1]，将 nums【fast】的值复制到 nums【slow】，slow++，指向下一个位置

遍历结束后，nums【0】到 nums【slow-1】的每个元素都不相同且包含原数组中的每个不同元素，因此新长度为 slow，返回 slow。

```java
class Solution {
  public int removeDuplicates(int[] nums) {
    int n=nums.length;
    if(n==0)return 0;
    int fast=1,slow=1;
    while(fast<n){
      if(nums[fast]!=nums[fast-1]){
        nums[slow]=nums[fast];
        ++slow;
      }
      ++fast;
    }
    return slow;
  }
}
```

# 复杂度分析

- 时：O（n），快慢指针最多各移动 n 次。
- 空：O（1）。只需要常数的额外空间
