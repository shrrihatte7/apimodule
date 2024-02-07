require("dotenv").config();
const mongoose = require("mongoose");
const { options } = require("../routes");


const connect = (uri)=>{
    console.log("db connected");
 return mongoose.connect(uri);
}    
module.exports = connect;
