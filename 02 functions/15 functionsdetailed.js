function sum(...num1) {  //rest operator/parameter
    return num1.reduce((a, b) => a + b, 0);   
}
console.log(sum(5,6,7,8,43,45,56,34,5,345,4,)); // Output: 5








function calculateCartPrice(numberOfItems, pricePerItem, taxRate,) {
    // Calc  price before tax
    const totalPriceBeforeTax = numberOfItems * pricePerItem;  
    // Calculatetax amount
    const totalTax = totalPriceBeforeTax * taxRate;
    // Calculate the final 
    const finalTotalPrice = totalPriceBeforeTax + totalTax;   
    return {
        totalPrice : finalTotalPrice,
        TaxAmount : totalTax,
    };
}
// Example usage:
const totalPrice = calculateCartPrice(3, 150, 0.07);
const totalTax = totalPrice.totalTax;
console.log(`The total price of the cart is: ${totalPrice.totalPrice.toFixed(2)+" Rs"}`);
console.log(`total tax applied is : ${totalPrice.TaxAmount.toFixed(2)+" Rs"}`);

//normal arrow function
const add = (a, b) => {
    return a + b;
};


//arrow function implicit return
const multiply = (a, b) => (a * b)

//without arrow function
function multiplyFunc(a, b) {
    return a * b;
}