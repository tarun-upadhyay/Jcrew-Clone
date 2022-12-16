import React from 'react'
import Nav_admin from '../../Components/Navbar/Nav_admin'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./home.scss"
const Home = () => {
  return (
    <div className="home">
       <Sidebar/>
       <div className="homeContainer">
       <Nav_admin/>
       homeContainer
       </div>
    </div>
  )
}

export default Home