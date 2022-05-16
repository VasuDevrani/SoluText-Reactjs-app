import React, { useState } from "react";

export default function Container(props) {
    
    function handleOnChange(e)
    {
        myText(e.target.value);
    }

    function upTheCase()
    {
        let newtext=text.toUpperCase();
        myText(newtext);
    }
    function downTheCase()
    {
        let newtext=text.toLowerCase();
        myText(newtext);
    }
    function clearText()
    {
        let newtext="";
        myText(newtext);
    }
    function copyText()
    {
        navigator.clipboard.writeText(text);
    }
    const [text,myText]=useState("");

  return (
    <>
    <div className="container my-4">
      <h1 className="text-center my-2">Your Text Here</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div className="row justify-content-md-around text-center">
          <div className="col-sm">
      <button type="button" className="btn mx-2 btn-dark" onClick={upTheCase}>UPPERCASE</button>
      </div>
      <div className="col-sm">
      <button type="button" className="btn mx-2 btn-dark" onClick={downTheCase}>lowercase</button>
      </div>
      <div className="col-sm">
      <button type="button" className="btn mx-2 btn-dark" onClick={clearText}>Clear</button>
      </div>
      <div className="col-sm">
      <button type="button" className="btn mx-2 btn-dark" onClick={copyText}>Copy</button>
      </div>
      <div className="col-sm"></div>
      <div className="col-sm"></div>
      <div className="col-sm"></div>
      <div className="col-sm"></div>
      <div className="col-sm"></div>
      <div className="col-sm"></div>
      </div>
      <div className="text-center text-sm-start">
      <h2 className="mt-4">Text Count</h2>
      <p>{text.length} characters {text.split(/\s+/).filter((e)=>{
        return e.length!=0
      }).length} words</p>
      </div>
      </div>
    </>
  );
}
