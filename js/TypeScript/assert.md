```tsx
const a = data?.list! // data may be empty, so a may be undefined, but how about this:(success+data)
const { success, data } = await selectAllPortalPage(queryParams)
if (success) setDS(data?.list!)
// in fact,为了防止后端返回乱七八糟的东西，还是这样为好：
setDS(data?.list || [])
```
