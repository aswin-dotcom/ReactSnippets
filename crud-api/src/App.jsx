import axios from "./axios";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
const App = () => {
  const [items, setItems] = useState();
  const [input, setInput] = useState("");
  const [button,setButton] =  useState('ADD');
  const [update,setUpdate] = useState(null);
  async function data() {
    const response = await axios.get("/tasks");
    if (response) {
      setItems(response.data);
    }
  }
  useEffect(() => {
    data();
  }, [input]);
  async function addTask() {
    const post = await axios.post("/tasks", {
      id: uuidv4(),
      task: input,
    });
    if (post) {
      setInput("");
    }
  }
  async function handledelete(id) {
    const response =  await axios.delete(`/tasks/${id}`)
    if(response){
      data();
    }
  }
  
   function handleupdate(item){
    setButton('EDIT')
    setInput(item.task);
    setUpdate(item)
   
  }
  async function handleapiupdate(){
    const response =  await axios.patch(`/tasks/${update.id}`,{task:input})
    if(response){
     data();
     setInput('');
     setUpdate();
     setButton('ADD')

    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <button onClick={button=='EDIT'?()=>handleapiupdate():()=>addTask}>{button}</button>
      {items && items.length > 0 ? (
        items.map((data, index) => {
          return (
            <p key={data.id}>
              {" "}
              {data.task} <MdDelete onClick={() => handledelete(data.id)}  /><CiEdit onClick={()=>handleupdate(data)}/>
            </p>
          );
        })
      ) : (
        <div>No datra</div>
      )}
    </div>
  );
};

export default App;

//command to host a json data --> json-server --watch api.json(file name) --port  5000
