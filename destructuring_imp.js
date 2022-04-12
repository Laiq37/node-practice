let user = {
    name : "John",
    pass: "J0hn@12345",
    email: "john12345@gmail.com"
}

let {pass,...others} = user;
console.log(pass);
console.log(others);