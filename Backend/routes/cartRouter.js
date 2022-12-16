const express=require("express")
const { addItemToCart, getCart,getCartById,deleteCart } = require("../controllers/cartController")

const protect=require("../middlewares/authMiddleware")
const router=express.Router()


router.post("/addtocart",protect,addItemToCart)
router.get("/getcart",getCart)
router.get("/getcartbyid",protect,getCartById)
router.post("/deletecart",protect,deleteCart)


module.exports=router