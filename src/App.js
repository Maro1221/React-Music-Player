import './App.css';
import {db } from './db.js'
import {Trail, } from './trial.js'
import {AddMusicForm } from './addmusicform.js'
import {MusicList } from './MusicList.js'
import { Navbar } from './navbar';



function App() {
  return (
   <>
   <Navbar/>
  <MusicList  />


  </>

  )
}

export default App;
