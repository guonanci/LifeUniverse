# medium

方法一：一次遍历
思路与算法

由于给定的链表是排好序的，因此重复的元素在链表中出现的位置是连续的，因此我们只需要对链表进行一次遍历，就可以删除重复的元素。由于链表的头节点可能会被删除，因此我们需要额外使用一个哑节点（dummy node）指向链表的头节点。

具体地，我们从指针 \textit{cur}cur 指向链表的哑节点，随后开始对链表进行遍历。如果当前 \textit{cur.next}cur.next 与 \textit{cur.next.next}cur.next.next 对应的元素相同，那么我们就需要将 \textit{cur.next}cur.next 以及所有后面拥有相同元素值的链表节点全部删除。我们记下这个元素值 xx，随后不断将 \textit{cur.next}cur.next 从链表中移除，直到 \textit{cur.next}cur.next 为空节点或者其元素值不等于 xx 为止。此时，我们将链表中所有元素值为 xx 的节点全部删除。

如果当前 \textit{cur.next}cur.next 与 \textit{cur.next.next}cur.next.next 对应的元素不相同，那么说明链表中只有一个元素值为 \textit{cur.next}cur.next 的节点，那么我们就可以将 \textit{cur}cur 指向 \textit{cur.next}cur.next。

当遍历完整个链表之后，我们返回链表的的哑节点的下一个节点 \textit{dummy.next}dummy.next 即可。

细节

需要注意 \textit{cur.next}cur.next 以及 \textit{cur.next.next}cur.next.next 可能为空节点，如果不加以判断，可能会产生运行错误。

代码

注意下面 \texttt{C++}C++ 代码中并没有释放被删除的链表节点以及哑节点的空间。如果在面试中遇到本题，读者需要针对这一细节与面试官进行沟通。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/solution/shan-chu-pai-xu-lian-biao-zhong-de-zhong-oayn/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

复杂度分析

时间复杂度：O(n)O(n)，其中 nn 是链表的长度。

空间复杂度：O(1)O(1)。

存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中   没有重复出现   的数字。

返回同样按升序排列的结果链表。



示例 1：

输入：head = [1,2,3,3,4,4,5]
输出：[1,2,5]
示例 2：

输入：head = [1,1,1,2,3]
输出：[2,3]



提示：

链表中节点数目在范围 [0, 300] 内
-100 <= Node.val <= 100
题目数据保证链表已经按升序排列

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) {
    return head
  }

  const dummy = new ListNode(0, head)

  let cur = dummy
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      const x = cur.next.val
      while (cur.next && cur.next.val === x) {
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }
  }
  return dummy.next
}
```
