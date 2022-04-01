const express = require("express")
require('../db/conn')
const StudentRouter = require("../router/studentRouter")

const port = process.env.PORT || 8000
const expressApp = express()

expressApp.use(express.json())

expressApp.use(StudentRouter)

expressApp.listen(port, ()=>{
    console.log("Listening to User Requests")
})