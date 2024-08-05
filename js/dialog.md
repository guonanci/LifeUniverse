dialog.md
https://juejin.cn/post/7111973933830078494 ：ｅｌｅｍｅｎｔui-dialog
流程，层级的处理


https://juejin.cn/post/6898147400456601608
Portals内容传送，ReactDOM对象下的方，`ReactDOM.createPortal(children, container)`

Children: 任何可渲染的React元素；
Container: 需要被挂载的DOM元素；
Dialog对话框组件设计思路
创建Dialog组件实例时将组件挂载到body下，卸载组件时从body上移除组件实例

```js
使用dialog组件
import React, { useState } from 'react';
import Dialog from '../../components/Dialog/index';
import { Button } from 'antd';
import './index.less';

const UseDialog = () => {
    const [isShowDialog, setIsShowDialog] = useState(false);
    const toggleDialog = () => {
        setIsShowDialog(prev => !prev.isShowDialog);
    }
    const closeDialog = () => {
        setIsShowDialog(false);
    }
    const onSure = () => {
        console.log('确定...');
        setTimeout(() => {
            setIsShowDialog(false);
        }, 2000);
    }
    return (
        <div className="p-use-dialog">
            <Button onClick={toggleDialog}>使用弹窗类组件</Button>
            {
                isShowDialog
                && <Dialog
                title="这是标题"
                dialogWidth='80%'
                onCancle={closeDialog}
                onOk={onSure}
                cancelText="残忍离开"
                sureText="我再想想"
                >
                    <div className='dialog-content'>具体内容请写在这里...</div>
                </Dialog>}
        </div>
    );
}

export default UseDialog;
```
```js
dialog实现
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './index.less';
import { Divider, Button } from 'antd';

const Dialog = (props) => {
    const node = document.createElement('div');
    document.body.appendChild(node);
    useEffect(() => {
        return () => {
            document.body.removeChild(node);
        };
    }, []);
    return createPortal(
        <div className="com-dialog">
            <div className="com-dialog-inner" style={{width: props.dialogWidth}}>
                <div className="dialog-title">{props.title}</div>
                <Divider />
                <div className="content">{props.children}</div>
                <Divider />
                <div className="btn">
                    <Button type="default" onClick={props.onCancle}>{props.cancelText || '取消'}</Button>
                    <Button type="primary" onClick={props.onOk}>{props.sureText || '确定'}</Button>
                </div>
            </div>
        </div>,
        node
    )
}
cosnt Dialog2 = (props) => {
  const node = document.createElement('div')
  document.body.appendChild(node)
  useEffect(()=>{
    return ()=>{
      document.body.removeChild(node)
    }
  })
}

export default Dialog;
```
protal不仅可以实现一些弹窗，对话框组件，在使用到地图Api,图表的业务场景下也是很实用的，一般而言，地图的层级一般是比较高的，对于地图封装的一些方法例如滚动，禁止滚动等场景下，地图的滚动事件和浏览的的滚动事件可能会发生冲突，此时可以通过将地图挂载其他的节点中，已避免事件冲突。

作者：minCat
链接：https://juejin.cn/post/6898147400456601608
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



https://cloud.tencent.com/developer/article/1446434
