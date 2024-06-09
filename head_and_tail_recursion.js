function test(x) {
    
    console.log(x);
    if (x < 0) {
        test(x - 1);
    }
    console.log(x);
}
let data = 5;
test(data);
