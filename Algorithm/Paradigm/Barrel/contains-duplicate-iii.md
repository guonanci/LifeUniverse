# medium

https://leetcode-cn.com/problems/contains-duplicate-iii/ 220. 存在重复元素 III
给你一个整数数组 nums 和两个整数 k 和 t 。请你判断是否存在 两个不同下标 i 和 j，使得 abs(nums[i] - nums[j]) <= t ，同时又满足 abs(i - j) <= k 。

如果存在则返回 true，不存在返回 false。

示例 1：

输入：nums = [1,2,3,1], k = 3, t = 0
输出：true
示例 2：

输入：nums = [1,0,1,1], k = 1, t = 2
输出：true
示例 3：

输入：nums = [1,5,9,1,5,9], k = 2, t = 3
输出：false

提示：

0 <= nums.length <= 2 \* 104
-231 <= nums[i] <= 231 - 1
0 <= k <= 104
0 <= t <= 231 - 1
通过次数 40,841 提交次数 150,679
请问您在哪类招聘中遇到此题？

# tip1

> Time complexity O(n log-k) - this will give an indication that sorting is involved for k elements.

# tip2

> Use already existing state to evaluate next state=Like, a set of k sorted numbers are only needed to be tracked. When we are processing the next number in array, then we can utilize the existing sorted state and it is not necessary to sort next overlapping set of k numbers

给你一个整数数组 nums 和两个整数 k 和 t 。请你判断是否存在 两个不同下标 i 和 j，使得 abs(nums[i] - nums[j]) <= t ，同时又满足 abs(i - j) <= k 。

如果存在则返回 true，不存在返回 false。

# method1：滑动窗口+有序集合

思路及算法：
对于序列中每一个元素 x 左侧的至多 k 个元素，如果这 k 个元素中存在一个元素落在区间【x-t，x+t】中，我们就找到了一对符合条件的元素。注意到对于两个相邻的元素，他们各自的左侧
k 个元素中有 k-1 个是重合的。于是我们可以使用滑动窗口思路，维护一个大小 k 的滑动窗口，每次遍历到元素 x 时，滑动窗口中包含元素 x 前面的最多 k 个元素，我们检查窗口中是否存在元素落在区间【x-t，x+t】中即可。
如果使用队列维护滑动窗口内元素，由于元素无序，我们只能对每个元素都遍历一次队列来检查是否有元素符合条件。如果数组长度为 n，则使用队列的时间复杂度为 O（nk），会超出时间限制。
因此我们希望能够找到一个数据结构维护滑动窗口内元素，该数据结构需要满足以下操作：

- 支持添加和删除指定元素的操作，否则我们无法维护滑动窗口
- 内部元素有序，支持二分查找操作，这样我们可以快速判断滑动窗口内元素是否存在元素满足条件，具体而言，对于元素 x，当我们希望判断滑动窗口中是否存在某个数 y 落在区间【x-t，x+t】中，只要判断滑动窗口中所有大于等于 x-t 的元素中的最小元素是否小于等于 x+t 即可

我们可以使用有序集合来支持这些操作

实现方面，我们在有序集合中查找大于等于 x-t 的最小元素 y，如果 y 存在，且 y 小于等于 x+t，我们就找到了一对符合条件的元素，完成检查后，我们将 x 插入到有序集合中，如果有序集合中元素数量超过 k，我们将有序集合中最早被插入的元素删除即可。

注意
如果当前有序集合中存在相同元素，那么程序直接返回 TRUE。因此本题中的有序集合无需处理相同元素情况。
为防止整型 int 溢出，我们既可以使用长整型 long，也可以对查找区间【x-t，x+t】进行限制，使其落在 int 范围内。

```cpp
class Solution {
public:
  bool containsNearbyAlmostDuplicate(vector<int>& nums, int k, int t) {
    int n=nums.size();
    set<int> rec;
    for (int i=0;i<n;i++){
      auto iter=rec.lower_bound(max(nums[i],INT_MIN+t)-t);
      if(iter!=rec.end()&&*iter<=min(nums[i],INT_MAX-t)+t) return true;
      rec.insert(nums[i]);
      if(i>=k) rec.erase(nums[i-k]);
    }
    return false;
  }
}
```

```java
class Solution {
  public boolean containsNearbyAlmostDuplicate(int[] nums,int k,int t) {
    int n=nums.length;
    TreeSet<Long> set=new TreeSet<Long>();
    for(int i=0;i<n;i++) {
      Long ceiling=set.ceiling((long) nums[i] -(long)t);
      if(ceiling!=null&&ceiling<=(long)nums[i]+(long)t) return true;
      set.add((long) nums[i]);
      if(i>=k) set.remove((long)nums[i-k]);
    }
    return false;
  }
}
```

## 方法二：桶

思路及算法
桶排序。按照元素大小分桶，维护一个滑动窗口内元素对应的元素
对于元素 x，其影响区间为[x-t,x+t]。于是我们可以设定桶大小为 t+1.如果两个元素同属一个桶，那么这两个元素必然符合条件。如果两个元素属于相邻桶，那么我们需要校验这两个元素是否差值不超过 t。如果两个元素既不属于同一个桶，也不属于相邻桶，那么这两个元素必然不符合条件。

具体地，我们遍历该序列，假设当前遍历到元素 x，俺么我们首先检查 x 所属于的桶是否已经存在元素，如果存在，那么我们就找到了一对符合条件的元素，否则我们继续检查两个相邻的桶内是否存在符合条件的元素

实现方面，我们将 int 范围的每一个整数 x 表示为 x=（t+1）\*a+b（0<=b<=t)的形式，这样 x 即归属于编号为 a 的桶。因为每一个桶内至多只会有一个元素，所以我们使用哈希表实现即可。

```js
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  const n = nums.length
  const mp = new Map()
  for (let i = 0; i < n; ++i) {
    const x = nums[i]
    const id = getID(x, t + 1)
    if (mp.has(id)) return true
    if (mp.has(id - 1) && Math.abs(x - mp.get(id - 1)) <= t) return true
    if (mp.has(id + 1) && Math.abs(x - mp.get(id + 1)) <= t) return true
    mp.set(id, x)
    if (i >= k) mp.delete(getID(nums[i - k], t + 1))
  }
  return false
}
const getID = (x, w) =>
  x < 0 ? Math.floor((x + 1) / w) - 1 : Math.floor(x / w)
```

复杂度分析：

- 时 O（n）。n 是给定数组长度，每个元素至多被插入哈希表和从哈希表中删除一次，每次操作时间复杂度均为 O（1）
- 空间复杂度：O（min（n，k）） 哈希表中只多包涵 min（n，k+1）个元素
