let items = [9, 8, 0, 4, 5, 23];
function selectionSort(data){
    let minId;
    for(i = data.length-1; i>=0; i--){
        console.log(i)
        minId = i;
        for(let j=i-1; j>=0; j--){
            if(data[j] < data[minId]){
                minId = j;
            }
        }
        let temp = data[minId];
        data[minId] = data[i];
        data[i] = temp;
    }
}
selectionSort(items);
console.log(items);