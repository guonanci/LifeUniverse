```tsx
const targetEle = ([1, 2].find((v) => v == 3) as number).toFixed(2)
```

ts 可推断出类型的地方，就不用再次声明
