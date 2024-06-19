let data = new Set(["Anil", "Peter", "Anil"]);
data.add({"email":"test@test.com"});
console.log(data.hs("Peter"));
console.log(data);

for(x of data){
    console.log(x)
}

data.forEach((val) => {
    console.log(val)
})