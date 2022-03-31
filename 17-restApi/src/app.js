const express = require("express")
require('../db/conn')
const StudentCollection = require('../models/students')

const port = process.env.PORT || 8000
const expressApp = express()

expressApp.use(express.json())

expressApp.get("/", (req, res)=>{
    res.send("It is a students RESTAPI")
})

//post using promise
// expressApp.post("/student", (req, res)=>{
//     //we have to convert req.body data into json format for that we will use middleware, express.json(), to treat data as JSON obj
//      console.log(req.body)
//     const newStudent = new StudentCollection(req.body)
//     newStudent.save().then(()=>{
//         res.write("Post request successful")
//         res.write(JSON.stringify(newStudent))
//         res.send()
//     }).catch((error) => {res.status(400).send(error)})
// })

//post using async await
expressApp.post("/student",  async(req, res)=>{
    //we have to convert req.body data into json format for that we will use middleware, express.json(), to treat data as JSON obj
    try{
        const newStudent = new StudentCollection(req.body)
        const result = await newStudent.save()
        console.log(result)
        res.send("user created succefully")

    }catch(error){
    res.status(400).send(error)
    }
})

//Get all student
expressApp.get("/student", async(req, res)=>{
    try{const studentList = await StudentCollection.find()
    res.send(studentList)}
    catch(error){
        res.status(400).send(error)
    }
})

//Get student by Id
expressApp.get("/student/:id", async(req, res)=>{
    try{
        const _id = req.params.id
        const studentList = await StudentCollection.find({_id})
    res.send(studentList)}
    catch(error){
        res.status(400).send(error)
    }
})


expressApp.listen(port, ()=>{
    console.log("Listening to User Requests")
})