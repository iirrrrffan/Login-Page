const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    phone:{
        type:Number
    },
    password:{
        type:String
    },
    star:{
        type:Number
    },
    Subject:{
        type:[String]
    }

})

module.exports=mongoose.model("User",userSchema)