let data = [0, 5, 7, 10, 6, 11];
let newEl = 70;
let pos =x;

for(let i = data.length-1; i>=0; i--){
    if(i>=pos){
        data[i+1] = data[i];
        if(i == pos)
            {
                data[i] = newEl;
            }
    }
}

console.log(data);