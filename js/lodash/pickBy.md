```js
_.pickBy({ ba: 1 }, (v, k) => k.startsWith('b'))
// {ba:1}
_.pickBy({ ba: 1 }, (v, k) => k.startsWith('a'))
// {}
```
