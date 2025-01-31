<https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/>
给你一个 *非严格递增排列* 的数组 nums ，请你 *原地 删除重复出现的元素*，使每个元素只出现一次 ，返回删除后数组的新长度。元素的相对顺序应保持一致 。然后返回 nums 中唯一元素的个数。

考虑 nums 的唯一元素的数量为 k ，你需要做以下事确保你的题解被通过：

更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums 的其余元素和 nums 的大小不重要。
返回 k 。

*双指针*
*用一个读指针，一个写指针遍历数组*

遇到重复元素时，写指针保持不动，读指针继续前移

遇到不同元素时，写指针就前移一步，写入那个元素

读、写指针对应的数值一样时，写指针原地不动，读指针继续往前走；

当读、写指针对应的数值不同时，写指针前进一步，将读指针的内容写入写指针新的位置；
读指针继续往前走，重复上面的步骤；最后返回写指针位置+1，就是新数组的长度了

复杂度分析
时间复杂度：O(N), N为数组长度
空间复杂度：O(1)

```js

var removeDuplicates = function (numbers) {
  let p1 = 0,
    p2 = 0
  while (p2 < numbers.length) {
    if (numbers[p1] !== numbers[p2]) {
      p1++
      numbers[p1] = numbers[p2]
    }
    p2++
  }
  return p1 + 1
}
```
