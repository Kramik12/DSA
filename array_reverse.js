let data = [1, 5, 3, 9, 0];
let temp;
function customReverse(data, start, end){
    console.log(data);
    if(start <= data.length/2){
        temp = data[start];
        data[start] = data[end];
        data[end] = temp;
        customReverse(data, start+1, end-1);
    }
}

customReverse(data, 0, data.length-1);