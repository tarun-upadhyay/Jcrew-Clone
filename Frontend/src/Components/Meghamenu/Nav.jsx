import React, { useContext, useState } from "react";
import "./Nav.css";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AppContext } from "../AuthContext/AuthcontextProvider";


const Nav = () => {
 const { state, dispatch } = useContext(AppContext)
console.log(state)
  return (
    <div style={{border:"1px solid black"}}>
       
      <div>
        <form class="nosubmit">
          <input class="nosubmit" type="search" placeholder="Search J.Crew" />
        </form>
      </div>
     <Link to="/signin">
     
     <button class="btn">
     { state.token ? "" : "Signin" }
     </button>
     </Link>
      {
        state.adminAuth ? <Link to="/admin"><button class="btn">Admin</button></Link> : ""
      }
      <Link to="/checkout">
      <BiShoppingBag class="icon" />
      </Link>
     
    </div>
  );
};

export default Nav;
