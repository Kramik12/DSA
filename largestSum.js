function findlargest(array, num){
    if(num>array){
        throw new Error("num is not greater than array");
    } else {
        let max = 0;
        for(let i=0; i<array.length-neow+1; i++){
            let temp = 0;
            for(let j = 0; j<num; j++){
                tmp = array[j];
            }
            if(tmp >max){
                max = tmo;
            }
        }
        return max;
    }
}
const result = findlargest([1,2,3,4,3,5,4,6,7,8],4);
console.log("result");