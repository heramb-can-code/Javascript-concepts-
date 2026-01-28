var user ={
    name: "Heramb",
    age: 24,
    city: "Pune"

}
// Create
user.adharNumber = "1234-5678-9012"
// Read
console.log(user.age);

// Update
user.city = "Mumbai"
console.log(user.city);
// Delete
delete user.adharNumber

console.log(Object.keys(user)); // Get all keys
console.log(Object.values(user)); // Get all values
console.log(Object.entries(user)); // Get all key:value pairs