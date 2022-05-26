import Dexie from 'dexie';
import React,{useState, setName} from 'react';
import { useLiveQuery } from 'dexie-react-hooks'
import { useEffect } from 'react';
import {db} from './db.js'

import './App.css';
import './song.css';

export function editName(){
 
    this.setState({
      isDisabled: false
    });
    setTimeout(() => {
    
      this.refArtist.current.focus()
    
    }, 50);
    }
    
    export function   enterName(){
      this.setState({
        isDisabled: true
      });
    
      db.music.update(this.props.id, {artist: this.state.valuePlaceHolder}).then(function (updated) {
        if (updated)
          console.log ("Friend number 2 was renamed to Number 2");
        else
          console.log ("Nothing was updated - there were no friend with primary key: 2");
      });}
    