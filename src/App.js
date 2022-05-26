import React from "react";
import "./App.css";
import { MusicList } from "./MusicList.js";
import { Navbar } from "./navbar";

function App() {
  return (
    <>
      <Navbar />
      <MusicList />
    </>
  );
}

export default App;
