```js
快速排序的特点就是快，它主要采用“分而治之”的思想。递归地二分数组，在分的小组里面进行排序，最后链接这些已经排好序的小组，最终形成一个有序数组。具体的算法思想为：
1: 选一个基准点（一般是选数组中间的元素）
2: 新建两个空数组left和right，比基准点小的元素都放到left数组，大的放到right数组 （额外的存储空间）
3: 对left和right子数组递归地重复上面的2步，直到子数组的长度为1。且每一次都链接left数组+基准点+right数组
4: 最终得到一个有序数组
let quickSort = function (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivotI = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotI, 1)[0];
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }
    return quickSort(leftArr).concat([pivot], quickSort(rightArr));
};
// quickSort
//
// 分治法的基本思想是：将原问题分解为若干个规模更小但结构与原问题相似的子问题。递归地解这些子问题，然后将这些子问题的解组合为原问题的解。
//
// 1. 在数据集中,选择一个元素作为基准 pivot
// 2. 所有小于基准的元素,都移到基准左边;所有大于...这个操作成为分区操作,分区结束后,基准元素所处的位置就是最终排序后他的位置
// 3. 对基准左边和右边的两个子集, 不断重复第一步和第二步, 直到所有子集只剩下一个元素为止
//
// b = a + b, a = b - a, b = b - a
// a = a ^ b, b = b ^ a, a = a ^ b // 二进制异或运算符^
function quickSort(inputArr) {
  // 交换元素位置
  function swap(arr, a, b) {
    ;[arr[a], arr[b]] = [arr[b], arr[a]]
  }
  // 数组分区
  function partition(arr, left, right) {
    let storeIndex = left
    let pivot = arr[right] // 直接假设并选择最右边的元素值为基准元素值（初始 pivotI 不对）
    for (let i = left; i < right; i++) {
      if (arr[i] < pivot) {
        swap(arr, storeIndex, i)
        storeIndex++ // 交换位置后, storeIndex 自增1, 代表下一个可能要交换的位置
      }
    }
    swap(arr, right, storeIndex) // 将基准元素放置到最后的正确索引位置上（此时，已经得到正确的基准元素索引）
    return storeIndex
  }

  function sort(arr, left, right) {
    if (left > right) {
      return
    }
    let storeIndex = partition(arr, left, right)
    sort(arr, left, storeIndex - 1)
    sort(arr, storeIndex + 1, right)
  }

  sort(inputArr, 0, inputArr.length - 1)
  return inputArr
}
```

```js
// quickSort
// **分治法基本思想**是：将原问题分解为若干个规模更小但结构与原问题相似的子问题，然后将这些子问题的解组合成原问题的解。
// 1. 在数据集中，选择一个元素作为基准pivot
// 2. 分区操作：所有小于基准的元素，都移到基准左边，大于的都移到右边。分区结束后，基准元素所处位置都是最终排序后他的位置
// 3. **对基准左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下1个元素为止**
function quickSort(inputArr) {
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // ret storeI-num:最终一趟分区排序后基准元素所处位置
  function partition(arr, l, r) {
    let storeI = l;
    let pivot = arr[r]; // 直接选择最右边元素作为基准元素
    for (let i = l; i < r; i++) {
      if (arr[i] < pivot) {
        // ascend
        swap(arr, storeI, i);
        storeI++; // 交换位置后，storeI自增1，代表下一个可能要交换的位置
      }
    }
    swap(arr, r, storeI); // 将基准元素放到最后的正确位置上：因为一开始选择数组最右边元素作为基准元素，所以最后交换一下基准元素到最右边
    return storeI;
  }
  function sort(arr, l, r) {
    // 递归终止条件：（第3步：直到所有子集只剩下1个元素为止）
    if (l > r) return;
    let storeI = partition(arr, l, r);
    sort(arr, l, storeI - 1);
    sort(arr, storeI + 1, r);
  }
  sort(inputArr, 0, inputArr.length - 1);
  return inputArr;
}
```

# 快排和二分查找没有可比性

解决的是不同问题
https://bbs.csdn.net/topics/392451810

但是似乎都用上了分治思想？

快速排序随机取一个值, 二分查找取中间的值 ?
8 条回复
切换为时间正序
请发表友善的回复…
发表回复

pku_yw 2018-11-12
引用 7 楼 weixin_42151929 的回复：
快排以数组第一个元素作为标准，其他元素依次与之比较，划分为左右两部分。然后对这两部分递归处理。
最坏情况下(有序数组)时间复杂度 O(n2)，平均时间复杂度 O(nlogn ). 二分查找首先是有序的，以中间元素为标准比较，然后递归的在左右进行，时间复杂度 O(log(n))。

pku_yw 2018-11-12
快排以数组第一个元素作为标准，其他元素依次与之比较，划分为左右两部分。然后对这两部分递归处理。

Jasonzhiying 2018-11-06
二分查找要求是有序的

伟洪 winnie 2018-10-10
这两个没有可比性

快排什么情况下执行时间会增加（不稳定的情况）

# Bubble sort

稳定：如果 a 原本在 b 前面，而 a=b，排序之后 a 仍然在 b 的前面。
不稳定：如果 a 原本在 b 的前面，而 a=b，排序之后 a 可能会出现在 b 的后面。

https://zhuanlan.zhihu.com/p/42541704

Bubble sort

https://www.runoob.com/w3cnote/bubble-sort.html

https://zhuanlan.zhihu.com/p/42541704
https://zhuanlan.zhihu.com/p/137220037
