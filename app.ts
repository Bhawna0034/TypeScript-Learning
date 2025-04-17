var a = "Bhawna";
let abcd = true;
let arr = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4, "Sharma"];
let arr3 = [1, 2, 3, 4, {name: "Bhawna"}];
let arr4 = [1, 2, 3, 4, {name: "Bhawna"}, {age: 22}];

// number
let age: number = 22; 

// string
let userName: string = "Bhawna Sharma";
console.info(userName);

// boolean
let isLoggedIn: boolean = true;

// array
let arr5: number[] = [1, 2, 4];

// tuple
let tuple1: [string, number] = ["Bhawna", 22];
console.info(tuple1);

let tuple2: [number, string] = [22, "Bhawna"];


// enums
enum UserRoles{
    ADMIN = "admin",
    GUEST = "guest",
    USER = "user"
}

enum StatusCode{
    BAD_REQUEST = "400 Bad Request",
    NOT_FOUND = "404 Not Found"
}

