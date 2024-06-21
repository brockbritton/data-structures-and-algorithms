
class Hashtable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        this.keyMap[index][i][1] = value;
        return;
      }
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this.hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  has(key) {
    let index = this.hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return true;
        }
      }
    }
    return false;
  }

  keys() {
    let keysArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keysArray.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArray;
  }
}

describe('Hashtable', () => {
  let ht;

  beforeEach(() => {
    ht = new Hashtable();
  });

  test('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    ht.set('hello', 'world');
    expect(ht.get('hello')).toBe('world');
  });

  test('Retrieving based on a key returns the value stored', () => {
    ht.set('foo', 'bar');
    expect(ht.get('foo')).toBe('bar');
  });

  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    expect(ht.get('nonexistent')).toBeUndefined();
  });

  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    ht.set('hello', 'world');
    ht.set('foo', 'bar');
    ht.set('fizz', 'buzz');
    const keys = ht.keys();
    expect(keys).toContain('hello');
    expect(keys).toContain('foo');
    expect(keys).toContain('fizz');
    expect(keys.length).toBe(3);
  });

  test('Successfully handle a collision within the hashtable', () => {
    ht.set('a', 'value1');
    ht.set('b', 'value2'); // Assuming 'a' and 'b' collide based on hash function
    expect(ht.get('a')).toBe('value1');
    expect(ht.get('b')).toBe('value2');
  });

  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    ht.set('a', 'value1');
    ht.set('b', 'value2'); // Assuming 'a' and 'b' collide based on hash function
    expect(ht.get('a')).toBe('value1');
    expect(ht.get('b')).toBe('value2');
  });

  test('Successfully hash a key to an in-range value', () => {
    const index = ht.hash('somekey');
    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThan(ht.keyMap.length);
  });
});

