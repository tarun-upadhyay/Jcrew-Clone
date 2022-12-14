const express=require("express")
const { registerUser, loginUser,  updateUser, changePassword, logout,} = require("../controllers/userController")
const router=express.Router()


router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/logout",logout)
router.patch("/updateuser",updateUser)
router.patch("/changepassword",changePassword)


module.exports=router