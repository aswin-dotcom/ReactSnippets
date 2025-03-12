import React, { useCallback, useState } from "react";
import List from "./List";

const App = () => {
  const [number, Setnumber] = useState(0);
  const [dark, Setdark] = useState(false);

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  // const getItems=()=>{
  //   console.log("getItems Changed")
  //   return [number+1,number+2,number+3]
  // }  this funcction will be generated every time the state changed


  const getItems = useCallback((incrementor)=>{  //when getItems function called with some parameter the anonyms function in the usecallbackfunction recevies the same parameter  and this can't done use useMemo
    console.log("getItems Changed")
    return [number+1+incrementor,number+2+incrementor,number+3+incrementor]
  },[number])
 
  return <div style={theme}>
    <input value={number} onChange={(e)=>Setnumber(parseInt(e.target.value)||0)} />
    <button onClick={()=>Setdark((curr)=>!curr)}>Toggle theme</button>
    <List getItems={getItems}/>


  </div>;
};

export default App;


//usecallback returns a function and usemmemo returns a variable 