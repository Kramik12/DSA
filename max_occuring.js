let str = "hello";
let strObj = {};
let maxKey = '';
for(i = 0; i < str.length; i++){
   // console.log(str[i])
    let key = str[i];
    if(!strObj[key]){
        strObj[key] = 0;
    };
    strObj[key]++;
    if(maxKey == '' || strObj[key]>strObj[maxKey])
        {
            maxKey = key;
        }
}
console.log(strObj);
console.log(maxKey);