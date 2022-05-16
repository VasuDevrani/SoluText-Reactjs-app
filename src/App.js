import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/navbar.js";
import Container from "./component/container.js";
import About from "./component/about.js";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [myStyle, setStyle] = useState({
    color: "dark",
    backgroundColor: "light",
    button: "primary",
    theme: "Light"
  });

  function toggleG() {
    setStyle({
      color: "light",
      backgroundColor: "success",
      button: "dark"
    });
    document.body.style.backgroundColor = "green";
    document.body.style.color = "white";
  }

  function toggleB() {
    setStyle({
      color: "light",
      backgroundColor: "primary",
      button: "dark"
    });
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "white";

  }

  function toggleL() {
    setStyle({
      color: "dark",
      backgroundColor: "light",
      button: "primary"
    });
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }

  function toggleD() {
    setStyle({
      color: "light",
      backgroundColor: "dark",
      button: "light"
    });
    document.body.style.backgroundColor = "grey";
    document.body.style.color = "white";
  }

  return (
    <>
      <Navbar
        mystyle={myStyle}
        toggleG={toggleG}
        toggleB={toggleB}
        toggleD={toggleD}
        toggleL={toggleL}
      />
      <Routes>
        <Route path="/" element={<Container mystyle={myStyle} />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
