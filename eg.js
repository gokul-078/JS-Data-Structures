
// Linked list model

class Node {
    constructor(value){
        this.value = value
        this.next = null
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

    prepend(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
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

    insert(value, index){
        let node = new Node(value)
        if(index < 0 || index > this.size){
            return
        }
        if(index === 0){
            this.prepend(value)
        }
        else{
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

    removefromValue(value){
        if(this.isEmpty()){
            return null
        }
        if(value === this.head.value){
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
                const removeddNod = prev.next
                prev.next = removeddNod.next
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

// Let instance the class linked list
let list = new LinkedList()

console.log(list.isEmpty())
console.log(list.getSize())


list.append(20)
list.append(30)

list.print()
console.log(list.getSize())

list.prepend(10)
list.print()
console.log(list.getSize())

