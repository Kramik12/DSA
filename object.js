let data = {
    name: 'kramik',
    age: 20,
    mail: 'abc@test.com',
    getName: function(){
        return this.name;
    }
}
data.contact = 12345;
data.name = "Peter"

for(x in data){
    console.log(data[x]);
}
console.log(data);

// console.log(Object.keys(data))
// console.log(Object.values(data))
// console.logg(Object.entries(data))