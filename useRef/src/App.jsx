import { useRef } from 'react'

import './App.css'
// inorder to display the enterinig value side by side we can use state else we use useref because useState causes  re-render everytime  but useRef didn't cause

function App() {
  // const [name, setName] = useState("");
  const referenece  =  useRef();
  function handlesubmit()
  {
    console.log(referenece.current.value);
    referenece.current.focus();
  }

  return (
    <>  
     <input ref={referenece} 
      // onChange={(event)=>setName(event.target.value)}
      /> 
     <button onClick={handlesubmit}> Submit</button>
    </>
  )
}

export default App
