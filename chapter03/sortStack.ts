class SortStack {
    public stack: number[] = [];
    public minStack: number[] = [];

    push(value: number): void {
        this.stack.push(value);

        if (this.minStack.length === 0 || value <= this.getMin()) {
            this.minStack.push(value);
        }
    }

    pop(): number | undefined {
        let removed = this.stack.pop();

        if (removed === this.getMin()) {
            this.minStack.pop();
        }

        return removed;
    }

    isEmpty(): boolean {
        return this.stack.length === 0;
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}

const stack = new SortStack();

stack.push(5);
stack.push(3);
stack.push(7);
stack.push(1);

console.log(stack.getMin()); // Output: 1

console.log(stack.pop()); // Output: 1

console.log(stack.getMin()); // Output: 3

console.log(stack.pop()); // Output: 7

console.log(stack.getMin()); // Output: 3
