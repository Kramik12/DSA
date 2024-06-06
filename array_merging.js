let data1 = [1, 2, 4, 5, 7];
let data2 = [4, 7, 9, 10];
let data3 = [];
for(i=0; i<data1.length; i++){
    data3[i] = data1[i];
} 
for(i=0; i<data2.length; i++){
    data3[data1.length+i] = data2[i];
}
console.log(data3);