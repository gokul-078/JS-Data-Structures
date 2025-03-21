
// import linked list from linkedlist1.js file
const LinkedList = require('./linkedList1');

class LinkedListQueue {
    constructor(){
        this.list = new LinkedList()
    }

    enqueue(value){
        this.list.append(value)
    }

    dequeue(){
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


let queue = new LinkedListQueue()

console.log(queue.isEmpty())
console.log(queue.getSize())

// enqueue
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()

console.log(queue.getSize())

// dequeue
console.log(queue.dequeue())
queue.print()

console.log(queue.getSize())

// peek
console.log(queue.peek())
