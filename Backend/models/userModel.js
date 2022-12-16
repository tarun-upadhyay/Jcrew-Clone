const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter a name"]
    },
    email:{
        type:String,
        required:[true, "Please enter an email"],
        unique:true,
        trim:true,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Please enter a valid email"
        ]
    },
    password:{
        type:String,
        required:[true, "Please enter a password"],
        minLength:[6,"Password must be atleast 6 characters long"],
       
    },
    
},{
    timestamps:true
})
//encrypt password before saving to db
userSchema.pre("save",async function(next){
if(!this.isModified("password")){
    return next()
}

    //hash password
    const salt=await bcrypt.genSalt(10)
const hashedPassword=await bcrypt.hash(this.password,salt)
this.password=hashedPassword
next()
})

const User=mongoose.model("User",userSchema)

module.exports=User