import Dexie from 'dexie';
import React,{useState, setName,useRef } from 'react';
import { useLiveQuery } from 'dexie-react-hooks'
import { useEffect } from 'react';
import {db} from './db.js'
import {SongStats} from './songStats.js'
import {AddMusicForm} from './addmusicform.js'
import {Bar} from './durationBar.js'
import './navbar.css';
import logo from './11.png';

export function Navbar(){


return(
    <div className='Navbar'>
<div className='Row'>
    <div className=' ms-3  logoContainer'>

<img classname="logo" src={logo} alt="Logo" />
    </div>




<div className=' playerStats upload col-xl-9  col-md-8 col-sm-4	col-4 mt-5  text-right '>
Dodaj muzykę do biblioteki utwór ➜
</div>

 <AddMusicForm/>






    </div></div>
)
}