// functions in Typescript

// 1. Basic Function
function greet(name: string):string{
    return `Hello, ${name}`;
}
console.info(greet("Bhawna"));

// 2. Function Expression
const add = function sum(a: number, b:number):number{
    return a+b;
}
console.log(add(10, 5));

// 3. Arrow function
const message = (a: string, b:string):string => {
    return a.concat(b);
}
console.info(message("Bhawna", "Sharma"));

// 4. Optional Parameter
function log(message:string, userId?: number):void{
    console.log(message, userId);
}
log("Bhawna", 22);
log("testing");

// 5. Default Parameter
function greetUser(name: string = "Guest"):string{
    return `Hello ${name}`;
}
console.info(greetUser());

