
//this class is from ../hashTable/index.js. Testing is in that file.
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

function repeatedWord(str) {
  // convert to lowercase and remove punctuation
  const words = str.toLowerCase().split(' ');
  const hashtable = new Hashtable();

  for (let word of words) {
    if (hashtable.has(word)) {
      return word;
    }
    hashtable.set(word, true);
  }

  return null;
}

describe('repeatedWord', () => {
  test('Finds the first repeated word in the string', () => {
    const text = 'Once upon a time, there was a brave princess who...';
    expect(repeatedWord(text)).toBe('a');
  });

  test('Finds the first repeated word in the string #2', () => {
    const text = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness...';
    expect(repeatedWord(text)).toBe('it');
  });

  test('Finds no repeated word in a string', () => {
    const text = 'No Repeated Words Here!';
    expect(repeatedWord(text)).toBe(null);
  });

});

