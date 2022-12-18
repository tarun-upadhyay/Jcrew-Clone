import React from 'react'
import Chart from '../../Components/charts/Chart'
import Featured from '../../Components/featured/Featured'
import Nav_admin from '../../Components/Navbar/Nav_admin'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Manage from '../../Components/table/Manage'
import Widget from '../../Components/Widget/Widget'
import "./home.scss"
const Home = () => {
  return (
    <div className="home">
       <Sidebar/>
       <div className="homeContainer">
       <Nav_admin/>
       <div className="widgets">
        <Widget type={"user"}/>
        <Widget type={"order"}/>
        <Widget type={"earning"}/>
        <Widget type={"balance"}/>
       </div>
       <div className="charts">
        <Featured/>
        <Chart/>
       </div>
       <div className="listContainer">
        <div className="listTilte">
          Latest Transactions
          <Manage/>
        </div>
       </div>
       </div>
    </div>
  )
}

export default Home