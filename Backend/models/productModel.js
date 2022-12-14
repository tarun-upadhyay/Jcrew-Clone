const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    title:{ String, required: true},
    img: { String, required: true},
    desc: { String, required: true},
    price: { Number, require: true},
    

})