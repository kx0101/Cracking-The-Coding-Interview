class ListNode<T> {
    data: T;
    next: ListNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

function partition<T>(head: ListNode<T> | null, x: T): ListNode<T> | null {
    if (!head) {
        return null;
    }

    let lessThan: ListNode<T> | null = null;
    let greaterThanOrEqual: ListNode<T> | null = null;

    let curr: ListNode<T> | null = head;

    while (curr) {
        if (curr.data < x) {
            curr.next = lessThan;
            lessThan = curr;
        } else {
            curr.next = greaterThanOrEqual;
            greaterThanOrEqual = curr;
        }

        curr = curr.next;
    }

    if (!lessThan) {
        return greaterThanOrEqual;
    } else {
        let tail = lessThan;

        while (tail.next) {
            tail = tail.next;
        }

        tail.next = greaterThanOrEqual;

        return lessThan;
    }

}

const head = new ListNode(3);
head.next = new ListNode(5);
head.next.next = new ListNode(8);
head.next.next.next = new ListNode(5);
head.next.next.next.next = new ListNode(10);
head.next.next.next.next.next = new ListNode(2);
head.next.next.next.next.next.next = new ListNode(1);

console.log(partition(head, 5)); // Outputs ListNode { data: 1, next: ListNode { data: 2, next: ListNode { data: 3, next: ListNode { data: 5, next: ListNode { data: 8, next: ListNode { data: 5, next: ListNode { data: 10, next: null } } } } } } } }
