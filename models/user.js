const mongoose=require("mongoose")
const bcrypt=require("bcrypt")

const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    profileImg:{
        type:String,
        default:"/imgs/default.png"
    },
    role:{
        type:String,
        enum:['USER','ADMIN'],
        default:"USER"

    }

},{timestamps:true})

userSchema.pre("save",async function (next){
    const user=this
    if(!user.isModified("password")) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedpwd= await bcrypt.hash(user.password, salt);
        user.password=hashedpwd      
        next();
    } catch (err) { 
        // next(err.message);
        console.log(err.message)
    }
}
)

module.exports=mongoose.model("user",userSchema)