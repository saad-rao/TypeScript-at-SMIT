//FUNCTION OVERLOADS IN TYPESCRIPT

//What is function overloading?
//Function overloading is a concept where a single function can have multiple signatures.
//Function overloading is a way to define multiple function signatures with the same name.

function calculate (a:number, b:number):number;
function calculate (a:string, b:string):string;
function calculate (a:string, b:number):number;
function calculate (a:boolean, b:boolean):boolean;

function calculate (a:any, b:any):any{
    return a + b;
}

console.log(calculate(10, 20));
console.log(calculate("Hello", "World"));
console.log(calculate("Hello", 20));
console.log(calculate(true, false));
