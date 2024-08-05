# easy

https://leetcode-cn.com/problems/employee-importance/solution/yuan-gong-de-zhong-yao-xing-by-leetcode-h6xre/

690. 员工的重要性
     给定一个保存员工信息的数据结构，它包含了员工 唯一的 id ，重要度 和 直系下属的 id 。

比如，员工 1 是员工 2 的领导，员工 2 是员工 3 的领导。他们相应的重要度为 15 , 10 , 5 。那么员工 1 的数据结构是 [1, 15, [2]] ，员工 2 的 数据结构是 [2, 10, [3]] ，员工 3 的数据结构是 [3, 5, []] 。注意虽然员工 3 也是员工 1 的一个下属，但是由于 并不是直系 下属，因此没有体现在员工 1 的数据结构中。

现在输入一个公司的所有员工信息，以及单个员工 id ，返回这个员工和他所有下属的重要度之和。

示例：

输入：[[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1
输出：11
解释：
员工 1 自身的重要度是 5 ，他有两个直系下属 2 和 3 ，而且 2 和 3 的重要度均为 3 。因此员工 1 的总重要度是 5 + 3 + 3 = 11 。

提示：

一个员工最多有一个 直系 领导，但是可以有多个 直系 下属
员工数量不超过 2000 。
通过次数 35,646 提交次数 57,130
请问您在哪类招聘中遇到此题？
贡献者
LeetCode

前言
由于一个员工最多有一个直系领导，可以有零个或若干个直系下属，因此员工之间的领导和下属关系构成树的结构。给定一个员工编号，要求计算这个员工及其所有下属的重要性之和，即为找到以该员工为根节点的子树的结构中，每个员工的重要性之和。

对于树结构的问题，可以使用深度优先搜索或广度优先搜索的方法解决。

# 深度优先搜索

根据给定员工编号找到员工，从该员工开始遍历，对于每个员工，将其重要性加到总和中，然后对该员工的每个直系下属继续遍历，直到所有下属遍历完毕，此时总和即为给定员工即其所有下属重要性之和

实现方面，由于给定的是员工编号，且每个员工编号都不相同，因此可以使用哈希表存储每个员工编号和

```tsx
/**
 * Definition for Employee.
 * fn Employee(id, importance, subordinates) {
 *   this.id=id
 *   this.importance=importance
 *   this.subordinates=subordinates
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return  {number}
 */
var GetImportance = function (employees, id) {
  const map = new Map()
  for (const employee of employees) map.set(employee.id, employee)
  const dfs = (id) => {
    const employee = map.get(id)
    let total = employee.importance
    const subordinates = employee.subordinates // 下属
    for (const subId of subordinates) total += dfs(subId)
    return total
  }
  return dfs(id)
}
```

复杂度分析

时间复杂度：O(n)O(n)，其中 nn 是员工数量。需要遍历所有员工，在哈希表中存储员工编号和员工的对应关系，深度优先搜索对每个员工遍历一次。

空间复杂度：O(n)O(n)，其中 nn 是员工数量。空间复杂度主要取决于哈希表的空间和递归调用栈的空间，哈希表的大小为 nn，栈的深度不超过 nn。

# 方法二：广度优先搜索

使用哈希表存储每个员工编号和对应的员工，即可通过员工编号得到对应员工，从该员工开始广度优先搜索，对于每个遍历到的员工，将其重要性加到总和中，最终得到的总和即为给定的员工及其所有下属的重要性之和。

```tsx
var GetImportance = function (employees, id) {
  const map = new Map()
  for (const employee of employees) map.set(employee.id, employee)
  let total = 0
  const queue = []
  queue.push(id)
  while (queue.length) {
    const curId = queue.shift()
    const employee = map.get(curId)
    total += employee.importance
    const subordinates = employee.subordinates
    for (const subId of subordinates) queue.push(subId)
  }
  return total
}
```

复杂度分析：

- 时间 O（n），其中 n 是员工数量。需要遍历所有员工，在哈希表中存储员工编号和员工的对应关系，广度优先搜索对每个员工遍历一次
- 空间 O（n），主要取决于哈希表的空间和队列空间，哈希表大小为 n，队列大小不超过 n
