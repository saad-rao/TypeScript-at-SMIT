let teacher : { name: string , age: number} = {
    name: 'Ali Aftab',
    age: 26
}




// Aliased Object Type

type Person = { 
    name: string ,
    age?: number

}

let person : Person = { 
    name: 'Ali Aftab',
    age: 26
}


console.log(person["name"]);
console.log(person.age);

