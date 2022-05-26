import React, { useEffect } from "react";

export function Bar(props) {
  const duration = props.Mduration;
  function handleChange(event) {
    props.pMusic.currentTime = parseFloat(event.target.value);
    props.setmCurrentTime(parseFloat(event.target.value));
  }

  function convertMS(value) {
    const sec = parseInt(value, 10);
    let minutes = Math.floor(sec / 60);
    let seconds = sec - minutes * 60;
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
  }

  useEffect(() => {
    if (props.pause == false) {
      const interval = setInterval(() => {
        props.setmCurrentTime(props.mCurrentTime + 0.2);
      }, 200);

      return () => clearInterval(interval);
    }
  }, [props.mCurrentTime, props.pause]);
  return (
    <div className=" mt-2">
      <div>
        <input
          className="Bar slider "
          type="range"
          name="volume"
          step="0.000000001"
          onChange={(event) => handleChange(event)}
          value={props.mCurrentTime}
          max={duration}
        ></input>
      </div>

      <div className="text-end col-12  playerStats">
        {convertMS(props.mCurrentTime)} / {convertMS(duration)}{" "}
      </div>
    </div>
  );
}
