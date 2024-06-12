let queue = [];
let currentSize = queue.length;
let maxSize = 5;

function enqueue(newVal){
    if(currentSize >= maxSize){
        alert("Queue is already full");
    } else {
        queue[currentSize] = newVal;
        currentSize++;
    }
}

function display(){
    console.log(queue);
}
function dequeue() {
    for(i=0; i<queue.length; i++){
        queue[i] = queue[i+1];
    }
    currentSize--;
    queue.length = currentSize;
}

enqueue(10);
display();