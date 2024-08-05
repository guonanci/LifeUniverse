# medium

https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
可视化（比如说用直角坐标轴画折线图找思路）
复杂度分析

时间复杂度：时间复杂度为 O(\log n)O(logn)，其中 nn 是数组 \textit{nums}nums 的长度。在二分查找的过程中，每一步会忽略一半的区间，因此时间复杂度为 O(\log n)O(logn)。

空间复杂度：O(1)O(1)。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/solution/xun-zhao-xuan-zhuan-pai-xu-shu-zu-zhong-5irwp/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

方法一：二分查找
思路与算法

一个不包含重复元素的升序数组在经过旋转之后，可以得到下面可视化的折线图：

其中横轴表示数组元素的下标，纵轴表示数组元素的值。图中标出了最小值的位置，是我们需要查找的目标。

我们考虑数组中的最后一个元素 xx：在最小值右侧的元素（不包括最后一个元素本身），它们的值一定都严格小于 xx；而在最小值左侧的元素，它们的值一定都严格大于 xx。因此，我们可以根据这一条性质，通过二分查找的方法找出最小值。

在二分查找的每一步中，左边界为 \it lowlow，右边界为 \it highhigh，区间的中点为 \it pivotpivot，最小值就在该区间内。我们将中轴元素 \textit{nums}[\textit{pivot}]nums[pivot] 与右边界元素 \textit{nums}[\textit{high}]nums[high] 进行比较，可能会有以下的三种情况：

第一种情况是 \textit{nums}[\textit{pivot}] < \textit{nums}[\textit{high}]nums[pivot]<nums[high]。如下图所示，这说明 \textit{nums}[\textit{pivot}]nums[pivot] 是最小值右侧的元素，因此我们可以忽略二分查找区间的右半部分。

第二种情况是 \textit{nums}[\textit{pivot}] > \textit{nums}[\textit{high}]nums[pivot]>nums[high]。如下图所示，这说明 \textit{nums}[\textit{pivot}]nums[pivot] 是最小值左侧的元素，因此我们可以忽略二分查找区间的左半部分。

由于数组不包含重复元素，并且只要当前的区间长度不为 11，\it pivotpivot 就不会与 \it highhigh 重合；而如果当前的区间长度为 11，这说明我们已经可以结束二分查找了。因此不会存在 \textit{nums}[\textit{pivot}] = \textit{nums}[\textit{high}]nums[pivot]=nums[high] 的情况。

当二分查找结束时，我们就得到了最小值所在的位置。

C++JavaPython3CGolangJavaScript

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/solution/xun-zhao-xuan-zhuan-pai-xu-shu-zu-zhong-5irwp/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```cpp
class Solution {
public:
  int findMin(vector<int>& numbers) {
    int l=0;
    int r=numbers.size()-1;
    while(l<r){
      int pivot=l+(r-l)/2;
      if(numbers[pivot]<numbers[r]){
        r=pivot;
        }else{
          l=pivot+1;}
    }
    return numbers[l];
  }
}
```
