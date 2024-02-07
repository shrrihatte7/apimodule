const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:[true,"price must be provided"],
    },
    featured:{
        type:Boolean,
        default:false,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
    },
});

module.exports = mongoose.model("Product",ProductSchema);