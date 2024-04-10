
'use strict';

const LinkedList = require('../index.js');

describe('LinkedList', () => {
  describe('append', () => {
    it('can successfully add a node to the end of the linked list', () => {
      const list = new LinkedList();
      list.append(1);
      expect(list.toString()).toBe('{ 1 } -> NULL');
    });

    it('can successfully add multiple nodes to the end of a linked list', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> NULL');
    });
  });

  describe('insertBefore', () => {
    it('can successfully insert a node before a node located in the middle of a linked list', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(3);
      list.append(4);
      list.insertBefore(3, 2);
      expect(list.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> NULL');
    });

    it('can successfully insert a node before the first node of a linked list', () => {
      const list = new LinkedList();
      list.append(2);
      list.insertBefore(2, 1);
      expect(list.toString()).toBe('{ 1 } -> { 2 } -> NULL');
    });
  });

  describe('insertAfter', () => {
    it('can successfully insert after a node in the middle of the linked list', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(4);
      list.insertAfter(2, 3);
      expect(list.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> NULL');
    });

    it('can successfully insert a node after the last node of the linked list', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.insertAfter(3, 4);
      expect(list.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> NULL');
    });
  });
});
