import React, { useState } from "react";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mystyle.backgroundColor} text-${props.mystyle.color} px-5`}
      >
        <div className="container-fluid">
          <a
            className={`navbar-brand fs-3 text-${props.mystyle.color}`}
            href="/"
          >
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
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <button
            type="button"
            className="btn mx-1 btn-success"
            onClick={props.toggleG}
          >
            Green
          </button>
          <button
            type="button"
            className="btn mx-1 btn-primary"
            onClick={props.toggleB}
          >
            Blue
          </button>
          <button
            type="button"
            className="btn mx-1 btn-light"
            onClick={props.toggleL}
          >
            Light
          </button>
          <button
            type="button"
            className="btn mx-1 btn-secondary"
            onClick={props.toggleD}
          >
            Dark
          </button>
          {/* <h4 className="mx-3">THEME: </h4> */}
          {/* <button type="button" className="btn mx-1 btn-success">Green</button>
        <button type="button" className="btn mx-1 btn-primary">Blue</button>
        <button type="button" className="btn mx-1 btn-light">Light</button>
        <button type="button" className="btn mx-1 btn-secondary">Dark</button> */}
        </div>
      </nav>
    </>
  );
}
