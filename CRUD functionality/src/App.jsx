import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
const App = () => {
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState("ADD");

  const [usersInfo, setUsersInfo] = useState({
    id: uuidv4(),
    name: "",
    age: "",
    email: "",
    contact: "",
  });
  function hangleonchange(event) {
    const { name, value } = event.target;
    setUsersInfo((current) => ({ ...current, [name]: value }));
  }
  function submit() {
    setButton("ADD");
    setUsers((current) => [...current, usersInfo]);
    setUsersInfo({
      id: uuidv4(),
      name: "",
      age: "",
      email: "",
      contact: "",
    });
    // console.log(users)
  }
  function handledelete(id) {
    setUsers(users.filter((item) => item.id !== id));
  }

  function startediting(item) {
    setUsersInfo(item);

    setButton("EDIT");
  }
  function EditData() {
    
    setUsers((value) => (
       value.map((item)=>item.id==usersInfo.id ? { ...item, ...usersInfo}:item)
    ));
    // users.map((item)=>(item.id==usersInfo.id))
    // console.log(users);
    setUsersInfo({
      id: uuidv4(),
      name: "",
      age: "",
      email: "",
      contact: "",

    })
    setButton("ADD");
 
  }

  return (
    <>
      <div className="form">
        <input
          type="text"
          placeholder="enter your name"
          name="name"
          value={usersInfo.name}
          onChange={(event) => hangleonchange(event)}
        />
        <br />
        <input
          type="text"
          placeholder="enter your age"
          name="age"
          value={usersInfo.age}
          onChange={(event) => hangleonchange(event)}
        />
        <br />
        <input
          type="text"
          placeholder="enter your email"
          name="email"
          value={usersInfo.email}
          onChange={(event) => hangleonchange(event)}
        />
        <br />
        <input
          type="text"
          placeholder="enter your contact"
          name="contact"
          value={usersInfo.contact}
          onChange={(event) => hangleonchange(event)}
        />
        <br />
        <button onClick={button == "EDIT" ? () => EditData() : () => submit()}>
          {button}
        </button>
      </div>
      <div className="dataTable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? (
              users.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>
                      <button onClick={() => startediting(item)}>Edit</button>
                      <button onClick={() => handledelete(item.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <div>No data found</div>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
