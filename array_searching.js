let data = [1, 4, 2, 6, 9, 10];
let item = 6;
let index = undefined;
for( i = 0; i < data.length-1; i++){
    if(data[i] === item){
        index = i;
        break;
    }
}
console.log(index);