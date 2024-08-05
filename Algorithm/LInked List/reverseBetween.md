反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明:
1 ≤ m ≤ n ≤ 链表长度。

示例:

输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-linked-list-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
使用「206. 反转链表」的解法，反转 left 到 right 部分以后，再拼接起来。我们还需要记录 left 的前一个节点，和 right 的后一个节点。如图所示：

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/reverse-linked-list-ii/solution/fan-zhuan-lian-biao-ii-by-leetcode-solut-teyq/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
pre:precursor 前驱
succ:successor 后继
算法步骤：

第 1 步：先将待反转的区域反转；
第 2 步：把 pre 的 next 指针指向反转以后的链表头节点，把反转以后的链表的尾节点的 next 指针指向 succ。

说明：编码细节我们不在题解中介绍了，请见下方代码。思路想明白以后，编码不是一件很难的事情。这里要提醒大家的是，链接什么时候切断，什么时候补上去，先后顺序一定要想清楚，如果想不清楚，可以在纸上模拟，让思路清晰。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/reverse-linked-list-ii/solution/fan-zhuan-lian-biao-ii-by-leetcode-solut-teyq/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```js
// 穿针引线
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val === undefined ? 0 : val)
 *   this.next = next === undefined ? null : next
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  // 因为头节点可能发生变化，使用虚拟节点可以避免复杂的分类讨论
  const dummyNode = new ListNode(-1)
  dummyNode.next = head

  let pre = dummyNode
  // 第1步：从虚拟头结点走left-1步，来到left节点的前一个节点
  // 建议写在for循环里，语义清晰
  for (let i = 0; i < left - 1; i++) pre = pre.next
  // 第二步：从pre再走right-left+1步，来到right节点
  let rightNode = pre
  for (let i = 0; i < right - left + 1; i++) rightNode = rightNode.next
  // 第三步：切断出一个子链表（截取链表）
  let leftNode = pre.next
  let cur = rightNode.next
  // 注意：切断链接
  pre.next = null
  rightNode.next = null
  // 第四步：同第206题，反转链表的子区间
  reverseLinkedList(leftNode)
  // 第五步：接回到原来的链表中
  pre.next = rightNode
  leftNode.next = cur
  return dummyNode.next
}

const reverseLinkedList = (head) => {
  let pre = null
  let cur = head

  while (cur) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
}
```
