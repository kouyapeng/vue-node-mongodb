const mongoose = require("../config/db.js");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    }
})

module.exports = mongoose.model('User', userSchema,'user');