//first way to import module
// const oper = require('./oper');

// console.log(oper.add(10, 5));
// console.log(oper.sub(10, 5));
// console.log(oper.mult(10,5));
// console.log(oper.divi(10, 5));

//second way
//importing object by destucturing with original name
const {add, sub, mult,divi} = require('./oper');

console.log(add(10,5));
console.log(sub(10,5));
consoloe.log(mult(10,5))
console.log(divi(10,5))

//importing object by destucturing with alias name
const {add1, sub2, mult3,divi4} = require('./oper');

console.log(add1(10,5));
console.log(sub2(10,5));
console.log(mult3(10,5));
console.log(divi4(10,5));