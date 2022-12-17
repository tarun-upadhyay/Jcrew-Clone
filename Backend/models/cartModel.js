const mongoose=require("mongoose")

const cartSchema=new mongoose.Schema({
user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
cartItems:[
    {
        productId:{type:String,required:true},
        quantity:{type:Number,default:1},
        price:{type:Number,required:true}
    }
]
},{timestamps:true})

const Cart=mongoose.model('Cart',cartSchema)

module.exports=Cart