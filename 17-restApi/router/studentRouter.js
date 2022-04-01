const express = require('express')
const StudentCollection = require('../models/students')

const StudentRouter = new express.Router()

StudentRouter.get("/", (req, res)=>{
    res.send("It is a students RESTAPI")
})

//post using promise
// StudentRouter.post("/student", (req, res)=>{
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
StudentRouter.post("/student",  async(req, res)=>{
    //we have to convert req.body data into json format for that we will use middleware, express.json(), to treat data as JSON obj
    try{
        const newStudent = new StudentCollection(req.body)
        const result = await newStudent.save()
        console.log(result)
        // res.writeHead(200,{"Content-Type": "application/json"})
        return res.json(result)
        // res.send("user created succefully")

    }catch(error){
    res.status(400).write(error)
    }
})

//Get all student
StudentRouter.get("/student", async(_, res)=>{
    try{const studentList = await StudentCollection.find()
    res.send(studentList)}
    catch(error){
        res.status(400).send(error)
    }
})

//Get student by Id
StudentRouter.get("/student/:id", async(req, res)=>{
    try{
        const _id = req.params.id
        const studentList = await StudentCollection.find({_id})
    res.send(studentList)}
    catch(error){
        res.status(400).send(error)
    }
})

StudentRouter.delete("/student/:id", async(req, res)=>{
    try{
        const _id = req.params.id
        const studentDelete = await StudentCollection.deleteOne({_id})
        res.send("user has been deleted sucessfully")
    }catch(error){
        res.status(400).send("Unable to delete user")
    }
})

StudentRouter.patch("/student/:id",async(req,res)=>{
    try{
        const _id = req.params.id
        const studetnUpdate = await StudentCollection.findByIdAndUpdate({_id}, req.body,{new:true})
        res.json(studetnUpdate)
    }catch(err){
        res.status(404).send("User not found")
    }
})

module.exports = StudentRouter