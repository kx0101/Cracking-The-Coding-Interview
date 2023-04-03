class ThreeStacks {
    public array: any[];
    public stackSize: number;
    public stackPointers: number[];

    constructor(stackSize: number) {
        this.array = [];
        this.stackSize = stackSize;
        this.stackPointers = [-1, -1, -1];
    }

    public getStackIndex(stackNumber: number): number {
        if (stackNumber < 0 || stackNumber > 2) {
            throw new Error("Invalid stack number");
        }

        return stackNumber * this.stackSize;
    }

    public push(stackNumber: number, value: any): void {
        if (this.stackPointers[stackNumber] === this.stackSize - 1) {
            throw new Error("Stack is full");
        }

        const index = this.getStackIndex(stackNumber) + this.stackPointers[stackNumber] + 1;
        this.array[index] = value;
        this.stackPointers[stackNumber]++;
    }

    public pop(stackNumber: number): any {
        if (this.stackPointers[stackNumber] === -1) {
            throw new Error('Stack is empty');
        }

        const index = this.getStackIndex(stackNumber) + this.stackPointers[stackNumber];
        const value = this.array[index];

        delete this.array[index];

        this.stackPointers[stackNumber]--;
        return value;
    }

    public peek(stackNumber: number): any {
        if (this.stackPointers[stackNumber] === -1) {
            throw new Error("Stack is empty");
        } 

        const index = this.getStackIndex(stackNumber) + this.stackPointers[stackNumber];
        return this.array[index];
    }

    public isEmpty(stackNumber: number): boolean {
        return this.stackPointers[stackNumber] === -1;
    }
}

const threeStacks = new ThreeStacks(3);

console.log(threeStacks.isEmpty(0)); // true
console.log(threeStacks.isEmpty(1)); // true
console.log(threeStacks.isEmpty(2)); // true

threeStacks.push(0, "A");
threeStacks.push(0, "B");
threeStacks.push(1, 1);
threeStacks.push(1, 2);
threeStacks.push(2, { name: "Takis", age: 30 });

console.log(threeStacks.peek(0)); // B
console.log(threeStacks.pop(0)); // B
console.log(threeStacks.pop(0)); // A
console.log(threeStacks.pop(1)); // 2

threeStacks.push(2, [1, 2, 3, 4, 5]);
console.log(threeStacks.pop(2)); // [1, 2, 3, 4, 5]

console.log(threeStacks.isEmpty(0)); // true
console.log(threeStacks.isEmpty(1)); // false
console.log(threeStacks.isEmpty(2)); // false
