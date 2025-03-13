import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/User";
import Users from "./Pages/Users";
import Error from "./Pages/Error";
import Navbar from "./Componets/Navbar";

const App = () => {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:username" element={<User/>}/>
        <Route path="/users" element={<Users />}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
