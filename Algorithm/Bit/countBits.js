// https://leetcode-cn.com/problems/counting-bits/solution/bi-te-wei-ji-shu-by-leetcode-solution-0t1i/
// https://leetcode-cn.com/problems/counting-bits/
// https://www.google.com/search?q=%E4%BD%8D%E8%BF%90%E7%AE%97%E6%8A%80%E5%B7%A7&oq=%E4%BD%8D%E8%BF%90%E7%AE%97&aqs=chrome.3.69i57j0l9.13478j0j1&sourceid=chrome&ie=UTF-8
// https://www.google.com/search?safe=strict&sxsrf=ALeKk00Em2r_tr-MHoEsltYDMrf5sTGjNg%3A1614907502819&ei=bohBYM6-MdD7wAP_76CYDg&q=%E4%BD%8D%E8%BF%90%E7%AE%97%E7%AE%97%E6%B3%95&oq=%E4%BD%8D%E8%BF%90%E7%AE%97+%E7%AE%97%E6%B3%95&gs_lcp=Cgdnd3Mtd2l6EAEYADIECAAQDDIECAAQHjoFCAAQsAM6AggAOgQIABBDOgoIABAMEAUQBBAeUKwVWJwtYN6JBmgBcAB4AIABgwOIAaEWkgEHMC41LjEuNZgBAKABAaoBB2d3cy13aXrIAQHAAQE&sclient=gws-wiz
// 给定一个非负整数num。 对于0 <= i <= num范围中的每个数字i， 计算其二进制中的1的数目并将他们作为数组返回
// 输入：2
// 输出：[0,1,1]
// 进阶：
// 给出时间复杂度为O(n * sizeof(integer))的解答非常容易。但你可以在线性时间O(n)内用一趟扫描做到吗？
// 要求算法的空间复杂度为O(n)
// 你能进一步完善解法吗？要求在C++或其他任何语言中不使用任何内置函数（如C++中的__builtin_popcount)来执行此操作

// 前言：
// 这道题需要计算从0到num的每个数的二进制表示中的1的数目。最直观的方法是对每个数直接计算二进制表示中的1的数目，时间复杂度较高。也可以使用动态规划
// 的方法，时间复杂度较高。也可以使用动态规划的方法，时间复杂度较低。为了表述简洁，下文用【一比特数】表示二进制中的1的数目。
// 方法一：直接计算
// 每个int型的数都可以用32位二进制表示，只要遍历即可。
// 利用位运算的技巧，可以在一定程度上提升计算速度。按位与运算（&）的一个性质是：对于任意整数x，令x=x*(x-1),该运算将x的二进制表示的最后一个1变成0
// 。因此，对x重复该操作，直到x变成0，则操作次数即为x的【一比特数】。另外，部分编程语言有相应的内置函数，日路的Java的Integer.bitCount，C++的
// __builtin_popcount，Go的bits.OnesCount。需要注意，使用编程语言的内置函数时，不适用本方法的时间复杂度分析。
var countBits = function (num) {
  const bits = new Array(num + 1).fill(0)
  for (let i = 0; i <= num; i++) {
    bits[i] = countOnes(i)
  }
  return bits
}
const countOnes = (x) => {
  let ones = 0
  while (x > 0) {
    x &= (x - 1)
    ones++
  }
  return ones
}
复杂度分析：
时间复杂度： O(k * num)， 其中k是int型的二进制位数， k = 32. 需要对从0到num的每个数使用O（ k） 的时间计算【 一比特数】。
空间复杂度： O(1)。 返回的数组

方法二： 动态规划--最高有效位(实际上运行时间比最低有效位方法短， 尽管看起来复杂些， 但是遍历中取到了bits[highBit - i] 这个缓存， 用到了缓存和更新标志位 - 最高有效位变量的思想)
方法一需要对每个数遍历其二进制表示的每一位。 可以换一个思路， 当计算i的【 一比特数】 时， 如果存在0 <= j <= i， j的【 一比特数】 已知， 且i和j相比， i的二进
制只多了一个1， 则可以快速得到i的一比特数。 bits[i] = bits[i] + 1.
如果可以知道最大的正整数y， 使得y <= x且y是2的整数次幂， 则y的二进制表示中只有最高位是1， 其余都是0， 此时称y为x的最高有效位。 令z = x - y， 显然0 <= z < x，
则bits[x] = bits[z] + 1. 怎么判断一个正整数是不是2的整数次幂呢， 可以利用方法一中提到的按位与运算的性质。 如果正整数y是2的整数次幂， 则y的二进制表示
中只有最高位是1， 其余都是0， 因此y & (y - 1) == 0. 0 的【 一比特数】 是0.使用highBit表示当前的最高有效位， 遍历从1到num的每个正整数i， 进行如下操作


如果i & (i - 1) == 0, 则令highBit = i， 更新当前的最高有效位。
i比i - highBit的一比特数多1， 因为从小到大遍历每个数， 因此遍历到1时， i - highBit的一比特数已知

var countBits = function (num) {
  const bits = new Array(num + 1).fill(0)
  let highBit = 0
  for (let i = 1; i < num; i++) {
    if ((i & (i - 1)) == 0) highBit = i
    bits[i] = bits[i - highBit] + 1
  }
  return bits
}
// 复杂度分析：
// 时间复杂度： O(num)。 对于每个数， 只需要O(1) 的时间计算【 一比特数】
// 空间复杂度： O（ 1）， 为常数。

// 方法三： 动态规划 - 最低有效位(I like it best)
// 方法二需要实时切换维护最高有效位，当遍历到的数是2的整数次幂时，需要更新最高有效位。如果换一个思路，可以使用最低有效位计算一比特数

// 对于正整数x，将其二进制表示右移一位，等价于将其二进制表示的最低位去掉，得到的数是【x / 2】。如果bits[x / 2]已知，则可以得到bits[x]:
// 如果x是偶数，则bits[x] = bits[x / 2]; 如果x是奇数，则bits[x] = bits[x / 2] + 1

// 上述两种情况合并成：bits[x]等于bits【x / 2]加上x除以2的余数。
// x/2可以通过x>>1得到，x除以2的余数可以通过x&1得到，=》bits[x]=bits[x>>1]+(x&1)
var countBits = function (num) {
  const bits = new Array(num + 1).fill(0)
  for (let i = 1; i <= num; i++) bits[i] = bits[i >> 1] + (i & 1)
  return bits
}
