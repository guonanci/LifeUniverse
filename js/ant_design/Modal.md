统一的宽度为 800px

遮罩层 hover 上去时，需要变成手形。

必须要手动控制显隐，而且正常情况下必须设置为 visible 为 FALSE，不要染，onOk，onCancel 的函数值，一定会带来其他副作用

上次我在这个问题上跪了很久很久：

# Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffects, but useEffect either doesn't have a dependency arr, or one of the dependencies changes on every render.

```js

at SortModal (https://localhost:8000/umi.js:336932:32)
at Field
at div
at
at div
at DimMeasFilters
at ConnectFunction
at div
at Tabpane
at div
at div
at TabpanelList
at div
at Tabs
at Tabs
at div
at NLQMain
at main
at div
at NLQ
at LoadableComponent
at Route
at Switch
之前导致死循环（useEffect 内 setState）：
```

ModalForm-modalProps-okButtonProps-disabled 失效？只能写死？

Modal.confirm.onOk 容易形成闭包，缓存，造成 bug

看来他们都不吃猕猴桃，明早我要先吃掉柳程的，后天陈子健，大后天莫非，思佚，陈锦

以后再也不主动给吃的给你们了。

```js

        onOk() {
          return handleAddConfirmOk(portalSetting)
        },
```

通过 Modal.useModal 创建支持读取 context 的 contextHolder。

Modal.confirm 会阻碍热刷新，控制不了 visible？(文档有问题，可以控制的)

destroyOnClose 不起作用，这样 ye 不起作用:

```js
{
  visible && <Modal>a</Modal>;
}
```

# input

[光标无法移动](https://codesandbox.io/s/ji-ben-antd-4-17-2-forked-d2s4p?file=/index.js:719-818)



transparent属性和closable
# destroyOnClose

# ModalForm
## form.resetFields()

Modal.confirm里面涵盖的state没法得到最新值，因为Modal.confirm是通过onClick之类触发的。
