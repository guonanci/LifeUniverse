# 检查对象是否为空
{}
```js
const isEmpty=obj=>Reflect.ownKeys(obj).length===0&&obj.constructor===Object
isEmpty({})//true
isEmpty({a:'not empty'})//false
```
