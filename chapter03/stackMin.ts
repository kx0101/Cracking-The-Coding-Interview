class MinStack {
  public stack: [number, number][] = [];

  constructor() {
    this.stack = [];
  }
  
  push(x: number): void {
    const min = this.stack.length === 0 ? x : Math.min(x, this.getMin());
    this.stack.push([x, min]);
  }

  pop(): void {
    this.stack.pop();
  }

  getMin(): number {
    return this.stack[this.stack.length - 1][1];
  }
}

const stack = new MinStack();

stack.push(3);
stack.push(5);
stack.push(2);
stack.push(1);

console.log(stack.getMin()); // Output: 1

stack.pop();
stack.pop();
console.log(stack.getMin()); // Output: 3

stack.push(4);
console.log(stack.getMin()); // Output: 3
