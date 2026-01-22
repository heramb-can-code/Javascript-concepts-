var num1 = 5
var num2 = 10

var sum = num1 + num2

var answer=num1>num2

// console.log(answer);

var listingPrice = 7999
var sellingPrice = 3999
var discount = listingPrice - sellingPrice
var discountPercent = (discount / listingPrice) * 100
console.log("Discount Percentage is :" + discountPercent) 

displayDiscountPercentage = Math.round(discountPercent)
                        //library function
console.log(displayDiscountPercentage + "% off")