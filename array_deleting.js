let data = [1, 3, 2, 6, 7, 9];
let pos = 3
for (i = pos; i<data.length; i++){
    data[i] = data[i+1];

}
data.length = data.length - 1;
console.log(data);