import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="#">
         
        </a>{" "}
        Developed by{" "}
        Jitendra Prajapati
        {" "}
        |{" "}
        <a target="_blank" href="https://technical-forever.netlify.app/">
          Portfolio
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
