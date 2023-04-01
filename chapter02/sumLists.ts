class ListNode {
    data: number;
    next: ListNode | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    } }

function sumList(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy = new ListNode(0);
    let curr: ListNode = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        let v1 = l1 ? l1.data : null;
        let v2 = l2 ? l2.data : null;

        let value = (v1 ?? 0) + (v2 ?? 0) + carry;
        carry = Math.floor(value / 10);
        value = value % 10;
        curr.next = new ListNode(value);

        curr = curr.next;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return dummy.next;
}


let l1 = new ListNode(7);
l1.next = new ListNode(1);
l1.next.next = new ListNode(6);

let l2 = new ListNode(5);
l2.next = new ListNode(9);
l2.next.next = new ListNode(2);

console.log(sumList(l1, l2)); // Expected output: 2 -> 1 -> 9
