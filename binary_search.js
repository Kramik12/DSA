let data = [5, 7, 9, 10, 11];
let find = 11;
let start = 0;
let end = data.length - 1;
let position = undefined;
while(start <= end){
    let mid = Math.floor((start + end)/2);
    if(data[mid] == find) {
        position = mid;
        break;
    } else if (data[mid] < find) {
        start = mid+1;
    } else {
        end = mid -1;
    }
}
console.log(position);