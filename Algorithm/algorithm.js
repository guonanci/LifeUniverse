// https://leetcode.com/problemset/algorithms/?difficulty=Medium


function quickSort1(srcArr) {
  function sortOnce(prev, onceArrLen) {
    var flag = prev;
    var j = onceArrLen - 1;
    var key = srcArr[prev];
    if ((onceArrLen - prev) > 1) {
      while (flag < j) {
        for (; flag < j; j--) {
          if (srcArr[j] < key) {
            srcArr[flag++] = srcArr[j]; //a[i] = a[j]; i += 1;
            break;
          };
        }
        for (; flag < j; flag++) {
          if (srcArr[flag] > key) {
            srcArr[j--] = srcArr[flag];
            break;
          }
        }
      }
      srcArr[flag] = key;
      sortOnce(0, flag);
      sortOnce(flag + 1, onceArrLen);
    }
  }
  sortOnce(0, srcArr.length);
  return srcArr;
}


function quickSort(inputArr) {
  function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
  }

  function partition(arr, left, right) {
    let partitionPoint = left // 分割点初始值是left
    const pivot = arr[right] // 枢纽初始值是最右边的itm
    for (let i = left; i < right; i++) {
      if (arr[i] < pivot) { // 数组内部按照从小到大排序
        swap(arr, i, partitionPoint) // 交换满足 arr[i] < point 条件的arr[i]和arr[partitionPoint]
        partitionPoint++ // 交换之后partitionPoint必须+1，一是为了正确地逐个交换partitionPoint和i，二是让partitionPoint慢慢地接近
        // 真正的枢纽点
      }
    }
    swap(arr, partitionPoint, right) // 枢纽放中间，确认‘枢纽’地位

    return partitionPoint
  }

  function sort(arr, left, right) { // 快排入口（递归）函数
    if (left > right) return // 这个递归终止条件必须有
    const boundary = partition(arr, left, right) // 找出第一次的枢纽点
    sort(arr, left, boundary - 1) // 递归地去快排枢纽点左边
    sort(arr, boundary + 1, right) // 递归地去快排枢纽点右边
  }
  sort(inputArr, 0, inputArr.length - 1)
  return inputArr
}
quickSort([1, 2, 3, 8, 1, 2, 111, 4, 3])
const quickSort = (arr) => {
  if (arr.length === 0) return []
  const cIdx = Math.floor(arr.length / 2)
  const c = arr.splice(cIdx, 1)
  const low = []
  const high = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < c) {
      low.push(arr[i])
    } else {
      high.push(arr[i])
    }
  }
  return quickSort(low).concat(c, quickSort(high))
}


function mySetInterval(fn, delay, count) {
  function interval() {
    if (typeof count === 'undefined' || count-- > 0) {
      setTimeout(interval, delay)
      try {
        fn.call(null)
      } catch (err) {
        count = 0
        throw e.toString()
      }
    }
  }
  return setTimeout(interval, delay)
}

function myClearInterval(id) {
  clearInterval(id)
}

// several setTimeoutOut return a serial integer in a loop, so:



function binaryTreeTraverse(inputArr = [], way = 'in') {
  let root = null

  function Node(key) {
    this.key = key
    this.left = null
    this.right = null
  }

  function insertNewNodeAtRoot(root, newNode) { // 构造二叉树，左边小于root，root小于右边
    if (newNode.key < root.key) {
      // root.left非null的话递归继续以root.left作为新root，寻找插入点，是null的话就找到了插入点
      root.left === null ? (root.left = newNode) : (insertNewNodeAtRoot(root.left, newNode))
    } else {
      // root.right非null的话递归继续以root.right作为新root，寻找插入点，是null的话就找到了插入点
      root.right === null ? (root.right = newNode) : (insertNewNodeAtRoot(root.right, newNode))
    }
  }

  function covertArrItmToNode(item) { // 数组元素逐个转Node，并构成NodeTree
    const newNode = new Node(item) // int转object
    if (root === null) {
      root = newNode // 设置root初始值成arr第一个itm
    } else {
      insertNewNodeAtRoot(root, newNode) // 插入剩余的数组元素到NodeTree中
    }
  }
  // 数组转二叉树
  inputArr.forEach(item => {
    covertArrItmToNode(item)
  })
  inputArr.length = 0 // 设置成空数组，方便存二叉树序遍历后转换而来的数组

  function convertNodeTreeToArr(node) {
    if (node !== null) {
      if (way === 'pre') {
        inputArr.push(node.key)
        convertNodeTreeToArr(node.left)
        convertNodeTreeToArr(node.right)
      } else if (way === 'in') {
        convertNodeTreeToArr(node.left)
        inputArr.push(node.key)
        convertNodeTreeToArr(node.right)
      } else if (way === 'post') {
        convertNodeTreeToArr(node.left)
        convertNodeTreeToArr(node.right)
        inputArr.push(node.key)
      }
    }
  }


  function invertTree(root) { // 反转树，在这里反转结果是从大到小
    if (root !== null) {
      [root.left, root.right] = [root.right, root.left] // 交换左右孩子
      invertTree(root.left) // 递归交换左孩子的后代
      invertTree(root.right) // 递归交换右孩子的后代
    }
  }

  invertTree(root) // 可以调用，也可以注释，看排序要求是从大到小还是从小到大
  convertNodeTreeToArr(root)
  return inputArr
}
binaryTreeTraverse([8, 3, 10, 1, 6, 14, 4, 7, 13])










function BinaryTree() {
  let root = null

  function Node(key) {
    this.key = key
    this.left = null
    this.right = null
  }

  function insertNode(node, newNode) {
    if (newNode.key < node.key) {
      node.left === null ? (node.left = newNode) : (insertNode(node.left, newNode))
    } else {
      node.right === null ? (node.right = newNode) : (insertNode(node.right, newNode))
    }
  }

  this.insert = (key) => {
    const newNode = new Node(key)
    if (root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  function preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key)
      preOrderTraverseNode(node.left, callback)
      preOrderTraverseNode(node.right, callback)
    }
  }

  function inOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key)
      inOrderTraverseNode(node.left, callback)
      inOrderTraverseNode(node.right, callback)
    }
  }

  function postOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key)
      postOrderTraverseNode(node.left, callback)
      postOrderTraverseNode(node.right, callback)
    }
  }

  this.preOrderTraverse = (callback) => {
    preOrderTraverseNode(root, callback)
  }
  this.inOrderTraverse = (callback) => {
    inOrderTraverseNode(root, callback)
  }
  this.postOrderTraverse = (callback) => {
    postOrderTraverseNode(root, callback)
  }
}

const arr = [8, 3, 10, 1, 6, 14, 4, 7, 13]
const cb = (...obj) => console.log(...obj)
const bT = new BinaryTree()
arr.forEach(item => bT.insert(item))
bT.preOrderTraverse(cb)
bT.inOrderTraverse(cb)
bT.postOrderTraverse(cb)


function invertTree(arr = [], traverseWay = 'in') {
  let root = null
  const r1 = [],
    r2 = []

  function Node(key) {
    this.key = key
    this.left = null
    this.right = null
  }

  function insert(item, way = 'normal') {
    const newNode = new Node(item)
    if (root === null) {
      root = newNode
    } else {
      way === 'invert' ? insertNode(root, newNode, 'invert') : insertNode(root, newNode)
    }
  }

  function insertNode(node, newNode, way = 'normal') {
    if (way === 'normal') {
      if (newNode.key < node.key) {
        node.left === null ? (node.left = newNode) : (insert(node.left, newNode))
      } else {
        node.right === null ? (node.right = newNode) : (insert(node.right, newNode))
      }
    } else {
      if (newNode.key >= node.key) {
        node.left === null ? (node.left = newNode) : (insert(node.left, newNode))
      } else {
        node.right === null ? (node.right = newNode) : (insert(node.right, newNode))
      }
    }
  }

  arr.forEach(item => insert(item))

  function pushElm(node, way = 'normal') {
    if (!node) {
      const r = way === 'normal' ? r1 : r2
      if (traverseWay === 'pre') {
        r.push(node.key)
        pushElm(node.left)
        pushElm(node.right)
      } else if (traverseWay === 'in') {
        pushElm(node.left)
        r.push(node.key)
        pushElm(node.right)
      } else if (traverseWay === 'post') {
        pushElm(node.left)
        pushElm(node.right)
        r.push(node.key)
      }
    }
  }

  pushElm(root)

  root = null
  arr.forEach(item => insert(item, 'invert'))
  pushElm(root, 'invert')

  return [r1, r2]
}

invertTree([4, 2, 1, 7, 3, 9, 6], 'pre') // [[4, 2, 1, 3, 7, 6, 9], [4, 7, 9, 6, 2, 3, 1]]




function symmetricTree(root) {
  if (root === null) {
    return true
  } else {
    function compare(left, right) {
      if (left === null) return right === null
      if (right === null) return false
      if (left.key !== right.key) return false
      return compare(left.right, right.left) && compare(left.left, right.right)
    }

    function invertTree(root) {
      if (root !== null) {
        [root.left, root.right] = [root.right, root.left]
        invertTree(root.left)
        invertTree(root.right)
      }
    }
    // function compareTwoTrees (rootA, rootB) {
    //   if (rootA.left !== null) {
    //     compareTwoTrees(rootA.left, rootB.left)
    //   } else if (rootA.right !== null) {
    //     compareTwoTrees(rootA.right, rootB.right)
    //   } else if (rootA.right === null) {
    //     if (rootB.right !== null) {
    //       return false
    //     } else {
    //       return compareTwoTrees(rootA.left, rootB.left)
    //     }
    //   } else if (rootA.left === null) {
    //     if (rootB.left !== null) {
    //       return false
    //     } else {
    //       return return compareTwoTrees(rootA.right, rootB.right)
    //     }
    //   }
    // }
    // invertTree(root.right)
    return compare(root.left, root.right)
  }
}



// ??
function height(root) {
  if (!root) return 0
  const left = height(root.left)
  const right = height(root.right)
  return left > right ? left + 1 : right + 1
}

function width(root) {
  if (!root) return 0

  let queue = [root],
    max = 1,
    deep = 1
  while (queue.length) {
    while (deep--) {
      let temp = queue.shift()
      if (temp.left) {
        queue.push(temp.left)
      }
      if (temp.right) {
        queue.push(temp.right)
      }
    }
    deep = queue.length
    max = max > deep ? max : deep
  }

  return max
}



function reConstructBinaryTree(preorderArr, inorderArr) {
  if (!preorderArr || !inorderArr || !preorderArr.length || !inorderArr.length) {
    return null
  }
  const root = new Node(preorderArr[0])
  const rootIndex = inorderArr.indexOf(root)


  const vinLeft = inorderArr.slice(0, rootIndex)
  const preLeft = preorderArr.slice(1, rootIndex + 1)
  const preRight = preorderArr.slice(rootIndex + 1)
  const vinRight = inorderArr.slice(rootIndex + 1)


  root.left = vinLeft.length ? reConstructBinaryTree(preLeft, vinLeft) : null
  root.right = vinRight.length ? reConstructBinaryTree(preRight, vinRight) : null






  return root
}


reConstructBinaryTree(pre, vin) // root


// 优先注重思路（同时用上好的命名，很重要），整个思路完整以后再考虑所有变量的声明位置


export function sum() {
  if (arguments.length === 2) {
    return arguments[0] + arguments[1]
  } else if (arguments.length === 1) {
    const a = arguments[0]
    return function (b) {
      return a + b
    }
  }
}

// Longest Substring Without Repeating Characters
function longestSubstr(str) {
  const arr = [],
    max = 1
  for (let i = 0, len = str.length; i < len; i++) {
    if (len === 1) return 1
    if (!arr.includes(str[i])) {
      arr.push(str[i])
      if (i === len) return len
    } else if (arr.includes(str[i]) && str.slice(arr.indexOf(str[i])).length) {
      const lenInner = longestSubstr(str.slice(arr.indexOf(str[i])))
    }
    return Math.max(arr.length, lenInner)
  }
}
// sliding window
function lenOfLongestSubstr(s) {
  let max = 0,
    i = 0,
    j = 0,
    str = ''
  const len = s.length
  while (i < len && j < len) {
    if (!str.includes(s[j])) {
      str += s[j]
      j++
      max = Math.max(max, j - i)
    } else {
      // const tempArr = str.split('')
      // tempArr.splice(str.indexOf(s[i]), 1)
      // str = tempArr.join('')
      str = str.slice(0, str.indexOf(s[i])) + str.slice(str.indexOf(s[i]) + 1)
      i++
    }
  }
  return max
}

function reverseAdd(a, b) {

}

// Trie

[{
    id: 1,
    name: 'anna'
  },
  {
    id: 2,
    name: 'lee'
  },
]
// normalized
const normalized = {
  1: {
    id: 1,
    name: 'anna'
  },
  2: {
    id: 2,
    name: 'lee'
  }
}

function normalize(dataArr, identify = 'id') {
  return dataArr.reduce((acc, itm, idx, arr) => {
    acc[itm[identify]] = itm
    return acc
  }, {})
}

// if src-type is not right, return-value's default value depends on return-value's type, e.g. '', null, []...


// Recursion: http://raganwald.com/2018/05/20/we-dont-need-no-stinking-recursion.html


// permutations
// https://segmentfault.com/a/1190000016816813


// 最短回文串

// 最长公共子序列

// 数组去重
// 类型只考虑数字
function distinct(arr) {
  const rs = []
  const map = new Map()
  for (let itm of arr) {
    if (!map.has(itm)) {
      rs.push(itm)
      map.set(itm, true)
    }
  }
  return rs
}


// https://juejin.cn/post/6929755669683765261
// https://github.com/sl1673495/leetcode-javascript/issues?page=5&q=is%3Aissue+is%3Aopen

// 动态规划
// https://juejin.cn/post/6844903520039075847
