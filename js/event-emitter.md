when use in `useEffect`, must use handlerFn to get latest stateData

# onClick

如果要 emit 的话，需要 useThrottle

# off

可以指定 off 的第二个参数，表示具体的 offFn

eventEmitterKey 有时候是空字符有时候是随机码

张青松, a week ago (November 19th, 2021 8:20pm)

fix(nlq): 修复 nlq 搜索框多实例状态污染问题

# emit&on

on 里要 setState 时，要先运用 isEqual+JSON.stringify。或者 emit 时运用 isEqual+JSON.stringify(。
