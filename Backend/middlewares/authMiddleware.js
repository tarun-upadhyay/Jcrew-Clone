const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const jwt=require("jsonwebtoken")


const protect=asyncHandler(async (req,res,next)=>{
try{
    if(!req.headers.authorization){
        return res.send("login required again")
    }
    const token = req.headers.authorization.split(" ")[1]
    if(!token){
        res.status(401)
        throw new Error("Not authorized, Please login")
    }

    //Verify token
    const verified=jwt.verify(token,process.env.JWT_SECRET)

    //get the user id from token
    const user= await User.findById(verified.id).select("-password")

    if(!user){
        res.status(401)
        throw new Error("user not found...")
    }
    req.user=user
    next()

} catch (err){
    res.status(401)
    throw new Error("Not authorized, Please login")
}
})

module.exports=protect