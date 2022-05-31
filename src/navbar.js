import React from "react";

import { AddMusicForm } from "./addmusicform.js";
import "./navbar.css";
import logo from "./image.png";

export function Navbar() {
  return (
    <div className="Navbar">
      <div className="Row">
        <div className=" ms-3 logoContainer">
          <img className="logo" src={logo} alt="Logo" />
        </div>

        <div className=" playerStats mt-2  col-xl-9    text-end col-md-8 col-sm-6	col-7  ">
          
       <div className="upload"> Dodaj utwory do biblioteki muzycznej ➜    </div>        <AddMusicForm />     
          </div>

      </div>
    </div>
  );
}
 //ghjdesfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfxdslkfhjlksdghfnikldshgntfids iodsfhnjgoidshngfiolndhsgiol;hdsdsuhdus;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;dsfdsfdsfdsfdsfdsfdsf
