class Stack {
    item = [];
    currentSize;
    maxSize;
    constructor(size){
        this.maxSize = size;
        this.currentSize = this.item.length;
    }
    push(newVal){
        if(this.currentSize >= this.maxSize){
            alert("Stack is full");
        } else {
            this.item[this.currentSize] = newVal;
            this.currentSize++;
        }
    };
    pop(){};
    display(){console.log(this.item)};
}
st1 = new Stack(5);
st1.push(20);
st1.display();