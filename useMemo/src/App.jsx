import React, { useEffect, useMemo, useState } from "react";

function App() {
  const [number, Setnumber] = useState(0);
  const [light, Setlight] = useState(true);
  //const bignumber = slowfunction(number);// this slowfunction renders everytime when ever we change the state ...

  const bignumber = useMemo(() => {
    return slowfunction(number);
  }, [number]); // it keeps memory of the previous value .. and dosen't re-render  only calls when the dependcy variable changes

  // const theme = {
  //   backgroundColor: light ? "white" : "black",
  //   color: light ? "black" : "white",
  // }; // when ever the state value changes the component will re-render  the object will created another time with difference referenece and the following useEffect function is called  
  // this can be avoided by using the following useMemo

  const theme  = useMemo(()=>{
    return {
        backgroundColor: light ? "white" : "black",
        color: light ? "black" : "white",
      }
  },[light])

  useEffect(() => {
    console.log("Theme changed");
  }, [theme]);

 

  return (
    <div>
      <input value={number} onChange={(e) => Setnumber(e.target.value)} />
      <button onClick={() => Setlight((curvalue) => !curvalue)}>Toggle</button>
      <div style={theme}>{bignumber}</div>
    </div>
  );
}

export default App;
function slowfunction(num) {
  for (let i = 0; i < 10000000; i++) {
    /* empty */
  }
  return num * 2;
}



// Use useEffect when you want to perform side effects.
// Use useMemo to optimize performance and avoid expensive recalculations. 