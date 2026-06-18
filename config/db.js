const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.URI)
        console.log("db connected")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectDB;