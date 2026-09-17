//variable declarations

//var - function scoped
if(true) {
    var leakedvalue: string = "I leaked outside";
    console.log(leakedvalue);
}
console.log(leakedvalue); //var leaks out of if block
console.log("")

//let - block scoped
let score: number =10;
score = 15;
if(true) {
    let innervalue: string = "I am inside the block";
    console.log(innervalue);
}
//console.log(innervalue); //error
console.log(score);
console.log("")

//const - block scoped
const year = 2026;
//year = 2027; //error
console.log(year);
console.log("")

//datatypes
//String 
let msg : string = "Hai"; 
console.log(msg)
console.log("")

//number 
let userage: number = 4
console.log(userage)
console.log("")

let isresult : boolean = true
console.log(isresult)
console.log("")

let dat: any = "john" //datatype -- any
console.log(dat)
console.log("")

let value: unknown //datatype -- unknown
value = 10
value = "monday"
value = false 
console.log(value)
console.log("")

//null 
let id: null = null
console.log(id)

//undefined
let a : undefined = undefined
console.log(a)
console.log("")

//conditional statements
//if
let studage: number = 18
if (studage>=18){
    console.log("Eligible for license")
}
console.log("")

//if-else
let num1: number = 20
if(num1==30){
    console.log("Number is matching")
}
else{
    console.log("Number is not matching")
}
console.log("")

//if-else-if
let a1: number = 10
let a2: number = 10
if(a1>a2){
    console.log("a1 is greater")
}
else if (a1<a2){
    console.log("a2 is greater")
}
else{
    console.log("Both are equal")
}
console.log("")

//Nested if 
let name1: String = "Anju"
let age1 : number = 20
if (name1 == "Anju"){
    if(age1 >=18){
        console.log("Name is "+name1 +" and age is "+age1)
    }
}
console.log("")

//switch case
let day: number = 4
switch (day){
    case 1:
        console.log("Day is Monday")
        break
    case 2:
        console.log("Day is Tuesday")
        break
    case 3:
        console.log("Day is Wednesday")
        break
    case 4:
        console.log("Day is Thursday")
        break
    default:
        console.log("Invalid day")
}
console.log("")

//Loops
//for loop
for(let i=5; i<=10;i++)
{
    console.log(i)
}
console.log("")

//for ...of 
let arr10 : number[] =[4,5,7,3,1]
for(let value of arr10){
    console.log(value);
};
console.log("")

//for ...in 
for(let index in arr10){
    console.log(index);
}
console.log("")

//for each
const fruits1:string[]=["apple", "banana", "mango"];
fruits1.forEach((fruit) => {
    console.log(fruit);
});

//while -- 
let count:number =0;
while(count<3){
    console.log(count);
    count++;
}

//do..while -- 
let numbr:number = 5;
do{
    console.log(numbr);
    numbr++;
} while(numbr<3);

//Template literals/string interpolation  --

const usrname:string = "Sudhi";
const role:string = "SDET";
const testId: number= 101;
console.log(`User ${usrname} with ID ${testId} is logged in as ${role}`)

