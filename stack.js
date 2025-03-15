
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
        this.items = []; // Array to store stack elements
    }

    // Push operation: Add element to stack
    push(element) {
        this.items.push(element);
    }

    // Pop operation: Remove top element
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // Peek operation: Get top element without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get size of stack
    size() {
        return this.items.length;
    }

    // Print stack elements
    print() {
        console.log(this.items.toString());
    }
}

// Example Usage:
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // Output: 30
console.log(stack.pop());  // Output: 30
console.log(stack.size()); // Output: 2
stack.print(); // Output: 10,20
