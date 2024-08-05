```tsx
export async function getUserDataAsset(
  dataModelCode:string,
):Promise<{success:boolean,data?:UserDataAsset}>{
  return requestUtil
  .get('/webapi/nlq/getUserDataAssets',{params:{dataModelCode}})
  .then({success,data}:{success:boolean,data:{content:UserDataContent}})=>{
    const asset=get(data,'content[0]') as UserDataAsset
    if(!success||!asset)return { success: false}
    supplementSelectedModelFieldProperties([asset.dataModelVO])
    return {success,data:asset}
  })
}
```

# Type 'CancelPublishPortalResp | { success: false; data?: undefined; } | { data: boolean; success: true; }' is not assignable to type 'CancelPublishPortalResp'.

Type '{ success: false; data?: undefined; }' is not assignable to type 'CancelPublishPortalResp'.
Types of property 'data' are incompatible.
Type 'undefined' is not assignable to type 'boolean'.ts(2322)
var data: boolean
No quick fixes available

`request` lib resp-data may be empty. And if resp-suc is false, resp-attachment can be used.
Type 'void | EditPortalResp' is not assignable to type 'EditPortalResp'.
Type 'void' is not assignable to type 'EditPortalResp'.ts(2322)

Type 'void | EditPortalResp' is not assignable to type 'EditPortalResp'.
Type 'void' is not assignable to type 'EditPortalResp'.ts(2322)

Type 'EditPortalResp | { data: any; success: any; }' is not assignable to type 'EditPortalResp'.
Type '{ data: any; success: any; }' is missing the following properties from type 'EditPortalResp': attachment, retCode

Module build failed (from ./node_modules/@umijs/deps/compiled/babel-loader/index.js):
Error: ENOENT: no such file or directory, open '/Users/guonanci/Documents/magicbi_web/src/services/portal.ts'

@ ./src/pages/portal/viewPage/index.tsx 14:0-51 39:21-35
@ ./src/.umi/core/routes.ts
@ ./src/.umi/umi.ts
@ multi ./src/.umi/umi.ts

# 后端接口设计原则

发布和更新发布接口

NotAllowedError, Failed to execute 'request' on 'WakeLock': the requesting page is not visible

JSON.parse(((answerInfo?.chartContent || '{}')?.nlq?.question||'{}')?.content||'{}')

er: the page the request in is not visible(useUnmountRef??)

# cross-origin

Error: A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.
▶ 14 stack frames were collapsed.
EventEmitter.<anonymous>
./src/pages/NLQ/Main/ChartPanel/index.tsx:148:16
145 | dom = (
146 | <>
147 | <div>请修正'{queryText}'的查询条件为：</div>

> 148 | <div>0 个维度且 1 个指标</div>

      |        ^  149 |       </>

150 | )
151 | }
View compiled
▶ 2 stack frames were collapsed.
DimsMeasFilters.Object.wait
./src/pages/NLQ/Main/SelfHelpAnalysisConditions/index.tsx:329:21
326 | const stringifiedFilter = JSON.stringify(
327 | allFields[FieldTyp.FILTER].filter((v) => v.$filter).map((v) => v.$filter),
328 | )

> 329 | const params = {

      |               ^  330 |   chartType: ChartType.table,

331 | dataModelCode: dataModel?.code,
332 | edit: true,
View compiled
▶ 6 stack frames were collapsed.
