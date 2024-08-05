```tsx
type BaseTableProps={
  columns:string
  dataSource:string
  a:number
}
type part=Pick<BaseTableProps, 'columns' | 'dataSource'>
```
