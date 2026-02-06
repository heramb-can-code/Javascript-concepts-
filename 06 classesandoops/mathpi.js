
const heramb={
    age: 20,
    aadhar: 923843981682,
    mobno : 9238437465
}
console.log(Object.getOwnPropertyDescriptor(heramb , "age"));

Object.defineProperty(heramb, 'age',{
    writable: false,
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(heramb , "age"));