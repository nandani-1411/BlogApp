const jwt =require("jsonwebtoken")


const isLoggedinAuthByCookie=(req,res,next)=>{

    if(!req.cookies.token){
        return next()
    }
    try{
        const token=req.cookies.token
        const payload=jwt.verify(token,process.env.JWT_SECRETE)
        req.user=payload 
        next()
    }
    catch(err){
        console.log("error"+err)
        next()
    }
    

}

module.exports=isLoggedinAuthByCookie