# medium

692. 前 K 个高频单词
     给一非空的单词列表，返回前 k 个出现次数最多的单词。

返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率，按字母顺序排序。

示例 1：

输入: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
输出: ["i", "love"]
解析: "i" 和 "love" 为出现次数最多的两个单词，均为 2 次。
注意，按字母顺序 "i" 在 "love" 之前。

示例 2：

输入: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
输出: ["the", "is", "sunny", "day"]
解析: "the", "is", "sunny" 和 "day" 是出现次数最多的四个单词，
出现次数依次为 4, 3, 2 和 1 次。

注意：

假定 k 总为有效值， 1 ≤ k ≤ 集合元素数。
输入的单词均由小写字母组成。

扩展练习：

尝试以 O(n log k) 时间复杂度和 O(n) 空间复杂度解决。
通过次数 31,222 提交次数 58,940
请问您在哪类招聘中遇到此题？
贡献者
LeetCode
前 K 个高频元素
中等
最接近原点的 K 个点
中等

# hashTable+sort

我们预处理出每一个单词出现频率，然后按照频率降序，返回前 k 个

具体的，我们用 hashTable 记录每一个字符串出现的频率，然后将哈希表中所有字符串进行排序，如果两个字符串出现频率相同，那么我们让两字符串中字典序
较小的排在前面，否则我们让出现频率较高的排在前面，最后我们只需保留序列中前 k 个字符串

```js
var topKFrequent = function (words, k) {
  const cnt = new Map()
  for (const w of words) cnt.set(w, (cnt.get(w) || 0) + 1)
  const rec = []
  for (const k of cnt.keys()) rec.push(k)
  rec.sort((w1, w2) => {
    return cnt.get(w1) == cnt.get(w2)
      ? w1.localCompare(w2)
      : cnt.get(w2) - cnt.get(w1)
  })
  return rec.slice(0, k)
}
```

# 复

- 时： O（l*n+l*m*log m) n 表示给定字符串序列长度，l 表示字符串平均长度，m 表示实际字符串种类数，我们需要 l*n 的时间插入到哈希表中，以及 l
  - - m \* log m 的时间完成字符串比较（最坏情况下所有字符串出现频率都相同，我们需要将它们两两比较）
- 空：O（l*m) 其中 l 表示字符串平均长度，m 表示实际字符串种类数。哈希表和生成的排序数组空间占用均为 O(l*m)

# 2 优先队列（堆）

对于前 k 大（小）这类问题，有一个通用解法：优先队列 可以在 O(log n) 时间内完成插入或删除元素的操作（n 为优先队列大小），并可以 O（1）地查询优
先队列顶端元素
在本题，我们可以创建一个小根优先队列（优先队列顶端元素是最小元素的优先队列）。我们将每一个字符串插入到优先队列中，如果优先队列大小超过 k，那么我们
将优先队列顶端元素弹出。这样最终优先队列中剩下的 k 个元素就是前 k 个出现次数最多的单词

```js
var topKFrequent=function(words,k){
  let m=new Map()
  for(const w of words){
    if(m.has(w)) m.set(w,m.get(w)+1)
    else m.set(w,1)
  }
  let sorted_list=[],res=[]
  m.forEach((v,k)=>sorted_list.push([k,v]))
  sorted_list.sort((p1,p2)=>{
    if(p1[1])
    // https://leetcode-cn.com/problems/top-k-frequent-words/solution/ha-xi-biao-dui-by-comprehensive-xjfp/
  })
}
```
