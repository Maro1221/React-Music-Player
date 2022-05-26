import Dexie from "dexie";

export const db = new Dexie("mDatabase");
db.version(1).stores({
  music: "++id, name, song, album, artist",
  curretplay: "++id, cname",
});
