https://www.liaoxuefeng.com/wiki/1022910821149312/1024328479098336

[中英文数字混合排序](https://blog.csdn.net/houyibing930920/article/details/104934370)

https://segmentfault.com/a/1190000010648740

[js_arr_sort 底层，在各个浏览器上的实现和底层原理区别](https://segmentfault.com/a/1190000010648740)

https://www.cnblogs.com/tsingke/p/5347660.html

```js
export const numAlphabetChineseStrArrSortFn = (a: string, b: string) => {
  if (isFinite(+a) && isFinite(+b)) {
    // a、b都为数字字符串，才去用数字间的大小关系去compare
    if (+a < +b) return -1;
    else if (+a > +b) return 1;
    else return 0;
  }
  const numAlphabetReg = /[a-z0-9A-Z]/;
  if (numAlphabetReg.test(a) || numAlphabetReg.test(b)) {
    if (a.toUpperCase() < b.toUpperCase()) return -1;
    else if (a.toUpperCase() > b.toUpperCase()) return 1;
    else return a.localeCompare(b); // 为了使得 'a' < 'A'，形成同一个字母的小写形式小于大写形式的表面视觉效果
  }
  return a.localeCompare(b);
};
// ['2s','21s','21','1','啊','中','波','10','2','s','S','sa','s中'].sort(numAlphabetChineseStrArrSortFn)

// ['1', '2', '10', '21', '21s', '2s', 's', 'S', 'sa', 's中', '啊', '波', '中']
```

https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value

```js
// stable sorting
function compare(a, b) {
  if (a.last_nom < b.last_nom) {
    return -1;
  }
  if (a.last_nom > b.last_nom) {
    return 1;
  }
  return 0;
}

objs.sort(compare);
```
