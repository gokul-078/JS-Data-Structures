
// Queue - FIFO...
/*
The queue data structure is a sequential collection of elements that follows the principle of First In First Out (FIFO)
The first element inserted into the queue is first element to be removed
A queue of people. People enter the queue at one end (rear/tail) and leave the queue from the other end (front/ head).
Queue is an abstract data type. It is defined by its behavior rather than being a mathematical model
The Queue data structure supports two main operations
Enqueue, which adds an element to the rear/tail of the collection
Dequeue, which removes an element from the front/head of the collection
*/

// Queue usuage...
// Eg:- Printers, CPU task scheduling and callback queue in js runtime environment etc..,

// Queue Implementaion...
/*
enqueue(element) - add an element to the queue
dequeue() - remove the oldest element from the queue
peek() - get the value of the element at the front of the queue without removing it
isEmpty() - check if the queue is empty
size() - get the number of elements in the queue
print() - visualize the elements in the queue
*/

// Queue in Array. The complexity for enqueue & dequeue are not constant...

class Queue{
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length === 0
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString()) 
    }
}

let queue = new Queue();
console.log(queue);

console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size());

console.log(queue.peek());

queue.print();

console.log(queue.dequeue());

console.log(queue.peek());

queue.print();