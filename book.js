"use strict";
// const acceptObj = (obj: {foo: string, boo: number, baz: boolean}) => {}
const logAlbum = (title, trackCount, isReleased) => { console.log(title, trackCount, isReleased); };
// logAlbum("Harry Potter", 15, true);
// logAlbum("Harry Potter", false, 15); error
// Basic Type
let example1 = "Hello World!";
let example2 = 22;
let example3 = true;
let example4 = Symbol();
let example5 = null;
let example6 = undefined;
// Type Inference
let albumTitle = "Hello World!";
let trackCount = 22;
let isReleased = true;
console.log(albumTitle.toUpperCase());
// trackCount = "string" error
// Typescript of variable type
let x = 10;
console.log(x);
console.log(typeof x);
// Typescript  of array
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);
console.info(typeof fruits);
// Typescript of function return type
// Basic Types with Functional Parameter
const sum = (a, b) => {
    return a + b;
};
// console.info(sum(5, 10));
const result = sum(5, 10);
console.info(result);
// Annotating Empty Parameters
const concatTwoString = (a, b) => {
    return [a, b].join(' ');
};
const result2 = concatTwoString("Hello", "World");
console.info(result2);
const concatName = (user) => {
    if (!user.last)
        return user.first;
    return `${user.first} ${user.last}`;
};
const result3 = concatName({ first: "Bhawna", last: "Sharma" });
const result4 = concatName({ first: "Hemant" });
console.info(result3);
console.info(result4);
