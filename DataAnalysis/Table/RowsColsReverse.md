行列转置

```js
不支持交叉表
不支持有合并单元格配置的普通表格
hasHeader: false
const dataSource = [
    { prov: 'hb', confirm: 1, cure: 2 },
    { prov: 'zj', confirm: 3, cure: 4 },
  ],
  columns = [
    {
      code: 'prov',
      name: 'sf',
      width: 150,
      align: 'left',
      headerCellProps: {},
    },
    {
      code: 'confirm',
      name: 'qz',
      width: 150,
      getValue: (record, rowIdx) => any,
      render: (v, r, rowIdx) => ReactNode,
    },
    { code: 'cure', name: 'zy', width: 150 },
  ]
const oldCodes = columns.map((v) => v.code)
const cols = new Array(dataSource.length + 1).map((v, i) => {
  const rs = { name: guid() }
  if (i != 0) {
    rs.code = `col${i}`
    // 条件格式配置后
    if (columns.find((v) => v.code == oldCodes[i - 1]).render)
      rs.render = columns.find((v) => v.code == oldCodes[i - 1]).render
  } else {
    if (columns[0].headerCellProps)
      rs.render = (v1) => (
        <div style={columns[0].headerCellProps.style}>{v1}</div>
      )
    rs.code = 'header'
  }
  return rs
})
const getValueAndRender = i
const getSomeData = (i, k) => dataSource[i][k]
const dS = new Array(columns.length).map((v, i) => {
  const rs = { header: columns[i].name }
  cols.slice(1).forEach((v1, i1) => {
    rs[v1.code] = getSomeData(i1, oldCodes[i1])
  })
})
```

prov confirm cure
hb 1 2
zj 3 4

prov hb zj
confirm 1 3
cure 2 4
