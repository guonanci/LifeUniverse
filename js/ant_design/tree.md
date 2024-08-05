onSelect 点击树节点触发 function(selectedKeys, e:{selected: bool, selectedNodes, node, event})

为了方便用户使用？：点击左侧的菜单可以同步到右侧的菜单设置选中的菜单，点击右侧菜单设置区的话，左边选中的菜单也需要改变。。。

找到第一个默认打开页的 leafMenu 和对应的 firstLayerMenu

selectedKeys 支持多选吗(multiple={true}?)

和 menu 联动时，统一 selectedKeys 这样的逻辑
