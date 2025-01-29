"use strict";
//NESTED OBJECT
let person = {
    name: "saad",
    age: 20,
    address: {
        city: "karachi",
        country: "pakistan"
    }
};
console.log("My name is", person.name, "and I'm from", person.address.city);
