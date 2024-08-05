```js
_.uniqWith(entries, (a, b) => a[0] === b[0] && _.isEqual(a[1], b[1]))
_.uniqWith(array, [comparator])
```
