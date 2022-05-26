import { db } from "./db.js";

export async function Add(name, song) {
  const artist = "nieznany";
  const album = "kliknij aby dodać";
  const nameSlice = name.slice(-4, -1);
  var lengthName = 0;
  if (nameSlice == "fla") {
    lengthName = name.length - 5;

    name = name.slice(0, lengthName);
  }
  if (nameSlice == ".mp") {
    lengthName = name.length - 4;

    name = name.slice(0, lengthName);
  }

  try {
    const id = await db.music.add({
      name,
      song,
      artist,
      album,
    });

    console.log(`song ${song} successfully added. Got id ${id}`);
  } catch (error) {
    console.log(`Failed to add ${song}: ${error}`);
  }
}
