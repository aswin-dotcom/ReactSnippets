import React from 'react'
import { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  const [count,Setcount] = useState(0);

   useEffect(()=>{
    // Setcount((cur)=>cur+1)
    console.log("use Effect working")

   },[count]) //use Effect works after renndering of the virtual dom
   useLayoutEffect(()=>{
    console.log("useLayout working")
   },[count]) // useLayouteffect works durnig rendering of the virtual dom 
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>Setcount((cur)=>cur+1)}>add</button>
      
    </div>
  )


}

export default App



//useLayout effect mostly used in animation 