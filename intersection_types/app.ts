//                       INTERSECTION TYPES


type Student = {
    student_name: string;
    student_Id: number;
    student_age: number;
}

type Teacher = {
    teacher_name: string;
    teacher_Id: number;
    teacher_age: number;
}


const person : Student & Teacher = {
    student_name: "Saad",
    student_Id: 263144,
    student_age: 20,
    teacher_name: "Ali",
    teacher_Id: 123456,
    teacher_age: 25
}

console.log(person);




                          // ANY TYPE

let myName:any = "Saad";

myName= 20;
myName = true;
myName = [1,2,3,4,5];
myName = {name: "Saad", age: 20};

console.log(myName);