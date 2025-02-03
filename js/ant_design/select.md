左侧涉及到 select-list（比如说按字段添加设置），最好采用 disable 方式，不要手动增删每个 select 的 options，最好 options 是一样的长度，disable 的也都一样），多么简短的逻辑，交互和代码逻辑都简单化了，前端代码也好写了许多

# onChange

v=>handleSelectVChange（v），不是event，没有target.value。

初始值渲染时，不会触发 onChange

Table-filters：option

```TypeScript
filterOption={(inputV, option) => {
                return option?.children.toLowerCase().indexOf(inputV.toLowerCase()) >= 0
              }}

// (property) OptionCoreData.children?: any
// @deprecated — Only works when use children as option data

// “children”已弃用。ts(6385)
// index.d.ts(17, 9): 该声明曾在此处标记为已弃用。
// 没有可用的快速修复
```

# onSelect

mode='tags' 'multiple'时区分比较明显

# name设置成了undefined

ProFormSelect在ProForm不起作用！原来是name没设置好，表面上设置成了undefined了，而且只设置了placeholder！！

get和put也用data属性传参，put一般把id放最后，这样。

{id:React.Key};NoTitleContainer;
