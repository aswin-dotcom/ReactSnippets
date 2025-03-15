import React, { useState } from "react";

const Home = () => {
  const [formdata, SetFormdata] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
  });

  const Changehandler = (event) => {
    const { name, value } = event.target;
    SetFormdata((CurrValue) => {
      return {
        ...CurrValue,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <lable>Name</lable>
      <input
        name="name"
        type="text"
        value={formdata.name}
        onChange={Changehandler}
      />
      <br />
      <lable>age</lable>
      <input
        name="age"
        type="text"
        value={formdata.age}
        onChange={Changehandler}
      />
      <br />
      <lable>email</lable>
      <input
        name="email"
        type="text"
        value={formdata.email}
        onChange={Changehandler}
      />
      <br />
      <lable>contact</lable>
      <input
        name="contact"
        type="text"
        value={formdata.contact}
        onChange={Changehandler}
      />
      <br />

      <button onClick={() => console.log(formdata)}>Add</button>
    </div>
  );
};

export default Home;
