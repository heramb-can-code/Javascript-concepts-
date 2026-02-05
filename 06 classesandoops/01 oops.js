const user = {
    userName: "JohnDoe",
    age: 30,
    aadhar: "1234-5678-9012",
    signedIn: true,
    getUSerInfo: function() {
        //console.log("Got user information from database");
        console.log(`user name is : ${this.userName}`); //without this keyword it will give undefined because it will look for userName variable in the function scope and not in the object scope
        
    }
};

console.log(user);
console.log(
 user.getUSerInfo());

 function User(userName, age, aadhar, signedIn) {
    this.userName = userName;
    this.age = age;
    this.aadhar = aadhar;
    this.signedIn = signedIn;
    return this; //returning this is optional in constructor function as it will return the object by default
    }

    const user1 = new User("JohnDoe", 30, "1234-5678-9012", true);
    const user2 = new User("JaneDoe", 25, "9876-5432-1098", false);

    console.log(user1);
    console.log(user2);