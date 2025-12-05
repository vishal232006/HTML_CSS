//function declaration
function greet() {
console.log("Hello, World!");
}
greet();
//function expression
let greet2=function(){
    console.log("Hi there!");
};
greet2();

//arrow function
let greet3=()=>{
    console.log("hey");
};
greet3();

const add1=(a,b)=>{
    return a+b;
};
let result1=add1(5,3);
console.log(result1);


