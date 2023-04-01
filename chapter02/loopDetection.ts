class ListNode<T> {
    data: T;
    next: ListNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

function loopDetection<T>(head: ListNode<T> | null): ListNode<T> | null {
    if (!head) {
        return null;
    }

    let slow: ListNode<T> | null = head;
    let fast: ListNode<T> | null = head;
    let indexNode: ListNode<T> | null = null;

    while (fast && slow) {
        slow = slow.next;
        fast = fast.next ? fast.next.next : null;

        if (slow === fast) {
            indexNode = head;

            while (slow && slow !== indexNode) {
                slow = slow.next;
                indexNode = indexNode?.next ?? null;
            }

            return indexNode;
        }
    }

    return null;
}

const node1 = new ListNode<number>(1);
const node2 = new ListNode<number>(2);
const node3 = new ListNode<number>(3);
const node4 = new ListNode<number>(4);
const node5 = new ListNode<number>(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node2;

console.log(loopDetection(node1));
