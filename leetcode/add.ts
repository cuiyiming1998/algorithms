 /*
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

export const add = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  let res = new ListNode(0)
  let t = res
  let n = 0 // 进位
  let sum = 0

  while (l1 || l2) {
    const val1 = l1?.val ?? 0
    const val2 = l2?.val ?? 0


    sum = val1 + val2 + n

    n = sum >= 10 ? 1 : 0

    t.next = new ListNode(sum % 10)
    t = t.next

    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  if (n === 1) {
    t.next = new ListNode(1)
  }

  return res.next
};
// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.