class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("pop from empty stack");
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("peek from empty stack");
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack1.isEmpty() && this.stack2.isEmpty()) {
      throw new Error("dequeue from empty queue");
    }

    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }
}

const pq = new PseudoQueue();
pq.enqueue(1);
pq.enqueue(2);
pq.enqueue(3);
console.log(pq.dequeue());
console.log(pq.dequeue());
pq.enqueue(4);
console.log(pq.dequeue());
console.log(pq.dequeue());
