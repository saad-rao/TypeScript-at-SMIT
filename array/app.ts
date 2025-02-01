                                        //ARRAYS

let fruits:string[] = ['Apple', 'Banana', 'Orange', 'Mango'];   //correct syntax

console.log(fruits[0]); // 

console.log(fruits.lastIndexOf("Banana")); 


let fruits1:Array<string> = ['Apple', 'Banana', 'Orange', 'Mango'];   //Alternative correct syntax

let fruits2:string[] = [] //Correct way to define Empty array

// let fruit3:string[] = new fruit['Apple']; //Incorrect way to define array

let fruit4:string[] = []
fruit4.push('Apple','Banana','Orange');
console.log(fruit4);