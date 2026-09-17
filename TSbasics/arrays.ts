//Array in literal format - basic array creation
let arr: number[] = [1,4,5,8,10,12]; 
console.log(arr)
console.log("")

console.log(arr[2])
console.log(arr.length) //to get total number of elements in array

//array creation with empty array
let num:number[] =[ ] 
console.log(num)

num[0] = 2
num[1] = 4
num[2] = 6
num[3] = 8
num[4] = 10
console.log(num)
console.log("")

//Array constructor -- object creation format
let color:string[] = new Array("violet", "red", "blue", "green") 
console.log(color)
console.log(color.length) //to get the size of array
console.log("")

//Array of function -- (classname.functionname)
let vegetables:string[] = Array.of("carrot","beans", "tomato")
console.log(vegetables)
console.log("")

//Array iteration
let strng:string[] = ["anju","ammu","ponnu"]
for(let i=0; i<strng.length; i++){

  console.log(strng[i])
}
console.log("")

//array iteration using for of
let number:number[] = [6,5,4,2,1]
for(let value of number){
    console.log(value)
}
console.log("")

//array iteration using for in
//for(let index in number){
   // console.log(index)
const tools: string[] = ["Playwright", "Selenium", "Postman"];
for(let index in tools ) {
    console.log(`Index ${index}: ${tools[index]}`);
}

//array methods 
//1. Push -- adding values to empty array or add values at end
let arr1: number[] = []
arr1.push(2,3,4,5,6)
console.log(arr1)
console.log("")

//2. Pop -- To remove last element of an array
arr1.pop()
console.log(arr1)
console.log("")

//3. unshift -- to insert an element at the beginning of an array
arr1.unshift(1)
console.log(arr1)
console.log("")

//4. shift -- to remove first element of an array
arr1.shift()
console.log(arr1) 
console.log("")

// splice -- to remove 2 elements starting from index 1
arr1.splice(1,2);
console.log(arr1)

//5. includes -- to check if an element is exist in an array, returns boolean value
console.log(arr1.includes(2))
console.log(arr1.includes(8))
console.log("")

//6. index of -- to find the index of an element in an array
console.log(arr1.indexOf(4))
console.log("")

//7. reverse function
console.log(arr1.reverse())
console.log("")

//8. concat function
let arr2 = [10, 20]
let arr3 = [50, 30]
let result = arr2.concat(arr3)
console.log(result)
console.log("")