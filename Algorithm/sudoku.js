// [画龙信息科技-datalist](https://www.datatist.com/)
// 我就说说大概思路和主要细节关键点吧：
// 准备数据
;[
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 3, 4, 5, 6, 7, 8, 9, 1],
  [3, 4, 5, 6, 7, 8, 9, 1, 2],
  // …
  [9, 1, 2, 3, 4, 5, 6, 7, 8],
]
// 对上面的数据打乱行：
rowsCols.sort((a, b) => Math.random() - 0.5)
// 打乱列：
// 随机获取多列的索引, 待会掏空单元格时也会用上
function getRandomIndexes(i = 2) {
  if (typeof i !== 'number' || i < 1) return []
  // 索引结果
  const randomIndexes = [Math.floor(Math.random() * 9)]
  const count = i - 1
  function randomOperation() {
    const randomI = Math.floor(Math.random() * 9)
    // 如果第n列和第m(m < n)列索引一样，第n列的索引就再次重新随机获取
    while (count > 0) {
      if (!randomIndexes.includes(randomI)) {
        randomIndexes.push(randomI)
        randomOperation()
        count--
      } else if (randomIndexes.includes(randomI)) {
        randomOperation()
      }
    }
  }
  if (count > 0) randomOperation()
  // 以数组形式返回随机出来的这些索引值
  return randomIndexes
}
// 打乱列
// 遍历9次
for (let i = 0; i < 9; i++) {
  const twoRandomIdx = getRandomIndexes()
  // 遍历每一行，给每一行的随机两列交换值
  for (let j = 0, len = rowsCols.length; j < len; j++) {
    // 以ES6解构形式，随机两列交换值
    const curRow = (rowsCols[j][
      (curRow[twoRandomIdx[0]], curRow[twoRandomIdx[1]])
    ] = [curRow[twoRandomIdx[1]], curRow[twoRandomIdx[0]]])
  }
}

// 掏空单元格
function addZeroes() {
  // 总共的9乘9棋盘大小划分成9块
  // 第1块：
  // rowsCols[0][0],rowsCols[0][1],rowsCols[0][2]
  // rowsCols[1][0],rowsCols[1][1],rowsCols[1][2]
  // rowsCols[2][0],rowsCols[2][1],rowsCols[2][2]
  // 第2块：
  // rowsCols[0][3],rowsCols[0][4],rowsCols[0][5]
  // rowsCols[1][3],rowsCols[1][4],rowsCols[1][5]
  // rowsCols[2][3],rowsCols[2][4],rowsCols[2][5]
  // ...
  // 第9块：
  // rowsCols[6][6],rowsCols[6][7],rowsCols[6][8]
  // rowsCols[7][6],rowsCols[7][7],rowsCols[7][8]
  // rowsCols[8][6],rowsCols[8][7],rowsCols[8][8]
  // 通过`getRandomIndexes(5)`对每块区域随机出5个位置，设置显示值为0（单元格上渲染成空字符），同时设置隐藏值为原本的数字（方便后面验证和自动填充，不显示在页面上）
}

// 递归，初始渲染到页面上
// 值为0的单元格渲染成空字符，并且可以重复修改，可点击弹出绝对定位的小键盘，方便点击；值不为0的点击没有任何效果
// 点击小键盘上的1-9的话，再去校验当前单元格的隐藏值是否和小键盘上点击的数字相同：
// 不相同的话验证不通过，棋盘加抖动效果，不渲染新数字；相同的话验证通过，渲染新数字

// 重新生成：重新打乱列，打乱行，按照要求掏空部分单元格然后显示到页面中
// 点击全部验证：因为之前单步验证过了每一步，所以这里只需要验证空白是否全部填完即可
// 点击显示正确结果：将所有显示值为0的单元格对应的隐藏值正确显示出来
