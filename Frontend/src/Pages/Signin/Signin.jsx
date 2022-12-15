import React from 'react'

const Signin = () => {
  return (
    <div className='flex items-center justify-center  border-2 h-screen  border-red-600 '>
      <div className='flex   border-2  border-red-600  '>
<div>
  <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=350" />
</div>
<div className=' border-2  border-red-600 '>
<form method='POST'>
  <div className=' border-2  border-blue-600 '>
  <input type="text"/>
  </div>
       <div className=' border-2  border-red-600 '>
       <input type="text"/>
       </div>
       <div className=' border-2  border-blue-600 '>
       <input type="submit" value="login"/>
       </div>
        
      
       
        
        </form>
</div>
      </div>
    </div>
  )
}

export default Signin