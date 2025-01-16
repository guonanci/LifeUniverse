写那么多 transition 样式是为了动画效果？

submenu open&selected 时的 color 保持和 itm 一致（menuHighlightColor）。

selectedKeys 支持多选吗(multiple={true}?)

默认打开页真的完全起对作用了吗

leftTop：点击左侧菜单（menuItm）的话，会切换成另一个一级菜单的 subMenus。

青松在考虑 nodejs 的 LDAP 服务部署和开发

要改组件的样式不简单，要考虑各种 hover 后的 important 强制设置样式

Menu.onClick 和 SubMenu.onTitleClick 不要分别与 onSelect、onOpenChange 并存（要把这两者的逻辑写进前两者）

subMenu-open 更改时，不会触发 curMenu 的更改（menuItm-selected 与否才会 trigger）

[Warning: React does not recognize the `inlineIndent` prop on a DOM element.](https://github.com/ant-design/ant-design/issues/8708)
