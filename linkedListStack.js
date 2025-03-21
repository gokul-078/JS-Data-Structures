
// import the linked list class from linkedList1.js file...
const LinkedList = require('./linkedList1');

class LinkedListStack {
    constructor(){
        this.list = new LinkedList()
    }

    push(value){
        this.list.prepend(value)
    }

    pop(){
        return this.list.removeFromFront()
    }

    peek(){
        return this.list.head.value
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    getSize(){
        return this.list.getSize()
    }

    print(){
        this.list.print()
    }
}


let stack = new LinkedListStack()

console.log(stack.isEmpty())
console.log(stack.getSize())

// push element
stack.push(10)
stack.push(20)
stack.push(30)

stack.print()

console.log(stack.getSize())

// pop an element
console.log(stack.pop())
stack.print()

console.log(stack.getSize())

// peek
console.log(stack.peek())

