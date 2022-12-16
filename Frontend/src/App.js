import React from 'react'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer'
import Mainroute from './Components/Mainroute/Mainroute'
import Navbar from './Components/Navbar/Navbar'
import Signin from './Pages/Signin/Signin'
import Signup from './Pages/Signup/Signup'
import ProductsPage from "./Components/Products/ProductsPage"
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Routes,Route} from 'react-router-dom';

const App = () => {
  return (
   <>
   <Signin /> 
    <Signup />
   <ProductsPage/>
   </>
  )
}

export default App