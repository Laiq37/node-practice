const mongoose = require('mongoose')

const RacerSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim:true
    },
    ranking:{
        type:Number,
        required:true,
        unique:true,
    },
    country:{
        type:String,
        required:true,
        trim:true,
    },
    score:{
        type: Number,
        required: true,

    },
    dob:{
        type: Date,
        required: true,
        trime: true,
    },
    event:{
        type:String,
        default: "100m"
    }
})

const RacerCollection = new mongoose.model('Racer', RacerSchema)

module.exports = RacerCollection