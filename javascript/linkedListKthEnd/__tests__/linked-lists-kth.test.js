
// Require our linked list implementation
const LinkedList = require('../index.js');

describe('LinkedList', () => {
  describe('kthFromEnd', () => {
    it('should return "Exception" for k greater than the length of the linked list', () => {
      let list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.kthFromEnd(4)).toBe('Exception');
    });

    it('should return the correct value for k and the length of the list being the same', () => {
      let list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.kthFromEnd(3)).toBe(1);
    });

    it('should return "Exception" for k not a positive integer', () => {
      let list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.kthFromEnd(-1)).toBe('Exception');
    });

    it('should return the value for linked list of size 1 and k is 0', () => {
      let list = new LinkedList();
      list.append(1);
      expect(list.kthFromEnd(0)).toBe(1);
    });

    it('should return the correct value for k somewhere in the middle of the linked list', () => {
      let list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.append(4);
      list.append(5);
      expect(list.kthFromEnd(2)).toBe(3);
    });
  });
});
