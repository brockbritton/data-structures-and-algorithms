
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if (this.back) {
      node.next = this.back;
    }
    if (!this.front) {
      this.front = node;
    }
    this.back = node;
  }

  dequeue() {
    if (this.back === this.front) {
      let value = this.front.value;
      this.front = null;
      this.back = null;
      return value;
    }

    let current = this.back;
    while(current.next !== this.front) {
      current = current.next;
    }
    // current should be the node right before the front
    let value = current.next.value;
    current.next = null;
    this.front = current;
    return value;
  }

  peek() {
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}

class AnimalShelterQueue {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
    this.all = new Queue();
  }

  enqeue(animal) {
    if (animal.species === 'dog') {
      this.dogs.enqueue(animal);
    } else if (animal.species === 'cat') {
      this.cats.enqueue(animal);
    }
    this.all.enqueue(animal);
  }

  dequeue(pref) {
    if (pref === 'dog') {
      return this.dequeueDog();
    } else if (pref === 'cat') {
      return this.dequeueCat();
    } else {
      return this.dequeueOldest();
    }
  }

  dequeueDog() {
    let dog = this.dogs.dequeue();
    let current = this.all.back;
    let previous = null;
    while(current.value.name !== dog.name) {
      previous = current;
      current = current.next;
    }
    if (previous) {
      previous.next = current.next;
    } else {
      this.all.back = current.next;
    }

    return dog;
  }

  dequeueCat() {
    let cat = this.cats.dequeue();
    let current = this.all.back;
    let previous = null;
    while(current.value.name !== cat.name) {
      previous = current;
      current = current.next;
    }
    if (previous) {
      previous.next = current.next;
    } else {
      this.all.back = current.next;
    }

    return cat;
  }

  dequeueOldest() {

  }
}


const animalShelter = new AnimalShelterQueue();
animalShelter.enqeue({ species: 'dog', name: 'dog1' });
animalShelter.enqeue({ species: 'dog', name: 'dog2' });
animalShelter.enqeue({ species: 'cat', name: 'cat1' });
animalShelter.enqeue({ species: 'dog', name: 'dog3' });
animalShelter.enqeue({ species: 'cat', name: 'cat2' });

console.log(animalShelter.all);
animalShelter.dequeue('cat');
console.log(animalShelter.all);
