const mongoose=require("mongoose")
const user = require("./user")

const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    coverImg:{
        type:Buffer,
        required:false
    },
    createdBy:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"user"

    }

},{timestamps:true})

module.exports=mongoose.model("blog",blogSchema)