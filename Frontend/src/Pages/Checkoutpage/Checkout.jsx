import React, { useEffect, useState } from 'react'
import {AiFillDelete} from "react-icons/ai"
import {Link} from "react-router-dom"
const Checkout = () => {
const [cartData,setCartData]=useState([])
const [price,setPrice]=useState(0)

  let lsarray = localStorage.getItem("cartPage") || [];

  const getDataFromcart = ()=>{
  let data =  [];
  if(lsarray.length>0){
    data = JSON.parse(lsarray)

  }

setCartData(data)

}
const deleteCart=(id)=>{
  let filter=cartData.filter(el=>id!==el._id)
  localStorage.setItem('cartPage', JSON.stringify(filter))
  getDataFromcart()
  getPrice()
}
const getPrice=(id)=>{
  let data =  [];
  if(lsarray.length>0){
    data = JSON.parse(lsarray)

  }
  let sum=0
 for(let i=0;i<data.length;i++){
sum+=data[i].sale_price
 }
 setPrice(sum)
 
}

const getQty=(e)=>{
let newSum=price*e.target.value
setPrice(newSum)
}

  useEffect(()=>{
    getDataFromcart()
    getPrice()
  },[])

  return (
    <div  className='w-full h-fit mb-56'>
    <div className='border-b-2 border-black py-3 text-center mb-8'>
      <p>Have a question? We can help. *</p>
    </div>
    <div className='flex flex-col gap-2 sm:flex-row items-center justify-between w-4/5 m-auto'>
     
   <div className='sm:w-2/3 border-2 border-gray-300 mr-2  '>
    <p className='text-3xl text-center my-3 pb-2 border-b-2 border-black'>Shopping Bag ({cartData.length})</p>
    
    {cartData.map((el)=>{
      return (
      <div  className='flex items-center mb-2 border-2 border-b-gray-600  ' key={el._id}>
      <img src={el.img[0]} alt="" className='w-1/4'/>
         <div  className='flex items-center ml-4 '>
         <p className='w-1/3'>{el.title}</p>
         <p className='sm:mx-4'>qty: <span>
       <select name="" id="" onChange={getQty}>
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
         <p>Rs. {el.sale_price}</p>
        <span className='ml-4 cursor-pointer'><AiFillDelete onClick={()=>deleteCart(el._id)} /></span> 
         </div>
         <hr />
          </div>
         
)})}



   </div>
   
   
   <div className='sm:w-1/3 border-2 border-gray-600  '>
    <p className='text-xl text-center my-3 pb-2 border-b-2 border-black'>Order Summary</p>
  <div >
    <div className='flex items-center justify-between border-b-2 border-gray-300 mb-2 pb-2 mx-2'>
    <p className='text-sm text-gray-700'>Subtotal </p>
    <p className='text-sm  text-gray-700'>Rs <span>{price}</span></p>
    </div>
    <div className='flex items-center justify-between border-b-2 border-gray-300 mb-2 pb-2 mx-2'>
    <p className='text-sm  text-gray-700'>Shipping estimate </p>
    <p className='text-sm  text-gray-700'>Rs <span>{cartData.length*50}</span></p>
    </div>
    <div className='flex items-center justify-between border-b-2 border-gray-300 mb-2 pb-2 mx-2'>
    <p className='text-sm  text-gray-700'>Tax estimate </p>
    <p className='text-sm  text-gray-700'>Rs <span>{cartData.length*100}</span></p>
    </div>
    <div className='flex items-center justify-between my-2 pb-2 mx-2'>
    <p className='text-lg '>Order total</p>
    <p className='text-lg '>Rs <span>{price+cartData.length*100+cartData.length*50}</span></p>
    </div>
    <div className='w-11/12 m-auto mt-2'>
  <Link to="/payment">  <button className='bg-blue-500  text-white py-2 rounded-md text-xl w-full mb-2'>Checkout</button></Link>
    </div>
   
  </div>
  
   </div>

      </div>  



    </div>
  )
}

export default Checkout