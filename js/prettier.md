linkSetting[fieldK] = v;
(clonedV.find((v) => v.code == selectedCode) as LinkField).linkSetting = linkSetting TypeError: v is not a function(第一行行尾没有分号的话会报这个错)

if 语句不加花括号然后不配置分号的话，容易在圆括号后报语法错误：
retDbs = mbiLogicTables
.filter((v) => !['CUSTOMIZE', 'SQL'].includes(v.physicalTableType))
.map((v: any) => v.physicalTableName.split('.')[0])
.filter(Boolean)
// let { defaultDb } = props
// exchangeInArr(connectionDbs.indexOf(defaultDb), connectionDbs.length - 1, connectionDbs)
[...new Set(retDbs)].forEach

没有分号的代码复制到 nodejs 命令行会出现问题（Unexpected token）

工作coding的时候，能省略空格就省略空格，这样可以节约大量时间。
