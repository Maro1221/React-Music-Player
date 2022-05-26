import Dexie from 'dexie';
import React,{useState, setName} from 'react';
import { useLiveQuery } from 'dexie-react-hooks'




export const db = new Dexie('mDatabase');
db.version(1).stores({
  music: '++id, name, song, album, artist', curretplay:  '++id, cname'
});



