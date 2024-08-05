# Unhandled Rejection (Error): Rendered more hooks than during the previous render.

```js
const searchHistoryItm = (item: HistoryItm) => {
    if (clickable.current) NLQSearchEmitter.emit(SELECT_HISTORY_WORD_EVENT, item)
    clickable.current = false
    setTimeout(() => {
      clickable.current = true
    }, 2000)
  }
onClick={() => {
                searchHistoryItm(item)
              }}
              onClick={() =>
                searchHistoryItm(item)
              }
```

# react-slate

Unhandled Rejection (Error): Unable to find DocumentOrShadowRoot for editor element: [object HTMLDivElement] (频繁点击某个文本（触发）会报错)

@antv/event-emitter

# Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:

1.  You might have mismatching versions of React and the renderer (such as React DOM)
2.  You might be breaking the Rules of Hooks
3.  You might have more than one copy of React in the same app
    See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
    ▶ 2 stack frames were collapsed.
    handleJumpLogic
    ./src/pages/scenery/EditPage/Header/CompMenu/index.tsx:215
    212 | })
    213 | }
    214 | const gotoSearchPage = () => history.push('/search')
    > 215 | const closeGroupSelect = useCallback(() => {
          | ^  216 |   dispatch({
    217 | type: 'sceneryView/update',
    218 | payload: {

# How to fix React Error: Rendered fewer hooks than expected

https://medium.com/@jonchurch/how-to-fix-react-error-rendered-fewer-hooks-than-expected-e6a378985d3c

# Uncaught Error: Rendered fewer hooks than expected. This may be caused by an accidental early return statement in React Hooks

specital or er_html(jsx) return before usetate or useEffect
https://stackoverflow.com/questions/53472795/uncaught-error-rendered-fewer-hooks-than-expected-this-may-be-caused-by-an-acc
if (withoutAuthInfo)
return (
<div className={styles.emptyWrapper}>
<Row>
<Col span={6}>
<ImgIcon url={IMG_MAP[withoutAuthInfo.sourceType]} />
</Col>
<Col span={6}>{withoutAuthInfo.name}</Col>
</Row>
<img src={EmptyAuthImg} className={styles.emptyImg} />
<p>暂无权限</p>
</div>
)
