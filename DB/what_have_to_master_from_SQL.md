# 1.了解 SQL

## 主键 primary key

表中每一行都应该有可以唯一标识自己的一（组）列。顾客表的顾客编号。订单表的订单 id。雇员表的雇员 ID 或雇员社会保险号
用来表示一个特定的行。

虽然并不总是都需要主键，但大多数数据库设计人员都保证他们创建的每个表具有一个主键，以便于以后的数据操纵和管理。

表中的任何列都可以作为主键，只要他满足以下条件：
任意两行都不具有相同的主键值；
每个行都必须具有一个主键值（主键列不允许 Null 值
主键列中的值不允许修改或更新
主键值不能重用（如果某行从表中删除，他的主键不能付给以后的新行）

主键通常定义在表的一列上，但这并不是必需，也可以使用多个列作为主键。

## 外键-第 12 章介绍

sequel 是结构化查询语言 Structured Query Language，是一门专门用来雨数据库通信的语音
SQL 扩展 ANSI SQL

# 2.检索数据

- keyword 不能做表、列名。每个 SQL 语句 一（多）个关键词构成。
- SELECT,从一（多）个表中检索信息。想选择什么，从哪里选

## 检索单列

```sql
SELECT prod_id, prod_name
-- 最后一列不加逗号否则报错
-- SELECT * 省事，所有列但是会降低检索和应用程序的性能（不过可以检索出所有列，方便了解全部列名）
FROM Products;
-- 分号分隔多条sql语句。DBMS可以不需要加分号
-- Sybase Adaptive Server
-- 关键词不区分大小写SELECT,Select,select(表列值除外，他们可以全部小写-许多SQL开发人员)
-- 分成多行方便阅读、调试
-- Fish bean bag toy
-- Bird bean bag toy
-- ...
-- 未排序的数据
```

> 数据表示，数据格式化是一个表示问题，而不是检索问题（SQL 语句一般返回原始的无格式数据）

# 3.排序检索数据

```sql
-- 数据后来更新或删除的话，顺序会受到DBMS重用回收存储空间的影响
关系数据库设计理论认为，如果不明确规定排序顺序，则不应该假定检索出的数据顺序有意义
ORDER BY
```

## clause 子句

```sql
-- FROM子句， ORDER BY子句（通常是最后一条子句，次序不对将会出现错误消息）
通常，ORDER BY的列是SELECT的列但是用非检索的列排序数据是完全合法的
SELECT prod_name
FROM Products
ORDER BY prod_price DESC, prod_name;
-- DESCENDING,ASC ASCENDING(default)
-- ORDER BY 2, 3;
-- 按字母顺序（ASCII码，字典序）排序数据
```

在 dictionary 排序中，A、被视为与 a 相同--大多数 DBMS 的默认行为。但是比如如果有大量外语字符则可以改变默认行为-需要请求数据库管理员的帮助

# 4.过滤数据

```sql
-- WHERE
-- criteria条件，根据特定操作或报告的需要提取表数据的子集，搜索条件也被称为过滤条件search criteria,filter condition
-- WHERE clause is after SELECT clause, before ORDER BY clause
SELECT prod_name, prod_price
FROM Products
WHERE prod_price = 3.49;
-- 不返回所有行，只返回prod_price值为3.49的行
PostgreSQL对传递给SQL语句的值具有严格的管理条件： decimal '3.49'
```

**Microsoft Access 不支持!=，只支持<>**

```sql
WHERE BETWEEN 5 AND 10
WHERE prod_price IS NULL
-- include 5 and 10
```

列不包含值时，称其为包含空值 Null，无值（no value），与字段包含 0，空字符串，空格不同

# 5.高级数据过滤

```sql
SELECT prod_id, prod_price, prod_name
FROM Products
WHERE vend_id = 'DLL01' AND prod_price <= 4
WHERE (vend_id = 'DLL01' OR vend_id = 'BRS01')
    AND prod_price <= 4
WHERE vend_id IN ('DLL01', 'BRS01')
ORDER BY prod_name
-- IN 操作符比OR更清楚直观（在使用长的合法选项清单时）；计算次序更容易管理（使用的操作符更少）；一般比OR更快；最大的优点：可以包含其他SELECT语句，能动态建立WHERE子句。
-- OR

-- AND操作符优先级更高，可以使用()来设定优先级
-- 不要过分依赖计算次序，他能消除歧义，提升可读性，没有什么坏处，程序也是一样

-- NOT WHERE子句中用来否定后跟条件的关键字
WHERE NOT vend_id = 'DLL01'
WHERE vend_id <> 'DLL01'
-- 在更复杂的子句中，NOT非常有用。在MySQL中，NOT只用来否定EXISTS（NOT EXISTS)

```

# 6.用通配符进行过滤

通配符搜索只能用于文本字段
通配符 wildcard 用来匹配值的一部分的特殊字符
搜索模式 search pattern/schema 由字面值、通配符或两者组成构成的搜索条件

```sql
WHERE prod_name LIKE 'Fish%';
WHERE prod_name LIKE 'F%y';
WHERE prod_name LIKE '%bean bag%';
-- % 表示任何字符出现任意次数(0,1,n)
```

操作符，也叫谓词 predicate（sql 文献手册中）

通配符下划线\_只能匹配单个字符而不是多字符
[] 集合
^ 前缀字符、脱字号

```sql
SELECT cust_contact
FROM Customers
WHERE NOT cust_contact LIKE '[^JM]%'
ORDER BY cust_contact;
```

> 通配符很有用但是有代价。其搜索处理一般要比其他搜索所花时间要长。这里给出一些使用通配符要记住的技巧：

- 不要过分使用通配符。如果其他操作符能达到相同目的，就使用。
- 在确实需要使用通配符时除非绝对有必要，否则不要把他们用在搜索模式开始处（搜索起来最慢）
- 仔细注意通配符位置，如果放错地方，可能不会返回想要的数据

# 7. 创建计算字段

怎样从应用程序中使用别名引用它们

存储在数据库中的数据一般不是应用程序所需要的格式：

- 如果想显示公司名，同时还想显示公司地址，但这两个信息一般包含在不同表列中
- 城市、州、邮政编码存储在不同列中（应该这样），但邮件标签打印程序却需要把他们作为一个恰当格式的字段检索出来
- 列数据是大小写混合的，但包标称需要需要把所有数据按大写表示出来。
- 物品订单表存储物品的价格和数量，但不需要存储每个物品的总价格（用价格乘以数量即可）。为打印发票，需要物品的总价格。
- 需要根据表数据进行总数、平均数计算或其他计算
  在上述每个例子中，存储在表中的数据都不是应用程序所需要的，我们需要直接从数据库中检索出转换、计算或格式化过的数据；而不是检索出数据，然后再在客户机应用程序中重新格式化

这就是计算字段发挥作用的所在了。与前面各章介绍过的列不同，**计算字段并不实际存在于数据库表中。计算字段并是运行时在 SELECT 语句内创建的**。

字段 field 列 column

只有数据库知道 SELECT 语句中哪些列是实际的表列，哪些列是计算字段。

数据库列一般称为列，而属于字段通常用在计算字段的连接上。

SQL 语句内完成的许多转换和格式化工作都可以直接在客户机应用程序内完成，在数据库服务器上要快得多

DBMS 就是这么设计来的

Vendors 包含供应商名和位置信息。

拼接 concatenate 将值联结到一起构成单个值 SELECT 语句中采用操作符+或||

```sql
SELECT vend_name + '(' + vend_country + ')'
FROM Vendors
ORDER BY vend_name
```

MySQL 不支持使用+或||(等同于 OR），使用 CONCAT()

```sql
SELECT CONCAT(RTRIM(vend_name), '(', vend_country, ')') AS vend_title
FROM Vendors
ORDER BY vend_name
-- RTRIM,LTRIM,TRIM

SELECT vend_name, UPPER(vend_name) AS
vend_name_upcase
FROM Vendors
ORDER BY vend_name;
-- LEFT() 或使用子字符串函数 返回串左边的字符
-- LENGTH（） 也是用 DATALENGTH() or LEN()
-- LOWER()
-- LTRIM()
-- RIGHT()
-- RTRIM()
-- SOUNDEX()
-- UPPER()
-- 发音类似
SELECT cust_name, cust_contact
FROM Customers
WHERE SOUNDEX(cust_contact) = SOUNDEX('Michael Green')

-- 日期和时间值 变体，以特殊格式存储，以便能快速和有效地排序和过滤，节省物理存储空间
-- 一般，应用程序不使用用来存储日期和时间的格式，因此读日期和时间函数总是用来读取、统计和处理这些值。所以，。。函数在 sql 中很重要，但是很不一致，可移植性最差
-- Orders 表中包含的订单都带有订单日期。

SELECT order_name
FROM Orders
WHERE DATEPART('yy', order_date) = 2004;
WHERE YEAR(order_date) = 2004; -- MySQL
WHERE to_number(to_char(order_date, 'YY')) = 2004 -- Oracle

WHERE order_date BETWEEN to_date('01-JAN-2004') AND to_date('02-DEC-2004')

-- SQL  Server 不支持 to_date函数
-- MySQL具有各种日期处理函数，但是没有 DATEPART()。-YEAR(),Oracle 也没有 DATEPART

-- 数值处理函数用于代数、三角、几何运算。在主要 DBMS 函数中，数值函数最统一：
ABS
COS -- 返回一个角度的余弦
EXP -- 返回一个数的指数值
PI --
SIN
SQRT
TAN
```

# 8.使用数据处理函数

数据处理函数在格式化、处理、过滤数据中（见上方 sql，写错位置了）

# 9.汇总数据

## 9.1 聚集函数 aggregate function

不规范的常见译法包括聚合函数（微软文档）、合计函数、统计函数
运行在行组上，计算和返回单个值的函数
汇总表的数据，我们经常需要汇总数据而不用把他们实际检索出来，为此 sql 提供了专门的函数。以便分析和报表生成。检索例子：

- 确定表中行数（或者满足某个条件或包含某个特定值的行数）
- 获得表中行组的和
- 找出表列（或所有行或某些特定行）的最大、最小、平均值

上述例子都需要对标中数据汇总而不是实际数据本身。因此，返回实际表数据是对时间和处理资源的一种浪费（更不用说带宽）。重复一遍，实际想要的是汇总信息。

为方便这种类型的检索，sql 给出了 5 个聚集函数，
AVG 返回某列平均值
COUNT 返回某列行数
MAX
MIN
SUM 返回某列值之和

### AVG

```sql
SELECT AVG(prod_price) AS avg_price
FROM Products
WHERE vend_id='DLL01';
```

只适用于单列：列名作为函数参数给出，为了获得多列平均值，必须使用多个 AVG 函数；AVG 函数忽略列值为 Null 的行
COUNT：确定表中行的数目或者符合特定条件的行数目

- COUNT(\*) 对表中行数目进行计数，不管表列中包含的是空 Null 还是非空值
- COUNT（col）对特定列中具有值的列进行计数，忽略 Null 值

```sql
SELECT COUNT(*) AS num_cust
FROM Customers;
-- 在此例子中，利用 COUNT(*)对所有行计数，不管行中各列有什么值，计数值在 num_cust 中返回

-- 下面的例子只对具有电子邮件地址的客户计数：
SELECT COUNT(cust_email) AS num_cust
FROM Customers;
```

指定 all 参数或者不给参数（all 是默认行为）；只包含不同值，指定 DISTINCT 参数

```sql
SELECT AVG(DISTINCT prod_price) AS avg_price
FROM Products
WHERE vend_id = 'D';
```

实际上 SELECT 语句可根据需要包含多个聚集函数。

```sql
SELECT COUNT(*) AS num_items,
       MIN(prod_price) AS price_min,
       MAX(prod_price) AS price_max,
       AVG(prod_price) AS price_avg
FROM Products;
```

这里用单条 SELECT 语句执行了 4 个聚集函数，返回 4 个值（Products 表中物品的数目，产品价格的最高最低平均值

取别名：
在指定列名以包含某个聚集函数的结果时，不应该使用表中实际的列名，虽然这样做并非不合法，但许多 sql 实现不支持，可能会产生模糊的错误消息。

## 9.4 小结

聚集函数用来汇总数据。SQL 支持 5 个聚集函数，可以用多种方法使用它们返回需要的结果。这些函数是高效涉及的，他们返回结果一般比你在自己的客户机应用程序中计算要快得多。

# 10.分组数据

汇总表内容的子集。两个新 SELECT 语句子句，分别是：GROUP BY 子句和 HAVING 子句。

## 数据分组

从上一章知道，sql 聚集函数可用来汇总数据。这使我们能够对行进行计数，计算和与平均数，获得最大和最小值而不用检索所有数据。
目前为止的所有计算都是在表的所有数据或匹配特定的 WHERE 子句的数据上进行的。提示一下，下面的例子返回供应商 DLL01 提供的产品数目：

```sql
SELECT COUNT(*) AS num_prods
FROM Products
WHERE vend_id = 'DLL01';
```

如果要返回每个供应商提供的产品数目呢或者返回只提供单项产品的供应商所提供的产品，或者返回提供 10 个以上产品的供应商怎么办
这就是分组显身手的时候。分组允许把数据分为多个逻辑组，以便能对每个组进行聚集计算。

## 10.2 创建分组 lodash_groupBy?世界上的技术是相通的

分组是在 SELECT 语句中的 GROUP BY 子句中建立的。理解分组的最好办法是看一个例子：

```sql
SELECT vend_id, COUNT(*) AS num_prods
FROM Products
GROUP BY vend_id;
-- output
vend_id     num_prods
------  ---------
BRS01   3
DLL01   4
FNG01   2
```

上面的 SELECT 语句指定了两列，vend_id 包含产品供应商的 ID，num_prods 为计算字段（用 COUNT(\*)函数建立。GROUPBY 子句指示 DBMS 按 vend_id 排序并分组数据。这导致为每个 vend_id 而不是整个表计算 num_prods 一次。从输出中可以看到，供应商 BRS01 有 3 个产品，DLL01 有 4 个产品，而供应商 FNG01 有 2 个产品。

因为使用了 GROUP BY，就不必指定要计算和估值的每个组了。系统会自动完成。GROUP BY 子句指示 DBMS 分组数据，然后对每个组而不是整个结果集进行聚集。

在具体使用 GROUP BY 子句前，需要知道一些重要的规定：

- GROUP BY 子句可以包含任意数目的列。这使得能对分组进行嵌套，为数据分组提供更细致的控制。
- 如果在 GROUP BY 子句中嵌套了分组，数据将在最后规定的分组上进行汇总。换句话说，在建立分组时，指定的所有列都一起计算（所以不能从个别的列取回数据）
- GROUP BY 子句中列出的每个列都必须是检索列或有效的表达式（但不能是聚集函数）。如果在 SELECT 中使用表达式，则必须在 GROUP BY 子句中指定相同表达式。不能使用别名。
- 大多数 SQL 实现不允许 GROUP BY 列带有长度可变的数据类型（如文本或备注型字段）
- 除聚集计算语句外，SELECT 语句中的每个列都必须在 GROUP BY 子句中给出。
- 如果分组列中具有 NULL 值，则 NULL 将作为一个分组返回。如果列中有多行 Null 值，他们将分为一组
- GROUP BY 子句必须出现在 WHERE 子句之后，ORDER BY 子句之前

ALL 子句 有的 SQL 实现（如 Microsoft SQL Server）在 GROUP BY 中支持可选的 ALL 子句。

这个子句可用来返回所有分组，即使是没有匹配行的分组也返回（在此情况下，聚集将返回 Null）。具体的 DBMS 是否支持 all，请参阅相应文档。

通过相对位置指定列 有的 SQL 实现允许根据 SELECT 列表中的位置指定 GROUP BY 的列。例如 GROUP BY 2，1 可表示按选择的第二个列分组，然后再按第一个列分组，虽然这种速记语法很方便，但并非所有 sql 实现都支持，并且使用它很容易在编辑 SQL 语句时出错。

## 10.3 过滤分组

除了能用 GROUP BY 分组数据外，SQL 还允许过滤分组，规定包括哪些分组，排除哪些分组。例如，可能想要列出至少有两个订单的所有顾客。为得出这种数据，必须基于完整的分组而不是个别的行进行过滤。

我们已经看到了 WHERE 子句的作用（第 4 章中引入）。但是，这个例子中 WHERE 不能完成任务，因为 WHERE 过滤指定的是列而不是分组。事实上，WHERE 没有分组的概念。
那么不使用 WHERE 使用什么呢。SQL 为此目的提供了另外的子句，那就是 HAVING 子句。HAVING 非常类似于 WHERE。事实上，目前为止所学过的所有类型的 WHERE 子句都可以用 HAVING 来替代。唯一的差别是 WHERE 过滤行，而 HAVING 过滤分组。

HAVING 支持所有 WHERE 操作符 第 4 章和第 5 章中，学习了 where 子句的条件（包括通配符条件和带多个操作符的子句）。所学过的有关 where 的所有这些技术和选项都适用于 having，他们的句法是相同的，只是关键字有差别。

那么，怎么过滤行呢，请看以下例子：

```sql
SELECT cust_id, COUNT(*) AS orders
FROM Orders
GROUP BY cust_id
HAVING COUNT(*) >= 2;
-- output
cust_id   orders
-------   -------
100000001  2
```

这条 SELECT 语句的前 3 行类似于上面的语句。最后一行增加了 HAVING 子句，它过滤 COUNT（\*） >= 2（两个以上的订单）的那些分组。

正如所见，这里 WHERE 子句不起作用，因为过滤是基于分组聚集值而不是特定值的。

_HAVING 和 WHERE 的差别 这里有另一种理解方法，where 在数据分组前进行过滤，having 在分组后进行_。这是重要区别，where 排除的行
不包括在分组中。这可能会改变计算值，从而影响 having 子句中基于这些值过滤掉的分组

那么，有没有在一条语句中同时使用 where 和 having 子句的需要呢？事实上，确实有。假如想进一步过滤上面的语句，使她返回过去 12 个月内具有两个以上订单的顾客。为达到这一点，可增加一条 where 子句，过滤出过去 12 个月内下过的订单。然后再增加 having 子句过滤出具有两个以上订单的分组

为更好地理解，下面例子列出具有两个以上、价格为 4 以上的产品的供应商：

```sql
SELECT vend_id, COUNT(*) AS num_prods
FROM Products
WHERE prod_price >= 4
```

HAVING 和 WHERE 非常类似，如果不指定 GROUP BY，则大多数 DBMS 将把他们作为相同的东西对待。不过你自己要能区分这一点，应该仅在与 GROUP BY 子句结合时才使用 HAVING。而 WHERE、子句用于标准的行级过滤。

## 10.4 分组和排序

虽然 GROUP BY2、和 ORDER BY 经常完成相同的工作，但他们非常不同。
ORDER BY GROUP BY
排序产生的输出 分组行。但输出可能不是分组的顺序
任意列都可以使用（甚至非选择的列也可以使用） 只可能使用选择列或表达式列，而且必须使用每个选择列表达式
不一定需要 如果与聚集函数一起使用列（或表达式），则必须使用
表 10-1 列出的第一项差别极为重要。我们经常发现 GROUP BY 分组的数据确实是以分组顺序输出的。 但情况并不总是这样，他并不是 SQL 规范所要求的。此外，即使特定的 DBMS 总是按给出的 GROUP BY 子句排列数据，用户也可能会要求以不同的顺序排序。仅因为你以某种方式分组数据（获得特定的分组聚集值），

# 11.使用子查询

**简单查询：从单个数据库表中检索数据的单条语句**
创建子查询：嵌套在其他查询中的查询 MySQL4.1 本书所有章节：数据库表都是关系表（关于每个表几关系） 订单存储在俩个表中。对于包含订单号、客户 ID、订单日期的每个订单，Orders 表存储一行。

各订单的物品存储在相关的 OrderItems 表中。Orders 表不存储客户信息。他只存储客户 ID。实际的客户信息存储在 Customers 表中。

# Page 77/215

# 12.联结表

# 13.创建高级联结

# 14.组合查询

# 15.插入数据

# 16.更新和删除数据

# 17.创建和操纵表

# 18.使用视图

# 19.使用储存过程

# 20.管理事务处理

# 21 使用游标

# 22 了解高级 SQL 特性
