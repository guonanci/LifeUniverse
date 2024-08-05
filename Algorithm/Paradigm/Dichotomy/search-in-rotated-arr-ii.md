# medium

https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/solution/sou-suo-xuan-zhuan-pai-xu-shu-zu-ii-by-l-0nmp/

```java
class Solution {
    public boolean search(int[] numbers, int target) {
int len=numbers.length;
    if(len == 0)return false;
    if(len==1)return numbers[0]==target;
    int l=0,r=len-1;
    while(l<=r){
      int mid=(l+r)/2;
      if(numbers[mid]==target)return true;
      if(numbers[l]==numbers[mid]&&numbers[mid]==numbers[r]){
        ++l;
        --r;
      }else if(numbers[l]<=numbers[mid]){
        if(numbers[l]<=target&&target<numbers[mid]){
          r=mid-1;
        }else{
          l=mid+1;
        }
      }else{
        if(numbers[mid]<target&&target<=numbers[len-1]){
          l=mid+1;
        }else{
          r=mid-1;
        }
      }
    }
    return false;
    }
}
```
