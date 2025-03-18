
import React from 'react'
import { useState } from 'react'
  
function App() {
  const[num,setNum]=useState(1);
  const handleclick=()=>{
    setNum((currVal)=>{
      return currVal+1;
    })
  }
  const  handlecremove = () =>{
    setNum((currVal)=>{
      return currVal-1;
    })
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={handleclick}>Add</button>
      <button onClick={handlecremove}>substract</button>
    </div>
  )
}

export default App