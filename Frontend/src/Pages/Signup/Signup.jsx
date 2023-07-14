import React from 'react'
import {useNavigate,Link, Navigate} from "react-router-dom"
const Signup = () => {
  const [name, setName] = React.useState("")
  const [ loading, setLoading ] = React.useState(false)
  
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const navigate = useNavigate()
  const handleSubmit =async () => {

      const payload = {
        name,
          email,
          password,
      }

  await fetch("https://comfortable-tick-necklace.cyclic.app/user/signup",{
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
    navigate("/signin")
   }else{
    window.alert("Signup Successfull")
    navigate("/")
   }
         
          if(res.token){
            localStorage.setItem("usertoken", res.token)
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
            <h3 className='text-2xl font-bold mb-2'>Sign Up</h3>
            <p className='text-sm mb-2'>Welcome! Please enter your details.</p>
          </div>
          <div className='w-full flex flex-col'>
          <input type="text"
           value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}
            className='w-full py-4 my-2 bg-transparent text-black border-b border-black outline-none focus:outline-none'
             />
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
  <button onClick={handleSubmit} disabled={loading} className='w-full bg-[#060606] text-white rounded-md p-2 my-2 text-center flex items-center justify-center'>
Sign Up
  </button>
</div>


        </div>
        <div className='w-full flex items-center justify-center'>
          <p className='text-sm font-normal text-black'>Already have an account? <Link to="/signin"> <span className='font-bold cursor-pointer underline underline-offset-2'>SignIn</span> </Link></p>
        </div>

        <div>

        </div>
      </div>
    </div>
  )
}

export default Signup