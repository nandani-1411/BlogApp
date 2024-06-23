const mongoose=require("mongoose")

// comment k liye schmea ready then blog route me comment ko create krenge using the blog._id 

const commentSchema=new mongoose.Schema({
    comment:{
        type:String,
        required:true
    },
    createdBy:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"user"
    },
    blogId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"blog"
    }
})

module.exports=mongoose.model("comment",commentSchema)