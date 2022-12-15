const mongoose = require("mongoose")

const womenproductSchema = mongoose.Schema({
    title:{type: String, required: true},
    img: [],
    desc: {type: String, required: true},
    original_price: {type: Number, require: true},
    sale_price: {type: Number},
   
})
const WomenModel = mongoose.model("women", womenproductSchema)

const menproductSchema = mongoose.Schema({
    title:{type: String, required: true},
    img: [],
    desc: {type: String, required: true},
    original_price: {type: Number, require: true},
    sale_price: {type: Number},
    size: [],
    
})
const MenModel = mongoose.model("men", menproductSchema)

module.exports = { WomenModel, MenModel}