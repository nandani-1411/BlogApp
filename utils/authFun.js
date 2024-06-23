const jwt=require("jsonwebtoken")

const createTokenForUser=(user)=>{
    const payload={
        id:user._id,
        fullname:user.fullname,
        email:user.email,
        profileImg:user.profileImg,
        role:user.role
    }           
    const token=jwt.sign(payload,process.env.JWT_SECRETE) 
    return token
}



module.exports={createTokenForUser}