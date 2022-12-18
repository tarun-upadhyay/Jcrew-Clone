

import React from 'react'
import Footer from "./Components/Footer/Footer";
import Footer1 from "./Components/Footer/Footer1";
import Mainroute from "./Components/Mainroute/Mainroute";

import Navbar from "./Components/Navbar/Navbar";
const App = () => {
  return (
   <>
      <div>
      <Navbar />
     <Mainroute/>
      <br />
      <Footer1 />
      <br />
      <Footer />
      <br />
    </div>
   </>
  )
}


export default App

