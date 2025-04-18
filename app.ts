var a = "Bhawna";
let abcd = true;
let arr = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4, "Sharma"];
let arr3 = [1, 2, 3, 4, { name: "Bhawna" }];
let arr4 = [1, 2, 3, 4, { name: "Bhawna" }, { age: 22 }];

// number
let age: number = 22;

// string
let userName: string = "Bhawna Sharma";
// console.info(userName);

// boolean
let isLoggedIn: boolean = true;

// array
let arr5: number[] = [1, 2, 4];

// tuple
let tuple1: [string, number] = ["Bhawna", 22];
// console.info(tuple1);

let tuple2: [number, string] = [22, "Bhawna"];

// enums
enum UserRoles {
  ADMIN = "admin",
  GUEST = "guest",
  USER = "user",
}

enum StatusCode {
  BAD_REQUEST = "400 Bad Request",
  NOT_FOUND = "404 Not Found",
}

// object
let obj: { name: string; age: number } = {
  name: "Bhawna",
  age: 22,
};
// console.info(obj);

// any
let any: any = 24;
any = "Any";
console.info(any);

// let test: any = 22;
// test.toLowerCase();

// unknown
let test2: unknown = "hello";
if (typeof test2 === "string") {
  console.info(test2.toUpperCase());
}

let test3:unknown = "Bhawna";
if(typeof test3 === "string"){
  console.info(test3.toLowerCase());
}

// null
let test4 = null; 
let test5: null = null;
test4 = 3;
// test5 = 5; //error
console.info(test4);
console.info(test5);

// undefined
let test6: undefined = undefined;
// test6 = "Undefined"; //error
console.info(test6);

// never
// function neverFunc():never{
//   console.info("Never");
// }
// neverFunc();