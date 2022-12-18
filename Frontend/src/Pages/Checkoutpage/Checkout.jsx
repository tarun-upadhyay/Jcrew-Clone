import React from 'react'
import {AiFillDelete} from "react-icons/ai"
const Checkout = () => {
  return (
    <div  className='w-full h-fit mb-56'>
    <div className='border-b-2 border-black py-3 text-center mb-8'>
      <p>Have a question? We can help. *</p>
    </div>
    <div className='flex flex-col gap-2 sm:flex-row items-center justify-between w-4/5 m-auto'>
     
   <div className='sm:w-2/3 border-2 border-gray-600 mr-2  '>
    <p className='text-3xl text-center my-3 pb-2 border-b-2 border-black'>Shopping Bag (1)</p>
    <div  className='flex items-center  '>
<img src="https://www.jcrew.com/s7-img-facade/BN102_YD2188_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540" alt="" className='w-1/4'/>
   <div  className='flex items-center ml-4 '>
   <p className='w-1/3'>Tiered taffe..quam provident earum iure deleniti?</p>
   <p className='sm:mx-4'>qty: <span>
 <select name="" id="">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
 </select>
    
    </span></p>
   <p>Rs 2000</p>
  <span className='ml-4 cursor-pointer'><AiFillDelete /></span> 
   </div>
    </div>
   </div>
   <div className='sm:w-1/3 border-2 border-gray-600  '>
    <p className='text-xl text-center my-3 pb-2 border-b-2 border-black'>Order Summary</p>
  <div >
    <div className='flex items-center justify-between border-b-2 border-gray-300 mb-2 pb-2 mx-2'>
    <p className='text-sm text-gray-700'>Subtotal </p>
    <p className='text-sm  text-gray-700'>Rs <span>2000</span></p>
    </div>
    <div className='flex items-center justify-between border-b-2 border-gray-300 mb-2 pb-2 mx-2'>
    <p className='text-sm  text-gray-700'>Shipping estimate </p>
    <p className='text-sm  text-gray-700'>Rs <span>200</span></p>
    </div>
    <div className='flex items-center justify-between border-b-2 border-gray-300 mb-2 pb-2 mx-2'>
    <p className='text-sm  text-gray-700'>Tax estimate </p>
    <p className='text-sm  text-gray-700'>Rs <span>200</span></p>
    </div>
    <div className='flex items-center justify-between my-2 pb-2 mx-2'>
    <p className='text-lg '>Order total</p>
    <p className='text-lg '>Rs <span>2400</span></p>
    </div>
    <div className='w-11/12 m-auto mt-2'>
    <button className='bg-blue-500  text-white py-2 rounded-md text-xl w-full'>Checkout</button>
    </div>
   
  </div>
  
   </div>

      </div>  



    </div>
  )
}

export default Checkout