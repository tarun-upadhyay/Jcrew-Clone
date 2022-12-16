const mongoose=require ("mongoose")

const connect=async ()=>{
    return mongoose.connect(process.env.USER_MONGO_URL)
}
module.exports=connect