const jsObject = {
    name : "Laiq",  
    age : 18,
    working: true
};

//converting javascriptObject in JSON
const json = JSON.stringify(jsObject);
console.log(json);

//decoding JSON in jsObject
const againJsObject = JSON.parse(json);
console.log(againJsObject);