const array = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`Element at index ${i} is ${element}`);
    
}

const heroes = ['Superman', 'Batman', 'Wonder Woman'];

for (let i = 0; i < heroes.length; i++) {
    const element = heroes[i];
    console.log(element);
    
    
}

//break statement

for (let i = 0; i < 5000; i++) {
    if (i===67) {
        console.log("67 detected");
        break;  
    }
    console.log(i); 
}