# medium

https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/

80. 删除有序数组中的重复项 II
    给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 最多出现两次 ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

```cpp
class Solution{
  public:
    int removeDuplicates(vector<int>& numbers){
      int len=numbers.size();
      if (len<=2)return len;
      int slow=2,fast=2;
      while(fast < len){
        if(numbers[slow-2]!=numbers[fast]){
          numbers[slow]=numbers[fast];
          ++slow;
        }
        ++fast;
      }
      return slow;
    }
}
```

$$
$$
