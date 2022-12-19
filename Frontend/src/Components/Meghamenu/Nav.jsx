import React, { useState } from "react";
import "./Nav.css";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
const Nav = () => {
  let token  = localStorage.getItem("userToken")
  token = JSON.parse(token)
  const [ login, setLogin ] = useState(true)
  if(token) setLogin(false)
  return (
    <div style={{border:"1px solid black"}}>
       
      <div>
        <form class="nosubmit">
          <input class="nosubmit" type="search" placeholder="Search J.Crew" />
        </form>
      </div>
     <Link to="/signin">
     
     <button class="btn">
     { login ? "" : "Signin" }
     </button>
     </Link>
      
      <Link to="/checkout">
      <BiShoppingBag class="icon" />
      </Link>
     
    </div>
  );
};

export default Nav;
