// Linked List in JS

class List{
    constructor(data) {
        this.head = {
            value: data,
            next: null
        };
        this.tail = this.head;
    }
    appendNode(nodeData){
        let newNode = {
            value: nodeData,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode
    }
}
let list = new List(200);
list.appendNode(300);
list.appendNode(400);
console.log(list);