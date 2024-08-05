> 给定一个正整数 n，生成一个包含 1 到 n 的平方的所有元素，且元素按顺时针螺旋排列的 n\*n 正方形矩阵 matrix

> 输入 n = 3
> 输出 [[1,2,3],[8,9,4],[7,6,5]]

```js
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = new Array(n).fill(0).map((v) => new Array(n).fill(0))
  matrix[0][0] = 1
  let left = 0,
    right = n - 1,
    top = 0,
    bottom = n - 1
  while (left <= right && top <= bottom) {
    for (let col = left; col <= right; col++)
      matrix[top][col] = matrix[top][left] + col
    for (let row = top + 1; row <= bottom; row++)
      matrix[row][right] = matrix[top][right] + row
    if (left < right && top < bottom) {
      for (let col = right - 1; col > left; col--)
        matrix[bottom][col] = matrix[bottom][right] + (right - col)
      for (let row = bottom; row > top; row--)
        matrix[row][left] = matrix[bottom][left] + (bottom - row)
    }

    ;[left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1]
  }
  return matrix
}
```

```js
var generateMatrix = function (n) {
  const matrix = new Array(n).fill(0).map((v) => new Array(n).fill(0))
  let num = 1 // key
  let left = 0,
    right = n - 1,
    top = 0,
    bottom = n - 1
  while (left <= right && top <= bottom) {
    for (let col = left; col <= right; col++) {
      matrix[top][col] = num
      num++
    }
    for (let row = top + 1; row <= bottom; row++) {
      matrix[row][right] = num
      num++
    }
    if (left < right && top < bottom) {
      for (let col = right - 1; col > left; col--) {
        matrix[bottom][col] = num
        num++
      }
      for (let row = bottom; row > top; row--) {
        matrix[row][left] = num
        num++
      }
    }
    ;[left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1]
  }
  return matrix
}
```

4\*n-4
1 2 3 4 5
16 17 18 19 6
15 24 25 20 7
14 23 22 21 8
13 12 11 10 9

1 2 3 4
12 13 14 5
11 16 15 6
10 9 8 7

1 2 3
8 9 4
7 6 5
