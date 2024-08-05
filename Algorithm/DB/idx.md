联结，子查询，存储过程，游标，触发器，表约束 SQL

# 安全检查

```sql
ORDER BY `地区_1000000` ASC LIMIT 0 OFFSET 0 排序关键词（带分页）
查询异常： cn.magicbi.magicbiserver.common.exception.MbiException:query failed due to exception:sql injection violation, dbType mysql, druid-version 1.2.5, limit row 0: SELECT t0.`地区` AS `地区`, t0.`城市`,t0.`类别`,SUM(t0.`销售额_0`) AS `销售额`,t0.`地区` AS `地区`

```
