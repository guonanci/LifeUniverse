https://leetcode.com/problems/intersection-of-two-arrays/#/description
https://discuss.leetcode.com/category/433/intersection-of-two-arrays

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.
Seen this question in a real interview before?   Yes



var intersection = function(nums1, nums2) {
    const len2 = nums2.length;
    const r = [];
    for(let i = 0; i < len2; i++) {
        if (nums1.includes(nums2[i]) && ) {
            r.push[nums2[i]];
        }
    }
    return r;
};

better solution with es6-set

function intersection(nums1, nums2) {
  const set = new Set(nums1)
  return [...new Set(nums2.filter(n => set.has(n)))]
}

intersection-of-two-arrays II


js 二叉树 怎么写  哈哈哈




1. check a prime
function isPrime(n) {
  let divisor = 2
  while (n > divisor) {
    if (n % divisor === 0) {
    return false
    } else {
      divisor ++
    }
  }
  return true
}
实际上上面不是最优方案, 我记得还有折半的方案, 时间复杂度或者空间复杂度是 log2 n
我看看
2. prime factors

function primeFactors(n) {
  let factors = [], divisor = 2

  while (n > 2) {
    if (n % divisor === 0) {
      factors.push(divisor)
      n /= divisor
    } else {
      divisor++
    }
  }

  return factors
}

3. fibonacci
try 1
function fibonacci(n) {
  const fibo = [0, 1]

  if (n <= 2) {
    return 1
  }

  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2]
  }

  return fibo[n]
}

fibonacci(12) = 144
*what is this fibo run time complexity* O(n)

try 2(make it recursive)
function fibonacci(n) {
  if (n <= 1) {
    return n
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}
*what is this fibo run time complexity* O(2的n次方, therefore recursive function is very dangerous of run time complexity)

4. greatest common divisor
```js
function greatestCommonDivisor(a, b) {
  let divisor = 2, greatestDivisor = 1

  // if u pass a -ve number this will not work. fix it dude!!
  if (a < 2 || b < 2) {
    return 1
  }

  while(a >= divisor && b >= divisor) {
    if (a % divisor === 0 && b % divisor === 0) {
      greatestDivisor = divisor
    }
    divisor++
  }

  return greatestDivisor
}
```
##fancy algorithm


```js
function greatestCommonDivisor(a, b) {
  if (b === 0) {
    return a
  } else {
    return greatestCommonDivisor(b, a%b)
  }
}
```
```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>

    </body>
  </html>
```
a b b a%b (b) === 0 return a


recursively reversing a str
```js
function reverseStr(str) {
  if (str === "") {
    return ""
  } else {
    return reverseStr(str.substr(1)) + str.charAt(0)
  }
}
```

buy apples:


```js

function () {
  let n = 2, day = 0, money = 0, ave = 0
  while(n < 100) {
    money += .8 * n
    day++
    n *= 2
  }
  ave = money / day
  return ave
}

function triangle(a, b, c) {
  let area, typeStr
  if (a + b > c && b + c > a && a + c > b) {
    // 锐角+钝角(普通) 直角 等边 等腰 等腰直角

    if (a === b && a === c) {
      console.log("等边")
    }
    if (a === b || a === c || b === c) {
      // 等腰
    }
    if ((a * a === b * b + c * c) || (b * b === a * a + c * c) || (b * b === a * a + c * c)) {

    }
    if ( (a * a > b * b + c * c) || (b * b > a * a + c * c) || (c * c > b * b + a * a)) {
      // dunjiao
    }
    // ruijiao
  } else {
    console.log('不能构成三角形');
    return false
  }
  // 求积公式
  let half = (a + b + c) / 2
  area = Math.sqrt(half * (half - a) * (half - b) * (half - c))
  console.log(`输入三角形的面积是${s}, 类型是${typeStr}`);
}

// 插入排序不是很理解
function insertSort(inputArr, n) {
  let i, j
  for (i = 2; i < = n; i++) {
    inputArr[0] = inputArr[i] //数组下标从2开始给监视哨s[0]赋值
    j = i - 1
    while (inputArr[0] < inputArr[j]) {
      inputArr[j + 1] = inputArr[j]
    }
    inputArr[j + 1] === inputArr[0]
  }
}

function insertSort(inputArr, n) {
  let i, solder = inputArr[0], middleValue, resultArr = []
  for (i = 1; i < n; i++) {
    if (inputArr[i] < solder) {
      if(inputArr[i] < inputArr[i - 1]) {
        middleValue = inputArr[i - 1]
        resultArr[i - 1] = resultArr[i]
        resultArr[i] = middleValue

      }
    } else {
      resultArr[i - 1] = solder
      solder = inputArr[i]
    }
  }
  return resultArr
}

function bubbleSort(inputArr) {
  // 通过两个 for 循环实现冒泡排序全过程, 外层决定躺输, 内层决定每趟所进行俩俩比较的次数
  // 对任意输入的数组由小到大排序
  // command + tab
  let len = inputArr.length
  for (let i = 1; i < len; i++) {
    for (let j = 1; j < len + 1 - i; j++) { // 趟数决定了两两比较的次数
      if (inputArr[j] > inputArr[j + 1]) {
        t = inputArr[j]
        inputArr[j] = inputArr[j + 1]
        inputArr[j + 1] = t
      }
    }
  }
  return inputArr
}

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
function quickSort (inputArr) {
  // 交换元素位置
  function swap (arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
  }
  // 数组分区
  function partition (arr, left, right) {
    let storeIndex = left
    let pivot = arr[right] // 直接选择最右边的元素为基准元素
    for (let i = left; i < right; i++) {
      if (arr[i] < pivot) {
        swap(arr, storeIndex, i)
        storeIndex++ // 交换位置后, storeIndex 自增1, 代表下一个可能要交换的位置
      }
    }
    swap(arr, right, storeIndex) // 将基准元素放置到最后的正确位置上
    return storeIndex
  }

  function sort (arr, left, right) {
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

// selectSort 没去琢磨
// return; && return -1;  difference
// 二分法查找
// 递归算法
function binarySearch(arr, target, low, high) {
    let mid
    if (low > high) {
      return -1
    }
    mid = (low + high) / 2
    if (arr[mid] === key) {
      return mid
    } else if (arr[mid] < key) {
      return binarySearch(arr, target, mid + 1, high)
    } else if {

    }
}
// 非递归算法
function binarySearch(arr, target, n) {
    let left = 0, right = n - 1, mid = 0
    mid = (left + right) / 2
    while (left < right && arr[mid] !== key) {
      if (arr[mid] < target) {
        left = mid + 1
      } else if (arr[mid] > target) {
        right = mid - 1
      }
      mid = (left + right) / 2
    }
    if (arr[mid] === key) {
      return mid
    }
    return  -1
}

// 分块查找
// 哈希查找
//
// 判断是否为素数prime
//
function isPrime(n) {
    if (isNaN(n)) { // 看看 js 高级程序设计
      console.log('this is not a number');
      return -1
    }
    if (n <= 1) {
      return 0
    } else if (n === 2) {
      return 1
    }

    for (let i = 2; i <= n; i++) { // 还可以进行折半循环或者根号循环2-n/2 2-sqrt(n)， 减少空间复杂度
      if (n % i ==== 0) {
        return 0
      } else if (i !== n - 1) {
        continue
      } else {
        return 1 // i === n - 1
      }
    }
}
// 十进制转二进制
for (m = 0; m < 15; m++) {
  i = n % 2; // 取余
  j = n / 2; // 取商
  n = j;
  a[m] = i;
}

// n(2 8 16)进制转10进制
// input string, then you turn it to an array
function nTo10(str, n) {
  let result = 0, temp
  let arr = str.split('')
  // let n = str[0] === '0' ? str[1] === 'x' ? 16 : 2 :
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] - '0' >=  && arr[i] < 'A' || arr[i] - 'A' + 10 >= len) { // 判断输入的数据与进制数是否相符
      console.log('input again');
    }
    if (arr[i] >= '0' && arr[i] <= '9') {
      // 十进制
      temp = arr[i] - '0'
    } else if (n >= 11 && (arr[i] >= 'A' && a[i] <= 'A' + n - 10)) {
      temp = arr[i] - 'A' + 10
    }
    result = result * n + temp
  }
  return result
}


function rebound() {
    // let originalHeight = 100
    for (let i = 0, height = 100, distance = 100; i < 10; i++) {
      height *= .5
      distance += height
    }
    console.log('路程 高度'， distance, height);
}

function sixBrothers() {
  let ave = 2520 / 6
  for (let i )
}


// 10 9
// 采用穷举法进行探测， 由部分推出整体，
// n >= 11, 因为至少11份时， 第一个来领的同学领到的才是完整的份数， 穷举法直到 sum1 === sum2， 这样就可以计算出老师姜汤过分成了多少份和学生的数量
// sum1 = (n -1)/10 + 1
// sum2 = (n-[(n-1)/10+1]-2)/10+2 === [n-(n+9)/10-2]/10 + 2 === (9n-29/10)/10+2 ===(9n + 171) / 100
function candy() {
  let sum1, sum2, n
  for (n = 11;;n++) {
    sum1 = (n + 9) / 10
    sum2 = (9 * n + 171) / 100
    // sum1 和 sum2应为整数，否则结束本次循环， 继续下次判断
    if (sum1 !== parseInt(sum1) || sum2 !== parseInt(sum2)) {
      continue
    }

    if (sum1 === sum2) {
      break // 跳出循环
    }
  }
console.log("学生数 糖果数：", n / sum1, n);
}

function binToDec() {

}
// ES6下的for循环应该采用哪种写法， 各种写法及长短，适用场合 !!!
function getIP(str) {
  for (let i = 0; i < 4; i++) {
    for()
  }
}

Math.sqrt(4) === 2

parseInt(4.1)

n1 = i / 1000 // 求出高三位
n2 = i % 1000 // 求出低三位

n d n n+d n+2*d n+3*d 4*n+6*d n4
20*n+
13 2n+3d
穷举法

// 亲密数 10000以内
// 自守数 10000以内
```


```js
const timeAgo = function(t1, t2) { //两个时间差 中文显示函数
  let t1Time = new Date(t1), t2Time = new Date(t2)
  let timeDiff = t1Time.getTime() - t2Time.getTime() // 时间差，单位是毫秒
  let result = timeDiff > 0 ? '后' : timeDiff === 0 ? '同一时间' : '前'
  const absTimeDiff = Math.abs(timeDiff)

  let floorFunc = Math.floor

  let days = floorFunc(absTimeDiff / (24 * 3600 * 1000))
  let years = floorFunc(days / 365) // 不考虑闰年
  let months = floorFunc(days / 30)

  let hours = floorFunc(absTimeDiff / (3600 * 1000))
  let minutes = floorFunc(absTimeDiff / (60 * 1000))
  let seconds = floorFunc(absTimeDiff / 1000)

  if (years >= 1) {
   result = years + '年' + result
  } else if (months >= 1) {
   result = months + '个月' + result
  } else if (days >= 1) {
   result = days + '天' + result
  } else if (hours >= 1) {
   result = hours + '小时' + result
  } else if (minutes >= 1) {
   result = minutes + '分钟' + result
  } else if (seconds >= 1) {
   result = seconds + '秒' + result
  }
  return result
};
```
