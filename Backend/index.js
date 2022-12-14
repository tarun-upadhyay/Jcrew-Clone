const express=require("express")
const dotenv=require("dotenv").config()
const connect=require("./config/db")
const userRoute=require("./routes/userRouter")
const app=express()

app.use(express.json())
const PORT= process.env.PORT||5000
app.get("/",(req,res)=>{
    res.send("homepage")
})

//routes middleware
app.use("/api/users",userRoute)

app.listen(PORT,async()=>{
    await connect()
    console.log(`http://localhost:${PORT}`)
})