
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


export default App;
