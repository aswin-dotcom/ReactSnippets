import { useEffect, useState } from 'react'
import './App.css'

//when the useEffect hook is with empty dependency array it called only during the intailization
//useEffect hooks dosen't call for re-render it only calls during the dependency array changes 
//  return function is called first in the useEffect 



function App() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    
    setCount(2)
  
    return ()=>{  // this return function is called first in the useEffect 
      setCount(null);  // this is used to clear memory leaks before updating anything using usestate
      console.log("memory cleared");
    }

  },[count])
 
  return (
    <>
     <div>{count}</div>
     <button onClick={()=> setCount((carrValue)=>carrValue+1)}>Add</button>
      
    </>
  )
}

export default App
