# JSX风格的API

`Column,ColumnGroup`,不能用其他组件去包裹，只是一个描述columns的语法糖。
多行表头

```ts
import React from 'react'
import { Space,Table,Tag } from 'antd'
const { Column, ColumnGroup } = Table
interface DataType{
  key: React.key
  firstName:string
  lastName:string
  age:number
  address:string
  tags:string[]
}
const data:DataType[]=[
  {
    key:'1',
    firstName:'John',
    lastName:'Brown',
    age:32,
    address:'New York No. 1 Lake Park',
    tags:['nice','developer'],
  }
]
const App:React.FC=()=>(
  <Table dataSource={data}>
    <ColumnGroup title='Name'>
      <Column title='First Name' dataIndex='firstName' key='firstName' />
      <Column title='last Name' dataIndex='lastName' key='lastName' />
    </ColumnGroup>
    <Column title='Age' dataIndex='age' key='age' />
    <Column title='Address' dataIndex='address' key='address' />
    <Column
      title='Tags' dataIndex='tags' key='tags'
      render={(tags:string[])=>(
        <>
          {tags.map((tag)=>(
            <Tags color='blue' key={tag}>{tag}</Tag>
          ))}
        </>
      )}
    />
    <Column title='Action' key='action' render={(_:any,record:DataType)=>(
      <Space size='middle'>
        <a>Invite {record.lastName}</a>
        <a>Delete</a>
      </Space>
    )}
    />
  </Table>
)
const columns:columnsType<DataType>=[
  {
    title:'Name',
    dataIndex:'name',
    key:'name',
    width:100,
    fixed:'left',
    filters:[
      {
        text:'Joe',
        value:'Joe'
      },
      {
        text:'John',
        value:'John'
      }
    ]
  }
]
export default App
```

合并单元格，

上移下移，修改table-data，序号-优先级。

*Editable Cells,Editable Rows*.

# column

## fixed

'left'，而且必须排前面，要不然会有各种样式错乱的问题

# tableBody-height

指定一下，竖向滚动的交互体验很好

# style

可以通过覆盖默认样式来解决些很奇怪的样式问题。

# 两行表头

不要添加ellipse：true

# ant design table column 设置width不生效的解决方案
<https://blog.csdn.net/weixin_44969308/article/details/117380072> <https://github.com/ant-design/ant-design/issues/11072>
header和body都有colgroup
关键在于能看源码尽量看源码。

# selectedRows和表头的关闭、开启按钮

# window?.getTargetName

# PointsModal

# ReactReload

tableRef?.current?.actionRef.current?.reloadAndReset?.()
tableRef?.current?.tableResetReload()

# scroll

页面container设置minWidth:1000,minHeight:800;
tableScroll的值不包含calc；
