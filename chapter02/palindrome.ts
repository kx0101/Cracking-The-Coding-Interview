class ListNode<T> {
    data: T;
    next: ListNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

function isPalindrome<T>(head: ListNode<T> | null): boolean {
    if (!head || !head.next) {
        return true;
    }

    let firstHalfEnd: ListNode<T> | null = endOfFirstHalf(head);
    let secondHalfStart: ListNode<T> | null = reverse(firstHalfEnd?.next ?? new ListNode<T>(null as unknown as T));

    let p1: ListNode<T> | null = head;
    let p2: ListNode<T> | null = secondHalfStart;
    let result = true;

    while (result && p2) {
        if (p1) {
            if (p2.data !== p1.data) {
                result = false;
            }

            p1 = p1.next;
            p2 = p2.next;
        }
    }

    if (secondHalfStart && firstHalfEnd) {
        firstHalfEnd.next = reverse(secondHalfStart);
    }

    return result;
}

function endOfFirstHalf<T>(head: ListNode<T>): ListNode<T> | null {
    let slow: ListNode<T> | null = head;
    let fast: ListNode<T> = head;

    while (slow && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function reverse<T>(head: ListNode<T>): ListNode<T> | null {
    if (!head) {
        return null;
    }

    let prev: ListNode<T> | null = null;
    let next: ListNode<T> | null = null;
    let curr: ListNode<T> | null = head;

    while (curr) {
        next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;
    }

    return prev;
}

const node1 = new ListNode('r');
const node2 = new ListNode('a');
const node3 = new ListNode('c');
const node4 = new ListNode('e');
const node5 = new ListNode('c');
const node6 = new ListNode('a');
const node7 = new ListNode('r');

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

console.log(isPalindrome(node1)); // output: true
