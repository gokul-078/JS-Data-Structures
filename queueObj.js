
// Let's see queue in object. In object queue it have constant complexity for enqueue & dequeue...
// Queue is like the element we push inside will go from rear to front...

class Queue {
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }

    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    isEmpty(){
        return this.rear - this.front === 0 
    }

    peek(){
        return this.items[this.front]
    }

    size(){
        return this.rear - this.front
    }

    print(){
        console.log(this.items)
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
