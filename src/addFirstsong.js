import Dexie from 'dexie';
import React,{useState, setName, useInsertionEffect} from 'react';
import { useLiveQuery } from 'dexie-react-hooks'
import { useEffect } from 'react';
import {Song} from './song.js'
import {db} from './db.js'


export async function fMusic() {
  const name  ="d"
  const song  ="d"
  const artist ="f"
  const album ="s"
  try {

    // Add the new friend!
    const id = await db.music.add({
      album,name,song,artist
    });


  } catch (error) {
  }
}


export async function fCurret() {
  const cname  =1
 
  try {

    // Add the new friend!
    const id = await db.curretplay.add({
     cname
    });


  } catch (error) {
  }
}



