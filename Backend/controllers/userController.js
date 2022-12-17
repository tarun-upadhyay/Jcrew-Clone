const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")

const generateToken=(id)=>{
   
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1d"})
  }
  //get user
  const getUser=asyncHandler(async (req,res)=>{
    const users= await User.find()
    res.status(200).send(users)
  })
  // register user
  const registerUser = asyncHandler(
      async (req, res) => {
  
         const {name,email,password}= req.body
  
         //Validation
         if(!name ||!email || !password){
          res.status(400).json({message:"Please fill in all required fields",status:"400"})
          
         }
  
         if(password.length<6){
          res.status(400).json({message:"Password must be upto 6 characters",status:"400"})
        
         }
  
         //check if user email already exists
        const userExists= await User.findOne({email})
  
        if(userExists){
          res.status(400).json({message:"Email is already been register",status:"400"})
          
        }
  

  
  
  
        //create a new user
        const user=await User.create({
          name,
          email,
          password,
        })
  
        
  //generate token 
  const token=generateToken(user._id);
  
  // //Send http-only cookie to client/frontend
  // //res.cookie("what will the name of the cookie you want to send to frontend",token,{order property: how we want to save this cookie})
  // res.cookie("token",token,{
 
  //   httpOnly:true,
  //   expires:new Date(Date.now()+1000*86400),  //1day
    
  // })
  
        if(user){
          const{_id,name,email}=user
          res.status(201).json({
              _id,name,email,token
              })
  
        }else{
          res.status(400).json({message:"Invalid user data",status:"400"})
        
        }
  
  
  
      })

      //login user

const loginUser=asyncHandler(async (req,res)=>{
    const {email,password}=req.body
  console.log(email)
    //validate request
    if(!email || !password){
      res.status(400).json({message:"Please enter email and password",status:400})
      
    }
  
    //check if user exists
    const user =await User.findOne({email})
  
    if(!user){
      res.status(400).json({message:"User not found, please signup",status:400})
     
    }
    //user exists, check if password is correct
  
    const passwordIsCorrect=await bcrypt.compare(password,user.password)
  
    //generate token 
  const token=generateToken(user._id);
  

  
    if(user && passwordIsCorrect){
      const{_id,name,email}=user
      res.status(200).json({
          _id,name,email,token
      })
    }else{
      res.status(400).json({message:"Invalid email or password",status:400})
     
    }
  
  })


  //updateUser

const updateUser=asyncHandler(async (req,res)=>{

    const user=await User.findById(req.user._id)
  
    if(user){
      const{name,email}=user
      user.email=email
      user.name=req.body.name|| name
    
  
      const updatedUser= await user.save()
  res.status(200).json({
    _id:updatedUser._id,
    name:updatedUser.name,
    email:updatedUser.email,
  
  })
    } else{
      res.status(404)
      throw new Error ("User not found")
    }
  
  })
  
  //change password function
   const changePassword=asyncHandler(async(req,res)=>{
    const user=await User.findById(req.user._id)
  
    const {oldPassword,password}=req.body
    if(!user){
      res.status(404)
      throw new Error ("User not found , please signup")
    }
  
    //validate
    if(!oldPassword || !password){
      res.status(404)
      throw new Error ("Please add old and new password")
    }
    //check if old password matches password in db
    const passwordIsCorrect=await bcrypt.compare(oldPassword,user.password)
  
    //save new password
    if(user && passwordIsCorrect){
      user.password=password
      await user.save()
      res.status(200).send("Password changed sucessfully")
    }else{
      res.status(400)
      throw new Error ("old password is incorrect")
    }
  
   })



      module.exports={registerUser,loginUser,updateUser,changePassword,getUser}