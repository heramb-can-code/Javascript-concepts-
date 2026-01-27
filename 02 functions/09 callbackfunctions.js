// function calculate(num1 ,num2, Callback){
//         let result= num1 + num2
//     Callback(result);
// }  
// calculate (5,5, (result) => {
//         console.log("the result is ", result);
//     });
    console.log("Before");

setTimeout(function() {
  console.log("Pizza is here!"); // This is the callback
}, 2000); // 2-second delay

console.log("After");



