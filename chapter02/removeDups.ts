class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList<T> {
    head: Node<T> | null;

    constructor() {
        this.head = null;
    }

    insert(data: T) {
        const node = new Node<T>(data);

        if (this.head === null) {
            this.head = node;
        } else {
            let curr = this.head;

            while (curr.next !== null) {
                curr = curr.next;
            }

            curr.next = node;
        }
    }

    removeDuplicates() {
        const seen = new Set<T>();

        let prev: Node<T> | null = null;
        let curr: Node<T> | null = this.head;

        while (curr !== null) {
            if (seen.has(curr.data)) {
                prev.next = curr.next;
            } else {
                seen.add(curr.data);
                prev = curr;
            }

            curr = curr.next;
        }
    }

    removeDuplicatesFollowUp() {
        let curr = this.head;

        while (curr !== null) {
            let fast = curr;

            while (fast.next !== null) {
                if (fast.next.data === curr.data) {
                    fast.next = fast.next.next;
                } else {
                    fast = fast.next;
                }
            }

            curr = curr.next;
        }
    }

    printList() {
        let curr = this.head;

        while (curr !== null) {
            console.log(curr.data);
            curr = curr.next;
        }
    }
}

const list = new LinkedList<number>();
list.insert(1);
list.insert(3);
list.insert(2);
list.insert(3);
list.insert(1);
console.log('Before removing duplicates:');
list.printList(); // Output: 1 3 2 3 1
list.removeDuplicates();
console.log('After removing duplicates:');
list.printList(); // Output: 1 3 2
