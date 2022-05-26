import { useState } from "react";
import { db } from "./db.js";

export function AddMusic(props) {
  const [setStatus] = useState("");

  async function Add(name, song) {
    try {
      // Add the new friend!
      const id = await db.music.add({
        name,
        song,
      });

      setStatus(`song ${song} successfully added. Got id ${id}`);
    } catch (error) {
      setStatus(`Failed to add ${song}: ${error}`);
    }
  }
  Add(props.name, props.song);
}
