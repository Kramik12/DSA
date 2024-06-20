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
    traversing(){
        let counter = 0;
        let currentNode = this.head;
        while(counter<this.size){
            console.log(currentNode)
            currentNode = currentNode.next;
            counter++;
        }
    }
    deleteNode(index){
        let counter = 1;
        let lead = this.head;
        if(index === 1){
            this.head = this.head.next;
        } else {
            while(counter < index-1){
                lead = lead.next;
                counter++;
            }
            let nextNode = lead.next.next;
            lead.next = nextNode;
            console.log(lead);
        }
    }
}
let list = new List(200);
list.appendNode(300);
list.appendNode(400);
console.log(list);
list.traversing(2);