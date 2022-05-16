import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import './nav.css';
export default function Navbar(props) {
  return (
    <>
      {/* for top */}
      <nav
        className={`navbar navbar-expand-lg bg-${props.mystyle.backgroundColor} text-${props.mystyle.color} px-5`}
      >
        <div className="container-fluid">
          <a
            className={`top navbar-brand fs-3 text-${props.mystyle.color}`}
            href="/"
          >
            <img
              src="bookkicon.png"
              className="mx-3 top-img"
              alt="book icon"
              style={{
                width: "45px",
                height: "45px",
              }}
            ></img>
            <b>SoluText</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* for links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="about">
                    About
                  </Link>
                </li>
              </ul>
            </ul>
            {/* for buttons themes */}
            <button
              type="button"
              className="btn mx-1 btn-success my-2"
              onClick={props.toggleG}
            >
              Green
            </button>
            <button
              type="button"
              className="btn mx-1 btn-primary my-2"
              onClick={props.toggleB}
            >
              Blue
            </button>
            <button
              type="button"
              className="btn mx-1 btn-light my-2"
              onClick={props.toggleL}
            >
              Light
            </button>
            <button
              type="button"
              className="btn mx-1 btn-secondary my-2"
              onClick={props.toggleD}
            >
              Dark
            </button>
          </div>
        </div>
      </nav>

      {/* <h4 className="mx-3">THEME: </h4> */}
      {/* <button type="button" className="btn mx-1 btn-success">Green</button>
        <button type="button" className="btn mx-1 btn-primary">Blue</button>
        <button type="button" className="btn mx-1 btn-light">Light</button>
        <button type="button" className="btn mx-1 btn-secondary">Dark</button> */}
    </>
  );
}
