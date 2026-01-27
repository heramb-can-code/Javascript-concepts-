var name = "heramb";

console.log(name);

function sayName(){
    // var name = "Ishwar";
     name = "Ishwar";
    console.log(name);
    function sayName2(){
        var name = "Rajeshwar";
        console.log(name);
    }
    sayName2();
}
sayName();

console.log(name);