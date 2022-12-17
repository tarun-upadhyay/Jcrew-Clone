import React from "react";
import "./Nav.css";
import { BiShoppingBag } from "react-icons/bi";
const Nav = () => {
  return (
    <div style={{border:"1px solid black"}}>
       
      <div>
        <form class="nosubmit">
          <input class="nosubmit" type="search" placeholder="Search J.Crew" />
        </form>
      </div>
      <button class="btn">Sign in</button>
      
      <BiShoppingBag class="icon" />
     
    </div>
  );
};

export default Nav;
