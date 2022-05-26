import { db } from "./db.js";

export async function addFirstCurret() {
  const curretsong = "nieznany";

  try {
    const id = await db.curretplay.add({
      curretsong,
    });

    console.log(`song ${curretsong} successfully added. Got id ${id}`);
  } catch (error) {
    console.log(`Failed to add ${curretsong}: ${error}`);
  }
}
