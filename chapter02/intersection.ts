class ListNode<T> {
    data: T;
    next: ListNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

function intersection<T>(headA: ListNode<T> | null, headB: ListNode<T> | null): ListNode<T> | null {
    const nodesSet = new Set<ListNode<T>>();

    let nodeA = headA

    while (nodeA) {
        nodesSet.add(nodeA);
        nodeA = nodeA.next;
    }

    let nodeB = headB;
    while (nodeB) {
        if (nodesSet.has(nodeB)) {
            return nodeB;
        }

        nodeB = nodeB.next;
    }

    return null;
}

const intersectingNode = new ListNode<number>(3);

const listA = new ListNode<number>(1);
listA.next = new ListNode<number>(2);
listA.next.next = intersectingNode;
listA.next.next.next = new ListNode<number>(4);

const listB = new ListNode<number>(5);
listB.next = new ListNode<number>(4);
listB.next.next = intersectingNode;
listB.next.next.next = new ListNode<number>(2);

console.log(intersection(listA, listB));
