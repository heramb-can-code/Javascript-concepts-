const ferrari = {
    model: 'F40',
    brand: 'Ferrari',
    year: 1987,
    color: 'Red',
    horsepower: 478,
};

// Destructuring 
const { model, brand, year, color, horsepower: hp } = ferrari;

console.log(ferrari.horsepower); // Accessing without destructuring
console.log(hp); // Accessing with destructuring

