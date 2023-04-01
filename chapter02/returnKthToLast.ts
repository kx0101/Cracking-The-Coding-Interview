class ListNode<T> {
    data: T;
    next: ListNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

function kthToLast<T>(head: ListNode<T> | null, k: number): ListNode<T> | null {
    if (!head) {
        return null;
    }

    let fast: ListNode<T> | null = head;
    let slow: ListNode<T> | null = head;

    for (let i = 0; i < k; i++) {
        if (!fast) {
            return null;
        }

        fast = fast.next;
    }

    while (fast && slow) {
        fast = fast.next;
        slow = slow.next;
    }

    return slow;
}

const head = new ListNode<number>(1);
head.next = new ListNode<number>(2);
head.next.next = new ListNode<number>(3);
head.next.next.next = new ListNode<number>(4);
head.next.next.next.next = new ListNode<number>(5);

console.log(kthToLast(head, 2)); // Outputs ListNode { data: 4, next: ListNode { data: 5, next: null } }
