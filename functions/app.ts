                                             //FUNCTIONS

//NAMED FUNCTION

function sum(a:number,b:number):number{

    return a + b

}

console.log(sum(10,10));


//ANONYMOUS FUNCTION

let sum1 = function (a:number, b:number){
    return a + b

}

console.log(sum1(20,20));


//LAMBDA FUNCTION

let sum2 = function(a:number, b:number) => a + b
//output will be: var sum2 = function(a : number, b : number) {return a + b};