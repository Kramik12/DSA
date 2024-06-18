let data = [10, 9, 6, 8, 7, 68, 35, 100];
let evenArray = [];
for (i = 0; i < data.length; i++){
    if(data[i]%2 == 0){
        evenArray.push(data[i]);
    }
}
for( i = 0; i < evenArray.length; i++){
    evenArray[i] = evenArray[i]*2;
}
let count = 0;
for(i = 0; i < evenArray.length; i++){
    count++;
}
console.log(evenArray);
console.log(count);
