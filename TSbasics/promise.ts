//promise 

const prom = new Promise((resolve, reject) => { //promise constructor
    let login = true; //simulating a condition

    if(login){
        resolve("Task successful"); //success signal
    } else {
        reject("Task failed"); //error signal
    }
})

//consuming the promise
prom
 .then((result) => console.log(result)) //runs on resolve
 .catch((error) => console.log(error))  //runs on reject
  .finally(() => console.log("Request completed")); //always runs at end
console.log("")

//async/await --
async function welcomeSuccess(){ 

    return Promise.resolve("Hello Promise"); // success 
}

async function displaySuccess(){ 
    try{
   const result = await welcomeSuccess();
   console.log(result);
} catch(error) {
    console.error("Error occurred:", error);
} finally {
    console.log("Async operation completed");
}
}
displaySuccess();
console.log("");

// error code
async function welcomeFailure(){

    return  Promise.reject("Failed to fetch Welcome message");  //failure
}

async function displayFailure(){ 
    try{
   const result = await welcomeFailure(); 
   console.log(result);
} catch(error) {
    console.error("Error occurred:", error);
} finally {
    console.log("Async operation completed");
}
}
displayFailure();