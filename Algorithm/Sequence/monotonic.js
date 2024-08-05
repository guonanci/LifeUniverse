// 如果数组是单调递增或单调递减的，那么它是单调的。

// 如果对于所有 i <= j，A[i] <= A[j]，那么数组 A 是单调递增的。 如果对于所有 i <= j，A[i]> = A[j]，那么数组 A 是单调递减的。

// 当给定的数组 A 是单调数组时返回 true，否则返回 false。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/monotonic-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
// 两次遍历 时间复杂度：O（n），n是数组的长度。空间复杂度：O（1）
var isMonotonic = function (A) {
  return isSorted(A) || isSorted(A.reverse())
}

function isSorted(arr) {
  return arr.slice(1).every((item, i) => arr[i] <= item)
}
// 一次遍历
// 遍历数组A，若既遇到了A(i1) > A(i1+1)又遇到了A(i2) < A(i2+1)，那么则说明A既不是单调递增的，也不是单调递减的。
var isMonotonic = function (A) {
  let inc = true,
    dec = true
  const n = A.length
  for (let i = 0; i < n - 1; ++i) {
    if (A[i] > A[i + 1]) {
      inc = false
    }
    if (A[i] < A[i + 1]) {
      dec = false
    }
  }
  return inc || dec
}
