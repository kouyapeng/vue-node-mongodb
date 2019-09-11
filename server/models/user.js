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
},{
    collection: 'user',
    versionKey: false,
})
module.exports = mongoose.model('users', userSchema);