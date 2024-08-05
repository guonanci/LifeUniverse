# difficult

https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/

```cpp
class Solution {
public:
  int findMin(vector<int>& numbers) {
    int low=0;
    int high=numbers.size()-1;
    while(low<high){
      int pivot=low+(high-low)/2;
      if(numbers[pivot]<numbers[high]){
        high=pivot; // not add 1 is the key
      }else if(numbers[pivot]>numbers[high]){
        low=pivot+1; // +1 is the key
      }else{
        high-=1;
      }
    }
    return numbers[low];
  }
}
```
