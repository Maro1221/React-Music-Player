import React from "react";
import { useLiveQuery } from "dexie-react-hooks";

import { db } from "./db.js";
import { Bar } from "./durationBar.js";

import "./player.css";

export function Player(props) {
  if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: props.name,
      artist: props.artist,
      album: props.album,
    });

    navigator.mediaSession.setActionHandler("play", function () {
      if (typeof music === "object") {
        if (typeof music === "object") {
          console.log(music[0]);

          props.pMusic.play();
          props.setpause(false);
        }
      }
    });
    navigator.mediaSession.setActionHandler("pause", function () {
      if (typeof music === "object") {
        if (typeof music === "object") {
          console.log(music[0]);
          props.pMusic.pause();
          props.setpause(true);
        }
      }
    });

    navigator.mediaSession.setActionHandler("previoustrack", function () {
      if (props.songId == 1) {
        props.setsongId(props.nMusic);
        props.setcMusic("true");
      } else {
        props.setsongId(props.songId - 1);
        props.setcMusic("true");
      }
    });
    navigator.mediaSession.setActionHandler("nexttrack", function () {
      if (props.nMusic == props.songId) {
        props.setsongId(1);
        props.setcMusic("true");
      } else {
        props.setsongId(props.songId + 1);
        props.setcMusic("true");
      }
    });

    navigator.mediaSession.setActionHandler("seekbackward", () => {
      if (props.mCurrentTime - 10 > 0) {
        props.pMusic.currentTime = parseFloat(props.mCurrentTime - 10);
        props.setmCurrentTime(parseFloat(props.mCurrentTime - 10));
      } else {
        props.pMusic.currentTime = parseFloat(0);
        props.setmCurrentTime(0);
      }
    });

    navigator.mediaSession.setActionHandler("seekforward", () => {
      if (props.mCurrentTime + 10 > props.Mduration) {
        props.pMusic.currentTime = parseFloat(props.Mduration - 1);
        props.setmCurrentTime(parseFloat(props.Mduration - 1));
      } else {
        props.pMusic.currentTime = parseFloat(props.mCurrentTime + 10);
        props.setmCurrentTime(props.mCurrentTime + 10);
      }
    });
  }

  const music = useLiveQuery(() => db.music.toArray());

  function next() {
    if (props.nMusic == props.songId) {
      props.setsongId(1);
      props.setcMusic("true");
    } else {
      props.setsongId(props.songId + 1);
      props.setcMusic("true");
    }
  }

  function onLoadedMetadata() {
    console.log("audioRef.current.duration");
  }
  function previous() {
    if (props.songId == 1) {
      props.setsongId(props.nMusic);
      props.setcMusic("true");
    } else {
      props.setsongId(props.songId - 1);
      props.setcMusic("true");
    }
  }

  const loppIcon = ["repeat", "repeat_one", "shuffle"];
  function loop() {
    if (props.repeat == 2) {
      props.setrepeat(0);
    } else {
      props.setrepeat(props.repeat + 1);
      console.log(props.repeat);
    }
  }
  console.log(props.pMusic);
  function pause(music) {
    if (typeof music === "object") {
      music.pause();
      props.setpause(true);
    }
  }

  function resume(music) {
    if (typeof music === "object") {
      music.play();
      props.setpause(false);
    }
  }
  return (
    <div className="player lg-hadow mt-4 pb-4">
      <audio onLoadedMetadata={() => onLoadedMetadata()}>
        <source src={props.pMusic} type="audio" />
      </audio>
      <div className="row">
        <div className="musicBox col-4  col-xl-2 text-start    ms-5">
          <p className="   name">{props.name}</p>

          <p className="statsSmall  sP  playerStats">{props.artist}</p>

          <p className=" statsSmall  sP playerStats">{props.album}</p>
        </div>
        <div className="col-7 playerBox col-xl-9">
          <Bar
            setcMusic={props.setcMusic}
            cMusic={props.cMusic}
            pMusic={props.pMusic}
            mCurrentTime={props.mCurrentTime}
            pause={props.pause}
            setmCurrentTime={props.setmCurrentTime}
            Mduration={props.Mduration}
          />

          <div className="buttons text-center ">
            <div
              onClick={() => previous()}
              className="musicPlayerIcon pointer material-symbols-outlined"
            >
              skip_previous
            </div>
            {props.pause == true ? (
              <div
                onClick={() => resume(props.pMusic)}
                className="musicPlayerIcon  pointer material-symbols-outlined"
              >
                play_arrow
              </div>
            ) : (
              <div
                onClick={() => pause(props.pMusic)}
                className="musicPlayerIcon   pointer material-symbols-outlined"
              >
                pause
              </div>
            )}
            <div
              onClick={() => next()}
              className="pointer musicPlayerIcon material-symbols-outlined"
            >
              skip_next
            </div>
            <div
              onClick={() => loop()}
              className="  material-symbols-outlined musicRepeatIcon pointer"
            >
              {loppIcon[props.repeat]}
            </div>
          </div>
          <div className=" Me  h6 text-end">
            <p className="">
            Made with ❤️ by Marek Wypych
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
