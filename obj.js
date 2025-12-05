let user={
    name:"john",
    age:25,
};
console.log(Object.keys(user));
console.log(Object.values(user));

user.city="Delhi";

console.log(user);

 user.age=30;

console.log(user);

delete user.age;
console.log(user);


let arr=[1,2,3];
console.log(arr[1]);

for(let i=0;i<arr.length/property;i++)
{
    console.log(arr[i]);
}
arr.push(3);//pushes 3 at end
arr.pop();//removes an element from end of the list
arr.unshift(3);//add element '3' at beginning 
arr.shift();//removes element at front 
console.log(arr.length);

let x=["a","b","c"];
console.log(x.includes("b"));//true
//for each function
arr.forEach(mark => {console.log(mark)});
let marks = [45,67,89];
marks.forEach(mark => {console.log("Mark:",mark)});

//map 

let marks2=[45,67,8,90];
let updatedMarks = marks2.map(mark=>mark+5);
console.log(updatedMarks);

// filter

let marks3=[1,23,4,50,67,8,90];
let passed = marks3.filter(mark => mark > 50);
console.log(passed);

//find
let marks4=[1,23,4,50,67,8,90];
let passed1 = marks3.find(mark => mark > 50);
console.log(passed1);

