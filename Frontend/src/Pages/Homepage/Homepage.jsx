import React from "react";
import App from "./Fifth/App";
import Responsive from "./Fifth/Fifth";


import Final from "./Final";
import FourthBox from "./FourthBox/FourthBox";
import Groups from "./Groups";
import "./Homepage.css";
import SecondPart from "./Second/SecondPart";
import Sixth from "./Sixth/Sixth";

const Homepage = () => {
  return (
    <>
    
      <div className="back">
        <div className="App-content">
          <h1 style={{ fontSize: "60px" }}>The J.Crew Gift Guide</h1>
          <p>
            Great holiday presents are part of our heritage. Here's our 2022
            take...
          </p>
          <div className="btngroup">
            <button>Shop for her</button>
            <button>Shop for him</button>
            <button>Shop for girls</button>
            <button>Shop for boys</button>
            <button>Shop for the home</button>
          </div>
        </div>
      </div>
      <Final />
      <Groups />
      <br />
      <SecondPart />
      <br />
      <FourthBox />
      <br />
      <App />
      <br />
      <Sixth />
    </>
  );
};

export default Homepage;
