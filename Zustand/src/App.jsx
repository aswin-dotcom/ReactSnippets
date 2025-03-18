import React from "react";
import form from "./app/store";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const names = form((state) => state.name);
   const Addname = form((state) => state.Addname);

  const [input, setInput] = useState("");
  function handlesubmit() {
    Addname({
      id: uuidv4(),
      name: input,
    });
    setInput("");
    console.log(names);
  }
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handlesubmit}>Add me</button>
      {names && names.length > 0 ? (
        names.map((item) => (
          <p key={item.id}>{item.name}</p> // Proper mapping
        ))
      ) : (
        <div>no data</div>
      )}
    </div>
  );
};

export default App;
