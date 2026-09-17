//Arrays 
let fruits : string[] = ["apple", "orange", "mango"]
console.log(fruits)
console.log("")

//other array types 

//Tuple 
let student : [number, String, boolean] = [2, "Amy", true]; 
console.log(student)
console.log("")

//Readonly tuples - immutable
let point: readonly [number, number] = [10,20];
//point.push(30); //throws error since its readonly
console.log(point)

//Optional tuple elements(?) 
let user: [string, number?];
user =["Bob"];
user = ["Bob", 25];
console.log(user)

//Named tuples 
const graph: [x:number, y:number] = [55.2,41.3];
console.log(graph)

const [x, y] = graph; //destructuring into variables - 2 separate numbers extracted from tuple
console.log(x,y)

//Object 
//example1 -- object with data - Object literal 
let student1 = {    
name:"tessy",
age: 20,
dept: "ece"
 }
console.log(student1)
console.log(student1.age)
console.log("")

//example2 -- another type
let person1:{ 
    id:number;
    name:string;
};
person1 = {
    id: 401,
    name:"Dev"
};
console.log(person1.id);
console.log(person1.name);
console.log(person1);
console.log("")

//JSON Object creation - JavaScript Object Notation 

/*{
"key1": value1,
"key2": value2,
"key3": value3 }
*/

//converting javascript objects to JSON -- stringify
const car = {
    name: "Benz",
    price: 4500000
}

const jsonobj = JSON.stringify(car)
console.log(jsonobj)
console.log(" ")


//To convert JSON to javascript object -- Parse
//symbol below the esc in keyboard is used "`"
const data = 
 `{                   
    "name": "Iziah",
    "dept": "ece",
    "age": 20
}`

let jsobj = JSON.parse(data)
console.log(data)
console.log("")

//this keyword -- to refer current class objects
const animal = {
    name: "cat",

    details(): void{
        console.log(this.name);
    }
}
animal.details();
console.log("");

//Map -- stores data in key-value pairs where keys can be of any type
let userAges = new Map<string, number>(); 
//Adding values -- use set
userAges.set("Alex", 25);
userAges.set("Jordan",30);
userAges.set("Taylor",22);
//retrieving a value by key -- use get
console.log(userAges.get("Alex"));
//check if a key exists -- use has
console.log(userAges.has("Jordan"));
//Delete an entry -- use delete
userAges.delete("Taylor");
//Retrieve total no of entries -- use size
console.log(userAges.size);

//set -- stores unique values means no duplicates, unordered selection
const uniqueIds = new Set<number>();
uniqueIds.add(100);
uniqueIds.add(200);
uniqueIds.add(100); //duplicate ignored

console.log(uniqueIds.has(100));
console.log(uniqueIds.size);
console.log("")

