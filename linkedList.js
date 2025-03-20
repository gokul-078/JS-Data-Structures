
// Linked List.
/*
A linked list is a linear data structure that includes a series of connected nodes
Each node consists of a data value and a pointer that points to the next node
The list elements can be easily inserted or removed without reallocation or reorganization of the entire structure
Random access of elements is not feasible and accessing an element has linear time complexity
The linked list data structure supports three main operations
Insertion - to add an element at the beginning, end or at a given index in the list
Deletion - to remove an item given its index or value
Search - to find an element given its value
*/

// Linked List Usage - eg:- Image viewer in a continuous slide...

// In linked list it have two class one is Node and another one is our linked list operation class...

class Node {
    constructor(value){
        this.value = value   // This is the value of our items(arr, object...)
        this.next = null     // This is the pointer of next node on our items(arr, obj...)
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    // Prepend  have a constant time complexity o(1)... coz adding element at first is easy and done in one step.
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }
        else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    // Append have a linear time comlexity o(n) as we have to traverse all elements in the list and then adding the elements in the last... 
    append(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }
        else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    // Before inserting a value we need to check two conditions...
    insert(value, index){
        // condition - 1
        if(index < 0 || index > this.size){
            return
        }
        // condition - 2
        if(index === 0){
            this.prepend(value)
        }
        else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0; i<index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFrom(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let removedNode
        if(index === 0){
            removedNode = this.head
            this.head = this.head.next
        }
        else{
            let prev = this.head
            for(let i=0; i<index-1; i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        }
        else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                const removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null
        }
    }

    print(){
        if(this.isEmpty()){
            console.log("The list is empty")
        }
        else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}


let list = new LinkedList()

console.log(list.isEmpty());
console.log(list.getSize());

// let see print working...
list.print()

// let test the append 
list.append(10)
list.print()

// let insert more values by using append and print()
list.append(20)
list.append(30)
list.print()

// Let test the prepend...
list.prepend(5)
list.print()

// Append one more time...
list.append(40)
list.print()

// insert() values in a linked list...
list.insert(15, 2)
list.insert(25, 4)
list.print()

list.insert(0, 0)
list.print()

console.log(list.getSize())

// let remove the item in list 
console.log(list.removeFrom(50))  // 10 is not a index in our list so return null

console.log(list.removeFrom(5))  // The item 25 is in index 5th place it will be removed
list.print()

// console.log(list.head.next.next.next.next);  // To see the head values

console.log(list.getSize())

// let see removefromValue
console.log(list.removeValue(15))
list.print()
console.log(list.getSize())

// let removeValue form head node
console.log(list.removeValue(0))
list.print()
console.log(list.getSize())

// let check a ungiven value in a list
console.log(list.removeValue(489))  // This value is not in the list so it will return null
list.print()
console.log(list.getSize())
