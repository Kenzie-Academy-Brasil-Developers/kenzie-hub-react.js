import {  Toaster } from "react-hot-toast";
import GlobalStyle from "./style/styleGlobal";
import Router from "./Routes";
import React from "react";

function App() {
  return (
    <>
      <Router />
      <GlobalStyle />
      <Toaster
        position="top-right"
      />
    </>
  );
}

export default App;