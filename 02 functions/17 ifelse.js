const userLoggedIN = true;
const userIsVerified = true;
const userCardBalance = 400;
if (userLoggedIN && userIsVerified && userCardBalance >= 1000) {
    console.log("User is logged in and Verified");
}    
    if(!userIsVerified){
        console.log("User is not verified");
}       else 
    if(!userLoggedIN){
            console.log("User is not logged in");
        }else 
            if (userCardBalance < 1000){
            console.log("Insufficient Balance");
}           else {
                console.log("Purchase Successful");
}
