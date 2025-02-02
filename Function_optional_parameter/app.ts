                                      //FUNCTION OPTIONAL PARAMETERS


// function fullName (firstName:string, lastName?:string){
//     if (lastName)
//         return firstName + " " + lastName;

//     else 
//     return firstName 
// }
// let fulname = fullName("Saad", "Naseem"); // returns "Saad Naseem"  
// let fullname2 = fullName("Saad"); // returns "Saad"
// let fullname3 = fullName("Saad", undefined); // returns "Saad"
// let fullname4 = fullName("Saad", "Ali", "Naseem"); // error as it takes only 2 parameters  




//anonymous function type with optional parameters

let fullname : (first:string, lastName?:string) => string = 

function(first:string, lastName?:string):string{
    if(lastName)
        return first + " " + lastName;
    else
        return first;
}


let fullName = fullname("Saad"); // returns "Saad Naseem"
console.log(fullName);
