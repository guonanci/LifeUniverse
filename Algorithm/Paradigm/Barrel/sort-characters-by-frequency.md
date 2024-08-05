```js
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  return s
    .split('')
    .reduce((acc, v) => {
      const targetI = acc.findIndex((el) => el.includes(v))
      if (targetI != -1) acc[targetI] += v
      else acc.push(v)
      return acc
    }, [])
    .sort((a, b) => b.length - a.length)
    .join('')
}

// 执行结果：
// 通过
// 显示详情
// 添加备注

// 执行用时：
// 400 ms
// , 在所有 JavaScript 提交中击败了
// 5.86%
// 的用户
// 内存消耗：
// 46.1 MB
// , 在所有 JavaScript 提交中击败了
// 24.52%
// 的用户
```

# 1 按照出现频率排序

题目要求给定的字符串按照字符串将给定字符串按照字符出现的频率降序排序，因此需要首先遍历字符串，统计每个字符出现的频率，然后每次得到频率最高的字符，生成排序厚的字符串。
可以使用哈希表记录每个字符出现的频率，将字符去重后存入列表，再将列表中字符按照频率降序排序。生成排序后的字符串时，遍历列表中的每个字符，则遍历顺序为字符按照频率递减的顺序。对于每个字符，将该字符按照出现频率拼接到排序后的字符串。例如，遍历到字符 c，该字符在字符串中出现了 freq 次，则将 freq 个字符 c 拼接到排序后字符串。例如遍历到字符 c，该字符在字符串中出现了 freq 次，则将 freq 个字符 c 拼接到排序后的字符串。也可以使用优先队列或大根堆存储字符，读者可以自行尝试。

```js
var freqSort = function (s) {
  const map = new Map()
  const len = s.length
  for (let i = 0; i < len; i++) {
    const c = s[i]
    const freq = (map.get(c) || 0) + 1
    map.set(c, freq)
  }
  const list = [...map.keys()]
  list.sort((a, b) => map.get(b) - map.get(a))
  const sb = []
  const sz = list.length
  for (let i = 0; i < sz; i++) {
    const c = list[i]
    for (let j = 0; j < freq; j++) sb.push(c)
  }
  return sb.join('')
}
```

# 复

- 时：O(n+k log k) n 是字符串 s 长度，k 是 s 包含的不同字符的个数，这道题中 s 只包含大写字母，小写字母和数字，所以 k=26+26+10=62.遍历字符串统计每个字符出现的频率需要 O(n)的时间。将字符按照出现频率排序需要 O(k log k) 的时间。生成排序后的字符串，需要遍历 k 个不同字符，需要 O（k）的时间，拼接字符串需要 O（n）的时间。因此总时间复杂度是 O（n+klogk+k+n）=O(n+klogk)
- 空：O（n+k），主要取决于哈希表、列表和生成的排序后的字符串

# 2 桶排序

由于咩个字符在字符串中出现的频率存在上限，因此可以使用。根据出现次数生成排序后的字符串。具体做法：

1. 遍历字符串，统计每个字符出现的频率，同时记录最高频率 maxFreq
2. 创建桶，存储从 1 到 maxFreq 的每个出现频率的字符
3. 按照出现频率从大到小的顺序遍历桶，对于每个出现频率，获得对应的字符，然后将每个字符按照出现频率拼接到排序后的字符串

```js
var freqSort = function (s) {
  const mp = new Map()
  let maxFreq = 0
  const len = s.length
  for (const ch of s) {
    const freq = (mp.get(ch) || 0) + 1
    mp.set(ch, freq)
    maxFreq = Math.max(maxFreq)
  }
  const buckets = new Array(maxFreq + 1).fill(0).map(() => new Array())
  for (const [ch, num] of mp.entries()) buckets[num].push(ch)
  const ret = []
  for (let i = maxFreq; i > 0; i--) {
    const bucket = buckets[i]
    for (const ch of bucket) {
      for (let k = 0; k < i; k++) ret.push(ch)
    }
  }
  return ret.join('')
}
```

# 复

- 时：O（n+k），其中 n 是字符串 s 的长度，k 是字符串 s 包含的不同字符的个数。遍历字符串统计每个字符出现的频率需要 O（n）的时间。创建桶并将不同字符加入桶需要 O（k）的时间。生成排序后的字符串，需要 O（k）的时间遍历桶，以及 O（n）的时间拼接字符串。因此总时间复杂度是 O（n+k）
- 空：O（n+k），主要取决于桶和生成的排序后的字符串
