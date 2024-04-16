const { Stack, Queue } = require('./stackAndQueue/index.js');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('Can successfully push onto a stack', () => {
    stack.push('a');
    expect(stack.peek()).toBe('a');
  });

  test('Can successfully push multiple values onto a stack', () => {
    stack.push('a');
    stack.push('b');
    expect(stack.peek()).toBe('b');
  });

  test('Can successfully pop off the stack', () => {
    stack.push('a');
    stack.push('b');
    expect(stack.pop()).toBe('b');
  });

  test('Can successfully empty a stack after multiple pops', () => {
    stack.push('a');
    stack.push('b');
    stack.pop();
    stack.pop();
    expect(() => stack.peek()).toThrow();
  });

  test('Can successfully peek the next item on the stack', () => {
    stack.push('a');
    expect(stack.peek()).toBe('a');
  });

  test('Can successfully instantiate an empty stack', () => {
    expect(() => stack.peek()).toThrow();
  });

  test('Calling pop or peek on empty stack raises exception', () => {
    expect(() => stack.pop()).toThrow();
    expect(() => stack.peek()).toThrow();
  });
});

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('Can successfully enqueue into a queue', () => {
    queue.enqueue('a');
    expect(queue.peek()).toBe('a');
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.peek()).toBe('a');
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.dequeue()).toBe('a');
  });

  test('Can successfully peek into a queue, seeing the expected value', () => {
    queue.enqueue('a');
    expect(queue.peek()).toBe('a');
  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    queue.enqueue('a');
    queue.enqueue('b');
    queue.dequeue();
    queue.dequeue();
    expect(() => queue.peek()).toThrow();
  });

  test('Can successfully instantiate an empty queue', () => {
    expect(() => queue.peek()).toThrow();
  });

  test('Calling dequeue or peek on empty queue raises exception', () => {
    expect(() => queue.dequeue()).toThrow();
    expect(() => queue.peek()).toThrow();
  });
});
