var isLoggedIn = true;
var verifiedUser = true;
var cardBalance = 5000;

// if (isLoggedIn){
//     console.log("User is logged in");

//     if (verifiedUser){
//         console.log("User is verified");
//         if (cardBalance >= 1000){
//             console.log("Purchase Successful");
//         } else{
//             console.log("Insufficient Balance");
//         }
//     }
// }
if (isLoggedIn && verifiedUser && cardBalance >= 1000){
    console.log("Purchase Successful");
} else {
    console.log("Purchase Failed");
}