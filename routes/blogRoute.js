const {Router}=require("express")
const router=Router()
const blogModel=require("../models/blog")
const commentModel=require("../models/comment")

const upload=require("../utils/multer-config")

router.get("/addblog",(req,res)=>{
    res.render("addBlog",{user:req.user})
})

router.post("/addblog",upload.single('coverImg'),async (req,res)=>{
    try{
        const {title,body,coverImg}=req.body
        const AddBlog=await blogModel.create({
            title,
            body,
            createdBy:req.user.id,
            coverImg:req.file.buffer
        })
        
     return res.redirect(`/blog/${AddBlog._id}`)
    
    }
    catch(err){

    }
})

router.get("/:id",async(req,res)=>{
    
    try{
        const blog=await blogModel.findById(req.params.id).populate("createdBy")
        const comment =await commentModel.find({blogId:req.params.id}).populate("createdBy")
        // console.log(blog)
        // console.log("blog Comment: "+comment)
        return res.render("blog",{
            user:req.user,
            blog:blog,
            comment
        })
        
    }
    catch(err){
        res.status(404).send(err)
        console.log(err)
    }
})

router.post("/comment/:blogid",async(req,res)=>{
    try{
        const createCommnt =await commentModel.create({
            comment:req.body.comment,
            createdBy:req.user.id,
            blogId:req.params.blogid
        })
    
        return res.redirect(`/blog/${req.params.blogid}`)
    }
    catch(err){
        res.status(404).send(err)
        console.log(err)
    }
   

})

module.exports=router
