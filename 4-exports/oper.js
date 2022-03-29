const add = (a, b) => {return a+b};

const sub = (a, b) => {return a-b};

const mult = (a,b) => {return a*b};

const divi = (a,b) => {return a/b};

//there are multiple ways of exporting module data

//first one
//module.exports.anyName = objNmae
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mult = mult;
// module.exports.divi = divi;

//second is 
//direct exports the object with their original name 
// module.exports = {add, sub, mult, divi};

//exports object with their alias name
module.exports = {add1:add, sub2:sub, mult3:mult, divi4:divi};