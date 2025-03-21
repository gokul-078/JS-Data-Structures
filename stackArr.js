
// Stack - LIFO
/*
The stack data structure is a sequential collection of elements that follows the principle of Last In First Out (LIFO)
The last element inserted into the stack is first element to be removed
A stack of plates. The last plate placed on top of the stack is also the first plate removed from the stack.
Stack is an abstract data type. It is defined by its behavior rather than being a mathematical model
The Stack data structure supports two main operations
Push, which adds an element to the collection
Pop, which removes the most recently added element from the collection
*/

// Stack usuage...
// Eg:- Browser history tracking, undo operations in system and call stack in js runtime etc..,


class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(20);
stack.push(10);
stack.push(30);
console.log(stack.size());
stack.print();
console.log(stack.pop());
console.log(stack.peek());
stack.print();
  