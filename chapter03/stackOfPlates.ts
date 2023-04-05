class Stack {
    public stack: number[] = [];

    push(value: number): void {
        this.stack.push(value);
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1]; 
    }
}

class SetOfStacks {
    public stacks: Stack[] = [];
    public capacity: number = 0;

    constructor(capacity: number) {
        this.capacity = capacity;
    }

    push(value: number): void {
        let lastStack = this.getLastStack();

        if (lastStack && lastStack.stack.length < this.capacity) {
            lastStack.push(value);
        } else {
            const newStack = new Stack();
            newStack.push(value);
            this.stacks.push(newStack);
        }
    }

    pop(): void {
        let lastStack = this.getLastStack();

        if (!lastStack) {
            throw new Error("SetOfStacks is empty");
        }

        lastStack.pop();

        if (lastStack.stack.length === 0) {
            this.stacks.pop();
        }
    }

    popAt(index: number): void {
        if (index >= this.stacks.length) {
            throw new Error("Index is invalid");
        }

        let selectedStack = this.stacks[index];
        selectedStack.pop();

        if (selectedStack.stack.length === 0) {
            this.stacks.pop();
        }
    }

    getLastStack(): Stack | undefined {
        return this.stacks.length === 0 ? undefined : this.stacks[this.stacks.length - 1];
    }

}

const setOfStacks = new SetOfStacks(2);

setOfStacks.push(1);
setOfStacks.push(2);
setOfStacks.push(3);

console.log(setOfStacks.stacks) // Output: [Stack { stack: [1, 2] }, Stack { stack: [3] }];

setOfStacks.pop();

console.log(setOfStacks.stacks) // [Stack { stack: [1, 2] }]

setOfStacks.popAt(0);

console.log(setOfStacks.stacks) // [Stack { stack: [1] }]
