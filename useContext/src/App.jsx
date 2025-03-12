import React, { createContext, useState } from 'react'
import Container from './Container'
import User from './User'
import Users from './Users'

export const them  = createContext();

const App = () => {
  const[light,Dark] =  useState('light');
 
  function handletoggle()
  {
     Dark((curr)=>curr=='light'?'Dark':'light');
    //  console.log(light)
  }
  return (
    <them.Provider value={{light}}>App
        <button onClick={handletoggle} >Toggle </button>
        <Container />
        <Users />
        <User />

    </them.Provider>
  
  )
}

export default App