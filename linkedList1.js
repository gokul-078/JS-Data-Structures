
// Here we created a linked list with both head and tail...

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }
        else{
            node.next = this.head
            this.head = node
        }
        this.size++ 
    }

    append(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }
        else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null
        }
        const removedValue = this.head.value
        this.head = this.head.next
        this.size--
        return removedValue
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }
        const removedValue = this.tail.value
        if(this.size === 1){
            this.head = null
            this.tail = null
        }       
        else{
            let prev = this.head
            while(prev.next !== this.tail){
                prev = prev.next
            }
            prev.next = null   // Here, we set the prev(The reference of this.head) next to null in the last element of the list.
            this.tail = prev
        }
        this.size--
        return removedValue
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

module.exports = LinkedList

/*
let list = new LinkedList()

console.log(list.isEmpty())
console.log(list.getSize())

// let append some elements
list.append(1)
list.append(2)
list.append(3)


list.print()

// let prepend element
list.prepend(0)

list.print()

console.log(list.head)

// let remove an element from the first
console.log(list.removeFromFront())

list.print()

// let remove an element from the end
console.log(list.removeFromEnd())

list.print()

console.log(list.getSize())

console.log(list.tail)
*/
