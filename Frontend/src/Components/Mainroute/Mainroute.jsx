import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../../Pages/Admin/Admin'
import Checkout from '../../Pages/Checkoutpage/Checkout'
import Homepage from '../../Pages/Homepage/Homepage'

import Signin from '../../Pages/Signin/Signin'
import Signup from '../../Pages/Signup/Signup'
import Singlepage from '../../Pages/Singlepage/Singlepage'
import ProductsPage from '../Products/ProductsPage'

const Mainroute = () => {
  return (
  <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/products' element={<ProductsPage/>}></Route>
    <Route path='/singlepage' element={<Singlepage/>}></Route>
    <Route path='/checkout' element={<Checkout/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/signin' element={<Signin/>}></Route>
    <Route path='/admin' element={<Admin/>}></Route>
    <Route path='*' element={<h1>Page not found</h1>}></Route>
  </Routes>
  )
}

export default Mainroute