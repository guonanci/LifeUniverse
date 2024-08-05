给你一个 m 行 n 列的矩阵 matrix，请按照顺时针螺旋排序，返回矩阵中所有的元素

```js
// input:
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
][
  // output:
  (1, 2, 3, 6, 9, 8, 7, 4, 5, 6)
]
```

- `m==matrix.length`
- `n==matrix[i].length`
- `1<=m,n<=10`
- `-100<=matrix[i][j]<=100`

# method 1: simulation

可以模拟螺旋矩阵的路径。初始位置是矩阵的左上角，初始方向是向右，当路径超出界限或者进入之前访问过的位置时，顺时针旋转，进入下一个方向。

判断路径是否进入之前访问过的位置需要使用一个与输入矩阵大小相同的辅助矩阵 \textit{visited}visited，其中的每个元素表示该位置是否被访问过。当一个元素被访问时，将 \textit{visited}visited 中的对应位置的元素设为已访问。

如何判断路径是否结束？由于矩阵中的每个元素都被访问一次，因此路径的长度即为矩阵中的元素数量，当路径的长度达到矩阵中的元素数量时即为完整路径，将该路径返回。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/spiral-matrix/solution/luo-xuan-ju-zhen-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
复杂度分析

时间复杂度：O(mn)O(mn)，其中 mm 和 nn 分别是输入矩阵的行数和列数。矩阵中的每个元素都要被访问一次。

空间复杂度：O(mn)O(mn)。需要创建一个大小为 m \times nm×n 的矩阵 \textit{visited}visited 记录每个位置是否被访问过。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/spiral-matrix/solution/luo-xuan-ju-zhen-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```js
var spiralOrder = function(matrix){
  if(matrix.length}}!matrix[0].length)return[]
  const rows = matrix.length,cols=matrix[0].length
  const visited=new Array(rows).fill(0).map(()=>new Array(cols).fill(false))
  const total=rows*cols
  const order=new Array(total).fill(0)

  let directionIdx=0,row=0,col=0
  const directions=[[0,1],[1,0],[0,-1],[-1,0]]
  for(let i=0;i<total;i++){
    order[i]=matrix[row][col]
    visited[row][col]=true
    const nextRow=row+directions[directionIdx][0],nextCol=col+directions[directionIdx][1]
    if(!(0<=nextRow&&nextRow<rows&&0<=nextCol&&nextCol<cols&&!(visited[nextRow][nextColumn]))){
      directionIdx=(directionIdx+1)%4
    }
    row+=directions[directionIdx][0]
    col+=directions[directionIdx][1]
  }
  return order
}
```

# method 2:按层模拟

方法二：按层模拟
可以将矩阵看成若干层，首先输出最外层的元素，其次输出次外层的元素，直到输出最内层的元素。

定义矩阵的第 kk 层是到最近边界距离为 kk 的所有顶点。例如，下图矩阵最外层元素都是第 11 层，次外层元素都是第 22 层，剩下的元素都是第 33 层。

[[1, 1, 1, 1, 1, 1, 1],
 [1, 2, 2, 2, 2, 2, 1],
 [1, 2, 3, 3, 3, 2, 1],
 [1, 2, 2, 2, 2, 2, 1],
 [1, 1, 1, 1, 1, 1, 1]]
对于每层，从左上方开始以顺时针的顺序遍历所有元素。假设当前层的左上角位于 (\textit{top}, \textit{left})(top,left)，右下角位于 (\textit{bottom}, \textit{right})(bottom,right)，按照如下顺序遍历当前层的元素。

从左到右遍历上侧元素，依次为 (\textit{top}, \textit{left})(top,left) 到 (\textit{top}, \textit{right})(top,right)。

从上到下遍历右侧元素，依次为 (\textit{top} + 1, \textit{right})(top+1,right) 到 (\textit{bottom}, \textit{right})(bottom,right)。

如果 \textit{left} < \textit{right}left<right 且 \textit{top} < \textit{bottom}top<bottom，则从右到左遍历下侧元素，依次为 (\textit{bottom}, \textit{right} - 1)(bottom,right−1) 到 (\textit{bottom}, \textit{left} + 1)(bottom,left+1)，以及从下到上遍历左侧元素，依次为 (\textit{bottom}, \textit{left})(bottom,left) 到 (\textit{top} + 1, \textit{left})(top+1,left)。

遍历完当前层的元素之后，将 \textit{left}left 和 \textit{top}top 分别增加 11，将 \textit{right}right 和 \textit{bottom}bottom 分别减少 11，进入下一层继续遍历，直到遍历完所有元素为止。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/spiral-matrix/solution/luo-xuan-ju-zhen-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

时间复杂度：O(mn)O(mn)，其中 mm 和 nn 分别是输入矩阵的行数和列数。矩阵中的每个元素都要被访问一次。

空间复杂度：O(1)O(1)。除了输出数组以外，空间复杂度是常数。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/spiral-matrix/solution/luo-xuan-ju-zhen-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```js
var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) return []
  const rows = matrix.length,
    cols = matrix[0].length
  const order = []
  let left = 0,
    right = cols - 1,
    top = 0,
    bottom = rows - 1
  while (left <= right && top <= bottom) {
    // key
    for (let col = left; col <= right; col++) order.push(matrix[top][col])
    for (let row = top + 1; row <= bottom; row++) order.push(matrix[row][right])
    if (left < right && top < bottom) {
      // key
      for (let col = right - 1; col > left; col--)
        order.push(matrix[bottom][col])
      for (let row = bottom; row > top; row--) order.push(matrix[row][left])
    }
    ;[left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1] // key
  }
  return order
}
```
