let data =[];
let currentSize = data.length;
let max = 5;
function push(newVal){
    if(currentSize >= max){
        alert("Stack is full you cannot add "+newVal);
    }
    data[currentSize] = newVal;
    currentSize += 1;
}

push(30);
push(3);
push(20);
push(10);
push(0);
console.log(data);