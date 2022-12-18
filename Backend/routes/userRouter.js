const express=require("express")

const { registerUser, loginUser,  updateUser, changePassword, getUser} = require("../controllers/userController")
const protect=require("../middlewares/authMiddleware")
const router=express.Router()


router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/getusers",getUser)
router.patch("/updateuser",protect,updateUser)
router.patch("/changepassword",protect,changePassword)


module.exports=router