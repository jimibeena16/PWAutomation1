//Abstraction
//Make functions as Private

class CoffeeMachine{

     private boilWater() : void {
     console.log("Water is boiling");
   }

   makecoffee(){
   this.boilWater();
   console.log("Coffee is ready");
   }
 
}
let obj = new CoffeeMachine();
obj.makecoffee();
//obj.boilWater()// throws error as its private
console.log("");

//Encapsulation
//setting variable only as Private

class ATM {
    private pin = 2812 //# is used in js & private is used in ts
   
    //public method to validate pin
    public checkPin(p: number): void{
        if(p===this.pin){  //accessing through function only
            console.log("Pin is matching, user can login")
        }
        else{
            console.log("Incorrect pin")
        }

    }
}
let obj1 = new ATM();
obj1.checkPin(2800);
obj1.checkPin(2812);
//obj1.checkpin; //error as pin is private and accessible through functions
console.log("");

//Inheritance

class Parent{
    add() : void{
        console.log(2+3)
    }
}

class Child extends Parent {
     sub(): void{
        console.log(15-5)
     }
}
let obj2 = new Child();
obj2.add();
obj2.sub();
console.log("");

//super keyword -- to refer immediate parent class objects

class School{
    schooldetails(){
        console.log("Name of School is Sarvodaya")
    }
    schooldetails1(){
        console.log("Syllabus is CBSE")
    }
}
class Stud extends School{
    studentdetails(){
        super.schooldetails()
        super.schooldetails1() // possible in case of functions with super
        console.log("Name of Student is Miya")
    }
}
let std = new Stud()
std.studentdetails()
console.log("")

//Constructor with super
class Fruits{
    constructor(){
       console.log("fruitsdetails")
    }
}
class Shop extends Fruits {
    constructor(public name: string, public place:string){
    super() 
    }

    displaydetails(){
        console.log(this.name, this.place)
    }
}
let shp = new Shop("Fruitbae","TVM");
shp.displaydetails();
console.log("");

//Polymorphism 

class Employee1 {
    salary(): void{
        console.log("Salary is 30000")
    }
}

class Teacher extends Employee1 {
     override salary(): void{
        //super.salary(); ''calls parent class salary fn
        console.log("Salary is 50000")
     }
}
const t1 = new Teacher();
t1.salary(); 
console.log("")




