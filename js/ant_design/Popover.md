手动控制 visible 太恶心了（好像要给 docu.ment.body 设置点击事件，setPopoverVisible 为 false），trigger 设置成 hover 不就万事大吉了？

ant-menu-submenu-hidden==>ant-menu-submenu （方式调试子菜单样式，Popover 的 trigger 改成 click 也不方便调试子菜单的）


trigger='click'时，click some<enuItm时需要更新menuItems，这时候popover没有消失，那么需要手动设置popOverVisible为FALSE吗



