const mongoose = require("mongoose");

const { Schema } = mongoose;
const userSchema = new Schema({
    name : {
        type:String,
        required: true
    },

    email :{
        type:String,
        required :true
    },

    password :{
        type: String,
        required : true
    }, 

    room :{
        type: Number,
        required : true
    },

    hostel :{
        type : String ,
        require :true
    },

    phone :{
        type : Number,
        required:true
    },
    imageUrl: {
        type:String,
        required:true,
        default:"" 
    },
})

module.exports = mongoose.model("userinform" , userSchema); 