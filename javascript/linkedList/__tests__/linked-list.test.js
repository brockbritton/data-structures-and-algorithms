'use strict';

// Require our linked list implementation
const LinkedList = require('../index.js');


describe('Linked List', () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  });

  it('Can successfully instantiate an empty linked list', () => {
    expect(list).toBeTruthy();
    expect(list.head).toBe(null);
  });

  it('Can properly insert into the linked list', () => {
    list.insert(5);
    expect(list.size()).toBe(1);
    expect(list.head.value).toBe(5);
  });

  it('The head property will properly point to the first node in the linked list', () => {
    list.insert(5);
    list.insert(10);
    expect(list.size()).toBe(2);
    expect(list.head.value).toBe(10);
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    list.insert(5);
    list.insert(10);
    list.insert(15);
    expect(list.size()).toBe(3);
    expect(list.head.value).toBe(15);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    list.insert(5);
    list.insert(10);
    list.insert(15);
    expect(list.includes(10)).toBe(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    list.insert(5);
    list.insert(10);
    list.insert(15);
    expect(list.includes(20)).toBe(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    list.insert(5);
    list.insert(10);
    list.insert(15);
    expect(list.toString()).toEqual('{ 15 } -> { 10 } -> { 5 } -> NULL');
  });

});
