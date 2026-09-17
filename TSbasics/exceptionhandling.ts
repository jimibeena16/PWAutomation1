try{
   let b:any = null;
   console.log(b.name);
} catch (error:any){
    if(error) { 
        console.log("An error occured:", error.message);
    } 
}finally {
console.log("Task completed")
 }
console.log("")

//Using throw -- custom error
function checkAge(age:number): void {
    if(age<18){
        throw new Error("Access denied: You must be atleast 18yrs old");
    }
    console.log("Access granted");
}
try{
    checkAge(15);
} catch(error) {
    console.log("Caught:", (error as Error).message);
}
