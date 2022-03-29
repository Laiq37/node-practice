const path = require('path');

//directory name
console.log(path.dirname("C:/nodeJs/path.js"));
//extension name
console.log(path.extname("C:/nodeJs/path.js"));
//file basename
console.log(path.basename("C:/nodeJs/path.js"));
//path full detail
console.log(path.parse("C:/nodeJs/path.js"));
//output of above will be like this
// {
//     root: 'C:/',
//     dir: 'C:/nodeJs',
//     base: 'path.js',
//     ext: '.js',
//     name: 'path'
//   }