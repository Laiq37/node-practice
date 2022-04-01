const express = require('express')
require('../db/conn')
const racerRouter = require('../router/router')

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())
app.use(racerRouter)

app.listen(port, ()=>{
    `app is started and now listening to Port : ${port}`
})