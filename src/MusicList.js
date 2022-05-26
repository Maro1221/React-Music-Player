import React, { useState, useEffect } from "react";
import { useLiveQuery } from "dexie-react-hooks";

import { Song } from "./song.js";
import { db } from "./db.js";
import "./song.css";
import { Player } from "./player.js";

export function MusicList() {
  const [songId, setsongId] = useState(1);
  const [pMusic, setpMusic] = useState("");
  const [cMusic, setcMusic] = useState("");
  const [nMusic, setnMusic] = useState("");
  const [pause, setpause] = useState(true);
  const [repeat, setrepeat] = useState(0);
  const [Mduration, setMduration] = useState(0);
  const [mCurrentTime, setmCurrentTime] = useState(0);
  const [ActiveTab, setActiveTab] = useState(0);

  useEffect(() => {}, []);

  const music = useLiveQuery(() => db.music.toArray());

  console.log(music);
  const Songs = music?.map((music) => (
    <Song
      key={music.id}
      setpause={setpause}
      ActiveTab={ActiveTab}
      setActiveTab={setActiveTab}
      pause={pause}
      setnMusic={setnMusic}
      nMusic={nMusic}
      id={music.id}
      song={music.song}
      setcMusic={setcMusic}
      cMusic={cMusic}
      songId={songId}
      setsongId={setsongId}
      album={music.album}
      artist={music.artist}
      name={music.name}
    />
  ));

  useEffect(
    () => {
      if (music) {
        const binaryData = [];
        binaryData.push(music[songId - 1].song);

        const src = {
          srcSong: window.URL.createObjectURL(
            new Blob(binaryData, { type: "music/flac" })
          ),
        };

        console.log(src.srcSong);

        const audio = new Audio(src.srcSong);

        if (pMusic != "") {
          pMusic.pause();
          setmCurrentTime(0);
        }
        if (pause != true) {
          audio.play();
        }

        setTimeout(() => {
          console.log();
          setMduration(audio.duration);
          console.log(Mduration);
        }, 50);
        setpMusic(audio);
        audio.onended = function () {
          if (repeat == "1") {
            setcMusic("true");
          } else if (repeat == "2") {
            setsongId(Math.floor(Math.random() * nMusic) + 1);

            setcMusic("true");
          } else if (songId == nMusic) {
            setsongId(1);
            setcMusic("true");
          } else {
            setsongId(songId + 1);
            setcMusic("true");
          }
        };
      }

      setcMusic("false");
    },
    [cMusic],
    [pause]
  );

  return (
    <div className="   musicPleace">
      <table className="   d-inline-block  musicTable   table-dark  ">
        <thead>
          <tr>
            <th className="h5 " onClick={() => setActiveTab(0)} scope="col">
              Utwór
            </th>
            <th className="h5 " onClick={() => setActiveTab(1)} scope="col">
              Album
            </th>
            <th className="h5 " onClick={() => setActiveTab(2)} scope="col">
              Wykonawca
            </th>
          </tr>
        </thead>

        <tbody className=" d-inline-block">{Songs}</tbody>
      </table>
      {music && Object.keys(music).length > 0 ? (
        <Player
          Mduration={Mduration}
          setrepeat={setrepeat}
          mCurrentTime={mCurrentTime}
          setmCurrentTime={setmCurrentTime}
          repeat={repeat}
          artist={music[songId - 1].artist}
          songId={songId}
          setsongId={setsongId}
          setcMusic={setcMusic}
          setnMusic={setnMusic}
          nMusic={nMusic}
          cMusic={cMusic}
          setpause={setpause}
          pause={pause}
          setpMusic={setpMusic}
          pMusic={pMusic}
          album={music[songId - 1].album}
          name={music[songId - 1].name}
        />
      ) : (
        <Player />
      )}
    </div>
  );
}
