<<<<<<< HEAD
import React from "react";
import Footer from "./Components/Footer/Footer";
import Footer1 from "./Components/Footer/Footer1";
import Mainroute from "./Components/Mainroute/Mainroute";
import Megha from "./Components/Meghamenu/Megha";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
      <br />
      <Footer1 />
      <br />
      <Footer />
      <br />
    </div>
  );
};
=======
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
>>>>>>> 9632c63c80e51adb3b00347acabbeda5888bb63f

export default App;
