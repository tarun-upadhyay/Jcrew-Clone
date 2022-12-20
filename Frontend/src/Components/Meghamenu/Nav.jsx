import React, { useContext, useState } from "react";
import "./Nav.css";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AppContext } from "../AuthContext/AuthcontextProvider";
import { handleLogout } from "../AuthContext/ActionCreator";


const Nav = () => {
 const { state, dispatch } = useContext(AppContext)
console.log(state)
const Signout = ()=>{
  dispatch(handleLogout())
}
  return (
    <div style={{border:"1px solid black"}}>
       
      <div>
        <form class="nosubmit">
          <input class="nosubmit" type="search" placeholder="Search J.Crew" />
        </form>
      </div>
     <Link to="/signin">
     
     <button class="btn" onClick={Signout} >
     { state.token ? "Signout" : "Signin" }
     </button>
     </Link>
      
      <Link to="/checkout">
        {
          state.adminAuth ?  <Link to="/admin"><button id="admin" >Admin</button></Link> : <BiShoppingBag class="icon" />
        }
      
      </Link>
     
    </div>
  );
};

export default Nav;
