# 查询某天是否为工作日
日历组件，周一至周五为工作日
```js
const isWeekday=date=>date.getDay()%6!==0 // 0是礼拜天，6是礼拜六
```

# 两日期之间相差的天数
需要*显示剩余天数*，
```js
const daysDiff=(date1,date2)=>Math.ceil(Math.obs(date1.getTime()-date2.getTime())/8640_0000)
```
