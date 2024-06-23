const { Router } = require("express")
const router = Router()
const userModel = require("../models/user")
const bcrypt = require("bcrypt")

const { createTokenForUser } = require("../utils/authFun")


router.get("/signup", (req, res) => {
    res.render("signup")
})
router.get("/signin", (req, res) => {
    res.render("signin")
})

router.get("/logout",(req,res)=>{
    res.clearCookie("token")
    res.redirect("/user/signin")
})

router.post("/signup", async (req, res) => {
    try {
        const { fullname, email, password } = req.body
        const createUser = await userModel.create({
            fullname,
            email,
            password
        })
        const token = createTokenForUser(createUser)
        return res.status(201).cookie("token", token).redirect("/home")
    }
    catch (err) {
        // res.send(err.message)

        console.log("err  " + err.message)
    }

})

router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email: email })
        
        if (!user) {
            return res.render("signin",{error:"Invalid Email Or Password"})
        }
        const ismatch = await bcrypt.compare(password, user.password)
        
        if (!ismatch) {
            return res.render("signin",{error:"Invalid Passwrod or Email"})
        }
        const token = createTokenForUser(user)
        res.status(200).cookie("token", token).redirect("/home")

    }
    catch (err) {
        // res.send(err)
        res.render("signin",{error:err})
        console.log(err)
    }
})

module.exports = router