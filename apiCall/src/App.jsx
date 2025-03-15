
import React, { useState } from 'react'
import axios from './axios'; //import axiios from the instance 

const App = () => {
  //  async function  apiCall() {
  //    const response  =  await fetch('https://v2.jokeapi.dev/joke/Any'); // fetch gives the overall response for the api 
  //    const data  = await response.json();// json() gives the data from the overall response
  //    console.log(data)
    
  //  }
  const [Joke,SetJoke]=useState('');
  
  async function  apiCall() {
      const response  =  await axios.get('/Any?type=single');// axios returns an object with an data property which has the payload (information)
     
      if(response){
        SetJoke(response.data.joke)
        console.log(Joke,"Joke");
        console.log(response.data.joke)
      }

      //  Joke  =  await response.data.joke
   
  }


  return (
    <div>
      <h1>Joke API:{Joke}</h1>
   
      <button onClick={apiCall}>Change Joke</button>
    </div>
  )
}

export default App