// const acceptObj = (obj: {foo: string, boo: number, baz: boolean}) => {}

import { Animal } from "./animal.types";


const logAlbum = (
    title: string,
    trackCount: number,
    isReleased: boolean
) => {console.log(title, trackCount, isReleased)};

// logAlbum("Harry Potter", 15, true);
// logAlbum("Harry Potter", false, 15); error

// Basic Type
let example1: string = "Hello World!";
let example2: number = 22;
let example3: boolean = true;
let example4: symbol = Symbol();
let example5: null = null;
let example6: undefined = undefined;

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
const sum = (a: number, b: number) => {
    return a + b;
}
// console.info(sum(5, 10));

const result = sum(5, 10);
console.info(result);

// Annotating Empty Parameters
const concatTwoString = (a: string, b: string) => {
    return [a,b].join(' ');

}

const result2 = concatTwoString("Hello", "World");
console.info(result2);

const concatName = (user: {first: string; last?: string}) => {
    if(!user.last)
        return user.first;

    return `${user.first} ${user.last}`;
}

const result3 = concatName({first: "Bhawna", last: "Sharma"});
const result4 = concatName({first: "Hemant"});
console.info(result3);
console.info(result4);

// Interface
interface User{
    fullName: string,
    age: number,
    designation: string
};

function newUser(user: User) {
    console.info(`FullName: ${user.fullName}, Age: ${user.age}, Designation: ${user.designation}`);
}
newUser({fullName: "Bhawna Sharma", age: 22, designation: "Frontend Developer"});

// Extending Interface
// interface Admin extends User{
//     admin: boolean;
// }

// function newAdmin(user: Admin){
   
// }

interface Shape{
    color: string;
    area(): number;
}

interface Circle extends Shape{
    radius: number
}

const circle: Circle = {
   radius: 5,
   color: `red`,
   area(){
    return Math.PI * this.radius ** 2;
   }
}

console.info(circle.color);
console.info(circle.area());

const housePet: Animal = {
    name: "Sia",
    type: "cat"
}

const getAnimalDescription = (animal: Animal) => {
   console.info(`${animal.name} ${animal.type}`);
}

getAnimalDescription(housePet);









