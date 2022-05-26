import Dexie from 'dexie';
import React,{useState, setName, useInsertionEffect} from 'react';
import { useLiveQuery } from 'dexie-react-hooks'
import { useEffect } from 'react';
import {Song} from './song.js'
import {db} from './db.js'


export async function addFirstCurret(){
  const curretsong="nieznany"


  try {




    const id = await  db.curretplay.add({
         
      curretsong
                    });
    
               
                    console.log(`song ${curretsong} successfully added. Got id ${id}`);

      
                  } catch (error) {
                    console.log(`Failed to add ${curretsong}: ${error}`);
                  }  
                  
                  
    

}
