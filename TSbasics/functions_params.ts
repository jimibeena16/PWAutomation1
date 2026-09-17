//Optional, default, Rest parameters

function car1(name6:string, price?:number) : void
{
 if (price){
    console.log(name6, price)
 }
 else{
    console.log(name6)
 }
}
car1("Benz")
car1("BMW", 6000000)
console.log("")


function emp5(name3:string, empid:number, cmpname?:string) : void
{
    if(cmpname){
        console.log(cmpname)
    }
    else {
        console.log(name3, empid, cmpname)
    }
}
emp5("Matt", 865,"IBM")
emp5("Mathew", 567)
console.log("")

//default parameter 
/*function funName(para1:datatype, para2:datatype=value):returntype
{

} */
function defaultfn(a:number, b:number = 500) : number
{
   return a+b
}
console.log(defaultfn(100))


//Rest parameters -- gathers arbitrary no of arguments into a typed array
function sumAll(...numbers:number[]): number {
  return numbers.reduce((total,num) => total + num, 0);
}