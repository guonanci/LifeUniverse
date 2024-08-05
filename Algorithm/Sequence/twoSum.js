// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

// 你可以按任意顺序返回答案。



// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/two-sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
// 用hashMap存储遍历过的元素和对应的索引
// 每遍历一个元素，看看hashMap中是否存在满足要求的目标数字
// 所有事情在一次遍历中完成（用了空间换时间）
const twoSum = (numbers, sum) => {
  const numbersToAdd = {} // 存储过的数字，和对应的索引

  for (let i = 0; i < numbers.length; i++) {
    const num1 = numbers[i]
    const num2 = sum - num1
    const num2Idx = numbersToAdd[num2]
    if (num2Idx !== undefined) { // 在numbersToAdd中获取num2的索引
      return [num2Idx, i] // 如果存在，直接返回[num2的索引，num1的索引]
    } else { // 如果不存在，说明之前没出现过num2
      numbersToAdd[num1] = i // 存入num1和对应的索引
    }
  }
}
