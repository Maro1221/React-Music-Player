import React from "react";

import { AddMusicForm } from "./addmusicform.js";
import "./navbar.css";
import logo from "./11.png";

export function Navbar() {
  return (
    <div className="Navbar">
      <div className="Row">
        <div className=" ms-3  logoContainer">
          <img className="logo" src={logo} alt="Logo" />
        </div>

        <div className=" playerStats mt-2  col-xl-9     text-end col-md-8 col-sm-6	col-5  ">
          
       <div className="upload"> Dodaj muzykę do biblioteki muzycznej ➜    </div>        <AddMusicForm />     
          </div>

      </div>
    </div>
  );
}
