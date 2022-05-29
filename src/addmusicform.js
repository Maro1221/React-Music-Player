import React, { useState, useEffect } from "react";
import { Add } from "./AddMusic.js";

export function AddMusicForm() {
  const [song, setSong] = useState("empy");

  useEffect(() => {
    if (song != "empy") {
      Add(song.name, song);
    }
  }, [song]);

  function uploadFile() {
    document.getElementById("upload").click();
  }

  return (
    <>
      <input
        type="file"
        id="upload"
        style={{ display: "none" }}
        accept=".mp3, .flac"
        onChange={(e) => setSong(e.target.files[0])}
      />
      <span
        style={{ fontSize: "42px", color: "#7f5af0" }}
        onClick={() => uploadFile()}
        className=" ms-3      pointer uploadButton material-symbols-outlined"
      >
            add_circle
      </span>
    </>
  );
}
