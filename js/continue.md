```js
for (let i = 1; i < 5; i++) {
  if (i === 3) continue
  console.log(i)
}
A: 1 2
B: 1 2 3
C: 1 2 4
D: 1 3 4
答案
答案: C
如果某个条件返回 true，则 continue 语句跳过本次迭代。
```
