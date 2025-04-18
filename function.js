// functions in Typescript
// 1. Basic Function
function greet(name) {
    return "Hello, ".concat(name);
}
console.info(greet("Bhawna"));
// 2. Function Expression
var add = function sum(a, b) {
    return a + b;
};
console.log(add(10, 5));
// 3. Arrow function
var message = function (a, b) {
    return a.concat(b);
};
console.info(message("Bhawna", "Sharma"));
// 4. Optional Parameter
function log(message, userId) {
    console.log(message, userId);
}
log("Bhawna", 22);
log("testing");
// 5. Default Parameter
function greetUser(name) {
    if (name === void 0) { name = "Guest"; }
    return "Hello ".concat(name);
}
console.info(greetUser());
