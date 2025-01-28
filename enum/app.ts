                          //Enum


enum Color {Red, Green, Blue}


console.log(Color.Red); // 0    
console.log(Color.Green); // 1
console.log(Color.Blue); // 2
console.log(Color[2]); // Blue

// You can also assign the value of enums manually.

enum Color1 {Red = 1, Green, Blue}
console.log(Color1.Blue); // 3


