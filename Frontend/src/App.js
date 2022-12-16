import React from 'react'
import Footer from './Components/Footer/Footer'
import Mainroute from './Components/Mainroute/Mainroute'
import Navbar from './Components/Navbar/Navbar'
import Signin from './Pages/Signin/Signin'
import Signup from './Pages/Signup/Signup'

const App = () => {
  return (
   <>
   {/* <Signin /> */}
   <Navbar/>
   {/* <Signup /> */}
   <Mainroute/>

   </>
  )
}

export default App