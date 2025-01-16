```js
fetch(url)
  .then(function (response) {
    return response.json() // returns a promise
  })
  .then(function (data) {
    console.log(data)
  })
  .catch(function (e) {
    console.log('Oops, error')
  })
// ————————————————
// 版权声明：本文为CSDN博主「我的小英短」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/WU5229485/article/details/85219165
```

# AbortError

https://developer.mozilla.org/zh-CN/docs/Web/API/AbortController/abort

```js
什么样的信息将被打印？
fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res))
A: fetch方法的结果
B: 第二次调用fetch方法的结果
C: 前一个.then()中回调方法返回的结果
D: 总是undefined
答案
答案: C
第二个.then中res的值等于前一个.then中的回调函数返回的值。 你可以像这样继续链接.then，将值传递给下一个处理程序。
```

# failed toexecute‘fetch' on‘Window’:ｆａｉｌｅｄ　ｔｏ　ｒｅａｄ　ｔｈｅ　＇ｈｅａｄｅｒｓ＇　ｐｒｏｐｅｒty from 'RequestInit': string contains non ISO-8859-1 code point
getSearchResults reverse TypeError
