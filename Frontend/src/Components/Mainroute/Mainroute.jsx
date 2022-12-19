import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../../Pages/Admin/Admin'
import Home from '../../Pages/Admin/Pages/home/Home'
import AdminProducts from '../../Pages/Admin/Pages/Products/AdminProducts'

import Checkout from '../../Pages/Checkoutpage/Checkout'
import Homepage from '../../Pages/Homepage/Homepage'

import Signin from '../../Pages/Signin/Signin'
import Signup from '../../Pages/Signup/Signup'
import Singlepage from '../../Pages/Singlepage/Singlepage'
import ProductsPage from '../Products/ProductsPage'
import PaymentPage from '../../Pages/Paymentpage/PaymentPage'
import AddProduct from '../../Pages/Admin/Pages/Products/AddProduct'

const Mainroute = () => {
  return (
  <Routes>
    <Route path='/' element={<Homepage/>}></Route>
   
    <Route path='/products/:name' element={<ProductsPage/>}></Route>
    <Route path='/singlepage/:name/:id' element={<Singlepage/>}></Route>
    <Route path='/checkout' element={<Checkout/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/signin' element={<Signin/>}></Route>
    <Route path='/payment' element={<PaymentPage/>}></Route>
    <Route path='/admin' element={<Admin/>}></Route>
    <Route path='/sigin' element={<Signin/>}></Route>
    <Route path='/admin' element={<Home/>}></Route>
    <Route path='/admin/products' element={<AdminProducts/>}></Route>
    <Route path='/admin/addproduct' element={<AddProduct/>}></Route>
    <Route path='*' element={<h1>Page not found</h1>}></Route>
  </Routes>
  )
}

export default Mainroute