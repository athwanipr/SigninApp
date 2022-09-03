const mongoose = require('mongoose');

const userScheme = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minLength:8
    }
});

const User = new mongoose.model('User',userScheme);
module.exports = User;