let myHeroes= ["thor","hulk","spiderman"]
let heroPower = {
    hulk: "smash",
    thor:"hammer",
    spiderman:"swing",
    getSpiderPower: ()=>{
        console.log(`spider power is ${spiderman}`);
        
    }
}

Object.prototype.heramb= ()=>{
    console.log(`heramb is present in all objects`); 
}
Array.prototype.heyheramb= ()=>{
    console.log(`heramb says hello`);
    
}
// heroPower.heramb()
// myHeroes.heramb()
// myHeroes.heyheramb()
// heroPower.heyheramb()

//inheritance 
const User={
    name: "Om",
    email: "om@gmail.com"
}

const teacher={

    makeVideo: true
}

const  TeachingAssistant = {
    isAVailable: false 
}

const TAsupport = {
    makeAssignment: "js Assignment",
    fullTime: true,
    __proto__:  TeachingAssistant
}
teacher.__proto__= User

// modern syntax 

Object.setPrototypeOf(TeachingAssistant,teacher)
let anotherUsername= "herambbbb   "
String.prototype.trueLength= function(){
    console.log(`${this}`);
    console.log(`the length of the string is : ${this.trim().length}`);
    
}
anotherUsername.trueLength()
"chai".trueLength()
"dsapwoeiur0".trueLength()