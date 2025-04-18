"use strict";
var a = "Bhawna";
let abcd = true;
let arr = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4, "Sharma"];
let arr3 = [1, 2, 3, 4, { name: "Bhawna" }];
let arr4 = [1, 2, 3, 4, { name: "Bhawna" }, { age: 22 }];
// number
let age = 22;
// string
let userName = "Bhawna Sharma";
// console.info(userName);
// boolean
let isLoggedIn = true;
// array
let arr5 = [1, 2, 4];
// tuple
let tuple1 = ["Bhawna", 22];
// console.info(tuple1);
let tuple2 = [22, "Bhawna"];
// enums
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["USER"] = "user";
})(UserRoles || (UserRoles = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode["BAD_REQUEST"] = "400 Bad Request";
    StatusCode["NOT_FOUND"] = "404 Not Found";
})(StatusCode || (StatusCode = {}));
// object
let obj = {
    name: "Bhawna",
    age: 22,
};
// console.info(obj);
// any
let any = 24;
any = "Any";
console.info(any);
// let test: any = 22;
// test.toLowerCase();
// unknown
let test2 = "hello";
if (typeof test2 === "string") {
    console.info(test2.toUpperCase());
}
let test3 = "Bhawna";
if (typeof test3 === "string") {
    console.info(test3.toLowerCase());
}
// null
let test4 = null;
let test5 = null;
test4 = 3;
// test5 = 5; //error
console.info(test4);
console.info(test5);
// undefined
let test6 = undefined;
// test6 = "Undefined"; //error
console.info(test6);
// never
// function neverFunc():never{
//   console.info("Never");
// }
// neverFunc();
