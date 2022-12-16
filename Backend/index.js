const express=require("express")
const dotenv=require("dotenv").config()
const cookieParser=require("cookie-parser")
const cors=require("cors")
const connect=require("./config/db")
const userRoute=require("./routes/userRouter")
const cartRoute=require("./routes/cartRouter")

const {productRouter }  = require("./routes/productRouter")
const { pr_connection } = require("./config/pr_db")
const app=express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())
const PORT= process.env.PORT||5000
app.get("/",(req,res)=>{
    res.send("homepage")
})
app.use("/products", productRouter)
//routes middleware
app.use("/api/users",userRoute)
app.use("/api/cart",cartRoute)


app.listen(PORT,async()=>{
   
    await connect()
    console.log(`http://localhost:${PORT}`)
})