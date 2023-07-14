import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

import "react-loading-skeleton/dist/skeleton.css";
import { AppContextProvider } from "./Components/AuthContext/AuthcontextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </AppContextProvider>
  </BrowserRouter>
);
