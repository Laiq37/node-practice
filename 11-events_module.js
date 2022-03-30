//Event is a nodeJs built-in Module, which is use to create, listen and fire events

//import events as EvenEmitter
const EventEmitter = require('events');

//create an instance of Events
const events = new EventEmitter();

//Registering and listening events
events.on("myName",()=>{
    console.log("my name is Laiq");
});
events.on("checkStatus", (resCode, resMes)=>{
    console.log(`status: ${resCode}\ncmessage: ${resMes}`)
})

//emitting events
//before emitting the events event must be listened/initialize like above, if we emit the event first and then listening it then it wont work
//emit requires event name as argument, and we can also pass other argument as parameter in listening(on) method callback funtion, for example refer
//  to checkStatus event listener/on
events.emit("myName");
events.emit('checkStatus', 200, 'ok')