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

        <div className=" playerStats upload col-xl-9  col-md-8 col-sm-4	col-4 mt-5  text-right ">
          Dodaj muzykę do biblioteki utwór ➜
        </div>

        <AddMusicForm />
      </div>
    </div>
  );
}
