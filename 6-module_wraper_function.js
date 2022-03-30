// what is module wraper function
// in nodejs module wraper function is an anonymous which wraps the whole code of file in it when we compile our code to make code private
//benefit of wraper function is we can immediately invoke it
//we dont neeed to wrap our code in anonymous function like we did below(program will throw error), node automatically does this for us
(function(exports, require, module, __filename, __dirname){
    var nam = 'Laiq';
    console.log(nam);
})();

// console.log(nam); this line will produce error(nam is not defined, as we know that if we define variable using var we can use that varaible insie
// and outside of function scope but due to wraper function it isnt possible to even aceess the var variable outside from it scope)