const express=require("express")
const path=require("path")
const cookieParser=require("cookie-parser")
const isLoggedinAuthByCookie=require("./middleware/isLoggedinAuth")
const blogRoute=require("./routes/blogRoute")

require('dotenv').config()

const blog=require("./models/blog")
const comment=require("./models/comment")

const app=express()
app.use(cookieParser())

const PORT=process.env.PORT || 3000
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(isLoggedinAuthByCookie)



const dbConnect=require("./utils/db-connection")
const userModel=require("./models/user")
const userRouter=require("./routes/userRoute")

// app.get("/",(req,res)=>{
//     res.send("Hello")
// })

app.get("/home",async(req,res)=>{
    // console.log(req.user)
    const allblog=await blog.find()
   
    res.render("home",{
        user:JSON.stringify(req.user),
        blog:allblog,
    
    })

})

app.use("/user",userRouter)
app.use("/blog",blogRoute)

app.listen(PORT,()=>{
    console.log("server started at " +PORT)
})