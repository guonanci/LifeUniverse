https://leetcode-cn.com/problems/merge-sorted-array/solution/he-bing-liang-ge-you-xu-shu-zu-by-leetco-rrb0/

📖 文字题解
方法一：直接合并后排序
算法

最直观的方法是先将数组 \textit{nums}\_2nums
2
​
放进数组 \textit{nums}\_1nums
1
​
的尾部，然后直接对整个数组进行排序。

C++JavaPython3GolangJavaScriptC

class Solution {
public:
void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
for (int i = 0; i != n; ++i) {
nums1[m + i] = nums2[i];
}
sort(nums1.begin(), nums1.end());
}
};
复杂度分析

时间复杂度：O((m+n)\log(m+n))O((m+n)log(m+n))。
排序序列长度为 m+nm+n，套用快速排序的时间复杂度即可，平均情况为 O((m+n)\log(m+n))O((m+n)log(m+n))。

空间复杂度：O(\log(m+n))O(log(m+n))。
排序序列长度为 m+nm+n，套用快速排序的空间复杂度即可，平均情况为 O(\log(m+n))O(log(m+n))。

方法二：双指针
算法

方法一没有利用数组 \textit{nums}\_1nums
1
​
与 \textit{nums}\_2nums
2
​
已经被排序的性质。为了利用这一性质，我们可以使用双指针方法。这一方法将两个数组看作队列，每次从两个数组头部取出比较小的数字放到结果中。如下面的动画所示：

我们为两个数组分别设置一个指针 p_1p
1
​
与 p_2p
2
​
来作为队列的头部指针。代码实现如下：

C++JavaPython3GolangJavaScriptC

class Solution {
public:
void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
int p1 = 0, p2 = 0;
int sorted[m + n];
int cur;
while (p1 < m || p2 < n) {
if (p1 == m) {
cur = nums2[p2++];
} else if (p2 == n) {
cur = nums1[p1++];
} else if (nums1[p1] < nums2[p2]) {
cur = nums1[p1++];
} else {
cur = nums2[p2++];
}
sorted[p1 + p2 - 1] = cur;
}
for (int i = 0; i != m + n; ++i) {
nums1[i] = sorted[i];
}
}
};
复杂度分析

时间复杂度：O(m+n)O(m+n)。
指针移动单调递增，最多移动 m+nm+n 次，因此时间复杂度为 O(m+n)O(m+n)。

空间复杂度：O(m+n)O(m+n)。
需要建立长度为 m+nm+n 的中间数组 \textit{sorted}sorted。

方法三：逆向双指针
算法

方法二中，之所以要使用临时变量，是因为如果直接合并到数组 \textit{nums}\_1nums
1
​
中，\textit{nums}\_1nums
1
​
中的元素可能会在取出之前被覆盖。那么如何直接避免覆盖 \textit{nums}\_1nums
1
​
中的元素呢？观察可知，\textit{nums}\_1nums
1
​
的后半部分是空的，可以直接覆盖而不会影响结果。因此可以指针设置为从后向前遍历，每次取两者之中的较大者放进 \textit{nums}\_1nums
1
​
的最后面。

严格来说，在此遍历过程中的任意一个时刻，\textit{nums}\_1nums
1
​
数组中有 m-p_1-1m−p
1
​
−1 个元素被放入 \textit{nums}\_1nums
1
​
的后半部，\textit{nums}\_2nums
2
​
数组中有 n-p_2-1n−p
2
​
−1 个元素被放入 \textit{nums}\_1nums
1
​
的后半部，而在指针 p_1p
1
​
的后面，\textit{nums}\_1nums
1
​
数组有 m+n-p_1-1m+n−p
1
​
−1 个位置。由于

m+n-p_1-1\geq m-p_1-1+n-p_2-1
m+n−p
1
​
−1≥m−p
1
​
−1+n−p
2
​
−1

等价于

p_2\geq -1
p
2
​
≥−1

永远成立，因此 p_1p
1
​
后面的位置永远足够容纳被插入的元素，不会产生 p_1p
1
​
的元素被覆盖的情况。

实现代码如下：

C++JavaPython3GolangJavaScriptC

class Solution {
public:
void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
int p1 = m - 1, p2 = n - 1;
int tail = m + n - 1;
int cur;
while (p1 >= 0 || p2 >= 0) {
if (p1 == -1) {
cur = nums2[p2--];
} else if (p2 == -1) {
cur = nums1[p1--];
} else if (nums1[p1] > nums2[p2]) {
cur = nums1[p1--];
} else {
cur = nums2[p2--];
}
nums1[tail--] = cur;
}
}
};
复杂度分析

时间复杂度：O(m+n)O(m+n)。
指针移动单调递减，最多移动 m+nm+n 次，因此时间复杂度为 O(m+n)O(m+n)。

空间复杂度：O(1)O(1)。
直接对数组 \textit{nums}\_1nums
1
​
原地修改，不需要额外空间。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/merge-sorted-array/solution/he-bing-liang-ge-you-xu-shu-zu-by-leetco-rrb0/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

88. 合并两个有序数组
    给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。

示例 1：

输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
示例 2：

输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]

提示：

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[i] <= 109
通过次数 303,889 提交次数 610,722
在真实的面试中遇到过这道题？
贡献者
LeetCode
合并两个有序链表
简单
有序数组的平方
简单
区间列表的交集
中等
You can easily solve this problem if you simply think about two elements at a time rather than two arrays. We know that each of the individual arrays is sorted. What we don't know is how they will intertwine. Can we take a local decision and arrive at an optimal solution?
If you simply consider one element each at a time from the two arrays and make a decision and proceed accordingly, you will arrive at the optimal solution.

```cpp
class Solution{
  public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n){
      int p1=m-1,p2=n-1;
      int tail=m+n-1;
      int cur;
      while(p1>=0||p2>=0){
        if(p1==-1){
          cur=nums2[p2--];
        }else if(p2==-1){
          cur=nums1[p1--];
        } else if(nums1[p1]>nums2[p2]){
          cur=nums1[p1--];
        }else{
          cur=nums2[p2--];
        }
        nums1[tail--]=cur;
      }
    }
}
```
