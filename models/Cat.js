const mongoose = require('mongoose')

const CatSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age:{
        type: Number,
    },
    breed:{
        type: String,
    },
    image:{
        type: String,
    }
})

module.exports = mongoose.model("Cat",CatSchema)