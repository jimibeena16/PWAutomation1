//Functions 

//Type of Fn -- Named fn, Arrow fn

//Named fn --
function addition(a:number, b:number){
    return a+b;
}
console.log(addition(3,4));

//Arrow fn --
const multiply = (x:number, y:number) : number => x*y;
console.log(multiply(2,4));


//void return type -- 
function sample() : void
{
 console.log("Hello")
}
sample()
console.log("")


//Primitive/Custom types -- returns a specified type - number, string

//string return type
function sample1(): string
{
  return "test"
}
console.log(sample1())
console.log("")

//with parameter
// syntax --> function fnname(parameter:datatype): returntype
function student5(name:string) : void
{
 console.log(name)
}
student5("Tom")
console.log("")

//adding 2 nos
function add(num1:number, num2:number) : void
{
    let c= num1 + num2
    console.log(c)
}
add(3,5)
console.log("")

//parametrisation and return
function char(ch1: string): string
{
 return ch1
}
console.log(char("s"))
console.log("")

//division -- parameterisation and return
function div(d1:number, d2:number) : number
{
    return d1/d2
}
console.log(div(10,20))
console.log("")

//Type inference -- 

//type inference in variables
let name5 = "Izza"
console.log(name5)
console.log("")

let num5 = 4
console.log(num5)
console.log("")

let ts = true
console.log(ts)
console.log("")

let arr8 = [1,5,6,9,12]
console.log(arr8)
console.log("")

//type inference in function
function multip(a:number, b:number)
{
    return a*b
} 
console.log(multip(2,5))
console.log("")

//type inference in object
const obj5 =
 {
   name1 : "tessa", age1 : 20
}
console.log(obj5)
console.log("")



//difference of Type inference in TS and basic JS

let age = 25;
//TS behaviour:
//age = "twenty five"; //error - as string is not assignable to number

//JS behaviour:
//age = "twenty five"; //allowed as JS is dynamic

