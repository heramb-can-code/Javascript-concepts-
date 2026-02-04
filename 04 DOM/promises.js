    // let p = new Promise((resolve, reject) => {
    //     let a = 1 + 2;
    //     if (a == 2) {
    //         resolve("sucess");
    //     } else {
    //         reject("failed");

const { error } = require("console");
const { get } = require("http");
const { promiseHooks } = require("v8");

    //     }
    // });

    // p.then((message) => {
    //     console.log("this is the then ", message);
        
    // }).catch((message) => {
    //     console.log("this is the catch ", message);
        
    // })

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise One resolved");
        resolve();
    }, 2000);
});

promiseOne.then(() => {
    console.log("Promise One then executed");
});

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise Two resolved");
        resolve();
    }, 1000);
}).then(() => {
    console.log("Promise Two then executed");   
});

const promiseThree= new Promise((resolve,reject)=>{

})
const promiseFour= new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error= true;
        if(!error){
            resolve({name:"sachin",age:24});
        }else{
            reject("sorry somthing went wrong");
        }
    }, 2000);
})  

async function getAllUsers(){
    try{
        const response= await promiseFour;
        console.log(response);
    } catch(error){
        console.log('E:',error);
        
    }
};
getAllUsers();
