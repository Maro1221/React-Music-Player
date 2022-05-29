import React from "react";

import { db } from "./db.js";

import "./App.css";
import "./song.css";

export class Song extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      srcSong: "fdsfdsfdsfds.mp3",
      valuePlaceHolder: "",
      isDisabled: true,
      isClicked: false,
    };
    this.myRef = React.createRef();
    this.refArtist = React.createRef();
    this.refAlbum = React.createRef();
    this.refName = React.createRef();
  }

  onLoad() {
    this.props.setsongId(this.props.id);
    this.props.setcMusic("true");
    this.props.setpause(false);
  }

  editName() {
    this.setState({
      isDisabled: false,
    });
    setTimeout(() => {
      this.refName.current.focus();
    }, 50);
  }

  enterName() {
    this.setState({
      isDisabled: true,
    });

    db.music
      .update(this.props.id, { name: this.state.valuePlaceHolder })
      .then(function (updated) {
        if (updated) {
          console.log("Friend number 2 was renamed to Number 2");
        } else {
          console.log(
            "Nothing was updated - there were no friend with primary key: 2"
          );
        }
      });
  }

  editArtist(value) {
    this.setState({
      valuePlaceHolder: value,
    });

    this.setState({
      isDisabled: false,
    });

    setTimeout(() => {
      this.refArtist.current.focus();
    }, 50);
    console.log(Object.values(this.props.curretplay));
  }

  enterArtist() {
    this.setState({
      isDisabled: true,
    });

    db.music
      .update(this.props.id, { artist: this.state.valuePlaceHolder })
      .then(function (updated) {
        if (updated) {
          console.log("Friend number 2 was renamed to Number 2");
        } else {
          console.log(
            "Nothing was updated - there were no friend with primary key: 2"
          );
        }
      });

    setTimeout(() => {
      this.onLoad();
    }, 500);
  }

  enterAlbum() {
    this.setState({
      isDisabled: true,
    });

    db.music
      .update(this.props.id, { album: this.state.valuePlaceHolder })
      .then(function (updated) {
        if (updated) {
          console.log("alnum was renamed to");
        } else {
          console.log(
            "Nothing was updated - there were no friend with primary key: 2"
          );
        }
      });

    setTimeout(() => {
      this.onLoad();
    }, 500);
  }

  editAlbum() {
    this.setState({
      isDisabled: false,
    });
    setTimeout(() => {
      this.refAlbum.current.focus();
    }, 50);
  }

  changeValue(value) {
    this.setState({
      valuePlaceHolder: value,
    });
  }

  componentDidMount() {
    const x = db.music.count();

    x.then((value) => {
      this.props.setnMusic(value);
      console.log(this.props.nMusic);
    });
  }

  render() {
    return (
      <tr>
        <td
          className={`h5   pointer ${
            this.props.ActiveTab == 0 ? "Active" : "notActive"
          } `}
        >
          <span
            className="material-symbols-outlined material-symbols-play pointer"
            onClick={() => this.onLoad()}
          >
            play_circle
          </span>
          <span
            className="pointer"
            onClick={this.state.isDisabled ? () => this.onLoad() : undefined}
          >
            <input
              type="text"
              className="h5   pointer"
              onKeyPress={(e) => e.key === "Enter" && this.enterName()}
              onFocus={(e) => this.changeValue(e.target.value)}
              onChange={(e) => this.changeValue(e.target.value)}
              onBlur={() => this.enterName()}
              defaultValue={this.props.name}
              ref={this.refName}
              disabled={this.state.isDisabled}
            ></input>{" "}
          </span>
          <div
            onClick={(e) => this.editName(e.target.value)}
            defaultValue={this.props.name}
            className=" pointer fixEdit material-symbols-outlined material-symbols-edit"
          >
            edit
          </div>{" "}
        </td>
        <td
          className={`h5  pointer ${
            this.props.ActiveTab == 1 ? "Active" : "notActive"
          } `}
        >
          <input
            type="text"
            onKeyPress={(e) => e.key === "Enter" && this.enterAlbum()}
            onFocus={(e) => this.changeValue(e.target.value)}
            onChange={(e) => this.changeValue(e.target.value)}
            onBlur={() => this.enterAlbum()}
            defaultValue={this.props.album}
            ref={this.refAlbum}
            disabled={this.state.isDisabled}
          ></input>{" "}
          <span
            onClick={() => this.editAlbum()}
            className="ms-2  pointer material-symbols-outlined material-symbols-edit"
          >
            edit
          </span>
        </td>
        <td
          className={`h5  pointer ${
            this.props.ActiveTab == 2 ? "Active" : "notActive"
          } `}
        >
          <input
            type="text"
            onKeyPress={(e) => e.key === "Enter" && this.enterArtist()}
            onFocus={(e) => this.changeValue(e.target.value)}
            onChange={(e) => this.changeValue(e.target.value)}
            onBlur={() => this.enterArtist()}
            defaultValue={this.props.artist}
            ref={this.refArtist}
            disabled={this.state.isDisabled}
          ></input>{" "}
          <span
            onClick={() => this.editArtist()}
            className="ms-2  pointer material-symbols-outlined material-symbols-edit"
          >
            edit
          </span>
        </td>
      </tr>
    );
  }
}
