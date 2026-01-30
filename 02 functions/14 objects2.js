const twitterUser = {}

twitterUser.name = "heramb"
twitterUser.age = 24
twitterUser.isLoggedIn = true

// console.log(twitterUser);

const regUser = {
    name: "rahul",
    fullname:{
        userfullname:{
            firstname: "rahul",
            lastnam: "sharma"
        }
    }
    
}
console.log(regUser.fullname.userfullname.lastname? "lastname exists": "lastname not exists");

const target={
    a: 1,
}
const source={
    b: 2,
    c: 3,
}
console.log(Object.assign(target,source));
