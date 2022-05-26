import Dexie from 'dexie';
import React,{useState, setName, useInsertionEffect} from 'react';
import { useLiveQuery } from 'dexie-react-hooks'
import { useEffect } from 'react';
import {Song} from './song.js'
import {db} from './db.js'








   
export  function AddMusic(props) {
  const [status, setStatus] = useState("");

 
  async function Add(name, song) {
  

    
      
      
      try {

                // Add the new friend!
                const id = await  db.music.add({
     
                  name, song
                });

                setStatus(`song ${song} successfully added. Got id ${id}`);
           
  
              } catch (error) {
                setStatus(`Failed to add ${song}: ${error}`);
              }         
            }
            Add(props.name, props.song)  }

       
    
      
  

 



 
