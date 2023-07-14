import React, { useContext } from 'react'
import {useNavigate,Link} from "react-router-dom"
import { loginAdmin, loginSuccess } from '../../Components/AuthContext/ActionCreator'
import { AppContext } from '../../Components/AuthContext/AuthcontextProvider'
const Signin = () => {
  const navigate = useNavigate()
const { state, dispatch } = useContext(AppContext)
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const handleSubmit =async () => {

      const payload = {
          email,
          password,
      }

    await fetch("https://comfortable-tick-necklace.cyclic.app/user/login",{
          method : "POST",
          headers: {
              'Content-Type': 'application/json',
            },
          body : JSON.stringify(payload)
      })
      .then((res) => res.json())
      .then((res) => {
       
        if(res.status==400){
          window.alert(res.response)
         }else{
          window.alert("SignIn Successfull")
          navigate("/")
         }
          if(res.token){
            if(email==="admin@admin.com" && password==="Admin123#"){
             console.log("yes")
              dispatch(loginAdmin(res.token))
            }else{
              localStorage.setItem("adminAuth", false)
            }
              localStorage.setItem("usertoken", res.token)
              dispatch(loginSuccess(res.token))
          }else{
            localStorage.setItem("usertoken","")
          }
         
      })
      .catch((err) => console.log(err))
  }





  return (
    <div className='w-full h-screen flex items-start'>
      <div className='hidden relative w-1/2 h-full md:flex flex-col'>
        <div className='absolute top-[10%] left-[10%] flex flex-col'>
          <h1 className='text-4xl text-black font-bold my-4'>Fashion as unique as you are..</h1>
          <p className='text-xl text-black font-bold '>Don’t stress about the dress, <br /> we’ll dress you to impress</p>
        </div>
        <img src={"https://img.freepik.com/premium-photo/summer-t-shirts-hangers-big-clothing-store_327697-914.jpg?w=2000"} alt="" className='w-full h-full object-cover' />
      </div>
      <div className='w-full md:w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between'>
        <h1 className='text-3xl text-black font-bold'>Urban Crew.</h1>

        <div className='w-full flex flex-col max-w-[550px]'>
          <div className='w-full flex flex-col mb-10'>
            <h3 className='text-2xl font-bold mb-2'>Sign In</h3>
            <p className='text-sm mb-2'>Welcome Back! Please enter your details.</p>
          </div>
          <div className='w-full flex flex-col'>
            <input type="email"
           value={email} placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}
            className='w-full py-4 my-2 bg-transparent text-black border-b border-black outline-none focus:outline-none'
             />
               <input type="password"
            value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}
            className='w-full py-4 my-2 bg-transparent text-black border-b border-black outline-none focus:outline-none'
             />
          </div>
<div className='w-full flex items-center justify-between'>
  <div className='w-full flex items-center'>
    <p className='text-sm'>Remember me</p>
  </div>
  <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forget Password</p>
</div>
<div className='w-full flex flex-col'>
  <button onClick={handleSubmit} className='w-full bg-[#060606] text-white rounded-md p-2 my-2 text-center flex items-center justify-center'>
Sign In
  </button>
</div>


        </div>
        <div className='w-full flex items-center justify-center'>
          <p className='text-sm font-normal text-black'>Don't have an account? <Link to="/signup"> <span className='font-bold cursor-pointer underline underline-offset-2'>SignUp</span> </Link></p>
        </div>

        <div>

        </div>
      </div>
    </div>
  )
}

export default Signin