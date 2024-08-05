# React EasyUI
`npm install rc-easyui --save`
```less
@import '~rc-easyui/dist/themes/default/easyui.css'
@import '~rc-easyui/dist/themes/icon.css'
@import '.../react.css'
```
```js
import React from 'react'
import { DataGrid,GridColumn } from 'rc-easyui'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data:this.getData()
    }
  }
  getData(){
    return [
      {code:'FI-SW-01',name:'Koi',unitcost:10.00,status:'P',listprice:33.5,attr:'Larget',itemid:'EST-1'},
      {code:'FI-SW-01',name:'Koi',unitcost:10.00,status:'P',listprice:33.5,attr:'Larget',itemid:'EST-1'},
      {code:'FI-SW-01',name:'Koi',unitcost:10.00,status:'P',listprice:33.5,attr:'Larget',itemid:'EST-1'},
    ]
  }
  render(){
    return (
      <div>
        <DataGrid data={this.state.data} style={{height:300}}>
          <GridColumn field='itemid' title='Item ID' />
          <GridColumn field='name' title='Item ID' />
        </DataGrid>
      </div>
    )
  }
}
export default App
```
# SearchBox
value,category,categories,menuAlign,buttonAlign,buttonIconCls,addonRight,onSearch
# Menu
# Draggable(标签框)
继承ComboBox/TagBox，value,hasDownArrow,multiple,limitToList,tagCss
可以是样式类、内联样式或者返回样式类或者内联样式的自定义函数
```js
tagCss(row){
  if(row.id===3){
    return {
      background:'#ffd7d7',
      color:'#c65353',
    }
  }
}
```

# datagrid
从已有的表格元素创建数据网格（datagrid），在 html 中定义列、行及数据。
```html
<table class="easyui-datagrid">
    <thead>
		<tr>
			<th data-options="field:'code'">Code</th>
			<th data-options="field:'name'">Name</th>
			<th data-options="field:'price'">Price</th>
		</tr>
    </thead>
    <tbody>
		<tr>
			<td>001</td><td>name1</td><td>2323</td>
		</tr>
		<tr>
			<td>002</td><td>name2</td><td>4612</td>
		</tr>
	</tbody
```
通过 <table> 标记创建数据网格（datagrid）。嵌套的 <th> 标签定义表格中的列。

```html
<table class="easyui-datagrid" style="width:400px;height:250px"
    data-options="url:'datagrid_data.json',fitColumns:true,singleSelect:true">
    <thead>
		<tr>
			<th data-options="field:'code',width:100">Code</th>
			<th data-options="field:'name',width:100">Name</th>
			<th data-options="field:'price',width:100,align:'right'">Price</th>
		</tr>
    </thead>
</table>
```
也可以使用 javascript 创建数据网格（datagrid）。
```html
<table id="dg"></table>

```
```js
$('#dg').datagrid({
    url:'datagrid_data.json',
    columns:[[
		{field:'code',title:'Code',width:100},
		{field:'name',title:'Name',width:100},
		{field:'price',title:'Price',width:100,align:'right'}
    ]]
});
```
通过一些参数查询数据:
```js
$('#dg').datagrid('load', {
    name: 'easyui',
    address: 'ho'
});
```
在向服务器改变数据之后，更新前台数据。
```js
$('#dg').datagrid('reload');    // reload the current page data

```


2018年停止更新
