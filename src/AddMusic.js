import Dexie from 'dexie';
import React,{useState, setName, useInsertionEffect} from 'react';
import { useLiveQuery } from 'dexie-react-hooks'
import { useEffect } from 'react';
import {Song} from './song.js'
import {db} from './db.js'





 
  export async function Add(name, song) {
  
  
    const artist ="nieznany"
    const album ="kliknij aby dodać"
      var nameSlice =name.slice(-4,-1)

if(nameSlice=='fla'){
  var lengthName = (name.length - 5 )

  name=name.slice(0, lengthName)

}
if(nameSlice=='.mp'){
  var lengthName = (name.length - 4 )

  name=name.slice(0, lengthName)

}





      
      
      try {




const id = await  db.music.add({
     
                  name, song, artist, album
                });

                console.log(`song ${song} successfully added. Got id ${id}`);
           
  
              } catch (error) {
                console.log(`Failed to add ${song}: ${error}`);
              }         
            }
       
        
        
        

       
    
      
  

 



 
