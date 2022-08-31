// var, let, const
var x; // before ES6, old way of declaring variables
let y; // Modern way, ES6
const z =10;
// z = 2; Can't reassign values to constant variables

console.log("x: ", x);  // undefined
console.log("y: ", y ); //undefined
console.log("z: ", z); // 10

x = 1;
y = 2;

console.log("x: ", x);  // 1
console.log("y: ", y ); //2
console.log("z: ", z); //10


var x;
// let y; ERROR

// let some dog;