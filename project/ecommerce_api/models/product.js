const mongoose =require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique:true
        },
        des:{
            type: String,
            required: true,
        },
        img:{
            type: String,
            required: true,
        },
        categories:{
            type: Array,
            required: true,
        },
        size: {
            type: String,
        },
        color:{
            type: String,
        },
        price:{
            type: Number,
            required: true,
        },
    },{
        timestamps:true //this will create createdAt and updateAt timestamps
    }
);



module.exports = mongoose.model('Product', ProductSchema);