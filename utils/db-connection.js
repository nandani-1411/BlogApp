const mongoose=require("mongoose")

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected Successfully to db")
}).catch((err)=>{
    console.log(err)
})

module.exports=mongoose.connection