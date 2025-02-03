"use strict";
// What is tuple in TypeScript?
// Tuple is a data structure that includes a specific number of elements with different data types.
let tuple = ['hello', 10];
var secondElement = tuple[1]; // secondElement now has type 'string' 
// Typically an array contains zero to many objects of a
// single type. TypeScript has special analysis around
// arrays which contain multiple types, and where the order
// in which they are indexed is important.
// These are called tuples. Think of them as a way to
// connect some data, but with less syntax than keyed objects.
// You can create a tuple using JavaScript's array syntax:
