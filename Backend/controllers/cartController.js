const asyncHandler = require("express-async-handler")
const Cart=require("../models/cartModel")

//add item to cart
const addItemToCart=(req,res)=>{

    Cart.findOne({user:req.user._id})
    .exec((error,cart)=>{
        if(error) return res.status(400).json({error})
        if(cart){
// if cart already exists then update the cart by quantity

const isProductExists=cart.cartItems.find(c=>c.productId==req.body.cartItems.productId)
if(isProductExists){
    Cart.findOneAndUpdate({user:req.user._id,"cartItems.productId":req.body.cartItems.productId},{
        "$set":{
            "cartItems":{...req.body.cartItems,quantity:isProductExists.quantity+req.body.cartItems.quantity}
        }
    })
    .exec((error,_cart)=>{
        if(error) return res.status(400).json({error})
        if(_cart){  return res.status(201).json({cart:_cart})
    }
    })
}else{
    Cart.findOneAndUpdate({user:req.user._id},{
        "$push":{
            "cartItems":req.body.cartItems
        }
    })
    .exec((error,_cart)=>{
        if(error) return res.status(400).json({error})
        if(_cart){  return res.status(201).json({cart:_cart})
    }
    })
}



        }else{
            //if cart not exists create a cart
            const cart=new Cart({
                user:req.user._id,
                cartItems:[req.body.cartItems]
            })
        
            cart.save((error,cart)=>{
                if(error) return res.status(400).json({error})
                if(cart) return res.status(201).json({cart})
            })
        }
    })


   
}

//get cart
const getCart=asyncHandler(async (req,res)=>{
    const carts= await Cart.find()
    res.status(200).send(carts)
  })

const getCartById=asyncHandler(async (req,res)=>{
    let id=req.user
    const carts= await Cart.findOne({user:id._id})
    
    res.send(carts.cartItems)
   
})
const deleteCart=asyncHandler(async (req,res)=>{
    let id=req.user
    const carts= await Cart.findOne({user:id._id})
    let cartItems=carts.cartItems
    res.send(cartItems[0].productId)
   
})


module.exports={addItemToCart,getCart,getCartById,deleteCart}