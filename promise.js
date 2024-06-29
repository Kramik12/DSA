const login = (email, pass) => { //This makes login as a function not an Object
    return new Promise((res, rej) => {
        //logic implement
        if(email == 'admin@test.com' && pass == 'admin123'){
            //success
            res("login success");
        } else {
            //failure
            rej("Login Failed");
        }
    });
}

login('admintest@gmail.com', 'admin123')
.then((response) => {
    console.log(response);
})
.catch((reject) => {
    console.log(reject);
})