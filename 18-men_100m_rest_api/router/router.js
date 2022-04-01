const express = require('express')
const RacerCollection = require('../model/racer_collection')

const racerRouter = express.Router()

racerRouter.get('/racer', async(req, res)=>{
    try{
        const racerData = await RacerCollection.find({}).sort({ranking:1})
        res.send(racerData)
    }catch(err){
        res.status(400).send('failed to fetch 100 Meter Race data')
    }
})

racerRouter.get('/racer/:id', async(req, res)=>{
    try{
        const _id = req.params.id
        const racerData = await RacerCollection.findById({_id})
        console.log(racerData)
        res.send(racerData)
    }catch(err){
        res.status(400).send('failed to fetch')
    }
})

racerRouter.post('/racer', async(req, res)=>{
    try{
        const NewRacer = new RacerCollection(req.body)
        console.log('data added successfully')
        const addedRacer = await NewRacer.save()
        console.log(addedRacer)
        // res.write(addedRacer)
        res.send(addedRacer)
    }catch(err){
        console.log(err);
        res.status(400)
        res.send(err)
    }
})

racerRouter.patch('/racer/:id', async(req, res)=>{
    try{
        console.log("updating")
        const _id = req.params.id
        const updateRacer = await RacerCollection.findByIdAndUpdate(_id, req.body,{new: true})
        console.log(updateRacer);
        res.send(updateRacer)
    }catch(err){
        res.status(400).send("Failed to update")
    }
})

racerRouter.delete('/racer/:id', async(req, res)=>{
    try{
        console.log("deleting..")
        const _id = req.params.id
        const deleteRacer = await RacerCollection.findByIdAndDelete({_id})
        res.send(deleteRacer)
    }catch(err){
        res.status(400).send('Failed to delete')
    }
})

module.exports = racerRouter
