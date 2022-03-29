const os = require('os');

//window architecture
console.log(os.arch());

//platform ex: linux, window etc
console.log(os.platform());
console.log(os.type());
//temp directory path
console.log(os.tmpdir())

//hostname
console.log(os.hostname())

//free memory
console.log(os.freemem/1024/1024/1024)// in gb

//total memory
console.log(os.totalmem/1024/1024/1024)