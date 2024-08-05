https://leetcode-cn.com/problems/search-in-rotated-sorted-array/solution/sou-suo-xuan-zhuan-pai-xu-shu-zu-by-leetcode-solut/

如果 [l, mid - 1] 是有序数组，且 target 的大小满足 [\textit{nums}[l],\textit{nums}[mid])[nums[l],nums[mid])，则我们应该将搜索范围缩小至 [l, mid - 1]，否则在 [mid + 1, r] 中寻找。
如果 [mid, r] 是有序数组，且 target 的大小满足 (\textit{nums}[mid+1],\textit{nums}[r]](nums[mid+1],nums[r]]，则我们应该将搜索范围缩小至 [mid + 1, r]，否则在 [l, mid - 1] 中寻找。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/search-in-rotated-sorted-array/solution/sou-suo-xuan-zhuan-pai-xu-shu-zu-by-leetcode-solut/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```cpp
class Solution {
public:
  int search(vector<int>& numbers, int target) {
    int n=(int)numbers.size();
    if(!n)return -1;
    if(n==1)return numbers[0]==target?0:-1
    int l=0;r=n-1;
    while(l<=r){
      int mid=(l+r)/2;
      if(numbers[mid]==target)return mid;
      if(numbers[0]<=numbers[mid]){
        if(numbers[0]<=target&&target<numbers[mid]){
          r=mid-1;
        }else{
          l=mid+1;
        }
      }else{
        if(numbers[mid]<target&&target<=numbers[n-1]){
          l=mid+1
        }else{
          r=mid-1
        }
      }
    }
    return -1;
  }
}
```
