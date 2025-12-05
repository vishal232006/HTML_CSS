let students=["Anu","ravi","mona"];
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

for(let i=0;i<students.length;i++){
    console.log(students.length);
    let a=[1,2];
    a.push(3);
    console.log(a);//[1,2,3]

    let b=[1,2,3];
    b.pop();
    console.log(b);//[1,2]

    let c=[2,3];
    c.unshift(1);
    console.log(c);//[1,2,3]

    let d=[1,2,3];
    d.shift();
    console.log(d);//[2,3]

    let y=[10,20,30];
    console.log(y.length);//3

    let x=["a","b","c"];
    console.log(x.indexOf("b"));//1
}
let arr=[""]