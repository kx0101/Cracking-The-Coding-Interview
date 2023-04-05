class MyQueue<T> {
    public stackOne: T[] = [];
    public stackTwo: T[] = [];

    enqueue(value: T): void {
        this.stackOne.push(value);
    }

    dequeue(): T | undefined {
        if (this.stackTwo.length === 0) {
            while (this.stackOne.length !== 0) {
                this.stackTwo.push(this.stackOne.pop() as T);
            }
        }

        return this.stackTwo.pop();
    }

    peek(): T | undefined {
        if (this.stackTwo.length === 0) {
            while (this.stackOne.length !== 0) {
                this.stackTwo.push(this.stackOne.pop() as T);
            }
        }

        return this.stackTwo[this.stackTwo.length - 1];
    }

    isEmpty(): boolean {
        return this.stackTwo.length === 0 && this.stackOne.length === 0;
    }
}

const myQueue = new MyQueue<number>();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log(myQueue.peek()); // 1
console.log(myQueue.dequeue()); // 1
console.log(myQueue.peek()); // 2
console.log(myQueue.dequeue()); // 2
console.log(myQueue.peek()); // 3
console.log(myQueue.dequeue()); // 3
console.log(myQueue.isEmpty()); // true
