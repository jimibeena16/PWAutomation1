//type aliases (type annotation) -- 
type User = {
    id:number;
    name:string;
}

//Types can also represnt primitives, unions and tuples
type ID = string|number;
type Point = [number,number]

const objuser: User={id:101, name:"Alice"};
console.log("Type Alias object:", objuser);
console.log("")

//interfaces(interface) -- 
interface User1 {
 id:number;
 name:string;
 admin?: boolean;
 }

 class AppUser implements User1{
    id=1;
    name="John";
 }

 const objuser1 = new AppUser();
 console.log(objuser1);
 console.log("")
