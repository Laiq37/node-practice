const fs = require("fs");

// // creating a new file or overwrite file
// fs.writeFileSync("read.txt", "Hi! how are you");

// //append data in existing file
// fs.appendFileSync("read.txt", "Alhamdulillah I am fine");

// //read data in existing file
// const fileData = fs.readFileSync("read.txt"); // this will return a file data in buffer form we have to convert it into string using toString() method

// console.log(fileData);

// console.log(fileData.toString());

var fileName = "folder_using_node_fs_module";

//creating folder 
// fs.mkdirSync("folder_using_node_fs_module");

//string literal/interpolation
// fs.writeFileSync(`${fileName}/bio.txt`, "My name is laiq");

// fs.renameSync(`${fileName}/bio.txt`, `${fileName}/newBio.txt`);

//reading file string data directly
// console.log(fs.readFileSync(`${fileName}/newBio.txt`, 'utf-8'));

//deleting file
// fs.unlinkSync(`${fileName}/newBio.txt`);

//deleting folder
// fs.rmdirSync(fileName)
