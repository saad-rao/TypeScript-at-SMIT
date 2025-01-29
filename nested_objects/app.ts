                             //NESTED OBJECT

let person = {
    name:"saad",
    age:20,
    address: {
        city:"karachi",
        country:"pakistan"
    }
}


console.log("My name is" , person.name ,"and I'm from",  person.address.city);



type Author = {
    firstName:string,
    lastName:string,
};


type Book = {
    author:Author,
    name:string,
}

let myBook : Book = {
    author:{
        firstName:"saad",
        lastName:"Naseem"
    },
    name:"Typescript"
}

console.log("My book name is", myBook.name , "and it's author is", myBook.author.firstName , myBook.author.lastName);