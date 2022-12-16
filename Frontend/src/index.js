<<<<<<< HEAD
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Routes,Route } from 'react-router-dom';
>>>>>>> 9632c63c80e51adb3b00347acabbeda5888bb63f

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
<<<<<<< HEAD
    <ChakraProvider>
      <App />
    </ChakraProvider>
=======
  
      <App />
   
>>>>>>> 9632c63c80e51adb3b00347acabbeda5888bb63f
  </BrowserRouter>
);
