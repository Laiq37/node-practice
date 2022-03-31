const mongoose = require('mongoose')
const validator = require('validator')

//creating schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, "Name must contain atleast 3 characters"],
        trim: true,
    },
    email:{
        type:String,
        required:true,
        unique: [true, "Email already exists"],
        validate(email){
            if(!validator.isEmail(email)){
                throw Error("Invalid email")
            }
        }
    },
    phone: {
        type: Number,
    },
    address: {
        type: String,
        required: true
    }
})

//creating model/collection
const StudentCollection = new mongoose.model('Student', studentSchema)

//exporting studentCollection
module.exports = StudentCollection